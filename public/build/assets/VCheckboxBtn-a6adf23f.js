import{m as V,V as o}from"./VSelectionControl-c3ab9651.js";import{a2 as f,bJ as v,ax as x,aH as c,a6 as l,aa as I,aG as b,b as k,s as h}from"./main-904b726a.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:v,default:"$checkboxIndeterminate"},...V({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),B=x()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const a=c(e,"indeterminate"),t=c(e,"modelValue");function u(n){a.value&&(a.value=!1)}const i=l(()=>a.value?e.indeterminateIcon:e.falseIcon),m=l(()=>a.value?e.indeterminateIcon:e.trueIcon);return I(()=>{const n=b(o.filterProps(e)[0],["modelValue"]);return k(o,h(n,{modelValue:t.value,"onUpdate:modelValue":[d=>t.value=d,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:m.value,"aria-checked":a.value?"mixed":void 0}),s)}),{}}});export{B as V,C as m};
