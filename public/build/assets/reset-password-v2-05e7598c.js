import{_ as g}from"./AppTextField-4158ea7e.js";import{r as m,a as v,o as k,f as x,e as s,b as e,d as r,n as t,I as P,a$ as y,aj as C,v as w,a1 as I}from"./main-904b726a.js";import{u as p}from"./useGenerateImageVariant-bbfdcbdc.js";import{V as R}from"./VNodeRenderer-cc584f67.js";import{a as N,b as j}from"./misc-mask-light-1df3cfef.js";import{V as c}from"./VImg-60fefca9.js";import{a as o,V as f}from"./VRow-355a1a96.js";import{V as B}from"./VCard-eefd329f.js";import{V as _}from"./VCardText-b2889fcd.js";import{V as T}from"./VForm-8f7b2830.js";import"./form-4964f997.js";import"./VTextField-abccc1cc.js";/* empty css                   */import"./VCounter-bf80d23c.js";import"./VField-76e83c5a.js";import"./easing-9f15041e.js";import"./VInput-511964ce.js";import"./forwardRefs-8348545e.js";import"./VAvatar-b1de89d9.js";const L="/build/assets/auth-v2-reset-password-illustration-dark-7eb92536.png",M="/build/assets/auth-v2-reset-password-illustration-light-bc472d54.png";const $={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},D={class:"d-flex align-center justify-center w-100 h-100"},F=r("h4",{class:"text-h4 mb-1"}," Reset Password 🔒 ",-1),S=r("p",{class:"mb-0"},[w(" for "),r("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),U=r("span",null,"Back to login",-1),ne={__name:"reset-password-v2",setup(A){const n=m({newPassword:"",confirmPassword:""}),V=p(M,L),h=p(j,N),i=m(!1),d=m(!1);return(G,a)=>{const u=g,b=v("RouterLink");return k(),x(f,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:s(()=>[e(o,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[r("div",$,[r("div",D,[e(c,{"max-width":"400",src:t(V),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(c,{class:"auth-footer-mask",src:t(h)},null,8,["src"])])]),_:1}),e(o,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:s(()=>[e(B,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(_,null,{default:s(()=>[e(t(R),{nodes:t(P).app.logo,class:"mb-6"},null,8,["nodes"]),F,S]),_:1}),e(_,null,{default:s(()=>[e(T,{onSubmit:y(()=>{},["prevent"])},{default:s(()=>[e(f,null,{default:s(()=>[e(o,{cols:"12"},{default:s(()=>[e(u,{modelValue:t(n).newPassword,"onUpdate:modelValue":a[0]||(a[0]=l=>t(n).newPassword=l),autofocus:"",label:"New Password",placeholder:"············",type:t(i)?"text":"password","append-inner-icon":t(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[1]||(a[1]=l=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(u,{modelValue:t(n).confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=l=>t(n).confirmPassword=l),label:"Confirm Password",placeholder:"············",type:t(d)?"text":"password","append-inner-icon":t(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[3]||(a[3]=l=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(C,{block:"",type:"submit"},{default:s(()=>[w(" Set New Password ")]),_:1})]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(b,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v2"}},{default:s(()=>[e(I,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),U]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ne as default};
