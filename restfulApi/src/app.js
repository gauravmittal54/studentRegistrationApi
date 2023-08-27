const express = require("express");
require('./db/conn');
const Student = require('./models/students')
const StudentRouter = require('./routers/student')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(StudentRouter);


app.listen(port,(err)=>{
    console.log(`localhost running at port : ${port}`);
})