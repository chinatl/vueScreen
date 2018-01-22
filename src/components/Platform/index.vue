<template>
	<div>
		<div class='boxtitle wanyuan'>
			<p class="boxtitle_cn" id='todayprem'>保费平台</p>
			<p class="boxtitle_en" id='todayprem_en'>Premium Platform</p>
		</div>
		<div class="content boxborder">
<!--			<my-chart :data='$props.data'></my-chart>-->
			<chart :options="polar"></chart>
		</div>
		<canvas ref='canvas' v-show='false'></canvas>
	</div>
</template>

<script>
	import charts from 'vue-echarts'
	export default {
		props: ['data'],
		data() {
			return {
				chartData: [],
				polar: {},
				gradient: null
			}
		},
		watch: {
			'$props.data' (newData, oldData) {
				var newArr = newData;
				let xarr = [];
				let dataArr = []
				for (var i = newArr.length-1; i >=0; i--) {
					xarr.push(newArr[i].date.slice(4));
					dataArr.push(newArr[i].prem);
				}
				this.polar = {
					grid: {
						left: '5%',
						right: '5%',
						bottom: '5%',
						top: "20%",
						containLabel: true
					},
					xAxis: {
						data: xarr,
						axisLabel: {
							textStyle: {
								color: '#43BDEB',
								fontSize: 14,
							},
							interval: 0
						},
						axisTick: {
							show: false
						},
						axisLine: {},
					},
					yAxis: {
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(67,90,106,.4)', //21005B
								width: 1,
							}
						},
						splitNumber: 3,
						axisLine: {
							show: false
						},
						axisTick: {},
						axisLabel: {
							textStyle: {
								color: '#43BDEB',
								fontSize: 18
							}
						}
					},
					dataZoom: [{
						type: 'inside'
					}],
					series: [{
						type: 'line',
						symbolSize: 16,
						backgroundColor: "#00e4ef",
						symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
						itemStyle: {
							normal: {
								color: '#00e4ef',
								borderColor: '#202b33',
								borderWidth: 5,
							},
						},
						markPoint: {
							//						data: [{
							//								type: 'max',
							//								name: '最大值'
							//							},
							//							{
							//								type: 'min',
							//								name: '最小值'
							//							}
							//						],
							label: {
								normal: {
									fontSize: 18
								}
							},
							itemStyle: {
								normal: {
									color: '#0479c3',
								}
							}
						},
						areaStyle: {
							normal: {
								color: this.gradient
							}
						},
						data: dataArr,
						label: {
							normal: {
								show: true,
								borderRadius: 20,
								backgroundColor: '#0479c3',
								color: '#fff',
								fontSize: 18,
								padding: [5, 5, 5, 5],
								formatter: function(param) {
									return param.data[3]
								},
								position: 'top'
							}
						}
					}]
				}
			}
		},
		created() {

		},
		mounted() {
			this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 200);
			this.gradient.addColorStop(0, 'rgba(0,228,239,.8)')
			this.gradient.addColorStop(1, 'rgba(4,97,195,.5)');
		}
	}

</script>

<style scoped>
	.content {
		height: 230px;
		padding: 0px;
		padding-bottom: 0;
	}
	
	.echarts {
		height: 230px;
		width: 474px;
	}

</style>
