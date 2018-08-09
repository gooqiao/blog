#### 有这么两段代码
- 1
``` js
var a = 4
var b={
    a:function(){
        console.log(a) // 4
    }
}
```
- 2
``` js
var a = 4
var b={
    a:function(){
        var a=54
        return function(){
            console.log(a) // 54
        }
    }
}
```
#### 第二段输出54,似乎再次印证了js函数作用域的说法
#### 第一段输出4,是不是也印证了js没有块级作用域这么一说呢？不然为什么输出的不是function a？


#### 尝试解释一下第一段代码。
> 执行b.a()时，函数a首先在函数自身中寻找有没有变量a，没有就依次往外部寻找，直到window。如果window没有，那么报错。
#### 问题：原型链和作用域链的区别？
> 解答：
``` js
var a = 4
var b={
    a:function(){
        console.log(a) // 输出4，而不是5，表示与原型无关。 而且其变量寻找过程是：先找函数内部是否定义，没有，依次向上寻找，知道找到为止。此处会一直找到window,window有定义a，输出window.a的值。如果知道window都没有定义，那么就报错：a is not define。
        console.log(this.a) // this,指向调用者，运行b.a时，指向b，s所以输出function a
    }
}
b.a.prototype.a=5 // 原型上的，只在new 出来的对象上才存在。所以new b.a().a === 5
```
``` js
// 好，整理一下。
// 定义在原型上的，只存在于new出来的实例里。
// this,是指向调用者的。b.a()时调用着是b，c.a()时调用着是c。
// 至于函数内部使用的a，遵循自内向外的寻找机制，与this、prototype都无关系。
```