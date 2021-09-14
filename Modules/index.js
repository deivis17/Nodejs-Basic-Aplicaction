const os = require('os');
const fs = require('fs');
const http = require('http');

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

