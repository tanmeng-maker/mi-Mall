<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt />
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">一人之下</a>
            <span>|</span>
            <a href="javascript:;">武当王也</a>
            <span>|</span>
            <a href="javascript:;">不摇碧莲张楚岚</a>
            <span>|</span>
            <a href="javascript:;">跟对大姐大，吃喝都不怕</a>
        </div>
        <div class="copyright">
            Copyright ©2019
            <span class="domain">mi.futurefe.com</span>
            All Rights Reserved.
        </div>
    </div>
</template>

<script>
export default {
    name: "nav-footer",
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.footer {
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        a {
            color: #999999;
            display: inline-block;
        }
        span {
            margin: 0 10px;
        }
    }
    .copyright {
        margin-top: 13px;
        .domain {
            color: #ff6600;
        }
    }
}
</style>
