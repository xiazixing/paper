# paper
利用正则表达式把word文档里的大量调查卷试题快速地套进规定的html模块，以页面形式展现出来。
##正则表达式

* 去除多余的空格,注：不管是英文还是中文字符串之间的空格和换行符都被去除（慎用）

 ``replace(/\s+/g, "")``
* 匹配形如“ 数字+、 ”的字符串替换成‘ * ’字符

 ``replace(/[0-9]+、/g, "*")``

##分割

* 遇到*就分割
  
 ``split("*")``
* 遇到\n就分割
 
 ``split("\n")``
* 遇到 ‘ 答案： ’ 就分割
 
 ``split("答案：")``

##使用
* 首先在index.html引入jquery库
* 接着引入paper.js
* 编写index.html,如下：
 ![paper](paper.jpg)

##效果
* html效果

 ![dir](dir1.jpg)
 
* 页面效果

 ![dir](dir2.jpg)

##DEMO
http://htmlpreview.github.io/?https://github.com/xiazixing/paper/blob/master/index.html
