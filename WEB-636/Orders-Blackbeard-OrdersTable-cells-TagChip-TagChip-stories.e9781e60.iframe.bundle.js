"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[8948],{"./node_modules/@goshippo/components/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const boxTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Box=(0,createBox.Z)({defaultTheme:boxTheme})},"./node_modules/@goshippo/components/esm/styles/elevations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>elevations});const elevations=["none","0px 2px 6px rgb(76 103 116 / 0.32)","0px 4px 6px rgb(76 103 116 / 0.32)","0px 8px 16px rgb(76 103 116 / 0.32)","0px 16px 24px rgb(76 103 116 / 0.32)"]},"./node_modules/@mui/icons-material/esm/Close.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSvgIcon",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),ownerState,focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,{children:[children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon;function createSvgIcon(path,displayName){const Component=(props,ref)=>(0,jsx_runtime.jsx)(SvgIcon_SvgIcon,(0,esm_extends.Z)({"data-testid":`${displayName}Icon`,ref},props,{children:path}));return Component.muiName=SvgIcon_SvgIcon.muiName,react.memo(react.forwardRef(Component))}},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__.Z}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.Z)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.Gc[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./app/pages/Orders/Blackbeard/OrdersTable/cells/TagChip/TagChip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>TagChip});var templateObject_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Chip=__webpack_require__("./node_modules/@goshippo/components/esm/Chip/Chip.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),StyledTagChip=(0,styled.ZP)(Chip.Z)(templateObject_1||(templateObject_1=(0,tslib_es6.cy)(["\n  background-color: ",";\n\n  & .MuiChip-label {\n    font-weight: 700;\n  }\n\n  &:hover {\n    box-shadow: ",";\n    background-color: ",";\n  }\n\n  /* Active chip styles */\n  &.MuiChip-deletable {\n    background-color: ",";\n    color: ",";\n  }\n\n  &.MuiChip-deletable .MuiChip-deleteIcon {\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"],["\n  background-color: ",";\n\n  & .MuiChip-label {\n    font-weight: 700;\n  }\n\n  &:hover {\n    box-shadow: ",";\n    background-color: ",";\n  }\n\n  /* Active chip styles */\n  &.MuiChip-deletable {\n    background-color: ",";\n    color: ",";\n  }\n\n  &.MuiChip-deletable .MuiChip-deleteIcon {\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),colors.O.gray20,elevations.P[2],colors.O.gray20,colors.O.secondary,colors.O.white,colors.O.white,colors.O.white,colors.O.secondary),TagChip=function(_a){var tag=_a.tag,_b=_a.isChecked,isChecked=void 0!==_b&&_b,_c=_a.chipProps,chipProps=void 0===_c?{}:_c,handleTagSelection=_a.handleTagSelection,isTagClickable=!isChecked&&handleTagSelection;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(StyledTagChip,(0,tslib_es6.pi)({label:tag.name,size:"small"},chipProps,{onDelete:isChecked?function(){}:void 0,onClick:isTagClickable?function(){return handleTagSelection(tag)}:void 0,deleteIcon:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Close.Z,{}),"aria-checked":isChecked,role:"menuitemcheckbox"}))}},"./app/pages/Orders/Blackbeard/OrdersTable/cells/TagChip/TagChip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_TagChip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/TagChip/TagChip.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Tags / TagChip",component:_TagChip__WEBPACK_IMPORTED_MODULE_0__.C};var Template=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TagChip__WEBPACK_IMPORTED_MODULE_0__.C,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({},args))},Default=Template.bind({});Default.args={tag:{id:"1",name:"VIP Customer",color:"581845",icon:"heart"}};var Checked=Template.bind({});Checked.args=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({},Default.args),{isChecked:!0}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TagChip {...args} />",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"args => <TagChip {...args} />",...Checked.parameters?.docs?.source}}}}}]);