(()=>{"use strict";var e={669:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([e.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #16331f;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const a=s},501:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([e.id,".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #296881;\n    border-radius: 3px;\n    font: inherit;\n    line-height: 1;\n    margin: 0.9em;\n    padding: 1em 2em;\n    color: #d7ecf5;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #276933;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.20em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n/*----------------------------------------------------------------*/\n@media (max-width: 991.98px){\n\n    .sources {\n        flex-wrap: wrap;\n        justify-content: space-evenly;\n        font: 300 0.9em 'Fira Sans', sans-serif;\n    }\n\n    .source__item-name {\n        font-weight: 300;\n    }\n\n    .source__item {\n        flex: 0 1 auto;\n        word-spacing: 0.2em;\n    }\n}\n\n@media (max-width: 767.98px){\n\n    .source__item {\n        flex: 1 0 30%;\n        text-align: center;\n        margin: 0.3em 0.9em;\n    }\n}",""]);const a=s},767:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([e.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n/*---------------------------------------------*/\n@media (max-width: 991.98px){\n    header h1 {\n        font-size: 38px;\n    } \n}\n@media (max-width: 767.98px){\n    header h1 {\n        font-size: 36px;\n        text-align: center;\n    } \n}",""]);const a=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},242:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),s=t.n(i),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),m=t.n(f),_=t(669),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),o()(_.Z,h);const g=_.Z&&_.Z.locals?_.Z.locals:void 0},595:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),s=t.n(i),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),m=t.n(f),_=t(501),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),o()(_.Z,h);const g=_.Z&&_.Z.locals?_.Z.locals:void 0},427:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),s=t.n(i),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),m=t.n(f),_=t(767),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),o()(_.Z,h);const g=_.Z&&_.Z.locals?_.Z.locals:void 0},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=t(i[s]);n[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},717:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(842)),i=t(527),s=t(53);n.default=class{constructor(){this.controller=new o.default,this.view=new i.AppView}start(){(0,s.getSelector)(document,".sources").addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},853:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(24));class i extends o.default{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"ba8de715eafa40b49bdca9b8518b8d7c"})}}n.default=i},842:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(853)),i=t(230);class s extends o.default{getSources(e){super.getResp({endpoint:i.EndPoint.sources},e)}getNews(e,n){let t,r;if(!e.target||!e.currentTarget)throw new Error("There is no e.target or e.currentTarget");for(t=e.target,r=e.currentTarget;t!==r;){if(null==t?void 0:t.classList.contains("source__item")){const e=t.getAttribute("data-source-id");return void(r&&e&&r.getAttribute("data-source")!==e&&(r.setAttribute("data-source",e),super.getResp({endpoint:i.EndPoint.everything,options:{sources:e}},n)))}t&&(t=t.parentNode)}}}n.default=s},24:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",e,t,n)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const t=Object.assign(Object.assign({},this.options),e);let r=`${this.baseLink}${n}?`;return Object.keys(t).forEach((e=>{r+=`${e}=${t[e]}&`})),r.slice(0,-1)}load(e,n,t,r={}){fetch(this.makeUrl(r,n),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)))}}},527:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const o=r(t(798)),i=r(t(53));class s{constructor(){this.news=new o.default,this.sources=new i.default}drawNews(e){const n=null==e?void 0:e.articles;n&&this.news.draw(n)}drawSources(e){var n;const t=null!==(n=null==e?void 0:e.sources)&&void 0!==n?n:[];t&&this.sources.draw(t)}}n.AppView=s,n.default=s},798:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(242);const r=t(53);n.default=class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,t=document.createDocumentFragment(),o=(0,r.getSelector)(document,"#newsItemTemp");n.forEach(((e,n)=>{var i,s;const a=(0,r.getFragment)((0,r.getTemplate)(o));n%2&&(null===(i=a.querySelector(".news__item"))||void 0===i||i.classList.add("alt"));const c=(0,r.getSelector)(a,".news__meta-photo"),l=(0,r.getSelector)(a,".news__meta-author"),d=(0,r.getSelector)(a,".news__meta-date"),u=(0,r.getSelector)(a,".news__description-title"),p=(0,r.getSelector)(a,".news__description-source"),f=(0,r.getSelector)(a,".news__description-content");c.style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"}`,l.textContent=e.author||e.source.name,d.textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),u.textContent=e.title,p.textContent=e.source.name,f.textContent=e.description,null===(s=a.querySelector(".news__read-more a"))||void 0===s||s.setAttribute("href",e.url),t.append(a)}));const i=(0,r.getSelector)(document,".news");i.innerHTML="",i.appendChild(t)}}},53:(e,n,t)=>{function r(e,n){const t=e.querySelector(n);if(!t)throw new Error(`Selector ${n} didn't match any elements.`);return t}function o(e){if(!e)throw new Error(`${e} didn't match any elements.`);return e}function i(e){if(!e)throw new Error(`${e} didn't match any elements.`);return e.content.cloneNode(!0)}Object.defineProperty(n,"__esModule",{value:!0}),n.getFragment=n.getTemplate=n.getSelector=void 0,t(595),n.getSelector=r,n.getTemplate=o,n.getFragment=i,n.default=class{draw(e){const n=document.createDocumentFragment(),t=r(document,"#sourceItemTemp"),s=r(document,".sources");let a=1;function c(e,a,c){s.innerHTML="";const l=a*--c,d=l+a;e.slice(l,d).forEach((e=>{var s;const a=i(o(t));r(a,".source__item-name").textContent=e.name,null===(s=a.querySelector(".source__item"))||void 0===s||s.setAttribute("data-source-id",e.id),n.append(a)})),s.append(n)}function l(n){const t=document.createElement("li");return t.classList.add("pagination__item"),t.textContent=String(n),a===n&&t.classList.add("pagination__item--active"),t.addEventListener("click",(()=>{a=n,c(e,10,a),r(document,".pagination__item--active").classList.remove("pagination__item--active"),t.classList.add("pagination__item--active")})),t}c(e,10,a),function(e,n){const t=r(document,".pagination"),o=Math.ceil(e.length/10),i=document.createElement("ul");t.innerHTML="",i.classList.add("pagination__list");for(let e=0;e<o;e++){const n=l(e+1);i.append(n)}null==t||t.append(i)}(e),s.append(n)}}},607:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(717));t(427),(new o.default).start()},230:(e,n)=>{var t;Object.defineProperty(n,"__esModule",{value:!0}),n.EndPoint=void 0,function(e){e.sources="sources",e.everything="everything"}(t||(n.EndPoint=t={}))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,t(607)})();