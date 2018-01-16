<style lang="less" scoped>
.sidebar {
	position: fixed;
	z-index: 100;
	top: 0px;
	left: 0px;
	bottom: 0px;
	background: #fff;
	width: 265px;
	height: 100%;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
}

.sidebar .logo {
	height: 76px;
	margin: 21px 0 0;
	text-align: center;
}

.sidebar .logo img {
	width: 177px;
}
</style>

<template>
<div class="sidebar">
    <div class="logo">
		<!-- <img :src="logoImgUrl"> -->
    </div>
	<nd-menu :items="menuList" :activeIndex="activeIndex" @click="changeItem"></nd-menu>
</div>
</template>

<script>
import ndMenu from '~/components/nd-menu/index.vue'
export default {
	data() {
		return {
			logoImgUrl: '',
			menuList: [
				{router:'ndButton' , name: '按钮'},
				{router:'ndInput' , name: '输入框'},
				{router:'ndSelect' , name:'下拉框'},
				{router:'ndTable' , name: '表格'},
				{router:'ndCalendar' , name: '日历'},
			],
			activeIndex: 0
		};
	},
	methods: {
		changeItem(item){
			this.activeIndex = item.index;
			this.$forward("system");
		}
	},
	components: {
		ndMenu
	}
};
</script>


