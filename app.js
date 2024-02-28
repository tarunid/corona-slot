const express=require('express');
const mysql=require('mysql');
const Connection = require('mysql/lib/Connection');
const app=express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Taruni@03",
    database:"login_crud",
});
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mysql connection sucess");
    }
});

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>");
});

app.listen(5000,()=>{
    console.log("Server started @ port 5000");
});