<template>
	<div class="servicebar">
		<div class="container">
			<ul>
				<li>
					<span class="icon-setting"></span>
					预约维修服务
				</li>
				<li>
					<span class="icon-7day"></span>
					7天无理由退货
				</li>
				<li>
					<span class="icon-15day"></span>
					15天免费退货
				</li>
				<li>
					<span class="icon-post"></span>
					满150元包邮
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'service-bar',
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
.servicebar {
	box-sizing: border-box;
	height: 80px;
	background-color: #ffffff;
	.container {
		li {
			display: inline-block;
			color: #666666;
			line-height: 80px;
			font-size: 16px;
			text-align: center;
			width: 24.9%;
			position: relative;
			span {
				margin-right: 8px;
				vertical-align: middle;
			}
			.icon-setting {
				@include bgImg(20px, 20px, '/imgs/icon-setting.png');
			}
			.icon-7day {
				@include bgImg(20px, 19px, '/imgs/icon-7day.png');
			}
			.icon-15day {
				@include bgImg(20px, 22px, '/imgs/icon-15day.png');
			}
			.icon-post {
				@include bgImg(20px, 22px, '/imgs/icon-post.png');
			}
			&::before {
				content: '';
				position: absolute;
				top: 23px;
				height: 34px;
				right: 0;
				border-left: 1px solid #e5e5e5;
			}
		}
	}
}
</style>
