<template>
<div  class="mui-off-canvas-wrap mui-draggable">
  <!-- 菜单容器 -->
  <my-cebian></my-cebian>
  <!-- 主页面容器 -->
  <div class="mui-inner-wrap">
    <!-- 主页面标题 -->
     <header class="mui-bar mui-bar-nav">
      <a class="mui-icon mui-icon-bars mui-pull-left mui-action-menu"></a>
      <a id="info" class="mui-icon mui-icon-info-filled mui-pull-right" style="color: #999;"></a>
      <h1 class="mui-title">画友</h1>
    </header>
    <div id="home" class="mui-content mui-scroll-wrapper">
      <div class="mui-scroll">
        <my-banner></my-banner>
        <my-content></my-content>
      </div>
    </div> 
   <div class="mui-off-canvas-backdrop"></div>
  </div>
</div>

</template>
<script>
import MyCebian from './index-child/cebian.vue'
import MyBanner from './index-child/banner.vue'
import MyContent from './index-child/content.vue'
export default {
  name: 'index',
  components: {
    MyBanner,
    MyCebian,
    MyContent
  },
  mounted () {
    var mui = window.mui
    mui.init()
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
    mui('#app').on('tap', '.mui-action-menu', function () {
      window.mui('.mui-off-canvas-wrap').offCanvas('toggle')
    })
    var gallery = mui('.mui-slider')
    gallery.slider({
      interval: 2000
    })
  }
}
</script>
<style></style>