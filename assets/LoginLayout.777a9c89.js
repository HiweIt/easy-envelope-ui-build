import{d,bp as m,r as p,bx as c,g,h as w,i as s,j as o,aD as f,aB as r,aL as u,m as n,Q as h}from"./index.89b9ec57.js";import{Q as y}from"./QForm.f06198f3.js";const _={class:"window-height window-width row justify-center items-center"},v=n("div",{class:"column items-center"},[n("div",{class:"col"},[n("img",{alt:"logo",style:{height:"250px"},src:"/logos/logo_login.png"})])],-1),B=d({__name:"LoginLayout",setup(V){const t=m(),l=p({username:"",password:""}),i=async()=>{await t.authenticateUser(l.value)};return t.authentication=null,t.authenticated=!1,t.user=new c,(b,a)=>(g(),w("div",_,[s(f,{class:"my-card"},{default:o(()=>[s(r,null,{default:o(()=>[v]),_:1}),s(r,null,{default:o(()=>[s(y,{ref:"loginForm",onSubmit:a[2]||(a[2]=e=>i())},{default:o(()=>[s(u,{dense:"",outlined:"",modelValue:l.value.username,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.username=e),label:"Username","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),s(u,{dense:"",outlined:"",type:"password",modelValue:l.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.password=e),label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),n("div",null,[s(h,{class:"full-width",label:"Login",color:"primary",size:"md",type:"submit"})])]),_:1},512)]),_:1})]),_:1})]))}});export{B as default};
