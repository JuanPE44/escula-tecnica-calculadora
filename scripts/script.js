const botones = document.querySelectorAll("button")
const input = document.querySelector("input")
let resultado 
let Suma = false 
let Resta = false
let Multiplicacion = false
let Division = false

botones.forEach(function(boton){
    boton.addEventListener("click", mostrar)
})

function mostrar(e){
    const teclaPresionada = e.target.innerHTML
    if (teclaPresionada === '=') {
       crearesultado()
    } else if (teclaPresionada === 'AC') {
       input.value = ""
    } else {
       if (teclaPresionada === '+' && Suma) {
          return 
       } else if (teclaPresionada === '-' && Resta) {
          return 
       } else if (teclaPresionada === '*' && Multiplicacion) {
          return 
       } else if (teclaPresionada === '/' && Division) {
          return 
       }
 
       input.value += teclaPresionada
       
       if (teclaPresionada === '+') {
          Suma = true
       } else if (teclaPresionada === '-') {
          Resta = true
       } else if (teclaPresionada === '*') {
          Multiplicacion = true
       } else if (teclaPresionada === '/') {
          Division = true
       }
    }
 }
   
 function crearesultado(){
    resultado = eval(input.value)
    console.log(resultado)
    input.value = resultado
    falso()
}

function falso(){
    Suma = false;
    Resta = false
    Multiplicacion = false
    Division = false
    return
}

setInterval(function() {
   const botonPlay = document.getElementById("boton-play");
   const botonDetener = document.getElementById("boton-detener");
 
   botonPlay.style.left = Math.floor(Math.random() * (window.innerWidth - botonPlay.offsetWidth)) + "px";
   botonPlay.style.top = Math.floor(Math.random() * (window.innerHeight - botonPlay.offsetHeight)) + "px";
 
   botonDetener.style.left = Math.floor(Math.random() * (window.innerWidth - botonDetener.offsetWidth)) + "px";
   botonDetener.style.top = Math.floor(Math.random() * (window.innerHeight - botonDetener.offsetHeight)) + "px";
 }, 3000);