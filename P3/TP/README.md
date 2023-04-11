# Tiro Parabólico


Para esta tercera práctica vamos a utilizar lo que sabemos sobre javascript para programar un Tiro Parabólico.

Consiste en lanzar un proyectil para acertar a un objetivo.

Para conseguirlo, el proyectil debe describir un movimiento parabólico, en el enlace podrás encontrar una descripción y las ecuaciones del movimiento que deberás trasladar a tu juego. 

Para desarrollar este juego necesitarás implementar los siguientes componentes:

    -Un espacio que sirva de contenedor para el proyectil y el objetivo (¿Campo de tiro?).
    -Un display con el contador de tiempo para cronometrar el tiempo de vuelo del proyectil.
    -Un display para mostrar el resultado del lanzamiento.
    -Un deslizador para configurar el ángulo de salida del proyectil (recomendable utilizar valores mínimo y máximo).
    -Un deslizador para configurar la velocidad de disparo del proyectil (recomendable utilizar valores mínimo y máximo).
    -Un botón de disparo para lanzar el proyectil.
    -Un botón de inicio para reiniciar el juego.




## Funcionamiento

El objetivo (círculo de color rojo en la imagen) debe aparecer en una posición aleatoria cada vez que iniciamos el juego. 

Esa posición inicial estará sobre el eje positivo de las X, por la izquierda guardará cierta distancia con el proyectil, para que el tiro sea posible de acertar, y el límite por la derecha será el ancho de nuestro campo de tiro (canvas).

El proyectil (cuadrado de color verde en la imagen) estará siempre en la esquina inferior izquierda del campo de tiro.

Antes del lanzamiento podremos modificar con los deslizadores el ángulo de disparo y la velocidad para intentar acertar en el blanco.
Disparar

Cuando hemos fijado el ángulo y la velocidad, pulsando el botón de disparo el proyectil debe describir un movimiento parabólico para intentar alcanzar el objetivo.

En ese momento se pondrá en marcha el temporizador, que seguirá activo hasta que o bien el proyectil alcance el objetivo, o fallamos el tiro.
Iniciar

El botón de iniciar pone el juego en la posición de inicio, es decir el proyectil en la esquina inferior izquierda, el objetivo en una posición aleatoria y el timer a cero.
Caso de acierto

Se mostrará un mensaje indicando que hemos acertado en el blanco, y se quedará esperando el reinicio.
Caso de fallo

Se mostrará un mensaje indicando que hemos fallado el tiro, y se quedará esperando el reinicio.


## Requisitos Generales

Tu juego estará compuesto de una página principal que se debe llamar index.html.

Muy recomendable utilizar crono.js para gestionar el cronómetro.

Tienes más detalles sobre cómo utilizarlo en los apuntes javascript.

**https://github.com/jesusgpa/2022-2023-CSAAI/wiki/Sesion-5-Javascript-II**

Requisitos mínimos index.html

El estilo de tu juego es totalmente libre.

Se valorará que se adapte a dispositivos móviles.

Debes tener ficheros separados para el estilo css y la funcionalidad javascript.