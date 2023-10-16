import{Q as L}from"./QImg.f6697a5a.js";import{Q as X,a as Z}from"./QTabs.c4ed0177.js";import{Q as ee}from"./QSpace.82e7702a.js";import{_ as te,d as ae,u as se,a as le,b as B,r as y,c as v,w as oe,o as ne,e as re,f as ie,g as u,h as w,i as e,j as s,n as d,T as ce,F as q,k as Q,l as S,m as i,Q as r,p as _,q as p,t as E,s as $,v as ue,x as de,y as pe}from"./index.0758cc70.js";import{Q as me}from"./QScrollObserver.a03d92e0.js";import{Q as fe,a as ge,b as ve,c as he}from"./QLayout.06793661.js";import{Q as be}from"./QItem.ba7ecbda.js";import{Q as ye}from"./QList.bd51278f.js";import{Q as f}from"./QTooltip.aab238e5.js";import{u as we}from"./use-quasar.59586a85.js";import{_ as _e}from"./DocsMenu.eb0e6fa1.js";import{I as V,D as W,a as D}from"./ConfigData.4acfb961.js";import"./rtl.b51694b1.js";import"./position-engine.2c0f0e16.js";import"./format.2bc25e5f.js";const xe=x=>(de("data-v-4f2f1539"),x=x(),pe(),x),ke={class:"q-mr-sm"},Ce=xe(()=>i("div",null,[i("img",{class:"q-ma-md",style:{width:"250px"},alt:"Easy envelope",src:"/logos/logo_easy.png"})],-1)),qe={class:"q-py-lg text-center"},Qe={class:"q-py-lg q-pb-xs text-center q-gutter-md"},$e={class:"q-py-lg q-pb-xs text-center q-gutter-md"},Ie={class:"row q-pa-lg items-center justify-between"},Te=ae({__name:"MainLayout",setup(x){const{t:g}=se({useScope:"global"}),A=we(),R=le(),l=B(),{screen:F}=A,k=y("transparent-header"),M=()=>{if(document.querySelector("header")){const a=window.scrollY;a>0&&l.path.startsWith("/docs")||l.path.startsWith("/pricing")?k.value="black-header":(a>0&&(l.path==="/"||l.path),k.value="transparent-header")}},N=v(()=>{if(l.path.startsWith("/docs"))return"docs";for(let o=0;o<h.value.length;o++)if(H(h.value[o].path))return h.value[o].name;return"home"}),n=o=>{R.push(o)},h=v(()=>[{path:"/",class:"text-uppercase",name:"home",label:g("home")},{path:"/docs/introduction/gettingstarted",class:"text-uppercase",name:"docs",label:g("documents")},{path:"/pricing",class:"text-uppercase",name:"pricing",label:g("pricing")},{path:"/contact",class:"text-uppercase",name:"contact",label:g("contact")}]),P=[{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/profile.php?id=100047218617300",tooltip:"Like us on Facebook"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/hiwe_it/",tooltip:"Like us on Instagram"},{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/company/hiwe-it-sqs/",tooltip:"Link us on LinkedIn"},{icon:"o_email",href:"mailto:info@hiwe-it.com",tooltip:"Contact us"}],H=o=>l.path===o,C=y(!1),O=()=>{C.value=!C.value},I=y(new Date),U=v(()=>{const o=I.value.getHours(),a=I.value.getMinutes(),c=Number(`${o}${a<10?`0${a}`:a}`);return c>=V-W&&c<V?"bg-image-dawn":c>=D&&c<D+W?"bg-image-dusk":c>=V&&c<=D?"bg-image-day":"bg-image-night"}),j=()=>{const o=B();return o.path==="/"?U.value:o.path==="/contact"?"bg-image-dusk":"bg-global"},Y=v(()=>l.path==="/"||l.path==="/contact"?"/logo_easy_dark.png":"/logo_easy.png"),G=v(()=>l.path==="/"||l.path==="/contact"?"/simbol_negativ.png":"/simbol_pozitiv.png"),b=y(!1);oe(l,()=>{b.value=l.path==="/"||l.path==="/contact"});const J=y(!1),T=v(()=>F.lt.md),z=()=>{J.value=window.innerWidth<=600};return ne(()=>{window.addEventListener("scroll",M),z(),window.addEventListener("resize",z),b.value=l.path==="/"||l.path==="/contact",setInterval(()=>{I.value=new Date},1e3)}),re(()=>{window.removeEventListener("scroll",M),window.removeEventListener("resize",z)}),(o,a)=>{const c=ie("router-view");return u(),w("div",{class:d(j())},[e(fe,{view:"hHh lpR fFf"},{default:s(()=>[e(ce,{name:"header-transition"},{default:s(()=>[e(ge,{class:d(k.value)},{default:s(()=>[e(me,null,{default:s(()=>[e(L,{class:"q-ma-md gt-sm cursor-pointer",style:{width:"230px"},alt:"Easy envelope",src:Y.value,onClick:a[0]||(a[0]=t=>n("/"))},null,8,["src"]),e(L,{class:"q-ma-md lt-md cursor-pointer",style:{width:"50px"},alt:"Easy envelope",src:G.value,onClick:a[1]||(a[1]=t=>n("/"))},null,8,["src"]),e(X,{class:d(`${T.value?"":"offset-1"} ${b.value?"text-grey-3":"text-black"} gt-xs`),modelValue:N.value,"onUpdate:modelValue":a[2]||(a[2]=t=>N.value=t),"narrow-indicator":"",dense:"","indicator-color":"primary"},{default:s(()=>[(u(!0),w(q,null,Q(h.value,(t,m)=>(u(),S(Z,{clickable:"",key:m,class:d(t.class),name:t.name,label:t.label,onClick:K=>n(t.path)},null,8,["class","name","label","onClick"]))),128))]),_:1},8,["class","modelValue"]),e(ee),i("div",ke,[e(r,{class:"sign-in-button gt-xs text-capitalize text-bold",rounded:"",color:b.value?"blue-5":"primary",label:_(g)("signIn"),onClick:a[3]||(a[3]=t=>n("/login"))},null,8,["color","label"])]),e(r,{class:"lt-sm q-mr-md",color:b.value?"grey-4":"primary",dense:"",flat:"",round:"",icon:"menu",onClick:O},null,8,["color"])]),_:1})]),_:1},8,["class"])]),_:1}),e(ve,{class:"bg-global",modelValue:C.value,"onUpdate:modelValue":a[7]||(a[7]=t=>C.value=t),side:"left",elevated:""},{default:s(()=>[Ce,e(ye,{class:"text-headline6 text-weight-medium q-ml-sm"},{default:s(()=>[(u(!0),w(q,null,Q(h.value,(t,m)=>(u(),S(be,{clickable:"",key:m,active:H(t.path),class:d(t.class),onClick:K=>n(t.path)},{default:s(()=>[p(E(t.label),1)]),_:2},1032,["active","class","onClick"]))),128))]),_:1}),e($,{inset:""}),_(l).path.startsWith("/docs")?(u(),S(_e,{key:0,class:"q-pt-sm lt-sm"})):ue("",!0),e($,{inset:""}),i("div",qe,[e(r,{style:{"font-weight":"600"},class:"q-px-md text-capitalize bg-white",outline:"",rounded:"",dense:"",color:"primary",label:_(g)("signIn"),onClick:a[4]||(a[4]=t=>n("/login"))},null,8,["label"])]),e($,{inset:""}),i("div",Qe,[e(r,{class:"bg-white",outline:"",rounded:"",style:{"font-weight":"500"},size:"12px","text-color":"primary text-capitalize",label:"Privacy Policy",onClick:a[5]||(a[5]=t=>n("/privacypolicy"))},{default:s(()=>[e(f,null,{default:s(()=>[p("Privacy Policy")]),_:1})]),_:1}),e(r,{class:"bg-white",outline:"",rounded:"",style:{"font-weight":"500"},size:"12px","text-color":"primary text-capitalize",label:"Terms",onClick:a[6]||(a[6]=t=>n("/termsofuse"))},{default:s(()=>[e(f,null,{default:s(()=>[p("Terms and Conditions")]),_:1})]),_:1})]),e($,{inset:""}),i("div",$e,[(u(),w(q,null,Q(P,(t,m)=>e(r,{class:"bg-white",key:m,outline:"",round:"",color:"primary",size:"sm",icon:t.icon,href:t.href,target:"_blank"},{default:s(()=>[e(f,null,{default:s(()=>[p(E(t.tooltip),1)]),_:2},1024)]),_:2},1032,["icon","href"])),64))])]),_:1},8,["modelValue"]),e(he,null,{default:s(()=>[e(c)]),_:1}),i("div",{class:d(`${_(l).path==="/"||_(l).path==="/contact"?"absolute-bottom":"bg-blue-grey-10"}`)},[i("div",Ie,[i("div",{class:d(`${T.value?"q-gutter-sm":"q-gutter-md"}`)},[e(L,{class:"cursor-pointer",style:{width:"40px"},alt:"Easy envelope",src:"/logos/simbol_negativ.png",onClick:a[8]||(a[8]=t=>n("/"))}),e(r,{outline:"",rounded:"",style:{"font-weight":"300"},size:"12px","text-color":"grey-4 text-capitalize",label:"\xA9 2023 Hiwe IT ",href:"https://www.hiwe-it.com/",target:"_blank"},{default:s(()=>[e(f,null,{default:s(()=>[p("Visit our website")]),_:1})]),_:1}),e(r,{class:"gt-xs",outline:"",rounded:"",style:{"font-weight":"300"},size:"12px","text-color":"grey-4 text-capitalize",label:"Privacy Policy",onClick:a[9]||(a[9]=t=>n("/privacypolicy"))},{default:s(()=>[e(f,null,{default:s(()=>[p("Privacy Policy")]),_:1})]),_:1}),e(r,{class:"gt-xs",outline:"",rounded:"",style:{"font-weight":"300"},size:"12px","text-color":"grey-4 text-capitalize",label:"Terms",onClick:a[10]||(a[10]=t=>n("/termsofuse"))},{default:s(()=>[e(f,null,{default:s(()=>[p("Terms and Conditions")]),_:1})]),_:1})],2),i("div",{class:d(`${T.value?"q-gutter-sm":"q-gutter-md"} gt-xs`)},[(u(),w(q,null,Q(P,(t,m)=>e(r,{key:m,outline:"",round:"",color:"grey-4",size:"sm",icon:t.icon,href:t.href,target:"_blank"},{default:s(()=>[e(f,null,{default:s(()=>[p(E(t.tooltip),1)]),_:2},1024)]),_:2},1032,["icon","href"])),64))],2)])],2)]),_:1})],2)}}});var Oe=te(Te,[["__scopeId","data-v-4f2f1539"]]);export{Oe as default};
