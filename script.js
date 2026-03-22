function appendValue(value) {
  const display = document.getElementById('display');

  if (value === 'π') {
    display.value += Math.PI.toFixed(3); // Add pi
  } else if (value === '√') {
    display.value += '√'; // Show square root
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  let expression = document.getElementById('display').value;

  try {
    // Replace √number with Math.sqrt(number)
    expression = expression.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

    // Replace % with /100
    expression = expression.replace(/%/g, '/100');

    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}