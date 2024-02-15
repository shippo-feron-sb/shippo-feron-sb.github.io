"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2935],{"./node_modules/@goshippo/components/esm/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tooltip_Tooltip});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const tooltipTheme=(0,createTheme.Z)(shippoTheme.Z,{components:{MuiTooltip:{styleOverrides:{tooltip:({ownerState,theme})=>Object.assign({},"table"===ownerState.variant&&{background:theme.palette.background.paper,color:theme.palette.text.primary,boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)"}),arrow:({ownerState,theme})=>Object.assign({},"table"===ownerState.variant&&{color:theme.palette.background.paper})},defaultProps:{arrow:!0}}}}),Tooltip_Tooltip=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:tooltipTheme},{children:(0,jsx_runtime.jsx)(Tooltip.Z,Object.assign({},props,{children}))}))}},"./node_modules/@mui/material/Popper/Popper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popper_Popper});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"),ownerDocument=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"),lib_popper=__webpack_require__("./node_modules/@popperjs/core/lib/popper.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),Portal=__webpack_require__("./node_modules/@mui/base/Portal/Portal.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPopperUnstyledUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPopperUnstyled",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiPopperUnstyled",["root"]);var useSlotProps=__webpack_require__("./node_modules/@mui/base/utils/useSlotProps.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["anchorEl","children","component","components","componentsProps","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],_excluded2=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function resolveAnchorEl(anchorEl){return"function"==typeof anchorEl?anchorEl():anchorEl}const defaultPopperOptions={},PopperTooltip=react.forwardRef((function PopperTooltip(props,ref){var _ref;const{anchorEl,children,component,components={},componentsProps={},direction,disablePortal,modifiers,open,ownerState,placement:initialPlacement,popperOptions,popperRef:popperRefProp,TransitionProps}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),tooltipRef=react.useRef(null),ownRef=(0,useForkRef.Z)(tooltipRef,ref),popperRef=react.useRef(null),handlePopperRef=(0,useForkRef.Z)(popperRef,popperRefProp),handlePopperRefRef=react.useRef(handlePopperRef);(0,useEnhancedEffect.Z)((()=>{handlePopperRefRef.current=handlePopperRef}),[handlePopperRef]),react.useImperativeHandle(popperRefProp,(()=>popperRef.current),[]);const rtlPlacement=function flipPlacement(placement,direction){if("ltr"===direction)return placement;switch(placement){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return placement}}(initialPlacement,direction),[placement,setPlacement]=react.useState(rtlPlacement);react.useEffect((()=>{popperRef.current&&popperRef.current.forceUpdate()})),(0,useEnhancedEffect.Z)((()=>{if(!anchorEl||!open)return;resolveAnchorEl(anchorEl);let popperModifiers=[{name:"preventOverflow",options:{altBoundary:disablePortal}},{name:"flip",options:{altBoundary:disablePortal}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state})=>{setPlacement(state.placement)}}];null!=modifiers&&(popperModifiers=popperModifiers.concat(modifiers)),popperOptions&&null!=popperOptions.modifiers&&(popperModifiers=popperModifiers.concat(popperOptions.modifiers));const popper=(0,lib_popper.fi)(resolveAnchorEl(anchorEl),tooltipRef.current,(0,esm_extends.Z)({placement:rtlPlacement},popperOptions,{modifiers:popperModifiers}));return handlePopperRefRef.current(popper),()=>{popper.destroy(),handlePopperRefRef.current(null)}}),[anchorEl,disablePortal,modifiers,open,popperOptions,rtlPlacement]);const childProps={placement};null!==TransitionProps&&(childProps.TransitionProps=TransitionProps);const classes=(0,composeClasses.Z)({root:["root"]},getPopperUnstyledUtilityClass,{}),Root=null!=(_ref=null!=component?component:components.Root)?_ref:"div",rootProps=(0,useSlotProps.Z)({elementType:Root,externalSlotProps:componentsProps.root,externalForwardedProps:other,additionalProps:{role:"tooltip",ref:ownRef},ownerState:(0,esm_extends.Z)({},props,ownerState),className:classes.root});return(0,jsx_runtime.jsx)(Root,(0,esm_extends.Z)({},rootProps,{children:"function"==typeof children?children(childProps):children}))})),PopperUnstyled_PopperUnstyled=react.forwardRef((function PopperUnstyled(props,ref){const{anchorEl,children,container:containerProp,direction="ltr",disablePortal=!1,keepMounted=!1,modifiers,open,placement="bottom",popperOptions=defaultPopperOptions,popperRef,style,transition=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),[exited,setExited]=react.useState(!0);if(!keepMounted&&!open&&(!transition||exited))return null;const container=containerProp||(anchorEl?(0,ownerDocument.Z)(resolveAnchorEl(anchorEl)).body:void 0);return(0,jsx_runtime.jsx)(Portal.Z,{disablePortal,container,children:(0,jsx_runtime.jsx)(PopperTooltip,(0,esm_extends.Z)({anchorEl,direction,disablePortal,modifiers,ref,open:transition?!exited:open,placement,popperOptions,popperRef},other,{style:(0,esm_extends.Z)({position:"fixed",top:0,left:0,display:open||!keepMounted||transition&&!exited?null:"none"},style),TransitionProps:transition?{in:open,onEnter:()=>{setExited(!1)},onExited:()=>{setExited(!0)}}:null,children}))})}));var useThemeWithoutDefault=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const PopperRoot=(0,styled.ZP)(PopperUnstyled_PopperUnstyled,{name:"MuiPopper",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),Popper_Popper=react.forwardRef((function Popper(inProps,ref){const theme=(0,useThemeWithoutDefault.Z)(),props=(0,useThemeProps.Z)({props:inProps,name:"MuiPopper"});return(0,jsx_runtime.jsx)(PopperRoot,(0,esm_extends.Z)({direction:null==theme?void 0:theme.direction},props,{ref}))}))},"./node_modules/@mui/material/utils/useControlled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useControlled/useControlled.js").Z},"./node_modules/@mui/utils/esm/useControlled/useControlled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useControlled});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlled({controlled,default:defaultProp,name,state="value"}){const{current:isControlled}=react__WEBPACK_IMPORTED_MODULE_0__.useRef(void 0!==controlled),[valueState,setValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);return[isControlled?controlled:valueState,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newValue=>{isControlled||setValue(newValue)}),[])]}},"./node_modules/@mui/utils/esm/useId/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let globalId=0;const maybeReactUseId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()];function useId(idOverride){if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId}return function useGlobalId(idOverride){const[defaultId,setDefaultId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),id=idOverride||defaultId;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{null==defaultId&&(globalId+=1,setDefaultId(`mui-${globalId}`))}),[defaultId]),id}(idOverride)}}}]);