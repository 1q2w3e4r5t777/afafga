(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf14a38"],{"08e6":function(t,e,a){var n=a("a493"),r=a("9760"),o=a("ea56"),i=a("6695"),s=a("091c"),l=a("6fb3"),c=a("3c71").f,d=a("bb38"),p=a("68d3"),u=a("f8b7"),f=a("497f"),g=a("84e8"),h=a("9c78"),y=a("e549"),_=a("8241"),b=a("985f"),m=a("264e").enforce,v=a("7c5d"),x=a("831d"),w=a("251f"),C=a("3128"),E=x("match"),S=r.RegExp,D=S.prototype,k=r.SyntaxError,R=o(D.exec),T=o("".charAt),O=o("".replace),z=o("".indexOf),M=o("".slice),I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,j=/a/g,$=/a/g,L=new S(j)!==j,N=g.MISSED_STICKY,A=g.UNSUPPORTED_Y,F=n&&(!L||N||w||C||_((function(){return $[E]=!1,S(j)!=j||S($)==$||"/a/i"!=S(j,"i")}))),P=function(t){for(var e,a=t.length,n=0,r="",o=!1;n<=a;n++)e=T(t,n),"\\"!==e?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),r+=e):r+="[\\s\\S]":r+=e+T(t,++n);return r},q=function(t){for(var e,a=t.length,n=0,r="",o=[],i={},s=!1,l=!1,c=0,d="";n<=a;n++){if(e=T(t,n),"\\"===e)e+=T(t,++n);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:R(I,M(t,n+1))&&(n+=2,l=!0),r+=e,c++;continue;case">"===e&&l:if(""===d||b(i,d))throw new k("Invalid capture group name");i[d]=!0,o[o.length]=[d,c],l=!1,d="";continue}l?d+=e:r+=e}return[r,o]};if(i("RegExp",F)){for(var J=function(t,e){var a,n,r,o,i,c,g=d(D,this),h=p(t),y=void 0===e,_=[],b=t;if(!g&&h&&y&&t.constructor===J)return t;if((h||d(D,t))&&(t=t.source,y&&(e=f(b))),t=void 0===t?"":u(t),e=void 0===e?"":u(e),b=t,w&&"dotAll"in j&&(n=!!e&&z(e,"s")>-1,n&&(e=O(e,/s/g,""))),a=e,N&&"sticky"in j&&(r=!!e&&z(e,"y")>-1,r&&A&&(e=O(e,/y/g,""))),C&&(o=q(t),t=o[0],_=o[1]),i=s(S(t,e),g?this:D,J),(n||r||_.length)&&(c=m(i),n&&(c.dotAll=!0,c.raw=J(P(t),a)),r&&(c.sticky=!0),_.length&&(c.groups=_)),t!==b)try{l(i,"source",""===b?"(?:)":b)}catch(v){}return i},Y=c(S),H=0;Y.length>H;)h(J,S,Y[H++]);D.constructor=J,J.prototype=D,y(r,"RegExp",J,{constructor:!0})}v("RegExp")},"117f":function(t,e,a){var n=a("a493"),r=a("84e8").MISSED_STICKY,o=a("2044"),i=a("d860"),s=a("264e").get,l=RegExp.prototype,c=TypeError;n&&r&&i(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!s(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},"3d53":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"497f":function(t,e,a){var n=a("10b0"),r=a("985f"),o=a("bb38"),i=a("1ed2"),s=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in s||r(t,"flags")||!o(s,t)?e:n(i,t)}},"634a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v("支付时间：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"支付时间-开始","end-placeholder":"支付时间-结束",size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v("今天")]),a("el-radio-button",{attrs:{label:"day1"}},[t._v("昨天")]),a("el-radio-button",{attrs:{label:"day2"}},[t._v("前天")])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v("订单号：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入单号"},model:{value:t.search.trade_no,callback:function(e){t.$set(t.search,"trade_no",e)},expression:"search.trade_no"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v("筛选")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v("重置")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.exportLoading,type:"text",icon:"el-icon-download",size:"mini"},on:{click:t.doExport}},[t._v("导出")])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,"element-loading-text":"加载中...",stripe:"",size:"medium","header-cell-class-name":"bg-gray"},on:{"row-dblclick":t.rowDblclick}},[a("el-table-column",{attrs:{prop:"id",label:"订单ID",width:"120"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID",width:"120"}}),a("el-table-column",{attrs:{prop:"pay_time",label:"支付时间",width:"180"}}),a("el-table-column",{attrs:{prop:"total_fee",label:"订单金额",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("￥"+t._s(e.row.total_fee))])]}}])}),a("el-table-column",{attrs:{prop:"out_trade_no",label:"订单号",width:"200"}}),a("el-table-column",{attrs:{prop:"agent_title",label:"条数",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.num)+" 条 ")]}}])}),a("el-table-column",{attrs:{label:"订单状态",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"text-green"},[t._v(" 支付成功 ")]),1===e.row.is_refund?a("span",{staticClass:"text-danger"},[t._v(" [已退] ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",plain:"",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showOrderDetail(e.row.out_trade_no)}}},[t._v("查看详情")])]}}])})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" 共 "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.orderCount)+" ")]),t._v(" 笔， "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.orderAmount)+" ")]),t._v(" 元 ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1),a("order-detail",{attrs:{"trade-no":t.out_trade_no},on:{close:t.hideOrderDetail}})],1)},r=[],o=(a("c36d"),a("7a70"),a("2e69"),a("19e4"),a("08e6"),a("eb0d"),a("117f"),a("a7eb"),a("485a"),a("28de"),a("71bc"),a("32c9"),a("b775"));function i(t){return Object(o["a"])({url:"/order/getList",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/order/getExportList",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/order/getOrderDetail",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/order/getTongji",method:"post",data:t})}var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.detail?a("div",[a("el-dialog",{attrs:{title:"订单详情",width:"500px","custom-class":"my-dialog",visible:!0,modal:!0,"modal-append-to-body":!0,"append-to-body":!0,"close-on-click-modal":!0,"close-on-press-escape":!0,"before-close":t.closeDetail}},[a("el-descriptions",{staticClass:"box",attrs:{title:"",column:1,border:"",size:"medium"}},[a("el-descriptions-item",{attrs:{label:"商户单号"}},[t._v(" "+t._s(t.detail.out_trade_no)+" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detail.out_trade_no,expression:"detail.out_trade_no",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],attrs:{type:"text",size:"mini"}},[t._v(" 复制 ")])],1),a("el-descriptions-item",{attrs:{label:"流水单号"}},[t._v(" "+t._s(t.detail.transaction_id)+" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detail.transaction_id,expression:"detail.transaction_id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],attrs:{type:"text",size:"mini"}},[t._v(" 复制 ")])],1),a("el-descriptions-item",{attrs:{label:"订单金额"}},[a("span",{staticClass:"total-fee text-danger"},[t._v(" ￥"+t._s(t.detail.total_fee)+" ")])]),a("el-descriptions-item",{attrs:{label:"支付方式"}},["wxpay"===t.detail.pay_type?a("span",[a("svg-icon",{staticStyle:{color:"#04BE02"},attrs:{"icon-class":"wxpay"}}),t._v(" 微信支付 ")],1):t._e(),"alipay"===t.detail.pay_type?a("span",[a("svg-icon",{staticStyle:{color:"#027aff"},attrs:{"icon-class":"alipay"}}),t._v(" 支付宝 ")],1):t._e()]),a("el-descriptions-item",{attrs:{label:"状态"}},[a("span",{staticClass:"text-green"},[t._v(" 支付成功 ")]),1===t.detail.is_refund?a("span",{staticClass:"text-danger",staticStyle:{"font-size":"12px"}},[t._v(" [已全额退款] ")]):t._e()]),a("el-descriptions-item",{attrs:{label:1===t.detail.is_refund?"退款时间":"支付时间"}},[t._v(" "+t._s(t.detail.pay_time)+" ")]),a("el-descriptions-item",{attrs:{label:"客户user_id"}},[t._v(" "+t._s(t.detail.user_id)+" ")])],1)],1)],1):t._e()},p=[],u={props:{tradeNo:{type:String,default:""}},data:function(){return{detail:null}},watch:{tradeNo:function(){this.getOrderDetail()}},methods:{getOrderDetail:function(){var t=this;this.tradeNo&&l({order_no:this.tradeNo}).then((function(e){t.detail=e.data})).catch((function(e){t.errMsg=e.message}))},closeDetail:function(){this.detail=null,this.$emit("close")},onCopySuccess:function(){this.$message.success("已复制")},onCopyError:function(){this.$message.error("复制失败")}}},f=u,g=a("3427"),h=Object(g["a"])(f,d,p,!1,null,null,null),y=h.exports,_={components:{orderDetail:y},data:function(){return{today:{amount:0,wxpay_amount:0,alipay_amount:0,user_count:0},dateType:"",search:{pay_type:"",trade_no:"",date:[]},tongji:{orderCount:0,orderAmount:0},payTypes:[{name:"",title:"请选择"},{name:"wxpay",title:"微信"},{name:"alipay",title:"支付宝"}],dataList:[],dataTotal:0,page:1,pagesize:10,out_trade_no:"",exportLoading:!1}},mounted:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={pay_type:"",trade_no:"",date:[]},this.doSearch()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),n=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=n),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e},getList:function(){var t=this,e=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});i(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&c(e).then((function(e){t.tongji=e.data}))},pageChange:function(t){this.page=t,this.getList()},toRefund:function(t){this.$router.replace({path:"/refund",query:{order_no:t}})},showOrderDetail:function(t){this.out_trade_no=t},hideOrderDetail:function(){this.out_trade_no=""},rowDblclick:function(t){this.showOrderDetail(t.out_trade_no)},closeDetail:function(){this.detail=null},onCopySuccess:function(){this.$message.success("已复制")},onCopyError:function(){this.$message.error("复制失败")},doSearch:function(){this.page=1,this.getList()},doExport:function(){var t=this;this.exportLoading=!0,s(this.search).then((function(e){Promise.all([a.e("chunk-253bf6cc"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(a){var n="订单",r=["支付方式","支付时间","商户订单号","渠道流水单号","订单金额","条数","状态"],o=["pay_type","pay_time","out_trade_no","transaction_id","total_fee","num","status"],i=e.data,s=t.formatJson(o,i);a.export_json_to_excel({header:r,data:s,filename:n,autoWidth:!0,bookType:"xlsx"}),t.exportLoading=!1}))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}},b=_,m=(a("70d2"),Object(g["a"])(b,n,r,!1,null,"4f4ec221",null));e["default"]=m.exports},"70d2":function(t,e,a){"use strict";a("f2ed")},"7a70":function(t,e,a){"use strict";var n=a("10b0"),r=a("e67f"),o=a("2f89"),i=a("4b5b"),s=a("57eb"),l=a("3d53"),c=a("f8b7"),d=a("5de4"),p=a("4f00");r("search",(function(t,e,a){return[function(e){var a=s(this),r=i(e)?void 0:d(e,t);return r?n(r,e,a):new RegExp(e)[t](c(a))},function(t){var n=o(this),r=c(t),i=a(e,n,r);if(i.done)return i.value;var s=n.lastIndex;l(s,0)||(n.lastIndex=0);var d=p(n,r);return l(n.lastIndex,s)||(n.lastIndex=s),null===d?-1:d.index}]}))},a7eb:function(t,e,a){"use strict";var n=a("59db").PROPER,r=a("e549"),o=a("2f89"),i=a("f8b7"),s=a("8241"),l=a("497f"),c="toString",d=RegExp.prototype,p=d[c],u=s((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),f=n&&p.name!=c;(u||f)&&r(RegExp.prototype,c,(function(){var t=o(this),e=i(t.source),a=i(l(t));return"/"+e+"/"+a}),{unsafe:!0})},eb0d:function(t,e,a){var n=a("a493"),r=a("251f"),o=a("2044"),i=a("d860"),s=a("264e").get,l=RegExp.prototype,c=TypeError;n&&r&&i(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!s(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},f2ed:function(t,e,a){}}]);