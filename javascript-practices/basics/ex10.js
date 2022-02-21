/* 
배열
*/

// 배열 생성1: 내장객체(생성자 함수)를 사용
console.log("=== 배열 생성1: 내장객체(생성자 함수)를 사용 ===");

var o1 = new Array();
console.log(typeof o1, o1 instanceof Array, o1.length);

// 배열을 생성할 때 크기 지정은 별 의미가 없다.
// 배열은 동적으로 늘어난다.
var o2 = new Array(10);
o2[0] = 0;
o2[5] = 5;
o2[10] = 10;
o2[20] = 20;
console.log(o2[0], o2[1], o2.length); // 배열 오소에 값을 지정안하면 undefined

// 초기값을 지정할 수 있다.
var o3 = new Array(0, 2, 4, 6, 8);
console.log("o3.length :>> ", o3.length);

// 배열 생성2: 리터럴 사용
console.log("=== 배열 생성2: 리터럴 사용 ===");
var o4 = [
  10,
  "JavaScript",
  true,
  function () {
    console.log("Hello World");
  },
  { name: "마이콜", age: 30 },
];
console.log(typeof o4, o4 instanceof Array, o4.length);
for (var i = 0; i < o4.length; i++) {
  console.log("o4[", i, "] :>> ", o4[i]);
}

o4[3]();

// Array VS Object
console.log("=== Array VS Object ===");

o5 = [];
o5[0] = 0;
o5["1"];
o5.name = "둘리";
o5["age"] = 10;
console.log("o5.length, o5[1] :>> ", o5.length, o5[1]);
console.log('o5["name"] :>> ', o5["name"]);

for (prop in o5) {
  console.log("prop :>> ", prop);
  console.log("o5[prop] :>> ", o5[prop]);
}

o5 = [];
o5[0] = 0;
o5["1"];
o5.name = "둘리";
o5["age"] = 10;
console.log('o5["0"] :>> ', o5["0"]);
console.log("o5[1] :>> ", o5[1]);
console.log('o5["name"] :>> ', o5["name"]);
console.log("o5.age :>> ", o5.age);
for(prop in o5){
    console.log('prop, o5[prop] :>> ', prop, o5[prop]);
}