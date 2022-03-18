const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("Crud Application");
})

app.listen(PORT,()=>{console.log('Server is runnning on http://localhost:${PORT}')});