webpackJsonp([4],{"+Sud":function(t,n,e){"use strict";var i=e("9pHP"),a=e("jTZ6"),o=!1;var r=function(t){o||e("0Hou")},s=e("X4nt")(i.a,a.a,!1,r,"data-v-7f9fbcd4",null);s.options.__file="components\\nd-menu\\index.vue",n.a=s.exports},"0Hou":function(t,n,e){var i=e("8gYk");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("487af259",i,!1)},"1IuA":function(t,n,e){(t.exports=e("l95E")(!1)).push([t.i,".nd-button[data-v-755d5527]{display:inline-block;border-radius:100px;font-size:14px;font-weight:400}.nd-button[data-v-755d5527]:hover{cursor:pointer}.nd-button-primary[data-v-755d5527]{padding:9.5px 25px;border:transparent;background:#0acd79;color:#fff;line-height:17px}.nd-button-primary[data-v-755d5527]:hover{background:#0acd79;opacity:.8}.nd-button-login[data-v-755d5527]{padding:8px 30px;border:transparent;background:#0acd79;color:#fff}.nd-button-login[data-v-755d5527]:hover{background:#0acd79;opacity:.8}.nd-button-default[data-v-755d5527]{padding:9.5px 25px;border:transparent;background:#fff;color:#999;line-height:17px}",""])},"41Hl":function(t,n,e){"use strict";n.a={props:{type:{type:String,default:"primary"}},computed:{buttonType:function(){switch(this.type){case"primary":return"nd-button-primary";case"login":return"nd-button-login";case"default":return"nd-button-default"}}},methods:{click:function(){this.$emit("click")}}}},"67Rc":function(t,n,e){"use strict";var i=e("+Sud");n.a={data:function(){return{logoImgUrl:"",menuList:[{router:"ndButton",name:"按钮"},{router:"ndInput",name:"输入框"},{router:"ndSelect",name:"下拉框"},{router:"ndTable",name:"表格"},{router:"ndCalendar",name:"日历"}],activeIndex:0}},methods:{changeItem:function(t){this.activeIndex=t.index,this.$forward("system")}},components:{ndMenu:i.a}}},"78hJ":function(t,n,e){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"topbar"})};i._withStripped=!0;var a={render:i,staticRenderFns:[]};n.a=a},"89tN":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("lB8i"),a=e("G3CN"),o=!1;var r=function(t){o||e("pbYz")},s=e("X4nt")(i.a,a.a,!1,r,null,null);s.options.__file="pages\\ndButton.vue",n.default=s.exports},"8gYk":function(t,n,e){(t.exports=e("l95E")(!1)).push([t.i,".nd-menu .menu[data-v-7f9fbcd4]{-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;line-height:56px;text-align:center;font-size:0;margin-bottom:16px;cursor:pointer}.nd-menu .menu .icon[data-v-7f9fbcd4]{display:inline-block;width:27px;height:27px;vertical-align:middle;margin-right:33px;background-size:cover;background-repeat:no-repeat}.nd-menu .menu .name[data-v-7f9fbcd4]{color:#999;font-size:16px;vertical-align:middle}.nd-menu .menu.active[data-v-7f9fbcd4]{background:#f9f9f9}.nd-menu .menu.active .name[data-v-7f9fbcd4]{color:#666}",""])},9855:function(t,n,e){"use strict";var i=e("dr70"),a=e("bwL8"),o=!1;var r=function(t){o||e("sOba")},s=e("X4nt")(i.a,a.a,!1,r,"data-v-a790d9c2",null);s.options.__file="components\\nd-layout\\index.vue",n.a=s.exports},"9pHP":function(t,n,e){"use strict";n.a={props:{items:{type:Array},activeIndex:{type:Number,default:-1}},data:function(){return{}},methods:{goto:function(t){this.$router.push(t.router)},isActive:function(t){return t==this.$route.name}}}},"CBk/":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"nd-button",class:[t.buttonType],on:{click:t.click}},[t._t("default")],2)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};n.a=a},G3CN:function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("nd-layout",[n("div",{attrs:{slot:"body"},slot:"body"},[n("nd-button",[this._v("你好")])],1)])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};n.a=a},G4HF:function(t,n,e){"use strict";var i=e("xaCr"),a=e("78hJ"),o=!1;var r=function(t){o||e("KqSo")},s=e("X4nt")(i.a,a.a,!1,r,"data-v-0a609821",null);s.options.__file="components\\nd-layout\\topbar.vue",n.a=s.exports},KqSo:function(t,n,e){var i=e("OPyO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("3e9ed80f",i,!1)},OPyO:function(t,n,e){(t.exports=e("l95E")(!1)).push([t.i,".topbar[data-v-0a609821]{position:fixed;top:0;background:#fff;-webkit-box-shadow:0 4px 14px 0 hsla(0,0%,92%,.54);box-shadow:0 4px 14px 0 hsla(0,0%,92%,.54);width:100%;height:72px}",""])},PQWW:function(t,n,e){(t.exports=e("l95E")(!1)).push([t.i,"",""])},QWiC:function(t,n,e){"use strict";var i=e("67Rc"),a=e("oz6C"),o=!1;var r=function(t){o||e("ij85")},s=e("X4nt")(i.a,a.a,!1,r,"data-v-5304c769",null);s.options.__file="components\\nd-layout\\sidebar.vue",n.a=s.exports},Qf4g:function(t,n,e){(t.exports=e("l95E")(!1)).push([t.i,".layout>.container[data-v-a790d9c2]{padding:43px 49px 28px 33px;overflow:scroll}.layout>.container>.header[data-v-a790d9c2]{position:relative;margin:0 0 30px}.layout>.container>.header>.title[data-v-a790d9c2]{font-size:24px;color:#333}.layout>.container>.header>.right[data-v-a790d9c2]{position:absolute}.layout>.container>.body[data-v-a790d9c2]{min-width:960px;min-height:499px;padding:40px;background:#fff;border-radius:8px;-webkit-box-shadow:0 2px 14px 0 rgba(66,66,66,.1);box-shadow:0 2px 14px 0 rgba(66,66,66,.1)}",""])},bwL8:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout",style:{paddingLeft:t.pl,paddingTop:t.pt}},[e("sidebar",{staticClass:"left-block"}),e("topbar",{staticClass:"top-block"}),e("div",{staticClass:"container",style:{width:t.ctnWidth,height:t.ctnHeight}},[e("div",{staticClass:"header"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._t("header")],2),e("div",{staticClass:"body"},[t._t("body")],2)])],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};n.a=a},dr70:function(t,n,e){"use strict";var i=e("QWiC"),a=e("G4HF");n.a={props:{title:String,default:""},data:function(){return{pl:"0",pt:"0",ctnHeight:"0",ctnWidth:"0"}},mounted:function(){var t=this;this.$nextTick(function(){t.initUI()}),window.addEventListener("resize",function(){t.initUI()})},methods:{initUI:function(){var t=document.querySelector(".layout>.left-block"),n=document.querySelector(".layout>.top-block"),e=window.innerWidth,i=window.innerHeight;this.pl=t.getBoundingClientRect().width+"px",this.pt=n.getBoundingClientRect().height+"px",this.ctnWidth=e-t.getBoundingClientRect().width+"px",this.ctnHeight=i-n.getBoundingClientRect().height+"px"}},components:{sidebar:i.a,topbar:a.a}}},ij85:function(t,n,e){var i=e("itV1");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("5f0ce8fb",i,!1)},itV1:function(t,n,e){(t.exports=e("l95E")(!1)).push([t.i,".sidebar[data-v-5304c769]{position:fixed;z-index:100;top:0;left:0;bottom:0;background:#fff;width:265px;height:100%;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.07);box-shadow:0 2px 10px 0 rgba(0,0,0,.07)}.sidebar .logo[data-v-5304c769]{height:76px;margin:21px 0 0;text-align:center}.sidebar .logo img[data-v-5304c769]{width:177px}",""])},jTZ6:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"nd-menu menu-group"},t._l(t.items,function(n,i){return e("li",{key:i,staticClass:"menu",class:{active:t.isActive(n.router)},on:{click:function(e){t.goto(n)}}},[n.icon?e("span",{staticClass:"icon",class:n.icon}):t._e(),n.name?e("span",{staticClass:"name"},[t._v(t._s(n.name))]):t._e()])}))};i._withStripped=!0;var a={render:i,staticRenderFns:[]};n.a=a},kKU9:function(t,n,e){"use strict";var i=e("41Hl"),a=e("CBk/"),o=!1;var r=function(t){o||e("uyjL")},s=e("X4nt")(i.a,a.a,!1,r,"data-v-755d5527",null);s.options.__file="components\\nd-button\\index.vue",n.a=s.exports},lB8i:function(t,n,e){"use strict";var i=e("9855"),a=e("kKU9");n.a={components:{ndLayout:i.a,ndButton:a.a}}},oz6C:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"logo"}),e("nd-menu",{attrs:{items:t.menuList,activeIndex:t.activeIndex},on:{click:t.changeItem}})],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};n.a=a},pbYz:function(t,n,e){var i=e("PQWW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("80dcd78c",i,!1)},sOba:function(t,n,e){var i=e("Qf4g");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("b273ea86",i,!1)},uyjL:function(t,n,e){var i=e("1IuA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("8bSs")("01abc0be",i,!1)},xaCr:function(t,n,e){"use strict";n.a={}}});