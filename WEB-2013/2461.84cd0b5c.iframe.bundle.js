"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2461],{"./node_modules/@goshippo/components/esm/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Button_theme=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.theme.js"),iconButtonTheme=(0,createTheme.A)(shippoTheme.A,Button_theme.A,{});const IconButton_IconButton=_a=>{var{children,dataAnalytics="",dataE2e=""}=_a,props=(0,tslib_es6.Tt)(_a,["children","dataAnalytics","dataE2e"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:iconButtonTheme},{children:(0,jsx_runtime.jsx)(IconButton.A,Object.assign({"data-testid":`Icon-Button-${props.name}`,"data-analytics":dataAnalytics,"data-e2e":dataE2e,id:props.name},props,{children}))}))}},"./node_modules/@goshippo/libraries/dist/esm/shared/MobileAndDesktopDrawer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Drawer=__webpack_require__("./node_modules/@goshippo/components/esm/Drawer/Drawer.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js");const ChevronLeft=(0,__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js").A)((0,jsx_runtime.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");var Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Warning=__webpack_require__("./node_modules/@mui/icons-material/esm/Warning.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js");function U({isMobile:r,persistent:t}){return t&&!r?"persistent":void 0}const _=({children:r,drawerContentTestId:t,title:H,open:C,onClose:c,drawerProps:D,onBack:b,paperBoxShadow:g,fullWidth:M,fullHeight:j,hideBackdrop:I,persistent:T,showFulfilledError:l,subtitle:o,overrideBoxPadding:W,footerButtonPrimary:d,explicitFooterObject:h,footerButtonSecondary:i,footerDataTestId:$,backButtonDataTestId:z,closeButtonDataTestId:A})=>{const s=(0,useMediaQuery.A)(shippoTheme.A.breakpoints.down("sm"));return(0,jsx_runtime.jsxs)(Drawer.A,{variant:U({isMobile:s,persistent:T}),open:C,onClose:c,anchor:s?"bottom":"right",ModalProps:I?{hideBackdrop:!0}:void 0,PaperProps:{sx:V=>({...j?{height:"100vh",maxHeight:"100%"}:{maxHeight:s?"80vh":`calc(100% - ${V.spacing(2)})`},...g?{boxShadow:g}:{},maxWidth:s?"auto":"424px",width:M?"100%":void 0})},...D,children:[(0,jsx_runtime.jsxs)(Stack.A,{sx:{py:1.5,px:2,borderBottom:`1px solid ${colors.T.borders}`,height:"88px",boxSizing:"border-box"},direction:"row",alignItems:"center","data-testid":t||"mobile-and-desktop-drawer-content",children:[b&&(0,jsx_runtime.jsx)(IconButton.A,{onClick:b,"data-testid":z||"drawer-back-button",children:(0,jsx_runtime.jsx)(ChevronLeft,{color:"secondary"})}),(0,jsx_runtime.jsxs)(Stack.A,{direction:"column",sx:{flex:1,textAlign:"center"},children:[(0,jsx_runtime.jsx)(Typography.A,{align:"center",sx:{flex:1},component:"h3",variant:"h1","data-testid":"drawer-title",children:H}),o&&(0,jsx_runtime.jsx)(Typography.A,{component:"p",variant:"body","data-testid":"drawer-subtitle",children:o})]}),c&&(0,jsx_runtime.jsx)(IconButton.A,{onClick:c,"data-testid":A||"drawer-close-button",children:(0,jsx_runtime.jsx)(Close.A,{color:"secondary"})})]}),(0,jsx_runtime.jsx)(Box.A,{sx:{flex:1,overflow:"auto",p:W?0:2},children:r}),(h||(null==d?void 0:d.action)||(null==i?void 0:i.action))&&(0,jsx_runtime.jsxs)(Stack.A,{"data-testid":$||"drawer-footer",sx:{gap:"1rem",maxHeight:"15vh",flexDirection:"column",justifyContent:l?"space-around":"center",padding:shippoTheme.A.spacing(2),borderTop:`1px solid ${colors.T.borders}`,boxSizing:"border-box",minHeight:"88px"},children:[!!l&&(0,jsx_runtime.jsxs)(Stack.A,{direction:"row","data-testid":"drawer-footer-error-message",children:[(0,jsx_runtime.jsx)(Warning.A,{color:"warning"}),(0,jsx_runtime.jsx)(Typography.A,{component:"span",variant:"body",sx:{marginLeft:2},children:l})]}),(0,jsx_runtime.jsxs)(Stack.A,{spacing:1,sx:{overflow:"visible",flexDirection:"row",alignItems:"center",justifyContent:i||h?"space-between":"flex-start"},children:[h,(null==i?void 0:i.action)&&(0,jsx_runtime.jsx)(Box.A,{children:(0,jsx_runtime.jsx)(Button.A,{onClick:i.action,variant:"text",color:"secondary",disabled:i.disabled,"data-testid":"drawer-footer-secondary-button",children:i.text})}),(null==d?void 0:d.action)&&(0,jsx_runtime.jsx)(Box.A,{children:(0,jsx_runtime.jsx)(Button.A,{color:"primary",onClick:d.action,disabled:d.disabled,sx:{justifySelf:"flex-end"},"data-testid":"drawer-footer-primary-button",children:d.text})})]})]})]})}},"./node_modules/@mui/icons-material/esm/Close.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},"./node_modules/@mui/icons-material/esm/Warning.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning")},"./node_modules/@mui/material/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getIconButtonUtilityClass(slot){return(0,generateUtilityClass.A)("MuiIconButton",slot)}const IconButton_iconButtonClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["edge","children","className","color","disabled","disableFocusRipple","size"],IconButtonRoot=(0,styled.Ay)(ButtonBase.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],ownerState.edge&&styles[`edge${(0,capitalize.A)(ownerState.edge)}`],styles[`size${(0,capitalize.A)(ownerState.size)}`]]}})((({theme,ownerState})=>(0,esm_extends.A)({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest})},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.active} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12})),(({theme,ownerState})=>(0,esm_extends.A)({},"inherit"===ownerState.color&&{color:"inherit"},"inherit"!==ownerState.color&&"default"!==ownerState.color&&(0,esm_extends.A)({color:(theme.vars||theme).palette[ownerState.color].main},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===ownerState.size&&{padding:5,fontSize:theme.typography.pxToRem(18)},"large"===ownerState.size&&{padding:12,fontSize:theme.typography.pxToRem(28)},{[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}}))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiIconButton"}),{edge=!1,children,className,color="default",disabled=!1,disableFocusRipple=!1,size="medium"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{edge,color,disabled,disableFocusRipple,size}),classes=(ownerState=>{const{classes,disabled,color,edge,size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${(0,capitalize.A)(color)}`,edge&&`edge${(0,capitalize.A)(edge)}`,`size${(0,capitalize.A)(size)}`]};return(0,composeClasses.A)(slots,getIconButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(IconButtonRoot,(0,esm_extends.A)({className:(0,clsx_m.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,ref,ownerState},other,{children}))}))},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.A)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx_m.A)(classes.root,className)},other))}))},"./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{A:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>noSsr&&supportMatchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.A)((()=>{let active=!0;if(!supportMatchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}}),[query,matchMedia,supportMatchMedia]),match}const maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia){const getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.A)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr}=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.A)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.en[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.A)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Q)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},otherProps,{sx:finalSx})}}}]);