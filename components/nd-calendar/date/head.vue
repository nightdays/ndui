<style lang="less" scoped>
.nd-calendar-head {
	padding: 16px 12px 12px 12px;
	text-align: center;

	[class^="nd-icon-"] {
		color: #97beb3;
		padding: 1px 6px;
		cursor: pointer;

		&:hover {
			color: #0acd79;
		}
	}

	[class$="-arrow-left"] {
		float: left;
	}

	[class$="-arrow-right"] {
		float: right;
	}

	.header-text-label {
		display: inline-block;
		font-size: 14px;
		padding: 0 5px;
		color: #333;
		cursor: pointer;

		&:hover {
			color: #0acd79;
		}
	}
}
</style>

<template>
<div class="nd-calendar-head">
        <span @click.stop="changeYear(-1)">
            <i class="nd-icon-d-arrow-left"></i>
        </span>
        <span @click.stop="changeMonth(-1)">
            <i class="nd-icon-arrow-left"></i>
        </span>

        <span class="header-text-label">{{currentDate.year}} 年</span>
        <span class="header-text-label">{{currentDate.month}} 月</span>

        <span @click.stop="changeYear(1)">
            <i class="nd-icon-d-arrow-right"></i>
        </span>
        <span @click.stop="changeMonth(1)">
            <i class="nd-icon-arrow-right"></i>
        </span>
</div>
</template>

<script>
import NdDate from '~/plugins/NdDate.js'

export default {
	data() {
		return {
			currentDate : {}
		};
	},
	methods: {
		renderHead(date){
			if(this.currentDate.date){
				if(this.currentDate.year == date.year && this.currentDate.month == date.month){
					return;
				}
			}
			this.currentDate = new NdDate(date);
			this.$emit('change',this.currentDate.toString());
		},
		changeMonth(param) {
			if(param<0){
				this.currentDate = this.currentDate.prevMonth();
			}else{
				this.currentDate = this.currentDate.nextMonth();
			}
			this.$emit("change", this.currentDate.toString());
		},
		changeYear(param) {
			let year = this.currentDate.year ;
			let month = this.currentDate.month;
			this.currentDate = new NdDate(Number.parseInt(year) + param, month,1)
			this.$emit("change", this.currentDate.toString());
		}
	}
};
</script>

