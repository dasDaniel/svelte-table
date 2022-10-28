var SvelteTable=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function l(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n,l){if(e){const o=a(e,t,n,l);return e[0](o)}}function a(e,n,l,o){return e[1]&&o?t(l.ctx.slice(),e[1](o(n))):l.ctx}function i(e,t,n,l){if(e[2]&&l){const o=e[2](l(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|o[l];return e}return t.dirty|o}return t.dirty}function u(e,t,n,l,o,s){if(o){const r=a(t,n,l,s);e.p(r,o)}}function d(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function f(e){return null==e?"":e}function p(e,t){e.appendChild(t)}function m(e,t,n){const l=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!l.getElementById(t)){const e=g("style");e.id=t,e.textContent=n,function(e,t){p(e.head||e,t),t.sheet}(l,e)}}function h(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function x(){return v(" ")}function w(){return v("")}function b(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function E(e,t){e.value=null==t?"":t}function _(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}e.selectedIndex=-1}class C{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var l;this.e||(this.is_svg?this.e=(l=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",l)):this.e=g(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}function S(e,t){return new e(t)}let O;function R(e){O=e}function T(){const e=function(){if(!O)throw new Error("Function called outside component initialization");return O}();return(t,n,{cancelable:l=!1}={})=>{const o=e.$$.callbacks[t];if(o){const s=function(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,l,t),o}(t,n,{cancelable:l});return o.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}const A=[],I=[],K=[],B=[],V=Promise.resolve();let L=!1;function j(e){K.push(e)}const D=new Set;let M=0;function F(){const e=O;do{for(;M<A.length;){const e=A[M];M++,R(e),H(e.$$)}for(R(null),A.length=0,M=0;I.length;)I.pop()();for(let e=0;e<K.length;e+=1){const t=K[e];D.has(t)||(D.add(t),t())}K.length=0}while(A.length);for(;B.length;)B.pop()();L=!1,D.clear(),R(e)}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const q=new Set;let P;function z(){P={r:0,c:[],p:P}}function G(){P.r||o(P.c),P=P.p}function J(e,t){e&&e.i&&(q.delete(e),e.i(t))}function Q(e,t,n,l){if(e&&e.o){if(q.has(e))return;q.add(e),P.c.push((()=>{q.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}else l&&l()}function U(e){e&&e.c()}function W(e,t,l,r){const{fragment:c,after_update:a}=e.$$;c&&c.m(t,l),r||j((()=>{const t=e.$$.on_mount.map(n).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):o(t),e.$$.on_mount=[]})),a.forEach(j)}function X(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(A.push(e),L||(L=!0,V.then(F)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,n,s,r,c,a,i,u=[-1]){const d=O;R(t);const f=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:c,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:l(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};i&&i(f.root);let p=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&Y(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&J(t.$$.fragment),W(t,n.target,n.anchor,n.customElement),F()}R(d)}function ee(e){m(e,"svelte-dsaf7t","table.svelte-dsaf7t.svelte-dsaf7t{width:100%}.isSortable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}.isClickable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}tr.svelte-dsaf7t th select.svelte-dsaf7t{width:100%}")}function te(e,t,n){const l=e.slice();return l[56]=t[n],l[58]=n,l}const ne=e=>({row:8&e[0]}),le=e=>({row:e[56],n:e[58]});function oe(e,t,n){const l=e.slice();return l[59]=t[n],l[61]=n,l}const se=e=>({row:8&e[0]}),re=e=>({row:e[56],n:e[58]});function ce(e,t,n){const l=e.slice();return l[59]=t[n],l}const ae=e=>({sortOrder:2&e[0],sortBy:1&e[0]}),ie=e=>({sortOrder:e[1],sortBy:e[0]});function ue(e,t,n){const l=e.slice();return l[59]=t[n],l[64]=t,l[65]=n,l}function de(e,t,n){const l=e.slice();return l[66]=t[n],l}function fe(e){let t,n,l,o,s,r=e[23][e[59].key],c=[];for(let t=0;t<r.length;t+=1)c[t]=me(de(e,r,t));function a(){e[44].call(t,e[59])}return{c(){t=g("select"),n=g("option");for(let e=0;e<c.length;e+=1)c[e].c();n.__value=void 0,n.value=n.__value,k(t,"class",l=f(e[26](e[15]))+" svelte-dsaf7t"),void 0===e[2][e[59].key]&&j(a)},m(l,r){h(l,t,r),p(t,n);for(let e=0;e<c.length;e+=1)c[e].m(t,null);_(t,e[2][e[59].key]),o||(s=b(t,"change",a),o=!0)},p(n,o){if(e=n,8388624&o[0]){let n;for(r=e[23][e[59].key],n=0;n<r.length;n+=1){const l=de(e,r,n);c[n]?c[n].p(l,o):(c[n]=me(l),c[n].c(),c[n].m(t,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}32768&o[0]&&l!==(l=f(e[26](e[15]))+" svelte-dsaf7t")&&k(t,"class",l),8388628&o[0]&&_(t,e[2][e[59].key])},d(e){e&&y(t),$(c,e),o=!1,s()}}}function pe(e){let t,n,l,o;function s(){e[43].call(t,e[59])}return{c(){t=g("input"),k(t,"class",n=f(e[26](e[16]))+" svelte-dsaf7t")},m(n,r){h(n,t,r),E(t,e[2][e[59].key]),l||(o=b(t,"input",s),l=!0)},p(l,o){e=l,65536&o[0]&&n!==(n=f(e[26](e[16]))+" svelte-dsaf7t")&&k(t,"class",n),8388628&o[0]&&t.value!==e[2][e[59].key]&&E(t,e[2][e[59].key])},d(e){e&&y(t),l=!1,o()}}}function me(e){let t,n,l,o=e[66].name+"";return{c(){t=g("option"),n=v(o),t.__value=l=e[66].value,t.value=t.__value},m(e,l){h(e,t,l),p(t,n)},p(e,s){8388624&s[0]&&o!==(o=e[66].name+"")&&N(n,o),8388624&s[0]&&l!==(l=e[66].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&y(t)}}}function he(e){let t,n;function l(e,t){return void 0!==e[59].searchValue?pe:void 0!==e[23][e[59].key]?fe:void 0}let o=l(e),s=o&&o(e);return{c(){t=g("th"),s&&s.c(),k(t,"class",n=f(e[26]([e[59].headerFilterClass]))+" svelte-dsaf7t")},m(e,n){h(e,t,n),s&&s.m(t,null)},p(e,r){o===(o=l(e))&&s?s.p(e,r):(s&&s.d(1),s=o&&o(e),s&&(s.c(),s.m(t,null))),8388624&r[0]&&n!==(n=f(e[26]([e[59].headerFilterClass]))+" svelte-dsaf7t")&&k(t,"class",n)},d(e){e&&y(t),s&&s.d()}}}function ye(e){let t;return{c(){t=g("th")},m(e,n){h(e,t,n)},d(e){e&&y(t)}}}function $e(e){let t,n;return{c(){t=new C(!1),n=w(),t.a=n},m(l,o){t.m(e[8],l,o),h(l,n,o)},p(e,n){256&n[0]&&t.p(e[8])},d(e){e&&y(n),e&&t.d()}}}function ge(e){let t,n,l=(1===e[1]?e[6]:e[7])+"";return{c(){t=new C(!1),n=w(),t.a=n},m(e,o){t.m(l,e,o),h(e,n,o)},p(e,n){194&n[0]&&l!==(l=(1===e[1]?e[6]:e[7])+"")&&t.p(l)},d(e){e&&y(n),e&&t.d()}}}function ve(e){let t,n,l,s,r,c,a=e[59].title+"";function i(e,t){return e[0]===e[59].key?ge:e[59].sortable?$e:void 0}let u=i(e),d=u&&u(e);function m(...t){return e[45](e[59],...t)}function $(...t){return e[46](e[59],...t)}return{c(){t=g("th"),n=v(a),l=x(),d&&d.c(),k(t,"class",s=f(e[26]([e[59].sortable?"isSortable":"",e[59].headerClass]))+" svelte-dsaf7t"),k(t,"tabindex","0")},m(e,o){h(e,t,o),p(t,n),p(t,l),d&&d.m(t,null),r||(c=[b(t,"click",m),b(t,"keypress",$)],r=!0)},p(l,o){e=l,16&o[0]&&a!==(a=e[59].title+"")&&N(n,a),u===(u=i(e))&&d?d.p(e,o):(d&&d.d(1),d=u&&u(e),d&&(d.c(),d.m(t,null))),8388624&o[0]&&s!==(s=f(e[26]([e[59].sortable?"isSortable":"",e[59].headerClass]))+" svelte-dsaf7t")&&k(t,"class",s)},d(e){e&&y(t),d&&d.d(),r=!1,o(c)}}}function xe(e){let t;return{c(){t=g("th")},m(e,n){h(e,t,n)},d(e){e&&y(t)}}}function we(t){let n,l,o=(t[59].renderValue?t[59].renderValue(t[56]):t[59].value(t[56]))+"";return{c(){n=new C(!1),l=w(),n.a=l},m(e,t){n.m(o,e,t),h(e,l,t)},p(e,t){24&t[0]&&o!==(o=(e[59].renderValue?e[59].renderValue(e[56]):e[59].value(e[56]))+"")&&n.p(o)},i:e,o:e,d(e){e&&y(l),e&&n.d()}}}function be(e){let n,l,o;const s=[e[59].renderComponent.props||{},{row:e[56]},{col:e[59]}];var r=e[59].renderComponent.component||e[59].renderComponent;function c(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return r&&(n=S(r,c())),{c(){n&&U(n.$$.fragment),l=w()},m(e,t){n&&W(n,e,t),h(e,l,t),o=!0},p(e,t){const o=24&t[0]?function(e,t){const n={},l={},o={$$scope:1};let s=e.length;for(;s--;){const r=e[s],c=t[s];if(c){for(const e in r)e in c||(l[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[s]=c}else for(const e in r)o[e]=1}for(const e in l)e in n||(n[e]=void 0);return n}(s,[16&t[0]&&(a=e[59].renderComponent.props||{},"object"==typeof a&&null!==a?a:{}),8&t[0]&&{row:e[56]},16&t[0]&&{col:e[59]}]):{};var a;if(r!==(r=e[59].renderComponent.component||e[59].renderComponent)){if(n){z();const e=n;Q(e.$$.fragment,1,0,(()=>{X(e,1)})),G()}r?(n=S(r,c()),U(n.$$.fragment),J(n.$$.fragment,1),W(n,l.parentNode,l)):n=null}else r&&n.$set(o)},i(e){o||(n&&J(n.$$.fragment,e),o=!0)},o(e){n&&Q(n.$$.fragment,e),o=!1},d(e){e&&y(l),n&&X(n,e)}}}function ke(e){let t,n,l,s,r,c,a;const i=[be,we],u=[];function d(e,t){return e[59].renderComponent?0:1}function p(...t){return e[47](e[56],e[59],...t)}function m(...t){return e[48](e[56],e[59],...t)}return n=d(e),l=u[n]=i[n](e),{c(){t=g("td"),l.c(),k(t,"class",s=f(e[26](["string"==typeof e[59].class?e[59].class:null,"function"==typeof e[59].class?e[59].class(e[56],e[58],e[61]):null,e[18]]))+" svelte-dsaf7t")},m(e,l){h(e,t,l),u[n].m(t,null),r=!0,c||(a=[b(t,"click",p),b(t,"keypress",m)],c=!0)},p(o,c){let a=n;n=d(e=o),n===a?u[n].p(e,c):(z(),Q(u[a],1,1,(()=>{u[a]=null})),G(),l=u[n],l?l.p(e,c):(l=u[n]=i[n](e),l.c()),J(l,1),l.m(t,null)),(!r||8650776&c[0]&&s!==(s=f(e[26](["string"==typeof e[59].class?e[59].class:null,"function"==typeof e[59].class?e[59].class(e[56],e[58],e[61]):null,e[18]]))+" svelte-dsaf7t"))&&k(t,"class",s)},i(e){r||(J(l),r=!0)},o(e){Q(l),r=!1},d(e){e&&y(t),u[n].d(),c=!1,o(a)}}}function Ne(e){let t,n,l,s,r=(e[56].$expanded?e[9]:e[10])+"";function c(...t){return e[49](e[56],...t)}function a(...t){return e[50](e[56],...t)}return{c(){t=g("td"),k(t,"class",n=f(e[26](["isClickable",e[22]]))+" svelte-dsaf7t"),k(t,"tabindex","0"),k(t,"role","button")},m(e,n){h(e,t,n),t.innerHTML=r,l||(s=[b(t,"click",c),b(t,"keypress",a)],l=!0)},p(l,o){e=l,1544&o[0]&&r!==(r=(e[56].$expanded?e[9]:e[10])+"")&&(t.innerHTML=r),4194304&o[0]&&n!==(n=f(e[26](["isClickable",e[22]]))+" svelte-dsaf7t")&&k(t,"class",n)},d(e){e&&y(t),l=!1,o(s)}}}function Ee(e){let t,n,l,o;const s=e[42].expanded,r=c(s,e,e[41],le);return{c(){t=g("tr"),n=g("td"),r&&r.c(),k(n,"colspan",e[24]),k(t,"class",l=f(e[26](e[21]))+" svelte-dsaf7t")},m(e,l){h(e,t,l),p(t,n),r&&r.m(n,null),o=!0},p(e,c){r&&r.p&&(!o||8&c[0]|1024&c[1])&&u(r,s,e,e[41],o?i(s,e[41],c,ne):d(e[41]),le),(!o||16777216&c[0])&&k(n,"colspan",e[24]),(!o||2097152&c[0]&&l!==(l=f(e[26](e[21]))+" svelte-dsaf7t"))&&k(t,"class",l)},i(e){o||(J(r,e),o=!0)},o(e){Q(r,e),o=!1},d(e){e&&y(t),r&&r.d(e)}}}function _e(e){let t;const n=e[42].row,l=c(n,e,e[41],re),s=l||function(e){let t,n,l,s,r,c,a,i,u,d=e[4],m=[];for(let t=0;t<d.length;t+=1)m[t]=ke(oe(e,d,t));const v=e=>Q(m[e],1,1,(()=>{m[e]=null}));let w=e[11]&&Ne(e);function N(...t){return e[51](e[56],...t)}function E(...t){return e[52](e[56],...t)}let _=e[56].$expanded&&Ee(e);return{c(){t=g("tr");for(let e=0;e<m.length;e+=1)m[e].c();n=x(),w&&w.c(),r=x(),_&&_.c(),c=x(),k(t,"class",l=f(e[26](["string"==typeof e[17]?e[17]:null,"function"==typeof e[17]?e[17](e[56],e[58]):null,,e[56].$expanded&&e[20],e[56].$selected&&e[19]]))+" svelte-dsaf7t"),k(t,"tabindex",s=e[5]?"0":null)},m(e,l){h(e,t,l);for(let e=0;e<m.length;e+=1)m[e].m(t,null);p(t,n),w&&w.m(t,null),h(e,r,l),_&&_.m(e,l),h(e,c,l),a=!0,i||(u=[b(t,"click",N),b(t,"keypress",E)],i=!0)},p(o,r){if(e=o,1141112856&r[0]){let l;for(d=e[4],l=0;l<d.length;l+=1){const o=oe(e,d,l);m[l]?(m[l].p(o,r),J(m[l],1)):(m[l]=ke(o),m[l].c(),J(m[l],1),m[l].m(t,n))}for(z(),l=d.length;l<m.length;l+=1)v(l);G()}e[11]?w?w.p(e,r):(w=Ne(e),w.c(),w.m(t,null)):w&&(w.d(1),w=null),(!a||1703944&r[0]&&l!==(l=f(e[26](["string"==typeof e[17]?e[17]:null,"function"==typeof e[17]?e[17](e[56],e[58]):null,,e[56].$expanded&&e[20],e[56].$selected&&e[19]]))+" svelte-dsaf7t"))&&k(t,"class",l),(!a||32&r[0]&&s!==(s=e[5]?"0":null))&&k(t,"tabindex",s),e[56].$expanded?_?(_.p(e,r),8&r[0]&&J(_,1)):(_=Ee(e),_.c(),J(_,1),_.m(c.parentNode,c)):_&&(z(),Q(_,1,1,(()=>{_=null})),G())},i(e){if(!a){for(let e=0;e<d.length;e+=1)J(m[e]);J(_),a=!0}},o(e){m=m.filter(Boolean);for(let e=0;e<m.length;e+=1)Q(m[e]);Q(_),a=!1},d(e){e&&y(t),$(m,e),w&&w.d(),e&&y(r),_&&_.d(e),e&&y(c),i=!1,o(u)}}}(e);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,o){l?l.p&&(!t||8&o[0]|1024&o[1])&&u(l,n,e,e[41],t?i(n,e[41],o,se):d(e[41]),re):s&&s.p&&(!t||25038392&o[0]|1024&o[1])&&s.p(e,t?o:[-1,-1,-1])},i(e){t||(J(s,e),t=!0)},o(e){Q(s,e),t=!1},d(e){s&&s.d(e)}}}function Ce(e){let t,n,l,o,s,r,a,m,v,w=e[25]&&function(e){let t,n,l=e[4],o=[];for(let t=0;t<l.length;t+=1)o[t]=he(ue(e,l,t));let s=e[11]&&ye();return{c(){t=g("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),s&&s.c(),k(t,"class","svelte-dsaf7t")},m(e,l){h(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);p(t,n),s&&s.m(t,null)},p(e,r){if(75595796&r[0]){let s;for(l=e[4],s=0;s<l.length;s+=1){const c=ue(e,l,s);o[s]?o[s].p(c,r):(o[s]=he(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}e[11]?s||(s=ye(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&y(t),$(o,e),s&&s.d()}}}(e);const b=e[42].header,N=c(b,e,e[41],ie),E=N||function(e){let t,n,l=e[4],o=[];for(let t=0;t<l.length;t+=1)o[t]=ve(ce(e,l,t));let s=e[11]&&xe();return{c(){t=g("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),s&&s.c()},m(e,l){h(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);p(t,n),s&&s.m(t,null)},p(e,r){if(201327059&r[0]){let s;for(l=e[4],s=0;s<l.length;s+=1){const c=ce(e,l,s);o[s]?o[s].p(c,r):(o[s]=ve(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}e[11]?s||(s=xe(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&y(t),$(o,e),s&&s.d()}}}(e);let _=e[3],C=[];for(let t=0;t<_.length;t+=1)C[t]=_e(te(e,_,t));const S=e=>Q(C[e],1,1,(()=>{C[e]=null}));return{c(){t=g("table"),n=g("thead"),w&&w.c(),l=x(),E&&E.c(),s=x(),r=g("tbody");for(let e=0;e<C.length;e+=1)C[e].c();k(n,"class",o=f(e[26](e[13]))+" svelte-dsaf7t"),k(r,"class",a=f(e[26](e[14]))+" svelte-dsaf7t"),k(t,"class",m=f(e[26](e[12]))+" svelte-dsaf7t")},m(e,o){h(e,t,o),p(t,n),w&&w.m(n,null),p(n,l),E&&E.m(n,null),p(t,s),p(t,r);for(let e=0;e<C.length;e+=1)C[e].m(r,null);v=!0},p(e,l){if(e[25]&&w.p(e,l),N?N.p&&(!v||3&l[0]|1024&l[1])&&u(N,b,e,e[41],v?i(b,e[41],l,ae):d(e[41]),ie):E&&E.p&&(!v||2515&l[0])&&E.p(e,v?l:[-1,-1,-1]),(!v||8192&l[0]&&o!==(o=f(e[26](e[13]))+" svelte-dsaf7t"))&&k(n,"class",o),1971195448&l[0]|1024&l[1]){let t;for(_=e[3],t=0;t<_.length;t+=1){const n=te(e,_,t);C[t]?(C[t].p(n,l),J(C[t],1)):(C[t]=_e(n),C[t].c(),J(C[t],1),C[t].m(r,null))}for(z(),t=_.length;t<C.length;t+=1)S(t);G()}(!v||16384&l[0]&&a!==(a=f(e[26](e[14]))+" svelte-dsaf7t"))&&k(r,"class",a),(!v||4096&l[0]&&m!==(m=f(e[26](e[12]))+" svelte-dsaf7t"))&&k(t,"class",m)},i(e){if(!v){J(E,e);for(let e=0;e<_.length;e+=1)J(C[e]);v=!0}},o(e){Q(E,e),C=C.filter(Boolean);for(let e=0;e<C.length;e+=1)Q(C[e]);v=!1},d(e){e&&y(t),w&&w.d(),E&&E.d(e),$(C,e)}}}function Se(e,t,n){let l,{$$slots:o={},$$scope:s}=t,{columns:r}=t,{rows:c}=t,{c_rows:a}=t,{sortOrders:i=[1,-1]}=t,{sortBy:u=""}=t,{sortOrder:d=i?.[0]||1}=t,{filterSelections:f={}}=t,{expanded:p=[]}=t,{selected:m=[]}=t,{expandRowKey:h=null}=t,{rowKey:y=h}=t,{expandSingle:$=!1}=t,{selectSingle:g=!1}=t,{selectOnClick:v=!1}=t,{iconAsc:x="▲"}=t,{iconDesc:w="▼"}=t,{iconSortable:b=""}=t,{iconExpand:k="▼"}=t,{iconExpanded:N="▲"}=t,{showExpandIcon:E=!1}=t,{classNameTable:_=""}=t,{classNameThead:C=""}=t,{classNameTbody:S=""}=t,{classNameSelect:O=""}=t,{classNameInput:R=""}=t,{classNameRow:A=null}=t,{classNameCell:I=""}=t,{classNameRowSelected:K=null}=t,{classNameRowExpanded:B=null}=t,{classNameExpandedContent:V=""}=t,{classNameCellExpand:L=""}=t;const j=T();let D=()=>"";if(!Array.isArray(p))throw"'expanded' needs to be an array";if(!Array.isArray(m))throw"'selection' needs to be an array";null!==h&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),K&&!y&&console.error("'rowKey' is needed to use 'classNameRowSelected'");let M,F=r.some((e=>void 0!==e.filterOptions||void 0!==e.searchValue)),H={};const q=(e,t)=>{var l;t.sortable&&(n(1,(l=t.key,d=l===u?i[(i.findIndex((e=>e===d))+1)%i.length]:i[0])),n(0,u=d?t.key:void 0)),j("clickCol",{event:e,col:t,key:t.key})},P=(e,t)=>{v&&(g?m.includes(t[y])?n(32,m=[]):n(32,m=[t[y]]):m.includes(t[y])?n(32,m=m.filter((e=>e!=t[y]))):n(32,m=[...m,t[y]].sort())),j("clickRow",{event:e,row:t})},z=(e,t)=>{t.$expanded=!t.$expanded;const l=t[y];$&&t.$expanded?n(31,p=[l]):$?n(31,p=[]):t.$expanded?n(31,p=[...p,l]):n(31,p=p.filter((e=>e!=l))),j("clickExpand",{event:e,row:t})},G=(e,t,n)=>{j("clickCell",{event:e,row:t,key:n})};return e.$$set=e=>{"columns"in e&&n(4,r=e.columns),"rows"in e&&n(33,c=e.rows),"c_rows"in e&&n(3,a=e.c_rows),"sortOrders"in e&&n(34,i=e.sortOrders),"sortBy"in e&&n(0,u=e.sortBy),"sortOrder"in e&&n(1,d=e.sortOrder),"filterSelections"in e&&n(2,f=e.filterSelections),"expanded"in e&&n(31,p=e.expanded),"selected"in e&&n(32,m=e.selected),"expandRowKey"in e&&n(35,h=e.expandRowKey),"rowKey"in e&&n(36,y=e.rowKey),"expandSingle"in e&&n(37,$=e.expandSingle),"selectSingle"in e&&n(38,g=e.selectSingle),"selectOnClick"in e&&n(5,v=e.selectOnClick),"iconAsc"in e&&n(6,x=e.iconAsc),"iconDesc"in e&&n(7,w=e.iconDesc),"iconSortable"in e&&n(8,b=e.iconSortable),"iconExpand"in e&&n(9,k=e.iconExpand),"iconExpanded"in e&&n(10,N=e.iconExpanded),"showExpandIcon"in e&&n(11,E=e.showExpandIcon),"classNameTable"in e&&n(12,_=e.classNameTable),"classNameThead"in e&&n(13,C=e.classNameThead),"classNameTbody"in e&&n(14,S=e.classNameTbody),"classNameSelect"in e&&n(15,O=e.classNameSelect),"classNameInput"in e&&n(16,R=e.classNameInput),"classNameRow"in e&&n(17,A=e.classNameRow),"classNameCell"in e&&n(18,I=e.classNameCell),"classNameRowSelected"in e&&n(19,K=e.classNameRowSelected),"classNameRowExpanded"in e&&n(20,B=e.classNameRowExpanded),"classNameExpandedContent"in e&&n(21,V=e.classNameExpandedContent),"classNameCellExpand"in e&&n(22,L=e.classNameCellExpand),"$$scope"in e&&n(41,s=e.$$scope)},e.$$.update=()=>{if(16&e.$$.dirty[0]&&(n(40,M={}),r.forEach((e=>{n(40,M[e.key]=e,M)}))),2064&e.$$.dirty[0]&&n(24,l=(E?1:0)+r.length),1&e.$$.dirty[0]|512&e.$$.dirty[1]){let e=M[u];void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&n(39,D=t=>e.value(t))}7&e.$$.dirty[0]|807&e.$$.dirty[1]&&n(3,a=c.filter((e=>Object.keys(f).every((t=>""===f[t]||M[t].searchValue&&(M[t].searchValue(e)+"").toLocaleLowerCase().indexOf((f[t]+"").toLocaleLowerCase())>=0||void 0===f[t]||f[t]===("function"==typeof M[t].filterValue?M[t].filterValue(e):M[t].value(e)))))).map((e=>Object.assign({},e,{$sortOn:D(e),$expanded:null!==y&&p.indexOf(e[y])>=0,$selected:null!==y&&m.indexOf(e[y])>=0}))).sort(((e,t)=>u?e.$sortOn>t.$sortOn?d:e.$sortOn<t.$sortOn?-d:0:0))),16&e.$$.dirty[0]|4&e.$$.dirty[1]&&F&&r&&c&&(n(23,H={}),r.forEach((e=>{"function"==typeof e.filterOptions?n(23,H[e.key]=e.filterOptions(c),H):Array.isArray(e.filterOptions)&&n(23,H[e.key]=e.filterOptions.map((e=>({name:e,value:e}))),H)})))},[u,d,f,a,r,v,x,w,b,k,N,E,_,C,S,O,R,A,I,K,B,V,L,H,l,F,e=>[].concat(e).filter((e=>null!==e&&"string"==typeof e&&""!==e)).join(" "),q,P,z,G,p,m,c,i,h,y,$,g,D,M,s,o,function(e){f[e.key]=this.value,n(2,f),n(23,H),n(4,r)},function(e){f[e.key]=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(2,f),n(23,H),n(4,r)},(e,t)=>q(t,e),(e,t)=>"Enter"===t.key&&q(t,e),(e,t,n)=>G(n,e,t.key),(e,t,n)=>"Enter"===n.key&&G(n,e,t.key),(e,t)=>z(t,e),(e,t)=>"Enter"===t.key&&z(t,e),(e,t)=>P(t,e),(e,t)=>"Enter"===t.key&&P(t,e)]}return class extends class{$destroy(){X(this,1),this.$destroy=e}$on(t,n){if(!s(n))return e;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const e=l.indexOf(n);-1!==e&&l.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),Z(this,e,Se,Ce,r,{columns:4,rows:33,c_rows:3,sortOrders:34,sortBy:0,sortOrder:1,filterSelections:2,expanded:31,selected:32,expandRowKey:35,rowKey:36,expandSingle:37,selectSingle:38,selectOnClick:5,iconAsc:6,iconDesc:7,iconSortable:8,iconExpand:9,iconExpanded:10,showExpandIcon:11,classNameTable:12,classNameThead:13,classNameTbody:14,classNameSelect:15,classNameInput:16,classNameRow:17,classNameCell:18,classNameRowSelected:19,classNameRowExpanded:20,classNameExpandedContent:21,classNameCellExpand:22},ee,[-1,-1,-1])}}}();
//# sourceMappingURL=SvelteTable.js.map
