// Khai báo biến trong JS -> ECMA Script (ES)

console.log("Hello World!!!");

//Khai báo hằng số
const a = 100;
console.log("const a = ", a);

//Biến toàn cục và biến cục bộ
let b = 10;
var c = 1;

console.log(`let b = ${b}`);
console.log(`var c = ${c}`);

// Khác nhau giữa 3 let var và const

//a = 99; không thể thay đổi vì là hằng số
b = 999;
c = 888;
console.log(`let b = ${b}`);
console.log(`var c = ${c}`);

flag = true;
if(flag == true){
    console.log(`==> a = ${a}`);
    console.log(`==> b = ${b}`);
    console.log(`==> c = ${c}`);

    const d = 777; //const --> hằng số, cục bộ, không thể ghi đè
    let e = 666;   //let --> cục bộ, có thể ghi đè
    var f = 555;   //var --> toàn cục

    console.log(`==> d = ${d}`);
    console.log(`==> e = ${e}`);
    console.log(`==> f = ${f}`);
}

// console.log(`==> d = ${d}`);
// console.log(`==> e = ${e}`);
console.log(`==> f = ${f}`);