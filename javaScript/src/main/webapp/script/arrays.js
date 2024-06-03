window.onload=function (){
  crearPaises();
  let colorHex = ["#F39C12","#C0F312","#12F3E5","#F312AF","#F31212"];
  crearLista(colorHex);
  cambiarColor(colorHex);

  function crearPaises(){
  let paises=["España","Portugal","Italia","Francia","Alemania","Belgica"];
  //lectura de un array con for simple
    let lista=document.querySelector(".lista");
    for (let i =0;i<paises.length; i++){
      let li=document.createElement("li");
      li.textContent=paises[i];
      lista.appendChild(li);
    }
  }
    function crearLista(colorHex){
    let listaColores=document.querySelector("#colores");
    for (let i=0; i<colorHex.length; i++){
      let option=document.createElement("option");
      option.textContent= String (i+1);
      option.setAttribute("value", String (i + 1));
      option.classList.add("colorSeleccionado");
      listaColores.appendChild(option);
    }
    }
    function cambiarColor(colores){
    let seleccion=document.querySelector("#colores");
    let cuadro=document.querySelector(".contenedor1");
    seleccion.addEventListener("change",function (){
      let valor=seleccion.value;
      cuadro.style.backgroundColor=colores[valor-1];
      //cuadro.style.height="500px";
    });

    //console.log(valor)

    }
}