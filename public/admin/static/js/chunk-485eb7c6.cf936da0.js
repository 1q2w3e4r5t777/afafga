(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-485eb7c6"],{2602:function(e,t,u){"use strict";u.r(t);var n=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},s=[],a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,n){return u("li",{key:n,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},r=[],o=u("4a60"),i=(u("1a7c"),u("5f17"),u("c36d"),u("19e4"),u("6db4")),l={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},c=l,d=(u("c58f"),u("3427")),m=Object(d["a"])(c,a,r,!1,null,"2aec367a",null),p=m.exports,f={components:{sidebar:p},data:function(){return{moduleName:"小程序",submenus:[{title:"参数配置",routeName:"ModuleWxappSetting",routeQuery:{}},{title:"上传代码",routeName:"ModuleWxappUpload",routeQuery:{}}]}},methods:{}},b=f,h=(u("e7c3"),Object(d["a"])(b,n,s,!1,null,"4dede4e2",null));t["default"]=h.exports},"4c6d":function(e,t,u){},"6f12":function(e,t,u){},c58f:function(e,t,u){"use strict";u("4c6d")},e7c3:function(e,t,u){"use strict";u("6f12")}}]);