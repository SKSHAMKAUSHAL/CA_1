require('dotenv').config()

const express =require('express');

const app = express();
const Port = 8080;
const {Resturant,Items}=require('./model/user') 

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello sksham kaushal")
})

app.listen(Port,()=>{
   console.log(`server is runnig at http://localhost: ${Port}`);
})
