假设有计算属性A

初始化:初始化computed---增加Watcher---传入lazy=true---设置A的get钩子---定义defineProperty

取值:
dirty===true
触发get钩子---执行A()得到值---值存于Watcher(缓存)---dirty置为false--返回watcher值
dirty===false
触发get钩子---返回watcher值

data改变:Dep.target有值---触发Watcher---dirty为true


观察发现,初始化computed时,增加的Watcher传入了lazy变量,为什么变量名叫lazy呢?实际上是因为对computed采用了懒求值的处理.什么是懒求值?就是只会在用到computed值的时候才去计算值.计算完就把值就存到Watcher中,除非下次取值时computed中引用的data改变了,否则直接返回Watcher中的值.当data改变时,Watcher中dirty置为true,下次取值时再重新执行computed中函数,得到新的值.同时将dirty置为false,将新值存于Watcher中.
其实Watcher中dirty变量是脏的意思,也就含有一些脏检查的意思,表示着computed值并不会针对其中引用的某个data改变而改变,而是直接执行原computed定义函数再次求值.
采取以上的实现方式还要得益于js的单线程特性,否则会出现一个问题就是:一边在改变data一边在取computed值时,取出的computed值根实际值并不一致.现在看来js的单线程好处多多呀,不单单可以避免处理DOM时DOM已经被移除的问题,虽然可能当初这么设计的出发点是如此.


参考:https://juejin.im/post/5afbfce56fb9a07ac0226f21


以上还要一个未解答的问题:data改变时,是如何触发computed的Watcher的呢?线索在Dep中.