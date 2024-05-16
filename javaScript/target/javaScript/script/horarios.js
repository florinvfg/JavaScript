window.onload=function (){
let horario="";
let botones=document.querySelectorAll(".boton");//toma todos los elementos que tiene la clase boton y crea un array

    //array.forEach(arrayIntem=>{......})
    botones.forEach (pinchiado=>{
        console.log(pinchiado.value)
        pinchiado.addEventListener("click",function(){
            switch (pinchiado.value){
                case "l":{
                    horario="Lunes: De 9:00 a 14 | 16:00 a 19:00";
                    break;
                }
                case "m":{
                    horario="Martes: De 9:00 a 14 | 16:00 a 19:00";
                    break;
                }
                case "x":{
                    horario="Miercoles: De 9:00 a 14 | 16:00 a 19:00";
                    break;
                }
                case "j":{
                    horario="Jueves: De 9:00 a 14 | 16:00 a 19:00";
                    break;
                }
                case "v":{
                    horario="Viernes: De 9:00 a 14 | 16:00 a 19:00";
                    break;
                }
                case "s":{
                    horario="sabado: De 9:00 a 14 ";
                    break;
                }
                case "d":{
                    horario="Domingo: Cerrado";
                    break;
                }
            }
            document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;


        })
    })


}