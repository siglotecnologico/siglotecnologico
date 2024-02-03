import{a2 as I,bJ as B,an as M,a3 as T,bU as j,aw as q,ax as U,aH as _,bN as R,a6 as u,P as z,cw as X,aJ as Z,a0 as n,aa as $,b as d,bX as O,a5 as G,r as Q,c5 as W,s as w,K as Y,c0 as p,F as ee,a1 as le,V as ae,b_ as te,cK as D,bL as oe,az as ne,cG as ue,aZ as re}from"./main-904b726a.js";import{V as ie}from"./form-4964f997.js";const N=Symbol.for("vuetify:selection-control-group"),E=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:M},...T(),...j(),...q()},"SelectionControlGroup"),ce=I({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),me=U()({name:"VSelectionControlGroup",props:ce(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:v}=r;const l=_(e,"modelValue"),t=R(),m=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||m.value),a=new Set;return z(N,{modelValue:l,forceUpdate:()=>{a.forEach(o=>o())},onForceUpdate:o=>{a.add(o),X(()=>{a.delete(o)})}}),Z({[e.defaultsTarget]:{color:n(e,"color"),disabled:n(e,"disabled"),density:n(e,"density"),error:n(e,"error"),inline:n(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:n(e,"falseIcon"),trueIcon:n(e,"trueIcon"),readonly:n(e,"readonly"),ripple:n(e,"ripple"),type:n(e,"type"),valueComparator:n(e,"valueComparator")}}),$(()=>{var o;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(o=v.default)==null?void 0:o.call(v)])}),{}}}),se=I({label:String,trueValue:null,falseValue:null,value:null,...T(),...E()},"VSelectionControl");function de(e){const r=ae(N,void 0),{densityClasses:v}=te(e),l=_(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const f=r?r.modelValue.value:l.value;return c.value?f.some(i=>e.valueComparator(i,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const i=f?t.value:m.value;let s=i;c.value&&(s=f?[...D(l.value),i]:D(l.value).filter(C=>!e.valueComparator(C,t.value))),r?r.modelValue.value=s:l.value=s}}),{textColorClasses:o,textColorStyles:V}=oe(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),{backgroundColorClasses:b,backgroundColorStyles:S}=ne(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:v,trueValue:t,falseValue:m,model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:S,icon:k}}const ye=U()({name:"VSelectionControl",directives:{Ripple:O},inheritAttrs:!1,props:se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:v,slots:l}=r;const{group:t,densityClasses:m,icon:c,model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:S,trueValue:k}=de(e),f=R(),i=u(()=>e.id||`input-${f}`),s=G(!1),C=G(!1),g=Q();t==null||t.onForceUpdate(()=>{g.value&&(g.value.checked=a.value)});function h(y){s.value=!0,ue(y.target,":focus-visible")!==!1&&(C.value=!0)}function x(){s.value=!1,C.value=!1}function H(y){e.readonly&&t&&re(()=>t.forceUpdate()),a.value=y.target.checked}return $(()=>{var P,A;const y=l.label?l.label({label:e.label,props:{for:i.value}}):e.label,[J,K]=W(v),F=d("input",w({ref:g,checked:a.value,disabled:!!(e.readonly||e.disabled),id:i.value,onBlur:x,onFocus:h,onInput:H,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},K),null);return d("div",w({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":C.value,"v-selection-control--inline":e.inline},m.value,e.class]},J,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",o.value],style:V.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:b,backgroundColorStyles:S}),Y(d("div",{class:["v-selection-control__input"]},[((A=l.input)==null?void 0:A.call(l,{model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:S,inputNode:F,icon:c.value,props:{onFocus:h,onBlur:x,id:i.value}}))??d(ee,null,[c.value&&d(le,{key:"icon",icon:c.value},null),F])]),[[p("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&d(ie,{for:i.value,clickable:!0,onClick:L=>L.stopPropagation()},{default:()=>[y]})])}),{isFocused:s,input:g}}});export{ye as V,E as a,me as b,se as m};
