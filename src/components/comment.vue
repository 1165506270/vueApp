<template>
  <div id="comment">
  <!-- 评论表单 -->
    <div class="mui-input-row">
          <textarea id="textarea" rows="5" placeholder="请输入3-1000个字的评论内容" v-model="message"></textarea>
          <button type="button" @click="addComments" id="post" class="mui-btn mui-btn-primary" onclick="return false;">发送</button>
    </div>
  <!-- 评论列表 -->
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in commentData">
          <a href="javascript:;" class="">
            <img class="mui-media-object mui-pull-left" :src="item.face">
            <div class="mui-media-body">
              {{item.uname}}
              <span class="floor">#{{item.floor}}</span>
              <p class="">{{item.content}}</p>
              <span class="floor">{{item.time | time}}</span>
            </div>
          </a>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    aid: {
      type: String
    }
  },
  data () {
    return {
      commentData: [],
      url: 'http://127.0.0.1:3000/comment',
      pageSize: 5,
      sort: 0,
      message: '',
      flag: true
    }
  },
  methods: {
    getComments () {
      if (this.flag) {
        var mui = window.mui
        var slef = this
        slef.flag = false
        mui.get(slef.url, {aid: slef.aid, ps: slef.pageSize, pn: slef.sort}, (data) => {
          slef.sort += 1
          slef.flag = true
          for (var i = 0; i < data.data.length; i++) {
            slef.commentData.push(data.data[i])
          }
          console.log(slef.sort)
        })
      }
    },
    addComments () {
      var mui = window.mui
      var slef = this
      slef.time = new Date()
      mui.post('/adds', {aid: slef.aid, face: '/images/noface.gif', name: '66', time: slef.time, message: slef.message}, (data) => {
      })
    }
  },
  mounted () {
    var mui = window.mui
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
    this.getComments()
    mui.init({
      pullRefresh: {
        container: '#picbox',
        up: {
          contentrefresh: '正在加载...', // 可选，正在加载状态时，上拉加载控件上显示的标题内容
          contentnomore: '没有更多数据了', // 可选，请求完毕若没有更多数据时显示的提醒内容；
          callback: () => { console.log(1) }
        }
      }
    })
  }
}
</script>
<style>
  #comment #textarea{
    width: 80%;
    height:5rem;
  }
  #comment #post{
    height: 5rem;
    width: 20%;
    padding: 0;
    border: none;
  }
  #comment .floor{
    float: right;
    font-size: 12px;
    color: #aaa;
  }
  #comment .mui-table-view-cell>a:not(.mui-btn){
    white-space: normal;
  }
  #comment .mui-table-view-cell>a>img{
    border-radius: 40px;
  }
  #comment .mui-table-view-cell .mui-media-body p{
    padding-top: 10px;
  }
</style>