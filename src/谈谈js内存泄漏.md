js可以很方便的使用闭包，你可能都不知道自己使用了闭包。
闭包这个特性一句话解释就是：为方便在不同作用域中使用另一个作用域的变量。
闭包很好使，不过也很容易造成内存泄漏。
内存泄漏就是程序需要的内存超出了系统分配给程序的内存。具体到js，就是由于对象不断被创建或对象不能被释放，需要的内存越来越多，当超过系统给程序分配的内存时，就会引发内存泄漏，使程序崩溃。
如下所示：
``` javascript
function addHandler() {
    var el = document.getElementById('el');
    el.onclick = function() {
        el.style.backgroundColor = 'red';
    }
}
```
这段代码创建了一个元素，当它被点击的时候变红，但同时它也会发生内存泄露。为什么？因为onclick函数内又引用了el变量，造成el变量始终不能释放。
如果这样不能释放内存的变量极少成多，内存耗尽，内存泄漏就会发生。

这个问题有很多种解决方法，最简单的一种是不要使用 el 变量：

``` javascript
function addHandler(){
    document.getElementById('el').onclick = function(){
        this.style.backgroundColor = 'red';
    };
}
``` 
这段代码的onclick方法中，不存在对onclick方法外部变量的循环引用，所以不会有内存泄漏问题。

