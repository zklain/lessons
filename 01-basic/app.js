const result = document.getElementById('result');

const isEven = number => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const checkIfEven = () => {
  let number = Number(document.getElementById('number').value);
  console.log(number);
  let answer;
  if (isEven(number)) {
    answer = `Number ${number} is even.`;
  } else {
    answer = `Number ${number} is odd.`;
  }
  result.innerHTML = result.innerHTML + ' ' + answer;
};

document.getElementById('butt').addEventListener('click', checkIfEven, false);
