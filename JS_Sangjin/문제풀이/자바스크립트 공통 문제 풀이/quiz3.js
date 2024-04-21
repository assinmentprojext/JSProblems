function 함수명(array, num) {
  const sumArray = array.map((el) => el + 10);
  const findNum = sumArray.findIndex((el) => el === num);
  if (findNum === -1) {
    return "결과값이 없습니다";
  } else {
    sumArray.splice(findNum, 1);
    return sumArray;
  }
}
const arr = [1, 2, 3, 4, 5];
const a = 함수명(arr, 11);
console.log(a);
