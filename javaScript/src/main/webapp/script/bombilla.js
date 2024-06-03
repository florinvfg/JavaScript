window.onload=function (){


    let bombilla=document.querySelector("#bombilla");
    interruptor=false;

    bombilla.addEventListener("click",function(){
        if(interruptor){
            bombilla.src="img/bombilla-off.gif"
            interruptor=false;
        }else{
            bombilla.src="img/bombilla-on.gif"
            interruptor=true;
        }

    })
}