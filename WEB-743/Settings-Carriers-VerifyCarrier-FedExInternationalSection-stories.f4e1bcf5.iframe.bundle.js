"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[864],{"./node_modules/@goshippo/components/esm/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Checkbox_Checkbox});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const checkboxThemeInput={palette:{primary:{main:colors.O.accent.foreground.success,dark:colors.O.accent.foreground.success}},components:{MuiCheckbox:{styleOverrides:{colorPrimary:{color:colors.O.secondary},root:{zIndex:0,"&.Mui-disabled":{color:colors.O.secondaryDisabled},"& .MuiTouchRipple-root":{zIndex:-1},"& .MuiTouchRipple-rippleVisible":{color:colors.O.hoverFocus},":hover":{backgroundColor:colors.O.selectedBackground}}}}}};var checkboxTheme=(0,createTheme.Z)(shippoTheme.Z,checkboxThemeInput),ThemeExtension=__webpack_require__("./node_modules/@goshippo/components/esm/ThemeExtension/index.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const CheckboxCheckedIcon=(0,createSvgIcon.Z)((0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("path",{d:"M18.2222 4H5.77778C4.79111 4 4 4.8 4 5.77778V18.2222C4 19.2 4.79111 20 5.77778 20H18.2222C19.2089 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2089 4 18.2222 4ZM10.2222 16.4444L5.77778 12L7.03111 10.7467L10.2222 13.9289L16.9689 7.18222L18.2222 8.44444L10.2222 16.4444Z"}),(0,jsx_runtime.jsx)("path",{d:"M5.77783 12L10.2223 16.4445L18.2223 8.44447L16.9689 7.18225L10.2223 13.9289L7.03117 10.7467L5.77783 12Z",fill:"white"})]}),"CheckboxChecked"),CheckboxIndeterminateIcon=(0,createSvgIcon.Z)((0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("path",{d:"M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4ZM16.4444 12.8889H7.55556V11.1111H16.4444V12.8889Z"}),(0,jsx_runtime.jsx)("path",{d:"M7 13H17V11H7V13Z",fill:"white"})]}),"CheckboxIndeterminate"),CheckboxDefaultIcon=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("path",{d:"M18.2222 5.77778V18.2222H5.77778V5.77778H18.2222ZM18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z"})}),"CheckBoxOutlineBlank"),Checkbox_Checkbox=_a=>{var props=(0,tslib_es6._T)(_a,[]);const extendedTheme=(0,ThemeExtension.x)();return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:(null==extendedTheme?void 0:extendedTheme.Checkbox)||checkboxTheme},{children:(0,jsx_runtime.jsx)(Checkbox.Z,Object.assign({icon:(0,jsx_runtime.jsx)(CheckboxDefaultIcon,{}),checkedIcon:(0,jsx_runtime.jsx)(CheckboxCheckedIcon,{}),indeterminateIcon:(0,jsx_runtime.jsx)(CheckboxIndeterminateIcon,{})},props))}))}},"./node_modules/@goshippo/components/esm/FormControlLabel/FormControlLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormControlLabel_FormControlLabel});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js");const formControlLabelTheme={components:{MuiFormControlLabel:{styleOverrides:{root:{alignItems:"flex-start",gap:shippoTheme.Z.spacing(.5),"& .MuiCheckbox-root":{"&+.MuiFormControlLabel-label":{padding:"9px 0"}},"& .MuiRadio-root":{"&+.MuiFormControlLabel-label":{padding:`${shippoTheme.Z.spacing(1)} 0`,display:"block"}},"&.MuiFormControlLabel-labelPlacementStart":{alignSelf:"flex-start"},"&.MuiFormControlLabel-labelPlacementEnd":{alignSelf:"flex-start"}},label:{display:"flex",alignSelf:"center",color:colors.O.text.default,fontSize:shippoTheme.Z.spacing(2),fontWeight:400,lineHeight:"150%","&.Mui-disabled *":{color:colors.O.secondaryDisabled,textDecorationColor:colors.O.secondaryDisabled}}}}}};var formControlLabelTheme$1=(0,createTheme.Z)(shippoTheme.Z,formControlLabelTheme);const FormControlLabel_FormControlLabel=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:formControlLabelTheme$1},{children:(0,jsx_runtime.jsx)(FormControlLabel.Z,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Stack_Stack_Stack});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,styled.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,esm_extends.Z)({display:"flex",flexDirection:"column"},(0,breakpoints.k9)({theme},(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.P$)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing.NA)(transformer,propValue)}};var direction};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.dt)(theme.breakpoints,styles),styles})),Stack=react.forwardRef((function Stack(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiStack"}),props=(0,extendSxProp.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState={direction,spacing};return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.Z)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))})),Stack_Stack=Stack;var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const stackTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Stack_Stack_Stack=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:stackTheme},{children:(0,jsx_runtime.jsx)(Stack_Stack,Object.assign({},props,{children}))}))}},"./app/constants/responsive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ResponsiveBreakPoints;__webpack_require__.d(__webpack_exports__,{C:()=>ResponsiveBreakPoints}),function(ResponsiveBreakPoints){ResponsiveBreakPoints[ResponsiveBreakPoints.BigDesktop=1920]="BigDesktop",ResponsiveBreakPoints[ResponsiveBreakPoints.Desktop=1600]="Desktop",ResponsiveBreakPoints[ResponsiveBreakPoints.DesktopMedium=1440]="DesktopMedium",ResponsiveBreakPoints[ResponsiveBreakPoints.DesktopMin=1320]="DesktopMin",ResponsiveBreakPoints[ResponsiveBreakPoints.Notebook=1268]="Notebook",ResponsiveBreakPoints[ResponsiveBreakPoints.Tablet=1024]="Tablet",ResponsiveBreakPoints[ResponsiveBreakPoints.Mobile=768]="Mobile",ResponsiveBreakPoints[ResponsiveBreakPoints.SmallMobile=375]="SmallMobile",ResponsiveBreakPoints[ResponsiveBreakPoints.ExtraSmallMobile=320]="ExtraSmallMobile"}(ResponsiveBreakPoints||(ResponsiveBreakPoints={}))},"./app/pages/Settings/Carriers/VerifyCarrier/SignPad/SignPad.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SignPad});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Dialog=__webpack_require__("./node_modules/@goshippo/components/esm/Dialog/Dialog.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),DialogActions=__webpack_require__("./node_modules/@goshippo/components/esm/DialogActions/DialogActions.js"),DialogTitle=__webpack_require__("./node_modules/@goshippo/components/esm/DialogTitle/DialogTitle.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),DialogContent=__webpack_require__("./node_modules/@goshippo/components/esm/DialogContent/DialogContent.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),react=__webpack_require__("./node_modules/react/index.js"),options={font:"65px 'Rock Salt'",smallerFont:"40px 'Rock Salt'",fillStyle:shippoTheme.Z.palette.text.primary,width:560,height:160,paddingX:275,paddingY:100,customFont:{name:"'Rock Salt'",url:"https://fonts.googleapis.com/css2?family=Rock+Salt"}},responsive=__webpack_require__("./app/constants/responsive.ts"),StyledDialog=(0,emotion_styled_browser_esm.Z)(Dialog.Z)(templateObject_1||(templateObject_1=(0,tslib_es6.cy)(["\n  & .MuiPaper-root {\n    border-radius: 16px;\n  }\n"],["\n  & .MuiPaper-root {\n    border-radius: 16px;\n  }\n"]))),StyledSignCanvas=(0,emotion_styled_browser_esm.Z)("img")(templateObject_2||(templateObject_2=(0,tslib_es6.cy)(["\n  height: ",";\n  width: ",";\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"],["\n  height: ",";\n  width: ",";\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"])),shippoTheme.Z.spacing(10),shippoTheme.Z.spacing(35),responsive.C.SmallMobile,shippoTheme.Z.spacing(24)),StyledCanvasContainer=(0,emotion_styled_browser_esm.Z)(Box.Z)(templateObject_3||(templateObject_3=(0,tslib_es6.cy)(["\n  margin: auto;\n  display: 'flex';\n  justify-content: 'center';\n  height: ",";\n  width: ",";\n  border-bottom: 2px solid;\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"],["\n  margin: auto;\n  display: 'flex';\n  justify-content: 'center';\n  height: ",";\n  width: ",";\n  border-bottom: 2px solid;\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"])),shippoTheme.Z.spacing(10),shippoTheme.Z.spacing(35),responsive.C.SmallMobile,shippoTheme.Z.spacing(24)),StyledDialogActions=(0,emotion_styled_browser_esm.Z)(DialogActions.Z)(templateObject_4||(templateObject_4=(0,tslib_es6.cy)(["\n  display: flex;\n  justify-content: space-between;\n  padding: ",";\n  padding-top: ",";\n"],["\n  display: flex;\n  justify-content: space-between;\n  padding: ",";\n  padding-top: ",";\n"])),shippoTheme.Z.spacing(4),shippoTheme.Z.spacing(0)),SignPad=function(_a){var t=_a.t,open=_a.open,onClose=_a.onClose,onSubmit=_a.onSubmit,_b=(0,tslib_es6.CR)((0,react.useState)(""),2),inputValue=_b[0],setInputValue=_b[1],inputRef=(0,react.useRef)(null),imageData=function(textString){var _a=(0,tslib_es6.CR)((0,react.useState)(!1),2),isReady=_a[0],setIsReady=_a[1],_b=(0,tslib_es6.CR)((0,react.useState)(null),2),imageData=_b[0],setImageData=_b[1];return(0,react.useEffect)((function(){var linkElement=document.createElement("link");linkElement.rel="stylesheet",linkElement.href=options.customFont.url;var head=document.head;return head.appendChild(linkElement),linkElement.onload=function(){setIsReady(!0)},function(){head.removeChild(linkElement)}}),[]),(0,react.useEffect)((function(){if(isReady){var smallerFont=options.smallerFont,font=options.font,fillStyle=options.fillStyle,width=options.width,height=options.height,paddingX=options.paddingX,paddingY=options.paddingY,canvasSelectorDom=document.createElement("canvas");canvasSelectorDom.setAttribute("width","".concat(width,"px")),canvasSelectorDom.setAttribute("height","".concat(height,"px"));var context=canvasSelectorDom.getContext("2d");context&&(context.font=textString.length>12?smallerFont:font,context.textAlign="center",context.fillStyle=fillStyle,context.fillText(textString,paddingX,paddingY));var imageDataUrl=canvasSelectorDom.toDataURL();setImageData(imageDataUrl)}}),[isReady,textString]),{imageData}}(inputValue).imageData;return(0,emotion_react_jsx_runtime_browser_esm.BX)(StyledDialog,(0,tslib_es6.pi)({open,onClose},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(DialogTitle.Z,(0,tslib_es6.pi)({style:{padding:"".concat(shippoTheme.Z.spacing(4)),paddingBottom:"".concat(shippoTheme.Z.spacing(1))}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h2",variant:"h2"},{children:t("settings:carriers:accountValidation:signature:title")}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,(0,tslib_es6.pi)({"aria-label":"close",onClick:onClose,sx:{position:"absolute",right:8,top:8,color:function(theme){return theme.palette.grey[500]}}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Close.Z,{})})),(0,emotion_react_jsx_runtime_browser_esm.BX)(DialogContent.Z,(0,tslib_es6.pi)({style:{padding:"".concat(shippoTheme.Z.spacing(4)),paddingTop:"".concat(shippoTheme.Z.spacing(1))}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"p",variant:"body"},{children:t("settings:carriers:accountValidation:signature:instruction")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,{inputRef,fullWidth:!0,style:{marginTop:shippoTheme.Z.spacing(2)},label:t("settings:carriers:accountValidation:signature:label"),onChange:function(e){return setInputValue(e.target.value)}}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"p",variant:"body",sx:{marginTop:shippoTheme.Z.spacing(4)}},{children:t("settings:carriers:accountValidation:signature:previewLabel")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(StyledCanvasContainer,{children:imageData&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(StyledSignCanvas,{src:imageData})})]})),(0,emotion_react_jsx_runtime_browser_esm.BX)(StyledDialogActions,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({size:"medium",onClick:function(){setInputValue(""),inputRef.current&&(inputRef.current.value="")},color:"secondary"},{children:t("settings:carriers:accountValidation:signature:clear")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({size:"medium",onClick:function(){onSubmit(imageData||"")},color:"primary",disabled:!inputValue},{children:t("settings:carriers:accountValidation:signature:submit")}))]})]}))}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iu:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Iu,cC:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.cC,eU:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.eU});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Settings/Carriers/VerifyCarrier/FedExInternationalSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InitialForm:()=>InitialForm,default:()=>FedExInternationalSection_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),FormControlLabel=__webpack_require__("./node_modules/@goshippo/components/esm/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@goshippo/components/esm/Checkbox/Checkbox.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Delete=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");var templateObject_1,templateObject_2,templateObject_3,react=__webpack_require__("./node_modules/react/index.js"),SignPad=__webpack_require__("./app/pages/Settings/Carriers/VerifyCarrier/SignPad/SignPad.tsx"),StyledUploadContainer=(0,emotion_styled_browser_esm.Z)(Stack.Z)(templateObject_1||(templateObject_1=(0,tslib_es6.cy)(["\n  width: 100%;\n  justify-content: space-between;\n  flex-direction: row;\n"],["\n  width: 100%;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),StyledPreview=emotion_styled_browser_esm.Z.div(templateObject_2||(templateObject_2=(0,tslib_es6.cy)(["\n  width: ",";\n  height: ",";\n  border: 1px solid ",";\n  display: flex;\n  padding: ",";\n  position: relative;\n  & .image {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n  }\n"],["\n  width: ",";\n  height: ",";\n  border: 1px solid ",";\n  display: flex;\n  padding: ",";\n  position: relative;\n  & .image {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n  }\n"])),shippoTheme.Z.spacing(18),shippoTheme.Z.spacing(10),shippoTheme.Z.palette.grey[300],shippoTheme.Z.spacing(1)),StyledIconButton=(0,emotion_styled_browser_esm.Z)(IconButton.Z)(templateObject_3||(templateObject_3=(0,tslib_es6.cy)(["\n  position: absolute;\n  right: 0;\n  margin: -10px -5px;\n"],["\n  position: absolute;\n  right: 0;\n  margin: -10px -5px;\n"]))),dataURLtoBlob=function(dataURL){try{if(!dataURL)return null;if("string"!=typeof dataURL)return null;for(var arr=dataURL.split(","),matchResult=arr[0].match(/:(.*?);/),mime_1=matchResult?matchResult[1]:"",bstr=atob(arr[1]),n=bstr.length,u8arr=new Uint8Array(n);n--;)u8arr[n]=bstr.charCodeAt(n);return new Blob([u8arr],{type:mime_1})}catch(error){return null}},FedExInternationalSection=function(_a){var t=_a.t,onImageUpload=_a.onImageUpload,_b=(0,tslib_es6.CR)((0,react.useState)(!1),2),isInternationalSelected=_b[0],setIsInternationalSelected=_b[1],_c=(0,tslib_es6.CR)((0,react.useState)(!1),2),openSignPad=_c[0],setOpenSignPad=_c[1],_d=(0,tslib_es6.CR)((0,react.useState)({companyLogo:"",digitalSignature:""}),2),logoURLs=_d[0],setLogoURLs=_d[1],fileReaderRef=(0,react.useRef)(new FileReader),companyLogoUploaded=(0,react.useRef)(null),digitalSignatureUploaded=(0,react.useRef)(null),handleImageUpload=(0,react.useCallback)((function(){onImageUpload({companyLogo:companyLogoUploaded.current,digitalSignature:digitalSignatureUploaded.current})}),[onImageUpload]);(0,react.useEffect)((function(){var listener,reader=fileReaderRef.current;return fileReaderRef.current&&(listener=fileReaderRef.current.addEventListener("load",(function(){setLogoURLs((0,tslib_es6.pi)((0,tslib_es6.pi)({},logoURLs),{companyLogo:(null==reader?void 0:reader.result)||""})),companyLogoUploaded.current=dataURLtoBlob((null==reader?void 0:reader.result)||null),handleImageUpload()}))),function(){listener&&(null==reader||reader.removeEventListener("load",listener))}}),[handleImageUpload,setLogoURLs,logoURLs]);var handleSignPadClose=function(){setOpenSignPad(!1)},handleClearImage=function(type){var _a;setLogoURLs((0,tslib_es6.pi)((0,tslib_es6.pi)({},logoURLs),((_a={})[type]="",_a))),"companyLogo"===type?companyLogoUploaded.current=null:digitalSignatureUploaded.current=null,handleImageUpload()};return(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Stack.Z,(0,tslib_es6.pi)({style:{marginBottom:shippoTheme.Z.spacing(1.5)}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h2",variant:"bodyEmphasized"},{children:t("settings:carriers:accountValidation:fedexInternational:title")}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Stack.Z,(0,tslib_es6.pi)({style:{marginLeft:shippoTheme.Z.spacing(2),marginBottom:shippoTheme.Z.spacing(3)}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormControlLabel.Z,{label:t("settings:carriers:accountValidation:fedexInternational:checkboxLabel"),control:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Checkbox.Z,{checked:isInternationalSelected,onChange:function(e){setIsInternationalSelected(e.target.checked)}})})})),isInternationalSelected&&(0,emotion_react_jsx_runtime_browser_esm.BX)(emotion_react_jsx_runtime_browser_esm.HY,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Stack.Z,(0,tslib_es6.pi)({style:{marginBottom:shippoTheme.Z.spacing(3)}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"p",variant:"body"},{children:t("settings:carriers:accountValidation:fedexInternational:description")}))})),(0,emotion_react_jsx_runtime_browser_esm.BX)(StyledUploadContainer,{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h2",variant:"bodyEmphasized",style:{marginBottom:shippoTheme.Z.spacing(1.5)}},{children:t("settings:carriers:accountValidation:fedexInternational:companyLogo")})),!logoURLs.companyLogo&&(0,emotion_react_jsx_runtime_browser_esm.BX)(Button.Z,(0,tslib_es6.pi)({component:"label",variant:"contained",color:"primary"},{children:[t("settings:carriers:accountValidation:fedexInternational:upload"),(0,emotion_react_jsx_runtime_browser_esm.tZ)("input",{type:"file",accept:".png,.gif",onChange:function(e){var _a;if(e.target.files){var file=e.target.files[0];file&&(null===(_a=fileReaderRef.current)||void 0===_a||_a.readAsDataURL(file))}},hidden:!0})]})),logoURLs.companyLogo&&(0,emotion_react_jsx_runtime_browser_esm.BX)(StyledPreview,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(StyledIconButton,(0,tslib_es6.pi)({size:"small","aria-label":"delete",onClick:function(){return handleClearImage("companyLogo")}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Delete,{})})),(0,emotion_react_jsx_runtime_browser_esm.tZ)("img",{className:"image",src:logoURLs.companyLogo,alt:"company logo"})]})]}),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h2",variant:"bodyEmphasized",style:{marginBottom:shippoTheme.Z.spacing(1.5)}},{children:t("settings:carriers:accountValidation:fedexInternational:digitalSignature")})),!logoURLs.digitalSignature&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({onClick:function(){setOpenSignPad(!0)},variant:"contained",color:"primary"},{children:t("settings:carriers:accountValidation:fedexInternational:digitalSignature")})),logoURLs.digitalSignature&&(0,emotion_react_jsx_runtime_browser_esm.BX)(StyledPreview,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(StyledIconButton,(0,tslib_es6.pi)({size:"small","aria-label":"delete",onClick:function(){return handleClearImage("digitalSignature")}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Delete,{})})),(0,emotion_react_jsx_runtime_browser_esm.tZ)("img",{className:"image",src:logoURLs.digitalSignature,alt:"digital signature"})]})]})]}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(SignPad.R,{t,open:openSignPad,onClose:handleSignPadClose,onSubmit:function(dataURL){setLogoURLs((0,tslib_es6.pi)((0,tslib_es6.pi)({},logoURLs),{digitalSignature:dataURL})),digitalSignatureUploaded.current=dataURLtoBlob(dataURL),handleImageUpload(),handleSignPadClose()}})]})]})},translate=__webpack_require__("./app/utils/translate.ts");const FedExInternationalSection_stories={title:"Verify Carrier / FedExInternationalSection",component:FedExInternationalSection,argTypes:{onImageUpload:{action:"onImageUpload"}},tags:["autodocs"],parameters:{layout:"centered"}};var FedExInternationalSectionTranslate=(0,translate.Iu)("settings")(FedExInternationalSection),InitialForm=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:"400px",height:"300px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FedExInternationalSectionTranslate,(0,tslib_es6.pi)({},args))}))}.bind({});InitialForm.args={},InitialForm.parameters={...InitialForm.parameters,docs:{...InitialForm.parameters?.docs,source:{originalSource:"(args: FedExInternationalSectionProps) => {\n  return <div style={{\n    width: '400px',\n    height: '300px'\n  }}>\n      <FedExInternationalSectionTranslate {...args} />\n    </div>;\n}",...InitialForm.parameters?.docs?.source}}}}}]);