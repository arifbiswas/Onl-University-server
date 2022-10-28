const express = require('express')
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express()
app.use(cors());

const courses = require('./data/courses.json')
const category = require('./data/category.json')

app.get('/',(req,res)=>{
    res.send('this server is running ')
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const selectedCourses = courses.find(c => c.courses_id == id) || {};

    res.send(selectedCourses)
})
app.get('/category',(req,res)=>{
    res.send(category)
})
app.get('/category/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    
    const selectedCourses = courses.find(c => c._id == id) || courses;

    res.send(selectedCourses)
})

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
})