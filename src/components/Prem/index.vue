<template>
	<div>
		<div :style='note' class="title">
			<div class="content">
				<div class='prem'>{{ branch | branch}}开门红个险期交</div>
				<div class="changeImg">
					<ul ref='ul'>
						<li><img :src="imgArr[0]" alt=""></li>
						<li class="white" :style='douhao'></li>
						<li><img :src="imgArr[1]" alt=""></li>
						<li><img :src="imgArr[2]" alt=""></li>
						<li><img :src="imgArr[3]" alt=""></li>
						<li class="white" :style='douhao'></li>
						<li><img :src="imgArr[4]" alt=""></li>
						<li><img :src="imgArr[5]" alt=""></li>
						<li><img :src="imgArr[6]" alt=""></li>
						<li class="white" :style='douhao'></li>
						<li><img :src="imgArr[7]" alt=""></li>
						<li><img :src="imgArr[8]" alt=""></li>
						<li><img :src="imgArr[9]" alt=""></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="chart boxborder">
			<div class="danwei">单位：万元</div>
			<chart :options="polar" v-show='$store.state.branch == 610000'></chart>
			<textpage :data='textdata' v-show='$store.state.branch != 610000'></textpage>
		</div>
		<canvas ref='canvas' v-show='false'></canvas>
	</div>
</template>

<script>
	import Sort from '@/util/sort.js';
	import textpage from './text'
	import Branch from '@/assets/data/branch.json';
	import number0 from '@/assets/img/number0.png';
	import number1 from '@/assets/img/number1.png';
	import number2 from '@/assets/img/number2.png';
	import number3 from '@/assets/img/number3.png';
	import number4 from '@/assets/img/number4.png';
	import number5 from '@/assets/img/number5.png';
	import number6 from '@/assets/img/number6.png';
	import number7 from '@/assets/img/number7.png';
	import number8 from '@/assets/img/number8.png';
	import number9 from '@/assets/img/number9.png';
	export default {
		components: {
			textpage
		},
		data() {
			return {
				note: {
					backgroundImage: "url(" + require("@/assets/img/title.png") + ")",
					backgroundRepeat: "no-repeat",
					width: '100%'
				},
				douhao: {
					backgroundImage: "url(" + require("@/assets/img/douhao.png") + ")",
				},
				polar: {},
				gradient: null,
				gradient1: null,
				imgArr: [number0, number0, number0, number0, number0, number0, number0, number0, number0, number0],
				temp: [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9],
				textdata: [],
				branch:'610000'
			}
		},
		watch: {
			'$props.data' (newData, oldData) {
				this.branch = newData.branch;
				this.textdata = newData.subsidiary;
				var titleNum = this.resetNumber(newData.premPPeriod);
				for (var i = 0; i < titleNum.length; i++) {
					this.changeImg(i, titleNum[i]);
				}
				if (this.$store.state.branch != 610000) {
					this.textdata = newData.subsidiary;
				} else {
					var subsidiary = newData.subsidiary;
					var arrdata = subsidiary.sort(Sort('premPPeriod'));
					var xData = [];
					var seriesData = [];
					for (var i = 0; i < arrdata.length; i++) {
						if (Branch[arrdata[i].branch]) {
							xData.push(Branch[arrdata[i].branch]);
							seriesData.push(Math.round(arrdata[i].premPPeriod / 10000));
						}
					}
					this.polar = {
						grid: {
							left: '1%',
							right: '2%',
							bottom: '5%',
							top: '7%',
							containLabel: true,
						},
						xAxis: {
							position: 'bottom',
							data: xData,
							axisLabel: {
								textStyle: {
									color: '#43BDEB',
									fontSize: 18,

								},
								interval: 0,
							},
							axisTick: {
								show: false
							},
							axisLine: {
								// show: false
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
							nameGap: 15,
							show: true,
							splitLine: {
								show: false,
								lineStyle: {
									color: '#241669', //21005B
									width: 2,
								}
							},
							splitNumber: 3,
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								textStyle: {
									fontSize: 14,
									color: '#43BDEB'
								}
							}
						},
						dataZoom: [{
							type: 'inside'
						}],
						series: [{ // For shadow
								type: 'bar',
								itemStyle: {
									normal: {
										color: 'rgba(0,0,0,0.05)'
									}
								},
								barGap: '-100%',
								barCategoryGap: '40%',
								data: [],
								animation: false,
								label: {
									normal: {
										show: false,
									}
								},
							},
							{
								type: 'bar',
								barWidth: '40%',
								itemStyle: {
									normal: {
										color: this.gradient
									},
									emphasis: {
										color: this.gradient1
									}
								},
								label: {
									normal: {
										show: true,
										formatter: function(param) {
											var i = param.dataIndex;
											var num = seriesData[i];
											num = Math.round(num)
											return num
										},
										position: 'top',
										color: '#43BDEB',
										fontSize: 18

									}
								},
								data: seriesData
							}
						]
					};
				}
			}

		},
		props: ['data'],
		created() {

		},
		mounted() {
			this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 750);
			this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 750);
			this.gradient.addColorStop(0, '#00e4ef')
			this.gradient1.addColorStop(0, '#0479c3')
			this.gradient.addColorStop(0.76, '#0479c3');
			this.gradient1.addColorStop(0.24, '#0479c3');
			this.gradient.addColorStop(1, '#0479c3');
			this.gradient1.addColorStop(1, '#00e4ef');
		},
		methods: {
			resetNumber(number) {
				var num = Math.round(number);
				num = num + '';
				if (num.length < 10) {
					var lesslength = 10 - num.length;
					var zero = '';
					for (var i = 0; i < lesslength; i++) {
						zero += '0'
					}
					num = zero + num;
				}
				return num
			},
			changeImg(index, newNumber) {
				var ul = this.$refs.ul;
				var imgList = ul.querySelectorAll('li img');
				var nowNumber = imgList[index].src.split('.')[0].split('number')[1];
				var timer = window.setInterval(() => {
					if (nowNumber < newNumber) {
						nowNumber++;
					}
					if (nowNumber > newNumber) {
						nowNumber--;
					}
					imgList[index].src = this.temp[nowNumber];
					if (nowNumber == newNumber) {
						window.clearInterval(timer)
					}
				}, 100)
			}
		}

	}

</script>

<style scoped>
	.content {
		height: 230px;
		padding: 10px;
		background-position: center top;
	}
	
	.title {
		height: 496px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.content {
		margin: 0 auto;
		width: 720px;
	}
	
	.prem {
		padding-left: 263px;
		margin-top: 16px;
		overflow: hidden;
		color: rgb(247, 229, 191);
		font: bold 48px 微软雅黑;
		font-size: 37px;
	}
	
	.changeImg {
		text-align: center;
		margin-top: 40px;
	}
	
	.changeImg ul {
		overflow: hidden;
		margin: 0 auto;
		display: inline-block
	}
	
	.changeImg li {
		width: 58px;
		height: 96px;
		background-color: #0D0F17;
		float: left;
		margin-right: 5px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.changeImg li:nth-last-child(1) {
		margin-right: 0
	}
	
	.changeImg li.white {
		width: 12px;
		height: 22px;
		font-size: 60px;
		font-weight: bold;
		font-family: 黑体;
		margin-top: 74px;
		background-color: transparent
	}
	
	.chart {
		width: 100%;
		margin-top: 220px;
		height: 496px;
		position: relative;
	}
	
	.chart .danwei {
		position: absolute;
		top: 8px;
		right: 8px;
		color: #E7A94B;
		font-size: 22px;
		font-weight: 900;
		z-index: 25;
	}
	
	.echarts {
		height: 490px;
		width: 814px;
	}

</style>
