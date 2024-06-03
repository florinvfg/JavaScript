window.onload = function () {
  // Llama a la función para crear la lista de países cuando la ventana se carga
  crearPaises();

  // Define un array de colores en formato hexadecimal
  let colorHex = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];

  // Llama a la función para crear la lista de colores con el array de colores
  crearLista(colorHex);

  // Llama a la función para cambiar el color de fondo basado en la selección de la lista de colores
  cambiarColor(colorHex);

  // Llama a la función para cambiar el color de fondo basado en el valor del input de color
  cambiarColorInput();

  // Función para crear la lista de países
  function crearPaises() {
    // Define un array de nombres de países
    let paises = ["España", "Portugal", "Italia", "Francia", "Alemania", "Belgica"];
    paises.sort();//para ordenar el array
    //agregar al final de array a Holanda
    paises.push("Holanda");
    //agregar a principio
    paises.unshift("Reino Unido");

    // Selecciona el elemento de la lista en el DOM
    let lista = document.querySelector(".lista");

    // Itera a través del array de países
    for (let i = 0; i < paises.length; i++) {
      // Crea un nuevo elemento de lista
      let li = document.createElement("li");

      // Establece el texto del elemento de lista al nombre del país
      li.textContent = paises[i];

      // Añade el elemento de lista a la lista en el DOM
      lista.appendChild(li);
    }
    let listaNueva=[1,2,3,4,5,6,7,8,9];
    //eliminar un elemento del principio
    listaNueva.shift();
    //eliminar un elemento del final
    listaNueva.pop();
    console.log(listaNueva);
    //eliminar por posicion y varios elementos
    listaNueva.splice(3,3);
    console.log(listaNueva);
    //añadir varios elementos al principio
    listaNueva.unshift(1,2,3,4);
    console.log(listaNueva);
    //añadir varios elementos al final
    listaNueva.push(10,11,12);
    console.log(listaNueva);
  }

  // Función para crear la lista de colores
  function crearLista(colorHex) {
    // Selecciona el elemento select en el DOM
    let listaColores = document.querySelector("#colores");

    // Itera a través del array de colores
    for (let i = 0; i < colorHex.length; i++) {
      // Crea un nuevo elemento de opción
      let option = document.createElement("option");

      // Establece el texto del elemento de opción
      option.textContent = String(i + 1);

      // Establece el atributo value del elemento de opción
      option.setAttribute("value", String(i + 1));

      // Añade una clase al elemento de opción
      option.classList.add("colorSeleccionado");

      // Añade el elemento de opción al select en el DOM
      listaColores.appendChild(option);
    }
  }

  // Función para cambiar el color de fondo basado en la selección del select
  function cambiarColor(colores) {
    // Selecciona el elemento select en el DOM
    let seleccion = document.querySelector("#colores");

    // Selecciona el elemento contenedor en el DOM
    let cuadro = document.querySelector(".contenedor1");

    // Añade un evento de escucha para cambios en la selección del select
    seleccion.addEventListener("change", function () {
      // Obtiene el valor seleccionado
      let valor = seleccion.value;

      // Cambia el color de fondo del contenedor al color correspondiente del array
      cuadro.style.backgroundColor = colores[valor - 1];

      // Descomentar la línea siguiente si quieres cambiar la altura del contenedor
      // cuadro.style.height = "500px";
    });
  }

  // Función para cambiar el color de fondo basado en el valor del input de color
  function cambiarColorInput() {
    // Selecciona el elemento input de color en el DOM
    let input = document.querySelector("#colorInput");

    // Selecciona el elemento body en el DOM
    let cuadro = document.querySelector("body");

    // Añade un evento de escucha para cambios en el valor del input de color
    input.addEventListener("change", function () {
      // Cambia el color de fondo del body al valor seleccionado en el input
      cuadro.style.backgroundColor = input.value;
    });
  }
}
