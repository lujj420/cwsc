<template>
	<view>
		<uni-nav-bar fixed height="120rpx" backgroundColor="#f9c723" title="果壳猫粮"></uni-nav-bar>
		首页

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
</script>

<style>

</style>
