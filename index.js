const express = require('express');
const studentRouter = require('./routes/studentApi')


require("dotenv").config();
const app = express();
require('dotenv').config()

app.use("/student",studentRouter);


app.listen(2000, ()=>{

    console.log("Server start");
})

