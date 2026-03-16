import axios from 'axios';
// Función que recibe un país y devuelve la moneda
async function obtenerMoneda(pais) {
  try {
    const url = `https://restcountries.com/v3.1/name/${pais}`;
    const response = await axios.get(url);

    const countryInfo = response.data[0];

    const currencies = countryInfo.currencies;

    if (currencies) {
      const moneda = Object.values(currencies)[0].name;
      return moneda;
    } else {
      return "No se encontró información de la moneda.";
    }
  } catch (error) {
    return "Error al obtener la información.";
  }
}

(async () => {
  console.log(await obtenerMoneda("Argentina")); 
  console.log(await obtenerMoneda("Japan"));     
})();