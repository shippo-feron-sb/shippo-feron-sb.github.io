"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[9975],{"./app/components/CountryFlag/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_CountryFlag});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),constants=__webpack_require__("./app/styles/constants.ts"),Flag=(0,emotion_styled_browser_esm.A)("span")(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  border: 1px solid ",";\n  border-radius: 2px;\n  height: fit-content;\n  align-self: center;\n  line-height: 0;\n  min-width: 0.875rem;\n"],["\n  border: 1px solid ",";\n  border-radius: 2px;\n  height: fit-content;\n  align-self: center;\n  line-height: 0;\n  min-width: 0.875rem;\n"])),constants.Tj.gray100);var templateObject_1;const components_CountryFlag=function(_a){var className=_a.className,country=_a.country,props=(0,tslib_es6.Tt)(_a,["className","country"]);return(0,emotion_react_jsx_runtime_browser_esm.Y)(Flag,(0,tslib_es6.Cl)({className:"".concat(className||""," flag-icon flag-icon-").concat(country.toLocaleLowerCase())},props))}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/blackbeard/components/CustomerCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CellWithNameAndAddress:()=>CellWithNameAndAddress,CellsAtDifferentSizes:()=>CellsAtDifferentSizes,default:()=>CustomerCell_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),mocks=__webpack_require__("./app/tests/mocks/index.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Typography_Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Stack_Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),AddCircle=__webpack_require__("./node_modules/@mui/icons-material/esm/AddCircle.js"),CountryFlag=__webpack_require__("./app/components/CountryFlag/index.ts"),EllipsisTypography=(__webpack_require__("./app/types/Address.ts"),(0,emotion_styled_browser_esm.A)(Typography_Typography.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  @media screen and (max-width: ","px) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"],["\n  @media screen and (max-width: ","px) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])),shippoTheme.A.breakpoints.values.sm)),NoMobileCountry=(0,emotion_styled_browser_esm.A)(Stack_Stack.A)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  @media screen and (max-width: ","px) {\n    display: none;\n  }\n"],["\n  @media screen and (max-width: ","px) {\n    display: none;\n  }\n"])),shippoTheme.A.breakpoints.values.sm),AddCustomer=function(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Stack_Stack.A,(0,tslib_es6.Cl)({sx:{width:"100%"},direction:"row",justifyContent:"center"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(IconButton.A,(0,tslib_es6.Cl)({"data-testid":"customer-plus-icon",color:"primary"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddCircle.A,{})}))}))},CustomerCellContent=function(_a){var _b,name=_a.name,address=_a.address,_c=_a.renderedInTable,renderedInTable=void 0===_c||_c;if(!name||!address)return(0,emotion_react_jsx_runtime_browser_esm.Y)(AddCustomer,{});var countryCode=null===(_b=null==address?void 0:address.country)||void 0===_b?void 0:_b.iso2;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",(0,tslib_es6.Cl)({"data-testid":"customer-cell-body",style:{display:"flex",flexDirection:"row",overflow:"hidden",gap:shippoTheme.A.spacing(1)}},{children:[address&&(0,emotion_react_jsx_runtime_browser_esm.FD)(NoMobileCountry,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography_Typography.A,(0,tslib_es6.Cl)({component:"div"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CountryFlag.A,{"data-testid":"customer-cell-country-flag",country:countryCode||"US"})})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography_Typography.A,(0,tslib_es6.Cl)({variant:"caption",component:"div",mx:"auto"},{children:countryCode||"US"}))]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",(0,tslib_es6.Cl)({style:{overflow:"hidden",paddingRight:shippoTheme.A.spacing(.5)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography_Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body",sx:{textWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},{children:name})),address&&(0,emotion_react_jsx_runtime_browser_esm.FD)(EllipsisTypography,(0,tslib_es6.Cl)({"data-testid":"customer-cell-address",component:"p",color:"primary",variant:renderedInTable?"caption":"body"},{children:[address.city,(address.state||address.zip)&&", ".concat(address.state," ").concat(address.zip)]}))]}))]}))};const CustomerCell=function(props){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CustomerCellContent,(0,tslib_es6.Cl)({},props))}))};var templateObject_1,templateObject_2;const CustomerCell_stories={title:"Orders V2 / Cells / CustomerCell",component:CustomerCell};var Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(CustomerCell,(0,tslib_es6.Cl)({},args))},CellsAtDifferentSizes=function(args){return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",(0,tslib_es6.Cl)({style:{display:"flex",flexDirection:"column",gap:"1rem",width:"500px"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"50px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Template,(0,tslib_es6.Cl)({},args))})),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"100px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Template,(0,tslib_es6.Cl)({},args))})),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"150px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Template,(0,tslib_es6.Cl)({},args))})),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"250px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Template,(0,tslib_es6.Cl)({},args))})),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"350px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Template,(0,tslib_es6.Cl)({},args))}))]}))};CellsAtDifferentSizes.args={name:"Joey Jo-Jo Junior Shabadoo",address:(0,mocks.$8)()};var CellWithNameAndAddress=Template.bind({});CellWithNameAndAddress.args={name:"Joey Jo-Jo Junior Shabadoo",address:(0,mocks.$8)()},CellsAtDifferentSizes.parameters={...CellsAtDifferentSizes.parameters,docs:{...CellsAtDifferentSizes.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '1rem',\n    width: '500px'\n  }}>\n      <div style={{\n      width: '50px'\n    }}>\n        <Template {...args} />\n      </div>\n      <div style={{\n      width: '100px'\n    }}>\n        <Template {...args} />\n      </div>\n      <div style={{\n      width: '150px'\n    }}>\n        <Template {...args} />\n      </div>\n      <div style={{\n      width: '250px'\n    }}>\n        <Template {...args} />\n      </div>\n      <div style={{\n      width: '350px'\n    }}>\n        <Template {...args} />\n      </div>\n    </div>;\n}",...CellsAtDifferentSizes.parameters?.docs?.source}}},CellWithNameAndAddress.parameters={...CellWithNameAndAddress.parameters,docs:{...CellWithNameAndAddress.parameters?.docs,source:{originalSource:"args => {\n  return <CustomerCell {...args} />;\n}",...CellWithNameAndAddress.parameters?.docs?.source}}}}}]);