//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
//body = document.getElementsByTagName('body')[0]

const display_container = document.getElementById("disp_tecla");


//-- Tecla pulsada: Mostrar su información
window.onkeydown = (e)=> {
    
    display.innerHTML = `Tecla: ${e.key}. Código: ${e.keyCode}`

    //-- Comprobar si la tecla es un espacio
    if (e.key == ' ') {

        //-- Cambiar la activación de la clase color
        //body.classList.toggle("color");
        display_container.classList.toggle("color");
      }
}

//-- Tecla liberada: Borrar el párrafo
window.onkeyup = (e) => {
  display.innerHTML = ""
}
