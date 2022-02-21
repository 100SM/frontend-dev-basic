/* 
Array 메소드(Array.prototype)
*/

var colors = ["black", "white", "yello"];
var fruits = ["apple", "mango", "banana"];

// concat
var a1 = fruits.concat(colors);
console.log("a1 :>> ", a1);

// pop, push: stack 지원
var color = colors.pop();
console.log("colors :>> ", colors);

colors.push("red");
console.log("colors :>> ", colors);
// join
var str = fruits.join(":");
console.log("str :>> ", str);

// reverse
console.log("fruits :>> ", fruits);
fruits.reverse();
console.log("fruits :>> ", fruits);

// shift
var numbers = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log("number, numbers :>> ", number, numbers);

// sort
numbers.sort();
console.log("numbers :>> ", numbers);

// slice
var numbers = numbers.slice(1, 3);
console.log('numbers :>> ', numbers);

// splice
// index부터 count개를 삭제한 후, 삭제된 요소를 반환
console.log('fruits :>> ', fruits);

var fruits2 = fruits.splice(0, 2);
console.log('fruits2 :>> ', fruits2);

// index부터 count개를 삭제한 후, replace로 대체, 삭제된 요소를 반환)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log('a2 :>> ', a2);