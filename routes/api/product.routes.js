const express = require('express')
const router = express.Router()

//Item Model
const Product = require('../../models/product')

router.get('/', (req, res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => res.json({status: err}))
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.json({status: err}))
    
})

router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
    })
    newProduct.save()
    .then(producto => res.json(producto))
    .catch(err => res.json({status: err}))
})

router.put('/:id', (req, res) => {
    Product.findById(req.params.id)
    .then(product => product.update({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
    }).then(
        res.json({status: "Updated"})
    ).catch(res.json({status: "Not updated"}))
    ).catch(res.json({status: "Not updated"}))
    
})

router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
    .then(product => product.remove().then(()=>res.json({status: 'Producto eliminado'})))
    .catch(err => res.json({status: 'No se ha podido eliminar'}))
})

module.exports = router