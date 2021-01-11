const heroicRouter = require("express").Router()

const notReallyHere = [
    {
        "id": "727272474bananananana7777",
        "name": "One",
        "number": 3
    }
]

heroicRouter.get("/ping", (_request, response) => {
    response.json({
        "kling": "Klingel klang"
    })
})

heroicRouter.get("/", (_request, response) => {
    const heroesForDummies = [
        {
            "name": "Six",
            "number": 43
        },
        {
            "name": "Four",
            "number": 63
        }
    ]
    response.json(heroesForDummies)
})

heroicRouter.get("/:id", (request, response) => {
    const foundHero = notReallyHere.find(hero => {
        return (hero.id === request.params.id)
    })
    if (!foundHero) {
        response.status(400).json({
            error: `No heroes with the id ${request.params.id} found.`
        })
    } else {
        response.json(foundHero)
    }
})

module.exports = heroicRouter
