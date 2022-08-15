//Se importa el archivo Animal
import Animal from "./Animal.js";

//Se crean las subclases a partir de la clase Animal

//La clase Leon extiende de la clase Animal
class Leon extends Animal {
    //El constructor tiene la misma definicion que animal y va a heredar sus atributos mediante el metodo super
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    //La subclase añade el metodo respectivo del sonido emitido por el animal
    Rugir(){
        pass;    
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar(){
        pass;   
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Gruñir(){
        pass;   
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear(){
        pass;    
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar(){
        pass;   
    }
}

console.log(new Leon("Simba", "10", "gagagag", "esta sano", "miau")) 

export { Leon, Lobo, Oso, Serpiente, Aguila };