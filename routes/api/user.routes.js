const express = require('express')
const router = express.Router()

//User model

const User = require('../../models/user')

router.get('/',(req,res) =>{
    User.find().then(users => res.json(users))
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
})

router.post('/login', (req,res) => {
    const { document, password } = req.body; 
    User.findOne({document: document,password:password}).then(user => res.json(user))
})

router.post('/', async (req, res) => {
    const { document, name, email, password, role } = req.body
    await new User({
        document,
        name,
        email,
        password,
        role
    }).save()
    res.json({ status: 'Usuario guardado' })
})

router.put('/:id', async (req, res) => {
    const { document, name, email, password, role } = req.body
    const newUser = { document, name, email, password, role }
    await User.findByIdAndUpdate(req.params.id, newUser)
    res.json({ status: 'Usuario Actualizado' })
})

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id)
    res.json({ status: 'Usuario eliminado' })
})



module.exports = router