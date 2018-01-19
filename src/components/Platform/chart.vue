<template>
	<div ref='charts' style="width:100%;height:100%"></div>
</template>


<script>
	export default {
		data() {
			console.log( this.$props.data)
			return {
				chart: null
			}
		},
		props: ['data'],
		created() {},
		mounted() {
			this.chart = this.$echarts.init(this.$refs.charts);
			var arr = this.$props.data;
			let xarr = [];
			let dataArr = []
			for (var i = 0; i < arr.length; i++) {
				xarr.push(arr[i].date.slice(4));
				dataArr.push(arr[i].prem);
			}
			var option = {
				grid: {
					left: '5%',
					right: '5%',
					bottom: '5%',
					top: "15%",
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
							color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(0,228,239,.8)'
							}, {
								offset: 1,
								color: 'rgba(4,97,195,.5)'
							}])
						}
					},
					data: dataArr,
					label: {
						normal: {
							show:true,
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
			};
			this.chart.setOption(option)

		}
	}

</script>

<style>
	.echarts {
		height: 300px;
	}

</style>
