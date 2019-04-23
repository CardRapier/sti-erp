const express = require('express')
const router = express.Router()

const Storage = require('../../models/storage')

router.get('/',  (req, res) => {
    Storage.find().then(storage => res.json(storage))
})

router.get('/:id', async (req, res) => {
    const storage = await Storage.findById(req.params.id)
    res.json(storage)
})

router.post('/', async (req, res) => {
    const { name, direction, products, users } = req.body
    await new Storage({
        name,
        direction,
        products,
        users
    }).save()
    res.json({ status: 'Bodega guardada' })
})

router.put('/:id', async (req, res) => {
    const { name, direction, products, users } = req.body
    const newStorage = { name, direction, products, users }
    await Storage.findByIdAndUpdate(req.params.id, newStorage)
    res.json({ status: 'Bodega Actualizada' })
})

router.delete('/:id', async (req, res) => {
    await Storage.findByIdAndRemove(req.params.id)
    res.json({ status: 'Bodega eliminada' })
})

module.exports = router