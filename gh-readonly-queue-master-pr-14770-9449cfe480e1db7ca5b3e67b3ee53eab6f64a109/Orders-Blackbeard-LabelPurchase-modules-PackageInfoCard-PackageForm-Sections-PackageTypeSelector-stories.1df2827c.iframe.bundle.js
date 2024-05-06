"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5805],{"./node_modules/@goshippo/components/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Stack_Stack_Stack});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,styled.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,esm_extends.A)({display:"flex",flexDirection:"column"},(0,breakpoints.NI)({theme},(0,breakpoints.kW)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.LX)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.kW)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.kW)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing._W)(transformer,propValue)}};var direction};styles=(0,deepmerge.A)(styles,(0,breakpoints.NI)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.iZ)(theme.breakpoints,styles),styles})),Stack=react.forwardRef((function Stack(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiStack"}),props=(0,extendSxProp.A)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState={direction,spacing};return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.A)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))})),Stack_Stack=Stack;var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const stackTheme=(0,createTheme.A)(shippoTheme.A,{}),Stack_Stack_Stack=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:stackTheme},{children:(0,jsx_runtime.jsx)(Stack_Stack,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.A},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>typographyTheme,h:()=>extendedTypographyOptions});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:500,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h2:{fontWeight:500,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h3:{fontStyle:"normal",fontWeight:500,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:500}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:500}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:500}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:500,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,fontWeight:500}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,fontWeight:500})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.A)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.A,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@goshippo/components/esm/styles/elevations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>elevations});const elevations=["none","0px 2px 6px rgb(1 71 79 / 0.32)","0px 4px 6px rgb(1 71 79 / 0.32)","0px 8px 16px rgb(1 71 79 / 0.32)","0px 16px 24px rgb(1 71 79 / 0.32)"]},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.A)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx_m.A)(classes.root,className)},other))}))},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.en[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.A)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Q)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},otherProps,{sx:finalSx})}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _a,_b,_c,_d;__webpack_require__.d(__webpack_exports__,{Mx:()=>TransitCarrier,Uf:()=>carrierTransitTimeRange,nB:()=>SelectedParcelType,tf:()=>blackbeardDistanceUnit,zT:()=>blackbeardSignatureConfirmation});var blackbeardDistanceUnit={CM:"cm",IN:"in",MM:"mm"};var TransitCarrier,SelectedParcelType=function(){function SelectedParcelType(oneOffBoxOrTubeSelected,oneOffPolymailerSelected,selectedUserParcelTemplate,selectedCarrierParcelTemplate){this.oneOffBoxOrTubeSelected=oneOffBoxOrTubeSelected,this.oneOffPolymailerSelected=oneOffPolymailerSelected,this.selectedUserParcelTemplate=selectedUserParcelTemplate,this.selectedCarrierParcelTemplate=selectedCarrierParcelTemplate}return SelectedParcelType.unselected=function(){return new SelectedParcelType(!1,!1)},SelectedParcelType.selectCustomBoxOrTube=function(){return new SelectedParcelType(!0,!1)},SelectedParcelType.selectCustomPolymailer=function(){return new SelectedParcelType(!1,!0)},SelectedParcelType.selectUserParcelTemplate=function(template){return new SelectedParcelType(!1,!1,template)},SelectedParcelType.selectCarrierParcelTemplate=function(template){return new SelectedParcelType(!1,!1,void 0,template)},SelectedParcelType.prototype.selectFromTemplate=function(userTemplate,carrierTemplate){return userTemplate||carrierTemplate?new SelectedParcelType(!1,!1,userTemplate,carrierTemplate):this},SelectedParcelType.prototype.isUnselected=function(){return!this.isCustomSelected()&&!this.isTemplateSelected()},SelectedParcelType.prototype.isCustomSelected=function(){return this.isCustomBoxOrTubeSelected()||this.isCustomPolymailerSelected()},SelectedParcelType.prototype.isTemplateSelected=function(){return this.isUserParcelTemplateSelected()||this.isCarrierParcelTemplateSelected()},SelectedParcelType.prototype.isCustomBoxOrTubeSelected=function(){return this.oneOffBoxOrTubeSelected},SelectedParcelType.prototype.isCustomPolymailerSelected=function(){return this.oneOffPolymailerSelected},SelectedParcelType.prototype.isUserParcelTemplateSelected=function(){return void 0!==this.selectedUserParcelTemplate},SelectedParcelType.prototype.isCarrierParcelTemplateSelected=function(){return void 0!==this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedUserParcelTemplate=function(){return this.selectedUserParcelTemplate},SelectedParcelType.prototype.getSelectedCarrierParcelTemplate=function(){return this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedParcelTemplate=function(){return this.isUserParcelTemplateSelected()?this.getSelectedUserParcelTemplate():this.getSelectedCarrierParcelTemplate()},SelectedParcelType.prototype.isEqual=function(other){return this.isUnselected()?other.isUnselected():this.isCustomBoxOrTubeSelected()?other.isCustomBoxOrTubeSelected():this.isCustomPolymailerSelected()?other.isCustomPolymailerSelected():JSON.stringify(this.getSelectedParcelTemplate())===JSON.stringify(other.getSelectedParcelTemplate())},SelectedParcelType}(),blackbeardSignatureConfirmation={STANDARD:"STANDARD",ADULT:"ADULT",CERTIFIED:"CERTIFIED",INDIRECT:"INDIRECT",CARRIER_CONFIRMATION:"CARRIER_CONFIRMATION"};!function(TransitCarrier){TransitCarrier.USPS="USPS",TransitCarrier.UPS="UPS",TransitCarrier.FedEx="FedEx"}(TransitCarrier||(TransitCarrier={}));var USPS_GroundAdvantage="usps_ground_advantage",USPS_PriorityMail="usps_priority_mail",USPS_PriorityMailExpress="usps_priority_mail_express",UPS_Ground="ups_ground",UPS_GroundSaver="ups_ground_saver",FedEx_HomeDelivery="fedex_home_delivery",FedEx_TwoDay="fedex_2_day",FedEx_GroundEconomy="fedex_ground_economy",carrierTransitTimeRange=((_a={})[TransitCarrier.USPS]=((_b={})[USPS_GroundAdvantage]={min:2,max:5,type:"business"},_b[USPS_PriorityMail]={min:1,max:3,type:"business"},_b[USPS_PriorityMailExpress]={min:2,max:2,type:"calendar"},_b),_a[TransitCarrier.UPS]=((_c={})[UPS_Ground]={min:1,max:5,type:"business"},_c[UPS_GroundSaver]={min:2,max:7,type:"business"},_c),_a[TransitCarrier.FedEx]=((_d={})[FedEx_HomeDelivery]={min:1,max:5,type:"business"},_d[FedEx_TwoDay]={min:2,max:2,type:"business"},_d[FedEx_GroundEconomy]={min:2,max:7,type:"business"},_d),_a)},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/PackageInfoCard/PackageForm/Sections/PackageTypeSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxSelected:()=>BoxSelected,PolymailerSelected:()=>PolymailerSelected,default:()=>PackageTypeSelector_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),types=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),isSoftPack=function(template){return"Soft Pack"===(null==template?void 0:template.name)},isParcel2D=function(parcel){return!!parcel&&(function(parcel){return!parcel.userParcelTemplate&&!!parcel.carrierParcelTemplate}(parcel)?isSoftPack(parcel.carrierParcelTemplate):!(null==parcel?void 0:parcel.userParcelTemplate)&&!(null==parcel?void 0:parcel.height))},PackageTypeButton=(types.tf.IN,(0,__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").A)("button")(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n\n  height: 3.75rem;\n  padding: 1rem;\n\n  background-color: ",";\n  color: ",";\n\n  border: 1px solid ",";\n  border-radius: 0.5rem;\n\n  cursor: pointer;\n\n  &:focus {\n    outline: 4px solid #26d990;\n  }\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &[aria-pressed='true'] {\n    background-color: ",";\n    border: 2px solid ",";\n  }\n"],["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n\n  height: 3.75rem;\n  padding: 1rem;\n\n  background-color: ",";\n  color: ",";\n\n  border: 1px solid ",";\n  border-radius: 0.5rem;\n\n  cursor: pointer;\n\n  &:focus {\n    outline: 4px solid #26d990;\n  }\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &[aria-pressed='true'] {\n    background-color: ",";\n    border: 2px solid ",";\n  }\n"])),colors.T.white,colors.T.text.default,colors.T.borders,elevations.$[2],colors.T.accent.background.success,colors.T.accent.foreground.success));const Sections_PackageTypeSelector=function(_a){var parcels=_a.parcels,selectedParcelType=_a.selectedParcelType,onSelectBox=_a.onSelectBox,onSelectPolyMailer=_a.onSelectPolyMailer,t=_a.t,boxSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?!isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomBoxOrTubeSelected()}(selectedParcelType,parcels),polymailerSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomPolymailerSelected()}(selectedParcelType,parcels);return(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({spacing:1,direction:"row",sx:{width:"100%",gap:shippoTheme.A.spacing(1)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeButton,(0,tslib_es6.Cl)({onClick:onSelectBox,"aria-pressed":boxSelected?"true":"false","data-testid":"packageTypeSelector-box",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:colors.T.text.default},{children:t("orders:packageDimensionTypes:boxRadioShortLabel")}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeButton,(0,tslib_es6.Cl)({onClick:onSelectPolyMailer,"aria-pressed":polymailerSelected?"true":"false","data-testid":"packageTypeSelector-poly",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:colors.T.text.default},{children:t("orders:packageDimensionTypes:boxPolymailerLabel")}))}))]}))};var templateObject_1;const PackageTypeSelector_stories={title:"Package Type Selector",component:Sections_PackageTypeSelector,parameters:{},argTypes:{}};var PackageTypeSelectorWithTranslate=(0,translate.Tl)("orders")(Sections_PackageTypeSelector),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"400px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeSelectorWithTranslate,(0,tslib_es6.Cl)({},args))}))},BoxSelected=Template.bind({});BoxSelected.args={parcels:[],selectedParcelType:types.nB.selectCustomBoxOrTube(),onSelectBox:function(){},onSelectPolyMailer:function(){}};var PolymailerSelected=Template.bind({});PolymailerSelected.args={parcels:[],selectedParcelType:types.nB.selectCustomPolymailer(),onSelectBox:function(){},onSelectPolyMailer:function(){}},BoxSelected.parameters={...BoxSelected.parameters,docs:{...BoxSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...BoxSelected.parameters?.docs?.source}}},PolymailerSelected.parameters={...PolymailerSelected.parameters,docs:{...PolymailerSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...PolymailerSelected.parameters?.docs?.source}}}}}]);