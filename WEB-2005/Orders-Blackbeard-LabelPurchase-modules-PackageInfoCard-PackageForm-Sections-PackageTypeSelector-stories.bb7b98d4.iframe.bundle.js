"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5805],{"./node_modules/@goshippo/components/esm/styles/elevations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>elevations});const elevations=["none","0px 2px 6px rgb(1 71 79 / 0.32)","0px 4px 6px rgb(1 71 79 / 0.32)","0px 8px 16px rgb(1 71 79 / 0.32)","0px 16px 24px rgb(1 71 79 / 0.32)"]},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.A)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx_m.A)(classes.root,className)},other))}))},"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useThemeProps_useThemeProps});var getThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js");var defaultTheme=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js");function useThemeProps_useThemeProps({props,name}){return function useThemeProps({props,name,defaultTheme}){const theme=(0,useTheme.A)(defaultTheme);return(0,getThemeProps.A)({theme,name,props})}({props,name,defaultTheme:defaultTheme.A})}},"./node_modules/@mui/material/utils/capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js").A},"./node_modules/@mui/private-theming/useTheme/ThemeContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext(null)},"./node_modules/@mui/private-theming/useTheme/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useTheme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/private-theming/useTheme/ThemeContext.js");function useTheme(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.A)}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.en[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.A)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Q)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/system/esm/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _createTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js");const systemDefaultTheme=(0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.A)();const __WEBPACK_DEFAULT_EXPORT__=function useTheme(defaultTheme=systemDefaultTheme){return(0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__.A)(defaultTheme)}},"./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getThemeProps});var _mui_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js");function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__.A)(theme.components[name].defaultProps,props):props}},"./node_modules/@mui/system/esm/useThemeWithoutDefault.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_private_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/private-theming/useTheme/useTheme.js");const __WEBPACK_DEFAULT_EXPORT__=function useTheme(defaultTheme=null){const contextTheme=(0,_mui_private_theming__WEBPACK_IMPORTED_MODULE_0__.A)();return!contextTheme||function isObjectEmpty(obj){return 0===Object.keys(obj).length}(contextTheme)?defaultTheme:contextTheme}},"./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const defaultGenerator=componentName=>componentName,__WEBPACK_DEFAULT_EXPORT__=(()=>{let generate=defaultGenerator;return{configure(generator){generate=generator},generate:componentName=>generate(componentName),reset(){generate=defaultGenerator}}})()},"./node_modules/@mui/utils/esm/composeClasses/composeClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function composeClasses(slots,getUtilityClass,classes=void 0){const output={};return Object.keys(slots).forEach((slot=>{output[slot]=slots[slot].reduce(((acc,key)=>{if(key){const utilityClass=getUtilityClass(key);""!==utilityClass&&acc.push(utilityClass),classes&&classes[key]&&acc.push(classes[key])}return acc}),[]).join(" ")})),output}__webpack_require__.d(__webpack_exports__,{A:()=>composeClasses})},"./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>generateUtilityClass});var _ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");const globalStateClassesMapping={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function generateUtilityClass(componentName,slot,globalStatePrefix="Mui"){const globalStateClass=globalStateClassesMapping[slot];return globalStateClass?`${globalStatePrefix}-${globalStateClass}`:`${_ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__.A.generate(componentName)}-${slot}`}},"./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>generateUtilityClasses});var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function generateUtilityClasses(componentName,slots,globalStatePrefix="Mui"){const result={};return slots.forEach((slot=>{result[slot]=(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.A)(componentName,slot,globalStatePrefix)})),result}},"./node_modules/@mui/utils/esm/resolveProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>resolveProps});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");function resolveProps(defaultProps,props){const output=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.A)({},props);return Object.keys(defaultProps).forEach((propName=>{if(propName.toString().match(/^(components|slots)$/))output[propName]=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.A)({},defaultProps[propName],output[propName]);else if(propName.toString().match(/^(componentsProps|slotProps)$/)){const defaultSlotProps=defaultProps[propName]||{},slotProps=props[propName];output[propName]={},slotProps&&Object.keys(slotProps)?defaultSlotProps&&Object.keys(defaultSlotProps)?(output[propName]=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.A)({},slotProps),Object.keys(defaultSlotProps).forEach((slotPropName=>{output[propName][slotPropName]=resolveProps(defaultSlotProps[slotPropName],slotProps[slotPropName])}))):output[propName]=slotProps:output[propName]=defaultSlotProps}else void 0===output[propName]&&(output[propName]=defaultProps[propName])})),output}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./app/components/SelectableArea/SelectableArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectableArea});var templateObject_1,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Button=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.Ay)("button")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.ue)(["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid ",";\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"],["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid ",";\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1.5,2),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.borders,_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.white,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.text.default,_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.transitions.duration.shortest,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.$[2],_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.borderFocus,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.selectedBackground,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.primary,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.text.disabled,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.backgroundDeemphasized,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.secondaryDisabled),SelectableArea=function(_a){var selected=_a.selected,children=_a.children,attributes=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["selected","children"]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(Button,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},attributes,{"aria-pressed":selected?"true":"false"},{children}))}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nB:()=>SelectedParcelType,tf:()=>blackbeardDistanceUnit,zT:()=>blackbeardSignatureConfirmation});var blackbeardDistanceUnit={CM:"cm",IN:"in",MM:"mm"};var SelectedParcelType=function(){function SelectedParcelType(oneOffBoxOrTubeSelected,oneOffPolymailerSelected,selectedUserParcelTemplate,selectedCarrierParcelTemplate){this.oneOffBoxOrTubeSelected=oneOffBoxOrTubeSelected,this.oneOffPolymailerSelected=oneOffPolymailerSelected,this.selectedUserParcelTemplate=selectedUserParcelTemplate,this.selectedCarrierParcelTemplate=selectedCarrierParcelTemplate}return SelectedParcelType.unselected=function(){return new SelectedParcelType(!1,!1)},SelectedParcelType.selectCustomBoxOrTube=function(){return new SelectedParcelType(!0,!1)},SelectedParcelType.selectCustomPolymailer=function(){return new SelectedParcelType(!1,!0)},SelectedParcelType.selectUserParcelTemplate=function(template){return new SelectedParcelType(!1,!1,template)},SelectedParcelType.selectCarrierParcelTemplate=function(template){return new SelectedParcelType(!1,!1,void 0,template)},SelectedParcelType.prototype.selectFromTemplate=function(userTemplate,carrierTemplate){return userTemplate||carrierTemplate?new SelectedParcelType(!1,!1,userTemplate,carrierTemplate):this},SelectedParcelType.prototype.isUnselected=function(){return!this.isCustomSelected()&&!this.isTemplateSelected()},SelectedParcelType.prototype.isCustomSelected=function(){return this.isCustomBoxOrTubeSelected()||this.isCustomPolymailerSelected()},SelectedParcelType.prototype.isTemplateSelected=function(){return this.isUserParcelTemplateSelected()||this.isCarrierParcelTemplateSelected()},SelectedParcelType.prototype.isCustomBoxOrTubeSelected=function(){return this.oneOffBoxOrTubeSelected},SelectedParcelType.prototype.isCustomPolymailerSelected=function(){return this.oneOffPolymailerSelected},SelectedParcelType.prototype.isUserParcelTemplateSelected=function(){return void 0!==this.selectedUserParcelTemplate},SelectedParcelType.prototype.isCarrierParcelTemplateSelected=function(){return void 0!==this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedUserParcelTemplate=function(){return this.selectedUserParcelTemplate},SelectedParcelType.prototype.getSelectedCarrierParcelTemplate=function(){return this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedParcelTemplate=function(){return this.isUserParcelTemplateSelected()?this.getSelectedUserParcelTemplate():this.getSelectedCarrierParcelTemplate()},SelectedParcelType.prototype.isEqual=function(other){return this.isUnselected()?other.isUnselected():this.isCustomBoxOrTubeSelected()?other.isCustomBoxOrTubeSelected():this.isCustomPolymailerSelected()?other.isCustomPolymailerSelected():JSON.stringify(this.getSelectedParcelTemplate())===JSON.stringify(other.getSelectedParcelTemplate())},SelectedParcelType}(),blackbeardSignatureConfirmation={STANDARD:"STANDARD",ADULT:"ADULT",CERTIFIED:"CERTIFIED",INDIRECT:"INDIRECT",CARRIER_CONFIRMATION:"CARRIER_CONFIRMATION"}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/PackageInfoCard/PackageForm/Sections/PackageTypeSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxSelected:()=>BoxSelected,PolymailerSelected:()=>PolymailerSelected,default:()=>PackageTypeSelector_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),types=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),isSoftPack=function(template){return"Soft Pack"===(null==template?void 0:template.name)},isParcel2D=function(parcel){return!!parcel&&(function(parcel){return!parcel.userParcelTemplate&&!!parcel.carrierParcelTemplate}(parcel)?isSoftPack(parcel.carrierParcelTemplate):!(null==parcel?void 0:parcel.userParcelTemplate)&&!(null==parcel?void 0:parcel.height))},SelectableArea=(types.tf.IN,__webpack_require__("./app/components/SelectableArea/SelectableArea.tsx")),PackageTypeButton=(0,styled.Ay)(SelectableArea.a)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  justify-content: center;\n  align-items: center;\n  height: 3.75rem;\n"],["\n  justify-content: center;\n  align-items: center;\n  height: 3.75rem;\n"])));const Sections_PackageTypeSelector=function(_a){var parcels=_a.parcels,selectedParcelType=_a.selectedParcelType,onSelectBox=_a.onSelectBox,onSelectPolyMailer=_a.onSelectPolyMailer,t=_a.t,boxSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?!isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomBoxOrTubeSelected()}(selectedParcelType,parcels),polymailerSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomPolymailerSelected()}(selectedParcelType,parcels);return(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({spacing:1,direction:"row",sx:{width:"100%",gap:shippoTheme.A.spacing(1)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeButton,(0,tslib_es6.Cl)({onClick:onSelectBox,selected:boxSelected,"data-testid":"packageTypeSelector-box",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:colors.T.text.default},{children:t("orders:packageDimensionTypes:boxRadioShortLabel")}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeButton,(0,tslib_es6.Cl)({onClick:onSelectPolyMailer,selected:polymailerSelected,"data-testid":"packageTypeSelector-poly",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:colors.T.text.default},{children:t("orders:packageDimensionTypes:boxPolymailerLabel")}))}))]}))};var templateObject_1;const PackageTypeSelector_stories={title:"Package Type Selector",component:Sections_PackageTypeSelector,parameters:{},argTypes:{}};var PackageTypeSelectorWithTranslate=(0,translate.Tl)("orders")(Sections_PackageTypeSelector),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"400px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeSelectorWithTranslate,(0,tslib_es6.Cl)({},args))}))},BoxSelected=Template.bind({});BoxSelected.args={parcels:[],selectedParcelType:types.nB.selectCustomBoxOrTube(),onSelectBox:function(){},onSelectPolyMailer:function(){}};var PolymailerSelected=Template.bind({});PolymailerSelected.args={parcels:[],selectedParcelType:types.nB.selectCustomPolymailer(),onSelectBox:function(){},onSelectPolyMailer:function(){}},BoxSelected.parameters={...BoxSelected.parameters,docs:{...BoxSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...BoxSelected.parameters?.docs?.source}}},PolymailerSelected.parameters={...PolymailerSelected.parameters,docs:{...PolymailerSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...PolymailerSelected.parameters?.docs?.source}}}}}]);