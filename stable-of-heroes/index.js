const express = require("express")
const app = express()

app.get("/ping", (_request, response) => {
    response.json({
        "ping": "Pong"
    })
})

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Running the server on port ${port}.`)
})
