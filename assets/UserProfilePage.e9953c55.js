var Le=Object.defineProperty;var Qe=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var P=(e,t,n)=>(Qe(e,typeof t!="symbol"?t+"":t,n),n);import{Q as Ue,a as re}from"./QTabs.07f3fc81.js";import{bU as ve,aT as De,bV as He,d as F,u as A,r as q,g as D,l as I,j as h,p as d,aN as ne,i,aB as Q,m as p,M as R,t as v,s as U,aL as S,aC as se,bk as be,Q as Y,I as we,aD as X,c as O,h as b,v as Z,q as E,aK as Oe,aA as Te,F as ie,k as ce,by as j,bp as _e}from"./index.89b9ec57.js";import{Q as Me,H as Ne,a as Fe,b as ue}from"./hq-data-table.es.fec03429.js";import{Q as Ae}from"./QBtnDropdown.426df4de.js";import{a as Ee}from"./QMenu.bf3c5da3.js";import{Q as Be,l as ze}from"./paypal-js.fb1585b5.js";import{b as Re,Q as Ze}from"./QTable.74b7a1a0.js";import{p as w,c as je}from"./format.2bc25e5f.js";import{u as K}from"./use-quasar.9ffcffad.js";import{Q as Xe}from"./QForm.f06198f3.js";import{C as $e}from"./ClosePopup.345e3494.js";import{r as G}from"./validation.b28ada22.js";import{u as T}from"./use-dialog-plugin-component.c5561868.js";import{u as N}from"./user.cf682356.js";import{Q as Ke}from"./QTooltip.294f16a1.js";import{Q as Ge}from"./QSelect.0fc3481c.js";import{Q as Je}from"./QMarkupTable.dcbee181.js";import{u as We,P as de}from"./PricePlan.8c7227c0.js";import{_ as et}from"./ConfirmationModal.e2c2e9e2.js";import"./QScrollObserver.90b5c25e.js";import"./position-engine.46944299.js";import"./rtl.b51694b1.js";import"./QItem.63231d09.js";import"./QImg.b1f8a295.js";import"./QSpace.3975ae39.js";import"./QInnerLoading.8283329e.js";import"./QList.744acb19.js";import"./use-fullscreen.76803ed0.js";const B=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function tt(e){return nt(e)===0}function at(e,t){return t<=6?31:t<=11||tt(e)?30:29}function nt(e){const t=B.length;let n=B[0],a,s,o,y,m;if(e<n||e>=B[t-1])throw new Error("Invalid Jalaali year "+e);for(m=1;m<t&&(a=B[m],s=a-n,!(e<a));m+=1)n=a;return y=e-n,s-y<6&&(y=y-s+st(s+4,33)*33),o=me(me(y+1,33)-1,4),o===-1&&(o=4),o}function st(e,t){return~~(e/t)}function me(e,t){return e-~~(e/t)*t}const xe=864e5,ot=36e5,ee=6e4,Se="YYYY-MM-DDTHH:mm:ss.SSSZ",lt=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,rt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,J={};function it(e,t){const n="("+t.days.join("|")+")",a=e+n;if(J[a]!==void 0)return J[a];const s="("+t.daysShort.join("|")+")",o="("+t.months.join("|")+")",y="("+t.monthsShort.join("|")+")",m={};let f=0;const $=e.replace(rt,l=>{switch(f++,l){case"YY":return m.YY=f,"(-?\\d{1,2})";case"YYYY":return m.YYYY=f,"(-?\\d{1,4})";case"M":return m.M=f,"(\\d{1,2})";case"MM":return m.M=f,"(\\d{2})";case"MMM":return m.MMM=f,y;case"MMMM":return m.MMMM=f,o;case"D":return m.D=f,"(\\d{1,2})";case"Do":return m.D=f++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return m.D=f,"(\\d{2})";case"H":return m.H=f,"(\\d{1,2})";case"HH":return m.H=f,"(\\d{2})";case"h":return m.h=f,"(\\d{1,2})";case"hh":return m.h=f,"(\\d{2})";case"m":return m.m=f,"(\\d{1,2})";case"mm":return m.m=f,"(\\d{2})";case"s":return m.s=f,"(\\d{1,2})";case"ss":return m.s=f,"(\\d{2})";case"S":return m.S=f,"(\\d{1})";case"SS":return m.S=f,"(\\d{2})";case"SSS":return m.S=f,"(\\d{3})";case"A":return m.A=f,"(AM|PM)";case"a":return m.a=f,"(am|pm)";case"aa":return m.aa=f,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return n;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return m.Z=f,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return m.ZZ=f,"(Z|[+-]\\d{2}\\d{2})";case"X":return m.X=f,"(-?\\d+)";case"x":return m.x=f,"(-?\\d{4,})";default:return f--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),c={map:m,regex:new RegExp("^"+$)};return J[a]=c,c}function Ye(e,t){return e!==void 0?e:t!==void 0?t.date:He.date}function pe(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),s=Math.floor(a/60),o=a%60;return n+w(s)+t+w(o)}function ct(e,t,n){let a=e.getFullYear(),s=e.getMonth();const o=e.getDate();return t.year!==void 0&&(a+=n*t.year,delete t.year),t.month!==void 0&&(s+=n*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(a),e.setMonth(s),e.setDate(Math.min(o,le(e))),t.date!==void 0&&(e.setDate(e.getDate()+n*t.date),delete t.date),e}function ut(e,t,n){const a=t.year!==void 0?t.year:e[`get${n}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${n}Month`](),o=new Date(a,s+1,0).getDate(),y=Math.min(o,t.date!==void 0?t.date:e[`get${n}Date`]());return e[`set${n}Date`](1),e[`set${n}Month`](2),e[`set${n}FullYear`](a),e[`set${n}Month`](s),e[`set${n}Date`](y),delete t.year,delete t.month,delete t.date,e}function oe(e,t,n){const a=Pe(t),s=new Date(e),o=a.year!==void 0||a.month!==void 0||a.date!==void 0?ct(s,a,n):s;for(const y in a){const m=je(y);o[`set${m}`](o[`get${m}`]()+n*a[y])}return o}function Pe(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function Ve(e,t,n){const a=Pe(t),s=n===!0?"UTC":"",o=new Date(e),y=a.year!==void 0||a.month!==void 0||a.date!==void 0?ut(o,a,s):o;for(const m in a){const f=m.charAt(0).toUpperCase()+m.slice(1);y[`set${s}${f}`](a[m])}return y}function dt(e,t,n){const a=mt(e,t,n),s=new Date(a.year,a.month===null?null:a.month-1,a.day===null?1:a.day,a.hour,a.minute,a.second,a.millisecond),o=s.getTimezoneOffset();return a.timezoneOffset===null||a.timezoneOffset===o?s:oe(s,{minutes:a.timezoneOffset-o},1)}function mt(e,t,n,a,s){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(o,s),e==null||e===""||typeof e!="string")return o;t===void 0&&(t=Se);const y=Ye(n,ve.props),m=y.months,f=y.monthsShort,{regex:$,map:c}=it(t,y),l=e.match($);if(l===null)return o;let r="";if(c.X!==void 0||c.x!==void 0){const u=parseInt(l[c.X!==void 0?c.X:c.x],10);if(isNaN(u)===!0||u<0)return o;const g=new Date(u*(c.X!==void 0?1e3:1));o.year=g.getFullYear(),o.month=g.getMonth()+1,o.day=g.getDate(),o.hour=g.getHours(),o.minute=g.getMinutes(),o.second=g.getSeconds(),o.millisecond=g.getMilliseconds()}else{if(c.YYYY!==void 0)o.year=parseInt(l[c.YYYY],10);else if(c.YY!==void 0){const u=parseInt(l[c.YY],10);o.year=u<0?u:2e3+u}if(c.M!==void 0){if(o.month=parseInt(l[c.M],10),o.month<1||o.month>12)return o}else c.MMM!==void 0?o.month=f.indexOf(l[c.MMM])+1:c.MMMM!==void 0&&(o.month=m.indexOf(l[c.MMMM])+1);if(c.D!==void 0){if(o.day=parseInt(l[c.D],10),o.year===null||o.month===null||o.day<1)return o;const u=a!=="persian"?new Date(o.year,o.month,0).getDate():at(o.year,o.month);if(o.day>u)return o}c.H!==void 0?o.hour=parseInt(l[c.H],10)%24:c.h!==void 0&&(o.hour=parseInt(l[c.h],10)%12,(c.A&&l[c.A]==="PM"||c.a&&l[c.a]==="pm"||c.aa&&l[c.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),c.m!==void 0&&(o.minute=parseInt(l[c.m],10)%60),c.s!==void 0&&(o.second=parseInt(l[c.s],10)%60),c.S!==void 0&&(o.millisecond=parseInt(l[c.S],10)*10**(3-l[c.S].length)),(c.Z!==void 0||c.ZZ!==void 0)&&(r=c.Z!==void 0?l[c.Z].replace(":",""):l[c.ZZ],o.timezoneOffset=(r[0]==="+"?-1:1)*(60*r.slice(1,3)+1*r.slice(3,5)))}return o.dateHash=w(o.year,6)+"/"+w(o.month)+"/"+w(o.day),o.timeHash=w(o.hour)+":"+w(o.minute)+":"+w(o.second)+r,o}function pt(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function ft(e,t){return Ve(new Date,e,t)}function yt(e){const t=new Date(e).getDay();return t===0?7:t}function te(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);const a=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-a);const s=(t-n)/(xe*7);return 1+Math.floor(s)}function ht(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function W(e,t){const n=new Date(e);return t===!0?ht(n):n.getTime()}function gt(e,t,n,a={}){const s=W(t,a.onlyDate),o=W(n,a.onlyDate),y=W(e,a.onlyDate);return(y>s||a.inclusiveFrom===!0&&y===s)&&(y<o||a.inclusiveTo===!0&&y===o)}function vt(e,t){return oe(e,t,1)}function Dt(e,t){return oe(e,t,-1)}function V(e,t,n){const a=new Date(e),s=`set${n===!0?"UTC":""}`;switch(t){case"year":case"years":a[`${s}Month`](0);case"month":case"months":a[`${s}Date`](1);case"day":case"days":case"date":a[`${s}Hours`](0);case"hour":case"hours":a[`${s}Minutes`](0);case"minute":case"minutes":a[`${s}Seconds`](0);case"second":case"seconds":a[`${s}Milliseconds`](0)}return a}function bt(e,t,n){const a=new Date(e),s=`set${n===!0?"UTC":""}`;switch(t){case"year":case"years":a[`${s}Month`](11);case"month":case"months":a[`${s}Date`](le(a));case"day":case"days":case"date":a[`${s}Hours`](23);case"hour":case"hours":a[`${s}Minutes`](59);case"minute":case"minutes":a[`${s}Seconds`](59);case"second":case"seconds":a[`${s}Milliseconds`](999)}return a}function wt(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(n=>{t=Math.max(t,new Date(n))}),t}function _t(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(n=>{t=Math.min(t,new Date(n))}),t}function z(e,t,n){return(e.getTime()-e.getTimezoneOffset()*ee-(t.getTime()-t.getTimezoneOffset()*ee))/n}function ke(e,t,n="days"){const a=new Date(e),s=new Date(t);switch(n){case"years":case"year":return a.getFullYear()-s.getFullYear();case"months":case"month":return(a.getFullYear()-s.getFullYear())*12+a.getMonth()-s.getMonth();case"days":case"day":case"date":return z(V(a,"day"),V(s,"day"),xe);case"hours":case"hour":return z(V(a,"hour"),V(s,"hour"),ot);case"minutes":case"minute":return z(V(a,"minute"),V(s,"minute"),ee);case"seconds":case"second":return z(V(a,"second"),V(s,"second"),1e3)}}function ae(e){return ke(e,V(e,"year"),"days")+1}function Mt(e){return De(e)===!0?"date":typeof e=="number"?"number":"string"}function $t(e,t,n){const a=new Date(e);if(t){const s=new Date(t);if(a<s)return s}if(n){const s=new Date(n);if(a>s)return s}return a}function xt(e,t,n){const a=new Date(e),s=new Date(t);if(n===void 0)return a.getTime()===s.getTime();switch(n){case"second":case"seconds":if(a.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(a.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(a.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(a.getDate()!==s.getDate())return!1;case"month":case"months":if(a.getMonth()!==s.getMonth())return!1;case"year":case"years":if(a.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${n}`)}return!0}function le(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function fe(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const ye={YY(e,t,n){const a=this.YYYY(e,t,n)%100;return a>=0?w(a):"-"+w(Math.abs(a))},YYYY(e,t,n){return n!=null?n:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return w(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return fe(this.Q(e))},D(e){return e.getDate()},Do(e){return fe(e.getDate())},DD(e){return w(e.getDate())},DDD(e){return ae(e)},DDDD(e){return w(ae(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return te(e)},ww(e){return w(te(e))},H(e){return e.getHours()},HH(e){return w(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return w(this.h(e))},m(e){return e.getMinutes()},mm(e){return w(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return w(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return w(Math.floor(e.getMilliseconds()/10))},SSS(e){return w(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,n,a){const s=a==null?e.getTimezoneOffset():a;return pe(s,":")},ZZ(e,t,n,a){const s=a==null?e.getTimezoneOffset():a;return pe(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function St(e,t,n,a,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;t===void 0&&(t=Se);const y=Ye(n,ve.props);return t.replace(lt,(m,f)=>m in ye?ye[m](o,y,a,s):f===void 0?m:f.split("\\]").join("]"))}function Yt(e){return De(e)===!0?new Date(e.getTime()):e}var H={isValid:pt,extractDate:dt,buildDate:ft,getDayOfWeek:yt,getWeekOfYear:te,isBetweenDates:gt,addToDate:vt,subtractFromDate:Dt,adjustDate:Ve,startOfDate:V,endOfDate:bt,getMaxDate:wt,getMinDate:_t,getDateDiff:ke,getDayOfYear:ae,inferDateFormat:Mt,getDateBetween:$t,isSameDate:xt,daysInMonth:le,formatDate:St,clone:Yt};class Ce{constructor(){P(this,"userId");P(this,"oldPassword");P(this,"newPassword");this.userId="",this.oldPassword="",this.newPassword=""}}const Pt={class:"row q-col-gutter-md",style:{"font-size":"1.5em"}},Vt={class:"text-h6"},kt={class:"row q-col-gutter-sm"},Ct={class:"col-12"},It={class:"col-12"},qt={class:"col-12"},Lt={class:"row"},Qt={class:"col-12"},Ut=F({__name:"ChangePasswordModal",emits:[...T.emits],setup(e){const t=K(),{t:n}=A({useScope:"global"}),a=N(),{dialogRef:s,onDialogHide:o,onDialogOK:y,onDialogCancel:m}=T(),f=q(new Ce),$=q(""),c=async()=>{if(f.value.newPassword!==$.value){t.notify({type:"negative",message:n("passwordDontMatch")});return}await a.changePassword(f.value),y()};return(l,r)=>(D(),I(ne,{persistent:"",ref_key:"dialogRef",ref:s,onHide:d(o)},{default:h(()=>[i(X,null,{default:h(()=>[i(Q,null,{default:h(()=>[p("div",Pt,[i(R,{name:"password",size:"md"}),p("div",Vt,v(d(n)("changePassword")),1)])]),_:1}),i(U),i(Q,null,{default:h(()=>[i(Xe,{ref:"formForSubmit",class:"col-xs-12 col-md-9 col-lg-10 q-mb-md"},{default:h(()=>[p("div",kt,[p("div",Ct,[i(S,{dense:"",outlined:"",type:"password",label:`${d(n)("oldPassword")} *`,modelValue:f.value.oldPassword,"onUpdate:modelValue":r[0]||(r[0]=u=>f.value.oldPassword=u),rules:[d(G)]},null,8,["label","modelValue","rules"])]),p("div",It,[i(S,{dense:"",outlined:"",type:"password",label:`${d(n)("newPassword")} *`,modelValue:f.value.newPassword,"onUpdate:modelValue":r[1]||(r[1]=u=>f.value.newPassword=u),rules:[d(G)]},null,8,["label","modelValue","rules"])]),p("div",qt,[i(S,{dense:"",outlined:"",type:"password",label:`${d(n)("confirmPassword")} *`,modelValue:$.value,"onUpdate:modelValue":r[2]||(r[2]=u=>$.value=u),rules:[d(G)]},null,8,["label","modelValue","rules"])])])]),_:1},512)]),_:1}),p("div",Lt,[p("div",Qt,[i(se,{align:"right"},{default:h(()=>[be(l.$slots,"action-buttons",{},()=>[i(Y,{flat:"",label:d(n)("save"),color:"positive",onClick:r[3]||(r[3]=u=>c())},null,8,["label"]),we(i(Y,{flat:"",label:d(n)("cancel"),color:"negative",onClick:r[4]||(r[4]=u=>d(m)())},null,8,["label"]),[[$e]])])]),_:3})])])]),_:3})]),_:3},8,["onHide"]))}}),Ht={class:"row"},Ot={class:"col-6"},Tt={class:"col-6"},Nt={class:"col-6"},Ft={class:"col-6"},At={class:"col-6"},Et={key:0,class:"col-6"},Bt={key:0,class:"row"},zt={class:"col-6"},Rt={class:"col-6"},Zt={class:"col-6"},jt={class:"col-6"},Xt={class:"col-6"},Kt={class:"col-6"},Gt={class:"row"},Jt={class:"col-6"},Wt={class:"text-h6 q-pt-md q-pl-md"},ea={class:"q-pa-md"},ta={class:"absolute-full flex flex-center"},aa={class:"q-pl-md"},na={class:"col-6"},sa={class:"q-gutter-sm q-pa-lg absolute-bottom-right"},oa=F({__name:"GeneralInfo",setup(e){const t=K(),{t:n}=A({useScope:"global"}),a=N(),s=O(()=>a.user),o=q(!1),y=O(()=>{if(a.licence.length==0)return{daysLeft:365,progress:1};const c=a.licence.filter(l=>H.isBetweenDates(Date.now(),l.startDate,l.endDate))[0];return{daysLeft:H.getDateDiff(c.endDate,Date.now(),"days"),progress:1-((Date.now()-c.startDate)/(c.endDate-c.startDate)).toFixed(2)}}),m=()=>{$(new Ce)},f=async c=>{await a.saveUser(c)},$=c=>{t.dialog({component:Ut,componentProps:{entity:c}}).onOk(()=>{})};return a.fetchUser(),a.fetchLicence(),(c,l)=>(D(),b("div",null,[p("div",Ht,[p("div",Ot,[i(S,{dense:"",outlined:"",modelValue:s.value.username,"onUpdate:modelValue":l[0]||(l[0]=r=>s.value.username=r),label:d(n)("username"),class:"q-pa-md",disable:""},null,8,["modelValue","label"])]),p("div",Tt,[i(S,{dense:"",outlined:"",modelValue:s.value.email,"onUpdate:modelValue":l[1]||(l[1]=r=>s.value.email=r),label:d(n)("email"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",Nt,[i(S,{dense:"",outlined:"",modelValue:s.value.name,"onUpdate:modelValue":l[2]||(l[2]=r=>s.value.name=r),label:d(n)("name"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",Ft,[i(S,{dense:"",outlined:"",modelValue:s.value.surname,"onUpdate:modelValue":l[3]||(l[3]=r=>s.value.surname=r),label:d(n)("surname"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",At,[i(S,{dense:"",outlined:"",modelValue:s.value.phone,"onUpdate:modelValue":l[4]||(l[4]=r=>s.value.phone=r),label:d(n)("phone"),class:"q-pa-md"},null,8,["modelValue","label"])]),s.value.company.companyName!==""?(D(),b("div",Et,[i(Ee,{class:"q-pt-md"},{default:h(()=>[i(Ae,{persistent:"",flat:"",outlined:"",modelValue:o.value,"onUpdate:modelValue":l[5]||(l[5]=r=>o.value=r),label:"Show company details",class:"text-capitalize q-pa-md"},null,8,["modelValue"])]),_:1})])):Z("",!0)]),i(Be,null,{default:h(()=>[o.value?(D(),b("div",Bt,[p("div",zt,[i(S,{dense:"",outlined:"",modelValue:s.value.company.companyName,"onUpdate:modelValue":l[6]||(l[6]=r=>s.value.company.companyName=r),label:d(n)("companyName"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",Rt,[i(S,{dense:"",outlined:"",modelValue:s.value.company.companyCountry,"onUpdate:modelValue":l[7]||(l[7]=r=>s.value.company.companyCountry=r),label:d(n)("companyCountry"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",Zt,[i(S,{dense:"",outlined:"",modelValue:s.value.company.companyVat,"onUpdate:modelValue":l[8]||(l[8]=r=>s.value.company.companyVat=r),label:d(n)("companyVat"),class:"q-pa-md",disable:""},null,8,["modelValue","label"])]),p("div",jt,[i(S,{dense:"",outlined:"",modelValue:s.value.company.companyCity,"onUpdate:modelValue":l[9]||(l[9]=r=>s.value.company.companyCity=r),label:d(n)("companyCity"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",Xt,[i(S,{dense:"",outlined:"",modelValue:s.value.company.companyAddress,"onUpdate:modelValue":l[10]||(l[10]=r=>s.value.company.companyAddress=r),label:d(n)("companyAddress"),class:"q-pa-md"},null,8,["modelValue","label"])]),p("div",Kt,[i(S,{dense:"",outlined:"",modelValue:s.value.company.companyPostal,"onUpdate:modelValue":l[11]||(l[11]=r=>s.value.company.companyPostal=r),label:d(n)("companyPostal"),class:"q-pa-md"},null,8,["modelValue","label"])])])):Z("",!0)]),_:1}),p("div",Gt,[p("div",Jt,[p("div",Wt,v(d(n)("licence")),1),p("div",ea,[i(Re,{stripe:"",size:"25px",value:y.value.progress,color:"red"},{default:h(()=>[p("div",ta,[i(Me,{color:"white","text-color":"black",label:y.value.progress*100+"%"},null,8,["label"])])]),_:1},8,["value"])]),p("div",aa,[E(v(d(n)("daysLeft"))+" ",1),p("b",null,v(y.value.daysLeft),1),E(" "+v(d(n)("daysUntilExpiration"))+". ",1)])]),p("div",na,[p("div",sa,[i(Y,{class:"gt-xs",color:"primary",label:d(n)("changePassword"),onClick:m},null,8,["label"]),i(Y,{color:"primary",label:d(n)("save"),onClick:l[12]||(l[12]=r=>f(s.value))},null,8,["label"])])])])]))}});class Ie extends Oe{constructor(){super(null,[]);P(this,"userId");P(this,"pricePlanId");P(this,"startDate");P(this,"endDate");P(this,"type");P(this,"invoiceNumber");P(this,"tax");this.userId="",this.pricePlanId="",this.startDate=0,this.endDate=0,this.type="",this.invoiceNumber="",this.tax=0}}const la={class:"row q-col-gutter-md",style:{"font-size":"1.5em"}},ra={class:"text-h6"},ia={class:"row justify-center items-center"},ca={class:"text-primary"},ua={class:"text-primary"},da={class:"text-grey-7"},ma={class:"col-6 col-xs-12 col-sm-6 col-lg-4"},pa={key:0,class:"q-py-lg"},fa={class:"text-left"},ya={class:"text-right q-pr-md"},ha={key:0},ga={key:0},va={key:1},Da={key:0},ba={key:1},wa={key:2},_a={key:3},Ma={key:2},$a={class:"text-right text-h5 text-orange-4 q-pt-lg q-pr-lg"},xa={key:0,class:"text-weight-bold"},Sa={key:1,class:"text-weight-bold"},he="\u20AC",ge=20,Ya=F({__name:"AddLicenceModal",emits:[...T.emits],setup(e){const{dialogRef:t,onDialogHide:n,onDialogOK:a,onDialogCancel:s}=T(),{t:o}=A({useScope:"global"}),y=We(),m=N(),f=N(),$=O(()=>y.getPricePlans.filter(x=>!x.disabled)),c=q(new Ie),l=q(new de),r=q(!1),u=["name","price","id","channels","disabled"],g=[];Object.keys(new de).forEach(x=>{u.indexOf(x)===-1&&g.push(x)});const _=async()=>{var x;j.show(),c.value.pricePlanId=(x=l.value)==null?void 0:x.id.toString(),c.value.userId=_e().authentication.id,c.value.type=r.value?"yearly":"monthly",c.value.tax=m.licence[0].tax,await f.addLicence(c.value),j.hide()},L=async()=>{await _(),a()};return y.fetchPricePlans(),(x,k)=>(D(),I(ne,{persistent:"",ref_key:"dialogRef",ref:t,onHide:d(n)},{default:h(()=>[i(X,{style:{width:"50%"}},{default:h(()=>[i(Q,null,{default:h(()=>[p("div",la,[i(R,{name:"o_person_pin",size:"md"}),p("div",ra,v(d(o)("addLicence")),1)])]),_:1}),i(U),i(Q,null,{default:h(()=>[p("div",ia,[p("div",ca,v(d(o)("monthly")),1),i(Te,{"keep-color":"",color:"primary",size:"lg",modelValue:r.value,"onUpdate:modelValue":k[0]||(k[0]=M=>r.value=M),val:"xl"},null,8,["modelValue"]),p("div",ua,[E(v(d(o)("yearly")),1),p("span",da,v(` ${ge}`)+"% "+v(d(o)("off")),1)])])]),_:1}),i(Q,null,{default:h(()=>[p("div",ma,[i(Ge,{dense:"",outlined:"","hide-bottom-space":"","option-label":"name","option-value":"id",modelValue:l.value,"onUpdate:modelValue":k[1]||(k[1]=M=>l.value=M),options:$.value,label:`${d(o)("pricePlan")} *`},null,8,["modelValue","options","label"])]),l.value.id!==null?(D(),b("div",pa,[i(Je,{flat:""},{default:h(()=>[p("tbody",null,[(D(),b(ie,null,ce(g,M=>p("tr",{key:M},[p("td",fa,v(d(o)(M)),1),p("td",ya,[(D(!0),b(ie,null,ce($.value,(C,qe)=>(D(),b("div",{key:`${M}_${qe}`,class:"text-center"},[l.value.id==C.id?(D(),b("div",ha,[typeof C[M]=="boolean"?(D(),b("div",ga,[i(R,{name:Boolean(C[M])?"done":"-"},null,8,["name"])])):typeof C[M]=="number"?(D(),b("div",va,[M=="dataRetention"?(D(),b("div",Da,v(C[M])+" days",1)):C[M]==-1?(D(),b("div",ba,"Unlimited")):M=="monthlyRequests"?(D(),b("div",wa,v(C[M].toFixed(0).replace(/(\d)(?=(\d{3})+\b)/g,"$1.")),1)):(D(),b("div",_a,v(C[M]),1))])):(D(),b("div",Ma,v(C[M]),1))])):Z("",!0)]))),128))])])),64))])]),_:1}),i(U),p("div",$a,[r.value==!1?(D(),b("span",xa,v(d(o)("price"))+": "+v(he)+v(l.value.price)+"/"+v(d(o)("mo")),1)):(D(),b("span",Sa,v(d(o)("price"))+": "+v(he)+v(Math.ceil(l.value.price*(1-ge/100)).toFixed(0))+"/"+v(d(o)("mo")),1))])])):Z("",!0)]),_:1}),i(se,{class:"q-pb-md",align:"right"},{default:h(()=>[be(x.$slots,"action-buttons",{},()=>[i(Y,{flat:"",label:d(o)("add"),color:"positive",onClick:L},null,8,["label"]),we(i(Y,{flat:"",label:d(o)("cancel"),color:"negative",onClick:d(s)},null,8,["label","onClick"]),[[$e]])])]),_:3})]),_:3})]),_:3},8,["onHide"]))}}),Pa={class:"row q-col-gutter-md",style:{"font-size":"1.5em"}},Va={class:"q-pa-sm"},ka={class:"q-pa-sm row text-subtitle2"},Ca=p("div",{class:"col-9 text-right"},"Subtotal:",-1),Ia={class:"col-3 text-right"},qa={class:"q-pa-sm row text-subtitle2"},La=p("div",{class:"col-9 text-right"},"Tax:",-1),Qa={class:"col-3 text-right"},Ua={class:"q-pa-sm row text-h6"},Ha=p("div",{class:"col-9 text-right"},"Grand Total:",-1),Oa={class:"col-3 text-right"},Ta=p("div",{class:"q-px-lg",id:"paypal-button-container"},null,-1),Na=F({__name:"ReviewPayment",props:{payment:{type:Object,required:!0}},emits:[...T.emits],setup(e){const t=e,{t:n,locale:a}=A({useScope:"global"}),{dialogRef:s,onDialogHide:o,onDialogCancel:y}=T(),m=N();K();const f=q(O(()=>{const u=m.licence.find(g=>{var _;return g.licenceId===((_=t.payment)==null?void 0:_.licenceId)});return u!=null?u:null})).value,$=async u=>{j.show(),await m.updateUserLicence(u),j.hide()},c=u=>(parseFloat(u.price)+parseFloat(u.price)*u.tax).toFixed(2),l=u=>{ze({"client-id":"ASJx3ApCaby6kCU2OQutssTHVwNDvLQ0EpDdExso-iUbCmOcGjIJUS_0iQ_Yv8KYiQb7srrbBScVZHT9",currency:"EUR"}).then(g=>{"Buttons"in g&&g.Buttons&&g.Buttons({createOrder:async function(_,L){return L.order.create({purchase_units:[{description:`EasyEnvelope ${u.pricePlan} plan`,amount:{currency_code:"EUR",value:c(u)}}]})},onApprove:function(_,L){return L.order.capture().then(async function(x){f.invoiceNumber=x.id,await $(f),o()})}}).render("#paypal-button-container")})},r=()=>{l(t.payment)};return(u,g)=>(D(),I(ne,{persistent:"",ref_key:"dialogRef",ref:s,onShow:r,onHide:d(o)},{default:h(()=>[i(X,{style:{width:"70%"}},{default:h(()=>[i(Q,null,{default:h(()=>[p("div",Pa,[i(R,{name:"o_credit_card",size:"md"}),p("div",null,v(d(n)("reviewPayment")),1)])]),_:1}),i(U),i(Q,null,{default:h(()=>[i(Ze,{flat:"","hide-bottom":"",color:"primary",rows:[{price:e.payment.price,item:e.payment.pricePlan+` (${e.payment.startDate} - ${e.payment.endDate})`,q:"1"}],columns:[{name:"item",label:"Item",align:"left",field:_=>_.item},{name:"q",label:"Quantity",align:"center",field:_=>1},{name:"price",label:"Price",align:"right",field:_=>_.price}]},null,8,["rows","columns"]),i(U,{class:"q-my-md bg-primary",style:{opacity:"0.5"}}),p("div",Va,[p("div",ka,[Ca,p("div",Ia,v(e.payment.price),1)]),p("div",qa,[La,p("div",Qa,v(e.payment.tax*100)+"%",1)]),p("div",Ua,[Ha,p("div",Oa,v(parseFloat(e.payment.price)+parseFloat(e.payment.price)*e.payment.tax)+"\u20AC",1)])]),i(U,{class:"q-my-md bg-primary",style:{opacity:"0.5"}}),Ta]),_:1}),i(se,{class:"q-pb-md",align:"right"},{default:h(()=>[i(Y,{flat:"",label:d(n)("cancel"),color:"negative",onClick:d(o)},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),Fa={key:0},Aa={key:1},Ea=F({__name:"LicencesComponent",setup(e){const{t}=A({useScope:"global"}),n=K(),a=N(),s=O(()=>[{name:"pricePlan",required:!0,label:t("pricePlan"),align:"left",field:"pricePlan",sortable:!0},{name:"type",required:!0,label:t("type"),align:"left",field:"type",sortable:!0},{name:"invoiceNumber",align:"center",label:t("invoice"),field:"invoiceNumber",sortable:!0},{name:"price",align:"left",label:t("price"),field:"price",sortable:!0},{name:"startDate",align:"left",label:t("activated"),field:"startDate",sortable:!0},{name:"endDate",align:"left",label:t("expirationDate"),field:"endDate",sortable:!0},{name:"daysLeft",align:"left",label:t("daysExpiration"),field:"daysLeft",sortable:!0},{name:"status",align:"left",label:t("status"),field:"status"},{name:"actions",field:"actions",label:"",showDeleteBtn:!1,showPrintBtn:!1,showEditBtn:!1,align:"center"}]),o=O(()=>{const l=[];return a.licence.forEach(r=>{const u={};u.licenceId=r.licenceId,u.pricePlanId=r.pricePlanId,u.pricePlan=r.pricePlan,u.type=t(r.type),u.invoiceNumber=r.invoiceNumber==""?t("notPayed"):r.invoiceNumber,u.price=r.price+" \u20AC",u.tax=r.tax,u.startDate=y(r.startDate),u.endDate=y(r.endDate),u.daysLeft=H.isBetweenDates(Date.now(),r.startDate,r.endDate)?H.getDateDiff(r.endDate,Date.now(),"days"):H.getDateDiff(r.endDate,r.startDate,"days"),u.status=H.isBetweenDates(Date.now(),r.startDate,r.endDate)?t("activeStatus"):r.startDate>Date.now()?t("pendingStatus"):t("expiredStatus"),l.push(u)}),l}),y=l=>new Date(l).toISOString().split("T")[0].split("-").reverse().join("."),m=()=>{n.dialog({component:Ya}).onOk(async()=>{await a.fetchLicence(),n.notify({type:"positive",message:t("sentSuccessfully")})})},f=async l=>{const r="Are you sure you want to extend?",u="Extend License";n.dialog({component:et,componentProps:{text:r,title:u}}).onOk(async()=>{var _;n.loading.show();const g=new Ie;g.pricePlanId=l.pricePlanId,g.userId=(_=_e().authentication)==null?void 0:_.id,g.type=l.type.toLowerCase(),g.tax=l.tax,await a.addLicence(g),await a.fetchLicence(),n.loading.hide()})},$=async l=>{n.dialog({component:Na,componentProps:{payment:l}}).onOk(async()=>{await a.fetchLicence(),n.notify({type:"positive",message:t("sentSuccessfully")})})},c=async l=>{const r=await a.generateReceipt(l);if(r){const u=r.split(",")[1],g=atob(u),_=new Uint8Array(new ArrayBuffer(g.length));for(let k=0;k<g.length;k++)_[k]=g.charCodeAt(k);const L=new Blob([_],{type:"application/pdf"}),x=URL.createObjectURL(L);window.open(x,"_blank"),URL.revokeObjectURL(x)}};return a.fetchLicence(),(l,r)=>(D(),I(d(Ne),{flat:"",columns:s.value,inline:!1,"loading-label":d(t)("loadingData"),"no-data-label":d(t)("noDataAvailable"),"no-results-label":d(t)("noMatchedRecords"),rows:o.value,"rows-per-page-label":d(t)("recordsPerPage"),title:d(t)("myLicences")},{"search-append":h(()=>[i(Y,{flat:"",color:"primary",icon:"add",label:d(t)("addLicence"),onClick:m},null,8,["label"])]),"row-cell-invoiceNumber":h(({props:u})=>[u.row.pricePlan!=="Free"?(D(),b("div",Fa,[u.row.invoiceNumber!==d(t)("notPayed")?(D(),I(Y,{key:0,flat:"",label:u.row.invoiceNumber,onClick:g=>c(u.row.licenceId)},null,8,["label","onClick"])):(D(),I(Y,{key:1,flat:"",label:u.row.invoiceNumber},null,8,["label"]))])):(D(),b("div",Aa))]),"row-cell-status":h(({props:u})=>[i(Me,{color:u.row.status===d(t)("active")?"green":u.row.status===d(t)("pending")?"orange":"red",label:u.row.status},null,8,["color","label"])]),"row-cell-actions-prepend":h(({props:u})=>[u.row.invoiceNumber!==d(t)("notPayed")||u.row.pricePlan==="Free"?(D(),I(Y,{key:0,color:"green",size:"xs",onClick:g=>f(u.row)},{default:h(()=>[E(v(d(t)("extendLicence"))+" ",1),i(Ke,null,{default:h(()=>[E(v(d(t)("extendLicence")),1)]),_:1})]),_:2},1032,["onClick"])):(D(),I(Y,{key:1,label:d(t)("payNow"),color:"orange",size:"md",onClick:g=>$(u.row)},null,8,["label","onClick"]))]),_:1},8,["columns","loading-label","no-data-label","no-results-label","rows","rows-per-page-label","title"]))}}),Ba={class:"q-pa-md"},za={class:"q-gutter-y-md"},_n=F({__name:"UserProfilePage",setup(e){const{t}=A({useScope:"global"}),n=q("generalInfo");return(a,s)=>(D(),b("div",Ba,[p("div",za,[i(X,null,{default:h(()=>[i(Ue,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),class:"q-px-md","indicator-color":"primary",align:"left","narrow-indicator":""},{default:h(()=>[i(re,{name:"generalInfo",label:d(t)("generalInformation")},null,8,["label"]),i(re,{name:"licences",label:d(t)("myLicences")},null,8,["label"])]),_:1},8,["modelValue"]),i(U),i(Fe,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=o=>n.value=o),animated:""},{default:h(()=>[i(ue,{name:"generalInfo"},{default:h(()=>[i(oa)]),_:1}),i(ue,{name:"licences"},{default:h(()=>[i(Ea)]),_:1})]),_:1},8,["modelValue"])]),_:1})])]))}});export{_n as default};
