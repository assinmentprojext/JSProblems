// 1. 입력: 배열과 정수
// 2. 함수 동작
//     1) 배열의 각 요소에 +10
//     2) 1)의 배열에서 전달받은 정수 검색
//         (1) 값이 없다면 값이 없다고 콘솔에 출력 후 함수 종료
//         (2) 값이 있다면 전달받은 정수를 제외한 배열 반환
const array = [1, 2, 3, 4, 5];
function arrayTest(array, num) {
    let sumArray = array.map((el) => el + 10);
    const findNum = sumArray.findIndex((el) => el === num);
    if (findNum === -1) {
        console.log("값이 없습니다");
        return "";
    } else {
        sumArray.splice(findNum, 1);
        return sumArray;
    }
}
console.log(arrayTest(array, 14));
