---
title: 3. 切换到 Typescript
---

因为对 Rxjs 的好感玩上了 Cycle.js，该系列用于记录使用该框架的一些笔记。本文记录将当前的代码切换到 Typescript 中的过程。

<!--more-->

# 迁移 Typescript

## [Typescript](https://www.tslang.cn/docs/home.html)

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

之前使用 Typescript 也听多了，用习惯了，如今用回 js 偶尔会有些难受，尤其是在非 IDE 编辑器下，还没有配置 eslint 等的时候[捂脸]。
关于更多的 Typescript 的内容，大家可以去百度或谷歌找找，或许后面用多了，本骚年还能写点总结或者笔记什么的。

## js 迁移 ts

这里面我们分几个步骤吧：

1. 把项目代码 js 文件后缀名更改为 ts。

这里面我们在 bash 下面批量 linux 命令转换，能遍历文件以及文件夹下的文件：

```bash
find ./ -name "*.js" | awk -F "." '{print $2}' | xargs -i -t mv ./{}.js  ./{}.ts
```

2. 安装 typescript 相关模块。

```bash
npm install -D typescript ts-loader tslint tslib @types/node
```

TypeScript 还需要全局安装的，如果没有的自觉安装：

```bash
npm install --global typescript
```

3. 添加 Typescript 相关配置。

```json
// tsconfig.json
// 编译选项
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "exclude": ["node_modules"]
}

// tslint.json
// 校验规则，这里省略
```

4. 修改 Webpack 配置。

```js
// webpack.config.js
var config = {
  entry: {
    app: [path.resolve(__dirname, "src/index.ts")]
  }, // 入口文件，改成index.ts
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      // 添加ts-loader
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
      // ...
    ]
  }
};
```

到这里，本骚年本想着开开心心启动项目了，结果发现报错了。

## jsx 和 tsx

是的，本骚年在项目里用了 jsx，只是以上的配置，当然报错啦。

1. 配置调整。这里还需要进行以下的调整：

```js
// tsconfig.json
{
    "compilerOptions": {
        // 我们输出为es6，然后可以传递给babel继续处理啦
        "target": "es6",
        // 还要加上下面这个啊
        // 这个代表ts-loader输出保留jsx，后面可以传给babel-loader处理
        "jsx": "preserve"
        // ...
    },
    // ...
}

// webpack.config.js
var config = {
    // ...
    module: {
        rules: [
            // ...
            // 把tsx给加进去啦
            {
                test: /\.jsx?|.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
	plugins: [
        // 由于ts-loader处理时会有html is not a function的报错
		// 这里本骚年决定全局注入
        new webpack.ProvidePlugin({
            html: ['snabbdom-jsx', 'html']
        })
    ],
}
```

这是本骚年研究了好久才找到的方法，从此我们不需要在文件里面加这个啦：

```js
import { html } from "snabbdom-jsx";
```

2. 文件名调整：

我们需要将`.ts`文件名再一次改为`.tsx`。

然后到这里，我们就能将我们的项目跑起来啦，哈哈哈哈。

## 结束语

这节主要讲了我们把 Typescript 迁到我们项目里，其中还有 jsx 相关的配置调整，顺利把项目跑起来啦。  
[此处查看项目代码](https://github.com/godbasin/godbasin.github.io/tree/blog-codes/cyclejs-notes/3-use-typescript)  
[此处查看页面效果](http://cyclejs-notes.godbasin.com/3-use-typescript/index.html)
