<template>
<div>
	<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">个人资料</h1>
	</header>
	<div class="mui-content" id="personal">
		<div class="mui-card" style="margin-bottom: 35px;">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="">
						头像
						<img id="face-avatar" src="http://127.0.0.1:3000/face/11.png">
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						昵称
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						uid
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						性别
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						生日
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						个性签名
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>	
</template>
<script>
</script>
<style>
#personal .mui-table-view-cell{
		height: 60px;
		line-height: 60px;
		font-size: 20px;
		padding: 0 15px;
	}
#personal .mui-table-view-cell>a:not(.mui-btn){
		margin: 0
	}
#personal #face-avatar{
		float: right;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		margin-top: 5px;
	}
</style>