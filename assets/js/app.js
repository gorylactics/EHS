// alert("El HOmbre seguro , vino lo hizo y lo que hizo lo hizo sentir Bien")
window.onload = function(){

    function cambioTitulo(){
        var titulo = document.querySelector("#titulo");
        var boton = document.querySelector("#boton");
        var nombre = prompt('introduce tu nombre');
        boton.addEventListener('click' , cambioTitulo);
        titulo.innerHTML= 'Bienvenido ' + nombre;
        // boton.addEventListener('click' , cambioTitulo); 
        // fuera de la funcion y con el llamado apagado , solo al pulsar el boton
    };
        
        cambioTitulo();

    function likes(){
        var contador = document.querySelector('#contador');
        var masUno = document.querySelector('#botonMas');
        var menosUno = document.querySelector('#botonMenos');

        masUno.addEventListener('click' , function(){
            contador.innerHTML++;
            console.log('likes');
        });
       
        menosUno.addEventListener('click' , function(){
            contador.innerHTML--
            console.log('likes');
        });
   
    };

    likes();
   
};




