(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(75)),i={id:"customization",title:"Customization"},c={unversionedId:"getting-started/customization",id:"getting-started/customization",isDocsHomePage:!1,title:"Customization",description:"SCSS",source:"@site/docs\\getting-started\\customization.md",slug:"/getting-started/customization",permalink:"/css-pro-layout/docs/getting-started/customization",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/customization.md",version:"current",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/css-pro-layout/docs/getting-started/examples"},next:{title:"Layout",permalink:"/css-pro-layout/docs/reference/layout"}},s=[{value:"SCSS",id:"scss",children:[]},{value:"Less",id:"less",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"scss"},"SCSS"),Object(o.b)("p",null,"We provide a set of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/"}),"SCSS")," variables which you can override to customize your layout"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"$sidebar-width: 280px !default;\n$sidebar-collapsed-width: 80px !default;\n$header-height: 64px !default;\n$footer-height: 64px !default;\n$breakpoint-xs: 480px !default;\n$breakpoint-sm: 576px !default;\n$breakpoint-md: 768px !default;\n$breakpoint-lg: 992px !default;\n$breakpoint-xl: 1200px !default;\n$breakpoint-xxl: 1600px !default;\n")),Object(o.b)("h3",{id:"less"},"Less"),Object(o.b)("p",null,"The same set of variables are also available in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://lesscss.org/"}),"Less")," for you to override"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-less"}),"@sidebar-width: 280px;\n@sidebar-collapsed-width: 80px;\n@header-height: 64px;\n@footer-height: 64px;\n@breakpoint-xs: 480px;\n@breakpoint-sm: 576px;\n@breakpoint-md: 768px;\n@breakpoint-lg: 992px;\n@breakpoint-xl: 1200px;\n@breakpoint-xxl: 1600px;\n")))}l.isMDXComponent=!0},75:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);