function add(a, b) {
    return a + b;
}

function subtract(a, b) {
	return a - b;
}

// add가 동작하는지 테스트
function testAdd() {
    console.log(add(1, 1) === 2);
}

// subtract가 동작하는지 테스트
function testSubtract() {
    console.log(subtract(2, 1) === 1);
}
