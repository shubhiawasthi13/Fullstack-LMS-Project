import Stripe from "stripe";
import { Course } from "../modal/course.modal.js";
import { CoursePurchase } from "../modal/coursePurchase.modal.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // fixed typo here

export const createCheckoutSeesion = async (req, res) => {
  try {
    const userId = req.id;
    const { courseId } = req.body; // destructure properly

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Create a new course purchase record
    const newPurchase = new CoursePurchase({
      courseId,
      userId,
      amount: course.coursePrice,
      status: "pending",
    });

    await newPurchase.save(); // don't forget to save

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud", // updated from inr to aud
            product_data: {
              name: course.courseTitle,
              images: [course.courseThumbnail],
            },
            unit_amount: course.coursePrice * 100, // cents for AUD
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/course-progress/${courseId}`,
      cancel_url: `${process.env.FRONTEND_URL}/course-detail/${courseId}`,
      metadata: {
        courseId: courseId,
        userId: userId,
      },
      shipping_address_collection: {
        allowed_countries: ["AU", "IN"], // updated to support AU
      },
    });

    if (!session.url) {
      return res.status(500).json({
        success: false,
        message: "Failed to create checkout session",
      });
    }

    // Save the Purchase record with payment ID
    newPurchase.paymentId = session.id;
    await newPurchase.save();

    return res.status(200).json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.log("Stripe Checkout Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to create checkout session",
    });
  }
};
