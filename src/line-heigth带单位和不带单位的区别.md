``` html
<div class="parent">
    <div class="child1">
        <!-- 证明2：此 line-height = 60px，是由其自身line-height（值为2，从父元素继承来的）其自身font-size = 30*2 = 60px。-->
        <div class="cc">ch1</div>
    </div>
    <div class="child2">
        <!-- 证明3：此 line-height = 40px，是由父元素line-height直接继承来的。而不是其本身font-size值30*2 = 60px-->
        <div class="cc">ch2
        </div>
    </div>
</div>

<style>
    body{
        font-size: 16px;
    }
    .parent{
        font-size: 20px;
        /* 论述1：em是对自身的font-size而言的，而不是父元素。 */
        /* 证明1：margin-top=40px，由其自身font-size*2，而不是父元素body的font-size*2=32px 。由此可证：em是对自身的font-size而言的，而非父元素 */
        margin-top: 2em; 
    }
    .child1{
        /* 论述2： line-height为数字时，继承的也是数字。其计算方式为line-height乘以自身font-size 。*/
        line-height: 2;
    }
    .child2{
        /* 论述3： line-height单位为em时，继承的是经过计算后具体的值。其计算方式见论述1。*/
        line-height: 2em;
    }
    .cc{
        font-size: 30px
    }
</style>
```