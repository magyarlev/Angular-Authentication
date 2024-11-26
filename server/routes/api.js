import express from "express";
import mongoose from "mongoose";

const router = express.Router();
const db = "mongodb://localhost:27017/";

try {
  await mongoose.connect(db);
  console.log("Connected to mongodb");
} catch (error) {
  console.error(error);
}

router.get("/", (req, res) => {
  res.send("From API route");
});

export default router;
