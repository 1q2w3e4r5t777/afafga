(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9fd04c02"],{"131f":function(t,e,i){"use strict";i("4a22")},"3d57":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[i("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[i("el-tab-pane",{attrs:{label:"参数配置",name:"wxapp"}},[i("el-alert",{staticStyle:{width:"600px",margin:"10px 0 20px 20px"},attrs:{type:"warning",size:"small",title:"：",closable:!1}},[i("template",{slot:"title"},[i("div",[i("strong",[t._v("注意事项：")])]),i("div",[t._v("1、小程序类目选择：工具 -> 办公")]),i("div",[t._v("2、小程序后台request合法域名、uploadFile合法域名、downloadFile合法域名，均为：https://"+t._s(t.host)+" ，必须设置")])])],2),t.form?i("el-form",{ref:"form_wxapp",staticStyle:{width:"600px"},attrs:{model:t.form,rules:t.formRules,"label-width":"150px"}},[i("el-form-item",{attrs:{label:"小程序名称",prop:"title"}},[i("el-input",{attrs:{placeholder:"小程序名称",size:"small"},model:{value:t.form["title"],callback:function(e){t.$set(t.form,"title",e)},expression:"form['title']"}})],1),i("el-form-item",{attrs:{label:"小程序appid",prop:"appid"}},[i("el-input",{attrs:{placeholder:"小程序appid",size:"small"},model:{value:t.form["appid"],callback:function(e){t.$set(t.form,"appid",e)},expression:"form['appid']"}})],1),i("el-form-item",{attrs:{label:"小程序appsecret",prop:"appsecret"}},[i("el-input",{attrs:{placeholder:"小程序密钥appsecret",size:"small"},model:{value:t.form["appsecret"],callback:function(e){t.$set(t.form,"appsecret",e)},expression:"form['appsecret']"}})],1),i("el-form-item",{attrs:{label:"小程序首页标题",prop:"share_title"}},[i("el-input",{attrs:{placeholder:"请输入小程序首页标题",size:"small"},model:{value:t.form["page_title"],callback:function(e){t.$set(t.form,"page_title",e)},expression:"form['page_title']"}}),i("p",{staticStyle:{margin:"0",color:"#999"}},[t._v("默认：AI创作助手")])],1),i("el-form-item",{attrs:{label:"小程序欢迎语",prop:"share_title"}},[i("el-input",{attrs:{placeholder:"请输入小程序欢迎语",size:"small"},model:{value:t.form["welcome"],callback:function(e){t.$set(t.form,"welcome",e)},expression:"form['welcome']"}}),i("p",{staticStyle:{margin:"0",color:"#999"}},[t._v("默认：你好，我是AI创作助手！你现在可以向我提问了！")])],1),i("el-form-item",{attrs:{label:"分享文案",prop:"share_title"}},[i("el-input",{attrs:{placeholder:"默认小程序名称",size:"small"},model:{value:t.form["share_title"],callback:function(e){t.$set(t.form,"share_title",e)},expression:"form['share_title']"}})],1),i("el-form-item",{attrs:{label:"分享图片",prop:"share_image"}},[i("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:t.form["share_image"],callback:function(e){t.$set(t.form,"share_image",e)},expression:"form['share_image']"}}),i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"share_image"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["share_image"]?i("img",{staticClass:"avatar",staticStyle:{height:"80px",width:"auto"},attrs:{src:t.form["share_image"]}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"80px",height:"80px","line-height":"80px"}})]),i("span",[t._v("建议300x300像素，正方形图片")])],1),i("el-form-item",{attrs:{label:"IOS支付开关",prop:"is_ios_pay"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["is_ios_pay"],callback:function(e){t.$set(t.form,"is_ios_pay",e)},expression:"form['is_ios_pay']"}}),i("p",[t._v("微信IOS端不允许有虚拟商品支付")])],1),i("el-form-item",{attrs:{label:"小程序审核模式",prop:"is_check"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["is_check"],callback:function(e){t.$set(t.form,"is_check",e)},expression:"form['is_check']"}}),i("p",[t._v("打开以后会隐藏一些不好过审的功能")])],1),i("el-form-item",{attrs:{label:""}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("form_wxapp")}}},[t._v("保 存")])],1)],1):t._e()],1),i("el-tab-pane",{attrs:{label:"小程序首页",name:"wxapp_index"}},[t.form?i("el-form",{ref:"form_wxapp_index",staticStyle:{width:"600px"},attrs:{model:t.form,rules:t.formRules,"label-width":"150px"}},[i("el-form-item",{attrs:{label:"首页类型",prop:"type"}},[i("el-radio",{attrs:{label:"chat"},model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[t._v("聊天")]),i("el-radio",{attrs:{label:"diy"},model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[t._v("自定义内容")])],1),i("el-form-item",{staticClass:"describe",attrs:{label:"自定义内容",prop:"content"}},[i("fox-editor",{ref:"foxEditor",attrs:{content:t.form.content}})],1),i("el-form-item",{attrs:{label:""}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("form_wxapp_index")}}},[t._v("保 存")])],1)],1):t._e()],1)],1)],1)},s=[],n=(i("7b4c"),i("90e7")),o=i("91b6"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fox-editor",style:"width:"+t.width+"px;"},[i("div",{staticClass:"editor-tools"},[i("div",{staticStyle:{display:"flex","align-items":"center","line-height":"14px"}},[i("a",{staticClass:"item",attrs:{title:"插入一段文字"},on:{click:t.addText}},[t._v("+ 文字")]),i("el-upload",{staticStyle:{display:"inline"},attrs:{action:"","before-upload":t.uploadCheck,"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[i("a",{staticClass:"item",attrs:{title:"插入一张图片"}},[t._v("+ 图片")])])],1),null!==t.activeIndex?i("div",{staticStyle:{display:"flex","align-items":"center","line-height":"14px"}},["text"===t.form[t.activeIndex].type?i("a",{staticClass:"item",class:{active:"bold"===t.form[t.activeIndex].style.fontWeight},attrs:{title:"文字加粗"},on:{click:function(e){return t.setTextStyle("fontWeight")}}},[i("svg-icon",{attrs:{"icon-class":"ic_text_bold"}})],1):t._e(),"text"===t.form[t.activeIndex].type?i("a",{staticClass:"item",class:{active:"center"===t.form[t.activeIndex].style.textAlign},attrs:{title:"文字居中"},on:{click:function(e){return t.setTextStyle("textAlign")}}},[i("svg-icon",{attrs:{"icon-class":"ic_text_center"}})],1):t._e(),"text"===t.form[t.activeIndex].type?i("el-color-picker",{staticClass:"item",staticStyle:{padding:"0"},attrs:{size:"mini",value:t.form[t.activeIndex].style.color||"#333333",title:"文字颜色"},on:{change:t.setTextColor}}):t._e(),"text"===t.form[t.activeIndex].type?i("el-select",{staticStyle:{width:"68px","margin-right":"5px"},attrs:{value:t.form[t.activeIndex].style.fontSize||14,placeholder:"字号",size:"mini",title:"文字大小"},on:{change:t.setTextFontSize}},t._l(t.fontSizeArr,(function(t){return i("el-option",{key:t,attrs:{label:t+"px",value:t}})})),1):t._e(),i("a",{staticClass:"item",attrs:{title:"删除选中"},on:{click:t.removeItem}},[i("i",{staticClass:"el-icon-delete"})]),i("a",{staticClass:"item",attrs:{title:"上移"},on:{click:t.moveTop}},[t._v("↑")]),i("a",{staticClass:"item",staticStyle:{"margin-right":"0"},attrs:{title:"下移"},on:{click:t.moveBottom}},[t._v("↓")])],1):t._e()]),i("div",{staticClass:"editor-content",style:"height:"+t.height+"px;"},t._l(t.form,(function(e,a){return i("div",{key:a,staticClass:"editor-block",class:{active:t.activeIndex===a},on:{click:function(e){return t.itemSelect(a)}}},["text"===e.type?i("div",{staticClass:"block-text"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form[a].content,expression:"form[index].content"}],style:t.formatStyle(e.style),attrs:{id:"textarea"+a},domProps:{value:t.form[a].content},on:{input:[function(e){e.target.composing||t.$set(t.form[a],"content",e.target.value)},function(e){return t.setTextHeight(a)}]}}),t._v(" "),i("div",{staticStyle:{clear:"both"}})]):t._e(),"image"===e.type?i("div",{staticClass:"block-image"},[i("img",{attrs:{src:e.content}}),i("div",{staticStyle:{clear:"both"}})]):t._e()])})),0)])},r=[],c=(i("1a7c"),i("5013"),i("5f17"),i("485a"),i("87cf"),{name:"FoxEditor",props:{content:{type:String,default:""},width:{type:Number,default:500},height:{type:Number,default:300}},data:function(){return{form:[],activeIndex:null,fontSizeArr:[12,13,14,15,16,18,20,24,28,32]}},watch:{content:{handler:function(t){var e=this;this.content?this.form=JSON.parse(this.content):this.form=[],this.$nextTick((function(){e.setAllTextHeiht()}))},immediate:!0,deep:!0}},created:function(){},methods:{formatStyle:function(t){var e="";return t&&(t.color&&(e+="color:"+t.color+";"),t.fontWeight&&(e+="font-weight:"+t.fontWeight+";"),t.fontSize&&(e+="font-size:"+t.fontSize+"px;"),t.textAlign&&(e+="textAlign:"+t.textAlign+";")),e},addText:function(){var t=this.activeIndex?this.activeIndex:0,e=this.form;e.splice(t+1,0,{type:"text",content:"",style:{}}),this.form=e,t=null===this.activeIndex?0:t+1,this.itemSelect(t),this.$forceUpdate()},uploadCheck:function(t){if("jpg"!==t.name.substr(-3)&&"png"!==t.name.substr(-3)&&"gif"!==t.name.substr(-3))return this.$message({showClose:!0,message:"请上传后缀为.png / .jpg / .gif的图片",type:"warning"}),!1},uploadImage:function(t){var e=this,i=this.activeIndex?this.activeIndex:0,a=new FormData;a.append("file",t.file),Object(o["a"])(a).then((function(t){e.form.splice(i+1,0,{type:"image",content:t.data.path}),e.itemSelect(null===e.activeIndex?0:i+1),e.$forceUpdate()}))},removeItem:function(){var t=this,e=this.activeIndex?this.activeIndex:0;this.$confirm("确认删除选中的内容吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){var i=t.form;i.splice(e,1),t.form=i,t.activeIndex=null,t.$forceUpdate()}))},moveTop:function(){var t=this;if(null!==this.activeIndex&&0!==this.activeIndex){var e=this.activeIndex,i=this.form,a=i[e-1];i[e-1]=i[e],i[e]=a,this.form=i,this.activeIndex=e-1,this.$forceUpdate(),this.$nextTick((function(){t.setAllTextHeiht()}))}},moveBottom:function(){var t=this,e=this.form;if(null!==this.activeIndex&&this.activeIndex!==e.length-1){var i=this.activeIndex,a=e[i+1];e[i+1]=e[i],e[i]=a,this.form=e,this.activeIndex=i+1,this.$forceUpdate(),this.$nextTick((function(){t.setAllTextHeiht()}))}},itemSelect:function(t){this.activeIndex=t},setTextStyle:function(t,e){var i=this,a=this.activeIndex;if(null!==a){var s=this.form[a].style;"fontWeight"===t&&(s.fontWeight="bold"===s.fontWeight?"normal":"bold"),"textAlign"===t&&(s.textAlign="center"===s.textAlign?"left":"center"),"color"===t&&(s.color=e),"fontSize"===t&&(s.fontSize=e,setTimeout((function(){i.setTextHeight(a)}),10)),this.form[a].style=s,this.$forceUpdate()}},setTextColor:function(t){this.setTextStyle("color",t)},setTextFontSize:function(t){this.setTextStyle("fontSize",t)},setAllTextHeiht:function(){var t=this;this.form.forEach((function(e,i){"text"===e.type&&t.setTextHeight(i)}))},setTextHeight:function(t){var e=document.getElementById("textarea"+t);e.style.height=0,e.style.height=e.scrollHeight+"px"},getContent:function(){return this.form.length>0?JSON.stringify(this.form):""}}}),m=c,f=(i("131f"),i("9a27"),i("3427")),p=Object(f["a"])(m,l,r,!1,null,"f2d75662",null),u=p.exports,d={components:{FoxEditor:u},data:function(){return{tabName:"wxapp",form:{},host:"",formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],qrcode:[{required:!0,message:"此项必填",trigger:"blur"}],appid:[{required:!0,message:"此项必填",trigger:"blur"}],appsecret:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.host=window.location.host,this.getSetting()},methods:{getSetting:function(){var t=this;Object(n["c"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(t){var e=this;this.$refs[t].validate((function(t){var i=Object.assign({},e.form);"wxapp_index"===e.tabName&&(i.content=e.$refs.foxEditor.getContent()),t?Object(n["d"])({name:e.tabName,data:JSON.stringify(i)}).then((function(t){e.getSetting(),e.$message({message:t.message,type:"success",duration:1500})})):e.$message({message:"请填写必填项",type:"error",duration:1500})}))},uploadImage:function(t){var e=this,i=new FormData;i.append("file",t.file),t.data&&i.append("data",JSON.stringify(t.data)),Object(o["a"])(i).then((function(i){"share_image"===t.data.type&&e.$set(e.form,"share_image",i.data.path),e.$message.success("上传成功")}))}}},h=d,x=Object(f["a"])(h,a,s,!1,null,null,null);e["default"]=x.exports},"4a22":function(t,e,i){},"668b":function(t,e,i){},"90e7":function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return l}));var a=i("b775");function s(t){return Object(a["a"])({url:"/setting/getSetting",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/setting/getEngines",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/setting/setSetting",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/setting/getBalance",method:"post",data:t})}},"91b6":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n}));var a=i("b775");function s(t){return Object(a["a"])({url:"/upload/image",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/upload/pem",method:"post",data:t})}},"9a27":function(t,e,i){"use strict";i("668b")}}]);