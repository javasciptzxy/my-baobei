// code ......
// 面向对象
let that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);

    this.add = this.main.querySelector('.tabadd');

    this.ul = this.main.querySelector('.firstnav ul');

    this.fsection = this.main.querySelector('.tabscon');
    // 调用绑定事件方法
    this.init();
  }

  // 绑定事件
  init() {
    this.updateNode();
    this.add.onclick = this.addTab;
    for (let i = 0; i < this.lis.length; i++) {
      // 绑定索引
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
      this.spans[i].ondblclick = this.editTab;
      // section编辑功能
      this.sections[i].ondblclick = this.editTab;
      // this
    }
  }
  updateNode() {
    // 获取菜单li
    this.lis = this.main.querySelectorAll('li');
    // 获取section
    this.sections = this.main.querySelectorAll('section');

    this.remove = this.main.querySelectorAll('.icon-guanbi');

    this.spans = this.main.querySelectorAll('.firstnav ul li span:first-child');
  }
  // 切换模块: toggleTab
  // 1、初始化函数中循环绑定事件
  // 2、当前点击的tab对应的section全部添加active相关类
  // 3、清除类的方法抽离出来复用
  toggleTab() {
    // this ==> li
    // that ==> 实例化对象 tab
    that.clearClasses();
    this.className = 'liactive';
    const index = this.index;
    that.sections[index].className = 'conactive';
  }

  clearClasses() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }

  addTab() {
    // 创建li
    that.clearClasses();
    const li = `
      <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>
    `;
    const section = '<section class="conactive">测试1</section>';
    // li ==> ul
    that.ul.insertAdjacentHTML('beforeend', li);
    that.fsection.insertAdjacentHTML('beforeend', section);
    that.init();
  }

  removeTab(e) {
    // 阻止冒泡事件
    e.stopPropagation();
    let index = this.parentNode.index;
    // 删除第index各li secion
    that.lis[index].remove();

    that.sections[index].remove();

    that.init();
    // 如果删除完成以后页面上还有选中的元素，代码直接return
    if (document.querySelector('.liactive')) return;

    index--;

    that.lis[index] && that.lis[index].click();
  }

  editTab() {
    // 禁止选中
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();

    // this ==> 当前点击的span
    const val = this.innerHTML;
    this.innerHTML = `
      <input type="text"/>
    `;
    // 获取输入框dom元素
    const input = this.children[0];

    // 给输入框赋值
    input.value = val;
    // input里面内容自动选中
    input.select();

    //失去焦点时候把用户输入的内容展示到span里面，替换掉输入框
    input.onblur = function () {
      // this ==> input
      this.parentNode.innerHTML = this.value;
    };
    // 键盘回车事件
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    };
  }
}

const tab = new Tab('#tab');
