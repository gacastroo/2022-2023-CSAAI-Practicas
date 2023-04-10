console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Leer la imagen del documento html
//-- Esta deshabilitada
const raccoon = document.getElementById("raccoon");

raccoon.onload = ()=> {
  //-- Insertar la imagen en el canvas, una vez que
  //-- ya esté cargada!
  ctx.drawImage(raccoon, 50, 50);
};