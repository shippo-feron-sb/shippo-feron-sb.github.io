(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1248],{"./app/assets/grid_line.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"722c4c6134af8d7acf71b17232562aaa.svg"},"./app/assets/onboarding/developer-plan-icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"9e4c60fc819ae2569b06943ce2cfb1ba.svg"},"./app/assets/onboarding/pro-plan-icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"f0eae720f2fb571d3749ffb14d9b58eb.svg"},"./app/assets/onboarding/starter-plan-icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"d9f0e0dedc5648c22d17fa485791b3ef.svg"},"./app/components/StoreConnection/assets/amazon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"ebf2a7066a05c8e15178fac1fcafe9fe.svg"},"./app/components/StoreConnection/assets/bigcommerce.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"6e26e8c40ba5610f0e018c167c815661.svg"},"./app/components/StoreConnection/assets/etsy.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"a38888987f82e3d8de93ccd57a524ba2.svg"},"./app/components/StoreConnection/assets/magento2.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"656ca60bc08035bf0d6b7e0022930aa3.svg"},"./app/components/StoreConnection/assets/shopify.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"dcff3846f9a272b9e6c56d4682ed7eb7.svg"},"./app/components/StoreConnection/assets/square.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"3a7907ee6cf59a577726051283601216.svg"},"./app/components/StoreConnection/assets/squarespace.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"222c33c6b8166bbd2193e439eb1e6924.svg"},"./app/components/StoreConnection/assets/walmart.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"7864736d45a8637d728ece0855450982.svg"},"./app/components/StoreConnection/assets/wix.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"220264b45edfb5db09a4125675421b5a.svg"},"./app/components/StoreConnection/assets/woocommerce.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"fd95802894def90c818497801d35d1f2.svg"},"./app/components/StoreConnection/stores.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aW:()=>StoreConnectionsConfigurations,as:()=>popularStores,lN:()=>otherStores});var _a,_types_Store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/types/Store.ts"),_constants_countries__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/countries.ts"),_services_store_connect_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/services/store-connect.service.ts"),_utils_featureflags__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/utils/featureflags/index.ts"),_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/components/StoreConnection/assets/amazon.svg"),_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_4__),_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/components/StoreConnection/assets/bigcommerce.svg"),_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_5__),_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./app/components/StoreConnection/assets/etsy.svg"),_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_6__),_assets_magento2_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./app/components/StoreConnection/assets/magento2.svg"),_assets_magento2_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_magento2_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_square_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./app/components/StoreConnection/assets/square.svg"),_assets_square_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_square_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_woocommerce_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./app/components/StoreConnection/assets/woocommerce.svg"),_assets_woocommerce_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_woocommerce_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_squarespace_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./app/components/StoreConnection/assets/squarespace.svg"),_assets_squarespace_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_squarespace_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./app/components/StoreConnection/assets/shopify.svg"),_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./app/components/StoreConnection/assets/walmart.svg"),_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_wix_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./app/components/StoreConnection/assets/wix.svg"),_assets_wix_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_wix_svg__WEBPACK_IMPORTED_MODULE_13__),popularStores=[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.eBay,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix],otherStores=[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Magento_2,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Squarespace,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.WooCommerce],StoreConnectionsConfigurations=((_a={})[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify.toLowerCase()),logo:_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_11___default(),description:"connections.stores.shopify.description",inputFields:[{name:"shop",type:"input",defaultValue:"",label:"connections.stores.shopify.label",placeholder:"connections.stores.shopify.placeholder",errorText:"connections.stores.shopify.error"}]},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon.toLowerCase()),logo:_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_4___default(),description:"connections.stores.amazon.description",inputFields:[{name:"country",type:"country",defaultValue:_constants_countries__WEBPACK_IMPORTED_MODULE_1__.Xr.US.iso2,label:"connections.stores.amazon.label",errorText:"connections.stores.amazon.error"}]},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix.toLowerCase()),logo:_assets_wix_svg__WEBPACK_IMPORTED_MODULE_13___default(),description:"connections.stores.wix.description"},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy.toLowerCase()),logo:_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_6___default(),description:"connections.stores.etsy.description"},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square.toLowerCase()),logo:_assets_square_svg__WEBPACK_IMPORTED_MODULE_8___default(),description:"connections.stores.square.description",featureFlagName:_utils_featureflags__WEBPACK_IMPORTED_MODULE_3__.gH.SQUARE_STORE_CONNECTION.name},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Squarespace]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Squarespace,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Squarespace.toLowerCase()),logo:_assets_squarespace_svg__WEBPACK_IMPORTED_MODULE_10___default(),description:"connections.stores.squarespace.description",featureFlagName:_utils_featureflags__WEBPACK_IMPORTED_MODULE_3__.gH.SQUARESPACE_STORE_CONNECTION.name},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce.toLowerCase()),logo:_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_5___default(),description:"connections.stores.bigcommerce.description"},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Magento_2]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Magento_2,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Magento_2.toLowerCase()),serviceName:"magento2",setupService:_services_store_connect_service__WEBPACK_IMPORTED_MODULE_2__.DB,logo:_assets_magento2_svg__WEBPACK_IMPORTED_MODULE_7___default(),description:"connections.stores.magento2.description",featureFlagName:_utils_featureflags__WEBPACK_IMPORTED_MODULE_3__.gH.MAGENTO2_STORE_CONNECTION.name,inputFields:[{name:"storeUrl",type:"input",inputType:"url",defaultValue:"",label:"connections.stores.magento2.storeUrlLabel",errorText:"connections.stores.magento2.storeUrlError"},{name:"accessToken",type:"input",inputType:"password",defaultValue:"",label:"connections.stores.magento2.accessTokenLabel",errorText:"connections.stores.magento2.accessTokenError"}]},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart.toLowerCase()),setupService:_services_store_connect_service__WEBPACK_IMPORTED_MODULE_2__.L4,logo:_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_12___default(),description:"connections.stores.walmart.description",descriptionComponents:[{type:"link",key:"instructions",href:"https://support.goshippo.com/hc/en-us/articles/18991472509339-Connect-Your-Walmart-Store-to-Shippo",label:"connections.stores.walmart.descriptionLink"}],inputFields:[{name:"clientId",type:"input",defaultValue:"",label:"connections.stores.walmart.clientIdLabel",errorText:"connections.stores.walmart.clientIdError"},{name:"clientSecret",type:"input",inputType:"password",defaultValue:"",label:"connections.stores.walmart.clientSecretLabel",errorText:"connections.stores.walmart.clientSecretError"}]},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.WooCommerce]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.WooCommerce,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.WooCommerce.toLowerCase()),logo:_assets_woocommerce_svg__WEBPACK_IMPORTED_MODULE_9___default(),description:"connections.stores.woocommerce.description",featureFlagName:_utils_featureflags__WEBPACK_IMPORTED_MODULE_3__.gH.WOO_STORE_CONNECTION.name,inputFields:[{name:"store_url",type:"input",defaultValue:"",label:"connections.stores.woocommerce.label",placeholder:"connections.stores.woocommerce.placeholder",errorText:"connections.stores.woocommerce.error"}]},_a)},"./app/pages/Onboarding/components/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>PLANS,g:()=>DEFAULT_PLAN});var _assets_onboarding_starter_plan_icon_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/assets/onboarding/starter-plan-icon.svg"),_assets_onboarding_pro_plan_icon_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/assets/onboarding/pro-plan-icon.svg"),_assets_onboarding_developer_plan_icon_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/assets/onboarding/developer-plan-icon.svg"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/pages/Onboarding/types.ts"),_constants_plans__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/constants/plans.ts"),PLANS=[{id:_types__WEBPACK_IMPORTED_MODULE_3__.tz.starter,title:"join:onboarding.plans.starter.title",planCode:"PAYG 30 Label Limit",icon:_assets_onboarding_starter_plan_icon_svg__WEBPACK_IMPORTED_MODULE_0__,pricing:"join:onboarding.plans.starter.pricing",description:"join:onboarding.plans.starter.description",features:["join:onboarding.plans.starter.features.line1","join:onboarding.plans.starter.features.line2","join:onboarding.plans.starter.features.line3","join:onboarding.plans.starter.features.line4","join:onboarding.plans.starter.features.line5"]},{id:_types__WEBPACK_IMPORTED_MODULE_3__.tz.pro,title:"join:onboarding.plans.pro.title",planCode:_constants_plans__WEBPACK_IMPORTED_MODULE_4__.yf,icon:_assets_onboarding_pro_plan_icon_svg__WEBPACK_IMPORTED_MODULE_1__,pricing:"join:onboarding.plans.pro.pricing",description:"join:onboarding.plans.pro.description",features:["join:onboarding.plans.pro.features.line1","join:onboarding.plans.pro.features.line2","join:onboarding.plans.pro.features.line3","join:onboarding.plans.pro.features.line4","join:onboarding.plans.pro.features.line5"]},{id:_types__WEBPACK_IMPORTED_MODULE_3__.tz.api,title:"join:onboarding.plans.api.title",planCode:"API",icon:_assets_onboarding_developer_plan_icon_svg__WEBPACK_IMPORTED_MODULE_2__,pricing:"join:onboarding.plans.api.pricing",description:"join:onboarding.plans.api.description",description2:"join:onboarding.plans.api.description2",features:["join:onboarding.plans.api.features.line1","join:onboarding.plans.api.features.line2","join:onboarding.plans.api.features.line3"]}],DEFAULT_PLAN=PLANS[1]},"./app/pages/Onboarding/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ar:()=>ONBOARDING_STEP_NAMES,PA:()=>ONBOARDING_ROUTES,tz:()=>ONBOARDING_PLANS,us:()=>ONBOARDING_ORDER_IMPORT_METHODS});var ONBOARDING_ROUTES={plan:"/onboarding/plan",connectStore:"/onboarding/connect_store"},ONBOARDING_PLANS={starter:"PAYG-Standard",pro:"PRO",api:"API"},ONBOARDING_ORDER_IMPORT_METHODS={manual:"manual",csvImport:"csv_import"},ONBOARDING_STEP_NAMES={plan:"onboarding.ChoosePlan",addOrders:"onboarding.AddOrders",connectStore:"onboarding.ConnectStore"}},"./app/pages/Onboarding/utils/onboarding.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{pt:()=>clearOnboardingLocalStorage,zZ:()=>getOnboardingMonthlyVolume,kr:()=>getOnboardingSelectedPlan,U_:()=>setOnboardingInProgress,Zc:()=>setOnboardingMonthlyVolume});var _a,onboarding=__webpack_require__("./app/constants/onboarding.ts"),types=__webpack_require__("./app/pages/Onboarding/types.ts"),setOnboardingInProgress=((_a={})[types.PA.plan]=[types.PA.connectStore,"/settings/api"],_a[types.PA.connectStore]=[types.PA.plan,"/orders/create","/orders/csv-import"],function(value){localStorage.setItem("onboarding_in_progress",value.toString())}),getOnboardingSelectedPlan=function(){return localStorage.getItem("onboarding_selected_plan")},clearOnboardingLocalStorage=function(){localStorage.removeItem(onboarding.k.ONBOARDING_LAST_COMPLETED_STEP),localStorage.removeItem(onboarding.k.ONBOARDING_CURRENT_STEP),localStorage.removeItem(onboarding.k.ONBOARDING_ACTIVE),localStorage.removeItem(onboarding.k.ONBOARDING_BUSINESS_TYPE),localStorage.removeItem(onboarding.k.ONBOARDING_BUSINESS_NEED),localStorage.removeItem(onboarding.k.ONBOARDING_SHOW_WELCOME_MESSAGE),localStorage.removeItem(onboarding.k.ONBOARDING_ORDER_MECHANISM),localStorage.removeItem(onboarding.k.ONBOARDING_ACTIVE_STORE),localStorage.removeItem(onboarding.k.ONBOARDING_USER_COUNTRY),localStorage.removeItem(onboarding.k.ONBOARDING_COMPLETED),localStorage.removeItem("onboarding_in_progress"),localStorage.removeItem("onboarding_current_step"),localStorage.removeItem("onboarding_selected_plan")},setOnboardingMonthlyVolume=function(value){localStorage.setItem("onboarding_monthly_volume",value)},getOnboardingMonthlyVolume=function(){return localStorage.getItem("onboarding_monthly_volume")||""}},"./app/pages/Onboarding/utils/tracking.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IA:()=>trackOnboardingComplete,YF:()=>getTrackDataForStepComplete,tb:()=>trackStepCompleted});var _a,tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Onboarding/types.ts"),_utils_segment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/segment/index.ts"),_onboarding__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/pages/Onboarding/utils/onboarding.ts"),_components_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/pages/Onboarding/components/constants.ts"),_utils_fullstory_tracking__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/utils/fullstory/tracking.ts"),dataByPlan=((_a={})[_types__WEBPACK_IMPORTED_MODULE_0__.Ar.plan]={current_step_index:1,last_completed_step_index:null,last_completed_step_name:null,current_step_name:_types__WEBPACK_IMPORTED_MODULE_0__.Ar.plan},_a[_types__WEBPACK_IMPORTED_MODULE_0__.Ar.addOrders]={current_step_index:2,last_completed_step_index:1,last_completed_step_name:_types__WEBPACK_IMPORTED_MODULE_0__.Ar.plan,current_step_name:_types__WEBPACK_IMPORTED_MODULE_0__.Ar.addOrders},_a[_types__WEBPACK_IMPORTED_MODULE_0__.Ar.connectStore]={current_step_index:3,last_completed_step_index:2,last_completed_step_name:_types__WEBPACK_IMPORTED_MODULE_0__.Ar.addOrders,current_step_name:_types__WEBPACK_IMPORTED_MODULE_0__.Ar.connectStore},_a),getTrackDataForStepComplete=function(step){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({monthly_shipment_volume:(0,_onboarding__WEBPACK_IMPORTED_MODULE_2__.zZ)()},dataByPlan[step])},trackOnboardingComplete=function(exit){var selectedPlanFromStorage=(0,_onboarding__WEBPACK_IMPORTED_MODULE_2__.kr)(),selectedPlan=_components_constants__WEBPACK_IMPORTED_MODULE_3__.N.find((function(plan){return plan.id===selectedPlanFromStorage}));return(0,_utils_fullstory_tracking__WEBPACK_IMPORTED_MODULE_4__.q)(_utils_fullstory_tracking__WEBPACK_IMPORTED_MODULE_4__.t.ONBOARDING_COMPLETED,{plan_name:null==selectedPlan?void 0:selectedPlan.planCode,onboarding_exit:exit}),(0,_utils_segment__WEBPACK_IMPORTED_MODULE_1__.u4)(_utils_segment__WEBPACK_IMPORTED_MODULE_1__.sV.onboarding_completed,{monthly_shipment_volume:(0,_onboarding__WEBPACK_IMPORTED_MODULE_2__.zZ)(),plan_name:null==selectedPlan?void 0:selectedPlan.planCode,is_developer_plan:selectedPlanFromStorage===_types__WEBPACK_IMPORTED_MODULE_0__.tz.api,onboarding_exit:exit})},trackStepCompleted=function(view,action,payload){return(0,_utils_segment__WEBPACK_IMPORTED_MODULE_1__.u4)(_utils_segment__WEBPACK_IMPORTED_MODULE_1__.sV.onboarding_step_completed,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({view,action,business_type:"business"},payload))}},"./app/services/store-connect.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$O:()=>getStoreConnectUrl,DB:()=>postStoreConnectFinalizeUrl,L4:()=>postStoreConnectUrl});var _api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/services/api.ts");function getStoreConnectUrl(store,params){return _api__WEBPACK_IMPORTED_MODULE_0__.C4.request({method:"GET",params,url:"/".concat(store,"/setup"),withCredentials:!0})}function postStoreConnectUrl(store,data){return _api__WEBPACK_IMPORTED_MODULE_0__.C4.request({method:"POST",data,url:"/".concat(store,"/setup"),withCredentials:!0})}function postStoreConnectFinalizeUrl(store,data){return _api__WEBPACK_IMPORTED_MODULE_0__.C4.request({method:"POST",data,url:"/".concat(store,"/finalize"),withCredentials:!0})}},"./app/utils/featureflags/FeatureFlagsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U2:()=>optimizelyClient});__webpack_require__("./node_modules/react/index.js");var react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js"),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.wd("[Optimizely] ".concat(null==error?void 0:error.message))}},optimizelyClient=(0,react_sdk.Q_)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3})},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{gH:()=>FeatureFlags,u:()=>useFeatureFlag});var DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT},ORDERS_REDESIGN_ALLOW_TOGGLE:{name:"orders_redesign_allow_toggle",variationType:VariationTypes.ROLLOUT},ORDER_TAG_MVP:{name:"order_tag_mvp",variationType:VariationTypes.ROLLOUT},FEDEX_NEW_API_ENABLED:{name:"fedex_new_api_enabled_ui",variationType:VariationTypes.ROLLOUT},RATES_BEST_OPTION:{name:"rates_best_option",variationType:VariationTypes.A_B_TESTING},OPEN_ORDER_DRAWER_ON_BACK:{name:"open_order_drawer_on_back",variationType:VariationTypes.ROLLOUT},UPS_OAUTH_REGISTRATION_ENABLED:{name:"ups_oauth_registration_enabled",variationType:VariationTypes.ROLLOUT},DISPLAY_INVALID_IMPORTED_ADDRESSES:{name:"display_invalid_imported_addresses",variationType:VariationTypes.ROLLOUT},AUTOMATION_RECOMMENDATIONS:{name:"automation_recommendations",variationType:VariationTypes.ROLLOUT},USPS_AES_ITN_UI:{name:"usps_aes_itn_ui",variationType:VariationTypes.ROLLOUT},SQUARE_STORE_CONNECTION:{name:"square_store_connection_setup",variationType:VariationTypes.ROLLOUT},MAGENTO2_STORE_CONNECTION:{name:"magento2_store_connection_setup",variationType:VariationTypes.ROLLOUT},INSURANCE_LARGE_PACKAGES_UPSELL:{name:"insurance_large_packages_upsell",variationType:VariationTypes.A_B_TESTING},TURN_ON_IBD_XCOVER:{name:"turn_on_ibd_xcover",variationType:VariationTypes.ROLLOUT},WOO_STORE_CONNECTION:{name:"woocommerce_store_connection_setup",variationType:VariationTypes.ROLLOUT},SQUARESPACE_STORE_CONNECTION:{name:"squarespace_store_connection_setup",variationType:VariationTypes.ROLLOUT},RECENT_TEMPLATES_NEW_API:{name:"recent_templates_new_api",variationType:VariationTypes.ROLLOUT},SHIPPING_METHODS_NEW_API:{name:"shipping_methods_new_api",variationType:VariationTypes.ROLLOUT},NEW_ZERO_STATE_OVERLAY:{name:"zerostateoverlay",variationType:VariationTypes.ROLLOUT},BLOCK_API_KEY_GENERATION:{name:"block_api_key_generation",variationType:VariationTypes.ROLLOUT}},tslib_es6=(__webpack_require__("./app/utils/featureflags/FeatureFlagsProvider.tsx"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js");function useFeatureFlag(featureFlag,options){var _a=(0,tslib_es6.zs)((0,react_sdk.A2)(featureFlag.name,{autoUpdate:!0,decideOptions:(null==options?void 0:options.blockEvent)?[react_sdk.kn.DISABLE_DECISION_EVENT]:[]}),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}}}]);