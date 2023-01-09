<template>
	<uni-nav-bar fixed height="60rpx" leftIcon="back" :statusBar="true" title="搜索页" @clickLeft="leftClicked">
	</uni-nav-bar>
	<view>
		<!-- 搜索框 -->
		<uni-search-bar :radius="50" bgColor="#ffffff" @confirm="search" @custom="custom" @input="input" focus="true"
			cancelText="搜索" clearButton="none" cancelButton="always">
			<template v-slot:searchIcon>
			</template>
		</uni-search-bar>
		<!-- 历史记录 -->
		<view class="search-item">
			<view class="lishi">历史搜索</view>
			<view class="tu">
				<image src="../../static/search/search_s.png" style="width: 20px; height: 21px;" mode=""></image>
			</view>
		</view>
		<!-- 商品热搜榜 -->
		<view class="resou">
			<view>
				<image src="/static/search/huo.png" style="width: 15px; height: 14px;" mode=""></image>
			</view>
			<view class="resou_title">
				商品热搜榜
			</view>
		</view>
		<!-- 商品排行榜 -->
		<view class="paihang" >
			{{products}}
		</view>
	</view>
</template>

<script>
	import {
		axiosGet
	} from '../../common/js/http.js'
	export default {
		data() {
			return {
				products:[];
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
					// db.products.find({keyword:"猫粮"})
					this.getImagesByCatrgoryId(0);
				}
			},
			async getImagesByCatrgoryId(id){
				
			}
		}
	}
</script>

<style scoped>
	.search-item {
		background-color: #fff;
		height: 100px;
		width: 100%;
		padding-top: 13px;
		border-radius: 5px 5px 0 0;
		display: flex;
	}

	.lishi {
		color: #8a8a8a;
		width: 100%;
		padding: 10px;
		font-weight: 400;
		justify-content: space-between;
	}

	.tu {
		padding: 10px;
	}

	.resou {
		padding: 10px;
		padding-top: 15px;
		padding-bottom: 18px;
		display: flex;
		height: 13px;

	}

	.resou_title {
		color: #fc5c4a;
		font-weight: bold;
		font-size: 13px;

	}

	.paihang {
		height: 146px;
		width: 390px;
		margin: auto;
		-webkit-box-shadow: 0 0 10px #fcf0f3;
		box-shadow: 0 0 10px #ddd4d5;
		border-radius: 10px;
	}
</style>
