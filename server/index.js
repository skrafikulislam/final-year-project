import express from "express";

const app = express();

import cors from "cors";
import mongoose from "mongoose";
import UserModel from "./UserModel.js";

app.use(express.json());
app.use(cors());

try {
  mongoose
    .connect(
      "mongodb+srv://babu:babu@cluster0.l6kiuqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("DataBase Connected");
    });
} catch (error) {
  console.log("Error Connectiong MongoDb");
}

app.post("/api/user", async (req, res) => {
  const { name, email, address, password } = req.body;
  const user = await UserModel.create({
    name,
    email,
    address,
    password,
  });
  res.status(200).json("User Created Successfully", user);
});

app.listen(8000, () => {
  console.log("Server is Running on Server 8000");
});
