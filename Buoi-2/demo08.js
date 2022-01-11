/**
 * Định nghĩa hàm (function) trong ES
 */

let a = 1;
let b = 2;
var kq = congHaiSo(a,b);
console.log(kq);

// Hàm cộng --> Truyền tham trị (Pass by value)/truyền giá trị
function congHaiSo(a,b){
    return a + b;
}

function nhanDoi(x){
    console.log("--> ",x);
    x = 2 * x;
    console.log("--> ",x);
}

let e = 10;
console.log("e = ",e);
nhanDoi(e);
console.log("e = ",e);

function nhanDoi_2(x){
    console.log("--> ",x);
    x.value = 2 * x.value;
    console.log("--> ",x.value);
}
let f = {object: 10}; //Định nghĩa kiểu JSON object
console.log("f = ",f);
nhanDoi_2(f);
console.log("f = ",f);