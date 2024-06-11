// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

let { passwd, ...userInfo } = user;

console.log(userInfo);
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}



// 하나 하나 할당해줄 수 있는 방법은 없을 까?? 까 /??까악ㅇ까악