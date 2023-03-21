//Variable array con la clave secreta
var secretkey = [];
var win = 0;
//funcion para ramdomizar la clava secreta
function getRandomInt(min, max) {
    randomkey1 = Math.floor(Math.random() * (max - min)) + min;
    randomkey2 = Math.floor(Math.random() * (max - min)) + min;
    randomkey3 = Math.floor(Math.random() * (max - min)) + min;
    randomkey4 = Math.floor(Math.random() * (max - min)) + min;
    //document.getElementById('asterisco1').innerHTML = randomkey1;
    document.getElementById("asterisco1").innerHTML = "*"
    secretkey.push(randomkey1);
    //document.getElementById('asterisco2').innerHTML = randomkey2;
    document.getElementById("asterisco2").innerHTML = "*"
    secretkey.push(randomkey2);
    //document.getElementById('asterisco3').innerHTML = randomkey3;
    document.getElementById("asterisco3").innerHTML = "*"
    secretkey.push(randomkey3);
    //document.getElementById('asterisco4').innerHTML = randomkey4;
    document.getElementById("asterisco4").innerHTML = "*"
    secretkey.push(randomkey4);
}

window.alert('TIENES QUE ADIVINAR EL CODIGO SECRETO LO ANTES POSIBLE, BUENA SUERTE')

//inicio de la variable secreta y escribirla por consola
randomkey = getRandomInt(0, 9);
console.log(secretkey);

//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
    asterisco1 : document.getElementById("asterisco1"),
    asterisco2 : document.getElementById("asterisco2"),
    asterisco3 : document.getElementById("asterisco3"),
    asterisco4 : document.getElementById("asterisco4"),
}

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0, //Estado inicial
    OP1: 1, //Estado in game
    OP2: 2, //Estado de parada
}

 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado inicial
 let estado = ESTADO.INIT;  

//-- Función de retrollamada de los digitos
function digito(ev)
{
    //recibe un digito
    //Según en qué estado se encuentre la calculadora
    //hará una accion u otra
    if (estado == ESTADO.INIT) {

        //display2.innerHTML = ev.target.value;
        if (randomkey1 == ev.target.value) {
            gui.asterisco1.innerHTML = randomkey1
            asterisco1.style.color = "green";
            randomkey1 = 20;
        } else if (randomkey2 == ev.target.value) {
            gui.asterisco2.innerHTML = randomkey2
            asterisco2.style.color = "green";
            randomkey2 = 20;
        } else if (randomkey3 == ev.target.value) {
            gui.asterisco3.innerHTML = randomkey3
            asterisco3.style.color = "green";
            randomkey3 = 20;
        } else if (randomkey4 == ev.target.value) {
            gui.asterisco4.innerHTML = randomkey4
            asterisco4.style.color = "green";
            randomkey4 = 20;
        }

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;
        crono.start();

    }
    
    else if (estado == ESTADO.OP1){
        if (randomkey1 == ev.target.value) {
            gui.asterisco1.innerHTML = randomkey1
            asterisco1.style.color = "green";
            randomkey1 = 20;
        } else if (randomkey2 == ev.target.value) {
            gui.asterisco2.innerHTML = randomkey2
            asterisco2.style.color = "green";
            randomkey2 = 20;
        } else if (randomkey3 == ev.target.value) {
            gui.asterisco3.innerHTML = randomkey3
            asterisco3.style.color = "green";
            randomkey3 = 20;
        } else if (randomkey4 == ev.target.value) {
            gui.asterisco4.innerHTML = randomkey4
            asterisco4.style.color = "green";
            randomkey4 = 20;
        }
        estado = ESTADO.OP2;
    } 
    
    else {


        if (randomkey1 == ev.target.value) {
            gui.asterisco1.innerHTML = randomkey1
            asterisco1.style.color = "green";
            randomkey1 = 20;
        } else if (randomkey2 == ev.target.value) {
            gui.asterisco2.innerHTML = randomkey2
            asterisco2.style.color = "green";
            randomkey2 = 20;
        } else if (randomkey3 == ev.target.value) {
            gui.asterisco3.innerHTML = randomkey3
            asterisco3.style.color = "green";
            randomkey3 = 20;
        } else if (randomkey4 == ev.target.value) {
            gui.asterisco4.innerHTML = randomkey4
            asterisco4.style.color = "green";
            randomkey4 = 20;
        } 
        if (randomkey1 == 20  && randomkey2 == 20 && randomkey3 == 20 && randomkey4 == 20 ){
            console.log('WIN');
            console.log(crono.getCurrentTime())
            crono.stop();
            tiempo = (crono.getCurrentTime());
            if (win!=1) {
                window.alert('HAS GANADO'+ "  EN: " + tiempo);
                window.alert('DALE AL BOTON DE RESET SI QUIERES VOLVER A JUGAR Y SUPERAR TU MARCA');
                }
            win = 1;
        }

    }
}

digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {
    boton.onclick = (ev) => {
        digito(ev);
    }
}



//Resto de funciones de retrollamada
const crono = new Crono(gui.display);

//Resto de funciones de retrollamada
gui.start.onclick = () => {
    console.log("start");
    if (estado == ESTADO.OP2 & win != 1)
    {
        crono.start();
        console.log("Partida no ganada, inicio start")
    }
    if (randomkey1 != 20  && randomkey2 != 20 && randomkey3 !=  20 && randomkey4 != 20)
        {
            crono.start();
            console.log("Partida ganada, no inicio start")
        }
}
  
//Detener el cronómetro
gui.stop.onclick = () => {
    console.log("stop");
    crono.stop();
}

//Estado inicial
reset.onclick = () => {
    console.log('reset');
    estado = ESTADO.INIT;
    secretkey = [];
    randomkey  = getRandomInt(0, 9)
    console.log(secretkey)
    crono.stop();
    crono.reset();
    win = 0;
    asterisco1.style.color = "red";
    asterisco2.style.color = "red";
    asterisco3.style.color = "red";
    asterisco4.style.color = "red";
  }

  