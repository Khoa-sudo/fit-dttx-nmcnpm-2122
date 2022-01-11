/**
 * Arrow function
 */

//Hàm truyền thống
function sayHello() {
    console.log("Hello World");
}

sayHello();

//Gắn hàm cho 1 đối tượng
const sayHi = function () {
    console.log("Hi everybody");
}

sayHi();

//Định nghĩa hàm mũi tên
const sayWelcome = () => {
    console.log("Welcome to ISE");
}

sayWelcome();

const sum = (a,b)=>a+b;
console.log(sum(1,5));