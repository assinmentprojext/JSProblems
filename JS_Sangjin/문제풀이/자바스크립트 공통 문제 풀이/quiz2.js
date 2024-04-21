const menu = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
};
function 전산표(name, count) {
  if (menu[name] === undefined) {
    console.log(`${name}`);
    return;
  }
  if (menu[name] === count) {
    console.log("전산표와 일치합니다");
  } else console.log("전산표와 일치하지 않습니다");
}
전산표("야채곱창", 5);
전산표("야채곱창", 10);
전산표("바사삭치킨", 10);
