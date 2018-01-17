<style lang="less" scoped>
.nd-menu {
	.menu {
		box-sizing: border-box;
		height: 56px;
		line-height: 56px;
		text-align: center;
		font-size: 0;
		margin-bottom: 16px;
		cursor: pointer;

		.icon {
			display: inline-block;
			width: 27px;
			height: 27px;
			vertical-align: middle;
			margin-right: 33px;
			background-size: cover;
			background-repeat: no-repeat;
		}
		.name {
            color: #999;
			font-size: 16px;
			vertical-align: middle;
		}
	}

	.menu.active {
		background:#f9f9f9;
		.name {
			color: #666;
		}
	}
}
</style>

<template>
	<ul class="nd-menu menu-group">
		<li class="menu" v-for="(item,index) in items" :key="index" :class="{active: isActive(item.router)}" @click="goto(item)">
			<span class="icon" v-if="item.icon" :class="item.icon"></span>
			<span class="name" v-if="item.name">{{item.name}}</span>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		items: {
			type: Array
		},
		activeIndex: {
			type: Number,
			default: -1
		}
	},
	data() {
		return {
		};
	},
	methods: {
		goto(item){
			this.$router.push(item.router);
			console.log(item.router);
		},
		isActive(router){
			if(router == this.$route.name){
				return true;
			}else{
				return false;
			}
		}
	}

};
</script>


