function parsearUrl(url) 
{
   
    try
    {
         const urlObj = new URL(url);

        return{
        host: urlObj.host,
        pathname: urlObj.pathname,
        parametros: urlObj.parametros
    };

    } catch (error)
    {
        console.error('Error al parsear la URL:', error);
        return null;
    }

}
const resultado = parsearUrl('casa');
console.log(resultado);