<template>
</template>
<script>
  export default {
    name: 'MyHead',
    props: {
      title: {
        type: String,
        default: '红旅动漫'
      }
    },
    methods: {
      nemu () {
        window.mui('.mui-off-canvas-wrap').offCanvas('toggle')
      }
    }
  }
</script>
<style>
  .header{
    height:41px;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 5;
    background: #fff;
  }
  .header .menu{
    position: absolute;
    left: 5px;
    height: 100%;
    line-height: 41px;
    top:0;
  }
  .header .search{
    position: absolute;
    right: 5px;
    height: 100%;
    line-height: 41px;
    top:0;
  }
  .header h3{
    line-height: 41px;
    text-algin:center;
  }
</style>
