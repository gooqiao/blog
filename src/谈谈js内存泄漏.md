js可以很方便的使用闭包，你可能都不知道自己使用了闭包。
闭包这个特性一句话解释就是：为方便在不同作用域中使用另一个作用域的变量。
闭包很好使，不过也很容易造成内存泄漏。
内存泄漏就是由于对象不断被创建，造成内存负担越来越大，当超过系统给程序分配的内存时，程序就会崩溃。
如下所示：
``` javascript
function addHandler() {
    var el = document.getElementById('el');
    el.onclick = function() {
        el.style.backgroundColor = 'red';
    }
}
```
这段代码创建了一个元素，当它被点击的时候变红，但同时它也会发生内存泄露。为什么？因为对 el 的引用不小心被放在一个匿名内部函数中。这就在 JavaScript 对象（这个内部函数）和本地对象之间（el）创建了一个循环引用。

这个问题有很多种解决方法，最简单的一种是不要使用 el 变量：

``` javascript
function addHandler(){
    document.getElementById('el').onclick = function(){
        this.style.backgroundColor = 'red';
    };
}
``` 
这段代码的onclick方法中，不存在对onclick方法外部变量的循环引用，所以不会有内存泄漏问题。

