(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{42:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return p});n(0);var r=n(70);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},i=[],c={rightToc:i},u="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(u,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",Object(r.b)("a",a({parentName:"p"},{href:"https://docs.python.org/3/howto/logging.html"}),"here"),"."),Object(r.b)("p",null,"This example demonstrates how to to customize the logging behavior of your Hydra app.\nThe modified logging configuration differs from the default in the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It outputs to stdout and not to a log file as well"),Object(r.b)("li",{parentName:"ul"},"It uses a simpler log pattern, without the timestamp etc.")),Object(r.b)("p",null,"Note that the resulting config will be a combination of the default logging config and your specification,\nWith your specification overriding the default."),Object(r.b)("p",null,".hydra/hydra.yaml"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - logging\n")),Object(r.b)("p",null,".hydra/logging.yaml"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  # python logging configuration\n  logging:\n    formatters:\n      simple:\n        format: '[%(levelname)s] - %(message)s'\n    root:\n      handlers: [console]\n")),Object(r.b)("p",null,"Output:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"$ python example.py\n[INFO] - Info level message\n")),Object(r.b)("p",null,"Check the ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/demos/99_hydra_configuration/logging"}),"runnable example"),"."))}p.isMDXComponent=!0},70:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return g});var r=n(0),a=n.n(r),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=function(e){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),c=l(t),p=n,g=c[o+"."+p]||c[p]||u[p]||r;return t?a.a.createElement(g,Object.assign({},i,{components:t})):a.a.createElement(g,i)};function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=n[g];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);