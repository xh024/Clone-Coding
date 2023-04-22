// return
// alret, console 사용하지 않으려면 return 사용

// 예제 1
const calculator = {
  plus: function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  minus: function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  },
  times: function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  },
  divide: function(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  },
  power: function(firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
  }
}

const plusResult = calculator.plus(2, 3); // 5
const minusResult = calculator.minus(plusResult, 10); // -5
const timesResult = calculator.times(10, minusResult); // -50
const divideResult = calculator.divide(timesResult, plusResult); // -10
const powerResult = calculator.power(divideResult, minusResult); // -10^5



// 예제 2
const age = 96;
function calculatorKrAge(ageOfForeigner) {
  ageOfForeigner + 2;
  return "hello";
}

const krAge = calculatorKrAge(age);

console.log(krAge);
