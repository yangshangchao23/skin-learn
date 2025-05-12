## 使用

### 安装

```shell
pnpm install
```

### 启动

```
pnpm dev
```

### 构建

```
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

## 功能

### 暗黑模式

- 暗黑模式采用方案

  根标签<html>添加类名 class="dark"

- 暗黑模式手动切换

- 暗黑模式支持跟随系统 

   class="os-default" 

- 添加半圆过渡转换背景色 

  效果详见[vben admin](https://www.vben.pro/#/auth/login)

  原理解析 [bilibili-antonyfu](https://www.bilibili.com/video/BV1hc411K72Z/)

- 支持下次访问读取当前设置的模式

  设置存储在本地localStorage

- 按钮封装成组件

- 模式数据存在store中



### 主题设置

- 内置几套主题颜色选择

  [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)的方案：根标签<html>添加data-theme属性  data-theme="sky-blue" 

- 色板随心选择

  Vben Admin的自定义方案

  [vue-naive-admin](https://github.com/zclzone/vue-naive-admin)的方案



### 其他特殊模式

- 灰色模式
- 色弱模式



## 参考案例：

-  [vitesse](https://github.com/antfu-collective/vitesse) -- 用了Vueuse的useDark()
-  [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin) 
-  [vue-naive-admin](https://github.com/zclzone/vue-naive-admin) 

   其他视频

​	https://www.bilibili.com/video/BV1eg4y137vd

​	