<template>
	<chart :options="polar"></chart>
</template>


<script>
	import Sort from '@/util/sort.js';
	import Branch from '@/assets/data/branch.json';
	export default {
		data() {
			return {
				polar: {}
			}
		},
		props:['data'],
		watch: {
			'$props.data' (newData, oldData) {
				var arrdata = JSON.parse(JSON.stringify(newData));
				arrdata = arrdata.sort(Sort('premPPeriod'))
				var data1 = [];
				var data2 = [];
				var data3 = [];
				var xdata = [];
				for (var i = 0; i < arrdata.length; i++) {
					if(Branch[arrdata[i].branch]){
						data1[i] = arrdata[i].premPPeriod3;
						data2[i] = arrdata[i].premPPeriod5To9;
						data3[i] = arrdata[i].premPPeriod10GE;
						xdata[i] = Branch[arrdata[i].branch];
					}
				} 
				data1 = data1.reverse();
				data2 = data2.reverse();
    			data3 = data3.reverse();
				xdata = xdata.reverse();
				
				this.polar = {
					grid: {
						left: '0%',
						right: '15%',
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
	.echarts {
		height: 438px;
		width: 240px;
	}


</style>
