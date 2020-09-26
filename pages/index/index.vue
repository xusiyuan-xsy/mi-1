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
			<scroll-view class="wz" scroll-x="true" style="padding-right: 50rpx;" v-if="!show">
				<text v-for="(item,index) in topdata" 
				:key="index" 
				:class="index == topmenuselect?'select wzbox':'wzbox'"
				 @click="select(index)">
					{{item.name}}
				</text>
			</scroll-view>
			<view class="jt" @click="display">
				<view class="xz">
					<image class="down1" src="../../static/images/down.png" :class="show==true?'xz180':'z180'" style="width: 30rpx;height: 30rpx;"></image>
				</view>
			</view>
			<view :class="show==true?'expansion hs':'expansion'">
				<view class="alltelep">
					全部
				</view>
				<view class="nr">
					<view class="nrbox" v-for="(item,index) in topdata" :key="index" @click="select(index)">
						<view :class="index == topmenuselect?'nrselect nrys':'nrys' " @click="display">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 轮播图 -->
		<scroll-view :class="show?'lbt zhangw':'lbt'" >
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
				<view class="shohuan">
					<image :src="multiCellData[1].img_url" :style="{height: multiCellData[1].h+'rpx'}"></image>
				</view>
				<view class="dianshi">
					<image :src="multiCellData[2].img_url" :style="{height: multiCellData[2].h+'rpx'}"></image>
				</view>
			</view>
		</view>

		<!-- 小米手机到米家家电 -->
		<view class="moban" v-for="(items,index1) in moban" :key="index1">
			<view class="mobantu" v-for="(imgitem,index) in items[0].body.items" :key="imgindex">
				<image :src="imgitem.img_url" :style="{width: '100%', height: items[0].body.items[0].h +'rpx'}"></image>
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
								<text class="xj">￥{{item.product_price}}起 </text>
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

		<!-- 小米智能 -->
		<view class="zn" v-for="(items,index1) in zn" :key="index1">
			<view class="mobantu" v-for="(imgitem,index) in items[0].body.items" :key="imgindex">
				<image :src="imgitem.img_url" :style="{width: '100%', height: items[0].body.items[0].h +'rpx'}"></image>
			</view>
			<view class="zj">
				<view class="zyxj" v-for="(item,index) in items[1].body.items" :key="index" v-if="(index%2==0)" :style="{order:index} ">
					<view class="z" style="height: 374rpx">
						<image :src="item.img_url" mode=""></image>
					</view>
					<view class="r">
						<view class="p">
							<view class="jj">
								{{item.product_name}}
							</view>

							<view class="xx">
								{{item.product_brief}}
							</view>

							<view class="jg">
								<text class="xj">￥{{item.product_price}} </text>
								<text class="ls" v-if="!(item.product_price == item.product_org_price)">￥{{item.product_org_price}}</text>
							</view>
						</view>


					</view>
				</view>
				<view class="zyxj" v-for="(item,index) in items[1].body.items" :key="index" v-if="!(index%2==0)" :style="{order:index} ">
					<view class="r">
						<view class="p">
							<view class="jj">
								{{item.product_name}}
							</view>

							<view class="xx">
								{{item.product_brief}}
							</view>

							<view class="jg">
								<text class="xj">￥{{item.product_price}} </text>
								<text class="ls" v-if="!(item.product_price == item.product_org_price)">￥{{item.product_org_price}}</text>
							</view>
						</view>

					</view>
					<view class="z" style="height: 374rpx">
						<image :src="item.img_url" mode=""></image>
					</view>
				</view>
			</view>

			<view class="gengduo">
				{{items[2].body.items[0].action_title}}
			</view>
		</view>

		<!-- 了解小米 -->
		<view class="ljxm">
			<uni-grid :column="2" :showBorder='false'>
				<uni-grid-item v-for="(item,index) in ljxm[0].body.items" :key="index" :style="{height: item.h + 'rpx','margin-bottom':'10rpx'}">
					<view class="img" :class="(index%2==0)?'m':''">
						<image :src="item.img_url" style="width: 100%;"></image>
					</view>

				</uni-grid-item>
			</uni-grid>

			<view class="xm" v-for="(imgitem,index) in ljxm[1].body.items" :key="imgindex">
				<image :src="imgitem.img_url" :style="{width: '100%', height: imgitem.h +'rpx'}"></image>
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
				topdata: '',
				topmenuselect: 0,
				lbtdata: [],
				gogei: [],
				multiCellData: [],
				moban: [],
				zn: [],
				ljxm: [],
				show: false,
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
				this.moban = data.moban;
				this.zn = data.zn;
				this.ljxm = data.ljxm;


			},
			display() {
				// this.$refs.popup.open();
				this.show = !this.show
			},
			select(index) {
				this.topmenuselect = index;
			}
		},
		created() {
			this.getTopMenu()
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		background-color: #F5F5F5;

		.top {
			position: sticky;
			top: 0px;
			display: flex;
			background-color: #f2f2f2;
			height: 80rpx;
			z-index: 100;
			align-items: center;

			.logo {
				width: 60rpx;
				height: 55rpx;
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
			padding-top: 10rpx;
			background-color: #f2f2f2;
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
				.wzbox:last-child{
					margin-right: 70rpx;
				}
			}
			.zbm{
				margin-right: 30rpx;
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
				background-color: #f2f2f2;
				position: absolute;
				top: 0;
				right: 0;
				z-index: 100;

				.xz {
					.xz180 {
						transition: all 1s;
						transform: rotate(180deg);
					}

					.z180 {
						transition: all 1s;
						transform: rotate(0deg);
					}
				}
			}

				
			
			.expansion {
				position: absolute;
				background-color: #f2f2f2;
				height: 0px;
				overflow: hidden;
				.alltelep {
					margin: 20rpx 20rpx;
				}

				.nr {
					display: flex;
					flex-wrap: wrap;

					.nrbox {
						margin: 0rpx 0 25rpx 20rpx;
						font-size: 28rpx;

						.nrys {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 152rpx;
							height: 52rpx;
							border: 2rpx solid #ccc;
							border-radius: 6rpx;
						}

						.nrselect {
							background-color: #fde0d5;
							border-color: #ff6700;
							color: #ff6700;
						}
					}

				}
			}

			.hs{
				transition: all 0.5s;
				height: 250rpx;
			}
		}

		.lbt {
			width: 100%;
			background-color: #ccc;
		}
		.zhangw{
			margin-top: 48rpx;
		}

		.multi_cell {
			display: flex;
			margin: 10rpx 0rpx;

			.one {
				flex: 1;
				margin-right: 10rpx;
			}

			.two {
				flex: 1;
				display: flex;
				flex-wrap: wrap;

				.shohuan {
					width: 100%;
					margin-bottom: 2rpx;
				}

				.dianshi {
					width: 100%;
				}
			}

			image {
				width: 100%;
			}
		}

		.moban {
			background-color: #fff;

			.mobantu {
				margin-top: 10rpx;
			}

			.mobanbox {
				background-color: #FFF;
				margin: 0 4rpx;

				.mobanimg {
					height: 270rpx;
				}

				.msbox {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 20rpx;

				}

			}


		}

		.zn {
			.zj {
				display: flex;
				flex-direction: column;

				.zyxj {
					display: flex;

					.z {
						flex: 1;
					}

					.r {
						background-color: #fff;
						flex: 1;

						.p {
							padding: 60rpx;

							.jg {
								padding-top: 20rpx;
							}
						}
					}

					image {
						width: 100%;
						height: 100%;
					}
				}

			}
		}

		.jj {
			font-size: 28rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
		}

		.xx {
			margin-top: 4rpx;
			font-size: 22rpx;
			color: rgba(0, 0, 0, .56);
		}

		.jg {
			margin-bottom: 20rpx;

			.xj {
				font-size: 28rpx;
				color: #EA625B;
				margin-right: 10rpx;
			}

			.ls {
				font-size: 22rpx;
				color: #757575;
				text-decoration: line-through;
			}
		}

		.gengduo {
			border-top: 1px solid #ccc;
			display: flex;
			justify-content: center;
			color: rgba(0, 0, 0, .6);
			padding: 36rpx;
		}

		.ljxm {
			.m {
				margin-right: 10rpx;
			}

			.xm {
				margin-bottom: 10rpx;
			}
		}
	}
</style>
