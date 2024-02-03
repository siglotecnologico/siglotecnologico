import{V as s}from"./VFileInput-b6af4471.js";import{r as f,w as D,o as p,f as c,n as h,aV as F,e as n,c as j,F as S,i as N,v as l,x as L,b as e,d as t}from"./main-904b726a.js";import{V as U}from"./VChip-bfdcd05f.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{a,V}from"./VRow-355a1a96.js";import{_ as k}from"./AppCardCode-8b503379.js";import"./VField-76e83c5a.js";import"./form-4964f997.js";import"./easing-9f15041e.js";import"./VInput-511964ce.js";import"./VImg-60fefca9.js";import"./forwardRefs-8348545e.js";import"./VCounter-bf80d23c.js";import"./VAvatar-b1de89d9.js";import"./vue.runtime.esm-bundler-35e8472b.js";import"./VCard-eefd329f.js";import"./VCardText-b2889fcd.js";import"./VDivider-597493ff.js";const A={__name:"DemoFileInputLoading",setup(u){const o=f(),r=f(!0);return D(o,()=>{r.value=!o.value[0]}),(m,i)=>(p(),c(s,{modelValue:h(o),"onUpdate:modelValue":i[0]||(i[0]=_=>F(o)?o.value=_:null),loading:h(r),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},B={__name:"DemoFileInputSelectionSlot",setup(u){const o=f([]);return(r,m)=>(p(),c(s,{modelValue:h(o),"onUpdate:modelValue":m[0]||(m[0]=i=>F(o)?o.value=i:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:n(({fileNames:i})=>[(p(!0),j(S,null,N(i,_=>(p(),c(U,{key:_,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:n(()=>[l(L(_),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},P={__name:"DemoFileInputValidation",setup(u){const o=[r=>!r||!r.length||r[0].size<1e6||"Avatar size should be less than 1 MB!"];return(r,m)=>(p(),c(s,{rules:o,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}},R={};function M(u,o){return p(),c(s,{"show-size":"",label:"File input"})}const T=d(R,[["render",M]]),O={};function Y(u,o){return p(),c(s,{label:"File input","prepend-icon":"tabler-camera"})}const E=d(O,[["render",Y]]),W={};function q(u,o){return p(),c(s,{multiple:"",label:"File input"})}const G=d(W,[["render",q]]),H={};function J(u,o){return p(),c(s,{"show-size":"",counter:"",multiple:"",label:"File input"})}const K=d(H,[["render",J]]),Q={};function X(u,o){return p(),c(s,{chips:"",label:"File input w/ chips"})}const Z=d(Q,[["render",X]]),ee={};function le(u,o){return p(),c(s,{accept:"image/*",label:"File input"})}const te=d(ee,[["render",le]]),ne={};function oe(u,o){return p(),c(V,null,{default:n(()=>[e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Filled",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Solo",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Plain",variant:"plain"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const ie=d(ne,[["render",oe]]),ae={};function se(u,o){return p(),c(s,{label:"File input",density:"compact"})}const pe=d(ae,[["render",se]]),ce={};function ue(u,o){return p(),c(s,{label:"File input"})}const re=d(ce,[["render",ue]]),de={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},me={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},_e={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},fe={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},he={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},Fe={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},Ve={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},be={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},Ie={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},ve={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},ye={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},Ce=t("p",null,[l("The "),t("code",null,"v-file-input"),l(" component is used to selecting files.")],-1),we=t("p",null,[l("You can reduces the file input height with "),t("code",null,"density"),l(" prop. Available options are: "),t("code",null,"default"),l(", "),t("code",null,"comfortable"),l(", and "),t("code",null,"compact"),l(".")],-1),ze=t("p",null,[l("use "),t("code",null,"solo"),l(", "),t("code",null,"filled"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"plain"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),$e=t("p",null,[t("code",null,"v-file-input"),l(" component can accept only specific media formats/file types if you want.")],-1),xe=t("p",null,[l("Use "),t("code",null,"chip"),l(" prop to display the selected file as a chip.")],-1),De=t("p",null,[l("When using the "),t("code",null,"show-size"),l(" property along with "),t("code",null,"counter"),l(", the total number of files and size will be displayed under the input.")],-1),je=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" can contain multiple files at the same time when using the "),t("code",null,"multiple"),l(" prop. ")],-1),Se=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" has a default "),t("code",null,"prepend-icon"),l(" that can be set on the component or adjusted globally. ")],-1),Ne=t("p",null,[l("The displayed size of the selected file(s) can be configured with the "),t("code",null,"show-size"),l(" property.")],-1),Le=t("p",null,[l("You can use the "),t("code",null,"rules"),l(" prop to create your own custom validation parameters.")],-1),Ue=t("p",null,[l("Using the "),t("code",null,"selection"),l(" slot, you can customize the appearance of your input selections.")],-1),ke=t("p",null,[l("Use "),t("code",null,"loading"),l(" prop to displays linear progress bar.")],-1),el={__name:"file-input",setup(u){return(o,r)=>{const m=re,i=k,_=pe,b=ie,g=te,I=Z,v=K,y=G,C=E,w=T,z=P,$=B,x=A;return p(),c(V,{class:"match-height"},{default:n(()=>[e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Basic",code:me},{default:n(()=>[Ce,e(m)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Density",code:he},{default:n(()=>[we,e(_)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:n(()=>[e(i,{title:"Variant",code:ye},{default:n(()=>[ze,e(b)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Accept",code:de},{default:n(()=>[$e,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Chips",code:_e},{default:n(()=>[xe,e(I)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Counter",code:fe},{default:n(()=>[De,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Multiple",code:Ve},{default:n(()=>[je,e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Prepend icon",code:be},{default:n(()=>[Se,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Show size",code:Ie},{default:n(()=>[Ne,e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Validation",code:ve},{default:n(()=>[Le,e(z)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Selection slot",code:ge},{default:n(()=>[Ue,e($)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(i,{title:"Loading",code:Fe},{default:n(()=>[ke,e(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{el as default};
