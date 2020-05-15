<template>
	<div class="Order">
		<router-view></router-view>
		<service-bar></service-bar>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import ServiceBar from './../components/ServiceBar';
import NavFooter from './../components/NavFooter';
export default {
	name: 'Order',
	components: {
		ServiceBar,
		NavFooter,
	},
};
</script>
<style lang="scss" scoped></style>
