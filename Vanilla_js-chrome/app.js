// variable
// const and let
// 기본적으로 변수를 설정할 때 const를 사용하고, let은 필요할 때만, var는 되도록 사용하지 말 것.
const a = 5;
const b = 2;
let myName = "jeongho"

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Kim-JeongHo"; //let은 코드를 적으면서 업데이트 가능.

console.log("your name is " + myName);