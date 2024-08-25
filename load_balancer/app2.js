const express = require('express')
const app = express() 

const port = 3002; 

app.get('/', (req, res) => {
    res.send('hello from app2') 
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
