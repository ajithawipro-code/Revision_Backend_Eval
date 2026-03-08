import express from "express";
import { addCourse, getAllCourses, getEnrollments} from "../controllers/courses.controller.js";


export const courseRoute = express.Router();

console.log("Enters here--->");


courseRoute.post("/addCourse", addCourse);
courseRoute.get("/allCourses", getAllCourses);
courseRoute.get("/:id/enrollments", getEnrollments)


