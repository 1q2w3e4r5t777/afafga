(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-write-chat"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}},n("d3b7")},"4a42":function(t,e,n){"use strict";n.r(e);var r=n("f26c"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"5b81":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),a=n("e330"),o=n("1d80"),s=n("1626"),c=n("7234"),u=n("44e7"),l=n("577e"),d=n("dc4a"),f=n("90d8"),p=n("0cb2"),h=n("b622"),g=n("c430"),v=h("replace"),b=TypeError,m=a("".indexOf),w=a("".replace),y=a("".slice),x=Math.max,k=function(t,e,n){return n>t.length?-1:""===e?n:m(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,a,h,_,T,L,S,E,C=o(this),j=0,O=0,D="";if(!c(t)){if(n=u(t),n&&(r=l(o(f(t))),!~m(r,"g")))throw b("`.replaceAll` does not allow non-global regexes");if(a=d(t,v),a)return i(a,t,C,e);if(g&&n)return w(l(C),t,e)}h=l(C),_=l(t),T=s(e),T||(e=l(e)),L=_.length,S=x(1,L),j=k(h,_,0);while(-1!==j)E=T?l(e(_,j,h)):p(_,h,j,[],void 0,e),D+=y(h,O,j)+E,O=j+L,j=k(h,_,j+S);return O<h.length&&(D+=y(h,O)),D}})},8575:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"100%"}},[t.pageIsLoad?n("v-uni-view",{staticClass:"page"},[t.lists&&t.lists.length>0?n("v-uni-scroll-view",{staticClass:"box-msg-list",style:"bottom: "+(t.inputShow?"316rpx":"102rpx")+";",attrs:{"scroll-x":!1,"scroll-y":!0,"scroll-with-animation":!1,"scroll-top":t.scrollTop}},[n("v-uni-view",{staticClass:"list"},[t._l(t.lists,(function(e,r){return["AI"==e.user?n("v-uni-view",{key:r+"_0",staticClass:"message",staticStyle:{background:"#f7f7f8"},attrs:{"data-index":r}},[n("v-uni-view",{staticClass:"avatar"},[n("img",{attrs:{mode:"widthFix",src:"/static/img/ic_ai.png"}})]),n("v-uni-view",{staticClass:"text markdown-body"},[n("textComponent",{attrs:{text:e.message}}),n("v-uni-view",{staticStyle:{display:"block"}},[n("span",{staticClass:"btn-copy",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyText(e.message)}}},[t._v("复制内容")])])],1)],1):n("v-uni-view",{staticClass:"message",staticStyle:{background:"#fff"},attrs:{"data-index":r},on:{longpress:function(n){arguments[0]=n=t.$handleEvent(n),t.copyText(e.message)}}},[n("v-uni-view",{staticClass:"avatar",staticStyle:{background:"#9aa37e"}},[n("img",{attrs:{mode:"widthFix",src:"/static/img/ic_user.png"}})]),n("v-uni-view",{staticClass:"text markdown-body"},[n("textComponent",{attrs:{text:e.message}})],1)],1)]})),t.writing||t.writingText?n("v-uni-view",{staticClass:"message",staticStyle:{background:"#f7f7f8"}},[n("v-uni-view",{staticClass:"avatar"},[n("img",{attrs:{src:"/static/img/ic_ai.png"}})]),n("v-uni-view",{staticClass:"text markdown-body"},[n("textComponent",{attrs:{text:t.writingText,writing:!(!t.writing&&!t.writingText)}})],1)],1):t._e()],2)],1):t._e(),n("v-uni-view",{staticClass:"box-input",style:"bottom: "+(t.inputShow?"0":"-204rpx")+";"},[n("v-uni-view",{staticClass:"tools"},[t._l(t.langs,(function(e,r){return n("v-uni-view",{staticClass:"item",class:{active:e===t.lang},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeLang(e)}}},[n("v-uni-text",[t._v(t._s(e))]),n("v-uni-image",{staticClass:"ic_sj",attrs:{src:"/static/images/write/ic_sj.png"}})],1)})),n("v-uni-view",{staticClass:"item close",style:"transform: rotate("+(t.inputShow?"180":0)+"deg);",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showInput.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"32rpx",height:"32rpx"},attrs:{src:"/static/images/write/ic_up.png"}})],1)],2),n("v-uni-view",{staticClass:"input"},[n("v-uni-textarea",{attrs:{type:"text",fixed:!0,contenteditable:!0,"auto-height":!0,placeholder:t.prompt.hint,maxlength:"3000","cursor-spacing":"0"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),n("v-uni-button",{staticClass:"btn-send",attrs:{type:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendText.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"/static/images/ic_send.png"}})],1)],1)],1)],1):t._e()],1)},i=[]},"8a79":function(t,e,n){"use strict";var r=n("23e7"),i=n("4625"),a=n("06cf").f,o=n("50c4"),s=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),d=n("c430"),f=i("".endsWith),p=i("".slice),h=Math.min,g=l("endsWith"),v=!d&&!g&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!v&&!g},{endsWith:function(t){var e=s(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:h(o(n),r),a=s(t);return f?f(e,a,i):p(e,i-a.length,i)===a}})},"8f61":function(t,e,n){"use strict";n.r(e);var r=n("8575"),i=n("4a42");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("d2cd");var o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"04c14be2",null,!1,r["a"],void 0);e["default"]=s.exports},"93a9":function(t,e,n){var r=n("f794");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("4cfe5578",r,!0,{sourceMap:!1,shadowMode:!1})},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),s=new E(r||[]);return a(o,"_invoke",{value:_(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=d;var p={};function h(){}function g(){}function v(){}var b={};l(b,s,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(C([])));w&&w!==n&&i.call(w,s)&&(b=w);var y=v.prototype=h.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;a(this,"_invoke",{value:function(a,o){function s(){return new e((function(n,s){(function n(a,o,s,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==(0,r.default)(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)})(a,o,n,s)}))}return n=n?n.then(s,s):s()}})}function _(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return j()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=T(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function T(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return g.prototype=v,a(y,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:g,configurable:!0}),g.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new k(d(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(y),l(y,u,"Generator"),l(y,s,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},d2cd:function(t,e,n){"use strict";var r=n("93a9"),i=n.n(r);i.a},f26c:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("ade3")),a=r(n("c7eb")),o=r(n("1da1"));n("ac1f"),n("5319"),n("498a"),n("14d9"),n("d3b7"),n("e9c4"),n("8a79"),n("c975"),n("e25e"),n("5b81");var s,c=r(n("44fb"));n("fd1e8"),n("279a"),n("a7eb"),n("40d3");var u=getApp(),l=[],d=0,f={components:{TextComponent:c.default},data:function(){return{pageIsLoad:!1,siteroot:"",lists:[],message:"",writingText:"",writing:!1,page:1,pagesize:10,scrollTop:0,prompt:{},lang:"简体中文",langs:["简体中文","繁体中文","English"],inputShow:!0}},onLoad:function(t){this.onLoadClone(t)},methods:(s={onLoadClone:function(t){var e=this;t.sid&&uni.setStorageSync("sid",t.sid),t.prompt_id&&this.setData({prompt_id:t.prompt_id}),this.setData({system:u.globalData.system,siteroot:u.globalData.siteroot.replace("/web.php","")}),u.globalData.util.checkLogin().then((function(){e.getPrompt(),e.getHistoryMsg(),e.setData({pageIsLoad:!0})}))},sendText:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n,r,i,o,s,c,f,p,h,g,v,b,m,w,y;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.writing){e.next=2;break}return e.abrupt("return");case 2:if(n=t.trim(t.message),n){e.next=12;break}if(!t.prompt.hint){e.next=9;break}t.message=t.prompt.hint,n=t.message,e.next=12;break;case 9:return u.globalData.util.message("请输入你的问题"),t.message="",e.abrupt("return");case 12:return d&&(clearInterval(d),d=0,l=[]),t.lists.push({user:"我",message:n}),t.message="",t.writing=!0,t.scrollToBottom(),r=new Headers,r.append("Content-Type","application/json"),r.append("X-site",uni.getStorageSync("sitecode")),i=t.siteroot+"/web.php/chat/sendText",o={prompt_id:t.prompt_id,message:n},e.next=24,fetch(i,{method:"POST",headers:r,body:JSON.stringify(o)});case 24:if(s=e.sent,s.ok){e.next=29;break}return t.writing=!1,u.globalData.util.message(s.statusText),e.abrupt("return");case 29:c=s.body.getReader(),f=new TextDecoder("utf-8"),p=!1,h="",d=setInterval((function(){l.length>0?(t.writingText+=l.shift(),t.scrollBottom()):t.writing||(clearInterval(d),d=0,t.writingText&&t.lists.push({user:"AI",message:t.writingText}),t.writingText="",setTimeout((function(){t.scrollToBottom()}),500))}),50);case 34:if(p){e.next=55;break}return t.scrollToBottom(),e.next=38,c.read();case 38:if(g=e.sent,v=g.value,b=g.done,!v){e.next=52;break}if(m=f.decode(v),"\n"!==m||!h.endsWith("\n")){e.next=45;break}return e.abrupt("continue",34);case 45:if(!m){e.next=52;break}if(-1===m.indexOf("[error]")){e.next=50;break}if(w=function(){t.writing=!1,t.writingText="",t.lists.pop();var e=m.replace("[error]","");return-1!==e.indexOf("请登录")?(t.$emit("showlogin"),setTimeout((function(){u.globalData.util.message(e)}),500)):-1!==e.indexOf("请充值")?u.globalData.util.message(e,"error",(function(){uni.navigateTo({url:"/pages/pay/vip"})})):u.globalData.util.message(e,"error"),"break"}(),"break"!==w){e.next=50;break}return e.abrupt("break",55);case 50:for(t.writing=!0,y=0;y<m.length;y++)l.push(m[y]);case 52:p=b,e.next=34;break;case 55:t.writing=!1;case 56:case"end":return e.stop()}}),e)})))()},showInput:function(){var t=this;this.inputShow=!this.inputShow,setTimeout((function(){t.scrollBottom()}),300)},changeLang:function(t){this.lang=t,u.globalData.util.message("已切换为【"+t+"】输出"),this.inputShow=!0},getHistoryMsg:function(){var t=this;u.globalData.util.request({url:"/write/getHistoryMsg",data:{prompt_id:this.prompt_id,page:this.page,pagesize:this.pagesize}}).then((function(e){e.data.length>0&&t.setData({lists:e.data}),setTimeout((function(){t.scrollToBottom()}),500)}))},getPrompt:function(){var t=this;u.globalData.util.request({url:"/write/getPrompt",data:{prompt_id:this.prompt_id}}).then((function(e){t.setData({prompt:e.data}),document.title=e.data.title}))},scrollToBottom:function(){var t=this;setTimeout((function(){var e=uni.createSelectorQuery().in(t);e.select(".list").boundingClientRect((function(e){t.setData({scrollTop:parseInt(e.height)})})),e.exec((function(t){}))}),100)},copyText:function(t){var e=t.currentTarget.dataset.index,n=this.lists,r=n[e].message;r=r.join("\n"),r=r.replaceAll("&nbsp;"," "),uni.setClipboardData({data:r})},getShareId:function(t){var e=this;return(0,o.default)((0,a.default)().mark((function n(){var r;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=0,n.next=3,u.globalData.util.request({url:"/wxapp/doShare",data:{way:t}}).then((function(n){r=n.data.share_id,"timeline"==t&&e.setData({timeline_share_id:r})}));case 3:return n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()}},(0,i.default)(s,"copyText",(function(t){var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",e.style="width:0;height:0;",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length),u.globalData.util.message("已复制"),document.execCommand("copy"),e.remove()})),(0,i.default)(s,"trim",(function(t){return t?t.replace(/(^\s*)|(\s*$)/g,""):""})),s)};e.default=f},f794:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"uni-page-body[data-v-04c14be2]{background:#f7f7f7}body.?%PAGE?%[data-v-04c14be2]{background:#f7f7f7}.box-input[data-v-04c14be2]{width:100%;height:auto;padding:0 %?30?%;border-top:1px solid #d8d8e2;background:#f6fafc;box-sizing:border-box;position:absolute;left:0;bottom:0;z-index:2;transition:all .3s}.box-input .tools[data-v-04c14be2]{width:100%;height:%?72?%;margin-bottom:%?10?%;box-sizing:border-box;margin-top:%?30?%}.box-input .tools .item[data-v-04c14be2]{width:auto;height:%?56?%;line-height:%?56?%;background:#fff;font-size:%?24?%;border-radius:%?10?%;border:1px solid #ddd;color:#444;float:left;margin-right:%?20?%;position:relative;overflow:visible;padding:0 %?20?%}.box-input .tools .item .ic_sj[data-v-04c14be2]{width:%?24?%;height:%?12?%;position:absolute;left:50%;margin-left:%?-12?%;bottom:%?-12?%;display:none}.box-input .tools .item.active[data-v-04c14be2]{border-color:#04babe}.box-input .tools .item.active .ic_sj[data-v-04c14be2]{display:block}.box-input .tools .item[data-v-04c14be2]:active{background-color:#fafafa}.box-input .tools .close[data-v-04c14be2]{float:right;margin-right:0;background:none;border:none;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:flex;align-items:center;justify-content:center;transition:all .5s}.box-input .input[data-v-04c14be2]{width:100%;position:relative;box-sizing:border-box;background:#fff;border:1px solid #ddd;border-radius:%?10?%;overflow:hidden;transition:all 1s;margin-bottom:%?40?%}.box-input .input uni-textarea[data-v-04c14be2]{width:100%;height:%?240?%;min-height:%?120?%;max-height:%?600?%;padding:%?20?% %?10?% %?20?% %?20?%;border-radius:%?10?%;line-height:%?40?%;box-sizing:border-box;outline:none;border:none;resize:none;overflow:auto}.box-input .input .btn-send[data-v-04c14be2]{position:absolute;right:0;bottom:0;width:%?80?%;height:%?80?%;padding:0;border:none;border-radius:%?10?%;background:none;display:flex;align-items:center;justify-content:center;z-index:9;background:#fff}.box-input .input .btn-send[data-v-04c14be2]::after{display:none}.box-input .input .btn-send[data-v-04c14be2]:active{background:#f2f2f2}.box-input .input .btn-send uni-image[data-v-04c14be2]{width:%?40?%;height:%?40?%}.page[data-v-04c14be2]{width:100%;overflow:hidden;display:flex;flex-direction:column;position:absolute;left:0;right:0;top:0;bottom:0;background:#fff}.box-msg-list[data-v-04c14be2]{width:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;position:absolute;left:0;right:0;top:0;bottom:316px;background:#fff;z-index:1;transition:all .3s}.list[data-v-04c14be2]{width:100%;height:auto}.message[data-v-04c14be2]{display:flex;justify-content:flex-start;padding:%?40?% %?40?%;border-bottom:%?2?% solid #ddd}.message[data-v-04c14be2]:last-child{border-bottom:0}.message .text[data-v-04c14be2]{width:100%;color:#343541;line-height:%?52?%;font-size:%?32?%;word-break:break-all;padding:%?3?% 0;overflow:hidden}.message .text span[data-v-04c14be2]{display:inline}.message .avatar[data-v-04c14be2]{width:%?48?%;height:%?48?%;background:#10a37f;margin-right:%?30?%;color:#fff;font-size:%?28?%;border-radius:%?4?%;display:flex;align-items:center;justify-content:center;margin-top:%?6?%}.message .avatar uni-image[data-v-04c14be2],\n.message .avatar img[data-v-04c14be2]{width:%?36?%;height:%?36?%}.account[data-v-04c14be2]{margin:%?20?% %?30?%;padding:%?16?% %?24?% %?16?% %?24?%;box-sizing:border-box;\n\t/* background: #f3f6f9; */border-radius:%?10?%;display:flex;justify-content:space-between;align-items:center}.account .balance[data-v-04c14be2]{color:#666;font-size:%?24?%}.account .balance uni-text[data-v-04c14be2]{color:#10a37f;margin-right:%?6?%}.account .btn-pay[data-v-04c14be2]{display:inline-block;color:#10a37f;margin-left:%?20?%;font-size:%?24?%}.banner-ad[data-v-04c14be2]{width:100%;height:%?120?%;border-top:%?2?% solid #ddd}.cursor[data-v-04c14be2]{background:#3d3d3d;width:100%;line-height:100%;border-left:.1em solid transparent;-webkit-animation:cursor-data-v-04c14be2 .6s infinite;animation:cursor-data-v-04c14be2 .6s infinite;display:inline-block;width:%?10?%;height:%?40?%;position:relative;top:%?6?%}\n\n/* Animation */@-webkit-keyframes cursor-data-v-04c14be2{50%{background:#fff}}@keyframes cursor-data-v-04c14be2{50%{background:#fff}}.content[data-v-04c14be2]{padding:%?20?%}.content uni-view[data-v-04c14be2]{margin:%?10?% 0;word-break:break-all;line-height:1.5;font-size:%?28?%;color:#444}.content img[data-v-04c14be2]{width:100%}.btn-copy[data-v-04c14be2]{color:#409eff}",""]),t.exports=e}}]);