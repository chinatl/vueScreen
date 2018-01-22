<template>
	<chart :options="polar"></chart>
</template>


<script>
	import Sort from '@/util/sort.js';
	import Branch from '@/assets/data/branch.json';
	import SX from '@/assets/data/shaanxi.json';
	import geoCoordMap from '@/assets/data/geoCoordMap.json';
	import echarts from 'vue-echarts'
	export default {
		data() {
			return {
				polar: {}
			}
		},
		props: ['data'],
		watch: {
			'$props.data' (newData, oldData) {
				echarts.registerMap('shaanxi', SX);
				this.polar = {
					grid: {
						left: '2%',
						right: '0%',
						bottom: '0%',
						top: '0%',
						containLabel: true
					},
					visualMap: {
						left: '5%',
						top: '12%',
						show: false,
						//min: 0,
						//max: 30,
						//splitNumber: 5,
						pieces: [{
								min: 0,
								max: 200
							},
							{
								min: 200,
								max: 400
							},
							{
								min: 400,
								max: 600
							},
							{
								min: 600,
								max: 800
							},
							{
								min: 800,
								max: 1000
							},
							{
								min: 1000
							}, // 不指定 max，表示 max 为无限大（Infinity）。
						],
						inRange: {
							color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
						},
						textStyle: {
							color: '#bfbfbf'
						}
					},
					geo: {
						map: 'shaanxi',
						top: '5%',
						bottom: '5%',
						roam: true,
						label: {
							normal: {
								show: false,
								color: '#fff',
								fontSize: 16,
								formatter: function(params) {
									return params.name.slice(0, 2)
								}
							},
							emphasis: {
								textStyle: {
									color: '#fff'
								}
							}
						},
						itemStyle: {
							normal: {
								areaColor: '#323c48',
								borderColor: '#111'
							},
							emphasis: {
								areaColor: '#2a333d'
							}
						}
					},
					series: [{
						slient: false,
						name: 'AQI',
						type: 'heatmap',
						coordinateSystem: 'geo',
						data: this.convertData(newData)
					}]
				}
			}
		},
		created() {},
		methods: {
			convertData(data) {
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].branch];
					if (geoCoord) {
						res.push(geoCoord.concat(data[i].premPPeriod));
					}
				}
				return res;
			}
		}
	}

</script>

<style scoped>
	.echarts {
		height: 438px;
		width: 213px;
	}

</style>
