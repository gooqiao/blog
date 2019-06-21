- # 自动引入styl
  使用style-resources

- # mixn 传入style片段
  ``` styl
  contrast() {
      background-color: #009688;
      {block};
  }

  .img{
      +contrast(){
          font-size: 24px;
      }
  }
  ```
- # 替换外部变量
  直接定义同名变量覆盖

- # mixn 支持style嵌套
  ``` styl
  plain-btn(color){
    &.plain{
      border 1px solid color
      color color
      background-color transparent
      margin-right 10px
      &:hover{
        background-color: color;
      }
    }
  }
  plain-btn(color-activity)
  ```

- # 另外, 跨作用域css 
  使用 /deep/ , 且可将/deep/ 下内容扩起来写多个class