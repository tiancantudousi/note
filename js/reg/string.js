// string 方法
//1. concat() 连接两个或多个字符串，返回连接后的字符串
var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
var n = str1.concat(str2, str3);
// Hello world! Have a nice day!

/* 
  2. indexOf() 返回字符串中检索指定字符第一次出现的位置
  语法 string.indexOf(searchvalue,start)
  参数 searchvalue必需。规定需检索的字符串值。
  start可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string.length - 1。如省略该参数，则将从字符串的首字符开始检索
*/
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
// 输出结果: 13

/* 
  3. lastIndexOf() 返回字符串中检索指定字符最后一次出现的位置
  语法 string.lastIndexOf(searchvalue,start)
  参数 searchvalue必需。必需，要查找的字符串。
  start可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string.length - 1。如省略该参数，则将从字符串的首字符开始检索
*/
var str = "I am from runoob，welcome to runoob site.";
var n = str.lastIndexOf("runoob", 20);
// 输出结果: 10

/* 
  4. includes() 查找字符串中是否包含指定的子字符串
  语法 string.includes(searchvalue, start)
  参数 searchvalue必需。必需，要查找的字符串。
  start可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string.length - 1。如省略该参数，则将从字符串的首字符开始检索
*/
var str = "Hello world, welcome to the Runoob。";
var n = str.includes("world");
// 输出 true

/* 
  4. match() 找到一个或多个正则表达式的匹配
  语法 string.match(regexp)
  参数 regexp 必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。
  注意： match() 方法将检索字符串 String Object，以找到一个或多个与 regexp 匹配的文本。
  这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。
  否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
*/
var str = "The rain in SPAIN stays mainly in the plain";
var n = str.match(/ain/gi);
// 输出结果: ['ain','AIN','ain','ain']

// 

// replace() 替换与正则表达式匹配的子串
// replaceAll() 	在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串
// search() 检索与正则表达式相匹配的值
// slice() 提取字符串的片断，并在新的字符串中返回被提取的部分
// split() 把字符串分割为子字符串数组
// substr() 从起始索引号提取字符串中指定数目的字符
// substring() 提取字符串中两个指定的索引号之间的字符
// toLowerCase() 把字符串转换为小写
// trim() 移除字符串首尾空白
// valueOf() 返回某个字符串对象的原始值
