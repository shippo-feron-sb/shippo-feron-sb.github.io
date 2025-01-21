"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[7780],{"./app/components/OrderTagChip/OrderTagChip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>OrderTagChip});var templateObject_1,templateObject_2,templateObject_3,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Add=__webpack_require__("./node_modules/@mui/icons-material/esm/Add.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),OrderTagIcon=__webpack_require__("./app/components/OrderTagIcon/OrderTagIcon.tsx"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Chip=__webpack_require__("./node_modules/@goshippo/components/esm/Chip/Chip.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),constants=__webpack_require__("./app/styles/constants.ts"),Tag=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n"],["\n  align-items: center;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n"])),colors.T.secondary,shippoTheme.A.spacing(3),shippoTheme.A.spacing(3)),TagIcon=(0,emotion_styled_browser_esm.A)(OrderTagIcon.C)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  color: ",";\n  flex: 0 0 auto;\n"],["\n  color: ",";\n  flex: 0 0 auto;\n"])),colors.T.gray10),TagChip=(0,emotion_styled_browser_esm.A)(Chip.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  align-items: center;\n  background-color: ",";\n  display: inline-flex;\n  transition: all 150ms ease-in-out;\n\n  & .MuiChip-label {\n    font-weight: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n\n  /* Active chip styles */\n  &.MuiChip-deletable {\n    background-color: ",";\n    color: ",";\n    cursor: default;\n\n    .MuiChip-deleteIcon {\n      border-radius: 50%;\n      color: ",";\n      transition: all 150ms ease-in-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n    }\n\n    .MuiChip-icon {\n      color: ",";\n    }\n  }\n"],["\n  align-items: center;\n  background-color: ",";\n  display: inline-flex;\n  transition: all 150ms ease-in-out;\n\n  & .MuiChip-label {\n    font-weight: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n\n  /* Active chip styles */\n  &.MuiChip-deletable {\n    background-color: ",";\n    color: ",";\n    cursor: default;\n\n    .MuiChip-deleteIcon {\n      border-radius: 50%;\n      color: ",";\n      transition: all 150ms ease-in-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n    }\n\n    .MuiChip-icon {\n      color: ",";\n    }\n  }\n"])),colors.T.gray20,constants.Wy.medium,colors.T.gray20,elevations.$[2],colors.T.secondary,colors.T.white,colors.T.white,colors.T.white,colors.T.secondary,colors.T.gray10),OrderTagChip=function(props){var mode=props.mode;if("create"===mode){var label=props.label,onClick_1=props.onClick;return(0,emotion_react_jsx_runtime_browser_esm.Y)(TagChip,{icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(Add.A,{}),label,onClick:onClick_1,role:"button",size:"small",sx:{width:"fit-content"}})}if("icon"===mode){var _a=props.isLoading,isLoading_1=void 0!==_a&&_a,tag_1=props.tag,icon_1=tag_1.icon,id_1=tag_1.id,name_1=tag_1.name;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Tag,(0,tslib_es6.Cl)({"aria-label":name_1,"data-testid":"tag-chip-".concat(id_1),role:"img"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagIcon,{"data-testid":"tag-icon-".concat(id_1),iconId:icon_1,isLoading:isLoading_1})}))}var isChecked=props.isChecked,_b=props.isLoading,isLoading=void 0!==_b&&_b,onClick=props.onClick,onDelete=props.onDelete,tag=props.tag,icon=tag.icon,id=tag.id,name=tag.name;return(0,emotion_react_jsx_runtime_browser_esm.Y)(TagChip,{"aria-checked":isChecked,"aria-hidden":"false","aria-label":name,"data-testid":"tag-chip-".concat(id),deleteIcon:(0,emotion_react_jsx_runtime_browser_esm.Y)(Close.A,{"aria-hidden":"false","aria-label":"Delete ".concat(name),role:"button"}),icon:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagIcon.C,{"data-testid":"tag-icon-".concat(id),iconId:icon,isLoading}),label:name,onClick:function(){return"full-with-edit"===mode?onClick(id):isChecked?void 0:onClick(id)},onDelete:isChecked?function(){return onDelete(id)}:void 0,role:"menuitemcheckbox",size:"small"})}},"./app/components/OrderTagIcon/OrderTagIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>OrderTagIcon});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CircularProgress=__webpack_require__("./node_modules/@goshippo/components/esm/CircularProgress/CircularProgress.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),customIcons=__webpack_require__("./app/components/customIcons/index.ts"),orderTagIconMap={circle:customIcons.GQ,default:customIcons.C3,diamond:customIcons.e9,flag:customIcons.iF,flower:customIcons.vw,heart:customIcons.C3,hourglass:customIcons.ug,person:customIcons.nX,puzzle:customIcons.iq,sprout:customIcons.Ns,square:customIcons.dH,star:customIcons.Gg,tree:customIcons.O8},OrderTagIcon=function(_a){var iconId=_a.iconId,props=(0,tslib_es6.Tt)(_a,["iconId"]),isLoading=props.isLoading,sx=props.sx,remainingProps=(0,tslib_es6.Tt)(props,["isLoading","sx"]),Icon=function(iconId){return orderTagIconMap[iconId]||orderTagIconMap.default}(iconId);return isLoading?(0,emotion_react_jsx_runtime_browser_esm.Y)(CircularProgress.A,{size:"extraSmall"}):(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,(0,tslib_es6.Cl)({},remainingProps,{sx:(0,tslib_es6.Cl)({color:colors.T.gray80,height:shippoTheme.A.spacing(2),width:shippoTheme.A.spacing(2)},sx)}))}},"./app/components/customIcons/createSvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>createSvgIcon});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/SvgIcon/SvgIcon.js"),createSvgIcon=function(icon,_a){var id=_a.id,defaultProps=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Tt)(_a,["id"]);return function(props){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)({"data-testid":id,viewBox:"0 0 24 24"},defaultProps,props,{children:icon}))}}},"./app/components/customIcons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GQ:()=>CircleIcon,e9:()=>DiamondIcon,qN:()=>EditAddressIcon,iF:()=>FlagIcon,vw:()=>FlowerIcon,C3:()=>HeartIcon,ug:()=>HourGlassIcon,nX:()=>PersonIcon,iq:()=>PuzzleIcon,Ns:()=>SproutIcon,dH:()=>SquareIcon,Gg:()=>StarIcon,O8:()=>TreeIcon});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),createSvgIcon=__webpack_require__("./app/components/customIcons/createSvgIcon.tsx"),CircleIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("circle",{cx:"12",cy:"12",fill:"currentColor",id:"CircleIcon",r:"10"}),{id:"CircleIcon"}),DiamondIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 15L1 8L8 1L15 8L8 15Z",fill:"currentColor"}),{id:"DiamondIcon",viewBox:"0 0 16 16"}),EditAddressIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z",fill:"currentColor"}),{id:"EditAddressIcon"}),FlagIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M2 16V1H10.3571C10.5571 1 10.7429 1.04779 10.9143 1.14338C11.0857 1.23897 11.2286 1.36765 11.3429 1.52941L14 5.41176L11.3429 9.29412C11.2286 9.45588 11.0857 9.58456 10.9143 9.68015C10.7429 9.77574 10.5571 9.82353 10.3571 9.82353H3.71429V16H2Z",fill:"currentColor"}),{id:"FlagIcon",viewBox:"-1 0 16 16"}),FlowerIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 15C7.03167 15 6.12167 14.8162 5.27 14.4487C4.41833 14.0812 3.6775 13.5825 3.0475 12.9525C2.4175 12.3225 1.91875 11.5817 1.55125 10.73C1.18375 9.87833 1 8.96833 1 8V1.35L5.2175 4.5175C5.57917 3.96917 5.99042 3.40333 6.45125 2.82C6.91208 2.23667 7.42833 1.63 8 1C8.525 1.58333 9.02667 2.17542 9.505 2.77625C9.98333 3.37708 10.4033 3.9575 10.765 4.5175L15 1.35V8C15 8.96833 14.8162 9.87833 14.4487 10.73C14.0812 11.5817 13.5825 12.3225 12.9525 12.9525C12.3225 13.5825 11.5817 14.0812 10.73 14.4487C9.87833 14.8162 8.96833 15 8 15Z",fill:"currentColor"}),{id:"FlowerIcon",viewBox:"0 0 16 16"}),HeartIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 15L6.985 14.0649C3.38 10.7564 1 8.57439 1 5.89646C1 3.71444 2.694 2 4.85 2C6.068 2 7.237 2.57384 8 3.48065C8.763 2.57384 9.932 2 11.15 2C13.306 2 15 3.71444 15 5.89646C15 8.57439 12.62 10.7564 9.015 14.0719L8 15Z",fill:"currentColor"}),{id:"HeartIcon",viewBox:"0 0 16 16"}),HourGlassIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M2 15V13.6H3.5V11.5C3.5 10.7883 3.67813 10.1204 4.03438 9.49625C4.39062 8.87208 4.8875 8.37333 5.525 8C4.8875 7.62667 4.39062 7.12792 4.03438 6.50375C3.67813 5.87958 3.5 5.21167 3.5 4.5V2.4H2V1H14V2.4H12.5V4.5C12.5 5.21167 12.3219 5.87958 11.9656 6.50375C11.6094 7.12792 11.1125 7.62667 10.475 8C11.1125 8.37333 11.6094 8.87208 11.9656 9.49625C12.3219 10.1204 12.5 10.7883 12.5 11.5V13.6H14V15H2Z",fill:"currentColor"}),{id:"HourGlassIcon",viewBox:"0 0 16 16"}),PersonIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 8C7.0375 8 6.21354 7.65729 5.52812 6.97187C4.84271 6.28646 4.5 5.4625 4.5 4.5C4.5 3.5375 4.84271 2.71354 5.52812 2.02812C6.21354 1.34271 7.0375 1 8 1C8.9625 1 9.78646 1.34271 10.4719 2.02812C11.1573 2.71354 11.5 3.5375 11.5 4.5C11.5 5.4625 11.1573 6.28646 10.4719 6.97187C9.78646 7.65729 8.9625 8 8 8ZM1 15V12.55C1 12.0542 1.1276 11.5984 1.38281 11.1828C1.63802 10.7672 1.97708 10.45 2.4 10.2312C3.30417 9.77917 4.22292 9.4401 5.15625 9.21406C6.08958 8.98802 7.0375 8.875 8 8.875C8.9625 8.875 9.91042 8.98802 10.8438 9.21406C11.7771 9.4401 12.6958 9.77917 13.6 10.2312C14.0229 10.45 14.362 10.7672 14.6172 11.1828C14.8724 11.5984 15 12.0542 15 12.55V15H1Z",fill:"currentColor"}),{id:"PersonIcon",viewBox:"0 1 16 16"}),PuzzleIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M5.46154 16H1V11.5385C1.61538 11.5385 2.15385 11.3429 2.61538 10.9519C3.07692 10.5609 3.30769 10.0641 3.30769 9.46154C3.30769 8.85897 3.07692 8.36218 2.61538 7.97115C2.15385 7.58013 1.61538 7.38462 1 7.38462V2.92308H5.61538C5.61538 2.38462 5.80128 1.92949 6.17308 1.55769C6.54487 1.1859 7 1 7.53846 1C8.07692 1 8.53205 1.1859 8.90385 1.55769C9.27564 1.92949 9.46154 2.38462 9.46154 2.92308H14.0769V7.53846C14.6154 7.53846 15.0705 7.72436 15.4423 8.09615C15.8141 8.46795 16 8.92308 16 9.46154C16 10 15.8141 10.4551 15.4423 10.8269C15.0705 11.1987 14.6154 11.3846 14.0769 11.3846V16H9.61539C9.61539 15.359 9.41346 14.8141 9.00962 14.3654C8.60577 13.9167 8.11539 13.6923 7.53846 13.6923C6.96154 13.6923 6.47115 13.9167 6.06731 14.3654C5.66346 14.8141 5.46154 15.359 5.46154 16Z",fill:"currentColor"}),{id:"PuzzleIcon",viewBox:"0 1 16 16"}),SproutIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M7.22222 15V8.79722C6.39259 8.79722 5.59537 8.63843 4.83056 8.32083C4.06574 8.00324 3.39167 7.55278 2.80833 6.96944C2.225 6.38611 1.77778 5.71204 1.46667 4.94722C1.15556 4.18241 1 3.38519 1 2.55556V1H2.55556C3.37222 1 4.16296 1.1588 4.92778 1.47639C5.69259 1.79398 6.36667 2.24444 6.95 2.82778C7.35185 3.22963 7.68565 3.67037 7.95139 4.15C8.21713 4.62963 8.4213 5.14167 8.56389 5.68611C8.6287 5.59537 8.7 5.50787 8.77778 5.42361C8.85556 5.33935 8.93982 5.25185 9.03056 5.16111C9.61389 4.57778 10.288 4.12732 11.0528 3.80972C11.8176 3.49213 12.6148 3.33333 13.4444 3.33333H15V4.88889C15 5.71852 14.8412 6.51574 14.5236 7.28056C14.206 8.04537 13.7556 8.71944 13.1722 9.30278C12.5889 9.88611 11.9181 10.3333 11.1597 10.6444C10.4014 10.9556 9.60741 11.1111 8.77778 11.1111V15H7.22222Z",fill:"currentColor"}),{id:"SproutIcon",viewBox:"0 -1 16 16"}),SquareIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M14 2H2V14H14V2Z",fill:"currentColor"}),{id:"SquareIcon",viewBox:"0 0 16 16"}),StarIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})]}),{id:"StarIcon",viewBox:"2 2 20 20"}),TreeIcon=(0,createSvgIcon.K)((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M10.8715 8H12.4358L6.96089 0L1.52514 8H3.05028L0 12.8H5.41229V16H8.5095V12.8H14L10.8715 8Z",fill:"currentColor"}),{id:"TreeIcon",viewBox:"-1 0 16 16"})},"./app/components/OrderTagChip/OrderTagChip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullMode:()=>FullMode,FullModeChecked:()=>FullModeChecked,IconMode:()=>IconMode,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_tests_mocks_order__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/tests/mocks/order.ts"),_OrderTagChip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/components/OrderTagChip/OrderTagChip.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_OrderTagChip__WEBPACK_IMPORTED_MODULE_1__.F,title:"Orders V2 / Cells / OrderTagChip"};var Template=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_OrderTagChip__WEBPACK_IMPORTED_MODULE_1__.F,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({},args))},IconMode=Template.bind({});IconMode.args={mode:"icon",tag:_tests_mocks_order__WEBPACK_IMPORTED_MODULE_0__.cP[0]};var FullMode=Template.bind({});FullMode.args={isChecked:!1,mode:"full",onClick:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.sH)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.YH)(this,(function(_a){return[2]}))}))},onDelete:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.sH)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.YH)(this,(function(_a){return[2]}))}))},tag:_tests_mocks_order__WEBPACK_IMPORTED_MODULE_0__.cP[0]};var FullModeChecked=Template.bind({});FullMode.args={isChecked:!0,mode:"full",onClick:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.sH)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.YH)(this,(function(_a){return[2]}))}))},onDelete:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.sH)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_3__.YH)(this,(function(_a){return[2]}))}))},tag:_tests_mocks_order__WEBPACK_IMPORTED_MODULE_0__.cP[0]},IconMode.parameters={...IconMode.parameters,docs:{...IconMode.parameters?.docs,source:{originalSource:"args => <OrderTagChip {...args} />",...IconMode.parameters?.docs?.source}}},FullMode.parameters={...FullMode.parameters,docs:{...FullMode.parameters?.docs,source:{originalSource:"args => <OrderTagChip {...args} />",...FullMode.parameters?.docs?.source}}},FullModeChecked.parameters={...FullModeChecked.parameters,docs:{...FullModeChecked.parameters?.docs,source:{originalSource:"args => <OrderTagChip {...args} />",...FullModeChecked.parameters?.docs?.source}}}}}]);