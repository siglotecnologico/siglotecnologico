import{_ as $}from"./AppStepper-23f124a8.js";import{_ as g}from"./AppTextField-4158ea7e.js";import{_ as R}from"./CustomRadiosWithIcon-eafd500a.js";import{V as v,a as u}from"./VRow-355a1a96.js";import{V as P}from"./VForm-8f7b2830.js";import{r as A,w as S,o as _,f as D,e as o,b as e,n as l,d as y,y as M,aV as F,aj as T,a1 as h,v as x}from"./main-904b726a.js";import{_ as N}from"./AppSelect-5fb6db8f.js";import{V as C,a as c}from"./VRadioGroup-98f48435.js";import{V as k}from"./VCheckbox-57fa13ac.js";import{_ as Y}from"./AppDateTimePicker-128d32a6.js";import{_ as B}from"./AppTextarea-1f87bf17.js";import{V as q}from"./VCard-eefd329f.js";import{V as w}from"./VCardText-b2889fcd.js";import{V as z,a as U}from"./VWindowItem-8d65ab27.js";import"./VSlideGroupItem-ae2b680c.js";import"./VSlideGroup-eb0e5e95.js";import"./form-4964f997.js";import"./VTextField-abccc1cc.js";/* empty css                   */import"./VCounter-bf80d23c.js";import"./VImg-60fefca9.js";import"./VField-76e83c5a.js";import"./easing-9f15041e.js";import"./VInput-511964ce.js";import"./forwardRefs-8348545e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VSelect-63dca544.js";import"./VList-a5b492de.js";import"./ssrBoot-b0843518.js";import"./VAvatar-b1de89d9.js";import"./VDivider-597493ff.js";import"./dialog-transition-0d97a9c7.js";import"./VMenu-06a939e0.js";import"./VOverlay-fd224c4f.js";import"./lazy-eb3b668f.js";import"./scopeId-288b7732.js";import"./VCheckboxBtn-a6adf23f.js";import"./VSelectionControl-c3ab9651.js";import"./VChip-bfdcd05f.js";const L={__name:"PersonalDetails",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=[{title:"I am the builder",desc:"List property as Builder, list your project and get highest reach fast.",icon:{icon:"custom-office",size:"40"},value:"builder"},{title:"I am the owner",desc:"Submit property as an Individual. Lease, Rent or Sell at the best price.",icon:{icon:"custom-diamond",size:"40"},value:"owner"},{title:"I am the broker",desc:"Earn highest commission by listing your clients properties at best price.",value:"broker",icon:{icon:"custom-suitcase",size:"40"}}],n=A(m.formData);return S(n,()=>{i("update:formData",n.value)}),(a,s)=>{const d=R,r=g;return _(),D(P,null,{default:o(()=>[e(v,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(d,{"selected-radio":l(n).userType,"onUpdate:selectedRadio":s[0]||(s[0]=p=>l(n).userType=p),"radio-content":t,"grid-column":{cols:"12",sm:"4"}},null,8,["selected-radio"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).firstName,"onUpdate:modelValue":s[1]||(s[1]=p=>l(n).firstName=p),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).lastName,"onUpdate:modelValue":s[2]||(s[2]=p=>l(n).lastName=p),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).username,"onUpdate:modelValue":s[3]||(s[3]=p=>l(n).username=p),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).password,"onUpdate:modelValue":s[4]||(s[4]=p=>l(n).password=p),autocomplete:"on",type:"password",label:"Password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).email,"onUpdate:modelValue":s[5]||(s[5]=p=>l(n).email=p),type:"email",label:"Email",placeholder:"john.doe@email.com"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).contact,"onUpdate:modelValue":s[6]||(s[6]=p=>l(n).contact=p),type:"number",label:"Contact",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},G=y("div",{class:"text-high-emphasis"}," Show Price As ",-1),W=y("div",{class:"text-high-emphasis mb-2 text-base"}," Price Includes ",-1),j={__name:"PriceDetails",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=A(m.formData);return S(t,()=>{i("update:formData",t.value)}),(n,a)=>{const s=g,d=N;return _(),D(P,null,{default:o(()=>[e(v,null,{default:o(()=>[e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).expectedPrice,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).expectedPrice=r),label:"Expected Price",type:"number","append-inner-icon":"tabler-currency-dollar",placeholder:"25,000"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).pricePerSqft,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).pricePerSqft=r),label:"Price Per SQFT","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"500"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).maintenanceCharge,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).maintenanceCharge=r),label:"Maintenance Charge","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"50"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(d,{modelValue:l(t).maintenancePeriod,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).maintenancePeriod=r),label:"Maintenance Period",placeholder:"Select Maintenance Period",items:["Monthly","Quarterly","Half Yearly","Yearly"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).bookingAmount,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).bookingAmount=r),label:"Booking/Token Amount","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"250"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).otherAmount,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).otherAmount=r),label:"Other Amount","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"500"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).priceDisplayType,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).priceDisplayType=r)},{label:o(()=>[G]),default:o(()=>[e(c,{label:"Negotiable",value:"Negotiable",class:"ms-2"}),e(c,{label:"Call For Price",value:"Call For Price",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[W,e(k,{modelValue:l(t).priceIncludes,"onUpdate:modelValue":a[7]||(a[7]=r=>l(t).priceIncludes=r),label:"Car Parking",value:"Car Parking"},null,8,["modelValue"]),e(k,{modelValue:l(t).priceIncludes,"onUpdate:modelValue":a[8]||(a[8]=r=>l(t).priceIncludes=r),label:"Club Membership",value:"Club Membership"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},E=y("div",{class:"text-high-emphasis"}," Possession Status ",-1),O=y("div",{class:"text-high-emphasis"}," Transaction Type ",-1),J=y("div",{class:"text-high-emphasis"}," Is Property Facing Main Road? ",-1),Q=y("div",{class:"text-high-emphasis"}," Gated Colony ",-1),H={__name:"PropertyArea",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=A(m.formData);return S(t,()=>{i("update:formData",t.value)}),(n,a)=>{const s=g,d=Y;return _(),D(P,null,{default:o(()=>[e(v,null,{default:o(()=>[e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).totalArea,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).totalArea=r),label:"Total Area",suffix:"sq-ft",type:"number",placeholder:"1000"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).carpetArea,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).carpetArea=r),label:"Carpet Area",suffix:"sq-ft",type:"number",placeholder:"800"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).plotArea,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).plotArea=r),label:"Plot Area",suffix:"sq-ft",type:"number",placeholder:"800"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(d,{modelValue:l(t).availableFrom,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).availableFrom=r),label:"Available From",type:"date",placeholder:"Select Date",format:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).possessionStatus,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).possessionStatus=r)},{label:o(()=>[E]),default:o(()=>[e(c,{value:"Under Construciton",label:"Under Construction",class:"ms-2"}),e(c,{value:"Ready to Move",label:"Ready to Move",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).transactionType,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).transactionType=r)},{label:o(()=>[O]),default:o(()=>[e(c,{value:"New Property",label:"New Property",class:"ms-2"}),e(c,{value:"Resale",label:"Resale",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isOnMainRoad,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).isOnMainRoad=r)},{label:o(()=>[J]),default:o(()=>[e(c,{value:"Yes",label:"Yes",class:"ms-2"}),e(c,{value:"No",label:"No",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isGatedColony,"onUpdate:modelValue":a[7]||(a[7]=r=>l(t).isGatedColony=r)},{label:o(()=>[Q]),default:o(()=>[e(c,{value:"Yes",label:"Yes",class:"ms-2"}),e(c,{value:"No",label:"No",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},K={__name:"PropertyDetails",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=[{title:"Sell the property",desc:"Post your property for sale. Unlimited free listing.",icon:{icon:"custom-home",size:"40"},value:"sell"},{title:"Rent the property",desc:"Post your property for rent. Unlimited free listing.",icon:{icon:"custom-wallet",size:"40"},value:"rent"}],n=A(m.formData);return S(n,()=>{i("update:formData",n.value)}),(a,s)=>{const d=R,r=N,p=g,I=B;return _(),D(P,null,{default:o(()=>[e(v,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(d,{"selected-radio":l(n).propertyDealType,"onUpdate:selectedRadio":s[0]||(s[0]=f=>l(n).propertyDealType=f),"radio-content":t,"grid-column":{cols:"12",sm:"6"}},null,8,["selected-radio"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).propertyType,"onUpdate:modelValue":s[1]||(s[1]=f=>l(n).propertyType=f),label:"Property type",placeholder:"Select Property Type",items:["Residential","Commercial"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).zipCode,"onUpdate:modelValue":s[2]||(s[2]=f=>l(n).zipCode=f),label:"Zip Code",type:"number",placeholder:"123456"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).country,"onUpdate:modelValue":s[3]||(s[3]=f=>l(n).country=f),label:"Country",placeholder:"Select country",items:["India","UK","USA","AUS","Germany"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).state,"onUpdate:modelValue":s[4]||(s[4]=f=>l(n).state=f),label:"State",placeholder:"California"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).city,"onUpdate:modelValue":s[5]||(s[5]=f=>l(n).city=f),label:"City",placeholder:"Los Angeles"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).landmark,"onUpdate:modelValue":s[6]||(s[6]=f=>l(n).landmark=f),label:"Landmark",placeholder:"Near to bus stop"},null,8,["modelValue"])]),_:1}),e(u,null,{default:o(()=>[e(I,{modelValue:l(n).address,"onUpdate:modelValue":s[7]||(s[7]=f=>l(n).address=f),label:"Address",placeholder:"112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068",rows:"2"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},Z=y("div",{class:"text-high-emphasis"}," Is There Any Common Area? ",-1),X=y("div",{class:"text-high-emphasis"}," Is There Any Common Area? ",-1),ee={__name:"PropertyFeatures",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=A(m.formData);return S(t,()=>{i("update:formData",t.value)}),(n,a)=>{const s=g,d=N;return _(),D(P,null,{default:o(()=>[e(v,null,{default:o(()=>[e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).bedroomCount,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).bedroomCount=r),label:"Bedrooms",placeholder:"3"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).floorNo,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).floorNo=r),label:"Floor No",placeholder:"12"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).bathroomCount,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).bathroomCount=r),label:"Bathroom",placeholder:"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(d,{modelValue:l(t).furnishedStatus,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).furnishedStatus=r),label:"Furnished Status",placeholder:"Select Furnished Status",items:["Fully Furnished","Furnished","Semi-Furnished","Unfurnished"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:o(()=>[e(d,{modelValue:l(t).furnishingDetails,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).furnishingDetails=r),label:"Furnishing Details",placeholder:"Select Furnishing Details",multiple:"",chips:"",items:["TV","AC","RO","Bed","Fridge","Wifi","Sofa","Cupboard","Microwave","Dining Table","Washing Machine"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isCommonArea1,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).isCommonArea1=r)},{label:o(()=>[Z]),default:o(()=>[e(c,{label:"Yes",value:"true",class:"ms-2"}),e(c,{label:"No",value:"false",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isCommonArea2,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).isCommonArea2=r)},{label:o(()=>[X]),default:o(()=>[e(c,{label:"Yes",value:"true",class:"ms-2"}),e(c,{label:"No",value:"false",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},le={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ze={__name:"property-listing",setup(b){const V=[{title:"Personal Details",subtitle:"Your Name/Email",icon:"tabler-users"},{title:"Property Details",subtitle:"Property Type",icon:"tabler-home"},{title:"Property Features",subtitle:"Bedrooms/Floor No",icon:"tabler-bookmarks"},{title:"Property Area",subtitle:"covered Area",icon:"tabler-map-pin"},{title:"Price Details",subtitle:"Expected Price",icon:"tabler-currency-dollar"}],m=A({personalDetails:{userType:"builder",firstName:"",lastName:"",username:"",password:"",email:"",contact:null},priceDetails:{expectedPrice:null,pricePerSqft:null,maintenanceCharge:null,maintenancePeriod:null,bookingAmount:null,otherAmount:null,priceDisplayType:"Negotiable",priceIncludes:["Car Parking"]},propertyFeatures:{bedroomCount:"",floorNo:"",bathroomCount:"",isCommonArea:!0,furnishedStatus:null,furnishingDetails:["AC","TV","Fridge"],isCommonArea1:"true",isCommonArea2:"false"},propertyArea:{totalArea:null,carpetArea:null,plotArea:null,availableFrom:null,possessionStatus:"Under Construciton",transactionType:"New Property",isOnMainRoad:"No",isGatedColony:"No"},propertyDetails:{propertyDealType:"sell",propertyType:null,zipCode:null,country:null,state:"",city:"",landmark:"",address:""}}),i=A(0),t=()=>{console.log("propertyListingData :>> ",m.value)};return(n,a)=>{const s=$;return _(),D(q,null,{default:o(()=>[e(v,{"no-gutters":""},{default:o(()=>[e(u,{cols:"12",md:"4",class:M(n.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(w,null,{default:o(()=>[e(s,{"current-step":l(i),"onUpdate:currentStep":a[0]||(a[0]=d=>F(i)?i.value=d:null),items:V,direction:"vertical","icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(u,{cols:"12",md:"8"},{default:o(()=>[e(w,null,{default:o(()=>[e(z,{modelValue:l(i),"onUpdate:modelValue":a[6]||(a[6]=d=>F(i)?i.value=d:null),class:"disable-tab-transition"},{default:o(()=>[e(U,null,{default:o(()=>[e(L,{"form-data":l(m).personalDetails,"onUpdate:formData":a[1]||(a[1]=d=>l(m).personalDetails=d)},null,8,["form-data"])]),_:1}),e(U,null,{default:o(()=>[e(K,{"form-data":l(m).propertyDetails,"onUpdate:formData":a[2]||(a[2]=d=>l(m).propertyDetails=d)},null,8,["form-data"])]),_:1}),e(U,null,{default:o(()=>[e(ee,{"form-data":l(m).propertyFeatures,"onUpdate:formData":a[3]||(a[3]=d=>l(m).propertyFeatures=d)},null,8,["form-data"])]),_:1}),e(U,null,{default:o(()=>[e(H,{"form-data":l(m).propertyArea,"onUpdate:formData":a[4]||(a[4]=d=>l(m).propertyArea=d)},null,8,["form-data"])]),_:1}),e(U,null,{default:o(()=>[e(j,{"form-data":l(m).priceDetails,"onUpdate:formData":a[5]||(a[5]=d=>l(m).priceDetails=d)},null,8,["form-data"])]),_:1})]),_:1},8,["modelValue"]),y("div",le,[e(T,{color:"secondary",variant:"tonal",disabled:l(i)===0,onClick:a[7]||(a[7]=d=>i.value--)},{default:o(()=>[e(h,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),x(" Previous ")]),_:1},8,["disabled"]),V.length-1===l(i)?(_(),D(T,{key:0,color:"success","append-icon":"tabler-check",onClick:t},{default:o(()=>[x(" submit ")]),_:1})):(_(),D(T,{key:1,onClick:a[8]||(a[8]=d=>i.value++)},{default:o(()=>[x(" Next "),e(h,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ze as default};
