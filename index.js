let operandos = [];
let operador = '';
let resultado = '';

function agregar(numero) {
    operandos.push(numero);
    document.getElementById('pantalla').value = operandos.join('');
}
  
function agregarDecimal() {
    if (!operandos.includes('.')) {
      operandos.push('.');
      document.getElementById('pantalla').value = operandos.join('');
    }
}
function AsignarOperador(op) {
    operador = op;
    operandos.push(operador);
    document.getElementById('pantalla').value = operandos.join('');
}
  
function cambiarSigno() {
    resultado = -1 * parseFloat(resultado);
    document.getElementById('pantalla').value = resultado;
}
  
  
function calcular() {
    let total = parseFloat(operandos[0]);
  
    for (let i = 1; i < operandos.length; i += 2) {
      const operador = operandos[i];
      const operando = parseFloat(operandos[i + 1]);
  
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
    operandos = [];
    resultado = '';
    document.getElementById('pantalla').value = '';
  }
  
  function igual() {
    if (operandos.length === 0 || typeof operandos[operandos.length - 1] === 'string') {
      return;
    }
  
    resultado = calcular();
    document.getElementById('pantalla').value = resultado;
    operandos = [resultado];
  }