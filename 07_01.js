// 결과만을 위한 코딩 => 하드 코딩

var obj1 = {
    name: 'obj1',
    func: function () {
        console.log(obj1.name);
    }
};
setTimeout(obj1.func, 1000);