- 支持 Tree Shaking 的项目中配置
  使用 ES2015 模块语法（即 import 和 export）。
  确保没有编译器将您的 ES2015 模块语法转换为 CommonJS 的（顺带一提，这是现在常用的 @babel/preset-env 的默认行为，详细信息请参阅[文档](https://babeljs.io/docs/en/babel-preset-env#modules])。

  package.json 文件中，添加 "sideEffects":false 属性。

- 业务项目中
  mode 为 production 即可启用 tree shaking 效果  
  如果是 `mode:"development"`, 将 webpack 配置 为  
  `optimization: { usedExports: true, }`,  
  可看到未使用的代码有`/* unused harmony export xxx */`标示, 这表示该代码可以被 tree shaking 掉
