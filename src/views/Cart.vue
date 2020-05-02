<template>
	<div>
		<order-header></order-header>
		Cart
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';
export default {
	name: 'Cart',
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
