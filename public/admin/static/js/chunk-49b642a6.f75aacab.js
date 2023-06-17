(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b642a6"],{1027:function(e,s,a){"use strict";a("fe9b")},6407:function(e,s,a){"use strict";a("ca02")},"90e7":function(e,s,a){"use strict";a.d(s,"d",(function(){return o})),a.d(s,"b",(function(){return i})),a.d(s,"e",(function(){return l})),a.d(s,"a",(function(){return c})),a.d(s,"c",(function(){return r}));var t=a("b775");function o(e){return Object(t["a"])({url:"/setting/getSetting",method:"post",data:e})}function i(e){return Object(t["a"])({url:"/setting/getEngines",method:"post",data:e})}function l(e){return Object(t["a"])({url:"/setting/setSetting",method:"post",data:e})}function c(e){return Object(t["a"])({url:"/setting/getBalance",method:"post",data:e})}function r(e){return Object(t["a"])({url:"/setting/getLxaiBalance",method:"post",data:e})}},c666:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(s){e.tabName=s},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"AI绘画 - 参数配置",name:"draw"}},[e.form?a("el-form",{ref:"drawForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"接口选择",prop:"ai_type"}},[a("el-radio-group",{model:{value:e.form["channel"],callback:function(s){e.$set(e.form,"channel",s)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[e._v("OpenAI")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"replicate",size:"mini"}},[e._v("Midjourney")]),a("el-radio",{attrs:{label:"api2d",size:"mini"}},[e._v("Api2d")]),a("el-radio",{attrs:{label:"lxai",size:"mini"}},[e._v("灵犀AI")])],1)],1),"openai"===e.form["channel"]?a("div",[a("el-form-item",{attrs:{label:"Key模式",prop:"apikey_type"}},[a("el-radio-group",{model:{value:e.form["apikey_type"],callback:function(s){e.$set(e.form,"apikey_type",s)},expression:"form['apikey_type']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"key",size:"mini"}},[e._v("固定key")]),a("el-radio",{attrs:{label:"keys",size:"mini"}},[e._v("使用Key池")])],1)],1),"key"!==e.form["apikey_type"]&&e.form["apikey_type"]?e._e():a("el-form-item",{attrs:{label:"Openai Key",prop:"apikey"}},[a("el-input",{attrs:{placeholder:"AI接口密钥",size:"small"},model:{value:e.form["apikey"],callback:function(s){e.$set(e.form,"apikey",s)},expression:"form['apikey']"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.getBalance}},[e._v("查询余额")]),e.balance?a("p",{staticStyle:{color:"#ff8800","font-size":"15px","font-weight":"bold"}},[e._v("总：$"+e._s(e.balance.total_granted)+"，已用：$"+e._s(e.balance.total_used)+"，剩余：$"+e._s(e.balance.total_available))]):e._e(),a("p",[e._v("需自备GPT账号，请根据您当地的法规酌情使用")])],1)],1):e._e(),"replicate"===e.form["channel"]?a("el-form-item",{attrs:{label:"token"}},[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:e.form["token"],callback:function(s){e.$set(e.form,"token",s)},expression:"form['token']"}}),a("p",[e._v("由Replicate提供的Midjourney接口，"),a("a",{staticClass:"text-primary",attrs:{href:"https://replicate.com/prompthero/openjourney",target:"_blank"}},[e._v("注册地址")])])],1):e._e(),"api2d"===e.form["channel"]?a("el-form-item",{attrs:{label:"ForwardKey",prop:"forwardkey"}},[a("el-input",{attrs:{placeholder:"API2D的接口密钥",size:"small"},model:{value:e.form["forwardkey"],callback:function(s){e.$set(e.form,"forwardkey",s)},expression:"form['forwardkey']"}}),a("p",[e._v("这是一个提供openai接口的第三方平台，"),a("a",{staticClass:"text-primary",attrs:{href:"https://api2d.com/r/199013",target:"_blank"}},[e._v("注册地址")])])],1):e._e(),"lxai"===e.form["channel"]?a("el-form-item",{attrs:{label:"灵犀Key",prop:"lxai_key"}},[a("el-input",{attrs:{placeholder:"灵犀AI的接口密钥",size:"small"},model:{value:e.form["lxai_key"],callback:function(s){e.$set(e.form,"lxai_key",s)},expression:"form['lxai_key']"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.getLxaiBalance}},[e._v("查询余额")]),e.lxaiBalance?a("p",{staticStyle:{color:"#ff8800","font-size":"15px","font-weight":"bold"}},[e._v("总：$"+e._s(e.lxaiBalance.total_granted)+"，已用：$"+e._s(e.lxaiBalance.total_used)+"，剩余：$"+e._s(e.lxaiBalance.total_available))]):e._e(),a("p",[e._v("这是一家国内的AI接口，与openai计费规则一样，"),a("a",{staticClass:"text-primary",attrs:{href:"http://lingxi.znai8.cn",target:"_blank"}},[e._v("key下单地址")])])],1):e._e(),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(s){return e.doSubmit("drawForm")}}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"图片存储配置",name:"storage"}},[e.form?a("el-form",{ref:"storageForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"存储引擎",prop:"engine"}},[a("el-radio-group",{model:{value:e.form["engine"],callback:function(s){e.$set(e.form,"engine",s)},expression:"form['engine']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"local",size:"mini"}},[e._v("本地服务器")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"alioss",size:"mini"}},[e._v("阿里云OSS")]),a("el-radio",{attrs:{label:"txcos",size:"mini"}},[e._v("腾讯云COS")]),a("el-radio",{attrs:{label:"qiniu",size:"mini"}},[e._v("七牛云对象存储")])],1)],1),"alioss"===e.form["engine"]?a("div",[a("el-form-item",{attrs:{label:"存储区域",prop:"alioss_region"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form["alioss_region"],callback:function(s){e.$set(e.form,"alioss_region",s)},expression:"form['alioss_region']"}},e._l(e.aliossRegions,(function(s,t){return a("el-option",{key:t,attrs:{label:s,value:t}},[e._v(e._s(s)+" ( "+e._s(t)+" ) ")])})),1)],1),a("el-form-item",{attrs:{label:"空间名称 Bucket",prop:"alioss_bucket"}},[a("el-input",{attrs:{placeholder:"空间名称 Bucket",size:"small"},model:{value:e.form["alioss_bucket"],callback:function(s){e.$set(e.form,"alioss_bucket",s)},expression:"form['alioss_bucket']"}})],1),a("el-form-item",{attrs:{label:"AccessKey ID",prop:"alioss_accesskey_id"}},[a("el-input",{attrs:{placeholder:"AccessKey ID",size:"small"},model:{value:e.form["alioss_accesskey_id"],callback:function(s){e.$set(e.form,"alioss_accesskey_id",s)},expression:"form['alioss_accesskey_id']"}})],1),a("el-form-item",{attrs:{label:"AccessKey Secret",prop:"alioss_accesskey_secret"}},[a("el-input",{attrs:{placeholder:"AccessKey Secret",size:"small"},model:{value:e.form["alioss_accesskey_secret"],callback:function(s){e.$set(e.form,"alioss_accesskey_secret",s)},expression:"form['alioss_accesskey_secret']"}})],1)],1):e._e(),"txcos"===e.form["engine"]?a("div",[a("el-form-item",{attrs:{label:"存储区域",prop:"txcos_region"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form["txcos_region"],callback:function(s){e.$set(e.form,"txcos_region",s)},expression:"form['txcos_region']"}},e._l(e.txcosRegions,(function(s,t){return a("el-option",{key:t,attrs:{label:s,value:t}},[e._v(e._s(s)+" ( "+e._s(t)+" ) ")])})),1)],1),a("el-form-item",{attrs:{label:"空间名称 Bucket",prop:"txcos_bucket"}},[a("el-input",{attrs:{placeholder:"空间名称 Bucket",size:"small"},model:{value:e.form["txcos_bucket"],callback:function(s){e.$set(e.form,"txcos_bucket",s)},expression:"form['txcos_bucket']"}})],1),a("el-form-item",{attrs:{label:"访问密钥 AccessKey",prop:"txcos_access_key"}},[a("el-input",{attrs:{placeholder:"访问密钥 AccessKey",size:"small"},model:{value:e.form["txcos_access_key"],callback:function(s){e.$set(e.form,"txcos_access_key",s)},expression:"form['txcos_access_key']"}})],1),a("el-form-item",{attrs:{label:"安全密钥 SecretKey",prop:"txcos_secret_key"}},[a("el-input",{attrs:{placeholder:"安全密钥 SecretKey",size:"small"},model:{value:e.form["txcos_secret_key"],callback:function(s){e.$set(e.form,"txcos_secret_key",s)},expression:"form['txcos_secret_key']"}})],1)],1):e._e(),"qiniu"===e.form["engine"]?a("div",[a("el-form-item",{attrs:{label:"存储区域",prop:"qiniu_region"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form["qiniu_region"],callback:function(s){e.$set(e.form,"qiniu_region",s)},expression:"form['qiniu_region']"}},e._l(e.qiniuRegions,(function(s,t){return a("el-option",{key:t,attrs:{label:s,value:t}},[e._v(e._s(s)+" ( "+e._s(t)+" ) ")])})),1)],1),a("el-form-item",{attrs:{label:"空间名称 Bucket",prop:"qiniu_bucket"}},[a("el-input",{attrs:{placeholder:"空间名称 Bucket",size:"small"},model:{value:e.form["qiniu_bucket"],callback:function(s){e.$set(e.form,"qiniu_bucket",s)},expression:"form['qiniu_bucket']"}})],1),a("el-form-item",{attrs:{label:"访问密钥 AccessKey",prop:"qiniu_access_key"}},[a("el-input",{attrs:{placeholder:"访问密钥 AccessKey",size:"small"},model:{value:e.form["qiniu_access_key"],callback:function(s){e.$set(e.form,"qiniu_access_key",s)},expression:"form['qiniu_access_key']"}})],1),a("el-form-item",{attrs:{label:"安全密钥 SecretKey",prop:"qiniu_secret_key"}},[a("el-input",{attrs:{placeholder:"安全密钥 SecretKey",size:"small"},model:{value:e.form["qiniu_secret_key"],callback:function(s){e.$set(e.form,"qiniu_secret_key",s)},expression:"form['qiniu_secret_key']"}})],1)],1):e._e(),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(s){return e.doSubmit("drawForm")}}},[e._v("保 存")])],1)],1):e._e()],1)],1)],1)},o=[],i=(a("7b4c"),a("90e7")),l={data:function(){return{tabName:"draw",form:null,aliossRegions:{"oss-cn-hangzhou.aliyuncs.com":"华东1（杭州）","oss-cn-shanghai.aliyuncs.com":"华东2（上海）","oss-cn-nanjing.aliyuncs.com":"华东5（南京本地地域）","oss-cn-fuzhou.aliyuncs.com":"华东6（福州本地地域）","oss-cn-qingdao.aliyuncs.com":"华北1（青岛）","oss-cn-beijing.aliyuncs.com":"华北2（北京）","oss-cn-zhangjiakou.aliyuncs.com":"华北3（张家口）","oss-cn-huhehaote.aliyuncs.com":"华北5（呼和浩特）","oss-cn-wulanchabu.aliyuncs.com":"华北6（乌兰察布）","oss-cn-shenzhen.aliyuncs.com":"华南1（深圳）","oss-cn-heyuan.aliyuncs.com":"华南2（河源）","oss-cn-guangzhou.aliyuncs.com":"华南3（广州）","oss-cn-chengdu.aliyuncs.com":"西南1（成都）","oss-cn-hongkong.aliyuncs.com":"中国（香港）","oss-us-west-1.aliyuncs.com":"美国（硅谷）","oss-us-east-1.aliyuncs.com":"美国（弗吉尼亚）","oss-ap-northeast-1.aliyuncs.com":"日本（东京）","oss-ap-northeast-2.aliyuncs.com":"韩国（首尔）","oss-ap-southeast-1.aliyuncs.com":"新加坡","oss-ap-southeast-2.aliyuncs.com":"澳大利亚（悉尼）","oss-ap-southeast-3.aliyuncs.com":"马来西亚（吉隆坡）","oss-ap-southeast-5.aliyuncs.com":"印度尼西亚（雅加达）","oss-ap-southeast-6.aliyuncs.com":"菲律宾（马尼拉）","oss-ap-southeast-7.aliyuncs.com":"泰国（曼谷）","oss-ap-south-1.aliyuncs.com":"印度（孟买）","oss-eu-central-1.aliyuncs.com":"德国（法兰克福）","oss-eu-west-1.aliyuncs.com":"英国（伦敦）","oss-me-east-1.aliyuncs.com":"阿联酋（迪拜）","oss-rg-china-mainland.aliyuncs.com":"无地域属性（中国内地）"},txcosRegions:{"cos.ap-beijing-1.myqcloud.com":"中国大陆 北京一区","cos.ap-beijing.myqcloud.com":"中国大陆 北京","cos.ap-nanjing.myqcloud.com":"中国大陆 南京","cos.ap-shanghai.myqcloud.com":"中国大陆 上海","cos.ap-guangzhou.myqcloud.com":"中国大陆 广州","cos.ap-chengdu.myqcloud.com":"中国大陆 成都","cos.ap-chongqing.myqcloud.com":"中国大陆 重庆","cos.ap-shenzhen-fsi.myqcloud.com":"中国大陆 金融云 深圳金融","cos.ap-shanghai-fsi.myqcloud.com":"中国大陆 金融云 上海金融","cos.ap-beijing-fsi.myqcloud.com":"中国大陆 金融云 北京金融","cos.ap-hongkong.myqcloud.com":"亚太地区 中国香港","cos.ap-singapore.myqcloud.com":"亚太地区 新加坡","cos.ap-mumbai.myqcloud.com":"亚太地区 孟买","cos.ap-jakarta.myqcloud.com":"亚太地区 雅加达","cos.ap-seoul.myqcloud.com":"亚太地区 首尔","cos.ap-bangkok.myqcloud.com":"亚太地区 曼谷","cos.ap-tokyo.myqcloud.com":"亚太地区 东京","cos.na-siliconvalley.myqcloud.com":"北美地区 硅谷","cos.na-ashburn.myqcloud.com":"北美地区 弗吉尼亚","cos.na-toronto.myqcloud.com":"北美地区 多伦多","cos.sa-saopaulo.myqcloud.com":"北美地区 圣保罗","cos.eu-frankfurt.myqcloud.com":"欧洲地区 法兰克福","cos.eu-moscow.myqcloud.com":"欧洲地区 莫斯科"},qiniuRegions:{"up.qiniup.com":"华东-浙江","up-cn-east-2.qiniup.com":"华东-浙江2","up-z1.qiniup.com":"华北-河北","up-z2.qiniup.com":"华南-广东","up-na0.qiniup.com":"北美-洛杉矶","up-as0.qiniup.com":"亚太-新加坡","up-ap-northeast-1.qiniup.com":"亚太-首尔"},formRules:{engine:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_region:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_bucket:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_accesskey_id:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_accesskey_secret:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_region:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_bucket:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_access_key:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_secret_key:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_region:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_bucket:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_access_key:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_secret_key:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var e=this;Object(i["d"])({name:this.tabName}).then((function(s){e.form=s.data}))},switchTab:function(){this.getSetting()},doSubmit:function(e){var s=this;this.$refs[e].validate((function(e){e?Object(i["e"])({name:s.tabName,data:JSON.stringify(s.form)}).then((function(e){s.getSetting(),s.$message.success(e.message)})):s.$message.error("请填写必填项")}))}}},c=l,r=(a("6407"),a("1027"),a("3427")),n=Object(r["a"])(c,t,o,!1,null,"2e6be81a",null);s["default"]=n.exports},ca02:function(e,s,a){},fe9b:function(e,s,a){}}]);