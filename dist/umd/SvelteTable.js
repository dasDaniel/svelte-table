!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SvelteTable=t()}(this,(function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function l(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n,l){if(e){const o=a(e,t,n,l);return e[0](o)}}function a(e,n,l,o){return e[1]&&o?t(l.ctx.slice(),e[1](o(n))):l.ctx}function i(e,t,n,l,o,s,r){const c=function(e,t,n,l){if(e[2]&&l){const o=e[2](l(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|o[l];return e}return t.dirty|o}return t.dirty}(t,l,o,s);if(c){const o=a(t,n,l,r);e.p(o,c)}}function d(e){return null==e?"":e}let u,f=!1;function p(e,t,n,l){for(;e<t;){const o=e+(t-e>>1);n(o)<=l?e=o+1:t=o}return e}function h(e,t){f?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=p(1,o+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;l[e]=n[s]+1;const r=s+1;n[r]=e,o=Math.max(r,o)}const s=[],r=[];let c=t.length-1;for(let e=n[o]+1;0!=e;e=l[e-1]){for(s.push(t[e-1]);c>=e;c--)r.push(t[c]);c--}for(;c>=0;c--)r.push(t[c]);s.reverse(),r.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<r.length;t++){for(;n<s.length&&r[t].claim_order>=s[n].claim_order;)n++;const l=n<s.length?s[n]:null;e.insertBefore(r[t],l)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function m(e,t,n){f&&!n?h(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function x(){return v(" ")}function _(){return v("")}function b(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t){e.value=null==t?"":t}function E(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}class C{constructor(e){this.e=this.n=null,this.l=e}m(e,t,n=null){this.e||(this.e=y(t.nodeName),this.t=t,this.l?this.n=this.l:this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)m(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(g)}}function O(e){u=e}function S(){const e=function(){if(!u)throw new Error("Function called outside component initialization");return u}();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=function(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}(t,n);l.slice().forEach((t=>{t.call(e,o)}))}}}const T=[],A=[],R=[],B=[],V=Promise.resolve();let j=!1;function L(e){R.push(e)}let I=!1;const M=new Set;function D(){if(!I){I=!0;do{for(let e=0;e<T.length;e+=1){const t=T[e];O(t),K(t.$$)}for(O(null),T.length=0;A.length;)A.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];M.has(t)||(M.add(t),t())}R.length=0}while(T.length);for(;B.length;)B.pop()();j=!1,I=!1,M.clear()}}function K(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const H=new Set;let q;function z(){q={r:0,c:[],p:q}}function F(){q.r||o(q.c),q=q.p}function P(e,t){e&&e.i&&(H.delete(e),e.i(t))}function G(e,t,n,l){if(e&&e.o){if(H.has(e))return;H.add(e),q.c.push((()=>{H.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function J(e){e&&e.c()}function Q(e,t,l,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:d}=e.$$;c&&c.m(t,l),r||L((()=>{const t=a.map(n).filter(s);i?i.push(...t):o(t),e.$$.on_mount=[]})),d.forEach(L)}function U(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(T.push(e),j||(j=!0,V.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(t,n,s,r,c,a,i=[-1]){const d=u;O(t);const p=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:c,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:l(),dirty:i,skip_bound:!1};let h=!1;if(p.ctx=s?s(t,n.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&W(t,e)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),n.target){if(n.hydrate){f=!0;const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&P(t.$$.fragment),Q(t,n.target,n.anchor,n.customElement),f=!1,D()}O(d)}function Y(e,t,n){const l=e.slice();return l[44]=t[n],l[46]=n,l}const Z=e=>({row:524288&e[0]}),ee=e=>({row:e[44],n:e[46]});function te(e,t,n){const l=e.slice();return l[47]=t[n],l}const ne=e=>({row:524288&e[0]}),le=e=>({row:e[44],n:e[46]});function oe(e,t,n){const l=e.slice();return l[47]=t[n],l}const se=e=>({sortOrder:2&e[0],sortBy:1&e[0]}),re=e=>({sortOrder:e[1],sortBy:e[0]});function ce(e,t,n){const l=e.slice();return l[47]=t[n],l[52]=t,l[53]=n,l}function ae(e,t,n){const l=e.slice();return l[54]=t[n],l}function ie(e){let t,n,l,o,s,r=e[18][e[47].key],c=[];for(let t=0;t<r.length;t+=1)c[t]=ue(ae(e,r,t));function a(){e[36].call(t,e[47])}return{c(){t=y("select"),n=y("option");for(let e=0;e<c.length;e+=1)c[e].c();n.__value=void 0,n.value=n.__value,w(t,"class",l=d(e[22](e[12]))+" svelte-dsaf7t"),void 0===e[2][e[47].key]&&L(a)},m(l,r){m(l,t,r),h(t,n);for(let e=0;e<c.length;e+=1)c[e].m(t,null);E(t,e[2][e[47].key]),o||(s=b(t,"change",a),o=!0)},p(n,o){if(e=n,262152&o[0]){let n;for(r=e[18][e[47].key],n=0;n<r.length;n+=1){const l=ae(e,r,n);c[n]?c[n].p(l,o):(c[n]=ue(l),c[n].c(),c[n].m(t,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}4096&o[0]&&l!==(l=d(e[22](e[12]))+" svelte-dsaf7t")&&w(t,"class",l),262156&o[0]&&E(t,e[2][e[47].key])},d(e){e&&g(t),$(c,e),o=!1,s()}}}function de(e){let t,n,l;function o(){e[35].call(t,e[47])}return{c(){t=y("input")},m(s,r){m(s,t,r),k(t,e[2][e[47].key]),n||(l=b(t,"input",o),n=!0)},p(n,l){e=n,262156&l[0]&&t.value!==e[2][e[47].key]&&k(t,e[2][e[47].key])},d(e){e&&g(t),n=!1,l()}}}function ue(e){let t,n,l,o=e[54].name+"";return{c(){t=y("option"),n=v(o),t.__value=l=e[54].value,t.value=t.__value},m(e,l){m(e,t,l),h(t,n)},p(e,s){262152&s[0]&&o!==(o=e[54].name+"")&&N(n,o),262152&s[0]&&l!==(l=e[54].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&g(t)}}}function fe(e){let t;function n(e,t){return void 0!==e[47].searchValue?de:void 0!==e[18][e[47].key]?ie:void 0}let l=n(e),o=l&&l(e);return{c(){t=y("th"),o&&o.c()},m(e,n){m(e,t,n),o&&o.m(t,null)},p(e,s){l===(l=n(e))&&o?o.p(e,s):(o&&o.d(1),o=l&&l(e),o&&(o.c(),o.m(t,null)))},d(e){e&&g(t),o&&o.d()}}}function pe(e){let t;return{c(){t=y("th")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function he(e){let t,n,l=(1===e[1]?e[4]:e[5])+"";return{c(){t=new C,n=_(),t.a=n},m(e,o){t.m(l,e,o),m(e,n,o)},p(e,n){50&n[0]&&l!==(l=(1===e[1]?e[4]:e[5])+"")&&t.p(l)},d(e){e&&g(n),e&&t.d()}}}function me(e){let t,n,l,o,s,r,c=e[47].title+"",a=e[0]===e[47].key&&he(e);function i(...t){return e[37](e[47],...t)}return{c(){t=y("th"),n=v(c),l=x(),a&&a.c(),w(t,"class",o=d(e[22]([e[47].sortable?"isSortable":"",e[47].headerClass]))+" svelte-dsaf7t")},m(e,o){m(e,t,o),h(t,n),h(t,l),a&&a.m(t,null),s||(r=b(t,"click",i),s=!0)},p(l,s){e=l,8&s[0]&&c!==(c=e[47].title+"")&&N(n,c),e[0]===e[47].key?a?a.p(e,s):(a=he(e),a.c(),a.m(t,null)):a&&(a.d(1),a=null),262152&s[0]&&o!==(o=d(e[22]([e[47].sortable?"isSortable":"",e[47].headerClass]))+" svelte-dsaf7t")&&w(t,"class",o)},d(e){e&&g(t),a&&a.d(),s=!1,r()}}}function ge(e){let t;return{c(){t=y("th")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function $e(t){let n,l,o=(t[47].renderValue?t[47].renderValue(t[44]):t[47].value(t[44]))+"";return{c(){n=new C,l=_(),n.a=l},m(e,t){n.m(o,e,t),m(e,l,t)},p(e,t){524296&t[0]&&o!==(o=(e[47].renderValue?e[47].renderValue(e[44]):e[47].value(e[44]))+"")&&n.p(o)},i:e,o:e,d(e){e&&g(l),e&&n.d()}}}function ye(e){let n,l,o;const s=[e[47].renderComponent.props||{},{row:e[44]},{col:e[47]}];var r=e[47].renderComponent.component||e[47].renderComponent;function c(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return r&&(n=new r(c())),{c(){n&&J(n.$$.fragment),l=_()},m(e,t){n&&Q(n,e,t),m(e,l,t),o=!0},p(e,t){const o=524296&t[0]?function(e,t){const n={},l={},o={$$scope:1};let s=e.length;for(;s--;){const r=e[s],c=t[s];if(c){for(const e in r)e in c||(l[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[s]=c}else for(const e in r)o[e]=1}for(const e in l)e in n||(n[e]=void 0);return n}(s,[8&t[0]&&(a=e[47].renderComponent.props||{},"object"==typeof a&&null!==a?a:{}),524288&t[0]&&{row:e[44]},8&t[0]&&{col:e[47]}]):{};var a;if(r!==(r=e[47].renderComponent.component||e[47].renderComponent)){if(n){z();const e=n;G(e.$$.fragment,1,0,(()=>{U(e,1)})),F()}r?(n=new r(c()),J(n.$$.fragment),P(n.$$.fragment,1),Q(n,l.parentNode,l)):n=null}else r&&n.$set(o)},i(e){o||(n&&P(n.$$.fragment,e),o=!0)},o(e){n&&G(n.$$.fragment,e),o=!1},d(e){e&&g(l),n&&U(n,e)}}}function ve(e){let t,n,l,o,s,r,c;const a=[ye,$e],i=[];function u(e,t){return e[47].renderComponent?0:1}function f(...t){return e[38](e[44],e[47],...t)}return n=u(e),l=i[n]=a[n](e),{c(){t=y("td"),l.c(),w(t,"class",o=d(e[22]([e[47].class,e[14]]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),i[n].m(t,null),s=!0,r||(c=b(t,"click",f),r=!0)},p(r,c){let f=n;n=u(e=r),n===f?i[n].p(e,c):(z(),G(i[f],1,1,(()=>{i[f]=null})),F(),l=i[n],l?l.p(e,c):(l=i[n]=a[n](e),l.c()),P(l,1),l.m(t,null)),(!s||278536&c[0]&&o!==(o=d(e[22]([e[47].class,e[14]]))+" svelte-dsaf7t"))&&w(t,"class",o)},i(e){s||(P(l),s=!0)},o(e){G(l),s=!1},d(e){e&&g(t),i[n].d(),r=!1,c()}}}function xe(e){let t,n,l,o,s=(e[44].$expanded?e[6]:e[7])+"";function r(...t){return e[39](e[44],...t)}return{c(){t=y("td"),w(t,"class",n=d(e[22](["isClickable",e[17]]))+" svelte-dsaf7t")},m(e,n){m(e,t,n),t.innerHTML=s,l||(o=b(t,"click",r),l=!0)},p(l,o){e=l,524480&o[0]&&s!==(s=(e[44].$expanded?e[6]:e[7])+"")&&(t.innerHTML=s),131072&o[0]&&n!==(n=d(e[22](["isClickable",e[17]]))+" svelte-dsaf7t")&&w(t,"class",n)},d(e){e&&g(t),l=!1,o()}}}function _e(e){let t,n,l,o;const s=e[34].expanded,r=c(s,e,e[33],ee);return{c(){t=y("tr"),n=y("td"),r&&r.c(),w(n,"colspan",e[20]),w(t,"class",l=d(e[22](e[16]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),h(t,n),r&&r.m(n,null),o=!0},p(e,c){r&&r.p&&(!o||524288&c[0]|4&c[1])&&i(r,s,e,e[33],o?c:[-1,-1],Z,ee),(!o||1048576&c[0])&&w(n,"colspan",e[20]),(!o||65536&c[0]&&l!==(l=d(e[22](e[16]))+" svelte-dsaf7t"))&&w(t,"class",l)},i(e){o||(P(r,e),o=!0)},o(e){G(r,e),o=!1},d(e){e&&g(t),r&&r.d(e)}}}function be(e){let t;const n=e[34].row,l=c(n,e,e[33],le),o=l||function(e){let t,n,l,o,s,r,c,a,i=e[3],u=[];for(let t=0;t<i.length;t+=1)u[t]=ve(te(e,i,t));const f=e=>G(u[e],1,1,(()=>{u[e]=null}));let p=e[8]&&xe(e);function v(...t){return e[40](e[44],...t)}let _=e[44].$expanded&&_e(e);return{c(){t=y("tr");for(let e=0;e<u.length;e+=1)u[e].c();n=x(),p&&p.c(),o=x(),_&&_.c(),s=x(),w(t,"class",l=d(e[22]([e[13],e[44].$expanded&&e[15]]))+" svelte-dsaf7t")},m(e,l){m(e,t,l);for(let e=0;e<u.length;e+=1)u[e].m(t,null);h(t,n),p&&p.m(t,null),m(e,o,l),_&&_.m(e,l),m(e,s,l),r=!0,c||(a=b(t,"click",v),c=!0)},p(o,c){if(e=o,71843848&c[0]){let l;for(i=e[3],l=0;l<i.length;l+=1){const o=te(e,i,l);u[l]?(u[l].p(o,c),P(u[l],1)):(u[l]=ve(o),u[l].c(),P(u[l],1),u[l].m(t,n))}for(z(),l=i.length;l<u.length;l+=1)f(l);F()}e[8]?p?p.p(e,c):(p=xe(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null),(!r||565248&c[0]&&l!==(l=d(e[22]([e[13],e[44].$expanded&&e[15]]))+" svelte-dsaf7t"))&&w(t,"class",l),e[44].$expanded?_?(_.p(e,c),524288&c[0]&&P(_,1)):(_=_e(e),_.c(),P(_,1),_.m(s.parentNode,s)):_&&(z(),G(_,1,1,(()=>{_=null})),F())},i(e){if(!r){for(let e=0;e<i.length;e+=1)P(u[e]);P(_),r=!0}},o(e){u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)G(u[e]);G(_),r=!1},d(e){e&&g(t),$(u,e),p&&p.d(),e&&g(o),_&&_.d(e),e&&g(s),c=!1,a()}}}(e);return{c(){o&&o.c()},m(e,n){o&&o.m(e,n),t=!0},p(e,s){l?l.p&&(!t||524288&s[0]|4&s[1])&&i(l,n,e,e[33],t?s:[-1,-1],ne,le):o&&o.p&&(!t||1827272&s[0]|4&s[1])&&o.p(e,t?s:[-1,-1])},i(e){t||(P(o,e),t=!0)},o(e){G(o,e),t=!1},d(e){o&&o.d(e)}}}function we(e){let t,n,l,o,s,r,a,u,f,p=e[21]&&function(e){let t,n,l=e[3],o=[];for(let t=0;t<l.length;t+=1)o[t]=fe(ce(e,l,t));let s=e[8]&&pe();return{c(){t=y("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),s&&s.c(),w(t,"class","svelte-dsaf7t")},m(e,l){m(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);h(t,n),s&&s.m(t,null)},p(e,r){if(4460556&r[0]){let s;for(l=e[3],s=0;s<l.length;s+=1){const c=ce(e,l,s);o[s]?o[s].p(c,r):(o[s]=fe(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}e[8]?s||(s=pe(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&g(t),$(o,e),s&&s.d()}}}(e);const v=e[34].header,_=c(v,e,e[33],re),b=_||function(e){let t,n,l=e[3],o=[];for(let t=0;t<l.length;t+=1)o[t]=me(oe(e,l,t));let s=e[8]&&ge();return{c(){t=y("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),s&&s.c()},m(e,l){m(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);h(t,n),s&&s.m(t,null)},p(e,r){if(12582971&r[0]){let s;for(l=e[3],s=0;s<l.length;s+=1){const c=oe(e,l,s);o[s]?o[s].p(c,r):(o[s]=me(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}e[8]?s||(s=ge(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&g(t),$(o,e),s&&s.d()}}}(e);let N=e[19],k=[];for(let t=0;t<N.length;t+=1)k[t]=be(Y(e,N,t));const E=e=>G(k[e],1,1,(()=>{k[e]=null}));return{c(){t=y("table"),n=y("thead"),p&&p.c(),l=x(),b&&b.c(),s=x(),r=y("tbody");for(let e=0;e<k.length;e+=1)k[e].c();w(n,"class",o=d(e[22](e[10]))+" svelte-dsaf7t"),w(r,"class",a=d(e[22](e[11]))+" svelte-dsaf7t"),w(t,"class",u=d(e[22](e[9]))+" svelte-dsaf7t")},m(e,o){m(e,t,o),h(t,n),p&&p.m(n,null),h(n,l),b&&b.m(n,null),h(t,s),h(t,r);for(let e=0;e<k.length;e+=1)k[e].m(r,null);f=!0},p(e,l){if(e[21]&&p.p(e,l),_?_.p&&(!f||3&l[0]|4&l[1])&&i(_,v,e,e[33],f?l:[-1,-1],se,re):b&&b.p&&(!f||315&l[0])&&b.p(e,f?l:[-1,-1]),(!f||1024&l[0]&&o!==(o=d(e[22](e[10]))+" svelte-dsaf7t"))&&w(n,"class",o),123462088&l[0]|4&l[1]){let t;for(N=e[19],t=0;t<N.length;t+=1){const n=Y(e,N,t);k[t]?(k[t].p(n,l),P(k[t],1)):(k[t]=be(n),k[t].c(),P(k[t],1),k[t].m(r,null))}for(z(),t=N.length;t<k.length;t+=1)E(t);F()}(!f||2048&l[0]&&a!==(a=d(e[22](e[11]))+" svelte-dsaf7t"))&&w(r,"class",a),(!f||512&l[0]&&u!==(u=d(e[22](e[9]))+" svelte-dsaf7t"))&&w(t,"class",u)},i(e){if(!f){P(b,e);for(let e=0;e<N.length;e+=1)P(k[e]);f=!0}},o(e){G(b,e),k=k.filter(Boolean);for(let e=0;e<k.length;e+=1)G(k[e]);f=!1},d(e){e&&g(t),p&&p.d(),b&&b.d(e),$(k,e)}}}function Ne(e,t,n){let l,o,{$$slots:s={},$$scope:r}=t,{columns:c}=t,{rows:a}=t,{sortBy:i=""}=t,{sortOrder:d=1}=t,{filterSelections:u={}}=t,{expanded:f=[]}=t,{expandRowKey:p=null}=t,{expandSingle:h=!1}=t,{iconAsc:m="▲"}=t,{iconDesc:g="▼"}=t,{iconExpand:$="▼"}=t,{iconExpanded:y="▲"}=t,{showExpandIcon:v=!1}=t,{classNameTable:x=""}=t,{classNameThead:_=""}=t,{classNameTbody:b=""}=t,{classNameSelect:w=""}=t,{classNameRow:N=""}=t,{classNameCell:k=""}=t,{classNameRowExpanded:E=""}=t,{classNameExpandedContent:C=""}=t,{classNameCellExpand:O=""}=t;const T=S();let A=()=>"";if(!Array.isArray(f))throw"'expanded' needs to be an array";let R,B=c.some((e=>void 0!==e.filterOptions||void 0!==e.searchValue)),V={};const j=(e,t)=>{var l;t.sortable&&(l=t.key,n(1,d=l===i&&1===d?-1:1),n(0,i=t.key)),T("clickCol",{event:e,col:t,key:t.key})},L=(e,t)=>{T("clickRow",{event:e,row:t})},I=(e,t)=>{t.$expanded=!t.$expanded;const l=t[p];h&&t.$expanded?n(27,f=[l]):h?n(27,f=[]):t.$expanded?n(27,f=[...f,l]):n(27,f=f.filter((e=>e!=l))),T("clickExpand",{event:e,row:t})},M=(e,t,n)=>{T("clickCell",{event:e,row:t,key:n})};return e.$$set=e=>{"columns"in e&&n(3,c=e.columns),"rows"in e&&n(28,a=e.rows),"sortBy"in e&&n(0,i=e.sortBy),"sortOrder"in e&&n(1,d=e.sortOrder),"filterSelections"in e&&n(2,u=e.filterSelections),"expanded"in e&&n(27,f=e.expanded),"expandRowKey"in e&&n(29,p=e.expandRowKey),"expandSingle"in e&&n(30,h=e.expandSingle),"iconAsc"in e&&n(4,m=e.iconAsc),"iconDesc"in e&&n(5,g=e.iconDesc),"iconExpand"in e&&n(6,$=e.iconExpand),"iconExpanded"in e&&n(7,y=e.iconExpanded),"showExpandIcon"in e&&n(8,v=e.showExpandIcon),"classNameTable"in e&&n(9,x=e.classNameTable),"classNameThead"in e&&n(10,_=e.classNameThead),"classNameTbody"in e&&n(11,b=e.classNameTbody),"classNameSelect"in e&&n(12,w=e.classNameSelect),"classNameRow"in e&&n(13,N=e.classNameRow),"classNameCell"in e&&n(14,k=e.classNameCell),"classNameRowExpanded"in e&&n(15,E=e.classNameRowExpanded),"classNameExpandedContent"in e&&n(16,C=e.classNameExpandedContent),"classNameCellExpand"in e&&n(17,O=e.classNameCellExpand),"$$scope"in e&&n(33,r=e.$$scope)},e.$$.update=()=>{if(8&e.$$.dirty[0]&&(n(32,R={}),c.forEach((e=>{n(32,R[e.key]=e,R)}))),264&e.$$.dirty[0]&&n(20,l=(v?1:0)+c.length),1&e.$$.dirty[0]|2&e.$$.dirty[1]){let e=R[i];void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&n(31,A=t=>e.value(t))}939524102&e.$$.dirty[0]|3&e.$$.dirty[1]&&n(19,o=a.filter((e=>Object.keys(u).every((t=>""===u[t]||R[t].searchValue&&(R[t].searchValue(e)+"").toLocaleLowerCase().indexOf((u[t]+"").toLocaleLowerCase())>=0||void 0===u[t]||u[t]===("function"==typeof R[t].filterValue?R[t].filterValue(e):R[t].value(e)))))).map((e=>Object.assign({},e,{$sortOn:A(e),$expanded:null!==p&&f.indexOf(e[p])>=0}))).sort(((e,t)=>e.$sortOn>t.$sortOn?d:e.$sortOn<t.$sortOn?-d:0))),268435464&e.$$.dirty[0]&&B&&c&&a&&(n(18,V={}),c.forEach((e=>{"function"==typeof e.filterOptions?n(18,V[e.key]=e.filterOptions(a),V):Array.isArray(e.filterOptions)&&n(18,V[e.key]=e.filterOptions.map((e=>({name:e,value:e}))),V)})))},[i,d,u,c,m,g,$,y,v,x,_,b,w,N,k,E,C,O,V,o,l,B,e=>[].concat(e).filter((e=>"string"==typeof e&&""!==e)).join(" "),j,L,I,M,f,a,p,h,A,R,r,s,function(e){u[e.key]=this.value,n(2,u),n(3,c),n(18,V)},function(e){u[e.key]=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(2,u),n(3,c),n(18,V)},(e,t)=>j(t,e),(e,t,n)=>{M(n,e,t.key)},(e,t)=>I(t,e),(e,t)=>{L(t,e)}]}return class extends class{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){var t;super(),document.getElementById("svelte-dsaf7t-style")||((t=y("style")).id="svelte-dsaf7t-style",t.textContent="table.svelte-dsaf7t.svelte-dsaf7t{width:100%}.isSortable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}.isClickable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}tr.svelte-dsaf7t th select.svelte-dsaf7t{width:100%}",h(document.head,t)),X(this,e,Ne,we,r,{columns:3,rows:28,sortBy:0,sortOrder:1,filterSelections:2,expanded:27,expandRowKey:29,expandSingle:30,iconAsc:4,iconDesc:5,iconExpand:6,iconExpanded:7,showExpandIcon:8,classNameTable:9,classNameThead:10,classNameTbody:11,classNameSelect:12,classNameRow:13,classNameCell:14,classNameRowExpanded:15,classNameExpandedContent:16,classNameCellExpand:17},[-1,-1])}}}));
//# sourceMappingURL=SvelteTable.js.map
