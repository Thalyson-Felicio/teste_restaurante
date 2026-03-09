import express from 'express'
import PlatesControlers from '../controllers/plates.js'

const platesRouter = express.Router()

const platesControlers = new PlatesControlers()

platesRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await platesControlers.getPlates()

    res.status(statusCode).send({success, statusCode, body})
})

platesRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await platesControlers.addPlate(req.body)

    res.status(statusCode).send({success, statusCode, body})
})

platesRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await platesControlers.deletePlate(req.params.id)

    res.status(statusCode).send({success, statusCode, body})
})

platesRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await platesControlers.updatePlate(req.params.id, req.body)

    res.status(statusCode).send({success, statusCode, body})
})

platesRouter.get('/availables', async (req, res) => {
    const { success, statusCode, body } = await platesControlers.getAvailablePlates()

    res.status(statusCode).send({success, statusCode, body})
})

export default platesRouter