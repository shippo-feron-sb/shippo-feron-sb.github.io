(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[8144],{"./app/assets/orders/automatic-insurance.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"771e65e623666584763c4af7cd394f4f.svg"},"./node_modules/@goshippo/components/esm/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Link_Link_Link});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.A)("MuiLink",slot)}const Link_linkClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Link_getTextDecoration=({theme,ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.Y)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.Y)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.X4)(color,.4)},_excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.Ay)(Typography.A,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.A)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme,ownerState})=>(0,esm_extends.A)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.A)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme,ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiLink"}),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.A)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.A)(ref,focusVisibleRef),ownerState=(0,esm_extends.A)({},props,{color,component,focusVisible,underline,variant}),classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.A)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.A)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.A)({color,className:(0,clsx_m.A)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState,variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color}],...Array.isArray(sx)?sx:[sx]]},other))}));var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),linkTheme=(0,createTheme.A)(shippoTheme.A,{palette:{alternate:colors.T.accent.foreground.informational},components:{MuiLink:{styleOverrides:{root:({ownerState})=>(()=>{const baseStyle={cursor:"pointer",":focus":{outline:`4px solid ${colors.T.hoverFocus}`,borderRadius:"2px"}};return"primary"===ownerState.color?Object.assign(Object.assign({},baseStyle),{color:colors.T.primary,textDecorationColor:colors.T.primary,":hover":{color:colors.T.primaryButtonHover,textDecorationColor:colors.T.primaryButtonHover},"h3, h4, p, span":{color:colors.T.primary,textDecorationColor:colors.T.primary,":hover":{color:colors.T.primaryButtonHover,textDecorationColor:colors.T.primaryButtonHover}}}):Object.assign(Object.assign({},baseStyle),{color:colors.T.text.default,textDecorationColor:colors.T.text.default,":hover":{color:colors.T.secondary,textDecorationColor:colors.T.secondary},"h3, h4, p":{color:colors.T.text.default,textDecorationColor:colors.T.text.default,":hover":{color:colors.T.secondary,textDecorationColor:colors.T.secondary}}})})()}}}});const Link_Link_Link=_a=>{var{children,dataE2e,dataAnalytics,onClick}=_a,props=(0,tslib_es6.Tt)(_a,["children","dataE2e","dataAnalytics","onClick"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:linkTheme},{children:(0,jsx_runtime.jsx)(Link_Link,Object.assign({},props,{"data-e2e":dataE2e||"","data-analytics":dataAnalytics||"",onClick},{children}))}))}},"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.A)("MuiPaper",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)},PaperRoot=(0,styled.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.A)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.A)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.X4)("#fff",getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.X4)("#fff",getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.A)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.A)({as:component,ownerState,className:(0,clsx_m.A)(classes.root,className),ref},other))}))},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/All/OrderDetailsPage/AutomaticInsuranceNotice/AutomaticInsuranceNotice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>AutomaticInsuranceNotice_stories});var templateObject_1,templateObject_2,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),Alert=__webpack_require__("./node_modules/@goshippo/components/esm/Alert/Alert.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),AlertTitle=__webpack_require__("./node_modules/@goshippo/components/esm/AlertTitle/AlertTitle.js"),Link=__webpack_require__("./node_modules/@goshippo/components/esm/Link/Link.js"),automatic_insurance=__webpack_require__("./app/assets/orders/automatic-insurance.svg"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),StyledAlert=(0,emotion_styled_browser_esm.A)(Alert.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  padding: "," ",";\n  .MuiAlert-icon {\n    margin: auto;\n    margin-right: ",";\n  }\n"],["\n  padding: "," ",";\n  .MuiAlert-icon {\n    margin: auto;\n    margin-right: ",";\n  }\n"])),shippoTheme.A.spacing(3.75),shippoTheme.A.spacing(3),shippoTheme.A.spacing(3)),StyledIconImage=emotion_styled_browser_esm.A.img(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  width: ",";\n  height: ",";\n"],["\n  width: ",";\n  height: ",";\n"])),shippoTheme.A.spacing(8.75),shippoTheme.A.spacing(11.25)),AutomaticInsuranceIcon=function(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledIconImage,{src:automatic_insurance,alt:"insurance icon"})},AutomaticInsuranceNotice=function(_a){var t=_a.t;return(0,emotion_react_jsx_runtime_browser_esm.FD)(StyledAlert,(0,tslib_es6.Cl)({icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(AutomaticInsuranceIcon,{}),severity:"info"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(AlertTitle.A,(0,tslib_es6.Cl)({style:{marginBottom:shippoTheme.A.spacing(1.25)}},{children:t("orders:insurance:automatedInsurance:title")})),t("orders:insurance:automatedInsurance:description")," ",(0,emotion_react_jsx_runtime_browser_esm.Y)(Link.A,(0,tslib_es6.Cl)({href:"https://apps.goshippo.com/settings/insurance",target:"_blank",color:"secondary"},{children:t("orders:insurance:automatedInsurance:learnMore")}))]}))};const AutomaticInsuranceNotice_stories={title:"Order details page / Automatic insurance notice",component:AutomaticInsuranceNotice,parameters:{layout:"centered",backgrounds:{default:"grey"}}};var AutomaticInsuranceNoticeWithTranslate=(0,translate.Tl)("orders")(AutomaticInsuranceNotice),Default=function(props){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"400px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AutomaticInsuranceNoticeWithTranslate,(0,tslib_es6.Cl)({},props))}))}.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(props: AutomaticInsuranceNoticeProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <AutomaticInsuranceNoticeWithTranslate {...props} />\n    </div>;\n}",...Default.parameters?.docs?.source}}}}}]);