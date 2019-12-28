function integrateGitalk(router) {
  try{
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/gitalk.min.js';
    document.body.appendChild(scriptGitalk);

    router.afterEach((to, from) => {
      // 页面滚动，hash值变化，也会触发afterEach钩子，避免重新渲染
      if (to.path === from.path) return

      if (scriptGitalk.onload) {
        loadGitalk(to);
      } else {
        scriptGitalk.onload = () => {
          loadGitalk(to);
        }
      }
    });
  }catch(e){
    console.log(e)
  }

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.gitalk-container');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.path);
      }
    }
  }
  function renderGitalk(path) {
    const gitalk = new Gitalk({
      clientID: '1e0f6e251a3692a7e176',
      clientSecret: '37c9121a50e293aa5712ac9814fdfd2c775b6274', // come from github development
      repo: 'front-end-playground',
      owner: 'godbasin',
      admin: ['godbasin'],
      id: path,
      distractionFreeMode: false,
      language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
  }
}

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    // 使用element-ui
    Vue.use(ElementUI);
    
    // document && integrateGitalk(router);
  } catch (e) {
    console.error(e.message);
  }
};
