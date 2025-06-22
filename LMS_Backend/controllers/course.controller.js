import { Course } from "../modal/course.modal.js";

export const createCourse = async (req, res) => {
  try {
    const { courseTitle, category } = req.body;

    if (!courseTitle && !category) {
      return res.status(400).json({
        success: false,
        message: "coursetitle and category required",
      });
    }
    const course = await Course.create({
      courseTitle,
      category,
      creator: req.id,
    });
    return res.status(201).json({
      course,
      success: true,
      message: "Course created successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create course",
    });
  }
};

export const getCreatorCourse = async (req, res) => {
  try {
    const userId = req.id;
    const courses = await Course.find({ creator: userId });
    if (!courses) {
      return res.status(404).json({
        courses: [],
        message: "course not found",
      });
    }
    return res.status(201).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to get courses",
    });
  }
};
