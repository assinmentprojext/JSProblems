function solution(array) {
  let oddNumber = 0;
  let evenNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      oddNumber++;
    }
    if (array[i] % 2 === 1) {
      evenNumber++;
    }
  }
  return [oddNumber, evenNumber];
}
const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);
