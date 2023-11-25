(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{656:function(v,a,_){"use strict";_.r(a);var t=_(69),n=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("前面提到了渲染引擎的几种渲染方式，如果我们要在与用户交互的过程中识别到具体的元素，又该如何处理呢？")]),v._v(" "),_("h2",{attrs:{id:"canvas-元素选择的难题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#canvas-元素选择的难题"}},[v._v("#")]),v._v(" Canvas 元素选择的难题")]),v._v(" "),_("p",[v._v("在"),_("RouterLink",{attrs:{to:"/front-end-basic/render-engine/render-engine-bottom-render-architecture.html"}},[v._v("《复杂渲染引擎架构与设计--3.底层渲染适配》")]),v._v("一文中，我们介绍了不同的渲染方式，包括 Canvas 渲染、DOM 渲染、SVG 渲染甚至是 WebGL 渲染等。对于不同的渲染方式，要实现元素选取的代价十分不一样。")],1),v._v(" "),_("p",[v._v("对于 DOM/SVG 渲染，我们可以直接使用浏览器提供的元素选择能力。在这样的场景下，不管是父子元素的管理、事件冒泡和捕获等都比较容易实现。因此，我们今天主要讨论 Canvas 渲染要如何实现元素选择。")]),v._v(" "),_("p",[v._v("对于 Canvas 渲染里进行元素选取，我们常见有几种方式：")]),v._v(" "),_("ol",[_("li",[v._v("几何检测法。")]),v._v(" "),_("li",[v._v("像素检测法。")]),v._v(" "),_("li",[v._v("Canvas + DOM 绘制交互。")])]),v._v(" "),_("h3",{attrs:{id:"几何检测法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几何检测法"}},[v._v("#")]),v._v(" 几何检测法")]),v._v(" "),_("p",[v._v("几何检测法是许多游戏引擎或者说物理引擎的解决方案，我们常常又称为碰撞检测法。")]),v._v(" "),_("p",[v._v("在元素选取的场景下，我们只需要判断用户触发事件的位置，是否落在某个元素几何里。因此，我们面临的问题是：确定某个点是否位于给定的多边形内。")]),v._v(" "),_("p",[v._v("一般来说，某个点是否在某个多边形内，常见的便是交叉数法（也称射线判断法）：从所讨论的点 P 向任何方向射出一条射线（半线），判断该射线与元素几何相交的线段数奇偶情况。在该方法中，我们需要确保射线不会直接射到多边形的任何顶点，这个是比较难做到的。因此，也有不少改良的方案，具体可以参考"),_("a",{attrs:{href:"https://web.cs.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《When is a Point Inside a Polygon?》"),_("OutboundLink")],1),v._v("。")]),v._v(" "),_("p",[v._v("除了交叉数法，还有环绕数法，这里不进行详细解释了，具体可以参考"),_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/436494294",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Canvas 中判断点是否在图形上》"),_("OutboundLink")],1),v._v("。")]),v._v(" "),_("p",[v._v("几何检测法在渲染引擎中使用，优势在于内存消耗小。但它也存在一些问题：")]),v._v(" "),_("ol",[_("li",[v._v("需要维护一个图形检测算法库。")]),v._v(" "),_("li",[v._v("对于复杂的曲线图形计算量很大。")])]),v._v(" "),_("p",[v._v("除此之外，如果元素存在堆叠的情况，则可能需要遍历地进行检测判断；如果存在的元素数量特别庞大，则意味着这样的遍历性能可能会受到影响。")]),v._v(" "),_("h3",{attrs:{id:"像素检测法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#像素检测法"}},[v._v("#")]),v._v(" 像素检测法")]),v._v(" "),_("p",[v._v("像素检测法又称色值法，简单来说就是给每个绘制的图案按照堆叠顺序绘制一个带随机背景色的一样的图案，当某个点落在 Canvas 上时，则可以通过所在的像素颜色，找到对应的几何元素。")]),v._v(" "),_("p",[v._v("这个方法看似简单，实际上我们需要使用两个 Canvas 来实现：")]),v._v(" "),_("ul",[_("li",[v._v("一个用于真实渲染使用，绘制最终用户可见的内容")]),v._v(" "),_("li",[v._v("另一个用于交互使用，带背景色的图形将会绘制在这个 Canvas 上")])]),v._v(" "),_("p",[v._v("当用户进行交互时，通过 Canvas 位置找出第二个 Canvas 的颜色，然后根据色值去获取到对照的图形。这便要求我们每个图形在绘制前，都需要生成一个元素与随机色值的映射表，通过该表才能获取到最终的元素。")]),v._v(" "),_("p",[v._v("像素检测法的实现很简单，这也是它的优势，但是同样会存在一些问题：")]),v._v(" "),_("ul",[_("li",[v._v("维护两个 Canvas 需要一定的成本")]),v._v(" "),_("li",[v._v("如果绘制频繁，或者绘制内容重新渲染频繁，则该方法也会存在性能问题")])]),v._v(" "),_("p",[v._v("如果考虑到像在线表格这样的产品，由于还需要滚动和重绘，像素检测法的性能或许不会很好。而表格本身就是天然四方形的布局，因此更适合使用几何检测法，而在使用几何检测法的时候，我们甚至只需要判断某个点是否落在某个矩形内，几乎涉及不到较复杂的算法。")]),v._v(" "),_("h3",{attrs:{id:"canvas-dom-交互"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#canvas-dom-交互"}},[v._v("#")]),v._v(" Canvas + DOM 交互")]),v._v(" "),_("p",[v._v("对于一些复杂的交互场景，我们可以适当地添加 DOM 元素来降低维护成本。")]),v._v(" "),_("p",[v._v("比如，在线表格的交互中，很多时候我们都需要先选中一些格子，然后再进行操作。那么，我们可以先使用简单的几何检测法来获取到对应单元格位置，然后生成一个对应的 DOM 元素覆盖在对应的 Canvas 上，之后所有的交互都由这个 DOM 元素来完成。")]),v._v(" "),_("p",[v._v("显然，像输入编辑这种功能，是无法完全使用 Canvas 实现的，或者说是成本巨大，因此我们可以直接使用一个 DOM 的编辑框放在 Canvas 上面，等用户完成编辑操作，再把内容同步到 Canvas 上即可。")]),v._v(" "),_("p",[v._v("这是一种比较简单又取巧的解决方案，但同样需要考虑一些问题：")]),v._v(" "),_("ul",[_("li",[v._v("页面滚动的时候，DOM 元素是否需要跟随滚动")]),v._v(" "),_("li",[v._v("页面发生变化的时候，DOM 元素是否需要刷新")])]),v._v(" "),_("h2",{attrs:{id:"结束语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[v._v("#")]),v._v(" 结束语")]),v._v(" "),_("p",[v._v("本文主要介绍了 Canvas 里实现元素获取和事件处理的几种解决方案。")]),v._v(" "),_("p",[v._v("其实我们并不是所有时候都需要硬啃复杂的算法或是解决方案，换一下思路，其实你会发现有无数的方向可以尝试。虽然很多时候，我们常说要参考业界常见成熟的方案，但这并不意味着我们就一定要照抄。")]),v._v(" "),_("p",[v._v("适合自己的才是最好的，不管它是大众的方案，还是某种特殊场景下的解决方案。")])])}),[],!1,null,null,null);a.default=n.exports}}]);