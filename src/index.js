require('dotenv').config();
const app=require('./app.js');
require('./database');

async function main(){
    await app.listen(app.get('port'));
    console.log('Servidor en el puerto',app.get('port'));
}

main();

// app.listen(4000,()=>console.log('Server on port 4000'));