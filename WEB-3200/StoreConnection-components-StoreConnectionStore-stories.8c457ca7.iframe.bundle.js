"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5686],{"./app/components/SnackbarAlert/SnackbarAlert.tsx":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/NoticeAlert/index.js")},"./app/components/SnackbarAlert/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/react/index.js")},"./app/contexts/GlobalComponentsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useGlobalComponentsContext});__webpack_require__("./app/components/SnackbarAlert/SnackbarAlert.tsx"),__webpack_require__("./app/components/SnackbarAlert/hooks.ts");var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),GlobalComponentsContext=(__webpack_require__("./app/utils/translate.ts"),__webpack_require__("./node_modules/react-redux/es/index.js"),(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({snackbar:{addSnackbarAlert:function(){},addSnackbarActionAlert:function(){}}})),useGlobalComponentsContext=function(){return{snackbar:(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(GlobalComponentsContext).snackbar}}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/components/StoreConnection/components/StoreConnectionStore.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Amazon:()=>Amazon,Etsy:()=>Etsy,Shopify:()=>Shopify,Walmart:()=>Walmart,Wix:()=>Wix,default:()=>StoreConnectionStore_stories});var _a,emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),ArrowBack=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowBack.js"),ArrowForward=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowForward.js"),grid_line=__webpack_require__("./app/assets/grid_line.svg"),grid_line_default=__webpack_require__.n(grid_line),translate=__webpack_require__("./app/utils/translate.ts"),GridBackground=(0,styled.Ay)(Box.A)({backgroundImage:"url(".concat(grid_line_default(),")"),backgroundSize:"940px",backgroundColor:"#25d695"}),StyledHeaderTypography=(0,styled.Ay)(Typography.A)(((_a={fontSize:"1.75rem",lineHeight:"120%"})[shippoTheme.A.breakpoints.up("sm")]={fontSize:"2.5rem"},_a)),StyledFooter=(0,styled.Ay)(Box.A)({borderTop:"1px solid #d9d9d9",boxShadow:"0 -4px 4px rgba(0, 0, 0, 0.08)"});var TranslatedStoreConnectionHeader=(0,translate.Tl)("stores")((function StoreConnectionHeader(_a){var t=_a.t;return(0,emotion_react_jsx_runtime_browser_esm.Y)(GridBackground,(0,tslib_es6.Cl)({gridArea:"header",display:"flex",justifyContent:{xs:"center",sm:"flex-start"},padding:{xs:shippoTheme.A.spacing(3,1),sm:shippoTheme.A.spacing(5,10)}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledHeaderTypography,(0,tslib_es6.Cl)({component:"h1",variant:"h1"},{children:t("connections.header")}))}))}));var TranslatedStoreConnectionFooter=(0,translate.Tl)("stores")((function StoreConnectionFooter(_a){var t=_a.t,onBack=_a.onBack,onContinue=_a.onContinue;return(0,emotion_react_jsx_runtime_browser_esm.FD)(StyledFooter,(0,tslib_es6.Cl)({gridArea:"footer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:shippoTheme.A.spacing(2),padding:{xs:shippoTheme.A.spacing(1.5,1),lg:shippoTheme.A.spacing(1.5,10)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({variant:"text",size:"large",onClick:onBack,startIcon:(0,emotion_react_jsx_runtime_browser_esm.Y)(ArrowBack.A,{}),sx:{minWidth:{sm:shippoTheme.A.spacing(20)}}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"span",variant:"bodyEmphasized",color:"inherit"},{children:t("connections.buttons.back")}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({color:"primary",size:"large",onClick:onContinue,endIcon:(0,emotion_react_jsx_runtime_browser_esm.Y)(ArrowForward.A,{}),sx:{minWidth:{sm:shippoTheme.A.spacing(20)}}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"span",variant:"bodyEmphasized",color:"inherit"},{children:t("connections.buttons.continue")}))}))]}))}));function StoreConnectionContent(_a){var children=_a.children;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({gridArea:"main",overflow:"auto",padding:{xs:shippoTheme.A.spacing(3,2),sm:shippoTheme.A.spacing(7,2)}},{children}))}function StoreConnectionLayout(_a){var children=_a.children;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({display:"grid",height:"100%",gridTemplateRows:"auto 1fr auto",gridTemplateAreas:"'header' 'main' 'footer'"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TranslatedStoreConnectionHeader,{}),children]}))}var index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),Link=__webpack_require__("./node_modules/@goshippo/components/esm/Link/Link.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js");var CountryField=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/CountryField/index.js"),countries=__webpack_require__("./app/constants/countries.ts");var FormFieldMap={input:function StoreConnectionFormInput(_a){var t=_a.t,_b=_a.fieldConfig,name=_b.name,defaultValue=_b.defaultValue,label=_b.label,placeholder=_b.placeholder,errorText=_b.errorText,_c=_b.inputType,inputType=void 0===_c?"text":_c,control=(0,index_esm.xW)().control;return(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{name,control,defaultValue,rules:{required:t(errorText)},render:function(_a){var _b,_c=_a.field,ref=_c.ref,fieldProps=(0,tslib_es6.Tt)(_c,["ref"]),formState=_a.formState;return(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,(0,tslib_es6.Cl)({fullWidth:!0,inputRef:ref,label:t(label),type:inputType,placeholder:t(placeholder),error:Boolean(formState.errors[name]),helperText:null===(_b=formState.errors[name])||void 0===_b?void 0:_b.message},fieldProps))}})},country:function StoreConnectionCountryInput(_a){var t=_a.t,_b=_a.fieldConfig,name=_b.name,defaultValue=_b.defaultValue,label=_b.label,errorText=_b.errorText,control=(0,index_esm.xW)().control;return(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.xI,{rules:{required:t(errorText)},name,control,defaultValue,render:function(_a){var _b,_c=_a.field,ref=_c.ref,value=_c.value,onChange=_c.onChange,fieldProps=(0,tslib_es6.Tt)(_c,["ref","value","onChange"]),formState=_a.formState;return(0,emotion_react_jsx_runtime_browser_esm.Y)(CountryField.Ay,(0,tslib_es6.Cl)({},fieldProps,{inputRef:ref,name,formBaseName:"",label:t(label),value:countries.Xr[value]||void 0,onChange:function(country){return onChange(null==country?void 0:country.iso2)},defaultCountry:defaultValue?countries.Xr[defaultValue]:void 0,error:Boolean(formState.errors[name]),helperText:null===(_b=formState.errors[name])||void 0===_b?void 0:_b.message}))}})}};function StoreConnectionForm(_a){var t=_a.t,inputFields=_a.inputFields,onSubmit=_a.onSubmit;return(null==inputFields?void 0:inputFields.length)?(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({mt:shippoTheme.A.spacing(1)},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("form",(0,tslib_es6.Cl)({onSubmit},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({display:"flex",flexDirection:"column",gap:shippoTheme.A.spacing(4)},{children:inputFields.map((function(inputField){var InputComponent=FormFieldMap[inputField.type];return(0,emotion_react_jsx_runtime_browser_esm.Y)(InputComponent,{t,fieldConfig:inputField},inputField.name)}))}))}))})):null}function renderDescriptionComponents(components,t){return void 0===components&&(components=[]),components.map((function(_a){var key=_a.key,type=_a.type,href=_a.href,label=_a.label;if("link"===type)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Link.A,(0,tslib_es6.Cl)({target:"_blank",color:"primary",href},{children:t(label)}),key)}))}var TranslatedStoreConnectionStore=(0,translate.Tl)("stores")((function StoreConnectionStore(_a){var t=_a.t,onSubmit=_a.onSubmit,_b=_a.store,logo=_b.logo,name=_b.name,description=_b.description,inputFields=_b.inputFields,descriptionComponents=_b.descriptionComponents;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({flexDirection:"column",gap:shippoTheme.A.spacing(3)},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Stack.A,(0,tslib_es6.Cl)({justifyContent:"center",alignItems:"center",height:shippoTheme.A.spacing(9)},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:logo,alt:name})})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({variant:"body",component:"p",whiteSpace:"pre-line"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(translate.x6,{i18nKey:description,components:(0,tslib_es6.fX)([(0,emotion_react_jsx_runtime_browser_esm.Y)("i",{children:t("connections.buttons.continue")},"continue")],(0,tslib_es6.zs)(renderDescriptionComponents(descriptionComponents||[],t)),!1)})})),(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionForm,{t,inputFields,onSubmit})]}))})),GlobalComponentsProvider=__webpack_require__("./app/contexts/GlobalComponentsProvider.tsx"),store_connect_service=__webpack_require__("./app/services/store-connect.service.ts");var StoreConnectionView_a,tracking=__webpack_require__("./app/pages/Onboarding/utils/tracking.ts"),types=__webpack_require__("./app/pages/Onboarding/types.ts"),onboarding=__webpack_require__("./app/pages/Onboarding/utils/onboarding.ts"),StoreConnectionCard=(0,styled.Ay)(Box.A)(((StoreConnectionView_a={borderRadius:shippoTheme.A.spacing(2),padding:shippoTheme.A.spacing(3,2,5),border:"1px solid ".concat(colors.T.borders),width:shippoTheme.A.spacing(75),maxWidth:"100%",margin:"0 auto",boxSizing:"border-box"})[shippoTheme.A.breakpoints.up("sm")]={padding:shippoTheme.A.spacing(3,5,5)},StoreConnectionView_a));var TranslatedStoreConnectionView=(0,translate.Tl)("stores")((function StoreConnectionView(_a){var _this=this,t=_a.t,store=_a.store,history=(0,react_router.W6)(),storeConnectionForm=(0,index_esm.mN)({mode:"onBlur"}),startStoreConnection=function useStoreConnectionSetup(_a){var _this=this,t=_a.t,addSnackbarAlert=(0,GlobalComponentsProvider.s)().snackbar.addSnackbarAlert;return{startStoreConnection:function(store,params,beforeRedirect,handleRedirect){return(0,tslib_es6.sH)(_this,void 0,void 0,(function(){var name,_a,setupService,redirectUrl,error_1,message,_b,_c;return(0,tslib_es6.YH)(this,(function(_d){switch(_d.label){case 0:name=store.name,_a=store.setupService,setupService=void 0===_a?store_connect_service.$:_a,_d.label=1;case 1:return _d.trys.push([1,5,,6]),[4,setupService(name.toLowerCase(),params)];case 2:return redirectUrl=_d.sent().data.redirectUrl,beforeRedirect?[4,beforeRedirect()]:[3,4];case 3:_d.sent(),_d.label=4;case 4:return handleRedirect&&handleRedirect(redirectUrl)?[2]:(window.location.href=redirectUrl,[3,6]);case 5:return error_1=_d.sent(),message=(null===(_c=null===(_b=error_1.response)||void 0===_b?void 0:_b.data)||void 0===_c?void 0:_c.error)||"CATCH_ALL",addSnackbarAlert(t("connections.errors.".concat(message),{store:name}),"error"),[3,6];case 6:return[2]}}))}))}}}({t}).startStoreConnection,handleFormSubmit=storeConnectionForm.handleSubmit((function(fieldValues){return(0,tslib_es6.sH)(_this,void 0,void 0,(function(){var _this=this;return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return[4,startStoreConnection(store,fieldValues,(function(){return(0,tslib_es6.sH)(_this,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return[4,(0,tracking.tb)("connect_store","connect_store",(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},(0,tracking.YF)(types.Ar.connectStore)),{current_step_name:"onboarding.".concat(store.name,"Connect")}))];case 1:return _a.sent(),[4,(0,tracking.IA)("".concat(store.name," Connection"))];case 2:return _a.sent(),(0,onboarding.pt)(),[2]}}))}))}))];case 1:return _a.sent(),[2]}}))}))}));return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionContent,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionCard,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.Op,(0,tslib_es6.Cl)({},storeConnectionForm,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TranslatedStoreConnectionStore,{store,onSubmit:handleFormSubmit})}))})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TranslatedStoreConnectionFooter,{onBack:history.goBack,onContinue:handleFormSubmit})]})})),stores=__webpack_require__("./app/components/StoreConnection/stores.ts");const StoreConnectionStore_stories={title:"Store Connection/Stores",component:TranslatedStoreConnectionView,parameters:{layout:"fullscreen"},render:function(_a){var store=_a.store;return(0,emotion_react_jsx_runtime_browser_esm.Y)(react_router.fS,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionLayout,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TranslatedStoreConnectionView,{store})})})}};var Shopify={args:{store:stores.aW.Shopify}},Amazon={args:{store:stores.aW.Amazon}},Wix={args:{store:stores.aW.Wix}},Etsy={args:{store:stores.aW.Etsy}},Walmart={args:{store:stores.aW.Walmart}};Shopify.parameters={...Shopify.parameters,docs:{...Shopify.parameters?.docs,source:{originalSource:"{\n  args: {\n    store: StoreConnectionsConfigurations.Shopify\n  }\n}",...Shopify.parameters?.docs?.source}}},Amazon.parameters={...Amazon.parameters,docs:{...Amazon.parameters?.docs,source:{originalSource:"{\n  args: {\n    store: StoreConnectionsConfigurations.Amazon\n  }\n}",...Amazon.parameters?.docs?.source}}},Wix.parameters={...Wix.parameters,docs:{...Wix.parameters?.docs,source:{originalSource:"{\n  args: {\n    store: StoreConnectionsConfigurations.Wix\n  }\n}",...Wix.parameters?.docs?.source}}},Etsy.parameters={...Etsy.parameters,docs:{...Etsy.parameters?.docs,source:{originalSource:"{\n  args: {\n    store: StoreConnectionsConfigurations.Etsy\n  }\n}",...Etsy.parameters?.docs?.source}}},Walmart.parameters={...Walmart.parameters,docs:{...Walmart.parameters?.docs,source:{originalSource:"{\n  args: {\n    store: StoreConnectionsConfigurations.Walmart\n  }\n}",...Walmart.parameters?.docs?.source}}}}}]);