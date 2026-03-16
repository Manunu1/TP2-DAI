import fs from 'fs';

fs.writeFileSync('archivo.txt', 'Este es el contenido original');
/*function copiar(nombreArchivo)
{
    const contenido = fs.readFileSync(nombreArchivo, 'utf-8');
    fs.writeFileSync(nombreArchivo, `${contenido}. HOLA ESTO ES NUEVO CONTENIDO`);
    return fs.readFileSync(nombreArchivo, 'utf-8');
}

console.log(copiar('archivo.txt'));*/
fs.renameSync('archivo.txt', 'archivoCambiad.txt');