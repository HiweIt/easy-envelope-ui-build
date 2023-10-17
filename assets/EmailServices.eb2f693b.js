var M=Object.defineProperty;var A=(l,e,s)=>e in l?M(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s;var c=(l,e,s)=>(A(l,typeof e!="symbol"?e+"":e,s),s);import{aK as R,aE as T,aF as F,bp as q,aG as W,aH as I,aI as B,aJ as O,d as P,u as U,r as N,o as K,g as z,l as H,j as n,p as a,aN as Y,i as t,aB as Q,m as d,M as k,t as x,s as j,aL as p,aC as G,bk as J,Q as v,I as X,D as Z,aD as ee,c as V,bq as oe}from"./index.89b9ec57.js";import{Q as ae}from"./QPage.012d8f48.js";import{H as se}from"./hq-data-table.es.fec03429.js";import{Q as te}from"./QInnerLoading.8283329e.js";import{Q as le}from"./QForm.f06198f3.js";import{C as ie}from"./ClosePopup.345e3494.js";import{e as re}from"./extend.e55e2e7d.js";import{u as $}from"./use-dialog-plugin-component.c5561868.js";import{r as h,a as ne}from"./validation.b28ada22.js";import{N as de}from"./NumberInput.78e212e1.js";import{c as ce}from"./copy-to-clipboard.4ff594ad.js";import{u as ue}from"./use-quasar.9ffcffad.js";import{_ as me}from"./ConfirmationModal.e2c2e9e2.js";import"./QTooltip.294f16a1.js";import"./position-engine.46944299.js";import"./QSelect.0fc3481c.js";import"./QItem.63231d09.js";import"./QMenu.bf3c5da3.js";import"./rtl.b51694b1.js";import"./format.2bc25e5f.js";import"./QScrollObserver.90b5c25e.js";import"./QTabs.07f3fc81.js";import"./QImg.b1f8a295.js";import"./QSpace.3975ae39.js";import"./QBtnDropdown.426df4de.js";import"./QList.744acb19.js";import"./QTable.74b7a1a0.js";import"./QMarkupTable.dcbee181.js";import"./use-fullscreen.76803ed0.js";class L extends R{constructor(){super(null,[]);c(this,"serviceName");c(this,"hostName");c(this,"port");c(this,"userId");c(this,"username");c(this,"password");this.serviceName="",this.hostName="",this.port="",this.userId="",this.username="",this.password=""}}const D=T("emailservice",{state:()=>({emailServices:[],loading:!1}),getters:{isLoading:l=>l.loading,getEmailServices:l=>l.emailServices},actions:{async fetchEmailServices(){this.loading=!0;const l={controller:"emailservice",function:"getAllByUserId",router:this.router},e=await F(l,[q().user.id]);e&&(this.emailServices=e),this.loading=!1},async saveEmailService(l){const e={controller:"emailservice",function:"save",router:this.router};await W(e,l)&&(await this.fetchEmailServices(),I.create({type:"positive",message:B.global.t("sentSuccessfully")}))},async deleteEntity(l){const e={controller:"emailservice",function:"deleteById",router:this.router};await O(e,[l]),this.fetchEmailServices()}}}),pe={class:"row q-col-gutter-md",style:{"font-size":"1.5em"}},ve={class:"text-h6"},fe={class:"row q-col-gutter-sm"},ge={class:"col-12"},be={class:"col-12"},he={class:"col-6"},Se={class:"col-6"},ye={class:"col-6"},_e={class:"col-6"},we={class:"text-subtitle2"},Ce=P({__name:"EmailServiceModal",props:{entity:{type:[Function,Array]},type:{}},emits:[...$.emits],setup(l){const e=l,{t:s}=U({useScope:"global"}),{dialogRef:f,onDialogHide:S,onDialogOK:y,onDialogCancel:_}=$(),i=N(new L),u=N(!0),w=N(!1),C=async()=>{if(!i.value.userId){const o=q();i.value.userId=o.user.id}await D().saveEmailService(i.value),y()},g=()=>{const m=D();m.loading=!1,_()};return K(()=>{i.value=re(!0,{},e.entity)}),(m,o)=>(z(),H(Y,{persistent:"",ref_key:"dialogRef",ref:f,onHide:a(S)},{default:n(()=>[t(ee,null,{default:n(()=>[t(le,{ref:"formForSubmit",class:"col-xs-12 col-md-9 col-lg-10 q-mb-md",onSubmit:C},{default:n(()=>[t(Q,null,{default:n(()=>[d("div",pe,[t(k,{name:"o_account_tree",size:"md"}),d("div",ve,x(a(s)("editEmailService")),1)])]),_:1}),t(j),t(Q,null,{default:n(()=>[d("div",fe,[d("div",ge,[t(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${a(s)("serviceName")} *`,modelValue:i.value.serviceName,"onUpdate:modelValue":o[0]||(o[0]=r=>i.value.serviceName=r),rules:[a(h)]},null,8,["label","modelValue","rules"])]),d("div",be,[t(p,{dense:"",outlined:"",readonly:"","hide-bottom-space":"",label:a(s)("serviceId"),modelValue:i.value.userId,"onUpdate:modelValue":o[1]||(o[1]=r=>i.value.userId=r)},null,8,["label","modelValue"])]),d("div",he,[t(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${a(s)("host")} *`,modelValue:i.value.hostName,"onUpdate:modelValue":o[2]||(o[2]=r=>i.value.hostName=r),rules:[a(h)]},null,8,["label","modelValue","rules"])]),d("div",Se,[t(de,{dense:"",outlined:"","hide-bottom-space":"",label:`${a(s)("port")} *`,modelValue:i.value.port,"onUpdate:modelValue":o[3]||(o[3]=r=>i.value.port=r),rules:[a(ne)],integer:!0},null,8,["label","modelValue","rules"])]),d("div",ye,[t(p,{dense:"",outlined:"",label:`${a(s)("username")} *`,modelValue:i.value.username,"onUpdate:modelValue":o[4]||(o[4]=r=>i.value.username=r),rules:[a(h)]},null,8,["label","modelValue","rules"])]),d("div",_e,[t(p,{dense:"",outlined:"",label:`${a(s)("password")} *`,type:u.value?"password":"text",modelValue:i.value.password,"onUpdate:modelValue":o[6]||(o[6]=r=>i.value.password=r),rules:[a(h)]},{append:n(()=>[t(k,{name:u.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[5]||(o[5]=r=>u.value=!u.value)},null,8,["name"])]),_:1},8,["label","type","modelValue","rules"])])])]),_:1}),t(G,{align:"right"},{default:n(()=>[J(m.$slots,"action-buttons",{},()=>[t(v,{flat:"",label:a(s)("save"),color:"positive",type:"submit"},null,8,["label"]),X(t(v,{flat:"",label:a(s)("cancel"),color:"negative",onClick:o[7]||(o[7]=r=>g())},null,8,["label"]),[[ie]])])]),_:3}),t(te,{showing:w.value,style:{"z-index":"9999"}},{default:n(()=>[t(Z,{color:"primary",size:"3em",thickness:10,class:"q-mb-sm"}),d("span",we,x(a(s)("checkingEmailCredentials")),1)]),_:1},8,["showing"])]),_:3},512)]),_:3})]),_:3},8,["onHide"]))}}),eo=P({__name:"EmailServices",setup(l){const{t:e}=U({useScope:"global"}),s=D(),f=ue(),S=V(()=>[{name:"serviceName",label:e("serviceName"),field:"serviceName",align:"left",sortable:!0},{name:"id",label:e("serviceId"),field:"id",align:"left"},{name:"hostName",label:e("hostName"),field:"hostName",sortable:!0,align:"left"},{name:"port",label:e("port"),field:"port",sortable:!0,align:"left"},{name:"actions",field:"actions",label:"",showDeleteBtn:!1,showPrintBtn:!1,showEditBtn:!0,align:"center"}]),y=V(()=>s.getEmailServices),_=V(()=>s.isLoading),i=o=>{ce(o.id).then(()=>{I.create({type:"positive",message:e("copiedToClipboard")})}).catch(()=>{I.create({type:"negative",message:e("errorCopyToClipboard")})})},u=()=>{g(new L,e("addEmailService"))},w=o=>{g(o,e("editEmailService"))},C=o=>{m(e("areYouSureYouWantToDelete"),e("warning"),o)},g=(o,r)=>{oe.create({component:Ce,componentProps:{entity:o,title:r}}).onOk(()=>{})},m=(o,r,b)=>{f.dialog({component:me,componentProps:{text:o,title:r,id:b}}).onOk(E=>{s.deleteEntity(E),f.notify({type:"positive",message:B.global.t("sentSuccessfully")})})};return s.fetchEmailServices(),(o,r)=>(z(),H(ae,{class:"q-pa-md"},{default:n(()=>[t(a(se),{bordered:"",flat:"",columns:S.value,inline:!1,loading:_.value,"loading-label":a(e)("loadingData"),"no-data-label":a(e)("noDataAvailable"),"no-results-label":a(e)("noMatchedRecords"),rows:y.value,"rows-per-page-label":a(e)("recordsPerPage"),title:a(e)("emailServices"),onRowEditRequested:w},{"search-append":n(()=>[t(v,{flat:"",color:"primary",icon:"add",label:a(e)("addService"),onClick:u},null,8,["label"])]),"row-cell-actions-prepend":n(({props:b})=>[t(v,{round:"",class:"q-mr-xs",icon:"content_paste",size:"xs",color:"green-9",onClick:E=>i(b.row)},null,8,["onClick"]),t(v,{round:"",icon:"delete",size:"xs",color:"negative",onClick:E=>C(b.row.id)},null,8,["onClick"])]),_:1},8,["columns","loading","loading-label","no-data-label","no-results-label","rows","rows-per-page-label","title"])]),_:1}))}});export{eo as default};