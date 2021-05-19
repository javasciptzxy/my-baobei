# 课后练习_git-day02

## 1. 题号：PO_01

### Git的SSH传输方式配置

**试题难度**：☆

**训练目标**：能够参考文档完成SSH传输方式的配置；

**训练步骤**：

1. 任意目录执行命令： `ssh-keygen -t rsa -C "xxxxx@xxxxx.com" `

2. 按三次回车,生成成功

3. 在Git的命令行工具中执行命令`cat ~/.ssh/id_rsa.pub` 查看公钥  

4. 在代码托管平台上登录账号，让账号和ssh的公钥做一个绑定

   - 码云： `头像` >  `设置` > `SSH公钥`
   - GitHub：`头像` > `Settings` > `SSH and GPG keys`

5. 执行命令测试ssh的公钥是否配置成功

   ```cmd
   # 码云上
   ssh -T git@gitee.com
   
   # GitHub
   ssh -T git@github.com
   ```

## 2. 题号：PO_01

### 使用Git开发实战

**试题难度**：☆☆☆

**训练目标**：能够掌握Git在团队开发中的运用；

**训练步骤**：

**1. 创建本地仓库并添加内容**

1. 在桌面上新建文件夹  `gitdemo`  

2. 进入`gitdemo`文件夹，执行命令`git init` 创建本地仓库

3. 在`gitdemo`文件夹下 添加文件 `hello.txt`, 内容如下

   ```
   aaa
   bbb
   ```

4. 将改变提交到仓库中

   ```cmd
   git add .
   git commit -m '第一次提交'
   ```

**2. 去代码托管平台上创建空白仓库 `gitdemo`（映射地址）**

> PS：不要勾选任何文件哦

**3. 托管本地仓库`gitdemo` 到 空白仓库中** （A开发者）

- **要在`桌面/gitdemo`文件夹下执行命令**

- 将本地仓库和远程仓库关联，并把远程仓库取名为 origin

  `git remote add origin 远程仓库的ssh地址`

- 同步本地仓库到远程空白仓库

  `git push -u origin master`

**4. 克隆远程仓库到本地**（B开发者）

- **进入桌面文件夹，在桌面文件夹下执行命令**

- 把平台上`gitdemo` 的远程仓库拷贝到本地名为 `gitdemo01`的文件夹中

  `git clone 远程仓库SSH地址 gitdemo01`

- 看下 `gitdemo01` 的文件夹下是否有文件 `hello.txt`。内容为

  ```
  aaa
  bbb
  ```

**5. 进行开发**

- **要在`桌面/gitdemo01`文件夹下进行**

- 通过一条命令：从`master`分支切换出分支`dev`, 并进入`dev分支`

- 切换分支后，修改`hello.txt`： 内容为

  ```
  aaa
  bbb
  ccc
  ```

- 在`dev`分支上暂存修改内容，并提交到仓库

- 把`dev`分支的改变合并到master分支上

  - 切换到master分支， 并看下 `hello.txt` 的内容, 内容为

    ```
    aaa
    bbb
    ```

  - 合并dev分支的代码到master分支，再看下`hello.txt`的内容

    ```js
    aaa
    bbb
    ccc
    ```

- 同步本地仓库的主分支到远程仓库的主分支， 并看下远程仓库中的`hello.txt`

  ` git push`

- 在`桌面/gitdemo01`文件夹下修改`hello.txt`： 内容为

  ```
  aaa
  bbb
  ccc
  ddd
  ```

- 提交代码到仓库中

- 同步主分支的代码到远程仓库

  `git push`
  
- 通过网页查看远程仓库中的`hello.txt`中的内容，应如下

  ```
  aaa
  bbb
  ccc
  ddd
  ```

**6. 推送分支**

- **在`桌面/gitdemo01`文件夹下进行**

- 尝试通过以下命令，查看远程仓库

  ```js
  git remote
  git remote -v
  ```
  
- 切换到`dev`分支

- 把`dev`分支推送到远程服务器上，让远程服务器也多一个`dev`分支

  `git push -u origin dev`

**7. 产生冲突**

- A开发者

  - 在`桌面/gitdemo`文件夹下，切换到master分支，查看`hello.txt`内容为

    ```
    aaa
    bbb
    ```

  - 执行命令，把远程仓库中更新的代码同步到本地

    `git pull`

  - 检查`hello.txt`： 内容应该是

    ```
    aaa
    bbb
    ccc
    ddd
    ```

  - 修改 `hello.txt`： 内容为

    ```js
    aaa
    bbb
    ccc
    ddd
    eee
    ```

  - 提交代码，并推送到远程仓库

- B开发者

  - 在`桌面/gitdemo01`文件夹下，切换到master分支，查看`hello.txt`内容为

    ```js
    aaa
    bbb
    ccc
    ddd
    ```

  - 修改内容为

    ```js
    aaa
    bbb
    ccc
    ddd
    fff
    ```

  - 提交代码，并推送到远程仓库。这时候会发现推送失败，需要先拉取最新的代码。

  - 拉取最新的代码，这时候会发现有冲突，解决冲突, 修改内容如下

    ```
    aaa
    bbb
    ccc
    ddd
    eee
    fff
    ```

  - 提交解决冲突的代码，B开发者解决了冲突。

- A开发者

  - 在`桌面/gitdemo`文件夹下拉取最新的代码，冲突完全解决。
