(()=>{"use strict";var e,t,r,o,a,n={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=d,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var d=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(d=!1,a<n&&(n=a));if(d){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&o&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({20:"b7c90adc",53:"935f2afb",95:"ec4c47df",195:"c4f5d8e4",203:"6d30fd8f",266:"c4f6f21a",324:"ddcaf161",344:"dabd9b33",362:"0bdfbe91",412:"0b45b021",421:"23374ca6",453:"1ae8df76",514:"1be78505",594:"9209c96b",748:"94545425",799:"a0542c43",817:"14eb3368",883:"1d0d24d0",918:"17896441",961:"7291c913"}[e]||e)+"."+{20:"42d1cdc7",53:"bdf9d231",95:"105e96c9",195:"852a5735",203:"3c878f86",266:"24663129",324:"836bede6",344:"ef4e0e6c",362:"024d2fc5",412:"463929d7",421:"0b31e227",453:"e7aec452",514:"e5fe3905",594:"41f91627",748:"84f7a4ec",799:"5bce1b61",817:"98f4f4fb",883:"f3069bd9",918:"24190c93",961:"1480e9ab",972:"38d85c27"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="my-website:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var d,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+r){d=b;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",a+r),d.src=e),o[e]=[t];var l=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),c&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/software-design/",f.gca=function(e){return e={17896441:"918",94545425:"748",b7c90adc:"20","935f2afb":"53",ec4c47df:"95",c4f5d8e4:"195","6d30fd8f":"203",c4f6f21a:"266",ddcaf161:"324",dabd9b33:"344","0bdfbe91":"362","0b45b021":"412","23374ca6":"421","1ae8df76":"453","1be78505":"514","9209c96b":"594",a0542c43:"799","14eb3368":"817","1d0d24d0":"883","7291c913":"961"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),d=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],d=r[1],c=r[2],i=0;if(n.some((t=>0!==e[t]))){for(o in d)f.o(d,o)&&(f.m[o]=d[o]);if(c)var u=c(f)}for(t&&t(r);i<n.length;i++)a=n[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(u)},r=self.webpackChunkmy_website=self.webpackChunkmy_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();