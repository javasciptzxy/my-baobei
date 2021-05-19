# 课后练习_git-day01

## 1. 题号：PO_01

### Git基本命令练习

**试题难度**：☆☆

**训练目标**：对git 查看状态、添加、提交、移除暂存区，日志查看等命令进行练习；

**训练步骤**：

1. 创建两个文件（first.html，second.html），内容分别写上 **天王盖地虎，小鸡炖蘑菇**

   ```html
   <!-- first.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       天王盖地虎
   </body>
   </html>
   ```

   ```html
   <!-- second.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       小鸡炖蘑菇
   </body>
   </html>
   ```

2. 利用命令把两个文件同时加入暂存区，并且提交到git仓库

   ```shell
   #为了规范日志格式，第一次提交我们可以用 init 作为前缀
   git add . 
   git commit -m 'init: 初始化仓库'
   ```

3. 修改第一个文件(first.html)的内容，添加一句 滴 滴滴，并且添加到暂存区（`git add first.html`）

   ```html
   <!-- first.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       天王盖地虎
       滴 滴滴
   </body>
   </html>
   ```

4. 撤销刚刚添加到暂存区的操作

   ```shell
   git reset HEAD first.html
   ```

5. 用命令完成跳过缓冲区的提交，并且查看下文件的状态

   ```shell
   # 规范git的log日志，如果添加功能，用 feat： 开头
   git commit -a -m 'feat：添加first.html文件内容'
   ```

6. 查看仓库的状态，此时显示如下：

   ```shell
   $ git status
   On branch master
   nothing to commit, working tree clean
   ```

7. 修改 first.html 文件内容

   ```html
   <!-- first.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       天王盖地虎
       滴 滴滴
       划船不靠桨，全靠浪
   </body>
   </html>
   ```

8. 从仓库中恢复 first.html 文件

   ```shell
   git checkout first.html
   ```

9. 此时 first.html 内容应该如下：

   ```html
   <!-- first.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       天王盖地虎
       滴 滴滴
   </body>
   </html>
   ```

10. 输入 `git log --pretty=oneline` 查看提交的记录，看到效果如下

    ```shell
    $ git log --pretty=oneline
    3efb887c3813e57b7ef6720c5242c46003a88e5a (HEAD -> master) feat: 添加first.html文件内容
    e6069781d56b62f01b986586c4a19896b17dbc28 init
    ```

    > 拓展尝试：
    >
    > 1. 用  `git log --graph` 命令看看是什么效果
    > 2. 用  `git log --grep=feat` 命令看看是什么效果
    > 3.  `git log --grep=init` 命令看看是什么效果

## 2. 题号：PO_02

### .gitignore 简单使用

**试题难度**：☆☆

**训练目标**：对git忽略清单的练习；

**训练步骤**：

1. 在桌面上新建一个项目文件夹`demo`, 并将其转换成一个git仓库

2. 创建一个名字叫 index.html 的文件，一个text.txt文件，分别写下内容

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       黑马程序员
   </body>
   </html>
   ```

   ```
   我是text.txt内容
   ```

3. 把 index.html 文件提交到仓库中

   ```shell
   git add .
   git commit -m 'init: 初始化文件'
   ```

4. 添加一个 .gitignore 的文件，**忽略当前目录下所有以 .txt 结尾**的文件

   ```
   # 忽略所有txt结尾文件
   *.txt
   ```

5. 创建一个名字叫做 txt的文件夹，里面新建 text1.txt 文件，写上内容

   ```
   我是text1.txt内容
   ```

6. 修改 text.txt 的文件内容

7. 执行 `git status`查看状态

   > Tips：添加了git的忽略清单，目前能看到的只有之前被管理起来的 text.txt 文件和 .gitignore 文件

8. 此时把 .gitigonre 文件剪切出这个文件夹，再次输入 `git status` 查看状态

   > Tips：此时你能看到修改了的text.txt文件，还有 txt的目录

9. 把 .gitigonre 文件拷回仓库文件夹中，配置忽略当前层级下 node_modules 目录

   ```
   # 忽略所有txt结尾文件
   *.txt
   
   # 忽略当前目录下的node_modules目录
   node_modules
   ```

10. 在仓库里面创建 node_modules 目录，并且在里面随意创建文件

11. 此时你输入 git status 会发现，这个目录以及下面所有的文件都不会被git管理

