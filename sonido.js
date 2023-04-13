const oof = new Audio('static/sounds/oof.mp3');
const tumadre = new Audio('static/sounds/tumadre.mp3');
const happy = new Audio('static/sounds/happy.mp3');
const edd = new Audio('static/sounds/eddshe.mp3');



function reproducirContinuamente(sonido) {
    sonido.loop = true;
    sonido.play();
}

const botonDetener = document.getElementById('boton-detener');
botonDetener.addEventListener('click', () => {
  detenerReproduccion(tumadre);
});


function detenerReproduccion() {
    sonido.pause();
  }


reproducirContinuamente(tumadre);