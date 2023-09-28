const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.status(200).send({data:"Welcome to VM Manoj"})
})

app.listen(5001,()=>{
 console.log("Listening to port 5001");
})