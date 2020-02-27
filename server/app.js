require("dotenv").config();
require("./config/mongodb");
// require("./config/passport");

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const passport = require("passport");

// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
    session({
      cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
      resave: true,
      saveUninitialized: true,
      secret: process.env.SECRET_SESSION
    })
);

const corsOptions = {
    origin: [process.env.CLIENT_URL],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));



//------------------------------------------
// BASE BACKEND ROUTE
// ------------------------------------------

app.get("/", (req, res) => {
    res.send("backend server is running");
});


//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------








module.exports = app;