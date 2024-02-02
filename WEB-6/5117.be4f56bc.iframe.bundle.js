"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5117],{"./node_modules/@goshippo/components/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const boxTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Box=(0,createBox.Z)({defaultTheme:boxTheme})},"./node_modules/@goshippo/components/esm/Button/Button.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>buttonTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const variantContainedOverride={"&.MuiButton-containedPrimary":{boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[1],color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.white,"&:hover":{boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[2]},"&.Mui-disabled":{backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.primary.disabled,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0],color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.white}},"&.MuiButton-containedSecondary":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondary,outline:`${_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondary} solid 1px`,backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.white,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0],boxSizing:"border-box","&:focus":{outline:`${_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.hover} 4px solid`},"&:hover":{boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[1],backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.secondary.hover},"&.Mui-disabled":{outline:`${_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.secondary.disabled} solid 1px`,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.secondary.disabled,backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.white,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0]}},"&.MuiButton-containedError":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.white,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[1],"&:hover":{boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[2]},"&.Mui-disabled":{backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.error.disabled,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0],color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.white}}},variantTextOverride={"&.MuiButton-textPrimary":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.accent.foreground.success,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0],backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.transparent,"&:hover":{boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[1],backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.hover},"&.Mui-disabled":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.primary.disabled}},"&.MuiButton-textSecondary":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondary,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0],"&:hover":{backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondaryHover,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[1]},"&.Mui-disabled":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.secondary.disabled}},"&.MuiButton-textError":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.accent.foreground.error,boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[0],"&:hover":{boxShadow:_styles_elevations_js__WEBPACK_IMPORTED_MODULE_0__.P[1],backgroundColor:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.accent.background.error},"&.Mui-disabled":{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.error.disabled}}},buttonBySizeOverride={"&.MuiButton-sizeLarge":{padding:_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z.spacing(2)},"&.MuiButton-sizeMedium":{padding:`${_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z.spacing(1.5)} ${_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z.spacing(2)}`},"&.MuiButton-sizeSmall":{padding:_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z.spacing(1)}},buttonWithIconOverride={"&:has(span.MuiButton-startIcon), :has(span.MuiButton-endIcon)":{gap:_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z.spacing(2)},"& span.MuiButton-startIcon, span.MuiButton-endIcon":{margin:0}},buttonThemeInput={palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.primaryButtonHover},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondary,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondary},error:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.accent.foreground.error,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.specialUse.hover}},components:{MuiButton:{styleOverrides:{root:Object.assign(Object.assign(Object.assign(Object.assign({color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.secondary,textTransform:"none",fontWeight:700,fontSize:"1rem",lineHeight:"1.5rem",fontStyle:"normal",borderRadius:"8px",whiteSpace:"nowrap",minWidth:"auto",justifyContent:"center","&:focus":{outline:`${_styles_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.hover} 4px solid`}},buttonWithIconOverride),buttonBySizeOverride),variantContainedOverride),variantTextOverride)}}}};var buttonTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Z)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z,buttonThemeInput)},"./node_modules/@goshippo/components/esm/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconButton_IconButton});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Button_theme=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.theme.js"),iconButtonTheme=(0,createTheme.Z)(shippoTheme.Z,Button_theme.Z,{});const IconButton_IconButton=_a=>{var{children,dataAnalytics="",dataE2e=""}=_a,props=(0,tslib_es6._T)(_a,["children","dataAnalytics","dataE2e"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:iconButtonTheme},{children:(0,jsx_runtime.jsx)(IconButton.Z,Object.assign({"data-testid":`Icon-Button-${props.name}`,"data-analytics":dataAnalytics,"data-e2e":dataE2e,id:props.name},props,{children}))}))}},"./node_modules/@goshippo/components/esm/styles/elevations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>elevations});const elevations=["none","0px 2px 6px rgb(76 103 116 / 0.32)","0px 4px 6px rgb(76 103 116 / 0.32)","0px 8px 16px rgb(76 103 116 / 0.32)","0px 16px 24px rgb(76 103 116 / 0.32)"]},"./node_modules/@mui/icons-material/esm/ContentCopy.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy")},"./node_modules/@mui/material/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconButton_IconButton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getIconButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiIconButton",slot)}const IconButton_iconButtonClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["edge","children","className","color","disabled","disableFocusRipple","size"],IconButtonRoot=(0,styled.ZP)(ButtonBase.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],ownerState.edge&&styles[`edge${(0,capitalize.Z)(ownerState.edge)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest})},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.active} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12})),(({theme,ownerState})=>(0,esm_extends.Z)({},"inherit"===ownerState.color&&{color:"inherit"},"inherit"!==ownerState.color&&"default"!==ownerState.color&&(0,esm_extends.Z)({color:(theme.vars||theme).palette[ownerState.color].main},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===ownerState.size&&{padding:5,fontSize:theme.typography.pxToRem(18)},"large"===ownerState.size&&{padding:12,fontSize:theme.typography.pxToRem(28)},{[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}}))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiIconButton"}),{edge=!1,children,className,color="default",disabled=!1,disableFocusRipple=!1,size="medium"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{edge,color,disabled,disableFocusRipple,size}),classes=(ownerState=>{const{classes,disabled,color,edge,size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${(0,capitalize.Z)(color)}`,edge&&`edge${(0,capitalize.Z)(edge)}`,`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getIconButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(IconButtonRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,ref,ownerState},other,{children}))}))},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSvgIcon",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),ownerState,focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,{children:[children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon;function createSvgIcon(path,displayName){const Component=(props,ref)=>(0,jsx_runtime.jsx)(SvgIcon_SvgIcon,(0,esm_extends.Z)({"data-testid":`${displayName}Icon`,ref},props,{children:path}));return Component.muiName=SvgIcon_SvgIcon.muiName,react.memo(react.forwardRef(Component))}},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__.Z}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.Z)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}}}]);