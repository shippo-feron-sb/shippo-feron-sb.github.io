"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4756],{"./app/components/AddressValidation/views/InvalidAddressModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>InvalidAddressModal});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_libraries_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/Dialog/Dialog.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),InvalidAddressModal=function(_a){var t=_a.t,address=_a.address,onClose=_a.onClose,onSave=_a.onSave;if(!address)return null;var modalContent=(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({spacing:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A.spacing(3)},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({component:"h4",color:"primary"},{children:t("orders:addressBook:invalidAddress:notValidatedMsg")})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({direction:"column",sx:{px:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A.spacing(2),borderLeft:"solid 4px ".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.T.borders)}},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({component:"p",variant:"body",color:"primary"},{children:address.street1})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({component:"p",variant:"body",color:"primary"},{children:"".concat(address.city,", ").concat(address.state||""," ").concat(address.zip)}))]})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({component:"h4",color:"secondary"},{children:t("orders:addressBook:invalidAddress:mayBeLostMsg")}))]}));return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_libraries_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_0__.l,{open:!0,title:t("orders:addressBook:invalidAddress:title"),onClose,content:modalContent,actions:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({onClick:onClose,color:"secondary"},{children:t("orders:addressBook:invalidAddress:fixAddressBtn")}),0),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({onClick:onSave,color:"primary"},{children:t("orders:addressBook:invalidAddress:saveAnywayBtn")}),1)]})}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/components/AddressValidation/views/InvalidAddressModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_InvalidAddressModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/AddressValidation/views/InvalidAddressModal.tsx"),_utils_translate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/translate.ts"),address=(0,__webpack_require__("./app/tests/mocks/index.ts").$8)();const __WEBPACK_DEFAULT_EXPORT__={title:"Addresses / Validation / InvalidAddressModal",component:_InvalidAddressModal__WEBPACK_IMPORTED_MODULE_0__.t,argTypes:{onClose:{action:"close"},onSave:{action:"save"}}};var TranslatedInvalidAddressModal=(0,_utils_translate__WEBPACK_IMPORTED_MODULE_1__.Tl)("orders")(_InvalidAddressModal__WEBPACK_IMPORTED_MODULE_0__.t),Regular=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(TranslatedInvalidAddressModal,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},args))}.bind({});Regular.args={address},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"args => <TranslatedInvalidAddressModal {...args} />",...Regular.parameters?.docs?.source}}}}}]);