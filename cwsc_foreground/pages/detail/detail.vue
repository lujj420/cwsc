<template>
	<view>
<<<<<<< HEAD
		����
=======
		<uni-nav-bar fixed leftIcon="back" :statusBar="true" title="商品详情" @clickLeft="leftClicked"></uni-nav-bar>
		商品详情
>>>>>>> master
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
