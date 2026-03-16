function parsearUrl(url) 
{
    const urlObj = new URL(url);



    return{
        host: urlObj.host,
        pathname: urlObj.pathname,
        parametros: urlObj.parametros
    };
    
}
const resultado = parsearUrl('https://campus.ort.edu.ar/secundaria/almagro/informatica/2026-ni5b/desarrollo-de-aplicaciones-informaticas-5');
console.log(resultado);