const express=require('express');
const mysql=require('mysql');
const doenv=require("dotenv");
const path=require("path");
const Connection = require('mysql/lib/Connection');
const app=express();
doenv.config({
    path:"./.env",
});
const db=mysql.createConnection({
    host:process.env.DATABSE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
});
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mysql connection sucess");
    }
});
//console.log(__dirname);
const location=path.join(__dirname,"./public");
app.use(express.static(location));

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>");
});

app.listen(5000,()=>{
    console.log("Server started @ port 5000");
});