// 비동기적 코드의 이해!

setTimeout(function(){
    console.log("여기가 먼저 실행될까?");
}, 1000)

console.log("날 좀 보소");