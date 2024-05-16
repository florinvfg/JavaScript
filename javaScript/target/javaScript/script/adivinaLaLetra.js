window.onload=function () {
    //obtener el div donde se agragan los botones
    let divLetras = document.getElementById("divLetras");

    //crear un array contodas las letras de alfabeto
    let letras = 'abcdefghijklmnopqrstuvwxyz'.split('');

    //funcion para crear botones para cada letra y agregarlos al div
    function crearBotones() {
        letras.forEach(function (letra) {
            var boton = document.createElement("button");
            boton.textContent = letra.toUpperCase();//convertir en mayuscula
            boton.value = letra.toUpperCase();//agregar el valor de la letra
            boton.classList.add("boton");//agragar la clase boton
            boton.classList.add("boton-letra");//agragar boton-letra
            divLetras.appendChild(boton);
            console.log(boton.value);
        });
    }
    //llamar a la funcion para crear los botones
    crearBotones();
    let botones=document.querySelectorAll(".boton-letra");
    botones.forEach(letraSeleccionada =>{
      letraSeleccionada.addEventListener("click",function (){
          if (letraSeleccionada.value=="S"){
              document.querySelector(".resultado").innerHTML="Seleccion correcta-Adivinaste!"

          }else {
              document.querySelector(".resultado").innerHTML="Sigue intentandolo!"
          }
      })

    });

}











