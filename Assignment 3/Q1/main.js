import { add, subtract } from './mathOperation.js';


function calculate(operation) {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var result;

  if (operation === 'add') {
    result = add(num1, num2);
  } else if (operation === 'subtract') {
    result = subtract(num1, num2);
  }

  document.getElementById('result').innerHTML = 'Result: ' + result;
}

document.getElementById('add-btn').addEventListener('click', () => calculate('add'));
document.getElementById('subtract-btn').addEventListener('click', () => calculate('subtract'));