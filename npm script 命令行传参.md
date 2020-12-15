#### 假设要给npm run test 传参
1. 命名参数  
传：`npm run test --path ./src/`  
接：`${path}`  
示例：```{"test":"test ${path} start"}```  
1. 非命名参数 (按照顺序)  
传：`npm run test -- ./src/`  
接：`$1`  
示例：`{"test":"test $1 start"}`  