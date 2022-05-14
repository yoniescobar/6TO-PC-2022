
//objeto literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1300,
    disponible: true
}

console.log(producto) //muestra el atributo y valor

//objeto literal persona
const paciente = {
    nombre: "Jose Antonio López",
    edad: 45,
    direccion: "25 avenida 2-22 zona 8, Quetgo",
    colorOjos: "Cafe claro"
}

console.log(paciente) //muestra todos los datos
console.log(paciente.nombre) //solo muestra el valor de nombre

//agregar nuevas propiedades al objeto
paciente.sintomas = "Tiene diarrea "
console.log(paciente)

//eliminar propiedad
delete paciente.colorOjos;

console.log(paciente)
