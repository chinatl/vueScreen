<template>
	<div class="tabletoday">
		<ul>
			<li v-for='v in txt' v-show='v.premPPeriod !== 0'>
				<span>{{v.branch | branch}}</span>
				<span>{{v.premPPeriod | toFixedOne}}</span>
			</li>
		</ul>
	</div>
</template>


<script>
	import Sort from '@/util/sort.js';
	export default {
		data() {
			return {
				txt: []
			}
		},
		props: ['data'],
		watch: {
			'$props.data' (newData, oldData) {
				var arrdata = JSON.parse(JSON.stringify(newData));
				this.txt = arrdata.sort(Sort('premPPeriod'))
			}
		}

	}

</script>

<style scoped>
	.tabletoday {
		color: rgb(67, 189, 235);
		padding-top: 15px;
	}
	
	.tabletoday ul {
		width: 100%;
	}
	
	.tabletoday ul li {
		width: 50%;
		float: left;
	}
	
	.tabletoday ul li span {
		color: rgb(67, 189, 235);
		font-size: 20px;
	}
	
	.tabletoday ul li span:nth-of-type(1) {
		margin-right: 20px;
		width: 120px;
		text-align: right;
		display: inline-block
	}
	
	.tabletoday ul li {
		margin-top: 4px;
		white-space: nowrap
	}
	
	.tabletoday ul li:nth-of-type(even) {
		padding-left: 15px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

</style>
