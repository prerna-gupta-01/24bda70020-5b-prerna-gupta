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

// IMPORTANT: start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});