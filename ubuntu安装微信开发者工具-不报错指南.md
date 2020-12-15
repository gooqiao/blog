系统版本：ubuntu 16.04 LTS
之前按照https://github.com/cytle/wechat_web_devtools上的安装方法
安装运行，打开开发工具，编译小程序，报如下错误
``` 
/home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: 1: /home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: MZ������@������: not found
/home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: 2: /home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: cannot open .text�������.data��0����@�.rdata��@��*�@@.bssP�: No such file
/home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: 2: /home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: ���qZ���7������8�����: not found
/home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: 3: /home/ming/.config/微信web开发者工具/WeappVendor/wcc.exe: Syntax error: word unexpected (expecting ")")
```
找了各种办法，各种尝试都没能解决。

后来根据项目的另一个分支：https://github.com/cytle/wechat_web_devtools/tree/version_1 的安装说明，问题解决。
1. 卸载之前安装的winehq
2. 安装低版本wine：sudo apt install wine，
3. 这样设置32位环境：WINEARCH=win32 WINEPREFIX=~/.wine32 winecfg
4. 安装微信开发者工具：./bin/wxdt install 
5. 启动，编译成功。


### 问题原因
wine版本太高
winehq的版本是3.0,wine的版本是1.6

<!-- todo：完整安装不报错指南 -->