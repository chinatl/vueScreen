<template>
	<div>
		<div class='boxtitle wanyuan'>
			<p class="boxtitle_cn" id='todayprem'>当日录单</p>
			<p class="boxtitle_en" id='todayprem_en'>Daily Inputting Premium</p>
		</div>
		<div class="content boxborder">
			<div class="title">个险期交</div>
			<div class="title_item">
				<h3 class='count'><countTo :startVal='startVal' :endVal='endVal' :duration='3000' :decimals='2'></countTo></h3>
				<ul class="items">
					<li>
						<p class="block"><b class="three"></b>3年期</p>
						<p>{{$props.data.premPPeriod3 || 0}}</p>
					</li>
					<li>
						<p class="block"><b class="five"></b>5-9年期</p>
						<p>{{$props.data.premPPeriod5To9 || 0}}</p>
					</li>
					<li>
						<p class="block"><b class="ten"></b>10年期及以上</p>
						<p>{{$props.data.premPPeriod10GE || 0}}</p>
					</li>
				</ul>
				<div class="Echarts">
					<div v-show='$store.state.branch == 610000'>
						<bar-chart :data='bardata'></bar-chart>
					</div>
					<div class="map" v-show='$store.state.branch == 610000'>
						<map-chart :data='mapdata'></map-chart>
					</div>
					<div v-show='$store.state.branch != 610000'>
						<textpage :data='textdata'></textpage>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import barChart from './bar'
	import mapChart from './map'
	import textpage from './text'
	import countTo from 'vue-count-to';
	export default {
		components: {
			barChart,
			mapChart,
			countTo,
			textpage
		},
		props: ['data'],
		data() {
			//			console.log(this.$props.data)
			return {
				bardata: [],
				mapdata: [],
				endVal:0,
				startVal:0,
				textdata:[]
			}
		},
		watch: {
			'$props.data' (newData, oldData) {
				this.endVal = newData.premPPeriod;
				if(this.$store.state.branch == 610000){
					this.bardata = newData.subsidiary;
					this.mapdata = newData.subsidiary;
				}else {
					this.textdata = newData.subsidiary;
				}
			}
		},
		created() {
		},
		methods:{
			
		}
	}

</script>

<style scoped>
	.content {
		height: 640px;
		padding: 24px
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
	
	.title {
		color: #fff;
		text-align: left;
		height: 40px;
		overflow: hidden;
		font: normal normal 30px '微软雅黑';
	}
	
	.title_item h3 {
		font-size: 42px;
		font-family: "微软雅黑";
		font-weight: normal;
		color: #FDDA51;
		margin-top: 6px;
	}
	
	.title_item>ul>li>p {
		color: #43BDEB;
		font-size: 19px;
		font-family: "微软雅黑";
		text-align: right;
		margin: 3px 0;
		height: 26px;
	}
	
	.title_item>ul>li>p.block b {
		width: 19px;
		height: 19px;
		display: inline-block;
		vertical-align: baseline;
		margin-right: 4px;
	}
	
	.Echarts {
		display: flex;
		/*		justify-content: center*/
	}
	
	.Echarts div {}
	
	.map {
		position: relative;
		left: -40px
	}
	.count {
		height: 55px;
	}

</style>
