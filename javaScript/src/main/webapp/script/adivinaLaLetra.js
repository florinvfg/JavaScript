window.onload = function () {
    // Obtener el div donde se agregan los botones
    let divLetras = document.getElementById("divLetras");

    // Crear un array con todas las letras del alfabeto
    let letras = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // Función para crear botones para cada letra y agregarlos al div
    function crearBotones() {
        letras.forEach(function (letra) {
            var boton = document.createElement("button");
            boton.textContent = letra.toUpperCase(); // Convertir en mayúscula
            boton.value = letra.toUpperCase(); // Agregar el valor de la letra
            boton.classList.add("boton"); // Agregar la clase boton
            boton.classList.add("boton-letra"); // Agregar boton-letra
            divLetras.appendChild(boton); // Agregar el botón al div
            console.log(boton.value); // Imprimir el valor del botón en la consola
        });
    }

    // Llamar a la función para crear los botones
    crearBotones();

    // Seleccionar todos los botones con la clase "boton-letra"
    let botones = document.querySelectorAll(".boton-letra");
    botones.forEach(letraSeleccionada => {
        // Agregar un evento click a cada botón
        letraSeleccionada.addEventListener("click", function () {
            // Verificar si el valor del botón es "S"
            if (letraSeleccionada.value == "S") {
                // Si es "S", mostrar "Seleccion correcta-Adivinaste!"
                document.querySelector(".resultado").innerHTML = "Seleccion correcta-Adivinaste!";
            } else {
                // Si no es "S", mostrar "Sigue intentándolo!"
                document.querySelector(".resultado").innerHTML = "Sigue intentándolo!";
            }
        });
    });

}











