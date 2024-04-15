function solution(arr) {
  var even = 0;
  var odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  }

  return [even, odd];
}

console.log(solution([1, 2, 3, 4, 5]));
