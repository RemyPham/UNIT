const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required
    },
    unit1Type: {
        type: String,
        enum: ["kg", "cal"],
        required
    },
    unit2Type: {
        type: String,
        enum: ["rep", "min"],
        required
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
    data: {
        unit1Data: {
            type: Number,
            required,
        },
        unit2Data: {
            type: Number,
            required,
        },
        date: {
            type: Date,
            default: Date.now()
        },
        mood: {
            type: String,
            enum: ["bad", "ok", "good", "easy"],
            required,
        }
    }
})

const exerciseModel = mongoose.model("Exercise", exerciseSchema);

module.exports = exerciseModel;