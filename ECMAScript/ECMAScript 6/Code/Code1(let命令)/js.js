// /**
//  * Created by killer on 2016/7/23.
//  */
// /**
//  * 代码块测试，在同一个文件中，但代码块不同
//  */
// {
//     let a = 10;
//     var b = 1;
// }
// //console.log(a);
// console.log(b);
//
//
// /**
//  * 此处用let和var的结果不同
//  * @type {Array}
//  */
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6]();
//
// /**
//  * 变量提升
//  */
// console.log("变量提升：")
//
// console.log(foo); // 输出undefined
// console.log(bar); // 报错ReferenceError
//
// var foo = 2;
// let bar = 2;


var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();