window.onload = function() {
    // Esta función se ejecuta cuando la ventana (y el documento HTML) ha terminado de cargarse

    let boton = document.querySelector(".boton");
    // Selecciona el primer elemento del documento con la clase "boton" y lo guarda en la variable 'boton'

    boton.addEventListener("click", function(e) {
        // Agrega un evento al botón que se ejecuta cuando el botón es clicado

        let nombre = document.querySelector("#nombre").value;
        // Selecciona el elemento con el id "nombre", obtiene su valor y lo guarda en la variable 'nombre'

        let edad = document.querySelector("#edad").value;
        // Selecciona el elemento con el id "edad", obtiene su valor y lo guarda en la variable 'edad'

        let salida = "";
        // Inicializa la variable 'salida' como una cadena vacía

        if (edad < 12) {
            salida = "niño/a";
            // Si la edad es menor a 12, asigna "niño/a" a la variable 'salida'
        } else if (edad >= 13 && edad <= 17) {
            salida = "adolescente/a";
            // Si la edad está entre 13 y 17 (inclusive), asigna "adolescente/a" a la variable 'salida'
        } else if (edad >= 18 && edad <= 64) {
            salida = "trabajador/a";
            // Si la edad está entre 18 y 64 (inclusive), asigna "trabajador/a" a la variable 'salida'
        } else {
            salida = "jubilado/a";
            // Si la edad es 65 o mayor, asigna "jubilado/a" a la variable 'salida'
        }

        document.querySelector(".salida").innerHTML = `${nombre} tiene ${edad} años y es un ${salida}`;
        // Selecciona el primer elemento del documento con la clase "salida" y establece su contenido HTML
        // a una cadena que incluye el nombre, la edad y la categoría correspondiente (salida)
    });
};
