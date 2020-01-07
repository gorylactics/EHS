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
            // contador.getElementsByTagName('h1').addClass('.contador') buscar como agregar clases
            console.log('likes');
        });
       
        menosUno.addEventListener('click' , function(){
            contador.innerHTML--
            console.log('likes');
        });
   
    };

    likes();

    function cambioFondo(){
        var botonCambio = document.querySelector('#fondo');
        var fondo = document.querySelector('#cambiode');
        botonCambio.addEventListener('click', function(){
            fondo.classList.toggle('cambiode');
        });
        
      
        console.log(cambioFondo);
    }
    
    cambioFondo();

    function Megusta(){
        var botonMeGusta = document.querySelector('#botonMeGusta');
        var titulo = document.querySelector('#meGusta');
        contador = 1;
        botonMeGusta.addEventListener('click' ,function(){
          
            if(titulo != String){
                titulo.innerHTML = 'megusta' +' '+ contador++;
            }else if(titulo == String){
                titulo.innerHTML = 'nogusta' +' '+ contador--;
            }else{
                alert('tomaron los dos');
            }   console.log(titulo)
        });
        
    };
    
    Megusta();


};




