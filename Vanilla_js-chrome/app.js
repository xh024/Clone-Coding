//conditionals
const age = parseInt(prompt("How old are you?"));
// prompt는 입력 값을 무조건 srting으로 처리

// parseInt를 사용하면 string ----> number
// console.log(isNaN(age));
// isNaN은 boolean(true/false)로 number인지 아닌지 판다 --> flase인 경우 number

// if문 형식
// if(condition) {
//   // condition === true
// } else {
//   // condition === false
// }

if(isNaN(age)) {
  console.log("Please write a number.");
} else {
  console.log("Thank you for writing your age.");
}