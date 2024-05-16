window.onload = function() {
    // La función se ejecuta cuando toda la página ha terminado de cargarse.

    let horario = ""; // Inicializa la variable 'horario' como una cadena vacía.

    // Selecciona todos los elementos que tienen la clase 'boton' y los almacena en un array.
    let botones = document.querySelectorAll(".boton");

    // Itera sobre cada elemento del array 'botones'.
    botones.forEach(pinchiado => {
        // Imprime en la consola el valor del botón actual.
        console.log(pinchiado.value);

        // Añade un evento 'click' a cada botón.
        pinchiado.addEventListener("click", function() {
            // Utiliza una estructura switch para determinar el horario según el valor del botón.
            switch (pinchiado.value) {
                case "l": {
                    horario = "Lunes: De 9:00 a 14 | 16:00 a 19:00";
                    break; // Establece el horario para el lunes y sale del switch.
                }
                case "m": {
                    horario = "Martes: De 9:00 a 14 | 16:00 a 19:00";
                    break; // Establece el horario para el martes y sale del switch.
                }
                case "x": {
                    horario = "Miércoles: De 9:00 a 14 | 16:00 a 19:00";
                    break; // Establece el horario para el miércoles y sale del switch.
                }
                case "j": {
                    horario = "Jueves: De 9:00 a 14 | 16:00 a 19:00";
                    break; // Establece el horario para el jueves y sale del switch.
                }
                case "v": {
                    horario = "Viernes: De 9:00 a 14 | 16:00 a 19:00";
                    break; // Establece el horario para el viernes y sale del switch.
                }
                case "s": {
                    horario = "Sábado: De 9:00 a 14";
                    break; // Establece el horario para el sábado y sale del switch.
                }
                case "d": {
                    horario = "Domingo: Cerrado";
                    break; // Establece el horario para el domingo y sale del switch.
                }
            }
            // Selecciona el elemento con la clase 'horario' y actualiza su contenido HTML con el horario correspondiente.
            document.querySelector(".horario").innerHTML = "<h2>Horario</h2>" + horario;
        });
    });
};
