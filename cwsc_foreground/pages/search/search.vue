<template>
	<view>
		<uni-nav-bar fixed height="60rpx" leftIcon="back" :statusBar="true" title="搜索页" @clickLeft="leftClicked"></uni-nav-bar>
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
		}
	}
</script>

<style>

</style>
