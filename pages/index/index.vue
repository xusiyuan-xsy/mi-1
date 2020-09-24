<template>
	<view class="container">
		<view class="top">
			<view class="logo">
				<image src="../../static/images/logo.png"></image>
			</view>
			<view class="inp">
				<input type="text" value="" />
			</view>
		</view>
		<view class="topmenu">
			<view>
				<text v-for="item in topdata" >
					{{item.name}}
				</text>
			</view>
			<view class="">
				1
			</view>
		</view>
	</view>
</template>
<script>
	import {getTopMenuData} from "../../api/indexapi.js"
	export default {
		data() {
			return {
				topdata:'',
			}
		},
		methods: {
			async getTopMenu(){
				var {data} = await getTopMenuData();
				console.log(data.tabs);
				this.topdata = data.tabs;
			}
		},
		created(){
			this.getTopMenu()
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.top{
			position: sticky;
			top: 0px;
			display: flex;
			background-color: #ccc;
			height: 80rpx;
			.logo{
				width: 60rpx;
				height: 60rpx;
				padding: 10rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.inp{
				margin: 10rpx;
				background-color: #fff;
				flex: 1;
				input{
					width: 100%;					
				}
			}
		}
	}
</style>
