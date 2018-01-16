<style lang="less" scope="scoped">
.nd-tab-menu {
	position: relative;
	padding-bottom: 21px;
	border-bottom: 1px solid #edeeef;
	overflow: hidden;
	width: 100%;

	.nd-tab-menu-inner {
		width: 9999px;
		position: relative;
		left: 0;
		transition: left 0.3s;
	}

	.nd-tab-menu-slider {
		position: absolute;
		left: 0;
		bottom: -15px;
		width: 22px;
		height: 4px;
		background: #0acd79;
		border-radius: 100px;
		transition: transform 0.5s;
	}

	.nd-tab-menu-item {
		display: inline-block;
		margin-right: 44px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #bbbbbb;
		&:last-child {
			margin-right: 0;
		}

		&:hover,
		&.active {
			color: #333333;
		}

		&:hover {
			cursor: pointer;
		}

		&.active {
		}
	}
}
.nd-tab-menu-outside {
    position: relative;

	.arrow {
		position: absolute;
		top: 0;
		width: 25px;
		height: 25px;
        line-height: 25px;
        font-size: 12px;
		background: #fff;
		color: #0acd79;
		border: 1px solid #0acd79;
		font-weight: bold;
		cursor: pointer;
		user-select: none;
		border-radius: 100%;
        text-align: center;
        z-index:2;
        transition: all .5s;
	}

	.arrow:hover {
		background: #0acd79;
		color: #fff;
	}

	.right {
		right: -30px;
	}

	.left {
		left: -30px;
	}
}
</style>
<template>
    <div class="nd-tab-menu-outside">
        <div class="left arrow" @click="moveLeft" v-if="isBeyond">
            <i class="nd-icon-arrow-left"></i>
        </div>
        <div class="right arrow" @click="moveRight" v-if="isBeyond">
            <i class="nd-icon-arrow-right"></i>
        </div>
        <div class="nd-tab-menu" v-if="list.length>0">
            <div class="nd-tab-menu-inner">
                <div class="nd-tab-menu-slider"></div>
                <div v-for="(item,index) in list" :key="index" @click="goTo(item,index)" class="nd-tab-menu-item" :class="{active:index==selectIndex}" >
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let testData = {
	list: [
		{
			name: "多功能厅",
			type: 0
		},
		{
			name: "足球馆",
			type: 1
		},
		{
			name: "健身房",
			type: 2
		},
		{
			name:
				"羽毛球馆2222222222222222222222222222222222222222222222222222222222",
			type: 1
		},
		{
			name:
				"羽毛球111111111111111111111111111111111111111111111111111111111馆",
			type: 1
		}
	]
};
import $ from "jquery";
export default {
	props: ["items"],
	data() {
		return {
			list: [],
			selectIndex: 0,
			slideMoveArray: [],
			isBeyond: false,
            beyondIndex: -1,
            isMoving: false
		};
	},
	created() {
		if (!this.items) {
			this.list = testData.list;
		} else {
			this.list = this.items;
		}
	},
	mounted() {
		if (this.list.length > 0) {
			this.initData();
		}
	},
	watch: {
		items() {
			this.list = this.items;
			this.initData();
		}
	},
	methods: {
		initData() {
			this.$nextTick(function() {
				setTimeout(() => {
					this.initSlider();
					this.goTo(this.list[0], 0);
				}, 100);
			});
		},
		initSlider() {
			let menulist = [];
			this.slideMoveArray = [];
			$(".nd-tab-menu-item").each(function(index, val) {
				let item = $(val);
				menulist.push({
					width: item.width(),
					margin: item.css("margin-right")
				});
			});
			menulist.forEach(
				function(menuItem, index) {
					let x = 0;
					for (let i = 0; i < index; i++) {
						x =
							x +
							menulist[i].width +
							Number.parseInt(menulist[i].margin);
					}
					x = x + (menuItem.width - 22) / 2;
					this.slideMoveArray.push(x);
				}.bind(this)
			);
			$(".nd-tab-menu-inner").css("left", 0);
			this.checkBeyond();
			$(window).on("resize", () => {
				this.checkBeyond();
			});
		},
		sliderMove(index) {
			let translateX = "translateX(" + this.slideMoveArray[index] + "px)";
			$(".nd-tab-menu-slider").css("transform", translateX);
		},
		checkBeyond() {
			let itemWidth = 0;
			let ctxWidth = $(".nd-tab-menu").width();
			let count = 0;
			$(".nd-tab-menu-item").each(function(index, value) {
				itemWidth += $(value).width();
				count++;
			});
			count--;
			if (itemWidth + 44 * count > ctxWidth + 10) {
				this.isBeyond = true;
			} else {
				this.isBeyond = false;
				$(".nd-tab-menu-inner").css("left", 0);
			}
		},
		goTo(item, index) {
			this.selectIndex = index;
			this.sliderMove(index);
			item.index = index;
			this.$emit("changeItem", item);
		},
		goToIndex(index) {
			this.selectIndex = index;
			this.sliderMove(index);
			this.$emit("changeItem", this.list[index]);
		},
		moveLeft() {
            if(this.beyondIndex == -1) {return;}
            if(this.isMoving){
                return;
            }else{
                this.isMoving = true;
            }
			let left = $(".nd-tab-menu-inner").css("left");
            let distance = Number.parseInt(left);
            let item = $(".nd-tab-menu-item")[this.beyondIndex];
            let width = item.getBoundingClientRect().width + Number.parseInt(getComputedStyle(item)["margin-right"]);
            width = Math.floor(width);
			$(".nd-tab-menu-inner").css("left", distance + width );
            this.beyondIndex--;
            setTimeout(()=>{
                this.isMoving = false;
            },100);
		},
		moveRight() {
            if(this.beyondIndex == this.list.length-1) {return;}
            if(this.isMoving){
                return;
            }else{
                this.isMoving = true;
            }
            console.log(this.beyondIndex);
            this.beyondIndex++;
			let left = $(".nd-tab-menu-inner").css("left");
			let distance = Number.parseInt(left);
            let item = $(".nd-tab-menu-item")[this.beyondIndex];
            let width = item.getBoundingClientRect().width + Number.parseInt(getComputedStyle(item)["margin-right"]);
            width = Math.floor(width);
            $(".nd-tab-menu-inner").css("left", distance - width );
            setTimeout(()=>{
                this.isMoving = false;
                console.log('change false');
            },300);
		}
	}
};
</script>

