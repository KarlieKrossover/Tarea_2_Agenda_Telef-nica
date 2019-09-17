//creo que esto es un arreglo de elemntos... porque tiene corchetes
var contacto0 =[
    {nombre: "Karlie Krossover",
     empresa: "Ninguna",
     email: "karlykidicaruskingdomhearts@gmail.com",
     telefono: "0000000000"},
];

//creo que este es otro arreglo
var contacto1 =[
    {nombre: "Yukin Kanji",
     empresa: "Ninguna",
     email: "taliayukina@gmail.com",
     telefono: "1111111111"},   
];

//creo que este es otro arreglo... pongo tres porque el gif tiene 3
var contacto2 =[
  {nombre: "Guillermo González",
   empresa: "Ninguna",
   email: "memomemin@gmail.com",
   telefono: "2222222222"},
];

var contactoNuevo = new Array(); //segun lo que dijo Donoso, esto va a generarme un arreglo
//vacío y no creará errores

function imprimirContacto0(contacto0, index){ //el index es para saber su posición, siempre
    //se empieza desde el 0, por eso también lo llame contacto0
    //esto lo hago basandome en el ejercicio de septiembre 6, a ver si funciona
    //por lo que entendí, aquí escribimos el HTML del index, para borrarlo en el index después?
    var lista0 = document.getElementById("lista0");
    lista0.insertAdjacentHTML('beforeEnd',`<li class="contacto0" )>
<div class="actions">
  <a><i class= "fa fa-trash" onClick="eliminar0(` + index + `)"></i></a>
</div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">` + contacto0.nombre + `</h4>
<div class="datos">
<div class="dato0">
   <i class="fa fa-building"></i>
   <span>` + contacto0.empresa + `</span>
</div>
<div class="dato1">
   <i class="fa fa-envelope"></i>
   <a href="karlykidicaruskingdomhearts@gmail.com">` + contacto0.email + `</a>
</div>
<div class="dato2">
   <i class="fa fa-phone"></i> 
   <a href="tel:0000000000">` + contacto0.telefono + `</a>
</div>
</div>
</li>`
);
}

function eliminar0(index){ //lo encontramos en la funcionsota 
    contacto0.splice(index, 1);
    imprimirTodosLosContactos0();
    //splice = llamamos el index para saber que posición está y el uno representa cuantos elementos quieres eleminar, según yo eso hace splice
}

function imprimirTodosLosContactos0(){
    //si ya sé, que original el nombre... literal me basé en el ejercicio de clase
    //no me culpen :v
    document.getElementById("lista0").innerHTML = ""; //así se vacía su contenido no?
    contacto0.forEach(imprimirContacto0); //se supone que es la funcionsota de arriba
    //así el forEach contará desde la posición 0 y en adelante
}

imprimirTodosLosContactos0(); //aquí es para que ya funcione la función .. creo

//no sé como hacer una función general para todo, así que creo que si copio el mismo código
//pero para contacto1, contacto2 y contactoNuevo funcionará... creo

function imprimirContacto1(contacto1, index){ //el index es para saber su posición, siempre
    //se empieza desde el 0, por eso también lo llame contacto0
    //esto lo hago basandome en el ejercicio de septiembre 6, a ver si funciona
    //por lo que entendí, aquí escribimos el HTML del index, para borrarlo en el index después?
    var lista1 = document.getElementById("lista1");
    lista1.insertAdjacentHTML('beforeEnd',`<li class="contacto1" )>
<div class="actions">
  <a><i class= "fa fa-trash" onClick="eliminar1(` + index + `)"></i></a>
</div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">` + contacto1.nombre + `</h4>
<div class="datos">
<div class="dato0">
   <i class="fa fa-building"></i>
   <span>` + contacto1.empresa + `</span>
</div>
<div class="dato1">
   <i class="fa fa-envelope"></i>
   <a href="taliayukina@gmail.com">` + contacto1.email + `</a>
</div>
<div class="dato2">
   <i class="fa fa-phone"></i> 
   <a href="tel:1111111111">` + contacto1.telefono + `</a>
</div>
</div>
</li>`
);
}

function eliminar1(index){ //lo encontramos en la funcionsota 
    contacto1.splice(index, 1);
    imprimirTodosLosContactos1();
    //splice = llamamos el index para saber que posición está y el uno representa cuantos elementos quieres eleminar, según yo eso hace splice
}

function imprimirTodosLosContactos1(){
    //si ya sé, que original el nombre... literal me basé en el ejercicio de clase
    //no me culpen :v
    document.getElementById("lista1").innerHTML = ""; //así se vacía su contenido no?
    contacto1.forEach(imprimirContacto1); //se supone que es la funcionsota de arriba
    //así el forEach contará desde la posición 0 y en adelante
}

imprimirTodosLosContactos1(); //aquí es para que ya funcione la función .. creo

function imprimirContacto2(contacto2, index){ //el index es para saber su posición, siempre
    //se empieza desde el 0, por eso también lo llame contacto0
    //esto lo hago basandome en el ejercicio de septiembre 6, a ver si funciona
    //por lo que entendí, aquí escribimos el HTML del index, para borrarlo en el index después?
    var lista2 = document.getElementById("lista2");
    lista2.insertAdjacentHTML('beforeEnd',`<li class="contacto2" )>
<div class="actions">
  <a><i class= "fa fa-trash" onClick="eliminar2(` + index + `)"></i></a>
</div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">` + contacto2.nombre + `</h4>
<div class="datos">
<div class="dato0">
   <i class="fa fa-building"></i>
   <span>` + contacto2.empresa + `</span>
</div>
<div class="dato1">
   <i class="fa fa-envelope"></i>
   <a href="memomemin@gmail.com">` + contacto2.email + `</a>
</div>
<div class="dato2">
   <i class="fa fa-phone"></i> 
   <a href="tel:2222222222">` + contacto2.telefono + `</a>
</div>
</div>
</li>`
);
}

function eliminar2(index){ //lo encontramos en la funcionsota 
    contacto2.splice(index, 1);
    imprimirTodosLosContactos2();
    //splice = llamamos el index para saber que posición está y el uno representa cuantos elementos quieres eleminar, según yo eso hace splice
}

function imprimirTodosLosContactos2(){
    //si ya sé, que original el nombre... literal me basé en el ejercicio de clase
    //no me culpen :v
    document.getElementById("lista2").innerHTML = ""; //así se vacía su contenido no?
    contacto2.forEach(imprimirContacto2); //se supone que es la funcionsota de arriba
    //así el forEach contará desde la posición 0 y en adelante
}

imprimirTodosLosContactos2(); //aquí es para que ya funcione la función .. creo

function imprimirContactoNuevo(contactoNuevo, index){ //el index es para saber su posición, siempre
    //se empieza desde el 0, por eso también lo llame contacto0
    //esto lo hago basandome en el ejercicio de septiembre 6, a ver si funciona
    //por lo que entendí, aquí escribimos el HTML del index, para borrarlo en el index después?
    var listaNuevo = document.getElementById("listaNuevo");
    listaNuevo.insertAdjacentHTML('beforeEnd',`<li class="contactoNuevo" )>
<div class="actions">
  <a><i class= "fa fa-trash" onClick="eliminarNuevo(` + index + `)"></i></a>
</div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">` + contactoNuevo.nombre + `</h4>
<div class="datos">
<div class="dato0">
   <i class="fa fa-building"></i>
   <span>` + contactoNuevo.empresa + `</span>
</div>
<div class="dato1">
   <i class="fa fa-envelope"></i>
   <a href="email">` + contactoNuevo.email + `</a>
</div>
<div class="dato2">
   <i class="fa fa-phone"></i> 
   <a href="telefono">` + contactoNuevo.telefono + `</a>
</div>
</div>
</li>`
);
}

function eliminarNuevo(index){ //lo encontramos en la funcionsota 
    contactoNuevo.splice(index, 1);
    imprimirTodosLosContactosNuevos();
    //splice = llamamos el index para saber que posición está y el uno representa cuantos elementos quieres eleminar, según yo eso hace splice
}

function imprimirTodosLosContactosNuevos(){
    //si ya sé, que original el nombre... literal me basé en el ejercicio de clase
    //no me culpen :v
    document.getElementById("listaNuevo").innerHTML = ""; //así se vacía su contenido no?
    contactoNuevo.forEach(imprimirContactoNuevo); //se supone que es la funcionsota de arriba
    //así el forEach contará desde la posición 0 y en adelante
}

imprimirTodosLosContactosNuevos(); //aquí es para que ya funcione la función .. creo