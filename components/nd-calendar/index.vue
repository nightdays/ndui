<style lang="less" scoped>
*{
    outline: none;
}

ul,
li {
	list-style: none;
	margin: 0;
	padding: 0;
}
.nd-calendar {
	display: inline-block;
    position: relative;
    padding: 3px 35px 3px 15px;
    border: 1px solid #E2E2E2;
    border-radius:  4px;
    box-sizing: border-box;
    height: 36px;
    vertical-align: middle;

    &>.nd-calendar-inner.haveValue {
         color:#999;
    }

    &>.nd-calendar-inner {
        font-size: 14px;
        line-height: 30px;
        color: #ccc;
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
    }

    &>.nd-calendar-scroll{
        position: absolute;
        transform: scaleY(0);
        transform-origin: center top 0;
        left:0;
        overflow: hidden;
        width: 256px;
        height: 288px;
        transition: transform .2s;
        margin-top: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        z-index: 100;
        background: white;
    }

    
    &>.nd-icon-date {
        position: absolute;
        top:0;
        right: 0;
        height: 36px;
        width : 35px;
        text-align: center;
        color:#ccc;
        font-size: 14px;
    }

    &>.nd-icon-date:after{
        content: "";
        display: inline-block;
        width: 0;
        height: 36px;
        vertical-align: middle;
    }
}

.nd-calendar.show {
	&>.nd-calendar-scroll>{
        transform: scaleY(1);
    }
}
</style>

<template>
    <div class="nd-calendar" @click="toggleOptions" @blur="closeOptions" tabindex="1" :class="{show: show}">
        <div class="nd-calendar-inner" :class="{haveValue : !!value}">{{currentValue}}</div>
        <div @click.stop="stop" class="nd-calendar-scroll">
           <nd-calendar-date @change="changeDate"></nd-calendar-date>
        </div>
        <i class="nd-icon-date"></i>
    </div>
</template>

<script>
import ndCalendarDate from "./date";
export default {
    props: {
        value: [String,Number,Boolean],
        placeholder: String
    },
    data() {
		return {
            show: false,
            currentHover: {},
            currentSelected: {},
            options: []
		};
	},
    computed: {
        currentValue(){
            if(this.value !=undefined){
                if(this.value){
                    return this.value;
                }else{
                    return this.placeholder||'选择时间';
                }
            }else{
                return this.placeholder || '选择时间';
            }
        }
    },
	methods: {
		toggleOptions() {
			if(this.show == true){
                this.show = false;
            }else{
                this.show = true;
            }
		},
		closeOptions() {
			this.show = false;
        },
        changeDate(date) {
            this.$emit("input",date);
            this.show = false;
        },
        stop(){
        }

	},
    components: {
        ndCalendarDate
	}
};
</script>


