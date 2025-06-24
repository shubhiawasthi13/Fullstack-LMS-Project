import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  createCourse,
  createLecture,
  editCourse,
  getCourseById,
  getCourseLecture,
  getCreatorCourse,
  getLectureById,
  removeLecture,
  updateLecture,
} from "../controllers/course.controller.js";
import upload from "../utils/multer.js";
const router = express.Router();
router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getCreatorCourse);
router
  .route("/:courseId")
  .put(isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.route("/:courseId").get(isAuthenticated, getCourseById);
router.route("/:courseId/lectures").post(isAuthenticated, createLecture);
router.route("/:courseId/lectures").get(isAuthenticated, getCourseLecture);
router.route("/:courseId/lectures/:lectureId").post(isAuthenticated, updateLecture);
router.route("/lectures/:lectureId").delete(isAuthenticated, removeLecture);
router.route("/lectures/:lectureId").get(isAuthenticated, getLectureById);

export default router;
