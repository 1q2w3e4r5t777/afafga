(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e7e656d"],{"596e":function(t,e,a){},a7e0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("div",[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"320px"},attrs:{placeholder:"联系方式 / 关键词",size:"small",clearable:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)]),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"create_time",label:"留言时间",width:"150"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:t.row.avatar,target:"_blank"}},[a("img",{staticStyle:{height:"36px"},attrs:{src:t.row.avatar}})])]}}])}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"160"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"留言类型",width:"120"}}),a("el-table-column",{attrs:{label:"留言内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.content)+" ")]}}])}),a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.state?a("el-button",{attrs:{type:"primary",size:"mini",plain:"",title:"点击设为已处理"},on:{click:function(a){return t.setState(e.row.id)}}},[t._v("未处理")]):a("el-button",{attrs:{disabled:!0,type:"success",size:"mini",plain:""}},[t._v("已处理")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)},i=[],s=a("b775");function l(t){return Object(s["a"])({url:"/feedback/getList",method:"post",data:t})}function o(t){return Object(s["a"])({url:"/feedback/setState",method:"post",data:t})}function r(t){return Object(s["a"])({url:"/feedback/del",method:"post",data:t})}var c={data:function(){return{dataList:[],dataTotal:0,keyword:"",page:1,pagesize:15}},created:function(){this.getList()},methods:{getList:function(){var t=this;l({page:this.page,pagesize:this.pagesize,keyword:this.keyword}).then((function(e){var a=e.data;t.dataList=a.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},setState:function(t){var e=this;this.$confirm("确定设置为已处理吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},doDel:function(t){var e=this;this.$confirm("删除后不可恢复，确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){r({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))}}},u=c,d=(a("f554"),a("3427")),p=Object(d["a"])(u,n,i,!1,null,"0a701845",null);e["default"]=p.exports},f554:function(t,e,a){"use strict";a("596e")}}]);