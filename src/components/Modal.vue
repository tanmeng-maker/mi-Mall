<template>
	<transition name="slide">
		<div class="modal" v-show="showModal">
			<div class="mask" v-show="showModal"></div>
			<div class="dialog">
				<div class="modal-header">
					<span>{{ title }}</span>
					<a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
				</div>
				<div class="modal-body">
					<slot name="body"></slot>
				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">
						{{ confirmText }}
					</a>
					<a href="javascript:;" class="btn" v-else-if="btnType == 2" @click="$emit('cancel')">
						{{ cancelText }}
					</a>
					<div class="btn-group" v-else>
						<a href="javascript:;" class="btn" @click="$emit('submit')">{{ confirmText }}</a>
						<a href="javascript:;" class="btn" @click="$emit('cancel')">{{ cancelText }}</a>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'modal',
	props: {
		// 弹框类型：小small，中middle，大large，表单form
		modalType: {
			type: String,
			default: 'form',
		},
		// 弹框标题
		title: String,
		// 按钮类型：1.确定按钮  2.取消按钮  3.都有
		btnType: String,
		confirmText: {
			type: String,
			default: '确定',
		},
		cancelText: {
			type: String,
			default: '取消',
		},
		showModal: Boolean,
	},
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/modal.scss';
</style>
