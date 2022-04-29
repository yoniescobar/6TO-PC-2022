
function calcularArea() {
    //llamando a las variables del formularios
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
   //calcular area
    let area = (base*altura)/2;
   
    //mostrando el resultado en la caja div id=respuesta
    document.getElementById("respuesta");
    respuesta.innerHTML = `<br><h2>El area del triangulo es ${area}</h2>`;

}