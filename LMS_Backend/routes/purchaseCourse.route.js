import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCheckoutSeesion, stripeWebHook } from "../controllers/coursePurchase.controller.js";

const router = express.Router();

router.route("/checkout/create-checkout-session").post(isAuthenticated,createCheckoutSeesion)
router.route("/webhook").post(express.raw({type:"application/json"}), stripeWebHook);

// router.route("/course/:courseId/detail-with-status").get()

// router.route("/").get()

export default router;