 const sonidos = [
 new Audio('static/sounds/oof.mp3'),   /*00*/
 new Audio('static/sounds/tumadre.mp3'),   /*01*/
 new Audio('static/sounds/happy.mp3'),   /*02*/
 new Audio('static/sounds/eddshe.mp3'),   /*03*/
 new Audio('static/sounds/doctops.mp3'),   /*04*/
 new Audio('static/sounds/doctops2.mp3'),   /*05*/
 new Audio('static/sounds/labachata.mp3'),   /*06*/
 new Audio('static/sounds/labachata2.mp3'),   /*07*/
 new Audio('static/sounds/ozuna.mp3'),   /*08*/
 new Audio('static/sounds/paulolondra.mp3'),   /*09*/
 new Audio('static/sounds/jesse.mp3'),   /*10*/
 new Audio('static/sounds/intheend.mp3'),   /*11*/
 ];


function reproducirContinuamente(i) {
    // sonidos[i].loop = true;
    sonidos[i].play();
}

const botonDetener = document.getElementById('boton-detener');
botonDetener.addEventListener('click', () => {
  detenerReproduccion(sonidos[i]);
});


function detenerReproduccion() {
  for (let i = 0; i < sonidos.length; i++) {
    sonidos[i].pause();
  }
}
  const randomIndex = Math.floor(Math.random() * sonidos.length);
