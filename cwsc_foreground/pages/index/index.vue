<template>
	<view >
		<uni-nav-bar  fixed height="120rpx" backgroundColor="#f9c723" title="果壳猫粮"></uni-nav-bar>
		
	</view>
	
		<image class="top" src="../../static/index/index_top.png" mode=""></image>
	
	<view class="">
		
	</view>
	
</template>

<script>
	import {axiosGet} from '../../common/js/http.js'
	export default {
		data() {
			return {
				products:[]
			}
		},
		created(){
			this.getProducts()
		},
		methods: {
			async getProducts(){
				let result = await axiosGet("/api/products")
				
				if(+result.code === 200){
					this.products = result.data
				}
			}
		}
	}
</script>

<style>
	template{
		padding: 0rpx;
		margin: 0rpx;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	.top{
		width: 100%;
		height: 360rpx;
		
	}
</style>
