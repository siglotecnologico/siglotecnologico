import{_ as k}from"./DialogCloseBtn-3c152bd4.js";import{m as w,a as B}from"./mastercard-a962517c.js";import{v as P}from"./visa-dark-5d4d8dcf.js";import{v as $}from"./visa-light-779e4373.js";import{u as t}from"./useGenerateImageVariant-bbfdcbdc.js";import{V as j}from"./VCard-eefd329f.js";import{V as A}from"./VCardText-b2889fcd.js";import{V as E}from"./VDivider-597493ff.js";import{V as L}from"./VDialog-f7a22329.js";import{o as n,f as M,e as c,b as i,c as g,F as V,i as D,d as e,x as C}from"./main-904b726a.js";import{V as G}from"./VImg-60fefca9.js";const U="/build/assets/ae-dark-81604bcc.png",S="/build/assets/dc-dark-4110f35a.png",q="/build/assets/dc-light-cfe410ea.png",F="/build/assets/jcb-dark-25dec1c9.png",I="/build/assets/jcb-light-f09af726.png",N="/build/assets/master-dark-d2efe7bc.png";const J=e("h3",{class:"text-h3 text-center mb-2"}," Select Payment Providers ",-1),O=e("p",{class:"text-sm-body-1 text-center text-disabled"}," Third-party payment providers ",-1),H={class:"d-flex flex-column flex-sm-row justify-space-between align-start gap-2 flex-wrap py-4"},K={class:"text-high-emphasis font-weight-medium"},Q={class:"d-flex gap-2 flex-wrap"},R=["src"],pe={__name:"PaymentProvidersDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(_,{emit:h}){const f=_,m=h,o=t($,P),d=t(w,N),s=t(B,U),a=t(I,F),l=t(q,S),v=p=>{m("update:isDialogVisible",p)},b=[{title:"Adyen",providers:[o,d,s,a,l]},{title:"2Checkout",providers:[o,s,a,l]},{title:"Airpay",providers:[o,s,d,a]},{title:"Authorize.net",providers:[s,a,l]},{title:"Bambora",providers:[d,s,a]},{title:"Bambora",providers:[o,d,s,a,l]},{title:"Chase Paymentech (Orbital)",providers:[o,s,a,l]},{title:"Checkout.com",providers:[o,d]}];return(p,u)=>{const x=k;return n(),M(L,{"model-value":f.isDialogVisible,"max-width":"900","onUpdate:modelValue":v},{default:c(()=>[i(x,{onClick:u[0]||(u[0]=r=>m("update:isDialogVisible",!1))}),i(j,{class:"refer-and-earn-dialog"},{default:c(()=>[i(A,{class:"pa-8 pa-sm-16"},{default:c(()=>[J,O,(n(),g(V,null,D(b,(r,y)=>e("div",{key:y},[e("div",H,[e("div",K,C(r.title),1),e("div",Q,[(n(!0),g(V,null,D(r.providers,(T,z)=>(n(),g("img",{key:z,src:T.value,height:"30",width:"50"},null,8,R))),128))])]),i(E)])),64))]),_:1})]),_:1})]),_:1},8,["model-value"])}}};const W=e("h3",{class:"text-h3 text-center mb-2"}," Add payment methods ",-1),X=e("p",{class:"text-sm-body-1 text-center text-disabled"}," Supported payment methods ",-1),Y={class:"d-flex justify-space-between align-center py-4 text-high-emphasis font-weight-medium gap-x-4"},Z={class:"d-flex align-center"},ee={class:"d-none d-sm-block"},ue={__name:"AddPaymentMethodDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(_,{emit:h}){const f=_,m=h,o=t($,P),d=t(w,N),s=t(B,U),a=t(I,F),l=t(q,S),v=p=>{m("update:isDialogVisible",p)},b=[{title:"Visa",type:"Credit Card",img:o},{title:"American Express",type:"Credit Card",img:s},{title:"Mastercard",type:"Credit Card",img:d},{title:"JCB",type:"Credit Card",img:a},{title:"Diners Club",type:"Credit Card",img:l}];return(p,u)=>{const x=k;return n(),M(L,{"model-value":f.isDialogVisible,"max-width":"900","onUpdate:modelValue":v},{default:c(()=>[i(x,{onClick:u[0]||(u[0]=r=>m("update:isDialogVisible",!1))}),i(j,{class:"refer-and-earn-dialog"},{default:c(()=>[i(A,{class:"pa-5 pa-sm-16"},{default:c(()=>[W,X,(n(),g(V,null,D(b,(r,y)=>e("div",{key:y},[e("div",Y,[e("div",Z,[i(G,{src:r.img.value,height:"30",width:"50",class:"me-3"},null,8,["src"]),e("div",null,C(r.title),1)]),e("div",ee,C(r.type),1)]),i(E)])),64))]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{ue as _,pe as a};
