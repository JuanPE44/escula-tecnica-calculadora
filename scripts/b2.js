function moverBotonDetener() {
  const div = document.getElementById("boton-detener");
  let seguirMouse = false;
  let offset = { x: 0, y: 0 };

  div.addEventListener("mousedown", function(event) {
    seguirMouse = true;
    const rect = div.getBoundingClientRect();
    offset = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  });

  div.addEventListener("mouseup", function(event) {
    seguirMouse = false;
  });

  div.addEventListener("mousemove", function(event) {
    if (seguirMouse) {
      const x = event.clientX - offset.x;
      const y = event.clientY - offset.y;
      div.style.left = x + "px";
      div.style.top = y + "px";
    }
  });

  div.addEventListener("mouseenter", function(event) {
    div.style.transition = "all 0.5s";
  });

  div.addEventListener("mouseleave", function(event) {
    div.style.transition = "all 0.5s";
    div.style.position = "absolute";
div.style.left = Math.floor(Math.random() * (window.innerWidth - div.offsetWidth)) + "px";
div.style.top = Math.floor(Math.random() * (window.innerHeight - div.offsetHeight)) + "px";
  });
}