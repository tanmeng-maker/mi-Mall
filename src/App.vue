<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {};
	},
	mounted() {
		//本地加载请求静态json文件的形式  mock
		// this.$axios.get('/mock/user/login.json').then(res => {
		// 	this.res = res;
		// });
		// 通过easy-mock平台实现数据mock 去平台注册项目，复制地址
		// this.$axios.get('/mock/user/login.json').then(res => {
		// 	this.res = res;
		// });
		//本地集成mockjs实现数据mock
		// this.$axios.get('/user/login').then(res => {
		// 	this.res = res;
		// });
	},
};
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
</style>
