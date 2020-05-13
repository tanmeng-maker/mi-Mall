<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/index"></a>
            </div>
            <div class="title">
                <h2>
                    {{title}}
                    <slot name="tip"></slot>
                </h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "order-header",
    props: {
        title: String
    },
    computed: {
        ...mapState(["username"])
    }
};
</script>
<style lang="scss" scoped>
.order-header {
    padding: 23px 0;
    border-bottom: 2px solid $colorA;
    .container {
        .header-logo {
            float: left;
        }
        .title,
        .username {
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .title {
            float: left;
            margin-left: 54px;
            h2 {
                font-size: 28px;
                color: $colorB;
                font-weight: normal;
                span {
                    font-size: 14px;
                    margin-left: 17px;
                    color: #999999;
                }
            }
        }
        .username {
            float: right;
            font-size: 16px;
            a {
                color: $colorC;
            }
        }
    }
}
</style>
