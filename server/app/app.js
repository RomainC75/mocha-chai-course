const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const cors = require('cors')

require('./model/db')

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded( {extended:true}))
app.use(bodyParser.json())

app.use('/test',require('./router/test.route'))
app.use('/api',require("./router/user"))

app.use((err, req, res, next)=>{
    res.status(500).json({
        message: "error !",
        error : err
    })
})

app.listen(port,()=>{
    console.log('server connected : ', port)
})


