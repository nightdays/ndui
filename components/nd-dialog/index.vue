<style lang="less" scoped>
.hr-dialog {
    position: fixed;
    top:0;
    right: 0;
    bottom:0;
    left: 0;
    background: rgba(0,0,0,.5);
    z-index: 101;
    visibility: hidden;
    opacity: 0;
    transition: all .1s linear;

    &>div {
        position: absolute;
        top:20%;right:0;left:0;
        background-color: #fff;
        border-radius: 8px;
        margin: 0 auto;
        width: 639px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        padding: 24px 38.5px 0;
        transition: top .2s linear;
    }

    &.visible{
        visibility: visible;
        opacity: 1;
    }

    &.visible>div{
        top: 25%;
    }


}


.hr-dialog .hr-dialog-inner .hr-dialog-inner-header {
    .name {
        color: #333;
        font-weight: normal;
        font-size: 18px;
    }

    .value {
        float: right;
        color: #999;
        font-size: 16px;
        cursor: pointer;
    }

    &::after {
        content: " ";
        display: block;
        height: 1px;
        background-color: #EDEEEF;
        margin-top: 23px;
    }
}

.hr-dialog .hr-dialog-inner .hr-dialog-inner-footer {
    position: relative;
    box-sizing: content-box;
    height: 38px;
    padding: 19px 0 17px;

    .ml-10 {
        margin-left: 10px;
    }
}
</style>

<template>
<div class="hr-dialog" :class="{visible: visible}">
    <div class="hr-dialog-inner">
        <div class="hr-dialog-inner-header">
            <span class="name">{{title}}</span>
            <span class="value" @click="close"><i class="hr-icon-close"></i></span>
        </div>
        <slot></slot>
        <div v-if="!noFooter" class="hr-dialog-inner-footer">
            <hr-group>
                <hr-button type="default" @click="close">取 消</hr-button>
                <hr-button class="ml-10" @click="confirm">确 定</hr-button>
            </hr-group>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['title','noFooter','visible'],
    methods: {
        confirm() {
            this.$emit("confirm");
        },
        close() {
            this.$emit("update:visible",false);
        }
    }
}
</script>

