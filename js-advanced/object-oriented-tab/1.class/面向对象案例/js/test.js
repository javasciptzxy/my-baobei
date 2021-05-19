/**
  1、抽象对象，初始化
  2、获取元素(对象绑定属性)
  3、定义初始化方法(init)，用来绑定事件，执行初始化的操作和方法
  4、调用初始化方法

  切换模块: toggleTab
    1、初始化函数中循环绑定事件
    2、当前点击的tab对应的section全部添加active相关类
    3、清除类的方法抽离出来复用

  添加模块：addTab
    1、添加点击以后，创建新的section和tab选项卡，添加到对应dom元素(insertAdjacentHTML[beforeend])
    2、新添加的元素默认带active类，其他所有元素active类清除(添加一开始就需要调用)
    3、新增选项卡事件不生效解决方法：新增的dom元素需要重新获取一遍,再绑定事件，
      可以单独放在一个方法里面，dom发生改变时候调用一下ok

  删除模块：removeTab
    1、点击x号，找到parentNode的li的索引号(阻止li的冒泡点击)，关闭按钮也要实时获取
    2、获取所有li，删除x号对应的index的li,section同样操作,然后重新获取dom元素
    3、当前删除的元素的index--个，添加active，可以直接让上一个li(tab)执行click事件
      (第0个就不用执行li的click事件)
    4、如果删除的不是选定状态的li的时候，原来的选定状态的li保持不变
  编辑功能：editTab
    1、双击以后，当前文本变为文本框(需要把文字内容带入)
    2、鼠标失去焦点以后，获取当前的input的value，input变为文本，值为input的值
    3、绑定键盘事件，如果是enter，触发blur事件
    4、section相同的逻辑实现编辑
 */

var that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.getElementById(id);

    // 获取+号
    this.add = this.main.querySelector('.tabadd');

    // li的父元素，用于插入新添加的li
    this.ul = this.main.querySelector('.firstnav ul:first-child');

    // 获取section的父元素，用来添加新内容
    this.fsection = this.main.querySelector('.tabscon');
    this.init();
  }

  // 初始化
  init() {
    this.updateNode();
    this.add.onclick = this.addTab;
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
      this.remove[i].onclick = this.removeTab;
      this.editSpans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }

  // 如果新添加的元素每次添加完都来更新一下
  updateNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');

    // 获取删除按钮
    this.remove = this.main.querySelectorAll('.icon-guanbi');

    this.editSpans = this.main.querySelectorAll(
      '.firstnav ul li span:first-child'
    );
  }

  // 切换tab栏
  toggleTab(that) {
    // this ==> this.lis[i] 操作的元素
    // 我有哪些小弟 that ==> 实例化对象

    // 1、清除类名
    that.clearClasses();
    // 2、当前操作的元素添加类名，对应的content添加类名
    this.className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }

  // 清除类名
  clearClasses() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }

  // 添加tab
  addTab() {
    // this ==> +号
    // that => 实例化对象
    // 1、创建li,section元素
    that.clearClasses();
    var color = that.color16();
    // 创建新的section和tab选项卡，添加到对应dom元素(insertAdjacentHTML[beforeend])
    var liDom = `
      <li class="liactive" style="color:${color}">
        <span>new Tab</span>
        <span class="iconfont icon-guanbi"></span>
      </li>
    `;
    var sectionDom = `
      <section style="color:${color}" class="conactive">New Content</section>
    `;
    // 2、添加到对应位置
    that.ul.insertAdjacentHTML('beforeend', liDom);
    that.fsection.insertAdjacentHTML('beforeend', sectionDom);
    that.init();
  }

  // 移除tab栏
  removeTab(e) {
    e.stopPropagation();
    // this ==> 点击的元素
    // that ==> 实例化对象
    // 1、获取索引
    var index = this.parentNode.index;

    // 删除元素
    that.lis[index].remove();
    that.sections[index].remove();

    // 删除完元素重新获取元素
    that.init();

    // 如果页面中还有选中的元素直接return
    if (document.querySelector('.liactive')) {
      return;
    }
    // 上一个元素选中
    console.log(index);

    index >= 1 && index--;
    that.lis[index] && that.lis[index].click();
    // that.lis[index]?.click();
  }

  // 编辑内容
  editTab(e) {
    // 禁止双击选中
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();

    // this ==> 双击的元素 span
    // that ==> 实例化对象

    // 替换当前操作的html内容为input框
    // 1、需要把原先的内容代入输入框
    var spanContent = this.innerHTML;
    this.innerHTML = `
      <input type="text" value="${spanContent}" />
    `;

    // 2、输入框内容自动选中
    var inputElement = this.children[0]; // input元素
    inputElement.select();
    // 3、失去焦点时候,恢复原样
    inputElement.onblur = function () {
      // this ===> input框
      this.parentNode.innerHTML = this.value;
    };

    inputElement.onkeyup = function (e) {
      if (e.keyCode === 13) {
        inputElement.blur();
      }
    };
  }
  // editTab() {
  //   // 双击禁止选定文字
  //   window.getSelection
  //     ? window.getSelection().removeAllRanges()
  //     : document.selection.empty();
  //   //把当前的内容添加给input的value
  //   console.log(this);

  //   this.innerHTML = `<input type="text" value="${this.innerHTML}"/>`;
  //   var input = this.children[0];
  //   //给input的value默认选中
  //   input.select();
  //   //把value返回给span
  //   input.onblur = function () {
  //     this.parentNode.innerHTML = this.value;
  //   };
  //   //键盘弹起事件,注意要写e和e.keyCode   13就是回车
  //   input.onkeyup = function (e) {
  //     if (e.keyCode === 13) {
  //       this.blur();
  //     }
  //   };
  // }
  // 编辑功能
  // 获取随机颜色，忽略，感兴趣可以看一下
  color16() {
    //十六进制颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = '(' + r + ',' + g + ',' + b + ')';
    return `rgb${rgb}`;
  }
}

new Tab('tab');
