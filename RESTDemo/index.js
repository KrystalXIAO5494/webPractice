const express = require('express');
const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

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