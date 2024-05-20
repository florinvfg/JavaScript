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
    let letraAdivinar=letras[parseInt(Math.random()*26)].toUpperCase();
    console.log(letraAdivinar);
    let botones = document.querySelectorAll(".boton-letra");
    let contador=5;
    let interruptor=false;
    botones.forEach(letraSeleccionada => {
        // Agregar un evento click a cada botón
        letraSeleccionada.addEventListener("click", function () {
            // Verificar si el valor del botón es "S"

            if (letraSeleccionada.value == letraAdivinar) {
                // Si es "S", mostrar "Seleccion correcta-Adivinaste!"
                document.querySelector("#contadorFallas").innerHTML="";
                document.querySelector(".resultado").innerHTML = "Seleccion correcta-Adivinaste!";
                interruptor=true;
            } else {
                // Si no es "S", mostrar "Sigue intentándolo!"
                document.querySelector(".resultado").innerHTML = "Sigue intentándolo!";
                letraSeleccionada.disabled=true;
                letraSeleccionada.style.backgroundColor="blue";
                --contador;
                document.querySelector("#contadorFallas").innerHTML="Quedan "+contador+" intentos";
                if (contador==0){
                    interruptor=true;
                }
            }
            if (interruptor){
                for (let i=0;i<botones.length;i++){
                    botones[i].disabled=true;
                    botones[i].style.backgroundColor="blue";
                }


                let nuevaP= document.querySelector("#nuevaP");
                let salir=document.querySelector("#salir");
                nuevaP.style.display="block";
                salir.style.display="block";
                nuevaP.addEventListener("click",function (){
                    window.location.replace("adivinaLaLetra.jsp");
                })
                salir.addEventListener("click",function (){
                    window.location.replace("index.jsp");
                })


            }

        });

    });

}











