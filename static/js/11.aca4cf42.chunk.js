(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{458:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(114),i=r(312);var c=Object(n.createContext)(null),u=r(369),l=r(70),s=r(349);var f=new WeakMap;function d(e){var t=f.get(e);return null==t&&(t=new Map,f.set(e,t)),t}function b(e){var t=e.query,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["query"]);return Object(l.a)(t)+"@@"+Object(s.b)(r)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){var r=void 0===t?{}:t,a=r.ssr,l=void 0===a||a,f=r.skip,p=void 0!==f&&f,h=r.suspend,g=void 0!==h&&h,O=r.pollInterval,w=r.notifyOnNetworkStatusChange,y=void 0!==w&&w,j=r.client,m=r.context,k=r.metadata,E=r.variables,P=r.fetchPolicy,x=r.errorPolicy,M=r.fetchResults,S=Object(i.b)(j),C=Object(n.useContext)(c),Q=l&&C,R=p||null!=C&&!l,q=!Q||"network-only"!==P&&"cache-and-network"!==P?P:"cache-first",I=Object(n.useMemo)(function(){return Object(s.a)({context:m,errorPolicy:x,fetchPolicy:q,fetchResults:M,metadata:k,notifyOnNetworkStatusChange:y,pollInterval:O,query:e,variables:E})},[e,O,y,m&&Object(s.b)(m),k&&Object(s.b)(k),E&&Object(s.b)(E),q,x,M]),W=Object(n.useMemo)(function(){return function(e,t){var r=d(e),n=b(t),a=r.get(n);return null==a&&(a=e.watchQuery(t),r.set(n,a)),a}(S,I)},[S,I]),J=Object(n.useState)(0),L=J[0],N=J[1],z=Object(n.useMemo)(function(){var e={fetchMore:W.fetchMore.bind(W),refetch:W.refetch.bind(W),startPolling:W.startPolling.bind(W),stopPolling:W.stopPolling.bind(W),updateQuery:W.updateQuery.bind(W)},t=W.getCurrentResult(),r=t.data;return(t.error||t.errors)&&(r=v({},t.data,{},(W.getLastResult()||{}).data)),v({},e,R?{data:void 0,error:void 0,loading:!1,networkStatus:void 0}:{data:r,error:t.errors&&t.errors.length>0?new o.b({graphQLErrors:t.errors}):t.error,errors:t.errors,loading:t.loading,networkStatus:g?void 0:t.networkStatus,partial:t.partial,stale:t.stale})},[R,L,W]);if(Object(n.useEffect)(function(){if(!R){var e=function(){Object(u.a)(function(){N(function(e){return e+1})})},t=W.subscribe(e,e);return function(e,t){var r=d(e),n=b(t);r.delete(n)}(S,I),function(){t.unsubscribe()}}},[R,W]),function(e,t){if(e&&t&&"cache-first"!==t)throw new Error("Fetch policy "+t+" is not supported without 'suspend: false'")}(g,q),z.partial){if(g)throw W.result();Q&&C.register(W.result())}return z}var h=r(315),g=r(318),O=r(449),w=r(324),y=r(325);function j(){var e=Object(w.a)(["\n  {\n    me {\n      _id\n      name\n    }\n  }\n"]);return j=function(){return e},e}var m=r.n(y)()(j());t.default=function(e){Object(n.useEffect)(function(){localStorage.getItem("token")||e.history.push("/register")},[]);var t=p(m),r=t.data,o=t.loading;return o?a.a.createElement(h.a,{active:o,inline:"centered",size:"large",style:{marginTop:200}}):a.a.createElement("div",null,a.a.createElement("div",{style:{maxWidth:600,margin:"100px auto"}},a.a.createElement(g.a,null,a.a.createElement(O.a,{textAlign:"center"},"Wellcome ",r.me.name," this is your secret page :)"))))}}}]);
//# sourceMappingURL=11.aca4cf42.chunk.js.map