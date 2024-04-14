// 1. 입력: 최종 목적지까지의 거리
// 2. 출력: 오브젝트. (클래스 키워드 안 쓰고 클래스 만들기?)
//     0) 변수
//         isEngineRun: 시동 걸려있으면 true, 아니면 false
//         driveDistance: 주행 거리
//     1) 시동 걸기:
//         사용자가 시동 걸기 메서드 실행
//             if isEngineRun == false
//                 isEngineRun = true
//         시동 끄기 불가

//     2) 시동 끄기
//         사용자가 시동 끄기 메서드 실행
//             if isEngineRun == true
//                 isEngineRun = false
//         실행 상황
//         40km 이상 주행
//             안전 위험으로 시동 종료 출력
//         주행 완료
//         시동 걸기 불가

//     3) 주행
//         사용자가 주행 메서드 실행
//          시동이 걸려야 주행 가능
//             isEngineRun 확인
//         주행 거리 확인
//             if (driveDistance > = 40)
//                 안전 위험으로 시동 종료 출력
//                 시동 끄기
//
//         1km 단위로 남은 거리 출력(for 문)
//             driveDistance 감소
//         주행이 끝나면 시동 끄기
//             isEngineRun = false

function car(distanceParam) {
    let carObj = {
        isEngineRun: false,
        driveDistance: distanceParam,
        startEngine: function () {
            if (this.isEngineRun === false) {
                console.log("시동이 걸렸습니다.");
                this.isEngineRun = true;
            } else {
                console.log("이미 시동이 걸려있습니다.");
            }
        },
        stopEngine: function () {
            if (this.isEngineRun === true) {
                console.log("시동이 꺼졌습니다.");
                this.isEngineRun = false;
            } else {
                console.log("이미 시동이 꺼져있습니다.");
            }
        },
        drive: function () {
            if (this.isEngineRun === false) {
                console.log("시동을 먼저 키셔야 합니다.");
                return;
            }
            if (this.driveDistance >= 40) {
                console.log("안전 위험으로 시동을 종료합니다.");
                this.stopEngine();
                return;
            } else {
                for (let i = this.driveDistance; i >= 0; i--) {
                    console.log(`남은 주행 거리: ${this.driveDistance}`);
                    this.driveDistance--;
                    if (i == 0) {
                        console.log("운행을 종료합니다.");
                        this.stopEngine();
                    }
                }
            }
        },
    };
    return carObj;
}
let myCar = car(40);
myCar.stopEngine(); //시동 이미 꺼져있음
myCar.startEngine(); //시동 켜짐
myCar.startEngine(); //시동 이미 켜져있음
myCar.drive(); //주행 시작->최대주행거리 초과로 시동 꺼짐

console.log("---------------");
let myCar2 = car(39);
myCar2.drive(); //시동 키기 전에 운전 시작
myCar2.startEngine(); //시동 켜짐
myCar2.drive();
