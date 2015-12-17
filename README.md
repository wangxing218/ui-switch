#ui-switch 开关插件
可将checkbox变成流行的开关插件
纯css编写，api齐全
##[demo](http://wangxing218.github.io/ui-switch/test/demo.html)

##基于jquery,使用非常方便！
```javascript
// 实例化所有的开关
$('.ui-switch').ui_switch();

// 取得已实例的开关对象
var us = $('#us_01').data('ui-switch');

// 点击事件
us.click = function(stauts, el) {
    console.log('click', stauts, this.val());
};

// 状态改变事件
us.change = function(stauts, el) {
    console.log('change', stauts, el.val());
};

// API

// us.on()          //开
// us.off()         //关
// us.toggle()      //切换
// us.disable()     //禁用
// us.enable()      //启用
// us.getStatus()   //获取开关状态
// us.val()         //获取value
// 
```

##兼容性
IE8+, Chrome, Firefox, Edge, 360, Sougou 等主流浏览器;

##作者
###网站： <a href="http://www.boyxing.com/" target="_blank">www.boyxing.com 星仔博客</a>
### QQ ： <a href="http://wpa.qq.com/msgrd?v=3&uin=1263996779&site=qq&menu=yes" target="_blank">1263996779</a>



