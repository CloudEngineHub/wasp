"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[71114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),i=r(44996);const a={title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",authors:["martinsos"],tags:["discord","nodejs"]},s=void 0,l={permalink:"/blog/2021/04/29/discord-bot-introduction",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2021-04-29-discord-bot-introduction.md",source:"@site/blog/2021-04-29-discord-bot-introduction.md",title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",description:'<img alt="Guest introducing themselves and getting full-access."',date:"2021-04-29T00:00:00.000Z",formattedDate:"April 29, 2021",tags:[{label:"discord",permalink:"/blog/tags/discord"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:8.87,hasTruncateMarker:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",email:"martin@wasp-lang.dev",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",authors:["martinsos"],tags:["discord","nodejs"]},prevItem:{title:"Tutorial: `forall` in Haskell",permalink:"/blog/2021/09/01/haskell-forall-tutorial"},nextItem:{title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",permalink:"/blog/2021/03/02/wasp-alpha"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Guest introducing themselves and getting full-access.",src:(0,i.Z)("img/discord-introduction-example.png")}),(0,o.kt)("figcaption",null,'A Guest user getting access by introducing themselves in the "introductions" channel.'))),(0,o.kt)("p",null,"At ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev"},"Wasp"),", we have a Discord server for our community, where we talk with people interested in and using Wasp - Waspeteers!"),(0,o.kt)("p",null,"In the beginning, we knew everybody in the community by their name, but as it started growing, we had a lot of people joining that never wrote anything, and the community started feeling less homey, less intimate."),(0,o.kt)("p",null,"This was when we decided to make it required for the new members to introduce themselves to gain access to the community.\nWe knew that with this kind of barrier we would probably lose some potential new Waspeteers, but those that would go through it would be more engaged and better integrated."),(0,o.kt)("p",null,"We found no other way to accomplish this automatically but to implement our own Discord bot.\nIn this post I will describe in detail how we did it."))}m.isMDXComponent=!0}}]);