<style lang="less" scoped>
.hr-input {
	display: inline-block;
	position: relative;
	border-radius: 4px;
}
.hr-input > .hr-input-inner {
	display: inline-block;
	box-sizing: border-box;
	appearance: none;
	padding: 3px 10px;
	border: 1px solid transparent;
	outline: none;
	width: 100%;
	height: 36px;
	line-height: 1;
	border-radius: 4px;
	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hr-input > .hr-input-inner::-webkit-input-placeholder {
	color: #ccc;
}

.hr-input > .hr-input-inner:-ms-input-placeholder {
	color: #ccc;
}

.hr-input > .hr-input-inner::placeholder {
	color: #ccc;
}

//基本输入框样式
.hr-input-primary > .hr-input-inner {
	background: #fcfcfc;
	border: 1px solid #e2e2e2;
}
.hr-input-primary > .hr-input-inner:focus {
	border: 1px solid #0acd79;
}
//登录输入框样式
.hr-input-login > .hr-input-inner {
	background: rgba(187, 187, 187, 0.4);
	color: #fff;
}

.hr-icon-search {
	position: absolute;
	height: 100%;
	width: 35px;
	text-align: center;
	top: 0;
	right: 0;
	margin: auto 0;
	color: #ccc;
	font-size: 14px;
}

.hr-icon-search:after {
	content: "";
	display: inline-block;
	width: 0;
	height: 100%;
	vertical-align: middle;
}
</style>

<template>
<div class="hr-input" :class="[input_type]">
    <input class="hr-input-inner" :placeholder="placeholder" :type="type" :value="value" @input="updateValue" />
    <i :class="[input_icon]"></i>
</div>
</template>

<script>
export default {
	props: {
		inputType: {
			type: String,
			default: "primary"
		},
		placeholder: {
			type: String
		},
		type: {
			type: String
		},
		icon: {
			type: String
		},
		value: [String,Boolean,Number,undefined,null]
	},
	computed: {
		input_type() {
			switch (this.inputType) {
				case "primary":
					return "hr-input-primary";
				case "login":
					return "hr-input-login";
			}
		},
		input_icon() {
			switch (this.icon) {
				case "search":
					return "hr-icon-search";
			}
		}
	},
	methods:{
		updateValue(event) {
			this.$emit('input',event.target.value);
		}
	}
	
};
</script>


