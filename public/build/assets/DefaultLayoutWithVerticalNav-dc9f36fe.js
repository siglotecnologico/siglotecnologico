import{_ as ae,a as ie}from"./I18n-65d43a49.js";import{_ as oe}from"./AppLoadingIndicator-292e3072.js";import{M as U,N as k,T as q,r as S,O as ne,P as le,Q as K,l as E,j as Q,w as x,a as B,o as n,f as d,e as p,d as I,A as D,b as u,n as e,q as c,K as _,x as P,L as A,h as g,s as C,c as T,F as Y,i as X,y as z,R as re,U as se,k as ce,V as de,m as H,W as V,X as pe,p as me,t as $,v as O,z as L,Y as Z,Z as ue,_ as ve,$ as ge,a0 as fe,B as J,C as he,D as be,a1 as ye,I as M,S as ke}from"./main-904b726a.js";import Ce from"./Footer-807f03fe.js";import Ne from"./NavBarNotifications-f9a88e4b.js";import we from"./NavSearchBar-c61761d4.js";import _e from"./NavbarShortcuts-533d615c.js";import Ae from"./NavbarThemeSwitcher-f4666139.js";import Se from"./UserProfile-b88e303c.js";import{P as Ve}from"./vue3-perfect-scrollbar.esm-e31d8d30.js";import{V as xe}from"./VNodeRenderer-cc584f67.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ie}from"./VSpacer-83e02c49.js";import"./VDivider-597493ff.js";import"./VChip-bfdcd05f.js";import"./VAvatar-b1de89d9.js";import"./VImg-60fefca9.js";import"./CustomRadiosWithImage-251f5beb.js";import"./VRow-355a1a96.js";import"./form-4964f997.js";import"./VRadioGroup-98f48435.js";import"./VSelectionControl-c3ab9651.js";import"./VInput-511964ce.js";import"./useGenerateImageVariant-bbfdcbdc.js";import"./VBadge-6d9b4006.js";import"./VMenu-06a939e0.js";import"./VOverlay-fd224c4f.js";import"./easing-9f15041e.js";import"./lazy-eb3b668f.js";import"./scopeId-288b7732.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-0d97a9c7.js";import"./VList-a5b492de.js";import"./ssrBoot-b0843518.js";import"./VSlider-effa4f05.js";import"./VSliderTrack-54ffa551.js";import"./VSwitch-a59a1ea2.js";import"./VNavigationDrawer-216e4bd8.js";import"./formatters-b3558c7d.js";import"./helpers-61e4df1a.js";import"./VCard-eefd329f.js";import"./VCardText-b2889fcd.js";import"./VTooltip-9284d5e3.js";import"./VListItemAction-78496647.js";import"./shepherd.esm-1e28186c.js";import"./index-51d05da2.js";import"./useApi-a03f2d2e.js";import"./useAbility-0ba802b8.js";const Pe=U({name:"TransitionExpand",setup(t,{slots:a}){const l=i=>{const y=getComputedStyle(i).width;i.style.width=y,i.style.position="absolute",i.style.visibility="hidden",i.style.height="auto";const b=getComputedStyle(i).height;i.style.width="",i.style.position="",i.style.visibility="",i.style.height="0px",getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height=b})},f=i=>{i.style.height="auto"},o=i=>{const y=getComputedStyle(i).height;i.style.height=y,getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height="0px"})};return()=>k(k(q),{name:"expand",onEnter:l,onAfterEnter:f,onLeave:o},()=>{var i;return(i=a.default)==null?void 0:i.call(a)})}}),Le=ee(Pe,[["__scopeId","data-v-2683bda9"]]),Re=t=>(re("data-v-f68e3a6e"),t=t(),se(),t),Te={class:"nav-header"},$e=Re(()=>I("div",{class:"vertical-nav-items-shadow"},null,-1)),Oe={__name:"VerticalNav",props:{tag:{type:[String,Object,Function],required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const a=t,l=S(),f=ne(l);le(K,f);const o=E(),i=v=>"heading"in v?ze:"children"in v?De:te,y=Q();x(()=>y.name,()=>{a.toggleIsOverlayNavActive(!1)});const b=S(!1),h=v=>b.value=v,w=v=>{b.value=v.target.scrollTop>0},N=o.isVerticalNavMini(f);return(v,r)=>{const m=B("RouterLink");return n(),d(g(a.tag),{ref_key:"refNav",ref:l,class:z(["layout-vertical-nav",[{"overlay-nav":e(o).isLessThanOverlayNavBreakpoint,hovered:e(f),visible:t.isOverlayNavActive,scrolled:e(b)}]])},{default:p(()=>[I("div",Te,[D(v.$slots,"nav-header",{},()=>[u(m,{to:"/",class:"app-logo app-title-wrapper"},{default:p(()=>[u(e(xe),{nodes:e(c).app.logo},null,8,["nodes"]),u(q,{name:"vertical-nav-app-title"},{default:p(()=>[_(I("h1",{class:"app-logo-title leading-normal"},P(e(c).app.title),513),[[A,!e(N)]])]),_:1})]),_:1}),_((n(),d(g(e(c).app.iconRenderer||"div"),C({class:["header-action d-none nav-unpin",e(o).isVerticalNavCollapsed&&"d-lg-block"]},e(c).icons.verticalNavUnPinned,{onClick:r[0]||(r[0]=s=>e(o).isVerticalNavCollapsed=!e(o).isVerticalNavCollapsed)}),null,16,["class"])),[[A,e(o).isVerticalNavCollapsed]]),_((n(),d(g(e(c).app.iconRenderer||"div"),C({class:["header-action d-none nav-pin",!e(o).isVerticalNavCollapsed&&"d-lg-block"]},e(c).icons.verticalNavPinned,{onClick:r[1]||(r[1]=s=>e(o).isVerticalNavCollapsed=!e(o).isVerticalNavCollapsed)}),null,16,["class"])),[[A,!e(o).isVerticalNavCollapsed]]),(n(),d(g(e(c).app.iconRenderer||"div"),C({class:"header-action d-lg-none"},e(c).icons.close,{onClick:r[2]||(r[2]=s=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),D(v.$slots,"before-nav-items",{},()=>[$e],!0),D(v.$slots,"nav-items",{updateIsVerticalNavScrolled:h},()=>[(n(),d(e(Ve),{key:e(o).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:w},{default:p(()=>[(n(!0),T(Y,null,X(t.navItems,(s,F)=>(n(),d(g(i(s)),{key:F,item:s},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}},Ee=ee(Oe,[["__scopeId","data-v-f68e3a6e"]]),Fe={class:"nav-group-children"},De=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const a=t,l=Q(),f=ce(),o=E(),i=o.isVerticalNavMini(),y=de(K,S(!1)),b=S(!1),h=S(!1),w=r=>r.some(m=>{let s=V.value.includes(m.title);return"children"in m&&(s=w(m.children)||s),s}),N=r=>{r.forEach(m=>{"children"in m&&N(m.children),V.value=V.value.filter(s=>s!==m.title)})};x(()=>l.path,()=>{const r=H(a.item.children,f);h.value=r&&!o.isVerticalNavMini(y).value,b.value=r},{immediate:!0}),x(h,r=>{const m=V.value.indexOf(a.item.title);r&&m===-1?V.value.push(a.item.title):!r&&m!==-1&&(V.value.splice(m,1),N(a.item.children))},{immediate:!0}),x(V,r=>{if(r.at(-1)===a.item.title)return;const s=H(a.item.children,f);s||w(a.item.children)||(h.value=s,b.value=s)},{deep:!0}),x(o.isVerticalNavMini(y),r=>{h.value=r?!1:b.value});const v=pe();return(r,m)=>e(me)(t.item)?(n(),T("li",{key:0,class:z(["nav-group",[{active:e(b),open:e(h),disabled:t.item.disable}]])},[I("div",{class:"nav-group-label",onClick:m[0]||(m[0]=s=>h.value=!e(h))},[(n(),d(g(e(c).app.iconRenderer||"div"),C(t.item.icon||e(c).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(n(),d(g(e(v)?Z:"div"),C({name:"transition-slide-x"},e(v)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:p(()=>[_((n(),d(g(e(c).app.i18n.enable?"i18n-t":"span"),C(e($)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:p(()=>[O(P(t.item.title),1)]),_:1},16)),[[A,!e(i)]]),t.item.badgeContent?_((n(),d(g(e(c).app.i18n.enable?"i18n-t":"span"),C({key:0},e($)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:p(()=>[O(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(i)]]):L("",!0),_((n(),d(g(e(c).app.iconRenderer||"div"),C(e(c).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[A,!e(i)]])]),_:1},16))]),u(e(Le),null,{default:p(()=>[_(I("ul",Fe,[(n(!0),T(Y,null,X(t.item.children,s=>(n(),d(g("children"in s?"VerticalNavGroup":e(te)),{key:s.title,item:s},null,8,["item"]))),128))],512),[[A,e(h)]])]),_:1})],2)):L("",!0)}}),Me=U({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:a}){const{width:l}=ue(),f=E(),o=S(!1),i=S(!1),y=ve(o);return ge(o,i),x(l,()=>{!f.isLessThanOverlayNavBreakpoint&&i.value&&(i.value=!1)}),()=>{var j,G,W;const b=fe(t,"verticalNavAttrs"),{wrapper:h,wrapperProps:w,...N}=b.value,v=k(Ee,{isOverlayNavActive:o.value,toggleIsOverlayNavActive:y,navItems:t.navItems,...N},{"nav-header":()=>{var R;return(R=a["vertical-nav-header"])==null?void 0:R.call(a)},"before-nav-items":()=>{var R;return(R=a["before-vertical-nav-items"])==null?void 0:R.call(a)}}),r=k("header",{class:["layout-navbar",{"navbar-blur":f.isNavbarBlurEnabled}]},[k("div",{class:"navbar-content-container"},(j=a.navbar)==null?void 0:j.call(a,{toggleVerticalOverlayNavActive:y}))]),m=k("main",{class:"layout-page-content"},k("div",{class:"page-content-container"},(G=a.default)==null?void 0:G.call(a))),s=k("footer",{class:"layout-footer"},[k("div",{class:"footer-content-container"},(W=a.footer)==null?void 0:W.call(a))]),F=k("div",{class:["layout-overlay",{visible:i.value}],onClick:()=>{i.value=!i.value}});return k("div",{class:["layout-wrapper",...f._layoutClasses]},[h?k(h,w,{default:()=>v}):v,k("div",{class:"layout-content-wrapper"},[r,m,s]),F])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const l=E().isVerticalNavMini();return(f,o)=>e(J)(t.item.action,t.item.subject)?(n(),T("li",{key:0,class:z(["nav-link",{disabled:t.item.disable}])},[(n(),d(g(t.item.to?"RouterLink":"a"),C(e(be)(t.item),{class:{"router-link-active router-link-exact-active":e(he)(t.item,f.$router)}}),{default:p(()=>[(n(),d(g(e(c).app.iconRenderer||"div"),C(t.item.icon||e(c).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),u(Z,{name:"transition-slide-x"},{default:p(()=>[_((n(),d(g(e(c).app.i18n.enable?"i18n-t":"span"),C({key:"title",class:"nav-item-title"},e($)(t.item.title,"span")),{default:p(()=>[O(P(t.item.title),1)]),_:1},16)),[[A,!e(l)]]),t.item.badgeContent?_((n(),d(g(e(c).app.i18n.enable?"i18n-t":"span"),C({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e($)(t.item.badgeContent,"span")),{default:p(()=>[O(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(l)]]):L("",!0)]),_:1})]),_:1},16,["class"]))],2)):L("",!0)}},Be={key:0,class:"nav-section-title"},qe={class:"title-wrapper"},ze={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const l=E().isVerticalNavMini();return(f,o)=>e(J)(t.item.action,t.item.subject)?(n(),T("li",Be,[I("div",qe,[u(q,{name:"vertical-nav-section-title",mode:"out-in"},{default:p(()=>[(n(),d(g(e(l)?e(c).app.iconRenderer:e(c).app.i18n.enable?"i18n-t":"span"),C({key:e(l),class:e(l)?"placeholder-icon":"title-text"},{...e(c).icons.sectionTitlePlaceholder,...e($)(t.item.heading,"span")}),{default:p(()=>[O(P(e(l)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):L("",!0)}},je=[{heading:"Apps & Pages"},{title:"Ecommerce",icon:{icon:"tabler-shopping-cart-plus"},children:[{title:"Dashboard",to:"apps-ecommerce-dashboard"},{title:"Product",children:[{title:"List",to:"apps-ecommerce-product-list"},{title:"Add",to:"apps-ecommerce-product-add"},{title:"Category",to:"apps-ecommerce-product-category-list"}]},{title:"Order",children:[{title:"List",to:"apps-ecommerce-order-list"},{title:"Details",to:{name:"apps-ecommerce-order-details-id",params:{id:"9042"}}}]},{title:"Customer",children:[{title:"List",to:"apps-ecommerce-customer-list"},{title:"Details",to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}}}]},{title:"Manage Review",to:"apps-ecommerce-manage-review"},{title:"Referrals",to:"apps-ecommerce-referrals"},{title:"Settings",to:"apps-ecommerce-settings"}]},{title:"Academy",icon:{icon:"tabler-book"},children:[{title:"Dashboard",to:"apps-academy-dashboard"},{title:"My Course",to:"apps-academy-my-course"},{title:"Course Details",to:"apps-academy-course-details"}]},{title:"Logistics",icon:{icon:"tabler-truck"},children:[{title:"Dashboard",to:"apps-logistics-dashboard"},{title:"Fleet",to:"apps-logistics-fleet"}]},{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message-circle"},to:"apps-chat"},{title:"Calendar",icon:{icon:"tabler-calendar"},to:"apps-calendar"},{title:"Invoice",icon:{icon:"tabler-file-dollar"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-users"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Roles & Permissions",icon:{icon:"tabler-settings"},children:[{title:"Roles",to:"apps-roles"},{title:"Permissions",to:"apps-permissions"}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon",target:"_blank"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:{path:"/pages/misc/not-found"},target:"_blank"},{title:"Not Authorized - 401",to:{path:"/pages/misc/not-authorized"},target:"_blank"}]}]},{title:"Authentication",icon:{icon:"tabler-lock"},children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"},{title:"Register Multi-Steps",to:"pages-authentication-register-multi-steps",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Wizard Examples",icon:{icon:"tabler-forms"},children:[{title:"Checkout",to:{name:"wizard-examples-checkout"}},{title:"Property Listing",to:{name:"wizard-examples-property-listing"}},{title:"Create Deal",to:{name:"wizard-examples-create-deal"}}]},{title:"Dialog Examples",icon:{icon:"tabler-square"},to:"pages-dialog-examples"}],Ge=[{heading:"Charts"},{title:"Charts",icon:{icon:"tabler-chart-bar"},children:[{title:"Apex Chart",to:"charts-apex-chart"},{title:"Chartjs",to:"charts-chartjs"}]}],We=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics"},{title:"CRM",to:"dashboards-crm"},{title:"Ecommerce",to:"dashboards-ecommerce"},{title:"Academy",to:"dashboards-academy"},{title:"Logistics",to:"dashboards-logistics"}],badgeContent:"3",badgeClass:"bg-global-primary"},{title:"Front Pages",icon:{icon:"tabler-files"},children:[{title:"Landing",to:"front-pages-landing-page",target:"_blank"},{title:"Pricing",to:"front-pages-pricing",target:"_blank"},{title:"Payment",to:"front-pages-payment",target:"_blank"},{title:"Checkout",to:"front-pages-checkout",target:"_blank"},{title:"Help Center",to:"front-pages-help-center",target:"_blank"}]}],He=[{heading:"Forms & Tables"},{title:"Form Elements",icon:{icon:"tabler-toggle-left"},children:[{title:"Autocomplete",to:"forms-autocomplete"},{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"Editors",to:"forms-editors"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Custom Input",to:"forms-custom-input"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-layout-navbar"},to:"forms-form-layouts"},{title:"Form Wizard",icon:{icon:"tabler-align-center"},children:[{title:"Numbered",to:"forms-form-wizard-numbered"},{title:"Icons",to:"forms-form-wizard-icons"}]},{title:"Form Validation",icon:{icon:"tabler-checkbox"},to:"forms-form-validation"},{title:"Tables",icon:{icon:"tabler-table"},children:[{title:"Simple Table",to:"tables-simple-table"},{title:"Data Table",to:"tables-data-table"}]}],Ue=[{heading:"Others"},{title:"Access Control",icon:{icon:"tabler-command"},to:"access-control",action:"read",subject:"AclDemo"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-headphones"},target:"_blank"},{title:"Documentation",href:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/guide/laravel-integration/folder-structure.html",icon:{icon:"tabler-file-text"},target:"_blank"}],Ke=[{heading:"UI Elements"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Icons",icon:{icon:"tabler-brand-tabler"},to:"pages-icons"},{title:"Cards",icon:{icon:"tabler-id"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-color-swatch"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress Circular",to:"components-progress-circular"},{title:"Progress Linear",to:"components-progress-linear"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]},{title:"Extensions",icon:{icon:"tabler-box"},children:[{title:"Tour",to:"extensions-tour"},{title:"Swiper",to:"extensions-swiper"}]}],Qe=[...We,...je,...Ke,...He,...Ge,...Ue],Ye={class:"d-flex h-100 align-center"},Wt={__name:"DefaultLayoutWithVerticalNav",setup(t){const a=S(!1),l=S(null);return x([a,l],()=>{a.value&&l.value&&l.value.fallbackHandle(),!a.value&&l.value&&l.value.resolveHandle()},{immediate:!0}),(f,o)=>{const i=B("IconBtn"),y=oe,b=B("RouterView"),h=ie;return n(),d(e(Me),{"nav-items":e(Qe)},{navbar:p(({toggleVerticalOverlayNavActive:w})=>{var N;return[I("div",Ye,[u(i,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:v=>w(!0)},{default:p(()=>[u(ye,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),u(we,{class:"ms-lg-n3"}),u(Ie),e(M).app.i18n.enable&&((N=e(M).app.i18n.langConfig)!=null&&N.length)?(n(),d(ae,{key:0,languages:e(M).app.i18n.langConfig},null,8,["languages"])):L("",!0),u(Ae),u(_e),u(Ne,{class:"me-2"}),u(Se)])]}),footer:p(()=>[u(Ce)]),default:p(()=>[u(y,{ref_key:"refLoadingIndicator",ref:l},null,512),u(b,null,{default:p(({Component:w})=>[(n(),d(ke,{timeout:0,onFallback:o[0]||(o[0]=N=>a.value=!0),onResolve:o[1]||(o[1]=N=>a.value=!1)},{default:p(()=>[(n(),d(g(w)))]),_:2},1024))]),_:1}),u(h)]),_:1},8,["nav-items"])}}};export{Wt as default};
