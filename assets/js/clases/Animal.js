// Superclase Animal tiene 5 atriburos protegidos y 5 metodos
//Superclase recibe como argumentos nombre, edad, img, comentarios y sonido
//De la superclase heredaran las clases Leon, Lobo, Oso, Serpiente y Aguila
class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        //creamos las variables
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;

        //Cada una de las variables se deben retornan a traves de un getter
        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getSonido = () => Sonido;

        
        //se crea metodo setter que reasigna el valor de la variable Comentarios
        this.setComentarios = (comentarios) => (Comentarios = comentarios);
    }

    //creacion de los metodos
    get Nombre() {
        return this.getNombre();
    }

    get Edad() {
        return this.getEdad();     
    }

    get Img(){
        return this.getImg();
    }

    get Sonido() {
        return this.getSonido();     
    }

    set Comentarios(comentarios) {
        return this.setComentarios(comentarios);
    }
}

console.log(new Animal("Simba", 10, "gagagag", "esta sano", "miau")) 

export default Animal;