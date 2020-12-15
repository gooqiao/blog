文章来源：http://www.cnblogs.com/hoji-real/archive/2011/11/24/2261611.html


加快 Ubuntu wine 速度由于 X locale 的问题， 默认 wine 会轮询 x core fonts ，使得 Ubuntu wine 很慢，请先执行:: 
sudo sed -i -e '/GBK/,/^}/d' /usr/share/X11/locale/zh_CN.UTF-8/XLC_LOCALE

如果发现wineserver和winemenubuilderwine的将近100%的CPU，可以通过下面的方式来解决： 
找到并打开user.reg，查找[Software\\Wine\\MenuFiles]，将其所有包含乱码的子项目删除，杀掉所有wine进程(pkill wine)即可。