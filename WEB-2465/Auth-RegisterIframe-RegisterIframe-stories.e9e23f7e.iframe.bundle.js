"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[7241],{"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.en[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.A)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Q)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},otherProps,{sx:finalSx})}},"./app/pages/Orders/Blackbeard/hooks/hooks/useSearchQueryParams.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useSearchQueryParams});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router/esm/react-router.js");function useSearchQueryParams(){var history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.W6)(),_a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.zs)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),2),queryParams=_a[0],setQueryParams=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var e_1,_a,searchParams=new URLSearchParams(history.location.search.substring(1)),queryParamObject={},shippingMethodCount=0;try{for(var _b=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Ju)(searchParams.entries()),_c=_b.next();!_c.done;_c=_b.next()){var _d=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.zs)(_c.value,2),key=_d[0],value=_d[1];key.includes("shipping_method")?(queryParamObject["shipping_method[".concat(shippingMethodCount,"]")]=value,shippingMethodCount+=1):queryParamObject[key]=value}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}setQueryParams(queryParamObject)}),[history.location]),{queryParams,updateQueryParams:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(newQueryParams){var queryString=Object.keys(newQueryParams).map((function(key){return encodeURIComponent(key)+"="+encodeURIComponent(newQueryParams[key])})).join("&");history.push("".concat(location.pathname,"?").concat(queryString))}),[history])}}},"./app/pages/Auth/RegisterIframe/RegisterIframe.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,default:()=>RegisterIframe_stories});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),FormHelperText=__webpack_require__("./node_modules/@goshippo/components/esm/FormHelperText/FormHelperText.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),constants=__webpack_require__("./app/styles/constants.ts"),FormGroup=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  margin-top: 2rem;\n  @media (max-width: 390px) {\n    margin-top: 1rem;\n  }\n  .grecaptcha-badge {\n    visibility: hidden;\n  }\n  .MuiInputLabel-root {\n    color: #547c8c;\n  }\n  .MuiOutlinedInput-root {\n    background-color: #ffffff;\n    border-radius: 0 !important;\n    border: transparent;\n    .MuiOutlinedInput-notchedOutline {\n      border-radius: 0;\n      border: 1.5px solid #000000 !important;\n    }\n    &.Mui-error {\n      .MuiOutlinedInput-notchedOutline {\n        border: 1.5px solid ",";\n      }\n    }\n  }\n"],["\n  margin-top: 2rem;\n  @media (max-width: 390px) {\n    margin-top: 1rem;\n  }\n  .grecaptcha-badge {\n    visibility: hidden;\n  }\n  .MuiInputLabel-root {\n    color: #547c8c;\n  }\n  .MuiOutlinedInput-root {\n    background-color: #ffffff;\n    border-radius: 0 !important;\n    border: transparent;\n    .MuiOutlinedInput-notchedOutline {\n      border-radius: 0;\n      border: 1.5px solid #000000 !important;\n    }\n    &.Mui-error {\n      .MuiOutlinedInput-notchedOutline {\n        border: 1.5px solid ",";\n      }\n    }\n  }\n"])),shippoTheme.A.palette.error.main),FormInput=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  margin-bottom: 0.4rem;\n  .MuiButtonBase-root {\n    background-color: #00484e;\n    &.Mui-disabled {\n      background-color: #00484e !important;\n    }\n  }\n"],["\n  margin-bottom: 0.4rem;\n  .MuiButtonBase-root {\n    background-color: #00484e;\n    &.Mui-disabled {\n      background-color: #00484e !important;\n    }\n  }\n"]))),StyledFormHelperText=(0,emotion_styled_browser_esm.A)(FormHelperText.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  margin-left: ",";\n  font-size: 0.65rem;\n"],["\n  margin-left: ",";\n  font-size: 0.65rem;\n"])),shippoTheme.A.spacing(1)),FlexWrapper=(0,emotion_styled_browser_esm.A)("div")(templateObject_4||(templateObject_4=(0,tslib_es6.ue)(["\n  background-color: ",";\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 0;\n  align-items: center;\n"],["\n  background-color: ",";\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 0;\n  align-items: center;\n"])),(function(props){return props.bgColor?"#".concat(props.bgColor):"white"})),StyledTerms=(0,emotion_styled_browser_esm.A)("p")(templateObject_5||(templateObject_5=(0,tslib_es6.ue)(["\n  font-weight: ",";\n  font-size: 10px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n"],["\n  font-weight: ",";\n  font-size: 10px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n"])),constants.Wy.normal),Grid=__webpack_require__("./node_modules/@goshippo/components/esm/Grid/Grid.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),FormControl=__webpack_require__("./node_modules/@goshippo/components/esm/FormControl/FormControl.js"),InputLabel=__webpack_require__("./node_modules/@goshippo/components/esm/InputLabel/InputLabel.js"),Select=__webpack_require__("./node_modules/@goshippo/components/esm/Select/Select.js"),ExpandMore=__webpack_require__("./node_modules/@mui/icons-material/esm/ExpandMore.js"),MenuItem=__webpack_require__("./node_modules/@goshippo/components/esm/MenuItem/MenuItem.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),emotion_element_c39617d8_browser_esm=(__webpack_require__("./node_modules/react-google-recaptcha/lib/esm/index.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js")),Grid_Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),gridTheme=(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").A)({breakpoints:{values:{xs:0,sm:478,md:767,lg:992,xl:1440}}});const CustomGrid=function(_a){var children=_a.children,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_element_c39617d8_browser_esm.a,(0,tslib_es6.Cl)({theme:gridTheme},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Grid_Grid.Ay,(0,tslib_es6.Cl)({},props,{children}))}))};var onboarding=__webpack_require__("./app/constants/onboarding.ts"),RegisterForm=function(_a){var t=_a.t,control=_a.control,formState=_a.formState,submitting=(_a.recaptchaRef,_a.submitting),termsAndPrivacy=_a.termsAndPrivacy,onBlur=_a.onBlur,onSubmit=_a.onSubmit,errors=(_a.recaptchaOnChange,formState.errors),isValid=formState.isValid,params=new URLSearchParams(window.location.search),hasNewDropdownValues=params.has("enhancedDropdown")&&"true"===params.get("enhancedDropdown"),volumeOptions=hasNewDropdownValues?(0,onboarding.Y9)(t):(0,onboarding.Ug)(t);return(0,emotion_react_jsx_runtime_browser_esm.Y)("form",(0,tslib_es6.Cl)({"data-e2e":"register",onSubmit:function(e){e.stopPropagation(),e.preventDefault(),onSubmit&&onSubmit(e)},noValidate:!0},{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(FormGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Grid.A,(0,tslib_es6.Cl)({container:!0,columnSpacing:1.5},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CustomGrid,(0,tslib_es6.Cl)({item:!0,xs:12,sm:6},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{name:"firstName",control,defaultValue:"",rules:{required:!0},render:function(_a){var _b,_c=_a.field,ref=_c.ref,value=_c.value,rest=(0,tslib_es6.Tt)(_c,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,(0,tslib_es6.Cl)({error:Boolean(errors.firstName),label:t("join:firstName"),fullWidth:!0,inputRef:ref,value:value||""},rest)),(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledFormHelperText,(0,tslib_es6.Cl)({error:!0},{children:t(null===(_b=errors.firstName)||void 0===_b?void 0:_b.message)||" "}))]})}})})})),(0,emotion_react_jsx_runtime_browser_esm.Y)(CustomGrid,(0,tslib_es6.Cl)({item:!0,xs:12,sm:6},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{name:"lastName",control,defaultValue:"",rules:{required:!0},render:function(_a){var _b,_c=_a.field,ref=_c.ref,value=_c.value,rest=(0,tslib_es6.Tt)(_c,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,(0,tslib_es6.Cl)({error:Boolean(errors.lastName),label:t("join:lastName"),fullWidth:!0,inputRef:ref,value:value||""},rest)),(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledFormHelperText,(0,tslib_es6.Cl)({error:!0},{children:t(null===(_b=errors.lastName)||void 0===_b?void 0:_b.message)||" "}))]})}})})}))]})),(0,emotion_react_jsx_runtime_browser_esm.Y)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{name:"email",control,defaultValue:"",rules:{required:!0},render:function(_a){var _b,_c=_a.field,ref=_c.ref,value=_c.value,rest=(0,tslib_es6.Tt)(_c,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,(0,tslib_es6.Cl)({},rest,{error:Boolean(errors.email),label:t("join:email"),fullWidth:!0,inputRef:ref,value:value||"",type:"email",onBlur:function(){return onBlur&&onBlur("email")}})),(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledFormHelperText,(0,tslib_es6.Cl)({error:!0},{children:t(null===(_b=errors.email)||void 0===_b?void 0:_b.message)||" "}))]})}})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{name:"password",control,defaultValue:"",rules:{required:!0},render:function(_a){var _b,_c=_a.field,ref=_c.ref,value=_c.value,rest=(0,tslib_es6.Tt)(_c,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,(0,tslib_es6.Cl)({},rest,{type:"password",error:Boolean(errors.password),label:t("join:password"),fullWidth:!0,inputRef:ref,value:value||"",onBlur:function(){return onBlur&&onBlur("password")}})),(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledFormHelperText,(0,tslib_es6.Cl)({error:Boolean(errors.password)},{children:t(null===(_b=errors.password)||void 0===_b?void 0:_b.message)||" "}))]})}})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{name:"shipment_volume",control,render:function(_a){var _b,_c=_a.field,ref=_c.ref,value=_c.value,rest=(0,tslib_es6.Tt)(_c,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.FD)(FormControl.A,(0,tslib_es6.Cl)({fullWidth:!0},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(InputLabel.A,(0,tslib_es6.Cl)({id:"shipment-volume-label"},{children:t(hasNewDropdownValues?"join:onboarding.join.anticipatedShipping":"join:onboarding.join.shipmentFields")})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Select.A,(0,tslib_es6.Cl)({sx:{borderRadius:shippoTheme.A.spacing(1)},labelId:"shipment-volume-label",id:"shipment-volume",label:t(hasNewDropdownValues?"join:onboarding.join.anticipatedShipping":"join:onboarding.join.shipmentFields"),fullWidth:!0,inputRef:ref,error:Boolean(errors.shipment_volume),value:value||"","data-testid":"Input-shipment-volume-input"},rest,{IconComponent:ExpandMore.A},{children:volumeOptions.map((function(option){return(0,emotion_react_jsx_runtime_browser_esm.Y)(MenuItem.A,(0,tslib_es6.Cl)({value:option.value},{children:option.label}),option.value)}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledFormHelperText,(0,tslib_es6.Cl)({error:!0},{children:t(null===(_b=errors.shipment_volume)||void 0===_b?void 0:_b.message)||" "}))]}))}})}),"",(0,emotion_react_jsx_runtime_browser_esm.FD)(FormInput,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Button.A,(0,tslib_es6.Cl)({variant:"contained",color:"primary",type:"submit",disabled:!isValid||submitting,fullWidth:!0},{children:[t(submitting?"join:onboarding.join.formSubmitting":"join:signUp")," "]})),termsAndPrivacy]})]})}))},Helmet=__webpack_require__("./node_modules/react-helmet/lib/Helmet.js"),common=__webpack_require__("./app/pages/Auth/common/common.tsx"),Link=__webpack_require__("./app/components/Link/index.ts"),useSearchQueryParams=__webpack_require__("./app/pages/Orders/Blackbeard/hooks/hooks/useSearchQueryParams.ts"),Marketo=__webpack_require__("./app/components/Marketo/index.tsx"),useSignupForm=__webpack_require__("./app/pages/Auth/Register/hooks/useSignupForm.ts"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),termsAndPrivacyLink=function(t,trans){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Link.ic,(0,tslib_es6.Cl)({href:"".concat("https://dev-qa.shippodev.com","/").concat(trans),rel:"noreferrer noopener",target:"_blank",tabIndex:-1,hideUnderline:!0},{children:t(trans)}))},googleTermsAndPrivacyLink=function(t,trans){var googleURL="https://policies.google.com/".concat(trans.split("google")[1].toLowerCase());return(0,emotion_react_jsx_runtime_browser_esm.Y)(Link.ic,(0,tslib_es6.Cl)({href:googleURL,rel:"noreferrer noopener",target:"_blank",tabIndex:-1,hideUnderline:!0},{children:t(trans)}))},RegisterIframe=function(_a){var t=_a.t,_b=(0,useSignupForm.C)(),control=_b.control,formState=_b.formState,recaptchaRef=_b.recaptchaRef,submitting=_b.submitting,finishRegister=_b.finishRegister,next=_b.next,sessionToken=_b.sessionToken,onBlur=_b.onBlur,handleSubmit=_b.handleSubmit,recaptchaOnChange=_b.recaptchaOnChange,history=(0,react_router.W6)(),queryParams=(0,useSearchQueryParams.i)().queryParams,bgColor=queryParams?queryParams.bg:"",getStarted=(0,emotion_react_jsx_runtime_browser_esm.Y)("em",{children:t("signUp")}),termsAndPrivacy=(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledTerms,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(translate.In,{i18nKey:"termsAndPolicyIframe",terms:termsAndPrivacyLink(t,"terms"),privacy:termsAndPrivacyLink(t,"privacy"),googleTerms:googleTermsAndPrivacyLink(t,"googleTerms"),googlePrivacy:googleTermsAndPrivacyLink(t,"googlePrivacy"),start:getStarted})});if(finishRegister){var proxy="/register-success-proxy?session_token=".concat(sessionToken,"&next=").concat(next);return window.self!==window.top?window.parent.location.href="".concat(window.self.location.origin).concat(proxy):history.push(proxy),null}return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Helmet.m,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("title",{children:t("join:onboarding.join.seoTitle")}),(0,emotion_react_jsx_runtime_browser_esm.Y)("meta",{name:"description",content:t("join:onboarding.join.seoDescription")}),(0,emotion_react_jsx_runtime_browser_esm.Y)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Rethink+Sans:regular,700",media:"all"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("style",(0,tslib_es6.Cl)({type:"text/css"},{children:"#onetrust-consent-sdk { display: none!important }"}))]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(FlexWrapper,(0,tslib_es6.Cl)({bgColor},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(common.xE,(0,tslib_es6.Cl)({"data-e2e":"register"},{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({spacing:1,style:{marginBottom:shippoTheme.A.spacing(2),alignItems:"center"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RegisterForm,{t,control,formState,recaptchaRef,submitting,onSubmit:handleSubmit,onBlur,recaptchaOnChange,termsAndPrivacy}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Marketo.A,{id:"mktoForm_1194"})]}))}))}))]})},es=__webpack_require__("./node_modules/react-redux/es/index.js"),utils=__webpack_require__("./app/tests/utils.ts"),auth=__webpack_require__("./app/reducers/auth/index.ts");const RegisterIframe_stories={title:"Onboarding / RegisterIframe",component:RegisterIframe,argTypes:{},parameters:{backgrounds:{default:"grey"}},layout:"fullscreen"};var RegisterIframeWithTranslate=(0,translate.Tl)(["join","validations","onboarding"])(RegisterIframe),store=(0,utils.M6)({auth:auth.A}),Regular=function(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(react_router.fS,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(es.Kq,(0,tslib_es6.Cl)({store},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(RegisterIframeWithTranslate,{})}))})}.bind({});Regular.args={},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"() => <MemoryRouter>\n    <Provider store={store}>\n      <RegisterIframeWithTranslate />\n    </Provider>\n  </MemoryRouter>",...Regular.parameters?.docs?.source}}}}}]);