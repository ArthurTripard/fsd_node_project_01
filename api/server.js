import mongoose from "mongoose";
import express from "express";
import config from "config";
import cors from "cors";

// import routers
import authRouter from "./src/routes/Auth.router.js";

mongoose
  .connect(config.get("DB_CONNECTION_STRING"))
  .then(() => console.log("Connected to db"))
  .catch(error => console.log(error));

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

// use routers
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
