// 1. 입력: 정수 배열(ex: [1, 2, 3, 4, 5])
// 2. 출력: 입력받은 배열의 홀수 개수와 짝수 개수
// 3. 구현
//     0) 변수
//     빈 배열 resultArr = [];
//     짝수 개수: numEven = 0;
//     홀수 개수: numOdd = 0;
//     1) for (let i = 0; i < arr.length; i++)
//     2) if (arr[i] % 2 === 0)
//         numEven ++;
//     3) else
//         numOdd ++;
//     4) resultArr[0] = numEven, resultArr[1] = numOdd
//     5) return resultArr

const input = [1, 2, 3, 4, 5];
function solution(arr) {
    resultArr = [];
    numEven = 0;
    numOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            numEven++;
        } else {
            numOdd++;
        }
    }
    resultArr[0] = numEven;
    resultArr[1] = numOdd;
    return resultArr;
}
const a = solution(input);
console.log(a);
