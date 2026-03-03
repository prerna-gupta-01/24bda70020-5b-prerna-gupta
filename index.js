import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/students");
});