(function(h,v){typeof exports=="object"&&typeof module!="undefined"?v(exports):typeof define=="function"&&define.amd?define(["exports"],v):(h=typeof globalThis!="undefined"?globalThis:h||self,v(h.InputField={}))})(this,function(h){"use strict";var v={props:{dropShadow:[Boolean,String],dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:[Boolean,String],shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const t=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,e=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${t}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${e}`]:!!this.shadow}}}};/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */var m=function(){return m=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)};function L(t){return t.toLowerCase()}var B=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],V=/[^A-Z0-9]+/gi;function H(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?B:r,i=e.stripRegexp,o=i===void 0?V:i,s=e.transform,c=s===void 0?L:s,a=e.delimiter,u=a===void 0?" ":a,d=$($(t,n,"$1\0$2"),o,"\0"),f=0,l=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(l-1)==="\0";)l--;return d.slice(f,l).split("\0").map(c).join(u)}function $(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,i){return n.replace(i,r)},t)}function M(t,e){return e===void 0&&(e={}),H(t,m({delimiter:"."},e))}function A(t,e){return e===void 0&&(e={}),M(t,m({delimiter:"-"},e))}const y={};function _(...t){if(!t.length)return y;const[e,r]=t;return typeof e=="string"?typeof y[e]!="undefined"?y[e]:r:Array.isArray(e)?e.reduce((n,i)=>Object.assign(n,{[i]:y[i]}),{}):Object.assign(y,...t)}function x(t,e,r="-"){const n=e.toString().replace(new RegExp(`^${t}${r}?`),"");return[A(n),t].filter(i=>!!i).join(r)}function E(t){return!Array.isArray(t)&&typeof t=="object"}var W={directives:{bindEvents:{bind(t,e,r){if(t.addEventListener("focus",()=>{r.context.hasFocus=!0}),t.addEventListener("blur",()=>{r.context.hasFocus=!1}),t.addEventListener(t.tagName==="SELECT"?"change":"input",n=>{r.context.isEmpty=!t.value,r.context.currentValue=t.value}),r.context.hasChanged=!!t.value,r.context.bindEvents.forEach(n=>{t.addEventListener(n,i=>{r.context.$emit(n,i)})}),t.tagName==="SELECT"){const n=t.querySelector('[value=""]');n&&n.value===t.value&&(r.context.defaultEmpty=!0)}}}},mixins:[v],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},animated:{type:Boolean,default:()=>_("animated",!1)},bindEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},componentName:{type:String,default(){return this.$options.name}},defaultControlClass:{type:String,default:()=>_("defaultControlClass","form-control")},defaultValue:{default:()=>_("defaultValue",null)},error:[String,Array,Boolean],errors:{type:[Array,Object,Boolean],default(){return{}}},feedback:[String,Array],group:{type:Boolean,default:()=>_("group",!0)},helpText:[Number,String],hideLabel:Boolean,indicator:{type:String,default:()=>_("indicator","spinner")},indicatorSize:String,inline:Boolean,invalid:Boolean,label:[Number,String],labelClass:{type:[Object,String],default:()=>_("labelClass","form-label")},pill:Boolean,plaintext:Boolean,size:String,spacing:String,valid:Boolean,value:{default:null}},data(){return{currentValue:this.value||this.defaultValue,defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!(this.value||this.defaultValue)}},computed:{id(){return this.$attrs.id||this.$attrs.name},controlAttributes(){return Object.keys(this.$attrs).concat([["id",this.id],["class",this.controlClasses]]).reduce((t,e)=>(Array.isArray(e)?t[e[0]]=e[1]:t[e]=this[e]||this.$attrs[e],t),{})},controlClass(){return this.defaultControlClass},controlSizeClass(){return x(this.size,this.controlClass)},formGroupClasses(){return{[A(this.componentName)]:!!this.componentName,[this.size&&x(this.size,this.componentName)]:!!this.size,animated:this.animated,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&x(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback)}},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error==="")return null;if(this.error)return this.error;const t=this.getFieldErrors();return Array.isArray(t)?t.filter(e=>e&&typeof e=="string").join("<br>"):t},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.shouldChangeOnFocus()&&(this.hasChanged=!0)},value(t){this.currentValue=t},currentValue(){this.hasChanged=!0},defaultEmpty(){this.hasChanged=!0}},mounted(){this.value===null&&this.defaultValue!==null&&this.$emit("input",this.defaultValue)},methods:{blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let t=this.error||this.errors;return this.errors&&E(this.errors)&&(t=this.errors[this.$attrs.name||this.$attrs.id]),!t||Array.isArray(t)||E(t)?t:[t]},shouldChangeOnFocus(){return!this.getInputField().readOnly},onInput(t){this.$emit("input",t.target.value),this.$emit("update:value",t.target.value)}}};function g(t){return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(t)}function Z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,e,r){return e&&F(t.prototype,e),r&&F(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function w(t,e){return w=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},w(t,e)}function G(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(t,e,r){return G()?b=Reflect.construct:b=function(i,o,s){var c=[null];c.push.apply(c,o);var a=Function.bind.apply(i,c),u=new a;return s&&w(u,s.prototype),u},b.apply(null,arguments)}function R(t,e){return U(t)||q(t,e)||X(t,e)||J()}function U(t){if(Array.isArray(t))return t}function q(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],i=!0,o=!1,s,c;try{for(r=r.call(t);!(i=(s=r.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(a){o=!0,c=a}finally{try{!i&&r.return!=null&&r.return()}finally{if(o)throw c}}return n}}function X(t,e){if(!!t){if(typeof t=="string")return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}}function O(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C=function(){return C=Object.assign||function(r){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},C.apply(this,arguments)};function K(t){return t.toLowerCase()}var Q=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],Y=/[^A-Z0-9]+/gi;function tt(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?Q:r,i=e.stripRegexp,o=i===void 0?Y:i,s=e.transform,c=s===void 0?K:s,a=e.delimiter,u=a===void 0?" ":a,d=T(T(t,n,"$1\0$2"),o,"\0"),f=0,l=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(l-1)==="\0";)l--;return d.slice(f,l).split("\0").map(c).join(u)}function T(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,i){return n.replace(i,r)},t)}function et(t,e){return e===void 0&&(e={}),tt(t,C({delimiter:"."},e))}function S(t,e){return e===void 0&&(e={}),et(t,C({delimiter:"-"},e))}var P=function(){function t(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Z(this,t),this.components={},Object.entries(r).forEach(function(n){var i=R(n,2),o=i[0],s=i[1];e.register(o,s)})}return D(t,[{key:"validate",value:function(r){if(g(r)==="object"||typeof r=="function")return r;throw new Error("Invalid data type `".concat(g(r),"`. Should be type `object` or `function`."))}},{key:"get",value:function(r){var n=this.components[r=S(r)];if(n)return n;throw new Error('"'.concat(r,'" has not been registered yet!'))}},{key:"register",value:function(r,n){var i=this;return g(r)==="object"?(Object.entries(r).forEach(function(o){var s=R(o,2),c=s[0],a=s[1];i.register(S(c),a)}),this):(this.components[S(r)]=this.validate(n),this)}},{key:"remove",value:function(r){return delete this.components[S(r)],this}},{key:"reset",value:function(){return this.components={},this}}]),t}();function rt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return b(P,e)}const k=rt();var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"activity-indicator",class:t.classes,style:t.style},[r("div",{staticClass:"activity-indicator-content"},[r(t.component,{tag:"component",staticClass:"mx-auto"}),t.label?r("div",{staticClass:"activity-indicator-label"},[t._v(" "+t._s(t.label)+" ")]):t._e()],1)])},it=[],vt="";function j(t,e,r,n,i,o,s,c){var a=typeof t=="function"?t.options:t;e&&(a.render=e,a.staticRenderFns=r,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId="data-v-"+o);var u;if(s?(u=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),i&&i.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(s)},a._ssrRegister=u):i&&(u=c?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(a.functional){a._injectStyles=u;var d=a.render;a.render=function(pt,N){return u.call(N),d(pt,N)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:a}}function p(t,e="px"){return t!=null&&t!==!1&&isFinite(t)?`${t}${e}`:t}const at={name:"ActivityIndicator",props:{absolute:Boolean,center:Boolean,label:String,size:{type:String,default:"md"},registry:{type:P,default(){return k}},type:{type:String,required:!0},height:[String,Number],maxHeight:[String,Number],minHeight:[String,Number],width:[String,Number],maxWidth:[String,Number],minWidth:[String,Number]},computed:{classes(){return{"activity-indicator-center":this.center,"activity-indicator-absolute":this.absolute,[this.size&&`activity-indicator-${this.size}`]:!!this.size}},style(){return{width:p(this.width),maxWidth:p(this.maxWidth),minWidth:p(this.minWidth),height:p(this.height),maxHeight:p(this.maxHeight),minHeight:p(this.minHeight)}},component(){return()=>{const t=k.get(this.type);return t instanceof Promise?t:typeof t=="function"?t():Promise.resolve(t)}}}},I={};var st=j(at,nt,it,!1,ot,null,null,null);function ot(t){for(let e in I)this[e]=I[e]}var lt=function(){return st.exports}(),yt="",gt="",mt="",bt="",Ct="",St="",xt="",wt="",$t="",At="",Et="",Ft="",Rt="",Ot="",ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.formGroupClasses},[t._t("label",function(){return[t.label?r("label",{ref:"label",class:t.labelClass,attrs:{for:t.id},domProps:{innerHTML:t._s(t.label)},on:{click:t.focus}}):t._e()]}),r("div",{staticClass:"form-group-inner"},[t._t("control",function(){return[t.$slots.icon?r("div",{staticClass:"form-group-inner-icon",on:{click:t.focus}},[t._t("icon")],2):t._e(),r("input",t._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",domProps:{value:t.currentValue},on:{input:t.onInput}},"input",t.controlAttributes,!1))]}),t._t("activity",function(){return[r("transition",{attrs:{name:"input-field-fade"}},[t.activity?r("activity-indicator",{key:"activity",ref:"activity",attrs:{type:t.indicator,size:t.indicatorSize||t.size}}):t._e()],1)]})],2),t._t("feedback",function(){return[t.invalidFeedback?r("div",{staticClass:"invalid-feedback",attrs:{invalid:""},domProps:{innerHTML:t._s(t.invalidFeedback)}}):t.validFeedback?r("div",{staticClass:"valid-feedback",attrs:{valid:""},domProps:{innerHTML:t._s(t.validFeedback)}}):t._e()]}),t._t("help",function(){return[t.helpText?r("small",{ref:"help"},[t._v(" "+t._s(t.helpText)+" ")]):t._e()]})],2)},ct=[],Tt="";const dt={name:"InputField",components:{ActivityIndicator:lt},mixins:[W]},z={};var ft=j(dt,ut,ct,!1,ht,null,null,null);function ht(t){for(let e in z)this[e]=z[e]}var _t=function(){return ft.exports}();h.InputField=_t,Object.defineProperty(h,"__esModule",{value:!0}),h[Symbol.toStringTag]="Module"});
