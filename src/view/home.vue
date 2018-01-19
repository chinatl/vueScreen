<template>
  <div id="app" :style='note'>
  	<div class="top-area">
		<div class="daily">
			<daily :data='dailyData'></daily>
		</div>
		<div class="insurance">
			
		</div>
		<div class="Socer">
			<socer :data='socerData'></socer>
		</div>
  	</div>
  	<div class='bottom-area'>
		<div class="platform">
			<platform :data='platformData'></platform>
		</div>
		<div class="news">
			<news :data='newsData'></news>
		</div>
		<div class="ranking">
			<ranking :data='rankingData'></ranking>
		</div>
  	</div>
  </div>
</template>

<script>
	import Daily from '@/components/Daily'; /*当日录单*/
	import Insurance from '@/components/Insurance';
	import Socer from '@/components/Socer'; /*排行榜*/
	import Platform from '@/components/Platform'; /*保费平台*/
	import News from '@/components/News'; /*录单快报*/
	import Ranking from '@/components/Ranking'; /*险种排名*/

	import SockJs from '@/assets/js/sock'
	import {
		Stomp
	} from '@/assets/js/stomp.min.js'
	export default {
		components: {
			Daily,
			Insurance,
			Socer,
			News,
			Platform,
			Ranking
		},
		name: 'home',
		data() {
			return {
				note: {
					backgroundImage: "url(" + require("@/assets/img/bgc.jpg") + ")",
					backgroundRepeat: "no-repeat"
				},
				socerData:[],
				dailyData:null,
				platformData:[],
				rankingData:[],
				newsData:[]
			}
		},
		created() {
			this.$sock.connect({}, frame => {
				this.$sock.subscribe('/topic/prem-' + 'input' + '-today-' + '610000', data => {
//					console.log(data)
				})
				this.$sock.subscribe(`/topic/top-sales-hugecontract-input-610000`, data => {
					this.socerData = JSON.parse(data.body);/*右上当日录单top10的数据*/
				})
				this.$sock.subscribe('/topic/prem-'+'input'+'-curve-day-'+610000, data=> {
					this.platformData = JSON.parse(data.body);/*左下保费平台的数据*/
				});
				this.$sock.subscribe('/topic/top-pol-'+610000, data=> {
					this.rankingData = JSON.parse(data.body);/*右下险种排名的数据*/
				});
				this.$sock.subscribe(`/topic/prem-express`, data=> {
					console.log(data.body)
					this.newsData = JSON.parse(data.body);/*中下录单快报的数据*/
				});
			})
		},
		mounted() {
			
		}
	}

</script>

<style>
	#app {
		padding: 27px;
		padding-bottom: 0;
	}
	
	.top-area {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.top-area .daily,
	.bottom-area .platform {
		width: 480px;
	}
	
	.top-area .insurance,
	.bottom-area .news {
		width: 840px;
	}
	
	.top-area .Socer,
	.bottom-area .ranking {
		width: 480px;
	}
	
	.top-area .daily,
	.top-area .insurance,
	.top-area .Socer {
		height: 720px;
		float: left;
	}
	/*three modules of this page*/
	
	.bottom-area {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	
	.bottom-area .platform,
	.bottom-area .news,
	.bottom-area .ranking {
		height: 305px;
		float: left;
	}
	/*three modules of this page*/

</style>
