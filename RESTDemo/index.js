const { text } = require('express');
const express = require('express');
const app= express();
const path =require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set('view',path.join(__dirname,'view'))
app.set('view engine','ejs')

const comments =[
    {
        username:"todd",
        comments:'lol so funny'
    },
    {
        username:"amy",
        comments:'lol '
    },
    {
        username:"nancy",
        comments:'funny'
    },
    {
        username:"bob",
        comments:'lol funny'
    }
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})


app.get('/tacos',(req,res)=>{
    res.send("get/tacos response")
})
app.post('/tacos',(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`ok, here are your${qty}${meat}`)
})
app.listen(3000,()=>{
    console.log("on port 3000")
})

