"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[8590],{"./node_modules/@goshippo/components/esm/styles/elevations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>elevations});const elevations=["none","0px 2px 6px rgb(1 71 79 / 0.32)","0px 4px 6px rgb(1 71 79 / 0.32)","0px 8px 16px rgb(1 71 79 / 0.32)","0px 16px 24px rgb(1 71 79 / 0.32)"]},"./app/components/SelectableArea/SelectableArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectableArea});var templateObject_1,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),Button=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)("button")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.ue)(["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid ",";\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"],["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid ",";\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.spacing(1.5,2),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.borders,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.white,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.text.default,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.transitions.duration.shortest,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.$[2],_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.borderFocus,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.selectedBackground,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.primary,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.text.disabled,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.backgroundDeemphasized,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.secondaryDisabled),SelectableArea=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_a,ref){var selected=_a.selected,children=_a.children,attributes=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Tt)(_a,["selected","children"]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(Button,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},attributes,{"aria-pressed":selected?"true":"false",ref},{children}))}))},"./app/components/SelectableArea/SelectableArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Text:()=>Text,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_SelectableArea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/SelectableArea/SelectableArea.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Selectable Area",component:_SelectableArea__WEBPACK_IMPORTED_MODULE_0__.a,argTypes:{selected:{type:"boolean",control:{type:"boolean"},options:[!0,!1]},disabled:{type:"boolean",control:{type:"boolean"},options:[!0,!1]}}};var Text=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)("div",(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({style:{width:"450px"}},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_SelectableArea__WEBPACK_IMPORTED_MODULE_0__.a,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},args,{children:"Selectable Area"}))}))}.bind({selected:!1,disabled:!1,children:"Selectable Area"});Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"TextTemplate.bind({\n  selected: false,\n  disabled: false,\n  children: 'Selectable Area'\n})",...Text.parameters?.docs?.source}}}}}]);