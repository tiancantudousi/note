var obj = {name:'张三', age: 12, test: [{company:'软通动力'}]}
var template = "欢迎来到{{name}}的面试，你的年龄是{{age}}，公司是{{test[0].company}}，面试时间30分钟"
function render(ctx, template){
  let reg = /\{\{.*?(\}\})/g // 匹配{{}}需要用\做非转义处理，.表示任意字符，*表示不限次数匹配，?表示非贪婪，不然会匹配到第三个}},而不是第一个}}
  return template.replace(reg, (value)=>{
    value = value.replace(/(\{\{)|(\}\})/g,'')
    return eval('ctx.' + value)
  })
}
var result = render(obj, template)
console.log(result)
// 欢迎来到张三的面试，你的年龄是12，公司是软通动力，面试时间30分钟 result