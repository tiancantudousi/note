https://www.jianshu.com/p/bd5b80224ff6
js������ж��Ƿ�Ϊnumber����
isFinite �����������������ֵ����������� NaN�����������߸�����󣬻᷵��false���������� true
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