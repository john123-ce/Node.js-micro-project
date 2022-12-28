const express =require('express')

const app = express()

app.get('/', function (req, res) {
    res.send({success:true })
})

app.listen(4000)