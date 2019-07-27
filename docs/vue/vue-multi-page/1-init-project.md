---
title: 1. 基础 webpack 配置
---

项目中需要搭建一个多页面的环境，包括本地路由服务和分页面打包。本节作为首节内容，主要简单介绍一些 webpack 相关的常用配置。

<!--more-->

# Webpack 基本概念

更多的相关配置小伙伴们可以参考[《正确的 Webpack 配置姿势，快速启动各式框架》](https://godbasin.github.io/2017/05/21/webpack-common-setting/)。
这里我们主要介绍搭建时涉及的一些配置。

**四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)。**

## 入口(entry)

将您应用程序的入口起点认为是根上下文(contextual root)或 app 第一个启动文件。
一般来说，在 Angular 中我们将是启动`.bootstrap()`的文件，在 Vue 中则是`new Vue()`的位置，在 React 中则是`ReactDOM.render()`或者是`React.render()`的启动文件。

```js
module.exports = {
  entry: "./path/to/my/entry/file.js"
};
```

## 出口(output)

output 属性描述了如何处理归拢在一起的代码(bundled code)，在哪里打包应用程序。一般需要以下两点：

- filename: 编译文件的文件名(main.js/bundle.js/index.js 等)
- path：对应一个绝对路径，此路径是你希望一次性打包的目录

```js
module.exports = {
  output: {
    filename: "bundle.js",
    path: "/home/proj/public/assets"
  }
};
```

## loader

webpack 把每个文件(.css, .html, .scss, .jpg, etc.) 都作为模块处理。但 webpack 只理解 JavaScript。

如果你看过生成的`bundle.js`代码就会发现，Webpack 将所有的模块打包一起，每个模块添加标记 id，通过这样一个 id 去获取所需模块的代码。
而我们的 loader 的作用，就是把不同的模块和文件转换为这样一个模块，打包进去。

**loader 支持链式传递。能够对资源使用流水线(pipeline)。loader 链式地按照先后顺序进行编译，从后往前，最终需要返回 javascript。**

不同的应用场景需要不同的 loader，这里我简单介绍几个（loader 使用前都需要安装，请自行查找依赖安装）：

- babel-loader

[官网](https://babeljs.io/learn-es2015/)在此，想要了解的也可以参考[Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)。
`babel-loader`将 ES6/ES7 语法编译生成 ES5，当然有些特性还是需要`babel-polyfill`支持的（Babel 默认只转换新的 JavaScript 句法，而不转换新的 API，如 Promise 等全局对象）。

而对于 babel-loader 的配置，可以通过`options`进行，但一般更常使用`.babelrc`文件进行：

```js
{
    "presets": [], // 设定转码规则
    "plugins": [] // 插件
}
```

- css 相关 loader

  - css-loader: 处理 css 文件中的 url()
  - style-loader: 将 css 插入到页面的 style 标签
  - less-loader: less 转换为 css
  - postcss-loader(autoprefixer-loader): 自动添加兼容前缀(`-webkit-`、`-moz-`等)

- url-loader/file-loader: 修改文件名，放在输出目录下，并返其对应的 url

  - url-loader 在当文件大小小于限制值时，它可以返回一个 Data Url

- html-loader/raw-loader: 把 Html 文件输出成字符串
  - html-loader 默认处理 html 中的`<img src="image.png">`为 require("./image.png")，需要在配置中指定 image 文件的加载器

## 插件(plugins)

loader 仅在每个文件的基础上执行转换，**插件目的在于解决 loader 无法实现的其他事**。
由于 plugin 可以携带参数/选项，需要在 wepback 配置中，向 plugins 属性传入`new`实例。

## 解析(resolve)

这些选项能设置模块如何被解析，因为这里会使用到所以也介绍一下用到的：

- resolve.extensions

  - 自动解析确定的扩展。默认值为：`[".js", ".json"]`

- resolve.alias
  - 创建`import`或`require`的别名，来确保模块引入变得更简单。
    > 如果使用 typescript 的话，我们还需要配置`tsconfig.json`：

# 项目配置

## 目录组织

```bash
├── build/                      # webpack配置参数文件
│   └── ...
├── src/                        # 项目代码入口
│   ├── page1/                  # 第一个页面或者应用
│   │   ├── main.js             # 页面/应用入口文件
│   │   └── ...
│   └── page2/                  # 第二个页面或者应用
│   │   ├── main.js             # 页面/应用入口文件
│   │   └── ...
│   └── pageN/                  # 第N个页面或者应用
│       ├── main.js             # 页面/应用入口文件
│       └── ...
├── .babelrc                    # babel编译参数
├── index.html                  # 主页模板，所有的页面共用该index.html入口
└── package.json                # 项目文件，记载着一些命令和依赖还有简要的项目描述信息
```

## 基本配置文件

由于我们需要实现开发时多页面共同启动，打包时分块打包的功能，故在不同环境下我们的入口`entry`和`plugins`等将会不一致，这里我们先省略：

```js
var path = require("path");

var webpackConfig = {
  entry: {},
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./[hash].js"
  },
  resolve: {
    extensions: [".js", ".json"] // '.ts' and more
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "./src")]
      }
      // more loaders...
    ]
  },
  plugins: []
};

module.exports = webpackConfig;
```

# 结束语

这里我们搭建了最基本的目录结构以及不完整的 webpack 配置，后续我们将深入进行 build 和 dev 的过程。  
目前的代码并没有什么太大的作用，后面补上完整项目的代码吧。
