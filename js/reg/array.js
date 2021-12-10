/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangfeng
 * @Date: 2021-12-10 17:18:49
 * @LastEditors: zhangfeng
 * @LastEditTime: 2021-12-10 17:30:02
 */
/* 
  1. concat() 拼接一个或多个数组并返回新数组
  语法 array1.concat(array2,array3,...,arrayX)
  参数 array2, array3, ..., arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
  返回值  Array 对象 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
*/

/* 
  1. every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
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