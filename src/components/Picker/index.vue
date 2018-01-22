<template>
<div id="selectList">
	<!-- 	<div>
	<h3 class="selectTitle">模式</h3>
	<ul class="selectli" id="module">
	<li name="I">录单</li>
	<li name="R">实收</li>
	</ul>
	</div> -->
	<div>
		<h3 class="selectTitle">机构</h3>
		<ul class="selectli" id="citySelect">
			<li v-for='v in data'
			 :value='v.branch' 
			 :class='{current:v.branch == branch}'
			 @click=changeBranch(v.branch)
			 >{{v.name}}</li>
		</ul>
	</div>
	<p>
		<button @click='submit'>确定</button>
		<button @click='colse'>关闭</button>
	</p>
</div>
</template>
<script>
	export default {
		data() {
			return {
				branch: null,
				data: [{
						branch: 610000,
						name: '陕西'
					},
					{
						branch: 610100,
						name: '西安'
					},
					{
						branch: 610400,
						name: '咸阳'
					},
					{
						branch: 612200,
						name: '商洛'
					},
					{
						branch: 612300,
						name: '榆林'
					},
					{
						branch: 610500,
						name: '渭南'
					},
					{
						branch: 612100,
						name: '安康'
					},
					{
						branch: 610300,
						name: '宝鸡'
					},
					{
						branch: 610600,
						name: '汉中'
					},
					{
						branch: 610700,
						name: '延安'
					},
					{
						branch: 610200,
						name: '铜川'
					},
				]
			}
		},
		created() {
			this.branch = this.$store.state.branch;
		},
		methods: {
			changeBranch(branch) {
				this.branch = branch
			},
			colse() {
				this.$store.commit('close')
			},
			submit() {
				console.log(this.branch)
				var url = window.location.search;
				var pathName = window.location.pathname;
				if (url === '') {
					var str = `?cal_type=I&branch=${this.branch}`;
					window.location.href = pathName + str;
				} else {
					var nextStr = url.slice(1);
					nextStr = this.splitUrl(nextStr)
					nextStr.cal_type = 'I';
					nextStr.branch = this.branch;
					var urlArr = [];
					for (var k in nextStr) {
						urlArr.push(k + '=' + nextStr[k])
					}
					window.location.href = pathName + '?' + urlArr.join('&');
				}
				this.$store.commit('close')
			},
			splitUrl(str) {
				if (!str) {
					return
				}
				var s = str.split('&');
				var obj = {}
				for (var i = 0; i < s.length; i++) {
					obj[s[i].split('=')[0]] = s[i].split('=')[1]
				}
				return obj
			}
		}
	}

</script>
<style scoped>
	#selectList {
		width: 220px;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #fff;
		line-height: 36px;
		padding: 0 10px;
		margin: 0;
		font-size: 28px;
		outline: none;
		padding: 10px 0;
		background-color: #fff;
		border: 1px solid #e6ebf5;
		border-radius: 4px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		z-index: 99;
	}
	
	#selectList .selectli {
		overflow: hidden;
		padding: 5px;
		width: 100%;
		box-sizing: border-box;
	}
	
	#selectList .selectli li {
		color: #5a5e66;
		text-align: right;
		font-size: 21px;
		float: left;
		cursor: pointer;
		text-align: center;
		width: 45%;
		margin: 5px;
	}
	
	#selectList p {
		margin: 0 auto;
		text-align: center;
		padding: 0;
	}
	
	#selectList p button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		border: 1px solid #d8dce5;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: none;
		margin: 0;
		transition: .1s;
		font-weight: 500;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		padding: 12px 20px;
		font-size: 24px;
		border-radius: 4px;
		background-color: #409eff;
		border-color: #409eff;
		color: #fff;
	}
	
	.selectTitle {
		font-weight: bold;
		font-size: 24px;
		text-align: center;
	}
	
	#selectList .selectli li.current {
		background-color: #ECF5FF;
		color: #66B1FF
	}
	
	#selectList .selectli li:hover {
		background-color: #ECF5FF;
		color: #66B1FF
	}

</style>
