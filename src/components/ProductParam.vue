<template>
    <div class="param-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                <a href="javascript:;">{{title}}</a>
                <span>|</span>
                <a href="javascript:;">小米8</a>
                <span>|</span>
                <a href="javascript:;">小米8 SE</a>
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a>
                <span>|</span>
                <a href="javascript:;">参数</a>
                <span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductParam",
    props: {
        title: String
    },
    data() {
        return {
            isFixed: false
        };
    },
    mounted() {
        // 监听滚动，但是关闭页面的时候要移除 第三个参数默认是true，true 捕捉  false 冒泡
        window.addEventListener("scroll", this.initHeight);
    },
    methods: {
        initHeight() {
            // 获取滚动偏移量的方法要考虑浏览器兼容
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    },
    destroyed() {
        // 第三个参数默认是true，true 捕捉  false 冒泡，这里通过冒泡的方式去移除
        window.removeEventListener("scroll", this.initHeight, false);
    }
};
</script>
<style lang='scss' scoped>
.param-bar {
    height: 69px;
    line-height: 69px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    z-index: 10;
    // 设置下面两个元素可以直接设置吸顶效果
    // position: sticky;
    // top: 0;
    // 第二种设置吸顶效果
    &.is_fixed {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .container {
        @include flex();
        .pro-title {
            height: 69px;
            a {
                font-size: 12px;
                color: $colorC;
                &:first-child {
                    font-size: 18px;
                    color: $colorB;
                }
            }
            span {
                margin: 0 8px;
                height: 3px;
            }
        }
        .pro-param {
            height: 69px;
            a {
                font-size: 14px;
                color: $colorC;
            }
            span {
                margin: 0 8px;
                height: 3px;
            }
        }
    }
}
</style>