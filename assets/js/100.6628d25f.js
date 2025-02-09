(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{662:function(_,v,t){"use strict";t.r(v);var a=t(69),i=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("知晓要如何解决问题，只是真正解决问题的第一步。在工作里，我们更多时候遇到的问题不只是如何解决，而是如何有效落地。")]),_._v(" "),t("p",[t("RouterLink",{attrs:{to:"/front-end-basic/performance/front-end-performance-optimization.html"}},[_._v("《前端性能优化--归纳篇》")]),_._v("中，我给大家介绍了很多常见的前端性能优化思路和方案，核心优化思想为时间上减少耗时、空间上降低资源占用。其中耗时优化在前端性能优化中更常见，优化方案包括网络请求优化、首屏加载优化、渲染过程优化、计算/逻辑运行提速四个方面。")],1),_._v(" "),t("p",[_._v("性能优化通常需要投入不少的人力和成本来完成，因此更多的时候我们可以将其当作是一个项目的方式来进行管理。从项目管理的角度来讲，我们的性能优化工作会拆解为以下部分内容：")]),_._v(" "),t("ol",[t("li",[_._v("确定优化的目标和预期。")]),_._v(" "),t("li",[_._v("确定技术方案。")]),_._v(" "),t("li",[_._v("项目排期和执行。")]),_._v(" "),t("li",[_._v("进行项目复盘。")])]),_._v(" "),t("h2",{attrs:{id:"_1-确定优化的目标和预期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-确定优化的目标和预期"}},[_._v("#")]),_._v(" 1. 确定优化的目标和预期")]),_._v(" "),t("p",[_._v("性能优化的第一步，就是要确定优化的目标和预期。在给出具体的数据之前，我们首先需要对一些性能数据进行定义，常见包括：")]),_._v(" "),t("ul",[t("li",[_._v("网络资源请求时间")]),_._v(" "),t("li",[_._v("Time To Start Render(TTSR)：浏览器开始渲染的时间")]),_._v(" "),t("li",[_._v("Dom Ready：页面解析完成的时间")]),_._v(" "),t("li",[_._v("Time To Interact(TTI))：页面可交互时间")]),_._v(" "),t("li",[_._v("Total Blocking Time (TBT)：总阻塞时间，代表页面处于不可交互状态的耗时")]),_._v(" "),t("li",[_._v("First Input Delay(FID)：从用户首次交互，到浏览器响应的时间")])]),_._v(" "),t("p",[_._v("要选择合适有效的指标进行定义，比如由于前端框架的出现，Page Load 耗时（"),t("code",[_._v("window.onload")]),_._v("事件触发的时间）已经难以用来作为页面可见时间的关键点，因此可以使用框架提供的生命周期，或者是使用 Largest Contentful Paint (LCP，关键内容加载的时间点)更为合适。")]),_._v(" "),t("p",[_._v("对需要关注的性能数据进行定义完成后，可以对它们进行目标和预期的确定，一般来说有两种方式：")]),_._v(" "),t("ol",[t("li",[_._v("对比原先数据优化一定比例，比如 TTI 耗时减少 30%。")]),_._v(" "),t("li",[_._v("通过对竞品进行分析确定目标，比如比竞品耗时减少 20%。")])]),_._v(" "),t("p",[_._v("在确定了目标和预期之后，我们便可以根据预期来确定优化的方向、技术方案。")]),_._v(" "),t("h2",{attrs:{id:"_2-确定技术方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-确定技术方案"}},[_._v("#")]),_._v(" 2. 确定技术方案")]),_._v(" "),t("p",[_._v("根据确定的目标和预期，我们就可以选择合适的优化方案。")]),_._v(" "),t("p",[_._v("为什么不能将前面提到的全部技术方案都做一遍呢？显然这是不合理的。主要原因有两个：")]),_._v(" "),t("ol",[t("li",[_._v("性价比。项目开发最看重的便是投入产出比，对于不同的项目来说，不同的技术优化方案需要投入人力不一样，很可能需要的投入较多但是优化效果可能不明显。")]),_._v(" "),t("li",[_._v("不适用，比如有些业务并不具备差异化服务。")])]),_._v(" "),t("p",[_._v("举个例子，阿猪的预期目标是客户端内打开应用 TTI 耗时减少 30%，因此他可以选择的优化方案包括：")]),_._v(" "),t("ol",[t("li",[_._v("对首页数据进行分片/分屏加载。")]),_._v(" "),t("li",[_._v("首屏仅加载需要的资源，通过异步加载方式加载剩余资源。")]),_._v(" "),t("li",[_._v("使用服务端直出渲染。")]),_._v(" "),t("li",[_._v("使用 Tree-shaking 移除代码中无用的部分。")]),_._v(" "),t("li",[_._v("配合客户端进行资源预请求和预加载，比如使用预热 Web 容器。")]),_._v(" "),t("li",[_._v("配合客户端将资源和数据进行离线，可用于下一次页面的快速渲染。")])]),_._v(" "),t("p",[_._v("其中，5-6 需要客户端小伙伴进行支持，那么阿猪可以根据对方可以投入人力进行配合，来确定这两个优化点是否在本次方案中。")]),_._v(" "),t("p",[_._v("为了达成目标，对合适的技术优化点进行罗列之后，需要对每个优化点进行简单的调研，确定它们的优化效果。比如针对对首页数据进行分屏加载，可以通过简单的模拟测试，对比完整数据的 TTI 耗时，与首屏数据的 TTI 耗时，预估该技术点的优化效果如何。")]),_._v(" "),t("p",[_._v("最后，根据每个优化点的优化效果，以及相应的工作量评估，以预期为目标，选择性价比最优的技术方案。")]),_._v(" "),t("p",[_._v("在技术方案确定后，则需要对工作内容进行排期，并按计划执行。优化完成后，还需要结合目标和预期，对优化效果进行复盘，同时还可以提出未来优化的规划。")]),_._v(" "),t("h2",{attrs:{id:"_3-项目排期和执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目排期和执行"}},[_._v("#")]),_._v(" 3. 项目排期和执行")]),_._v(" "),t("p",[_._v("这个步骤主要是排期实现，耗时最多。一般来说，需要注意的有两点：")]),_._v(" "),t("ol",[t("li",[_._v("进行合理的分工排期。")]),_._v(" "),t("li",[_._v("对项目风险进行把控。")])]),_._v(" "),t("h3",{attrs:{id:"进行合理的分工排期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进行合理的分工排期"}},[_._v("#")]),_._v(" 进行合理的分工排期")]),_._v(" "),t("p",[_._v("进行工作量评估的过程可以分为三步：")]),_._v(" "),t("ol",[t("li",[_._v("确认技术方案，以及分工合作方式。")]),_._v(" "),t("li",[_._v("拆分具体功能模块，分别进行工作量评估，输出具体的排期时间表。")]),_._v(" "),t("li",[_._v("标注资源依赖情况和协作存在的风险，进行延期风险评估。")])]),_._v(" "),t("p",[_._v("当我们确认好技术方案之后，可以针对实现细节拆分具体的功能模块，分别进行工作量的预估和分工排期。具体的分工排期在多人协作的时候是必不可少的，否则可能面临分工不明确、接口协议未对齐就匆忙开工、最终因为各种问题而返工这些问题。")]),_._v(" "),t("p",[_._v("进行工作量评估的时候，可以精确到半天的工作量预期。对独自开发的项目来说，同样可以通过拆解功能模块这个过程，来思考具体的实现方式，也能提前发现一些可能存在的问题，并相应地进行规避。")]),_._v(" "),t("p",[_._v("提供完整的工作量评估和排期计划表（精确到具体的日期），可以帮助我们有计划地推进项目。在开发过程中，我们可以及时更新计划的执行情况，团队的其他人也可以了解我们的工作情况。")]),_._v(" "),t("p",[_._v("工作量评估和排期计划表的另外一个重要作用，是通过时间线去严格约束我们的工作效率、及时发现问题，并在项目结束后可针对时间维度进行项目复盘。")]),_._v(" "),t("h3",{attrs:{id:"对项目风险进行把控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对项目风险进行把控"}},[_._v("#")]),_._v(" 对项目风险进行把控")]),_._v(" "),t("p",[_._v("我们在项目开发过程中，经常会遇到这样的情况：")]),_._v(" "),t("ul",[t("li",[_._v("因为方案设计考虑不周，部分工作需要返工，导致项目延期")]),_._v(" "),t("li",[_._v("在项目进行过程中，常常会遇到依赖资源无法及时给到、依赖方因为种种原因无法按时支援等问题，导致项目无法按计划进行")]),_._v(" "),t("li",[_._v("团队协作方式未对齐，开发过程中出现矛盾，反复的争执和调整协作方式导致项目延期")])]),_._v(" "),t("p",[_._v("一个项目能按照预期计划进行，技术方案设计、分工和协作方式、依赖资源是否确定等，任何一各环节出现问题都可能导致整体的计划出现延误，这是我们不想出现的结果。")]),_._v(" "),t("p",[_._v("因此，我们需要主动把控各个环节的情况，及时推动和解决出现的一些多方协作的问题。")]),_._v(" "),t("h2",{attrs:{id:"_4-进行项目复盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-进行项目复盘"}},[_._v("#")]),_._v(" 4. 进行项目复盘")]),_._v(" "),t("p",[_._v("很多开发习惯了当代码开发完成、发布上线之后就结束了这个项目，其实他们遗漏了一个很重要的环节：复盘。")]),_._v(" "),t("p",[_._v("我换过好多个团队，发现大多数团队和个人，都没有养成复盘的习惯。复盘是一个特别好的习惯，对于我们个人的成长也好，项目的优化和发展也好，都有很好的作用。")]),_._v(" "),t("p",[_._v("当然，也有一些人会把复盘当做背锅和甩锅，这是不对的。当我们在项目过程中，常常因为有 Deadline 而不断地赶节奏，大多数情况下都只能发现一个问题解决一个问题。而在项目结束之后，我们才可以跳出项目，做更加广视角下的回顾和思考。")]),_._v(" "),t("p",[_._v("有效的复盘，可以达到以下的效果：")]),_._v(" "),t("ol",[t("li",[_._v("及时发现自己的问题并改进，避免掉进同一个坑。")]),_._v(" "),t("li",[_._v("让团队成员知道每个人都在做什么，团队管理不混乱。")]),_._v(" "),t("li",[_._v("整理沉淀和分享项目经验，让整个团队都得到成长。")])]),_._v(" "),t("p",[_._v("对于大多数开发来说，很多时候都不屑于主动邀功，觉得自己做了些什么老板肯定都看在眼里，写什么总结和复盘都是刷存在感的表现。实际上老板们每天的事情很多，根本没法关注到每一个人，我以前也曾经跟老板们问过这样一个问题：做和说到底哪个重要？")]),_._v(" "),t("p",[_._v("答案是两个都重要。把一件事做好是必须的，但将这件事分享出来，可以同样给团队带来更多的成长。")]),_._v(" "),t("p",[_._v("通过对项目进行复盘，除了可以让团队其他人和老板知道我们做了些什么，更重要的是，我们可以及时发现自身的一些问题并改进。")]),_._v(" "),t("p",[_._v("项目复盘最好可以结合数据来说话，性能优化的工作可以用具体的耗时和 CPU 资源占用这些指标来做总结，工具的开发可以用接入使用的用户数量来说明效果。甚至是普普通通的项目上线，也都可以使用对比排期和实际开发，复盘各个环节的耗时和质量。")]),_._v(" "),t("h1",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[_._v("#")]),_._v(" 结束语")]),_._v(" "),t("p",[_._v("对于大部分前端开发来说，接触工具和框架开发、参与开源项目的机会比较少，很多时候我们写的都是“枯燥无聊”的业务代码。我们总认为只有做工具才会比较有意思、有技术挑战，很多时候会先入为主，认为业务代码写得再好也没用，也渐渐放弃了去思考要怎么把事情做好。")]),_._v(" "),t("p",[_._v("其实不只是工作中，我们生活里也可以常常进行反思和总结，这样我们的步伐才可以越跑越快。成长的过程中总会遇到各式各样的问题，有些问题被我们视而不见，有些问题我们选择了躲开，但其实我们还可以通过迎面应战、解决并反思的方式，在这样一次次战斗中快速地成长。")])])}),[],!1,null,null,null);v.default=i.exports}}]);