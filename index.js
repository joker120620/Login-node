const express = require('express');
const app = express(); 
const cors=require('cors');  
app.use(cors()); 
app.use(express.json()); 

const datos={
  "email":"davidtoloza1234@hotmail.com", 
  "user":"juan",
  "pass":"1234"
}
app.get('/', (req, res)=>{ 
     res.send("Bienvenido \n ") 
 }) 
 app.post('/validar', (req, res) => {
   let  usuario=req.body.usuario
   let  pass=req.body.pass
   if(usuario ==datos.user && pass == datos.pass){
     let veri=true;
     res.json({ 
         "veri":veri
     }) 
   }else{
     let temp=[email, usuario, pass]
     datos.push(temp)
     let veri=false;
     res.json({ 
         "veri":veri
     }) 
   }
     
 });
app.post('/registrar', (req, res) => {
   let  usuario=req.body.usuario
   let  pass=req.body.pass
   let  email=req.body.email
   if((usuario !==datos.user || email!==datos.email)&& pass !== datos.pass){
     let veri=true;
     res.json({ 
         "veri":veri
     }) 
   }else{
     let veri=false;
     res.json({ 
         "veri":veri
     }) 
   }
     
 });
app.listen(3000, () => {
  console.log('iniciado en http://localhost:3000');
});
