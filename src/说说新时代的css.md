css，甚至有人叫成cs，在前端技术日新月异的今天，css好像有点落后。随之产生了一系列更快更方便地写css的工具。
Sass,Less,Stylus
Postcss
css in js
css modules

css in js
用js对象或json的方式写css

css modules
通过给class增加hash，达到局部作用域的作用。也可定义全局作用域。而且可以很方便的使用composes来复用class

styled-components
css in js 的一种，样式写在js中，但是写法根css完全一样，查看示例
``` javascript
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
```
使用：
``` html
<Rotate></Rotate>
```
以上会被转换成
``` html
<div class="cidjCj"></div>
```

优点：无缝接入react，最符合all in js 的思想。使用了类似js的extend来实现复用，同时支持嵌套。在css in js 中很值得尝试。
缺点：className随机，外部想覆盖有困难。
