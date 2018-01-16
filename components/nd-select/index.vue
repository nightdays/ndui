<style lang="less" scoped>
ul,
li {
	list-style: none;
	margin: 0;
	padding: 0;
}
.nd-select {
    outline: none;
	display: inline-block;
    position: relative;
    padding: 3px 35px 3px 15px;
    border: 1px solid #E2E2E2;
    border-radius:  4px;
    box-sizing: border-box;
    height: 36px;
    vertical-align: middle;
    cursor: pointer;

    &>.nd-select-inner.haveValue {
         color:#999;
    }

    &>.nd-select-inner {
        font-size: 14px;
        line-height: 30px;
        color: #ccc;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    &>.nd-select-scroll{
        position: absolute;
        width: 100%;
        transform: scaleY(0);
        transform-origin: center top 0;
        left:0;
        overflow: hidden;
        transition: transform .2s;
        margin-top: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        z-index: 100;
        background: white;
    }

	&>.nd-select-scroll>.nd-select-options {
        max-height: 200px;
        padding: 6px 0;
        width: calc(100%+20px);
        overflow-y: auto;
    }
    
    &>.nd-icon-caret-top {
        font-size: 12px;
        position: absolute;
        top:0;
        right: 0;
        height: 36px;
        width : 35px;
        text-align: center;
        color:#ccc;
        transform: rotate(-180Deg);
        transition: transform .3s;
    }

    &>.nd-icon-caret-top:after{
        content: "";
        display: inline-block;
        width: 0;
        height: 36px;
        vertical-align: middle;
    }
}

.nd-select.show {
	&>.nd-select-scroll>{
        transform: scaleY(1);
    }
    
    &>.nd-icon-caret-top{
        transform: rotate(0);
    }
}
</style>

<template>
    <div class="nd-select" @click="toggleOptions" @blur="closeOptions" tabindex="1" :class="{show: show}">
        <div class="nd-select-inner" :class="{haveValue : !!value}">{{currentValue}}</div>
        <div class="nd-select-scroll">
            <ul class="nd-select-options">
                <slot></slot>
            </ul>
        </div>
        <i class="nd-icon-caret-top"></i>
    </div>
</template>

<script>

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
                let option = this.findOption(this.value);
                if(option){
                    if(this.currentSelected.$data){
                        this.currentSelected.$data.selected = false;
                    }
                    option.$data.selected = true;
                    this.currentSelected = option;
                    return option.label;
                }else{
                    return this.placeholder;
                }
            }else{
                return this.placeholder;
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
        findOption(value){
            for(let option of this.options){
                if(option.value == value){
                    return option;
                }
            }
            return null;
        },
        setSelectedItem(value,item,option){
            this.$emit("input",value);
            this.$emit('change',value,item);
        },
        setHoverItem(option){
            if(this.currentHover.$data){
                this.currentHover.$data.hover =false;
            }
            option.$data.hover = true;
            this.currentHover = option;
        },
        addOption(option){
            this.options.push(option);
        },
        removeOption(option){
            let index = this.options.indexOf(option);
            if(index>-1){
                this.options.splice(index,1);
            }
            if(this.options.length==0){
                this.$emit("input",undefined);
            }
        }

	}
};
</script>


