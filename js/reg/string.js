// string 方法 https://www.runoob.com/jsref/jsref-obj-string.html
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

/* 
  5.  replace() 替换与正则表达式匹配的子串
  语法 string.replace(searchvalue,newvalue)
  参数 searchvalue 必需。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
  newvalue 必需。一个字符串值。规定了替换文本或生成替换文本的函数。
  返回值 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
*/
var str = "Visit Microsoft! Visit Microsoft!";
var n = str.replace("Microsoft", "Runoob");
// 输出结果: Visit Runoob!Visit Microsoft!
// 如果第二个参数传的是function
var str = "Visit Microsoft! Visit Microsoft!";
var n = str.replace(/Microsoft/g, (value) => {
  console.log(value) // 匹配到的值
  return 'Runoob'
});
console.log(n)
// 输出结果: Visit Runoob! Visit Runoob!

/* 
  6.  search() 检索与正则表达式相匹配的值
  语法 string.search(searchvalue)
  参数 searchvalue 必须。查找的字符串或者正则表达式。
  返回值 与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置。
*/
var str="Visit Runoob!"; 
var n=str.search("Runoob");
// 输出结果: 6

/* 
  7. slice() 提取字符串的片断，并在新的字符串中返回被提取的部分
  语法 string.slice(start,end)
  参数 start 必须。 要抽取的片断的起始下标，第一个字符位置为 0。如果为负数，则从尾部开始截取。
  end 可选。 紧接着要截取的片段结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
  返回值 	提取的字符串。原字符串不变
*/
var str="Hello world!";
var n=str.slice(1,5);
// 输出结果：ello

/* 
  8. split() 把字符串分割为子字符串数组
  语法 string.split(separator,limit)
  参数 separator 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
  limit 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
  返回值 	一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 string Object 分割成子串创建的。返回的数组中的字串不包括 separator 自身。
*/
var str="How are you doing today?";
var n=str.split(" ");
//输出一个数组的值:['How','are','you','doing','today?']

/* 
  9.  substr() 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。注意： substr() 方法不会改变源字符串。
  语法 string.substr(start,length)
  参数 start 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
  length 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串
*/
var str = "Hello world!";
var n = str.substr(2, 3)
// 输出结果: llo  str Hello world!

/*
  10.  substring() 方法用于提取字符串中介于两个指定下标之间的字符。substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。不改变原字符串
  语法 string.substring(from, to)
  参数 from 必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
  to 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
*/
var str1 = "Hello world!";
var n1 = str1.substring(2, 7)
// 输出结果: llo w  str1 Hello world!

// substr() 从起始索引号提取字符串中指定数目的字符
// substring() 提取字符串中两个指定的索引号之间的字符
// toLowerCase() 把字符串转换为小写
// trim() 移除字符串首尾空白
// valueOf() 返回某个字符串对象的原始值
