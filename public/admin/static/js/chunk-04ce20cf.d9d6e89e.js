(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04ce20cf"],{"3d53":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},4686:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.clickCreate}},[e._v("添加Key")]),a("div",{staticStyle:{float:"right"}},[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"240px"},attrs:{placeholder:"key / 备注",size:"small",clearable:""},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.doSearch()}},slot:"append"})],1)],1)],1),a("el-table",{attrs:{data:e.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:"添加时间",width:"160"}}),a("el-table-column",{attrs:{prop:"key",label:"Key",width:"260"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"220"}}),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.setKeyState(t.row.id,a)}},model:{value:t.row.state,callback:function(a){e.$set(t.row,"state",a)},expression:"scope.row.state"}})]}}])}),a("el-table-column",{attrs:{prop:"stop_reason",label:"停用原因",width:"220"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),e.clickDel(t.row.id)}}},[e._v("删除 ")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.page,"page-size":e.pagesize,layout:"total, prev, pager, next",total:e.dataTotal},on:{"current-change":e.pageChange}}),e.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"添加key",visible:!0,width:"500px","close-on-click-modal":!1,"before-close":e.closeForm}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"key",prop:"key"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"填入openai的key，sk- 开头",size:"small"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{staticStyle:{width:"300px","max-width":"100%"},attrs:{type:"textarea",placeholder:"自定义备注",size:"small"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:e.closeForm}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("提 交")])],1)],1)],1):e._e()],1)},o=[],n=(a("c36d"),a("7a70"),a("b775"));function r(e){return Object(n["a"])({url:"/keys/getKeyList",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/keys/saveKey",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/keys/delKey",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/keys/setKeyState",method:"post",data:e})}var u={data:function(){return{type:"openai",form:null,search:{},dataList:[],dataTotal:0,page:1,pagesize:15,formRules:{key:[{required:!0,message:"此项必填",trigger:"blur"}]}}},created:function(){this.getKeyList()},methods:{getKeyList:function(){var e=this;r({page:this.page,pagesize:this.pagesize,keyword:this.search.keyword,type:this.type}).then((function(t){e.dataList=t.data.list,e.dataTotal=t.data.count}))},pageChange:function(e){this.page=e,this.getKeyList()},clickCreate:function(){this.form={}},closeForm:function(){this.form=null},doSubmit:function(e){var t=this;this.$refs.form.validate((function(e){e&&(t.form.type=t.type,i(t.form).then((function(e){t.page=1,t.getKeyList(),t.$message({message:e.message,type:"success",duration:1500}),t.closeForm()})))}))},clickDel:function(e){var t=this;this.$confirm("删除后不可找回，确定删除吗？","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){l({id:e}).then((function(e){e.errno?t.$message({message:e.message,type:"error"}):(t.getKeyList(),t.$message({message:e.message,type:"success",duration:1500}))}))}))},setKeyState:function(e,t){var a=this;c({id:e,state:t}).then((function(e){a.getKeyList(),a.$message({message:e.message,type:"success",duration:1500})}))},doSearch:function(){this.page=1,this.getKeyList()}}},d=u,p=(a("a8c5"),a("3427")),f=Object(p["a"])(d,s,o,!1,null,"78add60d",null);t["default"]=f.exports},"7a70":function(e,t,a){"use strict";var s=a("10b0"),o=a("e67f"),n=a("2f89"),r=a("4b5b"),i=a("57eb"),l=a("3d53"),c=a("f8b7"),u=a("5de4"),d=a("4f00");o("search",(function(e,t,a){return[function(t){var a=i(this),o=r(t)?void 0:u(t,e);return o?s(o,t,a):new RegExp(t)[e](c(a))},function(e){var s=n(this),o=c(e),r=a(t,s,o);if(r.done)return r.value;var i=s.lastIndex;l(i,0)||(s.lastIndex=0);var u=d(s,o);return l(s.lastIndex,i)||(s.lastIndex=i),null===u?-1:u.index}]}))},a6f4:function(e,t,a){},a8c5:function(e,t,a){"use strict";a("a6f4")}}]);