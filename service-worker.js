if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,c)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-484247ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/23/hello-world/index.html",revision:"0ba44cd2f0144689bc8e24c0b8578814"},{url:"2021/04/23/我的第一篇/index.html",revision:"2c15e241119474892c0fa02eaa546c13"},{url:"archives/2021/04/index.html",revision:"bd082510f4ea13794db1d42218b3451f"},{url:"archives/2021/index.html",revision:"24fd3b1ede0de17edef666902e438e7f"},{url:"archives/index.html",revision:"d1c49554592be3eb51c31cab1b05a4b3"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"ad499d4084bf086d2c6c5814f94978f0"},{url:"css/index.css",revision:"1f1e5f8b7c93bbe276182f4892abc98a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"a785436a81dec8acb1fb7b9126d6553b"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"b262ff899f440964adbc5537a3ef27a8"},{url:"tags/index.html",revision:"736536cb744f00874936dee37e573af4"},{url:"tags/随笔/index.html",revision:"61d7c75cff11bf0e4eed1b363234d4d7"}],{})}));
//# sourceMappingURL=service-worker.js.map
