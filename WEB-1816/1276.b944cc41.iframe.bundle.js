/*! For license information please see 1276.b944cc41.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1276,4963],{"./node_modules/@fullstory/browser/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f0:()=>index_esm_event,Dp:()=>isInitialized,Rm:()=>log});var initFS=function initFS(_a){var orgId=_a.orgId,_b=_a.namespace,namespace=void 0===_b?"FS":_b,_c=_a.debug,debug=void 0!==_c&&_c,_d=_a.host,host=void 0===_d?"fullstory.com":_d,_e=_a.script,script=void 0===_e?"edge.fullstory.com/s/fs.js":_e;if(!orgId)throw new Error("FullStory orgId is a required parameter");window._fs_debug=debug,window._fs_host=host,window._fs_script=script,window._fs_org=orgId,window._fs_namespace=namespace,function executeSnippetV1(){var _ref$wnd=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).wnd,wnd=void 0===_ref$wnd?window:_ref$wnd;!function(m,n,e,t,l,o,g,y){e in m?m.console&&m.console.log&&m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s)}).q=[],(o=n.createElement(t)).async=1,o.crossOrigin="anonymous",o.src="https://"+_fs_script,(y=n.getElementsByTagName(t)[0]).parentNode.insertBefore(o,y),g.identify=function(i,v,s){g(l,{uid:i},s),v&&g(l,v,s)},g.setUserVars=function(v,s){g(l,v,s)},g.event=function(i,v,s){g("event",{n:i,p:v},s)},g.anonymize=function(){g.identify(!1)},g.shutdown=function(){g("rec",!1)},g.restart=function(){g("rec",!0)},g.log=function(a,b){g("log",[a,b])},g.consent=function(a){g("consent",!arguments.length||a)},g.identifyAccount=function(i,v){o="account",(v=v||{}).acctId=i,g(o,v)},g.clearUserCookie=function(){},g.setVars=function(n,p){g("setVars",[n,p])},g._w={},y="XMLHttpRequest",g._w[y]=m[y],y="fetch",g._w[y]=m[y],m[y]&&(m[y]=function(){return g._w[y].apply(this,arguments)}),g._v="1.3.0")}(wnd,wnd.document,wnd._fs_namespace,"script","user")}()};!function toV1String(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$shouldInsertScr=_ref2.shouldInsertScript,shouldInsertScript=void 0===_ref2$shouldInsertScr||_ref2$shouldInsertScr,_ref2$globalVar=_ref2.globalVar,globalVar=void 0===_ref2$globalVar?"window":_ref2$globalVar,_ref2$apiVersion=_ref2.apiVersion,apiVersion=void 0===_ref2$apiVersion?"1.3.0":_ref2$apiVersion;"(function(m,n,e,t,l,o,g,y){\n    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].');} return;}\n    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];".concat(shouldInsertScript?"\n    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;\n    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);":"","\n    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};\n    g.anonymize=function(){g.identify(!!0)};\n    g.shutdown=function(){g(\"rec\",!1)};g.restart=function(){g(\"rec\",!0)};\n    g.log = function(a,b){g(\"log\",[a,b])};\n    g.consent=function(a){g(\"consent\",!arguments.length||a)};\n    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};\n    g.clearUserCookie=function(){};\n    g.setVars=function(n, p){g('setVars',[n,p]);};\n    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];\n    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};\n    g._v=\"").concat(apiVersion,'";\n})(').concat(globalVar,",").concat(function getDocumentVar(globalVar){return"window"===globalVar?"document":"".concat(globalVar,".document")}(globalVar),",").concat(globalVar,"['_fs_namespace'],'script','user');")}();function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var fs=function fs(){return window[window._fs_namespace]},hasFullStoryWithFunction=function hasFullStoryWithFunction(){!function ensureSnippetLoaded(){if(!fs())throw Error("FullStory is not loaded, please ensure the init function is invoked before calling FullStory API functions")}();for(var _len=arguments.length,testNames=new Array(_len),_key=0;_key<_len;_key++)testNames[_key]=arguments[_key];return testNames.every((function(current){return fs()[current]}))},guard=function guard(name){return function(){if(window._fs_dev_mode){var message="FullStory is in dev mode and is not recording: ".concat(name," method not executed");return console.warn(message),message}var _fs;return hasFullStoryWithFunction(name)?(_fs=fs())[name].apply(_fs,arguments):(console.warn("FS.".concat(name," not ready")),null)}},index_esm_event=guard("event"),log=guard("log"),shutdown=(guard("getCurrentSessionURL"),guard("identify"),guard("setUserVars"),guard("consent"),guard("shutdown")),isInitialized=(guard("restart"),guard("anonymize"),guard("setVars"),function initOnce(fn,message){}((function _init(inputOptions,readyCallback){var options=function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},inputOptions);if(fs())console.warn("The FullStory snippet has already been defined elsewhere (likely in the <head> element)");else if(options.recordCrossDomainIFrames&&(window._fs_run_in_iframe=!0),options.recordOnlyThisIFrame&&(window._fs_is_outer_script=!0),options.cookieDomain&&(window._fs_cookie_domain=options.cookieDomain),!0===options.debug&&(options.script?console.warn("Ignoring `debug = true` because `script` is set"):options.script="edge.fullstory.com/s/fs-debug.js"),initFS(options),readyCallback&&fs()("observe",{type:"start",callback:readyCallback}),!0===options.devMode){var message="FullStory was initialized in devMode and will stop recording";index_esm_event("FullStory Dev Mode",{message_str:message}),shutdown(),window._fs_dev_mode=!0,console.warn(message)}}),"FullStory init has already been called once, additional invocations are ignored"),function isInitialized(){return!!window._fs_initialized})},"./node_modules/@goshippo/components/esm/Accordion/AccordionDetails/AccordionDetails.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>AccordionDetails_AccordionDetails_AccordionDetails});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAccordionDetailsUtilityClass(slot){return(0,generateUtilityClass.A)("MuiAccordionDetails",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiAccordionDetails",["root"]);const _excluded=["className"],AccordionDetailsRoot=(0,styled.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>({padding:theme.spacing(1,2,2)}))),AccordionDetails_AccordionDetails=react.forwardRef((function AccordionDetails(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiAccordionDetails"}),{className}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.A)({root:["root"]},getAccordionDetailsUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(AccordionDetailsRoot,(0,esm_extends.A)({className:(0,clsx_m.A)(classes.root,className),ref,ownerState},other))}));var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),AccordionDetailsTheme=(0,createTheme.A)(shippoTheme.A,{components:{MuiAccordionDetails:{styleOverrides:{root:{paddingLeft:"0",paddingRight:"0"}}}}});const AccordionDetails_AccordionDetails_AccordionDetails=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:AccordionDetailsTheme},{children:(0,jsx_runtime.jsx)(AccordionDetails_AccordionDetails,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Badge/Badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Badge_Badge});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Badge=__webpack_require__("./node_modules/@mui/material/Badge/Badge.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),badgeTheme=(0,createTheme.A)(shippoTheme.A,{components:{MuiBadge:{styleOverrides:{root:{"& .MuiBadge-anchorOriginBottomRightRectangular":{backgroundColor:colors.T.white,boxShadow:"0 0.125rem 0.25rem rgba(0, 0, 0, 0.25)",color:colors.T.text.primary.black}}}}}});const Badge_Badge=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:badgeTheme},{children:(0,jsx_runtime.jsx)(Badge.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Card_Card_Card});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),CardHeader=__webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getCardActionsUtilityClass(slot){return(0,generateUtilityClass.A)("MuiCardActions",slot)}(0,generateUtilityClasses.A)("MuiCardActions",["root","spacing"]);const _excluded=["disableSpacing","className"],CardActionsRoot=(0,styled.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disableSpacing&&styles.spacing]}})((({ownerState})=>(0,esm_extends.A)({display:"flex",alignItems:"center",padding:8},!ownerState.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),CardActions_CardActions=react.forwardRef((function CardActions(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiCardActions"}),{disableSpacing=!1,className}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{disableSpacing}),classes=(ownerState=>{const{classes,disableSpacing}=ownerState,slots={root:["root",!disableSpacing&&"spacing"]};return(0,composeClasses.A)(slots,getCardActionsUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardActionsRoot,(0,esm_extends.A)({className:(0,clsx_m.A)(classes.root,className),ownerState,ref},other))}));var Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js");function getCardUtilityClass(slot){return(0,generateUtilityClass.A)("MuiCard",slot)}(0,generateUtilityClasses.A)("MuiCard",["root"]);const Card_excluded=["className","raised"],CardRoot=(0,styled.Ay)(Paper.A,{name:"MuiCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({overflow:"hidden"}))),Card_Card=react.forwardRef((function Card(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiCard"}),{className,raised=!1}=props,other=(0,objectWithoutPropertiesLoose.A)(props,Card_excluded),ownerState=(0,esm_extends.A)({},props,{raised}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.A)({root:["root"]},getCardUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardRoot,(0,esm_extends.A)({className:(0,clsx_m.A)(classes.root,className),elevation:raised?8:void 0,ref,ownerState},other))}));var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),cardTheme=(0,createTheme.A)(shippoTheme.A,{components:{MuiCard:{styleOverrides:{root:{borderRadius:"0.5rem",borderColor:colors.T.borders}}},MuiCardActions:{styleOverrides:{root:{justifyContent:"end"}}},MuiCardHeader:{styleOverrides:{root:{paddingTop:"0.5rem",paddingBottom:0}}},MuiCardContent:{styleOverrides:{root:{padding:0,"&:last-child":{paddingBottom:0}}}}}});const Card_Card_Card=_a=>{var{children,elevation=0,actions,title=""}=_a,props=(0,tslib_es6.Tt)(_a,["children","elevation","actions","title"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:cardTheme},{children:(0,jsx_runtime.jsxs)(Card_Card,Object.assign({},props,{elevation,variant:0===elevation?"outlined":"elevation"},{children:[title&&(0,jsx_runtime.jsx)(CardHeader.A,{title}),(0,jsx_runtime.jsx)(CardContent.A,{children}),actions&&(0,jsx_runtime.jsx)(CardActions_CardActions,{children:actions})]}))}))}},"./node_modules/@goshippo/components/esm/Chip/Chip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Chip_Chip});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),chipTheme=(0,createTheme.A)(shippoTheme.A,{components:{MuiChip:{styleOverrides:{root:{"&.MuiChip-sizeSmall":{padding:`${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(1)}`,fontSize:"0.75rem",fontWeight:400,lineHeight:1.37,gap:shippoTheme.A.spacing(.5),borderRadius:"30px","&.MuiChip-deletable":{padding:`${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(1)}`,borderRadius:"40px"},"& *":{padding:0,margin:0}},"&.MuiChip-filledWarning":{color:colors.T.yellow100,backgroundColor:colors.T.accent.background.warning,position:"relative","& .MuiChip-deleteIconColorWarning":{color:colors.T.yellow60},"& .MuiChip-label":{color:colors.T.text.default},"& .custom-chip-icon.filled":{backgroundColor:colors.T.yellow100}},"&.MuiChip-filledSuccess":{color:colors.T.accent.foreground.success,backgroundColor:colors.T.accent.background.success,position:"relative","& .MuiChip-label":{color:colors.T.text.default},"& .custom-chip-icon.filled":{backgroundColor:colors.T.accent.foreground.success}},"&.MuiChip-filledInfo":{color:colors.T.secondary,backgroundColor:colors.T.secondaryHover,position:"relative","& .MuiChip-label":{color:colors.T.text.default},"& .custom-chip-icon.filled":{backgroundColor:colors.T.secondary}},"&.MuiChip-filledError":{color:colors.T.specialUse.hover,backgroundColor:colors.T.accent.background.error,position:"relative","& .custom-chip-icon.filled":{backgroundColor:colors.T.specialUse.hover}},"&.MuiChip-deletable":{fontWeight:500,"&:hover":{boxShadow:elevations.$[2]},"&:focus":{boxShadow:`0px 0px 0px 4px ${colors.T.borderFocus}`},"& .MuiChip-deleteIcon":{color:colors.T.secondary},"& .MuiChip-deleteIcon:hover":{backgroundColor:colors.T.secondaryHover,borderRadius:"50%"}},"&.MuiChip-deletableColorDefault":{color:colors.T.text.default,backgroundColor:colors.T.backgroundDeemphasized},"&.Mui-disabled":{opacity:.5}}}}}});const FilledChipIcon=({outlined})=>(0,jsx_runtime.jsx)(Box.A,{sx:{height:"0.25rem",width:"0.25rem",borderRadius:"50%",border:"2px solid"},className:"custom-chip-icon "+(outlined?"":"filled")}),CustomChipIcon=({useDefaultIcon,iconVariant})=>{switch(!0){case"filled"===iconVariant:return(0,jsx_runtime.jsx)(FilledChipIcon,{});case"outlined"===iconVariant:return(0,jsx_runtime.jsx)(FilledChipIcon,{outlined:!0});case useDefaultIcon:return(0,jsx_runtime.jsx)(FilledChipIcon,{});default:return null}},Chip_Chip=_a=>{var{children,color,iconVariant,size}=_a,props=(0,tslib_es6.Tt)(_a,["children","color","iconVariant","size"]);const useDefaultIcon=!!iconVariant||null!==iconVariant&&["error","info","success","warning"].includes(color||"");return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:chipTheme},{children:(0,jsx_runtime.jsx)(Chip.A,Object.assign({color,sx:useDefaultIcon?{paddingLeft:"0.75rem"}:null,icon:(0,jsx_runtime.jsx)(CustomChipIcon,{useDefaultIcon,iconVariant}),size:size||"small"},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Dialog/Dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Dialog_Dialog});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Dialog=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),dialogTheme=(0,createTheme.A)(shippoTheme.A,{});const Dialog_Dialog=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:dialogTheme},{children:(0,jsx_runtime.jsx)(Dialog.A,Object.assign({maxWidth:"md"},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Popover_Popover});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Popover=__webpack_require__("./node_modules/@mui/material/Popover/Popover.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const popoverTheme=(0,createTheme.A)(shippoTheme.A,{}),Popover_Popover=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:popoverTheme},{children:(0,jsx_runtime.jsx)(Popover.Ay,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>SvgIcon_SvgIcon});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),SvgIcon=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const svgIconTheme=(0,createTheme.A)(shippoTheme.A,{}),SvgIcon_SvgIcon=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:svgIconTheme},{children:(0,jsx_runtime.jsx)(SvgIcon.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/libraries/dist/esm/Dialog/Dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>j});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DialogTitle=__webpack_require__("./node_modules/@goshippo/components/esm/DialogTitle/DialogTitle.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),DialogContent=__webpack_require__("./node_modules/@goshippo/components/esm/DialogContent/DialogContent.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),DialogActions=__webpack_require__("./node_modules/@goshippo/components/esm/DialogActions/DialogActions.js"),Dialog=__webpack_require__("./node_modules/@goshippo/components/esm/Dialog/Dialog.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const c=(0,styled.Ay)(DialogTitle.A,{shouldForwardProp:o=>"hasTitle"!==o})((({theme:o,hasTitle:n})=>({borderBottom:n?`solid 1px ${colors.T.gray30}`:"none",marginBottom:n?o.spacing(4):0,padding:o.spacing(2),paddingLeft:o.spacing(3),paddingBottom:n?o.spacing(2):0,position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between"}))),y=(0,styled.Ay)(Box.A)((({theme:o})=>({display:"flex",gap:o.spacing(1)}))),x=(0,styled.Ay)("span")((()=>({display:"flex",alignItems:"center"}))),u=(0,styled.Ay)(DialogContent.A)((({theme:o})=>({paddingBottom:o.spacing(4)}))),D=(0,styled.Ay)(IconButton.A)((({theme:o})=>({color:colors.T.gray60,padding:o.spacing(1)}))),m=(0,styled.Ay)(DialogActions.A)((({theme:o})=>({display:"flex",borderTop:`solid 1px ${colors.T.gray30}`,padding:o.spacing(1.5,3)}))),f=(0,styled.Ay)(Dialog.A,{shouldForwardProp:o=>"expanded"!==o})((({expanded:o})=>({"& .MuiDialog-paper":{borderRadius:shippoTheme.A.spacing(2)},[shippoTheme.A.breakpoints.up("sm")]:{"& .MuiDialog-paper":{maxWidth:shippoTheme.A.spacing(75)}},[shippoTheme.A.breakpoints.up("xl")]:o&&{"& .MuiDialog-paper":{maxWidth:shippoTheme.A.spacing(100)}}}))),j=({open:i,title:r,content:n,onClose:d,actions:e=[],titleIcon:o,PaperProps:a,expanded:h=!1})=>(0,jsx_runtime.jsxs)(f,{expanded:h,fullWidth:!0,open:i,onClose:d,PaperProps:a,children:[(0,jsx_runtime.jsxs)(c,{hasTitle:!!r,children:[(0,jsx_runtime.jsxs)(y,{children:[o&&(0,jsx_runtime.jsx)(x,{children:o}),r]}),(0,jsx_runtime.jsx)(D,{"aria-label":"Close",onClick:d,children:(0,jsx_runtime.jsx)(Close.A,{})})]}),(0,jsx_runtime.jsx)(u,{children:n}),!(null==e||!e.length)&&(0,jsx_runtime.jsx)(m,{sx:{justifyContent:1===e.length?"flex-end":"space-between"},"data-testid":"dialog-actions",children:e.map((p=>p))})]})},"./node_modules/@goshippo/libraries/dist/esm/LabelPurchaseModules/Card/Card.styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZB:()=>A,vN:()=>f});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/icons-material/esm/ExpandMore.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/Accordion/Accordion.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@goshippo/components/esm/Accordion/AccordionSummary/AccordionSummary.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@goshippo/components/esm/CardContent/CardContent.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js");(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A)`
  color: ${_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.palette.grey[900]};
`,(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A)`
  padding: 0;
  border-bottom: 0px;
`;const n="1rem",f=((0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A)`
  .MuiAccordionSummary-content {
    max-width: calc(100% - ${n} * 2);
    margin: ${n};

    display: grid;
    grid-template-columns: calc(100% / 3) calc(100% / 3 * 2);
    align-items: center;
  }

  & .MuiAccordionSummary-expandIconWrapper {
    margin-right: 1.5rem;
  }
`,(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A)`
  padding: 1rem;
  border-bottom: 1px solid ${_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.palette.grey[300]};
  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    border-bottom: 0px;
  }
`,(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,{shouldForwardProp:o=>"hasError"!==o})`
  max-width: 100%;
  & .MuiButton-root {
    justify-content: flex-end;
  }

  & .MuiButton-endIcon > .MuiSvgIcon-root {
    color: ${o=>o.hasError?_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.text.inverse:_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.text.secondary};
    font-size: 1.5rem;
  }

  &:has(span.MuiButton-endIcon) {
    gap: 0.5rem !important;
  }

  p,
  div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`),A=((0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_goshippo_components__WEBPACK_IMPORTED_MODULE_9__.A)((({theme:o})=>({":last-child":{paddingBottom:o.spacing(2)}}))),({children:o})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_goshippo_components__WEBPACK_IMPORTED_MODULE_10__.A,{component:"h2",variant:"bodyEmphasized",children:o}))},"./node_modules/@goshippo/libraries/dist/esm/LabelPurchaseModules/Card/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>_Card_styled_js__WEBPACK_IMPORTED_MODULE_1__});__webpack_require__("./node_modules/react/jsx-runtime.js");var _Card_styled_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/LabelPurchaseModules/Card/Card.styled.js")},"./node_modules/@goshippo/libraries/dist/esm/constants/states.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B2:()=>M,OB:()=>m});var _countries_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/constants/countries.js");const s={AS:{name:"American Samoa",iso:"AS"},GU:{name:"Guam",iso:"GU"},MP:{name:"Northern Mariana Islands",iso:"MP"},MH:{name:"Marshall Islands",iso:"MH"},FM:{name:"Micronesia, Federated States of",iso:"FM"},PW:{name:"Palau",iso:"PW"},PR:{name:"Puerto Rico",iso:"PR"},UM:{name:"United States Minor Outlying Islands",iso:"UM"},VI:{name:"Virgin Islands, U.S.",iso:"VI"}},m={AB:{name:"Alberta",iso:"AB"},BC:{name:"British Columbia",iso:"BC"},MB:{name:"Manitoba",iso:"MB"},NB:{name:"New Brunswick",iso:"NB"},NL:{name:"Newfoundland and Labrador",iso:"NL"},NS:{name:"Nova Scotia",iso:"NS"},ON:{name:"Ontario",iso:"ON"},PE:{name:"Prince Edward Island",iso:"PE"},QC:{name:"Quebec",iso:"QC"},SK:{name:"Saskatchewan",iso:"SK"},NT:{name:"Northwest Territories",iso:"NT"},NU:{name:"Nunavut",iso:"NU"},YT:{name:"Yukon",iso:"YT"}},M=(_countries_js__WEBPACK_IMPORTED_MODULE_0__.Xr.US.iso2,_countries_js__WEBPACK_IMPORTED_MODULE_0__.Xr.CA.iso2,_countries_js__WEBPACK_IMPORTED_MODULE_0__.Xr.AU.iso2,i=>!!i&&Object.values(s).map((e=>e.iso)).includes(i.toUpperCase()))},"./node_modules/@goshippo/libraries/dist/esm/shared/FedexInternationalSection/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M6:()=>un,hW:()=>ValidateAccountContainer_B});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),FormControlLabel=__webpack_require__("./node_modules/@goshippo/components/esm/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@goshippo/components/esm/Checkbox/Checkbox.js"),Alert=__webpack_require__("./node_modules/@goshippo/components/esm/Alert/Alert.js"),AlertTitle=__webpack_require__("./node_modules/@goshippo/components/esm/AlertTitle/AlertTitle.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const Done=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done"),Delete=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");var Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),react=__webpack_require__("./node_modules/react/index.js"),Dialog=__webpack_require__("./node_modules/@goshippo/components/esm/Dialog/Dialog.js"),DialogActions=__webpack_require__("./node_modules/@goshippo/components/esm/DialogActions/DialogActions.js"),DialogTitle=__webpack_require__("./node_modules/@goshippo/components/esm/DialogTitle/DialogTitle.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),DialogContent=__webpack_require__("./node_modules/@goshippo/components/esm/DialogContent/DialogContent.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js");const d={font:t=>t>28?"9px 'Rock Salt'":t>20?"12px 'Rock Salt'":t>12?"15px 'Rock Salt'":"20px 'Rock Salt'",fillStyle:shippoTheme.A.palette.text.primary,width:240,height:25,paddingX:120,paddingY:21,customFont:{name:"'Rock Salt'",url:"https://fonts.googleapis.com/css2?family=Rock+Salt"}},g={font:t=>t>28?"22px 'Rock Salt'":t>20?"28px 'Rock Salt'":t>12?"40px 'Rock Salt'":"65px 'Rock Salt'",fillStyle:shippoTheme.A.palette.text.primary,width:560,height:160,paddingX:275,paddingY:130,customFont:{name:"'Rock Salt'",url:"https://fonts.googleapis.com/css2?family=Rock+Salt"}},u=(t,o)=>{const{font:l,fillStyle:i,width:s,height:r,paddingX:c,paddingY:e}=t,a=document.createElement("canvas");a.setAttribute("width",`${s}px`),a.setAttribute("height",`${r}px`);const n=a.getContext("2d");return n&&(n.font=l(o.length),n.textAlign="center",n.fillStyle=i,n.fillText(o,c,e)),a.toDataURL()},useTextToSign_y=t=>{const[o,l]=(0,react.useState)(!1),[i,s]=(0,react.useState)(null),[r,c]=(0,react.useState)(null);return(0,react.useEffect)((()=>{const e=document.createElement("link");e.rel="stylesheet",e.href=d.customFont.url;const a=document.head;return a.appendChild(e),e.onload=()=>{l(!0)},()=>{a.removeChild(e)}}),[]),(0,react.useEffect)((()=>{if(o){const e=u(d,t);s(e);const a=u(g,t);c(a)}}),[o,t]),{imageData:i,displayImageData:r}};var M;!function(l){l[l.BigDesktop=1920]="BigDesktop",l[l.Desktop=1600]="Desktop",l[l.DesktopMedium=1440]="DesktopMedium",l[l.DesktopMin=1320]="DesktopMin",l[l.Notebook=1268]="Notebook",l[l.Tablet=1024]="Tablet",l[l.Mobile=768]="Mobile",l[l.SmallMobile=375]="SmallMobile",l[l.ExtraSmallMobile=320]="ExtraSmallMobile"}(M||(M={}));const I=(0,emotion_styled_browser_esm.A)(Dialog.A)`
  & .MuiPaper-root {
    border-radius: 16px;
  }
`,SignPad_M=(0,emotion_styled_browser_esm.A)("img")`
  height: ${shippoTheme.A.spacing(10)};
  width: ${shippoTheme.A.spacing(35)};

  @media screen and (max-width: ${M.SmallMobile}px) {
    width: ${shippoTheme.A.spacing(24)};
  }
`,P=(0,emotion_styled_browser_esm.A)(Box.A)`
  margin: auto;
  display: 'flex';
  justify-content: 'center';
  height: ${shippoTheme.A.spacing(10)};
  width: ${shippoTheme.A.spacing(35)};
  border-bottom: 2px solid;

  @media screen and (max-width: ${M.SmallMobile}px) {
    width: ${shippoTheme.A.spacing(24)};
  }
`,R=(0,emotion_styled_browser_esm.A)(DialogActions.A)`
  display: flex;
  justify-content: space-between;
  padding: ${shippoTheme.A.spacing(4)};
  padding-top: ${shippoTheme.A.spacing(0)};
`,SignPad_E=({t,open:m,onClose:r,onSubmit:h})=>{const[c,l]=(0,react.useState)(""),e=(0,react.useRef)(null),{imageData:f,displayImageData:d}=useTextToSign_y(c);return(0,jsx_runtime.jsxs)(I,{open:m,onClose:r,children:[(0,jsx_runtime.jsx)(DialogTitle.A,{style:{padding:`${shippoTheme.A.spacing(4)}`,paddingBottom:`${shippoTheme.A.spacing(1)}`},children:t("settings:carriers:accountValidation:signature:title")}),(0,jsx_runtime.jsx)(IconButton.A,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:o=>o.palette.grey[500]},children:(0,jsx_runtime.jsx)(Close.A,{})}),(0,jsx_runtime.jsxs)(DialogContent.A,{style:{padding:`${shippoTheme.A.spacing(4)}`,paddingTop:`${shippoTheme.A.spacing(1)}`},children:[(0,jsx_runtime.jsx)(Typography.A,{component:"p",variant:"body",children:t("settings:carriers:accountValidation:signature:instruction")}),(0,jsx_runtime.jsx)(TextField.A,{inputRef:e,fullWidth:!0,style:{marginTop:shippoTheme.A.spacing(2)},label:t("settings:carriers:accountValidation:signature:label"),onChange:o=>l(o.target.value)}),(0,jsx_runtime.jsx)(Typography.A,{component:"p",variant:"body",sx:{marginTop:shippoTheme.A.spacing(4)},children:t("settings:carriers:accountValidation:signature:previewLabel")}),(0,jsx_runtime.jsx)(P,{children:d&&(0,jsx_runtime.jsx)(SignPad_M,{src:d})})]}),(0,jsx_runtime.jsxs)(R,{children:[(0,jsx_runtime.jsx)(Button.A,{size:"medium",onClick:()=>{l(""),e.current&&(e.current.value="")},color:"secondary",children:t("settings:carriers:accountValidation:signature:clear")}),(0,jsx_runtime.jsx)(Button.A,{size:"medium",onClick:()=>{h(f||"")},color:"primary",disabled:!c,children:t("settings:carriers:accountValidation:signature:submit")})]})]})},FedExInternationalSection_P=n=>{try{if("string"!=typeof n||!n)return null;const c=n.split(","),o=c[0].split(":")[1].split(";")[0],a=atob(c[1]);let d=a.length;const p=new Uint8Array(d);for(;d--;)p[d]=a.charCodeAt(d);return new Blob([p],{type:o})}catch{return null}};var m;!function(n){n.LOGO_REQUIRED="logo_required",n.SIGNATURE_REQUIRED="signature_required",n.BOTH_REQUIRED="both_required",n.NONE=""}(m||(m={}));const rn=(0,emotion_styled_browser_esm.A)(Stack.A)`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`,G=emotion_styled_browser_esm.A.div`
  width: ${shippoTheme.A.spacing(18)};
  height: ${shippoTheme.A.spacing(10)};
  border: 1px solid ${shippoTheme.A.palette.grey[300]};
  display: flex;
  padding: ${shippoTheme.A.spacing(1)};
  position: relative;
  & .image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: ${M.SmallMobile}px) {
    width: ${shippoTheme.A.spacing(10)};
    height: ${shippoTheme.A.spacing(6)};
  }
`,$=(0,emotion_styled_browser_esm.A)(IconButton.A)`
  position: absolute;
  right: 0;
  margin: -10px -5px;
`,an=(0,emotion_styled_browser_esm.A)(Typography.A)`
  font-size: 18px;
  color: #112229;
  padding-bottom: 10px;
  font-weight: 500;
//# sourceMappingURL=1276.b944cc41.iframe.bundle.js.map