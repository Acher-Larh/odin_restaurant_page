(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    background: wheat;\r\n    color: rebeccapurple;\r\n\r\n}\r\n\r\n#content {\r\n    background: rosybrown;\r\n    margin: 8%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.only_img {\r\n    width: 300px;\r\n}\r\n\r\n.nav-bar {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n    \r\n}\r\n\r\n.nav-bar .nav-item {\r\n    color: rebeccapurple;\r\n    background: wheat;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 10px;    \r\n}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var s=r(e,a),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},943:(e,t,n)=>{e.exports=n.p+"5eae8dc37e254b9de242.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),c=n(565),s=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(943);const v=document.getElementById("content");document.createElement("div").classList.add("btn"),document.createElement("div").classList.add("btn"),document.createElement("div").classList.add("btn");const b=document.createElement("div");b.classList.add("nav-bar");const g=document.createElement("a");g.classList.add("nav-item"),g.classList.add("one"),g.href="#",g.textContent="About";const y=document.createElement("a");y.classList.add("nav-item"),y.classList.add("two"),y.href="#",y.textContent="Home";const x=document.createElement("a");x.classList.add("nav-item"),x.classList.add("three"),x.href="#",x.textContent="Contact",g.addEventListener("click",(()=>{let e=[];v.childNodes.forEach((t=>{e.push(t)})),e.forEach((e=>{null!=e.classList&&(e.classList.contains("")||e.classList.contains("nav-bar")||v.removeChild(e))})),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="WHO ARE WE YOU ASK!?",e.appendChild(t);const n=document.createElement("p");n.textContent="Aliquip veniam duis cillum amet aliquip officia ex irure id. Officia esse aliqua aute voluptate cillum. In aliquip laborum duis dolor qui aliquip est cupidatat ullamco. Mollit tempor Lorem quis laborum eu laborum eu laborum. Eiusmod Lorem sunt aliquip sit. Esse proident do laborum ex excepteur laborum qui ex reprehenderit cillum ea. Deserunt anim cupidatat qui nulla irure fugiat veniam consectetur.",e.appendChild(n);const r=new Image;r.src=h,r.width="100",r.classList.add("only_img"),e.appendChild(r)}()})),y.addEventListener("click",(()=>{let e=[];v.childNodes.forEach((t=>{e.push(t)})),e.forEach((e=>{null!=e.classList&&(e.classList.contains("")||e.classList.contains("nav-bar")||v.removeChild(e))})),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="The best restaurant since 'The Lotus Restaurant'",e.appendChild(t);const n=document.createElement("p");n.textContent="Aliquip veniam duis cillum amet aliquip officia ex irure id. Officia esse aliqua aute voluptate cillum. In aliquip laborum duis dolor qui aliquip est cupidatat ullamco. Mollit tempor Lorem quis laborum eu laborum eu laborum. Eiusmod Lorem sunt aliquip sit. Esse proident do laborum ex excepteur laborum qui ex reprehenderit cillum ea. Deserunt anim cupidatat qui nulla irure fugiat veniam consectetur.",e.appendChild(n);const r=new Image;r.src=h,r.width="100",r.classList.add("only_img"),e.appendChild(r)}()})),x.addEventListener("click",(()=>{let e=[];v.childNodes.forEach((t=>{e.push(t)})),e.forEach((e=>{null!=e.classList&&(e.classList.contains("")||e.classList.contains("nav-bar")||v.removeChild(e))})),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="The best restaurant since 'The Lotus Restaurant'",e.appendChild(t);const n=document.createElement("div");n.innerHTML="<p>Esse excepteur occaecat tempor est laboris non. Velit occaecat enim exercitation pariatur sunt quis sit culpa ipsum sint. Ipsum ex excepteur veniam anim dolor aute. Incididunt dolore ex nulla ullamco cupidatat in aliquip sint aliqua.</p><br /> And that's why we expect you to contact us whenever you want. <br /> <br /> You can contact us to the email: loremonkey@lorembonobo.com <br /> <br />Or the phone: <br />+789 932 821 810",e.appendChild(n)}()})),b.appendChild(g),b.appendChild(y),b.appendChild(x),v.appendChild(b)})()})();