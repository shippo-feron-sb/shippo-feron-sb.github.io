"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4499],{"./app/pages/StoreConnections/store/store-connect.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var StoreConnectActionKeys;function fetchStoreConnectUrl(params){return{type:StoreConnectActionKeys.STORE_CONNECT_URL_FETCH,payload:{params}}}function fetchStoreConnectUrlSuccess(redirectUrl,queryString){return{type:StoreConnectActionKeys.STORE_CONNECT_URL_FETCH_SUCCESS,payload:{redirectUrl,queryString}}}function fetchStoreConnectUrlError(error){return{type:StoreConnectActionKeys.STORE_CONNECT_URL_FETCH_ERROR,payload:{error}}}__webpack_require__.d(__webpack_exports__,{UK:()=>StoreConnectActionKeys,Vd:()=>fetchStoreConnectUrl,_f:()=>fetchStoreConnectUrlSuccess,jW:()=>fetchStoreConnectUrlError}),function(StoreConnectActionKeys){StoreConnectActionKeys.START_STORE_CONNECT="START_STORE_CONNECT",StoreConnectActionKeys.STORE_CONNECT_URL_FETCH="STORE_CONNECT_URL_FETCH",StoreConnectActionKeys.STORE_CONNECT_URL_FETCH_SUCCESS="STORE_CONNECT_URL_FETCH_SUCCESS",StoreConnectActionKeys.STORE_CONNECT_URL_FETCH_ERROR="STORE_CONNECT_URL_FETCH_ERROR",StoreConnectActionKeys.STORE_CONNECT_DISMISS_ERROR="STORE_CONNECT_DISMISS_ERROR"}(StoreConnectActionKeys||(StoreConnectActionKeys={}))},"./app/services/stores.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CF:()=>fetchLegacyStores,UW:()=>editStore,hO:()=>fetchStores,yw:()=>disconnectStore});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_services_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/services/api.ts"),_utils_humps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/utils/humps.ts");function fetchStores(){return _services_api__WEBPACK_IMPORTED_MODULE_0__.Ay.get("ui/stores?connected=True&results=50")}function fetchLegacyStores(){return _services_api__WEBPACK_IMPORTED_MODULE_0__.Ay.get("ui/shops")}function disconnectStore(storeName,objectId){return _services_api__WEBPACK_IMPORTED_MODULE_0__.Ay.post("ui/stores/disconnect",{store_name:storeName,object_id:objectId})}function editStore(store){return _services_api__WEBPACK_IMPORTED_MODULE_0__.Ay.put("ui/stores/".concat(store.objectId),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},(0,_utils_humps__WEBPACK_IMPORTED_MODULE_2__.I)(store)))}},"./app/utils/featureflags/FeatureFlagsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U2:()=>optimizelyClient});__webpack_require__("./node_modules/react/index.js");var react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js"),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.wd("[Optimizely] ".concat(null==error?void 0:error.message))}},optimizelyClient=(0,react_sdk.Q_)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3})},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gH:()=>FeatureFlags,u:()=>useFeatureFlag});var DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},SHOW_DUPLICATE_ORDERS:{name:"show_duplicate_orders",variationType:VariationTypes.A_B_TESTING},NEW_RETURNS_WORKFLOW:{name:"new_returns_workflow",variationType:VariationTypes.A_B_TESTING},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT},ORDER_TAG_MVP:{name:"order_tag_mvp",variationType:VariationTypes.ROLLOUT},FEDEX_NEW_API_ENABLED:{name:"fedex_new_api_enabled_ui",variationType:VariationTypes.ROLLOUT},PORTAL_REDIRECT:{name:"portal_redirect",variationType:VariationTypes.ROLLOUT},RATES_BEST_OPTION:{name:"rates_best_option",variationType:VariationTypes.A_B_TESTING},IMPROVED_REFUNDS:{name:"improved_refunds",variationType:VariationTypes.ROLLOUT},TEAMS_ENHANCEMENT:{name:"teams_enhancement",variationType:VariationTypes.ROLLOUT},PACKAGE_DIMENSIONS_RECALCULATION:{name:"package_dimensions_recalculation",variationType:VariationTypes.ROLLOUT},STORE_CONNECTION_SIDE_PANEL:{name:"store_connection_sidepanel",variationType:VariationTypes.ROLLOUT},NEW_INSURANCE_PAGE:{name:"new_insurance_page",variationType:VariationTypes.ROLLOUT},API_PLAN:{name:"api_plan_ui",variationType:VariationTypes.ROLLOUT},SHIPMENTS_PACKING_SLIP:{name:"shipments_packing_slip",variationType:VariationTypes.ROLLOUT},STORE_CONNECTION_ONBOARDING_POPULAR:{name:"store_connection_onboarding_popular",variationType:VariationTypes.ROLLOUT},NEW_STORE_SETTINGS_PAGE:{name:"new_store_settings_page",variationType:VariationTypes.ROLLOUT},OPEN_ORDER_DRAWER_ON_BACK:{name:"open_order_drawer_on_back",variationType:VariationTypes.ROLLOUT},SPLIT_ORDER_NO_ITEMS:{name:"split_order_no_items",variationType:VariationTypes.ROLLOUT}},tslib_es6=(__webpack_require__("./app/utils/featureflags/FeatureFlagsProvider.tsx"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js");function useFeatureFlag(featureFlag,options){var _a=(0,tslib_es6.zs)((0,react_sdk.A2)(featureFlag.name,{autoUpdate:!0,decideOptions:(null==options?void 0:options.blockEvent)?[react_sdk.kn.DISABLE_DECISION_EVENT]:[]}),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}},"./app/utils/humps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>decamelizeKeys,b:()=>camelizeKeys});var camelize=function(string){return obj=string,(obj-=0)==obj?string:(string=string.replace(/[-_\s]+(.)?/g,(function(_match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1);var obj},decamelize=function(string,options){return function(string,options){var separator=(options=options||{}).separator||"_",split=options.split||/(?=[A-Z])/;return string.split(split).join(separator)}(string,options).toLowerCase()},_processKeys=function(convert,obj,options){if(!function(obj){return obj===Object(obj)}(obj)||function(obj){return"[object Date]"===toString.call(obj)}(obj)||function(obj){return"[object RegExp]"===toString.call(obj)}(obj)||function(obj){return"[object Boolean]"===toString.call(obj)}(obj)||function(obj){return"function"==typeof obj}(obj))return obj;var output,i=0,l=0;if(function(obj){return"[object Array]"===toString.call(obj)}(obj))for(output=[],l=obj.length;i<l;i++)output.push(_processKeys(convert,obj[i],options));else for(var key in output={},obj)Object.prototype.hasOwnProperty.call(obj,key)&&(output[convert(key,options)]=_processKeys(convert,obj[key],options));return output},_processor=function(convert,options){var callback=options&&"process"in options?options.process:options;return"function"!=typeof callback?convert:function(string,options){return callback(string,convert,options)}},camelizeKeys=function(object,options){return _processKeys(_processor(camelize,options),object,options)},decamelizeKeys=function(object,options){return _processKeys(_processor(decamelize,options),object,options)}},"./app/pages/Onboarding/components/OnboardingLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddYourOrder:()=>AddYourOrder,ChoosePlan:()=>ChoosePlan,default:()=>OnboardingLayout_stories});var templateObject_1,OnboardingFooter_templateObject_1,OnboardingLayout_templateObject_1,templateObject_2,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),grid_line=__webpack_require__("./app/assets/grid_line.svg"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),StyledHeaderBoxContainer=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  background-image: url(",");\n  background-size: 1632px 4650px;\n  background-color: #25d695;\n  flex: 0 0 ",";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  .header {\n    margin-left: ",";\n  }\n  "," {\n    height: ",";\n    justify-content: center;\n    .header {\n      font-size: ",";\n      margin-left: ",";\n    }\n  }\n"],["\n  background-image: url(",");\n  background-size: 1632px 4650px;\n  background-color: #25d695;\n  flex: 0 0 ",";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  .header {\n    margin-left: ",";\n  }\n  "," {\n    height: ",";\n    justify-content: center;\n    .header {\n      font-size: ",";\n      margin-left: ",";\n    }\n  }\n"])),grid_line,shippoTheme.A.spacing(16),shippoTheme.A.spacing(10),shippoTheme.A.breakpoints.down("sm"),shippoTheme.A.spacing(10),shippoTheme.A.typography.h6,shippoTheme.A.spacing(0)),OnboardingHeader=function(_a){var header=_a.header;return(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledHeaderBoxContainer,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h1",variant:"h1",className:"header"},{children:header}))})},react=__webpack_require__("./node_modules/react/index.js"),OnboardingContext=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/pages/Onboarding/types.ts"),__webpack_require__("./app/constants/stores.ts"),__webpack_require__("./app/pages/StoreConnections/store/store-connect.actions.ts"),__webpack_require__("./app/pages/Onboarding/utils/onboarding.ts"),__webpack_require__("./app/pages/Onboarding/utils/tracking.ts"),__webpack_require__("./app/services/stores.service.ts"),__webpack_require__("./app/utils/featureflags/index.ts"),__webpack_require__("./app/components/StoreConnection/stores.ts"),(0,react.createContext)(null)),FooterContainer=(0,emotion_styled_browser_esm.A)(Box.A)(OnboardingFooter_templateObject_1||(OnboardingFooter_templateObject_1=(0,tslib_es6.ue)(["\n  flex: 0 0 ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ",";\n  border-top: 1px solid #d9d9d9;\n  box-shadow: 0px -4px 4px 0px #00000014;\n  "," {\n    padding: 0 ",";\n  }\n"],["\n  flex: 0 0 ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ",";\n  border-top: 1px solid #d9d9d9;\n  box-shadow: 0px -4px 4px 0px #00000014;\n  "," {\n    padding: 0 ",";\n  }\n"])),shippoTheme.A.spacing(9.875),shippoTheme.A.spacing(5),shippoTheme.A.breakpoints.down("lg"),shippoTheme.A.spacing(1)),OnboardingFooter=function(_a){var footerActions=_a.footerActions;return(0,emotion_react_jsx_runtime_browser_esm.Y)(FooterContainer,{children:null==footerActions?void 0:footerActions.map((function(action,index){return(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,{children:action},index)}))})},StyledContainer=(0,emotion_styled_browser_esm.A)(Box.A)(OnboardingLayout_templateObject_1||(OnboardingLayout_templateObject_1=(0,tslib_es6.ue)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"],["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"]))),MainContent=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  flex: 1 1 auto;\n  display: flex;\n  width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n"],["\n  flex: 1 1 auto;\n  display: flex;\n  width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n"]))),OnboardingLayout=function(props){var _a=function(){var context=(0,react.useContext)(OnboardingContext);if(!context)throw new Error("OnboardingContext is not defined");return context}(),header=_a.header,footerActions=_a.footerActions,containerStyle=_a.containerStyle,children=props.children;return(0,emotion_react_jsx_runtime_browser_esm.FD)(StyledContainer,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(OnboardingHeader,{header}),(0,emotion_react_jsx_runtime_browser_esm.Y)(MainContent,(0,tslib_es6.Cl)({sx:(0,tslib_es6.Cl)({},containerStyle)},{children})),(0,emotion_react_jsx_runtime_browser_esm.Y)(OnboardingFooter,{footerActions:footerActions||[]})]})},Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),ArrowBack=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowBack.js"),ArrowForward=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowForward.js");const OnboardingLayout_stories={title:"Onboarding / Layout",component:OnboardingLayout,argTypes:{onBack:{action:"onBack"},onNext:{action:"onNext"}},parameters:{layout:"fullscreen",backgrounds:{default:"grey"}}};var AddYourOrderContextValues={header:"Add your orders",containerStyle:{display:"flex",justifyContent:"center",alignItems:"center"},footerActions:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Button.A,(0,tslib_es6.Cl)({size:"large",sx:{fontSize:"0.9rem"},variant:"text"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(ArrowBack.A,{sx:{marginRight:shippoTheme.A.spacing(1)}}),"Back"]}),"1"),(0,emotion_react_jsx_runtime_browser_esm.FD)(Button.A,(0,tslib_es6.Cl)({size:"large",sx:{fontSize:"0.9rem",width:shippoTheme.A.spacing(20)},variant:"contained"},{children:["Next",(0,emotion_react_jsx_runtime_browser_esm.Y)(ArrowForward.A,{sx:{marginLeft:shippoTheme.A.spacing(1)}})]}),"2")],setHeader:function(){},setContainerStyle:function(){},setFooterActions:function(){},goToNextStep:function(){return new Promise((function(){}))},goToPreviousStep:function(){}},AddYourOrder=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OnboardingContext.Provider,(0,tslib_es6.Cl)({value:AddYourOrderContextValues},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OnboardingLayout,(0,tslib_es6.Cl)({},args,{children:"Hello world"}))}))}.bind({}),ChoosePlanContextValues={header:"Choose plan",containerStyle:{display:"flex",justifyContent:"center",alignItems:"center"},footerActions:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({href:"https://www.shippo.com/pricing/",size:"large",sx:{fontSize:"0.9rem"},target:"_blank",variant:"text"},{children:"Learn more"}),"1"),(0,emotion_react_jsx_runtime_browser_esm.FD)(Button.A,(0,tslib_es6.Cl)({size:"large",sx:{fontSize:"0.9rem",width:shippoTheme.A.spacing(20)},variant:"contained"},{children:["Next",(0,emotion_react_jsx_runtime_browser_esm.Y)(ArrowForward.A,{sx:{marginLeft:shippoTheme.A.spacing(1)}})]}),"2")],setHeader:function(){},setContainerStyle:function(){},setFooterActions:function(){},goToNextStep:function(){return new Promise((function(){}))},goToPreviousStep:function(){}},ChoosePlan=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OnboardingContext.Provider,(0,tslib_es6.Cl)({value:ChoosePlanContextValues},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OnboardingLayout,(0,tslib_es6.Cl)({},args,{children:"Hello world"}))}))}.bind({});AddYourOrder.parameters={...AddYourOrder.parameters,docs:{...AddYourOrder.parameters?.docs,source:{originalSource:"(args: OnboardingLayoutProps) => <OnboardingContext.Provider value={AddYourOrderContextValues}>\n    <OnboardingLayout {...args}>Hello world</OnboardingLayout>\n  </OnboardingContext.Provider>",...AddYourOrder.parameters?.docs?.source}}},ChoosePlan.parameters={...ChoosePlan.parameters,docs:{...ChoosePlan.parameters?.docs,source:{originalSource:"(args: OnboardingLayoutProps) => <OnboardingContext.Provider value={ChoosePlanContextValues}>\n    <OnboardingLayout {...args}>Hello world</OnboardingLayout>\n  </OnboardingContext.Provider>",...ChoosePlan.parameters?.docs?.source}}}}}]);