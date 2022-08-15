//Primero es necesario hacer una consulta asincrona para obtener los atributos desde el archivo json

//Varieble animales va a ejecutar un modulo IIFE
let animales = (() =>{
    //constante url va a almacenar la direccion del archivo json
    const url ="http://localhost:5500/animales.json";
    //funcion asincrona getData va a almacenar una constante res y una constante data que
    // esperara la respuesta de la consulta al archivo json
    const getData = async () =>{
        const res = await fetch(url);
        //constante res espera que se resuelva la promesa del metodo json y se le asigna su valor a la constante data
        const data = await res.json();
        //se retorna la data que resulta de la consulta
        return data;
    };
    // se retorna el metodo getData
    return {getData};
})();
//exportamos la variable animales
export default animales;