(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259ead80"],{"24e3":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"33ac":function(t,e,a){"use strict";a("779a")},3406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"toolbar",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",padding:"20px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showForm(0)}}},[t._v("新增禁言用户")]),a("div",[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"320px"},attrs:{placeholder:"用户ID",size:"small",clearable:""},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)],1),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"freeze_time",label:"禁言时间",width:"160"}}),a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{prop:"create_time",label:"注册时间",width:"160"}}),a("el-table-column",{attrs:{prop:"nickname",label:"头像昵称",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.avatar}}),t._v(" "+t._s(e.row.nickname)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"180"}}),a("el-table-column",{attrs:{label:"余额",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showRecharge(e.row.id)}}},[t._v(t._s(e.row.balance)+" 条")])]}}])}),a("el-table-column",{attrs:{label:"会员",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showVipForm(e.row.id,e.row.vip_expire_time)}}},[t._v(t._s(e.row.vip_expire_time||"未开通"))])]}}])}),a("el-table-column",{attrs:{label:"共消费",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.order_total)+" 元 ")]}}])}),a("el-table-column",{attrs:{label:"共提问",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.msg_count)+" 条 ")]}}])}),a("el-table-column",{attrs:{prop:"commission1",label:"推荐人",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.tuser?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.tuser.avatar}}),t._v(" "+t._s(e.row.tuser.nickname)+" [ID: "+t._s(e.row.tuid)+"] ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.doUnfreeze(e.row.id)}}},[t._v("解除禁言")])]}}])})],1),a("div",{staticClass:"footer"},[a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1),t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"禁言用户",width:"480px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"用户ID",prop:"num"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"填入用户ID（数字）",size:"small"},model:{value:t.form.user_id,callback:function(e){t.$set(t.form,"user_id",e)},expression:"form.user_id"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doFreeze}},[t._v("禁言他")])],1)],1)],1):t._e()])},i=[],s=(a("592a"),a("85fa"),a("c24f")),o={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:15,dateType:"",search:{user_id:""},form:null}},created:function(){this.doInit()},methods:{doInit:function(){this.search={user_id:""},this.doSearch()},getList:function(){var t=this,e=Object.assign(this.search,{is_freeze:1,page:this.page,pagesize:this.pagesize});Object(s["h"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},showForm:function(){this.form={}},closeForm:function(){this.form=null},doFreeze:function(){var t=this;Object(s["b"])(this.form).then((function(e){t.getList(),t.$message({message:e.message,type:"success",duration:1500}),t.closeForm()}))},doUnfreeze:function(t){var e=this;this.$confirm("确定解除他的禁言吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["d"])({user_id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500}),e.closeForm()}))}))}}},r=o,l=(a("33ac"),a("3427")),c=Object(l["a"])(r,n,i,!1,null,"4f16ed70",null);e["default"]=c.exports},"779a":function(t,e,a){},"85fa":function(t,e,a){"use strict";var n=a("607c"),i=a("f65d"),s=a("a30c"),o=a("dc58"),r=a("f129"),l=a("24e3"),c=a("8fde"),u=a("a2f3"),d=a("ccba");i("search",(function(t,e,a){return[function(e){var a=r(this),i=o(e)?void 0:u(e,t);return i?n(i,e,a):new RegExp(e)[t](c(a))},function(t){var n=s(this),i=c(t),o=a(e,n,i);if(o.done)return o.value;var r=n.lastIndex;l(r,0)||(n.lastIndex=0);var u=d(n,i);return l(n.lastIndex,r)||(n.lastIndex=r),null===u?-1:u.index}]}))}}]);