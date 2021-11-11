//variables
var number1,
  number2,
  operator,
  result,
  answer,
  True = 0,
  False = 0;

//To reach html
number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
operator = document.getElementById("operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
True = document.getElementById("True");
False = document.getElementById("False");

//produce random numbers
function RandomNumber(min, max) {
  var number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

//renew the game
function newQuestion() {
  var operation = ["+", "-", "*", "/"];
  operator.textContent = operation[RandomNumber(0, 4)]; //choose the operator
  number1.textContent = RandomNumber(0, 50);
  number2.textContent = RandomNumber(0, 50);

  //division with no reminder
  if (operator.textContent == "/") {
    while (true) {
      number2.textContent = RandomNumber(0, 50);
      if (number1.textContent % number2.textContent == 0) {
        break;
      }
    }
  }
}

//reset while reopening
window.onload = function newQuestion() {};

//while clicking answer button
answer.onclick = function () {
  var ans, n1, n2;
  n1 = Number(number1.textContent);
  n2 = Number(number2.textContent);
  switch (operator.textContent) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    default:
      break;
  }
  if (result.value == ans) {
    True.textContent = Number(True.textContent) + 1;
  } else {
    False.textContent = Number(False.textContent) + 1;
  }
  newQuestion();
};
