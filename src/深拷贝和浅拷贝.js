var base = {
    name:'mm',
    age:3,
    family:{
        father:{
            name:'mt',
            age:31
        },
        mother:{
            name:'ny',
            age:29
        }
    }
}


var extendSymbol = {...base}
var objectCreate = Object.create(base)
var objectAssign = Object.assign(base)

var isEqual = extendSymbol.family === base.family && base.family === objectCreate.family // true
// so:
// 无论是扩展运算符还是object.create方法，都只会复制对象的第一层属性。
// 但是：
// 扩展运算符跟Object.create还是不一样的。
// 扩展运算符是遍历第一层属性让后以此赋值给新的对象
// Object.create是通过构造函数，将构造函数的原型指向传过来的对象，然后返回一个新实例。
// Object.assign和扩展运算符基本一样。


// 最后说下浅拷贝和直接赋值的区别。直接赋值是把=号左边变量直接指向右边，浅拷贝是复制对象第一层属性，对于属性内的属性还是指向原对象属性的引用。