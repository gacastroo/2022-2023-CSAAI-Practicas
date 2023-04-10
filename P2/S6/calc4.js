console.log("Ejecutando JS...");

//-- Estados posibles de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
  }

//-- Variable de estado
//-- Por defecto su valor será el del estado inicial
let estado = ESTADO.INIT;

display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Función de retrollamada de los digitos
function digito( ev ) {

    
    if ( estado == ESTADO.INIT ) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else {

        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;

    }


}


//-- Obtener una colección con todos los elementos
//-- de la clase dígito
digitos = document.getElementsByClassName("digito")

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito
for (let boton of digitos) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito. Para que el código sea 
    //-- mas legible la función de retrollamada se
    //-- escribe como una función normal (digito)
    boton.onclick = digito;

}

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo operación
operaciones = document.getElementsByClassName("operacion")

for  (let boton of operaciones) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es una operación
    boton.onclick = (ev) => {
        display.innerHTML += ev.target.value;
        console.log("OPERACIÓN");
    }
}

//-------- Resto de funciones de retrollamada

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}