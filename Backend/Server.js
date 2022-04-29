const express = require('express')
require('dotenv').config();
const app = express();
const PORT = 5000;


app.get('/', (req,res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})