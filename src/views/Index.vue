<template>
	<div class="index">
		<div class="container">
			<div class="swiper-box">
				<div class="nav-menu">
					<ul class="menu-wrap">
						<li class="menu-item">
							<span>手机 电话卡</span>
							<div class="children">
								<ul v-for="(item, index) in menuList" :key="index">
									<li v-for="(sub, i) in item" :key="i" @click="$router.push('/product/' + sub.id)">
										<img :src="sub ? sub.img : '/imgs/item-box-1.png'" />
										{{ sub ? sub.name : '小米9' }}
									</li>
								</ul>
							</div>
						</li>
						<li class="menu-item">
							<span>电视 盒子</span>
						</li>
						<li class="menu-item">
							<span>笔记本 平板</span>
						</li>
						<li class="menu-item">
							<span>家电 插线板</span>
						</li>
						<li class="menu-item">
							<span>出行 穿戴</span>
						</li>
						<li class="menu-item">
							<span>智能 路由器</span>
						</li>
						<li class="menu-item">
							<span>电源 配件</span>
						</li>
						<li class="menu-item">
							<span>生活 箱包</span>
						</li>
					</ul>
				</div>
				<swiper :options="swiperOption">
					<swiper-slide v-for="(item, index) in slideList" :key="index">
						<a :href="'/product/' + item.id"><img :src="item.img"/></a>
					</swiper-slide>
					<!-- Optional controls -->
					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div>
				</swiper>
			</div>
			<div class="ads-box"></div>
			<div class="banner"></div>
			<div class="product-box"></div>
		</div>
		<service-bar></service-bar>
	</div>
</template>

<script>
import ServiceBar from '../components/ServiceBar';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
	name: 'Index',
	data() {
		return {
			swiperOption: {
				autoplay: true,
				loop: true,
				effect: 'cube',
				cubeEffect: {
					shadowOffset: 100,
					shadowScale: 0.6,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
			slideList: [
				{
					id: '42',
					img: '/imgs/slider/slide-1.jpg',
				},
				{
					id: '45',
					img: '/imgs/slider/slide-2.jpg',
				},
				{
					id: '46',
					img: '/imgs/slider/slide-3.jpg',
				},
				{
					id: '',
					img: '/imgs/slider/slide-4.jpg',
				},
				{
					id: '',
					img: '/imgs/slider/slide-5.jpg',
				},
			],
			menuList: [
				[
					{
						id: 30,
						img: '/imgs/item-box-1.png',
						name: '小米CC9',
					},
					{
						id: 31,
						img: '/imgs/item-box-2.png',
						name: '小米8青春版',
					},
					{
						id: 32,
						img: '/imgs/item-box-3.jpg',
						name: 'Redmi K20 Pro',
					},
					{
						id: 33,
						img: '/imgs/item-box-4.jpg',
						name: '移动4G专区',
					},
				],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
		};
	},
	components: {
		Swiper,
		SwiperSlide,
		ServiceBar,
	},
};
</script>
<style lang="scss" scoped>
.index {
	.container {
		.swiper-box {
			.nav-menu {
				position: absolute;
				width: 264px;
				height: 451px;
				z-index: 9;
				padding: 26px 0;
				background-color: #55585a7a;
				box-sizing: border-box;
				.menu-wrap {
					.menu-item {
						height: 50px;
						line-height: 50px;
						span {
							position: relative;
							font-size: 16px;
							color: $colorG;
							margin-left: 30px;
							display: block;
							&::after {
								position: absolute;
								right: 30px;
								top: 17.5px;
								content: '';
								@include bgImg(10px, 15px, '/imgs/icon-arrow.png');
							}
						}
						&:hover {
							background-color: $colorA;
							.children {
								display: block;
							}
						}
						.children {
							display: none;
							width: 962px;
							height: 451px;
							background-color: $colorG;
							position: absolute; //相对于body元素
							top: 0;
							left: 264px;
							border: 1px solid $colorH;
							ul {
								display: flex;
								justify-content: space-between;
								height: 75px;
								li {
									height: 75px;
									line-height: 75px;
									flex: 1;
									padding-left: 23px;
									font-size: 14px;
									color: $colorB;
									img {
										width: 35px;
										height: 42px;
										vertical-align: middle;
										margin-right: 15px;
									}
									&:hover {
										color: $colorA;
										cursor: pointer;
									}
								}
							}
						}
					}
				}
			}
			.swiper-container {
				height: 451px;
				img {
					width: 100%;
					height: 100%;
				}
				.swiper-button-prev {
					left: 274px;
				}
			}
		}
	}
}
</style>
