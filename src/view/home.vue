<template>
  <div id="app">
	<Daily></Daily>
  </div>
</template>

<script>
	import Daily from '@/components/Daily';
	import Insurance from '@/components/Insurance';
	import Main from '@/components/Main';
	import News from '@/components/News';
	import Platform from '@/components/Platform';
	import Ranking from '@/components/Ranking';
	export default {
		components: {
			Daily,
			Insurance,
			Main,
			News,
			Platform,
			Ranking
		},
		name: 'home'
	}

</script>

<style>
	#app {
		background: url('/static/img/bgc.jpg') no-repeat;
	}

</style>
