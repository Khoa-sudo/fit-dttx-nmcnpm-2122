/**
 * Array
 */

let arr = [1,2,3,4,5,6]
console.log("Array:",arr);
arr.forEach(element => {
    console.log(element);
});

//revert array
arr.reverse();
console.log(arr);
arr.reverse();

//insert new item to array
arr.push(99);
console.log(arr);

//remove item in array
arr.splice(2,1)
console.log(arr);