"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[6819,9200],{"./node_modules/@goshippo/components/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const boxTheme=(0,createTheme.A)(shippoTheme.A,{}),Box=(0,createBox.A)({defaultTheme:boxTheme})},"./node_modules/@goshippo/components/esm/Dialog/Dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Dialog_Dialog});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Dialog=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),dialogTheme=(0,createTheme.A)(shippoTheme.A,{});const Dialog_Dialog=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:dialogTheme},{children:(0,jsx_runtime.jsx)(Dialog.A,Object.assign({maxWidth:"md"},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Stack_Stack_Stack});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,styled.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,esm_extends.A)({display:"flex",flexDirection:"column"},(0,breakpoints.NI)({theme},(0,breakpoints.kW)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.LX)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.kW)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.kW)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing._W)(transformer,propValue)}};var direction};styles=(0,deepmerge.A)(styles,(0,breakpoints.NI)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.iZ)(theme.breakpoints,styles),styles})),Stack=react.forwardRef((function Stack(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiStack"}),props=(0,extendSxProp.A)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState={direction,spacing};return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.A)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))})),Stack_Stack=Stack;var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const stackTheme=(0,createTheme.A)(shippoTheme.A,{}),Stack_Stack_Stack=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:stackTheme},{children:(0,jsx_runtime.jsx)(Stack_Stack,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.A},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>typographyTheme,h:()=>extendedTypographyOptions});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:500,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h2:{fontWeight:500,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h3:{fontStyle:"normal",fontWeight:500,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:500}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:500}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:500}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:500,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,fontWeight:500}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,fontWeight:500})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.A)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.A,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@goshippo/libraries/dist/esm/Dialog/Dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>k});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DialogTitle=__webpack_require__("./node_modules/@goshippo/components/esm/DialogTitle/DialogTitle.js"),DialogContent=__webpack_require__("./node_modules/@goshippo/components/esm/DialogContent/DialogContent.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),DialogActions=__webpack_require__("./node_modules/@goshippo/components/esm/DialogActions/DialogActions.js"),Dialog=__webpack_require__("./node_modules/@goshippo/components/esm/Dialog/Dialog.js");const c=(0,styled.Ay)(DialogTitle.A)`
  display: flex;
  align-items: center;

  gap: ${({theme:a})=>a.spacing(1)};
  padding: ${shippoTheme.A.spacing(1,2)};

  ${shippoTheme.A.breakpoints.up("md")} {
    padding: ${shippoTheme.A.spacing(2,3)};
  }
`,Dialog_styled_r=(0,styled.Ay)(DialogContent.A)`
  padding: ${shippoTheme.A.spacing(2)};

  ${shippoTheme.A.breakpoints.up("md")} {
    padding: ${shippoTheme.A.spacing(4,3)};
  }
`,$=(0,styled.Ay)(IconButton.A)`
  color: ${colors.T.secondary};
  padding: ${shippoTheme.A.spacing(1)};
`,u=(0,styled.Ay)(DialogActions.A)`
  display: flex;
  border-top: solid 1px ${colors.T.gray30};
  padding: ${shippoTheme.A.spacing(1.5,2)};
  gap: ${shippoTheme.A.spacing(2)};
  justify-content: space-between;
  flex-wrap: wrap;

  > *:only-child {
    margin-left: auto;
  }

  ${shippoTheme.A.breakpoints.down("sm")} {
    > * {
      width: 100%;
    }
  }

  ${shippoTheme.A.breakpoints.up("md")} {
    padding: ${shippoTheme.A.spacing(1.5,3)};
  }
`,y=(0,styled.Ay)(Dialog.A,{shouldForwardProp:a=>!["expanded","fitContent"].includes(a)})`
  & .MuiDialog-paper {
    border-radius: ${shippoTheme.A.spacing(2)};
    max-width: ${({fitContent:a})=>a?"fit-content":shippoTheme.A.spacing(75)};
  }

  ${({fitContent:a,expanded:p})=>(a||p)&&`\n    ${shippoTheme.A.breakpoints.up("xl")} {\n      & .MuiDialog-paper {\n        max-width: ${a?"fit-content":shippoTheme.A.spacing(100)};\n      }\n    }\n  `}
`;function T({title:i,titleIcon:l,content:t,onClose:r}){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(c,{children:[l,(0,jsx_runtime.jsx)(Box.A,{flex:"1 1 auto",children:i}),(0,jsx_runtime.jsx)($,{"aria-label":"Close",onClick:r,children:(0,jsx_runtime.jsx)(Close.A,{})})]}),(0,jsx_runtime.jsx)(Divider.A,{sx:{borderColor:colors.T.gray30}}),(0,jsx_runtime.jsx)(Dialog_styled_r,{children:t})]})}function b({content:i,onClose:l}){return(0,jsx_runtime.jsxs)(Dialog_styled_r,{sx:{paddingTop:{md:shippoTheme.A.spacing(3)}},children:[(0,jsx_runtime.jsx)(Box.A,{display:"flex",justifyContent:"flex-end",children:(0,jsx_runtime.jsx)($,{"aria-label":"Close",onClick:l,children:(0,jsx_runtime.jsx)(Close.A,{})})}),i]})}const k=({open:i,title:l,content:t,onClose:r,actions:o=[],titleIcon:g,PaperProps:p,expanded:s=!1,fitContent:f=!1})=>(0,jsx_runtime.jsxs)(y,{expanded:s,fitContent:f,fullWidth:!0,open:i,onClose:r,PaperProps:p,children:[l?(0,jsx_runtime.jsx)(T,{title:l,titleIcon:g,content:t,onClose:r}):(0,jsx_runtime.jsx)(b,{content:t,onClose:r}),!(null==o||!o.length)&&(0,jsx_runtime.jsx)(u,{disableSpacing:!0,"data-testid":"dialog-actions",children:o})]})},"./node_modules/@mui/material/Dialog/Dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@mui/utils/esm/useId/useId.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),_Fade__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/Fade/Fade.js"),_Paper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_dialogClasses__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/dialogClasses.js"),_DialogContext__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@mui/material/Dialog/DialogContext.js"),_Backdrop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Backdrop/Backdrop.js"),_styles_useTheme__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],DialogBackdrop=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Backdrop__WEBPACK_IMPORTED_MODULE_3__.A,{name:"MuiDialog",slot:"Backdrop",overrides:(props,styles)=>styles.backdrop})({zIndex:-1}),DialogRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Modal__WEBPACK_IMPORTED_MODULE_7__.A,{name:"MuiDialog",slot:"Root",overridesResolver:(props,styles)=>styles.root})({"@media print":{position:"absolute !important"}}),DialogContainer=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_2__.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.container,styles[`scroll${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__.A)(ownerState.scroll)}`]]}})((({ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===ownerState.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===ownerState.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),DialogPaper=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Paper__WEBPACK_IMPORTED_MODULE_9__.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.paper,styles[`scrollPaper${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__.A)(ownerState.scroll)}`],styles[`paperWidth${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__.A)(String(ownerState.maxWidth))}`],ownerState.fullWidth&&styles.paperFullWidth,ownerState.fullScreen&&styles.paperFullScreen]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===ownerState.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===ownerState.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!ownerState.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===ownerState.maxWidth&&{maxWidth:"px"===theme.breakpoints.unit?Math.max(theme.breakpoints.values.xs,444):`${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,[`&.${_dialogClasses__WEBPACK_IMPORTED_MODULE_6__.A.paperScrollBody}`]:{[theme.breakpoints.down(Math.max(theme.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,[`&.${_dialogClasses__WEBPACK_IMPORTED_MODULE_6__.A.paperScrollBody}`]:{[theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},ownerState.fullWidth&&{width:"calc(100% - 64px)"},ownerState.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${_dialogClasses__WEBPACK_IMPORTED_MODULE_6__.A.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Dialog(inProps,ref){const props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__.A)({props:inProps,name:"MuiDialog"}),theme=(0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_11__.A)(),defaultTransitionDuration={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{"aria-describedby":ariaDescribedby,"aria-labelledby":ariaLabelledbyProp,BackdropComponent,BackdropProps,children,className,disableEscapeKeyDown=!1,fullScreen=!1,fullWidth=!1,maxWidth="sm",onBackdropClick,onClose,open,PaperComponent=_Paper__WEBPACK_IMPORTED_MODULE_9__.A,PaperProps={},scroll="paper",TransitionComponent=_Fade__WEBPACK_IMPORTED_MODULE_12__.A,transitionDuration=defaultTransitionDuration,TransitionProps}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_13__.A)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({},props,{disableEscapeKeyDown,fullScreen,fullWidth,maxWidth,scroll}),classes=(ownerState=>{const{classes,scroll,maxWidth,fullWidth,fullScreen}=ownerState,slots={root:["root"],container:["container",`scroll${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__.A)(scroll)}`],paper:["paper",`paperScroll${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__.A)(scroll)}`,`paperWidth${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__.A)(String(maxWidth))}`,fullWidth&&"paperFullWidth",fullScreen&&"paperFullScreen"]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_5__.A)(slots,_dialogClasses__WEBPACK_IMPORTED_MODULE_6__.f,classes)})(ownerState),backdropClick=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),ariaLabelledby=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_14__.A)(ariaLabelledbyProp),dialogContextValue=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({titleId:ariaLabelledby})),[ariaLabelledby]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_15__.A)(classes.root,className),closeAfterTransition:!0,components:{Backdrop:DialogBackdrop},componentsProps:{backdrop:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({transitionDuration,as:BackdropComponent},BackdropProps)},disableEscapeKeyDown,onClose,open,ref,onClick:event=>{backdropClick.current&&(backdropClick.current=null,onBackdropClick&&onBackdropClick(event),onClose&&onClose(event,"backdropClick"))},ownerState},other,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({appear:!0,in:open,timeout:transitionDuration,role:"presentation"},TransitionProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContainer,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_15__.A)(classes.container),onMouseDown:event=>{backdropClick.current=event.target===event.currentTarget},ownerState,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogPaper,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({as:PaperComponent,elevation:24,role:"dialog","aria-describedby":ariaDescribedby,"aria-labelledby":ariaLabelledby},PaperProps,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_15__.A)(classes.paper,PaperProps.className),ownerState,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DialogContext__WEBPACK_IMPORTED_MODULE_16__.A.Provider,{value:dialogContextValue,children})}))})}))}))}))},"./node_modules/@mui/material/Dialog/dialogClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,f:()=>getDialogUtilityClass});var _mui_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDialogUtilityClass(slot){return(0,_mui_base__WEBPACK_IMPORTED_MODULE_0__.A)("MuiDialog",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"])},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.A)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx_m.A)(classes.root,className)},other))}))},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__.A}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__.Ay)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.A)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.A)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}}}]);
//# sourceMappingURL=6819.b795f39a.iframe.bundle.js.map