/*
局部 JavaScript 变量
在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。
只要函数运行完毕，本地变量就会被删除。
*/

/*
 typeof
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof function () {}         // 返回 function
typeof null                   // 返回 object
typeof new Date()             // 返回 object
typeof [1,2,3,4]              // 返回 object

constructor 属性
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }
*/
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

// number
// parseFloat() 解析一个字符串，并返回一个浮点数。
// parseInt() 解析一个字符串，并返回一个整数。
