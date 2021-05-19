## jQuery事件注册

### 单个事件注册

语法：

```js
element.事件(function(){})       
```

其他事件和原生基本一致。

比如mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll 等

```js
 $("div").click(function() {
     $(this).css("background", "purple");
 });
 $("div").mouseenter(function() {
      $(this).css("background", "skyblue");
 });
```

### 事件处理 on() 绑定事件

语法：

```js
element.on(events,[selector],fn)       
```

01、events:一个或多个用空格分隔的事件类型，如"click"或"keydown"。

02、selector: 元素的子元素选择器 。

03、回调函数即绑定在元素身上的侦听函数。 

#### 绑定多个事件

绑定多个事件，多个处理事件处理程序

```js
$("div").on({
      mouseenter: function() {
         $(this).css("background", "skyblue");
      },
      click: function() {
        $(this).css("background", "purple");
      },
     mouseleave: function() {
       $(this).css("background", "blue");
    }
});
```

不同事件处理相同程序

```js
$("div").on("mouseenter mouseleave", function () {
    $(this).toggleClass("current");
});
```

#### 事件处理 on() 事件委派

01、可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。

```js
// $("ul li").click();
$("ul").on("click", "li", function () {
    alert(11);
 });
// click 是绑定在ul 身上的，但是 触发的对象是 ul 里面的小li
```

在此之前有bind(), live(),delegate()等方法来处理事件绑定或者事件委派，最新版本的请用on替代他们。

02、动态创建的元素，click() 没有办法绑定事件， on() 可以给动态生成的元素绑定事件 

```js
$("div").append($("<p>我是动态创建的p</p>"));
$('div').on('click','p', function(){
     alert("俺可以给动态生成的元素绑定事件");
 });
```

#### 微博发布案例

```html
    <style>
        * {
            margin: 0;
            padding: 0
        }
        
        ul {
            list-style: none
        }
        
        .box {
            width: 600px;
            margin: 100px auto;
            border: 1px solid #000;
            padding: 20px;
        }
        
        textarea {
            width: 450px;
            height: 160px;
            outline: none;
            resize: none;
        }
        
        ul {
            width: 450px;
            padding-left: 80px;
        }
        
        ul li {
            line-height: 25px;
            border-bottom: 1px dashed #cccccc;
            display: none;
        }
        
        input {
            float: right;
        }
        
        ul li a {
            float: right;
        }
    </style>
    <script src="jquery.min.js"></script>
    <script>
        $(function() {
            // 1.点击发布按钮， 动态创建一个小li，放入文本框的内容和删除按钮， 并且添加到ul 中
            $(".btn").on("click", function() {
                var li = $("<li></li>");
                li.html($(".txt").val() + "<a href='javascript:;'> 删除</a>");
                $("ul").prepend(li);
                li.slideDown();
                $(".txt").val("");
            })

            // 2.点击的删除按钮，可以删除当前的微博留言li
            // $("ul a").click(function() {  // 此时的click不能给动态创建的a添加事件
            //     alert(11);
            // })
            // on可以给动态创建的元素绑定事件
            $("ul").on("click", "a", function() {
                //这个this指的是a
                $(this).parent().slideUp(function() {
                    //这个this指的是a的父级li
                    $(this).remove();
                });
            })

        })
    </script>
<div class="box" id="weibo">
        <span>微博发布</span>
        <textarea name="" class="txt" cols="30" rows="10"></textarea>
        <button class="btn">发布</button>
        <ul>
        </ul>
    </div>
```

### 事件解绑

事件处理 off() 解绑事件

off() 方法可以移除通过 on() 方法添加的事件处理程序。

```js
$("p").off() // 解绑p元素所有事件处理程序

$("p").off( "click")  // 解绑p元素上面的点击事件 后面的 foo 是侦听函数名

$("ul").off("click", "li");   // 解绑事件委托

```

如果有的事件只想触发一次， 可以使用 one()来绑定事件。

```js
<script>
        $(function() {
            $("div").on({
                click: function() {
                    console.log("我点击了");
                },
                mouseover: function() {
                    console.log('我鼠标经过了');
                }
            });
            $("ul").on("click", "li", function() {
                alert(11);
            });
            // 1. 事件解绑 off 
            // $("div").off();  // 这个是解除了div身上的所有事件
            $("div").off("click"); // 这个是解除了div身上的点击事件
            $("ul").off("click", "li");
            // 2. one() 但是它只能触发事件一次
            $("p").one("click", function() {
                alert(11);
            })
        })
    </script>
```

### 自动触发事件 

有些事件希望自动触发, 比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。

01 、元素+事件()

```js
element.click()  // 第一种简写形式
```

02、trigger() 

```js
element.trigger("type") // 第二种自动触发模式
$("p").on("click", function () {
  alert("hi~");
}); 

$("p").trigger("click"); // 此时自动触发点击事件，不需要鼠标点击

```

03、triggerHandler()  

triggerHandler模式不会触发元素的默认行为，这是和前面两种的区别。

```js
element.triggerHandler(type)  // 第三种自动触发模式
```

```js
    <script src="jquery.min.js"></script>
    <script>
        $(function() {
            $("div").on("click", function() {
                alert(11);
            });

            // 自动触发事件
            // 1. 元素.事件()
            // $("div").click();会触发元素的默认行为
            // 2. 元素.trigger("事件")
            // $("div").trigger("click");会触发元素的默认行为
            $("input").trigger("focus");
            // 3. 元素.triggerHandler("事件") 就是不会触发元素的默认行为
            $("div").triggerHandler("click");
            $("input").on("focus", function() {
                $(this).val("你好吗");
            });
            // $("input").triggerHandler("focus");
        });
    </script>
```

## jQuery事件对象

事件被触发，就会有事件对象的产生。

语法

```js
element.on(events,[selector],function(event) {})       
```

阻止默认行为：event.preventDefault()   或者 return false 

阻止冒泡： event.stopPropagation()      

```js
    <script src="jquery.min.js"></script>
    <script>
        $(function() {
            $(document).on("click", function() {
                console.log("点击了document");

            })
            $("div").on("click", function(event) {
                // console.log(event);
                console.log("点击了div");
                event.stopPropagation();
            })
        })
    </script>
```

## jQuery插件库

jQuery 功能比较有限，想要更复杂的特效效果，可以借助于 jQuery插件完成。

注意: 这些插件也是依赖于jQuery来完成的，所以必须要先引入jQuery文件，因此也称为jQuery插件。

jQuery 插件常用的网站：

1.  jQuery 插件库 http://www.jq22.com/     

2. jQuery 之家   http://www.htmleaf.com/  

jQuery 插件使用步骤：

1. 引入相关文件。（jQuery文件 和插件文件）    

2. 复制相关html、css、js (调用插件)。

## jQuery 插件演示：

1. 瀑布流
2. 图片懒加载（图片使用延迟加载在可提高网页下载速度。它也能帮助减轻服务器负载）

  当我们页面滑动到可视区域，再显示图片。

  我们使用jquery 插件库 EasyLazyload。注意，此时的js引入文件和js调用必须写到DOM元素（图片）最后面

3. 全屏滚动（fullpage.js）

​      gitHub： <https://github.com/alvarotrigo/fullPage.js>

​      中文翻译网站： http://www.dowebok.com/demo/2014/77/

## 综合案例 ---  toDoList 

### 案例描述

①文本框里面输入内容，按下回车，就可以生成待办事项。

②点击待办事项复选框，就可以把当前数据添加到已完成事项里面。

③点击已完成事项复选框，就可以把当前数据添加到待办事项里面。

④但是本页面内容刷新页面不会丢失。

### 案例分析

①刷新页面不会丢失数据，因此需要用到本地存储localStorage

②核心思路：不管按下回车，还是点击复选框，都是把本地存储的数据加载到页面中，这样保证刷新关闭页面不会丢失数据；

③存储的数据格式：var todolist =  [{ title : ‘xxx’, done: false}]

​    title：是文本框中的内容，done：是完成的状态；

④注意点1： 本地存储 localStorage 里面只能存储字符串格式 ，因此需要把对象转换为字符串 JSON.stringify(data)。

⑤注意点2： 获取本地存储数据，需要把里面的字符串转换为对象格式JSON.parse() 我们才能使用里面的数据。

### 本地数据存储转换

```js
<script src="jQuery.js"></script>
<script>
    //因为刷新页面数据不丢失，因此需要用到本地存储localStorage
    //核心思路： 不管按下回车，还是点击复选框，都是把本地存储的数据加载到页面中，这样保证刷新关闭页面不会丢失数据
    // 存储的数据格式以数组的合适存在，里面以对象存在：
    var todolist = [
        {
            title: '我是老王呀',
            done: false
        },
        {
            title: '我今年要减肥',
            done: false
        }
    ]
    // 如果直接将数组对象localStorage到本地，里面只能存字符串，所以我们看不到里面的数据
    // localStorage.setItem('todo', todolist);
    //因此我们需要将数组对象转化为字符串用JSON.stringify(data)而且保持原先的格式
    localStorage.setItem('todo', JSON.stringify(todolist));
    // 获取存在本地的数据，得到是一个字符串
    var data = localStorage.getItem('todo');
    // 我们获取的是字符串格式，需要把里面的字符串转换为对象格式
    // JSON.parse() 我们才能使用里面的数据
    data = JSON.parse(data);
    console.log(data[0].title);
</script>
```

### 按下回车将数据保存到本地

```js
<script src="jQuery.js"></script>
<script>
    // 按下回车键吧新的数据添加到本地储存里面
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            // 先读取本地存储原来的数据
            var local = getDate();
            console.log(local);
            // 把获取的local数组进行数据更新，吧最新的数据追加给local数组
            local.push({ title: $(this).val(), done: false });
            // 把这个数组local存储给本地存储
            savaDate(local);
        }
    });
    // 读取本地存储的数据(打开页面就去本地数据存储去找数据)
    function getDate() {
        // 定义一个数据，获取本地数据
        var data = localStorage.getItem('todolist');
        // 如果本地数据data不是null是有数据的就直接读取该数据并且返回
        // 本地存储里面的数据是字符串格式，我们需要转化为对象格式
        if (data !== null) {
            return JSON.parse(data);
        } else {
            // 如果是空的就返回一个空的数组
            return [];
        }
    }
    // 保存本地存储数据
    function savaDate(data) {
        //要将数据转化为字符串保持原来的格式
        localStorage.setItem('todolist', JSON.stringify(data));
    }
</script>
```

### 把本地存储的数据渲染到页面

```js
<script src="jQuery.js"></script>
<script>
    // 按下回车键吧新的数据添加到本地储存里面
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            // 先读取本地存储原来的数据
            var local = getDate();
            console.log(local);
            // 把获取的local数组进行数据更新，吧最新的数据追加给local数组
            local.push({ title: $(this).val(), done: false });
            // 把这个数组local存储给本地存储
            savaDate(local);
            // ============02 把本地数据渲染到页面=================
            // 因为后期经常用我们建议封装一个函数
            load();
        }
    });
    // 读取本地存储的数据(打开页面就去本地数据存储去找数据)
    function getDate() {
        // 定义一个数据，获取本地数据
        var data = localStorage.getItem('todolist');
        // 如果本地数据data不是null是有数据的就直接读取该数据并且返回
        // 本地存储里面的数据是字符串格式，我们需要转化为对象格式
        if (data !== null) {
            return JSON.parse(data);
        } else {
            // 如果是空的就返回一个空的数组
            return [];
        }
    }
    // 保存本地存储数据
    function savaDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }
    // ============封装load渲染函数============
    // 只要页面打开就会去渲染数据到页面
    load()
    function load() {
        // 打开页面先渲染获取本地数据
        var data = getDate();
        // console.log(data);
        // 遍历数据之前要先清空ol里面的数据 然后再去遍历添加
        $('ol').empty();
        // 遍历这个data数据   i是索引值  n是数据
        $.each(data, function (i, n) {
            // console.log(n);
            // 然后将数据添加到对应的盒子中,只需要获取title值就可以   n.title
            $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;'>删除</a></li>")
        })
    }
</script>
```

### 点击删除对应数据

删除的不是li，删除的是本地存储的数据，我们需要在添加本地数据的时候给删除粗按钮a，添加一个id，取值为当前循环的数据的索引值

然后点击a的时候显，因为本地存储的数据是数组对象存储的，我们可以用splice(删除的位置，删除的个数)删除对应的本地数据；

```js
<script>
    // 按下回车键吧新的数据添加到本地储存里面
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            // 先读取本地存储原来的数据
            var local = getDate();
            console.log(local);
            // 把获取的local数组进行数据更新，吧最新的数据追加给local数组
            local.push({ title: $(this).val(), done: false });
            // 把这个数组local存储给本地存储
            savaDate(local);
            // ============02 把本地数据渲染到页面=================
            // 因为后期经常用我们建议封装一个函数
            load();
        }
    });
    // ===============点击删除获取当前数据的索引号================
    // 删除的不是li，是本地的数据，所以我们在渲染数据的时候就需要自定义一个id属性，并且属性值就是当前数据的索引号
    // 读取本地存储的数据(打开页面就去本地数据存储去找数据)
    $('ol').on('click', 'a', function () {
        //获取本地数据
        var data = getDate();
        // console.log(data);
        //修改数据
        // 先获取当前a的索引值
        var index = $(this).attr('id');
        // console.log(index);
        // 因为我们需要删除的是本地存储的书是以数组对象的格式存储的，所以我们可以用splice(起始位置,删除的个数)
        data.splice(index, 1);
        //保存到本地存储
        savaDate(data);
        //重新渲染页面
        load();
    })
    function getDate() {
        // 定义一个数据，获取本地数据
        var data = localStorage.getItem('todolist');
        // 如果本地数据data不是null是有数据的就直接读取该数据并且返回
        // 本地存储里面的数据是字符串格式，我们需要转化为对象格式
        if (data !== null) {
            return JSON.parse(data);
        } else {
            // 如果是空的就返回一个空的数组
            return [];
        }
    }
    // 保存本地存储数据
    function savaDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }
    // ============封装load渲染函数============
    // 只要页面打开就会去渲染数据到页面
    load()
    function load() {
        // 打开页面先渲染获取本地数据
        var data = getDate();
        // console.log(data);
        // 遍历数据之前要先清空ol里面的数据 然后再去遍历添加
        $('ol').empty();
        // 遍历这个data数据   i是索引值  n是数据
        $.each(data, function (i, n) {
            // console.log(n);
            // 然后将数据添加到对应的盒子中,只需要获取title值就可以   n.title
            // id是点击删除的时候自定义的数据的索引值
            $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>")
        })
    }
</script>
```

### 效果完成

```js
<script src="jQuery.js"></script>
<script>
    // 按下回车键吧新的数据添加到本地储存里面
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === '') {
                alert('请输入任务')
            } else {
                // 先读取本地存储原来的数据
                var local = getDate();
                console.log(local);
                // 把获取的local数组进行数据更新，吧最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                // 把这个数组local存储给本地存储
                savaDate(local);
                // ============02 把本地数据渲染到页面=================
                // 因为后期经常用我们建议封装一个函数
                load();
                // 加载完以后将input清空
                $(this).val('')
            }
        }
    });
    // ===============点击删除获取当前数据的索引号================
    // 删除的不是li，是本地的数据，所以我们在渲染数据的时候就需要自定义一个id属性，并且属性值就是当前数据的索引号
    // 读取本地存储的数据(打开页面就去本地数据存储去找数据)
    $('ol,ul').on('click', 'a', function () {
        //获取本地数据
        var data = getDate();
        // console.log(data);
        //修改数据
        // 先获取当前a的索引值
        var index = $(this).attr('id');
        // console.log(index);
        // 因为我们需要删除的是本地存储的书是以数组对象的格式存储的，所以我们可以用splice(起始位置,删除的个数)
        data.splice(index, 1);
        //保存到本地存储
        savaDate(data);
        //重新渲染页面
        load();
    })
    // ================== 点击复选框判断是完成了还是没有 ===============
    // 如果复选框没有选中，done的取值为false就添加到ol中
    // 如果复选框选中，done的取值为true就添加到ul中
    $('ol,ul').on('click', 'input', function () {
        // 获取本地存储数据
        var data = getDate();
        // 修改数据
        var index = $(this).siblings('a').attr('id');
        // console.log(index);
        // data[?].done=?当前点击的input的done值
        // 将当前的点击的input的选中状态求改为checked也就是true
        data[index].done = $(this).prop('checked');
        // console.log(data[index]);
        // 保存数据到本地
        savaDate(data);
        // 渲染数据到页面
        load();
    })
    function getDate() {
        // 定义一个数据，获取本地数据
        var data = localStorage.getItem('todolist');
        // 如果本地数据data不是null是有数据的就直接读取该数据并且返回
        // 本地存储里面的数据是字符串格式，我们需要转化为对象格式
        if (data !== null) {
            return JSON.parse(data);
        } else {
            // 如果是空的就返回一个空的数组
            return [];
        }
    }
    // 保存本地存储数据
    function savaDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }
    // ============封装load渲染函数============
    // 只要页面打开就会去渲染数据到页面
    load()
    function load() {
        // ====== 计量=====
        var todoCount = 0;
        var doneCount = 0;
        // 打开页面先渲染获取本地数据
        var data = getDate();
        // console.log(data);
        // 遍历数据之前要先清空ol里面的数据 然后再去遍历添加
        $('ol,ul').empty();
        // 遍历这个data数据   i是索引值  n是数据
        $.each(data, function (i, n) {
            // console.log(n);
            // 然后将数据添加到对应的盒子中,只需要获取title值就可以   n.title
            // id是点击删除的时候自定义的数据的索引值
            if (n.done) {
                $('ul').prepend("<li><input type='checkbox' checked><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>");
                doneCount++;
            } else {
                $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>");
                todoCount++;
            }
        });
        $('#todoCount').text(todoCount);
        $('#doneCount').text(doneCount);
    }
</script>
```

### 整个思路回顾

01、获取本地数据

localStorage.getItem('todolist')

```js
    function getDate() {
        // 定义一个数据，获取本地数据
        var data = localStorage.getItem('todolist');
        // 如果本地数据data不是null是有数据的就直接读取该数据并且返回
        // 本地存储里面的数据是字符串格式，我们需要转化为对象格式
        if (data !== null) {
            return JSON.parse(data);
        } else {
            // 如果是空的就返回一个空的数组
            return [];
        }
    }
```

02、将数据保存到本都

```js
// 保存本地存储数据
    function savaDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }
```

03、按下回车键的时候：

​	1、判断input框是否为空，空的话就提示用户输入；

​	2、如果不为空，就先读取当前本地存储的数据 ---- 因为获取的是数组格式，我们可以用push方法，给本地数据追加新的数据（也就是鼠标按下获取的input值）；

​	3、然后将追加的数据存储到本地；

​	4、渲染本地数据到页面展示：

​         先获取本地数据data，然后用$.each(object,function(index,elememt){  }) 语法遍历数据，然后用prepend()方法在ol和ul里面添加li，li里面包含input、p（里面放的是遍历数据的的title数据）、a；

​	a标签要自定义添加一个id，id的取值为当前遍历的的索引值；

```js
    // ============封装load渲染函数============
    // 只要页面打开就会去渲染数据到页面
    load()
    function load() {
        // ====== 计量=====
        var todoCount = 0;
        var doneCount = 0;
        // 打开页面先渲染获取本地数据
        var data = getDate();
        // console.log(data);
        // 遍历数据之前要先清空ol里面的数据 然后再去遍历添加
        $('ol,ul').empty();
        // 遍历这个data数据   i是索引值  n是数据
        $.each(data, function (i, n) {
            // console.log(n);
            // 然后将数据添加到对应的盒子中,只需要获取title值就可以   n.title
            // id是点击删除的时候自定义的数据的索引值
            if (n.done) {
                $('ul').prepend("<li><input type='checkbox' checked><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>");
                doneCount++;
            } else {
                $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id='" + i + "'>删除</a></li>");
                todoCount++;
            }
        });
        $('#todoCount').text(todoCount);
        $('#doneCount').text(doneCount);
    }
```

04、点击a的时候删除当前数据

​        1、获取本地数据 data

​	2、获取当前的自定义的id索引值

​	3、本地存储的数据是数组，我们可以用splice(起始位置,删除的个数),在当前位置删除一个数据

​	4、然后将更改过的护具存储到本地

​	5、然后将存储的数据渲染到页面

```js
    // ===============点击删除获取当前数据的索引号================
    // 删除的不是li，是本地的数据，所以我们在渲染数据的时候就需要自定义一个id属性，并且属性值就是当前数据的索引号
    // 读取本地存储的数据(打开页面就去本地数据存储去找数据)
    $('ol,ul').on('click', 'a', function () {
        //1 获取本地数据
        var data = getDate();
        // console.log(data);
        //修改数据
        //2 先获取当前a的索引值
        var index = $(this).attr('id');
        // console.log(index);
        // 3 因为我们需要删除的是本地存储的书是以数组对象的格式存储的，所以我们可以用splice(起始位置,删除的个数)
        data.splice(index, 1);
        //4 保存到本地存储
        savaDate(data);
        //5 重新渲染页面
        load();
    })
```

05 、点击input的时候

1、获取本地存储的数据

2、获取当前input的索引值，因为之前我们给a自定义过id值，我们可以通过其他兄弟的方法获取；

3、将当前的input的done选中状态设置为checked

4、将修改完的数据存储到本地

5、然后将存储的数据渲染到页面

```js
// ================== 点击复选框判断是完成了还是没有 ===============
    // 如果复选框没有选中，done的取值为false就添加到ol中
    // 如果复选框选中，done的取值为true就添加到ul中
    $('ol,ul').on('click', 'input', function () {
        //1 获取本地存储数据
        var data = getDate();
        //2 修改数据
        var index = $(this).siblings('a').attr('id');
        // console.log(index);
        // data[?].done=?当前点击的input的done值
        ///3 将当前的点击的input的选中状态求改为checked也就是true
        data[index].done = $(this).prop('checked');
        // console.log(data[index]);
        //4 保存数据到本地
        savaDate(data);
        //5 渲染数据到页面
        load();
    })
```











 











































































js高级→ jquery项目实战(一天)→服务器编程→ajax→阿里百秀项目→vue基础→vue项目→小程序→react





















































































































































































































































































