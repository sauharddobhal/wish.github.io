function Zw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function eE(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var M={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),tE=Symbol.for("react.portal"),nE=Symbol.for("react.fragment"),rE=Symbol.for("react.strict_mode"),iE=Symbol.for("react.profiler"),sE=Symbol.for("react.provider"),oE=Symbol.for("react.context"),aE=Symbol.for("react.forward_ref"),lE=Symbol.for("react.suspense"),uE=Symbol.for("react.memo"),cE=Symbol.for("react.lazy"),np=Symbol.iterator;function fE(e){return e===null||typeof e!="object"?null:(e=np&&e[np]||e["@@iterator"],typeof e=="function"?e:null)}var Ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rg=Object.assign,Pg={};function Ni(e,t,n){this.props=e,this.context=t,this.refs=Pg,this.updater=n||Ag}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mg(){}Mg.prototype=Ni.prototype;function Yf(e,t,n){this.props=e,this.context=t,this.refs=Pg,this.updater=n||Ag}var Xf=Yf.prototype=new Mg;Xf.constructor=Yf;Rg(Xf,Ni.prototype);Xf.isPureReactComponent=!0;var rp=Array.isArray,Lg=Object.prototype.hasOwnProperty,Jf={current:null},Fg={key:!0,ref:!0,__self:!0,__source:!0};function Ug(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Lg.call(t,r)&&!Fg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lo,type:e,key:s,ref:o,props:i,_owner:Jf.current}}function hE(e,t){return{$$typeof:lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function dE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ip=/\/+/g;function bu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dE(""+e.key):t.toString(36)}function ia(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case lo:case tE:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+bu(o,0):r,rp(i)?(n="",e!=null&&(n=e.replace(ip,"$&/")+"/"),ia(i,t,n,"",function(u){return u})):i!=null&&(Zf(i)&&(i=hE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ip,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",rp(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+bu(s,a);o+=ia(s,t,n,l,i)}else if(l=fE(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+bu(s,a++),o+=ia(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Do(e,t,n){if(e==null)return e;var r=[],i=0;return ia(e,r,"","",function(s){return t.call(n,s,i++)}),r}function pE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},sa={transition:null},mE={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Jf};Y.Children={map:Do,forEach:function(e,t,n){Do(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Do(e,function(){t++}),t},toArray:function(e){return Do(e,function(t){return t})||[]},only:function(e){if(!Zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Ni;Y.Fragment=nE;Y.Profiler=iE;Y.PureComponent=Yf;Y.StrictMode=rE;Y.Suspense=lE;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mE;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rg({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Jf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Lg.call(t,l)&&!Fg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:lo,type:e.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:oE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sE,_context:e},e.Consumer=e};Y.createElement=Ug;Y.createFactory=function(e){var t=Ug.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:aE,render:e}};Y.isValidElement=Zf;Y.lazy=function(e){return{$$typeof:cE,_payload:{_status:-1,_result:e},_init:pE}};Y.memo=function(e,t){return{$$typeof:uE,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=sa.transition;sa.transition={};try{e()}finally{sa.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return ot.current.useCallback(e,t)};Y.useContext=function(e){return ot.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};Y.useEffect=function(e,t){return ot.current.useEffect(e,t)};Y.useId=function(){return ot.current.useId()};Y.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return ot.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};Y.useRef=function(e){return ot.current.useRef(e)};Y.useState=function(e){return ot.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return ot.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(M);const Ts=Dg(M.exports),sp=Zw({__proto__:null,default:Ts},[M.exports]);var wc={},eh={exports:{}},xt={},Vg={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,A){var P=S.length;S.push(A);e:for(;0<P;){var W=P-1>>>1,ge=S[W];if(0<i(ge,A))S[W]=A,S[P]=ge,P=W;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var A=S[0],P=S.pop();if(P!==A){S[0]=P;e:for(var W=0,ge=S.length,Lr=ge>>>1;W<Lr;){var fn=2*(W+1)-1,Hi=S[fn],hn=fn+1,Fr=S[hn];if(0>i(Hi,P))hn<ge&&0>i(Fr,Hi)?(S[W]=Fr,S[hn]=P,W=hn):(S[W]=Hi,S[fn]=P,W=fn);else if(hn<ge&&0>i(Fr,P))S[W]=Fr,S[hn]=P,W=hn;else break e}}return A}function i(S,A){var P=S.sortIndex-A.sortIndex;return P!==0?P:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,y=!1,v=!1,$=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=S)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function w(S){if(v=!1,m(S),!y)if(n(l)!==null)y=!0,he(x);else{var A=n(u);A!==null&&E(w,A.startTime-S)}}function x(S,A){y=!1,v&&(v=!1,p(D),D=-1),g=!0;var P=d;try{for(m(A),f=n(l);f!==null&&(!(f.expirationTime>A)||S&&!yt());){var W=f.callback;if(typeof W=="function"){f.callback=null,d=f.priorityLevel;var ge=W(f.expirationTime<=A);A=e.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(l)&&r(l),m(A)}else r(l);f=n(l)}if(f!==null)var Lr=!0;else{var fn=n(u);fn!==null&&E(w,fn.startTime-A),Lr=!1}return Lr}finally{f=null,d=P,g=!1}}var N=!1,C=null,D=-1,ue=5,G=-1;function yt(){return!(e.unstable_now()-G<ue)}function Yt(){if(C!==null){var S=e.unstable_now();G=S;var A=!0;try{A=C(!0,S)}finally{A?cn():(N=!1,C=null)}}else N=!1}var cn;if(typeof h=="function")cn=function(){h(Yt)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,K=H.port2;H.port1.onmessage=Yt,cn=function(){K.postMessage(null)}}else cn=function(){$(Yt,0)};function he(S){C=S,N||(N=!0,cn())}function E(S,A){D=$(function(){S(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,he(x))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(S){switch(d){case 1:case 2:case 3:var A=3;break;default:A=d}var P=d;d=A;try{return S()}finally{d=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=d;d=S;try{return A()}finally{d=P}},e.unstable_scheduleCallback=function(S,A,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,S){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=P+ge,S={id:c++,callback:A,priorityLevel:S,startTime:P,expirationTime:ge,sortIndex:-1},P>W?(S.sortIndex=P,t(u,S),n(l)===null&&S===n(u)&&(v?(p(D),D=-1):v=!0,E(w,P-W))):(S.sortIndex=ge,t(l,S),y||g||(y=!0,he(x))),S},e.unstable_shouldYield=yt,e.unstable_wrapCallback=function(S){var A=d;return function(){var P=d;d=A;try{return S.apply(this,arguments)}finally{d=P}}}})(zg);(function(e){e.exports=zg})(Vg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=M.exports,Ct=Vg.exports;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jg=new Set,ks={};function Dr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(ks[e]=t,e=0;e<t.length;e++)jg.add(t[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=Object.prototype.hasOwnProperty,gE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},ap={};function yE(e){return Ec.call(ap,e)?!0:Ec.call(op,e)?!1:gE.test(e)?ap[e]=!0:(op[e]=!0,!1)}function vE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wE(e,t,n,r){if(t===null||typeof t>"u"||vE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(th,nh);He[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(th,nh);He[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(th,nh);He[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function rh(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wE(t,n,i,r)&&(n=null),r||i===null?yE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nn=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),lp=Symbol.iterator;function Wi(e){return e===null||typeof e!="object"?null:(e=lp&&e[lp]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Ou;function ts(e){if(Ou===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ou=t&&t[1]||""}return`
`+Ou+e}var Du=!1;function Au(e,t){if(!e||Du)return"";Du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Du=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ts(e):""}function EE(e){switch(e.tag){case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return e=Au(e.type,!1),e;case 11:return e=Au(e.type.render,!1),e;case 1:return e=Au(e.type,!0),e;default:return""}}function xc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case zr:return"Portal";case Sc:return"Profiler";case ih:return"StrictMode";case Cc:return"Suspense";case $c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wg:return(e.displayName||"Context")+".Consumer";case Hg:return(e._context.displayName||"Context")+".Provider";case sh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oh:return t=e.displayName||null,t!==null?t:xc(e.type)||"Memo";case On:t=e._payload,e=e._init;try{return xc(e(t))}catch{}}return null}function SE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xc(t);case 8:return t===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function CE(e){var t=qg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=CE(e))}function Gg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tc(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function up(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qg(e,t){t=t.checked,t!=null&&rh(e,"checked",t,!1)}function kc(e,t){Qg(e,t);var n=Qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_c(e,t.type,n):t.hasOwnProperty("defaultValue")&&_c(e,t.type,Qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _c(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ns=Array.isArray;function ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ic(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ns(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qn(n)}}function Yg(e,t){var n=Qn(t.value),r=Qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,Jg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _s(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$E=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(e){$E.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ls[t]=ls[e]})});function Zg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ls.hasOwnProperty(e)&&ls[e]?(""+t).trim():t+"px"}function e0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(e,t){if(t){if(xE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Oc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dc=null;function ah(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ac=null,ri=null,ii=null;function dp(e){if(e=fo(e)){if(typeof Ac!="function")throw Error(T(280));var t=e.stateNode;t&&(t=$l(t),Ac(e.stateNode,e.type,t))}}function t0(e){ri?ii?ii.push(e):ii=[e]:ri=e}function n0(){if(ri){var e=ri,t=ii;if(ii=ri=null,dp(e),t)for(e=0;e<t.length;e++)dp(t[e])}}function r0(e,t){return e(t)}function i0(){}var Ru=!1;function s0(e,t,n){if(Ru)return e(t,n);Ru=!0;try{return r0(e,t,n)}finally{Ru=!1,(ri!==null||ii!==null)&&(i0(),n0())}}function Is(e,t){var n=e.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Rc=!1;if(Sn)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Rc=!1}function TE(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var us=!1,Ta=null,ka=!1,Pc=null,kE={onError:function(e){us=!0,Ta=e}};function _E(e,t,n,r,i,s,o,a,l){us=!1,Ta=null,TE.apply(kE,arguments)}function IE(e,t,n,r,i,s,o,a,l){if(_E.apply(this,arguments),us){if(us){var u=Ta;us=!1,Ta=null}else throw Error(T(198));ka||(ka=!0,Pc=u)}}function Ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function o0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pp(e){if(Ar(e)!==e)throw Error(T(188))}function NE(e){var t=e.alternate;if(!t){if(t=Ar(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pp(i),e;if(s===r)return pp(i),t;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function a0(e){return e=NE(e),e!==null?l0(e):null}function l0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=l0(e);if(t!==null)return t;e=e.sibling}return null}var u0=Ct.unstable_scheduleCallback,mp=Ct.unstable_cancelCallback,bE=Ct.unstable_shouldYield,OE=Ct.unstable_requestPaint,Se=Ct.unstable_now,DE=Ct.unstable_getCurrentPriorityLevel,lh=Ct.unstable_ImmediatePriority,c0=Ct.unstable_UserBlockingPriority,_a=Ct.unstable_NormalPriority,AE=Ct.unstable_LowPriority,f0=Ct.unstable_IdlePriority,wl=null,nn=null;function RE(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:LE,PE=Math.log,ME=Math.LN2;function LE(e){return e>>>=0,e===0?32:31-(PE(e)/ME|0)|0}var Mo=64,Lo=4194304;function rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ia(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=rs(a):(s&=o,s!==0&&(r=rs(s)))}else o=n&~i,o!==0?r=rs(o):s!==0&&(r=rs(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function FE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-jt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=FE(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Mc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function h0(){var e=Mo;return Mo<<=1,(Mo&4194240)===0&&(Mo=64),e}function Pu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function VE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function uh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function d0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var p0,ch,m0,g0,y0,Lc=!1,Fo=[],Fn=null,Un=null,Vn=null,Ns=new Map,bs=new Map,An=[],zE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gp(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function qi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=fo(t),t!==null&&ch(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function BE(e,t,n,r,i){switch(t){case"focusin":return Fn=qi(Fn,e,t,n,r,i),!0;case"dragenter":return Un=qi(Un,e,t,n,r,i),!0;case"mouseover":return Vn=qi(Vn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ns.set(s,qi(Ns.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bs.set(s,qi(bs.get(s)||null,e,t,n,r,i)),!0}return!1}function v0(e){var t=ur(e.target);if(t!==null){var n=Ar(t);if(n!==null){if(t=n.tag,t===13){if(t=o0(n),t!==null){e.blockedOn=t,y0(e.priority,function(){m0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dc=r,n.target.dispatchEvent(r),Dc=null}else return t=fo(n),t!==null&&ch(t),e.blockedOn=n,!1;t.shift()}return!0}function yp(e,t,n){oa(e)&&n.delete(t)}function jE(){Lc=!1,Fn!==null&&oa(Fn)&&(Fn=null),Un!==null&&oa(Un)&&(Un=null),Vn!==null&&oa(Vn)&&(Vn=null),Ns.forEach(yp),bs.forEach(yp)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,Lc||(Lc=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,jE)))}function Os(e){function t(i){return Gi(i,e)}if(0<Fo.length){Gi(Fo[0],e);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&Gi(Fn,e),Un!==null&&Gi(Un,e),Vn!==null&&Gi(Vn,e),Ns.forEach(t),bs.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&An.shift()}var si=Nn.ReactCurrentBatchConfig,Na=!0;function HE(e,t,n,r){var i=re,s=si.transition;si.transition=null;try{re=1,fh(e,t,n,r)}finally{re=i,si.transition=s}}function WE(e,t,n,r){var i=re,s=si.transition;si.transition=null;try{re=4,fh(e,t,n,r)}finally{re=i,si.transition=s}}function fh(e,t,n,r){if(Na){var i=Fc(e,t,n,r);if(i===null)Wu(e,t,r,ba,n),gp(e,r);else if(BE(i,e,t,n,r))r.stopPropagation();else if(gp(e,r),t&4&&-1<zE.indexOf(e)){for(;i!==null;){var s=fo(i);if(s!==null&&p0(s),s=Fc(e,t,n,r),s===null&&Wu(e,t,r,ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(e,t,r,null,n)}}var ba=null;function Fc(e,t,n,r){if(ba=null,e=ah(r),e=ur(e),e!==null)if(t=Ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=o0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ba=e,null}function w0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DE()){case lh:return 1;case c0:return 4;case _a:case AE:return 16;case f0:return 536870912;default:return 16}default:return 16}}var Pn=null,hh=null,aa=null;function E0(){if(aa)return aa;var e,t=hh,n=t.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return aa=i.slice(e,1<r?1-r:void 0)}function la(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function vp(){return!1}function Tt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:vp,this.isPropagationStopped=vp,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Tt(bi),co=we({},bi,{view:0,detail:0}),KE=Tt(co),Mu,Lu,Qi,El=we({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(Mu=e.screenX-Qi.screenX,Lu=e.screenY-Qi.screenY):Lu=Mu=0,Qi=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),wp=Tt(El),qE=we({},El,{dataTransfer:0}),GE=Tt(qE),QE=we({},co,{relatedTarget:0}),Fu=Tt(QE),YE=we({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),XE=Tt(YE),JE=we({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ZE=Tt(JE),eS=we({},bi,{data:0}),Ep=Tt(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rS[e])?!!t[e]:!1}function ph(){return iS}var sS=we({},co,{key:function(e){if(e.key){var t=tS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=la(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(e){return e.type==="keypress"?la(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?la(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oS=Tt(sS),aS=we({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Tt(aS),lS=we({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),uS=Tt(lS),cS=we({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Tt(cS),hS=we({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=Tt(hS),pS=[9,13,27,32],mh=Sn&&"CompositionEvent"in window,cs=null;Sn&&"documentMode"in document&&(cs=document.documentMode);var mS=Sn&&"TextEvent"in window&&!cs,S0=Sn&&(!mh||cs&&8<cs&&11>=cs),Cp=String.fromCharCode(32),$p=!1;function C0(e,t){switch(e){case"keyup":return pS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function gS(e,t){switch(e){case"compositionend":return $0(t);case"keypress":return t.which!==32?null:($p=!0,Cp);case"textInput":return e=t.data,e===Cp&&$p?null:e;default:return null}}function yS(e,t){if(jr)return e==="compositionend"||!mh&&C0(e,t)?(e=E0(),aa=hh=Pn=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return S0&&t.locale!=="ko"?null:t.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vS[e.type]:t==="textarea"}function x0(e,t,n,r){t0(r),t=Oa(t,"onChange"),0<t.length&&(n=new dh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fs=null,Ds=null;function wS(e){P0(e,0)}function Sl(e){var t=Kr(e);if(Gg(t))return e}function ES(e,t){if(e==="change")return t}var T0=!1;if(Sn){var Uu;if(Sn){var Vu="oninput"in document;if(!Vu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),Vu=typeof Tp.oninput=="function"}Uu=Vu}else Uu=!1;T0=Uu&&(!document.documentMode||9<document.documentMode)}function kp(){fs&&(fs.detachEvent("onpropertychange",k0),Ds=fs=null)}function k0(e){if(e.propertyName==="value"&&Sl(Ds)){var t=[];x0(t,Ds,e,ah(e)),s0(wS,t)}}function SS(e,t,n){e==="focusin"?(kp(),fs=t,Ds=n,fs.attachEvent("onpropertychange",k0)):e==="focusout"&&kp()}function CS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(Ds)}function $S(e,t){if(e==="click")return Sl(t)}function xS(e,t){if(e==="input"||e==="change")return Sl(t)}function TS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:TS;function As(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ec.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,t){var n=_p(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function _0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kS(e){var t=I0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&gh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ip(n,s);var o=Ip(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _S=Sn&&"documentMode"in document&&11>=document.documentMode,Hr=null,Uc=null,hs=null,Vc=!1;function Np(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vc||Hr==null||Hr!==xa(r)||(r=Hr,"selectionStart"in r&&gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&As(hs,r)||(hs=r,r=Oa(Uc,"onSelect"),0<r.length&&(t=new dh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function Vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},zu={},N0={};Sn&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Cl(e){if(zu[e])return zu[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in N0)return zu[e]=t[n];return e}var b0=Cl("animationend"),O0=Cl("animationiteration"),D0=Cl("animationstart"),A0=Cl("transitionend"),R0=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){R0.set(e,t),Dr(t,[e])}for(var Bu=0;Bu<bp.length;Bu++){var ju=bp[Bu],IS=ju.toLowerCase(),NS=ju[0].toUpperCase()+ju.slice(1);er(IS,"on"+NS)}er(b0,"onAnimationEnd");er(O0,"onAnimationIteration");er(D0,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(A0,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function Op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,IE(r,t,void 0,e),e.currentTarget=null}function P0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Op(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Op(i,a,u),s=l}}}if(ka)throw e=Pc,ka=!1,Pc=null,e}function ce(e,t){var n=t[Wc];n===void 0&&(n=t[Wc]=new Set);var r=e+"__bubble";n.has(r)||(M0(t,e,2,!1),n.add(r))}function Hu(e,t,n){var r=0;t&&(r|=4),M0(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Rs(e){if(!e[zo]){e[zo]=!0,jg.forEach(function(n){n!=="selectionchange"&&(bS.has(n)||Hu(n,!1,e),Hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,Hu("selectionchange",!1,t))}}function M0(e,t,n,r){switch(w0(t)){case 1:var i=HE;break;case 4:i=WE;break;default:i=fh}n=i.bind(null,t,n,e),i=void 0,!Rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wu(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ur(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s0(function(){var u=s,c=ah(n),f=[];e:{var d=R0.get(e);if(d!==void 0){var g=dh,y=e;switch(e){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":g=oS;break;case"focusin":y="focus",g=Fu;break;case"focusout":y="blur",g=Fu;break;case"beforeblur":case"afterblur":g=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=GE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uS;break;case b0:case O0:case D0:g=XE;break;case A0:g=fS;break;case"scroll":g=KE;break;case"wheel":g=dS;break;case"copy":case"cut":case"paste":g=ZE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sp}var v=(t&4)!==0,$=!v&&e==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Is(h,p),w!=null&&v.push(Ps(h,w,m)))),$)break;h=h.return}0<v.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:v}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Dc&&(y=n.relatedTarget||n.fromElement)&&(ur(y)||y[Cn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?ur(y):null,y!==null&&($=Ar(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=wp,w="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Sp,w="onPointerLeave",p="onPointerEnter",h="pointer"),$=g==null?d:Kr(g),m=y==null?d:Kr(y),d=new v(w,h+"leave",g,n,c),d.target=$,d.relatedTarget=m,w=null,ur(c)===u&&(v=new v(p,h+"enter",y,n,c),v.target=m,v.relatedTarget=$,w=v),$=w,g&&y)t:{for(v=g,p=y,h=0,m=v;m;m=Ur(m))h++;for(m=0,w=p;w;w=Ur(w))m++;for(;0<h-m;)v=Ur(v),h--;for(;0<m-h;)p=Ur(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Ur(v),p=Ur(p)}v=null}else v=null;g!==null&&Dp(f,d,g,v,!1),y!==null&&$!==null&&Dp(f,$,y,v,!0)}}e:{if(d=u?Kr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var x=ES;else if(xp(d))if(T0)x=xS;else{x=CS;var N=SS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=$S);if(x&&(x=x(e,u))){x0(f,x,n,c);break e}N&&N(e,d,u),e==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&_c(d,"number",d.value)}switch(N=u?Kr(u):window,e){case"focusin":(xp(N)||N.contentEditable==="true")&&(Hr=N,Uc=u,hs=null);break;case"focusout":hs=Uc=Hr=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Np(f,n,c);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Np(f,n,c)}var C;if(mh)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else jr?C0(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(S0&&n.locale!=="ko"&&(jr||D!=="onCompositionStart"?D==="onCompositionEnd"&&jr&&(C=E0()):(Pn=c,hh="value"in Pn?Pn.value:Pn.textContent,jr=!0)),N=Oa(u,D),0<N.length&&(D=new Ep(D,e,null,n,c),f.push({event:D,listeners:N}),C?D.data=C:(C=$0(n),C!==null&&(D.data=C)))),(C=mS?gS(e,n):yS(e,n))&&(u=Oa(u,"onBeforeInput"),0<u.length&&(c=new Ep("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}P0(f,t)})}function Ps(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Is(e,n),s!=null&&r.unshift(Ps(e,s,i)),s=Is(e,t),s!=null&&r.push(Ps(e,s,i))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Is(n,s),l!=null&&o.unshift(Ps(n,l,a))):i||(l=Is(n,s),l!=null&&o.push(Ps(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var OS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function Ap(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(DS,"")}function Bo(e,t,n){if(t=Ap(t),Ap(e)!==t&&n)throw Error(T(425))}function Da(){}var zc=null,Bc=null;function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(e){return Rp.resolve(null).then(e).catch(PS)}:Hc;function PS(e){setTimeout(function(){throw e})}function Ku(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Os(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Os(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),tn="__reactFiber$"+Oi,Ms="__reactProps$"+Oi,Cn="__reactContainer$"+Oi,Wc="__reactEvents$"+Oi,MS="__reactListeners$"+Oi,LS="__reactHandles$"+Oi;function ur(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pp(e);e!==null;){if(n=e[tn])return n;e=Pp(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[tn]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function $l(e){return e[Ms]||null}var Kc=[],qr=-1;function tr(e){return{current:e}}function fe(e){0>qr||(e.current=Kc[qr],Kc[qr]=null,qr--)}function ae(e,t){qr++,Kc[qr]=e.current,e.current=t}var Yn={},et=tr(Yn),dt=tr(!1),Er=Yn;function di(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function Aa(){fe(dt),fe(et)}function Mp(e,t,n){if(et.current!==Yn)throw Error(T(168));ae(et,t),ae(dt,n)}function L0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,SE(e)||"Unknown",i));return we({},n,r)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,Er=et.current,ae(et,e),ae(dt,dt.current),!0}function Lp(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=L0(e,t,Er),r.__reactInternalMemoizedMergedChildContext=e,fe(dt),fe(et),ae(et,e)):fe(dt),ae(dt,n)}var pn=null,xl=!1,qu=!1;function F0(e){pn===null?pn=[e]:pn.push(e)}function FS(e){xl=!0,F0(e)}function nr(){if(!qu&&pn!==null){qu=!0;var e=0,t=re;try{var n=pn;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,xl=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),u0(lh,nr),i}finally{re=t,qu=!1}}return null}var Gr=[],Qr=0,Pa=null,Ma=0,It=[],Nt=0,Sr=null,mn=1,gn="";function sr(e,t){Gr[Qr++]=Ma,Gr[Qr++]=Pa,Pa=e,Ma=t}function U0(e,t,n){It[Nt++]=mn,It[Nt++]=gn,It[Nt++]=Sr,Sr=e;var r=mn;e=gn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-jt(t)+i|n<<i|r,gn=s+e}else mn=1<<s|n<<i|r,gn=e}function yh(e){e.return!==null&&(sr(e,1),U0(e,1,0))}function vh(e){for(;e===Pa;)Pa=Gr[--Qr],Gr[Qr]=null,Ma=Gr[--Qr],Gr[Qr]=null;for(;e===Sr;)Sr=It[--Nt],It[Nt]=null,gn=It[--Nt],It[Nt]=null,mn=It[--Nt],It[Nt]=null}var Et=null,wt=null,de=!1,Bt=null;function V0(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,wt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sr!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Et=e,wt=null,!0):!1;default:return!1}}function qc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gc(e){if(de){var t=wt;if(t){var n=t;if(!Fp(e,t)){if(qc(e))throw Error(T(418));t=zn(n.nextSibling);var r=Et;t&&Fp(e,t)?V0(r,n):(e.flags=e.flags&-4097|2,de=!1,Et=e)}}else{if(qc(e))throw Error(T(418));e.flags=e.flags&-4097|2,de=!1,Et=e}}}function Up(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function jo(e){if(e!==Et)return!1;if(!de)return Up(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jc(e.type,e.memoizedProps)),t&&(t=wt)){if(qc(e))throw z0(),Error(T(418));for(;t;)V0(e,t),t=zn(t.nextSibling)}if(Up(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=Et?zn(e.stateNode.nextSibling):null;return!0}function z0(){for(var e=wt;e;)e=zn(e.nextSibling)}function pi(){wt=Et=null,de=!1}function wh(e){Bt===null?Bt=[e]:Bt.push(e)}var US=Nn.ReactCurrentBatchConfig;function Ut(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var La=tr(null),Fa=null,Yr=null,Eh=null;function Sh(){Eh=Yr=Fa=null}function Ch(e){var t=La.current;fe(La),e._currentValue=t}function Qc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oi(e,t){Fa=e,Eh=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ft=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Eh!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(Fa===null)throw Error(T(308));Yr=e,Fa.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var cr=null;function $h(e){cr===null?cr=[e]:cr.push(e)}function B0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$h(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function xh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,$h(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uh(e,n)}}function Vp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;Dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(d=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=we({},f,d);break e;case 2:Dn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);$r|=o,e.lanes=o,e.memoizedState=f}}function zp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var H0=new Bg.Component().refs;function Yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?Ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=st(),i=Hn(e),s=vn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Bn(e,s,i),t!==null&&(Ht(t,e,i,r),ua(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=st(),i=Hn(e),s=vn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Bn(e,s,i),t!==null&&(Ht(t,e,i,r),ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),r=Hn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bn(e,i,r),t!==null&&(Ht(t,e,r,n),ua(t,e,r))}};function Bp(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!As(n,r)||!As(i,s):!0}function W0(e,t,n){var r=!1,i=Yn,s=t.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=pt(t)?Er:et.current,r=t.contextTypes,s=(r=r!=null)?di(e,i):Yn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function jp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function Xc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=H0,xh(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=pt(t)?Er:et.current,i.context=di(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Yc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===H0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hp(e){var t=e._init;return t(e._payload)}function K0(e){function t(p,h){if(e){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Wn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,w){return h===null||h.tag!==6?(h=ec(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,w){var x=m.type;return x===Br?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===On&&Hp(x)===h.type)?(w=i(h,m.props),w.ref=Yi(p,h,m),w.return=p,w):(w=ma(m.type,m.key,m.props,null,p.mode,w),w.ref=Yi(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=tc(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,x){return h===null||h.tag!==7?(h=gr(m,p.mode,w,x),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ec(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ao:return m=ma(h.type,h.key,h.props,null,p.mode,m),m.ref=Yi(p,null,h),m.return=p,m;case zr:return h=tc(h,p.mode,m),h.return=p,h;case On:var w=h._init;return f(p,w(h._payload),m)}if(ns(h)||Wi(h))return h=gr(h,p.mode,m,null),h.return=p,h;Ho(p,h)}return null}function d(p,h,m,w){var x=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:a(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ao:return m.key===x?l(p,h,m,w):null;case zr:return m.key===x?u(p,h,m,w):null;case On:return x=m._init,d(p,h,x(m._payload),w)}if(ns(m)||Wi(m))return x!==null?null:c(p,h,m,w,null);Ho(p,m)}return null}function g(p,h,m,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(h,p,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ao:return p=p.get(w.key===null?m:w.key)||null,l(h,p,w,x);case zr:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,x);case On:var N=w._init;return g(p,h,m,N(w._payload),x)}if(ns(w)||Wi(w))return p=p.get(m)||null,c(h,p,w,x,null);Ho(h,w)}return null}function y(p,h,m,w){for(var x=null,N=null,C=h,D=h=0,ue=null;C!==null&&D<m.length;D++){C.index>D?(ue=C,C=null):ue=C.sibling;var G=d(p,C,m[D],w);if(G===null){C===null&&(C=ue);break}e&&C&&G.alternate===null&&t(p,C),h=s(G,h,D),N===null?x=G:N.sibling=G,N=G,C=ue}if(D===m.length)return n(p,C),de&&sr(p,D),x;if(C===null){for(;D<m.length;D++)C=f(p,m[D],w),C!==null&&(h=s(C,h,D),N===null?x=C:N.sibling=C,N=C);return de&&sr(p,D),x}for(C=r(p,C);D<m.length;D++)ue=g(C,p,D,m[D],w),ue!==null&&(e&&ue.alternate!==null&&C.delete(ue.key===null?D:ue.key),h=s(ue,h,D),N===null?x=ue:N.sibling=ue,N=ue);return e&&C.forEach(function(yt){return t(p,yt)}),de&&sr(p,D),x}function v(p,h,m,w){var x=Wi(m);if(typeof x!="function")throw Error(T(150));if(m=x.call(m),m==null)throw Error(T(151));for(var N=x=null,C=h,D=h=0,ue=null,G=m.next();C!==null&&!G.done;D++,G=m.next()){C.index>D?(ue=C,C=null):ue=C.sibling;var yt=d(p,C,G.value,w);if(yt===null){C===null&&(C=ue);break}e&&C&&yt.alternate===null&&t(p,C),h=s(yt,h,D),N===null?x=yt:N.sibling=yt,N=yt,C=ue}if(G.done)return n(p,C),de&&sr(p,D),x;if(C===null){for(;!G.done;D++,G=m.next())G=f(p,G.value,w),G!==null&&(h=s(G,h,D),N===null?x=G:N.sibling=G,N=G);return de&&sr(p,D),x}for(C=r(p,C);!G.done;D++,G=m.next())G=g(C,p,D,G.value,w),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?D:G.key),h=s(G,h,D),N===null?x=G:N.sibling=G,N=G);return e&&C.forEach(function(Yt){return t(p,Yt)}),de&&sr(p,D),x}function $(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Br&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ao:e:{for(var x=m.key,N=h;N!==null;){if(N.key===x){if(x=m.type,x===Br){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===On&&Hp(x)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=Yi(p,N,m),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===Br?(h=gr(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=ma(m.type,m.key,m.props,null,p.mode,w),w.ref=Yi(p,h,m),w.return=p,p=w)}return o(p);case zr:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=tc(m,p.mode,w),h.return=p,p=h}return o(p);case On:return N=m._init,$(p,h,N(m._payload),w)}if(ns(m))return y(p,h,m,w);if(Wi(m))return v(p,h,m,w);Ho(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=ec(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return $}var mi=K0(!0),q0=K0(!1),ho={},rn=tr(ho),Ls=tr(ho),Fs=tr(ho);function fr(e){if(e===ho)throw Error(T(174));return e}function Th(e,t){switch(ae(Fs,t),ae(Ls,e),ae(rn,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nc(t,e)}fe(rn),ae(rn,t)}function gi(){fe(rn),fe(Ls),fe(Fs)}function G0(e){fr(Fs.current);var t=fr(rn.current),n=Nc(t,e.type);t!==n&&(ae(Ls,e),ae(rn,n))}function kh(e){Ls.current===e&&(fe(rn),fe(Ls))}var ye=tr(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gu=[];function _h(){for(var e=0;e<Gu.length;e++)Gu[e]._workInProgressVersionPrimary=null;Gu.length=0}var ca=Nn.ReactCurrentDispatcher,Qu=Nn.ReactCurrentBatchConfig,Cr=0,ve=null,Ie=null,Re=null,za=!1,ds=!1,Us=0,VS=0;function qe(){throw Error(T(321))}function Ih(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function Nh(e,t,n,r,i,s){if(Cr=s,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?HS:WS,e=n(r,i),ds){s=0;do{if(ds=!1,Us=0,25<=s)throw Error(T(301));s+=1,Re=Ie=null,t.updateQueue=null,ca.current=KS,e=n(r,i)}while(ds)}if(ca.current=Ba,t=Ie!==null&&Ie.next!==null,Cr=0,Re=Ie=ve=null,za=!1,t)throw Error(T(300));return e}function bh(){var e=Us!==0;return Us=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function Pt(){if(Ie===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Re===null?ve.memoizedState:Re.next;if(t!==null)Re=t,Ie=e;else{if(e===null)throw Error(T(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function Vs(e,t){return typeof t=="function"?t(e):t}function Yu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Cr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ve.lanes|=c,$r|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ve.lanes|=s,$r|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Kt(s,t.memoizedState)||(ft=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Q0(){}function Y0(e,t){var n=ve,r=Pt(),i=t(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,Oh(Z0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,zs(9,J0.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(T(349));(Cr&30)!==0||X0(n,t,i)}return i}function X0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function J0(e,t,n,r){t.value=n,t.getSnapshot=r,ey(t)&&ty(e)}function Z0(e,t,n){return n(function(){ey(t)&&ty(e)})}function ey(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function ty(e){var t=$n(e,1);t!==null&&Ht(t,e,1,-1)}function Wp(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t.queue=e,e=e.dispatch=jS.bind(null,ve,e),[t.memoizedState,e]}function zs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ny(){return Pt().memoizedState}function fa(e,t,n,r){var i=Jt();ve.flags|=e,i.memoizedState=zs(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Ih(r,o.deps)){i.memoizedState=zs(t,n,s,r);return}}ve.flags|=e,i.memoizedState=zs(1|t,n,s,r)}function Kp(e,t){return fa(8390656,8,e,t)}function Oh(e,t){return kl(2048,8,e,t)}function ry(e,t){return kl(4,2,e,t)}function iy(e,t){return kl(4,4,e,t)}function sy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function oy(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,sy.bind(null,t,e),n)}function Dh(){}function ay(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ih(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ly(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ih(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uy(e,t,n){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n):(Kt(n,t)||(n=h0(),ve.lanes|=n,$r|=n,e.baseState=!0),t)}function zS(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Qu.transition;Qu.transition={};try{e(!1),t()}finally{re=n,Qu.transition=r}}function cy(){return Pt().memoizedState}function BS(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fy(e))hy(t,n);else if(n=B0(e,t,n,r),n!==null){var i=st();Ht(n,e,r,i),dy(n,t,r)}}function jS(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fy(e))hy(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kt(a,o)){var l=t.interleaved;l===null?(i.next=i,$h(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=B0(e,t,i,r),n!==null&&(i=st(),Ht(n,e,r,i),dy(n,t,r))}}function fy(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function hy(e,t){ds=za=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dy(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uh(e,n)}}var Ba={readContext:Rt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},HS={readContext:Rt,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:Kp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fa(4194308,4,sy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return fa(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=BS.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Wp,useDebugValue:Dh,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Wp(!1),t=e[0];return e=zS.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=Jt();if(de){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Pe===null)throw Error(T(349));(Cr&30)!==0||X0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Kp(Z0.bind(null,r,s,e),[e]),r.flags|=2048,zs(9,J0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Jt(),t=Pe.identifierPrefix;if(de){var n=gn,r=mn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=VS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},WS={readContext:Rt,useCallback:ay,useContext:Rt,useEffect:Oh,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Yu,useRef:ny,useState:function(){return Yu(Vs)},useDebugValue:Dh,useDeferredValue:function(e){var t=Pt();return uy(t,Ie.memoizedState,e)},useTransition:function(){var e=Yu(Vs)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Q0,useSyncExternalStore:Y0,useId:cy,unstable_isNewReconciler:!1},KS={readContext:Rt,useCallback:ay,useContext:Rt,useEffect:Oh,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Xu,useRef:ny,useState:function(){return Xu(Vs)},useDebugValue:Dh,useDeferredValue:function(e){var t=Pt();return Ie===null?t.memoizedState=e:uy(t,Ie.memoizedState,e)},useTransition:function(){var e=Xu(Vs)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Q0,useSyncExternalStore:Y0,useId:cy,unstable_isNewReconciler:!1};function yi(e,t){try{var n="",r=t;do n+=EE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ju(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Jc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function py(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ha||(Ha=!0,uf=r),Jc(e,t)},n}function my(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jc(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=aC.bind(null,e,t,n),t.then(e,e))}function Gp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qp(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Bn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var GS=Nn.ReactCurrentOwner,ft=!1;function tt(e,t,n,r){t.child=e===null?q0(t,null,n,r):mi(t,e.child,n,r)}function Yp(e,t,n,r,i){n=n.render;var s=t.ref;return oi(t,i),r=Nh(e,t,n,r,s,i),n=bh(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(de&&n&&yh(t),t.flags|=1,tt(e,t,r,i),t.child)}function Xp(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,gy(e,t,s,r,i)):(e=ma(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:As,n(o,r)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=Wn(s,r),e.ref=t.ref,e.return=t,t.child=e}function gy(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(As(s,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,xn(e,t,i)}return Zc(e,t,n,r,i)}function yy(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Jr,vt),vt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Jr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Jr,vt),vt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ae(Jr,vt),vt|=r;return tt(e,t,i,n),t.child}function vy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zc(e,t,n,r,i){var s=pt(n)?Er:et.current;return s=di(t,s),oi(t,i),n=Nh(e,t,n,r,s,i),r=bh(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(de&&r&&yh(t),t.flags|=1,tt(e,t,n,i),t.child)}function Jp(e,t,n,r,i){if(pt(n)){var s=!0;Ra(t)}else s=!1;if(oi(t,i),t.stateNode===null)ha(e,t),W0(t,n,r),Xc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=pt(n)?Er:et.current,u=di(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&jp(t,o,r,u),Dn=!1;var d=t.memoizedState;o.state=d,Ua(t,r,o,i),l=t.memoizedState,a!==r||d!==l||dt.current||Dn?(typeof c=="function"&&(Yc(t,n,c,r),l=t.memoizedState),(a=Dn||Bp(t,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,j0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ut(t.type,a),o.props=u,f=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=pt(n)?Er:et.current,l=di(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&jp(t,o,r,l),Dn=!1,d=t.memoizedState,o.state=d,Ua(t,r,o,i);var y=t.memoizedState;a!==f||d!==y||dt.current||Dn?(typeof g=="function"&&(Yc(t,n,g,r),y=t.memoizedState),(u=Dn||Bp(t,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ef(e,t,n,r,s,i)}function ef(e,t,n,r,i,s){vy(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Lp(t,n,!1),xn(e,t,s);r=t.stateNode,GS.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=mi(t,e.child,null,s),t.child=mi(t,null,a,s)):tt(e,t,a,s),t.memoizedState=r.state,i&&Lp(t,n,!0),t.child}function wy(e){var t=e.stateNode;t.pendingContext?Mp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mp(e,t.context,!1),Th(e,t.containerInfo)}function Zp(e,t,n,r,i){return pi(),wh(i),t.flags|=256,tt(e,t,n,r),t.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ey(e,t,n){var r=t.pendingProps,i=ye.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(ye,i&1),e===null)return Gc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,r,0,null),e=gr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=nf(n),t.memoizedState=tf,e):Ah(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return QS(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=tf,r}return s=e.child,e=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ah(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&wh(r),mi(t,e.child,null,n),e=Ah(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function QS(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ju(Error(T(422))),Wo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=gr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&mi(t,e.child,null,o),t.child.memoizedState=nf(o),t.memoizedState=tf,s);if((t.mode&1)===0)return Wo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Ju(s,r,void 0),Wo(e,t,o,r)}if(a=(o&e.childLanes)!==0,ft||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(e,i),Ht(r,e,i,-1))}return Uh(),r=Ju(Error(T(421))),Wo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=lC.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,wt=zn(i.nextSibling),Et=t,de=!0,Bt=null,e!==null&&(It[Nt++]=mn,It[Nt++]=gn,It[Nt++]=Sr,mn=e.id,gn=e.overflow,Sr=t),t=Ah(t,r.children),t.flags|=4096,t)}function em(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qc(e.return,t,n)}function Zu(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sy(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(tt(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,t);else if(e.tag===19)em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Va(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zu(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Va(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zu(t,!0,n,null,s);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$r|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function YS(e,t,n){switch(t.tag){case 3:wy(t),pi();break;case 5:G0(t);break;case 1:pt(t.type)&&Ra(t);break;case 4:Th(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(La,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ey(e,t,n):(ae(ye,ye.current&1),e=xn(e,t,n),e!==null?e.sibling:null);ae(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Sy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,yy(e,t,n)}return xn(e,t,n)}var Cy,rf,$y,xy;Cy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};$y=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fr(rn.current);var s=null;switch(n){case"input":i=Tc(e,i),r=Tc(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Ic(e,i),r=Ic(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Da)}bc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};xy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xi(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function XS(e,t,n){var r=t.pendingProps;switch(vh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return pt(t.type)&&Aa(),Ge(t),null;case 3:return r=t.stateNode,gi(),fe(dt),fe(et),_h(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bt!==null&&(hf(Bt),Bt=null))),rf(e,t),Ge(t),null;case 5:kh(t);var i=fr(Fs.current);if(n=t.type,e!==null&&t.stateNode!=null)$y(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ge(t),null}if(e=fr(rn.current),jo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[tn]=t,r[Ms]=s,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)ce(is[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":up(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":fp(r,s),ce("invalid",r)}bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),i=["children",""+a]):ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ro(r),cp(r,s,!0);break;case"textarea":Ro(r),hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Da)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tn]=t,e[Ms]=r,Cy(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oc(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)ce(is[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":up(e,r),i=Tc(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ce("invalid",e);break;case"textarea":fp(e,r),i=Ic(e,r),ce("invalid",e);break;default:i=r}bc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?e0(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jg(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_s(e,l):typeof l=="number"&&_s(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",e):l!=null&&rh(e,s,l,o))}switch(n){case"input":Ro(e),cp(e,r,!1);break;case"textarea":Ro(e),hp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ni(e,!!r.multiple,s,!1):r.defaultValue!=null&&ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)xy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=fr(Fs.current),fr(rn.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(s=r.nodeValue!==n)&&(e=Et,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return Ge(t),null;case 13:if(fe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)z0(),pi(),t.flags|=98560,s=!1;else if(s=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(T(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[tn]=t}else pi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),s=!1}else Bt!==null&&(hf(Bt),Bt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Ne===0&&(Ne=3):Uh())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return gi(),rf(e,t),e===null&&Rs(t.stateNode.containerInfo),Ge(t),null;case 10:return Ch(t.type._context),Ge(t),null;case 17:return pt(t.type)&&Aa(),Ge(t),null;case 19:if(fe(ye),s=t.memoizedState,s===null)return Ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Xi(s,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Va(e),o!==null){for(t.flags|=128,Xi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(ye,ye.current&1|2),t.child}e=e.sibling}s.tail!==null&&Se()>vi&&(t.flags|=128,r=!0,Xi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Va(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ge(t),null}else 2*Se()-s.renderingStartTime>vi&&n!==1073741824&&(t.flags|=128,r=!0,Xi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Se(),t.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return Fh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(vt&1073741824)!==0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function JS(e,t){switch(vh(t),t.tag){case 1:return pt(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gi(),fe(dt),fe(et),_h(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return kh(t),null;case 13:if(fe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ye),null;case 4:return gi(),null;case 10:return Ch(t.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Ko=!1,Xe=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,b=null;function Xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function sf(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var tm=!1;function eC(e,t){if(zc=Na,e=I0(),gh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:e,selectionRange:n},Na=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,$=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ut(t.type,v),$);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){Ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return y=tm,tm=!1,y}function ps(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&sf(t,n,s)}i=i.next}while(i!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function of(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ty(e){var t=e.alternate;t!==null&&(e.alternate=null,Ty(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[Ms],delete t[Wc],delete t[MS],delete t[LS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ky(e){return e.tag===5||e.tag===3||e.tag===4}function nm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ky(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Da));else if(r!==4&&(e=e.child,e!==null))for(af(e,t,n),e=e.sibling;e!==null;)af(e,t,n),e=e.sibling}function lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lf(e,t,n),e=e.sibling;e!==null;)lf(e,t,n),e=e.sibling}var Fe=null,zt=!1;function bn(e,t,n){for(n=n.child;n!==null;)_y(e,t,n),n=n.sibling}function _y(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Xe||Xr(n,t);case 6:var r=Fe,i=zt;Fe=null,bn(e,t,n),Fe=r,zt=i,Fe!==null&&(zt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(zt?(e=Fe,n=n.stateNode,e.nodeType===8?Ku(e.parentNode,n):e.nodeType===1&&Ku(e,n),Os(e)):Ku(Fe,n.stateNode));break;case 4:r=Fe,i=zt,Fe=n.stateNode.containerInfo,zt=!0,bn(e,t,n),Fe=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&sf(n,t,o),i=i.next}while(i!==r)}bn(e,t,n);break;case 1:if(!Xe&&(Xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,t,a)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,bn(e,t,n),Xe=r):bn(e,t,n);break;default:bn(e,t,n)}}function rm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ZS),t.forEach(function(r){var i=uC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,zt=!1;break e;case 3:Fe=a.stateNode.containerInfo,zt=!0;break e;case 4:Fe=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(Fe===null)throw Error(T(160));_y(s,o,i),Fe=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Iy(t,e),t=t.sibling}function Iy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Xt(e),r&4){try{ps(3,e,e.return),_l(3,e)}catch(v){Ee(e,e.return,v)}try{ps(5,e,e.return)}catch(v){Ee(e,e.return,v)}}break;case 1:Ft(t,e),Xt(e),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(Ft(t,e),Xt(e),r&512&&n!==null&&Xr(n,n.return),e.flags&32){var i=e.stateNode;try{_s(i,"")}catch(v){Ee(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qg(i,s),Oc(a,o);var u=Oc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?e0(i,f):c==="dangerouslySetInnerHTML"?Jg(i,f):c==="children"?_s(i,f):rh(i,c,f,u)}switch(a){case"input":kc(i,s);break;case"textarea":Yg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ni(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ni(i,!!s.multiple,s.defaultValue,!0):ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ms]=s}catch(v){Ee(e,e.return,v)}}break;case 6:if(Ft(t,e),Xt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ee(e,e.return,v)}}break;case 3:if(Ft(t,e),Xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(t.containerInfo)}catch(v){Ee(e,e.return,v)}break;case 4:Ft(t,e),Xt(e);break;case 13:Ft(t,e),Xt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mh=Se())),r&4&&rm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||c,Ft(t,e),Xe=u):Ft(t,e),Xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(b=e,c=e.child;c!==null;){for(f=b=c;b!==null;){switch(d=b,g=d.child,d.tag){case 0:case 11:case 14:case 15:ps(4,d,d.return);break;case 1:Xr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:Xr(d,d.return);break;case 22:if(d.memoizedState!==null){sm(f);continue}}g!==null?(g.return=d,b=g):sm(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zg("display",o))}catch(v){Ee(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Ee(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ft(t,e),Xt(e),r&4&&rm(e);break;case 21:break;default:Ft(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ky(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_s(i,""),r.flags&=-33);var s=nm(e);lf(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nm(e);af(e,a,o);break;default:throw Error(T(161))}}catch(l){Ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tC(e,t,n){b=e,Ny(e)}function Ny(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ko;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Xe;a=Ko;var u=Xe;if(Ko=o,(Xe=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?om(i):l!==null?(l.return=o,b=l):om(i);for(;s!==null;)b=s,Ny(s),s=s.sibling;b=i,Ko=a,Xe=u}im(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,b=s):im(e)}}function im(e){for(;b!==null;){var t=b;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&zp(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zp(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Os(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Xe||t.flags&512&&of(t)}catch(d){Ee(t,t.return,d)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function sm(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function om(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(l){Ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ee(t,i,l)}}var s=t.return;try{of(t)}catch(l){Ee(t,s,l)}break;case 5:var o=t.return;try{of(t)}catch(l){Ee(t,o,l)}}}catch(l){Ee(t,t.return,l)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var nC=Math.ceil,ja=Nn.ReactCurrentDispatcher,Rh=Nn.ReactCurrentOwner,Dt=Nn.ReactCurrentBatchConfig,J=0,Pe=null,Te=null,ze=0,vt=0,Jr=tr(0),Ne=0,Bs=null,$r=0,Il=0,Ph=0,ms=null,ct=null,Mh=0,vi=1/0,dn=null,Ha=!1,uf=null,jn=null,qo=!1,Mn=null,Wa=0,gs=0,cf=null,da=-1,pa=0;function st(){return(J&6)!==0?Se():da!==-1?da:da=Se()}function Hn(e){return(e.mode&1)===0?1:(J&2)!==0&&ze!==0?ze&-ze:US.transition!==null?(pa===0&&(pa=h0()),pa):(e=re,e!==0||(e=window.event,e=e===void 0?16:w0(e.type)),e)}function Ht(e,t,n,r){if(50<gs)throw gs=0,cf=null,Error(T(185));uo(e,n,r),((J&2)===0||e!==Pe)&&(e===Pe&&((J&2)===0&&(Il|=n),Ne===4&&Rn(e,ze)),mt(e,r),n===1&&J===0&&(t.mode&1)===0&&(vi=Se()+500,xl&&nr()))}function mt(e,t){var n=e.callbackNode;UE(e,t);var r=Ia(e,e===Pe?ze:0);if(r===0)n!==null&&mp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mp(n),t===1)e.tag===0?FS(am.bind(null,e)):F0(am.bind(null,e)),RS(function(){(J&6)===0&&nr()}),n=null;else{switch(d0(r)){case 1:n=lh;break;case 4:n=c0;break;case 16:n=_a;break;case 536870912:n=f0;break;default:n=_a}n=Ly(n,by.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function by(e,t){if(da=-1,pa=0,(J&6)!==0)throw Error(T(327));var n=e.callbackNode;if(ai()&&e.callbackNode!==n)return null;var r=Ia(e,e===Pe?ze:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ka(e,r);else{t=r;var i=J;J|=2;var s=Dy();(Pe!==e||ze!==t)&&(dn=null,vi=Se()+500,mr(e,t));do try{sC();break}catch(a){Oy(e,a)}while(1);Sh(),ja.current=s,J=i,Te!==null?t=0:(Pe=null,ze=0,t=Ne)}if(t!==0){if(t===2&&(i=Mc(e),i!==0&&(r=i,t=ff(e,i))),t===1)throw n=Bs,mr(e,0),Rn(e,r),mt(e,Se()),n;if(t===6)Rn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!rC(i)&&(t=Ka(e,r),t===2&&(s=Mc(e),s!==0&&(r=s,t=ff(e,s))),t===1))throw n=Bs,mr(e,0),Rn(e,r),mt(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:or(e,ct,dn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=Mh+500-Se(),10<t)){if(Ia(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hc(or.bind(null,e,ct,dn),t);break}or(e,ct,dn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nC(r/1960))-r,10<r){e.timeoutHandle=Hc(or.bind(null,e,ct,dn),r);break}or(e,ct,dn);break;case 5:or(e,ct,dn);break;default:throw Error(T(329))}}}return mt(e,Se()),e.callbackNode===n?by.bind(null,e):null}function ff(e,t){var n=ms;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=ct,ct=n,t!==null&&hf(t)),e}function hf(e){ct===null?ct=e:ct.push.apply(ct,e)}function rC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~Ph,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function am(e){if((J&6)!==0)throw Error(T(327));ai();var t=Ia(e,0);if((t&1)===0)return mt(e,Se()),null;var n=Ka(e,t);if(e.tag!==0&&n===2){var r=Mc(e);r!==0&&(t=r,n=ff(e,r))}if(n===1)throw n=Bs,mr(e,0),Rn(e,t),mt(e,Se()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,ct,dn),mt(e,Se()),null}function Lh(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(vi=Se()+500,xl&&nr())}}function xr(e){Mn!==null&&Mn.tag===0&&(J&6)===0&&ai();var t=J;J|=1;var n=Dt.transition,r=re;try{if(Dt.transition=null,re=1,e)return e()}finally{re=r,Dt.transition=n,J=t,(J&6)===0&&nr()}}function Fh(){vt=Jr.current,fe(Jr)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,AS(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:gi(),fe(dt),fe(et),_h();break;case 5:kh(r);break;case 4:gi();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:Ch(r.type._context);break;case 22:case 23:Fh()}n=n.return}if(Pe=e,Te=e=Wn(e.current,null),ze=vt=t,Ne=0,Bs=null,Ph=Il=$r=0,ct=ms=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cr=null}return e}function Oy(e,t){do{var n=Te;try{if(Sh(),ca.current=Ba,za){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(Cr=0,Re=Ie=ve=null,ds=!1,Us=0,Rh.current=null,n===null||n.return===null){Ne=1,Bs=t,Te=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Gp(o);if(g!==null){g.flags&=-257,Qp(g,o,a,s,t),g.mode&1&&qp(s,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if((t&1)===0){qp(s,u,t),Uh();break e}l=Error(T(426))}}else if(de&&a.mode&1){var $=Gp(o);if($!==null){($.flags&65536)===0&&($.flags|=256),Qp($,o,a,s,t),wh(yi(l,a));break e}}s=l=yi(l,a),Ne!==4&&(Ne=2),ms===null?ms=[s]:ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=py(s,l,t);Vp(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jn===null||!jn.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=my(s,a,t);Vp(s,w);break e}}s=s.return}while(s!==null)}Ry(n)}catch(x){t=x,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function Dy(){var e=ja.current;return ja.current=Ba,e===null?Ba:e}function Uh(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Pe===null||($r&268435455)===0&&(Il&268435455)===0||Rn(Pe,ze)}function Ka(e,t){var n=J;J|=2;var r=Dy();(Pe!==e||ze!==t)&&(dn=null,mr(e,t));do try{iC();break}catch(i){Oy(e,i)}while(1);if(Sh(),J=n,ja.current=r,Te!==null)throw Error(T(261));return Pe=null,ze=0,Ne}function iC(){for(;Te!==null;)Ay(Te)}function sC(){for(;Te!==null&&!bE();)Ay(Te)}function Ay(e){var t=My(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Ry(e):Te=t,Rh.current=null}function Ry(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=XS(n,t,vt),n!==null){Te=n;return}}else{if(n=JS(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ne===0&&(Ne=5)}function or(e,t,n){var r=re,i=Dt.transition;try{Dt.transition=null,re=1,oC(e,t,n,r)}finally{Dt.transition=i,re=r}return null}function oC(e,t,n,r){do ai();while(Mn!==null);if((J&6)!==0)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(VE(e,s),e===Pe&&(Te=Pe=null,ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qo||(qo=!0,Ly(_a,function(){return ai(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Dt.transition,Dt.transition=null;var o=re;re=1;var a=J;J|=4,Rh.current=null,eC(e,n),Iy(n,e),kS(Bc),Na=!!zc,Bc=zc=null,e.current=n,tC(n),OE(),J=a,re=o,Dt.transition=s}else e.current=n;if(qo&&(qo=!1,Mn=e,Wa=i),s=e.pendingLanes,s===0&&(jn=null),RE(n.stateNode),mt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,e=uf,uf=null,e;return(Wa&1)!==0&&e.tag!==0&&ai(),s=e.pendingLanes,(s&1)!==0?e===cf?gs++:(gs=0,cf=e):gs=0,nr(),null}function ai(){if(Mn!==null){var e=d0(Wa),t=Dt.transition,n=re;try{if(Dt.transition=null,re=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,Wa=0,(J&6)!==0)throw Error(T(331));var i=J;for(J|=4,b=e.current;b!==null;){var s=b,o=s.child;if((b.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:ps(8,c,s)}var f=c.child;if(f!==null)f.return=c,b=f;else for(;b!==null;){c=b;var d=c.sibling,g=c.return;if(Ty(c),c===u){b=null;break}if(d!==null){d.return=g,b=d;break}b=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var $=v.sibling;v.sibling=null,v=$}while(v!==null)}}b=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ps(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var h=e.current;for(b=h;b!==null;){o=b;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,b=m;else e:for(o=h;b!==null;){if(a=b,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:_l(9,a)}}catch(x){Ee(a,a.return,x)}if(a===o){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(J=i,nr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(wl,e)}catch{}r=!0}return r}finally{re=n,Dt.transition=t}}return!1}function lm(e,t,n){t=yi(n,t),t=py(e,t,1),e=Bn(e,t,1),t=st(),e!==null&&(uo(e,1,t),mt(e,t))}function Ee(e,t,n){if(e.tag===3)lm(e,e,n);else for(;t!==null;){if(t.tag===3){lm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=yi(n,e),e=my(t,e,1),t=Bn(t,e,1),e=st(),t!==null&&(uo(t,1,e),mt(t,e));break}}t=t.return}}function aC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>Se()-Mh?mr(e,0):Ph|=n),mt(e,t)}function Py(e,t){t===0&&((e.mode&1)===0?t=1:(t=Lo,Lo<<=1,(Lo&130023424)===0&&(Lo=4194304)));var n=st();e=$n(e,t),e!==null&&(uo(e,t,n),mt(e,n))}function lC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Py(e,n)}function uC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Py(e,n)}var My;My=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ft=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ft=!1,YS(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,de&&(t.flags&1048576)!==0&&U0(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ha(e,t),e=t.pendingProps;var i=di(t,et.current);oi(t,n),i=Nh(null,t,r,e,i,n);var s=bh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(s=!0,Ra(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xh(t),i.updater=Tl,t.stateNode=i,i._reactInternals=t,Xc(t,r,e,n),t=ef(null,t,r,!0,s,n)):(t.tag=0,de&&s&&yh(t),tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ha(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fC(r),e=Ut(r,e),i){case 0:t=Zc(null,t,r,e,n);break e;case 1:t=Jp(null,t,r,e,n);break e;case 11:t=Yp(null,t,r,e,n);break e;case 14:t=Xp(null,t,r,Ut(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Zc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Jp(e,t,r,i,n);case 3:e:{if(wy(t),e===null)throw Error(T(387));r=t.pendingProps,s=t.memoizedState,i=s.element,j0(e,t),Ua(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yi(Error(T(423)),t),t=Zp(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(T(424)),t),t=Zp(e,t,r,n,i);break e}else for(wt=zn(t.stateNode.containerInfo.firstChild),Et=t,de=!0,Bt=null,n=q0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){t=xn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return G0(t),e===null&&Gc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,jc(r,i)?o=null:s!==null&&jc(r,s)&&(t.flags|=32),vy(e,t),tt(e,t,o,n),t.child;case 6:return e===null&&Gc(t),null;case 13:return Ey(e,t,n);case 4:return Th(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mi(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Yp(e,t,r,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ae(La,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!dt.current){t=xn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qc(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qc(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oi(t,n),i=Rt(i),r=r(i),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,i=Ut(r,t.pendingProps),i=Ut(r.type,i),Xp(e,t,r,i,n);case 15:return gy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),ha(e,t),t.tag=1,pt(r)?(e=!0,Ra(t)):e=!1,oi(t,n),W0(t,r,i),Xc(t,r,i,n),ef(null,t,r,!0,e,n);case 19:return Sy(e,t,n);case 22:return yy(e,t,n)}throw Error(T(156,t.tag))};function Ly(e,t){return u0(e,t)}function cC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,r){return new cC(e,t,n,r)}function Vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fC(e){if(typeof e=="function")return Vh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sh)return 11;if(e===oh)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ma(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Vh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Br:return gr(n.children,i,s,t);case ih:o=8,i|=8;break;case Sc:return e=Ot(12,n,t,i|2),e.elementType=Sc,e.lanes=s,e;case Cc:return e=Ot(13,n,t,i),e.elementType=Cc,e.lanes=s,e;case $c:return e=Ot(19,n,t,i),e.elementType=$c,e.lanes=s,e;case Kg:return Nl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hg:o=10;break e;case Wg:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case On:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ot(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function gr(e,t,n,r){return e=Ot(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Ot(22,e,r,t),e.elementType=Kg,e.lanes=n,e.stateNode={isHidden:!1},e}function ec(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function tc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pu(0),this.expirationTimes=Pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zh(e,t,n,r,i,s,o,a,l){return e=new hC(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ot(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(s),e}function dC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fy(e){if(!e)return Yn;e=e._reactInternals;e:{if(Ar(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(pt(n))return L0(e,n,t)}return t}function Uy(e,t,n,r,i,s,o,a,l){return e=zh(n,r,!0,e,i,s,o,a,l),e.context=Fy(null),n=e.current,r=st(),i=Hn(n),s=vn(r,i),s.callback=t!=null?t:null,Bn(n,s,i),e.current.lanes=i,uo(e,i,r),mt(e,r),e}function bl(e,t,n,r){var i=t.current,s=st(),o=Hn(i);return n=Fy(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bn(i,t,o),e!==null&&(Ht(e,i,o,s),ua(e,i,o)),o}function qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bh(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function pC(){return null}var Vy=typeof reportError=="function"?reportError:function(e){console.error(e)};function jh(e){this._internalRoot=e}Ol.prototype.render=jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));bl(e,t,null,null)};Ol.prototype.unmount=jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xr(function(){bl(null,e,null,null)}),t[Cn]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=g0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&v0(e)}};function Hh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cm(){}function mC(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=qa(o);s.call(u)}}var o=Uy(t,r,e,0,null,!1,!1,"",cm);return e._reactRootContainer=o,e[Cn]=o.current,Rs(e.nodeType===8?e.parentNode:e),xr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qa(l);a.call(u)}}var l=zh(e,0,!1,null,null,!1,!1,"",cm);return e._reactRootContainer=l,e[Cn]=l.current,Rs(e.nodeType===8?e.parentNode:e),xr(function(){bl(t,l,n,r)}),l}function Al(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=qa(o);a.call(l)}}bl(t,o,e,i)}else o=mC(n,t,e,i,r);return qa(o)}p0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rs(t.pendingLanes);n!==0&&(uh(t,n|1),mt(t,Se()),(J&6)===0&&(vi=Se()+500,nr()))}break;case 13:xr(function(){var r=$n(e,1);if(r!==null){var i=st();Ht(r,e,1,i)}}),Bh(e,1)}};ch=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=st();Ht(t,e,134217728,n)}Bh(e,134217728)}};m0=function(e){if(e.tag===13){var t=Hn(e),n=$n(e,t);if(n!==null){var r=st();Ht(n,e,t,r)}Bh(e,t)}};g0=function(){return re};y0=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Ac=function(e,t,n){switch(t){case"input":if(kc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$l(r);if(!i)throw Error(T(90));Gg(r),kc(r,i)}}}break;case"textarea":Yg(e,n);break;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}};r0=Lh;i0=xr;var gC={usingClientEntryPoint:!1,Events:[fo,Kr,$l,t0,n0,Lh]},Ji={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yC={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=a0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||pC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{wl=Go.inject(yC),nn=Go}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gC;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(t))throw Error(T(200));return dC(e,t,null,n)};xt.createRoot=function(e,t){if(!Hh(e))throw Error(T(299));var n=!1,r="",i=Vy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zh(e,1,!1,null,null,n,!1,r,i),e[Cn]=t.current,Rs(e.nodeType===8?e.parentNode:e),new jh(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=a0(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return xr(e)};xt.hydrate=function(e,t,n){if(!Dl(t))throw Error(T(200));return Al(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Hh(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Uy(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Cn]=t.current,Rs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ol(t)};xt.render=function(e,t,n){if(!Dl(t))throw Error(T(200));return Al(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(T(40));return e._reactRootContainer?(xr(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1};xt.unstable_batchedUpdates=Lh;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Al(e,t,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=xt})(eh);var fm=eh.exports;wc.createRoot=fm.createRoot,wc.hydrateRoot=fm.hydrateRoot;const vC="/assets/geu-logo.c19bce2b.svg";var df={exports:{}},Tr={},Wh={exports:{}},wC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",EC=wC,SC=EC;function zy(){}function By(){}By.resetWarningCache=zy;var CC=function(){function e(r,i,s,o,a,l){if(l!==SC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:By,resetWarningCache:zy};return n.PropTypes=n,n};Wh.exports=CC();var pf={exports:{}},qt={},Ga={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n=/input|select|textarea|button|object|iframe/;function r(l){var u=l.offsetWidth<=0&&l.offsetHeight<=0;if(u&&!l.innerHTML)return!0;try{var c=window.getComputedStyle(l);return u?c.getPropertyValue("overflow")!=="visible"||l.scrollWidth<=0&&l.scrollHeight<=0:c.getPropertyValue("display")=="none"}catch{return console.warn("Failed to inspect element style"),!1}}function i(l){for(var u=l,c=l.getRootNode&&l.getRootNode();u&&u!==document.body;){if(c&&u===c&&(u=c.host.parentNode),r(u))return!1;u=u.parentNode}return!0}function s(l,u){var c=l.nodeName.toLowerCase(),f=n.test(c)&&!l.disabled||c==="a"&&l.href||u;return f&&i(l)}function o(l){var u=l.getAttribute("tabindex");u===null&&(u=void 0);var c=isNaN(u);return(c||u>=0)&&s(l,!c)}function a(l){var u=[].slice.call(l.querySelectorAll("*"),0).reduce(function(c,f){return c.concat(f.shadowRoot?a(f.shadowRoot):[f])},[]);return u.filter(o)}e.exports=t.default})(Ga,Ga.exports);Object.defineProperty(qt,"__esModule",{value:!0});qt.resetState=kC;qt.log=_C;qt.handleBlur=js;qt.handleFocus=Hs;qt.markForFocusLater=IC;qt.returnFocus=NC;qt.popWithoutFocus=bC;qt.setupScopedFocus=OC;qt.teardownScopedFocus=DC;var $C=Ga.exports,xC=TC($C);function TC(e){return e&&e.__esModule?e:{default:e}}var wi=[],Zr=null,mf=!1;function kC(){wi=[]}function _C(){}function js(){mf=!0}function Hs(){if(mf){if(mf=!1,!Zr)return;setTimeout(function(){if(!Zr.contains(document.activeElement)){var e=(0,xC.default)(Zr)[0]||Zr;e.focus()}},0)}}function IC(){wi.push(document.activeElement)}function NC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{wi.length!==0&&(t=wi.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function bC(){wi.length>0&&wi.pop()}function OC(e){Zr=e,window.addEventListener?(window.addEventListener("blur",js,!1),document.addEventListener("focus",Hs,!0)):(window.attachEvent("onBlur",js),document.attachEvent("onFocus",Hs))}function DC(){Zr=null,window.addEventListener?(window.removeEventListener("blur",js),document.removeEventListener("focus",Hs)):(window.detachEvent("onBlur",js),document.detachEvent("onFocus",Hs))}var gf={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=Ga.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,l){var u=(0,r.default)(a);if(!u.length){l.preventDefault();return}var c=void 0,f=l.shiftKey,d=u[0],g=u[u.length-1],y=s();if(a===y){if(!f)return;c=g}if(g===y&&!f&&(c=d),d===y&&f&&(c=g),c){l.preventDefault(),c.focus();return}var v=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=v!=null&&v[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!$){var p=u.indexOf(y);if(p>-1&&(p+=f?-1:1),c=u[p],typeof c>"u"){l.preventDefault(),c=f?g:d,c.focus();return}l.preventDefault(),c.focus()}}e.exports=t.default})(gf,gf.exports);var Gt={},AC=function(){},RC=AC,Wt={},jy={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(jy);Object.defineProperty(Wt,"__esModule",{value:!0});Wt.canUseDOM=Wt.SafeNodeList=Wt.SafeHTMLCollection=void 0;var PC=jy.exports,MC=LC(PC);function LC(e){return e&&e.__esModule?e:{default:e}}var Rl=MC.default,FC=Rl.canUseDOM?window.HTMLElement:{};Wt.SafeHTMLCollection=Rl.canUseDOM?window.HTMLCollection:{};Wt.SafeNodeList=Rl.canUseDOM?window.NodeList:{};Wt.canUseDOM=Rl.canUseDOM;Wt.default=FC;Object.defineProperty(Gt,"__esModule",{value:!0});Gt.resetState=jC;Gt.log=HC;Gt.assertNodeList=Hy;Gt.setElement=WC;Gt.validateElement=Kh;Gt.hide=KC;Gt.show=qC;Gt.documentNotReadyOrSSRTesting=GC;var UC=RC,VC=BC(UC),zC=Wt;function BC(e){return e&&e.__esModule?e:{default:e}}var _t=null;function jC(){_t&&(_t.removeAttribute?_t.removeAttribute("aria-hidden"):_t.length!=null?_t.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(_t).forEach(function(e){return e.removeAttribute("aria-hidden")})),_t=null}function HC(){}function Hy(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function WC(e){var t=e;if(typeof t=="string"&&zC.canUseDOM){var n=document.querySelectorAll(t);Hy(n,t),t=n}return _t=t||_t,_t}function Kh(e){var t=e||_t;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,VC.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function KC(e){var t=!0,n=!1,r=void 0;try{for(var i=Kh(e)[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function qC(e){var t=!0,n=!1,r=void 0;try{for(var i=Kh(e)[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function GC(){_t=null}var Di={};Object.defineProperty(Di,"__esModule",{value:!0});Di.resetState=QC;Di.log=YC;var ys={},vs={};function hm(e,t){e.classList.remove(t)}function QC(){var e=document.getElementsByTagName("html")[0];for(var t in ys)hm(e,ys[t]);var n=document.body;for(var r in vs)hm(n,vs[r]);ys={},vs={}}function YC(){}var XC=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},JC=function(t,n){return t[n]&&(t[n]-=1),n},ZC=function(t,n,r){r.forEach(function(i){XC(n,i),t.add(i)})},e$=function(t,n,r){r.forEach(function(i){JC(n,i),n[i]===0&&t.remove(i)})};Di.add=function(t,n){return ZC(t.classList,t.nodeName.toLowerCase()=="html"?ys:vs,n.split(" "))};Di.remove=function(t,n){return e$(t.classList,t.nodeName.toLowerCase()=="html"?ys:vs,n.split(" "))};var Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.log=n$;Ai.resetState=r$;function t$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Wy=function e(){var t=this;t$(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Qa=new Wy;function n$(){console.log("portalOpenInstances ----------"),console.log(Qa.openInstances.length),Qa.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function r$(){Qa=new Wy}Ai.default=Qa;var qh={};Object.defineProperty(qh,"__esModule",{value:!0});qh.resetState=a$;qh.log=l$;var i$=Ai,s$=o$(i$);function o$(e){return e&&e.__esModule?e:{default:e}}var Ye=void 0,Vt=void 0,yr=[];function a$(){for(var e=[Ye,Vt],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Ye=Vt=null,yr=[]}function l$(){console.log("bodyTrap ----------"),console.log(yr.length);for(var e=[Ye,Vt],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function dm(){yr.length!==0&&yr[yr.length-1].focusContent()}function u$(e,t){!Ye&&!Vt&&(Ye=document.createElement("div"),Ye.setAttribute("data-react-modal-body-trap",""),Ye.style.position="absolute",Ye.style.opacity="0",Ye.setAttribute("tabindex","0"),Ye.addEventListener("focus",dm),Vt=Ye.cloneNode(),Vt.addEventListener("focus",dm)),yr=t,yr.length>0?(document.body.firstChild!==Ye&&document.body.insertBefore(Ye,document.body.firstChild),document.body.lastChild!==Vt&&document.body.appendChild(Vt)):(Ye.parentElement&&Ye.parentElement.removeChild(Ye),Vt.parentElement&&Vt.parentElement.removeChild(Vt))}s$.default.subscribe(u$);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(H){for(var K=1;K<arguments.length;K++){var he=arguments[K];for(var E in he)Object.prototype.hasOwnProperty.call(he,E)&&(H[E]=he[E])}return H},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},i=function(){function H(K,he){for(var E=0;E<he.length;E++){var S=he[E];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(K,S.key,S)}}return function(K,he,E){return he&&H(K.prototype,he),E&&H(K,E),K}}(),s=M.exports,o=Wh.exports,a=x(o),l=qt,u=w(l),c=gf.exports,f=x(c),d=Gt,g=w(d),y=Di,v=w(y),$=Wt,p=x($),h=Ai,m=x(h);function w(H){if(H&&H.__esModule)return H;var K={};if(H!=null)for(var he in H)Object.prototype.hasOwnProperty.call(H,he)&&(K[he]=H[he]);return K.default=H,K}function x(H){return H&&H.__esModule?H:{default:H}}function N(H,K){if(!(H instanceof K))throw new TypeError("Cannot call a class as a function")}function C(H,K){if(!H)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return K&&(typeof K=="object"||typeof K=="function")?K:H}function D(H,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof K);H.prototype=Object.create(K&&K.prototype,{constructor:{value:H,enumerable:!1,writable:!0,configurable:!0}}),K&&(Object.setPrototypeOf?Object.setPrototypeOf(H,K):H.__proto__=K)}var ue={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},G=9,yt=27,Yt=0,cn=function(H){D(K,H);function K(he){N(this,K);var E=C(this,(K.__proto__||Object.getPrototypeOf(K)).call(this,he));return E.setOverlayRef=function(S){E.overlay=S,E.props.overlayRef&&E.props.overlayRef(S)},E.setContentRef=function(S){E.content=S,E.props.contentRef&&E.props.contentRef(S)},E.afterClose=function(){var S=E.props,A=S.appElement,P=S.ariaHideApp,W=S.htmlOpenClassName,ge=S.bodyOpenClassName;ge&&v.remove(document.body,ge),W&&v.remove(document.getElementsByTagName("html")[0],W),P&&Yt>0&&(Yt-=1,Yt===0&&g.show(A)),E.props.shouldFocusAfterRender&&(E.props.shouldReturnFocusAfterClose?(u.returnFocus(E.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),E.props.onAfterClose&&E.props.onAfterClose(),m.default.deregister(E)},E.open=function(){E.beforeOpen(),E.state.afterOpen&&E.state.beforeClose?(clearTimeout(E.closeTimer),E.setState({beforeClose:!1})):(E.props.shouldFocusAfterRender&&(u.setupScopedFocus(E.node),u.markForFocusLater()),E.setState({isOpen:!0},function(){E.openAnimationFrame=requestAnimationFrame(function(){E.setState({afterOpen:!0}),E.props.isOpen&&E.props.onAfterOpen&&E.props.onAfterOpen({overlayEl:E.overlay,contentEl:E.content})})}))},E.close=function(){E.props.closeTimeoutMS>0?E.closeWithTimeout():E.closeWithoutTimeout()},E.focusContent=function(){return E.content&&!E.contentHasFocus()&&E.content.focus({preventScroll:!0})},E.closeWithTimeout=function(){var S=Date.now()+E.props.closeTimeoutMS;E.setState({beforeClose:!0,closesAt:S},function(){E.closeTimer=setTimeout(E.closeWithoutTimeout,E.state.closesAt-Date.now())})},E.closeWithoutTimeout=function(){E.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},E.afterClose)},E.handleKeyDown=function(S){S.keyCode===G&&(0,f.default)(E.content,S),E.props.shouldCloseOnEsc&&S.keyCode===yt&&(S.stopPropagation(),E.requestClose(S))},E.handleOverlayOnClick=function(S){E.shouldClose===null&&(E.shouldClose=!0),E.shouldClose&&E.props.shouldCloseOnOverlayClick&&(E.ownerHandlesClose()?E.requestClose(S):E.focusContent()),E.shouldClose=null},E.handleContentOnMouseUp=function(){E.shouldClose=!1},E.handleOverlayOnMouseDown=function(S){!E.props.shouldCloseOnOverlayClick&&S.target==E.overlay&&S.preventDefault()},E.handleContentOnClick=function(){E.shouldClose=!1},E.handleContentOnMouseDown=function(){E.shouldClose=!1},E.requestClose=function(S){return E.ownerHandlesClose()&&E.props.onRequestClose(S)},E.ownerHandlesClose=function(){return E.props.onRequestClose},E.shouldBeClosed=function(){return!E.state.isOpen&&!E.state.beforeClose},E.contentHasFocus=function(){return document.activeElement===E.content||E.content.contains(document.activeElement)},E.buildClassName=function(S,A){var P=(typeof A>"u"?"undefined":r(A))==="object"?A:{base:ue[S],afterOpen:ue[S]+"--after-open",beforeClose:ue[S]+"--before-close"},W=P.base;return E.state.afterOpen&&(W=W+" "+P.afterOpen),E.state.beforeClose&&(W=W+" "+P.beforeClose),typeof A=="string"&&A?W+" "+A:W},E.attributesFromObject=function(S,A){return Object.keys(A).reduce(function(P,W){return P[S+"-"+W]=A[W],P},{})},E.state={afterOpen:!1,beforeClose:!1},E.shouldClose=null,E.moveFromContentToOverlay=null,E}return i(K,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(E,S){this.props.isOpen&&!E.isOpen?this.open():!this.props.isOpen&&E.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!S.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var E=this.props,S=E.appElement,A=E.ariaHideApp,P=E.htmlOpenClassName,W=E.bodyOpenClassName;W&&v.add(document.body,W),P&&v.add(document.getElementsByTagName("html")[0],P),A&&(Yt+=1,g.hide(S)),m.default.register(this)}},{key:"render",value:function(){var E=this.props,S=E.id,A=E.className,P=E.overlayClassName,W=E.defaultStyles,ge=E.children,Lr=A?{}:W.content,fn=P?{}:W.overlay;if(this.shouldBeClosed())return null;var Hi={ref:this.setOverlayRef,className:this.buildClassName("overlay",P),style:n({},fn,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},hn=n({id:S,ref:this.setContentRef,style:n({},Lr,this.props.style.content),className:this.buildClassName("content",A),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Fr=this.props.contentElement(hn,ge);return this.props.overlayElement(Hi,Fr)}}]),K}(s.Component);cn.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},cn.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(p.default),a.default.instanceOf($.SafeHTMLCollection),a.default.instanceOf($.SafeNodeList),a.default.arrayOf(a.default.instanceOf(p.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=cn,e.exports=t.default})(pf,pf.exports);function Ky(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function qy(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function Gy(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ky.__suppressDeprecationWarning=!0;qy.__suppressDeprecationWarning=!0;Gy.__suppressDeprecationWarning=!0;function c$(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var s=e.displayName||e.name,o=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ky,t.componentWillReceiveProps=qy),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Gy;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,c,f){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,u,c,d)}}return e}const f$=Object.freeze(Object.defineProperty({__proto__:null,polyfill:c$},Symbol.toStringTag,{value:"Module"})),h$=eE(f$);Object.defineProperty(Tr,"__esModule",{value:!0});Tr.bodyOpenClassName=Tr.portalClassName=void 0;var pm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d$=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Qy=M.exports,Ya=po(Qy),p$=eh.exports,Xa=po(p$),m$=Wh.exports,z=po(m$),g$=pf.exports,mm=po(g$),y$=Gt,v$=E$(y$),Ln=Wt,gm=po(Ln),w$=h$;function E$(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function po(e){return e&&e.__esModule?e:{default:e}}function S$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ym(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function C$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $$=Tr.portalClassName="ReactModalPortal",x$=Tr.bodyOpenClassName="ReactModal__Body--open",ar=Ln.canUseDOM&&Xa.default.createPortal!==void 0,vm=function(t){return document.createElement(t)},wm=function(){return ar?Xa.default.createPortal:Xa.default.unstable_renderSubtreeIntoContainer};function Qo(e){return e()}var mo=function(e){C$(t,e);function t(){var n,r,i,s;S$(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(r=(i=ym(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!ar&&Xa.default.unmountComponentAtNode(i.node);var u=Qo(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var c=wm(),f=c(i,Ya.default.createElement(mm.default,pm({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(f)},r),ym(i,s)}return d$(t,[{key:"componentDidMount",value:function(){if(!!Ln.canUseDOM){ar||(this.node=vm("div")),this.node.className=this.props.portalClassName;var r=Qo(this.props.parentSelector);r.appendChild(this.node),!ar&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Qo(r.parentSelector),s=Qo(this.props.parentSelector);return{prevParent:i,nextParent:s}}},{key:"componentDidUpdate",value:function(r,i,s){if(!!Ln.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;r.portalClassName!==l&&(this.node.className=l);var u=s.prevParent,c=s.nextParent;c!==u&&(u.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!a)&&!ar&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Ln.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-i)):this.removePortal()}}},{key:"render",value:function(){if(!Ln.canUseDOM||!ar)return null;!this.node&&ar&&(this.node=vm("div"));var r=wm();return r(Ya.default.createElement(mm.default,pm({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){v$.setElement(r)}}]),t}(Qy.Component);mo.propTypes={isOpen:z.default.bool.isRequired,style:z.default.shape({content:z.default.object,overlay:z.default.object}),portalClassName:z.default.string,bodyOpenClassName:z.default.string,htmlOpenClassName:z.default.string,className:z.default.oneOfType([z.default.string,z.default.shape({base:z.default.string.isRequired,afterOpen:z.default.string.isRequired,beforeClose:z.default.string.isRequired})]),overlayClassName:z.default.oneOfType([z.default.string,z.default.shape({base:z.default.string.isRequired,afterOpen:z.default.string.isRequired,beforeClose:z.default.string.isRequired})]),appElement:z.default.oneOfType([z.default.instanceOf(gm.default),z.default.instanceOf(Ln.SafeHTMLCollection),z.default.instanceOf(Ln.SafeNodeList),z.default.arrayOf(z.default.instanceOf(gm.default))]),onAfterOpen:z.default.func,onRequestClose:z.default.func,closeTimeoutMS:z.default.number,ariaHideApp:z.default.bool,shouldFocusAfterRender:z.default.bool,shouldCloseOnOverlayClick:z.default.bool,shouldReturnFocusAfterClose:z.default.bool,preventScroll:z.default.bool,parentSelector:z.default.func,aria:z.default.object,data:z.default.object,role:z.default.string,contentLabel:z.default.string,shouldCloseOnEsc:z.default.bool,overlayRef:z.default.func,contentRef:z.default.func,id:z.default.string,overlayElement:z.default.func,contentElement:z.default.func};mo.defaultProps={isOpen:!1,portalClassName:$$,bodyOpenClassName:x$,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Ya.default.createElement("div",t,n)},contentElement:function(t,n){return Ya.default.createElement("div",t,n)}};mo.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,w$.polyfill)(mo);Tr.default=mo;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Tr,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}t.default=r.default,e.exports=t.default})(df,df.exports);const T$=Dg(df.exports);function k$(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function _$(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var I$=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_$(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=k$(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Qe="-ms-",Ja="-moz-",Z="-webkit-",Yy="comm",Gh="rule",Qh="decl",N$="@import",Xy="@keyframes",b$=Math.abs,Pl=String.fromCharCode,O$=Object.assign;function D$(e,t){return(((t<<2^ut(e,0))<<2^ut(e,1))<<2^ut(e,2))<<2^ut(e,3)}function Jy(e){return e.trim()}function A$(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function yf(e,t){return e.indexOf(t)}function ut(e,t){return e.charCodeAt(t)|0}function Ws(e,t,n){return e.slice(t,n)}function Zt(e){return e.length}function Yh(e){return e.length}function Yo(e,t){return t.push(e),e}function R$(e,t){return e.map(t).join("")}var Ml=1,Ei=1,Zy=0,gt=0,xe=0,Ri="";function Ll(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ml,column:Ei,length:o,return:""}}function Zi(e,t){return O$(Ll("",null,null,"",null,null,0),e,{length:-e.length},t)}function P$(){return xe}function M$(){return xe=gt>0?ut(Ri,--gt):0,Ei--,xe===10&&(Ei=1,Ml--),xe}function St(){return xe=gt<Zy?ut(Ri,gt++):0,Ei++,xe===10&&(Ei=1,Ml++),xe}function sn(){return ut(Ri,gt)}function ga(){return gt}function go(e,t){return Ws(Ri,e,t)}function Ks(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ev(e){return Ml=Ei=1,Zy=Zt(Ri=e),gt=0,[]}function tv(e){return Ri="",e}function ya(e){return Jy(go(gt-1,vf(e===91?e+2:e===40?e+1:e)))}function L$(e){for(;(xe=sn())&&xe<33;)St();return Ks(e)>2||Ks(xe)>3?"":" "}function F$(e,t){for(;--t&&St()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return go(e,ga()+(t<6&&sn()==32&&St()==32))}function vf(e){for(;St();)switch(xe){case e:return gt;case 34:case 39:e!==34&&e!==39&&vf(xe);break;case 40:e===41&&vf(e);break;case 92:St();break}return gt}function U$(e,t){for(;St()&&e+xe!==47+10;)if(e+xe===42+42&&sn()===47)break;return"/*"+go(t,gt-1)+"*"+Pl(e===47?e:St())}function V$(e){for(;!Ks(sn());)St();return go(e,gt)}function z$(e){return tv(va("",null,null,null,[""],e=ev(e),0,[0],e))}function va(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,f=o,d=0,g=0,y=0,v=1,$=1,p=1,h=0,m="",w=i,x=s,N=r,C=m;$;)switch(y=h,h=St()){case 40:if(y!=108&&C.charCodeAt(f-1)==58){yf(C+=ee(ya(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=ya(h);break;case 9:case 10:case 13:case 32:C+=L$(y);break;case 92:C+=F$(ga()-1,7);continue;case 47:switch(sn()){case 42:case 47:Yo(B$(U$(St(),ga()),t,n),l);break;default:C+="/"}break;case 123*v:a[u++]=Zt(C)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:$=0;case 59+c:g>0&&Zt(C)-f&&Yo(g>32?Sm(C+";",r,n,f-1):Sm(ee(C," ","")+";",r,n,f-2),l);break;case 59:C+=";";default:if(Yo(N=Em(C,t,n,u,c,i,a,m,w=[],x=[],f),s),h===123)if(c===0)va(C,t,N,N,w,s,f,a,x);else switch(d){case 100:case 109:case 115:va(e,N,N,r&&Yo(Em(e,N,N,0,0,i,a,m,i,w=[],f),x),i,x,f,a,r?w:x);break;default:va(C,N,N,N,[""],x,0,a,x)}}u=c=g=0,v=p=1,m=C="",f=o;break;case 58:f=1+Zt(C),g=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&M$()==125)continue}switch(C+=Pl(h),h*v){case 38:p=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(Zt(C)-1)*p,p=1;break;case 64:sn()===45&&(C+=ya(St())),d=sn(),c=f=Zt(m=C+=V$(ga())),h++;break;case 45:y===45&&Zt(C)==2&&(v=0)}}return s}function Em(e,t,n,r,i,s,o,a,l,u,c){for(var f=i-1,d=i===0?s:[""],g=Yh(d),y=0,v=0,$=0;y<r;++y)for(var p=0,h=Ws(e,f+1,f=b$(v=o[y])),m=e;p<g;++p)(m=Jy(v>0?d[p]+" "+h:ee(h,/&\f/g,d[p])))&&(l[$++]=m);return Ll(e,t,n,i===0?Gh:a,l,u,c)}function B$(e,t,n){return Ll(e,t,n,Yy,Pl(P$()),Ws(e,2,-2),0)}function Sm(e,t,n,r){return Ll(e,t,n,Qh,Ws(e,0,r),Ws(e,r+1,-1),r)}function nv(e,t){switch(D$(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Ja+e+Qe+e+e;case 6828:case 4268:return Z+e+Qe+e+e;case 6165:return Z+e+Qe+"flex-"+e+e;case 5187:return Z+e+ee(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+Qe+"flex-$1$2")+e;case 5443:return Z+e+Qe+"flex-item-"+ee(e,/flex-|-self/,"")+e;case 4675:return Z+e+Qe+"flex-line-pack"+ee(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+Qe+ee(e,"shrink","negative")+e;case 5292:return Z+e+Qe+ee(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+ee(e,"-grow","")+Z+e+Qe+ee(e,"grow","positive")+e;case 4554:return Z+ee(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(e)-1-t>6)switch(ut(e,t+1)){case 109:if(ut(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Ja+(ut(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yf(e,"stretch")?nv(ee(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ut(e,t+1)!==115)break;case 6444:switch(ut(e,Zt(e)-3-(~yf(e,"!important")&&10))){case 107:return ee(e,":",":"+Z)+e;case 101:return ee(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+(ut(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+Qe+"$2box$3")+e}break;case 5936:switch(ut(e,t+11)){case 114:return Z+e+Qe+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+Qe+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+Qe+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+Qe+e+e}return e}function li(e,t){for(var n="",r=Yh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function j$(e,t,n,r){switch(e.type){case N$:case Qh:return e.return=e.return||e.value;case Yy:return"";case Xy:return e.return=e.value+"{"+li(e.children,r)+"}";case Gh:e.value=e.props.join(",")}return Zt(n=li(e.children,r))?e.return=e.value+"{"+n+"}":""}function H$(e){var t=Yh(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function W$(e){return function(t){t.root||(t=t.return)&&e(t)}}function K$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qh:e.return=nv(e.value,e.length);break;case Xy:return li([Zi(e,{value:ee(e.value,"@","@"+Z)})],r);case Gh:if(e.length)return R$(e.props,function(i){switch(A$(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return li([Zi(e,{props:[ee(i,/:(read-\w+)/,":"+Ja+"$1")]})],r);case"::placeholder":return li([Zi(e,{props:[ee(i,/:(plac\w+)/,":"+Z+"input-$1")]}),Zi(e,{props:[ee(i,/:(plac\w+)/,":"+Ja+"$1")]}),Zi(e,{props:[ee(i,/:(plac\w+)/,Qe+"input-$1")]})],r)}return""})}}function q$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var G$=function(t,n,r){for(var i=0,s=0;i=s,s=sn(),i===38&&s===12&&(n[r]=1),!Ks(s);)St();return go(t,gt)},Q$=function(t,n){var r=-1,i=44;do switch(Ks(i)){case 0:i===38&&sn()===12&&(n[r]=1),t[r]+=G$(gt-1,n,r);break;case 2:t[r]+=ya(i);break;case 4:if(i===44){t[++r]=sn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Pl(i)}while(i=St());return t},Y$=function(t,n){return tv(Q$(ev(t),n))},Cm=new WeakMap,X$=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Cm.get(r))&&!i){Cm.set(t,!0);for(var s=[],o=Y$(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},J$=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}},Z$=[K$],ex=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var $=v.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Z$,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var $=v.getAttribute("data-emotion").split(" "),p=1;p<$.length;p++)s[$[p]]=!0;a.push(v)});var l,u=[X$,J$];{var c,f=[j$,W$(function(v){c.insert(v)})],d=H$(u.concat(i,f)),g=function($){return li(z$($),d)};l=function($,p,h,m){c=h,g($?$+"{"+p.styles+"}":p.styles),m&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new I$({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},rv={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,Xh=Le?Symbol.for("react.element"):60103,Jh=Le?Symbol.for("react.portal"):60106,Fl=Le?Symbol.for("react.fragment"):60107,Ul=Le?Symbol.for("react.strict_mode"):60108,Vl=Le?Symbol.for("react.profiler"):60114,zl=Le?Symbol.for("react.provider"):60109,Bl=Le?Symbol.for("react.context"):60110,Zh=Le?Symbol.for("react.async_mode"):60111,jl=Le?Symbol.for("react.concurrent_mode"):60111,Hl=Le?Symbol.for("react.forward_ref"):60112,Wl=Le?Symbol.for("react.suspense"):60113,tx=Le?Symbol.for("react.suspense_list"):60120,Kl=Le?Symbol.for("react.memo"):60115,ql=Le?Symbol.for("react.lazy"):60116,nx=Le?Symbol.for("react.block"):60121,rx=Le?Symbol.for("react.fundamental"):60117,ix=Le?Symbol.for("react.responder"):60118,sx=Le?Symbol.for("react.scope"):60119;function kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xh:switch(e=e.type,e){case Zh:case jl:case Fl:case Vl:case Ul:case Wl:return e;default:switch(e=e&&e.$$typeof,e){case Bl:case Hl:case ql:case Kl:case zl:return e;default:return t}}case Jh:return t}}}function iv(e){return kt(e)===jl}ie.AsyncMode=Zh;ie.ConcurrentMode=jl;ie.ContextConsumer=Bl;ie.ContextProvider=zl;ie.Element=Xh;ie.ForwardRef=Hl;ie.Fragment=Fl;ie.Lazy=ql;ie.Memo=Kl;ie.Portal=Jh;ie.Profiler=Vl;ie.StrictMode=Ul;ie.Suspense=Wl;ie.isAsyncMode=function(e){return iv(e)||kt(e)===Zh};ie.isConcurrentMode=iv;ie.isContextConsumer=function(e){return kt(e)===Bl};ie.isContextProvider=function(e){return kt(e)===zl};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xh};ie.isForwardRef=function(e){return kt(e)===Hl};ie.isFragment=function(e){return kt(e)===Fl};ie.isLazy=function(e){return kt(e)===ql};ie.isMemo=function(e){return kt(e)===Kl};ie.isPortal=function(e){return kt(e)===Jh};ie.isProfiler=function(e){return kt(e)===Vl};ie.isStrictMode=function(e){return kt(e)===Ul};ie.isSuspense=function(e){return kt(e)===Wl};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fl||e===jl||e===Vl||e===Ul||e===Wl||e===tx||typeof e=="object"&&e!==null&&(e.$$typeof===ql||e.$$typeof===Kl||e.$$typeof===zl||e.$$typeof===Bl||e.$$typeof===Hl||e.$$typeof===rx||e.$$typeof===ix||e.$$typeof===sx||e.$$typeof===nx)};ie.typeOf=kt;(function(e){e.exports=ie})(rv);var sv=rv.exports,ox={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ax={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ov={};ov[sv.ForwardRef]=ox;ov[sv.Memo]=ax;var lx=!0;function av(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ed=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||lx===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},lv=function(t,n,r){ed(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function ux(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var cx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fx=/[A-Z]|^ms/g,hx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,uv=function(t){return t.charCodeAt(1)===45},$m=function(t){return t!=null&&typeof t!="boolean"},nc=q$(function(e){return uv(e)?e:e.replace(fx,"-$&").toLowerCase()}),xm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(hx,function(r,i,s){return en={name:i,styles:s,next:en},i})}return cx[t]!==1&&!uv(t)&&typeof n=="number"&&n!==0?n+"px":n};function qs(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return en={name:n.name,styles:n.styles,next:en},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)en={name:r.name,styles:r.styles,next:en},r=r.next;var i=n.styles+";";return i}return dx(e,t,n)}case"function":{if(e!==void 0){var s=en,o=n(e);return en=s,qs(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function dx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=qs(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":$m(o)&&(r+=nc(s)+":"+xm(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)$m(o[a])&&(r+=nc(s)+":"+xm(s,o[a])+";");else{var l=qs(e,t,o);switch(s){case"animation":case"animationName":{r+=nc(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Tm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,en,td=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";en=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=qs(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=qs(r,n,t[a]),i&&(s+=o[a]);Tm.lastIndex=0;for(var l="",u;(u=Tm.exec(s))!==null;)l+="-"+u[1];var c=ux(s)+l;return{name:c,styles:s,next:en}},px=function(t){return t()},mx=sp["useInsertionEffect"]?sp["useInsertionEffect"]:!1,cv=mx||px,nd={}.hasOwnProperty,fv=M.exports.createContext(typeof HTMLElement<"u"?ex({key:"css"}):null);fv.Provider;var hv=function(t){return M.exports.forwardRef(function(n,r){var i=M.exports.useContext(fv);return t(n,i,r)})},dv=M.exports.createContext({}),wf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",gx=function(t,n){var r={};for(var i in n)nd.call(n,i)&&(r[i]=n[i]);return r[wf]=t,r},yx=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ed(n,r,i),cv(function(){return lv(n,r,i)}),null},vx=hv(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[wf],s=[r],o="";typeof e.className=="string"?o=av(t.registered,s,e.className):e.className!=null&&(o=e.className+" ");var a=td(s,void 0,M.exports.useContext(dv));o+=t.key+"-"+a.name;var l={};for(var u in e)nd.call(e,u)&&u!=="css"&&u!==wf&&(l[u]=e[u]);return l.ref=n,l.className=o,M.exports.createElement(M.exports.Fragment,null,M.exports.createElement(yx,{cache:t,serialized:a,isStringTag:typeof i=="string"}),M.exports.createElement(i,l))}),Gl={exports:{}},Ql={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx=M.exports,Ex=Symbol.for("react.element"),Sx=Symbol.for("react.fragment"),Cx=Object.prototype.hasOwnProperty,$x=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xx={key:!0,ref:!0,__self:!0,__source:!0};function pv(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cx.call(t,r)&&!xx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ex,type:e,key:s,ref:o,props:i,_owner:$x.current}}Ql.Fragment=Sx;Ql.jsx=pv;Ql.jsxs=pv;(function(e){e.exports=Ql})(Gl);const mv=Gl.exports.Fragment,F=Gl.exports.jsx,_e=Gl.exports.jsxs;var Tx=mv;function oe(e,t,n){return nd.call(t,"css")?F(vx,gx(e,t),n):F(e,t,n)}function Pi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return td(t)}var I=function(){var t=Pi.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},kx=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var s=t[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=e(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function _x(e,t,n){var r=[],i=av(e,r,n);return r.length<2?n:i+t(r)}var Ix=function(t){var n=t.cache,r=t.serializedArr;return cv(function(){for(var i=0;i<r.length;i++)lv(n,r[i],!1)}),null},rc=hv(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];var d=td(c,t.registered);return r.push(d),ed(t,d,!1),t.key+"-"+d.name},s=function(){for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];return _x(t.registered,i,kx(c))},o={css:i,cx:s,theme:M.exports.useContext(dv)},a=e.children(o);return n=!0,M.exports.createElement(M.exports.Fragment,null,M.exports.createElement(Ix,{cache:t,serializedArr:r}),a)});function Ef(){return Ef=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ef.apply(this,arguments)}function Nx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sf(e,t)}function Sf(e,t){return Sf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Sf(e,t)}function bx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Cf=new Map,Xo=new WeakMap,km=0,Ox=void 0;function Dx(e){return e?(Xo.has(e)||(km+=1,Xo.set(e,km.toString())),Xo.get(e)):"0"}function Ax(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Dx(e.root):e[t])}).toString()}function Rx(e){var t=Ax(e),n=Cf.get(t);if(!n){var r=new Map,i,s=new IntersectionObserver(function(o){o.forEach(function(a){var l,u=a.isIntersecting&&i.some(function(c){return a.intersectionRatio>=c});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(function(c){c(u,a)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},Cf.set(t,n)}return n}function gv(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=Ox),typeof window.IntersectionObserver>"u"&&r!==void 0){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=Rx(n),o=s.id,a=s.observer,l=s.elements,u=l.get(e)||[];return l.has(e)||l.set(e,u),u.push(t),a.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),Cf.delete(o))}}var Px=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function _m(e){return typeof e.children!="function"}var Im=function(e){Nx(t,e);function t(r){var i;return i=e.call(this,r)||this,i.node=null,i._unobserveCb=null,i.handleNode=function(s){i.node&&(i.unobserve(),!s&&!i.props.triggerOnce&&!i.props.skip&&i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=s||null,i.observeNode()},i.handleChange=function(s,o){s&&i.props.triggerOnce&&i.unobserve(),_m(i.props)||i.setState({inView:s,entry:o}),i.props.onChange&&i.props.onChange(s,o)},i.state={inView:!!r.initialInView,entry:void 0},i}var n=t.prototype;return n.componentDidUpdate=function(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var i=this.props,s=i.threshold,o=i.root,a=i.rootMargin,l=i.trackVisibility,u=i.delay,c=i.fallbackInView;this._unobserveCb=gv(this.node,this.handleChange,{threshold:s,root:o,rootMargin:a,trackVisibility:l,delay:u},c)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!_m(this.props)){var i=this.state,s=i.inView,o=i.entry;return this.props.children({inView:s,entry:o,ref:this.handleNode})}var a=this.props,l=a.children,u=a.as,c=bx(a,Px);return M.exports.createElement(u||"div",Ef({ref:this.handleNode},c),l)},t}(M.exports.Component);function yv(e){var t,n=e===void 0?{}:e,r=n.threshold,i=n.delay,s=n.trackVisibility,o=n.rootMargin,a=n.root,l=n.triggerOnce,u=n.skip,c=n.initialInView,f=n.fallbackInView,d=n.onChange,g=M.exports.useState(null),y=g[0],v=g[1],$=M.exports.useRef(),p=M.exports.useState({inView:!!c,entry:void 0}),h=p[0],m=p[1];$.current=d,M.exports.useEffect(function(){if(!(u||!y)){var N=gv(y,function(C,D){m({inView:C,entry:D}),$.current&&$.current(C,D),D.isIntersecting&&l&&N&&(N(),N=void 0)},{root:a,rootMargin:o,threshold:r,trackVisibility:s,delay:i},f);return function(){N&&N()}}},[Array.isArray(r)?r.toString():r,y,a,o,l,u,s,f,i]);var w=(t=h.entry)==null?void 0:t.target;M.exports.useEffect(function(){!y&&w&&!l&&!u&&m({inView:!!c,entry:void 0})},[y,w,l,u,c]);var x=[v,h.inView,h.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var vv={exports:{}},se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=Symbol.for("react.element"),id=Symbol.for("react.portal"),Yl=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),Zl=Symbol.for("react.provider"),eu=Symbol.for("react.context"),Mx=Symbol.for("react.server_context"),tu=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),su=Symbol.for("react.lazy"),Lx=Symbol.for("react.offscreen"),wv;wv=Symbol.for("react.module.reference");function Mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rd:switch(e=e.type,e){case Yl:case Jl:case Xl:case nu:case ru:return e;default:switch(e=e&&e.$$typeof,e){case Mx:case eu:case tu:case su:case iu:case Zl:return e;default:return t}}case id:return t}}}se.ContextConsumer=eu;se.ContextProvider=Zl;se.Element=rd;se.ForwardRef=tu;se.Fragment=Yl;se.Lazy=su;se.Memo=iu;se.Portal=id;se.Profiler=Jl;se.StrictMode=Xl;se.Suspense=nu;se.SuspenseList=ru;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return Mt(e)===eu};se.isContextProvider=function(e){return Mt(e)===Zl};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rd};se.isForwardRef=function(e){return Mt(e)===tu};se.isFragment=function(e){return Mt(e)===Yl};se.isLazy=function(e){return Mt(e)===su};se.isMemo=function(e){return Mt(e)===iu};se.isPortal=function(e){return Mt(e)===id};se.isProfiler=function(e){return Mt(e)===Jl};se.isStrictMode=function(e){return Mt(e)===Xl};se.isSuspense=function(e){return Mt(e)===nu};se.isSuspenseList=function(e){return Mt(e)===ru};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yl||e===Jl||e===Xl||e===nu||e===ru||e===Lx||typeof e=="object"&&e!==null&&(e.$$typeof===su||e.$$typeof===iu||e.$$typeof===Zl||e.$$typeof===eu||e.$$typeof===tu||e.$$typeof===wv||e.getModuleId!==void 0)};se.typeOf=Mt;(function(e){e.exports=se})(vv);function ln(e,t){return Object.keys(t).forEach(function(n){n==="default"||n==="__esModule"||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}function Qt(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var un={},Ev={};Qt(Ev,"AttentionSeeker",()=>gT);const Fx=I`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Ux=I`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Vx=I`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,zx=I`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Bx=I`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,jx=I`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Hx=I`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Wx=I`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Kx=I`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,qx=I`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Gx=I`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Qx=I`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Yx=I`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Xx={};Qt(Xx,"Reveal",()=>Lt);const Jx=I`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Zx=I`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eT=I`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tT=I`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nT=I`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sd=I`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rT=I`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,iT=I`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sT=I`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oT=I`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aT=I`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lT=I`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,uT=I`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function cT({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=sd,iterationCount:i=1}){return Pi`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};
  `}function fT(e){return e==null}function hT(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}const Za=Pi`
  opacity: 0;
`,dT=Pi`
  display: inline-block;
  white-space: pre;
`,Lt=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=sd,triggerOnce:a=!1,css:l,className:u,style:c,childClassName:f,childStyle:d,children:g,onVisibilityChange:y}=e,v=M.exports.useMemo(()=>cT({keyframes:o,duration:i}),[i,o]);return fT(g)?null:hT(g)?oe(pT,{...e,animationStyles:v,children:String(g)}):vv.exports.isFragment(g)?oe(Sv,{...e,animationStyles:v}):oe(Tx,{children:M.exports.Children.map(g,($,p)=>{if(!M.exports.isValidElement($))return null;const h=[l,v],m=r+(t?p*i*n:0);switch($.type){case"ol":case"ul":return oe(rc,{children:({cx:w})=>oe($.type,{...$.props,className:w(u,$.props.className),style:{...c,...$.props.style},children:oe(Lt,{...e,children:$.props.children})})});case"li":return oe(Im,{threshold:s,triggerOnce:a,onChange:y,children:({inView:w,ref:x})=>oe(rc,{children:({cx:N})=>oe($.type,{...$.props,ref:x,className:N(f,$.props.className),css:w?h:Za,style:{...d,...$.props.style,animationDelay:m+"ms"}})})});default:return oe(Im,{threshold:s,triggerOnce:a,onChange:y,children:({inView:w,ref:x})=>oe("div",{ref:x,className:u,css:w?h:Za,style:{...c,animationDelay:m+"ms"},children:oe(rc,{children:({cx:N})=>oe($.type,{...$.props,className:N(f,$.props.className),style:{...d,...$.props.style}})})})})}})})},pT=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,css:l,className:u,style:c,children:f,onVisibilityChange:d}=e,{ref:g,inView:y}=yv({triggerOnce:a,threshold:o,onChange:d});return n?oe("div",{ref:g,className:u,css:[l,dT],style:c,children:f.split("").map((v,$)=>oe("span",{css:y?t:Za,style:{animationDelay:i+$*s*r+"ms"},children:v},$))}):oe(Sv,{...e,children:f})},Sv=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,css:i,className:s,style:o,children:a,onVisibilityChange:l}=e,{ref:u,inView:c}=yv({triggerOnce:r,threshold:n,onChange:l});return oe("div",{ref:u,className:s,css:c?[i,t]:Za,style:o,children:a})};function mT(e){switch(e){case"flash":return[Ux];case"headShake":return[Vx,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[zx,{animationTimingFunction:"ease-in-out"}];case"jello":return[Bx,{transformOrigin:"center"}];case"pulse":return[jx,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[Hx];case"shake":return[Wx];case"shakeX":return[Kx];case"shakeY":return[qx];case"swing":return[Gx,{transformOrigin:"top center"}];case"tada":return[Qx];case"wobble":return[Yx];case"bounce":default:return[Fx,{transformOrigin:"center bottom"}]}}const gT=e=>{const{effect:t="bounce",...n}=e,[r,i]=M.exports.useMemo(()=>mT(t),[t]);return oe(Lt,{keyframes:r,css:i,...n})};var Cv={};Qt(Cv,"Bounce",()=>IT);const yT=I`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,vT=I`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,wT=I`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ET=I`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ST=I`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,CT=I`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,$T=I`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,xT=I`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,TT=I`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,kT=I`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function _T(e,t){switch(t){case"down":return e?$T:vT;case"left":return e?xT:wT;case"right":return e?TT:ET;case"up":return e?kT:ST;default:return e?CT:yT}}const IT=e=>{const{direction:t,reverse:n=!1,...r}=e,i=M.exports.useMemo(()=>_T(n,t),[t,n]);return oe(Lt,{keyframes:i,...r})};var $v={};Qt($v,"Fade",()=>jT);const NT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,bT=I`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,OT=I`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,DT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,AT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,RT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,PT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,MT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,LT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,FT=I`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,UT=I`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,VT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,zT=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function BT(e,t,n){switch(n){case"bottom-left":return t?bT:Zx;case"bottom-right":return t?OT:eT;case"down":return e?t?AT:nT:t?DT:tT;case"left":return e?t?PT:rT:t?RT:sd;case"right":return e?t?LT:sT:t?MT:iT;case"top-left":return t?FT:oT;case"top-right":return t?UT:aT;case"up":return e?t?zT:uT:t?VT:lT;default:return t?NT:Jx}}const jT=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,s=M.exports.useMemo(()=>BT(t,r,n),[t,n,r]);return oe(Lt,{keyframes:s,...i})};var xv={};Qt(xv,"Flip",()=>XT);const HT=I`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,WT=I`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,KT=I`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,qT=I`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,GT=I`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function QT(e,t){switch(t){case"horizontal":return e?qT:WT;case"vertical":return e?GT:KT;default:return HT}}const YT=Pi`
  backface-visibility: visible;
`,XT=e=>{const{direction:t,reverse:n=!1,...r}=e,i=M.exports.useMemo(()=>QT(n,t),[t,n]);return oe(Lt,{css:YT,keyframes:i,...r})};var Tv={};Qt(Tv,"Hinge",()=>rk);const JT=I`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,ZT=I`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ek=I`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tk=I`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,nk=Pi`
  transform-origin: top left;
`,rk=e=>oe(Lt,{css:nk,keyframes:JT,...e});var kv={};Qt(kv,"JackInTheBox",()=>_v);const _v=e=>oe(Lt,{keyframes:ZT,...e});var Iv={};Qt(Iv,"Roll",()=>sk);function ik(e){return e?tk:ek}const sk=e=>{const{reverse:t=!1,...n}=e,r=M.exports.useMemo(()=>ik(t),[t]);return oe(Lt,{keyframes:r,...n})};var Nv={};Qt(Nv,"Rotate",()=>yk);const ok=I`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ak=I`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,lk=I`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,uk=I`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ck=I`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,fk=I`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,hk=I`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,dk=I`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,pk=I`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,mk=I`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function gk(e,t){switch(t){case"bottom-left":return e?[hk,{transformOrigin:"left bottom"}]:[ak,{transformOrigin:"left bottom"}];case"bottom-right":return e?[dk,{transformOrigin:"right bottom"}]:[lk,{transformOrigin:"right bottom"}];case"top-left":return e?[pk,{transformOrigin:"left bottom"}]:[uk,{transformOrigin:"left bottom"}];case"top-right":return e?[mk,{transformOrigin:"right bottom"}]:[ck,{transformOrigin:"right bottom"}];default:return e?[fk,{transformOrigin:"center"}]:[ok,{transformOrigin:"center"}]}}const yk=e=>{const{direction:t,reverse:n=!1,...r}=e,[i,s]=M.exports.useMemo(()=>gk(n,t),[t,n]);return oe(Lt,{css:s,keyframes:i,...r})};var bv={};Qt(bv,"Slide",()=>_k);const vk=I`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,wk=I`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ek=I`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Sk=I`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ck=I`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,$k=I`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,xk=I`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Tk=I`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function kk(e,t){switch(t){case"down":return e?Ck:vk;case"right":return e?xk:Ek;case"up":return e?Tk:Sk;case"left":default:return e?$k:wk}}const _k=e=>{const{direction:t,reverse:n=!1,...r}=e,i=M.exports.useMemo(()=>kk(n,t),[t,n]);return oe(Lt,{keyframes:i,...r})};var Ov={};Qt(Ov,"Zoom",()=>Uk);const Ik=I`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Nk=I`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,bk=I`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ok=I`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Dk=I`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ak=I`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Rk=I`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pk=I`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Mk=I`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Lk=I`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Fk(e,t){switch(t){case"down":return e?Rk:Nk;case"left":return e?Pk:bk;case"right":return e?Mk:Ok;case"up":return e?Lk:Dk;default:return e?Ak:Ik}}const Uk=e=>{const{direction:t,reverse:n=!1,...r}=e,i=M.exports.useMemo(()=>Fk(n,t),[t,n]);return oe(Lt,{keyframes:i,...r})};ln(un,Ev);ln(un,Cv);ln(un,$v);ln(un,xv);ln(un,Tv);ln(un,kv);ln(un,Iv);ln(un,Nv);ln(un,bv);ln(un,Ov);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Vk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},zk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Bk=function(e){const t=Dv(e);return zk.encodeByteArray(t,!0)},Av=function(e){return Bk(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ou())}function Wk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qk(){return ou().indexOf("Electron/")>=0}function Gk(){const e=ou();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Qk(){return ou().indexOf("MSAppHost/")>=0}function Yk(){return typeof indexedDB=="object"}function Xk(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk="FirebaseError";class Mi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jk,Object.setPrototypeOf(this,Mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rv.prototype.create)}}class Rv{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Zk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mi(i,a,r)}}function Zk(e,t){return e.replace(e2,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const e2=/\{\$([^}]+)}/g;function $f(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Nm(s)&&Nm(o)){if(!$f(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nm(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){return e&&e._delegate?e._delegate:e}class Gs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(r2(t))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=lr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=lr){return this.instances.has(t)}getOptions(t=lr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n2(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=lr){return this.component?this.component.multipleInstances?t:lr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n2(e){return e===lr?void 0:e}function r2(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new t2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const s2={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},o2=te.INFO,a2={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},l2=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=a2[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pv{constructor(t){this.name=t,this._logLevel=o2,this._logHandler=l2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const u2=(e,t)=>t.some(n=>e instanceof n);let bm,Om;function c2(){return bm||(bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f2(){return Om||(Om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mv=new WeakMap,xf=new WeakMap,Lv=new WeakMap,ic=new WeakMap,od=new WeakMap;function h2(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Kn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mv.set(n,e)}).catch(()=>{}),od.set(t,e),t}function d2(e){if(xf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});xf.set(e,t)}let Tf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Lv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function p2(e){Tf=e(Tf)}function m2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(sc(this),t,...n);return Lv.set(r,t.sort?t.sort():[t]),Kn(r)}:f2().includes(e)?function(...t){return e.apply(sc(this),t),Kn(Mv.get(this))}:function(...t){return Kn(e.apply(sc(this),t))}}function g2(e){return typeof e=="function"?m2(e):(e instanceof IDBTransaction&&d2(e),u2(e,c2())?new Proxy(e,Tf):e)}function Kn(e){if(e instanceof IDBRequest)return h2(e);if(ic.has(e))return ic.get(e);const t=g2(e);return t!==e&&(ic.set(e,t),od.set(t,e)),t}const sc=e=>od.get(e);function y2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Kn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kn(o.result),l.oldVersion,l.newVersion,Kn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const v2=["get","getKey","getAll","getAllKeys","count"],w2=["put","add","delete","clear"],oc=new Map;function Dm(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(oc.get(t))return oc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=w2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return oc.set(t,s),s}p2(e=>({...e,get:(t,n,r)=>Dm(t,n)||e.get(t,n,r),has:(t,n)=>!!Dm(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kf="@firebase/app",Am="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Pv("@firebase/app"),C2="@firebase/app-compat",$2="@firebase/analytics-compat",x2="@firebase/analytics",T2="@firebase/app-check-compat",k2="@firebase/app-check",_2="@firebase/auth",I2="@firebase/auth-compat",N2="@firebase/database",b2="@firebase/database-compat",O2="@firebase/functions",D2="@firebase/functions-compat",A2="@firebase/installations",R2="@firebase/installations-compat",P2="@firebase/messaging",M2="@firebase/messaging-compat",L2="@firebase/performance",F2="@firebase/performance-compat",U2="@firebase/remote-config",V2="@firebase/remote-config-compat",z2="@firebase/storage",B2="@firebase/storage-compat",j2="@firebase/firestore",H2="@firebase/firestore-compat",W2="firebase",K2="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="[DEFAULT]",q2={[kf]:"fire-core",[C2]:"fire-core-compat",[x2]:"fire-analytics",[$2]:"fire-analytics-compat",[k2]:"fire-app-check",[T2]:"fire-app-check-compat",[_2]:"fire-auth",[I2]:"fire-auth-compat",[N2]:"fire-rtdb",[b2]:"fire-rtdb-compat",[O2]:"fire-fn",[D2]:"fire-fn-compat",[A2]:"fire-iid",[R2]:"fire-iid-compat",[P2]:"fire-fcm",[M2]:"fire-fcm-compat",[L2]:"fire-perf",[F2]:"fire-perf-compat",[U2]:"fire-rc",[V2]:"fire-rc-compat",[z2]:"fire-gcs",[B2]:"fire-gcs-compat",[j2]:"fire-fst",[H2]:"fire-fst-compat","fire-js":"fire-js",[W2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map,_f=new Map;function G2(e,t){try{e.container.addComponent(t)}catch(n){kr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tl(e){const t=e.name;if(_f.has(t))return kr.debug(`There were multiple attempts to register component ${t}.`),!1;_f.set(t,e);for(const n of el.values())G2(n,e);return!0}function Q2(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new Rv("app","Firebase",Y2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=K2;function Z2(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Fv,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw _r.create("bad-app-name",{appName:String(r)});const i=el.get(r);if(i){if($f(e,i.options)&&$f(n,i.config))return i;throw _r.create("duplicate-app",{appName:r})}const s=new i2(r);for(const a of _f.values())s.addComponent(a);const o=new X2(e,n,s);return el.set(r,o),o}function e3(e=Fv){const t=el.get(e);if(!t)throw _r.create("no-app",{appName:e});return t}function ui(e,t,n){var r;let i=(r=q2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kr.warn(a.join(" "));return}tl(new Gs(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3="firebase-heartbeat-database",n3=1,Qs="firebase-heartbeat-store";let ac=null;function Uv(){return ac||(ac=y2(t3,n3,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qs)}}}).catch(e=>{throw _r.create("idb-open",{originalErrorMessage:e.message})})),ac}async function r3(e){var t;try{return(await Uv()).transaction(Qs).objectStore(Qs).get(Vv(e))}catch(n){if(n instanceof Mi)kr.warn(n.message);else{const r=_r.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});kr.warn(r.message)}}}async function Rm(e,t){var n;try{const i=(await Uv()).transaction(Qs,"readwrite");return await i.objectStore(Qs).put(t,Vv(e)),i.done}catch(r){if(r instanceof Mi)kr.warn(r.message);else{const i=_r.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});kr.warn(i.message)}}}function Vv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i3=1024,s3=30*24*60*60*1e3;class o3{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new l3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=s3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pm(),{heartbeatsToSend:n,unsentEntries:r}=a3(this._heartbeatsCache.heartbeats),i=Av(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pm(){return new Date().toISOString().substring(0,10)}function a3(e,t=i3){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mm(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mm(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class l3{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yk()?Xk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await r3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Mm(e){return Av(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u3(e){tl(new Gs("platform-logger",t=>new E2(t),"PRIVATE")),tl(new Gs("heartbeat",t=>new o3(t),"PRIVATE")),ui(kf,Am,e),ui(kf,Am,"esm2017"),ui("fire-js","")}u3("");var c3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,ad=ad||{},V=c3||self;function nl(){}function If(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function yo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function f3(e){return Object.prototype.hasOwnProperty.call(e,lc)&&e[lc]||(e[lc]=++h3)}var lc="closure_uid_"+(1e9*Math.random()>>>0),h3=0;function d3(e,t,n){return e.call.apply(e.bind,arguments)}function p3(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Be(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=d3:Be=p3,Be.apply(null,arguments)}function Jo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Ke(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var m3=0;rr.prototype.s=!1;rr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),m3!=0)&&f3(this)};rr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Bv=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i=typeof e=="string"?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function g3(e){e:{var t=a_;const n=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Lm(e){return Array.prototype.concat.apply([],arguments)}function ld(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function rl(e){return/^[\s\xa0]*$/.test(e)}var Fm=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function nt(e,t){return e.indexOf(t)!=-1}function uc(e,t){return e<t?-1:e>t?1:0}var rt;e:{var Um=V.navigator;if(Um){var Vm=Um.userAgent;if(Vm){rt=Vm;break e}}rt=""}function ud(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function jv(e){const t={};for(const n in e)t[n]=e[n];return t}var zm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<zm.length;s++)n=zm[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function cd(e){return cd[" "](e),e}cd[" "]=nl;function y3(e){var t=E3;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var v3=nt(rt,"Opera"),Ci=nt(rt,"Trident")||nt(rt,"MSIE"),Wv=nt(rt,"Edge"),Nf=Wv||Ci,Kv=nt(rt,"Gecko")&&!(nt(rt.toLowerCase(),"webkit")&&!nt(rt,"Edge"))&&!(nt(rt,"Trident")||nt(rt,"MSIE"))&&!nt(rt,"Edge"),w3=nt(rt.toLowerCase(),"webkit")&&!nt(rt,"Edge");function qv(){var e=V.document;return e?e.documentMode:void 0}var il;e:{var cc="",fc=function(){var e=rt;if(Kv)return/rv:([^\);]+)(\)|;)/.exec(e);if(Wv)return/Edge\/([\d\.]+)/.exec(e);if(Ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(w3)return/WebKit\/(\S+)/.exec(e);if(v3)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(fc&&(cc=fc?fc[1]:""),Ci){var hc=qv();if(hc!=null&&hc>parseFloat(cc)){il=String(hc);break e}}il=cc}var E3={};function S3(){return y3(function(){let e=0;const t=Fm(String(il)).split("."),n=Fm("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=uc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||uc(i[2].length==0,s[2].length==0)||uc(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var bf;if(V.document&&Ci){var Bm=qv();bf=Bm||parseInt(il,10)||void 0}else bf=void 0;var C3=bf,$3=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{V.addEventListener("test",nl,t),V.removeEventListener("test",nl,t)}catch{}return e}();function Ze(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function Ys(e,t){if(Ze.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Kv){e:{try{cd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:x3[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ys.Z.h.call(this)}}Ke(Ys,Ze);var x3={2:"touch",3:"pen",4:"mouse"};Ys.prototype.h=function(){Ys.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),T3=0;function k3(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++T3,this.ca=this.fa=!1}function au(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function lu(e){this.src=e,this.g={},this.h=0}lu.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Df(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new k3(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};function Of(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=zv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(au(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Df(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}var fd="closure_lm_"+(1e6*Math.random()|0),dc={};function Gv(e,t,n,r,i){if(r&&r.once)return Yv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Gv(e,t[s],n,r,i);return null}return n=pd(n),e&&e[vo]?e.N(t,n,yo(r)?!!r.capture:!!r,i):Qv(e,t,n,!1,r,i)}function Qv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=yo(i)?!!i.capture:!!i,a=dd(e);if(a||(e[fd]=a=new lu(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=_3(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)$3||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Jv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _3(){function e(n){return t.call(e.src,e.listener,n)}var t=I3;return e}function Yv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Yv(e,t[s],n,r,i);return null}return n=pd(n),e&&e[vo]?e.O(t,n,yo(r)?!!r.capture:!!r,i):Qv(e,t,n,!0,r,i)}function Xv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xv(e,t[s],n,r,i);else r=yo(r)?!!r.capture:!!r,n=pd(n),e&&e[vo]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Df(s,n,r,i),-1<n&&(au(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=dd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Df(t,n,r,i)),(n=-1<e?t[e]:null)&&hd(n))}function hd(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[vo])Of(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Jv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=dd(t))?(Of(n,e),n.h==0&&(n.src=null,t[fd]=null)):au(e)}}}function Jv(e){return e in dc?dc[e]:dc[e]="on"+e}function I3(e,t){if(e.ca)e=!0;else{t=new Ys(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&hd(e),e=n.call(r,t)}return e}function dd(e){return e=e[fd],e instanceof lu?e:null}var pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function pd(e){return typeof e=="function"?e:(e[pc]||(e[pc]=function(t){return e.handleEvent(t)}),e[pc])}function Me(){rr.call(this),this.i=new lu(this),this.P=this,this.I=null}Ke(Me,rr);Me.prototype[vo]=!0;Me.prototype.removeEventListener=function(e,t,n,r){Xv(this,e,t,n,r)};function je(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ze(t,e);else if(t instanceof Ze)t.target=t.target||e;else{var i=t;t=new Ze(r,e),Hv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Zo(o,r,!0,t)&&i}if(o=t.g=e,i=Zo(o,r,!0,t)&&i,i=Zo(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Zo(o,r,!1,t)&&i}Me.prototype.M=function(){if(Me.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)au(n[r]);delete e.g[t],e.h--}}this.I=null};Me.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Me.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Zo(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Of(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var md=V.JSON.stringify;function N3(){var e=e1;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class b3{constructor(){this.h=this.g=null}add(t,n){const r=Zv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Zv=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new O3,e=>e.reset());class O3{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function D3(e){V.setTimeout(()=>{throw e},0)}function gd(e,t){Af||A3(),Rf||(Af(),Rf=!0),e1.add(e,t)}var Af;function A3(){var e=V.Promise.resolve(void 0);Af=function(){e.then(R3)}}var Rf=!1,e1=new b3;function R3(){for(var e;e=N3();){try{e.h.call(e.g)}catch(n){D3(n)}var t=Zv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rf=!1}function uu(e,t){Me.call(this),this.h=e||1,this.g=t||V,this.j=Be(this.kb,this),this.l=Date.now()}Ke(uu,Me);O=uu.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),je(this,"tick"),this.da&&(yd(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yd(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}O.M=function(){uu.Z.M.call(this),yd(this),delete this.g};function vd(e,t,n){if(typeof e=="function")n&&(e=Be(e,n));else if(e&&typeof e.handleEvent=="function")e=Be(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:V.setTimeout(e,t||0)}function t1(e){e.g=vd(()=>{e.g=null,e.i&&(e.i=!1,t1(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class P3 extends rr{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:t1(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xs(e){rr.call(this),this.h=e,this.g={}}Ke(Xs,rr);var jm=[];function n1(e,t,n,r){Array.isArray(n)||(n&&(jm[0]=n.toString()),n=jm);for(var i=0;i<n.length;i++){var s=Gv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function r1(e){ud(e.g,function(t,n){this.g.hasOwnProperty(n)&&hd(t)},e),e.g={}}Xs.prototype.M=function(){Xs.Z.M.call(this),r1(this)};Xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cu(){this.g=!0}cu.prototype.Aa=function(){this.g=!1};function M3(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function L3(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ei(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+U3(e,n)+(r?" "+r:"")})}function F3(e,t){e.info(function(){return"TIMEOUT: "+t})}cu.prototype.info=function(){};function U3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return md(n)}catch{return t}}var Rr={},Hm=null;function fu(){return Hm=Hm||new Me}Rr.Ma="serverreachability";function i1(e){Ze.call(this,Rr.Ma,e)}Ke(i1,Ze);function Js(e){const t=fu();je(t,new i1(t))}Rr.STAT_EVENT="statevent";function s1(e,t){Ze.call(this,Rr.STAT_EVENT,e),this.stat=t}Ke(s1,Ze);function it(e){const t=fu();je(t,new s1(t,e))}Rr.Na="timingevent";function o1(e,t){Ze.call(this,Rr.Na,e),this.size=t}Ke(o1,Ze);function wo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){e()},t)}var hu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},a1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function wd(){}wd.prototype.h=null;function Wm(e){return e.h||(e.h=e.i())}function l1(){}var Eo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ed(){Ze.call(this,"d")}Ke(Ed,Ze);function Sd(){Ze.call(this,"c")}Ke(Sd,Ze);var Pf;function du(){}Ke(du,wd);du.prototype.g=function(){return new XMLHttpRequest};du.prototype.i=function(){return{}};Pf=new du;function So(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Xs(this),this.P=V3,e=Nf?125:void 0,this.W=new uu(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new u1}function u1(){this.i=null,this.g="",this.h=!1}var V3=45e3,Mf={},sl={};O=So.prototype;O.setTimeout=function(e){this.P=e};function Lf(e,t,n){e.K=1,e.v=mu(Tn(t)),e.s=n,e.U=!0,c1(e,null)}function c1(e,t){e.F=Date.now(),Co(e),e.A=Tn(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),y1(n.h,"t",r),e.C=0,n=e.l.H,e.h=new u1,e.g=L1(e.l,n?t:null,!e.s),0<e.O&&(e.L=new P3(Be(e.Ia,e,e.g),e.O)),n1(e.V,e.g,"readystatechange",e.gb),t=e.H?jv(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Js(),M3(e.j,e.u,e.A,e.m,e.X,e.s)}O.gb=function(e){e=e.target;const t=this.L;t&&yn(e)==3?t.l():this.Ia(e)};O.Ia=function(e){try{if(e==this.g)e:{const c=yn(this.g);var t=this.g.Da();const f=this.g.ba();if(!(3>c)&&(c!=3||Nf||this.g&&(this.h.h||this.g.ga()||Qm(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?Js(3):Js(2)),pu(this);var n=this.g.ba();this.N=n;t:if(f1(this)){var r=Qm(this.g);e="";var i=r.length,s=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),ws(this);var o="";break t}this.h.i=new V.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,L3(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rl(a)){var u=a;break t}}u=null}if(n=u)ei(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ff(this,n);else{this.i=!1,this.o=3,it(12),hr(this),ws(this);break e}}this.U?(h1(this,c,o),Nf&&this.i&&c==3&&(n1(this.V,this.W,"tick",this.fb),this.W.start())):(ei(this.j,this.m,o,null),Ff(this,o)),c==4&&hr(this),this.i&&!this.I&&(c==4?A1(this.l,this):(this.i=!1,Co(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),hr(this),ws(this)}}}catch{}finally{}};function f1(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function h1(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=z3(e,n),i==sl){t==4&&(e.o=4,it(14),r=!1),ei(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Mf){e.o=4,it(15),ei(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ei(e.j,e.m,i,null),Ff(e,i);f1(e)&&i!=sl&&i!=Mf&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),bd(t),t.L=!0,it(11))):(ei(e.j,e.m,n,"[Invalid Chunked Response]"),hr(e),ws(e))}O.fb=function(){if(this.g){var e=yn(this.g),t=this.g.ga();this.C<t.length&&(pu(this),h1(this,e,t),this.i&&e!=4&&Co(this))}};function z3(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?sl:(n=Number(t.substring(n,r)),isNaN(n)?Mf:(r+=1,r+n>t.length?sl:(t=t.substr(r,n),e.C=r+n,t)))}O.cancel=function(){this.I=!0,hr(this)};function Co(e){e.Y=Date.now()+e.P,d1(e,e.P)}function d1(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=wo(Be(e.eb,e),t)}function pu(e){e.B&&(V.clearTimeout(e.B),e.B=null)}O.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(F3(this.j,this.A),this.K!=2&&(Js(),it(17)),hr(this),this.o=2,ws(this)):d1(this,this.Y-e)};function ws(e){e.l.G==0||e.I||A1(e.l,e)}function hr(e){pu(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,yd(e.W),r1(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ff(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Uf(n.i,e))){if(n.I=e.N,!e.J&&Uf(n.i,e)&&n.G==3){try{var r=n.Ca.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ul(n),vu(n);else break e;Nd(n),it(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=wo(Be(n.ab,n),6e3));if(1>=E1(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else dr(n,11)}else if((e.J||n.g==e)&&ul(n),!rl(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const f=u[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(nt(y,"spdy")||nt(y,"quic")||nt(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,pe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=M1(r,r.H?r.la:null,r.W),o.J){S1(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(pu(a),Co(a)),r.g=o}else O1(r);0<n.l.length&&wu(n)}else u[0]!="stop"&&u[0]!="close"||dr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?dr(n,7):Id(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Js(4)}catch{}}function B3(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(If(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Cd(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(If(e)||typeof e=="string")Bv(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(If(e)||typeof e=="string"){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=B3(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Li(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Li)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}O=Li.prototype;O.R=function(){$d(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};O.T=function(){return $d(this),this.g.concat()};function $d(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ir(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Ir(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}O.get=function(e,t){return Ir(this.h,e)?this.h[e]:t};O.set=function(e,t){Ir(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};O.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};function Ir(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var p1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function j3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nr(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Nr){this.g=t!==void 0?t:e.g,ol(this,e.j),this.s=e.s,al(this,e.i),ll(this,e.m),this.l=e.l,t=e.h;var n=new Zs;n.i=t.i,t.g&&(n.g=new Li(t.g),n.h=t.h),Km(this,n),this.o=e.o}else e&&(n=String(e).match(p1))?(this.g=!!t,ol(this,n[1]||"",!0),this.s=Es(n[2]||""),al(this,n[3]||"",!0),ll(this,n[4]),this.l=Es(n[5]||"",!0),Km(this,n[6]||"",!0),this.o=Es(n[7]||"")):(this.g=!!t,this.h=new Zs(null,this.g))}Nr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ss(t,qm,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ss(t,qm,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ss(n,n.charAt(0)=="/"?G3:q3,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ss(n,Y3)),e.join("")};function Tn(e){return new Nr(e)}function ol(e,t,n){e.j=n?Es(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function al(e,t,n){e.i=n?Es(t,!0):t}function ll(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Km(e,t,n){t instanceof Zs?(e.h=t,X3(e.h,e.g)):(n||(t=ss(t,Q3)),e.h=new Zs(t,e.g))}function pe(e,t,n){e.h.set(t,n)}function mu(e){return pe(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function H3(e){return e instanceof Nr?Tn(e):new Nr(e,void 0)}function W3(e,t,n,r){var i=new Nr(null,void 0);return e&&ol(i,e),t&&al(i,t),n&&ll(i,n),r&&(i.l=r),i}function Es(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ss(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,K3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function K3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qm=/[#\/\?@]/g,q3=/[#\?:]/g,G3=/[#\?]/g,Q3=/[#\?@]/g,Y3=/#/g;function Zs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ir(e){e.g||(e.g=new Li,e.h=0,e.i&&j3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=Zs.prototype;O.add=function(e,t){ir(this),this.i=null,e=Fi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function m1(e,t){ir(e),t=Fi(e,t),Ir(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ir(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&$d(e)))}function g1(e,t){return ir(e),t=Fi(e,t),Ir(e.g.h,t)}O.forEach=function(e,t){ir(this),this.g.forEach(function(n,r){Bv(n,function(i){e.call(t,i,r,this)},this)},this)};O.T=function(){ir(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n};O.R=function(e){ir(this);var t=[];if(typeof e=="string")g1(this,e)&&(t=Lm(t,this.g.get(Fi(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Lm(t,e[n])}return t};O.set=function(e,t){return ir(this),this.i=null,e=Fi(this,e),g1(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function y1(e,t,n){m1(e,t),0<n.length&&(e.i=null,e.g.set(Fi(e,t),ld(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function Fi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function X3(e,t){t&&!e.j&&(ir(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(m1(this,r),y1(this,i,n))},e)),e.j=t}var J3=class{constructor(e,t){this.h=e,this.g=t}};function v1(e){this.l=e||Z3,V.PerformanceNavigationTiming?(e=V.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Z3=10;function w1(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function E1(e){return e.h?1:e.g?e.g.size:0}function Uf(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xd(e,t){e.g?e.g.add(t):e.h=t}function S1(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}v1.prototype.cancel=function(){if(this.i=C1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function C1(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ld(e.i)}function Td(){}Td.prototype.stringify=function(e){return V.JSON.stringify(e,void 0)};Td.prototype.parse=function(e){return V.JSON.parse(e,void 0)};function e_(){this.g=new Td}function t_(e,t,n){const r=n||"";try{Cd(e,function(i,s){let o=i;yo(i)&&(o=md(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function n_(e,t){const n=new cu;if(V.Image){const r=new Image;r.onload=Jo(ea,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Jo(ea,n,r,"TestLoadImage: error",!1,t),r.onabort=Jo(ea,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Jo(ea,n,r,"TestLoadImage: timeout",!1,t),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ea(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function $o(e){this.l=e.$b||null,this.j=e.ib||!1}Ke($o,wd);$o.prototype.g=function(){return new gu(this.l,this.j)};$o.prototype.i=function(e){return function(){return e}}({});function gu(e,t){Me.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=kd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(gu,Me);var kd=0;O=gu.prototype;O.open=function(e,t){if(this.readyState!=kd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,eo(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||V).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xo(this)),this.readyState=kd};O.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$1(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function $1(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}O.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xo(this):eo(this),this.readyState==3&&$1(this)}};O.Ua=function(e){this.g&&(this.response=this.responseText=e,xo(this))};O.Ta=function(e){this.g&&(this.response=e,xo(this))};O.ha=function(){this.g&&xo(this)};function xo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,eo(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function eo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var r_=V.JSON.parse;function ke(e){Me.call(this),this.headers=new Li,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=x1,this.K=this.L=!1}Ke(ke,Me);var x1="",i_=/^https?$/i,s_=["POST","PUT"];O=ke.prototype;O.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pf.g(),this.C=this.u?Wm(this.u):Wm(Pf),this.g.onreadystatechange=Be(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){Gm(this,s);return}e=n||"";const i=new Li(this.headers);r&&Cd(r,function(s,o){i.set(o,s)}),r=g3(i.T()),n=V.FormData&&e instanceof V.FormData,!(0<=zv(s_,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_1(this),0<this.B&&((this.K=o_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.pa,this)):this.A=vd(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Gm(this,s)}};function o_(e){return Ci&&S3()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function a_(e){return e.toLowerCase()=="content-type"}O.pa=function(){typeof ad<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Gm(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,T1(e),yu(e)}function T1(e){e.D||(e.D=!0,je(e,"complete"),je(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,je(this,"complete"),je(this,"abort"),yu(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yu(this,!0)),ke.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?k1(this):this.cb())};O.cb=function(){k1(this)};function k1(e){if(e.h&&typeof ad<"u"&&(!e.C[1]||yn(e)!=4||e.ba()!=2)){if(e.v&&yn(e)==4)vd(e.Fa,0,e);else if(je(e,"readystatechange"),yn(e)==4){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(p1)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!i_.test(i?i.toLowerCase():"")}n=r}if(n)je(e,"complete"),je(e,"success");else{e.m=6;try{var o=2<yn(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",T1(e)}}finally{yu(e)}}}}function yu(e,t){if(e.g){_1(e);const n=e.g,r=e.C[0]?nl:null;e.g=null,e.C=null,t||je(e,"ready");try{n.onreadystatechange=r}catch{}}}function _1(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(V.clearTimeout(e.A),e.A=null)}function yn(e){return e.g?e.g.readyState:0}O.ba=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),r_(t)}};function Qm(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case x1:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function l_(e){let t="";return ud(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function _d(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=l_(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):pe(e,t,n))}function es(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function I1(e){this.za=0,this.l=[],this.h=new cu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=es("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=es("baseRetryDelayMs",5e3,e),this.$a=es("retryDelaySeedMs",1e4,e),this.Ya=es("forwardChannelMaxRetries",2,e),this.ra=es("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new v1(e&&e.concurrentRequestLimit),this.Ca=new e_,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}O=I1.prototype;O.ma=8;O.G=1;function Id(e){if(N1(e),e.G==3){var t=e.V++,n=Tn(e.F);pe(n,"SID",e.J),pe(n,"RID",t),pe(n,"TYPE","terminate"),To(e,n),t=new So(e,e.h,t,void 0),t.K=2,t.v=mu(Tn(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(t.v.toString(),"")),!n&&V.Image&&(new Image().src=t.v,n=!0),n||(t.g=L1(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Co(t)}P1(e)}O.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function vu(e){e.g&&(bd(e),e.g.cancel(),e.g=null)}function N1(e){vu(e),e.u&&(V.clearTimeout(e.u),e.u=null),ul(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&V.clearTimeout(e.m),e.m=null)}function mc(e,t){e.l.push(new J3(e.Za++,t)),e.G==3&&wu(e)}function wu(e){w1(e.i)||e.m||(e.m=!0,gd(e.Ha,e),e.C=0)}function u_(e,t){return E1(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=wo(Be(e.Ha,e,t),R1(e,e.C)),e.C++,!0)}O.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new So(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=jv(s),Hv(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=b1(this,i,t),n=Tn(this.F),pe(n,"RID",e),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),To(this,n),this.o&&s&&_d(n,this.o,s),xd(this.i,i),this.Ra&&pe(n,"TYPE","init"),this.ja?(pe(n,"$req",t),pe(n,"SID","null"),i.$=!0,Lf(i,n,null)):Lf(i,n,t),this.G=2}}else this.G==3&&(e?Ym(this,e):this.l.length==0||w1(this.i)||Ym(this))};function Ym(e,t){var n;t?n=t.m:n=e.V++;const r=Tn(e.F);pe(r,"SID",e.J),pe(r,"RID",n),pe(r,"AID",e.U),To(e,r),e.o&&e.s&&_d(r,e.o,e.s),n=new So(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=b1(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xd(e.i,n),Lf(n,r,t)}function To(e,t){e.j&&Cd({},function(n,r){pe(t,r,n)})}function b1(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Be(e.j.Oa,e.j,e):null;e:{var i=e.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{t_(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function O1(e){e.g||e.u||(e.Y=1,gd(e.Ga,e),e.A=0)}function Nd(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=wo(Be(e.Ga,e),R1(e,e.A)),e.A++,!0)}O.Ga=function(){if(this.u=null,D1(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=wo(Be(this.bb,this),e)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),vu(this),D1(this))};function bd(e){e.B!=null&&(V.clearTimeout(e.B),e.B=null)}function D1(e){e.g=new So(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=Tn(e.oa);pe(t,"RID","rpc"),pe(t,"SID",e.J),pe(t,"CI",e.N?"0":"1"),pe(t,"AID",e.U),To(e,t),pe(t,"TYPE","xmlhttp"),e.o&&e.s&&_d(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=mu(Tn(t)),n.s=null,n.U=!0,c1(n,e)}O.ab=function(){this.v!=null&&(this.v=null,vu(this),Nd(this),it(19))};function ul(e){e.v!=null&&(V.clearTimeout(e.v),e.v=null)}function A1(e,t){var n=null;if(e.g==t){ul(e),bd(e),e.g=null;var r=2}else if(Uf(e.i,t))n=t.D,S1(e.i,t),r=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=fu(),je(r,new o1(r,n)),wu(e)}else O1(e);else if(i=t.o,i==3||i==0&&0<e.I||!(r==1&&u_(e,t)||r==2&&Nd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:dr(e,5);break;case 4:dr(e,10);break;case 3:dr(e,6);break;default:dr(e,2)}}}function R1(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function dr(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var r=Be(e.jb,e);n||(n=new Nr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||ol(n,"https"),mu(n)),n_(n.toString(),r)}else it(2);e.G=0,e.j&&e.j.va(t),P1(e),N1(e)}O.jb=function(e){e?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function P1(e){e.G=0,e.I=-1,e.j&&((C1(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ld(e.l),e.l.length=0),e.j.ua())}function M1(e,t,n){let r=H3(n);if(r.i!="")t&&al(r,t+"."+r.i),ll(r,r.m);else{const i=V.location;r=W3(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&ud(e.aa,function(i,s){pe(r,s,i)}),t=e.D,n=e.sa,t&&n&&pe(r,t,n),pe(r,"VER",e.ma),To(e,r),r}function L1(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new ke(new $o({ib:!0})):new ke(e.qa),t.L=e.H,t}function F1(){}O=F1.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function cl(){if(Ci&&!(10<=Number(C3)))throw Error("Environmental error: no available transport.")}cl.prototype.g=function(e,t){return new $t(e,t)};function $t(e,t){Me.call(this),this.g=new I1(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!rl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rl(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ui(this)}Ke($t,Me);$t.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),gd(Be(e.hb,e,t))),it(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=M1(e,null,e.W),wu(e)};$t.prototype.close=function(){Id(this.g)};$t.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,mc(this.g,t)}else this.v?(t={},t.__data__=md(e),mc(this.g,t)):mc(this.g,e)};$t.prototype.M=function(){this.g.j=null,delete this.j,Id(this.g),delete this.g,$t.Z.M.call(this)};function U1(e){Ed.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ke(U1,Ed);function V1(){Sd.call(this),this.status=1}Ke(V1,Sd);function Ui(e){this.g=e}Ke(Ui,F1);Ui.prototype.xa=function(){je(this.g,"a")};Ui.prototype.wa=function(e){je(this.g,new U1(e))};Ui.prototype.va=function(e){je(this.g,new V1)};Ui.prototype.ua=function(){je(this.g,"b")};cl.prototype.createWebChannel=cl.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;hu.NO_ERROR=0;hu.TIMEOUT=8;hu.HTTP_ERROR=6;a1.COMPLETE="complete";l1.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";Me.prototype.listen=Me.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var c_=function(){return new cl},f_=function(){return fu()},gc=hu,h_=a1,d_=Rr,Xm={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},p_=$o,ta=l1,m_=ke;const Jm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Pv("@firebase/firestore");function Zm(){return br.logLevel}function R(e,...t){if(br.logLevel<=te.DEBUG){const n=t.map(Od);br.debug(`Firestore (${Vi}): ${e}`,...n)}}function kn(e,...t){if(br.logLevel<=te.ERROR){const n=t.map(Od);br.error(`Firestore (${Vi}): ${e}`,...n)}}function eg(e,...t){if(br.logLevel<=te.WARN){const n=t.map(Od);br.warn(`Firestore (${Vi}): ${e}`,...n)}}function Od(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e="Unexpected state"){const t=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+e;throw kn(t),new Error(t)}function le(e,t){e||B()}function j(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Mi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class y_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class v_{constructor(t){this.t=t,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new g_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return le(t===null||typeof t=="string"),new lt(t)}}class w_{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class E_{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new w_(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C_{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(le(typeof n.token=="string"),this.A=n.token,new S_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=$_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ne(e,t){return e<t?-1:e>t?1:0}function $i(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new U(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new U(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return be.fromMillis(Date.now())}static fromDate(t){return be.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ne(this.nanoseconds,t.nanoseconds):ne(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new be(0,0))}static max(){return new q(new be(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,n,r){n===void 0?n=0:n>t.length&&B(),r===void 0?r=t.length-n:r>t.length-n&&B(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return to.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof to?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class me extends to{construct(t,n,r){return new me(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new U(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const x_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends to{construct(t,n,r){return new Je(t,n,r)}static isValidIdentifier(t){return x_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new U(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(me.fromString(t))}static fromName(t){return new L(me.fromString(t).popFirst(5))}static empty(){return new L(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&me.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return me.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new me(t.slice()))}}function T_(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Xn(i,L.empty(),t)}function k_(e){return new Xn(e.readTime,e.key,-1)}class Xn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(q.min(),L.empty(),-1)}static max(){return new Xn(q.max(),L.empty(),-1)}}function __(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=L.comparator(e.documentKey,t.documentKey),n!==0?n:ne(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==I_)throw e;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,r)=>{n(t)})}static reject(t){return new k((n,r)=>{r(t)})}static waitFor(t){return new k((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=k.resolve(!1);for(const r of t)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new k((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new k((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function _o(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function B1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dd.at=-1;class De{constructor(t,n){this.comparator=t,this.root=n||Ue.EMPTY}insert(t,n){return new De(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(t){return new De(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new na(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new na(this.root,t,this.comparator,!1)}getReverseIterator(){return new na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new na(this.root,t,this.comparator,!0)}}class na{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ue{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:Ue.RED,this.left=i!=null?i:Ue.EMPTY,this.right=s!=null?s:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Ue(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.comparator=t,this.data=new De(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(t){return new ng(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Oe(this.comparator);return n.data=t,n}}class ng{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.fields=t,t.sort(Je.comparator)}static empty(){return new on([])}unionWith(t){let n=new Oe(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new on(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $i(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new We(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new We(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ne(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}We.EMPTY_BYTE_STRING=new We("");const b_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(e){if(le(!!e),typeof e=="string"){let t=0;const n=b_.exec(e);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$e(e.seconds),nanos:$e(e.nanos)}}function $e(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function xi(e){return typeof e=="string"?We.fromBase64String(e):We.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function H1(e){const t=e.mapValue.fields.__previous_value__;return j1(t)?H1(t):t}function no(e){const t=Jn(e.mapValue.fields.__local_write_time__.timestampValue);return new be(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t,n,r,i,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ro{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ro&&t.projectId===this.projectId&&t.database===this.database}}function Eu(e){return e==null}function fl(e){return e===0&&1/e==-1/0}function D_(e){return typeof e=="number"&&Number.isInteger(e)&&!fl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?j1(e)?4:A_(e)?9007199254740991:10:B()}function an(e,t){if(e===t)return!0;const n=Or(e);if(n!==Or(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return no(e).isEqual(no(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Jn(r.timestampValue),o=Jn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return xi(r.bytesValue).isEqual(xi(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?fl(s)===fl(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return $i(e.arrayValue.values||[],t.arrayValue.values||[],an);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(tg(s)!==tg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!an(s[a],o[a])))return!1;return!0}(e,t);default:return B()}}function io(e,t){return(e.values||[]).find(n=>an(n,t))!==void 0}function Ti(e,t){if(e===t)return 0;const n=Or(e),r=Or(t);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return rg(e.timestampValue,t.timestampValue);case 4:return rg(no(e),no(t));case 5:return ne(e.stringValue,t.stringValue);case 6:return function(i,s){const o=xi(i),a=xi(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ne(o[l],a[l]);if(u!==0)return u}return ne(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=ne($e(i.latitude),$e(s.latitude));return o!==0?o:ne($e(i.longitude),$e(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ti(o[l],a[l]);if(u)return u}return ne(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===ra.mapValue&&s===ra.mapValue)return 0;if(i===ra.mapValue)return 1;if(s===ra.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=ne(a[c],u[c]);if(f!==0)return f;const d=Ti(o[a[c]],l[u[c]]);if(d!==0)return d}return ne(a.length,u.length)}(e.mapValue,t.mapValue);default:throw B()}}function rg(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ne(e,t);const n=Jn(e),r=Jn(t),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function ci(e){return Vf(e)}function Vf(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Jn(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,L.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Vf(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Vf(r.fields[a])}`;return s+"}"}(e.mapValue):B();var t,n}function zf(e){return!!e&&"integerValue"in e}function Ad(e){return!!e&&"arrayValue"in e}function ig(e){return!!e&&"nullValue"in e}function sg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wa(e){return!!e&&"mapValue"in e}function Ss(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ss(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ss(e.arrayValue.values[n]);return t}return Object.assign({},e)}function A_(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!wa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ss(n)}setAll(t){let n=Je.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ss(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return an(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){zi(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new bt(Ss(this.value))}}function W1(e){const t=[];return zi(e.fields,(n,r)=>{const i=new Je([n]);if(wa(r)){const s=W1(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new on(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n,r,i,s,o){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ve(t,0,q.min(),q.min(),bt.empty(),0)}static newFoundDocument(t,n,r){return new Ve(t,1,n,q.min(),r,0)}static newNoDocument(t,n){return new Ve(t,2,n,q.min(),bt.empty(),0)}static newUnknownDocument(t,n){return new Ve(t,3,n,q.min(),bt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ve&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function og(e,t=null,n=[],r=[],i=null,s=null,o=null){return new R_(e,t,n,r,i,s,o)}function Rd(e){const t=j(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ci(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eu(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ci(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ci(r)).join(",")),t.ht=n}return t.ht}function P_(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ci(r.value)}`;var r}).join(", ")}]`),Eu(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ci(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ci(n)).join(",")),`Target(${t})`}function Pd(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!j_(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!an(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lg(e.startAt,t.startAt)&&lg(e.endAt,t.endAt)}function Bf(e){return L.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class ht extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,r):new M_(t,n,r):n==="array-contains"?new U_(t,r):n==="in"?new V_(t,r):n==="not-in"?new z_(t,r):n==="array-contains-any"?new B_(t,r):new ht(t,n,r)}static lt(t,n,r){return n==="in"?new L_(t,r):new F_(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ti(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.ft(Ti(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class M_ extends ht{constructor(t,n,r){super(t,n,r),this.key=L.fromName(r.referenceValue)}matches(t){const n=L.comparator(t.key,this.key);return this.ft(n)}}class L_ extends ht{constructor(t,n){super(t,"in",n),this.keys=K1("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class F_ extends ht{constructor(t,n){super(t,"not-in",n),this.keys=K1("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function K1(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class U_ extends ht{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ad(n)&&io(n.arrayValue,this.value)}}class V_ extends ht{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class z_ extends ht{constructor(t,n){super(t,"not-in",n)}matches(t){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class B_ extends ht{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ad(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>io(this.value.arrayValue,r))}}class hl{constructor(t,n){this.position=t,this.inclusive=n}}class Cs{constructor(t,n="asc"){this.field=t,this.dir=n}}function j_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ag(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ti(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lg(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!an(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function H_(e,t,n,r,i,s,o,a){return new Su(e,t,n,r,i,s,o,a)}function Md(e){return new Su(e)}function ug(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function W_(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function K_(e){for(const t of e.filters)if(t.dt())return t.field;return null}function q_(e){return e.collectionGroup!==null}function so(e){const t=j(e);if(t._t===null){t._t=[];const n=K_(t),r=W_(t);if(n!==null&&r===null)n.isKeyField()||t._t.push(new Cs(n)),t._t.push(new Cs(Je.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Cs(Je.keyField(),s))}}}return t._t}function _n(e){const t=j(e);if(!t.wt)if(t.limitType==="F")t.wt=og(t.path,t.collectionGroup,so(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of so(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Cs(s.field,o))}const r=t.endAt?new hl(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new hl(t.startAt.position,t.startAt.inclusive):null;t.wt=og(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.wt}function jf(e,t,n){return new Su(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Cu(e,t){return Pd(_n(e),_n(t))&&e.limitType===t.limitType}function q1(e){return`${Rd(_n(e))}|lt:${e.limitType}`}function Hf(e){return`Query(target=${P_(_n(e))}; limitType=${e.limitType})`}function Ld(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ag(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,so(n),r)||n.endAt&&!function(i,s,o){const a=ag(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,so(n),r))}(e,t)}function G_(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function G1(e){return(t,n)=>{let r=!1;for(const i of so(e)){const s=Q_(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Q_(e,t,n){const r=e.field.isKeyField()?L.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ti(a,l):B()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(t)?"-0":t}}function Y1(e){return{integerValue:""+e}}function Y_(e,t){return D_(t)?Y1(t):Q1(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this._=void 0}}function X_(e,t,n){return e instanceof dl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof oo?J1(e,t):e instanceof ao?Z1(e,t):function(r,i){const s=X1(r,i),o=cg(s)+cg(r.yt);return zf(s)&&zf(r.yt)?Y1(o):Q1(r.It,o)}(e,t)}function J_(e,t,n){return e instanceof oo?J1(e,t):e instanceof ao?Z1(e,t):n}function X1(e,t){return e instanceof pl?zf(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class dl extends $u{}class oo extends $u{constructor(t){super(),this.elements=t}}function J1(e,t){const n=ew(t);for(const r of e.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends $u{constructor(t){super(),this.elements=t}}function Z1(e,t){let n=ew(t);for(const r of e.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class pl extends $u{constructor(t,n){super(),this.It=t,this.yt=n}}function cg(e){return $e(e.integerValue||e.doubleValue)}function ew(e){return Ad(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Z_(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof oo&&r instanceof oo||n instanceof ao&&r instanceof ao?$i(n.elements,r.elements,an):n instanceof pl&&r instanceof pl?an(n.yt,r.yt):n instanceof dl&&r instanceof dl}(e.transform,t.transform)}class eI{constructor(t,n){this.version=t,this.transformResults=n}}class wn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new wn}static exists(t){return new wn(void 0,t)}static updateTime(t){return new wn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ea(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class xu{}function tw(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new rw(e.key,wn.none()):new Io(e.key,e.data,wn.none());{const n=e.data,r=bt.empty();let i=new Oe(Je.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(e.key,r,new on(i.toArray()),wn.none())}}function tI(e,t,n){e instanceof Io?function(r,i,s){const o=r.value.clone(),a=hg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Pr?function(r,i,s){if(!Ea(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=hg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(nw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function $s(e,t,n,r){return e instanceof Io?function(i,s,o,a){if(!Ea(i.precondition,s))return o;const l=i.value.clone(),u=dg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Pr?function(i,s,o,a){if(!Ea(i.precondition,s))return o;const l=dg(i.fieldTransforms,a,s),u=s.data;return u.setAll(nw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,s,o){return Ea(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function nI(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=X1(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function fg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$i(n,r,(i,s)=>Z_(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Io extends xu{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends xu{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nw(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function hg(e,t,n){const r=new Map;le(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,J_(o,a,n[i]))}return r}function dg(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,X_(s,o,t))}return r}class rw extends xu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rI extends xu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,X;function sI(e){switch(e){default:return B();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function iw(e){if(e===void 0)return kn("GRPC error has no .code"),_.UNKNOWN;switch(e){case Ce.OK:return _.OK;case Ce.CANCELLED:return _.CANCELLED;case Ce.UNKNOWN:return _.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return _.INTERNAL;case Ce.UNAVAILABLE:return _.UNAVAILABLE;case Ce.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ce.NOT_FOUND:return _.NOT_FOUND;case Ce.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ce.ABORTED:return _.ABORTED;case Ce.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ce.DATA_LOSS:return _.DATA_LOSS;default:return B()}}(X=Ce||(Ce={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){zi(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return B1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new De(L.comparator);function In(){return oI}const sw=new De(L.comparator);function os(...e){let t=sw;for(const n of e)t=t.insert(n.key,n);return t}function ow(e){let t=sw;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function pr(){return xs()}function aw(){return xs()}function xs(){return new Bi(e=>e.toString(),(e,t)=>e.isEqual(t))}const aI=new De(L.comparator),lI=new Oe(L.comparator);function Q(...e){let t=lI;for(const n of e)t=t.add(n);return t}const uI=new Oe(ne);function lw(){return uI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n){const r=new Map;return r.set(t,No.createSynthesizedTargetChangeForCurrentChange(t,n)),new Tu(q.min(),r,lw(),In(),Q())}}class No{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n){return new No(We.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,n,r,i){this.Tt=t,this.removedTargetIds=n,this.key=r,this.Et=i}}class uw{constructor(t,n){this.targetId=t,this.At=n}}class cw{constructor(t,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class pg{constructor(){this.Rt=0,this.bt=gg(),this.Pt=We.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Q(),n=Q(),r=Q();return this.bt.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new No(this.Pt,this.vt,t,n,r)}Nt(){this.Vt=!1,this.bt=gg()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class cI{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=In(),this.qt=mg(),this.Kt=new Oe(ne)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const r=this.zt(n);switch(t.state){case 0:this.Ht(n)&&r.Ct(t.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(t.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(t.resumeToken));break;default:B()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,r=t.At.count,i=this.Xt(n);if(i){const s=i.target;if(Bf(s))if(r===0){const o=new L(s.path);this.jt(n,o,Ve.newNoDocument(o,q.min()))}else le(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Bf(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ve.newNoDocument(l,t))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(t));const i=new Tu(t,n,this.Kt,this.Ut,r);return this.Ut=In(),this.qt=mg(),this.Kt=new Oe(ne),i}Qt(t,n){if(!this.Ht(t))return;const r=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,r){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let n=this.Lt.get(t);return n||(n=new pg,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new Oe(ne),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||R("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new pg),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function mg(){return new De(L.comparator)}function gg(){return new De(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dI{constructor(t,n){this.databaseId=t,this.gt=n}}function ml(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fw(e,t){return e.gt?t.toBase64():t.toUint8Array()}function pI(e,t){return ml(e,t.toTimestamp())}function En(e){return le(!!e),q.fromTimestamp(function(t){const n=Jn(t);return new be(n.seconds,n.nanos)}(e))}function Fd(e,t){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function hw(e){const t=me.fromString(e);return le(mw(t)),t}function Wf(e,t){return Fd(e.databaseId,t.path)}function yc(e,t){const n=hw(t);if(n.get(1)!==e.databaseId.projectId)throw new U(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new U(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new L(dw(n))}function Kf(e,t){return Fd(e.databaseId,t)}function mI(e){const t=hw(e);return t.length===4?me.emptyPath():dw(t)}function qf(e){return new me(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dw(e){return le(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function yg(e,t,n){return{name:Wf(e,t),fields:n.value.mapValue.fields}}function gI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.gt?(le(u===void 0||typeof u=="string"),We.fromBase64String(u||"")):(le(u===void 0||u instanceof Uint8Array),We.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:iw(l.code);return new U(u,l.message||"")}(o);n=new cw(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=yc(e,r.document.name),s=En(r.document.updateTime),o=new bt({mapValue:{fields:r.document.fields}}),a=Ve.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Sa(l,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=yc(e,r.document),s=r.readTime?En(r.readTime):q.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=yc(e,r.document),s=r.removedTargetIds||[];n=new Sa([],s,i,null)}else{if(!("filter"in t))return B();{t.filter;const r=t.filter;r.targetId;const i=r.count||0,s=new iI(i),o=r.targetId;n=new uw(o,s)}}return n}function yI(e,t){let n;if(t instanceof Io)n={update:yg(e,t.key,t.value)};else if(t instanceof rw)n={delete:Wf(e,t.key)};else if(t instanceof Pr)n={update:yg(e,t.key,t.data),updateMask:_I(t.fieldMask)};else{if(!(t instanceof rI))return B();n={verify:Wf(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof dl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ao)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pl)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw B()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:pI(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(e,t.precondition)),n}function vI(e,t){return e&&e.length>0?(le(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?En(r.updateTime):En(i);return s.isEqual(q.min())&&(s=En(i)),new eI(s,r.transformResults||[])}(n,t))):[]}function wI(e,t){return{documents:[Kf(e,t.path)]}}function EI(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Kf(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Kf(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(f){if(f.op==="=="){if(sg(f.value))return{unaryFilter:{field:Vr(f.field),op:"IS_NAN"}};if(ig(f.value))return{unaryFilter:{field:Vr(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(sg(f.value))return{unaryFilter:{field:Vr(f.field),op:"IS_NOT_NAN"}};if(ig(f.value))return{unaryFilter:{field:Vr(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(f.field),op:xI(f.op),value:f.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Vr(c.field),direction:$I(c.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Eu(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function SI(e){let t=mI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=pw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new Cs(ti(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,Eu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,d=c.values||[];return new hl(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,d=c.values||[];return new hl(d,f)}(n.endAt)),H_(t,i,o,s,a,"F",l,u)}function CI(e,t){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function pw(e){return e?e.unaryFilter!==void 0?[kI(e)]:e.fieldFilter!==void 0?[TI(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>pw(t)).reduce((t,n)=>t.concat(n)):B():[]}function $I(e){return fI[e]}function xI(e){return hI[e]}function Vr(e){return{fieldPath:e.canonicalString()}}function ti(e){return Je.fromServerFormat(e.fieldPath)}function TI(e){return ht.create(ti(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}function kI(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ti(e.unaryFilter.field);return ht.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ti(e.unaryFilter.field);return ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ti(e.unaryFilter.field);return ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ti(e.unaryFilter.field);return ht.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}function _I(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function mw(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&tI(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=$s(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=$s(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=aw();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=tw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Q())}isEqual(t){return this.batchId===t.batchId&&$i(this.mutations,t.mutations,(n,r)=>fg(n,r))&&$i(this.baseMutations,t.baseMutations,(n,r)=>fg(n,r))}}class Ud{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){le(t.mutations.length===r.length);let i=aI;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ud(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,n,r,i,s=q.min(),o=q.min(),a=We.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new wr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t){this.re=t}}function OI(e){const t=SI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?jf(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.Ye=new AI}addToCollectionParentIndex(t,n){return this.Ye.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(Xn.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(Xn.min())}updateCollectionGroup(t,n,r){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class AI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Oe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Oe(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ki(0)}static vn(){return new ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.changes=new Bi(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ve.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.getBaseDocument(t,n,r))).next(i=>(r!==null&&$s(r.mutation,i,on.empty(),be.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Q()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Q()){const i=pr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=os();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=pr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Q()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=In();const o=xs(),a=xs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),$s(c.mutation,u,c.mutation.getFieldMask(),be.now()))}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new PI(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=xs();let i=new De((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||on.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=aw();c.forEach(d=>{if(!s.has(d)){const g=tw(n.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):q_(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):k.resolve(pr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?k.resolve():this.getBaseDocument(t,c,f).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Q())).next(c=>({batchId:a,changes:ow(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new L(n)).next(r=>{let i=os();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=os();return this.indexManager.getCollectionParents(t,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new Su(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=os();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&$s(u.mutation,l,on.empty(),be.now()),Ld(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(t,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):k.resolve(Ve.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:En(r.createTime)}),k.resolve()}getNamedQuery(t,n){return k.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(r){return{name:r.name,query:OI(r.bundledQuery),readTime:En(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.overlays=new De(L.comparator),this.es=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const r=pr();return k.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ue(t,n,s)}),k.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),k.resolve()}getOverlaysForCollection(t,n,r){const i=pr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=pr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=pr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ue(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NI(n,r));let s=this.es.get(n);s===void 0&&(s=Q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.ns=new Oe(Ae.ss),this.rs=new Oe(Ae.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const r=new Ae(t,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.cs(new Ae(t,n))}hs(t,n){t.forEach(r=>this.removeReference(r,n))}ls(t){const n=new L(new me([])),r=new Ae(n,t),i=new Ae(n,t+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new L(new me([])),r=new Ae(n,t),i=new Ae(n,t+1);let s=Q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ae(t,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ae{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return L.comparator(t.key,n.key)||ne(t._s,n._s)}static os(t,n){return ne(t._s,n._s)||L.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Oe(Ae.ss)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new II(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(t,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Oe(ne);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),k.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new L(s),0);let a=new Oe(ne);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){le(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return k.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=r})}An(t){}containsKey(t,n){const r=new Ae(n,0),i=this.gs.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t){this.Es=t,this.docs=new De(L.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(t,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),k.resolve(r)}getAllFromCollection(t,n,r){let i=In();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||__(k_(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(t,n,r,i){B()}As(t,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new zI(this)}getSize(t){return k.resolve(this.size)}}class zI extends RI{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(r)}),k.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(t){this.persistence=t,this.Rs=new Bi(n=>Rd(n),Pd),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vd,this.targetCount=0,this.vs=ki.Pn()}forEachTarget(t,n){return this.Rs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new ki(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.Dn(n),k.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const r=this.Rs.get(n)||null;return k.resolve(r)}addMatchingKeys(t,n,r){return this.Ps.us(n,r),k.resolve()}removeMatchingKeys(t,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ps.ds(n);return k.resolve(r)}containsKey(t,n){return k.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Dd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new BI(this),this.indexManager=new DI,this.remoteDocumentCache=function(r){return new VI(r)}(r=>this.referenceDelegate.xs(r)),this.It=new bI(n),this.Ns=new LI(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new FI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Vs[t.toKey()];return r||(r=new UI(n,this.referenceDelegate),this.Vs[t.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,r){R("MemoryPersistence","Starting transaction:",t);const i=new HI(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(t,n){return k.or(Object.values(this.Vs).map(r=>()=>r.containsKey(t,n)))}}class HI extends N_{constructor(t){super(),this.currentSequenceNumber=t}}class zd{constructor(t){this.persistence=t,this.Fs=new Vd,this.$s=null}static Bs(t){return new zd(t)}get Ls(){if(this.$s)return this.$s;throw B()}addReference(t,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),k.resolve()}removeReference(t,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}ks(){this.$s=new Set}Ms(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(t,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Si=r,this.Di=i}static Ci(t,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bd(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.ki(t,n).next(s=>s||this.Mi(t,n,i,r)).next(s=>s||this.Oi(t,n))}ki(t,n){if(ug(n))return k.resolve(null);let r=_n(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jf(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Q(...s);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(t,jf(n,null,"F")):this.Bi(t,u,n,l)}))})))}Mi(t,n,r,i){return ug(n)||i.isEqual(q.min())?this.Oi(t,n):this.Ni.getDocuments(t,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(t,n):(Zm()<=te.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hf(n)),this.Bi(t,o,n,T_(i,-1)))})}Fi(t,n){let r=new Oe(G1(t));return n.forEach((i,s)=>{Ld(t,s)&&(r=r.add(s))}),r}$i(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(t,n){return Zm()<=te.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Hf(n)),this.Ni.getDocumentsMatchingQuery(t,n,Xn.min())}Bi(t,n,r,i){return this.Ni.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t,n,r,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new De(ne),this.qi=new Bi(s=>Rd(s),Pd),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(r)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new MI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function qI(e,t,n,r){return new KI(e,t,n,r)}async function gw(e,t){const n=j(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function GI(e,t){const n=j(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,f=c.keys();let d=k.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);le(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function yw(e){const t=j(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function QI(e,t){const n=j(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.has(f)?g=g.withResumeToken(We.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(y,v,$){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=In(),u=Q();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(YI(s,o,t.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(f=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function YI(e,t,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=In();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function XI(e,t){const n=j(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function JI(e,t){const n=j(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,t).next(s=>s?(i=s,k.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new wr(t,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(t,r.targetId)),r})}async function Gf(e,t,n){const r=j(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_o(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function vg(e,t,n){const r=j(e);let i=q.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),f=c.qi.get(u);return f!==void 0?k.resolve(c.Ui.get(f)):c.Cs.getTargetData(l,u)}(r,o,_n(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,t,n?i:q.min(),n?s:Q())).next(a=>(ZI(r,G_(t),a),{documents:a,Hi:s})))}function ZI(e,t,n){let r=q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Ki.set(t,r)}class wg{constructor(){this.activeTargetIds=lw()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eN{constructor(){this.Lr=new wg,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,r){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new wg,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,r,i,s){const o=this.ao(t,n);R("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(t,o,a,r).then(l=>(R("RestConnection","Received: ",l),l),l=>{throw eg("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",r),l})}fo(t,n,r,i,s,o){return this.co(t,n,r,i,s)}ho(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}ao(t,n){const r=nN[t];return`${this.oo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,r,i){return new Promise((s,o)=>{const a=new m_;a.listenOnce(h_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case gc.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),s(u);break;case gc.TIMEOUT:R("Connection",'RPC "'+t+'" timed out'),o(new U(_.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const c=a.getStatus();if(R("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(f.status);o(new U(d,f.message))}else o(new U(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(_.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{R("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(t,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=c_(),o=f_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new p_({})),this.ho(a.initMessageHeaders,n,r),Hk()||Kk()||qk()||Gk()||Qk()||Wk()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");R("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,f=!1;const d=new rN({Hr:y=>{f?R("Connection","Not sending because WebChannel is closed:",y):(c||(R("Connection","Opening WebChannel transport."),u.open(),c=!0),R("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,$)=>{y.listen(v,p=>{try{$(p)}catch(h){setTimeout(()=>{throw h},0)}})};return g(u,ta.EventType.OPEN,()=>{f||R("Connection","WebChannel transport opened.")}),g(u,ta.EventType.CLOSE,()=>{f||(f=!0,R("Connection","WebChannel transport closed"),d.io())}),g(u,ta.EventType.ERROR,y=>{f||(f=!0,eg("Connection","WebChannel transport errored:",y),d.io(new U(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,ta.EventType.MESSAGE,y=>{var v;if(!f){const $=y.data[0];le(!!$);const p=$,h=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(h){R("Connection","WebChannel received error:",h);const m=h.status;let w=function(N){const C=Ce[N];if(C!==void 0)return iw(C)}(m),x=h.message;w===void 0&&(w=_.INTERNAL,x="Unknown error status: "+m+" with message "+h.message),f=!0,d.io(new U(w,x)),u.close()}else R("Connection","WebChannel received:",$),d.ro($)}}),g(o,d_.STAT_EVENT,y=>{y.stat===Xm.PROXY?R("Connection","Detected buffering proxy"):y.stat===Xm.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){return new dI(e,!0)}class vw{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t,n,r,i,s,o,a,l){this.Hs=t,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new vw(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{t(()=>{const i=new U(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(t,n){const r=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sN extends ww{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(t,n){return this.Vo._o("Listen",t,n)}onMessage(t){this.xo.reset();const n=gI(this.It,t),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?En(s.readTime):q.min()}(t);return this.listener.Wo(n,r)}zo(t){const n={};n.database=qf(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Bf(a)?{documents:wI(i,a)}:{query:EI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=fw(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=ml(i,s.snapshotVersion.toTimestamp())),o}(this.It,t);const r=CI(this.It,t);r&&(n.labels=r),this.Bo(n)}Ho(t){const n={};n.database=qf(this.It),n.removeTarget=t,this.Bo(n)}}class oN extends ww{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.Vo._o("Write",t,n)}onMessage(t){if(le(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=vI(t.writeResults,t.commitTime),r=En(t.commitTime);return this.listener.Zo(r,n)}return le(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=qf(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>yI(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new U(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(_.UNKNOWN,i.toString())})}fo(t,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class lN{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(kn(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Mr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l._u.add(4),await bo(l),l.gu.set("Unknown"),l._u.delete(4),await _u(l)}(this))})}),this.gu=new lN(r,i)}}async function _u(e){if(Mr(e))for(const t of e.wu)await t(!0)}async function bo(e){for(const t of e.wu)await t(!1)}function Ew(e,t){const n=j(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Wd(n)?Hd(n):ji(n).ko()&&jd(n,t))}function Sw(e,t){const n=j(e),r=ji(n);n.du.delete(t),r.ko()&&Cw(n,t),n.du.size===0&&(r.ko()?r.Fo():Mr(n)&&n.gu.set("Unknown"))}function jd(e,t){e.yu.Ot(t.targetId),ji(e).zo(t)}function Cw(e,t){e.yu.Ot(t),ji(e).Ho(t)}function Hd(e){e.yu=new cI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ji(e).start(),e.gu.uu()}function Wd(e){return Mr(e)&&!ji(e).No()&&e.du.size>0}function Mr(e){return j(e)._u.size===0}function $w(e){e.yu=void 0}async function cN(e){e.du.forEach((t,n)=>{jd(e,t)})}async function fN(e,t){$w(e),Wd(e)?(e.gu.hu(t),Hd(e)):e.gu.set("Unknown")}async function hN(e,t,n){if(e.gu.set("Online"),t instanceof cw&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(e,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await gl(e,r)}else if(t instanceof Sa?e.yu.Gt(t):t instanceof uw?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(q.min()))try{const r=await yw(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(We.EMPTY_BYTE_STRING,l.snapshotVersion)),Cw(i,a);const u=new wr(l.target,a,1,l.sequenceNumber);jd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await gl(e,r)}}async function gl(e,t,n){if(!_o(t))throw t;e._u.add(1),await bo(e),e.gu.set("Offline"),n||(n=()=>yw(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await _u(e)})}function xw(e,t){return t().catch(n=>gl(e,n,t))}async function Iu(e){const t=j(e),n=Zn(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;dN(t);)try{const i=await XI(t.localStore,r);if(i===null){t.fu.length===0&&n.Fo();break}r=i.batchId,pN(t,i)}catch(i){await gl(t,i)}Tw(t)&&kw(t)}function dN(e){return Mr(e)&&e.fu.length<10}function pN(e,t){e.fu.push(t);const n=Zn(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Tw(e){return Mr(e)&&!Zn(e).No()&&e.fu.length>0}function kw(e){Zn(e).start()}async function mN(e){Zn(e).eu()}async function gN(e){const t=Zn(e);for(const n of e.fu)t.Xo(n.mutations)}async function yN(e,t,n){const r=e.fu.shift(),i=Ud.from(r,t,n);await xw(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Iu(e)}async function vN(e,t){t&&Zn(e).Yo&&await async function(n,r){if(i=r.code,sI(i)&&i!==_.ABORTED){const s=n.fu.shift();Zn(n).Oo(),await xw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Iu(n)}var i}(e,t),Tw(e)&&kw(e)}async function Sg(e,t){const n=j(e);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Mr(n);n._u.add(3),await bo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await _u(n)}async function wN(e,t){const n=j(e);t?(n._u.delete(2),await _u(n)):t||(n._u.add(2),await bo(n),n.gu.set("Unknown"))}function ji(e){return e.pu||(e.pu=function(t,n,r){const i=j(t);return i.su(),new sN(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:cN.bind(null,e),Zr:fN.bind(null,e),Wo:hN.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),Wd(e)?Hd(e):e.gu.set("Unknown")):(await e.pu.stop(),$w(e))})),e.pu}function Zn(e){return e.Iu||(e.Iu=function(t,n,r){const i=j(t);return i.su(),new oN(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:mN.bind(null,e),Zr:vN.bind(null,e),tu:gN.bind(null,e),Zo:yN.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await Iu(e)):(await e.Iu.stop(),e.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Kd(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qd(e,t){if(kn("AsyncQueue",`${t}: ${e}`),_o(e))return new U(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.comparator=t?(n,r)=>t(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=os(),this.sortedSet=new De(this.comparator)}static emptySet(t){return new fi(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof fi)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new fi;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.Tu=new De(L.comparator)}track(t){const n=t.doc.key,r=this.Tu.get(n);r?t.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Tu=this.Tu.remove(n):t.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):B():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,r)=>{t.push(r)}),t}}class _i{constructor(t,n,r,i,s,o,a,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(t,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new _i(t,n,fi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.Au=void 0,this.listeners=[]}}class SN{constructor(){this.queries=new Bi(t=>q1(t),Cu),this.onlineState="Unknown",this.Ru=new Set}}async function CN(e,t){const n=j(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new EN),i)try{s.Au=await n.onListen(r)}catch(o){const a=qd(o,`Initialization of query '${Hf(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Gd(n)}async function $N(e,t){const n=j(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xN(e,t){const n=j(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Gd(n)}function TN(e,t,n){const r=j(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Gd(e){e.Ru.forEach(t=>{t.next()})}class kN{constructor(t,n,r){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new _i(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!t.docs.isEmpty()||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=_i.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t){this.key=t}}class Iw{constructor(t){this.key=t}}class _N{constructor(t,n){this.query=t,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Q(),this.mutatedKeys=Q(),this.Ku=G1(t),this.Gu=new fi(this.Ku)}get Qu(){return this.Lu}ju(t,n){const r=n?n.Wu:new Cg,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const d=i.get(c),g=Ld(this.query,f)?f:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let $=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),$=!0):this.zu(d,g)||(r.track({type:2,doc:g}),$=!0,(l&&this.Ku(g,l)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),$=!0):d&&!g&&(r.track({type:1,doc:d}),$=!0,(l||u)&&(a=!0)),$&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const s=t.Wu.Eu();s.sort((u,c)=>function(f,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return g(f)-g(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new _i(this.query,t.Gu,i,s,t.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Cg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=Q(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return t.forEach(r=>{this.qu.has(r)||n.push(new Iw(r))}),this.qu.forEach(r=>{t.has(r)||n.push(new _w(r))}),n}Zu(t){this.Lu=t.Hi,this.qu=Q();const n=this.ju(t.documents);return this.applyChanges(n,!0)}tc(){return _i.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class IN{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class NN{constructor(t){this.key=t,this.ec=!1}}class bN{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Bi(a=>q1(a),Cu),this.ic=new Map,this.rc=new Set,this.oc=new De(L.comparator),this.uc=new Map,this.cc=new Vd,this.ac={},this.hc=new Map,this.lc=ki.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function ON(e,t){const n=zN(e);let r,i;const s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await JI(n.localStore,_n(t));n.isPrimaryClient&&Ew(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await DN(n,t,r,a==="current")}return i}async function DN(e,t,n,r){e.dc=(c,f,d)=>async function(g,y,v,$){let p=y.view.ju(v);p.$i&&(p=await vg(g.localStore,y.query,!1).then(({documents:w})=>y.view.ju(w,p)));const h=$&&$.targetChanges.get(y.targetId),m=y.view.applyChanges(p,g.isPrimaryClient,h);return xg(g,y.targetId,m.Yu),m.snapshot}(e,c,f,d);const i=await vg(e.localStore,t,!0),s=new _N(t,i.Hi),o=s.ju(i.documents),a=No.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline"),l=s.applyChanges(o,e.isPrimaryClient,a);xg(e,n,l.Yu);const u=new IN(t,n,s);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),l.snapshot}async function AN(e,t){const n=j(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Cu(s,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Sw(n.remoteStore,r.targetId),Qf(n,r.targetId)}).catch(ko)):(Qf(n,r.targetId),await Gf(n.localStore,r.targetId,!0))}async function RN(e,t,n){const r=BN(e);try{const i=await function(s,o){const a=j(s),l=be.now(),u=o.reduce((d,g)=>d.add(g.key),Q());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=In(),y=Q();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach(($,p)=>{p.isValidDocument()||(y=y.add($))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const $=[];for(const p of o){const h=nI(p,c.get(p.key).overlayedDocument);h!=null&&$.push(new Pr(p.key,h,W1(h.value.mapValue),wn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,$,o)}).next(v=>{f=v;const $=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,$)})}).then(()=>({batchId:f.batchId,changes:ow(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new De(ne)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Oo(r,i.changes),await Iu(r.remoteStore)}catch(i){const s=qd(i,"Failed to persist write");n.reject(s)}}async function Nw(e,t){const n=j(e);try{const r=await QI(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?le(o.ec):i.removedDocuments.size>0&&(le(o.ec),o.ec=!1))}),await Oo(n,r,t)}catch(r){await ko(r)}}function $g(e,t,n){const r=j(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.bu(o)&&(l=!0)}),l&&Gd(a)}(r.eventManager,t),i.length&&r.nc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function PN(e,t,n){const r=j(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),s=i&&i.key;if(s){let o=new De(L.comparator);o=o.insert(s,Ve.newNoDocument(s,q.min()));const a=Q().add(s),l=new Tu(q.min(),new Map,new Oe(ne),o,a);await Nw(r,l),r.oc=r.oc.remove(s),r.uc.delete(t),Qd(r)}else await Gf(r.localStore,t,!1).then(()=>Qf(r,t,n)).catch(ko)}async function MN(e,t){const n=j(e),r=t.batch.batchId;try{const i=await GI(n.localStore,t);Ow(n,r,null),bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oo(n,i)}catch(i){await ko(i)}}async function LN(e,t,n){const r=j(e);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(le(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,t);Ow(r,t,n),bw(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Oo(r,i)}catch(i){await ko(i)}}function bw(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Ow(e,t,n){const r=j(e);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function Qf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc._c(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(r=>{e.cc.containsKey(r)||Dw(e,r)})}function Dw(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Sw(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Qd(e))}function xg(e,t,n){for(const r of n)r instanceof _w?(e.cc.addReference(r.key,t),FN(e,r)):r instanceof Iw?(R("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||Dw(e,r.key)):B()}function FN(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(R("SyncEngine","New document in limbo: "+n),e.rc.add(r),Qd(e))}function Qd(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new L(me.fromString(t)),r=e.lc.next();e.uc.set(r,new NN(n)),e.oc=e.oc.insert(n,r),Ew(e.remoteStore,new wr(_n(Md(n.path)),r,2,Dd.at))}}async function Oo(e,t,n){const r=j(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,t,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Bd.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,f=>k.forEach(f.Si,d=>u.persistence.referenceDelegate.addReference(c,f.targetId,d)).next(()=>k.forEach(f.Di,d=>u.persistence.referenceDelegate.removeReference(c,f.targetId,d)))))}catch(c){if(!_o(c))throw c;R("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const d=u.Ui.get(f),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(f,y)}}}(r.localStore,s))}async function UN(e,t){const n=j(e);if(!n.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await gw(n.localStore,t);n.currentUser=t,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new U(_.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Oo(n,r.ji)}}function VN(e,t){const n=j(e),r=n.uc.get(t);if(r&&r.ec)return Q().add(r.key);{let i=Q();const s=n.ic.get(t);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function zN(e){const t=j(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Nw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=VN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=PN.bind(null,t),t.nc.Wo=xN.bind(null,t.eventManager),t.nc._c=TN.bind(null,t.eventManager),t}function BN(e){const t=j(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=MN.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=LN.bind(null,t),t}class jN{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=ku(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,n){return null}Tc(t,n){return null}yc(t){return qI(this.persistence,new WI,t.initialUser,this.It)}gc(t){return new jI(zd.Bs,this.It)}mc(t){return new eN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HN{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$g(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UN.bind(null,this.syncEngine),await wN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new SN}createDatastore(t){const n=ku(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new iN(i));var i;return function(s,o,a,l){return new aN(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>$g(this.syncEngine,a,0),o=Eg.C()?new Eg:new tN,new uN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,l,u){const c=new bN(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=j(t);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await bo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):kn("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=z1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=qd(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qN(e,t){e.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gw(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function GN(e,t){e.asyncQueue.verifyOperationInProgress();const n=await QN(e);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Sg(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Sg(t.remoteStore,s)),e.onlineComponents=t}async function QN(e){return e.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await qN(e,new jN)),e.offlineComponents}async function Aw(e){return e.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await GN(e,new HN)),e.onlineComponents}function YN(e){return Aw(e).then(t=>t.syncEngine)}async function Tg(e){const t=await Aw(e),n=t.eventManager;return n.onListen=ON.bind(null,t.syncEngine),n.onUnlisten=AN.bind(null,t.syncEngine),n}const kg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(e,t,n){if(!n)throw new U(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function XN(e,t,n,r){if(t===!0&&r===!0)throw new U(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _g(e){if(!L.isDocumentKey(e))throw new U(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ig(e){if(L.isDocumentKey(e))throw new U(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Yd(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":B()}function Ca(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yd(e);throw new U(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new U(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,XN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new U(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new y_;switch(n.type){case"gapi":const r=n.client;return new E_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=kg.get(t);n&&(R("ComponentProvider","Removing Datastore"),kg.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Nu{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Nu(this.firestore,t,this._query)}}class qn extends Nu{constructor(t,n,r){super(t,n,Md(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new L(t))}withConverter(t){return new qn(this.firestore,t,this._path)}}function Pw(e,t,...n){if(e=Si(e),Rw("collection","path",t),e instanceof Xd){const r=me.fromString(t,...n);return Ig(r),new qn(e,null,r)}{if(!(e instanceof At||e instanceof qn))throw new U(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(me.fromString(t,...n));return Ig(r),new qn(e.firestore,null,r)}}function JN(e,t,...n){if(e=Si(e),arguments.length===1&&(t=z1.R()),Rw("doc","path",t),e instanceof Xd){const r=me.fromString(t,...n);return _g(r),new At(e,null,new L(r))}{if(!(e instanceof At||e instanceof qn))throw new U(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(me.fromString(t,...n));return _g(r),new At(e.firestore,e instanceof qn?e.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new vw(this,"async_queue_retry"),this.jc=()=>{const n=vc();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const t=vc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new vr;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Bc.push(t),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!_o(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(t){const n=this.$c.then(()=>(this.Kc=!0,t().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(t,n,r){this.Wc(),this.Qc.indexOf(t)>-1&&(n=0);const i=Kd.createAndSchedule(this,t,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&B()}verifyOperationInProgress(){}async Yc(){let t;do t=this.$c,await t;while(t!==this.$c)}Xc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}Zc(t){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Yc()})}ta(t){this.Qc.push(t)}Jc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function bg(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(e,["next","error","complete"])}class yl extends Xd{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new ZN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fw(this),this._firestoreClient.terminate()}}function Mw(e,t){const n=typeof e=="object"?e:e3(),r=typeof e=="string"?e:t||"(default)";return Q2(n,"firestore").getImmediate({identifier:r})}function Lw(e){return e._firestoreClient||Fw(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fw(e){var t;const n=e._freezeSettings(),r=function(i,s,o,a){return new O_(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new KN(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new U(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ii(We.fromBase64String(t))}catch(n){throw new U(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ii(We.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new U(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new U(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ne(this._lat,t._lat)||ne(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=/^__.*__$/;class tb{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Pr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Io(t,this.data,n,this.fieldTransforms)}}function Vw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class ep{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new ep(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.sa({path:r,ra:!1});return i.oa(t),i}ua(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return vl(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(t.length===0)throw this.aa("Document fields must not be empty");if(Vw(this.na)&&eb.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class nb{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=r||ku(t)}fa(t,n,r,i=!1){return new ep({na:t,methodName:n,la:r,path:Je.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function rb(e){const t=e._freezeSettings(),n=ku(e._databaseId);return new nb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ib(e,t,n,r,i,s={}){const o=e.fa(s.merge||s.mergeFields?2:0,t,n,i);Hw("Data must be an object, but it was:",o,r);const a=Bw(r,o);let l,u;if(s.merge)l=new on(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=sb(t,f,n);if(!o.contains(d))throw new U(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ab(c,d)||c.push(d)}l=new on(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new tb(new bt(a),l,u)}function zw(e,t){if(jw(e=Si(e)))return Hw("Unsupported field value:",t,e),Bw(e,t);if(e instanceof Uw)return function(n,r){if(!Vw(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&t.na!==4)throw t.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=zw(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Si(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Y_(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:ml(r.It,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ml(r.It,i)}}if(n instanceof Zd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ii)return{bytesValue:fw(r.It,n._byteString)};if(n instanceof At){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Yd(n)}`)}(e,t)}function Bw(e,t){const n={};return B1(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zi(e,(r,i)=>{const s=zw(i,t.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jw(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof be||e instanceof Zd||e instanceof Ii||e instanceof At||e instanceof Uw)}function Hw(e,t,n){if(!jw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Yd(n);throw r==="an object"?t.aa(e+" a custom object"):t.aa(e+" "+r)}}function sb(e,t,n){if((t=Si(t))instanceof Jd)return t._internalPath;if(typeof t=="string")return Ww(e,t);throw vl("Field path arguments must be of type string or ",e,!1,void 0,n)}const ob=new RegExp("[~\\*/\\[\\]]");function Ww(e,t,n){if(t.search(ob)>=0)throw vl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jd(...t.split("."))._internalPath}catch{throw vl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(_.INVALID_ARGUMENT,a+e+l)}function ab(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(qw("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lb extends Kw{data(){return super.data()}}function qw(e,t){return typeof t=="string"?Ww(e,t):t instanceof Jd?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gw extends Kw{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(qw("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $a extends Gw{data(t={}){return super.data(t)}}class ub{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new as(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new as(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:cb(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new U(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{convertValue(t,n="none"){switch(Or(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(xi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw B()}}convertObject(t,n){const r={};return zi(t.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Zd($e(t.latitude),$e(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=H1(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(no(t));default:return null}}convertTimestamp(t){const n=Jn(t);return new be(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=me.fromString(t);le(mw(r));const i=new ro(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Qw extends hb{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ii(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,n)}}function pb(e,t){const n=Ca(e.firestore,yl),r=JN(e),i=db(e.converter,t);return gb(n,[ib(rb(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function mb(e,...t){var n,r,i;e=Si(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||bg(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(bg(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),t[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,c;if(e instanceof At)u=Ca(e.firestore,yl),c=Md(e._key.path),l={next:f=>{t[o]&&t[o](yb(u,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Ca(e,Nu);u=Ca(f.firestore,yl),c=f._query;const d=new Qw(u);l={next:g=>{t[o]&&t[o](new ub(u,d,f,g))},error:t[o+1],complete:t[o+2]},fb(e._query)}return function(f,d,g,y){const v=new WN(y),$=new kN(d,v,g);return f.asyncQueue.enqueueAndForget(async()=>CN(await Tg(f),$)),()=>{v.Rc(),f.asyncQueue.enqueueAndForget(async()=>$N(await Tg(f),$))}}(Lw(u),c,a,l)}function gb(e,t){return function(n,r){const i=new vr;return n.asyncQueue.enqueueAndForget(async()=>RN(await YN(n),r,i)),i.promise}(Lw(e),t)}function yb(e,t,n){const r=n.docs.get(t._key),i=new Qw(e);return new Gw(e,i,t._key,r,new as(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Vi=n})(J2),tl(new Gs("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new yl(new v_(n.getProvider("auth-internal")),new C_(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ui(Jm,"3.4.15",e),ui(Jm,"3.4.15","esm2017")})();var vb="firebase",wb="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui(vb,wb,"app");const Eb={apiKey:"AIzaSyBFo1bWSl9LSnXnrzyXoqq_d0UaOshFwO0",authDomain:"graphicera-bfad8.firebaseapp.com",projectId:"graphicera-bfad8",storageBucket:"graphicera-bfad8.appspot.com",messagingSenderId:"868693302358",appId:"1:868693302358:web:7ad4ba0f085702247baff7",measurementId:"G-K7LJ8VQ338"},Yw=Z2(Eb),Sb=e=>{const{name:t,phone:n,message:r,course:i,year:s}=e;return t===""?"Name is required":n===""?"Phone is required":n.length!==10?"Phone number must be 10 digits":r===""?"Message is required":r.length>100?"Message must be under 100 characters":i===""?"Course is required":s===""?"Year is required":!1},Cb=()=>{const[e,t]=M.exports.useState(""),[n,r]=M.exports.useState(!1),[i,s]=M.exports.useState(!1),o=Mw(Yw),a=Pw(o,"wishes");return{sendMessage:async u=>{u.close&&delete u.close;const c=Sb(u);if(c){t(c),r(!1),s(!0),setTimeout(()=>s(!1),2e3);return}await pb(a,{...u})&&(t("Your message has been sent"),r(!0),s(!0),setTimeout(()=>{s(!1)},2e3))},res:e,success:n,isSubmitted:i}},$b=()=>{const[e,t]=M.exports.useState(null),n=Mw(Yw),r=Pw(n,"wishes");return M.exports.useEffect(()=>mb(r,i=>{const s=[];i.forEach(o=>{s.push(o.data())}),t(s)}),[]),{wishes:e}};var Xw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Og=Ts.createContext&&Ts.createContext(Xw),Gn=globalThis&&globalThis.__assign||function(){return Gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gn.apply(this,arguments)},xb=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Jw(e){return e&&e.map(function(t,n){return Ts.createElement(t.tag,Gn({key:n},t.attr),Jw(t.child))})}function tp(e){return function(t){return F(Tb,{...Gn({attr:Gn({},e.attr)},t),children:Jw(e.child)})}}function Tb(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=xb(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),_e("svg",{...Gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Gn(Gn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&F("title",{children:s}),e.children]})};return Og!==void 0?F(Og.Consumer,{children:function(n){return t(n)}}):t(Xw)}function kb(e){return tp({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function _b(e){return tp({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}}]})(e)}function Ib(e){return tp({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"}}]})(e)}const Nb=({isShown:e,close:t})=>{const[n,r]=M.exports.useState(""),[i,s]=M.exports.useState(""),[o,a]=M.exports.useState(""),[l,u]=M.exports.useState(""),[c,f]=M.exports.useState(""),[d,g]=M.exports.useState("GEU"),[y,v]=M.exports.useState("yellow"),[$,p]=M.exports.useState(!1),{res:h,success:m,sendMessage:w,isSubmitted:x}=Cb();return F("div",{children:F(T$,{onRequestClose:t,shouldReturnFocusAfterClose:!1,isOpen:e,ariaHideApp:!1,className:"modal MainModal",overlayClassName:"modal-overlay",children:F(_v,{triggerOnce:!0,children:_e("div",{className:"modal-container",children:[_e("div",{className:"modal__header",children:[F("div",{className:"modal__heading",children:"Post your Note"}),F("div",{className:"modal__close-icon",children:F(kb,{id:"close-icon",size:"1.4em",onClick:t})})]}),_e("div",{className:"main-content",children:[_e("div",{className:"form-container",children:[F("textarea",{rows:4,placeholder:"Write your message.....",value:o,onChange:C=>a(C.target.value)}),F("input",{placeholder:"Your Name.",type:"text",required:!0,value:n,onChange:C=>r(C.target.value)}),F("input",{placeholder:"Your Phone.",type:"number",value:i,onChange:C=>s(C.target.value)}),_e("div",{className:"row",children:[F("input",{placeholder:"Your Course.",value:l,onChange:C=>u(C.target.value)}),F("input",{placeholder:"Your Course Tenure ex : 2019-23",value:c,onChange:C=>f(C.target.value),onKeyPress:C=>{/[0-9-]/.test(C.key)||alert("Please enter year in correct format (ex: 2019-23)")}})]}),_e("div",{className:"row",children:[_e("select",{className:"select-university",value:d,required:!0,onChange:C=>g(C.target.value),children:[F("option",{value:"GEU",children:"GEU"}),F("option",{value:"GEHU Dehradun",children:"GEHU Dehradun"}),F("option",{value:"GEHU Bhimtal",children:"GEHU Bhimtal"}),F("option",{value:"GEHU Haldwani",children:"GEHU Haldwani"})]}),_e("div",{className:"colors",children:[F("div",{className:`color color-yellow ${y==="yellow"&&"selected-color"}`,onClick:()=>v("yellow")}),F("div",{className:`color color-pink ${y==="pink"&&"selected-color"}`,onClick:()=>v("pink")}),F("div",{className:`color color-blue ${y==="blue"&&"selected-color"}`,onClick:()=>v("blue")}),F("div",{className:`color color-green ${y==="green"&&"selected-color"}`,onClick:()=>v("green")})]})]}),F("button",{className:"submit-button | fc-white",onClick:()=>w({name:n,phone:i,message:o,course:l,year:c,university:d,color:y,authentic:$,close:t}),children:"Submit"})]}),_e("div",{className:`message ${m?"success":"error"} ${x&&"show"}`,children:[F("div",{className:"icon",children:x&&(m?F(Ib,{}):F(_b,{}))}),F("div",{className:"text",children:h})]})]})]})})})})},bb=()=>{const[e,t]=M.exports.useState(!1);return _e("div",{className:"Header",children:[F(Nb,{isShown:e,close:()=>t(!1)}),_e("div",{className:"container",children:[F("div",{className:"logo",children:F("div",{className:"logo__image",children:F("img",{src:vC,alt:"Graphic Era logo"})})}),_e("div",{className:"header-text",children:["Share your birthday wishes for teacher & mentor and the reason behind"," ",F("br",{}),"the success of all Graphians,",F("span",{children:" Prof. Kamal Ghanshala"})]}),F("div",{className:"nav",children:F("button",{className:"nav__item",onClick:()=>t(!0),children:"Wish Now"})})]})]})},Ob=()=>{const{wishes:e}=$b();return _e(mv,{children:[_e("div",{className:"notes-text",children:["Share your birthday wishes for teacher & mentor and the reason behind the success of all Graphians,",F("span",{children:" Prof. Kamal Ghanshala"})]}),F("div",{className:"Notes",children:F("div",{className:"wrapper clearfix container",children:e&&e.filter(({authentic:t})=>t).map(({color:t,course:n,authentic:r,year:i,university:s,message:o,name:a})=>_e("aside",{className:`note-wrap note-${t}`,children:[F("p",{className:"message",children:o}),_e("div",{className:"details",children:[_e("div",{className:"basic",children:[F("div",{className:"Name",children:a}),F("div",{className:"course",children:n}),F("div",{className:"year",children:i})]}),F("div",{className:"university",children:s})]})]},JSON.stringify(o)))})})]})};function Db(){return _e("div",{className:"App",children:[F(bb,{}),F(Ob,{})]})}wc.createRoot(document.getElementById("root")).render(F(Ts.StrictMode,{children:F(Db,{})}));
