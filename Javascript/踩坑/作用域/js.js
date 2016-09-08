/**
 * 作用域
 */

console.log('example 1');
var x = 3;

(function(){
    var x = 5;
    console.log(x);
}());

(function () {
    console.log(window.x);
    console.log(x);
}());