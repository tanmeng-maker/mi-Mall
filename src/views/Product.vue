<template>
    <div class="product">
        <product-param :title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg">
                <h2>{{product.name}}</h2>
                <h3>{{product.subtitle}}</h3>
                <p>
                    <a href id>全球首款双频 GP</a>
                    <span>|</span>
                    <a href id>骁龙845</a>
                    <span>|</span>
                    <a href id>AI 变焦双摄</a>
                    <span>|</span>
                    <a href id>红外人脸识别</a>
                </p>
                <div class="price">
                    <span>￥</span>
                    <span>{{product.price}}</span>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <img src="/imgs/product/gallery-2.png" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/product/gallery-3.png" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/product/gallery-4.png" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/product/gallery-5.jpg" alt />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/imgs/product/gallery-6.jpg" alt />
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>
                    60帧超慢动作摄影
                    <br />慢慢回味每一瞬间的精彩
                </h2>
                <p>
                    后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
                    <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
                </p>
                <div class="video-bg" @click="showSlide=true"></div>
                <div class="video-box">
                    <!-- 遮罩层 -->
                    <div class="overlay" v-if="showSlide"></div>
                    <div class="video" :class="{'slide':showSlide}">
                        <span class="icon-close" @click="showSlide=false"></span>
                        <!-- autoplay是自动播放，但由于兼容性问题可能只设置它会无效 -->
                        <!-- 所以加上一个muted属性，静音播放，就会解决 -->
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ProductParam from "../components/ProductParam";
export default {
    name: "Product",
    data() {
        return {
            product: {}, //商品信息
            swiperOption: {
                autoplay: true,
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            },
            showSlide: false
        };
    },
    created() {
        this.getProductInfo();
    },
    methods: {
        getProductInfo() {
            let id = this.$route.params.id;
            // console.log(this.$route);
            this.$axios.get(`/products/${id}`).then(res => {
                this.product = res;
            });
        },
        buy() {
            let id = this.$route.params.id;
            this.$router.push(`/detail/${id}`);
        }
    },
    components: {
        ProductParam,
        Swiper,
        SwiperSlide
    }
};
</script>
<style lang="scss" scoped>
.product {
    .content {
        .item-bg {
            background: url("/imgs/product/product-bg-1.png") no-repeat center;
            height: 718px;
            text-align: center;
            h2 {
                padding-top: 55px;
                font-size: 80px;
            }
            h3 {
                font-size: 24px;
                letter-spacing: 10px;
                font-weight: normal;
            }
            p {
                margin-top: 20px;
                font-size: 16px;
                a {
                    color: $colorB;
                }
                span {
                    margin: 0 17px;
                }
            }
            .price {
                height: 30px;
                line-height: 30px;
                margin-top: 40px;
                span {
                    font-size: 38px;
                    &:first-child {
                        font-size: 30px;
                    }
                }
            }
        }
        .item-bg-2 {
            background: url(/imgs/product/product-bg-2.png) no-repeat center;
            height: 480px;
            background-size: 1226px 397px;
        }
        .item-bg-3 {
            background: url(/imgs/product/product-bg-3.png) no-repeat center;
            height: 638px;
            background-size: cover;
        }
        .item-swiper {
            margin: 36px auto 52px;
            .desc {
                font-size: 18px;
                color: #333333;
                text-align: center;
            }
            img {
                width: 100%;
            }
        }
        .item-video {
            height: 1044px;
            background-color: #070708;
            margin-bottom: 76px;
            color: #ffffff;
            text-align: center;
            h2 {
                font-size: 60px;
                padding-top: 82px;
                margin-bottom: 47px;
            }
            p {
                font-size: 24px;
                margin-bottom: 58px;
            }
            .video-bg {
                background: url("/imgs/product/gallery-1.png") no-repeat center;
                background-size: cover;
                width: 1226px;
                height: 540px;
                margin: 0 auto 120px;
                cursor: pointer;
            }
            .video-box {
                .overlay {
                    @include position(fixed);
                    background-color: $colorB;
                    opacity: 0.4;
                    z-index: 10;
                }
                .video {
                    position: fixed;
                    // 默认设置为-50%，slide会变为50%
                    top: -50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                    width: 1000px;
                    height: 536px;
                    // 默认设置，为了slide过度
                    opacity: 0;
                    transition: all 0.6s;
                    video {
                        width: 100%;
                        height: 100%;
                        // 取消video自带的阴影
                        object-fit: cover;
                        // 也是video内置的样式
                        outline: none;
                    }
                    .icon-close {
                        @include bgImg(20px, 20px, "/imgs/icon-close.png");
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        cursor: pointer;
                        z-index: 11;
                    }
                    // 过度效果
                    &.slide {
                        top: 50%;
                        opacity: 1;
                    }
                }
            }
        }
    }
    .btn {
        margin-left: 10px;
    }
}
</style>
