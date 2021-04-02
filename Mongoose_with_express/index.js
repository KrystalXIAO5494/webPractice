const express = require('express');
const app = express();
const path = require('path');
const mongoose =require('mongoose');
const Product =require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand'),{useNewUrlParser:}


app.set('views', path.join(__dirname,'views'));
// set the view engine to ejs
app.set('views engine', 'ejs');
app.listen(3000, () => {
    console.log("Example app listening ")
}
)