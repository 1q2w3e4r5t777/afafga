(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a332034"],{"08e6":function(e,t,a){var i=a("a493"),r=a("9760"),s=a("ea56"),n=a("6695"),o=a("091c"),l=a("6fb3"),c=a("3c71").f,p=a("bb38"),d=a("68d3"),u=a("f8b7"),h=a("497f"),f=a("84e8"),g=a("9c78"),m=a("e549"),b=a("8241"),v=a("985f"),y=a("264e").enforce,x=a("7c5d"),_=a("831d"),w=a("251f"),k=a("3128"),S=_("match"),R=r.RegExp,F=R.prototype,E=r.SyntaxError,C=s(F.exec),z=s("".charAt),T=s("".replace),D=s("".indexOf),M=s("".slice),I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,j=/a/g,O=/a/g,$=new R(j)!==j,L=f.MISSED_STICKY,V=f.UNSUPPORTED_Y,A=i&&(!$||L||w||k||b((function(){return O[S]=!1,R(j)!=j||R(O)==O||"/a/i"!=R(j,"i")}))),P=function(e){for(var t,a=e.length,i=0,r="",s=!1;i<=a;i++)t=z(e,i),"\\"!==t?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),r+=t):r+="[\\s\\S]":r+=t+z(e,++i);return r},Y=function(e){for(var t,a=e.length,i=0,r="",s=[],n={},o=!1,l=!1,c=0,p="";i<=a;i++){if(t=z(e,i),"\\"===t)t+=z(e,++i);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:C(I,M(e,i+1))&&(i+=2,l=!0),r+=t,c++;continue;case">"===t&&l:if(""===p||v(n,p))throw new E("Invalid capture group name");n[p]=!0,s[s.length]=[p,c],l=!1,p="";continue}l?p+=t:r+=t}return[r,s]};if(n("RegExp",A)){for(var q=function(e,t){var a,i,r,s,n,c,f=p(F,this),g=d(e),m=void 0===t,b=[],v=e;if(!f&&g&&m&&e.constructor===q)return e;if((g||p(F,e))&&(e=e.source,m&&(t=h(v))),e=void 0===e?"":u(e),t=void 0===t?"":u(t),v=e,w&&"dotAll"in j&&(i=!!t&&D(t,"s")>-1,i&&(t=T(t,/s/g,""))),a=t,L&&"sticky"in j&&(r=!!t&&D(t,"y")>-1,r&&V&&(t=T(t,/y/g,""))),k&&(s=Y(e),e=s[0],b=s[1]),n=o(R(e,t),f?this:F,q),(i||r||b.length)&&(c=y(n),i&&(c.dotAll=!0,c.raw=q(P(e),a)),r&&(c.sticky=!0),b.length&&(c.groups=b)),e!==v)try{l(n,"source",""===v?"(?:)":v)}catch(x){}return n},H=c(R),B=0;H.length>B;)g(q,R,H[B++]);F.constructor=q,q.prototype=F,m(r,"RegExp",q,{constructor:!0})}x("RegExp")},"0a53":function(e,t,a){},"117f":function(e,t,a){var i=a("a493"),r=a("84e8").MISSED_STICKY,s=a("2044"),n=a("d860"),o=a("264e").get,l=RegExp.prototype,c=TypeError;i&&r&&n(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!o(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},"3d53":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"497f":function(e,t,a){var i=a("10b0"),r=a("985f"),s=a("bb38"),n=a("1ed2"),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||r(e,"flags")||!s(o,e)?t:i(n,e)}},"7a70":function(e,t,a){"use strict";var i=a("10b0"),r=a("e67f"),s=a("2f89"),n=a("4b5b"),o=a("57eb"),l=a("3d53"),c=a("f8b7"),p=a("5de4"),d=a("4f00");r("search",(function(e,t,a){return[function(t){var a=o(this),r=n(t)?void 0:p(t,e);return r?i(r,t,a):new RegExp(t)[e](c(a))},function(e){var i=s(this),r=c(e),n=a(t,i,r);if(n.done)return n.value;var o=i.lastIndex;l(o,0)||(i.lastIndex=0);var p=d(i,r);return l(i.lastIndex,o)||(i.lastIndex=o),null===p?-1:p.index}]}))},a7eb:function(e,t,a){"use strict";var i=a("59db").PROPER,r=a("e549"),s=a("2f89"),n=a("f8b7"),o=a("8241"),l=a("497f"),c="toString",p=RegExp.prototype,d=p[c],u=o((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),h=i&&d.name!=c;(u||h)&&r(RegExp.prototype,c,(function(){var e=s(this),t=n(e.source),a=n(l(e));return"/"+t+"/"+a}),{unsafe:!0})},e382:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[e._v("注册时间：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"时间开始","end-placeholder":"时间结束",size:"mini"},on:{change:e.dateChange},model:{value:e.search.date,callback:function(t){e.$set(e.search,"date",t)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:e.dateTypeChange},model:{value:e.dateType,callback:function(t){e.dateType=t},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[e._v("今天")]),a("el-radio-button",{attrs:{label:"day1"}},[e._v("昨天")]),a("el-radio-button",{attrs:{label:"day2"}},[e._v("前天")])],1)],1),a("p",[a("span",{staticClass:"label"},[e._v("用户ID：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入用户id"},model:{value:e.search.user_id,callback:function(t){e.$set(e.search,"user_id",t)},expression:"search.user_id"}})],1),a("p",[a("span",{staticClass:"label"},[e._v("昵称：")]),a("el-input",{staticStyle:{width:"160px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入昵称"},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:e.doSearch}},[e._v("筛选")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:e.doInit}},[e._v("重置")])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:e.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{prop:"create_time",label:"注册时间",width:"160"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.avatar,target:"_blank"}},[a("img",{staticStyle:{height:"36px"},attrs:{src:e.row.avatar}})])]}}])}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"180"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"180"}}),a("el-table-column",{attrs:{label:"余额",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),e.showRecharge(t.row.id)}}},[e._v(e._s(t.row.balance)+" 条")])]}}])}),a("el-table-column",{attrs:{label:"会员",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),e.showVipForm(t.row.id,t.row.vip_expire_time)}}},[e._v(e._s(t.row.vip_expire_time||"未开通"))])]}}])}),a("el-table-column",{attrs:{label:"共消费",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.order_total)+" 元 ")]}}])}),a("el-table-column",{attrs:{label:"共提问"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.msg_count)+" 条 ")]}}])})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),e._v(" 共 "),a("span",{staticClass:"text-green"},[e._v(" "+e._s(e.tongji.userCount)+" ")]),e._v(" 用户，余额 "),a("span",{staticClass:"text-danger"},[e._v(" "+e._s(e.tongji.userBalance)+" ")]),e._v(" 条 ")]),a("el-pagination",{attrs:{"current-page":e.page,"page-size":e.pagesize,layout:"total, prev, pager, next",total:e.dataTotal},on:{"current-change":e.pageChange}})],1)],1),e.rechargeForm?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"余额充值",width:"480px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":e.closeRecharge}},[a("el-form",{ref:"form",attrs:{model:e.rechargeForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"充值条数",prop:"num"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"填入整数",size:"small"},model:{value:e.rechargeForm.num,callback:function(t){e.$set(e.rechargeForm,"num",t)},expression:"rechargeForm.num"}}),a("span",{staticStyle:{color:"#666","margin-left":"10px"}},[e._v(" 条")]),a("p",{staticStyle:{color:"#999"}},[e._v("正数为增加，负数为减少")])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:e.closeRecharge}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doRecharge}},[e._v("提 交")])],1)],1)],1):e._e(),e.vipForm?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"设置vip会员时间",width:"480px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":e.closeVipForm}},[a("el-form",{ref:"form",attrs:{model:e.vipForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"到期时间",prop:"vip_expire_time"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"留空则表示关闭会员","value-format":"yyyy-MM-dd",editable:"",clearable:""},model:{value:e.vipForm.vip_expire_time,callback:function(t){e.$set(e.vipForm,"vip_expire_time",t)},expression:"vipForm.vip_expire_time"}}),a("p",[e._v("留空表示关闭会员")])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:e.closeVipForm}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.setVipTime}},[e._v("提 交")])],1)],1)],1):e._e()])},r=[],s=(a("c36d"),a("7a70"),a("2e69"),a("19e4"),a("08e6"),a("eb0d"),a("117f"),a("a7eb"),a("c24f")),n={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:15,dateType:"",search:{date:[],user_id:"",keyword:""},tongji:{userCount:0,userBalance:0},rechargeForm:null,vipForm:null}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={date:[],user_id:"",keyword:""},this.doSearch()},getList:function(){var e=this,t=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});Object(s["h"])(t).then((function(t){e.dataList=t.data.list,e.dataTotal=t.data.count})),1===this.page&&Object(s["g"])(t).then((function(t){e.tongji=t.data}))},tableIndex:function(e){return this.pagesize*(this.page-1)+e+1},pageChange:function(e){this.page=e,this.getList()},doSearch:function(){this.page=1,this.getList()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var e="",t=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),i=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?e=t:"day1"===this.dateType?e=a:"day2"===this.dateType&&(e=i),this.search.date=[e+" 00:00:00",e+" 23:59:59"]},dateFormat:function(e,t){var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return t},showRecharge:function(e){this.rechargeForm={user_id:e}},closeRecharge:function(){this.rechargeForm=null},doRecharge:function(){var e=this;Object(s["c"])(this.rechargeForm).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500}),e.closeRecharge()}))},showVipForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.vipForm={user_id:e,vip_expire_time:t}},closeVipForm:function(){this.vipForm=null},setVipTime:function(){var e=this;Object(s["l"])(this.vipForm).then((function(t){e.getList(),e.$message.success(t.message),e.closeVipForm()}))}}},o=n,l=(a("f146"),a("3427")),c=Object(l["a"])(o,i,r,!1,null,"62e5d7db",null);t["default"]=c.exports},eb0d:function(e,t,a){var i=a("a493"),r=a("251f"),s=a("2044"),n=a("d860"),o=a("264e").get,l=RegExp.prototype,c=TypeError;i&&r&&n(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!o(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},f146:function(e,t,a){"use strict";a("0a53")}}]);