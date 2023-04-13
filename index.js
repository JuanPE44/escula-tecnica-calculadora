let numeros = [];
let operador = '';
let resultado = '';
window.addEventListener('load', function() {
    pantalla = document.getElementById('pantalla');
  });

function agregar(numero) {
  numeros.push(numero);
  pantalla.value = numeros.join('');
}

function agregarDecimal() {
  if (!numeros.includes('.')) {
    numeros.push('.');
    pantalla.value += numeros.join('');
  }
}

function AsignarOperador(op) {
  operador = op;
  numeros.push(operador);
  pantalla.value = numeros.join('');
}

function cambiarSigno() {
  let numero = parseFloat(pantalla.value);
  numero *= -1;
  pantalla.value = numero;
}

function calcular() {
    let total = parseFloat(numeros[0]);
  
    for (let i = 1; i < numeros.length; i += 2) {
      const operador = numeros[i];
      const operando = parseFloat(numeros[i + 1]);
  
      switch (operador) {
        case '+':
          total += operando;
          break;
        case '-':
          total -= operando;
          break;
        case '*':
          total *= operando;
          break;
        case '/':
          total /= operando;
          break;
      }
    }
  
    return total;
  }

function AC() {
  numeros = [];
  resultado = '';
  pantalla.value = '';
}

function igual() {
    if (numeros.length === 0 || typeof numeros[numeros.length - 1] === 'string') {
      return;
    }
  
    resultado = calcular();
    actualizarPantalla(resultado);
    numeros = [resultado];
  }
  
  function actualizarPantalla(valor) {
    document.getElementById('pantalla').value = valor.toString();
  }