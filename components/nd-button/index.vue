<style lang="less" scoped>
.nd-button {
	display: inline-block;
	border-radius: 100px;
	font-size: 14px;
	font-weight: 400;
}
.nd-button:hover {
    cursor: pointer;
}
//基础按钮样式
.nd-button-primary {
	padding: 9.5px 25px;
	border: transparent;
	background: #0acd79;
	color: #fff;
	line-height: 17px;
}
.nd-button-primary:hover {
	background: #0acd79;
	opacity: 0.8;
}

//登录按钮样式
.nd-button-login {
	padding: 8px 30px;
	border: transparent;
	background: #0acd79;
	color: #fff;
}
.nd-button-login:hover {
	background: #0acd79;
	opacity: 0.8;
}

//默认按钮样式
.nd-button-default {
    padding: 9.5px 25px;
	border: transparent;
	background: #fff;
	color: #999;
	line-height: 17px;
}
</style>

<template>
    <div class="nd-button" :class="[buttonType]" @click="click">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type : {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        buttonType() {
            switch(this.type) {
                case "primary": return "nd-button-primary";
                case "login":   return "nd-button-login";
                case "default": return "nd-button-default";
            }
        }
    },
    methods: {
        click(){
            this.$emit('click');
        }
    }
}
</script>



