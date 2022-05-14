const prototipoCarrito ={
    productos:[],
    agregarProducto: function(producto){ //agregar elementos al vector
        this.productos.push(producto)
    },
    obtenerPrecioTotal: function(){

        return this.productos.reduce((total, p)=>total + p.precio, 0);
    }

}

//Creando el producto

const carrito1 = Object.create(prototipoCarrito)
carrito1.agregarProducto({nombre: "naranjas",precio:1.50})
carrito1.agregarProducto({nombre: "limon",precio: 1.25})

console.log(carrito1.obtenerPrecioTotal())





