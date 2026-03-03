import Student from "../models/student.model.js";

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.render("students/index", { students });
};

export const createStudent = async (req, res) => {
  await Student.create(req.body);
  res.redirect("/students");
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/students");
};