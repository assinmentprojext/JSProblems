// 1. 입력: 물품명과 갯수
// 2. 출력: 전산표의 물품명과 갯수가 입력과 일치하는지 확인.
//     * 일치 여부 출력
//     * 전산표에 없다면 물품명 출력
// 3. 전산표 만들기
// 4. 함수 구현
//     1) function searchTable(item, num)
//     2) if (itemTable[item] === undefined)
//         물품명 출력
//         return
//     3) if (itemTable[item] === num)
//         “전산표와 일치합니다" 출력
//         else
//         “전산표와 일치하지 않습니다” 출력

const itemTable = {
    야채곱창: 5,
    바나나우유: 10,
    삼각김밥: 15,
    도시락: 10,
    샌드위치: 10,
};
function searchTable(item, num) {
    if (itemTable[item] === undefined) {
        console.log(`${item} (품목 없음)`);
        return;
    }
    if (itemTable[item] === num) {
        console.log("전산표와 일치합니다");
    } else {
        console.log("전산표와 일치하지 않습니다");
    }
}

searchTable("바사삭치킨", 5);
searchTable("바나나우유", 1);
searchTable("도시락", 10);
