// Solicitar al usuario
var peso = prompt("Ingresa tu peso en kg:");
var altura = prompt("Ingresa tu altura en metros:");

// Calcular el IMC
const valorIMC = peso / (altura * altura);

// objeto que representa a la persona
var persona = {
  peso: peso,
  altura: altura,
  imc: imc
};

// Mostrar los resultados en la consola
console.log("Peso: " + persona.peso + " kg");
console.log("Altura: " + persona.altura + " m");
console.log("IMC: " + persona.imc);

// Mostrar los resultados en la página
document.write("<h2>Resultados del IMC</h2>");
document.write("<p>Peso: " + persona.peso + " kg</p>");
document.write("<p>Altura: " + persona.altura + " m</p>");
document.write("<p>IMC: " + persona.imc + "</p>");