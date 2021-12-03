https://www.jianshu.com/p/bd5b80224ff6
js中如何判断是否为number类型
isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true
Object.prototype.toString()
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

var isCustomNumber = function isCustomNumber(n){
   return isNumber(n) || isNumberObject(n);
}

console.log(isCustomNumber(9)); //true
console.log(isCustomNumber('0')); //false
console.log(isCustomNumber('hello')); //false
console.log(isCustomNumber(NaN)); //true