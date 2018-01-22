<template>
	<div class="layout">
		<div class='boxtitle righttitle'>
			<p class="boxtitle_cn"><span  @click='openmask'>排行榜</span></p>
			<p class="boxtitle_en">Ranking List</p>
		</div>
		<div class='content boxborder'>
			<div class="bigtable">当日录单TOP10</div>
			<ul class="animateten">
				<li v-for='(v,index) in this.$props.data'>
					<span :style='color(index)'>{{index + 1}}</span>
					<span>{{v.salesBranchCode | branch}}</span>
					<span>{{v.salesName}}</span>
					<span>{{v.prem | round}}</span>
				</li>
			</ul>
		</div>
		<div class="picker" v-show='$store.state.maskShow'>
			<picker></picker>
		</div>
	</div>
</template>

<script>
	import picker from '../Picker'
	export default {
		components:{picker},
		data() {
			return {
			}
		},
		props:['data'],
		created(){
		},
		mounted(){
		},
		methods: {
			openmask(){
				this.$store.commit('check')
			},
			color(index) {
				if (index < 3) {
					return {
						backgroundImage: "url(" + require("@/assets/img/" + (index + 1) + ".png") + ")",
						color: "#525252"
					}
				} else {
					return
				}
			}
		}

	}

</script>

<style scoped>
	.boxtitle {
		cursor: pointer
	}
	.content {
		height: 640px;
		padding: 24px
	}
	
	.bigtable {
		color: #fff;
		font: normal normal 30px "微软雅黑";
		text-align: right;
		width: 405px;
		margin-bottom: 15px;
	}
	
	.animateten {
		width: 405px;
		margin: 0px auto;
		color: #43BDEB;
		font-size: 22px;
		height: 550px;
	}
	
	.animateten li:nth-of-type(-n+3) {
		padding: 0 0px;
		margin-top: 4px;
		display: flex;
		justify-content: space-around;
		height: 52px;
		line-height: 53px;
		background: linear-gradient(to right, transparent 21%, #112f7c);
	}
	
	.animateten li span:nth-of-type(1) {
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center
	}
	
	.animateten li:nth-of-type(n+4) {
		margin-top: 4px;
		display: flex;
		justify-content: space-around;
		height: 41px;
		line-height: 41px;
		margin-top: 11px;
		background: linear-gradient(to right, transparent 21%, #0b1e4e);
	}
	
	.animateten li span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.animateten li span:nth-of-type(1) {
		width: 32px;
		text-align: center;
		font-weight: bold;
	}
	
	.animateten li span:nth-of-type(2) {
		width: 136px;
		text-align: left;
	}
	
	.animateten li span:nth-of-type(3) {
		width: 70px;
	}
	
	.animateten li span:nth-of-type(4) {
		width: 75px;
		text-align: right
	}
	.layout {
		position: relative

	}
	.picker {
		position: absolute;
		top: 75px;
		right: 0;
	}
</style>
