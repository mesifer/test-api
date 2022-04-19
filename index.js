const express = require('express')
const app   = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const routes = require('./api/routes')
const user  = require('./api/routes/user')
const db  = require('./api/routes/db')

user.database.connect((err)=>{
    if (err) throw err;
    console.log('Database connected...')
})

global.db = user.database


app.get('/',routes.index)
app.get('/api/users',db.dbfetch)
app.post('/api/register',jsonParser,user.register)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})