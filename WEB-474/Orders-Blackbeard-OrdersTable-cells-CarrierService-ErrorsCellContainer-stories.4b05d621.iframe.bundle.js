"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[8151],{"./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/ErrorsCellContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultipleErrorsNoCustomerMethod:()=>MultipleErrorsNoCustomerMethod,MultipleErrorsWithCustomerMethod:()=>MultipleErrorsWithCustomerMethod,SingleErrorsNoCustomerMethod:()=>SingleErrorsNoCustomerMethod,SingleErrorsWithCustomerMethod:()=>SingleErrorsWithCustomerMethod,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),tests_mocks_customerShippingMethod__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/tests/mocks/customerShippingMethod.ts"),_ErrorsCellContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/ErrorsCellContainer.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"ErrorsCellContainer",component:_ErrorsCellContainer__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered"}};var mockedOrderErrors=["Package required","Recipient required","Phone required","Total order and customs item weights do not match. form need to match. Please update these details"],Template=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("div",(0,tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({style:{width:"250px"}},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_ErrorsCellContainer__WEBPACK_IMPORTED_MODULE_1__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({},args))}))},SingleErrorsWithCustomerMethod=Template.bind({});SingleErrorsWithCustomerMethod.args={orderErrors:[mockedOrderErrors[0]],customerShippingMethod:tests_mocks_customerShippingMethod__WEBPACK_IMPORTED_MODULE_0__.W};var MultipleErrorsWithCustomerMethod=Template.bind({});MultipleErrorsWithCustomerMethod.args={orderErrors:mockedOrderErrors,customerShippingMethod:tests_mocks_customerShippingMethod__WEBPACK_IMPORTED_MODULE_0__.W};var SingleErrorsNoCustomerMethod=Template.bind({});SingleErrorsNoCustomerMethod.args={orderErrors:[mockedOrderErrors[3]],customerShippingMethod:tests_mocks_customerShippingMethod__WEBPACK_IMPORTED_MODULE_0__.X};var MultipleErrorsNoCustomerMethod=Template.bind({});MultipleErrorsNoCustomerMethod.args={orderErrors:mockedOrderErrors,customerShippingMethod:tests_mocks_customerShippingMethod__WEBPACK_IMPORTED_MODULE_0__.X},SingleErrorsWithCustomerMethod.parameters={...SingleErrorsWithCustomerMethod.parameters,docs:{...SingleErrorsWithCustomerMethod.parameters?.docs,source:{originalSource:"(args: ErrorsCellContainerProps) => <div style={{\n  width: '250px'\n}}>\n    <ErrorsCellContainer {...args} />\n  </div>",...SingleErrorsWithCustomerMethod.parameters?.docs?.source}}},MultipleErrorsWithCustomerMethod.parameters={...MultipleErrorsWithCustomerMethod.parameters,docs:{...MultipleErrorsWithCustomerMethod.parameters?.docs,source:{originalSource:"(args: ErrorsCellContainerProps) => <div style={{\n  width: '250px'\n}}>\n    <ErrorsCellContainer {...args} />\n  </div>",...MultipleErrorsWithCustomerMethod.parameters?.docs?.source}}},SingleErrorsNoCustomerMethod.parameters={...SingleErrorsNoCustomerMethod.parameters,docs:{...SingleErrorsNoCustomerMethod.parameters?.docs,source:{originalSource:"(args: ErrorsCellContainerProps) => <div style={{\n  width: '250px'\n}}>\n    <ErrorsCellContainer {...args} />\n  </div>",...SingleErrorsNoCustomerMethod.parameters?.docs?.source}}},MultipleErrorsNoCustomerMethod.parameters={...MultipleErrorsNoCustomerMethod.parameters,docs:{...MultipleErrorsNoCustomerMethod.parameters?.docs,source:{originalSource:"(args: ErrorsCellContainerProps) => <div style={{\n  width: '250px'\n}}>\n    <ErrorsCellContainer {...args} />\n  </div>",...MultipleErrorsNoCustomerMethod.parameters?.docs?.source}}}}}]);