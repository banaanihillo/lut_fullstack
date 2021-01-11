const express = require("express")
const app = express()
const heroicRouter = require("./routers/heroicRouter")

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
