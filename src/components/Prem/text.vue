<template>
	<div id="shownum">
		<ul>
			<li v-for='v in txt' v-show='v.premPPeriod !== 0'>
				<span>{{v.branch | branch}}</span>
				<span>{{v.premPPeriod | delfour}}</span>
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
	#shownum {
	color:rgb(67,189,235)
}
#shownum  {
	width: 100%;
	padding:40px
}
#shownum  li {
	width: 33%;
	float: left;
}
#shownum  li span {
	color:rgb(67,189,235);
	font-size: 20px;
}
#shownum  li span:nth-of-type(1){
	margin-right: 20px;
	width: 120px;
	text-align: right;
	display: inline-block
}
#shownum  li {
	margin-top: 15px;
	white-space: nowrap
}

</style>
