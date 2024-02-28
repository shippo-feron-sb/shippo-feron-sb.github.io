"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1300],{"./node_modules/@goshippo/components/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Stack_Stack_Stack});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,styled.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,esm_extends.Z)({display:"flex",flexDirection:"column"},(0,breakpoints.k9)({theme},(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.P$)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing.NA)(transformer,propValue)}};var direction};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.dt)(theme.breakpoints,styles),styles})),Stack=react.forwardRef((function Stack(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiStack"}),props=(0,extendSxProp.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState={direction,spacing};return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.Z)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))})),Stack_Stack=Stack;var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const stackTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Stack_Stack_Stack=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:stackTheme},{children:(0,jsx_runtime.jsx)(Stack_Stack,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.Z},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.Z,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>extendedTypographyOptions,Z:()=>typographyTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:700,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},h2:{fontWeight:700,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},h3:{fontStyle:"normal",fontWeight:700,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:700}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:700}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:700}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:700,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,fontWeight:700}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,lineHeight:1.5,fontWeight:700})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.Z)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx_m.Z)(classes.root,className)},other))}))},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.Gc[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JK:()=>SelectedParcelType,XR:()=>blackbeardSignatureConfirmation,bj:()=>blackbeardDistanceUnit});var blackbeardDistanceUnit={CM:"cm",IN:"in",MM:"mm"};var SelectedParcelType=function(){function SelectedParcelType(oneOffBoxOrTubeSelected,oneOffPolymailerSelected,selectedUserParcelTemplate,selectedCarrierParcelTemplate){this.oneOffBoxOrTubeSelected=oneOffBoxOrTubeSelected,this.oneOffPolymailerSelected=oneOffPolymailerSelected,this.selectedUserParcelTemplate=selectedUserParcelTemplate,this.selectedCarrierParcelTemplate=selectedCarrierParcelTemplate}return SelectedParcelType.unselected=function(){return new SelectedParcelType(!1,!1)},SelectedParcelType.selectCustomBoxOrTube=function(){return new SelectedParcelType(!0,!1)},SelectedParcelType.selectCustomPolymailer=function(){return new SelectedParcelType(!1,!0)},SelectedParcelType.selectUserParcelTemplate=function(template){return new SelectedParcelType(!1,!1,template)},SelectedParcelType.selectCarrierParcelTemplate=function(template){return new SelectedParcelType(!1,!1,void 0,template)},SelectedParcelType.prototype.selectFromTemplate=function(userTemplate,carrierTemplate){return userTemplate||carrierTemplate?new SelectedParcelType(!1,!1,userTemplate,carrierTemplate):this},SelectedParcelType.prototype.isUnselected=function(){return!this.isCustomSelected()&&!this.isTemplateSelected()},SelectedParcelType.prototype.isCustomSelected=function(){return this.isCustomBoxOrTubeSelected()||this.isCustomPolymailerSelected()},SelectedParcelType.prototype.isTemplateSelected=function(){return this.isUserParcelTemplateSelected()||this.isCarrierParcelTemplateSelected()},SelectedParcelType.prototype.isCustomBoxOrTubeSelected=function(){return this.oneOffBoxOrTubeSelected},SelectedParcelType.prototype.isCustomPolymailerSelected=function(){return this.oneOffPolymailerSelected},SelectedParcelType.prototype.isUserParcelTemplateSelected=function(){return void 0!==this.selectedUserParcelTemplate},SelectedParcelType.prototype.isCarrierParcelTemplateSelected=function(){return void 0!==this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedUserParcelTemplate=function(){return this.selectedUserParcelTemplate},SelectedParcelType.prototype.getSelectedCarrierParcelTemplate=function(){return this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedParcelTemplate=function(){return this.isUserParcelTemplateSelected()?this.getSelectedUserParcelTemplate():this.getSelectedCarrierParcelTemplate()},SelectedParcelType.prototype.isEqual=function(other){return this.isUnselected()?other.isUnselected():this.isCustomBoxOrTubeSelected()?other.isCustomBoxOrTubeSelected():this.isCustomPolymailerSelected()?other.isCustomPolymailerSelected():JSON.stringify(this.getSelectedParcelTemplate())===JSON.stringify(other.getSelectedParcelTemplate())},SelectedParcelType}(),blackbeardSignatureConfirmation={STANDARD:"STANDARD",ADULT:"ADULT",CERTIFIED:"CERTIFIED",INDIRECT:"INDIRECT",CARRIER_CONFIRMATION:"CARRIER_CONFIRMATION"}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iu:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Iu,cC:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.cC,eU:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.eU});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/PackageInfoCard/PackageForm/Sections/PackageTypeSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxSelected:()=>BoxSelected,PolymailerSelected:()=>PolymailerSelected,default:()=>PackageTypeSelector_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),types=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),isSoftPack=function(template){return"Soft Pack"===(null==template?void 0:template.name)},isParcel2D=function(parcel){return!!parcel&&(function(parcel){return!parcel.userParcelTemplate&&!!parcel.carrierParcelTemplate}(parcel)?isSoftPack(parcel.carrierParcelTemplate):!(null==parcel?void 0:parcel.userParcelTemplate)&&!(null==parcel?void 0:parcel.height))},packageTypeBoxStyle=(types.bj.IN,function(selected){var selectedStyles={border:"2px solid ".concat(colors.O.accent.foreground.success),backgroundColor:colors.O.accent.background.success,"&:hover":{backgroundColor:colors.O.hoverFocus,boxShadow:elevations.P[2]}},unselectedStyles={border:"1px solid ".concat(colors.O.borders),backgroundColor:"white","&:hover":{backgroundColor:"white",boxShadow:elevations.P[2]}},currentStyles=selected?selectedStyles:unselectedStyles;return(0,tslib_es6.pi)((0,tslib_es6.pi)({display:"flex",flex:1,justifyContent:"center",padding:"1rem",borderRadius:"0.5rem",cursor:"pointer",gap:"0.8rem",color:colors.O.text.default,height:"3.75rem"},currentStyles),{"&:focus":{outline:"".concat(colors.O.web.hover," 4px solid"),boxShadow:elevations.P[0],color:colors.O.text.default}})});const Sections_PackageTypeSelector=function(_a){var parcels=_a.parcels,selectedParcelType=_a.selectedParcelType,onSelectBox=_a.onSelectBox,onSelectPolyMailer=_a.onSelectPolyMailer,t=_a.t,boxSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?!isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomBoxOrTubeSelected()}(selectedParcelType,parcels),polymailerSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomPolymailerSelected()}(selectedParcelType,parcels);return(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({spacing:1,direction:"row",sx:{width:"100%",gap:shippoTheme.Z.spacing(1)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({sx:packageTypeBoxStyle(boxSelected),onClick:onSelectBox,"aria-pressed":boxSelected?"true":"false","data-testid":"packageTypeSelector-box",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"div",color:colors.O.text.default},{children:t("orders:packageDimensionTypes:boxRadioShortLabel")}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({sx:packageTypeBoxStyle(polymailerSelected),onClick:onSelectPolyMailer,"aria-pressed":polymailerSelected?"true":"false","data-testid":"packageTypeSelector-poly",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"div",color:colors.O.text.default},{children:t("orders:packageDimensionTypes:boxPolymailerLabel")}))}))]}))},PackageTypeSelector_stories={title:"Package Type Selector",component:Sections_PackageTypeSelector,parameters:{},argTypes:{}};var PackageTypeSelectorWithTranslate=(0,translate.Iu)("orders")(Sections_PackageTypeSelector),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:"400px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(PackageTypeSelectorWithTranslate,(0,tslib_es6.pi)({},args))}))},BoxSelected=Template.bind({});BoxSelected.args={parcels:[],selectedParcelType:types.JK.selectCustomBoxOrTube(),onSelectBox:function(){},onSelectPolyMailer:function(){}};var PolymailerSelected=Template.bind({});PolymailerSelected.args={parcels:[],selectedParcelType:types.JK.selectCustomPolymailer(),onSelectBox:function(){},onSelectPolyMailer:function(){}},BoxSelected.parameters={...BoxSelected.parameters,docs:{...BoxSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...BoxSelected.parameters?.docs?.source}}},PolymailerSelected.parameters={...PolymailerSelected.parameters,docs:{...PolymailerSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...PolymailerSelected.parameters?.docs?.source}}}}}]);