<template>
	<div>
		<h4 class="c-head">最新作品</h4>	
	  <ul class="mui-table-view mui-grid-view">
	    <li class="mui-table-view-cell mui-media mui-col-xs-6 new-item" v-for="item in news">
	      <a :href='"#/pic/"+item.uid' v-tap>
	        <img class="mui-media-object" :src="'http://og0ymg87t.bkt.clouddn.com/'+item.url+'-pic'">
	        <div class="mui-media-body">{{item.title}}</div>
	      </a>
	    </li>
	  </ul>
	</div>
</template>
<script>
export default {
  data () {
    return {
      news: []
    }
  },
  created () {
    var slef = this
    window.mui.get('http://127.0.0.1:3000/huoqu', {page: 1}, (data) => {
      slef.news = data
    }, 'json')
  }
}
</script>
<style>
  .new-item{
  }
  .new-item>a>img{
    border-radius: 5px;
  }
  .c-head{
  	text-indent: 5px;
  	font-weight: 400;
  	padding: 3px 0px;
  }
</style>