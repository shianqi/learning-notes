* [let命令](#1)

<h2 id="1">let命令</h2>

* let命令所声明的变量，只在let命令所在的代码块内有效

```javascript
    {
      let a = 10;
      var b = 1;
    }
    
    a // ReferenceError: a is not defined.
    b // 1
    //注：JavaScript外部引用方式分文件写在同一个代码块中（全局）
```

* for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。

```
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```

* let 不存在变量提升

* 暂时性死区
```
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
也意味着 `typeof` 不再是一个百分之百安全的操作。

* let不允许在相同作用域内，重复声明同一个变量。

<h2 id="2">块级作用域</h2>

* do 表达式 
在块级作用域之前加上do，使它变为do表达式。
```
let x = do {
  let t = f();
  t * t + 1;
};
```

<h2 id="3">变量解构赋值</h2>
```
let [a, b, c] = [1, 2, 3];
```