const express=require('express');
const cors=require('cors');
const app=express();

//TODO: Settings
app.set('port',process.env.PORT || 4000);

//TODO: Middlewares
app.use(cors());
app.use(express.json());

//TODO: Routes
// app.get('/users',(req,res)=>res.send('RUTAS DE USUARIOS'))
// app.get('/users',(req,res)=>res.send('RUTAS DE NOTES'))
app.use('/api/usuarios',require('./routes/users'));
app.use('/api/notas',require('./routes/notes'));

module.exports=app;