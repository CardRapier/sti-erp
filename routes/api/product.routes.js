const express = require('express')
const router = express.Router()

//Item Model
const Product = require('../../models/product')

router.get('/',  (req, res) => {
    Product.find().then(products => res.json(products))
})

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
})

router.post('/', async (req, res) => {
    const { name, price, type } = req.body
    await new Product({
        name,
        price,
        type
    }).save()

    res.json({ status: 'Producto guardado' })
})

router.put('/:id', async (req, res) => {
    const { name, price, type } = req.body
    const newProduct = { name, price, type }
    await Product.findByIdAndUpdate(req.params.id, newProduct)
    res.json({ status: 'Producto Actualizado' })
})

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndRemove(req.params.id)
    res.json({ status: 'Producto eliminado' })
})

module.exports = router