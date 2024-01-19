import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import userRouter from "./routes/user.route.js";
// import itemRouter from "./routes/items.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/user", userRouter);

// connect to db & server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("✅ connected to db & listening on port", PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
