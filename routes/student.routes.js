import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

// Show all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("students/index", { students });
});

// Show new form
router.get("/new", (req, res) => {
  res.render("students/new");
});

// Create student
router.post("/", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/students");
});

// Show edit form
router.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("students/edit", { student });
});

// Update student
router.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/students");
});

// Delete student
router.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/students");
});

export default router;