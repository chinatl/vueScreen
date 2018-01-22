<template>
	<div>
		<div class='boxtitle righttitle'>
			<p class="boxtitle_cn" id='todayprem' @click='scroll(1)'>录单快报</p>
			<p class="boxtitle_en" id='todayprem_en'>Contract Express</p>
		</div>
		<div class="content boxborder">
			<div class='newsBox'>
				<ul class="news" ref='ul'>
					<li v-for='(v,index) in listData'>热烈祝贺{{v.salesBranchCode | branch}}{{v.salesName}}伙伴开门红录单{{v.prem | number}}元！</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import animate from '@/util/index.js'
	export default {
		data() {
			return {
				listData: [],
				num:0
			}
		},
		props: ['data'],
		created() {},
		watch: {
			'$props.data' (newData, oldData) {
				console.log(JSON.stringify(newData))
				console.log(JSON.stringify(oldData))
				if (this.listData.length === 0) {
					this.listData = this.$props.data;
					this.scroll(5)
				} else {
					var arr = this.removeSame(newData,oldData);
					console.log(arr)
					if(arr.length){
						this.listData.push(...arr)
						this.scroll(arr.length);
					}
				}
			}
		},
		methods: {
			scroll(index) {
				this.num = this.num + index;
				animate(this.$refs.ul, {
					top: -42*this.num
				}, e => {
					
				})
			},
			removeSame(newDate,oldDate) {
				var newArr = [];
				var flag = true;
				for (var i = 0; i < newDate.length; i++) {
					for (var j = 0; j < oldDate.length; j++) {
						if (newDate[i].salesNo === oldDate[j].salesNo && flag) {
							flag = false;
						}
					}
					if (flag) {
						newArr.push(newDate[i])
					}
					flag = true;
				}
				return newArr;
			} //去重
		},
		mounted() {

		}
	}

</script>

<style scoped>
	.content {
		height: 230px;
		padding-left: 20px;
		padding-bottom: 0;
	}
	
	.newsBox {
		height: 220px;
		overflow: hidden;
		position: relative
	}
	
	.news {
		padding-top: 0;
		box-sizing: border-box;
		padding: 0px 0 0 18px;
		font-size: 40px;
		color: #f15246;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.news li {
		font-size: 24px;
		margin-top: 11px;
		font-family: "微软雅黑"
	}

</style>
