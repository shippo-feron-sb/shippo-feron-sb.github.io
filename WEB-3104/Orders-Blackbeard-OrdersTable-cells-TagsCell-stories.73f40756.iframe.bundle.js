"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4360],{"./node_modules/@goshippo/components/esm/Chip/Chip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Chip_Chip});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),chipTheme=(0,createTheme.A)(shippoTheme.A,{components:{MuiChip:{styleOverrides:{root:{"&.MuiChip-sizeSmall":{padding:`${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(1)}`,fontSize:"0.75rem",fontWeight:400,lineHeight:1.37,gap:shippoTheme.A.spacing(.5),borderRadius:"30px","&.MuiChip-deletable":{padding:`${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(.5)} ${shippoTheme.A.spacing(1)}`,borderRadius:"40px"},"& *":{padding:0,margin:0}},"&.MuiChip-filledWarning":{color:colors.T.yellow100,backgroundColor:colors.T.accent.background.warning,position:"relative","& .MuiChip-deleteIconColorWarning":{color:colors.T.yellow60},"& .MuiChip-label":{color:colors.T.text.default},"& .custom-chip-icon.filled":{backgroundColor:colors.T.yellow100}},"&.MuiChip-filledSuccess":{color:colors.T.accent.foreground.success,backgroundColor:colors.T.accent.background.success,position:"relative","& .MuiChip-label":{color:colors.T.text.default},"& .custom-chip-icon.filled":{backgroundColor:colors.T.accent.foreground.success}},"&.MuiChip-filledInfo":{color:colors.T.secondary,backgroundColor:colors.T.secondaryHover,position:"relative","& .MuiChip-label":{color:colors.T.text.default},"& .custom-chip-icon.filled":{backgroundColor:colors.T.secondary}},"&.MuiChip-filledError":{color:colors.T.specialUse.hover,backgroundColor:colors.T.accent.background.error,position:"relative","& .custom-chip-icon.filled":{backgroundColor:colors.T.specialUse.hover}},"&.MuiChip-deletable":{fontWeight:500,"&:hover":{boxShadow:elevations.$[2]},"&:focus":{boxShadow:`0px 0px 0px 4px ${colors.T.borderFocus}`},"& .MuiChip-deleteIcon":{color:colors.T.secondary},"& .MuiChip-deleteIcon:hover":{backgroundColor:colors.T.secondaryHover,borderRadius:"50%"}},"&.MuiChip-deletableColorDefault":{color:colors.T.text.default,backgroundColor:colors.T.backgroundDeemphasized},"&.Mui-disabled":{opacity:.5}}}}}});const FilledChipIcon=({outlined})=>(0,jsx_runtime.jsx)(Box.A,{sx:{height:"0.25rem",width:"0.25rem",borderRadius:"50%",border:"2px solid"},className:"custom-chip-icon "+(outlined?"":"filled")}),CustomChipIcon=({useDefaultIcon,iconVariant})=>{switch(!0){case"filled"===iconVariant:return(0,jsx_runtime.jsx)(FilledChipIcon,{});case"outlined"===iconVariant:return(0,jsx_runtime.jsx)(FilledChipIcon,{outlined:!0});case useDefaultIcon:return(0,jsx_runtime.jsx)(FilledChipIcon,{});default:return null}},Chip_Chip=_a=>{var{children,color,iconVariant,size}=_a,props=(0,tslib_es6.Tt)(_a,["children","color","iconVariant","size"]);const useDefaultIcon=!!iconVariant||null!==iconVariant&&["error","info","success","warning"].includes(color||"");return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:chipTheme},{children:(0,jsx_runtime.jsx)(Chip.A,Object.assign({color,sx:useDefaultIcon?{paddingLeft:"0.75rem"}:null,icon:(0,jsx_runtime.jsx)(CustomChipIcon,{useDefaultIcon,iconVariant}),size:size||"small"},props,{children}))}))}},"./node_modules/@goshippo/components/esm/FormHelperText/FormHelperText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormHelperText_FormHelperText});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FormHelperText=__webpack_require__("./node_modules/@mui/material/FormHelperText/FormHelperText.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),TextField_theme=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.theme.js");const formHelperTextTheme=(0,createTheme.A)(TextField_theme.A,{}),FormHelperText_FormHelperText=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:formHelperTextTheme},{children:(0,jsx_runtime.jsx)(FormHelperText.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/InputLabel/InputLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputLabel_InputLabel});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputLabel=__webpack_require__("./node_modules/@mui/material/InputLabel/InputLabel.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const inputLabelThemeInput={components:{MuiInputLabel:{styleOverrides:{root:emotion_react_browser_esm.AH`
          &.MuiFormLabel-root:not(.MuiInputLabel-shrink) {
            margin-top: -4px;
          }

          &.MuiFormLabel-root {
            &.Mui-error {
              color: ${colors.T.accent.foreground.error};
            }
          }

          &.Mui-focused,
          &.MuiInputLabel-shrink {
            color: ${colors.T.text.default};
          }
        `}}}},inputLabelTheme=(0,createTheme.A)(shippoTheme.A,inputLabelThemeInput),InputLabel_InputLabel=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:inputLabelTheme},{children:(0,jsx_runtime.jsx)(InputLabel.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SvgIcon_SvgIcon});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),SvgIcon=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const svgIconTheme=(0,createTheme.A)(shippoTheme.A,{}),SvgIcon_SvgIcon=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:svgIconTheme},{children:(0,jsx_runtime.jsx)(SvgIcon.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip_Tooltip});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const getVariantStyle=(theme,variant)=>{switch(variant){case"table":return{tooltip:{background:theme.palette.background.paper,color:theme.palette.text.primary,boxShadow:theme.shadows[5]},arrow:{color:theme.palette.background.paper}};case"secondary":return{tooltip:{background:theme.palette.secondary.main,color:theme.palette.secondary.contrastText,boxShadow:theme.shadows[5],padding:theme.spacing(1,1.5),borderRadius:"6px",fontWeight:400,fontSize:"0.75rem",lineHeight:"1rem"},arrow:{color:theme.palette.secondary.main}};default:return{tooltip:{},arrow:{}}}},tooltipTheme=(0,createTheme.A)(shippoTheme.A,{components:{MuiTooltip:{styleOverrides:{tooltip:({ownerState,theme})=>getVariantStyle(theme,ownerState.variant).tooltip,arrow:({ownerState,theme})=>getVariantStyle(theme,ownerState.variant).arrow},defaultProps:{arrow:!0}}}}),Tooltip_Tooltip=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:tooltipTheme},{children:(0,jsx_runtime.jsx)(Tooltip.A,Object.assign({},props,{children}))}))}},"./node_modules/@mui/icons-material/esm/Add.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},"./node_modules/@mui/material/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getIconButtonUtilityClass(slot){return(0,generateUtilityClass.A)("MuiIconButton",slot)}const IconButton_iconButtonClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["edge","children","className","color","disabled","disableFocusRipple","size"],IconButtonRoot=(0,styled.Ay)(ButtonBase.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],ownerState.edge&&styles[`edge${(0,capitalize.A)(ownerState.edge)}`],styles[`size${(0,capitalize.A)(ownerState.size)}`]]}})((({theme,ownerState})=>(0,esm_extends.A)({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest})},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.active} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12})),(({theme,ownerState})=>(0,esm_extends.A)({},"inherit"===ownerState.color&&{color:"inherit"},"inherit"!==ownerState.color&&"default"!==ownerState.color&&(0,esm_extends.A)({color:(theme.vars||theme).palette[ownerState.color].main},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===ownerState.size&&{padding:5,fontSize:theme.typography.pxToRem(18)},"large"===ownerState.size&&{padding:12,fontSize:theme.typography.pxToRem(28)},{[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}}))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiIconButton"}),{edge=!1,children,className,color="default",disabled=!1,disableFocusRipple=!1,size="medium"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{edge,color,disabled,disableFocusRipple,size}),classes=(ownerState=>{const{classes,disabled,color,edge,size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${(0,capitalize.A)(color)}`,edge&&`edge${(0,capitalize.A)(edge)}`,`size${(0,capitalize.A)(size)}`]};return(0,composeClasses.A)(slots,getIconButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(IconButtonRoot,(0,esm_extends.A)({className:(0,clsx_m.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,ref,ownerState},other,{children}))}))},"./app/components/OrderTagChip/OrderTagChip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>OrderTagChip});var templateObject_1,templateObject_2,templateObject_3,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Add=__webpack_require__("./node_modules/@mui/icons-material/esm/Add.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),OrderTagIcon=__webpack_require__("./app/components/OrderTagIcon/OrderTagIcon.tsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Chip=__webpack_require__("./node_modules/@goshippo/components/esm/Chip/Chip.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),constants=__webpack_require__("./app/styles/constants.ts"),Tag=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n"],["\n  align-items: center;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n"])),colors.T.secondary,shippoTheme.A.spacing(3),shippoTheme.A.spacing(3)),TagIcon=(0,emotion_styled_browser_esm.A)(OrderTagIcon.C)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  color: ",";\n  flex: 0 0 auto;\n"],["\n  color: ",";\n  flex: 0 0 auto;\n"])),colors.T.gray10),TagChip=(0,emotion_styled_browser_esm.A)(Chip.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  align-items: center;\n  background-color: ",";\n  display: inline-flex;\n  transition: all 150ms ease-in-out;\n\n  & .MuiChip-label {\n    font-weight: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n\n  /* Active chip styles */\n  &.MuiChip-deletable {\n    background-color: ",";\n    color: ",";\n    cursor: default;\n\n    .MuiChip-deleteIcon {\n      border-radius: 50%;\n      color: ",";\n      transition: all 150ms ease-in-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n    }\n\n    .MuiChip-icon {\n      color: ",";\n    }\n  }\n"],["\n  align-items: center;\n  background-color: ",";\n  display: inline-flex;\n  transition: all 150ms ease-in-out;\n\n  & .MuiChip-label {\n    font-weight: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n\n  /* Active chip styles */\n  &.MuiChip-deletable {\n    background-color: ",";\n    color: ",";\n    cursor: default;\n\n    .MuiChip-deleteIcon {\n      border-radius: 50%;\n      color: ",";\n      transition: all 150ms ease-in-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n    }\n\n    .MuiChip-icon {\n      color: ",";\n    }\n  }\n"])),colors.T.gray20,constants.Wy.medium,colors.T.gray20,elevations.$[2],colors.T.secondary,colors.T.white,colors.T.white,colors.T.white,colors.T.secondary,colors.T.gray10),OrderTagChip=function(props){var mode=props.mode;if("create"===mode){var label=props.label,onClick_1=props.onClick;return(0,emotion_react_jsx_runtime_browser_esm.Y)(TagChip,{icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(Add.A,{}),label,size:"small",onClick:onClick_1,role:"button",sx:{width:"fit-content"}})}if("icon"===mode){var tag_1=props.tag,_a=props.isLoading,isLoading_1=void 0!==_a&&_a,id_1=tag_1.id,name_1=tag_1.name,icon_1=tag_1.icon;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Tag,(0,tslib_es6.Cl)({"data-testid":"tag-chip-".concat(id_1),"aria-label":name_1,role:"img"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagIcon,{"data-testid":"tag-icon-".concat(id_1),iconId:icon_1,isLoading:isLoading_1})}))}var isChecked=props.isChecked,onClick=props.onClick,onDelete=props.onDelete,tag=props.tag,_b=props.isLoading,isLoading=void 0!==_b&&_b,id=tag.id,name=tag.name,icon=tag.icon;return(0,emotion_react_jsx_runtime_browser_esm.Y)(TagChip,{icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagIcon.C,{"data-testid":"tag-icon-".concat(id),iconId:icon,isLoading}),label:name,size:"small",onDelete:isChecked?function(){return onDelete(id)}:void 0,onClick:function(){return"full-with-edit"===mode?onClick(id):isChecked?void 0:onClick(id)},deleteIcon:(0,emotion_react_jsx_runtime_browser_esm.Y)(Close.A,{role:"button","aria-label":"Delete ".concat(name),"aria-hidden":"false"}),"aria-checked":isChecked,"aria-label":name,role:"menuitemcheckbox","data-testid":"tag-chip-".concat(id),"aria-hidden":"false"})}},"./app/components/OrderTagChip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>_OrderTagChip__WEBPACK_IMPORTED_MODULE_0__.F});var _OrderTagChip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/OrderTagChip/OrderTagChip.tsx")},"./app/pages/Orders/Blackbeard/OrdersTable/OrdersTableTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>OrdersTableTooltip});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Tooltip/Tooltip.js"),OrdersTableTooltip=function(_a){var PopperProps=_a.PopperProps,props=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Tt)(_a,["PopperProps"]),boundary=document.querySelector(".MuiDataGrid-virtualScrollerContent");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)({placement:"bottom-start",PopperProps:(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)({},PopperProps),{disablePortal:!0,sx:{whiteSpace:"normal"},modifiers:(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","bottom-start"],altBoundary:!0,boundary}}],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)((null==PopperProps?void 0:PopperProps.modifiers)||[]),!1)}),variant:"table",arrow:!0},props))}},"./app/pages/Orders/Blackbeard/OrdersTable/cells/TagsTooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>TagsTooltip});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),util=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/columns/util.ts"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),OrderTagsProvider=__webpack_require__("./app/contexts/OrderTagsProvider.tsx"),OrderTagChip=__webpack_require__("./app/components/OrderTagChip/index.ts"),context=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/context.ts"),TagsTooltip=function(_a){var tags=_a.tags,isBulkAssign=_a.isBulkAssign,assignOrderId=_a.assignOrderId,handleTagSelection=_a.handleTagSelection,handleTagDeletion=_a.handleTagDeletion,_b=_a.tagsBeingUpdated,tagsBeingUpdated=void 0===_b?[]:_b,_c=_a.tagChipMode,tagChipMode=void 0===_c?"full":_c,t=(0,context.D)().t,_d=(0,OrderTagsProvider.uq)(),uniqueTags=_d.uniqueTags,openTagCreationModal=_d.openTagCreationModal;return 0===uniqueTags.length?(0,emotion_react_jsx_runtime_browser_esm.Y)(util.T,(0,tslib_es6.Cl)({sx:{maxWidth:shippoTheme.A.spacing(20)}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{mode:"create",onClick:function(){return openTagCreationModal({assignOrderId})},label:t("orders:orderTags:newTag")})})):(0,emotion_react_jsx_runtime_browser_esm.Y)(util.T,(0,tslib_es6.Cl)({sx:{maxWidth:shippoTheme.A.spacing(20)}},{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({gap:shippoTheme.A.spacing(1),alignItems:"flex-start",sx:{maxHeight:shippoTheme.A.spacing(40),overflow:"auto",paddingBottom:shippoTheme.A.spacing(1),paddingRight:shippoTheme.A.spacing(1)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{mode:"create",onClick:function(){return openTagCreationModal({assignOrderId,isBulkAssign})},label:t("orders:orderTags:newTag")}),uniqueTags.map((function(tag){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{isLoading:tagsBeingUpdated.includes(tag.id),mode:tagChipMode,onClick:handleTagSelection,onDelete:handleTagDeletion,tag,isChecked:(tagId=tag.id,selectedTags=tags,!!selectedTags&&selectedTags.some((function(_a){return _a.id===tagId})))},tag.id);var tagId,selectedTags}))]}))}))}},"./app/pages/Orders/Blackbeard/OrdersTable/columns/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>ColumnTooltipContainer});var templateObject_1,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),ColumnTooltipContainer=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.Ay)("div")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.ue)(["\n  display: flex;\n  flex-direction: row;\n  place-items: center;\n  padding: ",";\n  max-width: 100%;\n"],["\n  display: flex;\n  flex-direction: row;\n  place-items: center;\n  padding: ",";\n  max-width: 100%;\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1.5))},"./app/pages/Orders/Blackbeard/OrdersTable/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,D:()=>useBlackBeardOrdersTableContext});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),BlackbeardOrdersTableContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({addSimpleSnackbarNotification:function(){},addSnackbarActionAlert:function(){},isSmallScreen:!1,isTablet:!1,setRefundLabelTransactionId:function(){},onCopyToClipboard:function(){},onClickPackingSlip:function(){},onClickDownloadPackingSlip:function(){},setShipmentsInformationDrawerData:function(){},onClickPlus:function(){},recentPackages:[],carrierTemplates:{},onPackageQuickSelectAction:function(){},t:function(){},createAnotherLabel:function(){},hideUnhideOrders:function(){},onSplitOrder:function(){},onUndoSplitOrder:function(){},toggleInvalidAddressModal:function(){},onClickRefresh:function(){},setTransactionModalOrderId:function(){},duplicateOrderFunc:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.sH)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.YH)(this,(function(_a){return[2]}))}))},apiRef:null,setApiRef:function(){},setInitialLoadColumn:function(){}});function useBlackBeardOrdersTableContext(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BlackbeardOrdersTableContext)}const __WEBPACK_DEFAULT_EXPORT__=BlackbeardOrdersTableContext},"./app/pages/Orders/Blackbeard/OrdersTable/hooks/useTooltip.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>useTooltip});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useTooltip(){var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.zs)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isTooltipOpen=_a[0],setIsTooltipOpen=_a[1];return{isTooltipOpen,handleTooltipClose:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setIsTooltipOpen(!1)}),[setIsTooltipOpen]),handleTooltipOpen:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setIsTooltipOpen(!0)}),[setIsTooltipOpen])}}},"./app/tests/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M6:()=>createTestStore});var redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/redux/es/redux.js");function createTestStore(reducers,state){return void 0===state&&(state={}),(0,redux__WEBPACK_IMPORTED_MODULE_0__.y$)((0,redux__WEBPACK_IMPORTED_MODULE_0__.HY)(reducers),state)}},"./app/pages/Orders/Blackbeard/OrdersTable/cells/TagsCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,With2Tags:()=>With2Tags,With3Tags:()=>With3Tags,With4Tags:()=>With4Tags,With5Tags:()=>With5Tags,default:()=>TagsCell_stories});var templateObject_1,templateObject_2,templateObject_3,TagsCell_styles_templateObject_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),TagsTooltip=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/TagsTooltip/index.ts"),OrdersTableTooltip=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/OrdersTableTooltip.tsx"),CircularProgress=__webpack_require__("./node_modules/@goshippo/components/esm/CircularProgress/CircularProgress.js"),Add=__webpack_require__("./node_modules/@mui/icons-material/esm/Add.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Cell=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  gap: "," ",";\n  padding: ",";\n  width: 100%;\n  max-width: ",";\n"],["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  gap: "," ",";\n  padding: ",";\n  width: 100%;\n  max-width: ",";\n"])),shippoTheme.A.spacing(.5),shippoTheme.A.spacing(1),shippoTheme.A.spacing(.5),shippoTheme.A.spacing(8)),MoreTags=(0,emotion_styled_browser_esm.A)(Typography.A)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  align-items: center;\n  display: inline-flex;\n  height: ",";\n  justify-content: center;\n  line-height: 1;\n  width: ",";\n"],["\n  align-items: center;\n  display: inline-flex;\n  height: ",";\n  justify-content: center;\n  line-height: 1;\n  width: ",";\n"])),shippoTheme.A.spacing(3),shippoTheme.A.spacing(3)),AddWrapper=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  align-items: center;\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"],["\n  align-items: center;\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),shippoTheme.A.spacing(3),shippoTheme.A.spacing(3),colors.T.secondary,colors.T.secondaryHover,elevations.$[2]),OrderTagChip=__webpack_require__("./app/components/OrderTagChip/index.ts"),TagsCellContent=(0,react.forwardRef)((function(_a,ref){var tags=_a.tags,isLoading=_a.isLoading,props=(0,tslib_es6.Tt)(_a,["tags","isLoading"]);if(isLoading||!tags)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Cell,(0,tslib_es6.Cl)({ref},props,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CircularProgress.A,{})}));var tagsLength=tags.length;if(0===tagsLength)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Cell,(0,tslib_es6.Cl)({ref},props,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddWrapper,(0,tslib_es6.Cl)({"data-testid":"tag-plus-sign"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Add.A,{fontSize:"small"})}))}));if(tagsLength<=4)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Cell,(0,tslib_es6.Cl)({ref},props,{children:tags.map((function(tag){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{tag,mode:"icon"},tag.id)}))}));var remainingTags=tagsLength-3;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Cell,(0,tslib_es6.Cl)({ref},props,{children:[tags.slice(0,3).map((function(tag){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{tag,mode:"icon"},tag.id)})),(0,emotion_react_jsx_runtime_browser_esm.FD)(MoreTags,(0,tslib_es6.Cl)({component:"strong",color:"primary",variant:"captionEmphasized",role:"strong"},{children:["+",remainingTags]}))]}))})),OrderTagsProvider=__webpack_require__("./app/contexts/OrderTagsProvider.tsx"),TagCellWrapper=(0,__webpack_require__("./node_modules/@mui/material/styles/styled.js").Ay)(Box.A)(TagsCell_styles_templateObject_1||(TagsCell_styles_templateObject_1=(0,tslib_es6.ue)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: default;\n\n  & .MuiTooltip-popper .MuiTooltip-tooltip {\n    margin-left: -",";\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: default;\n\n  & .MuiTooltip-popper .MuiTooltip-tooltip {\n    margin-left: -",";\n  }\n"])),shippoTheme.A.spacing(3)),useTooltip=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/hooks/useTooltip.ts"),TagsCell=function(_a){var tags=_a.tags,orderId=_a.orderId,isLoading=_a.isLoading,isChildSplitOrder=_a.isChildSplitOrder,_b=(0,OrderTagsProvider.uq)(),areUniqueTagsLoading=_b.areUniqueTagsLoading,assignTagToOrder=_b.assignTagToOrder,unassignTagFromOrder=_b.unassignTagFromOrder,_c=(0,useTooltip.f)(),isTooltipOpen=_c.isTooltipOpen,handleTooltipClose=_c.handleTooltipClose,handleTooltipOpen=_c.handleTooltipOpen,_d=(0,tslib_es6.zs)((0,react.useState)(!1),2),isCellLoading=_d[0],setIsCellLoading=_d[1],shouldShowLoading=isLoading||isCellLoading||areUniqueTagsLoading,shouldShowTooltip=isTooltipOpen&&!shouldShowLoading;(0,react.useEffect)((function(){setIsCellLoading(!1)}),[tags]);return(0,react.useEffect)((function(){shouldShowLoading&&handleTooltipClose()}),[handleTooltipClose,shouldShowLoading]),isChildSplitOrder?null:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagCellWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrdersTableTooltip.f,(0,tslib_es6.Cl)({PopperProps:{modifiers:[{name:"offset",enabled:!0,options:{offset:[0,-14]}}]},arrow:!1,open:shouldShowTooltip,onOpen:handleTooltipOpen,onClose:handleTooltipClose,title:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagsTooltip.F,{handleTagSelection:function(tagId){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return _a.trys.push([0,,2,3]),setIsCellLoading(!0),[4,assignTagToOrder(orderId,tagId)];case 1:return _a.sent(),[3,3];case 2:return setIsCellLoading(!1),[7];case 3:return[2]}}))}))},handleTagDeletion:function(tagId){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return _a.trys.push([0,,2,3]),setIsCellLoading(!0),[4,unassignTagFromOrder(orderId,tagId)];case 1:return _a.sent(),[3,3];case 2:return setIsCellLoading(!1),[7];case 3:return[2]}}))}))},tags,assignOrderId:orderId}),"data-testid":"tag-cell-tooltip"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagsCellContent,{"data-testid":"tag-cell-content",isLoading:shouldShowLoading,tags})}))})},order=__webpack_require__("./app/tests/mocks/order.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),utils=__webpack_require__("./app/tests/utils.ts");const TagsCell_stories={title:"Orders V2 / Cells / TagCell",component:TagsCell};var Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"130px",display:"flex",justifyContent:"center",alignItems:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(es.Kq,(0,tslib_es6.Cl)({store:(0,utils.M6)({})},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagsProvider.U5,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagsCell,(0,tslib_es6.Cl)({},args))})}))}))},Empty=Template.bind({});Empty.args={tags:[]};var With2Tags=Template.bind({});With2Tags.args={tags:[order.cP[0],order.cP[1]]};var With3Tags=Template.bind({});With3Tags.args={tags:[order.cP[0],order.cP[1],order.cP[2]]};var With4Tags=Template.bind({});With4Tags.args={tags:[order.cP[0],order.cP[1],order.cP[2],order.cP[3]]};var With5Tags=Template.bind({});With5Tags.args={tags:order.cP},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...Empty.parameters?.docs?.source}}},With2Tags.parameters={...With2Tags.parameters,docs:{...With2Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With2Tags.parameters?.docs?.source}}},With3Tags.parameters={...With3Tags.parameters,docs:{...With3Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With3Tags.parameters?.docs?.source}}},With4Tags.parameters={...With4Tags.parameters,docs:{...With4Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With4Tags.parameters?.docs?.source}}},With5Tags.parameters={...With5Tags.parameters,docs:{...With5Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With5Tags.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Orders-Blackbeard-OrdersTable-cells-TagsCell-stories.73f40756.iframe.bundle.js.map