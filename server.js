require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')

const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Routes
app.use('/api/products', productRoute);
 
app.get('/', (req, res) => {
    res.send("hello node api")
})




mongoose.set('strictQuery', false)

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {

        console.log(`node api is running on port ${PORT}`)

    });

    console.log('connected to MongoDB')

}).catch((error) => {

    console.log(error)

})