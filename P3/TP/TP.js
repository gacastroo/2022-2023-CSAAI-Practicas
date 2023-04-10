//-- CANVAS --//
// Obtenemos el canvas y su contexto 2D//
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

//-- ELEMENTOS GRÁFICOS --//
// Obtenemos las imágenes del personaje, el proyectil y el objetivo//
const ashe = document.getElementById("ashe");
const arrow = document.getElementById("arrow");
const globo = document.getElementById("globo");

//-----------------SONIDOS--------------------
const audiol = new Audio("derrota.mp3");
const audiow = new Audio("victoria.mp3");
const audiof = document.getElementById("fondo.mp3")

//-- ELEMENTOS DE LA INTERFAZ --//
// Definimos los posibles estados del juego //
const STATUS = {
    INIT: 0, // Estado inicial
    OP: 1,  // El usuario está jugando
}

// Obtenemos los elementos de la interfaz //

const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    reset : document.getElementById("reset")
}

// Creamos un objeto Crono//
const crono = new Crono(gui.display);

//-- DESLIZADORES --//
// Obtenemos los elementos para ajustar el ángulo y la velocidad del proyectil /
const angleValue = document.getElementById("angle");
const angleValue_display = document.getElementById("angle_display");
const speedValue = document.getElementById("speed");
const speedValue_display = document.getElementById("speed_display");
//-- RANGOS --//
angleValue.oninput = () => {
    angleValue_display.innerHTML = angleValue.value;
    console.log(angleValue.value)
}
speedValue.oninput = () => {
    speedValue_display.innerHTML = speedValue.value;
    console.log(speedValue.value)
}
// Genera un número aleatorio entre min (incluido) y max (excluido)//
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
// Genera un array con una secuencia de números desde start hasta stop (excluido), con un intervalo de step entre ellos //
function range(start, stop=undefined, step=1) {
    const startArray = stop === undefined ? 0 : start;
    const stopArray = stop === undefined ? start : stop;

    return Array.from({length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}

//-- Dibuja canvas --//
function dibujar(img, x, y, size) {
    ctx.beginPath();
    ctx.drawImage(img, x, canvas.height - y, size, size);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

//-- Movimiento del proyectil --//
function movement(s, t) {
    var speedX = s * Math.cos((angle * Math.PI)/180);
    var speedY = s * Math.sin((angle * Math.PI)/180);
    x += speedX * t;
    y += speedY * t - 0.57 * g * t * t;
}

//-- Funcionamiento del juego--// 

//X0 es donde se posiciona el objetivo que es obtiene de forma aleatoria entre  200 y 700//
let x0 = getRandom(200, 700);
//y0 es la segunda coordenada del objetivo, (la altura) que en este caso no modificaremos //
const y0 = 95;
//x e y Las coordenadas del proyectil.
var x = 80;
var y = 142;

const g = 9.8;
//speed es la velocidad del proyectil//
var speed = 0;
speedValue.value = 0;
// angulo del proyectil//
var angle = 0;
angleValue.value = 0;
//tiempo transcurrido desde que se lanza el proyectil//
var time = 0;
// Estado en el que se encuentra el juego//
var state = STATUS.INIT;
outgame = false;

// Función que se ejecuta el bucle,corresponde al juego //
function game() {
    // Condición de victoria //
    if (range(Math.round(x0) - 30, Math.round(x0) + 30).includes(Math.round(x)) && range(Math.round(y0) - 50, Math.round(y0) + 50).includes(Math.round(y))) {
        crono.stop();
        state = STATUS.INIT;
        console.log("Victoria");
        alert("¡Has ganado!, Ashe ahora puede volver a la Liga de las leyendas");
        audiow.play();
    // Condición de derrota//
    } else if (y <= 90) {
        crono.stop();
        console.log("derrota");
        alert("¡Has perdido!, ¿Ahora que hará Ashe?");
        audiol.play();
    } 
    //Disparo//
    else {
        if (state == STATUS.OP) {
            speed = speedValue.value * 0.143;
            angle = angleValue.value;
            time += 0.04;
        } else {
            crono.stop();
            state = STATUS.INIT;
        }
        //Movimiento del proyectil//
        movement(speed, time);
        //limpiar el canvas//
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //-- Dibuja el Figura, Objetivo y proyectil//
        dibujar(ashe, 20, 165, 150);
        dibujar(globo, x0, y0, 70);
        dibujar(arrow, x, y, 90);
    
        requestAnimationFrame(game);
    }
}

// Funcion de los botones (funciones que detienen el cronómetro, restablecen las variables del juego y llaman a la función del juego para reiniciar el ciclo.) //
//Boton Start//
gui.start.onclick = () => {
    //Condición para que el jugador no pueda volver a disparar una vez haya ganado o perdido//
    if (outgame != true)
    {
    crono.start();
    outgame=true;
    state = STATUS.OP;
    }
    console.log("reset");
}
//Boton Reset//
gui.reset.onclick = () => {
        crono.reset();
        console.log("inicio");
        speed = 0;
        time = 0;
        outgame=false;
        x = 80;
        y = 142;
        x0 = getRandom(200, 700);
        state = STATUS.INIT;
        //Reiniciar animacion juego//
        requestAnimationFrame(game);
    }
    //audiof.onclick=() => {
        //click_sound.currentTime = 0;
        //click_sound.play();
    //}

//Ejecución del juego
game();