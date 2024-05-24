(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[9913],{"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.A)("MuiPaper",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)},PaperRoot=(0,styled.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.A)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.A)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.X4)("#fff",getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.X4)("#fff",getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.A)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.A)({as:component,ownerState,className:(0,clsx_m.A)(classes.root,className),ref},other))}))},"./node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.A)("MuiSvgIcon",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],styles[`fontSize${(0,capitalize.A)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.A)(color)}`,`fontSize${(0,capitalize.A)(fontSize)}`]};return(0,composeClasses.A)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.A)({as:component,className:(0,clsx_m.A)(classes.root,className),ownerState,focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,{children:[children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.A)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx_m.A)(classes.root,className)},other))}))},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createSvgIcon});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){const Component=(props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({"data-testid":`${displayName}Icon`,ref},props,{children:path}));return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.en[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.A)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Q)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},otherProps,{sx:finalSx})}},"./node_modules/uuid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var v1=__webpack_require__("./node_modules/uuid/v1.js"),v4=__webpack_require__("./node_modules/uuid/v4.js"),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},"./node_modules/uuid/lib/bytesToUuid.js":module=>{for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=function bytesToUuid(buf,offset){var i=offset||0,bth=byteToHex;return[bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]]].join("")}},"./node_modules/uuid/lib/rng-browser.js":module=>{var getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(getRandomValues){var rnds8=new Uint8Array(16);module.exports=function whatwgRNG(){return getRandomValues(rnds8),rnds8}}else{var rnds=new Array(16);module.exports=function mathRNG(){for(var r,i=0;i<16;i++)3&i||(r=4294967296*Math.random()),rnds[i]=r>>>((3&i)<<3)&255;return rnds}}},"./node_modules/uuid/v1.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _nodeId,_clockseq,rng=__webpack_require__("./node_modules/uuid/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid/lib/bytesToUuid.js"),_lastMSecs=0,_lastNSecs=0;module.exports=function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[],node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){var seedBytes=rng();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}var msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq;var tl=(1e4*(268435455&(msecs+=122192928e5))+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}},"./node_modules/uuid/v4.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng=__webpack_require__("./node_modules/uuid/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid/lib/bytesToUuid.js");module.exports=function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"===options?new Array(16):null,options=null);var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}},"./app/pages/Manual/ManualErrorBoundary/ManualErrorBoundary.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Alert/Alert.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_sentry_browser__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_utils_TrackingHelper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/utils/TrackingHelper/index.ts"),_utils_newRelic_newRelic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/utils/newRelic/newRelic.ts"),ErrorWrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.ue)(["\n  width: 100%;\n"],["\n  width: 100%;\n"])));const __WEBPACK_DEFAULT_EXPORT__=function(_super){function ManualErrorBoundary(props){var _this=_super.call(this,props)||this;return _this.state={hasError:!1,error:null},_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_4__.C6)(ManualErrorBoundary,_super),ManualErrorBoundary.getDerivedStateFromError=function(error){return{error:error.toString(),hasError:!0}},ManualErrorBoundary.prototype.componentDidCatch=function(error){var _a,_b,_c;null===(_b=(_a=this.props).onError)||void 0===_b||_b.call(_a,error),_sentry_browser__WEBPACK_IMPORTED_MODULE_5__.Cp(error),_utils_newRelic_newRelic__WEBPACK_IMPORTED_MODULE_3__.S.addPageAction("MANUAL_ERROR_BOUNDARY",{errorMessage:error.toString(),url:location.href}),null===(_c=null===_utils_TrackingHelper__WEBPACK_IMPORTED_MODULE_2__.U||void 0===_utils_TrackingHelper__WEBPACK_IMPORTED_MODULE_2__.U?void 0:_utils_TrackingHelper__WEBPACK_IMPORTED_MODULE_2__.U.fullStoryEvent)||void 0===_c||_c.call(_utils_TrackingHelper__WEBPACK_IMPORTED_MODULE_2__.U,"MANUAL_ERROR_BOUNDARY",{errorMessage:error.toString(),url:location.href})},ManualErrorBoundary.prototype.render=function(){return this.state.hasError?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(ErrorWrapper,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({severity:"error",sx:{margin:_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.A.spacing(4)}},{children:"An error occurred. Please refresh the page."}))}):this.props.children},ManualErrorBoundary}(react__WEBPACK_IMPORTED_MODULE_1__.Component);var templateObject_1},"./app/utils/TrackingHelper/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>trackingHelper});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/index.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),trackingHelper=new(function(){function TrackingHelper(){this.appVersion="classic",this.isBulk=!1}return TrackingHelper.prototype.properties=function(){var _a;return{appVersionName:this.appVersion,isBulk:this.isBulk,orderId:this.orderId,orderIds:this.orderIds,userDetails:this.userDetails,trackedOrderDetailsByShipment:this.trackedOrderDetailsByShipment,selectedOrders:this.selectedOrders,orderQuantity:(null===(_a=this.orderIds)||void 0===_a?void 0:_a.length)||(this.orderId?1:0)}},TrackingHelper.prototype.getReferenceId=function(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()},TrackingHelper.prototype.getBaseTrackingReference=function(initialEventName,appLocation){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({initialEventName,referenceId:this.getReferenceId(),appLocation},(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.properties()))},TrackingHelper.prototype.extendTrackingReference=function(trackingReference,requiredProps){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(trackingReference)),(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(requiredProps))},TrackingHelper.prototype.appendGlobalProps=function(input){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},input),(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.properties()))},TrackingHelper.prototype.getTrackingReference=function(initialEventName,appLocation,requiredProps){var trackingReference=this.getBaseTrackingReference(initialEventName,appLocation);return this.extendTrackingReference(trackingReference,requiredProps)},TrackingHelper.prototype.amendTrackingReferenceOrders=function(trackingReference,orderIds){var duped=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(trackingReference);if(duped.orderId=void 0,duped.orderIds=void 0,duped.orderQuantity=void 0,duped.isBulk=!1,!orderIds)return duped;switch(orderIds.length){case 0:return duped;case 1:return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},duped),{orderId:orderIds[0],orderQuantity:1});default:return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},duped),{orderIds,orderQuantity:orderIds.length,isBulk:!0})}},TrackingHelper.prototype.amendTrackingReferenceTrackedOrderDetailsByShipment=function(trackingReference,trackedOrderDetailsByShipment){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(trackingReference)),{trackedOrderDetailsByShipment})},TrackingHelper.prototype.amendTrackingReferenceOrderSelection=function(trackingReference,selectedOrders){if(!selectedOrders)return trackingReference;var orderIds=Object.keys(selectedOrders),trackingReferenceWithOrderIds=trackingHelper.amendTrackingReferenceOrders(trackingReference,orderIds);return trackingReferenceWithOrderIds.selectedOrders=selectedOrders,trackingReferenceWithOrderIds},TrackingHelper}())},"./app/utils/newRelic/newRelic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>newRelic});var newRelic=new(function(){function NewRelicClient(){this.instance=null}return NewRelicClient.prototype.setUserId=function(userId){var _a;null===(_a=this.instance)||void 0===_a||_a.setUserId(userId)},NewRelicClient.prototype.addPageAction=function(name,attributes){var _a;null===(_a=this.instance)||void 0===_a||_a.addPageAction(name,attributes)},NewRelicClient.prototype.setInstance=function(instance){this.instance=instance,this.instance.setApplicationVersion("WEB-1679:a7607e1ee5767857003693b4b40add45840465a5")},NewRelicClient.prototype.isInitialized=function(){return!!this.instance},NewRelicClient}())},"./app/pages/Manual/ManualErrorBoundary/ManualErrorBoundary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_ManualErrorBoundary__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Manual/ManualErrorBoundary/ManualErrorBoundary.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"ManualErrorBoundary",component:_ManualErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.A};var Child=function(){throw new Error},Regular=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_ManualErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},args,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(Child,{})}))}.bind({});Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"args => <ManualErrorBoundary {...args}>\n    <Child />\n  </ManualErrorBoundary>",...Regular.parameters?.docs?.source}}}}}]);