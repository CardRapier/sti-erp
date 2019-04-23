const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    document: { type: Number, required: true },
    name: {type: String, required:true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    role: {type: String, required: true}
}, { collection: 'user' })

module.exports = mongoose.model('User', UserSchema)