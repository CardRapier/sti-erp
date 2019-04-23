const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true},
    type: { type: String, required: true }
}, { collection: 'product' })

module.exports = mongoose.model('Product', ProductSchema)