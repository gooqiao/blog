#### vue-loader文档:https://vue-loader.vuejs.org/zh/guide/pre-processors.html#stylus
  
  
  1. 怎么支持stylus写法
  ``` shell
  npm i stylus stylus-loader -D
  ```
  2. 怎么引入单独stylus文件
  > 
  ``` js
  @import './common/global.styl'
  ```
  3. 怎么使用路径别名
  > 使用~符号，此符号在webpack中，表示模块解析，后面跟@，也就是vue常用的@的符号  
  > 
  > *参考：https://hq5544.github.io/vue-webpack/static.html#%E8%B5%84%E6%BA%90%E8%B7%AF%E5%BE%84%E7%9A%84%E5%A4%84%E7%90%86*  
  > 
  > 示例：
     ``` 
      @import '~@/common/global.styl'
      ```  
    
  4. 怎么在js里引入css
  > 
    > ``` js 
    > import '@/common/global.styl'
    > ```
  > 