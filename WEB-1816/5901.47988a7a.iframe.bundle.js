(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5901],{"./node_modules/@goshippo/components/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const boxTheme=(0,createTheme.A)(shippoTheme.A,{}),Box=(0,createBox.A)({defaultTheme:boxTheme})},"./node_modules/@goshippo/components/esm/FormControlLabel/FormControlLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>FormControlLabel_FormControlLabel});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js");const formControlLabelTheme={components:{MuiFormControlLabel:{styleOverrides:{root:{alignItems:"flex-start",gap:shippoTheme.A.spacing(.5),"& .MuiCheckbox-root":{"&+.MuiFormControlLabel-label":{padding:"9px 0"}},"& .MuiRadio-root":{"&+.MuiFormControlLabel-label":{padding:`${shippoTheme.A.spacing(1)} 0`,display:"block"}},"&.MuiFormControlLabel-labelPlacementStart":{alignSelf:"flex-start"},"&.MuiFormControlLabel-labelPlacementEnd":{alignSelf:"flex-start"}},label:{display:"flex",alignSelf:"center",color:colors.T.text.default,fontSize:shippoTheme.A.spacing(2),fontWeight:400,lineHeight:"150%","&.Mui-disabled *":{color:colors.T.secondaryDisabled,textDecorationColor:colors.T.secondaryDisabled}}}}}};var formControlLabelTheme$1=(0,createTheme.A)(shippoTheme.A,formControlLabelTheme);const FormControlLabel_FormControlLabel=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:formControlLabelTheme$1},{children:(0,jsx_runtime.jsx)(FormControlLabel.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Radio_Radio_Radio});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const RadioButtonUnchecked=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),RadioButtonChecked=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const RadioButtonIconRoot=(0,styled.Ay)("span")({position:"relative",display:"flex"}),RadioButtonIconBackground=(0,styled.Ay)(RadioButtonUnchecked)({transform:"scale(1)"}),RadioButtonIconDot=(0,styled.Ay)(RadioButtonChecked)((({theme,ownerState})=>(0,esm_extends.A)({left:0,position:"absolute",transform:"scale(0)",transition:theme.transitions.create("transform",{easing:theme.transitions.easing.easeIn,duration:theme.transitions.duration.shortest})},ownerState.checked&&{transform:"scale(1)",transition:theme.transitions.create("transform",{easing:theme.transitions.easing.easeOut,duration:theme.transitions.duration.shortest})})));const Radio_RadioButtonIcon=function RadioButtonIcon(props){const{checked=!1,classes={},fontSize}=props,ownerState=(0,esm_extends.A)({},props,{checked});return(0,jsx_runtime.jsxs)(RadioButtonIconRoot,{className:classes.root,ownerState,children:[(0,jsx_runtime.jsx)(RadioButtonIconBackground,{fontSize,className:classes.background,ownerState}),(0,jsx_runtime.jsx)(RadioButtonIconDot,{fontSize,className:classes.dot,ownerState})]})};var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),createChainedFunction=__webpack_require__("./node_modules/@mui/material/utils/createChainedFunction.js"),RadioGroupContext=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroupContext.js");var generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getRadioUtilityClass(slot){return(0,generateUtilityClass.A)("MuiRadio",slot)}const Radio_radioClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),_excluded=["checked","checkedIcon","color","icon","name","onChange","size"],RadioRoot=(0,styled.Ay)(SwitchBase.A,{shouldForwardProp:prop=>(0,styled.ep)(prop)||"classes"===prop,name:"MuiRadio",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`color${(0,capitalize.A)(ownerState.color)}`]]}})((({theme,ownerState})=>(0,esm_extends.A)({color:(theme.vars||theme).palette.text.secondary,"&:hover":{backgroundColor:theme.vars?`rgba(${"default"===ownerState.color?theme.vars.palette.action.activeChannel:theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)("default"===ownerState.color?theme.palette.action.active:theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==ownerState.color&&{[`&.${Radio_radioClasses.checked}`]:{color:(theme.vars||theme).palette[ownerState.color].main}},{[`&.${Radio_radioClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled}})));const defaultCheckedIcon=(0,jsx_runtime.jsx)(Radio_RadioButtonIcon,{checked:!0}),defaultIcon=(0,jsx_runtime.jsx)(Radio_RadioButtonIcon,{}),Radio_Radio=react.forwardRef((function Radio(inProps,ref){var _defaultIcon$props$fo,_defaultCheckedIcon$p;const props=(0,useThemeProps.A)({props:inProps,name:"MuiRadio"}),{checked:checkedProp,checkedIcon=defaultCheckedIcon,color="primary",icon=defaultIcon,name:nameProp,onChange:onChangeProp,size="medium"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{color,size}),classes=(ownerState=>{const{classes,color}=ownerState,slots={root:["root",`color${(0,capitalize.A)(color)}`]};return(0,esm_extends.A)({},classes,(0,composeClasses.A)(slots,getRadioUtilityClass,classes))})(ownerState),radioGroup=function useRadioGroup(){return react.useContext(RadioGroupContext.A)}();let checked=checkedProp;const onChange=(0,createChainedFunction.A)(onChangeProp,radioGroup&&radioGroup.onChange);let name=nameProp;return radioGroup&&(void 0===checked&&(checked=function areEqualValues(a,b){return"object"==typeof b&&null!==b?a===b:String(a)===String(b)}(radioGroup.value,props.value)),void 0===name&&(name=radioGroup.name)),(0,jsx_runtime.jsx)(RadioRoot,(0,esm_extends.A)({type:"radio",icon:react.cloneElement(icon,{fontSize:null!=(_defaultIcon$props$fo=defaultIcon.props.fontSize)?_defaultIcon$props$fo:size}),checkedIcon:react.cloneElement(checkedIcon,{fontSize:null!=(_defaultCheckedIcon$p=defaultCheckedIcon.props.fontSize)?_defaultCheckedIcon$p:size}),ownerState,classes,name,checked,onChange,ref},other))}));var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const radioThemeInput={components:{MuiRadio:{styleOverrides:{root:{width:shippoTheme.A.spacing(5),height:shippoTheme.A.spacing(5),color:colors.T.text.default,"&.Mui-disabled":{color:colors.T.secondaryDisabled},"& .MuiTouchRipple-root":{zIndex:-1},"& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible":{color:colors.T.hoverFocus,opacity:1},":hover":{backgroundColor:colors.T.selectedBackground},":focus":{backgroundColor:colors.T.hoverFocus},'& svg[data-testId="CircleTwoToneIcon"]':{"& circle":{color:colors.T.backgroundEmphasized,opacity:1}}}}}}};var radioTheme=(0,createTheme.A)(shippoTheme.A,radioThemeInput),ThemeExtension=__webpack_require__("./node_modules/@goshippo/components/esm/ThemeExtension/index.js"),CircleTwoTone=__webpack_require__("./node_modules/@mui/icons-material/CircleTwoTone.js");const RadioSelectedIcon=(0,createSvgIcon.A)((0,jsx_runtime.jsxs)("svg",Object.assign({viewBox:"0 0 24 24","data-testid":"CircleTwoToneIcon"},{children:[(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"12",r:"9",fill:"white",stroke:colors.T.primary,strokeWidth:"2"}),(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"12",r:"5",fill:colors.T.primary})]})),"RadioSelected"),Radio_Radio_Radio=_a=>{var props=(0,tslib_es6.Tt)(_a,[]);const extendedTheme=(0,ThemeExtension.c)();return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:(null==extendedTheme?void 0:extendedTheme.Radio)||radioTheme},{children:(0,jsx_runtime.jsx)(Radio_Radio,Object.assign({icon:(0,jsx_runtime.jsx)(CircleTwoTone.A,{}),checkedIcon:(0,jsx_runtime.jsx)(RadioSelectedIcon,{})},props,{size:"small"}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.A},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>typographyTheme,h:()=>extendedTypographyOptions});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:500,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h2:{fontWeight:500,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h3:{fontStyle:"normal",fontWeight:500,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:500}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:500}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:500}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:500,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,fontWeight:500}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,fontWeight:500})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.A)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.A,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@mui/icons-material/CircleTwoTone.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default=(0,_createSvgIcon.default)([(0,_jsxRuntime.jsx)("circle",{cx:"12",cy:"12",r:"8",opacity:".3"},"0"),(0,_jsxRuntime.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"1")],"CircleTwoTone");exports.A=_default},"./node_modules/@mui/icons-material/utils/createSvgIcon.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _utils.createSvgIcon}});var _utils=__webpack_require__("./node_modules/@mui/material/utils/index.js")},"./node_modules/@mui/material/RadioGroup/RadioGroupContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext(void 0)},"./node_modules/@mui/material/utils/createChainedFunction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/createChainedFunction.js").A},"./node_modules/@mui/material/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{capitalize:()=>capitalize.A,createChainedFunction:()=>createChainedFunction.A,createSvgIcon:()=>createSvgIcon.A,debounce:()=>debounce.A,deprecatedPropType:()=>utils_deprecatedPropType,isMuiElement:()=>isMuiElement.A,ownerDocument:()=>ownerDocument.A,ownerWindow:()=>ownerWindow.A,requirePropFactory:()=>utils_requirePropFactory,setRef:()=>utils_setRef,unstable_ClassNameGenerator:()=>unstable_ClassNameGenerator,unstable_useEnhancedEffect:()=>useEnhancedEffect.A,unstable_useId:()=>useId.A,unsupportedProp:()=>utils_unsupportedProp,useControlled:()=>useControlled.A,useEventCallback:()=>useEventCallback.A,useForkRef:()=>useForkRef.A,useIsFocusVisible:()=>useIsFocusVisible.A});var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),createChainedFunction=__webpack_require__("./node_modules/@mui/material/utils/createChainedFunction.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js");const utils_deprecatedPropType=function deprecatedPropType(validator,reason){return()=>null};var isMuiElement=__webpack_require__("./node_modules/@mui/material/utils/isMuiElement.js"),ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js");__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");const utils_requirePropFactory=function requirePropFactory(componentNameInError,Component){return()=>null};const utils_setRef=__webpack_require__("./node_modules/@mui/utils/esm/setRef.js").A;var useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),useId=__webpack_require__("./node_modules/@mui/material/utils/useId.js");const utils_unsupportedProp=function unsupportedProp(props,propName,componentName,location,propFullName){return null};var useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useEventCallback=__webpack_require__("./node_modules/@mui/material/utils/useEventCallback.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js");const unstable_ClassNameGenerator={configure:generator=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),ClassNameGenerator.A.configure(generator)}}},"./node_modules/@mui/material/utils/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useId/useId.js").A},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__.A}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__.Ay)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.A)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.A)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}},"./node_modules/uuid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var v1=__webpack_require__("./node_modules/uuid/v1.js"),v4=__webpack_require__("./node_modules/uuid/v4.js"),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},"./node_modules/uuid/lib/bytesToUuid.js":module=>{for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=function bytesToUuid(buf,offset){var i=offset||0,bth=byteToHex;return[bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]]].join("")}},"./node_modules/uuid/lib/rng-browser.js":module=>{var getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(getRandomValues){var rnds8=new Uint8Array(16);module.exports=function whatwgRNG(){return getRandomValues(rnds8),rnds8}}else{var rnds=new Array(16);module.exports=function mathRNG(){for(var r,i=0;i<16;i++)3&i||(r=4294967296*Math.random()),rnds[i]=r>>>((3&i)<<3)&255;return rnds}}},"./node_modules/uuid/v1.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _nodeId,_clockseq,rng=__webpack_require__("./node_modules/uuid/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid/lib/bytesToUuid.js"),_lastMSecs=0,_lastNSecs=0;module.exports=function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[],node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){var seedBytes=rng();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}var msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq;var tl=(1e4*(268435455&(msecs+=122192928e5))+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}},"./node_modules/uuid/v4.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng=__webpack_require__("./node_modules/uuid/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid/lib/bytesToUuid.js");module.exports=function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"===options?new Array(16):null,options=null);var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}},"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.__esModule=!0,module.exports.default=module.exports}}]);