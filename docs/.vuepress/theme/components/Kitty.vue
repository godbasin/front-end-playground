<template>
  <div id="kitty-container" v-if="isShow">
    <el-popover @mousedown.native="move" @touchstart.native="touch" trigger="hover">
      <img class="image"  @click="dialogVisible = true" src="https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/2code2.jpg">
      <div class="text">牡羊猪的猫粮罐</div>
      <div id="kitty" @dblclick="deleteKitty" v-longpress="deleteKitty" :style="{background: 'url(' + kittyUrl + ')'}" slot="reference"></div>
    </el-popover>

    <el-dialog
      title="牡羊猪是这样渐渐胖成猪的喵（点击图片可以切换噢）"
      :visible.sync="dialogVisible">
      <el-image :src="pigUrl" style="min-height: 200px;" @click="changePig()" fit="contain">
        <div slot="placeholder" class="image-slot">
          <img src="https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/assets/img/loading.gif" style="width: 100%" />
        </div>
      </el-image>
    </el-dialog>
  </div>
</template>

<script>
//获取相关CSS属性
const getCss = function(o,key){
	return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]; 	
};

function getRandomKitty(){
  const kittyNum = 3;
  const randomNum = Math.floor(Math.random()*kittyNum); 
  return `https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/assets/img/kitty${randomNum}.svg`;
}

function getRandomPig(){
  const pigNum = 75;
  const randomNum = Math.floor(Math.random()*pigNum) + 1; 
  return `https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/pig/${randomNum}.jpg`;
}

export default {
  data() {
    return {
      isShow: true,
      dialogVisible: false,
      kittyUrl: getRandomKitty(),
      pigUrl: getRandomPig()
    }
  },
  methods: {
    changePig(){
      this.pigUrl = getRandomPig();
    },
    move(e) {
      let odiv = e.target; //获取目标元素

      let currentX = e.clientX;
      let currentY = e.clientY;
      let left = 0;
      let top = 0;

      if(getCss(odiv, "left") !== "auto"){
	    	left = getCss(odiv, "left");
	    }
	    if(getCss(odiv, "top") !== "auto"){
	    	top = getCss(odiv, "top");
      }
      document.onmousemove = e => {
        const nowX = e.clientX;
        const nowY = e.clientY;
        const disX = nowX - currentX;
        const disY = nowY - currentY;
			  odiv.style.left = parseInt(left) + disX + "px";
			  odiv.style.top = parseInt(top) + disY + "px";
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }, 
    touch(e) {
      const touches = e.changedTouches;
      let odiv = touches[0].target; //获取目标元素

      let currentX = touches[0].clientX;
      let currentY = touches[0].clientY;
      let left = 0;
      let top = 0;

      if(getCss(odiv, "left") !== "auto"){
	    	left = getCss(odiv, "left");
	    }
	    if(getCss(odiv, "top") !== "auto"){
	    	top = getCss(odiv, "top");
      }
      const el = document.getElementById("kitty-container");
      function touchMove(e){
        e.preventDefault();
        const touches = e.changedTouches;
        const nowX = touches[0].clientX;
        const nowY = touches[0].clientY;
        const disX = nowX - currentX;
        const disY = nowY - currentY;
			  odiv.style.left = parseInt(left) + disX + "px";
			  odiv.style.top = parseInt(top) + disY + "px";
      }
      function touchEnd(){
        el.removeEventListener("touchstart", touchMove);
        el.removeEventListener("touchend", touchEnd);
      }
      el.addEventListener("touchmove", touchMove);
      el.addEventListener("touchend", touchEnd);
    },
    deleteKitty(){
      this.isShow = false;
    }
  },
  directives: {
    longpress: {
      bind: function(el, binding, vNode) {
        // 确保提供的表达式是函数
        if (typeof binding.value !== "function") {
          // 获取组件名称
          const compName = vNode.context.name;
          // 将警告传递给控制台
          let warn = `[longpress:] provided expression '${
            binding.expression
          }' is not a function, but has to be `;
          if (compName) {
            warn += `Found in component '${compName}' `;
          }

          console.warn(warn);
        }

        // 定义变量
        let pressTimer = null;

        // 定义函数处理程序
        // 创建计时器（ 1秒后执行函数 ）
        let start = e => {
          if (e.type === "click" && e.button !== 0) {
            return;
          }

          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              // 执行函数
              handler();
            }, 1000);
          }
        };

        // 取消计时器
        let cancel = e => {
          // 检查计时器是否有值
          if (pressTimer !== null) {
            clearTimeout(pressTimer);
            pressTimer = null;
          }
        };

        // 运行函数
        const handler = e => {
          // 执行传递给指令的方法
          binding.value(e);
        };

        // 添加事件监听器
        el.addEventListener("mousedown", start);
        el.addEventListener("touchstart", start);

        // 取消计时器
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
        el.addEventListener("touchend", cancel);
        el.addEventListener("touchcancel", cancel);
      }
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.el-image
  > img 
    max-height 500px

.image
  width 150px

.el-dialog__body
  text-align center

.text
  text-align center
  width 100%
  font-weight bold

#kitty 
  position fixed !important
  right 10px
  bottom 10px
  position relative
  height 297px
  width 507.5px
  margin-top 2em
  margin-left 2em
  z-index 10
  -webkit-transform scale(0.4)
  -moz-transform scale(0.4)
  -ms-transform scale(0.4)
  transform scale(0.4)
  -webkit-animation sprite-animation 1.2s steps(16, end) infinite
  -moz-animation sprite-animation 1.2s steps(16, end) infinite
  -ms-animation sprite-animation 1.2s steps(16, end) infinite
  animation sprite-animation 1.2s steps(16, end) infinite

@media (max-width: $MQMobile)
  #kitty 
    right: auto
    bottom: 0px
    -webkit-transform scale(0.2)
    -moz-transform scale(0.2)
    -ms-transform scale(0.2)
    transform scale(0.2)
  .el-dialog
    width 90%

@-webkit-keyframes sprite-animation 
  from 
    background-position 0 0
  to 
    background-position -8120px 0
  


@-ms-keyframes sprite-animation 
  from 
    background-position 0 0
  to 
    background-position -8120px 0
  


@-moz-keyframes sprite-animation 
  from 
    background-position 0 0
  to 
    background-position -8120px 0
  

@keyframes sprite-animation 
  from 
    background-position 0 0
  to 
    background-position -8120px 0
  

</style>
