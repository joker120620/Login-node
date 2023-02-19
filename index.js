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
   let  email=req.body.email
   if((usuario ==datos.user || email==dato.user)&& pass == datos.pass){
     let veri=true;
     res.json({ 
         "veri":veri
     }) 
     console.log(datos)
   }else{
     
     let veri=false;
     res.json({ 
         "veri":veri
     }) 
   }
    console.log(datos)
 });
app.post('/registrar', (req, res) => {
   let  usuario=req.body.usuario
   let  pass=req.body.pass
   let  email=req.body.email
   if(usuario ==datos.user || email==datos.email){
     let veri=false;
     res.json({ 
         "veri":veri
     }) 
     console.log(datos)
   }else{
     let veri=true;
     res.json({ 
         "veri":veri
     })
     let temp=[email, usuario, pass]
     datos.push(temp)
   }
     console.log(datos)
 });
app.listen(3000, () => {
  console.log('iniciado en http://localhost:3000');
});
