(self.webpackChunk=self.webpackChunk||[]).push([[16222],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?t.createElement(h,i(i({ref:n},s),{},{components:r})):t.createElement(h,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64966:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>i,metadata:()=>l,toc:()=>c,default:()=>s});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),i={id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},l={unversionedId:"relay-environment",id:"version-v1.6.1/relay-environment",isDocsHomePage:!1,title:"Relay Environment",description:'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.',source:"@site/versioned_docs/version-v1.6.1/Modern-RelayEnvironment.md",sourceDirName:".",slug:"/relay-environment",permalink:"/docs/v1.6.1/relay-environment",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.6.1/Modern-RelayEnvironment.md",version:"v1.6.1",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1621607337,formattedLastUpdatedAt:"5/21/2021",frontMatter:{id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},sidebar:"version-v1.6.1/docs",previous:{title:"GraphQL in Relay",permalink:"/docs/v1.6.1/graphql-in-relay"},next:{title:"Network Layer",permalink:"/docs/v1.6.1/network-layer"}},c=[{value:"A simple example",id:"a-simple-example",children:[]},{value:"Adding a <code>handlerProvider</code>",id:"adding-a-handlerprovider",children:[]}],d={toc:c};function s(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.'),(0,o.kt)("p",null,"Most applications will create a single Environment instance and use it throughout. In specific situations, however, you may want to create multiple environments for different purposes. For example, you may create a new environment instance whenever the user logs in or out in order to prevent data for different users being cached together. Similarly, a server rendered application may create a new environment instance per request, so that each request gets its own cache and user data does not overlap. Alternatively, you might have multiple products or features within a larger application, and you want each one to have product-specific network-handling or caching."),(0,o.kt)("h2",{id:"a-simple-example"},"A simple example"),(0,o.kt)("p",null,"To create an environment instance in Relay Modern, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} = require('relay-runtime');\n\nconst source = new RecordSource();\nconst store = new Store(source);\nconst network = Network.create(/*...*/); // see note below\nconst handlerProvider = null;\n\nconst environment = new Environment({\n  handlerProvider, // Can omit.\n  network,\n  store,\n});\n")),(0,o.kt)("p",null,"For more details on creating a Network, see the ",(0,o.kt)("a",{parentName:"p",href:"./network-layer"},"NetworkLayer guide"),"."),(0,o.kt)("p",null,"Once you have an environment, you can pass it in to your ",(0,o.kt)("a",{parentName:"p",href:"./query-renderer"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryRenderer"))," instance, or into mutations via the ",(0,o.kt)("inlineCode",{parentName:"p"},"commitUpdate"),' function (see "',(0,o.kt)("a",{parentName:"p",href:"./mutations"},"Mutations"),'").'),(0,o.kt)("h2",{id:"adding-a-handlerprovider"},"Adding a ",(0,o.kt)("inlineCode",{parentName:"h2"},"handlerProvider")),(0,o.kt)("p",null,"The example above did not configure a ",(0,o.kt)("inlineCode",{parentName:"p"},"handlerProvider"),", which means that a default one will be provided. Relay Modern comes with a couple of built-in handlers that augment the core with special functionality for handling connections (which is not a standard GraphQL feature, but a set of pagination conventions used at Facebook, specified in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"Relay Cursor Connections Specification"),", and well-supported by Relay itself) and the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," field (again, not a standard GraphQL schema feature, but one which has been conventionally used extensively within Facebook)."),(0,o.kt)("p",null,"If you wish to provide your own ",(0,o.kt)("inlineCode",{parentName:"p"},"handlerProvider"),", you can do so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  ConnectionHandler,\n  ViewerHandler,\n} = require('relay-runtime');\n\nfunction handlerProvider(handle) {\n  switch (handle) {\n    // Augment (or remove from) this list:\n    case 'connection': return ConnectionHandler;\n    case 'viewer': return ViewerHandler;\n  }\n  throw new Error(\n    `handlerProvider: No handler provided for ${handle}`\n  );\n}\n")))}s.isMDXComponent=!0}}]);