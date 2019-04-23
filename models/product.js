const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true},
    type: { type: String, require: true }
}, { collection: 'product' })



module.exports = mongoose.model('Product', ProductSchema)