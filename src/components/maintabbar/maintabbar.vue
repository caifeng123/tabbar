<template>
	<tabbar>
		<tabbaritem path="/me">
			<img slot="item-img" src="../../assets/imgs/tabbaritem/me.svg" alt="">
			<img slot="item-img-red" src="../../assets/imgs/tabbaritem/me-red.svg" alt="">
			<div slot="item-name">首页</div>
		</tabbaritem>
		<tabbaritem path="/category">
			<img slot="item-img" src="../../assets/imgs/tabbaritem/category.svg" alt="">
			<img slot="item-img-red" src="../../assets/imgs/tabbaritem/category-red.svg" alt="">
			<div slot="item-name">首页</div>
		</tabbaritem>
		<tabbaritem path="/home">
			<img slot="item-img" src="../../assets/imgs/tabbaritem/home.svg" alt="">
			<img slot="item-img-red" src="../../assets/imgs/tabbaritem/home-red.svg" alt="">
			<div slot="item-name">首页</div>
		</tabbaritem>
	</tabbar>
</template>

<script>
	import tabbar from './tabbar.vue'
	import tabbaritem from './tabbaritem.vue'
	export default {
		components: {
			tabbar: tabbar,
			tabbaritem: tabbaritem
		}
	}
</script>

<style>
</style>
