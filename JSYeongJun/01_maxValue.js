// 1. 입력: 정수가 들어있는 배열(오름차순이라는 보장 없음)(예시: [3, 4, 2, 5, 1], [1, 2, 3, 4, 5])
// 2. 출력: 최대 값과 내림차순 정렬이 된 배열
// 3. 최대값 구하기
//     1) maxNum 변수: 배열의 첫째 값을 저장
//         temp 변수: 요소 자리 바꾸기에서 사용할 변수
//         resultObj: 결과값을 담을 객체.
//     2) for (let i = 1; i < Array.length; i++)[1, 2, 3, 4, 5]->[2, 1, 3, 4, x5]
//         (1) Array[0]과 Array[i] 비교
//         (2) if (Array[0] < Array[i])
//              {1} Array[i]가 맨 앞으로 가고, Array[i] 앞의 요소를 오른쪽으로 한칸 이동한다.
//     [1] Array[i]를 temp에 저장
//     for (let j = i; j > 0; j--)
//         [2] Array[j] = Array[j - 1]
// {2} Array[0] = temp
// {3} temp = null
//         (3) else (maxNum >= Array[i])
//             {1} 아무 일도 일어나지 않고 넘어간다.
//         (4) resultObj
//             maxValue: 배열의 첫번째 값
//             sortArr: 배열

function maxValue(unsortedArr) {
    let maxNum = unsortedArr[0];
    let temp;
    let resultObj = {};
    for (let i = 1; i < unsortedArr.length; i++) {
        if (maxNum < unsortedArr[i]) {
            temp = unsortedArr[i];
            for (let j = i; j > 0; j--) {
                unsortedArr[j] = unsortedArr[j - 1];
            }
            unsortedArr[0] = temp;
            temp = null;
        }
    }
    resultObj.maxValue = unsortedArr[0];
    resultObj.sortArr = unsortedArr;
    return resultObj;
}
const a = maxValue([3, 4, 2, 5, 1]);
console.log(a);
