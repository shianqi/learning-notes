# CSS3 flex 布局

Flex 是Flexible Box的缩写，意为"<span class="yellow">弹性布局</span>"，
用来为盒状模型提供最大的灵活性。<br/> 
任何一个容器都可以指定为Flex布局。<br/>
```css
.box{
  display: flex;
}
```
行内元素:
```css
.box{
  display: inline-flex;
}
```

Webkit内核的浏览器，必须加上-webkit前缀。

```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
<span class="red">注意</span>:设为Flex布局以后，子元素的
<span class="yellow">float</span>、
<span class="yellow">clear</span> 和
<span class="yellow">vertical-align</span> 
属性将失效。

## 语法

在容器(<span class="yellow">container</span>)中的语法：
```css
/*flex container 容器*/
.container{
    display: -webkit-flex;              /* 定义flex布局，兼容webkit */
    display: flex;                      /* 定义flex布局 */
    
    flex-direction: row;                /* 主轴方向 */
    flex-wrap: wrap;                    /* 主轴为一行时如何换行 */
    flex-flow: row wrap;                /* <flex-direction>||<flex-wrap> */
    justify-content: space-between;     /* item 排列方式 */
    align-items: flex-start;            /* item在交叉轴上如何对齐 */
    align-content: flex-start;          /* 多根轴线的对齐方式 */
}
```
在子模块(<span class="yellow">item</span>)中的语法：
```css
/*flex item*/
.item{
    order: 0;                           /* item顺序*/
    
    flex-grow:1;                        /* 按比例占据空间 */
    flex-shrink: 1;                     /* 按比例缩小 */
    flex-basis: 500px;                  /* 占据主轴的空间 */
    /*flex: 0 1 auto;*/                 /* 上面三个属性的缩写 */
    
    align-self: flex-end;               /* 单个项目有与其他项目不一样的对齐方式 */
}
```


文章参考：[原文链接](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

<style>
.red{
    color: #ff6767;
}
.yellow{
    color: #ffc300;
}
</style>