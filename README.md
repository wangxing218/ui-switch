# ui-switch 开关插件
可将checkbox变成流行的开关插件
纯css编写，api齐全
[查看demo](http://htmlpreview.github.io/?https://github.com/wangxing218/ui-switch/blob/master/test/demo.html)

#基于jquery,使用非常方便！
```
// 实例化一个开关
$('input.ui-switch').ui_switch();

//获取开关的实例
var sw = $('#id').data('ui-switch');

//值改变时发生
sw.change = function(status , el ){
	
}

//点击开关时发生
sw.click = function(status , el ){
	
}
```

#预览
![](https://raw.githubusercontent.com/wangxing218/ui-select/master/test/demo.jpg)  

#兼容性
IE8+, Chrome, Firefox, Edge, 360, Sougou 等主流浏览器;


