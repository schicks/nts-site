function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function u(t,n,e,o,r,i){if(r){const c=l(n,e,o,i);t.p(c,r)}}function f(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let d,h=!1;function _(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function m(t,n){if(h){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:_(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<c.length;l++){for(;s<i.length&&c[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function p(t,n,e){h&&!e?m(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function b(){return x(" ")}function y(){return x("")}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function k(t,n,e){return function(t,n,e,o){return E(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,$)}function A(t,n){return E(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>x(n)),!0)}function N(t){return A(t," ")}function S(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t){d=t}function z(){if(!d)throw new Error("Function called outside component initialization");return d}function B(t){z().$$.on_mount.push(t)}function C(t){z().$$.after_update.push(t)}function T(t,n){z().$$.context.set(t,n)}const I=[],M=[],O=[],q=[],D=Promise.resolve();let F=!1;function H(t){O.push(t)}let G=!1;const J=new Set;function P(){if(!G){G=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];j(n),W(n.$$)}for(j(null),I.length=0;M.length;)M.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];J.has(n)||(J.add(n),n())}O.length=0}while(I.length);for(;q.length;)q.pop()();F=!1,G=!1,J.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const K=new Set;let L;function Q(){L={r:0,c:[],p:L}}function R(){L.r||r(L.c),L=L.p}function U(t,n){t&&t.i&&(K.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),L.c.push((()=>{K.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,o),c||H((()=>{const n=l.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(H)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(I.push(t),F||(F=!0,D.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,i,c,a,l,s,u=[-1]){const f=d;j(n);const _=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(_.root);let m=!1;if(_.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return _.ctx&&a(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),m&&ot(n,t)),e})):[],_.update(),m=!0,r(_.before_update),_.fragment=!!c&&c(_.ctx),e.target){if(e.hydrate){h=!0;const t=w(e.target);_.fragment&&_.fragment.l(t),t.forEach(g)}else _.fragment&&_.fragment.c();e.intro&&U(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),h=!1,P()}j(f)}class it{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function at(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!ct.length;for(const e of r)e[1](),ct.push(e,n);if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.add(l),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}export{B as A,n as B,at as C,a as D,u as E,f as F,s as G,m as H,t as I,M as J,it as S,w as a,v as b,k as c,g as d,$ as e,p as f,A as g,S as h,rt as i,Z as j,b as k,y as l,tt as m,N as n,nt as o,X as p,Y as q,Q as r,c as s,x as t,V as u,et as v,R as w,U as x,T as y,C as z};