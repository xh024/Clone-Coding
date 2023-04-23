//conditionals
const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
  console.log("Please write a number.");
} else if(age < 18) {
  console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if(age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if(age > 80) {
  console.log("You can do whatever you want.");
} else if(age === 100) {
  console.log("Wow, you are wise.")
}

// else if로 조건을 연속적으로 줄 수 있다.
// else는 선택사항

/* And 기호 === &&
Or 기호 === || 
같다 기호 === */

/* 숫자가 아니고 음수이면 "Please write a number.", 
18세 미만이면 "You are too young.", 
18세 이상 50세 이하이면 "You can drink.", 
50세 초과이고 80세 이하이면 "You should exercise."
80세 초과이면 "You can do whatever you want." 
100세이면 "Wow, you are wise." */