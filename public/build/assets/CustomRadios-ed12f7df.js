import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{V,a as v}from"./VRow-355a1a96.js";import{V as x}from"./form-4964f997.js";import{a as y,V as C}from"./VRadioGroup-98f48435.js";import{V as g}from"./VSpacer-83e02c49.js";import{o as a,f as i,e as o,b as r,c as u,F as R,i as b,s as h,y as k,d as t,A as S,x as d,z as c}from"./main-904b726a.js";const B={class:"flex-grow-1"},q={class:"d-flex align-center mb-1"},w={class:"cr-title text-base"},N={key:0,class:"text-disabled text-base"},z={class:"text-sm mb-0"},A={__name:"CustomRadios",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(n,{emit:_}){const s=n,p=_,m=l=>{p("update:selectedRadio",l)};return(l,F)=>s.radioContent?(a(),i(C,{key:0,"model-value":s.selectedRadio,"onUpdate:modelValue":m},{default:o(()=>[r(V,null,{default:o(()=>[(a(!0),u(R,null,b(s.radioContent,e=>(a(),i(v,h({key:e.title},n.gridColumn),{default:o(()=>[r(x,{class:k(["custom-input custom-radio rounded cursor-pointer",s.selectedRadio===e.value?"active":""])},{default:o(()=>[t("div",null,[r(y,{value:e.value},null,8,["value"])]),S(l.$slots,"default",{item:e},()=>[t("div",B,[t("div",q,[t("h6",w,d(e.title),1),r(g),e.subtitle?(a(),u("span",N,d(e.subtitle),1)):c("",!0)]),t("p",z,d(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):c("",!0)}},P=f(A,[["__scopeId","data-v-d50a4593"]]);export{P as _};
