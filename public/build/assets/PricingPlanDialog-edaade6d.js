import{_ as c}from"./AppPricing-0de93d8a.js";import{_ as d}from"./DialogCloseBtn-3c152bd4.js";import{V as _}from"./VCard-eefd329f.js";import{V as u}from"./VCardText-b2889fcd.js";import{V as g}from"./VDialog-f7a22329.js";import{o as V,f,e,b as i}from"./main-904b726a.js";const k={__name:"PricingPlanDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(t,{emit:s}){const l=t,n=s,r=o=>{n("update:isDialogVisible",o)};return(o,a)=>{const p=d,m=c;return V(),f(g,{"model-value":l.isDialogVisible,class:"v-dialog-xl","onUpdate:modelValue":r},{default:e(()=>[i(p,{onClick:a[0]||(a[0]=b=>o.$emit("update:isDialogVisible",!1))}),i(_,{class:"pricing-dialog pa-5 pa-sm-8"},{default:e(()=>[i(u,null,{default:e(()=>[i(m,{title:"Subscription Plan",md:"4"})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{k as _};
