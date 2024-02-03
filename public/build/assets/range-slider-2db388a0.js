import{m as Z,u as ee,a as le,V as ae,b as Y,g as E}from"./VSliderTrack-54ffa551.js";import{m as te,V as H}from"./VInput-511964ce.js";import{m as se,u as oe,V as ue}from"./form-4964f997.js";import{a2 as ne,ax as re,r as b,aI as ie,aH as de,a6 as q,aa as ce,b as a,F as me,s as pe,o as S,f as R,n as $,aV as w,e as i,a1 as ve,d,v}from"./main-904b726a.js";import{_ as fe}from"./AppCardCode-8b503379.js";import{V as Ve,a as k}from"./VRow-355a1a96.js";import"./VImg-60fefca9.js";import"./vue.runtime.esm-bundler-35e8472b.js";import"./VCard-eefd329f.js";import"./VAvatar-b1de89d9.js";import"./VCardText-b2889fcd.js";import"./VDivider-597493ff.js";const be=ne({...se(),...te(),...Z(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),x=re()({name:"VRangeSlider",props:be(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=b(),n=b(),g=b(),{rtlClasses:I}=ie();function M(c){if(!l.value||!n.value)return;const f=E(c,l.value.$el,e.direction),m=E(c,n.value.$el,e.direction),r=Math.abs(f),p=Math.abs(m);return r<p||r===p&&f<0?l.value.$el:n.value.$el}const U=ee(e),t=de(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(f=>U.roundValue(f)):[0,0]),{activeThumbRef:V,hasLabels:G,max:z,min:j,mousePressed:J,onSliderMousedown:K,onSliderTouchstart:Q,position:L,trackContainerRef:X}=le({props:e,steps:U,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var r;let{value:f}=c;const m=V.value===((r=l.value)==null?void 0:r.$el)?[f,t.value[1]]:[t.value[0],f];!e.strict&&m[0]<m[1]&&(t.value=m),o("end",t.value)},onSliderMove:c=>{var p,_,y,D;let{value:f}=c;const[m,r]=t.value;!e.strict&&m===r&&m!==j.value&&(V.value=f>m?(p=n.value)==null?void 0:p.$el:(_=l.value)==null?void 0:_.$el,(y=V.value)==null||y.focus()),V.value===((D=l.value)==null?void 0:D.$el)?t.value=[Math.min(f,r),r]:t.value=[m,Math.max(m,f)]},getActiveThumb:M}),{isFocused:B,focus:A,blur:N}=oe(e),O=q(()=>L(t.value[0])),W=q(()=>L(t.value[1]));return ce(()=>{const[c,f]=H.filterProps(e),m=!!(e.label||u.label||u.prepend);return a(H,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||G.value,"v-slider--focused":B.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},I.value,e.class],style:e.style,ref:g},c,{focused:B.value}),{...u,prepend:m?r=>{var p,_;return a(me,null,[((p=u.label)==null?void 0:p.call(u,r))??(e.label?a(ue,{class:"v-slider__label",text:e.label},null):void 0),(_=u.prepend)==null?void 0:_.call(u,r)])}:void 0,default:r=>{var y,D;let{id:p,messagesId:_}=r;return a("div",{class:"v-slider__container",onMousedown:K,onTouchstartPassive:Q},[a("input",{id:`${p.value}_start`,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${p.value}_stop`,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:X,start:O.value,stop:W.value},{"tick-label":u["tick-label"]}),a(Y,{ref:l,"aria-describedby":_.value,focused:B&&V.value===((y=l.value)==null?void 0:y.$el),modelValue:t.value[0],"onUpdate:modelValue":h=>t.value=[h,t.value[1]],onFocus:h=>{var T,F,C,P;A(),V.value=(T=l.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[1]===j.value&&h.relatedTarget!==((F=n.value)==null?void 0:F.$el)&&((C=l.value)==null||C.$el.blur(),(P=n.value)==null||P.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:j.value,max:t.value[1],position:O.value},{"thumb-label":u["thumb-label"]}),a(Y,{ref:n,"aria-describedby":_.value,focused:B&&V.value===((D=n.value)==null?void 0:D.$el),modelValue:t.value[1],"onUpdate:modelValue":h=>t.value=[t.value[0],h],onFocus:h=>{var T,F,C,P;A(),V.value=(T=n.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[0]===z.value&&h.relatedTarget!==((F=l.value)==null?void 0:F.$el)&&((C=n.value)==null||C.$el.blur(),(P=l.value)==null||P.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:t.value[0],max:z.value,position:W.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),_e={__name:"DemoRangeSliderVertical",setup(e){const s=b([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},ge={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=b([1,2]);return(l,n)=>(S(),R(x,{modelValue:$(o),"onUpdate:modelValue":n[0]||(n[0]=g=>w(o)?o.value=g:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:g})=>[a(ve,{icon:u[g]},null,8,["icon"])]),_:1},8,["modelValue"]))}},he={__name:"DemoRangeSliderStep",setup(e){const s=b([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderColor",setup(e){const s=b([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderDisabled",setup(e){const s=b([30,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ke={__name:"DemoRangeSliderBasic",setup(e){const s=b([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null)},null,8,["modelValue"]))}},$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=d("p",null,[v("The "),d("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Ce=d("p",null,[v("You cannot interact with "),d("code",null,"disabled"),v(" sliders.")],-1),Pe=d("p",null,[v("Use "),d("code",null,"color"),v(" prop to the sets the slider color. "),d("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Ue=d("p",null,[d("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Be=d("p",null,[v(" Using the "),d("code",null,"tick-labels"),v(" prop along with the "),d("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Ie=d("p",null,[v("You can use the "),d("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ge={__name:"range-slider",setup(e){return(s,u)=>{const o=ke,l=fe,n=Re,g=Se,I=he,M=ge,U=_e;return S(),R(Ve,null,{default:i(()=>[a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:$e},{default:i(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:xe},{default:i(()=>[Ce,a(n)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:we},{default:i(()=>[Pe,a(g)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:ye},{default:i(()=>[Ue,a(I)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:De},{default:i(()=>[Be,a(M)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:Te},{default:i(()=>[Ie,a(U)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ge as default};
