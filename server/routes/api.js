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

router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email })
    .then((user) => {
      if (!user) {
        res.status(401).send("Invalid email");
      } else if (user.password !== userData.password) {
        res.status(401).send("Invalid password");
      } else {
        res.status(200).send(user);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
