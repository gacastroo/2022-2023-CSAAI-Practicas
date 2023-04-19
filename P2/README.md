 # Práctica 2
## ¡BOOM!


Para esta segunda práctica vamos a utilizar lo que sabemos sobre javascript para programar un juego sencillo.

Consiste en adivinar la clave secreta de cuatro números lo más rápido posible.

Para desarrollar este juego necesitarás implementar los siguientes componentes:

    Un espacio para mostrar la clave secreta compuesta por 4 números.
    Un espacio para mostrar el contador.
    Botones con los dígitos del 0 al 9.
    Y los botones Start, Stop y Reset.



## Funcionamiento

Para diseñar el funcionamiento del juego esto es lo que debe hacer cada uno de los botones.

Inicialmente todos los números de la clave secreta deben estar ocultos, o mostrar un carácter que lo oculte, como un asterisco.

La clave secreta es una combinación de números aleatorios de 0 a 9.

El color inicial de cada número de la clave secreta, y el color del acierto debe ser diferente.
Pulsando en un dígito

- Si no está iniciado pondrá en marcha el contador.

Comprobará si el dígito pulsado está en la clave secreta, y en caso de ser un acierto mostrará el número en lugar del asterisco.

Además, si es un acierto debe cambiar el color del número de la clave que ha acertado.
Y cuando acertamos todos los números de la clave secreta, se para el cronómetro.

### Start

Pone en marcha el cronómetro por primera vez o después de pulsar el botón de stop.

Pero No genera la clave secreta.


### Stop

Para el cronómetro.


### Reset

Pone a cero el cronómetro, y genera una nueva clave secreta, devolviendo el juego al estado inicial.


## Requisitos Generales

Tu juego estará compuesto de una página principal que se debe llamar index.html.

Muy recomendable utilizar crono.js para gestionar el cronómetro.

Tienes más detalles sobre cómo utilizarlo en los apuntes javascript.

**https://github.com/jesusgpa/2022-2023-CSAAI/wiki/Sesion-5-Javascript-II**

## Requisitos mínimos index.html

El estilo de tu juego es totalmente libre.

Se valorará que se adapte a dispositivos móviles.

Debes tener ficheros separados para el estilo css y la funcionalidad javascript.