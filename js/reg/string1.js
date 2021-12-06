/*
  1.  substr() 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。注意： substr() 方法不会改变源字符串。
  语法 string.substr(start,length)
  参数 start 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
  length 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串
*/
var str = "Hello world!";
var n = str.substr(2, 3)
// 输出结果: llo  str Hello world!

/*
  2.  substring() 方法用于提取字符串中介于两个指定下标之间的字符。substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。不改变原字符串
  语法 string.substring(from, to)
  参数 from 必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
  to 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
*/
var str1 = "Hello world!";
var n1 = str1.substring(2, 7)
// 输出结果: llo w  str1 Hello world!