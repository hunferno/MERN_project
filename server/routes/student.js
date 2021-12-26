import express from "express";
//IMPORT DU SCHEMA
import student from "../models/student.js";
//IMPORT DE LA LOGIQUE FROM CONTROLLERS
import { getStudents, createStudent } from "../controllers/student.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

export default router;
