var n=Object.defineProperty;var c=(t,e,s)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>(c(t,typeof e!="symbol"?e+"":e,s),s);import{aK as m,aE as p,aF as i,bp as l,aG as o,aH as r,aI as u,aJ as f}from"./index.89b9ec57.js";class h extends m{constructor(){super(null,[]);a(this,"templateName");a(this,"serviceId");a(this,"text");a(this,"userId");a(this,"subject");a(this,"fromName");a(this,"serviceName");this.templateName="",this.serviceId="",this.text="",this.userId="",this.subject="",this.fromName="",this.serviceName=""}}const T=p("emailtemplate",{state:()=>({emailTemplates:[],loading:!1,emailServiceOptions:[],emailTemplate:new h}),getters:{isLoading:t=>t.loading,getEmailTemplates:t=>t.emailTemplates},actions:{async fetchEmailTemplates(){this.loading=!0;const t={controller:"emailtemplate",function:"getAllTableByUserId",router:this.router},e=await i(t,[l().user.id]);e&&(this.emailTemplates=e),this.loading=!1},async fetchEmailServiceOptions(){this.loading=!0;const t={controller:"emailservice",function:"getSelectByUserId",router:this.router},e=await i(t,[l().user.id]);e&&(this.emailServiceOptions=e),this.loading=!1},async getEmailTemplate(t){this.loading=!0;const e={controller:"emailtemplate",function:"getById",router:this.router},s=await i(e,[t]);s&&(this.emailTemplate=s),this.loading=!1},async saveEmailTemplate(){this.loading=!0;const t={controller:"emailtemplate",function:"save",router:this.router},e=await o(t,this.emailTemplate);this.loading=!1,e&&(this.emailTemplate=e,r.create({type:"positive",message:u.global.t("savedSuccessfully")}))},async deleteEntity(t){this.loading=!0;const e={controller:"emailtemplate",function:"deleteById",router:this.router};await f(e,[t]),this.loading=!1,this.fetchEmailTemplates()},async sendTestEmail(t,e){const s={controller:"emailtemplate",function:"sendTestEmail",router:this.router};await o(s,{email:t,templateId:e})?r.create({type:"positive",message:"sentSuccessfully"}):console.log("error")}}});export{h as E,T as u};
