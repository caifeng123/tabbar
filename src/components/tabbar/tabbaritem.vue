<template>
	<div class="tabbar-item" @click="itemclick">
		<div v-if="!isactive">
			<slot name="item-img"></slot>
		</div>
		<div v-else>
			<slot name="item-img-red"></slot>
		</div>
		<div :class="{active:isactive}">
			<slot name="item-name"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			path:String
		},
		computed:{
			isactive(){
				return this.$route.path.indexOf(this.path) !== -1
			}
		},
		methods:{
			itemclick(){
				if(!this.isactive)
					this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tabbar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		vertical-align: middle;
	}

	.tabbar-item img {
		width: 24px;
		height: 24px;
	}

	.active {
		color: red;
	}
</style>
