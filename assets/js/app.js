window.onload = function(){
    
// alert("El HOmbre seguro , vino lo hizo y lo que hizo lo hizo sentir Bien")

var titulo = document.getElementById("titulo");
var boton = document.getElementById("boton");


function cambioTitulo(){
    var nombre = prompt('introduce tu nombre');
    titulo.innerHTML= nombre;
};

boton.addEventListener('click' , cambioTitulo);


};




