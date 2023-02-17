const http = require('http');

http.createServer((req, res)=>{

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.write('hola mundo');
    
    res.writeHead(201, {'Content-Type': 'text/plain'})
    
    /*const persona = {
        id:1,
        nombre:'Fernando'
    }
    
    res.write(JSON.stringify(persona));*/
    //console.log(req);
    
    res.write('id, nombre\n');
    res.write('1, Luis\n');
    res.write('2, Fer\n');
    res.write('3, Jose\n');
    res.write('4, Ruben\n');
    res.end();

}).listen(8081);

console.log('Escuchando el puerto ',8081);