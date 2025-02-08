import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import todoRouter from "./routes/todo.route.js";

// Configs
dotenv.config({});

/// Database connect
connectDB();

//-------------------------------------------------------------------- Default middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Required to send/receive cookies
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

//-------------------------------------------------------------------- API'S

app.use("/user", userRoute);
app.use("/todo", todoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
