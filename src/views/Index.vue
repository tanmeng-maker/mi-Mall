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
                                    <li
                                        v-for="(sub, i) in item"
                                        :key="i"
                                        @click="$router.push('/product/' + sub.id)"
                                    >
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
                        <a :href="'/product/' + item.id">
                            <img :src="item.img" />
                        </a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a
                    href="'/product/'+item.id"
                    target="_blank"
                    v-for="(item, index) in adsList"
                    :key="index"
                >
                    <img v-lazy="item.img" />
                </a>
            </div>
            <div class="banner">
                <a href="/product/30" target="_blank">
                    <img v-lazy="'/imgs/banner-1.png'" />
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <span class="title">手机</span>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/product/3" target="_blank">
                            <img v-lazy="'/imgs/mix-alpha.jpg'" />
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list-item" v-for="(item, index) in phoneList" :key="index">
                            <span class="pro-tag" :class="{ 'new-pro': index % 2 == 0 }">新品</span>
                            <div class="item-img">
                                <img v-lazy="item.mainImage" />
                            </div>
                            <div class="item-info">
                                <span class="item-name">{{ item.name }}</span>
                                <p class="item-subtitle">{{ item.subtitle }}</p>
                                <div class="item-price" @click="addCart(item)">
                                    <p>{{ item.price }}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal
            title="提示"
            confirmText="查看购物车"
            btnType="1"
            modalType="middle"
            :showModal="showModal"
            @submit="goToCart"
            @cancel="showModal = false"
        >
            <template v-slot:body>
                <p>商品添加成功!</p>
            </template>
        </modal>
    </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "Index",
    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                effect: "cube",
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            slideList: [
                {
                    id: "42",
                    img: "/imgs/slider/slide-1.jpg"
                },
                {
                    id: "45",
                    img: "/imgs/slider/slide-2.jpg"
                },
                {
                    id: "46",
                    img: "/imgs/slider/slide-3.jpg"
                },
                {
                    id: "",
                    img: "/imgs/slider/slide-4.jpg"
                },
                {
                    id: "",
                    img: "/imgs/slider/slide-5.jpg"
                }
            ],
            menuList: [
                [
                    {
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9"
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版"
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro"
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区"
                    }
                ],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            adsList: [
                {
                    id: 33,
                    img: "/imgs/ads/ads-1.png"
                },
                {
                    id: 33,
                    img: "/imgs/ads/ads-2.jpg"
                },
                {
                    id: 33,
                    img: "/imgs/ads/ads-3.png"
                },
                {
                    id: 33,
                    img: "/imgs/ads/ads-4.jpg"
                }
            ],
            phoneList: [],
            showModal: false
        };
    },
    created() {
        this.getData();
        if (this.$cookie.get("userId")) {
            this.getCartCount();
        }
    },
    methods: {
        getData() {
            this.$axios
                .get("/products", {
                    params: {
                        categoryId: 100012,
                        pageSize: 14
                    }
                })
                .then(res => {
                    // console.log(res);
                    res.list = res.list.slice(6, 14);
                    this.phoneList = res.list;
                });
        },
        getCartCount() {
            this.$axios.get("/carts/products/sum").then(res => {
                this.$store.dispatch("saveCartCount", res);
                sessionStorage.setItem("cartCount", res);
            });
        },
        addCart(item) {
            if (this.$cookie.get("userId")) {
                this.$axios
                    .post("/carts", {
                        productId: item.id,
                        selected: true
                    })
                    .then(res => {
                        this.showModal = true;
                        this.$store.dispatch(
                            "saveCartCount",
                            res.cartTotalQuantity
                        );
                    })
                    .catch(err => {
                        this.showModal = true;
                    });
            } else {
                this.$router.push("/login");
            }
        },
        goToCart() {
            this.$router.push("/cart");
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar,
        Modal
    }
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
                                content: "";
                                @include bgImg(
                                    10px,
                                    15px,
                                    "/imgs/icon-arrow.png"
                                );
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
        .ads-box {
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a {
                width: calc((100% - 42px) / 4);
                height: 167px;
            }
        }
        .banner {
            margin-bottom: 50px;
        }
    }
    .product-box {
        background-color: $colorJ;
        padding: 30px 0 50px;
        .container {
            .title {
                display: block;
                font-size: 22px;
                color: $colorB;
                margin-bottom: 20px;
            }
            .wrapper {
                display: flex;
                .banner-left {
                    margin-right: 16px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box {
                    width: 986px;
                    height: 619px;
                    display: flex;
                    flex-wrap: wrap; //空间不足时自动换行
                    justify-content: space-between;
                    align-content: space-between; //多行时，设置行与行之间的间隙排列
                    .list-item {
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        .pro-tag {
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size: 14px;
                            line-height: 24px;
                            color: $colorG;
                            &.new-pro {
                                background-color: #7ecf68;
                            }
                            &.kill-pro {
                                background-color: #e82626;
                            }
                        }
                        .item-img {
                            img {
                                width: 100%;
                                height: 195px;
                            }
                        }
                        .item-info {
                            .item-name {
                                font-size: 14px;
                                color: $colorB;
                                font-weight: bold;
                            }
                            .item-subtitle {
                                margin-top: 6px;
                                font-size: 12px;
                                color: $colorD;
                                font-weight: bold;
                            }
                            .item-price {
                                margin-top: 11px;
                                height: 22px;
                                p {
                                    font-size: 14px;
                                    color: $colorA;
                                    font-weight: bold;
                                    line-height: 22px;
                                    cursor: pointer;
                                    &::after {
                                        @include bgImg(
                                            22px,
                                            22px,
                                            "/imgs/icon-cart-hover.png"
                                        );
                                        content: " ";
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
