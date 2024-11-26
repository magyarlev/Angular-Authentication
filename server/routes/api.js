import express from "express";
import mongoose from "mongoose";
import User from "../modules/user.js";

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

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user
    .save()
    .then((registeredUser) => {
      res.status(200).send(registeredUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
