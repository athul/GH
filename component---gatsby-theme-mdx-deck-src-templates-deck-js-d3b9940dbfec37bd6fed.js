(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0TzC":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"0YXu":function(e,t,n){var r=n("ERFd");e.exports=function(e){if(Array.isArray(e))return r(e)}},"2oQ4":function(e,t,n){var r=n("0YXu"),o=n("Uifx"),i=n("kpYG"),a=n("0TzC");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},"6dUw":function(e,t,n){var r=n("fK7x"),o=n("i1X9");function i(t,n,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},ERFd:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},EifU:function(e,t,n){(function(t){var n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/,o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=/^\[object .+?Constructor\]$/,u="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=u||s||Function("return this")();var f,d=Array.prototype,p=Function.prototype,b=Object.prototype,h=l["__core-js_shared__"],y=(f=/[^.]+$/.exec(h&&h.keys&&h.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",v=p.toString,m=b.hasOwnProperty,O=b.toString,g=RegExp("^"+v.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=l.Symbol,w=d.splice,T=R(l,"Map"),x=R(Object,"create"),E=j?j.prototype:void 0,S=E?E.toString:void 0;function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function _(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function A(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function P(e,t){for(var o,i=0,a=(t=function(e,t){if(F(e))return!1;var o=typeof e;if("number"==o||"symbol"==o||"boolean"==o||null==e||H(e))return!0;return r.test(e)||!n.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:F(o=t)?o:M(o)).length;null!=e&&i<a;)e=e[N(t[i++])];return i&&i==a?e:void 0}function L(e){return!(!z(e)||(t=e,y&&y in t))&&(function(e){var t=z(e)?O.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?g:c).test(function(e){if(null!=e){try{return v.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function I(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function R(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return L(n)?n:void 0}C.prototype.clear=function(){this.__data__=x?x(null):{}},C.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},C.prototype.get=function(e){var t=this.__data__;if(x){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return m.call(t,e)?t[e]:void 0},C.prototype.has=function(e){var t=this.__data__;return x?void 0!==t[e]:m.call(t,e)},C.prototype.set=function(e,t){return this.__data__[e]=x&&void 0===t?"__lodash_hash_undefined__":t,this},_.prototype.clear=function(){this.__data__=[]},_.prototype.delete=function(e){var t=this.__data__,n=k(t,e);return!(n<0)&&(n==t.length-1?t.pop():w.call(t,n,1),!0)},_.prototype.get=function(e){var t=this.__data__,n=k(t,e);return n<0?void 0:t[n][1]},_.prototype.has=function(e){return k(this.__data__,e)>-1},_.prototype.set=function(e,t){var n=this.__data__,r=k(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},A.prototype.clear=function(){this.__data__={hash:new C,map:new(T||_),string:new C}},A.prototype.delete=function(e){return I(this,e).delete(e)},A.prototype.get=function(e){return I(this,e).get(e)},A.prototype.has=function(e){return I(this,e).has(e)},A.prototype.set=function(e,t){return I(this,e).set(e,t),this};var M=D((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(H(e))return S?S.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var n=[];return o.test(e)&&n.push(""),e.replace(i,(function(e,t,r,o){n.push(r?o.replace(a,"$1"):t||e)})),n}));function N(e){if("string"==typeof e||H(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function D(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(D.Cache||A),n}D.Cache=A;var F=Array.isArray;function z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==O.call(e)}e.exports=function(e,t,n){var r=null==e?void 0:P(e,t);return void 0===r?n:r}}).call(this,n("xLOo"))},K2bi:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return ce}));var r=n("q3fr"),o=n("8cql"),i=n("v6s4"),a=n.n(i),c=n("y2NT"),u=n("rJBB"),s=n("0PHv"),l=n("RCEM"),f=n("Bx4J"),d=n("ZCal"),p=n("rwXX"),b=n("EifU"),h=n.n(b),y=n("5UxN"),v=n.n(y),m=n("ZiM/"),O=n("R/i7"),g=n("E1YZ"),j=39,w=37,T=38,x=40,E=32,S=80,C=79,_=71,A=27,k=33,P=34,L=function(e){return function(t){return t.mode===e?{mode:O.a.normal}:{mode:e}}},I=["input","select","textarea","a","button"],R=function(){var e=Object(m.a)();Object(i.useEffect)((function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var a=document.activeElement.tagName.toLowerCase();if(!I.includes(a))if(o)switch(t.keyCode){case E:Object(g.b)(e);break;case S:e.setState(L(O.a.print)),Object(l.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case S:e.setState(L(O.a.presenter));break;case C:e.setState(L(O.a.overview));break;case _:e.setState(L(O.a.grid))}else switch(t.keyCode){case j:case x:case P:case E:Object(g.a)(e);break;case w:case T:case k:Object(g.b)(e);break;case A:e.setState({mode:O.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},M="mdx-deck-slide",N="mdx-deck-step",D=function(){var e=Object(m.a)(),t=Object(i.useState)(!1),n=t[0],r=t[1],o=function(){return r(!0)},a=function(){return r(!1)},c=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case M:Object(l.navigate)([e.slug,n].join("/"));break;case N:e.setState({step:n})}};Object(i.useEffect)((function(){r(document.hasFocus())}),[]),Object(i.useEffect)((function(){return n||window.addEventListener("storage",c),window.addEventListener("focus",o),window.addEventListener("blur",a),function(){n||window.removeEventListener("storage",c),window.removeEventListener("focus",o),window.removeEventListener("blur",a)}}),[n]),Object(i.useEffect)((function(){n&&(localStorage.setItem(M,e.index),localStorage.setItem(N,e.step))}),[n,e.index,e.step])},F=n("t0TR"),z=function(e){return a.a.createElement(i.Fragment,null,e.children)},H=function(e){var t=Object(i.useState)("100vh"),n=t[0],r=t[1],a=Object(m.a)(),c=a.mode,u=a.theme;Object(i.useEffect)((function(){r(window.innerHeight);var e=function(e){r(window.innerHeight)},t=function(e){c===O.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}}),[c]);var s=u.Provider,l=void 0===s?z:s;return Object(d.d)(l,null,Object(d.d)("div",Object(o.a)({},e,{sx:{width:"100vw",height:c!==O.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},U=n("IhIl"),Y=n("vi4U"),B=n("louR"),q=n("GqlJ"),K=function(e){var t=Object(m.a)(),n=t.index,r=t.length;return Object(d.d)(a.a.Fragment,null,Object(d.d)("div",null,n," / ",r-1),Object(d.d)("div",{sx:{mx:4}},Object(d.d)("a",{href:l.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(d.d)("div",{sx:{mx:"auto"}}),Object(d.d)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(d.d)(q.a,null)),Object(d.d)("div",null,Object(d.d)(B.a,null)))},X=function(e){var t=e.slides,n=e.children,r=Object(m.a)(),o=t[r.index+1],i=!!r.notes&&a.a.Children.toArray(r.notes);return Object(d.d)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(d.d)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(d.d)("div",{sx:{width:"75%",p:3}},Object(d.d)(Y.a,{zoom:3/4},n)),Object(d.d)("div",{sx:{width:"25%",p:3}},Object(d.d)(Y.a,{ratio:4/3,zoom:1/4},Object(d.d)(U.a,{slide:o,preview:!0})),i&&Object(d.d)("div",{sx:{my:3}},i))),Object(d.d)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(d.d)(K,null)))},$=function(){},W=function(e){var t=e.slides,n=void 0===t?[]:t,c=e.ratio,u=void 0===c?16/9:c,s=e.zoom,l=void 0===s?1/4:s,f=e.onClick,p=void 0===f?$:f,b=Object(r.a)(e,["slides","ratio","zoom","onClick"]),h=Object(m.a)().index,y=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=y.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()})),Object(d.d)(a.a.Fragment,null,n.map((function(e,t){return Object(d.d)("div",Object(o.a)({},b,{key:t,role:"link",ref:t===h?y:null,onClick:function(e){p(t)},style:h===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:h===t?"4px solid cyan":null}}),Object(d.d)(Y.a,{zoom:l,ratio:u},Object(d.d)(U.a,{slide:e,preview:!0})))})))},J=function(e){var t=e.slides,n=e.children,r=Object(m.a)(),o=r.slug,i=r.index,a=r.length;return Object(d.d)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(d.d)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(d.d)(W,{slides:t,zoom:1/6,onClick:function(e){Object(l.navigate)([o,e].join("/"))}})),Object(d.d)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(d.d)("div",{sx:{flex:"1 1 auto"}},Object(d.d)(Y.a,{zoom:5/6},n)),Object(d.d)("div",{sx:{py:3}},i," / ",a-1)))},V=function(e){var t=e.slides,n=Object(m.a)(),r=n.slug,o=n.setState;return Object(d.d)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(d.d)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(d.d)(W,{slides:t,onClick:function(e){Object(l.navigate)([r,e].join("/")),o({mode:O.a.normal})},sx:{width:"25%",m:0}})))};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(){return R(),!1},ee=function(){return D(),!1},te=function(e){var t=e.slides,n=Q(Q({},Object(m.a)()),{},{mode:O.a.print});return Object(f.c)(F.a.Provider,{value:n},t.map((function(e,t){return Object(f.c)(U.a,{key:t,slide:e,preview:!0})})))},ne=function(e){var t=e.theme;return!!t.googleFont&&Object(f.c)(p.a,null,Object(f.c)("link",{rel:"stylesheet",href:t.googleFont}))},re=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return"function"==typeof t?t(e):v()(e,t)}),{})},oe=function(e){var t=e.children;return Object(f.c)(a.a.Fragment,{children:t})},ie=function(e){var t,n,o=e.slides,i=void 0===o?[]:o,c=e.pageContext,s=c.title,b=c.slug,y=e.theme,v=void 0===y?{}:y,g=e.themes,j=void 0===g?[]:g,w=(Object(r.a)(e,["slides","pageContext","theme","themes"]),Object(m.a)()),T=(t=l.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),x=i.head.children,E=re.apply(void 0,[v].concat(Object(u.a)(j))),S=E.components,C=Object(r.a)(E,["components"]),_=Q(Q({},w),{},{slug:b,length:i.length,index:T,steps:h()(w,"metadata."+T+".steps"),notes:h()(w,"metadata."+T+".notes"),theme:C}),A=oe;switch(_.mode){case O.a.presenter:A=X;break;case O.a.overview:A=J;break;case O.a.grid:A=V}return Object(f.c)(a.a.Fragment,null,Object(f.c)(p.a,null,Object(f.c)("title",null,s),x),Object(f.c)(ne,{theme:C}),Object(f.c)(F.a.Provider,{value:_},Object(f.c)(d.b,{components:S,theme:C},Object(f.c)(f.a,{styles:{body:{margin:0,overflow:_.mode===O.a.normal?"hidden":null}}}),Object(f.c)(Z,null),Object(f.c)(ee,null),Object(f.c)(H,null,Object(f.c)(A,{slides:i},Object(f.c)(l.Router,{basepath:b,style:{height:"100%"}},Object(f.c)(U.a,{index:0,path:"/",slide:i[0]}),i.map((function(e,t){return Object(f.c)(U.a,{key:t,index:t,path:t+"/*",slide:e})})),Object(f.c)(te,{path:"/print",slides:i})))))))},ae=n("r6Pb"),ce="1058728222",ue={wrapper:function(e){var t=Object(ae.a)(e);return Object(f.c)(ie,Object(o.a)({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),i=Object(r.a)(e,["data"]);return Object(f.c)((function(e){return Object(f.c)(c.MDXRenderer,Object(o.a)({},e,{children:n}))}),Object(o.a)({},i,{components:ue}))}},KJdM:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!e(t[u],a[u]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],a.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},Uifx:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},fK7x:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},i1X9:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},kpYG:function(e,t,n){var r=n("ERFd");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},rwXX:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,o,i,a,c=n("XcRB"),u=n.n(c),s=n("xpAf"),l=n.n(s),f=n("KJdM"),d=n.n(f),p=n("v6s4"),b=n.n(p),h=n("6qGY"),y=n.n(h),v="bodyAttributes",m="htmlAttributes",O="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",T="href",x="http-equiv",E="innerHTML",S="itemprop",C="name",_="property",A="rel",k="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",M="encodeSpecialCharacters",N="onChangeClientState",D="titleTemplate",F=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=Q(e,g.TITLE),n=Q(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},W=function(e){return Q(e,N)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==E&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ce(f,d);var p={baseTag:se(g.BASE,n),linkTags:se(g.LINK,i),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},b={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,b,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[b.a.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case m:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===E||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),b.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(v,n,r),htmlAttributes:de(m,o,r),link:de(g.LINK,i,r),meta:de(g.META,a,r),noscript:de(g.NOSCRIPT,c,r),script:de(g.SCRIPT,u,r),style:de(g.STYLE,s,r),title:de(g.TITLE,{title:f,titleAttributes:d},r)}},be=l()((function(e){return{baseTag:V([T,P],e),bodyAttributes:J(v,e),defer:Q(e,R),encode:Q(e,M),htmlAttributes:J(m,e),linkTags:G(g.LINK,[A,T],e),metaTags:G(g.META,[C,j,x,_,S],e),noscriptTags:G(g.NOSCRIPT,[E],e),onChangeClientState:W(e),scriptTags:G(g.SCRIPT,[k,E],e),styleTags:G(g.STYLE,[w],e),title:$(e),titleAttributes:J(O,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=be,a=i=function(e){function t(){return U(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return B({},o,((t={})[r.type]=a,t.titleAttributes=B({},i),t));case g.BODY:return B({},o,{bodyAttributes:B({},i)});case g.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return b.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),b.a.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(b.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind}).call(this,n("xLOo"))},wRdu:function(e,t,n){var r=n("6dUw"),o=n("2oQ4"),i=n("6HUR"),a=n("gX54");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("v6s4"),l=n("kvu0"),f=l.useMDXComponents,d=l.mdx,p=n("geOi").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,i=e.children,c=a(e,["scope","components","children"]),l=f(n),b=p(t),h=s.useMemo((function(){if(!i)return null;var e=u({React:s,mdx:d},b),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+i])).apply(void 0,[{}].concat(o(n)))}),[i,t]);return s.createElement(h,u({components:l},c))}},xpAf:function(e,t,n){"use strict";var r,o=n("v6s4"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},y2NT:function(e,t,n){var r=n("wRdu");e.exports={MDXRenderer:r}}}]);
//# sourceMappingURL=component---gatsby-theme-mdx-deck-src-templates-deck-js-d3b9940dbfec37bd6fed.js.map