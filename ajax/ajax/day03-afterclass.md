# 课后练习_ajax-day03

## 1. 题号：SHQS_cs_01

**训练目标**：强化对XMLHttpRequest的理解；

**试题难度**：☆☆

**问题**：说说你对XMLHttpRequest的认识，说说它们应用场景有何不同，能尝试手写出其核心方法和属性吗？

**参考答案**

[01.xhr的理解以及常见方法]( /downloads/ajax/day03/02.after_class_material/01.xhr常用方法及应用_答案.zip) 

## 2. 题号：CODE_01

### 在原来移动web阿里百秀项目里面,获取新闻列表信息,在页面中渲染显示

**训练目标**：强化对xhr,模板引擎template的应用；

**案例效果**：

![1608398022142](./assets/day03/after_class_code.png)

**试题难度**：☆☆☆

**案例素材**：

[02.阿里百秀新闻列表展示]( /downloads/ajax/day03/02.after_class_material/02.阿里百秀新闻列表数据展示_答案.zip)

**接口说明**：

- 接口地址: `http://www.liulongbin.top:3005/api/getnewslist`

- 请求方式：get

- 请求参数：无

- 返回数据格式: JSON

- 返回值:

  | 属性    | 数据类型 | 说明                          |
  | ------- | -------- | ----------------------------- |
  | status  | 数字     | 0表示成功 1表示失败           |
  | message | 数组     | 新闻资讯信息,包含图片id等信息 |

- 示例：

  请求：http://www.liulongbin.top:3005/api/getnewslist

  返回：

  ```json
  {
      "message": [
          {
              "add_time": "2015-04-16T03:50:28.000Z",
              "click": 1,
              "id": 13,
              "img_url": 		"http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg",
              "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
              "zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计"
          },
          {
              "add_time": "2015-04-16T04:05:34.000Z",
              "click": 2,
              "id": 14,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161205596364.jpg",
              "title": "买房还是炒股，2015年买房无法拒绝的5大理由",
              "zhaiyao": "转眼间2015年已经过去了4个月，在这短短的四个月"
          },
          {
              "add_time": "2016-12-07T08:49:04.000Z",
              "click": 1,
              "id": 15,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161218505373.jpg",
              "title": "抢先实拍猎豹CS10 霸气时尚2.0T涡轮增压",
              "zhaiyao": "在SUV当道的天下，许多自主品牌相继推出了旗下多款"
          },
          {
              "add_time": "2015-04-16T04:29:51.000Z",
              "click": 0,
              "id": 16,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161229442885.jpg",
              "title": "长城汽车不走高端很快就会死 哈弗H8卷土重来",
              "zhaiyao": "&amp;emsp;&amp;emsp;一辆豪华日"
          },
          {
              "add_time": "2015-04-16T04:46:22.000Z",
              "click": 0,
              "id": 19,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161246140423.jpg",
              "title": "三星S6造价更高 卖得却比iPhone 6便宜",
              "zhaiyao": "根据调研公司IHS的拆机分析，三星最新推出的旗舰智"
          },
          {
              "add_time": "2015-04-16T04:54:36.000Z",
              "click": 0,
              "id": 20,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161254335201.jpg",
              "title": "乐视手机遭疯狂吐槽 忽不忽悠看了再说",
              "zhaiyao": "昨天，乐视发布了3款手机，乐1、乐1Pro和乐Ma"
          },
          {
              "add_time": "2015-04-16T04:59:15.000Z",
              "click": 0,
              "id": 21,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161258558786.jpg",
              "title": "假宽带频现 什么是真正的光纤宽带？",
              "zhaiyao": "&amp;emsp;&amp;emsp;OFwee"
          },
          {
              "add_time": "2015-04-16T05:02:30.000Z",
              "click": 0,
              "id": 22,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161303162262.jpg",
              "title": "58同城与赶集网最快今日将宣布合并",
              "zhaiyao": "北京时间4月16日消息，腾讯科技通过可靠渠道获知，"
          },
          {
              "add_time": "2015-04-16T05:29:20.000Z",
              "click": 0,
              "id": 23,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161329185965.jpg",
              "title": "电商下乡，京东、苏宁、阿里农村遭遇战打响？",
              "zhaiyao": "2015年，各大电商逐鹿广袤的农村市场，一场圈地运"
          },
          {
              "add_time": "2015-04-16T05:37:50.000Z",
              "click": 0,
              "id": 24,
              "img_url": "http://demo.dtcms.net/upload/201504/16/201504161336598829.jpg",
              "title": "易车总裁邵京宁：汽车行业电商化的三个阶段",
              "zhaiyao": "易车总裁邵京宁在艾瑞年度高峰会议上表示，汽车行业作"
          }
      ],
      "status": 0
  }
  ```

> Tips：素材在作业文件的根目录的 素材文件夹里面；文件夹名字为“作业1”

**案例要求**：

1. 使用xhr获取新闻列表的数据
2. 使用模板引擎添加数据

**训练提示**：

1. 使用template函数创建模板引擎 遍历语法 遍历数据

   ```
   {{each data}}
   ...
   {{/each}}
   ```

2. 获取到的数据需要进行parse解析

**参考方案**：

**操作步骤**：

1. 在入口函数中定义xhr对象并且使用xhr
2. 定义模板引擎
3. 利用响应数据渲染页面。并调用模板引擎

**参考答案**：

[02.阿里百秀新闻列表_答案]( /downloads/ajax/day03/02.after_class_material/02.阿里百秀新闻列表数据展示_答案.zip)







