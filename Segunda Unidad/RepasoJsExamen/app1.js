var nombre = "Yoni Edilzar Escobar";
//var concatenacion = "Tu nombres: "+nombre + " Edad: "+edad+" años";

document.getElementById("datos");
datos.innerHTML = `<h2>Tu nombre es ${nombre} </h2>`;

//capturando la edad que esta en el formulario
function capturarDatos(){
    var edadPersona = document.getElementById("edad").value;
if(edadPersona>=18){
    datos.innerHTML="Eres Mayor de edad";
} 

}