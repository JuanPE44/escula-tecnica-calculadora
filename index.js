let operando1 = '';
let operando2 = '';
let operador = '';
let resultado = '';

function agregarNumero(numero) {
    if (operador === '') {
      operando1 += numero;
      document.getElementById('pantalla').value = operando1;
    } else {
      operando2 += numero;
      document.getElementById('pantalla').value = operando2;
    }
  }
  
  function agregarDecimal() {
    if (operador === '' && !operando1.includes('.')) {
      operando1 += '.';
      document.getElementById('pantalla').value = operando1;
    } else if (operador !== '' && !operando2.includes('.')) {
      operando2 += '.';
      document.getElementById('pantalla').value = operando2;
    }
  }
  
  function op(op) {
    operador = op;
  }
   function calcularPorcentaje(numero, porcentaje) {
    return (porcentaje / 100) * numero;
  }

  function calcular() {
    let num1 = parseFloat(operando1);
    let num2 = parseFloat(operando2);
    switch (operador) {
        case '%':
        resultado = calcularPorcentaje(num1,num2);
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:
        resultado = '';
    }
    document.getElementById('pantalla').value = resultado;
  }

 