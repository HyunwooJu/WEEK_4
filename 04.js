// index : 사람이 이해할 수 있는 변수명일 뿐
// currentValue : 사람이 이해할 수 있는 변수명일 뿐

var newArr = [10, 20, 30].map(function (index, currentValue) {
	console.log(index, currentValue);
	return currentValue + 5;
});

console.log(newArr);