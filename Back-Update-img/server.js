const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const cors = require('cors')

const app = express()

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yeremi224',
    database: 'images'
}))
app.use(cors())

app.use(require('./routes/routes'))

app.listen(3000, () => {
    console.log('server running on', 'http://localhost:' + 3000)
})