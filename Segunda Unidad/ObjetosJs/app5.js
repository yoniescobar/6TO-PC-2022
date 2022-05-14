const producto ={
    nombre: "Monitor 20 pulgadas",
    precio:2000,
    disponible: true,
        informacion:{
            medida: {
                peso: "1kg",
                medida: "1m"
            },
            fabricacion:{
                pais: "china"
            }
        }
}

console.log(producto.informacion.fabricacion.pais)