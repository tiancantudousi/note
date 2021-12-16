/* 
  1. concat() 拼接一个或多个数组并返回新数组
  语法 array1.concat(array2,array3,...,arrayX)
  参数 array2, array3, ..., arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
  返回值  Array 对象 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
*/

/* 
  2. every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
  语法 array.every(function(currentValue,index,arr), thisValue)
  参数 function(currentValue, index,arr) 必须。函数，数组中的每个元素都会执行这个函数 （currentValue	必须。当前元素的值，index	可选。当前元素的索引值，arr	可选。当前元素属于的数组对象）
  thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
  返回值  布尔值。如果所有元素都通过检测返回 true，否则返回 false。
*/
var ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
// find() 方法为数组中的每个元素都调用一次函数执行：
// 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 undefined

// findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
// findIndex() 方法为数组中的每个元素都调用一次函数执行：
// 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 -1

/*
  3. includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
  语法 arr.includes(searchElement, fromIndex)
  参数 searchElement 必须。需要查找的元素值。
  fromIndex 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
  返回值  布尔值。如果找到指定值返回 true，否则返回 false。
*/

/*
  4. indexOf() 方法可返回数组中某个指定的元素位置。
  语法array.indexOf(item,start)
  参数 item 必须。必须。查找的元素。
  start 可选的整数参数。规定在数组中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
  返回值  Number	元素在数组中的位置，如果没有搜索到则返回 -1
*/

/*
  5. lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置，从该字符串的后面向前查找。
  语法array.lastIndexOf(item,start)
  参数 item 必须。必须。查找的元素。
  start 规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索
  返回值  Number	元素在数组中的位置，如果没有搜索到则返回 -1
*/


/*
  6. Array.isArray(obj)
  isArray() 方法用于判断一个对象是否为数组。
  如果对象是数组返回 true，否则返回 false
*/


/*
  7. join() 方法用于把数组中的所有元素转换一个字符串。
  array.join(separator)
  separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
  String  返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
// 输出：Banana,Orange,Apple,Mango

/*
  8. pop() 方法用于删除数组的最后一个元素并返回删除的元素
*/

/*
  9. push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
  array.push(item1, item2, ..., itemX)
*/

/*
  12. shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
*/

/*
  15. unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
  array.unshift(item1,item2, ..., itemX)
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
// 输出 Lemon,Pineapple,Banana,Orange,Apple,Mango

/*
  10. reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  total 初始值, 或者计算结束后的返回值。currentValue 必需。当前元素。currentIndex 可选。当前元素的索引。
  initialValue 可选。传递给函数的初始值

  reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
*/

/*
  11. reverse() 方法用于颠倒数组中元素的顺序。
*/

/*
  13. slice() 方法可从已有的数组中返回选定的元素。
  array.slice(start, end)
  start 可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
  end  可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
*/

/*
  14. some() 方法用于检测数组中的元素是否满足指定条件（函数提供）
  some() 方法会依次执行数组的每个元素
  如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
  如果没有满足条件的元素，则返回false。
  array.some(function(currentValue,index,arr),thisValue)
*/

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
// 输出 1,5,10,25,40,100

/*
  15. splice() 方法用于添加或删除数组中的元素。注意：这种方法会改变原始数组。
  array.splice(index,howmany,item1,.....,itemX)
  index 必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
  howmany 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
  item1, ..., itemX 可选。要添加到数组的新元素
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// 输出 ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']






