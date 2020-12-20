
//variables
let nav= document.getElementById('nav');
let menu=document.getElementById('enlaces');
let icon=document.getElementById('nav-icon');
let linea=document.getElementById('linea')



window.addEventListener('load',function(){

    /*uso jquery*/
    $('#onload').fadeOut();
      $('body').removeClass('hidden');

    
});

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 500){
        nav.classList.remove('nav2');
        nav.className = ('nav1'); 
        icon.classList.remove('nav-icon2')
        icon.className=('nav-icon')    
        nav.style.transition = '1s';
        icon.style.transition = '1s';
   
    }if(Desplazamiento_Actual  > 800 ){
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        icon.classList.remove('nav-icon');
        icon.className = ('nav-icon2');   
        nav.style.transition = '1s';
        icon.style.transition = '1s';


    }if(Desplazamiento_Actual > 1400){
        nav.classList.remove('nav2');
        nav.className = ('nav3');
        icon.classList.remove('nav-icon2');
        icon.className = ('nav-icon3'); 
        nav.style.transition = '1s';
        icon.style.transition = '1s';

    }
 }

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);/*contador de px en la consola */
    menus();
});
//modal inicio y tipo usuario 
let cerrar= document.querySelectorAll(".close")[0];
let cerrar1= document.querySelectorAll(".close1")[0];

let abrirR= document.querySelectorAll(".linkRegistro")[0];
let abrirR2= document.querySelectorAll(".linkRegistro2")[0];

let abrir3=document.querySelectorAll(".cta2")[0];
let abrir4=document.querySelectorAll(".cta3")[0]
let modal= document.querySelectorAll(".modal1")[0];

let modalC= document.querySelectorAll(".modal-container1")[0];
//modal de interambio
//let btn_enviarSesion= document.querySelectorAll(". btn_enviarSesion")[0];



let modalI= document.querySelectorAll(".modalI")[0];
let modalCI= document.querySelectorAll(".modal-container_intercambio")[0];
let cerrarI= document.querySelectorAll(".closeI")[0];


abrir3.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})




cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
 
    
    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)
})





abrirR.addEventListener("click",function(e){


    modal.classList.toggle("modal-close");
 
    
    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)
    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")
   
})

abrirR2.addEventListener("click",function(e){


     modalI.classList.toggle("modal-closeI");

    setTimeout(function(){

        modalCI.style.opacity="0";
        modalCI.style.visibility="hidden";
      

    },900)

    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})



//modal de interambio


abrir4.addEventListener("click",function(e){

    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")
   
    

})

cerrarI.addEventListener("click",function(){
    
    modalI.classList.toggle("modal-closeI");
  
    setTimeout(function(){

        modalCI.style.opacity="0";
        modalCI.style.visibility="hidden";
        
    
        

    },900)
})



document.getElementById("ctn-icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
document.getElementById("x-buscador").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search =document.getElementById("cover-ctn-search");
inputSearch =document.getElementById("imag-logis");

x_buscardor=document.getElementById("x-buscador");
//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
   
}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-500px";
    cover_ctn_search.style.display = "none";
 
    inputSearch.value = "";
   

}
