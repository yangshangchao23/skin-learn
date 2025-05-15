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

  class="os-default" 【非必要设置一个类名】

- 支持下次访问读取当前设置的模式

  设置存储在本地localStorage

- 按钮封装成组件

- 模式数据存在store中【非必要-存在localStorage即可】

- 添加半圆过渡转换背景色

  原理：使用了[视图过渡 API](https://developer.mozilla.org/zh-CN/docs/Web/API/View_Transition_API)

  效果详见 element Plus官网 、[vben admin](https://www.vben.pro/#/auth/login)

  原理解析 [bilibili-antonyfu](https://www.bilibili.com/video/BV1hc411K72Z/) 【太长】

  原理解析2 [element-plus 同款主题换肤动画如何实现？- 附完整源码](https://juejin.cn/post/7493111839446269967)

### 主题设置

- 内置几套主题颜色选择

  [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)的方案：根标签<html>添加data-theme属性 data-theme="sky-blue"

- 色板随心选择

  Vben Admin的自定义方案

  [vue-naive-admin](https://github.com/zclzone/vue-naive-admin)的方案

### 其他特殊模式

- 灰色模式
- 色弱模式

## 参考案例：

- [vitesse](https://github.com/antfu-collective/vitesse) -- 暗黑模式用了Vueuse的useDark()

- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)

- [vue-naive-admin](https://github.com/zclzone/vue-naive-admin) -- 暗黑模式用了Vueuse的useDark()/有半圆过渡

其他视频

[现代前端如何换肤？sass加css变量来实现](https://www.bilibili.com/video/BV1y14y117vP)【done-scss分支】

https://www.bilibili.com/video/BV1eg4y137vd 【暂时忽略】

其他文章

[前端换肤的N种方案，请收下](https://juejin.cn/post/6844904122643120141)

[前端主题色切换的终极解决方案](https://juejin.cn/post/7341797865108766746)

[前端主题切换方案](https://juejin.cn/post/7134594122391748615)

[前端最全的5种换肤方案总结](https://juejin.cn/post/7329573754987462693)

[Vue3自定义一个Hooks，实现一键换肤](https://juejin.cn/post/7237020208648634429)

自己的ds - 【done-dark-mode分支】

[仅用一行代码实现全网站暗黑模式](https://juejin.cn/post/7490602578011570202)

[TailwindCSS如何轻松实现夜间模式，既能跟随系统又能手动控制](https://juejin.cn/post/7312727134297210914)

## scss分支

需求：​ 假如自己开发一套组件库，如何让用户可以换肤？

- 使用者可以固定自定义主题色，基本色等相关主题
- 也支持动态切换主题色，可以只切换单个颜色，也支持一键整套切换

### 现代思路流程

1. 定义sass或者css变量
2. 颜色控制都用变量定义
3. 覆盖或者修改变量实现默认主题色或动态切换
4. 完成换肤

### 项目实践

#### css设计注意点

- BEM方式命名：Block Element Modifier
  class="block-element-modifier"

  block:模块 element:元素类型 modifier:修饰符（primary/default/danger等）
  eg:

  ```html
  <button ariadisabled="false" type="button" class="el-button el-button--primary" style=""></button>

  <div class="ant-tabs ant-tabs-top ant-tabs-small markdown css-var-«ro0» ant-tabs-css-var"></div>
  ```

- 结构和皮肤分离

  设置两个类名。一个专门设置宽高间距等样式，另一个设置背景色、字体颜色等颜色设置。

## dark-mode分支

暗黑模式分支

### 原生-css变量

origin-demo文件夹：技术栈：原生html。 采用了class="dark"和 dataset两种方案

### Vue-css变量

DarkModeBtn.vue 组件。采用了class="dark"方案

### 市面其他方案

#### vueuse/core

useDark()

#### UI框架

- ant Design Vue组件
- elementUI Plus组件

#### css原子

#### css-filter属性

代码：origin-demo\drak-css-filter.html

参考：[仅用一行代码实现全网站暗黑模式](https://juejin.cn/post/7490602578011570202)

```css
filter: invert(1) hue-rotate(180deg);
```

#### light-dark()

2024年css新特性 [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) 

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

### 添砖加瓦

- Element Plus暗黑模式转换过渡效果-半圆过渡转换背景色的实现原理
