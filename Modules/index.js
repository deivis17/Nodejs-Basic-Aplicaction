const os = require('os');
const fs = require('fs');
const http = require('http');
const { formatWithOptions } = require('util');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('Total Memory: ', os.totalmem(), ' bytes');

fs.writeFile('./texto.txt', 'Texto de Ejemplo', function(err){
    if (err){
        console.log(err);
    }else{
        console.log('Archivo Creado');
    }
})

console.log('Prueba del funcionamiento asincrono');

fs.readFile('./texto.txt', function (err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

http.createServer(function (req, res){
    res.writeHead(200, {'Content-type_': 'text/html'});
    res.write('<h1>Hola Mundo</h1>');
    res.end(); 
}).listen(3000);

fs.writeFile('./texto2.txt', 'Archivo de Texto 2', (err) =>{
    if(err){
        console.log('No se ha podido crear el archivo');
    }else{
        console.log('Archivo Creado Existosamente!');
    }
})

fs.writeFile('./texto3','Ejemplo de archivo creado por el OS 3',(err)=>{
    if(err){
        console.log('Error 3');
    }else{
        console.log('Archivo 3 creado correctamente');
    }
})

fs.writeFile('./texto4.txt', 'Archivo 4 creado correctamente', (err)=>{
    if(err){
        console.log('Error 4');
    }else{
        console.log('Archivo 4 creado');
    }
})

fs.writeFile('./texto5.txt', 'Texto Número 5', (err)=>{
    if(err){
        console.log('Error archivo 5');
    }else{
        console.log('Archivo 5 creado');
    }
})

fs.readFile('./texto2.txt', (err, data)=>{
    if(err){
        console.log('Error');
    }else{
        console.log(data.toString());
    }
})

fs.readFile('./texto3.txt', (err,data)=>{
    if(err){
        console.log('Error al leer archivo 3');
    }else{
        console.log(data.toString(), 'Archivo 3 leído');
    }
})

fs.readFile('./texto4.txt', (err,data)=>{
    if(err){
        console.log('Un error ha ocurrido en el archivo 4');
    }else{
        console.log(data.toString(), ' LECTURA');
    }
})

fs.readFile('./texto5.txt', (err,data)=>{
    if(err){
        console.log('Error al leer el archivo 5');
    }else{
        console.log(data.toString());
    }
})

