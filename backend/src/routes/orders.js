import express from 'express'
import OrdersControlers from '../controllers/orders.js'

const ordersRouter = express.Router()

const ordersControlers = new OrdersControlers()

ordersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControlers.getOrders()

    res.status(statusCode).send({success, statusCode, body})
})

ordersRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControlers.addOrder(req.body)

    res.status(statusCode).send({success, statusCode, body})
})

ordersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControlers.deleteOrder(req.params.id)

    res.status(statusCode).send({success, statusCode, body})
})

ordersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControlers.updateOrder(req.params.id, req.body)

    res.status(statusCode).send({success, statusCode, body})
})

export default ordersRouter