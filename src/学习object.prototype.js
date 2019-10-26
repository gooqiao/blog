
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