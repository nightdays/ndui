<style lang="less" scoped>
.nd-dialog {
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


.nd-dialog .nd-dialog-inner .nd-dialog-inner-header {
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

.nd-dialog .nd-dialog-inner .nd-dialog-inner-footer {
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
<div class="nd-dialog" :class="{visible: visible}">
    <div class="nd-dialog-inner">
        <div class="nd-dialog-inner-header">
            <span class="name">{{title}}</span>
            <span class="value" @click="close"><i class="nd-icon-close"></i></span>
        </div>
        <slot></slot>
        <div v-if="!noFooter" class="nd-dialog-inner-footer">
            <nd-group>
                <nd-button type="default" @click="close">取 消</nd-button>
                <nd-button class="ml-10" @click="confirm">确 定</nd-button>
            </nd-group>
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

