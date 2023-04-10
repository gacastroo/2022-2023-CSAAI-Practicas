console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  
//-- Texto solido
ctx.font = "37px Arial";
ctx.fillStyle = 'green'
ctx.fillText("Texto sólido", 10, 30);

//-- Texto trazo
ctx.strokeStyle = 'yellow';
ctx.font = "50px Arial";
ctx.strokeText("Texto trazo", 105, 80);


ctx.closePath();

