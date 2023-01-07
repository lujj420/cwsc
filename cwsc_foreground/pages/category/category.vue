<template>
	<view>
		<uni-nav-bar fixed leftIcon="home" :statusBar="true" title="分类" @clickLeft="leftClicked"></uni-nav-bar>
		
		
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
