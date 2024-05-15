window.onload = function() { // La función se carga después de que el HTML se haya cargado por completo

    document.querySelector(".parrafo").innerHTML = "Es una prueba con selector";
    //document.write("Es una prueba desde el archivo js externo sin selector"); // No se utiliza mucho

    /**
     * Para seleccionar elementos podemos hacerlo por:
     * - id
     * - clase
     * - etiqueta
     * - name
     * - comodín: querySelector, que incluye todas las anteriores.
     * - querySelectorAll: cuando son varios elementos que necesitamos seleccionar -> array de elementos
     */
    let cuadro1 = document.getElementById("cuadro"); // Selecciona el elemento con id "cuadro" usando getElementById
    let cuadro2 = document.querySelector("#cuadro"); // Selecciona el primer elemento con id "cuadro" usando querySelector

    // Indicamos que tipo de selector es: # para id, . para clases
    let cadena1 = "mi primer cadena"; // Define la primera cadena de texto
    let cadena2 = "para mostrar como funciona JS"; // Define la segunda cadena de texto

    // Expresiones con backticks permiten la interpolación de variables sin usar concatenación con +
    document.querySelector(".parrafo").innerHTML = `La cadena dice -> ${cadena1} y la cadena2 dice ${cadena2}`;
    // Hacer una referencia a una expresión o variable es también hacer referencia a su valor
    let base = 3; // Define la base del triángulo
    let altura = 22; // Define la altura del triángulo
    document.querySelector(".areaTriangulo").innerHTML = `El area del triangulo es: ${base * altura / 2}`; // Calcula y muestra el área del triángulo

    // Secuencias de escape \t \n \\"es una frase y dentro hay comillas \ "doble"\"
    console.log("Así \"escapamos\" comillas dobles"); // Escapamos comillas dobles
    console.log(`Así "escapamos" comillas doble`); // Usamos comillas dobles dentro de una cadena con backticks
    console.log("Así `escapamos` comillas dobles"); // Usamos comillas dobles y escapamos con backticks
    console.log("Así \tTabulamos \t en JavaScript"); // Escapamos con tabulaciones
    console.log("Así puedo poner una barra \\ invertida"); // Escapamos una barra invertida
    console.log("Así puedo poner cualquier código unicode \u20BF"); // Usamos un código Unicode

    console.log("El acceso a la ruta C:\\\\usuario\\tarda1'23\", algo considerado \"lento\" en la actualidad");
    // En consola sale: El acceso a la ruta C:\\usuario\tarda 1’23”, algo considerado "lento" en la actualidad

    // Números -> Number //

    let divisionCero = 356 / 0; // División por cero resulta en Infinity
    console.log(`La division entre Cero es ${divisionCero}`); // Muestra la división por cero
    console.log(cadena1 * 100); // Multiplicar una cadena por un número resulta en NaN (Not a Number)

//boolean true=1  false =0
    console.log(5+true);

    //conversion de tipos de datos=>Automaticamente hace la conversion de tipo en una operacion,siempre que sea permitido
    console.log(5+"5");//resultado es 55
    console.log(5*"5")//resultado es 25
    console.log(5+Number("5"));//=10

    numero=5+parseFloat("5");//10 parsefloat convierte un String a numero
    numero=(numero.toFixed(2));//toFixed formatea los decimales para rondearlos
    console.log(numero);

    /**Declaracion de variables en JavaScript
    let y el var
     var tiene ambito global,cuidado porque se puede declarar varias veces
     let tiene ambito de bloque,si se declara,ya no es posible volver a declarar en el mismo bloque
     */
    var diametro = 5; // Define una variable 'diametro' y la inicializa con el valor 5
    if (diametro < 10) { // Comprueba si el valor de 'diametro' es menor que 10
        var diametro = 15; // Redefine la variable 'diametro' dentro del bloque 'if' y le asigna el valor 15
        console.log(diametro); // Muestra el valor de 'diametro' en la consola, que es 15
    }
    console.log(diametro); // Muestra el valor de 'diametro' fuera del bloque 'if', que sigue siendo 15 debido a que 'var' tiene un ámbito de función, no de bloque

    let metros = 50; // Define una variable 'metros' y la inicializa con el valor 50
    if (metros > 10) { // Comprueba si el valor de 'metros' es mayor que 10
        let metros = 15; // Define una nueva variable 'metros' dentro del bloque 'if' con ámbito de bloque y le asigna el valor 15
        console.log(metros); // Muestra el valor de 'metros' dentro del bloque 'if', que es 15
    }
    console.log(metros); // Muestra el valor de 'metros' fuera del bloque 'if', que sigue siendo 50 debido a que 'let' tiene un ámbito de bloque

    //Operadores de Asignacion
    /***
     a=a+b           ->a+=b
     aplicacion       simplificacion
     */
// Para calcular la exponenciación
    var a = 2 ** 5; // Calcula 2 elevado a la potencia de 5 y asigna el resultado a 'a'
    console.log("2^5= " + a); // Muestra en la consola el resultado de la exponenciación, que es 32

    var b = 20; // Define una variable 'b' y la inicializa con el valor 20
    var c = a << b; // Realiza un desplazamiento a la izquierda del valor de 'a' por 'b' posiciones y asigna el resultado a 'c'
    console.log(c); // Muestra en la consola el resultado del desplazamiento a la izquierda

    //operadores logicos ||-> or, &&-> and
    //operador ternario

    let resultado = a < 30 ? "es menor que 30" : "es mayor que treinta";// Declaración de una variable 'resultado' y uso del operador ternario para asignar un valor
    console.log(resultado);// Muestra el valor de 'resultado' en la consola





}