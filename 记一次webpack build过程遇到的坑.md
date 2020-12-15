
### 问题错误信息
![Aaron Swartz](https://github.com/gooqiao/blog/blob/master/assets/webpackBuildError.png?raw=true)

### 问题说明
在同事机子npm run build报上面图片的错误，但在我机子完好。
根据错误信息，webpack的plugins有如下配置，出错的就是这个CopyWebpackPlugin。
![Aaron Swartz](https://github.com/gooqiao/blog/blob/master/assets/webpackBuildError.png?raw=true)

### 解决问题
检查目录是否正确————没有问题
检查所用包的版本是否有出入————版本一致
google看看有没有人遇到此问题：
查到项目github有这么一个Issues：
https://github.com/webpack-contrib/copy-webpack-plugin/issues/88
根据提示增加fromType: 'glob'配置， 满怀期待，运行npm run build，.............错误依旧。
除此之外也没看到其它靠谱的答案。
仔细查看错误信息，猜测可能是static目录下为空的原因。还记得用vue-cli生成项目是static下有个.gitkeep文件，当时还搜索了此文件是干嘛用的。
于是加回.gitkeep文件。
再次npm run build，等待结果，OK，错误消失。
ps：我机子和同时机子static下同样都是空的。
所以说有时候解决问题还需要联想能力呀！