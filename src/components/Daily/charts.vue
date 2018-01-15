<template>
	<div ref='charts' style="width:400px;height:400px"></div>
</template>


<script>
	export default {
		data() {
			return {
				chart: null
			}
		},
		created() {
			console.log(this.$refs.charts)
		},
		mounted() {
			this.chart = this.$echarts.init(this.$refs.charts);
			xdata = ''
			this.chart.setOption({
				grid: {
					left: '0%',
					right: '30%',
					bottom: '8%',
					top: '8%',
					containLabel: true
				},
				xAxis: {
					position: 'top',
					axisLabel: {
						textStyle: {
							color: '#43BDEB',
							fontSize: 14,

						}
					},
					splitNumber: 2,
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: '#241669', //21005B
							width: 2,
						}
					},
				},
				yAxis: {
					type: 'category',
					splitLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: '#43BDEB',
							fontSize: 18
						}
					},
					data: xdata
				},
				series: [{
						barWidth: '18px',
						type: 'bar',
						stack: '总量',
						z: 3,
						itemStyle: {
							normal: {
								position: 'right',
								color: '#0479c3',
								barBorderRadius: [0, 0, 0, 0],
							}
						},
						data: data1
					},
					{
						name: '',
						type: 'bar',
						stack: '总量',
						itemStyle: {
							normal: {
								position: 'right',
								color: '#42b6e6',
								barBorderRadius: [0, 0, 0, 0],
							}
						},
						data: data2
					},
					{
						name: '',
						type: 'bar',
						stack: '总量',
						itemStyle: {
							normal: {
								position: 'right',
								color: '#00e4ef',
								barBorderRadius: [0, 0, 0, 0],
							}
						},
						label: {
							normal: {
								show: true,
								formatter: function(param) {
									var i = param.dataIndex;
									var num = Number(data1[i]) + Number(data2[i]) + Number(data3[i]);
									num = num.toFixed(1)
									return num
								},
								position: 'right',
								fontSize: 18,
								marginLeft: 5,
								fontWeight: 'bold'
							}
						},
						data: data3
					}
				]
			})
		}
	}

</script>

<style>
	.echarts {
		height: 300px;
	}

</style>
