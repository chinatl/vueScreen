<template>
	<div>
		<div class='boxtitle righttitle'>
			<p class="boxtitle_cn" id='todayprem'>险种排名</p>
			<p class="boxtitle_en" id='todayprem_en'>Insurance Ranking List</p>
		</div>
		<div class='content boxborder'>
			<ul>
				<li class="insurance" v-for='(v,index) in $props.data'>
					<p class="insurance_title"><span>{{v.polName}}</span><span>{{v.prem | round}}</span></p>
					<p class="zhuzi" :style="{width: (v.proportion< 0.05 ? 0.05 : v.proportion )*434  +'px'}"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: ['data'],
		created() {
		},
		mounted() {
		},
		methods: {

		}

	}

</script>

<style scoped>
	.content {
		height: 230px;
		padding: 10px
	}
	
	.insurance {
		margin-top: 8px;
		padding: 0 10px;
	}
	
	.insurance .insurance_title {
		font-size: 20px;
		color: #43bdeb;
		display: flex;
		justify-content: space-between;
	}
	
	.insurance .zhuzi {
		background-color: #43bdeb;
		height: 6px;
		overflow: hidden;
		width: 100%;
	}

</style>
