// function
// function에 argument 여러개 설정 가능
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);



// 계산기 만들기
function plus(firstNunmber, secondNumber) {
  console.log(firstNunmber + secondNumber);
}
function divide(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}

plus(80, 2);
divide(98, 20);



// object와 function 결합
const player = {
  name: "jeongho",
  sayHello: function(otherPersonName) {
    console.log("hello! " + otherPersonName + " nice to meet you");
  }
}

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
player.sayHello("dal");