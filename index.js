import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://bekbolsunakimov333_db_user:wwwmongobd@cluster0.hrwp71s.mongodb.net/?appName=Cluster0")
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Steve Jobs",
      isStudent: true,
    },
    "randomPassword-1234"
  );
  res.json({
    succes: "Good job",
    token,
  });
});

app.listen(5555, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server Ok!");
});
