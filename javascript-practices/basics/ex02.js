/* 
변수와 데이터 타입

[기본타입]
- undefined
- number
- string
- boolean

[객체]
- object type
- function type
 */

console.log("==== 기본타입 ====");
var u;
var i = 10;
var s = "Hello World";
var b = true;

console.log("u : " + typeof u);
console.log("i : " + typeof i);
console.log("s : " + typeof s);
console.log("b : " + typeof b);

console.log("==== 객체1: object type ====");
var i2 = new Number(1);
var s2 = new String("Hello World");
var b2 = new Boolean(false);
var o = new Object();
var a = new Array(); // 배열도 객체다

var o2 = {};
var a2 = [];

var n = null;

console.log("i2 : " + typeof i2);
console.log("s2 : " + typeof s2);
console.log("b2 : " + typeof b2);
console.log("o : " + typeof o);
console.log("a : " + typeof a);
console.log("o2 : " + typeof o2);
console.log("a2 : " + typeof a2);
console.log("n : " + typeof n);

console.log("==== 객체2: function type ====");
function f1(a, b) {
  return a + b;
}
var f2 = function (a, b) {
  return a + b;
};
var f3 = new Function("a", "b", "return a + b;");
console.log("f1 : " + typeof f1);
console.log("f2 : " + typeof f2);
console.log("f3 : " + typeof f3);

console.log(
  "==== 원시타입과 원시타입의 Wrapper 객체는 구분없이 사용 가능 ===="
);
console.log(i + i2);
console.log(s + s2);

// 원시 타입의 메소드가 호출될 때
// 임시 wrapper 객체가 만들어져 메소드 호출이 일어난 뒤 사라미 (유사객체)
console.log(b.valueOf());
console.log(b2.valueOf());
