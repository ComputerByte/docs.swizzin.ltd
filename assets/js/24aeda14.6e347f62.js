(window.webpackJsonp=window.webpackJsonp||[]).push([[21,17],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),o=(a(0),a(163)),l=a(166),i=a(167),s=a(57),c={id:"ombi",title:"Ombi",sidebar_label:"Ombi"},b={unversionedId:"applications/ombi",id:"applications/ombi",isDocsHomePage:!1,title:"Ombi",description:"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users.",source:"@site/docs/applications/ombi.mdx",sourceDirName:"applications",slug:"/applications/ombi",permalink:"/applications/ombi",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/ombi.mdx",version:"current",sidebar_label:"Ombi",frontMatter:{id:"ombi",title:"Ombi",sidebar_label:"Ombi"},sidebar:"docs",previous:{title:"Medusa",permalink:"/applications/medusa"},next:{title:"Sickchill",permalink:"/applications/sickchill"}},u=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Upgrading",id:"upgrading",children:[{value:"Upgrading to v4",id:"upgrading-to-v4",children:[]}]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Connecting to other apps",id:"connecting-to-other-apps",children:[]},{value:"Service Management",id:"service-management",children:[]}],p={toc:u};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users. "),Object(o.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(o.b)("p",null,"Installing Ombi is easy. Simply issue the following command from SSH:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install ombi\n")),Object(o.b)("p",null,"This command will configure and install ombi for your user."),Object(o.b)("p",null,"After installation, the files are stored in ",Object(o.b)("inlineCode",{parentName:"p"},"/opt/Ombi")," and the configuration and database are stored in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/Ombi")),Object(o.b)("h2",{id:"upgrading"},"Upgrading"),Object(o.b)("p",null,"Ombi is installed and maintained by the unofficially provided repository. In order to keep ombi up-to-date, update your packages with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo apt -y update\nsudo apt -y upgrade\n")),Object(o.b)("h3",{id:"upgrading-to-v4"},"Upgrading to v4"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"At the time of writing, v4 is not stable. That is why v3 is the default install, although it is EOL.\nOnce v4 becomes Stable, the default installation will no longer install v3.\nThis method will persist for the convenience of upgrading from v3 to"))),Object(o.b)("p",null,"You can install the v4 through the ",Object(o.b)("em",{parentName:"p"},"other")," unofficially provided repository by running the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"box upgrade ombi\n")),Object(o.b)("p",null,"The upgrading procedure on v4 is the same as above, i.e. through the use of ",Object(o.b)("inlineCode",{parentName:"p"},"apt")),Object(o.b)("h2",{id:"how-to-access"},"How to Access"),Object(o.b)("p",null,"After installation, Ombi will be available at the following web address: ",Object(o.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/ombi")),Object(o.b)("h2",{id:"connecting-to-other-apps"},"Connecting to other apps"),Object(o.b)("p",null,"If you would like to connect ombi to other applications you installed with swizzin, please follow the guides below."),Object(o.b)(l.a,{defaultValue:"plex",values:[{label:"Plex",value:"plex"},{label:"Emby/Jellyfin",value:"embyfin"},{label:"Sonarr",value:"sonarr"},{label:"Radarr",value:"radarr"},{label:"Lidarr",value:"lidarr"},{label:"SickRage",value:"sickrage"},{label:"CouchPotato",value:"couchpotato"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"plex",mdxType:"TabItem"},Object(o.b)("p",null,"  Go to ",Object(o.b)("strong",{parentName:"p"},"Settings")," -> ",Object(o.b)("strong",{parentName:"p"},"Media Server")," -> ",Object(o.b)("strong",{parentName:"p"},"Plex")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Click on "Add Server"'),Object(o.b)("li",{parentName:"ol"},"Connect your server through either one of the two",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Plex tokens (easier)",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Fill in your password ans username"),Object(o.b)("li",{parentName:"ol"},'Press "Load Servers"'),Object(o.b)("li",{parentName:"ol"},"Select your Plex server"))),Object(o.b)("li",{parentName:"ul"},"Manually",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Hostname: ",Object(o.b)("inlineCode",{parentName:"li"},"localhost")),Object(o.b)("li",{parentName:"ul"},"Port: ",Object(o.b)("inlineCode",{parentName:"li"},"32400")),Object(o.b)("li",{parentName:"ul"},"SSL: ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"OFF"))),Object(o.b)("li",{parentName:"ul"},"Plex auth token: ",Object(o.b)("a",{parentName:"li",href:"https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/"},"Use guide here")),Object(o.b)("li",{parentName:"ul"},"Machine identifier: ",Object(o.b)("a",{parentName:"li",href:"https://forums.plex.tv/t/extract-machine-id-from-database-due-missing-preferences-xml/520080/3"},"Use guide here")))))),Object(o.b)("li",{parentName:"ol"},'Press "Test Connectivity"'),Object(o.b)("li",{parentName:"ol"},'Press "Submit"'),Object(o.b)("li",{parentName:"ol"},"Load your libraries and select which ones to track"),Object(o.b)("li",{parentName:"ol"},'Press "Submit"  '))),Object(o.b)(i.a,{value:"sonarr",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fill in the following fields:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Sonarr Hostname/IP = ",Object(o.b)("inlineCode",{parentName:"li"},"localhost")),Object(o.b)("li",{parentName:"ul"},"Port: ",Object(o.b)("inlineCode",{parentName:"li"},"8989")),Object(o.b)("li",{parentName:"ul"},"API Key: Retrieve from Sonarr -> Settings -> General and copy the API Key value"),Object(o.b)("li",{parentName:"ul"},"SSL: ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"OFF"))),Object(o.b)("li",{parentName:"ul"},"Sonarr base URL: ",Object(o.b)("inlineCode",{parentName:"li"},"/sonarr/")))),Object(o.b)("li",{parentName:"ol"},"Test the connection"),Object(o.b)("li",{parentName:"ol"},'Press "Submit"'),Object(o.b)("li",{parentName:"ol"},"Load and choose qualities"),Object(o.b)("li",{parentName:"ol"},"Load and choose folder"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"(if on Sonarr v3)")," Load and choose languages"))),Object(o.b)(i.a,{value:"radarr",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fill in the following fields:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Radarr Hostname/IP = ",Object(o.b)("inlineCode",{parentName:"li"},"localhost")),Object(o.b)("li",{parentName:"ul"},"Port: ",Object(o.b)("inlineCode",{parentName:"li"},"7878")),Object(o.b)("li",{parentName:"ul"},"API Key: Retrieve from Radarr -> Settings -> General and copy the API Key value"),Object(o.b)("li",{parentName:"ul"},"SSL: ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"OFF"))),Object(o.b)("li",{parentName:"ul"},"Radarr base URL: ",Object(o.b)("inlineCode",{parentName:"li"},"/Radarr/")))),Object(o.b)("li",{parentName:"ol"},"Test the connection"),Object(o.b)("li",{parentName:"ol"},'Press "Submit"'),Object(o.b)("li",{parentName:"ol"},"Load and choose qualities"),Object(o.b)("li",{parentName:"ol"},"Load and choose folder"))),Object(o.b)(i.a,{value:"lidarr",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fill in the following fields:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Lidarr Hostname/IP = ",Object(o.b)("inlineCode",{parentName:"li"},"localhost")),Object(o.b)("li",{parentName:"ul"},"Port: ",Object(o.b)("inlineCode",{parentName:"li"},"8686")),Object(o.b)("li",{parentName:"ul"},"API Key: Retrieve from Lidarr -> Settings -> General and copy the API Key value"),Object(o.b)("li",{parentName:"ul"},"SSL: ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"OFF"))),Object(o.b)("li",{parentName:"ul"},"Lidarr base URL: ",Object(o.b)("inlineCode",{parentName:"li"},"/lidarr/")))),Object(o.b)("li",{parentName:"ol"},"Test the connection"),Object(o.b)("li",{parentName:"ol"},'Press "Submit"'),Object(o.b)("li",{parentName:"ol"},"Load and choose qualities"),Object(o.b)("li",{parentName:"ol"},"Load and choose folder"))),Object(o.b)(i.a,{value:"sickrage",mdxType:"TabItem"},Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"No instructions yet!")," Please let us know if you set this up correctly so we can add the values, or PR these in. thanks!")),Object(o.b)(i.a,{value:"couchpotato",mdxType:"TabItem"},Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"No instructions yet!")," Please let us know if you set this up correctly so we can add the values, or PR these in. thanks!")),Object(o.b)(i.a,{value:"embyfin",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hostname/IP: ",Object(o.b)("inlineCode",{parentName:"li"},"localhost")),Object(o.b)("li",{parentName:"ul"},"Port: ",Object(o.b)("inlineCode",{parentName:"li"},"8096")),Object(o.b)("li",{parentName:"ul"},"SSL: ",Object(o.b)("inlineCode",{parentName:"li"},"Off")),Object(o.b)("li",{parentName:"ul"},"API Key: ",Object(o.b)("em",{parentName:"li"},"(Retrieve from Jellyfin -> Dashbaord -> Advanced -> API Keys)")),Object(o.b)("li",{parentName:"ul"},"Externally facing hostname: ",Object(o.b)("em",{parentName:"li"},"(Your server domain/IP)")),Object(o.b)("li",{parentName:"ul"},"Server ID: ",Object(o.b)("em",{parentName:"li"},"(Retrieve from Jellyfin -> Discover server information)"))))),Object(o.b)("h2",{id:"service-management"},"Service Management"),Object(o.b)("p",null,"The systemd service for Ombi is not enabled for use in a multi-user environment."),Object(o.b)("p",null,"The service file resides at:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/ombi.service\n")),Object(o.b)(s.default,{service:"ombi",mdxType:"SystemdTabs"}))}m.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.a.createElement(d,i(i({ref:t},c),{},{components:a})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(170),l=a(165),i=a(58),s=a.n(i),c=37,b=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(o.a)(),y=d.tabGroupChoices,h=d.setTabGroupChoices,f=Object(n.useState)(i),O=f[0],v=f[1],g=Object(n.useState)(!1),j=g[0],N=g[1];if(null!=p){var k=y[p];null!=k&&k!==O&&u.some((function(e){return e.value===k}))&&v(k)}var w=function(e){v(e),null!=p&&h(p,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},C=function(){N(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",t,s.a.tabItem,{"tabs__item--active":O===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return w(t)},onClick:function(){w(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},168:function(e,t,a){"use strict";var n=a(0),r=a(172);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=a(0),l={Prism:n.a,theme:r};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},p=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=s({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=s({},a,{backgroundColor:null}),r};function m(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var d=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?p(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},i=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),i(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,i=[],s=[i];l>-1;){for(;(o=n[l]++)<r[l];){var p=void 0,m=t[l],d=a[l][o];if("string"==typeof d?(m=l>0?m:["plain"],p=d):(m=u(m,d.type),d.alias&&(m=u(m,d.alias)),p=d.content),"string"==typeof p){var y=p.split(c),h=y.length;i.push({types:m,content:y[0]});for(var f=1;f<h;f++)b(i),s.push(i=[]),i.push({types:m,content:y[f]})}else l++,t.push(m),a.push(p),n.push(0),r.push(p.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return b(i),s}(void 0!==l?this.tokenize(t,n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=d},170:function(e,t,a){"use strict";var n=a(0),r=a(171);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},172:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},173:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(3),r=a(0),o=a.n(r),l=a(165),i=a(169);var s=a(173),c=a.n(s),b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},u=a(168),p=a(164),m=function(){var e=Object(p.useThemeConfig)().prism,t=Object(u.a)().isDarkTheme,a=e.theme||b,n=e.darkTheme||a;return t?n:a},d=a(175),y=a(59),h=a.n(y),f=/{([\d,-]+)}/,O=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function v(e){var t=e.children,a=e.className,s=e.metastring,b=e.title,u=Object(p.useThemeConfig)().prism,y=Object(r.useState)(!1),v=y[0],g=y[1],j=Object(r.useState)(!1),N=j[0],k=j[1];Object(r.useEffect)((function(){k(!0)}),[]);var w=Object(p.parseCodeBlockTitle)(s)||b,x=Object(r.useRef)(null),T=[],C=m(),P=Array.isArray(t)?t.join(""):t;if(s&&f.test(s)){var S=s.match(f)[1];T=c()(S).filter((function(e){return e>0}))}var E=a&&a.replace(/language-/,"");!E&&u.defaultLanguage&&(E=u.defaultLanguage);var I=P.replace(/\n$/,"");if(0===T.length&&void 0!==E){for(var L,D="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"]);case"jsx":case"tsx":return O(["js","jsBlock","jsx"]);case"html":return O(["js","jsBlock","html"]);case"python":case"py":return O(["python"]);default:return O()}}(E),A=P.replace(/\n$/,"").split("\n"),B=0;B<A.length;){var M=B+1,F=A[B].match(R);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=M+",";break;case"highlight-start":L=M;break;case"highlight-end":D+=L+"-"+(M-1)+","}A.splice(B,1)}else B+=1}T=c()(D),I=A.join("\n")}var z=function(){!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus()}(I),g(!0),setTimeout((function(){return g(!1)}),2e3)};return o.a.createElement(i.a,Object(n.a)({},i.b,{key:String(N),theme:C,code:I,language:E}),(function(e){var t,a=e.className,r=e.style,i=e.tokens,s=e.getLineProps,c=e.getTokenProps;return o.a.createElement("div",{className:h.a.codeBlockContainer},w&&o.a.createElement("div",{style:r,className:h.a.codeBlockTitle},w),o.a.createElement("div",{className:Object(l.a)(h.a.codeBlockContent,E)},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(a,h.a.codeBlock,"thin-scrollbar",(t={},t[h.a.codeBlockWithTitle]=w,t))},o.a.createElement("div",{className:h.a.codeBlockLines,style:r},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=s({line:e,key:t});return T.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return o.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))})))})))),o.a.createElement("button",{ref:x,type:"button","aria-label":Object(d.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(h.a.copyButton),onClick:z},v?o.a.createElement(d.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(d.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),o=(a(0),a(163)),l=a(166),i=a(167),s=a(174),c={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},u=[],p={toc:u};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(l.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"status",mdxType:"TabItem"},Object(o.b)(s.a,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"start",mdxType:"TabItem"},Object(o.b)(s.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(s.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(s.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(s.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(s.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);