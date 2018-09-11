
// 代码示例：
// testI = 5
// testO = {name:"mm"}
// @Watch("testI",{deep:true})
// testIC(){
//     console.log(JSON.stringify( Array.from( arguments)),'基本类型');
// }
// @Watch("testO",{deep:true})
// testOC(){
//     console.log(JSON.stringify( Array.from( arguments)),'引用类型');
// }



// vue watch 运行情况：
// 值为基本类型时：
// watch只会在oldVal !== newVal时在触发
// 值为引用类型
// 只要watch对象被赋值就触发，不管oldVal是否等于newVal。
// 使用deep时，watch是否触发由上面两条决定。即：内部属性是基本类型时，由第一条决定。内部属性是引用类型时，由第二条决定。

// 总结：
// 1.在不使用deep监听的情况下，watch回调里oldVal === newVal永远为false。vue会在触发watch前会判断oldVal 是否=== newVal。
// 2.使用了deep监听的情况下，基本类型触发机制不变。引用类型触发机制：
    // 改变内部属性时：oldVal === newVal永远为true。因为指向还是自身。
    // 改变自身时：oldVal === newVal永远为false。因为自身被重新赋值。
// so.不要寄托于在watch回调里判断新值和旧值是否相等。相等只能说明改变的是内部属性，其它情况都是不相等。