<template>
	<div id="app">
		<router-view></router-view>
		<maintabbar></maintabbar>
	</div>
</template>

<script>

import maintabbar from './components/tabbar/maintabbar.vue'
	export default {
		name: 'App',
		components: {
			maintabbar: maintabbar
		}
	}
</script>
<style>
	@import url("assets/css/base.css");
</style>
