<template>
    <router-view/>
</template>

<script>
	import Daily from '@/components/Daily';
	import Insurance from '@/components/Insurance';
	import Main from '@/components/Main';
	import News from '@/components/News';
	import Platform from '@/components/Platform';
	import Ranking from '@/components/Ranking';
	export default {
		components: {Daily,Insurance,Main,News,Platform,Ranking},
		name: 'App'
	}

</script>

<style>

</style>
