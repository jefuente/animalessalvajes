//Se importa Personajes del archico Consulta.js
import Animales from "./Consulta.js";

//Generar la interaccion  para cargar la imagen en el HTML, utilizando la ID = animal del select. 
//Al elemento de ID = animal se le agregara un evento click que ejecutara una funcion asincrona
document.getElementById("animal").addEventListener("click", async () =>{
    //El metodo getData es una funcion asincrona, lor lo que hay que esperar que termine la promesa
    const { animales } =await Animales.getData();
    console.log(animales);
    //en la constante pj guardamos el animal seleccionado por el usuario
    const pj = document.getElementById("animal").value;
    console.log(pj);
    //En la constante imagenesPjTemplate guardamos la etiqueta img con la imagen correspondiente al animal seleccionado
    const imagenesPjTemplate = `<img width="200" src="/assets/imgs/${pj}.jpg" />`;
    console.log(imagenesPjTemplate);
    
    //En el documento HTML, en el elemento de ID = preview agregamos la etiqueta con el animal seleccionado
    // guardada en la constante imagenesPjTemplate
    document.getElementById(
        "preview"
    ).innerHTML = imagenesPjTemplate;
});