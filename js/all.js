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

myVar = { name: "Fjohn" }  // toString 转换为 "[object Object]"
myVar = [1, 2, 3, 4]       // toString 转换为 "1,2,3,4"

/* <a href="javascript:void(0);">点我没有反应的!</a>
<a href="#pos">点我定位到指定位置!</a> */

// isFinite() 判断传递的参数是否为有限数字。
// parseInt() 将字符串转换成整型数字
// parseFloat() 将字符串转换成浮点数
// isNaN() 判断传递的参数是否不是number

// Math.round() 4舍五入取整数
// Math.random() 生产0-1之间的随机17位小数
// Math.max(x, y, z, ..., n)  返回 x,y,z,...,n 中的最高值。
// Math.min(x, y, z, ..., n)  返回 x,y,z,...,n中的最低值。
// Math.floor(x) 对 x 进行下舍入

// window.innerHeight 或 document.body.clientHeight 浏览器窗口的可视区域高度
// window.innerWidth 或 document.body.clientWidth 浏览器窗口的可视区域宽度

// location.hostname 返回 web 主机的域名
// location.pathname 返回当前页面的路径和文件名
// location.port 返回 web 主机的端口 （80 或 443）
// location.protocol 返回所使用的 web 协议（http: 或 https:）