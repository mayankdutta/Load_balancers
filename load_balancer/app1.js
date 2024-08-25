const express = require('express')
const app = express() 

const port = 3001; 

app.get('/', (req, res) => {
    res.send('hello from app1'); 
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
