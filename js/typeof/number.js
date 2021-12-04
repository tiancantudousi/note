// isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true

// 可以通过 toString() 来获取每个对象的类型。
// 为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，
// 传递要检查的对象作为第一个参数，称为 thisArg。
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]

var isNumber = function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

var isNumberObject = function isNumberObject(n) {
  return (Object.prototype.toString.apply(n) === '[object Number]');
}

var isCustomNumber = function isCustomNumber(n) {
  return isNumber(n) || isNumberObject(n);
}

console.log(isCustomNumber(9)); //true
console.log(isCustomNumber('0')); //false
console.log(isCustomNumber('hello')); //false
console.log(isCustomNumber(NaN)); //true

var num = 1;

var numObj = new Number(1);

var getType = (num) => Object.prototype.toString.call(num) === '[object Number]' && typeof num === 'object'

console.log(getType(num), getType(numObj)); // false,true