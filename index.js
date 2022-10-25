const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors);

const port = process.env.PROT || 5000

app.get('/',(req,res)=>{
    res.send('Is ti running');
})

app.listen(port,()=>{
    console.log('this is site run are',port);
})
