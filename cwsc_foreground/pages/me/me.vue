<template>
	<view>
		<view class="head">
			<view class="text1">
				用户中心
			</view>
			<view class="login">
				<view class="photo">
					头像
				</view>
				<view class="id">
					dessert
				</view>
				<view class="address">
				<!-- 	<van-cell title="单元格" icon="location-o" /> -->
				收货地址
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.head{
		width: 100%;
		height: 10em;
		background-color: yellow;
		.text1 {
			text-align: center;
			line-height: 5em;
		}
		.login{
			display: flex;
			justify-content: space-between;
			.address{
				width: 6em;
				height: 1.7em;
				background-color: orange;
				border: 0.1em solid white;
				border-right: 0em;
				border-bottom-left-radius: 1em;
				border-top-left-radius: 1em;
				font-size: 0.7em;
				color: white;
				line-height: 1.7em;
				margin-left: 12rpx;
			}
		}
		
	}
	
</style>
