(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{335:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("接触过 jQuery 的小伙伴们大概在切换到 mvvm 初总不习惯，需要进行开发思维的转换，从事件驱动的角度出发，到从数据驱动的角度出发，也是不小的挑战。")]),t._v(" "),s("h1",{attrs:{id:"事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动")]),t._v(" "),s("h2",{attrs:{id:"gui-与事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gui-与事件","aria-hidden":"true"}},[t._v("#")]),t._v(" GUI 与事件")]),t._v(" "),s("p",[t._v("GUI（图形用户界面）与事件驱动的渊源可谓不浅。")]),t._v(" "),s("p",[t._v("GUI 应用程序的特点是注重与用户的交互，因此程序的执行取决于与用户的实时交互情况，大部分的程序执行需要等到用户的交互动作发生之后。")]),t._v(" "),s("p",[t._v("由于用户的输入频率并不高，若不停轮询获取用户输入，就有点像 ajax 轮询和 websocket 推送的关系：")]),t._v(" "),s("ol",[s("li",[t._v("资源利用率低。")]),t._v(" "),s("li",[t._v("不能真正做到及时同步。")])]),t._v(" "),s("p",[s("strong",[t._v("由于 GUI 程序的执行流程由用户控制，并且不可预期，为了适应这种特点，我们需要采用事件驱动的编程方法。普通程序的执行可概括为“启动——做事——终止”，而事件驱动的程序的执行可概括为“启动——事件循环（即等待事件发生并处理之）”。")])]),t._v(" "),s("h2",{attrs:{id:"事件驱动编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动编程","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动编程")]),t._v(" "),s("h3",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("p",[t._v("事件是可以被控件识别的操作，如按下确定按钮，选择某个单选按钮或者复选框。每一种控件有自己可以识别的事件，如窗体的加载、单击、双击等事件，编辑框（文本框）的文本改变事件，等等。")]),t._v(" "),s("p",[t._v("事件（event）是针对应用程序所发生的事情，并且应用程序需要对这种事情做出响应。")]),t._v(" "),s("h3",{attrs:{id:"事件处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件处理")]),t._v(" "),s("p",[t._v("程序对事件的响应其实就是调用预先编制好的代码来对事件进行处理，这种代码称为事件处理程序（event handler）。")]),t._v(" "),s("p",[s("strong",[t._v("事件驱动编程（event-driven programming）就是针对这种“程序的执行由事件决定”的应用的一种编程范型。")])]),t._v(" "),s("h3",{attrs:{id:"event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" Event loop")]),t._v(" "),s("p",[t._v('主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop（事件循环）。')]),t._v(" "),s("p",[t._v("关于 Javascript 的单线程与 Event Loop，想要了解可以参考"),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript 运行机制详解：再谈 Event Loop》"),s("OutboundLink")],1),t._v("。今天的主角是数据驱动，事件相关的不进行详细说明了。")]),t._v(" "),s("h2",{attrs:{id:"事件驱动思维"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动思维","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动思维")]),t._v(" "),s("p",[t._v("在 GUI 和 Javascript 的设计场景下，我们写代码的时候也会代入这样的思维：")]),t._v(" "),s("p",[s("strong",[t._v("用户输入 => 事件响应 => 代码运行 => 刷新页面状态")])]),t._v(" "),s("p",[t._v("于是乎，刚开始写应用的思路如下：")]),t._v(" "),s("ol",[s("li",[t._v("开发静态页面。")]),t._v(" "),s("li",[t._v("添加事件监听，包括用户输入、http 请求、定时器触发等事件。")]),t._v(" "),s("li",[t._v("针对不同事件，编写不同的处理逻辑，包括获取事件状态/输入、计算并更新状态等。")]),t._v(" "),s("li",[t._v("根据计算后的数据状态，重新渲染页面。")])]),t._v(" "),s("p",[t._v("通俗地说，事件驱动思维是从事件响应出发，来完成应用的设计和编程。")]),t._v(" "),s("h1",{attrs:{id:"数据驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据驱动")]),t._v(" "),s("p",[t._v("数据驱动，将我们从复杂的逻辑设计带进数据处理的世界。")]),t._v(" "),s("h2",{attrs:{id:"何为数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何为数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 何为数据")]),t._v(" "),s("p",[t._v("数据是什么，官方回答：数据是科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值。")]),t._v(" "),s("p",[t._v("但其实不管是资料中、生活和工作中，所有的事物我们都可以抽象为数据。像游戏里面的角色、物品、经验值、天气、时间等等，都是数据。游戏其实也算是对真实世界抽象的一种，而抽象之后，最终都可呈现为数据。")]),t._v(" "),s("p",[t._v("我认为，"),s("strong",[t._v("数据是一个抽象的过程。")])]),t._v(" "),s("p",[t._v("回到日常写码中，前端写页面，抽象成数据常用的无非是：")]),t._v(" "),s("ul",[s("li",[t._v("列表 => array")]),t._v(" "),s("li",[t._v("状态 => number/boolen")]),t._v(" "),s("li",[t._v("一个卡片 => object")]),t._v(" "),s("li",[t._v("等等")])]),t._v(" "),s("h2",{attrs:{id:"事件驱动到数据驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动到数据驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动到数据驱动")]),t._v(" "),s("h3",{attrs:{id:"数据驱动-vs-事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动-vs-事件驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据驱动 vs 事件驱动")]),t._v(" "),s("p",[t._v("要对事件驱动和数据驱动进行直观的比较，大概是以下这样：")]),t._v(" "),s("h4",{attrs:{id:"事件驱动-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动")]),t._v(" "),s("ol",[s("li",[t._v("构建页面：设计 DOM => 生成 DOM => 绑定事件")]),t._v(" "),s("li",[t._v("监听事件：操作 UI => 触发事件 => 响应处理 => 更新 UI")])]),t._v(" "),s("h4",{attrs:{id:"数据驱动-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据驱动")]),t._v(" "),s("ol",[s("li",[t._v("构建页面：设计数据结构 => 事件绑定逻辑 => 生成 DOM")]),t._v(" "),s("li",[t._v("监听事件：操作 UI => 触发事件 => 响应处理 => 更新数据 => 更新 UI")])]),t._v(" "),s("p",[t._v("其实最大的转变是，以前会把组件视为 DOM，把事件/逻辑处理视为 Javascript，把样式视为 CSS。而当转换思维方式之后，组件、事件、逻辑处理、样式都是一份数据，我们只需要把数据的状态和转换设计好，剩下的实现则由具现方式（模版引擎、事件机制等）来实现。")]),t._v(" "),s("h3",{attrs:{id:"数据驱动思维"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动思维","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据驱动思维")]),t._v(" "),s("p",[t._v("转换到数据驱动思维后，我们在编程实现的过程中，更多的是思考数据的维护和处理，而无需过于考虑 UI 的变化和事件的监听。")]),t._v(" "),s("p",[t._v("拿一个企业网站来说，里面的很多数据和链接，从前我们常用方式是直接写成 DOM，然后就产生了很长的一段 DOM 代码。")]),t._v(" "),s("p",[t._v("如果说我们将其切换到数据，以对象和数组的方式存储，这时候我们只需要写一段具现方式，将这组数据转成 DOM。这种方式有以下好处：")]),t._v(" "),s("ul",[s("li",[t._v("数据变更方便")]),t._v(" "),s("li",[t._v("DOM 结构变轻")]),t._v(" "),s("li",[t._v("DOM 结构/样式调整方便")]),t._v(" "),s("li",[t._v("抽象设计")]),t._v(" "),s("li",[t._v("代码量减少，易于维护")])]),t._v(" "),s("h2",{attrs:{id:"数据驱动与-mvvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动与-mvvm","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据驱动与 mvvm")]),t._v(" "),s("p",[t._v("数据驱动的设计思维或许与 mvvm 没有必然的联系，但是 mvvm 框架提供一些具现方式将数据驱动变得更加轻松。")]),t._v(" "),s("h3",{attrs:{id:"mvvm-集成具现化方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-集成具现化方法","aria-hidden":"true"}},[t._v("#")]),t._v(" mvvm 集成具现化方法")]),t._v(" "),s("p",[t._v("拿 vue 框架来说，有以下一些很方便的具现方法：")]),t._v(" "),s("ul",[s("li",[t._v("模板渲染：数据 => AST => 生成 DOM")]),t._v(" "),s("li",[t._v("数据绑定：交互输入/http 请求响应/定时器触发 => 事件监听 => 数据变更 => diff => DOM 更新")]),t._v(" "),s("li",[t._v("路由引擎：url => 数据(host/path/params 等) => 解析对应页面")])]),t._v(" "),s("p",[t._v("当我们使用了这些 mvvm 框架时，它们解决了如何让数据转变成需要的东西，将抽象具象化的问题。在这样的情况下，我们只需要完成两步：")]),t._v(" "),s("ol",[s("li",[t._v("将产品/业务/设计抽象化，将 UI、交互抽象为数据。")]),t._v(" "),s("li",[t._v("将一组组的数据用逻辑处理连接起来。")])]),t._v(" "),s("h3",{attrs:{id:"mvvm-推动数据驱动思维"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-推动数据驱动思维","aria-hidden":"true"}},[t._v("#")]),t._v(" mvvm 推动数据驱动思维")]),t._v(" "),s("p",[t._v("这里借用 vue，来举两个例子吧。")]),t._v(" "),s("p",[t._v("一、获取 input 输入并更新\n实现一个 input 的监听输入，并更新输出到模板，我们能有以下代码的变化：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--1. 事件驱动--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--2. 数据驱动 + vue--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inputValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ inputValue }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("当我们在 vue 中，模板引擎帮我们处理了模板渲染、数据绑定的过程，我们只需要知道这里面只有一个有效数据，即 input 的值。")]),t._v(" "),s("p",[t._v("二、部分更新列表\n我们再来看个例子，我们有一组数据，需要渲染成一个列表：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://href1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://href2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://href3"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://href4"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",[s("li",[t._v("当我们需要渲染成列表时：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--1). 事件驱动--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ul"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`<li data-id="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"><span>')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('</span>: <a href="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("\n        item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n      "),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</a></li>`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--2). 数据驱动 + vue--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item in list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{item.name}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{item.href}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("当我们需要更新一个列表中某个 id 的其中一个数据时（这里需要更改 id 为 3 的 name 值）：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1). 事件驱动")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ul"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`li[data-id="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"] span`')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"newName3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2). 数据驱动 + vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"newName3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当然这里我们已知"),s("code",[t._v("list")]),t._v("里面有"),s("code",[t._v("id")]),t._v("为 3 的值，若是未知或不确定的数据，则需要做好异常处理，如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" item3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" item3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"newName3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在使用数据驱动的时候，模板渲染的事情会交给框架去完成，我们需要做的就是数据处理而已。")]),t._v(" "),s("h1",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("思维的切换和视角的转变，是一件很有意思的事情。从更多的角度去观察，去思考，去总结，才能更好地理解被观察体。")])])},[],!1,null,null,null);a.default=e.exports}}]);