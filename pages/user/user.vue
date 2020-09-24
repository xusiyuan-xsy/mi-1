<template>
	<view class="user_content">
		<!-- 登录头像 -->
		<view class="hd">
			<view class="userlogo" style="width: 100vw;">
				<view class="img">
					<image class="imgs" src="/static/user/user.png" mode=""></image>
				</view>
				<view class="name">渣渣壕</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="uni-list">
			<uni-list>
			    <uni-list-item title="我的订单" rightText="全部订单" link to="" @click="onClick($event,1)" ></uni-list-item>
			</uni-list>
		</view>
		<!-- 订单状态 -->
		<view class="orderStatus">
			<view class="li">
				<navigator class="icon" url="">
					<view class="imgs">
						<image class="img" src="../../static/user/Wallet.png" mode=""></image>
					</view>
					<text>待付款</text>
				</navigator>
			</view>
			<view class="li">
				<navigator class="icon" url="">
					<view class="imgs">
						<image class="img" src="../../static/user/express.png" mode=""></image>
					</view>
					<text>待收货</text>
				</navigator>
			</view>
			<view class="li">
				<navigator class="icon" url="">
					<view class="imgs">
						<image class="img" src="../../static/user/repair.png" mode=""></image>
					</view>
					<text>退换修</text>
				</navigator>
			</view>
		</view>
		<!-- list列表 -->
		<view class="list">
			 <uni-list>
			    <uni-list-item title="会员中心" thumb="../../static/user/crown-list.png"
			     thumb-size="lg"></uni-list-item>
				 <uni-list-item title="我的优惠" thumb="../../static/user/Wallet-list.png"
				  thumb-size="lg"></uni-list-item>
			</uni-list>
		</view>
		<view class="list">
			 <uni-list>
			    <uni-list-item title="服务中心" thumb="../../static/user/Love-list.png"
			     thumb-size="lg"></uni-list-item>
				 <uni-list-item title="小米之家" thumb="../../static/user/home-list.png"
				  thumb-size="lg"></uni-list-item>
			</uni-list>
		</view>
		<view class="list">
			 <uni-list>
			    <uni-list-item title="我的F码" thumb="../../static/user/F-list.png"
			     thumb-size="lg"></uni-list-item>
				 <uni-list-item title="礼物码兑换" thumb="../../static/user/gift-list.png"
				  thumb-size="lg"></uni-list-item>
			</uni-list>
		</view>
		<view class="list">
			 <uni-list>
			    <uni-list-item title="设置" thumb="../../static/user/setting-list.png"
			     thumb-size="lg"></uni-list-item>
			</uni-list>
		</view>
	</view>
	
</template>

<script>
	
</script>
	
<style lang="scss" scoped>
	.user_content{
		.hd{
			height: 170rpx;
			background-color:#F37D0F ;
			display: flex;
			align-items: center;
			.userlogo{
				display: flex;
				align-items: center;
				height: 100rpx;
				.img{
					border-radius: 52rpx;
					overflow: hidden;
					background-color: pink;
					margin:0rpx 20rpx 0rpx 40rpx; 
					.imgs{
						width: 100rpx;
						height: 100rpx;
					}
				}
				.name{
					color: #fff;
				}
			}
		}
		.orderStatus{
			margin-top: 10rpx;
			height: 176rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.li{
				.icon{
					width: 68rpx;
					height: 92rpx;
					.imgs{
						margin: 0px 8rpx 14rpx 8rpx;
						.img{
							width: 50rpx;
							height: 50rpx;
						}
					}
					text{
						font-size: 22rpx;
					}
				}
			}
		}
		.list{
			margin-top: 20rpx;
		}
	}
	
	
</style>
