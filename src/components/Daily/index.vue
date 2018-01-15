<template>
	<div>
		<div class='boxtitle wanyuan'>
			<p class="boxtitle_cn" id='todayprem'>当日录单</p>
			<p class="boxtitle_en" id='todayprem_en'>Daily Inputting Premium</p>
		</div>
		<div class="content boxborder">
			<div class="title">个险期交</div>
			<div class="title_item">
				<h3>0</h3>
				<ul class="items">
					<li>
						<p class="block"><b class="three"></b>3年期</p>
						<p>0</p>
					</li>
					<li>
						<p class="block"><b class="five"></b>5-9年期</p>
						<p>0</p>
					</li>
					<li>
						<p class="block"><b class="ten"></b>10年期及以上</p>
						<p>0</p>
					</li>
				</ul>
				<div class="charts">
					<my-chart></my-chart>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myChart from './charts'
	export default {
		components:{myChart},
		data() {
			return {

			}
		},
		created() {

		}
	}

</script>

<style scoped>
	.content {
		height: 640px;
		width: 470px;
		background-color: #ccc
	}
	
	.title_item>ul>li>p.block b {
		width: 19px;
		height: 19px;
		display: inline-block;
		vertical-align: baseline;
		margin-right: 4px;
	}
	
	.items {
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
		height: 60px;
	}
	
	.items li {
		float: left;
	}
	
	.three {
		background-color: #0379C3;
	}
	
	.five {
		background-color: #41B5E5
	}
	
	.ten {
		background-color: #00E3EF;
	}
</style>
