//La desestructuración  Destrucring
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:2000,
    disponible: true
}



//destructuración
const {nombre,precio,disponible}=producto;
console.log(nombre);
console.log(precio- (precio * 0.50)+" Black Friday");
console.log(disponible);