<template>
  <div id="app" :style='note'>
  	<div class="top-area">
		<div class="daily">
			<daily></daily>
		</div>
		<div class="insurance">
			
		</div>
		<div class="Socer">
			<socer></socer>
		</div>
  	</div>
  	<div class='bottom-area'>
		<div class="platform">
			<platform></platform>
		</div>
		<div class="news">
			<news></news>
		</div>
		<div class="ranking">
			<ranking></ranking>
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
				}
			}
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
