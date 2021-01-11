const heroicRouter = require("express").Router()

const heroesForDummies = [
    {
        "name": "Six",
        "number": 43
    },
    {
        "name": "Four",
        "number": 63
    },
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

    response.json(heroesForDummies)
})

heroicRouter.get("/:id", (request, response) => {
    const foundHero = notReallyHere.find(hero => {
        return (hero.id === request.params.id)
    })
    if (!foundHero) {
        response.status(404).json({
            error: `No heroes with the id ${request.params.id} found.`
        })
    } else {
        response.json(foundHero)
    }
})

heroicRouter.delete("/:id", (request, response) => {
    const filteredHeroes = heroesForDummies.filter(hero => {
        return (hero.id !== request.params.id)
    })
    response.json({
        info: `Successfully deleted ${request.params.id}.`,
        filteredHeroes
    })
})

heroicRouter.post("/", (request, response) => {
    if (!request.body.name) {
        return response.status(400).json({
            error: "The request should include at least a name."
        })
    }
    console.log(request.body)
    const updatedHeroes = heroesForDummies.concat(request.body)
    response.json(updatedHeroes)
})

heroicRouter.patch("/:id", (request, response) => {
    console.log(request.params.id)
    console.log(request.body)
    response.json({
        info: `Change(s) made to ${request.params.id}.`
    })
})

module.exports = heroicRouter
