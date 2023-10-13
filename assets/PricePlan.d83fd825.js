var l=Object.defineProperty;var p=(e,t,i)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var s=(e,t,i)=>(p(e,typeof t!="symbol"?t+"":t,i),i);import{aF as f,aG as r,aH as u,aI as c,aJ as o,aK as h,aL as d}from"./index.505ac9ba.js";const P=f("priceplan",{state:()=>({pricePlans:[],loading:!1}),getters:{isLoading:e=>e.loading,getPricePlans:e=>e.pricePlans},actions:{async fetchPricePlans(){this.loading=!0;const e={controller:"priceplan",function:"getAll",router:this.router},t=await r(e);t&&(this.pricePlans=t),this.loading=!1},async getPricePlanById(e){const t={controller:"priceplan",function:"getById",router:this.router},i=await r(t,[e]);if(i)return i},async savePricePlan(e){const t={controller:"priceplan",function:"save",router:this.router},i=await u(t,e);if(i){const n=this.pricePlans.findIndex(a=>a.id===i.id);n===-1?this.pricePlans.push(i):this.pricePlans.splice(n,1,i),c.create({type:"positive",message:o.global.t("sentSuccessfully")})}},async deleteEntity(e){const t={controller:"priceplan",function:"deleteById",router:this.router};if(!await h(t,[e]))return;const n=this.pricePlans.findIndex(a=>a.id===e);n>-1&&this.pricePlans.splice(n,1)},async toggleVisibility(e){const t={controller:"priceplan",function:"toggleVisibility",router:this.router};await r(t,[e])&&(await this.fetchPricePlans(),c.create({type:"positive",message:o.global.t("sentSuccessfully")}))}}});class m extends d{constructor(){super(null,[]);s(this,"name");s(this,"price");s(this,"monthlyRequests");s(this,"emailTemplates");s(this,"guaranteedUptime");s(this,"emailApi");s(this,"ccBccRecipients");s(this,"trackingAnalytics");s(this,"dataRetention");s(this,"domainWhitelist");s(this,"prioritySupport");s(this,"disabled");this.name="",this.price=0,this.monthlyRequests=0,this.emailTemplates=0,this.guaranteedUptime=!1,this.emailApi=!1,this.ccBccRecipients=!1,this.trackingAnalytics=!1,this.dataRetention=0,this.domainWhitelist=!1,this.prioritySupport=!1,this.disabled=!1}}export{m as P,P as u};
