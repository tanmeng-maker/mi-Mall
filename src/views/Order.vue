<template>
	<div class="Order">
		<order-header :title="title">
			<template v-slot:tip>
				<span>{{ tip }}</span>
			</template>
		</order-header>
		<router-view></router-view>
		<service-bar></service-bar>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import ServiceBar from '../components/ServiceBar';
import NavFooter from '../components/NavFooter';
export default {
	name: 'Order',
	data() {
		return {
			title: '',
			tip: '',
		};
	},
	created() {
		let path = this.$route.path;
		console.log(path);
		if (path == '/order/confirm') {
			this.title = '确认订单';
		} else if (path == '/order/list') {
			this.title = '订单列表';
			this.tip = '请谨防钓鱼链接或诈骗电话，了解更多';
		} else if (path == '/order/pay') {
			this.title = '订单支付';
			this.tip = '请谨防钓鱼链接或诈骗电话，了解更多';
		}
	},
	components: {
		OrderHeader,
		ServiceBar,
		NavFooter,
	},
};
</script>
<style lang="scss" scoped></style>
