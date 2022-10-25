const express = require('express')
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express()
app.use(cors());

app.get('/',(req,res)=>{
    res.send('this server is running ')
})

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
})