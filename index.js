import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import routes from "./routes/route.js";
// import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
const PORT = 8080;
Connection();
app.get("/", (req, res) => {
  res.send("<h2>hi broh</h2>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
