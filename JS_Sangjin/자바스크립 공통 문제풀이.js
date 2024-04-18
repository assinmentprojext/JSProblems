// 문제1번
let a = [1, 2, 3, 4, 5];
let max = a[0];
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
maxValue = max;
sortArr = a.reverse();
console.log(maxValue, sortArr);

// 문제 2번
const menu = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
};
function 전산표(name, count) {
  const Count = menu[name];
  const total = Count - count;
  if (total === 0) {
    return console.log("전산표와 일치합니다");
  }
  if (!Count) {
    return console.log(name);
  }
  if (total !== 0) {
    return console.log("전산표와 일치하지않습니다");
  }
}
전산표("야채곱창", 5);
전산표("야채곱창", 10);
전산표("바사삭치킨", 10);

// 문제 3번
function 검사(a) {
  a.map((el) => {
    el + 10;
  });
  if (a[el].type !== Number) {
    a = "결과값이 없습니다";
  }
}
const arr = [1, 2, 3, 4, 5];
console.log(검사(arr));

// 문제 4번
function solution(array) {
  let a;
  let b;
  for (let index = 0; index < array.length; index++) {
    if (array[i] % 0 === 0) {
      a++;
    }
    if (array[i] % 1 === 0) {
      b++;
    }
    return a, b;
  }
}
console.log(solution(arr));
