// function plusElement(arr, num) {
//   let msg;

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 10;
//   }

//   if (num) {
//     msg = "(값 있음)";
//     console.log(arr, msg);
//   } else {
//     msg = "(값 없음)";
//     console.log("결과 값이 없습니다.", msg);
//   }
// }

function plusElement(arr, num) {
  if (!num) {
    console.log("결과 값이 없습니다.", "값 없음");
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 10;
    }
    console.log(arr, "값 있음");
  }
}

plusElement([1, 2, 3, 4, 5], 1);
