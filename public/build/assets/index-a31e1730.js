import{_ as U}from"./AppSelect-5fb6db8f.js";import{_ as x}from"./InvoiceEditable-2b21bd5c.js";import{_ as P}from"./InvoiceSendInvoiceDrawer-a9a6d2cf.js";import{V as B,a as w}from"./VRow-355a1a96.js";import{V as C}from"./VCard-eefd329f.js";import{V as N}from"./VCardText-b2889fcd.js";import{r as l,o as O,c as T,b as t,e as o,n,aV as r,F as $,aj as b,v as s,d as i}from"./main-904b726a.js";import{V as y}from"./form-4964f997.js";import{V as _}from"./VSwitch-a59a1ea2.js";import"./VSelect-63dca544.js";import"./VTextField-abccc1cc.js";/* empty css                   */import"./VCounter-bf80d23c.js";import"./VImg-60fefca9.js";import"./VField-76e83c5a.js";import"./easing-9f15041e.js";import"./VInput-511964ce.js";import"./forwardRefs-8348545e.js";import"./VList-a5b492de.js";import"./ssrBoot-b0843518.js";import"./VAvatar-b1de89d9.js";import"./VDivider-597493ff.js";import"./dialog-transition-0d97a9c7.js";import"./VMenu-06a939e0.js";import"./VOverlay-fd224c4f.js";import"./lazy-eb3b668f.js";import"./scopeId-288b7732.js";import"./VCheckboxBtn-a6adf23f.js";import"./VSelectionControl-c3ab9651.js";import"./VChip-bfdcd05f.js";import"./AppTextarea-1f87bf17.js";import"./AppDateTimePicker-128d32a6.js";import"./AppTextField-4158ea7e.js";import"./VTooltip-9284d5e3.js";import"./VNodeRenderer-cc584f67.js";import"./useApi-a03f2d2e.js";import"./AppDrawerHeaderSection-e540fdc7.js";import"./VSpacer-83e02c49.js";import"./vue3-perfect-scrollbar.esm-e31d8d30.js";import"./VForm-8f7b2830.js";import"./VNavigationDrawer-216e4bd8.js";const g={class:"d-flex align-center justify-space-between mb-2"},j={class:"d-flex align-center justify-space-between mb-2"},I={class:"d-flex align-center justify-space-between"},Ae={__name:"index",setup(R){const p=l({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",dueDate:"",balance:0,client:{address:"112, Lorem Ipsum, Florida, USA",company:"Greeva Inc",companyEmail:"johndoe@greeva.com",contact:"+1 123 3452 12",country:"USA",name:"John Doe"}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,qty:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),d=l(!1),u=l(!0),c=l(!1),f=l(!1),v=l("Bank Account"),S=["Bank Account","PayPal","UPI Transfer"],V=l(!1),D=m=>{var e;(e=p.value)==null||e.purchasedProducts.push(m)},k=m=>{var e;(e=p.value)==null||e.purchasedProducts.splice(m,1)};return(m,e)=>{const A=U;return O(),T($,null,[t(B,null,{default:o(()=>[t(w,{cols:"12",md:"9"},{default:o(()=>[t(x,{data:n(p),onPush:D,onRemove:k},null,8,["data"])]),_:1}),t(w,{cols:"12",md:"3"},{default:o(()=>[t(C,{class:"mb-8"},{default:o(()=>[t(N,null,{default:o(()=>[t(b,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:e[0]||(e[0]=a=>d.value=!0)},{default:o(()=>[s(" Send Invoice ")]),_:1}),t(b,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:o(()=>[s(" Preview ")]),_:1}),t(b,{block:"",color:"default",variant:"tonal",onClick:e[1]||(e[1]=a=>m.isAddPaymentSidebarActive=!0)},{default:o(()=>[s(" Save ")]),_:1})]),_:1})]),_:1}),t(A,{modelValue:n(v),"onUpdate:modelValue":e[2]||(e[2]=a=>r(v)?v.value=a:null),items:S,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),i("div",g,[t(y,{for:"payment-terms"},{default:o(()=>[s(" Payment Terms ")]),_:1}),i("div",null,[t(_,{id:"payment-terms",modelValue:n(u),"onUpdate:modelValue":e[3]||(e[3]=a=>r(u)?u.value=a:null)},null,8,["modelValue"])])]),i("div",j,[t(y,{for:"client-notes"},{default:o(()=>[s(" Client Notes ")]),_:1}),i("div",null,[t(_,{id:"client-notes",modelValue:n(c),"onUpdate:modelValue":e[4]||(e[4]=a=>r(c)?c.value=a:null)},null,8,["modelValue"])])]),i("div",I,[t(y,{for:"payment-stub"},{default:o(()=>[s(" Payment Stub ")]),_:1}),i("div",null,[t(_,{id:"payment-stub",modelValue:n(f),"onUpdate:modelValue":e[5]||(e[5]=a=>r(f)?f.value=a:null)},null,8,["modelValue"])])])]),_:1}),t(P,{isDrawerOpen:n(d),"onUpdate:isDrawerOpen":e[6]||(e[6]=a=>r(d)?d.value=a:null)},null,8,["isDrawerOpen"])]),_:1}),t(P,{isDrawerOpen:n(V),"onUpdate:isDrawerOpen":e[7]||(e[7]=a=>r(V)?V.value=a:null)},null,8,["isDrawerOpen"])],64)}}};export{Ae as default};
