// // Pedir número mediante prompt y sumarle otro número en cada repetición
// let numero = parseInt(prompt("Ingresa un número:"));
// let otroNumero = parseInt(prompt("Ingresa otro número para sumar:"));

// while (!isNaN(numero) && !isNaN(otroNumero)) {
//     numero += otroNumero;
//     console.log("Resultado de la suma:", numero);
//     otroNumero = parseInt(prompt("Ingresa otro número para sumar (o presiona cancelar para salir):"));
// }

// // Pedir un texto mediante prompt, concatenar un valor en cada repetición, hasta que se ingresa "ESC"
// let texto = prompt("Ingresa un texto:");
// let valor = prompt("Ingresa un valor para concatenar:");

// while (texto !== "ESC" && valor !== null) {
//     texto += valor;
//     console.log("Texto concatenado:", texto);
//     valor = prompt("Ingresa un valor para concatenar (o 'ESC' para salir):");
// }

// // Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces
// let cantidad = parseInt(prompt("Ingrese una cantidad de veces para saludar:"));

// for (let i = 0; i < cantidad; i++) {
//     console.log("Hola");
// }


//saludo por veces pedidas



let cantidadDeSaludos = parseInt(prompt('ingrese las cantidades de veces que quiere ser saludado/a'))

for (let index = 0; index < cantidadDeSaludos; index++) {
    console.log('hola numero: ', cantidadDeSaludos)
}

let bucle = true
contador = 0

while(bucle !== null){
    contador += 1
    console.log('estas en el bucle: ', contador)
    bucle = prompt('ingresa una letra para continuar, si no, escape para salir')
}

