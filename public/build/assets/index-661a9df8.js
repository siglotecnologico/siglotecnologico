import{_ as ue}from"./AppTextField-4158ea7e.js";import{_ as _e}from"./DialogCloseBtn-3c152bd4.js";import{V as W,a as ve,b as ge}from"./VCard-eefd329f.js";import{V as N}from"./VCardText-b2889fcd.js";import{V as Ve}from"./VForm-8f7b2830.js";import{V as be}from"./VTable-93fdddec.js";import{V as O}from"./VCheckbox-57fa13ac.js";import{r as c,a6 as G,w as q,o as v,f as A,e as a,b as e,v as y,x as b,n as l,aV as w,d as s,c as P,F as j,i as Y,aj as M,bc as z,bd as E,b2 as L,b0 as T,b1 as Q,bp as K,bo as te,eD as we,eE as he,eF as ye,z as X,a1 as B,ba as xe,a as se,s as le}from"./main-904b726a.js";import{V as Ue}from"./VDialog-f7a22329.js";import{a as R,V as Z}from"./VRow-355a1a96.js";import{V as ee}from"./VSpacer-83e02c49.js";import{V as I}from"./VAvatar-b1de89d9.js";import{a as De}from"./formatters-b3558c7d.js";import{_ as Pe}from"./AppSelect-5fb6db8f.js";import{_ as Ce}from"./AddNewUserDrawer-2e7f2580.js";import{p as $e}from"./paginationMeta-4ad053a4.js";import{u as ke}from"./useApi-a03f2d2e.js";import{c as Ae}from"./createUrl-be98c04a.js";import{$ as re}from"./api-ab668072.js";import{V as oe}from"./VDivider-597493ff.js";import{V as Re}from"./VDataTableServer-52d8b72b.js";import{V as Me}from"./VImg-60fefca9.js";import{V as Se}from"./VChip-bfdcd05f.js";import{V as ze}from"./VPagination-4b77e503.js";import{V as Ee}from"./VMenu-06a939e0.js";import{V as Le,a as ne,b as ie}from"./VList-a5b492de.js";import"./form-4964f997.js";import"./VTextField-abccc1cc.js";/* empty css                   */import"./VCounter-bf80d23c.js";import"./VField-76e83c5a.js";import"./easing-9f15041e.js";import"./VInput-511964ce.js";import"./forwardRefs-8348545e.js";import"./VCheckboxBtn-a6adf23f.js";import"./VSelectionControl-c3ab9651.js";import"./VOverlay-fd224c4f.js";import"./lazy-eb3b668f.js";import"./scopeId-288b7732.js";import"./dialog-transition-0d97a9c7.js";import"./helpers-61e4df1a.js";import"./VSelect-63dca544.js";import"./validators-dea6e3a5.js";import"./AppDrawerHeaderSection-e540fdc7.js";import"./vue3-perfect-scrollbar.esm-e31d8d30.js";import"./VNavigationDrawer-216e4bd8.js";import"./ssrBoot-b0843518.js";import"./index-51d05da2.js";import"./VDataTable-606bbe99.js";import"./filter-09b6423e.js";const Te=s("p",{class:"text-base mb-0"}," Set Role Permissions ",-1),je=s("h6",{class:"text-h4 mt-8 mb-3"}," Role Permissions ",-1),Be=s("td",null," Administrator Access ",-1),Ne={colspan:"3"},Ie={class:"d-flex justify-end"},Fe={class:"d-flex justify-end"},Oe={class:"d-flex justify-end"},qe={class:"d-flex justify-end"},Qe={class:"d-flex align-center justify-center gap-3 mt-6"},We={__name:"AddEditRoleDialog",props:{rolePermissions:{type:Object,required:!1,default:()=>({name:"",permissions:[]})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","update:rolePermissions"],setup(F,{emit:x}){const p=F,g=x,i=c([{name:"User Management",read:!1,write:!1,create:!1},{name:"Content Management",read:!1,write:!1,create:!1},{name:"Disputes Management",read:!1,write:!1,create:!1},{name:"Database Management",read:!1,write:!1,create:!1},{name:"Financial Management",read:!1,write:!1,create:!1},{name:"Reporting",read:!1,write:!1,create:!1},{name:"API Control",read:!1,write:!1,create:!1},{name:"Repository Management",read:!1,write:!1,create:!1},{name:"Payroll",read:!1,write:!1,create:!1}]),V=c(!1),h=c(""),n=c(),f=G(()=>{let u=0;return i.value.forEach(d=>{Object.entries(d).forEach(([D,$])=>{D!=="name"&&$&&u++})}),u}),o=G(()=>f.value>0&&f.value<i.value.length*3);q(V,u=>{i.value=i.value.map(d=>({...d,read:u,write:u,create:u}))}),q(o,()=>{o.value||(V.value=!1)}),q(i,()=>{f.value===i.value.length*3&&(V.value=!0)},{deep:!0}),q(p,()=>{p.rolePermissions&&p.rolePermissions.permissions.length&&(h.value=p.rolePermissions.name,i.value=i.value.map(u=>{var D;const d=(D=p.rolePermissions)==null?void 0:D.permissions.find($=>$.name===u.name);return d?{...u,...d}:u}))});const U=()=>{var d;const u={name:h.value,permissions:i.value};g("update:rolePermissions",u),g("update:isDialogVisible",!1),V.value=!1,(d=n.value)==null||d.reset()},C=()=>{var u;g("update:isDialogVisible",!1),V.value=!1,(u=n.value)==null||u.reset()};return(u,d)=>{const D=_e,$=ue;return v(),A(Ue,{width:u.$vuetify.display.smAndDown?"auto":900,"model-value":p.isDialogVisible,"onUpdate:modelValue":C},{default:a(()=>[e(D,{onClick:C}),e(W,{class:"pa-sm-8 pa-5"},{default:a(()=>[e(ve,{class:"text-center"},{default:a(()=>[e(ge,{class:"text-h3 mb-3"},{default:a(()=>[y(b(p.rolePermissions.name?"Edit":"Add New")+" Role ",1)]),_:1}),Te]),_:1}),e(N,{class:"mt-6"},{default:a(()=>[e(l(Ve),{ref_key:"refPermissionForm",ref:n},{default:a(()=>[e($,{modelValue:l(h),"onUpdate:modelValue":d[0]||(d[0]=m=>w(h)?h.value=m:null),label:"Role Name",placeholder:"Enter Role Name"},null,8,["modelValue"]),je,e(be,{class:"permission-table text-no-wrap"},{default:a(()=>[s("tr",null,[Be,s("td",Ne,[s("div",Ie,[e(O,{modelValue:l(V),"onUpdate:modelValue":d[1]||(d[1]=m=>w(V)?V.value=m:null),indeterminate:l(o),"onUpdate:indeterminate":d[2]||(d[2]=m=>w(o)?o.value=m:null),label:"Select All"},null,8,["modelValue","indeterminate"])])])]),(v(!0),P(j,null,Y(l(i),m=>(v(),P("tr",{key:m.name},[s("td",null,b(m.name),1),s("td",null,[s("div",Fe,[e(O,{modelValue:m.read,"onUpdate:modelValue":k=>m.read=k,label:"Read"},null,8,["modelValue","onUpdate:modelValue"])])]),s("td",null,[s("div",Oe,[e(O,{modelValue:m.write,"onUpdate:modelValue":k=>m.write=k,label:"Write"},null,8,["modelValue","onUpdate:modelValue"])])]),s("td",null,[s("div",qe,[e(O,{modelValue:m.create,"onUpdate:modelValue":k=>m.create=k,label:"Create"},null,8,["modelValue","onUpdate:modelValue"])])])]))),128))]),_:1}),s("div",Qe,[e(M,{onClick:U},{default:a(()=>[y(" Submit ")]),_:1}),e(M,{color:"secondary",variant:"tonal",onClick:C},{default:a(()=>[y(" Cancel ")]),_:1})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},Ge="/build/assets/girl-using-mobile-26d497df.png",He={class:"v-avatar-group"},Je={class:"text-h4"},Ke={class:"d-flex align-center"},Xe=["onClick"],Ye=["src"],Ze=s("span",{class:"text-end"},"Add role, if it doesn't exist.",-1),ea={__name:"RoleCards",setup(F){const x=c([{role:"Administrator",users:[z,E,L,T],details:{name:"Administrator",permissions:[{name:"User Management",read:!0,write:!0,create:!0},{name:"Disputes Management",read:!0,write:!0,create:!0},{name:"API Control",read:!0,write:!0,create:!0}]}},{role:"Manager",users:[z,E,L,T,Q,K,te],details:{name:"Manager",permissions:[{name:"Reporting",read:!0,write:!0,create:!1},{name:"Payroll",read:!0,write:!0,create:!0},{name:"User Management",read:!0,write:!0,create:!0}]}},{role:"Users",users:[z,E,L,T,Q],details:{name:"Users",permissions:[{name:"User Management",read:!0,write:!1,create:!1},{name:"Content Management",read:!0,write:!1,create:!1},{name:"Disputes Management",read:!0,write:!1,create:!1},{name:"Database Management",read:!0,write:!1,create:!1}]}},{role:"Support",users:[z,E,L,T,Q,K],details:{name:"Support",permissions:[{name:"Repository Management",read:!0,write:!0,create:!1},{name:"Content Management",read:!0,write:!0,create:!1},{name:"Database Management",read:!0,write:!0,create:!1}]}},{role:"Restricted User",users:[z,E,L,T,Q,K,te,we,he,ye],details:{name:"Restricted User",permissions:[{name:"User Management",read:!0,write:!1,create:!1},{name:"Content Management",read:!0,write:!1,create:!1},{name:"Disputes Management",read:!0,write:!1,create:!1},{name:"Database Management",read:!0,write:!1,create:!1}]}}]),p=c(!1),g=c(),i=c(!1),V=h=>{p.value=!0,g.value=h};return(h,n)=>{const f=We;return v(),P(j,null,[e(Z,null,{default:a(()=>[(v(!0),P(j,null,Y(l(x),o=>(v(),A(R,{key:o.role,cols:"12",sm:"6",lg:"4"},{default:a(()=>[e(W,null,{default:a(()=>[e(N,{class:"d-flex align-center pb-1"},{default:a(()=>[s("span",null,"Total "+b(o.users.length)+" users",1),e(ee),s("div",He,[(v(!0),P(j,null,Y(o.users,(U,C)=>(v(),P(j,{key:U},[o.users.length>4&&o.users.length!==4&&C<3?(v(),A(I,{key:0,size:"36",image:U},null,8,["image"])):X("",!0),o.users.length===4?(v(),A(I,{key:1,size:"36",image:U},null,8,["image"])):X("",!0)],64))),128)),o.users.length>4?(v(),A(I,{key:0,color:h.$vuetify.theme.current.dark?"#4A5072":"#f6f6f7"},{default:a(()=>[s("span",null," +"+b(o.users.length-3),1)]),_:2},1032,["color"])):X("",!0)])]),_:2},1024),e(N,{class:"pb-5"},{default:a(()=>[s("h4",Je,b(o.role),1),s("div",Ke,[s("a",{href:"javascript:void(0)",onClick:U=>V(o.details)}," Edit Role ",8,Xe),e(ee),e(M,{icon:"",color:"disabled",variant:"text",size:"x-small"},{default:a(()=>[e(B,{size:"24",icon:"tabler-copy"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(R,{cols:"12",sm:"6",lg:"4"},{default:a(()=>[e(W,{class:"h-100",ripple:!1},{default:a(()=>[e(Z,{"no-gutters":"",class:"h-100"},{default:a(()=>[e(R,{cols:"5",class:"d-flex flex-column justify-end align-center mt-5"},{default:a(()=>[s("img",{width:"85",src:l(Ge)},null,8,Ye)]),_:1}),e(R,{cols:"7"},{default:a(()=>[e(N,{class:"d-flex flex-column align-end justify-end gap-2 h-100"},{default:a(()=>[e(M,{onClick:n[0]||(n[0]=o=>i.value=!0)},{default:a(()=>[y(" Add Role ")]),_:1}),Ze]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{"is-dialog-visible":l(i),"onUpdate:isDialogVisible":n[1]||(n[1]=o=>w(i)?i.value=o:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(f,{"is-dialog-visible":l(p),"onUpdate:isDialogVisible":n[2]||(n[2]=o=>w(p)?p.value=o:null),"role-permissions":l(g),"onUpdate:rolePermissions":n[3]||(n[3]=o=>w(g)?g.value=o:null)},null,8,["is-dialog-visible","role-permissions"])],64)}}};const aa={class:"d-flex align-center flex-wrap gap-4"},ta={class:"d-flex align-center"},sa={key:1},la={class:"d-flex flex-column"},ra={class:"text-body-1 font-weight-medium"},oa={class:"text-sm text-disabled"},na={class:"d-flex align-center gap-4"},ia={class:"text-capitalize"},ua={class:"text-capitalize font-weight-medium"},da={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},ma={class:"text-sm text-disabled mb-0"},ca={__name:"UserList",async setup(F){let x,p;const g=c(""),i=c(),V=c(),h=c(),n=c(10),f=c(1),o=c(),U=c(),C=_=>{var r,S;f.value=_.page,o.value=(r=_.sortBy[0])==null?void 0:r.key,U.value=(S=_.sortBy[0])==null?void 0:S.order},u=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:d,execute:D}=([x,p]=xe(()=>ke(Ae("/apps/users",{query:{q:g,status:h,plan:V,role:i,itemsPerPage:n,page:f,sortBy:o,orderBy:U}}))),x=await x,p(),x),$=G(()=>d.value.users),m=G(()=>d.value.totalUsers),k=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],H=_=>{const r=_.toLowerCase();return r==="subscriber"?{color:"primary",icon:"tabler-user"}:r==="author"?{color:"warning",icon:"tabler-settings"}:r==="maintainer"?{color:"success",icon:"tabler-chart-donut"}:r==="editor"?{color:"info",icon:"tabler-pencil"}:r==="admin"?{color:"error",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},de=_=>{const r=_.toLowerCase();return r==="pending"?"warning":r==="active"?"success":r==="inactive"?"secondary":"primary"},J=c(!1),me=async _=>{await re("/apps/users",{method:"POST",body:_}),D()},ce=async _=>{await re(`/apps/users/${_}`,{method:"DELETE"}),D()};return(_,r)=>{const S=Pe,pe=ue,fe=se("RouterLink"),ae=se("IconBtn");return v(),P("section",null,[e(W,null,{default:a(()=>[e(N,{class:"d-flex flex-wrap gap-4"},{default:a(()=>[e(S,{"model-value":l(n),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5rem"},"onUpdate:modelValue":r[0]||(r[0]=t=>n.value=parseInt(t,10))},null,8,["model-value"]),e(ee),s("div",aa,[e(pe,{modelValue:l(g),"onUpdate:modelValue":r[1]||(r[1]=t=>w(g)?g.value=t:null),placeholder:"Search User",density:"compact",style:{"inline-size":"12.5rem"}},null,8,["modelValue"]),e(S,{modelValue:l(i),"onUpdate:modelValue":r[2]||(r[2]=t=>w(i)?i.value=t:null),placeholder:"Select Role",items:k,density:"compact",clearable:"","clear-icon":"tabler-x",style:{"inline-size":"10rem"}},null,8,["modelValue"])])]),_:1}),e(oe),e(l(Re),{"items-per-page":l(n),"onUpdate:itemsPerPage":r[4]||(r[4]=t=>w(n)?n.value=t:null),page:l(f),"onUpdate:page":r[5]||(r[5]=t=>w(f)?f.value=t:null),"items-per-page-options":[{value:10,title:"10"},{value:20,title:"20"},{value:50,title:"50"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],items:l($),"items-length":l(m),headers:u,class:"text-no-wrap","onUpdate:options":C},{"item.user":a(({item:t})=>[s("div",ta,[e(I,{size:"38",variant:t.avatar?void 0:"tonal",color:t.avatar?void 0:H(t.role).color,class:"me-3"},{default:a(()=>[t.avatar?(v(),A(Me,{key:0,src:t.avatar},null,8,["src"])):(v(),P("span",sa,b(("avatarText"in _?_.avatarText:l(De))(t.fullName)),1))]),_:2},1032,["variant","color"]),s("div",la,[s("h6",ra,[e(fe,{to:{name:"apps-user-view-id",params:{id:t.id}},class:"user-list-name"},{default:a(()=>[y(b(t.fullName),1)]),_:2},1032,["to"])]),s("span",oa,b(t.email),1)])])]),"item.role":a(({item:t})=>[s("div",na,[e(I,{size:"30",variant:"tonal",color:H(t.role).color},{default:a(()=>[e(B,{size:"20",icon:H(t.role).icon},null,8,["icon"])]),_:2},1032,["color"]),s("span",ia,b(t.role),1)])]),"item.plan":a(({item:t})=>[s("span",ua,b(t.currentPlan),1)]),"item.status":a(({item:t})=>[e(Se,{label:"",size:"small",class:"text-capitalize",color:de(t.status)},{default:a(()=>[y(b(t.status),1)]),_:2},1032,["color"])]),bottom:a(()=>[e(oe),s("div",da,[s("p",ma,b(l($e)({page:l(f),itemsPerPage:l(n)},l(m))),1),e(ze,{modelValue:l(f),"onUpdate:modelValue":r[3]||(r[3]=t=>w(f)?f.value=t:null),length:Math.ceil(l(m)/l(n)),"total-visible":_.$vuetify.display.xs?1:Math.ceil(l(m)/l(n))},{prev:a(t=>[e(M,le({variant:"tonal",color:"default"},t,{icon:!1}),{default:a(()=>[y(" Previous ")]),_:2},1040)]),next:a(t=>[e(M,le({variant:"tonal",color:"default"},t,{icon:!1}),{default:a(()=>[y(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),"item.actions":a(({item:t})=>[e(ae,null,{default:a(()=>[e(B,{icon:"tabler-edit"})]),_:1}),e(ae,{onClick:_a=>ce(t.id)},{default:a(()=>[e(B,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(M,{icon:"",color:"medium-emphasis",density:"comfortable",variant:"text"},{default:a(()=>[e(B,{size:"24",icon:"tabler-dots-vertical"}),e(Ee,{activator:"parent"},{default:a(()=>[e(Le,null,{default:a(()=>[e(ne,{to:{name:"apps-user-view-id",params:{id:t.id}}},{default:a(()=>[e(ie,null,{default:a(()=>[y("View")]),_:1})]),_:2},1032,["to"]),e(ne,{link:""},{default:a(()=>[e(ie,null,{default:a(()=>[y("Suspend")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},8,["items-per-page","page","items-per-page-options","items","items-length"])]),_:1}),e(Ce,{isDrawerOpen:l(J),"onUpdate:isDrawerOpen":r[6]||(r[6]=t=>w(J)?J.value=t:null),onUserData:me},null,8,["isDrawerOpen"])])}}},pa=s("h4",{class:"text-h4 mb-6"}," Roles List ",-1),fa=s("p",{class:"mb-0"}," A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ",-1),ct={__name:"index",setup(F){return(x,p)=>(v(),A(Z,null,{default:a(()=>[e(R,{cols:"12"},{default:a(()=>[pa,fa]),_:1}),e(R,{cols:"12"},{default:a(()=>[e(ea)]),_:1}),e(R,{cols:"12"},{default:a(()=>[e(ca)]),_:1})]),_:1}))}};export{ct as default};
