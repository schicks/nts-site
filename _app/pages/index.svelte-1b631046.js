import{S as t,i as e,s as n,e as s,c as a,a as r,d as i,f as o,I as c,A as l,J as f,t as u,k as h,j as p,g as d,n as m,m as g,H as v,o as w,x as k,u as $,v as _}from"../chunks/vendor-1f0550c8.js";import{_ as x}from"../chunks/preload-helper-ec9aa979.js";function j(t){let e;return{c(){e=s("div")},l(t){e=a(t,"DIV",{}),r(e).forEach(i)},m(n,s){o(n,e,s),t[2](e)},p:c,i:c,o:c,d(n){n&&i(e),t[2](null)}}}function y(t,e,n){var s=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(a,r){function i(t){try{c(s.next(t))}catch(e){r(e)}}function o(t){try{c(s.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,o)}c((s=s.apply(t,e||[])).next())}))};let a,{sketch:r}=e;return l((()=>s(void 0,void 0,void 0,(function*(){if(a){const t=(yield x((()=>import("../chunks/p5.min-7669d470.js").then((function(t){return t.p}))),[])).default;console.log(a),new t(r,a)}})))),t.$$set=t=>{"sketch"in t&&n(1,r=t.sketch)},[a,r,function(t){f[t?"unshift":"push"]((()=>{a=t,n(0,a)}))}]}class E extends t{constructor(t){super(),e(this,t,y,j,n,{sketch:1})}}function H(t){t.setup=function(){t.frameRate(2),t.createCanvas(800,800)},t.draw=function(){t.fill(100,150,255),t.rect(0,0,t.width,t.height),t.fill(80,150,80),t.circle(400,400,700),t.fill(0),t.circle(400,400,150);const e=t.noise(.02*t.frameCount)*t.width/1.5;let n=0;for(t.push(),t.translate(t.width/2,t.height/2);n<100;)t.rotate(.1*e),t.fill(5*n,2*n,n),t.stroke(0),t.ellipse(n+78,n+24,122,50),n+=.05,t.fill(200,200,50),t.line(n+0,n+0,100,100);t.pop();let s=112;for(t.push(),t.translate(t.width/2,t.height/2);s<200;)t.rotate(.2*e),t.stroke(0),t.fill(120,s,20),t.square(s+78,s+24,122),t.bezier(s+399,s+147,210,93,s+105,s+-36,s+168,s-100),s+=.5;t.pop();let a=285;for(t.push(),t.translate(t.width/2,t.height/2);a<335;)t.rotate(.2*e),t.fill(140,s,19),t.circle(a+22,a+-8,81),a+=.5;t.pop()}}function P(t){let e,n,l,f,x;return f=new E({props:{sketch:H}}),{c(){e=s("h1"),n=u("Home Page"),l=h(),p(f.$$.fragment)},l(t){e=a(t,"H1",{});var s=r(e);n=d(s,"Home Page"),s.forEach(i),l=m(t),g(f.$$.fragment,t)},m(t,s){o(t,e,s),v(e,n),o(t,l,s),w(f,t,s),x=!0},p:c,i(t){x||(k(f.$$.fragment,t),x=!0)},o(t){$(f.$$.fragment,t),x=!1},d(t){t&&i(e),t&&i(l),_(f,t)}}}class I extends t{constructor(t){super(),e(this,t,null,P,n,{})}}export{I as default};