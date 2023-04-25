 # Práctica 4
## Memory


1. Construir un juego de memoria además de aumentar tus conocimientos y mejorar tus habilidades con JavaScript, también puede ser bueno para tu memoria.

2. En esta cuarta práctica, mostraremos un tablero de tarjetas, cada una de las tarjetas se puede voltear y emparejar.

3. Si la pareja es correcta, hemos encontrado un match, y las cartas se seguirán mostrando.

4. Pero si no es una combinación correcta, se vuelven a ocultar.

5. El juego continúa hasta encontrar todas las parejas o reiniciar.




### Elementos que debe tener el juego


    * Botón para poner en marcha el juego.
    * Botón de reinicio del juego.
    * Un selector de posibles dimensiones del tablero con valores 2, 4, 6.
    * Un display que mostrará el número de movimientos total que hemos hecho, y el tiempo que ha pasado desde que ha empezado la partida.
    * Un tablero de tarjetas que puede tener las dimensiones 2, 4 o 6.


### Funcionamiento


Antes de iniciar el juego, podremos elegir las dimensiones del tablero.
Comenzar

Inicia el juego con el contador de movimientos y timer a cero.
Reiniciar

Nos permite reiniciar el juego al final de la partida sin necesidad de actualizar la página, o en medio de una partida.
Dimensiones

Nos permite seleccionar el número de dimensiones antes de comentar el juego, 2, 4 o 6. Y no podrá cambiar una vez el juego ha comenzado.
Movimientos

Acumula el número de movimientos necesario para resolver el tablero.

#### Timer

Acumula el tiempo transcurrido desde que damos al botón de comenzar o pulsamos una carta.

#### Carta

Si no se ha iniciado el juego, se iniciará al pulsar en cualquier carta.

Además, dará la vuelta a la carta que hemos seleccionado hasta un máximo de dos.

En ese momento comprobará si las dos cartas que hemos seleccionado son pareja.

#### Caso de acierto

Si hemos acertado las cartas se quedarán boca arriba.
#### Caso de fallo

Las cartas seleccionadas se vuelven a voltear.
Cuando encontramos todas las parejas

Mostraremos un mensaje al jugador indicando el número de movimientos que ha necesitado y el tiempo que ha transcurrido.

En ese momento podremos volver a comenzar el juego.
