(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49aa95b2"],{"138d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"参数配置",name:"reward_ad"}},[t.form?a("el-form",{ref:"form",staticStyle:{width:"600px",padding:"20px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"功能开关",prop:"is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["is_open"],callback:function(e){t.$set(t.form,"is_open",e)},expression:"form['is_open']"}})],1),a("el-form-item",{attrs:{label:"观看一次奖励",prop:"num"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"正整数",size:"small"},model:{value:t.form["num"],callback:function(e){t.$set(t.form,"num",e)},expression:"form['num']"}}),t._v(" "),a("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("条")])],1),a("el-form-item",{attrs:{label:"每天最多观看",prop:"max"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"正整数",size:"small"},model:{value:t.form["max"],callback:function(e){t.$set(t.form,"max",e)},expression:"form['max']"}}),t._v(" "),a("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("次有奖励")])],1),a("el-form-item",{attrs:{label:"广告位ID",prop:"ad_unit_id"}},[a("el-input",{attrs:{size:"small"},model:{value:t.form["ad_unit_id"],callback:function(e){t.$set(t.form,"ad_unit_id",e)},expression:"form['ad_unit_id']"}}),a("p",{staticStyle:{color:"#666",margin:"0"}},[t._v("流量主激励视频广告的广告位ID")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1)],1)],1)},i=[],o=(a("7b4c"),a("90e7")),r=a("91b6"),s={data:function(){return{tabName:"reward_ad",form:{},host:"",formRules:{}}},mounted:function(){this.host=window.location.host,this.getSetting()},methods:{getSetting:function(){var t=this;Object(o["c"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(){var t=this;this.$refs["form"].validate((function(e){e?Object(o["d"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message({message:e.message,type:"success",duration:1500})})):t.$message({message:"请填写必填项",type:"error",duration:1500})}))},uploadImage:function(t){var e=this,a=new FormData;a.append("file",t.file),t.data&&a.append("data",JSON.stringify(t.data)),Object(r["a"])(a).then((function(a){"share_image"===t.data.type&&e.$set(e.form,"share_image",a.data.path),e.$message.success("上传成功")}))}}},l=s,c=a("3427"),u=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=u.exports},"90e7":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return s}));var n=a("b775");function i(t){return Object(n["a"])({url:"/setting/getSetting",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/setting/getEngines",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/setting/setSetting",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/setting/getBalance",method:"post",data:t})}},"91b6":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var n=a("b775");function i(t){return Object(n["a"])({url:"/upload/image",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/upload/pem",method:"post",data:t})}}}]);