/* 
    1. 가장 큰 값 구하기
    함수의 이름은 maxValue입니다.
    인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다. 
    배열로 전달 받은 숫자 중 가장 큰 숫자와 숫자를 내림차순으로
    정렬된 배열을 객체 형태로 반환해야 합니다. 

    ex) 
        const a = maxvalue([1,2,3,4,5])
        console.log(a)

        결과값
        {
            maxValue: 5,
            sortArr = [5,4,3,2,1]
        }
*/

function maxValue(arr) {
  // const max = Math.max.apply(null, arr);

  // 반복문을 사용해서 해당 배열에서 최댓값 구하기
  let max = arr[0];

  for (let i = 1; i < 5; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  const sortArr = arr.sort();

  return {
    maxValue: max,
    sortArr: sortArr,
  };
}

const a = maxValue([1, 2, 3, 4, 5]);
console.log(a);
