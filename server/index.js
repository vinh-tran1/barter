require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware

// routes

// connect to db and server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("connected to db & listening on port", PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
