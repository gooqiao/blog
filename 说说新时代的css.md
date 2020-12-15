css，在前端技术日新月异的今天，css 好像发展的有点慢。如果说 js 在跑, 那 css 就只是在走。不过好在社区的力量是无限的, 产生了一系列更快更方便地写 css 的工具。
Sass,Less,Stylus
Postcss
css in js
css modules

css in js
用 js 对象或 json 的方式写 css

css modules
通过给 class 增加 hash，达到局部作用域的作用。也可定义全局作用域。而且可以很方便的使用 composes 来复用 class

styled-components
css in js 的一种，样式写在 js 中，但是写法根 css 完全一样，查看示例

```javascript
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
```

使用：

```html
<Rotate></Rotate>
```

以上会被转换成

```html
<div class="cidjCj"></div>
```

优点：无缝接入 react，最符合 all in js 的思想。使用了类似 js 的 extend 来实现复用，同时支持嵌套。在 css in js 中很值得尝试。
缺点：className 随机，外部想覆盖有困难。
