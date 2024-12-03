import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routes/api";

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
