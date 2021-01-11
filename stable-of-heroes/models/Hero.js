const mongoose = require("mongoose")

const heroSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    position: String,
    number: Number,
    description: String,
    heroicScore: Number
})

const Hero = mongoose.model("Hero", heroSchema)

module.exports = Hero
