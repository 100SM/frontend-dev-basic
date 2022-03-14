/**
 * named export 1
 *
 * exports(requires,js)와 유사함
 * 이 module을 import 할 때 destruction이 가능
 */

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};

export { add, subtract };
