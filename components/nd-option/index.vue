<style lang="less" scoped>
.nd-select-option {
	font-size: 14px;
	padding: 8px 10px;
	white-space: nowrap;
	overflow: hidden;
}

.nd-select-option.hover {
	background-color: #f4fdf9;
}

.nd-select-option.selected {
	background-color: #0acd79;
}

.nd-select-option.selected.hover {
	background-color: rgb(9, 180, 106);
}
</style>

<template>
 <li class="nd-select-option" @click="showOption" :class="{hover:hover,selected:selected}" @mouseover="hoverOption">
     {{label}}
 </li>
</template>

<script>
export default {
    props: {
        label: [String,Number,Boolean],
        value: [String,Number,Boolean],
        item: Object
    },
    data(){
        return {
            hover: false,
            selected: false
        }
    },
    mounted(){
        this.$parent.addOption(this);
    },
    destroyed(){
        this.$parent.removeOption(this);
    },
    methods: {
        showOption() {
            this.$parent.setSelectedItem(this.value,this.item , this);
        },
        hoverOption() {
            this.$parent.setHoverItem(this);
        }
    }
};
</script>
