import express from "express";
import { enrollStudent } from "../controllers/enrollment.controller.js";
import { validateStudent } from "../middlewares/validation.middleware.js";

export const enrollRoute = express.Router();

enrollRoute.post("/enroll", validateStudent, enrollStudent);