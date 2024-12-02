import express from "express";
import bodyParser from "body-parser";
import api from "./routes/api.js";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api", api);
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(PORT, () => {
  console.log("Server running on localhost:" + PORT);
});
