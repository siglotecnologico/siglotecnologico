import{o as s,c as _,b as t,e as o,v as n,aj as e,n as V,b0 as b,a1 as u,s as T,d as a,r as g,f}from"./main-904b726a.js";import{V as i}from"./VTooltip-9284d5e3.js";import{V as $}from"./VImg-60fefca9.js";import{V as S}from"./VAvatar-b1de89d9.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as H}from"./AppCardCode-8b503379.js";import{V as D,a as d}from"./VRow-355a1a96.js";import"./VOverlay-fd224c4f.js";import"./easing-9f15041e.js";import"./lazy-eb3b668f.js";import"./scopeId-288b7732.js";import"./forwardRefs-8348545e.js";import"./vue.runtime.esm-bundler-35e8472b.js";import"./VCard-eefd329f.js";import"./VCardText-b2889fcd.js";import"./VDivider-597493ff.js";const k={class:"demo-space-x"},E=a("span",null,"Tooltip on Icon",-1),I={__name:"DemoTooltipTooltipOnVariousElements",setup(r){return(l,m)=>(s(),_("div",k,[t(e,null,{default:o(()=>[n(" Button "),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip ")]),_:1})]),_:1}),t(S,{color:"info"},{default:o(()=>[t($,{src:V(b)},null,8,["src"]),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),t(i,{location:"top"},{activator:o(({props:c})=>[t(u,T(c,{size:"30",icon:"tabler-user"}),null,16)]),default:o(()=>[E]),_:1})]))}},A={},j={class:"demo-space-x"},w=a("span",null,"Scale Transition",-1),F=a("span",null,"Scroll X Transition",-1),X=a("span",null,"Scroll Y Transition",-1);function C(r,l){return s(),_("div",j,[t(e,null,{default:o(()=>[n(" scale transition "),t(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:o(()=>[w]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll X transition "),t(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:o(()=>[F]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll y transition "),t(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:o(()=>[X]),_:1})]),_:1})])}const M=v(A,[["render",C]]),P={class:"demo-space-x"},z=a("span",null,"Programmatic tooltip",-1),N={__name:"DemoTooltipVModelSupport",setup(r){const l=g(!1);return(m,c)=>(s(),_("div",P,[t(e,{onClick:c[0]||(c[0]=p=>l.value=!V(l))},{default:o(()=>[n(" toggle tooltip ")]),_:1}),t(i,{"model-value":V(l),location:"top"},{activator:o(({props:p})=>[t(u,T(p,{icon:"tabler-brand-instagram"}),null,16)]),default:o(()=>[z]),_:1},8,["model-value"])]))}},Y={},L=a("span",null,"Open Delay On Hover",-1),U=a("span",null,"Open Delay On Hover",-1);function R(r,l){return s(),f(e,{variant:"outlined"},{default:o(()=>[L,n(),t(i,{"open-delay":"500",location:"top",activator:"parent"},{default:o(()=>[U]),_:1})]),_:1})}const q=v(Y,[["render",R]]),G={},J={class:"demo-space-x"},K=a("span",null,"Open On Hover",-1),Q=a("span",null,"Open On click",-1),W=a("span",null,"Open On Hover + Focus",-1);function Z(r,l){return s(),_("div",J,[t(e,{variant:"outlined"},{default:o(()=>[K,t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Open On Hover ")]),_:1})]),_:1}),t(e,{variant:"outlined",color:"primary"},{default:o(()=>[Q,t(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:o(()=>[n(" Open On click ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[W,t(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:o(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const tt=v(G,[["render",Z]]),ot={},nt={class:"demo-space-x"};function at(r,l){return s(),_("div",nt,[t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on End "),t(i,{activator:"parent",location:"end"},{default:o(()=>[n(" End Tooltip ")]),_:1})]),_:1}),t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on Start "),t(i,{activator:"parent",location:"start"},{default:o(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on Top "),t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on Bottom "),t(i,{activator:"parent",location:"bottom"},{default:o(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const it=v(ot,[["render",at]]),et={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},lt={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},pt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},st={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},rt={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},ct={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},dt=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),_t=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),vt=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),Vt=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),mt=a("p",null,"Tooltips can wrap any element.",-1),It={__name:"tooltip",setup(r){return(l,m)=>{const c=it,p=H,B=tt,O=q,h=N,x=M,y=I;return s(),f(D,null,{default:o(()=>[t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Location",code:pt},{default:o(()=>[dt,t(c)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Events",code:lt},{default:o(()=>[t(B)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Delay On Hover",code:et},{default:o(()=>[_t,t(O)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"V-Model Support",code:ct},{default:o(()=>[vt,t(h)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Transition",code:rt},{default:o(()=>[Vt,t(x)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Tooltip on Various Elements",code:st},{default:o(()=>[mt,t(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{It as default};
