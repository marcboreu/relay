(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||l;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),l=(n(0),n(1142)),o={id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},i={unversionedId:"installation-and-setup",id:"version-v4.0.0/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v4.0.0/Introduction-InstallationAndSetup.md",slug:"/installation-and-setup",permalink:"/docs/v4.0.0/installation-and-setup",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v4.0.0/Introduction-InstallationAndSetup.md",version:"v4.0.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620653027,sidebar:"version-v4.0.0/docs",previous:{title:"Prerequisites",permalink:"/docs/v4.0.0/prerequisites"},next:{title:"Quick Start Guide",permalink:"/docs/v4.0.0/quick-start-guide"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Install React and Relay using ",Object(l.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add react react-dom react-relay\n\n")),Object(l.b)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),Object(l.b)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add --dev babel-plugin-relay graphql\n\n")),Object(l.b)("p",null,"Add ",Object(l.b)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",Object(l.b)("inlineCode",{parentName:"p"},".babelrc")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),Object(l.b)("p",null,"Please note that the ",Object(l.b)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"}),"documentation on this topic"),"."),Object(l.b)("p",null,"Alternatively, instead of using ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros"}),"babel-plugin-macros"),". After installing ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const graphql = require('babel-plugin-relay/macro');\n")),Object(l.b)("p",null,"If you need to configure ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",Object(l.b)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/user.md#config-experimental"}),"specifying the options in a number of ways"),"."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\n// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),Object(l.b)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),Object(l.b)("p",null,"Relay's ahead-of-time compilation requires the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-in-relay#relay-compiler"}),"Relay Compiler"),", which you can install via ",Object(l.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add --dev relay-compiler\n\n")),Object(l.b)("p",null,"This installs the bin script ",Object(l.b)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",Object(l.b)("inlineCode",{parentName:"p"},"yarn"),"/",Object(l.b)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),Object(l.b)("p",null,"or if you are using jsx:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),Object(l.b)("p",null,"Then, after making edits to your application files, just run the ",Object(l.b)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn run relay\n\n")),Object(l.b)("p",null,"Alternatively, you can pass the ",Object(l.b)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",Object(l.b)("strong",{parentName:"p"},"Note:")," Requires ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/watchman"}),"watchman")," to be installed):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn run relay --watch\n\n")),Object(l.b)("p",null,"For more details, check out our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-in-relay#relay-compiler"}),"Relay Compiler docs"),"."),Object(l.b)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),Object(l.b)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),Object(l.b)("p",null,"However, Relay Modern expects modern JavaScript global types (",Object(l.b)("inlineCode",{parentName:"p"},"Map"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Set"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"Promise"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zloirock/core-js"}),"core-js")," or\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/usage/polyfill/"}),"@babel/polyfill"),"."),Object(l.b)("p",null,"A polyfilled environment for Relay using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zloirock/core-js"}),"core-js")," to support older browsers\nmight look like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")))}s.isMDXComponent=!0}}]);