!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SvelteTable=t()}(this,(function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function l(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n,l){if(e){const o=a(e,t,n,l);return e[0](o)}}function a(e,n,l,o){return e[1]&&o?t(l.ctx.slice(),e[1](o(n))):l.ctx}function i(e,t,n,l){if(e[2]&&l){const o=e[2](l(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|o[l];return e}return t.dirty|o}return t.dirty}function d(e,t,n,l,o,s){if(o){const r=a(t,n,l,s);e.p(r,o)}}function u(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function f(e){return null==e?"":e}function p(e,t){e.appendChild(t)}function h(e,t,n){const l=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!l.getElementById(t)){const e=$("style");e.id=t,e.textContent=n,function(e,t){p(e.head||e,t),t.sheet}(l,e)}}function m(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function x(){return v(" ")}function w(){return v("")}function b(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function E(e,t){e.value=null==t?"":t}function _(e,t,n){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}class C{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var l;this.e||(this.is_svg?this.e=(l=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",l)):this.e=$(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)m(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}function O(e,t){return new e(t)}let S;function T(e){S=e}function R(){const e=function(){if(!S)throw new Error("Function called outside component initialization");return S}();return(t,n,{cancelable:l=!1}={})=>{const o=e.$$.callbacks[t];if(o){const s=function(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,l,t),o}(t,n,{cancelable:l});return o.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}const A=[],V=[];let L=[];const I=[],K=Promise.resolve();let B=!1;function j(e){L.push(e)}const M=new Set;let P=0;function D(){if(0!==P)return;const e=S;do{try{for(;P<A.length;){const e=A[P];P++,T(e),F(e.$$)}}catch(e){throw A.length=0,P=0,e}for(T(null),A.length=0,P=0;V.length;)V.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];M.has(t)||(M.add(t),t())}L.length=0}while(A.length);for(;I.length;)I.pop()();B=!1,M.clear(),T(e)}function F(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const H=new Set;let q;function z(){q={r:0,c:[],p:q}}function G(){q.r||o(q.c),q=q.p}function J(e,t){e&&e.i&&(H.delete(e),e.i(t))}function Q(e,t,n,l){if(e&&e.o){if(H.has(e))return;H.add(e),q.c.push((()=>{H.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}else l&&l()}function U(e){e&&e.c()}function W(e,t,l,r){const{fragment:c,after_update:a}=e.$$;c&&c.m(t,l),r||j((()=>{const t=e.$$.on_mount.map(n).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):o(t),e.$$.on_mount=[]})),a.forEach(j)}function X(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];L.forEach((l=>-1===e.indexOf(l)?t.push(l):n.push(l))),n.forEach((e=>e())),L=t}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(A.push(e),B||(B=!0,K.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,n,s,r,c,a,i,d=[-1]){const u=S;T(t);const f=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:c,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:n.target||u.$$.root};i&&i(f.root);let p=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&Y(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&J(t.$$.fragment),W(t,n.target,n.anchor,n.customElement),D()}T(u)}function ee(e){h(e,"svelte-dsaf7t","table.svelte-dsaf7t.svelte-dsaf7t{width:100%}.isSortable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}.isClickable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}tr.svelte-dsaf7t th select.svelte-dsaf7t{width:100%}")}function te(e,t,n){const l=e.slice();return l[56]=t[n],l[58]=n,l}const ne=e=>({row:8&e[0]}),le=e=>({row:e[56],n:e[58]});function oe(e,t,n){const l=e.slice();return l[59]=t[n],l[61]=n,l}const se=e=>({row:8&e[0]}),re=e=>({row:e[56],n:e[58]});function ce(e,t,n){const l=e.slice();return l[59]=t[n],l}const ae=e=>({sortOrder:2&e[0],sortBy:1&e[0]}),ie=e=>({sortOrder:e[1],sortBy:e[0]});function de(e,t,n){const l=e.slice();return l[59]=t[n],l[64]=t,l[65]=n,l}function ue(e,t,n){const l=e.slice();return l[66]=t[n],l}function fe(e){let t,n,l,o,s,r=e[23][e[59].key],c=[];for(let t=0;t<r.length;t+=1)c[t]=he(ue(e,r,t));function a(){e[44].call(t,e[59])}return{c(){t=$("select"),n=$("option");for(let e=0;e<c.length;e+=1)c[e].c();n.__value=void 0,n.value=n.__value,N(t,"class",l=f(e[26](e[15]))+" svelte-dsaf7t"),void 0===e[2][e[59].key]&&j(a)},m(l,r){m(l,t,r),p(t,n);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,null);_(t,e[2][e[59].key],!0),o||(s=b(t,"change",a),o=!0)},p(n,o){if(e=n,8388624&o[0]){let n;for(r=e[23][e[59].key],n=0;n<r.length;n+=1){const l=ue(e,r,n);c[n]?c[n].p(l,o):(c[n]=he(l),c[n].c(),c[n].m(t,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}32768&o[0]&&l!==(l=f(e[26](e[15]))+" svelte-dsaf7t")&&N(t,"class",l),8388628&o[0]&&_(t,e[2][e[59].key])},d(e){e&&y(t),g(c,e),o=!1,s()}}}function pe(e){let t,n,l,o,s;function r(){e[43].call(t,e[59])}return{c(){t=$("input"),N(t,"class",n=f(e[26](e[16]))+" svelte-dsaf7t"),N(t,"placeholder",l=e[59].filterPlaceholder)},m(n,l){m(n,t,l),E(t,e[2][e[59].key]),o||(s=b(t,"input",r),o=!0)},p(o,s){e=o,65536&s[0]&&n!==(n=f(e[26](e[16]))+" svelte-dsaf7t")&&N(t,"class",n),8388624&s[0]&&l!==(l=e[59].filterPlaceholder)&&N(t,"placeholder",l),8388628&s[0]&&t.value!==e[2][e[59].key]&&E(t,e[2][e[59].key])},d(e){e&&y(t),o=!1,s()}}}function he(e){let t,n,l,o=e[66].name+"";return{c(){t=$("option"),n=v(o),t.__value=l=e[66].value,t.value=t.__value},m(e,l){m(e,t,l),p(t,n)},p(e,s){8388624&s[0]&&o!==(o=e[66].name+"")&&k(n,o),8388624&s[0]&&l!==(l=e[66].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&y(t)}}}function me(e){let t,n;function l(e,t){return e[59].hideFilterHeader||void 0===e[59].searchValue?e[59].hideFilterHeader||void 0===e[23][e[59].key]?void 0:fe:pe}let o=l(e),s=o&&o(e);return{c(){t=$("th"),s&&s.c(),N(t,"class",n=f(e[26]([e[59].headerFilterClass]))+" svelte-dsaf7t")},m(e,n){m(e,t,n),s&&s.m(t,null)},p(e,r){o===(o=l(e))&&s?s.p(e,r):(s&&s.d(1),s=o&&o(e),s&&(s.c(),s.m(t,null))),8388624&r[0]&&n!==(n=f(e[26]([e[59].headerFilterClass]))+" svelte-dsaf7t")&&N(t,"class",n)},d(e){e&&y(t),s&&s.d()}}}function ye(e){let t;return{c(){t=$("th")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}function ge(e){let t,n;return{c(){t=new C(!1),n=w(),t.a=n},m(l,o){t.m(e[8],l,o),m(l,n,o)},p(e,n){256&n[0]&&t.p(e[8])},d(e){e&&y(n),e&&t.d()}}}function $e(e){let t,n,l=(1===e[1]?e[6]:e[7])+"";return{c(){t=new C(!1),n=w(),t.a=n},m(e,o){t.m(l,e,o),m(e,n,o)},p(e,n){194&n[0]&&l!==(l=(1===e[1]?e[6]:e[7])+"")&&t.p(l)},d(e){e&&y(n),e&&t.d()}}}function ve(e){let t,n,l,s,r,c,a=e[59].title+"";function i(e,t){return e[0]===e[59].key?$e:e[59].sortable?ge:void 0}let d=i(e),u=d&&d(e);function h(...t){return e[45](e[59],...t)}function g(...t){return e[46](e[59],...t)}return{c(){t=$("th"),n=v(a),l=x(),u&&u.c(),N(t,"class",s=f(e[26]([e[59].sortable?"isSortable":"",e[59].headerClass]))+" svelte-dsaf7t"),N(t,"tabindex","0")},m(e,o){m(e,t,o),p(t,n),p(t,l),u&&u.m(t,null),r||(c=[b(t,"click",h),b(t,"keypress",g)],r=!0)},p(l,o){e=l,16&o[0]&&a!==(a=e[59].title+"")&&k(n,a),d===(d=i(e))&&u?u.p(e,o):(u&&u.d(1),u=d&&d(e),u&&(u.c(),u.m(t,null))),8388624&o[0]&&s!==(s=f(e[26]([e[59].sortable?"isSortable":"",e[59].headerClass]))+" svelte-dsaf7t")&&N(t,"class",s)},d(e){e&&y(t),u&&u.d(),r=!1,o(c)}}}function xe(e){let t;return{c(){t=$("th")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}function we(t){let n,l,o=(t[59].renderValue?t[59].renderValue(t[56]):t[59].value(t[56]))+"";return{c(){n=new C(!1),l=w(),n.a=l},m(e,t){n.m(o,e,t),m(e,l,t)},p(e,t){24&t[0]&&o!==(o=(e[59].renderValue?e[59].renderValue(e[56]):e[59].value(e[56]))+"")&&n.p(o)},i:e,o:e,d(e){e&&y(l),e&&n.d()}}}function be(e){let n,l,o;const s=[e[59].renderComponent.props||{},{row:e[56]},{col:e[59]}];var r=e[59].renderComponent.component||e[59].renderComponent;function c(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return r&&(n=O(r,c())),{c(){n&&U(n.$$.fragment),l=w()},m(e,t){n&&W(n,e,t),m(e,l,t),o=!0},p(e,t){const o=24&t[0]?function(e,t){const n={},l={},o={$$scope:1};let s=e.length;for(;s--;){const r=e[s],c=t[s];if(c){for(const e in r)e in c||(l[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[s]=c}else for(const e in r)o[e]=1}for(const e in l)e in n||(n[e]=void 0);return n}(s,[16&t[0]&&(a=e[59].renderComponent.props||{},"object"==typeof a&&null!==a?a:{}),8&t[0]&&{row:e[56]},16&t[0]&&{col:e[59]}]):{};var a;if(16&t[0]&&r!==(r=e[59].renderComponent.component||e[59].renderComponent)){if(n){z();const e=n;Q(e.$$.fragment,1,0,(()=>{X(e,1)})),G()}r?(n=O(r,c()),U(n.$$.fragment),J(n.$$.fragment,1),W(n,l.parentNode,l)):n=null}else r&&n.$set(o)},i(e){o||(n&&J(n.$$.fragment,e),o=!0)},o(e){n&&Q(n.$$.fragment,e),o=!1},d(e){e&&y(l),n&&X(n,e)}}}function Ne(e){let t,n,l,s,r,c,a;const i=[be,we],d=[];function u(e,t){return e[59].renderComponent?0:1}function p(...t){return e[47](e[56],e[59],...t)}function h(...t){return e[48](e[56],e[59],...t)}return n=u(e),l=d[n]=i[n](e),{c(){t=$("td"),l.c(),N(t,"class",s=f(e[26](["string"==typeof e[59].class?e[59].class:null,"function"==typeof e[59].class?e[59].class(e[56],e[58],e[61]):null,e[18]]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),d[n].m(t,null),r=!0,c||(a=[b(t,"click",p),b(t,"keypress",h)],c=!0)},p(o,c){let a=n;n=u(e=o),n===a?d[n].p(e,c):(z(),Q(d[a],1,1,(()=>{d[a]=null})),G(),l=d[n],l?l.p(e,c):(l=d[n]=i[n](e),l.c()),J(l,1),l.m(t,null)),(!r||8650776&c[0]&&s!==(s=f(e[26](["string"==typeof e[59].class?e[59].class:null,"function"==typeof e[59].class?e[59].class(e[56],e[58],e[61]):null,e[18]]))+" svelte-dsaf7t"))&&N(t,"class",s)},i(e){r||(J(l),r=!0)},o(e){Q(l),r=!1},d(e){e&&y(t),d[n].d(),c=!1,o(a)}}}function ke(e){let t,n,l,s,r,c=(e[56].$expanded?e[9]:e[10])+"";function a(...t){return e[49](e[56],...t)}function i(...t){return e[50](e[56],...t)}return{c(){t=$("td"),n=$("span"),N(n,"tabindex","0"),N(n,"role","button"),N(t,"class",l=f(e[26](["isClickable",e[22]]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),p(t,n),n.innerHTML=c,s||(r=[b(n,"click",a),b(n,"keypress",i)],s=!0)},p(o,s){e=o,1544&s[0]&&c!==(c=(e[56].$expanded?e[9]:e[10])+"")&&(n.innerHTML=c),4194304&s[0]&&l!==(l=f(e[26](["isClickable",e[22]]))+" svelte-dsaf7t")&&N(t,"class",l)},d(e){e&&y(t),s=!1,o(r)}}}function Ee(e){let t,n,l,o;const s=e[42].expanded,r=c(s,e,e[41],le);return{c(){t=$("tr"),n=$("td"),r&&r.c(),N(n,"colspan",e[24]),N(t,"class",l=f(e[26](e[21]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),p(t,n),r&&r.m(n,null),o=!0},p(e,c){r&&r.p&&(!o||8&c[0]|1024&c[1])&&d(r,s,e,e[41],o?i(s,e[41],c,ne):u(e[41]),le),(!o||16777216&c[0])&&N(n,"colspan",e[24]),(!o||2097152&c[0]&&l!==(l=f(e[26](e[21]))+" svelte-dsaf7t"))&&N(t,"class",l)},i(e){o||(J(r,e),o=!0)},o(e){Q(r,e),o=!1},d(e){e&&y(t),r&&r.d(e)}}}function _e(e){let t;const n=e[42].row,l=c(n,e,e[41],re),s=l||function(e){let t,n,l,s,r,c,a,i,d,u=e[4],h=[];for(let t=0;t<u.length;t+=1)h[t]=Ne(oe(e,u,t));const v=e=>Q(h[e],1,1,(()=>{h[e]=null}));let w=e[11]&&ke(e);function k(...t){return e[51](e[56],...t)}function E(...t){return e[52](e[56],...t)}let _=e[56].$expanded&&Ee(e);return{c(){t=$("tr");for(let e=0;e<h.length;e+=1)h[e].c();n=x(),w&&w.c(),r=x(),_&&_.c(),c=x(),N(t,"class",l=f(e[26](["string"==typeof e[17]?e[17]:null,"function"==typeof e[17]?e[17](e[56],e[58]):null,e[56].$expanded&&e[20],e[56].$selected&&e[19]]))+" svelte-dsaf7t"),N(t,"tabindex",s=e[5]?"0":null)},m(e,l){m(e,t,l);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(t,null);p(t,n),w&&w.m(t,null),m(e,r,l),_&&_.m(e,l),m(e,c,l),a=!0,i||(d=[b(t,"click",k),b(t,"keypress",E)],i=!0)},p(o,r){if(e=o,1141112856&r[0]){let l;for(u=e[4],l=0;l<u.length;l+=1){const o=oe(e,u,l);h[l]?(h[l].p(o,r),J(h[l],1)):(h[l]=Ne(o),h[l].c(),J(h[l],1),h[l].m(t,n))}for(z(),l=u.length;l<h.length;l+=1)v(l);G()}e[11]?w?w.p(e,r):(w=ke(e),w.c(),w.m(t,null)):w&&(w.d(1),w=null),(!a||1703944&r[0]&&l!==(l=f(e[26](["string"==typeof e[17]?e[17]:null,"function"==typeof e[17]?e[17](e[56],e[58]):null,e[56].$expanded&&e[20],e[56].$selected&&e[19]]))+" svelte-dsaf7t"))&&N(t,"class",l),(!a||32&r[0]&&s!==(s=e[5]?"0":null))&&N(t,"tabindex",s),e[56].$expanded?_?(_.p(e,r),8&r[0]&&J(_,1)):(_=Ee(e),_.c(),J(_,1),_.m(c.parentNode,c)):_&&(z(),Q(_,1,1,(()=>{_=null})),G())},i(e){if(!a){for(let e=0;e<u.length;e+=1)J(h[e]);J(_),a=!0}},o(e){h=h.filter(Boolean);for(let e=0;e<h.length;e+=1)Q(h[e]);Q(_),a=!1},d(e){e&&y(t),g(h,e),w&&w.d(),e&&y(r),_&&_.d(e),e&&y(c),i=!1,o(d)}}}(e);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,o){l?l.p&&(!t||8&o[0]|1024&o[1])&&d(l,n,e,e[41],t?i(n,e[41],o,se):u(e[41]),re):s&&s.p&&(!t||25038392&o[0]|1024&o[1])&&s.p(e,t?o:[-1,-1,-1])},i(e){t||(J(s,e),t=!0)},o(e){Q(s,e),t=!1},d(e){s&&s.d(e)}}}function Ce(e){let t,n,l,o,s,r,a,h,v,w=e[25]&&function(e){let t,n,l=e[4],o=[];for(let t=0;t<l.length;t+=1)o[t]=me(de(e,l,t));let s=e[11]&&ye();return{c(){t=$("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),s&&s.c(),N(t,"class","svelte-dsaf7t")},m(e,l){m(e,t,l);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);p(t,n),s&&s.m(t,null)},p(e,r){if(75595796&r[0]){let s;for(l=e[4],s=0;s<l.length;s+=1){const c=de(e,l,s);o[s]?o[s].p(c,r):(o[s]=me(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}e[11]?s||(s=ye(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&y(t),g(o,e),s&&s.d()}}}(e);const b=e[42].header,k=c(b,e,e[41],ie),E=k||function(e){let t,n,l=e[4],o=[];for(let t=0;t<l.length;t+=1)o[t]=ve(ce(e,l,t));let s=e[11]&&xe();return{c(){t=$("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),s&&s.c()},m(e,l){m(e,t,l);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);p(t,n),s&&s.m(t,null)},p(e,r){if(201327059&r[0]){let s;for(l=e[4],s=0;s<l.length;s+=1){const c=ce(e,l,s);o[s]?o[s].p(c,r):(o[s]=ve(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}e[11]?s||(s=xe(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&y(t),g(o,e),s&&s.d()}}}(e);let _=e[3],C=[];for(let t=0;t<_.length;t+=1)C[t]=_e(te(e,_,t));const O=e=>Q(C[e],1,1,(()=>{C[e]=null}));return{c(){t=$("table"),n=$("thead"),w&&w.c(),l=x(),E&&E.c(),s=x(),r=$("tbody");for(let e=0;e<C.length;e+=1)C[e].c();N(n,"class",o=f(e[26](e[13]))+" svelte-dsaf7t"),N(r,"class",a=f(e[26](e[14]))+" svelte-dsaf7t"),N(t,"class",h=f(e[26](e[12]))+" svelte-dsaf7t")},m(e,o){m(e,t,o),p(t,n),w&&w.m(n,null),p(n,l),E&&E.m(n,null),p(t,s),p(t,r);for(let e=0;e<C.length;e+=1)C[e]&&C[e].m(r,null);v=!0},p(e,l){if(e[25]&&w.p(e,l),k?k.p&&(!v||3&l[0]|1024&l[1])&&d(k,b,e,e[41],v?i(b,e[41],l,ae):u(e[41]),ie):E&&E.p&&(!v||2515&l[0])&&E.p(e,v?l:[-1,-1,-1]),(!v||8192&l[0]&&o!==(o=f(e[26](e[13]))+" svelte-dsaf7t"))&&N(n,"class",o),1971195448&l[0]|1024&l[1]){let t;for(_=e[3],t=0;t<_.length;t+=1){const n=te(e,_,t);C[t]?(C[t].p(n,l),J(C[t],1)):(C[t]=_e(n),C[t].c(),J(C[t],1),C[t].m(r,null))}for(z(),t=_.length;t<C.length;t+=1)O(t);G()}(!v||16384&l[0]&&a!==(a=f(e[26](e[14]))+" svelte-dsaf7t"))&&N(r,"class",a),(!v||4096&l[0]&&h!==(h=f(e[26](e[12]))+" svelte-dsaf7t"))&&N(t,"class",h)},i(e){if(!v){J(E,e);for(let e=0;e<_.length;e+=1)J(C[e]);v=!0}},o(e){Q(E,e),C=C.filter(Boolean);for(let e=0;e<C.length;e+=1)Q(C[e]);v=!1},d(e){e&&y(t),w&&w.d(),E&&E.d(e),g(C,e)}}}function Oe(e,t,n){let l,{$$slots:o={},$$scope:s}=t,{columns:r}=t,{rows:c}=t,{c_rows:a}=t,{sortOrders:i=[1,-1]}=t,{sortBy:d=""}=t,{sortOrder:u=i?.[0]||1}=t,{filterSelections:f={}}=t,{expanded:p=[]}=t,{selected:h=[]}=t,{expandRowKey:m=null}=t,{rowKey:y=m}=t,{expandSingle:g=!1}=t,{selectSingle:$=!1}=t,{selectOnClick:v=!1}=t,{iconAsc:x="▲"}=t,{iconDesc:w="▼"}=t,{iconSortable:b=""}=t,{iconExpand:N="▼"}=t,{iconExpanded:k="▲"}=t,{showExpandIcon:E=!1}=t,{classNameTable:_=""}=t,{classNameThead:C=""}=t,{classNameTbody:O=""}=t,{classNameSelect:S=""}=t,{classNameInput:T=""}=t,{classNameRow:A=null}=t,{classNameCell:V=""}=t,{classNameRowSelected:L=null}=t,{classNameRowExpanded:I=null}=t,{classNameExpandedContent:K=""}=t,{classNameCellExpand:B=""}=t;const j=R();let M=()=>"";if(!Array.isArray(p))throw"'expanded' needs to be an array";if(!Array.isArray(h))throw"'selection' needs to be an array";null!==m&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),L&&!y&&console.error("'rowKey' is needed to use 'classNameRowSelected'");let P,D=r.some((e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue))),F={};const H=(e,t)=>{var l;t.sortable&&(n(1,(l=t.key,u=l===d?i[(i.findIndex((e=>e===u))+1)%i.length]:i[0])),n(0,d=u?t.key:void 0)),j("clickCol",{event:e,col:t,key:t.key})},q=(e,t)=>{v&&($?h.includes(t[y])?n(32,h=[]):n(32,h=[t[y]]):h.includes(t[y])?n(32,h=h.filter((e=>e!=t[y]))):n(32,h=[...h,t[y]].sort())),j("clickRow",{event:e,row:t})},z=(e,t)=>{t.$expanded=!t.$expanded;const l=t[y];g&&t.$expanded?n(31,p=[l]):g?n(31,p=[]):t.$expanded?n(31,p=[...p,l]):n(31,p=p.filter((e=>e!=l))),j("clickExpand",{event:e,row:t})},G=(e,t,n)=>{j("clickCell",{event:e,row:t,key:n})};return e.$$set=e=>{"columns"in e&&n(4,r=e.columns),"rows"in e&&n(33,c=e.rows),"c_rows"in e&&n(3,a=e.c_rows),"sortOrders"in e&&n(34,i=e.sortOrders),"sortBy"in e&&n(0,d=e.sortBy),"sortOrder"in e&&n(1,u=e.sortOrder),"filterSelections"in e&&n(2,f=e.filterSelections),"expanded"in e&&n(31,p=e.expanded),"selected"in e&&n(32,h=e.selected),"expandRowKey"in e&&n(35,m=e.expandRowKey),"rowKey"in e&&n(36,y=e.rowKey),"expandSingle"in e&&n(37,g=e.expandSingle),"selectSingle"in e&&n(38,$=e.selectSingle),"selectOnClick"in e&&n(5,v=e.selectOnClick),"iconAsc"in e&&n(6,x=e.iconAsc),"iconDesc"in e&&n(7,w=e.iconDesc),"iconSortable"in e&&n(8,b=e.iconSortable),"iconExpand"in e&&n(9,N=e.iconExpand),"iconExpanded"in e&&n(10,k=e.iconExpanded),"showExpandIcon"in e&&n(11,E=e.showExpandIcon),"classNameTable"in e&&n(12,_=e.classNameTable),"classNameThead"in e&&n(13,C=e.classNameThead),"classNameTbody"in e&&n(14,O=e.classNameTbody),"classNameSelect"in e&&n(15,S=e.classNameSelect),"classNameInput"in e&&n(16,T=e.classNameInput),"classNameRow"in e&&n(17,A=e.classNameRow),"classNameCell"in e&&n(18,V=e.classNameCell),"classNameRowSelected"in e&&n(19,L=e.classNameRowSelected),"classNameRowExpanded"in e&&n(20,I=e.classNameRowExpanded),"classNameExpandedContent"in e&&n(21,K=e.classNameExpandedContent),"classNameCellExpand"in e&&n(22,B=e.classNameCellExpand),"$$scope"in e&&n(41,s=e.$$scope)},e.$$.update=()=>{if(16&e.$$.dirty[0]&&(n(40,P={}),r.forEach((e=>{n(40,P[e.key]=e,P)}))),2064&e.$$.dirty[0]&&n(24,l=(E?1:0)+r.length),1&e.$$.dirty[0]|512&e.$$.dirty[1]){let e=P[d];void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&n(39,M=t=>e.value(t))}7&e.$$.dirty[0]|807&e.$$.dirty[1]&&n(3,a=c.filter((e=>Object.keys(f).every((t=>{let n=null;if(P[t].searchValue){if(""===f[t])return!0;1===P[t].searchValue.length?n=(P[t].searchValue(e)+"").toLocaleLowerCase().indexOf((f[t]+"").toLocaleLowerCase())>=0:2===P[t].searchValue.length&&(n=!!P[t].searchValue(e,f[t]+""))}else n=!1;return n||void 0===f[t]||f[t]===("function"==typeof P[t].filterValue?P[t].filterValue(e):P[t].value(e))})))).map((e=>Object.assign({},e,{$sortOn:M(e),$expanded:null!==y&&p.indexOf(e[y])>=0,$selected:null!==y&&h.indexOf(e[y])>=0}))).sort(((e,t)=>d?e.$sortOn>t.$sortOn?u:e.$sortOn<t.$sortOn?-u:0:0))),16&e.$$.dirty[0]|4&e.$$.dirty[1]&&D&&r&&c&&(n(23,F={}),r.forEach((e=>{"function"==typeof e.filterOptions?n(23,F[e.key]=e.filterOptions(c),F):Array.isArray(e.filterOptions)&&n(23,F[e.key]=e.filterOptions.map((e=>({name:e,value:e}))),F)})))},[d,u,f,a,r,v,x,w,b,N,k,E,_,C,O,S,T,A,V,L,I,K,B,F,l,D,e=>[].concat(e).filter((e=>null!==e&&"string"==typeof e&&""!==e)).join(" "),H,q,z,G,p,h,c,i,m,y,g,$,M,P,s,o,function(e){f[e.key]=this.value,n(2,f),n(23,F),n(4,r)},function(e){f[e.key]=function(e){const t=e.querySelector(":checked");return t&&t.__value}(this),n(2,f),n(23,F),n(4,r)},(e,t)=>H(t,e),(e,t)=>"Enter"===t.key&&H(t,e),(e,t,n)=>G(n,e,t.key),(e,t,n)=>"Enter"===n.key&&G(n,e,t.key),(e,t)=>z(t,e),(e,t)=>"Enter"===t.key&&z(t,e),(e,t)=>q(t,e),(e,t)=>"Enter"===t.key&&q(t,e)]}return class extends class{$destroy(){X(this,1),this.$destroy=e}$on(t,n){if(!s(n))return e;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const e=l.indexOf(n);-1!==e&&l.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),Z(this,e,Oe,Ce,r,{columns:4,rows:33,c_rows:3,sortOrders:34,sortBy:0,sortOrder:1,filterSelections:2,expanded:31,selected:32,expandRowKey:35,rowKey:36,expandSingle:37,selectSingle:38,selectOnClick:5,iconAsc:6,iconDesc:7,iconSortable:8,iconExpand:9,iconExpanded:10,showExpandIcon:11,classNameTable:12,classNameThead:13,classNameTbody:14,classNameSelect:15,classNameInput:16,classNameRow:17,classNameCell:18,classNameRowSelected:19,classNameRowExpanded:20,classNameExpandedContent:21,classNameCellExpand:22},ee,[-1,-1,-1])}}}));
//# sourceMappingURL=SvelteTable.js.map
