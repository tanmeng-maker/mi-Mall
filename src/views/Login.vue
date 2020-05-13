<template>
    <div class="login">
        <div class="header">
            <div class="container">
                <a href="/index">
                    <img src="/imgs/login-logo.png" />
                </a>
            </div>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <div class="login-title">
                        <span class="checked">账号登录</span>
                        <span class="sep-line">|</span>
                        <span class="QR-code">扫码登录</span>
                    </div>
                    <div class="input-username">
                        <input type="text" placeholder="邮箱/手机账号/小米ID" v-model="username" />
                    </div>
                    <div class="input-password">
                        <input type="password" placeholder="密码" v-model="password" />
                    </div>
                    <div class="button-box">
                        <button class="btn" @click="login">登录</button>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">
                            立即注册
                            <span>|</span>忘记密码？
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="javascript:;">简体</a>
                <span>|</span>
                <a href="javascript:;">繁体</a>
                <span>|</span>
                <a href="javascript:;">English</a>
                <span>|</span>
                <a href="javascript:;">常见问题</a>
                <span>|</span>
                <a href="javascript:;">隐私政策</a>
            </div>
            <p
                class="Copyright"
            >小米公司版权所有-京ICP备10046444 Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            userId: ""
        };
    },
    methods: {
        login() {
            let { username, password } = this;
            this.$axios
                .post("/user/login", {
                    username,
                    password
                })
                .then(res => {
                    // console.log(res);
                    // expires是设置cookie的过期时间
                    this.$cookie.set("userId", res.id, { expires: "1M" });
                    this.$store.dispatch("saveUserName", res.username);
                    this.$router.push("/index");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        register() {
            this.$axios
                .post("/user/login", {
                    username: "admin2",
                    password: "admin2",
                    emaile: "admin@163.com"
                })
                .then(res => {
                    alert("注册成功");
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    .header {
        .container {
            height: 98;
            background-color: $colorG;
            img {
                width: auto;
                height: 100%;
            }
        }
    }
    .wrapper {
        background: url("/imgs/login-bg.jpg") no-repeat center;
        .container {
            height: 576px;
            .login-form {
                box-sizing: border-box;
                position: absolute;
                width: 410px;
                height: 510px;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto 0;
                padding-left: 31px;
                padding-right: 31px;
                background-color: $colorG;
            }
            .login-title {
                font-size: 24px;
                line-height: 23px;
                text-align: center;
                margin: 40px auto 49px;
                .checked {
                    color: $colorA;
                }
                .QR-code {
                    color: $colorC;
                }
                .sep-line {
                    margin: 0 32px;
                }
            }
            .input-username {
                width: 100%;
                height: 50px;
                border: 1px solid $colorH;
                margin-bottom: 20px;
                input {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    border: none;
                    padding: 18px;
                    font-size: 14px;
                    &::placeholder {
                        color: $colorD;
                    }
                }
            }
            .input-password {
                width: 100%;
                height: 50px;
                border: 1px solid $colorH;
                margin-bottom: 30px;
                input {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    border: none;
                    padding: 18px;
                    font-size: 14px;
                    &::placeholder {
                        color: $colorD;
                    }
                }
            }
            .button-box {
                margin-bottom: 14px;
                .btn {
                    width: 100%;
                    height: 50px;
                    background-color: $colorA;
                    font-size: 16px;
                    color: $colorG;
                }
            }
            .tips {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                cursor: pointer;
                .sms {
                    color: #ff6600;
                }
                .reg {
                    color: #999999;
                    span {
                        margin: 0 7px;
                    }
                }
            }
        }
    }
    .footer {
        box-sizing: border-box;
        height: 200px;
        text-align: center;
        padding-top: 120px;
        .footer-link {
            a {
                color: $colorD;
                font-size: 14px;
                cursor: pointer;
            }
            span {
                margin: 0 9px;
                height: 13px;
                color: $colorD;
            }
        }
        p {
            margin-top: 20px;
            color: $colorD;
            font-size: 14px;
        }
    }
}
</style>
