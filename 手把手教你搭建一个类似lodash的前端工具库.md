### 背景

随着公司业务扩大,前端项目相应的越来越多,项目中有些工具类代码逻辑相同, 如果在每个项目中复制一份十分不利于维护, 那么就需要一个工具库, 通用代码直接写在这个仓库中,发布到公司私有 npm, 业务项目需要用到时通过 npm 安装即可.
既然是前端工具库, 肯定要支持按需加载, 加之考虑到工具库都是 fun 的形式, 那就干脆一个 fun 一个文件了, 简单清晰方便维护. 为了让仓库内容一目了然、减少目录跳转, 代码直接写在根目录, 不再需要 src 目录.

### 定义规范

- 文件名以\_开头表示不暴露给使用者的代码, 这些代码仅为了在此项目内部代码复用
- test 文件写在 test 目录下, 每个文件以.test.ts 结尾
- 类型定义放在 types 目录下
- 一个文件只暴露一个 fun, 一个文件只做一件事情

### 开干

#### 初始化

新建目录, 然后
`npm init`

#### 安装 ts

`npm i typescript`

#### 配置 ts

新建 tsconfig.json, 填入以下内容

```json
{
  "exclude": ["./node_modules", "./lib", "./test"],
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "declaration": true,
    "outDir": "lib",
    "rootDir": "./",
    "strict": true,
    "baseUrl": "./",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

exclude 表示排除 ts 检查和 build 的目录  
 outDir: build 输出目录

#### 安装和配置 jest

`npm i jest`  
 生成配置: `npx jest --init`
过程中会有些选项让你选择, 我选择的是:

✔ Would you like to use Typescript for the configuration file? … no  
 ✔ Choose the test environment that will be used for testing › jsdom (browser-like)  
 ✔ Do you want Jest to add coverage reports? … yes  
 ✔ Which provider should be used to instrument code for coverage? › v8  
 ✔ Automatically clear mock calls and instances between every test? … yes

成功后会在增加 jest.config.js 文件

<!-- - 安装 babel

  `npm i -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript`
   安装`babel-jest`是因为 jest 需要. -->

#### 配置 npm script

在 package.json 里写上  
 `scripts: { "build": "tsc --build","test": "jest"}`

#### 编写代码

在项目根目录下, 随便写两个 ts 文件测试  
 示例:

```ts
// log.ts
export const log = (msg: string) => {
  console.log("file 1");
  console.log(msg);
};
```

```ts
// sum.ts
export const sum = (x: number, y: number) => {
  console.log("file 2");
  return x + y;
};
```

运行 npm run build , 可以看到代码已经被编译到了`lib`目录, 而且生成了对应的 d.ts 文件, 如果使用者使用了 ts, 可以有很好的类型提示.

#### 编写测试

新建 test 目录, 在该目录下新建一个测试文件  
 示例:

```ts
// log.test.ts
import { sum } from '../sum';

describe('sum', () => {
 it('sum 5+6', () => {
     expect(sum(5,6])).toEqual(11);
 });
})
```

tip: 注意上面的文件名, test 我们写成 xxx.test.ts 的形式

如果提示找不到 describe 等定义, 执行`npm i @types/jest`

然后我们运行测试, 执行`npm run test`, 发现报错: ` SyntaxError: Cannot use import statement outside a module`

这表示 jest 不支持 es module 写法, 没关系, 可以通过修改 jest 配置解决

在 jest 配置文件 jest.config.js 里写上` transform: { "\\.ts$": ['ts-jest'] }`

然后执行`npm i ts-jest`

再次运行测试, OK, 测试代码成功运行, 测试通过.

一个完整且漂亮的 js 工具库就这样搭建成功了, 支持 ts, 支持单元测试

github 地址: <https://github.com/gooqiao/jtools>

### 按需加载

tip: 以下假设你的 package name 是 jtools, 如果不是, 替换成你的.

- 首先安装 babel-plugin-component

  `npm i babel-plugin-component -D`

- 配置 babel

  在`.babelrc`文件中写入

  ```js
  {
    "plugins": [["component", {
      libraryName: "jtools",
      style: false,
      libDir: "lib",
      camel2Dash: false,
    }]]
  }
  ```

- 业务项目中

  `import { log } from 'jtools'`  
  这样就只会引入用到的 log, 其它代码在打包时都不会被引入
