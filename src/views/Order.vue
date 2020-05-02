<template>
	<div class="Order">
		<order-header></order-header>
		Order
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';
export default {
	name: 'Order',
	data() {
		return {};
	},
	components: {
		OrderHeader,
		NavFooter,
	},
};
</script>
<style lang="scss" scoped></style>
