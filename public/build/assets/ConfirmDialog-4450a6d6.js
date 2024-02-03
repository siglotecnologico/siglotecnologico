import{V as m}from"./VCard-eefd329f.js";import{V as d}from"./VCardText-b2889fcd.js";import{r as g,o as C,c as D,b as e,e as t,aj as s,d as a,x as c,v as f,a1 as w,n as V,aV as v,F as q}from"./main-904b726a.js";import{V as p}from"./VDialog-f7a22329.js";const z=a("span",{class:"text-5xl"},"!",-1),S={class:"text-lg font-weight-medium"},T={class:"text-3xl"},B={class:"text-h4 mb-4"},M=a("span",{class:"text-5xl font-weight-light"},"X",-1),N={class:"text-h4 mb-4"},Q={__name:"ConfirmDialog",props:{confirmationQuestion:{type:String,required:!0},isDialogVisible:{type:Boolean,required:!0},confirmTitle:{type:String,required:!0},confirmMsg:{type:String,required:!0},cancelTitle:{type:String,required:!0},cancelMsg:{type:String,required:!0}},emits:["update:isDialogVisible","confirm"],setup(y,{emit:b}){const n=y,u=b,o=g(!1),i=g(!1),x=_=>{u("update:isDialogVisible",_)},h=()=>{u("confirm",!0),x(!1),o.value=!0},k=()=>{u("confirm",!1),u("update:isDialogVisible",!1),i.value=!0};return(_,l)=>(C(),D(q,null,[e(p,{"max-width":"500","model-value":n.isDialogVisible,"onUpdate:modelValue":x},{default:t(()=>[e(m,{class:"text-center px-10 py-6"},{default:t(()=>[e(d,null,{default:t(()=>[e(s,{icon:"",variant:"outlined",color:"warning",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[z]),_:1}),a("h6",S,c(n.confirmationQuestion),1)]),_:1}),e(d,{class:"d-flex align-center justify-center gap-2"},{default:t(()=>[e(s,{variant:"elevated",onClick:h},{default:t(()=>[f(" Confirm ")]),_:1}),e(s,{color:"secondary",variant:"tonal",onClick:k},{default:t(()=>[f(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]),e(p,{modelValue:V(o),"onUpdate:modelValue":l[1]||(l[1]=r=>v(o)?o.value=r:null),"max-width":"500"},{default:t(()=>[e(m,null,{default:t(()=>[e(d,{class:"text-center px-10 py-6"},{default:t(()=>[e(s,{icon:"",variant:"outlined",color:"success",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[a("span",T,[e(w,{icon:"tabler-check"})])]),_:1}),a("h1",B,c(n.confirmTitle),1),a("p",null,c(n.confirmMsg),1),e(s,{color:"success",onClick:l[0]||(l[0]=r=>o.value=!1)},{default:t(()=>[f(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:V(i),"onUpdate:modelValue":l[3]||(l[3]=r=>v(i)?i.value=r:null),"max-width":"500"},{default:t(()=>[e(m,null,{default:t(()=>[e(d,{class:"text-center px-10 py-6"},{default:t(()=>[e(s,{icon:"",variant:"outlined",color:"error",class:"my-4",style:{"block-size":"88px","inline-size":"88px","pointer-events":"none"}},{default:t(()=>[M]),_:1}),a("h1",N,c(n.cancelTitle),1),a("p",null,c(n.cancelMsg),1),e(s,{color:"success",onClick:l[2]||(l[2]=r=>i.value=!1)},{default:t(()=>[f(" Ok ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{Q as _};
