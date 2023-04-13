const botones = document.querySelectorAll("button")
const input = document.querySelector("input")
let resultado 

botones.forEach(function(boton){
    boton.addEventListener("click", mostrar)

})

function mostrar(e){

   if(e.target.innerHTML== '='){
    crearesultado() 
   }
   else if(e.target.innerHTML=='AC'){
   input.value = ""
   }

   else { 
    input.value += e.target.innerHTML
   }
  
}

function crearesultado(){
    resultado = eval(input.value)
    console.log(resultado)
    input.value = resultado
}

