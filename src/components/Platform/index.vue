<template>
	<div>
		<div class='boxtitle wanyuan'>
			<p class="boxtitle_cn" id='todayprem'>保费平台</p>
			<p class="boxtitle_en" id='todayprem_en'>Premium Platform</p>
		</div>
		<div class="content boxborder">
			<my-chart :data='$props.data'></my-chart>
		</div>
	</div>
</template>

<script>
	import myChart from './chart'
	export default {
		components: {
			myChart
		},
		props:['data'],
		data() {
			console.log(this.$props.data)
			return {

			}
		},
		created() {

		}
	}
</script>

<style scoped>
	.content {
		height: 230px;
		padding: 0px;
		padding-bottom: 0;
	}
</style>
