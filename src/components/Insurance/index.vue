<template>
	<div>
		<div class='boxtitle righttitle' id="checkList">
			<p class="boxtitle_cn">排行榜</p>
			<p class="boxtitle_en">Ranking List</p>
		</div>
		<div class='content boxborder'>
			<ul>
				<li class="insurance">
					<p class="insurance_title"><span>国寿盛世御享</span><span>53871万</span></p>
					<p class="zhuzi" style="width:332.28000000000003px"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ['data'],
		created() {
			console.log(this.$props.data)
		},
		mounted() {
			console.log(this.$props.data)
		},
		methods: {

		}

	}

</script>

<style scoped>
	.content {
		height: 640px;
		padding: 24px
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

</style>
