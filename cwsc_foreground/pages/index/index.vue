<template>
	<view>
		<uni-nav-bar fixed height="120rpx" backgroundColor="#f9c723" title="果壳猫粮"></uni-nav-bar>
		<image class="top" src="../../static/index/index_top.png" mode=""></image>
<!-- 		<navigator url="/pages/search/search">搜索</navigator> -->
		
		
		
		
	</view>
	<view>
		<uni-search-bar  radius="20" class="ss"  placeholder="搜索" bgColor="white" @confirm="search"  readonly="" @clickLeft="Clicked"/>		
	<!-- 	<a href=""><button type="text"  class="ss">搜索</button></a> -->
	</view>
		
	
	<view class="dh1">
			<a href=""><button >粮</button></a>
			<a href=""><button >砂</button></a>
			<a href=""><button >食</button></a>
			<a href=""><button >玩</button></a>
			<a href=""><button >厕</button></a>
	</view>
	<view class="dh2">
		<a href=""><button class="dh2_button1">猫主食</button></a>
		<a href=""><button class="dh2_button2">猫罐头</button></a>
		<a href=""><button class="dh2_button3">猫零食</button></a>
		<image  src="../../static/index/index_dh2.png" alt="" style="height: 100%; width: 100%; opacity:1;"></image>
	</view>
	<view class="dh3">
		<a href=""><button class="dh3_button1">狗主食</button></a>
		<a href=""><button class="dh3_button2">犬罐头</button></a>
		<a href=""><button class="dh3_button3">犬零食</button></a>
		<image  src="../../static/index/index_dh3.png" alt="" style="height: 100%; width: 100%;"></image>
	</view>
	<view class="">
		<image src="../../static/index/index_middle.png" mode="" class="middle"></image>
		<image src="../../static/index/index_pp.png" mode="" class="pp"></image>
	</view>
	<view class="">
		
	</view>
	<view class="">
		<image src="../../static/index/index_under.png" mode="" class="under"></image>
	</view>
</template>

<script>
	import {
		axiosGet
	} from '../../common/js/http.js'
	export default {
		data() {
			return {
				products: []
			}
		},
		created() {
			this.getProducts()
		},
		methods: {
			async getProducts() {
				let result = await axiosGet("/api/products")
				if (+result.code === 200) {
					this.products = result.data
				}
			}
		}
	}
	
	
	// export default {
	// 	data() {
	// 		return {
				
	// 		}
	// 	},
	// 	methods: {
	// 		leftClicked(){
	
	// 		uni.switchTab({
	// 			url:"/pages//search/search"
	// 		})
	// 	},
		
	// 	}
	
			
	// }
</script>

<style>
	view{
		padding: 0rpx;
		margin: 0rpx;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	.top{
		width: 100%;
		height: 300rpx;
		padding: 0rpx;
		margin: 0rpx;
		
	}
	.ss{
		/* height: 40rpx;
		width: 80%;
		font-size: 20rpx;
		
		text-align: left;
		border: 1px solid gray;
		line-height: 40rpx; */
		border-radius: 20rpx;
	
	}
	.dh1{
		margin-top: 10rpx;
		background:url(../../static/index/index_dh1.png) no-repeat center;
		background-size:100% 100%;
		height: 150rpx;
		width: 100%;
		border: 0px solid gray;
	}
	.dh1 button{
		opacity:0;
		width: 15%;
		height: 90rpx;
		float: left;
		margin-top: 10rpx;
		margin-left: 30rpx;
		
	}
	.dh2{
		height: 300rpx;
		width: 100%;
		/* background:url(../../static/index/index_dh2.png) no-repeat center;
		background-size:100% 100%; */
		border: 0px solid gray;
		position: relative;
		
		
	}
	.dh2_button1{
		position: absolute;
		border: 1px solid gray;
		width: 28%;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 20rpx;
		opacity:0;
	}
	.dh2_button2{
		position: absolute;
		border: 1px solid gray;
		width: 28%;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 270rpx;
		opacity:0;
	}
	.dh2_button3{
		position: absolute;
		border: 1px solid gray;
		width: 28%;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 520rpx;
		opacity:0;
	}
	
	
	
	.dh3{
		height: 300rpx;
		width: 100%;
		position: relative;
		border: 0px solid gray;
		
	}
	.dh3_button1{
		position: absolute;
		border: 1px solid gray;
		width: 28%;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 20rpx;
		opacity:0;
	}
	.dh3_button2{
		position: absolute;
		border: 1px solid gray;
		width: 28%;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 270rpx;
		opacity:0;
	}
	.dh3_button3{
		position: absolute;
		border: 1px solid gray;
		width: 28%;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 520rpx;
		opacity:0;
	}
	
	.middle{
		height: 300rpx;
		width: 100%;
		border: 0px solid gray;
	}
	.pp{
		height: 340rpx;
		width: 100%;
		border: 0px solid gray;
	}
	
	
	
	
	
	
	
	.under{
		width: 100%;
		height: 1500rpx;
	}
</style>
