"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4158],{"./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/RateCellContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RateWithMultipleErrorsAndCustomerMethod:()=>RateWithMultipleErrorsAndCustomerMethod,RateWithSingleError:()=>RateWithSingleError,RateWithWarningAndCustomerMethod:()=>RateWithWarningAndCustomerMethod,default:()=>RateCellContainer_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),customerShippingMethod=__webpack_require__("./app/tests/mocks/customerShippingMethod.ts"),RateCellContainer=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/RateCellContainer.tsx"),carriers=__webpack_require__("./app/constants/carriers.ts"),mocks=__webpack_require__("./app/tests/mocks/index.ts"),mockedRateCellWithWarning={t:function(){},warnings:[{message:"A $920 surcharge is applied to packages with length over 108in. Double-check the length.",linkURL:"https://www.shippo.com",linkCopy:"Learn more"}],serviceLevelTitle:mocks.uY.servicelevel.name,selectedRate:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mocks.uY),{includedInsurancePrice:"0"}),selectedRateProvider:carriers.$5,customerShippingMethod:customerShippingMethod.D,transactionErrors:[]};const RateCellContainer_stories={title:"RateCellContainer",component:RateCellContainer.A,parameters:{layout:"centered"}};var mockedErrors=["Package required","Recipient required","Phone required","Total order and customs item weights do not match. form need to match. Please update these details"],RateCellContainerWithTranslate=(0,translate.Tl)(["orders"])(RateCellContainer.A),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"250px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(RateCellContainerWithTranslate,(0,tslib_es6.Cl)({},args))}))},RateWithWarningAndCustomerMethod=Template.bind({});RateWithWarningAndCustomerMethod.args=mockedRateCellWithWarning;var RateWithMultipleErrorsAndCustomerMethod=Template.bind({});RateWithMultipleErrorsAndCustomerMethod.args=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockedRateCellWithWarning),{transactionErrors:mockedErrors,warnings:[]});var RateWithSingleError=Template.bind({});RateWithSingleError.args=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockedRateCellWithWarning),{transactionErrors:[mockedErrors[2]],warnings:[],customerShippingMethod:customerShippingMethod.s}),RateWithWarningAndCustomerMethod.parameters={...RateWithWarningAndCustomerMethod.parameters,docs:{...RateWithWarningAndCustomerMethod.parameters?.docs,source:{originalSource:"(args: CarrierServiceCellProps) => <div style={{\n  width: '250px'\n}}>\n    <RateCellContainerWithTranslate {...args} />\n  </div>",...RateWithWarningAndCustomerMethod.parameters?.docs?.source}}},RateWithMultipleErrorsAndCustomerMethod.parameters={...RateWithMultipleErrorsAndCustomerMethod.parameters,docs:{...RateWithMultipleErrorsAndCustomerMethod.parameters?.docs,source:{originalSource:"(args: CarrierServiceCellProps) => <div style={{\n  width: '250px'\n}}>\n    <RateCellContainerWithTranslate {...args} />\n  </div>",...RateWithMultipleErrorsAndCustomerMethod.parameters?.docs?.source}}},RateWithSingleError.parameters={...RateWithSingleError.parameters,docs:{...RateWithSingleError.parameters?.docs,source:{originalSource:"(args: CarrierServiceCellProps) => <div style={{\n  width: '250px'\n}}>\n    <RateCellContainerWithTranslate {...args} />\n  </div>",...RateWithSingleError.parameters?.docs?.source}}}}}]);