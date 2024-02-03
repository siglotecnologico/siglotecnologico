import{_ as Qt,a as Zt}from"./I18n-65d43a49.js";import{_ as te}from"./AppLoadingIndicator-292e3072.js";import{o as h,c as z,F as Dt,i as Ot,f as C,h as P,j as $t,k as ee,l as dt,r as V,w as ot,m as oe,n as u,p as ne,e as A,d as w,q as O,s as q,t as Ft,v as Mt,x as ft,y as Q,z as mt,A as I,b as R,B as ie,C as re,D as se,E as ae,G as le,H as ce,I as N,J as ct,K as _t,L as Rt,T as ue,a as At,S as pe}from"./main-904b726a.js";import de from"./Footer-807f03fe.js";import fe from"./NavBarNotifications-f9a88e4b.js";import me from"./NavSearchBar-c61761d4.js";import ge from"./NavbarShortcuts-533d615c.js";import he from"./NavbarThemeSwitcher-f4666139.js";import be from"./UserProfile-b88e303c.js";import{V as ve}from"./VNodeRenderer-cc584f67.js";import{V as ye}from"./VSpacer-83e02c49.js";import"./VDivider-597493ff.js";import"./VChip-bfdcd05f.js";import"./VAvatar-b1de89d9.js";import"./VImg-60fefca9.js";import"./CustomRadiosWithImage-251f5beb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VRow-355a1a96.js";import"./form-4964f997.js";import"./VRadioGroup-98f48435.js";import"./VSelectionControl-c3ab9651.js";import"./VInput-511964ce.js";import"./vue3-perfect-scrollbar.esm-e31d8d30.js";import"./useGenerateImageVariant-bbfdcbdc.js";import"./VBadge-6d9b4006.js";import"./VMenu-06a939e0.js";import"./VOverlay-fd224c4f.js";import"./easing-9f15041e.js";import"./lazy-eb3b668f.js";import"./scopeId-288b7732.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-0d97a9c7.js";import"./VList-a5b492de.js";import"./ssrBoot-b0843518.js";import"./VSlider-effa4f05.js";import"./VSliderTrack-54ffa551.js";import"./VSwitch-a59a1ea2.js";import"./VNavigationDrawer-216e4bd8.js";import"./formatters-b3558c7d.js";import"./helpers-61e4df1a.js";import"./VCard-eefd329f.js";import"./VCardText-b2889fcd.js";import"./VTooltip-9284d5e3.js";import"./VListItemAction-78496647.js";import"./shepherd.esm-1e28186c.js";import"./index-51d05da2.js";import"./useApi-a03f2d2e.js";import"./useAbility-0ba802b8.js";const we={class:"nav-items"},xe={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=o=>"children"in o?Ce:Bt;return(o,n)=>(h(),z("ul",we,[(h(!0),z(Dt,null,Ot(t.navItems,(i,r)=>(h(),C(P(e(i)),{key:r,item:i},null,8,["item"]))),128))]))}},ke={class:"nav-group-label"},Ce=Object.assign({name:"HorizontalNavGroup"},{__name:"HorizontalNavGroup",props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,o=$t(),n=ee(),i=dt(),r=V(!1);return ot(()=>o.path,()=>{const s=oe(e.item.children,n);r.value=s},{immediate:!0}),(s,a)=>u(ne)(t.item)?(h(),C(u(lo),{key:0,"is-rtl":u(i).isAppRTL,class:Q(["nav-group",[{active:u(r),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:A(()=>[(h(!0),z(Dt,null,Ot(t.item.children,l=>(h(),C(P("children"in l?"HorizontalNavGroup":u(Bt)),{key:l.title,item:l,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:A(()=>[w("div",ke,[(h(),C(P(u(O).app.iconRenderer||"div"),q({class:"nav-item-icon"},t.item.icon||u(O).verticalNav.defaultNavItemIconProps),null,16)),(h(),C(P(u(O).app.i18n.enable?"i18n-t":"span"),q(u(Ft)(t.item.title,"span"),{class:"nav-item-title"}),{default:A(()=>[Mt(ft(t.item.title),1)]),_:1},16)),(h(),C(P(u(O).app.iconRenderer||"div"),q(u(O).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):mt("",!0)}}),_e={class:"layout-navbar"},Re={class:"navbar-content-container"},Ae={class:"layout-horizontal-nav"},Se={class:"horizontal-nav-content-container"},Le={class:"layout-page-content"},Pe={class:"layout-footer"},Ee={class:"footer-content-container"},Te={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const e=dt();return(o,n)=>(h(),z("div",{class:Q(["layout-wrapper",u(e)._layoutClasses])},[w("div",{class:Q(["layout-navbar-and-nav-container",u(e).isNavbarBlurEnabled&&"header-blur"])},[w("div",_e,[w("div",Re,[I(o.$slots,"navbar")])]),w("div",Ae,[w("div",Se,[R(u(xe),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),w("main",Le,[I(o.$slots,"default")]),w("footer",Pe,[w("div",Ee,[I(o.$slots,"footer")])])],2))}},Bt={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;return(o,n)=>u(ie)(t.item.action,t.item.subject)?(h(),z("li",{key:0,class:Q(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(h(),C(P(t.item.to?"RouterLink":"a"),q(u(se)(t.item),{class:{"router-link-active router-link-exact-active":u(re)(t.item,o.$router)}}),{default:A(()=>[(h(),C(P(u(O).app.iconRenderer||"div"),q({class:"nav-item-icon"},t.item.icon||u(O).verticalNav.defaultNavItemIconProps),null,16)),(h(),C(P(u(O).app.i18n.enable?"i18n-t":"span"),q({class:"nav-item-title"},u(Ft)(t.item.title,"span")),{default:A(()=>[Mt(ft(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):mt("",!0)}},Ne=Math.min,De=Math.max,Oe={left:"right",right:"left",bottom:"top",top:"bottom"},$e={start:"end",end:"start"};function St(t,e,o){return De(t,Ne(e,o))}function gt(t,e){return typeof t=="function"?t(e):t}function G(t){return t.split("-")[0]}function ht(t){return t.split("-")[1]}function Vt(t){return t==="x"?"y":"x"}function It(t){return t==="y"?"height":"width"}function bt(t){return["top","bottom"].includes(G(t))?"y":"x"}function zt(t){return Vt(bt(t))}function Fe(t,e,o){o===void 0&&(o=!1);const n=ht(t),i=zt(t),r=It(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=nt(s)),[s,nt(s)]}function Me(t){const e=nt(t);return[ut(t),e,ut(e)]}function ut(t){return t.replace(/start|end/g,e=>$e[e])}function Be(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Ve(t,e,o,n){const i=ht(t);let r=Be(G(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ut)))),r}function nt(t){return t.replace(/left|right|bottom|top/g,e=>Oe[e])}function Ie(t){return{top:0,right:0,bottom:0,left:0,...t}}function ze(t){return typeof t!="number"?Ie(t):{top:t,right:t,bottom:t,left:t}}function it(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Lt(t,e,o){let{reference:n,floating:i}=t;const r=bt(e),s=zt(e),a=It(s),l=G(e),c=r==="y",d=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2,g=n[a]/2-i[a]/2;let f;switch(l){case"top":f={x:d,y:n.y-i.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:p};break;case"left":f={x:n.x-i.width,y:p};break;default:f={x:n.x,y:n.y}}switch(ht(e)){case"start":f[s]-=g*(o&&c?-1:1);break;case"end":f[s]+=g*(o&&c?-1:1);break}return f}const He=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:p}=Lt(c,n,l),g=n,f={},m=0;for(let b=0;b<a.length;b++){const{name:v,fn:y}=a[b],{x,y:k,data:T,reset:_}=await y({x:d,y:p,initialPlacement:n,placement:g,strategy:i,middlewareData:f,rects:c,platform:s,elements:{reference:t,floating:e}});d=x??d,p=k??p,f={...f,[v]:{...f[v],...T}},_&&m<=50&&(m++,typeof _=="object"&&(_.placement&&(g=_.placement),_.rects&&(c=_.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):_.rects),{x:d,y:p}=Lt(c,g,l)),b=-1)}return{x:d,y:p,placement:g,strategy:i,middlewareData:f}};async function Ht(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:g=!1,padding:f=0}=gt(e,t),m=ze(f),v=a[g?p==="floating"?"reference":"floating":p],y=it(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),x=p==="floating"?{...s.floating,x:n,y:i}:s.reference,k=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),T=await(r.isElement==null?void 0:r.isElement(k))?await(r.getScale==null?void 0:r.getScale(k))||{x:1,y:1}:{x:1,y:1},_=it(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:k,strategy:l}):x);return{top:(y.top-_.top+m.top)/T.y,bottom:(_.bottom-y.bottom+m.bottom)/T.y,left:(y.left-_.left+m.left)/T.x,right:(_.right-y.right+m.right)/T.x}}const We=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=gt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const y=G(i),x=G(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),T=g||(x||!b?[nt(a)]:Me(a));!g&&m!=="none"&&T.push(...Ve(a,b,m,k));const _=[a,...T],lt=await Ht(e,v),et=[];let U=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&et.push(lt[y]),p){const B=Fe(i,s,k);et.push(lt[B[0]],lt[B[1]])}if(U=[...U,{placement:i,overflows:et}],!et.every(B=>B<=0)){var wt,xt;const B=(((wt=r.flip)==null?void 0:wt.index)||0)+1,Ct=_[B];if(Ct)return{data:{index:B,overflows:U},reset:{placement:Ct}};let Y=(xt=U.filter(H=>H.overflows[0]<=0).sort((H,W)=>H.overflows[1]-W.overflows[1])[0])==null?void 0:xt.placement;if(!Y)switch(f){case"bestFit":{var kt;const H=(kt=U.map(W=>[W.placement,W.overflows.filter(K=>K>0).reduce((K,Jt)=>K+Jt,0)]).sort((W,K)=>W[1]-K[1])[0])==null?void 0:kt[0];H&&(Y=H);break}case"initialPlacement":Y=a;break}if(i!==Y)return{reset:{placement:Y}}}return{}}}},qe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:y,y:x}=v;return{x:y,y:x}}},...l}=gt(t,e),c={x:o,y:n},d=await Ht(e,l),p=bt(G(i)),g=Vt(p);let f=c[g],m=c[p];if(r){const v=g==="y"?"top":"left",y=g==="y"?"bottom":"right",x=f+d[v],k=f-d[y];f=St(x,f,k)}if(s){const v=p==="y"?"top":"left",y=p==="y"?"bottom":"right",x=m+d[v],k=m-d[y];m=St(x,m,k)}const b=a.fn({...e,[g]:f,[p]:m});return{...b,data:{x:b.x-o,y:b.y-n}}}}},Pt=Math.min,J=Math.max,rt=Math.round,$=t=>({x:t,y:t});function F(t){return Wt(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(Wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wt(t){return t instanceof Node||t instanceof S(t).Node}function D(t){return t instanceof Element||t instanceof S(t).Element}function E(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function Et(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function je(t){return["table","td","th"].includes(F(t))}function vt(t){const e=yt(),o=L(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Ge(t){let e=X(t);for(;E(e)&&!st(e);){if(vt(e))return e;e=X(e)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function st(t){return["html","body","#document"].includes(F(t))}function L(t){return S(t).getComputedStyle(t)}function at(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(F(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Et(t)&&t.host||M(t);return Et(e)?e.host:e}function qt(t){const e=X(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:E(e)&&tt(e)?e:qt(e)}function pt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=qt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=S(i);return r?e.concat(s,s.visualViewport||[],tt(i)?i:[],s.frameElement&&o?pt(s.frameElement):[]):e.concat(i,pt(i,[],o))}function jt(t){const e=L(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=E(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,a=rt(o)!==r||rt(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function Gt(t){return D(t)?t:t.contextElement}function j(t){const e=Gt(t);if(!E(e))return $(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=jt(e);let s=(r?rt(o.width):o.width)/n,a=(r?rt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Xe=$(0);function Xt(t){const e=S(t);return!yt()||!e.visualViewport?Xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ue(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==S(t)?!1:e}function Z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=Gt(t);let s=$(1);e&&(n?D(n)&&(s=j(n)):s=j(t));const a=Ue(r,o,n)?Xt(r):$(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,d=i.width/s.x,p=i.height/s.y;if(r){const g=S(r),f=n&&D(n)?S(n):n;let m=g.frameElement;for(;m&&n&&f!==g;){const b=j(m),v=m.getBoundingClientRect(),y=L(m),x=v.left+(m.clientLeft+parseFloat(y.paddingLeft))*b.x,k=v.top+(m.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,c*=b.y,d*=b.x,p*=b.y,l+=x,c+=k,m=S(m).frameElement}}return it({width:d,height:p,x:l,y:c})}function Ye(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=E(o),r=M(o);if(o===r)return e;let s={scrollLeft:0,scrollTop:0},a=$(1);const l=$(0);if((i||!i&&n!=="fixed")&&((F(o)!=="body"||tt(r))&&(s=at(o)),E(o))){const c=Z(o);a=j(o),l.x=c.x+o.clientLeft,l.y=c.y+o.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-s.scrollLeft*a.x+l.x,y:e.y*a.y-s.scrollTop*a.y+l.y}}function Ke(t){return Array.from(t.getClientRects())}function Ut(t){return Z(M(t)).left+at(t).scrollLeft}function Je(t){const e=M(t),o=at(t),n=t.ownerDocument.body,i=J(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=J(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Ut(t);const a=-o.scrollTop;return L(n).direction==="rtl"&&(s+=J(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}function Qe(t,e){const o=S(t),n=M(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,l=0;if(i){r=i.width,s=i.height;const c=yt();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:a,y:l}}function Ze(t,e){const o=Z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=E(t)?j(t):$(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:s,height:a,x:l,y:c}}function Tt(t,e,o){let n;if(e==="viewport")n=Qe(t,o);else if(e==="document")n=Je(M(t));else if(D(e))n=Ze(e,o);else{const i=Xt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return it(n)}function Yt(t,e){const o=X(t);return o===e||!D(o)||st(o)?!1:L(o).position==="fixed"||Yt(o,e)}function to(t,e){const o=e.get(t);if(o)return o;let n=pt(t,[],!1).filter(a=>D(a)&&F(a)!=="body"),i=null;const r=L(t).position==="fixed";let s=r?X(t):t;for(;D(s)&&!st(s);){const a=L(s),l=vt(s);!l&&a.position==="fixed"&&(i=null),(r?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!l&&Yt(t,s))?n=n.filter(d=>d!==s):i=a,s=X(s)}return e.set(t,n),n}function eo(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?to(e,this._c):[].concat(o),n],a=s[0],l=s.reduce((c,d)=>{const p=Tt(e,d,i);return c.top=J(p.top,c.top),c.right=Pt(p.right,c.right),c.bottom=Pt(p.bottom,c.bottom),c.left=J(p.left,c.left),c},Tt(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function oo(t){return jt(t)}function no(t,e,o){const n=E(e),i=M(e),r=o==="fixed",s=Z(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=$(0);if(n||!n&&!r)if((F(e)!=="body"||tt(i))&&(a=at(e)),n){const c=Z(e,!0,r,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else i&&(l.x=Ut(i));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Nt(t,e){return!E(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Kt(t,e){const o=S(t);if(!E(t))return o;let n=Nt(t,e);for(;n&&je(n)&&L(n).position==="static";)n=Nt(n,e);return n&&(F(n)==="html"||F(n)==="body"&&L(n).position==="static"&&!vt(n))?o:n||Ge(t)||o}const io=async function(t){let{reference:e,floating:o,strategy:n}=t;const i=this.getOffsetParent||Kt,r=this.getDimensions;return{reference:no(e,await i(o),n),floating:{x:0,y:0,...await r(o)}}};function ro(t){return L(t).direction==="rtl"}const so={convertOffsetParentRelativeRectToViewportRelativeRect:Ye,getDocumentElement:M,getClippingRect:eo,getOffsetParent:Kt,getElementRects:io,getClientRects:Ke,getDimensions:oo,getScale:j,isElement:D,isRTL:ro},ao=(t,e,o)=>{const n=new Map,i={platform:so,...o},r={...i.platform,_c:n};return He(t,e,{...i,platform:r})},lo={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,o=dt(),n=V(),i=V(),r=V({left:"0px",top:"0px"}),s=async()=>{if(n.value!==void 0&&i.value!==void 0){const{x:p,y:g}=await ao(n.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[We({boundary:document.querySelector("body")}),qe({boundary:document.querySelector("body")})]});r.value.left=`${p}px`,r.value.top=`${g}px`}};ae(()=>o.horizontalNavType).toMatch(p=>p==="static").then(()=>{le("scroll",s)});const a=V(!1),l=()=>{a.value=!0,s()},c=()=>{a.value=!1};ce(s),ot([()=>o.isAppRTL,()=>o.appContentWidth],s);const d=$t();return ot(()=>d.fullPath,c),(p,g)=>(h(),z("div",{class:Q(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":u(a)}]])},[w("div",{ref_key:"refPopperContainer",ref:n,class:"popper-triggerer",onMouseenter:l,onMouseleave:c},[I(p.$slots,"default")],544),u(N).horizontalNav.transition?typeof u(N).horizontalNav.transition=="string"?(h(),C(ue,{key:1,name:u(N).horizontalNav.transition},{default:A(()=>[_t(w("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:ct(u(r)),onMouseenter:l,onMouseleave:c},[w("div",null,[I(p.$slots,"content")])],36),[[Rt,u(a)]])]),_:3},8,["name"])):(h(),C(P(u(N).horizontalNav.transition),{key:2},{default:A(()=>[_t(w("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:ct(u(r)),onMouseenter:l,onMouseleave:c},[w("div",null,[I(p.$slots,"content")])],36),[[Rt,u(a)]])]),_:3})):(h(),z("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:ct(u(r)),onMouseenter:l,onMouseleave:c},[w("div",null,[I(p.$slots,"content")])],36))],2))}},co=[{title:"Apps",icon:{icon:"tabler-layout-grid-add"},children:[{title:"Ecommerce",icon:{icon:"tabler-shopping-cart-plus"},children:[{title:"Product",children:[{title:"List",to:"apps-ecommerce-product-list"},{title:"Add",to:"apps-ecommerce-product-add"},{title:"Category",to:"apps-ecommerce-product-category-list"}]},{title:"Order",children:[{title:"List",to:"apps-ecommerce-order-list"},{title:"Details",to:{name:"apps-ecommerce-order-details-id",params:{id:"9042"}}}]},{title:"Customer",children:[{title:"List",to:"apps-ecommerce-customer-list"}]},{title:"Settings",to:"apps-ecommerce-settings"}]},{title:"Academy",icon:{icon:"tabler-book"},children:[{title:"Dashboard",to:"apps-academy-dashboard"},{title:"My Course",to:"apps-academy-my-course"},{title:"Course Details",to:"apps-academy-course-details"}]},{title:"Logistics",icon:{icon:"tabler-truck"},children:[{title:"Dashboard",to:"apps-logistics-dashboard"},{title:"Fleet",to:"apps-logistics-fleet"}]},{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message-circle"},to:"apps-chat"},{title:"Calendar",to:"apps-calendar",icon:{icon:"tabler-calendar"}},{title:"Invoice",icon:{icon:"tabler-file-dollar"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-users"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Roles & Permissions",icon:{icon:"tabler-settings"},children:[{title:"Roles",to:"apps-roles"},{title:"Permissions",to:"apps-permissions"}]}]}],uo=[{title:"Charts",icon:{icon:"tabler-chart-bar"},children:[{title:"Apex Chart",to:"charts-apex-chart",icon:{icon:"tabler-chart-line"}},{title:"Chartjs",to:"charts-chartjs",icon:{icon:"tabler-chart-pie"}}]}],po=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics",icon:{icon:"tabler-chart-pie-2"}},{title:"eCommerce",to:"dashboards-ecommerce",icon:{icon:"tabler-atom-2"}},{title:"CRM",to:"dashboards-crm",icon:{icon:"tabler-3d-cube-sphere"}},{title:"Ecommerce",to:"dashboards-ecommerce",icon:{icon:"tabler-shopping-cart"}},{title:"Academy",to:"dashboards-academy",icon:{icon:"tabler-book"}},{title:"Logistics",to:"dashboards-logistics",icon:{icon:"tabler-truck"}}]}],fo=[{title:"Forms",icon:{icon:"tabler-forms"},children:[{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Autocomplete",to:"forms-autocomplete"},{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"Editors",to:"forms-editors"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Custom Input",to:"forms-custom-input"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-circle-check"},to:"forms-form-layouts"},{title:"Form Wizard",icon:{icon:"tabler-align-center"},children:[{title:"Numbered",to:"forms-form-wizard-numbered"},{title:"Icons",to:"forms-form-wizard-icons"}]},{title:"Form Validation",icon:{icon:"tabler-circle-check"},to:"forms-form-validation"}]}],mo=[{title:"Misc",icon:{icon:"tabler-box-multiple"},children:[{title:"Access Control",icon:{icon:"tabler-command"},to:"access-control",action:"read",subject:"AclDemo"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-headphones"},target:"_blank"},{title:"Documentation",href:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/",icon:{icon:"tabler-file-text"},target:"_blank"}]}],go=[{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"User Profile",icon:{icon:"tabler-user-circle"},to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",icon:{icon:"tabler-settings"},to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"FAQ",icon:{icon:"tabler-help"},to:"pages-faq"},{title:"Pricing",icon:{icon:"tabler-diamond"},to:"pages-pricing"},{title:"Misc",icon:{icon:"tabler-3d-cube-sphere"},children:[{title:"Coming Soon",to:"pages-misc-coming-soon"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:{path:"/pages/misc/not-found"},target:"_blank"},{title:"Not Authorized - 401",to:{path:"/pages/misc/not-authorized"},target:"_blank"}]},{title:"Authentication",icon:{icon:"tabler-lock"},children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"},{title:"Register Multi-Steps",to:"pages-authentication-register-multi-steps",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Wizard Pages",icon:{icon:"tabler-forms"},children:[{title:"Checkout",to:{name:"wizard-examples-checkout"}},{title:"Property Listing",to:{name:"wizard-examples-property-listing"}},{title:"Create Deal",to:{name:"wizard-examples-create-deal"}}]},{title:"Dialog Examples",icon:{icon:"tabler-square"},to:"pages-dialog-examples"},{title:"Front Pages",icon:{icon:"tabler-files"},children:[{title:"Landing",to:"front-pages-landing-page",target:"_blank"},{title:"Pricing",to:"front-pages-pricing",target:"_blank"},{title:"Payment",to:"front-pages-payment",target:"_blank"},{title:"Checkout",to:"front-pages-checkout",target:"_blank"},{title:"Help Center",to:"front-pages-help-center",target:"_blank"}]}]}],ho=[{title:"Tables",icon:{icon:"tabler-layout-grid"},children:[{title:"Simple Table",icon:{icon:"tabler-table"},to:"tables-simple-table"},{title:"Data Table",icon:{icon:"tabler-layout-grid"},to:"tables-data-table"}]}],bo=[{title:"User Interface",icon:{icon:"tabler-color-swatch"},children:[{title:"Icons",icon:{icon:"tabler-brand-tabler"},to:"pages-icons"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Cards",icon:{icon:"tabler-id"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-toggle-left"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress Circular",to:"components-progress-circular"},{title:"Progress Linear",to:"components-progress-linear"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]},{title:"Extensions",icon:{icon:"tabler-box"},children:[{title:"Tour",to:"extensions-tour"},{title:"Swiper",to:"extensions-swiper"}]}]}],vo=[...po,...co,...go,...bo,...fo,...ho,...uo,...mo],yo={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},gn={__name:"DefaultLayoutWithHorizontalNav",setup(t){const e=V(!1),o=V(null);return ot([e,o],()=>{e.value&&o.value&&o.value.fallbackHandle(),!e.value&&o.value&&o.value.resolveHandle()},{immediate:!0}),(n,i)=>{const r=At("RouterLink"),s=te,a=At("RouterView"),l=Zt;return h(),C(u(Te),{"nav-items":u(vo)},{navbar:A(()=>{var c;return[R(r,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:A(()=>[R(u(ve),{nodes:u(N).app.logo},null,8,["nodes"]),w("h1",yo,ft(u(N).app.title),1)]),_:1}),R(ye),R(me,{"trigger-btn-class":"ms-lg-n3"}),u(N).app.i18n.enable&&((c=u(N).app.i18n.langConfig)!=null&&c.length)?(h(),C(Qt,{key:0,languages:u(N).app.i18n.langConfig},null,8,["languages"])):mt("",!0),R(he),R(ge),R(fe,{class:"me-2"}),R(be)]}),footer:A(()=>[R(de)]),default:A(()=>[R(s,{ref_key:"refLoadingIndicator",ref:o},null,512),R(a,null,{default:A(({Component:c})=>[(h(),C(pe,{timeout:0,onFallback:i[0]||(i[0]=d=>e.value=!0),onResolve:i[1]||(i[1]=d=>e.value=!1)},{default:A(()=>[(h(),C(P(c)))]),_:2},1024))]),_:1}),R(l)]),_:1},8,["nav-items"])}}};export{gn as default};
