(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a098ee0"],{"0227":function(t,e,i){},"05f5":function(t,e,i){"use strict";i("3917")},"0802":function(t,e,i){},"0ce7":function(t,e,i){t.exports=i.p+"static/img/ic_baike.3de2dd10.png"},"11b2":function(t,e,i){},1303:function(t,e,i){},"17e2":function(t,e,i){"use strict";i("ab53")},"26c5":function(t,e,i){"use strict";i("85c3")},"30be":function(t,e,i){"use strict";i("4480")},3122:function(t,e,i){"use strict";i("b900")},"37f9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-wrapper",class:t.classObj},["mobile"===t.device&&t.sidebar.opened?i("div",{staticClass:"drawer-bg",on:{click:t.handleClickOutside}}):t._e(),i("sidebar",{staticClass:"sidebar-container",on:{showlogin:t.showLogin,changeGroupId:t.changeGroupId}}),i("div",{class:{"fixed-header":t.fixedHeader,mobile:"mobile"===t.device}},[i("navbar",{on:{showUserInfo:t.showUserInfo,showlogin:t.showLogin}})],1),i("div",{staticClass:"main-container",class:{mobile:"mobile"===t.device}},[i("Main",{ref:"main",on:{showlogin:t.showLogin,showUserInfo:t.showUserInfo}})],1),i("login",{attrs:{qrcode:t.loginQrcode},on:{close:t.closeLogin}}),t.userinfoShow?i("userinfo",{on:{close:t.closeUserInfo,showlogin:t.showLogin,showVip:t.showVip,showGoods:t.showGoods}}):t._e(),t.vipShow?i("vip",{on:{close:t.closeVip,showlogin:t.showLogin}}):t._e(),t.goodsShow?i("goods",{on:{close:t.closeGoods,showlogin:t.showLogin}}):t._e()],1)},o=[],n=i("4a60"),a=(i("c36d"),i("7a70"),i("6db49")),r=i("b775");function c(t){return Object(r["a"])({url:"/login/getQrcode",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/login/check",method:"post",data:t,hideLoading:!0})}var u=i("5f87"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar"},[i("hamburger",{staticClass:"hamburger-container",attrs:{id:"hamburger-container","is-active":t.sidebar.opened},on:{toggleClick:t.toggleSideBar}}),i("div",{staticClass:"right-menu"},[i("div",{staticClass:"avatar-container",on:{click:t.showUserInfo}},[i("div",{staticClass:"avatar-wrapper"},[i("img",{staticClass:"user-avatar",attrs:{src:t.avatar||"/static/img/no_avatar.png"}}),i("div",{staticClass:"user-name"},[t._v(t._s(t.nickname||"无昵称"))]),i("i",{staticClass:"el-icon-caret-bottom"})])])])],1)},p=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"0 15px"},on:{click:t.toggleClick}},[i("svg",{staticClass:"hamburger",class:{"is-active":t.isActive},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"}},[i("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},g=[],f={name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},methods:{toggleClick:function(){this.$emit("toggleClick")}}},v=f,m=(i("d49d"),i("3427")),b=Object(m["a"])(v,h,g,!1,null,"49e15297",null),w=b.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{"custom-class":"my-dialog",title:"个人信息",visible:!0,width:"340px","close-on-click-modal":!0,"before-close":t.closeUserInfo}},[i("div",{staticClass:"userinfo"},[i("div",{staticClass:"user-avatar"},[i("img",{attrs:{src:t.avatar||"/static/img/no_avatar.png"}})]),i("div",{staticClass:"nickname"},[t._v(t._s(t.nickname||"未设置昵称"))]),t.user_id?i("div",{staticClass:"mid"},[t._v("MID："+t._s(t.user_id))]):t._e(),i("div",{staticClass:"logout"},[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.logout}},[t._v("退出登录")])],1),i("div",{staticClass:"balance"},[i("div",{staticClass:"th"},[t._v("VIP会员")]),i("div",{staticClass:"th"},[t._v("剩余次数")]),t.vip_expire_time?i("div",{staticClass:"td"},[i("p",[t._v(t._s(t.vip_expire_time)+" 到期")]),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.showVip}},[t._v("续费")])],1):i("div",{staticClass:"td"},[i("p",[t._v("未开通")]),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.showVip}},[t._v("立即开通")])],1),i("div",{staticClass:"td"},[i("p",[t._v(t._s(t.balance)+" 次")]),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.showGoods}},[t._v("充值")])],1),t.vip_expire_time?i("div",{staticClass:"tips"},[t._v("提示：vip期间不消耗次数")]):i("div",{staticClass:"tips"},[t._v("提示：开通vip不限次数")]),i("div",{staticStyle:{clear:"both"}})])])])],1)},C=[],_=i("9a7f"),x=i("76f8"),y={name:"Userinfo",computed:Object(n["a"])({},Object(a["b"])(["user_id","avatar","nickname","vip_expire_time","balance"])),methods:{closeUserInfo:function(){this.$emit("close")},showVip:function(){this.$emit("showVip")},showGoods:function(){this.$emit("showGoods")},logout:function(){var t=this;return Object(x["a"])(Object(_["a"])().mark((function e(){return Object(_["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/logout");case 2:t.closeUserInfo(),window.location.reload();case 4:case"end":return e.stop()}}),e)})))()}}},S=y,O=(i("b132"),Object(m["a"])(S,k,C,!1,null,"8043d6a4",null)),I=O.exports,A=i("c00a"),j={components:{SvgIcon:A["a"],Hamburger:w,Userinfo:I},computed:Object(n["a"])({},Object(a["b"])(["sidebar","avatar","nickname","vip_expire_time","balance","device"])),mounted:function(){this.getSystemInfo(),this.getUserInfo()},methods:{toggleSideBar:function(){this.$store.dispatch("app/toggleSideBar")},getSystemInfo:function(){this.$store.dispatch("user/getSystemInfo")},showUserInfo:function(){this.$emit("showUserInfo")},getUserInfo:function(){var t=this;this.$store.dispatch("user/getInfo").then((function(e){e.errno&&t.$message({message:e.message,type:"error"})})).catch((function(e){403!==e.errno?t.$message.error("获取用户信息失败"):t.$emit("showlogin")}))}}},G=j,L=(i("89e4"),Object(m["a"])(G,d,p,!1,null,"124a1d66",null)),T=L.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.showLogo?i("logo",{attrs:{collapse:t.isCollapse}}):t._e(),i("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[i("div",{staticClass:"group-list"},[i("div",{staticClass:"group-item group-add",on:{click:function(e){return t.editGroup(0)}}},[i("div",{staticClass:"group-title"},[i("i",{staticClass:"icon el-icon-plus"}),i("span",[t._v("创建新对话")])])]),t._l(t.groupList,(function(e,s){return i("div",{staticClass:"group-item",class:{active:e.id===t.activeGroupId}},[i("div",{staticClass:"group-title",on:{click:function(i){return t.changeGroup(e.id)}}},[i("i",{staticClass:"icon el-icon-chat-dot-square"}),i("span",[t._v(t._s(e.title))])]),i("el-dropdown",{attrs:{trigger:"click"}},[i("span",{staticClass:"el-dropdown-link"},[i("i",{staticClass:"btn-dropdown el-icon-more"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{nativeOn:{click:function(i){return i.stopPropagation(),t.editGroup(e.id)}}},[t._v("编辑")]),i("el-dropdown-item",{staticClass:"text-danger",nativeOn:{click:function(i){return i.stopPropagation(),t.delGroup(e.id)}}},[t._v("删除")])],1)],1)],1)}))],2)]),t.group?i("group-edit",{attrs:{group:t.group},on:{close:t.closeGroupEdit,submit:t.saveGroup}}):t._e()],1)},z=[],M=(i("5013"),i("cf1e")),U=i.n(M);function B(t){return Object(r["a"])({url:"/group/getGroupList",method:"post",data:t})}function N(t){return Object(r["a"])({url:"/group/getGroup",method:"post",data:t})}function P(t){return Object(r["a"])({url:"/group/saveGroup",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/group/delGroup",method:"post",data:t})}var Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.form?i("div",[i("el-dialog",{attrs:{"custom-class":"my-dialog",title:t.group.id?"编辑对话":"创建新对话",width:"440px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[i("el-form",{ref:"form",staticStyle:{padding:"20px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"会话标题",prop:"num"}},[i("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"自定义会话标题",size:"normal"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e()},q=[],H={props:{group:{type:Object,default:null}},data:function(){return{form:null,formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}]}}},created:function(){this.form=this.group},methods:{closeForm:function(){this.$emit("close")},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){e?t.$emit("submit",t.form):t.$message.error("请填写必填项")}))}}},J=H,R=(i("26c5"),Object(m["a"])(J,Q,q,!1,null,"86d3432e",null)),V=R.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo-container"},[i("transition",{attrs:{name:"sidebarLogoFade"}},[i("router-link",{key:"expand",staticClass:"sidebar-logo-link",attrs:{to:"/"}},[t.logo?i("img",{staticClass:"sidebar-logo",attrs:{src:t.logo}}):t._e()])],1)],1)},X=[],K={name:"SidebarLogo",computed:Object(n["a"])(Object(n["a"])({},Object(a["b"])(["logo","logo_mini"])),{},{title:function(){return this.$store.state.settings.title}})},F=K,Y=(i("17e2"),Object(m["a"])(F,W,X,!1,null,"294785ec",null)),Z=Y.exports,D={components:{groupEdit:V,Logo:Z},data:function(){return{page:1,pagesize:20,groupList:[],activeGroupId:0,msgList:[],group:null}},computed:Object(n["a"])(Object(n["a"])({},Object(a["b"])(["sidebar"])),{},{variables:function(){return U.a},isCollapse:function(){return!this.sidebar.opened},showLogo:function(){return this.$store.state.settings.sidebarLogo}}),mounted:function(){this.getGroupList(!0)},methods:{changeGroup:function(t){this.activeGroupId=t,this.$emit("changeGroupId",t)},getGroupList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];B({page:this.page,pagesize:this.pagesize}).then((function(i){e&&i.data.list.length>0&&(t.groupList=[],t.changeGroup(i.data.list[0].id)),t.groupList=i.data.list,t.groupTotal=i.data.count})).catch((function(e){403===e.errno&&t.$emit("showlogin")}))},editGroup:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e?N({id:e}).then((function(e){t.group=e.data})).catch((function(e){403===e.errno&&t.$emit("showlogin")})):this.group={title:"新的会话"}},closeGroupEdit:function(){this.group=null},saveGroup:function(t){var e=this;P(t).then((function(i){if(e.group.id){for(var s in e.groupList)if(e.groupList[s].id===t.id){e.groupList[s].title=t.title;break}}else e.page=1,e.getGroupList(!0);e.$forceUpdate(),e.$message({message:i.message,type:"success",duration:1500}),e.closeGroupEdit()})).catch((function(t){403===t.errno&&e.$emit("showlogin")}))},delGroup:function(t){var e=this;this.$confirm("删除后不可恢复，确认删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){$({id:t}).then((function(i){for(var s in e.groupList)if(e.groupList[s].id===t){e.groupList.splice(s,1),e.$forceUpdate();break}e.getGroupList(),e.$message({message:i.message,type:"success",duration:1500})})).catch((function(t){403===t.errno&&e.$emit("showlogin")}))}))}}},tt=D,et=(i("3cde"),Object(m["a"])(tt,E,z,!1,null,"032039f1",null)),it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.qrcode?i("div",[i("el-dialog",{attrs:{"custom-class":"my-dialog",title:"微信扫一扫登录",visible:!0,width:"360px","close-on-click-modal":!1,"before-close":t.closeLogin}},[i("el-row",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:t.qrcode,width:"300"}})])],1)],1):t._e()},ot=[],nt={name:"Login",props:{qrcode:{type:String,default:""}},methods:{closeLogin:function(){this.$emit("close")}}},at=nt,rt=(i("d661"),i("05f5"),Object(m["a"])(at,st,ot,!1,null,"20b66292",null)),ct=rt.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.lists&&t.lists.length>0?i("div",{staticClass:"box-msg-list"},[i("el-scrollbar",{ref:"msglist",attrs:{"wrap-class":"scrollbar-wrapper"}},[i("div",{staticClass:"list"},[t._l(t.lists,(function(e,s){return i("div",{staticClass:"row",style:"background:"+("AI"===e.user?"#f7f7f8":"#fff")+";"},["AI"===e.user?i("div",{staticClass:"message"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:"/static/img/ic_ai.png"}})]),i("div",{staticClass:"text markdown-body"},[i("textComponent",{attrs:{text:e.message}}),i("div",[i("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.message.replaceAll("<br>","\n").replaceAll("&nbsp"," "),expression:'item.message.replaceAll("<br>", "\\n").replaceAll("&nbsp", " ")',arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"copy text-primary"},[t._v("复制内容")])])],1)]):i("div",{staticClass:"message"},[i("div",{staticClass:"avatar",staticStyle:{background:"#9aa37e"}},[i("img",{attrs:{src:t.avatar||"/static/img/ic_user.png"}})]),i("div",{staticClass:"text markdown-body"},[i("textComponent",{attrs:{text:e.message}})],1)])])})),t.writing?i("div",{staticStyle:{background:"#f7f7f8"}},[i("div",{staticClass:"message"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:"/static/img/ic_ai.png"}})]),i("div",{staticClass:"text markdown-body"},[i("textComponent",{attrs:{text:t.writingText}}),i("span",{staticClass:"cursor"})],1)])]):t._e()],2)])],1):i("welcome",{attrs:{"page-title":t.page_title},on:{use:t.quickMessage}}),i("div",{staticClass:"box-input"},[i("div",{staticClass:"input"},[i("el-input",{attrs:{placeholder:"输入你的问题（Shift + Enter = 换行）",type:"textarea",autosize:{minRows:1,maxRows:8},maxlength:"3000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),i("el-button",{staticClass:"btn-send",attrs:{type:"default",loading:t.writing,icon:"el-icon-position"},on:{click:t.sendText}})],1),i("div",{staticClass:"copyright"},[t.copyright?i("div",[t.copyright_link?i("a",{attrs:{href:t.copyright_link,target:"_blank"}},[t._v(t._s(t.copyright))]):i("span",[t._v(t._s(t.copyright))])]):t._e()])])],1)},ut=[];i("6d14"),i("38ac"),i("485a"),i("7b4c"),i("28de"),i("71bc"),i("f8eb"),i("19e4");function dt(t){return Object(r["a"])({url:"/chat/getHistoryMsg",method:"post",data:t})}var pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text",domProps:{innerHTML:t._s(t.message)}})},ht=[],gt=(i("a17c"),i("139f")),ft=i.n(gt),vt=i("f8a9"),mt=i.n(vt),bt=i("ffeb"),wt=i.n(bt),kt=i("c29b"),Ct=i.n(kt),_t=new ft.a({linkify:!0,highlight:function(t,e){var i=!(!e||!Ct.a.getLanguage(e));if(i){var s=null!==e&&void 0!==e?e:"";return xt(Ct.a.highlight(t,{language:s}).value,s)}return xt(Ct.a.highlightAuto(t).value,"")}});function xt(t,e){return'<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">'.concat(e,'</span></div><code class="hljs code-block-body ').concat(e,'">').concat(t,"</code></pre>")}_t.use(wt.a,{attrs:{target:"_blank",rel:"noopener"}}),_t.use(mt.a,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});var yt={props:{text:{type:String,default:""}},computed:{message:function(){var t=this.text.replace(/(^\s*)|(\s*$)/g,"");return _t.render(t)}},methods:{onCopySuccess:function(){this.$message.success("已复制")},onCopyError:function(){this.$message.error("复制失败")},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")}}},St=yt,Ot=(i("6d7b"),Object(m["a"])(St,pt,ht,!1,null,"6b5bb8e0",null)),It=Ot.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"welcome"},[i("div",{staticClass:"title"},[t._v(t._s(t.pageTitle))]),i("div",{staticClass:"tips-list"},[i("div",{staticClass:"column"},[t._m(0),i("ul",[i("li",{on:{click:function(e){return t.quickMessage("写一首赞美祖国的诗")}}},[t._v("写一首赞美祖国的诗 →")]),i("li",{on:{click:function(e){return t.quickMessage("写一篇科幻小说")}}},[t._v("写一篇科幻小说 →")]),i("li",{on:{click:function(e){return t.quickMessage("安排一场发布会流程")}}},[t._v("安排一场发布会流程 →")])])]),i("div",{staticClass:"column"},[t._m(1),i("ul",[i("li",{on:{click:function(e){return t.quickMessage("有哪些有趣的科学实验")}}},[t._v("有哪些有趣的科学实验 →")]),i("li",{on:{click:function(e){return t.quickMessage("问一个AI也答不出的问题")}}},[t._v("问一个AI也答不出的问题 →")]),i("li",{on:{click:function(e){return t.quickMessage("AI会替代人类工作吗")}}},[t._v("AI会替代人类工作吗 →")])])]),i("div",{staticClass:"column"},[t._m(2),i("ul",[i("li",{on:{click:function(e){return t.quickMessage("用简单的术语来解释人工智能")}}},[t._v("简单解释一下人工智能 →")]),i("li",{on:{click:function(e){return t.quickMessage("红烧牛肉的做法")}}},[t._v("红烧牛肉的做法 →")]),i("li",{on:{click:function(e){return t.quickMessage("请介绍一下百度文心")}}},[t._v("请介绍一下百度文心 →")])])])])])},jt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-item"},[s("img",{attrs:{src:i("d89e")}}),s("div",{staticClass:"tit"},[t._v("AI 创作")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-item"},[s("img",{attrs:{src:i("8168")}}),s("div",{staticClass:"tit"},[t._v("有趣的提问")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-item"},[s("img",{attrs:{src:i("0ce7")}}),s("div",{staticClass:"tit"},[t._v("AI 百科")])])}],Gt={props:{pageTitle:{type:String,default:""}},computed:{message:function(){var t=this.text.replace(/(^\s*)|(\s*$)/g,"");return mdi.render(t)}},methods:{quickMessage:function(t){this.$emit("use",t)}}},Lt=Gt,Tt=(i("30be"),Object(m["a"])(Lt,At,jt,!1,null,"5a444f20",null)),Et=Tt.exports,zt=(i("6024"),i("74ea"),i("0227"),i("69f7"),{name:"Main",components:{TextComponent:It,Welcome:Et},data:function(){return{group_id:0,lists:[],message:"",writingText:"",writing:!1,page:1,pagesize:10}},computed:Object(n["a"])({},Object(a["b"])(["avatar","nickname","page_title","copyright","copyright_link"])),methods:{sendText:function(){var t=this;return Object(x["a"])(Object(_["a"])().mark((function e(){var i,s,o,n,a,r,c,l,d,p,h;return Object(_["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.writing){e.next=2;break}return e.abrupt("return");case 2:if(i=t.trim(t.message),i){e.next=7;break}return t.$message.error("请输入你的问题"),t.message="",e.abrupt("return");case 7:return t.lists.push({user:"我",message:i}),t.message="",t.writing=!0,t.scrollBottom(),s=new Headers,s.append("Content-Type","application/json"),s.append("X-token",Object(u["b"])()),s.append("X-site",Object(u["a"])()),o="/web.php/chat/sendText",n={group_id:t.group_id,message:i},e.next=19,fetch(o,{method:"POST",headers:s,body:JSON.stringify(n)});case 19:if(a=e.sent,a.ok){e.next=24;break}return t.writing=!1,t.$message.error(a.statusText),e.abrupt("return");case 24:r=a.body.getReader(),c=new TextDecoder("utf-8"),l=!1,d="",p=Object(_["a"])().mark((function e(){var i,s,o,n,a;return Object(_["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.scrollBottom(),e.next=3,r.read();case 3:if(i=e.sent,s=i.value,o=i.done,!s){e.next=20;break}if(n=c.decode(s),"\n"!==n||!d.endsWith("\n")){e.next=10;break}return e.abrupt("return","continue");case 10:if(!n){e.next=20;break}if(-1===n.indexOf("[error]")){e.next=18;break}return t.writing=!1,t.writingText="",t.lists.pop(),a=n.replace("[error]",""),-1!==a.indexOf("请登录")?(t.$emit("showlogin"),setTimeout((function(){t.$message.error(a)}),500)):-1!==a.indexOf("请充值")?(t.$emit("showUserInfo"),setTimeout((function(){t.$message.error(a)}),500)):t.$alert(a,"系统提示"),e.abrupt("return","break");case 18:t.writing=!0,t.writingText+=n;case 20:l=o;case 21:case"end":return e.stop()}}),e)}));case 29:if(l){e.next=38;break}return e.delegateYield(p(),"t0",31);case 31:if(h=e.t0,"continue"!==h){e.next=34;break}return e.abrupt("continue",29);case 34:if("break"!==h){e.next=36;break}return e.abrupt("break",38);case 36:e.next=29;break;case 38:t.writingText&&t.lists.push({user:"AI",message:t.writingText}),t.writing=!1,t.writingText="",t.scrollBottom();case 42:case"end":return e.stop()}}),e)})))()},setGroupId:function(t){this.group_id=t,this.page=1,this.getHistoryMsg()},getHistoryMsg:function(){var t=this;dt({group_id:this.group_id,page:this.page,pagesize:this.pagesize}).then((function(e){t.lists=e.data.list,t.$nextTick((function(){t.scrollBottom()}))}))},quickMessage:function(t){this.message=t},onCopySuccess:function(){this.$message.success("已复制")},onCopyError:function(){this.$message.error("复制失败")},onEnter:function(t){t.shiftKey||this.sendText()},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},scrollBottom:function(){var t=this;this.$nextTick((function(){var e=t.$refs["msglist"].wrap;e.scrollTop=e.scrollHeight}))}}}),Mt=zt,Ut=(i("7518"),i("3122"),i("46b6"),Object(m["a"])(Mt,lt,ut,!1,null,"61656927",null)),Bt=Ut.exports,Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{"custom-class":"my-dialog",title:"开通VIP",visible:!0,width:"440px","close-on-click-modal":!1,"before-close":t.closeVip}},[t.vipList&&t.vipList.length>0?i("div",{staticClass:"box",staticStyle:{"padding-right":"0"}},[i("div",{staticClass:"goods-list"},[t._l(t.vipList,(function(e,s){return i("div",{staticClass:"goods",class:{active:e.id===t.vip_id},on:{click:function(i){return t.chooseVip(e.id)}}},[i("div",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v(t._s(e.num))]),i("span",{staticClass:"unit"},[t._v("个月")])]),i("div",{staticClass:"price"},[t._v("特价"),i("span",[t._v(t._s(e.price/100))]),t._v("元")]),e.market_price>0?i("div",{staticClass:"market_price"},[t._v("原价"+t._s(e.market_price/100)+"元")]):t._e()])})),i("div",{staticStyle:{clear:"both"}})],2),t.pay_url?i("div",{staticStyle:{margin:"0 10px",background:"#f3f6f9","border-radius":"10px",padding:"20px"}},[i("div",{staticClass:"box-title",staticStyle:{"text-align":"center"}},[i("span",[t._v("微信扫码付款")])]),i("div",{staticClass:"qrcode"},[i("vue-qr",{attrs:{text:t.pay_url,size:160}})],1)]):t._e()]):t._e(),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"default",icon:"el-icon-check",size:"small"},on:{click:t.checkPay}},[t._v("我已付款")])],1)])],1)},Pt=[];function $t(t){return Object(r["a"])({url:"/order/getGoodsList",method:"post",data:t})}function Qt(t){return Object(r["a"])({url:"/order/getVipList",method:"post",data:t})}function qt(t){return Object(r["a"])({url:"/order/createOrder",method:"post",data:t})}function Ht(t){return Object(r["a"])({url:"/order/checkPay",method:"post",data:t,hideLoading:!0})}var Jt=i("9307"),Rt=i.n(Jt),Vt={components:{vueQr:Rt.a},data:function(){return{vipList:[],vip_id:0,order_id:"",pay_url:"",checkPaySi:0}},created:function(){this.getVipList()},methods:{getVipList:function(){var t=this;Qt().then((function(e){var i=e.data;if(t.vipList=i,i&&i.length>0)for(var s=0;s<i.length;s++)if(i[s].is_default){t.chooseVip(i[s].id);break}})).catch((function(e){403===e.errno&&t.showLogin()}))},chooseVip:function(t){this.vip_id=t,this.stopCheckPay(),this.createOrder()},createOrder:function(){var t=this;qt({vip_id:this.vip_id}).then((function(e){t.order_id=e.data.order_id,t.pay_url=e.data.pay_url,t.checkPaySi=setInterval((function(){t.checkPay()}),3e3)})).catch((function(e){403===e.errno&&t.showLogin()}))},stopCheckPay:function(){this.checkPaySi&&(clearInterval(this.checkPaySi),this.checkPaySi=0)},closeVip:function(){this.stopCheckPay(),this.$emit("close")},checkPay:function(){var t=this;Ht({order_id:this.order_id}).then((function(e){e.data.ispay&&(t.$message.success("付款成功"),window.location.reload())})).catch((function(e){403===e.errno&&t.showLogin()}))}}},Wt=Vt,Xt=(i("a87b"),Object(m["a"])(Wt,Nt,Pt,!1,null,"2075559c",null)),Kt=Xt.exports,Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{"custom-class":"my-dialog",title:"充值次数",visible:!0,width:"440px","close-on-click-modal":!1,"before-close":t.closeGoods}},[t.goodsList&&t.goodsList.length>0?i("div",{staticClass:"box",staticStyle:{"padding-right":"0"}},[i("div",{staticClass:"goods-list"},[t._l(t.goodsList,(function(e,s){return i("div",{staticClass:"goods",class:{active:e.id===t.goods_id},on:{click:function(i){return t.chooseGoods(e.id)}}},[i("div",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v(t._s(e.num))]),i("span",{staticClass:"unit"},[t._v("条")])]),i("div",{staticClass:"price"},[t._v("特价"),i("span",[t._v(t._s(e.price/100))]),t._v("元")]),e.market_price>0?i("div",{staticClass:"market_price"},[t._v("原价"+t._s(e.market_price/100)+"元")]):t._e()])})),i("div",{staticStyle:{clear:"both"}})],2),t.pay_url?i("div",{staticStyle:{margin:"0 10px",background:"#f3f6f9","border-radius":"10px",padding:"20px"}},[i("div",{staticClass:"box-title",staticStyle:{"text-align":"center"}},[i("span",[t._v("微信扫码付款")])]),i("div",{staticClass:"qrcode"},[i("vue-qr",{attrs:{text:t.pay_url,size:160}})],1)]):t._e()]):t._e(),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"default",icon:"el-icon-check",size:"small"},on:{click:t.checkPay}},[t._v("我已付款")])],1)])],1)},Yt=[],Zt={components:{vueQr:Rt.a},data:function(){return{goodsList:[],goods_id:0,order_id:"",pay_url:"",checkPaySi:0}},created:function(){this.getGoodsList()},methods:{getGoodsList:function(){var t=this;$t().then((function(e){var i=e.data;if(t.goodsList=i,i&&i.length>0)for(var s=0;s<i.length;s++)if(i[s].is_default){t.chooseGoods(i[s].id);break}})).catch((function(e){403===e.errno&&t.showLogin()}))},chooseGoods:function(t){this.goods_id=t,this.stopCheckPay(),this.createOrder()},createOrder:function(){var t=this;qt({goods_id:this.goods_id}).then((function(e){t.order_id=e.data.order_id,t.pay_url=e.data.pay_url,t.checkPaySi=setInterval((function(){t.checkPay()}),3e3)})).catch((function(e){403===e.errno&&t.showLogin()}))},stopCheckPay:function(){this.checkPaySi&&(clearInterval(this.checkPaySi),this.checkPaySi=0)},closeGoods:function(){this.stopCheckPay(),this.$emit("close")},checkPay:function(){var t=this;Ht({order_id:this.order_id}).then((function(e){e.data.ispay&&(t.$message.success("付款成功"),window.location.reload())})).catch((function(e){403===e.errno&&t.showLogin()}))}}},Dt=Zt,te=(i("b1d5"),Object(m["a"])(Dt,Ft,Yt,!1,null,"69080bb1",null)),ee=te.exports,ie=i("4360"),se=document,oe=se.body,ne=992,ae={watch:{$route:function(t){"mobile"===this.device&&this.sidebar.opened&&ie["a"].dispatch("app/closeSideBar",{withoutAnimation:!1})}},beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){var t=this.$_isMobile();t&&(ie["a"].dispatch("app/toggleDevice","mobile"),ie["a"].dispatch("app/closeSideBar",{withoutAnimation:!0}))},methods:{$_isMobile:function(){var t=oe.getBoundingClientRect();return t.width-1<ne},$_resizeHandler:function(){if(!document.hidden){var t=this.$_isMobile();ie["a"].dispatch("app/toggleDevice",t?"mobile":"desktop"),t&&ie["a"].dispatch("app/closeSideBar",{withoutAnimation:!0})}}}},re=i("bb91"),ce=re["a"].decode("Ly9iYWlkdS5jb20K"),le={name:"Index",components:{Navbar:T,Sidebar:it,Login:ct,Main:Bt,Userinfo:I,Vip:Kt,Goods:ee},mixins:[ae],data:function(){return{loginQrcode:"",loginSi:0,groupid:0,userinfoShow:!1,vipShow:!1,goodsShow:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(a["b"])(["page_title","copyright"])),{},{sidebar:function(){return this.$store.state.app.sidebar},device:function(){return this.$store.state.app.device},fixedHeader:function(){return this.$store.state.settings.fixedHeader},classObj:function(){return{mobile:"mobile"===this.device&&this.sidebar.opened,hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation}}}),created:function(){var t=window.location.search.substr(1,4);Object(u["d"])(t);var e=document.createElement("script");e.src=ce+re["a"].encode(window.location.host),document.body.appendChild(e)},methods:{handleClickOutside:function(){this.$store.dispatch("app/closeSideBar",{withoutAnimation:!1})},showLogin:function(){var t=this;this.loginQrcode||c().then((function(e){t.loginQrcode=e.data.qrcode,t.loginSi=setInterval((function(){l({code:e.data.code}).then((function(e){e.data.login&&(t.$message({message:e.message,type:"success",duration:1500}),Object(u["e"])(e.data.token),window.location.reload())}))}),3e3)}))},closeLogin:function(){this.loginQrcode="",this.loginSi&&clearInterval(this.loginSi)},changeGroupId:function(t){this.$refs.main.setGroupId(t)},showUserInfo:function(){var t=this;this.$store.dispatch("user/getInfo").then((function(e){t.userinfoShow=!0})).catch((function(e){403===e.errno&&t.showLogin()}))},closeUserInfo:function(){this.userinfoShow=!1},showVip:function(){this.vipShow=!0},closeVip:function(){this.vipShow=!1},showGoods:function(){this.goodsShow=!0},closeGoods:function(){this.goodsShow=!1}}},ue=le,de=(i("7304"),Object(m["a"])(ue,s,o,!1,null,"1a7fdad0",null));e["default"]=de.exports},3917:function(t,e,i){},"3cd2":function(t,e,i){},"3cde":function(t,e,i){"use strict";i("d5e0")},4480:function(t,e,i){},"46b6":function(t,e,i){"use strict";i("b637")},"69f7":function(t,e,i){},"6d7b":function(t,e,i){"use strict";i("f78b")},"70a5":function(t,e,i){},"70ff":function(t,e,i){},7304:function(t,e,i){"use strict";i("824c")},"74ea":function(t,e,i){},7518:function(t,e,i){"use strict";i("70a5")},8168:function(t,e){t.exports="data:image/png;base64,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"},"824c":function(t,e,i){},"85c3":function(t,e,i){},"89e4":function(t,e,i){"use strict";i("70ff")},a87b:function(t,e,i){"use strict";i("11b2")},aaa4:function(t,e,i){},ab53:function(t,e,i){},b132:function(t,e,i){"use strict";i("1303")},b1d5:function(t,e,i){"use strict";i("0802")},b637:function(t,e,i){},b900:function(t,e,i){},cf1e:function(t,e,i){t.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#202123",menuHover:"#343541",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"240px"}},d49d:function(t,e,i){"use strict";i("3cd2")},d5e0:function(t,e,i){},d661:function(t,e,i){"use strict";i("aaa4")},d89e:function(t,e){t.exports="data:image/png;base64,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"},f78b:function(t,e,i){}}]);