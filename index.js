import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { validationResult } from "express-validator";


import { registerValidation } from "./validations/auth.js";

mongoose
  .connect(
    "mongodb+srv://bekbolsunakimov333_db_user:@cluster0.hrwp71s.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());


app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.json({
    success: true,
  })
  
});

app.listen(5555, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server Ok!");
});
