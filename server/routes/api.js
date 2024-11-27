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

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1a2b3c",
      name: "Tech Innovators Conference 2024",
      description:
        "A gathering of technology leaders discussing the future of AI and robotics.",
      date: "2024-03-15",
    },
    {
      _id: "4d5e6f",
      name: "Green Future Summit",
      description:
        "An event focused on sustainable technologies and renewable energy solutions.",
      date: "2024-05-10",
    },
    {
      _id: "7g8h9i",
      name: "Culinary Arts Festival",
      description:
        "A weekend event showcasing gourmet food, cooking workshops, and live chef demos.",
      date: "2024-07-22",
    },
    {
      _id: "0j1k2l",
      name: "Annual Coding Hackathon",
      description:
        "A 48-hour competitive coding event for developers to solve real-world challenges.",
      date: "2024-04-08",
    },
    {
      _id: "3m4n5o",
      name: "Global Health Expo",
      description:
        "An international conference on advancements in healthcare and wellness.",
      date: "2024-09-12",
    },
    {
      _id: "6p7q8r",
      name: "Music and Arts Carnival",
      description:
        "A vibrant festival celebrating music, art installations, and cultural performances.",
      date: "2024-06-18",
    },
    {
      _id: "9s0t1u",
      name: "Startup Pitch Night",
      description:
        "An evening where startups present their ideas to potential investors and mentors.",
      date: "2024-03-30",
    },
    {
      _id: "2v3w4x",
      name: "Winter Charity Gala",
      description:
        "A formal event raising funds for local community projects and initiatives.",
      date: "2024-12-14",
    },
    {
      _id: "5y6z7a",
      name: "Space Exploration Forum",
      description:
        "A conference featuring talks by astronauts and scientists on the future of space travel.",
      date: "2024-08-05",
    },
    {
      _id: "8b9c0d",
      name: "Marathon for Mental Health",
      description:
        "A community run to promote awareness and support for mental health programs.",
      date: "2024-10-10",
    },
  ];
  res.json(events);
});

router.get("/special", (req, res) => {
  let specialEvents = [
    {
      _id: "sp1ev1",
      name: "The Last Performance of a Legendary Artist",
      description:
        "A farewell concert by one of the greatest musicians of all time, featuring a once-in-a-lifetime live experience.",
      date: "2025-09-15",
    },
    {
      _id: "sp2ev2",
      name: "First Public Dinner on the Moon",
      description:
        "An exclusive event hosted at the first lunar colony, combining fine dining with breathtaking lunar views.",
      date: "2032-11-20",
    },
    {
      _id: "sp3ev3",
      name: "The Royal Coronation Gala",
      description:
        "A grand gala celebrating the coronation of the youngest monarch in modern history.",
      date: "2026-06-01",
    },
    {
      _id: "sp4ev4",
      name: "The Billionaire Space Cruise Launch Party",
      description:
        "An extravagant celebration marking the first luxury cruise to orbit Earth for an entire week.",
      date: "2029-08-18",
    },
    {
      _id: "sp5ev5",
      name: "The Olympic Games Opening Ceremony in Antarctica",
      description:
        "The first-ever Winter Olympics hosted in Antarctica, featuring awe-inspiring performances under the aurora.",
      date: "2040-02-14",
    },
    {
      _id: "sp6ev6",
      name: "World Cup Final at a Floating Stadium",
      description:
        "The championship soccer match hosted in a groundbreaking, fully sustainable floating stadium.",
      date: "2038-07-22",
    },
    {
      _id: "sp7ev7",
      name: "100th Anniversary Broadway Revival",
      description:
        "A star-studded performance of the longest-running Broadway show on its 100th anniversary.",
      date: "2027-12-23",
    },
    {
      _id: "sp8ev8",
      name: "The Reopening of the Lost City of Atlantis",
      description:
        "An underwater expedition turned exclusive event as a discovered ancient city opens for guided tours.",
      date: "2035-10-10",
    },
    {
      _id: "sp9ev9",
      name: "Global Peace Summit Live Concert",
      description:
        "A one-night-only live concert by world-famous artists, celebrating a historic peace treaty signing.",
      date: "2026-04-22",
    },
    {
      _id: "sp10ev10",
      name: "First Contact Celebration Gala",
      description:
        "An exclusive event commemorating humanity's first official meeting with intelligent extraterrestrial life.",
      date: "2045-09-01",
    },
  ];
  res.json(specialEvents);
});

export default router;
