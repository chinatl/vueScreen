<template>
  <div id="app" :style='note'>
  	<div class="top-area">
		<div class="daily">
			<daily :data='dailyData'></daily>
		</div>
		<div class="insurance">
			<prem :data='premData'></prem>
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
			<Insurance :data='rankingData'></Insurance>
		</div>
  	</div>
  </div>
</template>

<script>
	import Daily from '@/components/Daily'; /*当日录单*/
	import Prem from '@/components/Prem'; /*middle modules*/
	import Platform from '@/components/Platform'; /*保费平台*/
	import News from '@/components/News'; /*录单快报*/
	import Socer from '@/components/Socer'; /*排行榜*/
	import Insurance from '@/components/Insurance';/*险种排名*/
	export default {
		components: {
			Daily,
			Insurance,
			Socer,
			News,
			Platform,
			Prem
		},
		name: 'home',
		data() {
			return {
				note: {
					backgroundImage: "url(" + require("@/assets/img/bgc.jpg") + ")",
					backgroundRepeat: "no-repeat"
				},
				socerData:[],
				platformData:[],
				rankingData:[],
				newsData:[],
				premData:{},
				dailyData:{}
			}
		},
		created() {
			this.$sock.connect({}, frame => {
				this.$sock.subscribe(`/topic/prem-input-today-${this.$store.state.branch}`, data => {
					if(JSON.parse(data.body) + '' === 'null'){
						return 
					}
					this.dailyData = JSON.parse(data.body);/*上左当日录单的数据*/
				})
				this.$sock.subscribe(`/topic/prem-input-total-${this.$store.state.branch}`, data=> {
					if(JSON.parse(data.body) + '' === 'null'){
						return 
					}
					this.premData = JSON.parse(data.body);//上中数据
				})
				this.$sock.subscribe(`/topic/top-sales-hugecontract-input-${this.$store.state.branch}`, data => {
					if(JSON.parse(data.body) + '' === 'null'){
						return 
					}
					this.socerData = JSON.parse(data.body);/*上右当日录单top10的数据*/
				})
				this.$sock.subscribe(`/topic/prem-input-curve-day-${this.$store.state.branch}`, data=> {
					if(JSON.parse(data.body) + '' === 'null'){
						return 
					}
					this.platformData = JSON.parse(data.body);/*下左保费平台的数据*/
				});
				this.$sock.subscribe(`/topic/top-pol-${this.$store.state.branch}`, data=> {
					if(JSON.parse(data.body) + '' === 'null'){
						return 
					}
					this.rankingData = JSON.parse(data.body);/*下右险种排名的数据*/
				});
				this.$sock.subscribe(`/topic/prem-express`, data=> {
					if(JSON.parse(data.body) + '' === 'null'){
						return 
					}
					this.newsData = JSON.parse(data.body);/*下中录单快报的数据*/
				});
//				this.$sock.subscribe(`/topic/in-force-prem-target`,data=>{
//					var datalist = JSON.parse(data.body);
//				})
			})
			this.$sock.onclose = function() {
				if (window.confirm('服务器断开连接，请重新连接')) {
					location.reload();
				}
			};
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
		width: 820px;
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
