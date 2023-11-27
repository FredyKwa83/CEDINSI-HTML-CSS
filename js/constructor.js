class Perfumes {
    constructor(nombre, cantidad){
        this.nombre=nombre;
        this.cantidad=cantidad;
    }
}

let miPerfume = new Perfumes("lacoste", 1);

// console.log(miPerfume.nombre)

class PerfumeHombre extends Perfumes{
    constructor(nombre, cantidad, fragancia){
        super(nombre, cantidad);
        this.fragancia=fragancia;
    }

    informacionPerfumeHombre(){
        return `Hola este perfume es ${this.nombre}, la cantidad es ${this.cantidad} y la fragancia es ${this.fragancia}`
    }
}

let perfumeUno = new PerfumeHombre("carolina Herrera", "120 ml", "citrica")
console.log(perfumeUno.informacionPerfumeHombre())
