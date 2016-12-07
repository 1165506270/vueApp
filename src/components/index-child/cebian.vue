<template>
	<aside id="offCanvasSide" class="mui-off-canvas-left mui-transitioning mui-active" style="visibility: visible; z-index: 0;">
		<div id="offCanvasSideScroll" class="mui-scroll-wrapper" data-scroll="1">
			<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
				<div class="face">
					<router-link to="login" v-tap>登录</router-link>
				</div>
				<div class="title" style="margin-bottom: 25px;">侧滑列表示例</div>
				<ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
					<li class="mui-table-view-cell">
						<router-link to="/foo" class="mui-navigate-right" v-tap>
							Item 1
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/bar" class="mui-navigate-right" v-tap>
							Item 1
						</router-link>
					</li>
					<router-link tag="li" to="/foo" class="mui-table-view-cell">
						<a class="mui-navigate-right" v-tap>
							Item 3
						</a>
					</router-link>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							Item 4
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#offCanvasSide">
							Item 5
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							Item 6
						</a>
					</li>
				</ul>
			</div>
			<div class="mui-scrollbar mui-scrollbar-vertical">
				<div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: none; height: 732px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div>
			</div>
		</div>
	</aside>
</template>
<script>
export default {
  data () {
    return {
      left: -30
    }
  }
}
</script>
<style>
  .cebian{
    z-index: 1000;
    background: #fff;
    height: 800px;
    width:200px;
    position: fixed;
    top:0;
    left:0;
  }
  .face{
  	margin: 20px auto 0;
  	width: 60px;
  	height: 60px;
  	border-radius: 30px;
  	line-height: 60px;
  	text-align: center;
  	background: #eee;
  }
</style>