// object
// 데이터 정리 방법
const player = {
  name: "jeongho",
  points: 10,
  fat: false,
}

console.log(player);


// object 값 확인
console.log(player.name);
console.log(player["name"]);


// property 변경
player.fat = true;
console.log(player);


// proporty 값에 더하기
player.points = player.points + 50;
console.log(player);


// property 추가
player.lastName = "photato";
console.log(player);


// console == object, .log == property