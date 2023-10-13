import{Q as j}from"./QImg.9661c7a1.js";import{Q as A}from"./QTooltip.2e598bbe.js";import{d as U,r as h,o as E,g as C,h as T,u as M,c as q,l as S,j as r,m as e,n as V,i as a,aC as N,k as D,Q as I,q as _,t as P,F as R,aE as $,M as Q,ax as k,p as z,a as O,aH as F,aI as L}from"./index.505ac9ba.js";import{Q as H}from"./QPage.db775558.js";import{u as W}from"./use-quasar.8e6d8bfc.js";import"./position-engine.cee4fc96.js";const J=U({__name:"vueRecaptcha",props:{sitekey:{type:String,required:!0},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"light"},hl:{type:String,required:!1},loadingTimeout:{type:Number,required:!1,default:0}},emits:{verify:c=>c!=null&&c!="",error:c=>c,expire:null,fail:null},setup(c,{expose:i,emit:n}){const l=c,p=h(null);let d=null;i({execute:function(){window.grecaptcha.execute(d)},reset:function(){window.grecaptcha.reset(d)}});function x(){d=window.grecaptcha.render(p.value,{sitekey:l.sitekey,theme:l.theme,size:l.size,callback:s=>n("verify",s),"expired-callback":()=>n("expire"),"error-callback":()=>n("fail")})}return E(()=>{window.grecaptcha==null?new Promise((s,b)=>{let g,m=!1;window.recaptchaReady=function(){m||(m=!0,clearTimeout(g),s())};const f="recaptcha-script",v=w=>()=>{var t;m||(m=!0,clearTimeout(g),(t=document.getElementById(f))==null||t.remove(),b(w))};l.loadingTimeout>0&&(g=setTimeout(v("timeout"),l.loadingTimeout));const y=window.document,u=y.createElement("script");u.id=f,u.onerror=v("error"),u.onabort=v("aborted"),u.setAttribute("src",`https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit&hl=${l.hl}&_=${+new Date}`),y.head.appendChild(u)}).then(()=>{x()}).catch(s=>{n("error",s)}):x()}),(s,b)=>(C(),T("div",{ref_key:"recaptchaDiv",ref:p},null,512))}}),K={class:"col column"},Z={class:"row justify-center text-center"},G={class:"col-md-8 q-pb-xl"},X={class:"row"},Y={class:"col-12 col-lg-4"},ee={class:"text-center q-pa-md"},te=e("div",{class:"q-pa-md"},[e("div",{class:"text-blue-5 text-h6 text-bold"},"HIWE SOUQUASUP d.o.o."),e("div",{class:"text-subtitle1 text-grey-3"},[_(" Josipa Bana Jela\u010Di\u0107a 22C"),e("br"),_(" 40000 \u010Cakovec"),e("br"),_(" Croatia"),e("br"),_(" Office Building: TICM 2"),e("br"),_(" VAT Number: HR 39139568866 ")])],-1),oe={class:"col-12 col-lg-8 q-pa-lg"},ae={class:"col-6 col-xs-10 col-sm-8 col-md-6 col-lg-4"},le={class:"row q-col-gutter-md"},se={class:"col-6"},ne={class:"col-6"},re={class:"col-12"},ce={class:"col-12"},ie={class:"col-6 q-py-md"},de={class:"col-xs-12 col-sm-6 q-py-md"},be=U({__name:"ContactPage",setup(c){const{t:i}=M({useScope:"global"}),n=h(""),l=h(""),p=h(""),d=h(""),x=W(),{screen:s}=x,b=q(()=>s.lt.md),g=q(()=>s.lt.md),m=q(()=>[{textColor:"blue-5",icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/profile.php?id=100047218617300",tooltip:i("likeUsOnFacebook")},{textColor:"blue-5",icon:"fa-brands fa-instagram",href:"https://www.instagram.com/hiwe_it/",tooltip:i("likeUsOnInstagram")},{textColor:"blue-5",icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/company/hiwe-it-sqs/",tooltip:i("likeUsOnLinkedIn")},{textColor:"blue-5",icon:"o_email",href:"mailto:info@hiwe-it.com",tooltip:i("contactUs")}]),f=h(!0),v=()=>{f.value=!1},y=()=>{f.value=!0},u=async()=>{const w={controller:"emailsend",function:"sendEmail",router:O()},t={templateId:"e9bda874-8d4e-43ac-9d6a-240b38fe4692",reply_to:["info@hiwe-it.com"],subject:l.value,name:n.value,email:d.value,message:p.value};await F(w,t)&&L.create({type:"positive",message:i("sentSuccessfully")})};return(w,t)=>(C(),S(H,{class:"column fit"},{default:r(()=>[e("div",K,[e("div",{class:V(`col column justify-center ${b.value?"text-center dark-overlay":""}`)},[e("div",Z,[e("div",G,[e("div",X,[e("div",Y,[a($,{flat:"",class:"text-white",style:{background:"transparent"}},{default:r(()=>[a(N,null,{default:r(()=>[e("div",ee,[a(j,{src:"/logos/dark-landscape.png",style:{"max-width":"250px"}})]),te,e("div",{class:V((b.value,"text-center"))},[(C(!0),T(R,null,D(m.value,(o,B)=>(C(),S(I,{key:B,flat:"","text-color":o.textColor,size:"md",icon:o.icon,href:o.href,target:"_blank"},{default:r(()=>[a(A,null,{default:r(()=>[_(P(o.tooltip),1)]),_:2},1024)]),_:2},1032,["text-color","icon","href"]))),128))],2)]),_:1})]),_:1})]),e("div",oe,[e("div",{class:V(`${g.value?"q-pb-sm":"q-pb-xl"} col-12 text-center home-text3 text-font text-blue-5`)}," Contact Us ",2),e("div",ae,[e("div",le,[e("div",se,[a(k,{dense:"","bg-color":"grey-3",outlined:"",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o),label:"Name"},{prepend:r(()=>[a(Q,{name:"o_people"})]),_:1},8,["modelValue"])]),e("div",ne,[a(k,{dense:"","bg-color":"grey-3",outlined:"",modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=o=>d.value=o),label:"Email"},{prepend:r(()=>[a(Q,{name:"o_email"})]),_:1},8,["modelValue"])]),e("div",re,[a(k,{dense:"","bg-color":"grey-3",outlined:"",modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=o=>l.value=o),label:"Subject"},{prepend:r(()=>[a(Q,{name:"o_subject"})]),_:1},8,["modelValue"])]),e("div",ce,[a(k,{dense:"","bg-color":"grey-3",outlined:"",modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=o=>p.value=o),type:"textarea",label:"Message"},null,8,["modelValue"])]),e("div",ie,[a(z(J),{sitekey:"6LcbBIMlAAAAAKs1eDqKWQVy_eaiQPB0rsPZyM47",onVerify:v,onExpire:y})]),e("div",de,[a(I,{style:{"font-weight":"600"},class:"float-right",color:"primary","text-color":"white",label:"Submit",disabled:f.value,onClick:u},null,8,["disabled"])])])])])])])])],2)])]),_:1}))}});export{be as default};
