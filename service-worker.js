if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-484247ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/23/暴雨将至/index.html",revision:"930661519c62950bd6668c8defda2ad8"},{url:"2021/04/24/从零开始搭建博客/index.html",revision:"00f00bc7d2f0a98d376434520a7368da"},{url:"2021/04/25/单链表的创建和遍历的实现(Java)/index.html",revision:"b9e080001e4b253249070108e0f305a8"},{url:"2021/04/27/算法练-两数之和/index.html",revision:"3b637ca20dcbce8e54f54336db81ec03"},{url:"2021/04/28/算法练-反转单链表/index.html",revision:"d8f80f43990c06a0b9a9ebe051ad2096"},{url:"archives/2021/04/index.html",revision:"256263abd22c3abbb2eeae204a239a3b"},{url:"archives/2021/index.html",revision:"6b757ac8c2220a0fcef18c18c3149dd9"},{url:"archives/index.html",revision:"fa3cf9fc3179658b658c0dcdebd6afd5"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"122329ea5cd09e63be860ca88eda1306"},{url:"categories/教程/index.html",revision:"b61545eb6b13e0431ca5cb7c6ec4763f"},{url:"categories/数据结构/index.html",revision:"93ea71901368ca5300f9548dcc8f40b6"},{url:"categories/算法/index.html",revision:"86ca5c349eecf2ed02ece784a8bff724"},{url:"categories/随笔/index.html",revision:"412b96b380263d40697a34bac821f32a"},{url:"css/index.css",revision:"3969f7d85193920c3b6ffaeff271c78e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"e15dbe308234121327e5cece7779eccc"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"a538ceaeb7d444ca831594fe9f748997"},{url:"tags/index.html",revision:"568307a6d2ee41fce4cd04c2866bb89b"},{url:"tags/Java-数据结构/index.html",revision:"48735a4345e03ef1e1448d51af6ddb17"},{url:"tags/Java-算法/index.html",revision:"781ac91d199bb65dace0038d5ce94b93"},{url:"tags/教程-hexo/index.html",revision:"7b562794ed5a0f8005a3c780798514bc"},{url:"tags/随笔/index.html",revision:"d12975845668c62d505ea19c691f9015"}],{})}));
//# sourceMappingURL=service-worker.js.map
