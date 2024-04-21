function car(goalDistance) {
  let engine = 0;
  function start() {
    engine++;
    if (engine === 1) {
      console.log("시동이 걸렸습니다");
    }
    if (engine > 1) {
      console.log("시동을 다시 걸 수 없습니다");
      return engine === 1;
    }
  }
  function stop() {
    engine--;
    if (engine === 0) {
      console.log("시동이 꺼졌습니다");
    }
    if (engine < 0) {
      console.log("시동을 다시 끌 수 없습니다");
      return engine === 0;
    }
  }
  function drive() {
    if (engine === 1) {
      for (let index = 0; index <= goalDistance; index++) {
        console.log(`남은 주행거리는 ${goalDistance - i}km 입니다`);
        if (goalDistance - i === 0) {
          console.log("주행이 완료했습니다");
          return "";
        }
        if (i === 40) {
          console.log("안전 위험으로 시동을 종료하겠습니다");
          return (engine = 0);
        }
      }
    }
  }
}
