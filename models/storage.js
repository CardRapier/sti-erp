const Product = require('./product')
const mongoose = require('mongoose')
const { Schema } = mongoose

const StorageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    direction: {type: String, required:true},
    products: [
        { type: Schema.Types.ObjectId, ref:Product.modelName}],
    users: { type: Array, required: true },
    quantities: [
        {type: Array, requiered: true}
    ]
}, { collection: 'storage' })

module.exports = mongoose.model('Storage', StorageSchema)