/**
 * 1/2
 * unnamed export module에서 대상을 하나만 import 할 때는 반드시 이름을 지정해야 함
 */
import myFunction from "./ex08.01.mjs";
import myObject from "./ex08.02.mjs";

console.log(myFunction(10, 20));
console.log(myObject.add(10, 20));
console.log(myObject.subtract(10, 20));

/**
 * 3
 * named export는 import 대상이 다수이기 때문에 하나의 특정 이름으로 받기 불가능
 * 대신 * as m 가능
 */
import * as m from "./ex08.03.mjs";
console.log(m.add(10, 20));

/**
 * 3. import destruction
 */
import { subtract } from "./ex08.03.mjs";
console.log(m.subtract(10, 20));

/**
 * 4. import destruction
 */
import { add } from "./ex08.04.mjs";
console.log(m.add(10, 20));

/**
 * 5
 */
import math, { divide } from "./ex08.05.mjs";
console.log(divide(20, 5));
