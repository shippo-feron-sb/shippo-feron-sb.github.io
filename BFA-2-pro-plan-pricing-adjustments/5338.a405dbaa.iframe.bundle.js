"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5338],{"./node_modules/@goshippo/components/esm/Badge/Badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Badge_Badge});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Badge=__webpack_require__("./node_modules/@mui/material/Badge/Badge.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),badgeTheme=(0,createTheme.Z)(shippoTheme.Z,{components:{MuiBadge:{styleOverrides:{root:{"& .MuiBadge-anchorOriginBottomRightRectangular":{backgroundColor:colors.O.white,boxShadow:"0 0.125rem 0.25rem rgba(0, 0, 0, 0.25)",color:colors.O.text.primary.black}}}}}});const Badge_Badge=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:badgeTheme},{children:(0,jsx_runtime.jsx)(Badge.Z,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Stack_Stack_Stack});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,styled.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,esm_extends.Z)({display:"flex",flexDirection:"column"},(0,breakpoints.k9)({theme},(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.P$)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing.NA)(transformer,propValue)}};var direction};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.dt)(theme.breakpoints,styles),styles})),Stack=react.forwardRef((function Stack(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiStack"}),props=(0,extendSxProp.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState={direction,spacing};return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.Z)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))})),Stack_Stack=Stack;var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const stackTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Stack_Stack_Stack=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:stackTheme},{children:(0,jsx_runtime.jsx)(Stack_Stack,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.Z},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.Z,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>extendedTypographyOptions,Z:()=>typographyTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:700,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},h2:{fontWeight:700,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},h3:{fontStyle:"normal",fontWeight:700,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:700}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:700}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:700}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:700,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,fontWeight:700}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,lineHeight:1.5,fontWeight:700})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.Z)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@mui/base/utils/appendOwnerState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>appendOwnerState});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_isHostComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js");function appendOwnerState(elementType,otherProps={},ownerState){return(0,_isHostComponent__WEBPACK_IMPORTED_MODULE_0__.Z)(elementType)?otherProps:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},otherProps,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},otherProps.ownerState,ownerState)})}},"./node_modules/@mui/base/utils/isHostComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function isHostComponent(element){return"string"==typeof element}},"./node_modules/@mui/base/utils/resolveComponentProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resolveComponentProps(componentProps,ownerState){return"function"==typeof componentProps?componentProps(ownerState):componentProps}__webpack_require__.d(__webpack_exports__,{Z:()=>resolveComponentProps})},"./node_modules/@mui/base/utils/useSlotProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useSlotProps});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),appendOwnerState=__webpack_require__("./node_modules/@mui/base/utils/appendOwnerState.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");function omitEventHandlers(object){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>!(prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]))).forEach((prop=>{result[prop]=object[prop]})),result}function mergeSlotProps(parameters){const{getSlotProps,additionalProps,externalSlotProps,externalForwardedProps,className}=parameters;if(!getSlotProps){const joinedClasses=(0,clsx_m.Z)(null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className,className,null==additionalProps?void 0:additionalProps.className),mergedStyle=(0,esm_extends.Z)({},null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.Z)({},additionalProps,externalForwardedProps,externalSlotProps);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:void 0}}const eventHandlers=function extractEventHandlers(object,excludeKeys=[]){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]&&!excludeKeys.includes(prop))).forEach((prop=>{result[prop]=object[prop]})),result}((0,esm_extends.Z)({},externalForwardedProps,externalSlotProps)),componentsPropsWithoutEventHandlers=omitEventHandlers(externalSlotProps),otherPropsWithoutEventHandlers=omitEventHandlers(externalForwardedProps),internalSlotProps=getSlotProps(eventHandlers),joinedClasses=(0,clsx_m.Z)(null==internalSlotProps?void 0:internalSlotProps.className,null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.Z)({},null==internalSlotProps?void 0:internalSlotProps.style,null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.Z)({},internalSlotProps,additionalProps,otherPropsWithoutEventHandlers,componentsPropsWithoutEventHandlers);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:internalSlotProps.ref}}var resolveComponentProps=__webpack_require__("./node_modules/@mui/base/utils/resolveComponentProps.js");const _excluded=["elementType","externalSlotProps","ownerState"];function useSlotProps(parameters){var _parameters$additiona;const{elementType,externalSlotProps,ownerState}=parameters,rest=(0,objectWithoutPropertiesLoose.Z)(parameters,_excluded),resolvedComponentsProps=(0,resolveComponentProps.Z)(externalSlotProps,ownerState),{props:mergedProps,internalRef}=mergeSlotProps((0,esm_extends.Z)({},rest,{externalSlotProps:resolvedComponentsProps})),ref=(0,useForkRef.Z)(internalRef,(0,useForkRef.Z)(null==resolvedComponentsProps?void 0:resolvedComponentsProps.ref,null==(_parameters$additiona=parameters.additionalProps)?void 0:_parameters$additiona.ref));return(0,appendOwnerState.Z)(elementType,(0,esm_extends.Z)({},mergedProps,{ref}),ownerState)}},"./node_modules/@mui/material/Badge/Badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Badge_Badge});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const esm_usePreviousProps=value=>{const ref=react.useRef({});return react.useEffect((()=>{ref.current=value})),ref.current};var composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getBadgeUnstyledUtilityClass(slot){return(0,generateUtilityClass.Z)("BaseBadge",slot)}(0,generateUtilityClasses.Z)("BaseBadge",["root","badge","invisible"]);var useSlotProps=__webpack_require__("./node_modules/@mui/base/utils/useSlotProps.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["badgeContent","component","children","components","componentsProps","invisible","max","showZero"],BadgeUnstyled=react.forwardRef((function BadgeUnstyled(props,ref){const{component,children,components={},componentsProps={},max:maxProp=99,showZero=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{badgeContent,max,displayValue,invisible}=function useBadge(parameters){const{badgeContent:badgeContentProp,invisible:invisibleProp=!1,max:maxProp=99,showZero=!1}=parameters,prevProps=esm_usePreviousProps({badgeContent:badgeContentProp,max:maxProp});let invisible=invisibleProp;!1!==invisibleProp||0!==badgeContentProp||showZero||(invisible=!0);const{badgeContent,max=maxProp}=invisible?prevProps:parameters;return{badgeContent,invisible,max,displayValue:badgeContent&&Number(badgeContent)>max?`${max}+`:badgeContent}}((0,esm_extends.Z)({},props,{max:maxProp})),ownerState=(0,esm_extends.Z)({},props,{badgeContent,invisible,max,showZero}),classes=(ownerState=>{const{invisible}=ownerState,slots={root:["root"],badge:["badge",invisible&&"invisible"]};return(0,composeClasses.Z)(slots,getBadgeUnstyledUtilityClass,void 0)})(ownerState),Root=component||components.Root||"span",rootProps=(0,useSlotProps.Z)({elementType:Root,externalSlotProps:componentsProps.root,externalForwardedProps:other,additionalProps:{ref},ownerState,className:classes.root}),Badge=components.Badge||"span",badgeProps=(0,useSlotProps.Z)({elementType:Badge,externalSlotProps:componentsProps.badge,ownerState,className:classes.badge});return(0,jsx_runtime.jsxs)(Root,(0,esm_extends.Z)({},rootProps,{children:[children,(0,jsx_runtime.jsx)(Badge,(0,esm_extends.Z)({},badgeProps,{children:displayValue}))]}))})),BadgeUnstyled_BadgeUnstyled=BadgeUnstyled;var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),isHostComponent=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js");const utils_shouldSpreadAdditionalProps=Slot=>!Slot||!(0,isHostComponent.Z)(Slot);var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js");function getBadgeUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiBadge",slot)}const Badge_badgeClasses=(0,generateUtilityClasses.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),Badge_excluded=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","showZero","variant"],BadgeRoot=(0,styled.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(props,styles)=>styles.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),BadgeBadge=(0,styled.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.badge,styles[ownerState.variant],styles[`anchorOrigin${(0,capitalize.Z)(ownerState.anchorOrigin.vertical)}${(0,capitalize.Z)(ownerState.anchorOrigin.horizontal)}${(0,capitalize.Z)(ownerState.overlap)}`],"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],ownerState.invisible&&styles.invisible]}})((({theme,ownerState})=>(0,esm_extends.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:theme.typography.fontFamily,fontWeight:theme.typography.fontWeightMedium,fontSize:theme.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:theme.transitions.create("transform",{easing:theme.transitions.easing.easeInOut,duration:theme.transitions.duration.enteringScreen})},"default"!==ownerState.color&&{backgroundColor:(theme.vars||theme).palette[ownerState.color].main,color:(theme.vars||theme).palette[ownerState.color].contrastText},"dot"===ownerState.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===ownerState.anchorOrigin.vertical&&"right"===ownerState.anchorOrigin.horizontal&&"rectangular"===ownerState.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===ownerState.anchorOrigin.vertical&&"right"===ownerState.anchorOrigin.horizontal&&"rectangular"===ownerState.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===ownerState.anchorOrigin.vertical&&"left"===ownerState.anchorOrigin.horizontal&&"rectangular"===ownerState.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===ownerState.anchorOrigin.vertical&&"left"===ownerState.anchorOrigin.horizontal&&"rectangular"===ownerState.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===ownerState.anchorOrigin.vertical&&"right"===ownerState.anchorOrigin.horizontal&&"circular"===ownerState.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===ownerState.anchorOrigin.vertical&&"right"===ownerState.anchorOrigin.horizontal&&"circular"===ownerState.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===ownerState.anchorOrigin.vertical&&"left"===ownerState.anchorOrigin.horizontal&&"circular"===ownerState.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===ownerState.anchorOrigin.vertical&&"left"===ownerState.anchorOrigin.horizontal&&"circular"===ownerState.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${Badge_badgeClasses.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},ownerState.invisible&&{transition:theme.transitions.create("transform",{easing:theme.transitions.easing.easeInOut,duration:theme.transitions.duration.leavingScreen})}))),Badge_Badge=react.forwardRef((function Badge(inProps,ref){var _componentsProps$root,_componentsProps$root2,_componentsProps$badg,_componentsProps$badg2;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiBadge"}),{anchorOrigin:anchorOriginProp={vertical:"top",horizontal:"right"},className,component="span",components={},componentsProps={},overlap:overlapProp="rectangular",color:colorProp="default",invisible:invisibleProp=!1,max,badgeContent:badgeContentProp,showZero=!1,variant:variantProp="standard"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,Badge_excluded),prevProps=esm_usePreviousProps({anchorOrigin:anchorOriginProp,color:colorProp,overlap:overlapProp,variant:variantProp});let invisible=invisibleProp;!1===invisibleProp&&(0===badgeContentProp&&!showZero||null==badgeContentProp&&"dot"!==variantProp)&&(invisible=!0);const{color=colorProp,overlap=overlapProp,anchorOrigin=anchorOriginProp,variant=variantProp}=invisible?prevProps:props,classes=(ownerState=>{const{color,anchorOrigin,invisible,overlap,variant,classes={}}=ownerState,slots={root:["root"],badge:["badge",variant,invisible&&"invisible",`anchorOrigin${(0,capitalize.Z)(anchorOrigin.vertical)}${(0,capitalize.Z)(anchorOrigin.horizontal)}`,`anchorOrigin${(0,capitalize.Z)(anchorOrigin.vertical)}${(0,capitalize.Z)(anchorOrigin.horizontal)}${(0,capitalize.Z)(overlap)}`,`overlap${(0,capitalize.Z)(overlap)}`,"default"!==color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getBadgeUtilityClass,classes)})((0,esm_extends.Z)({},props,{anchorOrigin,invisible,color,overlap,variant}));let displayValue;return"dot"!==variant&&(displayValue=badgeContentProp&&Number(badgeContentProp)>max?`${max}+`:badgeContentProp),(0,jsx_runtime.jsx)(BadgeUnstyled_BadgeUnstyled,(0,esm_extends.Z)({invisible:invisibleProp,badgeContent:displayValue,showZero,max},other,{components:(0,esm_extends.Z)({Root:BadgeRoot,Badge:BadgeBadge},components),className:(0,clsx_m.Z)(null==(_componentsProps$root=componentsProps.root)?void 0:_componentsProps$root.className,classes.root,className),componentsProps:{root:(0,esm_extends.Z)({},componentsProps.root,utils_shouldSpreadAdditionalProps(components.Root)&&{as:component,ownerState:(0,esm_extends.Z)({},null==(_componentsProps$root2=componentsProps.root)?void 0:_componentsProps$root2.ownerState,{anchorOrigin,color,overlap,variant})}),badge:(0,esm_extends.Z)({},componentsProps.badge,{className:(0,clsx_m.Z)(classes.badge,null==(_componentsProps$badg=componentsProps.badge)?void 0:_componentsProps$badg.className)},utils_shouldSpreadAdditionalProps(components.Badge)&&{ownerState:(0,esm_extends.Z)({},null==(_componentsProps$badg2=componentsProps.badge)?void 0:_componentsProps$badg2.ownerState,{anchorOrigin,color,overlap,variant})})},ref}))}))}}]);