window.onload=function (){

  let boton=document.querySelector(".boton");
  boton.addEventListener("click",function (e){
      let nombre=document.querySelector("#nombre").value ;
      let edad=document.querySelector("#edad").value;
      let salida="";
      if (edad<12){
          salida="niño/a";
      }else if (edad>=13 && edad<=17){
          salida="adolescente/a";
      }else if (edad>=18 && edad<=64){
          salida="trabajador/a";
      }else {
          salida="jubilado/a";
      }
document.querySelector(".salida").innerHTML=`${nombre} tiene ${edad} años y es un ${salida}`;

    })


}