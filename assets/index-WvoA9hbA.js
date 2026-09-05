(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=([t,o,n])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(o).forEach(e=>{r.setAttribute(e,String(o[e]))}),n!=null&&n.length&&n.forEach(e=>{const s=E(e);r.appendChild(s)}),r},b=(t,o={})=>{const n="svg",r={...v,...o};return E([n,r,t])};/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t=>Array.from(t.attributes).reduce((o,n)=>(o[n.name]=n.value,o),{}),x=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",S=t=>t.flatMap(x).map(n=>n.trim()).filter(Boolean).filter((n,r,e)=>e.indexOf(n)===r).join(" "),I=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(o,n,r)=>n.toUpperCase()+r.toLowerCase()),y=(t,{nameAttr:o,icons:n,attrs:r})=>{var p;const e=t.getAttribute(o);if(e==null)return;const s=I(e),d=n[s];if(!d)return;const u=M(t),f={...v,"data-lucide":e,...r,...u},h=S(["lucide",`lucide-${e}`,u,r]);h&&Object.assign(f,{class:h});const m=b(d,f);return(p=t.parentNode)==null?void 0:p.replaceChild(m,t)};/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=({icons:t={},nameAttr:o="data-lucide",attrs:n={},root:r=document}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");const e=r.querySelectorAll(`[${o}]`);if(Array.from(e).forEach(s=>y(s,{nameAttr:o,icons:t,attrs:n})),o==="data-lucide"){const s=r.querySelectorAll("[icon-name]");s.length>0&&Array.from(s).forEach(d=>y(d,{nameAttr:"icon-name",icons:t,attrs:n}))}};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("header"),o=document.getElementById("hamburger-menu-cta"),n=document.getElementById("mobile-menu"),r=document.getElementById("mobile-menu-overlay"),e=document.getElementById("mobile-menu-close"),s=document.querySelectorAll(".nav-link"),d=document.querySelectorAll("main section[id]"),u=()=>t?t.offsetHeight:0,f=c=>{const i=c.getBoundingClientRect().top+window.scrollY-u();return Math.max(0,Math.round(i))},h=()=>Promise.all([...document.images].map(c=>c.complete&&c.naturalHeight>0?Promise.resolve():c.decode?c.decode().catch(()=>{}):new Promise(i=>{c.addEventListener("load",i,{once:!0}),c.addEventListener("error",i,{once:!0})}))),m=async(c,i=!1)=>{const a=document.querySelector(c);if(!a)return;await h();const l=f(a);window.scrollTo({top:l,behavior:i?"auto":"smooth"}),history.pushState(null,"",c),requestAnimationFrame(()=>{const g=f(a);Math.abs(g-window.scrollY)>8&&window.scrollTo({top:g,behavior:i?"auto":"smooth"})})};document.querySelectorAll('a[href^="#"]').forEach(c=>{c.addEventListener("click",i=>{const a=c.getAttribute("href");!a||a==="#"||!document.querySelector(a)||(i.preventDefault(),m(a),w())})});const p=()=>{n&&(n.classList.remove("translate-x-full"),n.setAttribute("aria-hidden","false"),o==null||o.setAttribute("aria-expanded","true"),r==null||r.classList.remove("hidden"),document.body.classList.add("overflow-hidden"),e==null||e.focus())},w=()=>{n&&(n.classList.add("translate-x-full"),n.setAttribute("aria-hidden","true"),o==null||o.setAttribute("aria-expanded","false"),r==null||r.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))};o==null||o.addEventListener("click",p),e==null||e.addEventListener("click",w),r==null||r.addEventListener("click",w),document.addEventListener("keydown",c=>{c.key==="Escape"&&w()});const A=c=>{s.forEach(i=>{const a=i.getAttribute("href");i.classList.toggle("is-active",a===`#${c}`)})},L=new IntersectionObserver(c=>{var a;const i=c.filter(l=>l.isIntersecting).sort((l,g)=>g.intersectionRatio-l.intersectionRatio)[0];(a=i==null?void 0:i.target)!=null&&a.id&&A(i.target.id)},{rootMargin:`-${u()+24}px 0px -45% 0px`,threshold:[.15,.35,.6]});d.forEach(c=>L.observe(c)),window.location.hash&&requestAnimationFrame(()=>m(window.location.hash,!0))});T({icons:{Menu:C,X:j,ArrowRight:N,Phone:O,Mail:q,MapPin:P,ExternalLink:k}});
