module.exports = {
    title: '被删的前端游乐场',
    base: '/front-end-playground/',
    shouldPrefetch: () => false,
    description: 'Just playing around',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'godbasin/front-end-playground',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
    
        // 以下为可选的编辑链接选项
    
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'sourcecode',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮阿猪改善此页面！',
        nav: [
            { text: '概述', link: '/' },
            { text: '前端领域', link: '/front-end-basic/' },
            { text: 'Vue学习', link: '/vue/' },
            { text: '小程序学习', link: '/wxapp/' },
            { text: '百家齐放', link: '/front-end-others/' },
            { text: '前端的进击', link: '/front-end-addon/' },
            { text: '前端与工作', link: '/front-end-work/' },
            { text: 'FAQ', link: '/faq' }
        ],
        sidebar: {
            '/front-end-basic/': [
                {
                    title: '前端架构',
                    collapsable: true,
                    children: [
                        '/front-end-basic/deep-learning/module-seperate.md',
                        '/front-end-basic/deep-learning/trace-stash.md',
                        '/front-end-basic/deep-learning/build-application.md',
                        '/front-end-basic/deep-learning/reactive-programing.md',
                        '/front-end-basic/deep-learning/vscode-event.md',
                        '/front-end-basic/deep-learning/vscode-ipc.md',
                        '/front-end-basic/deep-learning/online-doc-network.md',
                        '/front-end-basic/deep-learning/front-end-performance-analyze.md',
                        '/front-end-basic/deep-learning/monitor-and-report.md',
                        '/front-end-basic/deep-learning/why-spreadsheet-app-excited.md',
                        '/front-end-basic/deep-learning/task-runner-design.md',
                        '/front-end-basic/deep-learning/network-design-responsibility-driven-design.md',
                        '/front-end-basic/deep-learning/network-design-dependency-decoupling.md',
                    ]
                }, {
                    title: '前端深入理解',
                    collapsable: true,
                    children: [
                        '/front-end-basic/understanding/operation-transform.md',
                        '/front-end-basic/understanding/component-communication-with-data-model.md',
                        '/front-end-basic/understanding/component-with-configuration.md',
                        '/front-end-basic/understanding/component-with-itself.md',
                        '/front-end-basic/understanding/app-component-isolation.md',
                        '/front-end-basic/understanding/template-engine.md',
                        '/front-end-basic/understanding/dialogue-abstraction.md',
                        '/front-end-basic/understanding/data-driven-or-event-driven.md',
                        '/front-end-basic/understanding/web-browser-render.md',
                    ]
                }, {
                    title: '前端入门',
                    collapsable: true,
                    children: [
                        '/front-end-basic/front-end/front-end-1.md',
                        '/front-end-basic/front-end/front-end-2.md',
                        '/front-end-basic/front-end/front-end-3.md',
                        '/front-end-basic/front-end/front-end-4.md',
                        '/front-end-basic/front-end/front-end-5.md',
                        '/front-end-basic/front-end/front-end-6.md',
                        '/front-end-basic/front-end/front-end-7.md',
                        '/front-end-basic/front-end/front-end-8.md',
                        '/front-end-basic/front-end/front-end-9.md',
                        '/front-end-basic/front-end/front-end-10.md',
                    ]
                }
            ],     
            '/vue/': [
                {
                    title: '9102 全员学 Vue',
                    collapsable: true,
                    children: [
                        '/vue/vue-for-everyone/vue-for-everyone-1.md',
                        '/vue/vue-for-everyone/vue-for-everyone-2.md',
                        '/vue/vue-for-everyone/vue-for-everyone-3.md',
                    ]
                }, {
                    title: '深入理解 Vue 动画效果',
                    collapsable: true,
                    children: [
                        '/vue/vue-transition/1-transition-component.md',
                        '/vue/vue-transition/2-css-transition-animation.md',
                        '/vue/vue-transition/3-javascript-hook.md',
                        '/vue/vue-transition/4-multi-element.md',
                        '/vue/vue-transition/5-list-and-flip.md',
                    ]
                }, {
                    title: 'Webpack 实现 Vue 多页应用',
                    collapsable: true,
                    children: [
                        '/vue/vue-multi-page/1-init-project.md',
                        '/vue/vue-multi-page/2-page-utils.md',
                        '/vue/vue-multi-page/3-node-packages.md',
                        '/vue/vue-multi-page/4-build.md',
                        '/vue/vue-multi-page/5-dev-server.md',
                        '/vue/vue-multi-page/6-hot-reload.md',
                        '/vue/vue-multi-page/7-source-map-and-uglifyjs.md',
                        '/vue/vue-multi-page/8-certain-loaders.md',
                    ]
                }, {
                    title: '深入理解Vue.js与实战',
                    path: 'http://www.godbasin.com/vue-ebook/'
                }
            ],     
            '/front-end-others/': [
                {
                    title: 'Angular框架解读',
                    collapsable: true,
                    children: [
                        '/front-end-others/deep-into-angular/angular-design-0-prestart.md',
                        '/front-end-others/deep-into-angular/angular-design-metadata.md',
                        '/front-end-others/deep-into-angular/angular-design-dom-define.md',
                        '/front-end-others/deep-into-angular/angular-design-zonejs.md',
                        '/front-end-others/deep-into-angular/angular-design-zone-ngzone.md',
                        '/front-end-others/deep-into-angular/angular-design-module.md',
                        '/front-end-others/deep-into-angular/angular-design-di-1-basic-concepts.md',
                        '/front-end-others/deep-into-angular/angular-design-di-2-hierarchical-di.md',
                        '/front-end-others/deep-into-angular/angular-design-di-3-bootstrap.md',
                        '/front-end-others/deep-into-angular/angular-design-ivy-0-design.md',
                        '/front-end-others/deep-into-angular/angular-design-ivy-1-view-data-and-node-injector.md',
                    ]
                }, {
                    title: '玩转 Angular',
                    collapsable: true,
                    children: [
                        '/front-end-others/angular-free/0-about-angular-from-1-to-4.md',
                        '/front-end-others/angular-free/0-di-in-angular.md',
                        '/front-end-others/angular-free/1-init-angular-app-with-webpack.md',
                        '/front-end-others/angular-free/2-inprove-app-configuration.md',
                        '/front-end-others/angular-free/3-init-routes-and-assets.md',
                        '/front-end-others/angular-free/4-create-sidebar.md',
                        '/front-end-others/angular-free/5-custom-input-component.md',
                        '/front-end-others/angular-free/6-two-form-building.md',
                        '/front-end-others/angular-free/7-dynamic-form.md',
                        '/front-end-others/angular-free/8-radio-and-checkbox.md',
                        '/front-end-others/angular-free/9-upload-iamge.md',
                        '/front-end-others/angular-free/10-add-conditions.md',
                        '/front-end-others/angular-free/11-option-dialog.md',
                        '/front-end-others/angular-free/12-config-and-create-form.md',
                        '/front-end-others/angular-free/13-dynamic-list.md',
                    ]
                }, {
                    title: '试试 Cycle.js',
                    collapsable: true,
                    children: [
                        '/front-end-others/cycle-js-test/1-init-app-with-webpack.md',
                        '/front-end-others/cycle-js-test/2-use-cyclic-router.md',
                        '/front-end-others/cycle-js-test/3-use-typescript.md',
                        '/front-end-others/cycle-js-test/4-use-class-build-input.md',
                        '/front-end-others/cycle-js-test/5-design-and-abstraction.md',
                        '/front-end-others/cycle-js-test/6-merge-streams.md',
                        '/front-end-others/cycle-js-test/7-debug-input.md',
                        '/front-end-others/cycle-js-test/8-two-way-binding.md',
                    ]
                }, {
                    title: 'D3.js 和 Tree',
                    collapsable: true,
                    children: [
                        '/front-end-others/d3-tree/1-svg-and-d3.md',
                        '/front-end-others/d3-tree/2-init-a-d3-tree.md',
                        '/front-end-others/d3-tree/3-ajax-for-node.md',
                        '/front-end-others/d3-tree/4-zoom-amd-drag.md',
                        '/front-end-others/d3-tree/5-add-panel.md',
                        '/front-end-others/d3-tree/6-add-smart-menu.md',
                        '/front-end-others/d3-tree/7-text-path.md',
                        '/front-end-others/d3-tree/8-add-path-click.md',
                    ]
                }, {
                    title: '试试 Three.js',
                    collapsable: true,
                    children: [
                        '/front-end-others/three-js-test/1-init-3d-world.md',
                        '/front-end-others/three-js-test/2-add-objects.md',
                        '/front-end-others/three-js-test/3-add-light-source.md',
                        '/front-end-others/three-js-test/4-add-keypress-move.md',
                        '/front-end-others/three-js-test/5-add-mouse-move.md',
                    ]
                }, {
                    title: 'BOX2D.js 文档与教程',
                    collapsable: true,
                    children: [
                        '/front-end-others/box2d-tutorial/1-0-basic-catalog.md',
                        '/front-end-others/box2d-tutorial/2-0-world.md',
                        '/front-end-others/box2d-tutorial/3-0-shape-and-body.md',
                        '/front-end-others/box2d-tutorial/4-0-joint.md',
                        '/front-end-others/box2d-tutorial/5-0-operation.md',
                        '/front-end-others/box2d-tutorial/6-1-create-and-init-world.md',
                        '/front-end-others/box2d-tutorial/6-2-add-body.md',
                        '/front-end-others/box2d-tutorial/6-3-add-bound.md',
                        '/front-end-others/box2d-tutorial/6-4-mouse-operate-body.md',
                        '/front-end-others/box2d-tutorial/6-5-handle-contact.md',
                        '/front-end-others/box2d-tutorial/7-0-api.md',
                    ]
                }
            ],
            '/wxapp/': [
                {
                    title: '小程序原理',
                    collapsable: true,
                    children: [
                        '/wxapp/wxapp-principle/1-wxapp-generate.md',
                        '/wxapp/wxapp-principle/2-wxapp-technology-architecture.md',
                        '/wxapp/wxapp-principle/3-wxapp-set-data.md',
                        '/wxapp/wxapp-principle/4-wxapp-manage-and-security.md',
                        '/wxapp/wxapp-principle/5-wxapp-basic-lib.md',
                        '/wxapp/wxapp-principle/6-wxapp-page-and-navigate.md',
                        '/wxapp/wxapp-principle/7-wxapp-component.md',
                    ]
                }, {
                    title: '小程序开发技巧',
                    collapsable: true,
                    children: [
                        '/wxapp/wxapp-technique/wxapp-official-functions.md',
                        '/wxapp/wxapp-technique/wxapp-gulp.md',
                        '/wxapp/wxapp-technique/wxapp-typescript.md',
                        '/wxapp/wxapp-technique/wxapp-computed.md',
                        '/wxapp/wxapp-technique/wxapp-watch.md',
                        '/wxapp/wxapp-technique/wxapp-cloud.md',
                        '/wxapp/wxapp-technique/wxapp-login.md',
                        '/wxapp/wxapp-technique/wxapp-multi-request.md',
                        '/wxapp/wxapp-technique/wxapp-global-data-behavior.md',
                        '/wxapp/wxapp-technique/wxapp-logs.md',
                        '/wxapp/wxapp-technique/wxapp-navigate.md',
                    ]
                }, {
                    title: '小程序开发月刊',
                    collapsable: true,
                    children: [
                        '/wxapp/wxapp-latest/wxapp-latest-20190114.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190215.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190315.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190415.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190515.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190617.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190715.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190815.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20190916.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20191015.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20191115.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20191216.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20200214.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20200314.md',
                        '/wxapp/wxapp-latest/wxapp-latest-20200415.md',
                    ]
                }
            ],
            '/front-end-addon/': [
                {
                    title: '不止单线程',
                    collapsable: true,
                    children: [
                        '/front-end-addon/more-than-single-thread/1-thread-and-progress.md',
                        '/front-end-addon/more-than-single-thread/2-progress-and-io.md',
                        '/front-end-addon/more-than-single-thread/3-interprocess-communication.md',
                        '/front-end-addon/more-than-single-thread/4-network-progress-and-tcp-ip.md',
                        '/front-end-addon/more-than-single-thread/5-http-and-websocket.md',
                        '/front-end-addon/more-than-single-thread/6-socket-and-socket-io.md',
                        '/front-end-addon/more-than-single-thread/7-node-js.md',
                    ]
                }, {
                    title: '简单算法之 js 实现',
                    collapsable: true,
                    children: [
                        '/front-end-addon/simple-algorithm/1-bubble-sort.md',
                        '/front-end-addon/simple-algorithm/2-counting-sort.md',
                        '/front-end-addon/simple-algorithm/3-insertion-sort.md',
                        '/front-end-addon/simple-algorithm/4-merge-sort.md',
                        '/front-end-addon/simple-algorithm/5-quick-sort.md',
                        '/front-end-addon/simple-algorithm/6-heap-sort.md',
                        '/front-end-addon/simple-algorithm/7-quick-select.md',
                        '/front-end-addon/simple-algorithm/8-find-maximum-subarray.md',
                        '/front-end-addon/simple-algorithm/9-n-n-matrix.md',
                    ]
                }, {
                    title: '不止纯前端',
                    collapsable: true,
                    children: [
                        '/front-end-addon/more-than-front-end/1-learning-database.md',
                        '/front-end-addon/more-than-front-end/2-sql-and-nosql.md',
                    ]
                }
            ],
            '/front-end-work/': [
                {
                    title: '前端这几年',
                    collapsable: true,
                    children: [
                        '/front-end-work/front-end-days/about-front-end-1-begin-in.md',
                        '/front-end-work/front-end-days/about-front-end-2-principle.md',
                        '/front-end-work/front-end-days/about-front-end-3-growth.md',
                        '/front-end-work/front-end-days/about-front-end-4-health.md',
                        '/front-end-work/front-end-days/about-front-end-5.md',
                        '/front-end-work/front-end-days/about-front-end-6.md',
                        '/front-end-work/front-end-days/about-front-end-7.md',
                        '/front-end-work/front-end-days/about-front-end-8.md',
                        '/front-end-work/front-end-days/about-front-end-9.md',
                        '/front-end-work/front-end-days/about-front-end-10.md',
                        '/front-end-work/front-end-days/about-front-end-11.md',
                        '/front-end-work/front-end-days/about-writing.md',
                        '/front-end-work/front-end-days/a-book-with-one-story.md',
                    ]
                }, {
                    title: '面试这件事',
                    collapsable: true,
                    children: [
                        '/front-end-work/interview/interview-1-ready.md',
                        '/front-end-work/interview/interview-2-stage.md',
                        '/front-end-work/interview/interview-3-basic-skills.md',
                        '/front-end-work/interview/interview-4-project-skills.md',
                        '/front-end-work/interview/interview-5-other-skills.md',
                        '/front-end-work/interview/interview-6-javascript.md',
                    ]
                }
            ],
        }
    },

};