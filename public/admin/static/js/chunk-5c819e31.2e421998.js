(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c819e31"],{"1eb5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[r("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[r("el-tab-pane",{attrs:{label:"web站点设置",name:"web"}},[e.form?r("el-form",{ref:"webForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"140px"}},[r("el-form-item",{attrs:{label:"web站点开关",prop:"is_open"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["is_open"],callback:function(t){e.$set(e.form,"is_open",t)},expression:"form['is_open']"}})],1),r("el-form-item",{attrs:{label:"自动合并小程序用户",prop:"bind_wxapp_user"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["bind_wxapp_user"],callback:function(t){e.$set(e.form,"bind_wxapp_user",t)},expression:"form['bind_wxapp_user']"}})],1),e.siteurl?r("el-form-item",{attrs:{label:"web站点链接"}},[r("a",{staticStyle:{color:"#409EFF"},attrs:{href:e.siteurl,target:"_blank"}},[e._v(e._s(e.siteurl))])]):e._e(),r("el-form-item",{attrs:{label:"页面标题",prop:"page_title"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{size:"small"},model:{value:e.form["page_title"],callback:function(t){e.$set(e.form,"page_title",t)},expression:"form['page_title']"}})],1),r("el-form-item",{attrs:{label:"底部声明",prop:"copyright"}},[r("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"请输入内容",size:"small"},model:{value:e.form["copyright"],callback:function(t){e.$set(e.form,"copyright",t)},expression:"form['copyright']"}})],1),r("el-form-item",{attrs:{label:"声明链接",prop:"copyright_link"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{size:"small"},model:{value:e.form["copyright_link"],callback:function(t){e.$set(e.form,"copyright_link",t)},expression:"form['copyright_link']"}})],1),r("el-form-item",{attrs:{label:"登录方式",prop:"login_way"}},[e._v(" 扫码关注公众号 ")]),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("webForm")}}},[e._v("保 存")])],1)],1):e._e()],1),r("el-tab-pane",{attrs:{label:"公众号设置",name:"wxmp"}},[e.form?r("el-form",{ref:"wxmpForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"160px"}},[r("el-form-item",{attrs:{label:"公众号名称",prop:"title"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"公众号名称",size:"small"},model:{value:e.form["title"],callback:function(t){e.$set(e.form,"title",t)},expression:"form['title']"}})],1),r("el-form-item",{attrs:{label:"公众号appid",prop:"appid"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"公众号appid",size:"small"},model:{value:e.form["appid"],callback:function(t){e.$set(e.form,"appid",t)},expression:"form['appid']"}})],1),r("el-form-item",{attrs:{label:"公众号appsecret",prop:"appsecret"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"公众号密钥appsecret",size:"small"},model:{value:e.form["appsecret"],callback:function(t){e.$set(e.form,"appsecret",t)},expression:"form['appsecret']"}})],1),r("div",{staticStyle:{"padding-left":"160px",margin:"50px 0 20px 0"}},[e._v("以下配置在公众号后台->设置与开发->基本配置->服务器配置->修改配置，修改保存并启用")]),r("el-form-item",{attrs:{label:"令牌(Token)",prop:"token"}},[r("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"公众号令牌(Token)",size:"small"},model:{value:e.form["token"],callback:function(t){e.$set(e.form,"token",t)},expression:"form['token']"}})],1),r("el-form-item",{attrs:{label:"消息加解密密钥(EncodingAESKey)",prop:"aes_key"}},[r("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"公众号消息加解密密钥(EncodingAESKey)",size:"small"},model:{value:e.form["aes_key"],callback:function(t){e.$set(e.form,"aes_key",t)},expression:"form['aes_key']"}})],1),r("el-form-item",{attrs:{label:"消息加解密模式"}},[e._v(" 明文模式 ")]),r("el-form-item",{attrs:{label:"服务器地址",prop:"server_url"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{readonly:"",size:"small"},model:{value:e.form["server_url"],callback:function(t){e.$set(e.form,"server_url",t)},expression:"form['server_url']"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("wxmpForm")}}},[e._v("保 存")])],1)],1):e._e()],1)],1)],1)},l=[],i=(r("7b4c"),r("90e7")),s=r("c24f"),o={data:function(){return{tabName:"web",form:null,siteurl:"",formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],appid:[{required:!0,message:"此项必填",trigger:"blur"}],appsecret:[{required:!0,message:"此项必填",trigger:"blur"}],token:[{required:!0,message:"此项必填",trigger:"blur"}],aes_key:[{required:!0,message:"此项必填",trigger:"blur"}],page_title:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting(),this.getWebSiteUrl()},methods:{getSetting:function(){var e=this;Object(i["c"])({name:this.tabName}).then((function(t){e.form=t.data}))},getWebSiteUrl:function(){var e=this;Object(s["g"])().then((function(t){e.siteurl=t.data}))},switchTab:function(){this.getSetting()},doSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?Object(i["d"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message.success(e.message)})):t.$message.error("请填写必填项")}))}}},n=o,c=(r("fbb9"),r("f4ee"),r("3427")),p=Object(c["a"])(n,a,l,!1,null,"9de76c38",null);t["default"]=p.exports},8076:function(e,t,r){},"90e7":function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return o}));var a=r("b775");function l(e){return Object(a["a"])({url:"/setting/getSetting",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/setting/getEngines",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/setting/setSetting",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/setting/getBalance",method:"post",data:e})}},bccd:function(e,t,r){},f4ee:function(e,t,r){"use strict";r("bccd")},fbb9:function(e,t,r){"use strict";r("8076")}}]);