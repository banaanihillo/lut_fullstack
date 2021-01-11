const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()
const heroicRouter = require("./routers/heroicRouter")

app.use(express.json())
app.use(cors())

mongoose
    .connect(
        process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    )
    .then(() => {
        console.log("Successfully connected to MongoDB.")
    })
    .catch((error) => {
        console.error(`Connection to Mongo unsuccessful: ${error}`)
    })

app.get("/ping", (_request, response) => {
    response.json({
        "ping": "Pong"
    })
})

app.use("/backend/heroes", heroicRouter)

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Running the server on port ${port}.`)
})
