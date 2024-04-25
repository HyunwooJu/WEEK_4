// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

var obj1 = {
    name: 'obj1',
    func: function () {
        var self = this; //이 부분!
        return function () {
            console.log(self.name);
        };
    },
};

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없다.
// 메서드가 아닌 함수로서 호출한 것과 동일하다.
var callback = obj1.func();
setTimeout(callback, 1000);