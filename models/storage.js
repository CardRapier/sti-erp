const mongoose = require('mongoose')
const { Schema } = mongoose

const StorageSchema = new Schema({
    name: { type: String, required: true },
    direction: {type: String, required:true},
    products: { type: Array, required: true},
    users: { type: Array, required: true }
}, { collection: 'storage' })

module.exports = mongoose.model('Storage', StorageSchema)