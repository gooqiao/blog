运行
``` javascript
let a = new Date()
a.toJson()
```

发现返回时间比实际时间少六个小时,应该是时区的原因.本来想着使用toJson()处理date方便点,现在想来还是算了吧,并没有方便多少.