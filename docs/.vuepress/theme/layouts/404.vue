<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>
        {{ getMsg() }}
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-image :src="imgSrc" class="image-container">
              <div slot="placeholder" class="image-slot">
                <img src="https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/assets/img/loading.gif"
                  style="width: 100%;" />
              </div>
              <div slot="error" class="image-slot">
                <img src="https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/chunzhu.jpg"
                  style="width: 100%;" />
              </div>
            </el-image>
          </el-col>
        </el-row>
      </blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
function getImgSource() {
  return (
    "https://api.thecatapi.com/v1/images/search?format=src&t=" +
    new Date().getTime()
  );
}

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  },
  data() {
    return {
      imgSrc: getImgSource()
    };
  },
  watch: {
    $route(to) {
      this.imgSrc = getImgSource();
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.image-slot
  width 100%
  display block

.image-container
  margin-top 20px

@media (max-width: $MQMobile)
  .copyright-text 
    font-size 13px
  .el-card__header
    padding 8px 10px
    font-size 13px

</style>
