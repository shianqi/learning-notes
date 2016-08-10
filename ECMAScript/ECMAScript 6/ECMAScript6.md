* [let命令](#1)

<h3 id="1">let命令</h3>
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

