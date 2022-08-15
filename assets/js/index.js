//Se importan las clases Leon, Lobo, Oso, Serpiente y Aguila desde el archivo Especies.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Especies.js";

//Se declara variable global animales como un arreglo vacio
let animales = [];

//Se crea la funcion que va a registrar a los animales en la tabla:
document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let comentarios = document.getElementById("comentarios");
    const pj = document.getElementById("animal").value;
    let imgSrc = `/assets/imgs/${pj}.jpg`;
    let sonido = "";

    let nuevoAnimal;

    if (nombre.value == "Leon") {
        nuevoAnimal = new Leon(nombre.value, edad.value, imgSrc, comentarios.value, sonido);
    } 
    else if (nombre.value == "Lobo") {
        nuevoAnimal = new Lobo(nombre.value, edad.value, imgSrc, comentarios.value, sonido);
    }
    else if (nombre.value == "Oso") {
        nuevoAnimal = new Oso(nombre.value, edad.value, imgSrc, comentarios.value, sonido);
    }
    else if (nombre.value == "Serpiente") {
        nuevoAnimal = new Serpiente(nombre.value, edad.value, imgSrc, comentarios.value, sonido);
    }
    else if (nombre.value == "Aguila") {
        nuevoAnimal = new Aguila(nombre.value, edad.value, imgSrc, comentarios.value, sonido);
    }

    animales.push(nuevoAnimal);
    console.log(animales);
    reloadTable();
});


//Funcion que carga la tabla con los animales registrados
const reloadTable = () => {
    const animalesTemplate = document.getElementById("Tabla");
    animalesTemplate.innerHTML = "";
    animales.forEach( (p,i) => {
        animalesTemplate.innerHTML+= `
            <div class="px-3 pb-2 col-4" data-animales="${p.getNombre()}">
                <div class="card">
                    <img src="${p.getImg()}" class="card-img-top"/>
                    <div class="card-body">
                        <h6 class="card-title">${p.getNombre()}</h6>
                        <hr class="w-50 mx-auto ">
                        <p class="card-text">Edad: ${p.getEdad()}</p>                    
                    </div>
                </div>
            </div>
        `;
    });
};
    


