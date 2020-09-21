
``` js
// 代码段 A
Function.prototype.methods = function(){
    console.log(555)
}

Function.methods() // 有效
Object.methods === Function.methods // true

// 代码段 B
Object.__proto__ === Function.prototype // true
Function.prototype.__proto__ === Object.prototype // true 
// 由上可知：
Object.__proto__.__proto__ === Object.prototype // true

Object instanceof Function // true
Object.constructor === Function // true 

// 所以，Object拥有Function定义的所有方法。// Object.__proto__ === Function.prototype
// 而且Object也是一个方法，所以才可以new Object()。//Object instanceof Function //output: true 
// 内部的实现：
// 1. 将Object的【原型指向】指向Function的原型。// 所以可以调Function原型上的方法，如Object.call
// 2. 将Function的原型的【原型指向】指向Object的原型，所以才有代码段A的情况。// 等于有了一个循环引用。
// 3. 将Object.constructor指向Function，所以可以把Object当成函数或构造器使用，如new Object()
```


2020-9-21补充
1. 首先明确原型 和 原型链

    原型是个属性, 这个属性就是prototype, 每个构造函数都可以有自己的原型

    原型链更多是运行时概念, 是构造函数"实例"读取属性的一种手段, 读取属性时先读取自身的属性, 再从原型链上逐级向上查找属性. 下面用__proto__表示原型链

2. Function的原型和原型链

    Function.__proto__ === Function.prototype

    Function.prototype.__proto__ === Object.prototype
3. Object的原型和原型链

    Object.__proto__ === Function.prototype

    Object.prototype.__proto__ === null

4. 总结

    因为 Function.prototype.__proto__ = Object.prototype  
    所以可以说, Function继承Object, "即Function可以使用Object上的方法和属性"  

    因为 Object.__proto__ = Function.prototype   
    所以Object可以使用Function上的方法和属性

    关键点在 Function.prototype.__proto__ = Object.prototype 和 Object.__proto__ = Function.prototype 这两句  
    一个将Function指向Object, 一个将Object指向到Function, 最终都指向Object.prototype  
    然后以Object.prototype.__proto__ = null作为原型链最顶端结束.


    
    
