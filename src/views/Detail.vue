<template>
    <div class="detail">
        <product-param :title="product.name"></product-param>
        <div class="container">
            <div class="swiper">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <img src="/imgs/detail/phone-1.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/detail/phone-2.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/detail/phone-3.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/detail/phone-4.jpg" alt />
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="content">
                <h2 class="item-title">{{ product.name }}</h2>
                <p class="item-info">
                    相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
                    <br />外人脸解锁 / AI变焦双摄 / 三星
                    AMOLED 屏
                </p>
                <div class="delivery">小米自营</div>
                <div class="item-price">
                    <span class="price">
                        {{ product.price }}元
                        <del>1999元</del>
                    </span>
                </div>
                <div class="line"></div>
                <div class="item-addr">
                    <div class="user-addr">
                        <i class="icon-loc"></i>
                        <div class="addr">北京 北京市 朝阳区 安定门街道</div>
                        <div class="stock">有现货</div>
                    </div>
                </div>
                <div class="item-version">
                    <h2>选择版本</h2>
                    <div class="phone-version">
                        <div
                            class="phone"
                            :class="{'checked':version==1}"
                            @click="version=1"
                        >6GB+64GB 全网通</div>
                        <div
                            class="phone"
                            :class="{'checked':version==2}"
                            @click="version=2"
                        >4GB+64GB 移动4G</div>
                    </div>
                </div>
                <div class="item-color">
                    <h2>选择颜色</h2>
                    <div class="phone-color checked">
                        <div class="left-color">
                            <a href="javascript:;">
                                <span class="color"></span>
                                深空灰
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item-total">
                    <div class="phone-info">
                        <div
                            class="info-left"
                        >{{ product.name }}{{version==1?' 6GB+64GB 全网通':' 4GB+64GB 移动4G'}} 深灰色</div>
                        <div class="price-right">
                            {{ product.price }}元
                            <del>1999元</del>
                        </div>
                    </div>
                    <div class="phone-total">总计：{{ product.price }}元</div>
                </div>
                <div class="btn-group">
                    <a href="javascript:;" class="btn btn-huge" @click="addCart">加入购物车</a>
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="container">
                <h2>价格说明</h2>
                <div class="desc">
                    <img src="/imgs/detail/item-price.jpeg" alt />
                </div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ProductParam from "../components/ProductParam";
import ServiceBar from "../components/ServiceBar";
export default {
    name: "Detail",
    data() {
        return {
            product: {}, //商品信息
            version: 1, //商品版本切换
            id: this.$route.params.id, //获取商品id
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            }
        };
    },
    created() {
        this.getProductInfo();
    },
    methods: {
        getProductInfo() {
            this.$axios.get(`/products/${this.id}`).then(res => {
                this.product = res;
            });
        },
        addCart() {
            this.$axios
                .post("/carts", {
                    productId: this.id,
                    selected: true
                })
                .then(res => {
                    this.$store.dispatch(
                        "saveCartCount",
                        res.cartTotalQuantity
                    );
                });
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ProductParam,
        ServiceBar
    }
};
</script>

<style lang="scss" scoped>
.detail {
    .container {
        display: flex;
        padding-top: 30px;
        padding-bottom: 50px;
        box-sizing: border-box;
        .swiper {
            width: 560px;
            height: 560px;
            margin-right: 50px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .content {
            width: 584px;
            .item-title {
                font-size: 28px;
                height: 26px;
                line-height: 26px;
                margin-bottom: 16px;
            }
            .item-info {
                font-size: 14px;
                color: $colorD;
            }
            .delivery {
                margin-top: 26px;
                font-size: 16px;
                color: $colorA;
            }
            .item-price {
                font-size: 20px;
                color: $colorA;
                padding: 14px 0 25px;
                height: 19px;
                line-height: 19px;
                .price {
                    display: inline-block;
                    height: 19px;
                    line-height: 19px;
                    del {
                        font-size: 14px;
                        color: $colorD;
                        margin-left: 10px;
                    }
                }
            }
            .line {
                height: 1px;
                background-color: $colorH;
            }
            .item-addr {
                margin: 28px 0 30px;
                height: 108px;
                background-color: #fafafa;
                border: 1px solid $colorH;
                .user-addr {
                    padding: 30px 64px 34px;
                    position: relative;
                    .icon-loc {
                        position: absolute;
                        @include bgImg(20px, 22px, "/imgs/detail/icon-loc.png");
                        top: 27px;
                        left: 34px;
                    }
                    .addr {
                        font-size: 14px;
                        color: $colorC;
                        height: 14px;
                        line-height: 14px;
                    }
                    .stock {
                        font-size: 14px;
                        color: $colorA;
                        margin-top: 15px;
                        height: 14px;
                        line-height: 14px;
                    }
                }
            }
            .item-version,
            .item-color {
                h2 {
                    font-size: 18px;
                    color: $colorB;
                    height: 17px;
                    line-height: 17px;
                    margin-bottom: 20px;
                }
            }
            .item-version {
                .phone-version {
                    display: flex;
                    justify-content: space-between;
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                    text-align: center;
                    margin-bottom: 30px;
                    .phone {
                        border: 1px solid $colorH;
                        color: $colorB;
                        width: 285px;
                        cursor: pointer;
                        &.checked {
                            border: 1px solid $colorA;
                            color: $colorA;
                        }
                    }
                }
            }
            .item-color {
                .phone-color {
                    display: flex;
                    justify-content: space-between;
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                    text-align: center;
                    margin-bottom: 30px;
                    .left-color {
                        border: 1px solid $colorA;
                        width: 285px;
                        a {
                            display: inline-block;
                            color: $colorA;
                            height: 48px;
                            text-align: center;
                            .color {
                                display: inline-block;
                                width: 18px;
                                height: 18px;
                                background-color: #666666;
                                vertical-align: middle;
                                margin: -3px 5px 0 0;
                            }
                        }
                    }
                }
            }
            .item-total {
                box-sizing: border-box;
                height: 108px;
                margin: 50px 0 30px;
                background-color: #fafafa;
                padding: 24px 33px 29px 30px;
                .phone-info {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: $colorB;
                    height: 14px;
                    line-height: 14px;
                    .price-right {
                        del {
                            color: $colorC;
                        }
                    }
                }
                .phone-total {
                    font-size: 24px;
                    color: $colorA;
                    height: 23px;
                    line-height: 23px;
                    margin-top: 18px;
                }
            }
        }
    }
    .price-info {
        background-color: #f3f3f3;
        height: 340px;
        .container {
            flex-direction: column;
            padding: 38px 0 60px;
            h2 {
                font-size: 24px;
                color: $colorB;
            }
            .desc {
                height: 189px;
                margin-top: 30px;
            }
        }
    }
}
</style>
