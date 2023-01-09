<template>
	<view>
		<uni-nav-bar fixed leftIcon="home" :statusBar="true" title="购物车" @clickLeft="leftClicked"></uni-nav-bar>
		购物车
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			leftClicked(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		},
		
	}
</script>

<style>

</style>
