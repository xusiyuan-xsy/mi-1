<template>
	<view class="container">
		<!-- 头部搜索框 -->
		<view class="top">
			<view class="logo">
				<image src="../../static/images/logo.png"></image>
			</view>
			<view class="inp">
				<input type="text" value="" />
			</view>
		</view>
		
		<!-- 头部菜单 -->
		<view class="topmenu">
			<scroll-view class="wz" scroll-x="true" style="padding-right: 50rpx;">
				<text v-for="(item,index) in topdata" :key="index" :class="index == topmenuselect?'select wzbox':'<wzbox></wzbox>'" >
					{{item.name}}
				</text>
			</scroll-view>
			<view class=" jt">
				<view class="xz">
					>
				</view>
			</view>
		</view>

		<!-- 轮播图 -->
		<scroll-view class="lbt">
			<swiper indicator-dots="true" indicator-active-color="#fff" autoplay="true">
				<swiper-item v-for="item in lbtdata" :style="{height:item.h +'rpx'}">
					<image :src="item.img_url" style="width: 100%;height: 100%;"></image>
				</swiper-item>
			</swiper>
		</scroll-view>

		<!-- 九宫格 -->
		<uni-grid :column="5" :showBorder="false">
			<uni-grid-item v-for="(item,index) in gogei" :key="index">
				<image :src="item.img_url" style="width: 100%;height: 100%;"></image>
			</uni-grid-item>
		</uni-grid>
		
		<!-- 三张图片 -->
		<view class="multi_cell">
			<view class="one">
				<image :src="multiCellData[0].img_url" :style="{height: multiCellData[0].h+'rpx'}"></image>
			</view>
			<view class="two">
				<view class="shohuan" >
					<image :src="multiCellData[1].img_url" :style="{height: multiCellData[1].h+'rpx'}"></image>
				</view>
				<view class="dianshi">
					<image :src="multiCellData[2].img_url" :style="{height: multiCellData[2].h+'rpx'}"></image>
				</view>
			</view>
		</view>
		
		<!-- 手机品牌上面的图片 -->
		<view class="xiaomi10">
			<image :src="xiaomi.img_url" :style="{width: '100%',height: xiaomi.h+'rpx'}"></image>
		</view>
		
		<!-- 小米手机和小米电视 -->
		<view class="moban" v-for="(items,index1) in moban" :key="index1">
			<view class="mobantu">
				<image :src="items[0].body.items[0].img_url" :style="{width: '100%', height: items[0].body.items[0].h +'rpx'}" ></image>
			</view>
			
			<uni-grid :column="2" :showBorder='false'>
				<uni-grid-item v-for="(item,index) in items[1].body.items" :key="index" style="height: 500rpx;margin-top:4rpx ;">
					<view class="mobanbox">
						<view class="mobanimg">
							<image :src="item.img_url" style="width: 100%;height:100%"></image>
						</view>
						<view class="msbox">
							<view class="jj">
								{{item.product_name}}
							</view>
							<view class="xx">
								{{item.product_brief}}
							</view>
							<view class="jg">
								<text class="xj">￥{{item.product_price}}起  </text>
								<text class="ls" v-if="!(item.product_price == item.product_org_price)">￥{{item.product_org_price}}</text>
							</view>
							<button size="mini" type="warn">立即购买</button>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<view class="gengduo">
				{{items[2].body.items[0].action_title}}
			</view>
		</view>
	
	</view>
</template>
<script>
	import {
		getTopMenuData
	} from "../../api/indexapi.js"
	
	export default {
		data() {
			return {
				topdata: 'syml124',
				topmenuselect: 0,
				lbtdata: [],
				gogei: [],
				multiCellData:[],
				xiaomi:"",
				moban:[],
			}
		},
		methods: {
			async getTopMenu() {
				var {
					tabs,
					data
				} = await getTopMenuData();
				var temp = [];
				temp = data.sections[1].body.items;
				data.sections[2].body.items.map((v) => {
					temp.push(v);
				})
				
				this.topdata = tabs;
				this.lbtdata = data.sections[0].body.items;
				this.gogei = temp;
				this.multiCellData = data.sections[4].body.items;
				this.xiaomi = data.sections[6].body.items[0]
				this.moban = data.moban;
				
			}
		},
		created() {
			this.getTopMenu()
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		.top {
			position: sticky;
			top: 0px;
			display: flex;
			background-color: #ccc;
			height: 80rpx;
			z-index: 100;
			.logo {
				width: 60rpx;
				height: 60rpx;
				padding: 10rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.inp {
				margin: 10rpx;
				background-color: #fff;
				flex: 1;

				input {
					width: 100%;
				}
			}
		}

		.topmenu {
			position: relative;
			padding-top: 10rpx;
			background-color: #ccc;
			font-size: 30rpx;
			color: #333;
			z-index: 100;
			position: sticky;
			top: 80rpx;
			.wz {
				white-space: nowrap; // 滚动必须加的属性

				.wzbox {
					margin: 0rpx 26rpx;
					padding-bottom: 4rpx;
				}
			}

			.select {
				display: inline-block;
				color: #FF6B00;
				border-bottom: 4rpx solid #ff6b00;
			}

			.jt {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 56rpx;
				height: 56rpx;
				background-color: #ccc;
				position: absolute;
				top: 0;
				right: 0;
			}
		}

		.lbt {
			width: 100%;
			background-color: #ccc;
		}
		
		.multi_cell{
			display: flex;
			margin:10rpx 0rpx ;
			.one{
				flex: 1;
				margin-right: 10rpx;
			}
			
			.two{
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				.shohuan{
					width: 100%;
					margin-bottom: 2rpx;
				}
				.dianshi{
					width: 100%;
				}
			}
			image{
				width: 100%;
			}
		}
		
		.moban{
			background-color: #fff;
			.mobantu{
				margin-top: 10rpx;
			}
			.mobanbox{
				background-color: #FFF;
				margin: 0 4rpx;
				.mobanimg {
					height: 270rpx;
				}
				.msbox{
					display: flex;
					flex-direction:column;
					align-items: center;
					padding: 20rpx;
					.jj{
						font-size: 28rpx;
					}
					.xx{
						margin-top:4rpx ;
						font-size: 22rpx;
						color: rgba(0,0,0,.54);
					}
					.jg{
						margin-bottom:20rpx ;
						.xj{
							font-size: 28rpx;
							color: #EA625B;
							margin-right: 10rpx;
						}
						.ls{
							font-size: 22rpx;
							color: #757575;
							text-decoration:line-through;
						}
					}
				}
				
				
			}
			
			.gengduo{
				border-top: 1px solid #ccc;
				display: flex;
				justify-content: center;
				color: #ccc;
				padding: 36rpx;
			}
		}
		
	}
</style>
