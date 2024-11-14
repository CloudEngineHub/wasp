"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[11957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),i=n(67294),r=n(86010),l=n(12466),o=n(16550),s=n(91980),u=n(67392),p=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function c(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,r.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return i.createElement(b,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(50012);function r(e){let{path:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),l=t.slice(r+1,t.length-1),[o,s]=l.split(","),u=t.slice(0,r);return a.createElement("code",null,u+("js"===n?o:s))}},75721:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));n(46300);const r={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a user ",(0,i.kt)("strong",{parentName:"p"},"signs in for the first time"),", Wasp creates a new user account and links it to the chosen auth provider account for future logins."),(0,i.kt)("p",null,"Also, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"userEntity")," has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"username")," field: Wasp sets it to a random username (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"nice-blue-horse-14357"),")."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"password")," field: Wasp sets it to a random string.")),(0,i.kt)("p",null,"This is a historical coupling between ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," methods we plan to remove in the future."))}o.isMDXComponent=!0},70006:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));n(46300);const r={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wasp automatically generates the type ",(0,i.kt)("inlineCode",{parentName:"p"},"GetUserFieldsFn")," to help you correctly type your ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserFields")," function."))}o.isMDXComponent=!0},46713:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));n(46300);const r={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wasp lets you override the default behavior. You can create custom setups, such as allowing users to define a custom username rather instead of getting a randomly generated one."),(0,i.kt)("p",null,"There are two mechanisms (functions) used for overriding the default behavior:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getUserFieldsFn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configFn"))),(0,i.kt)("p",null,"Let's explore them in more detail."))}o.isMDXComponent=!0},90006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>g,toc:()=>k});var a=n(87462),i=n(67294),r=n(3905),l=(n(46300),n(85162)),o=n(74866),s=n(39960);function u(e){let{pagePart:t=""}=e;const n=[{title:"Google",description:"Users sign in with their Google account.",linkToDocs:"/docs/auth/social-auth/google"+t},{title:"Github",description:"Users sign in with their Github account.",linkToDocs:"/docs/auth/social-auth/github"+t}];return i.createElement(i.Fragment,null,i.createElement("div",{className:"social-auth-grid"},n.map((e=>i.createElement(p,{title:e.title,description:e.description,linkToDocs:e.linkToDocs})))),i.createElement("p",{className:"social-auth-info"},i.createElement("small",null,"Click on each provider for more details.")))}function p(e){let{linkToDocs:t,title:n,description:a}=e;return i.createElement(s.Z,{to:t,className:"auth-method-box"},i.createElement("h3",null,n," \xbb"),i.createElement("p",null,a))}var d=n(75721),c=(n(46713),n(70006));const m={title:"Overview"},h=void 0,g={unversionedId:"auth/social-auth/overview",id:"version-0.11.8/auth/social-auth/overview",title:"Overview",description:"Social login options (e.g., Log in with Google) are a great (maybe even the best) solution for handling user accounts.",source:"@site/versioned_docs/version-0.11.8/auth/social-auth/overview.md",sourceDirName:"auth/social-auth",slug:"/auth/social-auth/overview",permalink:"/docs/0.11.8/auth/social-auth/overview",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/auth/social-auth/overview.md",tags:[],version:"0.11.8",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Email",permalink:"/docs/0.11.8/auth/email"},next:{title:"GitHub",permalink:"/docs/0.11.8/auth/social-auth/github"}},f={},k=[{value:"Available Providers",id:"available-providers",level:2},{value:"Social Login Entity",id:"social-login-entity",level:2},{value:"Default Behavior",id:"default-behavior",level:2},{value:"Overrides",id:"overrides",level:2},{value:"Allowing User to Set Their Username",id:"allowing-user-to-set-their-username",level:3},{value:"1. Adding the <code>isSignupComplete</code> Field to the <code>User</code> Entity",id:"1-adding-the-issignupcomplete-field-to-the-user-entity",level:4},{value:"2. Overriding the Default Behavior",id:"2-overriding-the-default-behavior",level:4},{value:"3. Showing the Correct State on the Client",id:"3-showing-the-correct-state-on-the-client",level:4},{value:"Using the User&#39;s Provider Account Details",id:"using-the-users-provider-account-details",level:3},{value:"UI Helpers",id:"ui-helpers",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Fields in the <code>app.auth</code> Dictionary and Overrides",id:"fields-in-the-appauth-dictionary-and-overrides",level:3},{value:"The <code>externalAuthEntity</code> and Its Fields",id:"the-externalauthentity-and-its-fields",level:3},{value:"Expected Fields on the <code>userEntity</code>",id:"expected-fields-on-the-userentity",level:3}],v={toc:k},y="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Social login options (e.g., ",(0,r.kt)("em",{parentName:"p"},"Log in with Google"),") are a great (maybe even the best) solution for handling user accounts.\nA famous old developer joke tells us ",(0,r.kt)("em",{parentName:"p"},'"The best auth system is the one you never have to make."')),(0,r.kt)("p",null,"Wasp wants to make adding social login options to your app as painless as possible."),(0,r.kt)("p",null,"Using different social providers gives users a chance to sign into your app via their existing accounts on other platforms (Google, GitHub, etc.)."),(0,r.kt)("p",null,"This page goes through the common behaviors between all supported social login providers and shows you how to customize them.\nIt also gives an overview of Wasp's UI helpers - the quickest possible way to get started with social auth."),(0,r.kt)("h2",{id:"available-providers"},"Available Providers"),(0,r.kt)("p",null,"Wasp currently supports the following social login providers:"),(0,r.kt)(u,{mdxType:"SocialAuthGrid"}),(0,r.kt)("h2",{id:"social-login-entity"},"Social Login Entity"),(0,r.kt)("p",null,"Wasp requires you to declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"userEntity")," for all ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," methods (social or otherwise).\nThis field tells Wasp which Entity represents the user."),(0,r.kt)("p",null,"Additionally, when using ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," methods that rely on external providers(e.g., ",(0,r.kt)("em",{parentName:"p"},"Google"),"), you must also declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"externalAuthEntity"),".\nThis tells Wasp which Entity represents the user's link with the social provider."),(0,r.kt)("p",null,"Both fields fall under ",(0,r.kt)("inlineCode",{parentName:"p"},"app.auth"),". Here's what the full setup looks like:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    // highlight-next-line\n    userEntity: User,\n    // highlight-next-line\n    externalAuthEntity: SocialLogin,\n    methods: {\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// highlight-next-line\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    //...\n    externalAuthAssociations  SocialLogin[]\npsl=}\n\n// highlight-next-line\nentity SocialLogin {=psl\n  id          Int       @id @default(autoincrement())\n  provider    String\n  providerId  String\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId      Int\n  createdAt   DateTime  @default(now())\n  @@unique([provider, providerId, userId])\npsl=}\n'))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    // highlight-next-line\n    userEntity: User,\n    // highlight-next-line\n    externalAuthEntity: SocialLogin,\n    methods: {\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// highlight-next-line\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    //...\n    externalAuthAssociations  SocialLogin[]\npsl=}\n\n// highlight-next-line\nentity SocialLogin {=psl\n  id          Int       @id @default(autoincrement())\n  provider    String\n  providerId  String\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId      Int\n  createdAt   DateTime  @default(now())\n  @@unique([provider, providerId, userId])\npsl=}\n')))),(0,r.kt)("small",null,(0,r.kt)("p",null,"To learn more about what the fields on these entities represent, look at the ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Wasp uses the same ",(0,r.kt)("inlineCode",{parentName:"p"},"externalAuthEntity")," for all social login providers (e.g. both GitHub and Google use the same entity).")),(0,r.kt)("h2",{id:"default-behavior"},"Default Behavior"),(0,r.kt)(d.ZP,{mdxType:"DefaultBehaviour"}),(0,r.kt)("h2",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Wasp lets you override the default behavior. You can create custom setups, such as allowing users to define a custom username rather instead of getting a randomly generated one."),(0,r.kt)("h3",{id:"allowing-user-to-set-their-username"},"Allowing User to Set Their Username"),(0,r.kt)("p",null,"If you want to modify the signup flow (e.g., let users choose their own usernames), you will need to go through three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first step is adding a ",(0,r.kt)("inlineCode",{parentName:"li"},"isSignupComplete")," property to your ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," Entity. This field will signals whether the user has completed the signup process."),(0,r.kt)("li",{parentName:"ol"},"The second step is overriding the default signup behavior."),(0,r.kt)("li",{parentName:"ol"},"The third step is implementing the rest of your signup flow and redirecting users where appropriate.")),(0,r.kt)("p",null,"Let's go through both steps in more detail."),(0,r.kt)("h4",{id:"1-adding-the-issignupcomplete-field-to-the-user-entity"},"1. Adding the ",(0,r.kt)("inlineCode",{parentName:"h4"},"isSignupComplete")," Field to the ",(0,r.kt)("inlineCode",{parentName:"h4"},"User")," Entity"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},"entity User {=psl\n    id                        Int           @id @default(autoincrement())\n    username                  String?       @unique\n    // highlight-next-line\n    isSignupComplete          Boolean       @default(false)\n    externalAuthAssociations  SocialLogin[]\npsl=}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},"entity User {=psl\n    id                        Int           @id @default(autoincrement())\n    username                  String?       @unique\n    // highlight-next-line\n    isSignupComplete          Boolean       @default(false)\n    externalAuthAssociations  SocialLogin[]\npsl=}\n")))),(0,r.kt)("h4",{id:"2-overriding-the-default-behavior"},"2. Overriding the Default Behavior"),(0,r.kt)("p",null,"Declare an import under ",(0,r.kt)("inlineCode",{parentName:"p"},"app.auth.methods.google.getUserFieldsFn")," (the example assumes you're using Google):"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    externalAuthEntity: SocialLogin,\n    methods: {\n      google: {\n        // highlight-next-line\n        getUserFieldsFn: import { getUserFields } from "@server/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// ...\n')),(0,r.kt)("p",null,"And implement the imported function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/server/auth/google.js",title:"src/server/auth/google.js"},"export const getUserFields = async (_context, _args) => {\n  return {\n    isSignupComplete: false,\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    externalAuthEntity: SocialLogin,\n    methods: {\n      google: {\n        // highlight-next-line\n        getUserFieldsFn: import { getUserFields } from "@server/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// ...\n')),(0,r.kt)("p",null,"And implement the imported function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/auth/google.ts",title:"src/server/auth/google.ts"},"import { GetUserFieldsFn } from '@wasp/types'\n\nexport const getUserFields: GetUserFieldsFn = async (_context, _args) => {\n  return {\n    isSignupComplete: false,\n  }\n}\n")),(0,r.kt)(c.ZP,{mdxType:"GetUserFieldsType"}))),(0,r.kt)("h4",{id:"3-showing-the-correct-state-on-the-client"},"3. Showing the Correct State on the Client"),(0,r.kt)("p",null,"You can query the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"isSignupComplete")," flag on the client with the ",(0,r.kt)("a",{parentName:"p",href:"../../auth/overview"},(0,r.kt)("inlineCode",{parentName:"a"},"useAuth()"))," hook.\nDepending on the flag's value, you can redirect users to the appropriate signup step."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the user lands on the homepage, check the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"user.isSignupComplete"),"."),(0,r.kt)("li",{parentName:"ol"},"If it's ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", it means the user has started the signup process but hasn't yet chosen their username. Therefore, you can redirect them to ",(0,r.kt)("inlineCode",{parentName:"li"},"EditUserDetailsPage")," where they can edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," property.")),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=client/HomePage.jsx",title:"client/HomePage.jsx"},"import useAuth from '@wasp/auth/useAuth'\nimport { Redirect } from 'react-router-dom'\n\nexport function HomePage() {\n  const { data: user } = useAuth()\n\n  if (user.isSignupComplete === false) {\n    return <Redirect to=\"/edit-user-details\" />\n  }\n\n  // ...\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=client/HomePage.tsx",title:"client/HomePage.tsx"},"import useAuth from '@wasp/auth/useAuth'\nimport { Redirect } from 'react-router-dom'\n\nexport function HomePage() {\n  const { data: user } = useAuth()\n\n  if (user.isSignupComplete === false) {\n    return <Redirect to=\"/edit-user-details\" />\n  }\n\n  // ...\n}\n")),(0,r.kt)("p",null,"The same general principle applies to more complex signup procedures, just change the boolean ",(0,r.kt)("inlineCode",{parentName:"p"},"isSignupComplete")," property to a property like ",(0,r.kt)("inlineCode",{parentName:"p"},"currentSignupStep")," that can hold more values."))),(0,r.kt)("h3",{id:"using-the-users-provider-account-details"},"Using the User's Provider Account Details"),(0,r.kt)("p",null,"Account details are provider-specific.\nEach provider has their own rules for defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserFieldsFn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"configFn")," functions:"),(0,r.kt)(u,{pagePart:"#overrides",mdxType:"SocialAuthGrid"}),(0,r.kt)("h2",{id:"ui-helpers"},"UI Helpers"),(0,r.kt)("admonition",{title:"Use Auth UI",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../../auth/ui"},"Auth UI")," is a common name for all high-level auth forms that come with Wasp."),(0,r.kt)("p",{parentName:"admonition"},"These include fully functional auto-generated login and signup forms with working social login buttons.\nIf you're looking for the fastest way to get your auth up and running, that's where you should look."),(0,r.kt)("p",{parentName:"admonition"},"The UI helpers described below are lower-level and are useful for creating your custom forms.")),(0,r.kt)("p",null,"Wasp provides sign-in buttons and URLs for each of the supported social login providers."),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=client/LoginPage.jsx",title:"client/LoginPage.jsx"},"import {\n  SignInButton as GoogleSignInButton,\n  signInUrl as googleSignInUrl,\n} from '@wasp/auth/helpers/Google'\nimport {\n  SignInButton as GitHubSignInButton,\n  signInUrl as gitHubSignInUrl,\n} from '@wasp/auth/helpers/GitHub'\n\nexport const LoginPage = () => {\n  return (\n    <>\n      <GoogleSignInButton />\n      <GitHubSignInButton />\n      {/* or */}\n      <a href={googleSignInUrl}>Sign in with Google</a>\n      <a href={gitHubSignInUrl}>Sign in with GitHub</a>\n    </>\n  )\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=client/LoginPage.tsx",title:"client/LoginPage.tsx"},"import {\n  SignInButton as GoogleSignInButton,\n  signInUrl as googleSignInUrl,\n} from '@wasp/auth/helpers/Google'\nimport {\n  SignInButton as GitHubSignInButton,\n  signInUrl as gitHubSignInUrl,\n} from '@wasp/auth/helpers/GitHub'\n\nexport const LoginPage = () => {\n  return (\n    <>\n      <GoogleSignInButton />\n      <GitHubSignInButton />\n      {/* or */}\n      <a href={googleSignInUrl}>Sign in with Google</a>\n      <a href={gitHubSignInUrl}>Sign in with GitHub</a>\n    </>\n  )\n}\n")))),(0,r.kt)("p",null,"If you need even more customization, you can create your custom components using ",(0,r.kt)("inlineCode",{parentName:"p"},"signInUrl"),"s."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"fields-in-the-appauth-dictionary-and-overrides"},"Fields in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"app.auth")," Dictionary and Overrides"),(0,r.kt)("p",null,"For more information on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allowed fields in ",(0,r.kt)("inlineCode",{parentName:"li"},"app.auth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getUserFields")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"configFn")," functions")),(0,r.kt)("p",null,"Check the provider-specific API References:"),(0,r.kt)(u,{pagePart:"#api-reference",mdxType:"SocialAuthGrid"}),(0,r.kt)("h3",{id:"the-externalauthentity-and-its-fields"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"externalAuthEntity")," and Its Fields"),(0,r.kt)("p",null,"Using social login providers requires you to define ",(0,r.kt)("em",{parentName:"p"},"an External Auth Entity")," and declare it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.auth.externalAuthEntity")," field.\nThis Entity holds the data relevant to the social provider.\nAll social providers share the same Entity."),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp {4-10}",title:"main.wasp","{4-10}":!0},"// ...\n\nentity SocialLogin {=psl\n  id          Int       @id @default(autoincrement())\n  provider    String\n  providerId  String\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId      Int\n  createdAt   DateTime  @default(now())\n  @@unique([provider, providerId, userId])\npsl=}\n\n// ...\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp {4-10}",title:"main.wasp","{4-10}":!0},"// ...\n\nentity SocialLogin {=psl\n  id          Int       @id @default(autoincrement())\n  provider    String\n  providerId  String\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId      Int\n  createdAt   DateTime  @default(now())\n  @@unique([provider, providerId, userId])\npsl=}\n\n// ...\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to know these details, you can just copy and paste the entity definition above and you are good to go.")),(0,r.kt)("p",null,"The Entity acting as ",(0,r.kt)("inlineCode",{parentName:"p"},"app.auth.externalAuthEntity")," must include the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider")," - The provider's name (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"google"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"github"),", etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerId")," - The user's ID on the provider's platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userId")," - The user's ID on your platform (this references the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field from the Entity acting as ",(0,r.kt)("inlineCode",{parentName:"li"},"app.auth.userEntity"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," - A relation to the ",(0,r.kt)("inlineCode",{parentName:"li"},"userEntity")," (see ",(0,r.kt)("a",{parentName:"li",href:"#expected-fields-on-the-userentity"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"userEntity")," section"),") for more details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createdAt")," - A timestamp of when the association was created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@@unique([provider, providerId, userId])")," - A unique constraint on the combination of ",(0,r.kt)("inlineCode",{parentName:"li"},"provider"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"providerId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"userId"),".")),(0,r.kt)("h3",{id:"expected-fields-on-the-userentity"},"Expected Fields on the ",(0,r.kt)("inlineCode",{parentName:"h3"},"userEntity")),(0,r.kt)("p",null,"Using Social login providers requires you to add one extra field to the Entity acting as ",(0,r.kt)("inlineCode",{parentName:"p"},"app.auth.userEntity"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"externalAuthAssociations")," - A relation to the ",(0,r.kt)("inlineCode",{parentName:"li"},"externalAuthEntity")," (see ",(0,r.kt)("a",{parentName:"li",href:"#the-externalauthentity-and-its-fields"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"externalAuthEntity")," section")," for more details).")),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp {6}",title:"main.wasp","{6}":!0},"// ...\n\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    //...\n    externalAuthAssociations  SocialLogin[]\npsl=}\n\n// ...\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp {6}",title:"main.wasp","{6}":!0},"// ...\n\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    //...\n    externalAuthAssociations  SocialLogin[]\npsl=}\n\n// ...\n")))))}b.isMDXComponent=!0}}]);