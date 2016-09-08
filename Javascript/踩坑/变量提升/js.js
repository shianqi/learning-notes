/**
 * 变量提升
 */

console.log('例子：1');
console.log(a); // 输出undefined
try{
    console.log(b); // 报错ReferenceError
}catch (e){
    console.log('ReferenceError');
}
var a = 2;
let b = 2;


console.log('例子：2');
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
    console.log(window.foo);
}
bar();