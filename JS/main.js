let condicion = true; //se creo la variable booleana
let otra_condicion = false; 
let edad = 37;
let string= "37";

//se fija si es booleano, si es true ejecuta, sino no , por es if
if(condicion){
    console.log("la condicion es verdadera")

}
// un = , signicia que le asigans un valor == siginica si es igual
// aca se usa operadores porq no pueden leer cosas no bolueanos, por eso se usa el == para responder booleano y los === son para por ejemplo igualar pero no solo se fija en el valor sino en el tipo de dato


if(edad==37){
    console.log (" la edad es 37")
}
if(edad==string){
    console.log ("son iguales")
}
if(edad===string){
    console.log ("estos no, porq son dato y tipo")
}

if(edad=string){ //aca le asignas a edad, el valor de sting
    console.log ("son iguales")
}

if(edad >= 18){ //para mayor o igual, hay que poner primero el mayor
    alert("podes ingresar")

}else{
    alert("no podes ingresar")

}

const edad_obligatoria = 18;
let edad_user = parseInt(prompt("ingresa tu edad"));
let edad_optativa = 16;
let edad_optativa_mayor = 69;

if(edad_user >= edad_obligatoria){
    alert("debes votar");

}else{
    alert("no debes votar");
}

//aca se agrega otro if ya que se agrega otro condicional
if( (edad_user >= edad_obligatoria) && (edad_user<=edad_optativa_mayor)){ //aca le decimos al codigo que las mayores no deben votar si o si
    alert("debes votar");
}else if(edad_user>=edad_optativa || edad_user>edad_optativa_mayor){ //aca conectamos con OR para que los mayores de 69 esten al tanto
    alert("podes votar si queres");
}
else{
    alert("no debes votar");
}
alert("fin del proceso");

let es_menor = 37>39; //guarda un true y se convierte en e bollean
let no_es_ciert = edad>30; //es false por l oque se convierte en bolean
let edad_variable = edad_user>=30; //varia entre false y true

// !=  si las variables son diferentes, entrega un true
// !== es estrictamente distinto
// && operador and
// || operador or
// ! operador no

let ordenar = true;
let nota_user = parseInt(prompt("ingresa tu edad"));
let pelear=true;

if (ordenar&&nota_user>7){ //and si cumple las 2 puede salir
    console.log ("podes salir");
}
else{
    console.log("te quedas en casa");
 
    

}
if (ordernar||nota>=7){ //OR si cumple almenos 1 puede salir
    console.log("podes salir");
}
else{
    console.log("no podes salir");

}

if(!pelear){  // NO,  aca pone como pelear false, entonces si no se pelearon puede salir, porq esta negado, si pelearon no pueden salir
    console-log("podes salir");
}

else{
    console.log("no podes salir ");
}


let carrito = false;


if(!carrito){
    console.log("no existe el carrito");
}








