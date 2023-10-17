import{Q as xe}from"./QSpace.3975ae39.js";import{$ as Le,C as Pe,B as v,a8 as Ee,L as ne,a7 as Z,Q as z,M as Ne,z as He,ah as Oe,aj as Qe,bS as Fe,r as L,c as C,w as ee,o as Re,A as Ie,O as Ae,J as Ue,a0 as je,be as De,d as W,bT as Me,_ as Ke,g as P,l as G,bo as We,k as Ge,j as T,bk as Je,h as j,i as p,bN as O,v as D,bh as Ve,u as ie,p as d,aN as Xe,aB as te,m as S,t as ae,aL as Q,aC as Ye,I as Ze,aD as re,a as et,b as tt,aP as ot,s as M,n as lt,D as nt,bp as it}from"./index.89b9ec57.js";import{Q as at,a as rt}from"./QBtnDropdown.426df4de.js";import{Q as st}from"./QForm.f06198f3.js";import{Q as ut}from"./QTooltip.294f16a1.js";import{Q as dt}from"./QItem.63231d09.js";import{a as oe}from"./QMenu.bf3c5da3.js";import{u as ct,a as pt,b as ft}from"./use-fullscreen.76803ed0.js";import{e as mt}from"./extend.e55e2e7d.js";import{Q as ht}from"./QInnerLoading.8283329e.js";import{Q as gt}from"./QPage.012d8f48.js";import{r as E}from"./validation.b28ada22.js";import{Q as vt}from"./QSelect.0fc3481c.js";import{u as se,E as bt}from"./emailtemplate.0697aee8.js";import{u as ue}from"./use-quasar.9ffcffad.js";import{C as yt}from"./ClosePopup.345e3494.js";import{u as le}from"./use-dialog-plugin-component.c5561868.js";import"./position-engine.46944299.js";import"./rtl.b51694b1.js";import"./format.2bc25e5f.js";function de(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const i=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,a=i.display;return a==="block"||a==="table"?e:de(e.parentNode)}function K(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function ce(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let i=0;t.count!==0&&i<e.childNodes.length;i++)o=ce(e.childNodes[i],t,o);return o}const kt=/^https?:\/\//;class Ct{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(K(t.anchorNode,this.el,!0)&&K(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?de(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),i=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),i.removeAllRanges(),i.addRange(o)):(i.selectAllChildren(this.el),i.collapseToEnd())}savePosition(){let t=-1,o;const i=document.getSelection(),a=this.el.parentNode;if(i.focusNode&&K(i.focusNode,a))for(o=i.focusNode,t=i.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),i=ce(this.el,{count:this.savedPos});i&&(i.collapse(!1),o.removeAllRanges(),o.addRange(i))}}hasParent(t,o){const i=o?this.parent:this.blockParent;return i!==null?i.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,i=this.parent){return i===null?!1:t.includes(i.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,i.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const i=document.queryCommandValue(t);return i===`"${o}"`||i===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(t);return o!==void 0?a===o:a}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,i=Le){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){i();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(t==="link"){const a=this.getParentAttribute("href");if(a===null){const f=this.selectWord(this.selection),r=f?f.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=kt.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(f.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),i();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),i();return}document.execCommand(t,!1,o),i()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const i=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=t.focusNode,f=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",i[0],"character"),t.modify("move",i[1],"word"),t.extend(a,f),t.modify("extend",i[1],"character"),t.modify("extend",i[0],"word"),t}}function pe(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function J(e){return v("div",{class:"q-editor__toolbar-group"},e)}function fe(e,t,o,i=!1){const a=i||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),f=[];if(t.tip&&e.$q.platform.is.desktop){const r=t.key?v("div",[v("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;f.push(v(ut,{delay:1e3},()=>[v("div",{innerHTML:t.tip}),r]))}return v(z,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:a?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:a&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(r){o&&o(),pe(r,t,e)}},()=>f)}function wt(e,t){const o=t.list==="only-icons";let i=t.label,a=t.icon!==null?t.icon:void 0,f,r;function m(){$.component.proxy.hide()}if(o)r=t.options.map(u=>{const k=u.type===void 0?e.caret.is(u.cmd,u.param):!1;return k&&(i=u.tip,a=u.icon!==null?u.icon:void 0),fe(e,u,m,k)}),f=e.toolbarBackgroundClass.value,r=[J(r)];else{const u=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,k=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,g=t.list==="no-icons";r=t.options.map(s=>{const b=s.disable?s.disable(e):!1,_=s.type===void 0?e.caret.is(s.cmd,s.param):!1;_&&(i=s.tip,a=s.icon!==null?s.icon:void 0);const N=s.htmlTip;return v(dt,{active:_,activeClass:u,clickable:!0,disable:b,dense:!0,onClick(x){m(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),pe(x,s,e)}},()=>[g===!0?null:v(oe,{class:_?u:k,side:!0},()=>v(Ne,{name:s.icon!==null?s.icon:void 0})),v(oe,N?()=>v("div",{class:"text-no-wrap",innerHTML:s.htmlTip}):s.tip?()=>v("div",{class:"text-no-wrap"},s.tip):void 0)])}),f=[e.toolbarBackgroundClass.value,k]}const h=t.highlight&&i!==t.label,$=v(at,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:h?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:h&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:i,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:a,contentClass:f,onShow:u=>e.emit("dropdownShow",u),onHide:u=>e.emit("dropdownHide",u),onBeforeShow:u=>e.emit("dropdownBeforeShow",u),onBeforeHide:u=>e.emit("dropdownBeforeHide",u)},()=>r);return $}function St(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>J(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?Pe(e.slots[o.slot]):o.type==="dropdown"?wt(e,o):fe(e,o))))}function Tt(e,t,o,i={}){const a=Object.keys(i);if(a.length===0)return{};const f={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return a.forEach(r=>{const m=i[r];f[r]={cmd:"fontName",param:m,icon:o,tip:m,htmlTip:`<font face="${m}">${m}</font>`}}),f}function zt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const i=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[v("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),v("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{Ee(a),o=a.target.value},onKeydown:a=>{if(ne(a)!==!0)switch(a.keyCode){case 13:return Z(a),i();case 27:Z(a),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),J([v(z,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),v(z,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:i})])]}}var $t=He({name:"QEditor",props:{...Oe,...ct,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...pt,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o,attrs:i}){const{proxy:a,vnode:f}=Ae(),{$q:r}=a,m=Qe(e,r),{inFullscreen:h,toggleFullscreen:$}=ft(),u=Fe(i,f),k=L(null),g=L(null),s=L(null),b=L(!1),_=C(()=>!e.readonly&&!e.disable);let N,x,F=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),N=window.getComputedStyle(document.body).fontFamily;const R=C(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),me=C(()=>{const l=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:l,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!_.value,size:"sm"}}),H=C(()=>{const l=r.lang.editor,n=r.iconSet.editor;return{bold:{cmd:"bold",icon:n.bold,tip:l.bold,key:66},italic:{cmd:"italic",icon:n.italic,tip:l.italic,key:73},strike:{cmd:"strikeThrough",icon:n.strikethrough,tip:l.strikethrough,key:83},underline:{cmd:"underline",icon:n.underline,tip:l.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:n.unorderedList,tip:l.unorderedList},ordered:{cmd:"insertOrderedList",icon:n.orderedList,tip:l.orderedList},subscript:{cmd:"subscript",icon:n.subscript,tip:l.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:n.superscript,tip:l.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:c=>c.caret&&!c.caret.can("link"),icon:n.hyperlink,tip:l.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:n.toggleFullscreen,tip:l.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:n.viewSource,tip:l.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:n.quote,tip:l.quote,key:81},left:{cmd:"justifyLeft",icon:n.left,tip:l.left},center:{cmd:"justifyCenter",icon:n.center,tip:l.center},right:{cmd:"justifyRight",icon:n.right,tip:l.right},justify:{cmd:"justifyFull",icon:n.justify,tip:l.justify},print:{type:"no-state",cmd:"print",icon:n.print,tip:l.print,key:80},outdent:{type:"no-state",disable:c=>c.caret&&!c.caret.can("outdent"),cmd:"outdent",icon:n.outdent,tip:l.outdent},indent:{type:"no-state",disable:c=>c.caret&&!c.caret.can("indent"),cmd:"indent",icon:n.indent,tip:l.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:n.removeFormat,tip:l.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:n.hr,tip:l.hr},undo:{type:"no-state",cmd:"undo",icon:n.undo,tip:l.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:n.redo,tip:l.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:n.heading1||n.heading,tip:l.heading1,htmlTip:`<h1 class="q-ma-none">${l.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:n.heading2||n.heading,tip:l.heading2,htmlTip:`<h2 class="q-ma-none">${l.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:n.heading3||n.heading,tip:l.heading3,htmlTip:`<h3 class="q-ma-none">${l.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:n.heading4||n.heading,tip:l.heading4,htmlTip:`<h4 class="q-ma-none">${l.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:n.heading5||n.heading,tip:l.heading5,htmlTip:`<h5 class="q-ma-none">${l.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:n.heading6||n.heading,tip:l.heading6,htmlTip:`<h6 class="q-ma-none">${l.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:n.heading,tip:l.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:n.code,htmlTip:`<code>${l.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:n.size1||n.size,tip:l.size1,htmlTip:`<font size="1">${l.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:n.size2||n.size,tip:l.size2,htmlTip:`<font size="2">${l.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:n.size3||n.size,tip:l.size3,htmlTip:`<font size="3">${l.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:n.size4||n.size,tip:l.size4,htmlTip:`<font size="4">${l.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:n.size5||n.size,tip:l.size5,htmlTip:`<font size="5">${l.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:n.size6||n.size,tip:l.size6,htmlTip:`<font size="6">${l.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:n.size7||n.size,tip:l.size7,htmlTip:`<font size="7">${l.size7}</font>`}}}),V=C(()=>{const l=e.definitions||{},n=e.definitions||e.fonts?mt(!0,{},H.value,l,Tt(N,r.lang.editor.defaultFont,r.iconSet.editor.font,e.fonts)):H.value;return e.toolbar.map(c=>c.map(y=>{if(y.options)return{type:"dropdown",icon:y.icon,label:y.label,size:"sm",dense:!0,fixedLabel:y.fixedLabel,fixedIcon:y.fixedIcon,highlight:y.highlight,list:y.list,options:y.options.map(_e=>n[_e])};const B=n[y];return B?B.type==="no-state"||l[y]&&(B.cmd===void 0||H.value[B.cmd]&&H.value[B.cmd].type==="no-state")?B:Object.assign({type:"toggle"},B):{type:"slot",slot:y}}))}),w={$q:r,props:e,slots:t,emit:o,inFullscreen:h,toggleFullscreen:$,runCmd:A,isViewingSource:b,editLinkUrl:s,toolbarBackgroundClass:R,buttonProps:me,contentRef:g,buttons:V,setContent:I};ee(()=>e.modelValue,l=>{F!==l&&(F=l,I(l,!0))}),ee(s,l=>{o(`link-${l?"Show":"Hide"}`)});const he=C(()=>e.toolbar&&e.toolbar.length!==0),ge=C(()=>{const l={},n=c=>{c.key&&(l[c.key]={cmd:c.cmd,param:c.param})};return V.value.forEach(c=>{c.forEach(y=>{y.options?y.options.forEach(n):n(y)})}),l}),ve=C(()=>h.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),be=C(()=>`q-editor q-editor--${b.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(h.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(m.value===!0?" q-editor--dark q-dark":"")),ye=C(()=>[e.contentClass,"q-editor__content",{col:h.value,"overflow-auto":h.value||e.maxHeight}]),ke=C(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function Ce(){if(g.value!==null){const l=`inner${b.value===!0?"Text":"HTML"}`,n=g.value[l];n!==e.modelValue&&(F=n,o("update:modelValue",n))}}function we(l){if(o("keydown",l),l.ctrlKey!==!0||ne(l)===!0){q();return}const n=l.keyCode,c=ge.value[n];if(c!==void 0){const{cmd:y,param:B}=c;Ue(l),A(y,B,!1)}}function Se(l){q(),o("click",l)}function Te(l){if(g.value!==null){const{scrollTop:n,scrollHeight:c}=g.value;x=c-n}w.caret.save(),o("blur",l)}function ze(l){je(()=>{g.value!==null&&x!==void 0&&(g.value.scrollTop=g.value.scrollHeight-x)}),o("focus",l)}function $e(l){const n=k.value;if(n!==null&&n.contains(l.target)===!0&&(l.relatedTarget===null||n.contains(l.relatedTarget)!==!0)){const c=`inner${b.value===!0?"Text":"HTML"}`;w.caret.restorePosition(g.value[c].length),q()}}function Be(l){const n=k.value;n!==null&&n.contains(l.target)===!0&&(l.relatedTarget===null||n.contains(l.relatedTarget)!==!0)&&(w.caret.savePosition(),q())}function X(){x=void 0}function Y(l){w.caret.save()}function I(l,n){if(g.value!==null){n===!0&&w.caret.savePosition();const c=`inner${b.value===!0?"Text":"HTML"}`;g.value[c]=l,n===!0&&(w.caret.restorePosition(g.value[c].length),q())}}function A(l,n,c=!0){U(),w.caret.restore(),w.caret.apply(l,n,()=>{U(),w.caret.save(),c&&q()})}function q(){setTimeout(()=>{s.value=null,a.$forceUpdate()},1)}function U(){De(()=>{g.value!==null&&g.value.focus({preventScroll:!0})})}function qe(){return g.value}return Re(()=>{w.caret=a.caret=new Ct(g.value,w),I(e.modelValue),q(),document.addEventListener("selectionchange",Y)}),Ie(()=>{document.removeEventListener("selectionchange",Y)}),Object.assign(a,{runCmd:A,refreshToolbar:q,focus:U,getContentEl:qe}),()=>{let l;if(he.value){const n=[v("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+R.value},St(w))];s.value!==null&&n.push(v("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+R.value},zt(w))),l=v("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},n)}return v("div",{ref:k,class:be.value,style:{height:h.value===!0?"100%":null},...ke.value,onFocusin:$e,onFocusout:Be},[l,v("div",{ref:g,style:ve.value,class:ye.value,contenteditable:_.value,placeholder:e.placeholder,...u.listeners.value,onInput:Ce,onKeydown:we,onClick:Se,onBlur:Te,onFocus:ze,onMousedown:X,onTouchstartPassive:X})])}}});const Bt=W({name:"FilteredSelect",emits:["add","autofill","update:model-value"],props:{addButton:{type:Boolean,default:!1},autofill:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},modelValue:{required:!0},multiple:{type:Boolean,default:!1},optionLabel:{type:String,default:"label"},optionValue:{type:String,default:"value"},options:{type:Array,required:!0},readonly:{type:Boolean,default:!1},selectAllButtons:{type:Boolean,default:!0}},setup(e,{emit:t}){const o=C({get(){return e.modelValue},set(m){t("update:model-value",m)}}),i=L([]);function a(m="",h){if(m===""){h(()=>{i.value=e.options});return}const $=m.toLowerCase();h(()=>{i.value=e.options.filter(u=>u[e.optionLabel].toLowerCase().indexOf($)>-1)})}Me(()=>{e.options?i.value=e.options:i.value=[]});function f(){let m=[];i.value.forEach(h=>{m.push(h.value)}),o.value=m}function r(){o.value=[]}return{filteredOptions:i,value:o,emit:t,filterOptions:a,selectAll:f,deselectAll:r}}}),qt={key:0},_t={key:1},xt={key:2};function Lt(e,t,o,i,a,f){return P(),G(vt,Ve(e.$props,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value=r),"emit-value":"","input-debounce":"0","map-options":"","use-input":"","option-label":e.optionLabel,"option-value":e.optionValue,options:e.filteredOptions,onFilter:e.filterOptions}),We({append:T(()=>[e.selectAllButtons&&e.$props.multiple&&e.filteredOptions.length>0&&!e.$props.readonly&&!e.$props.disable?(P(),j("div",qt,[p(z,{flat:"",round:"",icon:"done_all",color:"primary",size:"xs",onClick:O(e.selectAll,["stop"])},null,8,["onClick"]),p(z,{flat:"",round:"",icon:"clear",color:"red",size:"xs",onClick:O(e.deselectAll,["stop"])},null,8,["onClick"])])):D("",!0),e.addButton&&!e.$props.readonly&&!e.$props.disable?(P(),j("div",_t,[p(z,{flat:"",round:"",icon:"add",color:"primary",size:"xs",onClick:t[0]||(t[0]=O(r=>e.emit("add"),["stop"]))})])):D("",!0),e.autofill&&e.modelValue?(P(),j("div",xt,[p(z,{color:"primary",flat:"",icon:"download",round:"",size:"sm",onClick:t[1]||(t[1]=O(r=>e.emit("autofill",e.modelValue),["stop"]))})])):D("",!0)]),_:2},[Ge(e.$slots,(r,m)=>({name:m,fn:T(()=>[Je(e.$slots,m)])}))]),1040,["modelValue","option-label","option-value","options","onFilter"])}var Pt=Ke(Bt,[["render",Lt]]);const Et={class:"text-h6"},Nt={class:"col-6 col-xs-12 col-sm-6 col-md-6 col-lg-4"},Ht=W({__name:"ModalEmailEntry",props:{templateId:{}},emits:[...le.emits],setup(e){const t=e,{t:o}=ie({useScope:"global"}),{dialogRef:i,onDialogHide:a,onDialogOK:f,onDialogCancel:r}=le(),m=L(""),h=()=>{const $=ue();if(!m.value){$.notify({type:"warning",message:o("emailIsMissing")});return}se().sendTestEmail(m.value,t.templateId),f()};return($,u)=>(P(),G(Xe,{persistent:"",ref_key:"dialogRef",ref:i,onHide:d(a)},{default:T(()=>[p(re,null,{default:T(()=>[p(te,null,{default:T(()=>[S("div",Et,ae(d(o)("enterTestMail")),1)]),_:1}),p(te,null,{default:T(()=>[S("div",Nt,[p(Q,{outlined:"",label:`${d(o)("email")} *`,modelValue:m.value,"onUpdate:modelValue":u[0]||(u[0]=k=>m.value=k),rules:[d(E)]},null,8,["label","modelValue","rules"])])]),_:1}),p(Ye,{class:"q-pb-md",align:"right"},{default:T(()=>[p(z,{flat:"",label:d(o)("send"),color:"positive",onClick:u[1]||(u[1]=k=>h())},null,8,["label"]),Ze(p(z,{flat:"",label:d(o)("cancel"),color:"negative",onClick:u[2]||(u[2]=k=>d(r)())},null,8,["label"]),[[yt]])]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),Ot={class:"row q-mb-sm"},Qt={class:"text-h6"},Ft={class:"row q-col-gutter-md"},Rt={class:"col-6 col-xs-12 col-sm-6 col-md-6 col-lg-4"},It={class:"col-6 col-xs-12 col-sm-6 col-md-6 col-lg-4"},At={class:"row q-col-gutter-md"},Ut={class:"col-6 col-xs-12 col-sm-6 col-md-6 col-lg-4"},jt={class:"col-6 col-xs-12 col-sm-6 col-md-6 col-lg-4"},Dt={class:"row"},Mt={class:"col-12"},fo=W({__name:"EmailTemplatesModify",props:{backPath:{default:""}},setup(e){const t=e,{t:o}=ie({useScope:"global"}),i=ue(),a=et(),f=tt(),r=se(),m=C(()=>r.emailServiceOptions),h=C(()=>r.emailTemplate),$=()=>{i.dialog({component:Ht,componentProps:{templateId:f.params.id}})},u=async()=>{if(!r.emailTemplate.userId){const g=it();r.emailTemplate.userId=g.user.id}await r.saveEmailTemplate(),f.params.id==="null"&&await a.replace({params:{id:r.emailTemplate.id}})};function k(){t.backPath?a.push(t.backPath):a.back()}return ot(()=>{r.emailTemplate=new bt,f.params.id&&r.getEmailTemplate(f.params.id)}),r.fetchEmailServiceOptions(),(g,s)=>(P(),G(gt,{class:"q-pa-md"},{default:T(()=>[p(re,{class:lt(d(i).dark.isActive?"q-card-bg-dark no-shadow":"q-card-bg no-shadow")},{default:T(()=>[S("div",Ot,[S("span",Qt,ae(d(o)("emailTemplate")),1),p(xe),p(M,{vertical:""}),p(rt,{flat:""},{default:T(()=>[p(z,{flat:"",color:"warning",icon:"mail",label:d(o)("sendTestMail"),onClick:s[0]||(s[0]=b=>$())},null,8,["label"]),p(M,{vertical:""}),p(z,{flat:"",color:"positive",icon:"save_alt",label:d(o)("save"),onClick:s[1]||(s[1]=b=>u())},null,8,["label"]),p(M,{vertical:""}),p(z,{flat:"",color:"primary",icon:"exit_to_app",label:d(o)("exit"),onClick:s[2]||(s[2]=b=>k())},null,8,["label"])]),_:1})]),p(st,{ref:"formForSubmit",class:"col-xs-12 col-md-9 col-lg-10 q-mb-md"},{default:T(()=>[S("div",Ft,[S("div",Rt,[p(Q,{dense:"",outlined:"",label:`${d(o)("templateName")} *`,modelValue:h.value.templateName,"onUpdate:modelValue":s[3]||(s[3]=b=>h.value.templateName=b),rules:[d(E)]},null,8,["label","modelValue","rules"])]),S("div",It,[p(Pt,{dense:"",outlined:"","emit-value":"",label:`${d(o)("emailService")} *`,"map-options":"",modelValue:h.value.serviceId,"onUpdate:modelValue":s[4]||(s[4]=b=>h.value.serviceId=b),"hide-selected":!1,loading:!1,options:m.value,rules:[d(E)]},null,8,["label","modelValue","options","rules"])])]),S("div",At,[S("div",Ut,[p(Q,{dense:"",outlined:"",label:`${d(o)("subject")} *`,modelValue:h.value.subject,"onUpdate:modelValue":s[5]||(s[5]=b=>h.value.subject=b),rules:[d(E)]},null,8,["label","modelValue","rules"])]),S("div",jt,[p(Q,{dense:"",outlined:"",label:`${d(o)("fromName")} *`,modelValue:h.value.fromName,"onUpdate:modelValue":s[6]||(s[6]=b=>h.value.fromName=b),rules:[d(E)]},null,8,["label","modelValue","rules"])])])]),_:1},512),S("div",Dt,[S("div",Mt,[p($t,{modelValue:h.value.text,"onUpdate:modelValue":s[7]||(s[7]=b=>h.value.text=b),"min-height":"40rem",dense:d(i).screen.lt.md,toolbar:[[{label:d(i).lang.editor.align,icon:d(i).iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["fullscreen"],[{label:d(i).lang.editor.formatting,icon:d(i).iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:d(i).lang.editor.fontSize,icon:d(i).iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:d(i).lang.editor.defaultFont,icon:d(i).iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["modelValue","dense","toolbar"])])])]),_:1},8,["class"]),p(ht,{showing:d(r).loading},{default:T(()=>[p(nt,{color:"primary",size:"3em",thickness:10})]),_:1},8,["showing"])]),_:1}))}});export{fo as default};