import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://bekbolsunakimov333_db_user:wwwmongobd@cluster0.hrwp71s.mongodb.net/?appName=Cluster0")
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());


app.post("/auth/register", (req, res) => {
  
  
});

app.listen(5555, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server Ok!");
});
