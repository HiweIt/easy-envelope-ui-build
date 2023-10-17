import{aE as l,bx as h,by as t,aF as c,bp as a,aG as i,aH as d,aI as g,aJ as p,bz as u}from"./index.89b9ec57.js";const w=l("user",{state:()=>({user:new h,licence:[],allUsers:[]}),getters:{},actions:{async fetchUser(s=(r=>(r=a().authentication)==null?void 0:r.id)()){t.show({message:"Loading in progress"});const e={controller:"user",function:"getUserById",router:this.router},o=await c(e,[s]);o&&(this.user=o),t.hide()},async fetchUsers(){t.show({message:"Fetching users..."});const s={controller:"user",function:"getAllUsers",router:this.router},r=await c(s);r&&(this.allUsers=r),t.hide()},async saveUser(s){const r={controller:"user",function:"addUser",router:this.router},e=await i(r,s);if(e){const o=this.allUsers.findIndex(n=>n.id===e.id);o===-1?this.allUsers.push(e):this.allUsers.splice(o,1,e),d.create({type:"positive",message:g.global.t("sentSuccessfully")})}},async deleteUser(s){t.show();const r={controller:"user",function:"deleteById",router:this.router};if(!await p(r,[s]))return;const o=this.allUsers.findIndex(n=>n.id===s);o>-1&&this.allUsers.splice(o,1),t.hide()},async requestNewPassword(s){t.show();const r={controller:"user",function:"changeUserPassword",router:this.router};!await c(r,[s])||t.hide()},async changePassword(s){var n;t.show();const r={controller:"user",function:"changePassword",router:this.router},e={...s};e.newPassword=u.hashStr(e.newPassword),e.oldPassword=u.hashStr(e.oldPassword),s.userId=(n=a().authentication)==null?void 0:n.id,await i(r,e)&&t.hide()},async register(s){const r={controller:"user",function:"registerUser",router:this.router},e={...s};e.password=u.hashStr(e.password),console.log(e);const o=await i(r,e);if(o)return o},async fetchLicence(s=(r=>(r=a().authentication)==null?void 0:r.id)()){t.show({message:"Loading in progress"});const e={controller:"licence",function:"getAllLicence",router:this.router},o=await c(e,[s]);o&&(this.licence=o),t.hide()},async addLicence(s){t.show({message:"Loading in progress"});const r={controller:"licence",function:"createLicence",router:this.router},e=await i(r,s);t.hide(),e&&this.licence.push(e)},async contactSupport(s){var o;t.show({message:"Loading in progress"});const r={controller:"user",function:"contactSupport",router:this.router};s.userId=(o=a().authentication)==null?void 0:o.id;const e=await i(r,s);return t.hide(),e},async updateUserLicence(s){t.show({message:"Loading in progress"});const r={controller:"licence",function:"updateLicence",router:this.router},e=await i(r,s);t.hide()},async generateReceipt(s){t.show({message:"Loading in progress"});const r={controller:"receipt",function:"generate",router:this.router},e=await c(r,[s]);return t.hide(),e}}});export{w as u};
