const express = require("express");
const router = new express.Router();

const userModel = require("../models/User")
const exerciseModel = require("../models/Exercise")

router.get("/dashboard", (req, res, next) => {
    exerciseModel
    .find()
    .populate("user")
    .then(userExercise => {
        res.status(200).json(userExercise)
    })
    .catch(next)
})





module.exports = router;