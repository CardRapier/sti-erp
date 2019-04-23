const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

//Settings
app.set('port', process.env.PORT || 33000)

//Middlewares
app.use(express.json())

//Routes
const product = require('./routes/api/product.routes')
app.use('/api/products', product)
const storage = require('./routes/api/storage.routes')
app.use('/api/storages', storage)
const user = require('./routes/api/user.routes')
app.use('/api/users', user)


//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//DB config
const db = require('./config/keys').mongoURI

//Connectiong to mongo
mongoose.connect(db)
    .then(() => console.log('DB is connected..'))
    .catch(err => console.err(err))

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})