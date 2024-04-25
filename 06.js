// obj
// 2가지 속성

var obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        console.log(">>> test start");
        if (this === global) {
            console.log("This가 global입니다. 원하지 않는 결과");
        } else {
            console.log(this, v, i);
        }

        console.log(">>> test ends");
    }
};

//method로써 호출
// obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)

// forEach, map, filter
[4, 5, 6].forEach(obj.logValues);