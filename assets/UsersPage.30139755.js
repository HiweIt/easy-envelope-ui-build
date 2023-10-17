import{Q as I,H as M}from"./hq-data-table.es.fec03429.js";import{d as $,u as q,r as H,bx as R,o as A,g as V,l as U,j as m,p as l,aN as z,i as a,aB as Q,m as i,M as E,t as N,s as F,aL as p,v as O,aC as T,bk as Y,Q as v,I as j,aD as K,bp as L,c as S,aI as k}from"./index.89b9ec57.js";import{Q as W}from"./QPage.012d8f48.js";import{u as x}from"./user.cf682356.js";import{u as G}from"./use-quasar.9ffcffad.js";import{Q as J}from"./QSelect.0fc3481c.js";import{Q as X}from"./QForm.f06198f3.js";import{C as Z}from"./ClosePopup.345e3494.js";import{e as ee}from"./extend.e55e2e7d.js";import{u as D}from"./use-dialog-plugin-component.c5561868.js";import{r as b}from"./validation.b28ada22.js";import{_ as P}from"./ConfirmationModal.e2c2e9e2.js";import"./QTooltip.294f16a1.js";import"./position-engine.46944299.js";import"./QItem.63231d09.js";import"./QMenu.bf3c5da3.js";import"./QScrollObserver.90b5c25e.js";import"./format.2bc25e5f.js";import"./QTabs.07f3fc81.js";import"./rtl.b51694b1.js";import"./QImg.b1f8a295.js";import"./QSpace.3975ae39.js";import"./QInnerLoading.8283329e.js";import"./QBtnDropdown.426df4de.js";import"./QList.744acb19.js";import"./QTable.74b7a1a0.js";import"./QMarkupTable.dcbee181.js";import"./use-fullscreen.76803ed0.js";const le={class:"row q-col-gutter-md",style:{"font-size":"1.5em"}},oe={class:"text-h6"},ae={class:"row q-col-gutter-lg"},te={class:"col-12"},se={class:"col-6"},ne={class:"col-6"},re={class:"col-6"},ie={class:"col-6"},me={class:"col-6"},ue={class:"col-6"},de=$({__name:"UserModal",props:{entity:{type:[Function,Array]},title:{}},emits:[...D.emits],setup(C){const d=C,{t:e}=q({useScope:"global"}),{dialogRef:c,onDialogHide:y,onDialogOK:_,onDialogCancel:w}=D(),o=H(new R),h=async()=>{await x().saveUser(o.value),_()};return A(()=>{o.value=ee(!0,{},d.entity)}),(f,t)=>(V(),U(z,{persistent:"",ref_key:"dialogRef",ref:c,onHide:l(y)},{default:m(()=>[a(K,null,{default:m(()=>[a(X,{ref:"formForSubmit",class:"col-xs-12 col-md-9 col-lg-10 q-mb-md",onSubmit:h},{default:m(()=>[a(Q,null,{default:m(()=>[i("div",le,[a(E,{name:"o_person",size:"md"}),i("div",oe,N(f.title),1)])]),_:1}),a(F),a(Q,null,{default:m(()=>[i("div",ae,[i("div",te,[a(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${l(e)("username")} *`,modelValue:o.value.username,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.username=s),rules:[l(b)]},null,8,["label","modelValue","rules"])]),i("div",se,[a(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${l(e)("name")} *`,modelValue:o.value.name,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.name=s),rules:[l(b)]},null,8,["label","modelValue","rules"])]),i("div",ne,[a(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${l(e)("surname")} *`,modelValue:o.value.surname,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.surname=s),rules:[l(b)]},null,8,["label","modelValue","rules"])]),i("div",re,[a(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${l(e)("email")} *`,modelValue:o.value.email,"onUpdate:modelValue":t[3]||(t[3]=s=>o.value.email=s),rules:[l(b)]},null,8,["label","modelValue","rules"])]),i("div",ie,[a(J,{dense:"",outlined:"","hide-bottom-space":"",modelValue:o.value.role,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value.role=s),options:["User","Admin"],label:`${l(e)("role")} *`},null,8,["modelValue","label"])]),i("div",me,[o.value.company.companyName?(V(),U(p,{key:0,dense:"",outlined:"","hide-bottom-space":"",label:`${l(e)("company")} *`,modelValue:o.value.company.companyName,"onUpdate:modelValue":t[5]||(t[5]=s=>o.value.company.companyName=s),rules:[l(b)]},null,8,["label","modelValue","rules"])):O("",!0)]),i("div",ue,[a(p,{dense:"",outlined:"","hide-bottom-space":"",label:`${l(e)("phone")} *`,modelValue:o.value.phone,"onUpdate:modelValue":t[6]||(t[6]=s=>o.value.phone=s),rules:[l(b)]},null,8,["label","modelValue","rules"])])])]),_:1}),a(T,{align:"right"},{default:m(()=>[Y(f.$slots,"action-buttons",{},()=>[a(v,{flat:"",label:l(e)("save"),color:"positive",type:"submit"},null,8,["label"]),j(a(v,{flat:"",label:l(e)("cancel"),color:"negative",onClick:l(w)},null,8,["label","onClick"]),[[Z]])])]),_:3})]),_:3},512)]),_:3})]),_:3},8,["onHide"]))}}),ze=$({__name:"UsersPage",setup(C){const d=G(),{t:e}=q({useScope:"global"}),c=x(),y=L(),_=S(()=>[{name:"username",label:e("username"),field:"username",align:"left",sortable:!0},{name:"role",label:e("role"),field:"role",align:"left",sortable:!0},{name:"name",label:e("name"),field:"name",align:"left",sortable:!0},{name:"surname",label:e("surname"),field:"surname",align:"left",sortable:!0},{name:"email",label:e("email"),field:"email",align:"left",sortable:!0},{name:"company",label:e("company"),field:"company",align:"left",sortable:!0},{name:"phone",label:e("phone"),field:"phone",align:"left",sortable:!0},{name:"actions",field:"actions",label:"",showDeleteBtn:!1,showPrintBtn:!1,showEditBtn:!0,align:"center"}]),w=S(()=>c.allUsers.filter(n=>{var u;return n.id!==((u=y.authentication)==null?void 0:u.id)})),o=n=>{t(n,e("editUser"))},h=n=>{B(e("areYouSureYouWantToDelete"),e("warning"),n)},f=n=>{s(e("passChange"),e("warning"),n)},t=(n,u)=>{d.dialog({component:de,componentProps:{entity:n,title:u}})},s=(n,u,r)=>{d.dialog({component:P,componentProps:{text:n,title:u,id:r}}).onOk(g=>{c.requestNewPassword(g),d.notify({type:"positive",message:k.global.t("sentSuccessfully")})})},B=(n,u,r)=>{d.dialog({component:P,componentProps:{text:n,title:u,id:r}}).onOk(g=>{c.deleteUser(g),d.notify({type:"positive",message:k.global.t("sentSuccessfully")})})};return c.fetchUsers(),(n,u)=>(V(),U(W,{class:"q-pa-md"},{default:m(()=>[a(l(M),{bordered:"",flat:"",columns:_.value,inline:!1,"loading-label":l(e)("loadingData"),"no-data-label":l(e)("noDataAvailable"),"no-results-label":l(e)("noMatchedRecords"),rows:w.value,"rows-per-page-label":l(e)("recordsPerPage"),title:l(e)("users"),onRowEditRequested:o},{"row-cell-role":m(({props:r})=>[a(I,{color:r.row.role==="USER"?"green":"orange",label:r.row.role},null,8,["color","label"])]),"row-cell-company":m(({props:r})=>[i("span",null,N(r.row.company.companyName?r.row.company.companyName:l(e)("privatePerson")),1)]),"row-cell-actions-append":m(({props:r})=>[a(v,{round:"",class:"q-mr-xs",color:"negative",size:"xs",icon:"delete",onClick:g=>h(r.row.id)},null,8,["onClick"]),a(v,{round:"",color:"blue",size:"xs",icon:"key",onClick:g=>f(r.row.id)},null,8,["onClick"])]),_:1},8,["columns","loading-label","no-data-label","no-results-label","rows","rows-per-page-label","title"])]),_:1}))}});export{ze as default};