## javascript库

library ,是封装好的特定的集合（方法和函数）。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面。比如animate、hide、show，获取元素等；

简单理解：就是一个js文件，里面用原生的JS代码进行了封装存放到库里面，我们可以快速高效的使用封装好的功能；

常见的javascript库：jQuery、Prototype、YUI、Dojo、ExtJS、移动端的zepto，这些库都是对原生javascript的封装，内部都是用javascript实现的，我们主要学习的是jQuery;

# jQuery

## jQuery概述

概念：jQuery是快速。简洁的javascript库，其设计的宗旨是“write Less，Do More”,写最少的代码，做更多的事情；

jQuery封装了javascript常用的功能代码，优化了DOM操作，事件处理、动画设计和Ajax交互；

学习jQuery的本质：---- 就是学习调用这些函数（方法）；

jQuery出现的目的加快前端人员的开发速度，我们可以非常方便的调用和使用，提高开发效率；

优点：

01 轻量级，核心文件才几十KB，不会影响页面的加载速度

02 跨浏览器兼容，基本兼容了现在主流的浏览器；

03 链式编程、隐式迭代；

04 对事件、样式、动画支持，简化了DOM操作；

05 支持插件扩展开发，有丰富的第三方插件，例如：树形菜单、日期控件、轮播图等；

06 免费、开源；

## jQuery使用步骤

官网：<https://jquery.com/>

版本：1x 兼容IE678等低版本浏览器，官网不更新；

​           2x 不兼容IE678等低版本浏览器，官网不在更新；

​           3x  不兼容IE678等低版本浏览器，是官方主要更新维护的版本；

各个版本下载网址：<http://code.jquery.com/>

使用步骤：下载jQuery   ----  引入 ----- 如果要写在前面就需要设置入口函数

## jQuery入口函数

01、入口函数是等着DOM结构加载完毕即可执行内部代码，不必等到所有外部资源加载完成，Jquery帮我们完成了封装。

02、相当于原生js中的DOMContentLoaded;

03、不同于原生js中的load事件是等页面文档、外部js文件、css文件、图片加载完毕蔡志新内部代码；

写法1：

```html
    <script src="jQuery.js"></script>
    <script>
        $(document).ready(function () {
           //此处是页面DOM加载完成的入口
        })
    </script>
```

方法2：

```html
    <script src="jQuery.js"></script>
    <script>
        $(function () {
           //此处是页面DOM加载完成的入口
        })
    </script>
```

## jQuery的顶级对象 $

01、  **$**是jQuery的别称，在代码中可以使用jquery代替,但是一般为了方便我们就直接是用**$**;

02、**$**是jQuery的顶级对象，相当于原生javascript中的window，吧元素利用$包装成jQuery对象，就可以调用jQuery的方法；

## jQuery对象和DOM对象

01、原生js获取来的对象是DOM对象；

02、jQuery对象：用jQuery方法获取的元素。---- 本质：通过$把DOM元素进行了包装产生的对象（伪数组形式存储）；

03、jQuery对象只能使用jQuery方法获取的属性和方法；

04、DOM对象只能使用javascript原生的属性和方法；

## jQuery对象和DOM对象的相互转换

DOM对象和jQuery对象之间是可以相互转换的；

因为原生的js比jQuery更大，原生的一些属性和放jQuery没有封装，想要使用这些属性需要把jQuery对象转化为DOM对象才能使用；

01、DOM对象转化为jQuery对象   ----- $(DOM对形象)

​      先用原生js吧DOM对象获取，然后用$进行转化为jQuery对象，小括号中不加引号；

```js
    <script>
        $(function () {
            var box = document.querySelector('.box');
            // box.style.display = 'none';
            // 将DOM对象转化为jQuery对象
            $(box).hide()
        })
    </script>
```

02、jQuery对象转换为DOM对象（两种方式）

​      **方法1：jQuery对象[index]    index是索引号**

​     **方法2：jQuery对象.get(index)  index是索引号**

比如play()这个方法没有被JQ封装，那么我们就可以先用原生方法获取DOM元素，然后转化为JQ对象去调用

```js
    <script>
        $(function () {
            // 将JQ对象转化为DOM对象
            $('video')[0].play();
            $('video').get(0).play();
        })
    </script>
```

## jQuery常用API

### jQuery基础选择器

语法：小括号里面的直接写css选择器即可，必须要用引号引起来（英文的引号）；

```
$("选择器")
```

![](E:\BaiduNetdiskDownload\jQuery\jQuery 第一天\引导笔记整理\img\基础选择器.png)

### jQuery层级选择器

语法：小括号的引号里面直接书写子代选择器、后代选择器即可；

```
$("复合选择器")
```

![](E:\BaiduNetdiskDownload\jQuery\jQuery 第一天\引导笔记整理\img\层级选择器.png)

### 隐式迭代

遍历内部DOM元素（伪数组形式存储）的过程叫做隐式迭代；

简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作和调用；

### 筛选选择器

$后面的小括号中直接书写css3的结构伪类选择器即可

![](E:\BaiduNetdiskDownload\jQuery\jQuery 第一天\引导笔记整理\img\筛选选择器.png)

### jQuery筛选方法（重点）

![](E:\BaiduNetdiskDownload\jQuery\jQuery 第一天\引导笔记整理\img\筛选方法.png)

**以上方法我们需要重点记住下面这几个**

选中父级：parent()

选中第一级子级盒子（只选儿子）： children()

选中所有后代（不管是儿子、孙子）： find()

选中除了自己以外的所有的兄弟： siblings()

选中当前索引值的元素，索引值从0开始计算 ： eq(index)

### jQuery中的当前元素this

在jQuery中当前元素this的写法是 ----- $(this)   小括号中不需要写引号

### jQuery排他思想

利用jQuery的隐式迭代，让当前操作的元素更改，同时其余的兄弟也要去进行相应的更改；

当前元素我们用$(this)

其余的兄弟盒子我们用siblings()

```html
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <script>
        $(function() {
            // 1. 隐式迭代 给所有的按钮都绑定了点击事件
            $("button").click(function() {
                // 2. 当前的元素变化背景颜色
                $(this).css("background", "pink");
                // 3. 其余的兄弟去掉背景颜色 隐式迭代
                $(this).siblings("button").css("background", "");
            });
        })
    </script>
```

### jQuery获取当前元素索引号

jQuery中获取当前元素索引号的方法是：  $(this).index();

### 淘宝精品案例

```html
    <script src="jquery.min.js"></script>
    <script>
        $(function () {
            // 鼠标经过left下面的li的时候
            $('#left li').mouseover(function () {
                // 获取当前li的索引值
                var index = $(this).index();
                // content里面的div盒子调用前面的索引值显示隐藏
                // 让当前索引值的盒子显示
                $('#content>div').eq(index).show();
                // 其他div隐藏
                $('#content>div').eq(index).siblings('#content>div').hide();
            })
        })
    </script>
```

### jQuery链式编程

链式编程是为了节省代码量-----

使用链式编程一定要注意是那个对象执行样式；

```js
$(this).css('color','red').sibling().css('color');
```

### css()方法

jQuery可以使用css方法来修改简单元素样式，也可以操作类，修改多个样式；

01 参数只写属性名，则是返回属性值

```
$(this).css('属性名')
```

02 参数是属性名，属性值。用逗号分开，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号

```
$(this).css('属性','属性值')
```

03、参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不加引号；

```
$(this).css({
     '属性1':'属性值1',
     '属性2':'属性值1',
     ...
})
```

### 

### jQuery设置类样式方法

作用类似于以前的classList，可以操作类样式，注意操作类里面的参数不要加点

添加类

```
$('选择器').addClass('类名')
```

移除类

```
$('选择器').removeClass('类名')
```

切换类

```
$('选择器').toggleClass('类名')
```

### jQuery类操作和className类操作的区别

className是原生js的类操作，会覆盖原先的类名；

jQuery里面的类操作只是对指定类进行操作，不影响原先的类名；

### 选项卡案例

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
        }

        .tab {
            width: 300px;
            height: 500px;
            margin: 30px auto;
        }

        .tab_nav {
            height: 45px;
            background: pink;
        }

        .tab_nav li {
            float: left;
            width: 100px;
            height: 45px;
            background: #dedede;
            text-align: center;
            line-height: 45px;
            color: #333;
            cursor: pointer;
        }

        .tab_nav .current {
            background: pink;
        }

        .tab_con .itme {
            display: none;
            width: 300px;
            height: 300px;
            background: pink;
        }
    </style>

    <div class="tab">
        <div class="tab_nav">
            <ul>
                <li class="current">农业新闻</li>
                <li>科技新闻</li>
                <li>运动新闻</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="itme" style="display: block;">农业</div>
            <div class="itme">科技</div>
            <div class="itme">运动</div>
        </div>
    </div>
```

```js
    <script src="jQuery.js"></script>
    <script>
        $(function () {
            // 点击li的时候
            $('.tab_nav li').click(function () {
                // 让自己的背景颜色改为pink色
                $(this).addClass('current').siblings().removeClass('current');
                // 同时获取当前的索引值
                var index = $(this).index();
                // 让内容盒子中itme盒子按照获取的index值显示隐藏
                $('.tab_con .itme').eq(index).show().siblings().hide();
            })
        })
    </script>
```

## jQuery动画效果

### 显示隐藏

显示    show()

隐藏    hide()

切换    toggle()

**语法规范**

```
show([speed],[easing],[fn])
```

01、参数都可以省略，无动画直接显示；

02、speed：三种预定速度之一的字符串（'show','normal','fast'）或表示动画时长的毫秒数值（如：1000）；

03、easing：（Optional）用来指定切换效果，默认是“swing”，可用参数“linear”；

04、fn：回调函数，在动画完成是执行的函数，每个元素执行一次；

### 事件切换hover

jQuery提供了一个hover方法，hover([over],out),小括号中需要传两个函数，第一个函数表示鼠标移到元素上要触发的函数（相当于mouseenter）,第二个函数表示鼠标移出元素要触发的函数（相当于mouseleave）；

hover事件如果里面只写一个函数，表示鼠标经过和鼠标离开都会触发这个函数；

```js
            $('选择器').hover(function(){
                // 鼠标移入的时候
            },function(){
                // 鼠标离开的时候
            })
```

### 滑动动画

上滑  slideDown()

下滑 slideUp()

切换 slideToggle()

注意：使用的时候可以在小括号中书写毫秒数控制动画的滑动速度；

### JQ动画排列

动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行；（就是要等另一个动画执行完事了再去执行下一个动画）

解决方案：我们需要在执行新的动画之前就把之前的动画停止，jQuery给我们提供给了一个stop()方法；

```js
$(this).children("ul").stop().slideToggle();
```

01、stop()方法用于停止动画或者效果，必须要写在动画前面；

02、stop()写到动画或者效果前面，相当于停止结束上一次的动画；

### 淡入淡出动画

淡入  fadeIn()

淡出 fadeOut()

切换 fadeToggle()

修改透明度  fadeTo(速度，透明度)  

 fadeTo里面的两个参数速度我们直接书写毫秒数表示在规定时间内执行，透明度去0到1之间的值，表示透明的程度

**突出高亮显示效果**

```js
    <script src="jquery.min.js"></script>
    <script>
        $(function() {
            //鼠标进入的时候,其他的li标签透明度：0.5
            $(".wrap li").hover(function() {
                $(this).siblings().stop().fadeTo(400, 0.5);
            }, function() {
                // 鼠标离开，其他li 透明度改为 1
                $(this).siblings().stop().fadeTo(400, 1);
            })

        });
    </script>
```

### 自定义动画animate

语法

```js
animate(params,[speed],[easing],[fn])
```

01、params想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是符合属性则需要采用驼峰命名法borderLeft。其余参数可以省略；

02、speed：三种预定速度之一的字符串（'show','normal','fast'）或表示动画时长的毫秒数值（如：1000）；

03、easing：（Optional）用来指定切换效果，默认是“swing”，可用参数“linear”；

04、fn：回调函数，在动画完成是执行的函数，每个元素执行一次；

05、注意： 自定义动画可以连用设置多个动画，直接在一个animate动画后面书写另外一个即可；

```js
<script src="jQuery.js"></script>
<script>
    $('button').click(function () {
        $('.box').animate(
            {
                left: 800
            }, 1000
        ).animate(
            {
                top: 300
            }, 1000
        )
    })
</script>
```

### 手风琴效果

01、鼠标经过某个小li有两步操作：

02、当前的li宽度变为224px，同时里面的小图片淡出，大图片淡入；

03、其余兄弟xiaoli宽度变为69px，小图片淡入，大图片淡出；

04、注意：在制作效果之前一定要计算好宽度；

```js
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript">
        $(function() {
            // 鼠标经过某个小li 有两步操作：
            $(".king li").mouseenter(function() {
                // 1.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
                $(this).stop().animate({
                    width: 224
                }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
                // 2.其余兄弟小li宽度变为69px， 小图片淡入， 大图片淡出
                $(this).siblings("li").stop().animate({
                    width: 69
                }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
            })
        });
    </script>
```

```html
    <div class="king">
        <ul>
            <li class="current">
                <a href="#">
                    <img src="images/m1.jpg" alt="" class="small">
                    <img src="images/m.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/l1.jpg" alt="" class="small">
                    <img src="images/l.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/c1.jpg" alt="" class="small">
                    <img src="images/c.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/w1.jpg" alt="" class="small">
                    <img src="images/w.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/z1.jpg" alt="" class="small">
                    <img src="images/z.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/h1.jpg" alt="" class="small">
                    <img src="images/h.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/t1.jpg" alt="" class="small">
                    <img src="images/t.png" alt="" class="big">
                </a>
            </li>
        </ul>

    </div>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }
        
        img {
            display: block;
        }
        
        ul {
            list-style: none;
        }
        
        .king {
            width: 852px;
            margin: 100px auto;
            background: url(images/bg.png) no-repeat;
            overflow: hidden;
            padding: 10px;
        }
        
        .king ul {
            overflow: hidden;
        }
        
        .king li {
            position: relative;
            float: left;
            width: 69px;
            height: 69px;
            margin-right: 10px;
        }
        
        .king li.current {
            width: 224px;
        }
        
        .king li.current .big {
            display: block;
        }
        
        .king li.current .small {
            display: none;
        }
        
        .big {
            width: 224px;
            display: none;
        }
        
        .small {
            position: absolute;
            top: 0;
            left: 0;
            width: 69px;
            height: 69px;
            border-radius: 5px;
        }
    </style>
```



















































































































