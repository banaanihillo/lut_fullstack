const heroicRouter = require("express").Router()
const Hero = require("../models/Hero")

heroicRouter.get("/", async (_request, response) => {
    const heroes = await Hero.find({})
    response.json(heroes)
})
//

heroicRouter.get("/:id", async (request, response) => {
    const foundHero = await Hero.findById(request.params.id)
    if (!foundHero) {
        response.status(404).json({
            error: `No heroes with the id ${request.params.id} found.`
        })
    } else {
        response.json(foundHero)
    }
})

heroicRouter.delete("/:id", async (request, response) => {
    const removedHero = await Hero.findByIdAndDelete(request.params.id)
    if (!removedHero) {
        return response.status(400).json({
            error: `Looks like ${request.params.id} does not exist.`
        })
    }
    response.status(204).json({
        info: `Successfully deleted ${request.params.id}.`,
        removedHero
    })
})

heroicRouter.post("/", async (request, response) => {
    if (!request.body.name) {
        return response.status(400).json({
            error: "The request should include at least a name."
        })
    }
    const newHero = new Hero(request.body)

    const savedHero = await newHero.save()
    response.json(savedHero)
})

heroicRouter.patch("/:id", async (request, response) => {
    const modifiedHero = await Hero.findByIdAndUpdate(
        request.params.id,
        request.body,
        {
            new: true
        }
    )
    response.json(modifiedHero)
})

module.exports = heroicRouter
