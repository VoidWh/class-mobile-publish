(function(e){function t(t){for(var r,u,a=t[0],i=t[1],f=t[2],l=0,b=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"3ca19ee6","chunk-712f2df5":"2a627e52"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var f=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04dc":function(e,t,n){"use strict";n("1ab6")},"1ab6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("9a83");var r=n("f564"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23"));function c(e,t,n,r,c,u){var a=Object(o["y"])("router-view"),i=Object(o["y"])("tab-footer");return Object(o["u"])(),Object(o["f"])(o["a"],null,[Object(o["h"])(a),Object(o["h"])(i)],64)}var u=Object(o["g"])("首页"),a=Object(o["g"])("搜索"),i=Object(o["g"])("消息"),f=Object(o["g"])("设置");function l(e,t,n,r,c,l){var s=Object(o["y"])("tabbar-item"),b=Object(o["y"])("tabbar");return Object(o["u"])(),Object(o["f"])(b,{modelValue:r.active,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.active=e})},{default:Object(o["D"])((function(){return[Object(o["h"])(s,{icon:"home-o",onClick:t[1]||(t[1]=function(e){return r.tabLinkTo("/")})},{default:Object(o["D"])((function(){return[u]})),_:1}),Object(o["h"])(s,{icon:"search",onClick:t[2]||(t[2]=function(e){return r.tabLinkTo("search")})},{default:Object(o["D"])((function(){return[a]})),_:1}),Object(o["h"])(s,{icon:"friends-o",onClick:t[3]||(t[3]=function(e){return r.tabLinkTo("talk")})},{default:Object(o["D"])((function(){return[i]})),_:1}),Object(o["h"])(s,{icon:"setting-o",onClick:t[4]||(t[4]=function(e){return r.tabLinkTo("setting")})},{default:Object(o["D"])((function(){return[f]})),_:1})]})),_:1},8,["modelValue"])}n("a52c");var s=n("2ed4"),b=(n("537a"),n("ac28")),d=n("6c02"),p={components:{tabbar:b["b"],tabbarItem:s["a"]},setup:function(){var e=Object(o["x"])(0),t=Object(d["c"])(),n=function(e){t.push(e)};return{active:e,tabLinkTo:n}}};p.render=l;var h=p,v={components:{tabFooter:h}};n("04dc");v.render=c;var j=v,O=n("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-712f2df5").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],m=Object(d["a"])({history:Object(d["b"])("/"),routes:g}),y=m,k=n("5502"),w=Object(k["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["e"])(j).use(r["a"]).use(w).use(y).mount("#app")}});
//# sourceMappingURL=app.a73001e3.js.map