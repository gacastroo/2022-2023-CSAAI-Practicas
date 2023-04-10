//-- Declaración de variables y objetos

//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;
let ldx = 50;
let ldy = 50;
let pcolor = "green"

//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = 600; //500; //getRandomXO(xomin,xomax);
let yo = 250; //370;

//-- Coordenadas iniciales del logo
let xlg = 5;
let ylg = 5;

//-- Leer la imagen del documento html
//-- Esta deshabilitada
var logo = document.getElementById("logo-urjc");

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");

//-- Definir el tamaño del canvas
canvas.width = 800;
canvas.height = 400;

//-- Obtener el contexto del canvas 2D
const ctx = canvas.getContext("2d");

//-- Dibujar los ejes
dibujarEjes();

//-- Dibujar el proyectil
dibujarP(xop, yop, ldx, ldy, pcolor); // Pintar el proyectil

//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el logo URJC
dibujarLogo(xlg, ylg); // Pintar el logo de la URJC

//-- Velocidad del proyectil
let velp = 3;

//-- Velocidad del logo
let velLg = 0.5;

//-- Función principal de actualización
function lanzar() 
{
    //-- Implementación del algoritmo de animación:

    //-- 1) Actualizar posición de los elementos
    //-- Actualizamos la velocidad del proyectil en el eje x
    xp = xp + velp;

    //-- Actualizamos la velocidad del logo en el eje x
    xlg = xlg + velLg;

    //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //-- Dibujar los ejes
    dibujarEjes();

    //-- 3) Pintar los elementos en el canvas
    ldx = 51;
    ldy = 51;
    pcolor = "blue";
    dibujarP(xp, yp, ldx, ldy, pcolor); // Pintar el proyectil

    //-- Dibujar el objetivo
    dibujarO(xo,yo); // Pintar el objetivo

    //-- Dibujar el logo
    dibujarLogo(xlg, ylg);

    //-- 4) Repetir
    requestAnimationFrame(lanzar);
}

//-- Otras funciones....

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    ctx.strokeStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}

//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}

// función para pintar los ejes
function dibujarEjes() {
    ctx.beginPath();

    //-- Línea horizontal
    ctx.moveTo(0, 250);
    ctx.lineTo(600, 250);
    
    //-- Línea vertical
    ctx.moveTo(600, 0);
    ctx.lineTo(600, 250);
    
    //-- Línea de fondo
    ctx.moveTo(600, 250);
    ctx.lineTo(800,400);
        
    ctx.strokeStyle = 'black';
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 4;
    
    //-- Dibujar el trazo
    ctx.stroke()
        
    ctx.closePath()    
}

//-- función para dibujar logo
function dibujarLogo(x,y) {
    ctx.drawImage(logo, x, y);
}

//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    lanzar();
}

//-- Función de retrollamada del botón iniciar
btnIniciar.onclick = () => {
    location.reload();
}