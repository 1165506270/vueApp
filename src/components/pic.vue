<template>
<div id="picbox">
  <header class="mui-bar mui-bar-nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <h1 class="mui-title">{{data.data.title}}</h1>
  </header>
  <div class="mui-scroll-wrapper mui-content">
    <div id="pic" class="mui-scroll">
        <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <img :src="'http://127.0.0.1:3000/face/'+data.face">
            <div class="mui-media-body">
              {{data.data.username}}
              <p>发表于 {{data.data.time}}</p>
            </div>
          </div>
          <div class="mui-card-content">
            <img :src="'http://og0ymg87t.bkt.clouddn.com/'+data.data.url" alt="" width="100%">
            <p class="content-comment">{{data.data.comment}}</p>
          </div>
          <div class="mui-card-footer">
            <span class="mui-icon mui-icon-eye">&nbsp;{{data.data.see}}</span>
            <span class="mui-icon mui-icon-star"></span>
          </div>
        </div>
        <my-comment :aid="uid"></my-comment>
      </div>
    </div>
</div>
</template>
<script>
  import MyComment from './comment.vue'
  export default {
    data () {
      return {
        data: {},
        uid: this.$route.params.uid
      }
    },
    components: {
      MyComment
    },
    beforeCreate () {
      var slef = this
      var uid = slef.$route.params
      console.log(uid.uid)
      window.mui.get('http://127.0.0.1:3000/pic', {uid: uid.uid}, (data) => {
        slef.data = data
        console.log(slef.data)
      }, 'json')
      var mui = window.mui
      mui.init()
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
      })
    },
    mounted () {
      var mui = window.mui
      mui.init()
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
      })
    }
  }
</script>
<style>
  #pic .mui-icon-eye{
    font-size: 14px;
  }
  #pic .mui-card{
    margin:0 0 5px;
  }
  .content-title{
    padding: 5px 15px 0px;
    color: #00a0a0
  }
  .content-comment{
    color: #aaa;
    padding: 5px 15px 0;
    font-size: 12px;
  }
</style>