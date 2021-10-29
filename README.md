# melody-git-hook

## how to use？

### English
in your project package.json, add:
```js
"sctript": {
    //...others
    "prepare": "melody-git-hook"
}
``` 
then 
install @melody-core/melody-git-hook
```shell
yarn add @melody-core/melody-git-hook -D
```
now, you can see your project which dir named '.melody' and file 'pre-commit';
you are seccessful.

if you want to update the shell, just write the file which named 'pre-commit'.

### 中文
在你的项目的package.json里，添加:
```js
"sctript": {
    //...others
    "prepare": "melody-git-hook"
}
``` 
然后安装这个依赖

```shell
yarn add @melody-core/melody-git-hook -D
```
现在你可以看到你的项目里有 .melody 文件夹和pre-commit文件
你成功啦
现在尝试执行'git commit'的话，你将发现会先执行 pre-commit文件的shell脚本。
如果你想改变它的内容，直接重写这个文件内容就可以了，比如：
```shell 
npm run test
```

## 问题和解决方案
1. 如果您在安装它之前没有在script中配置prepare脚本命令，那么您的项目里将不会生成.melody-git-hook文件夹。
只需要在script上添加上这个脚本，并且执行 npm install 或者 yarn 即可。

2. 如果存在了.melody 以及 pre-commit，但您commit的时候，pre-commit里的shell没有执行，那么请手动执行下面的脚本
```shell
git config core.hooksPath .melody-git-hook
```
3. 给这个文件添加可执行权限：
```shell
chmod +x .melody-git-hook/pre-commit  
```
这样就可以了！

## 我想添加更多的git-hook
比如pre-push:
请在.melody-git-hook中添加文件pre-push，内容写要执行的shell脚本。
然后手动执行下面的命令： 
```shell
git config core.hooksPath .melody-git-hook
chmod +x .melody-git-hook/pre-push
```
ok啦！


## 声明
这是一个简单的尝试，未来作者@六弦会不断完善它，期望能取代husky的地位~





