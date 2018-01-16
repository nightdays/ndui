<style lang="less" scoped>
.layout > .container {
	padding: 43px 49px 28px 33px;
	overflow: scroll;

	& > .header {
		position: relative;
		margin: 0 0 30px 0;
		& > .title {
			font-size: 24px;
			color: #333;
		}


		& >.right {
			position: absolute;
		}
	}

	& > .body {
        padding: 40px;
        min-width:960px;
		min-height: 499px;
		padding: 40px;
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 14px 0 rgba(66, 66, 66, 0.1);
	}
}
</style>

<template>
<div class="layout"  :style="{paddingLeft: pl,paddingTop:pt}">
    <sidebar class="left-block"></sidebar>
    <topbar class="top-block"></topbar>

    <div class="container" :style="{width: ctnWidth , height: ctnHeight}">
        <div class="header">
            <span class="title" v-if="title">{{title}}</span>
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
    </div>
</div>
</template>

<script>
import sidebar from "./sidebar";
import topbar from "./topbar";

export default {
	props: {
		title: String,
		default: ""
	},
	data() {
		return {
			pl: "0",
			pt: "0",
            ctnHeight: "0",
            ctnWidth : "0"
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.initUI();
		});

		window.addEventListener("resize", () => {
			this.initUI();
		});
	},
	methods: {
		initUI() {
			let leftBlock = document.querySelector(".layout>.left-block");
			let topBlock = document.querySelector(".layout>.top-block");
            let totalWidth = window.innerWidth;
            let totalHeight = window.innerHeight;
			this.pl = leftBlock.getBoundingClientRect().width + "px";
            this.pt = topBlock.getBoundingClientRect().height + "px";
            this.ctnWidth = totalWidth - leftBlock.getBoundingClientRect().width + "px";
			this.ctnHeight = totalHeight - topBlock.getBoundingClientRect().height + "px";
		}
	},
	components: {
		sidebar,
		topbar
	}
};
</script>


