(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[253],{"./app/components/StoreConnection/assets/amazon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"ebf2a7066a05c8e15178fac1fcafe9fe.svg"},"./app/components/StoreConnection/assets/bigcommerce.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"6e26e8c40ba5610f0e018c167c815661.svg"},"./app/components/StoreConnection/assets/etsy.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"a38888987f82e3d8de93ccd57a524ba2.svg"},"./app/components/StoreConnection/assets/shopify.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"dcff3846f9a272b9e6c56d4682ed7eb7.svg"},"./app/components/StoreConnection/assets/square.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"3a7907ee6cf59a577726051283601216.svg"},"./app/components/StoreConnection/assets/walmart.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"7864736d45a8637d728ece0855450982.svg"},"./app/components/StoreConnection/assets/wix.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"220264b45edfb5db09a4125675421b5a.svg"},"./app/components/StoreConnection/stores.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aW:()=>StoreConnectionsConfigurations,as:()=>popularStores,lN:()=>otherStores});var _a,_types_Store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/types/Store.ts"),_constants_countries__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/countries.ts"),_services_store_connect_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/services/store-connect.service.ts"),_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/components/StoreConnection/assets/amazon.svg"),_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_3__),_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/components/StoreConnection/assets/bigcommerce.svg"),_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_4__),_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/components/StoreConnection/assets/etsy.svg"),_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_5__),_assets_square_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./app/components/StoreConnection/assets/square.svg"),_assets_square_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_square_svg__WEBPACK_IMPORTED_MODULE_6__),_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./app/components/StoreConnection/assets/shopify.svg"),_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./app/components/StoreConnection/assets/walmart.svg"),_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_wix_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./app/components/StoreConnection/assets/wix.svg"),_assets_wix_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_wix_svg__WEBPACK_IMPORTED_MODULE_9__),_utils_featureflags__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./app/utils/featureflags/index.ts"),popularStores=[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.eBay,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix],otherStores=[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Magento_2,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Squarespace,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart,_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.WooCommerce],StoreConnectionsConfigurations=((_a={})[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Shopify.toLowerCase()),logo:_assets_shopify_svg__WEBPACK_IMPORTED_MODULE_7___default(),description:"connections.stores.shopify.description",inputFields:[{name:"shop",type:"input",defaultValue:"",label:"connections.stores.shopify.label",placeholder:"connections.stores.shopify.placeholder",errorText:"connections.stores.shopify.error"}]},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Amazon.toLowerCase()),logo:_assets_amazon_svg__WEBPACK_IMPORTED_MODULE_3___default(),description:"connections.stores.amazon.description",inputFields:[{name:"country",type:"country",defaultValue:_constants_countries__WEBPACK_IMPORTED_MODULE_1__.Xr.US.iso2,label:"connections.stores.amazon.label",errorText:"connections.stores.amazon.error"}]},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Wix.toLowerCase()),logo:_assets_wix_svg__WEBPACK_IMPORTED_MODULE_9___default(),description:"connections.stores.wix.description"},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Etsy.toLowerCase()),logo:_assets_etsy_svg__WEBPACK_IMPORTED_MODULE_5___default(),description:"connections.stores.etsy.description"},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Square.toLowerCase()),logo:_assets_square_svg__WEBPACK_IMPORTED_MODULE_6___default(),description:"connections.stores.square.description",featureFlagName:_utils_featureflags__WEBPACK_IMPORTED_MODULE_10__.gH.SQUARE_STORE_CONNECTION.name},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Bigcommerce.toLowerCase()),logo:_assets_bigcommerce_svg__WEBPACK_IMPORTED_MODULE_4___default(),description:"connections.stores.bigcommerce.description"},_a[_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart]={name:_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart,path:"/connect/".concat(_types_Store__WEBPACK_IMPORTED_MODULE_0__.F8.Walmart.toLowerCase()),setupService:_services_store_connect_service__WEBPACK_IMPORTED_MODULE_2__.L,logo:_assets_walmart_svg__WEBPACK_IMPORTED_MODULE_8___default(),description:"connections.stores.walmart.description",descriptionComponents:[{type:"link",key:"instructions",href:"https://support.goshippo.com/hc/en-us/articles/18991472509339-Connect-Your-Walmart-Store-to-Shippo",label:"connections.stores.walmart.descriptionLink"}],inputFields:[{name:"clientId",type:"input",defaultValue:"",label:"connections.stores.walmart.clientIdLabel",errorText:"connections.stores.walmart.clientIdError"},{name:"clientSecret",type:"input",inputType:"password",defaultValue:"",label:"connections.stores.walmart.clientSecretLabel",errorText:"connections.stores.walmart.clientSecretError"}]},_a)},"./app/constants/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$J:()=>OVERRIDE_ADDRESS_VERSION,Sh:()=>OVERRIDE_ADDRESS_HEADER,V1:()=>V1,X1:()=>LATEST_VERSION,XP:()=>VERSION_HEADER});var V1="2014-02-11",LATEST_VERSION="2018-02-08",VERSION_HEADER="Shippo-API-Version",OVERRIDE_ADDRESS_HEADER="Shippo-Override-Addresses",OVERRIDE_ADDRESS_VERSION="V2"},"./app/services/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{po:()=>addressAPI,kC:()=>apiV1,YZ:()=>armorAPI,Ay:()=>services_api,gH:()=>ordersAPI,kM:()=>setupAuthentication,C4:()=>storeConnectApi,_s:()=>tagsAPI,Sg:()=>unauthApi,mM:()=>webOrdersApi});var ContentType,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),axios=__webpack_require__("./node_modules/axios/index.js"),axios_default=__webpack_require__.n(axios),api=__webpack_require__("./app/constants/api.ts"),local_storage=__webpack_require__("./app/utils/local-storage.ts"),request_watcher=__webpack_require__("./app/utils/request-watcher.ts");!function(ContentType){ContentType.Json="application/json",ContentType.FormData="multipart/form-data",ContentType.UrlEncoded="application/x-www-form-urlencoded",ContentType.Text="text/plain"}(ContentType||(ContentType={}));var _a,HttpClient=function(){function HttpClient(_a){void 0===_a&&(_a={});var _this=this,securityWorker=_a.securityWorker,secure=_a.secure,format=_a.format,axiosConfig=(0,tslib_es6.Tt)(_a,["securityWorker","secure","format"]);this.securityData=null,this.setSecurityData=function(data){_this.securityData=data},this.request=function(_a){return(0,tslib_es6.sH)(_this,void 0,void 0,(function(){var secureParams,_b,requestParams,responseFormat,secure=_a.secure,path=_a.path,type=_a.type,query=_a.query,format=_a.format,body=_a.body,params=(0,tslib_es6.Tt)(_a,["secure","path","type","query","format","body"]);return(0,tslib_es6.YH)(this,(function(_c){switch(_c.label){case 0:return(_b=("boolean"==typeof secure?secure:this.secure)&&this.securityWorker)?[4,this.securityWorker(this.securityData)]:[3,2];case 1:_b=_c.sent(),_c.label=2;case 2:return secureParams=_b||{},requestParams=this.mergeRequestParams(params,secureParams),responseFormat=format||this.format||void 0,type===ContentType.FormData&&body&&null!==body&&"object"==typeof body&&(body=this.createFormData(body)),type===ContentType.Text&&body&&null!==body&&"string"!=typeof body&&(body=JSON.stringify(body)),[2,this.instance.request((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},requestParams),{headers:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},requestParams.headers||{}),type?{"Content-Type":type}:{}),params:query,responseType:responseFormat,data:body,url:path}))]}}))}))},this.instance=axios_default().create((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},axiosConfig),{baseURL:axiosConfig.baseURL||""})),this.secure=secure,this.format=format,this.securityWorker=securityWorker}return HttpClient.prototype.mergeRequestParams=function(params1,params2){var method=params1.method||params2&&params2.method;return(0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},this.instance.defaults),params1),params2||{}),{headers:(0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},method&&this.instance.defaults.headers[method.toLowerCase()]||{}),params1.headers||{}),params2&&params2.headers||{})})},HttpClient.prototype.stringifyFormItem=function(formItem){return"object"==typeof formItem&&null!==formItem?JSON.stringify(formItem):"".concat(formItem)},HttpClient.prototype.createFormData=function(input){var _this=this;return input instanceof FormData?input:Object.keys(input||{}).reduce((function(formData,key){var e_1,_a,property=input[key],propertyContent=property instanceof Array?property:[property];try{for(var propertyContent_1=(0,tslib_es6.Ju)(propertyContent),propertyContent_1_1=propertyContent_1.next();!propertyContent_1_1.done;propertyContent_1_1=propertyContent_1.next()){var formItem=propertyContent_1_1.value,isFileType=formItem instanceof Blob||formItem instanceof File;formData.append(key,isFileType?formItem:_this.stringifyFormItem(formItem))}}catch(e_1_1){e_1={error:e_1_1}}finally{try{propertyContent_1_1&&!propertyContent_1_1.done&&(_a=propertyContent_1.return)&&_a.call(propertyContent_1)}finally{if(e_1)throw e_1.error}}return formData}),new FormData)},HttpClient}(),WebOrders=function(_super){function WebOrders(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.getWebOrders=function(query,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders",method:"GET",query,format:"json"},params))},_this.createWebOrder=function(data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders",method:"POST",body:data,type:ContentType.Json,format:"json"},params))},_this.getWebOrder=function(webOrderId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId),method:"GET",format:"json"},params))},_this.cloneWebOrder=function(webOrderId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/clone"),method:"POST",format:"json"},params))},_this.getClonedWebOrder=function(webOrderId,clonedWebOrderId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/clone/").concat(clonedWebOrderId),method:"GET",format:"json"},params))},_this.createReturnShipmentFromOrder=function(webOrderId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/return"),method:"POST",format:"json"},params))},_this.getWebOrderTransactions=function(webOrderId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/transactions"),method:"GET",format:"json"},params))},_this.updateBulkWebOrders=function(data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/shipments",method:"PATCH",body:data,type:ContentType.Json,format:"json"},params))},_this.getBulkWebOrderRates=function(data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/rates",method:"GET",body:data,type:ContentType.Json,format:"json"},params))},_this.getTransactions=function(params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/transactions",method:"GET",format:"json"},params))},_this.purchaseBulkLabels=function(data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/transactions",method:"POST",body:data,type:ContentType.Json,format:"json"},params))},_this.createReturnShipmentFromTransaction=function(transactionId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/transactions/".concat(transactionId,"/return"),method:"POST",format:"json"},params))},_this.updateWebOrder=function(webOrderId,shipmentId,data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/shipments/").concat(shipmentId),method:"PATCH",body:data,type:ContentType.Json,format:"json"},params))},_this.resetWebShipment=function(webOrderId,shipmentId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/shipments/").concat(shipmentId,"/refresh"),method:"POST",format:"json"},params))},_this.getWebOrderRates=function(webOrderId,shipmentId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/shipments/").concat(shipmentId,"/rates"),method:"GET",format:"json"},params))},_this.createReturnShipmentFromOutboundShipment=function(webOrderId,shipmentId,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/shipments/").concat(shipmentId,"/return"),method:"POST",format:"json"},params))},_this.purchaseLabel=function(webOrderId,shipmentId,data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/".concat(webOrderId,"/shipments/").concat(shipmentId,"/transactions"),method:"POST",body:data,type:ContentType.Json,format:"json"},params))},_this.tagWebOrders=function(data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/tags",method:"POST",body:data,type:ContentType.Json,format:"json"},params))},_this.untagWebOrders=function(data,params){return void 0===params&&(params={}),_this.request((0,tslib_es6.Cl)({path:"/web_orders/tags",method:"DELETE",body:data,type:ContentType.Json,format:"json"},params))},_this}return(0,tslib_es6.C6)(WebOrders,_super),WebOrders}(HttpClient);function setupBaseHeaders(envId){var _a,baseHeaders=((_a={})[api.XP]=api.X1,_a);if("production"===envId)return baseHeaders;baseHeaders["X-HTTP-Request-Source"]="React-".concat(envId);var lang=(0,local_storage.X)("i18nextLng");return lang&&(baseHeaders["Accept-Language"]=lang),baseHeaders}function setupAuthentication(jwt){var configureHeaders=function(useShippoToken){return void 0===useShippoToken&&(useShippoToken=!1),function(config){var auth=useShippoToken&&{batchPollTimeout:12e4,shippoRootUrl:".shippodev.com",reactBaseUrl:"https://WEB-9876.ui.shippodev.com/",emberBaseUrl:"#",portalBaseUrl:"https://portal-dev-qa.shippodev.com",apiBaseUrl:"https://service-dev-qa.shippodev.com",djangoBaseUrl:"https://dev-qa.shippodev.com",staticUrl:"https://dev-qa-static-shippodev-com.s3.amazonaws.com",armorUrl:"https://service-dev-qa.shippodev.com",orderFacadeUrl:"https://api-dev-qa.shippodev.com",analyticsUrl:"https://service-dev-qa.shippodev.com",storeConnectUrl:"https://service-dev-qa.shippodev.com/store_connect",trackingAppUrl:"https://track-dev-qa.shippodev.com",supportUrl:"http://support.goshippo.com",sisenseUrl:"https://goshippo-dev.sisense.com",addressUrl:"https://api-dev-qa.shippodev.com",ordersUrl:"https://api-dev-qa.shippodev.com",gtm:{id:"GTM-544FF49",dataLayer:"dataLayer",enabled:!0},heap:{id:"1954862292"},loqate:{key:"PG54-RG49-ZD26-RT49"},recaptchaKeyCreditCard:"",recaptchaKeyForgotPassword:"6LdntqgUAAAAAL6zcqM8A2hBPq--mFFvHaW1JyS1",recaptchaKeyLogin:"",recaptchaKeyRegistration:"",recaptchaBypassCookieName:"magic_recaptcha_bypass_for_qa",siftAccount:"",flags:{enableBatchAddress:!0,enableBatchInlineEdit:!0,enableDeliveredNotificationConfig:!0,automationsActive:!0,showProgressIndicator:!0,showWix:!0,enableNewExpReturns:!0,enableAlcohol:!0,enableUPSMaster:!0,enableRefreshRates:!0,enableLogoOnLabelSetting:!1,enableManualLabelCreation:!1,enableCustomsEoriNumber:!0,enableAusPostMyPost:!0},featureTests:{priceTestCookie:"shippo_phpHgsPqBsbLghsk_var"},sentryDsn:"https://b69c1d48f9e74504b9c497d142ff62b5@o7666.ingest.sentry.io/6424286",sentry:{organization:"goshippocom",project:"feron",sourcemapsToken:"4dd47077c9a64aa5b82c3d05e9f93e37c068f699c7af41cd8419b125e030fac3",dsn:"https://b69c1d48f9e74504b9c497d142ff62b5@o7666.ingest.sentry.io/6424286"},newRelic:{enabled:!0,licenseKey:"NRJS-15287797fbbb22be5f3",accountId:"3617693",agentId:"601459129",applicationId:"601459129",trustKey:"3617693"},stripeKey:"pk_test_OGjlgIe4swnl7wTrMLiFQmMe",optimizely:{sdkKey:"5BDuBhgGXbHXWEXMojbEi"},showTools:!0,uspsAPI:{userId:"302SHIPP1769"},segment:"WlQv3s9abZxRRQH0rtQaOYChnOlbn63H",environmentName:"dynamic",sisense:{dashboardId:"62ab350cf4cf370038f4be31"},microFrontend:{template:"https://mfe-dev-qa.shippodev.com/template/latest"},transcend:{enabled:!0,scriptSrc:"https://transcend-cdn.com/cm-test/b375601a-82e8-43ca-820d-efcdd9138752/airgap.js",baseURL:"https://transcend-io-dev-qa.shippodev.com",dataSyncEndpoint:"https://consent-sync.shippodev.com/consent-manager/b375601a-82e8-43ca-820d-efcdd9138752"}}.shippoToken?"ShippoToken ".concat({batchPollTimeout:12e4,shippoRootUrl:".shippodev.com",reactBaseUrl:"https://WEB-9876.ui.shippodev.com/",emberBaseUrl:"#",portalBaseUrl:"https://portal-dev-qa.shippodev.com",apiBaseUrl:"https://service-dev-qa.shippodev.com",djangoBaseUrl:"https://dev-qa.shippodev.com",staticUrl:"https://dev-qa-static-shippodev-com.s3.amazonaws.com",armorUrl:"https://service-dev-qa.shippodev.com",orderFacadeUrl:"https://api-dev-qa.shippodev.com",analyticsUrl:"https://service-dev-qa.shippodev.com",storeConnectUrl:"https://service-dev-qa.shippodev.com/store_connect",trackingAppUrl:"https://track-dev-qa.shippodev.com",supportUrl:"http://support.goshippo.com",sisenseUrl:"https://goshippo-dev.sisense.com",addressUrl:"https://api-dev-qa.shippodev.com",ordersUrl:"https://api-dev-qa.shippodev.com",gtm:{id:"GTM-544FF49",dataLayer:"dataLayer",enabled:!0},heap:{id:"1954862292"},loqate:{key:"PG54-RG49-ZD26-RT49"},recaptchaKeyCreditCard:"",recaptchaKeyForgotPassword:"6LdntqgUAAAAAL6zcqM8A2hBPq--mFFvHaW1JyS1",recaptchaKeyLogin:"",recaptchaKeyRegistration:"",recaptchaBypassCookieName:"magic_recaptcha_bypass_for_qa",siftAccount:"",flags:{enableBatchAddress:!0,enableBatchInlineEdit:!0,enableDeliveredNotificationConfig:!0,automationsActive:!0,showProgressIndicator:!0,showWix:!0,enableNewExpReturns:!0,enableAlcohol:!0,enableUPSMaster:!0,enableRefreshRates:!0,enableLogoOnLabelSetting:!1,enableManualLabelCreation:!1,enableCustomsEoriNumber:!0,enableAusPostMyPost:!0},featureTests:{priceTestCookie:"shippo_phpHgsPqBsbLghsk_var"},sentryDsn:"https://b69c1d48f9e74504b9c497d142ff62b5@o7666.ingest.sentry.io/6424286",sentry:{organization:"goshippocom",project:"feron",sourcemapsToken:"4dd47077c9a64aa5b82c3d05e9f93e37c068f699c7af41cd8419b125e030fac3",dsn:"https://b69c1d48f9e74504b9c497d142ff62b5@o7666.ingest.sentry.io/6424286"},newRelic:{enabled:!0,licenseKey:"NRJS-15287797fbbb22be5f3",accountId:"3617693",agentId:"601459129",applicationId:"601459129",trustKey:"3617693"},stripeKey:"pk_test_OGjlgIe4swnl7wTrMLiFQmMe",optimizely:{sdkKey:"5BDuBhgGXbHXWEXMojbEi"},showTools:!0,uspsAPI:{userId:"302SHIPP1769"},segment:"WlQv3s9abZxRRQH0rtQaOYChnOlbn63H",environmentName:"dynamic",sisense:{dashboardId:"62ab350cf4cf370038f4be31"},microFrontend:{template:"https://mfe-dev-qa.shippodev.com/template/latest"},transcend:{enabled:!0,scriptSrc:"https://transcend-cdn.com/cm-test/b375601a-82e8-43ca-820d-efcdd9138752/airgap.js",baseURL:"https://transcend-io-dev-qa.shippodev.com",dataSyncEndpoint:"https://consent-sync.shippodev.com/consent-manager/b375601a-82e8-43ca-820d-efcdd9138752"}}.shippoToken):"JWT ".concat(jwt);return config.headers=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},config.headers),{Authorization:auth}),config}};api_api.interceptors.request.use(configureHeaders()),addressAPI.interceptors.request.use(configureHeaders(!0)),ordersAPI.interceptors.request.use(configureHeaders(!0)),tagsAPI.interceptors.request.use(configureHeaders(!0)),armorAPI.interceptors.request.use(configureHeaders()),djangoApi.interceptors.request.use(configureHeaders()),apiV1.interceptors.request.use(configureHeaders()),storeConnectApi.interceptors.request.use(configureHeaders()),analyticsApi.interceptors.request.use(configureHeaders()),webOrdersApi.instance.interceptors.request.use(configureHeaders())}var api_api=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),addressAPI=axios_default().create({baseURL:"https://api-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),ordersAPI=axios_default().create({baseURL:"https://api-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),tagsAPI=axios_default().create({baseURL:"https://api-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),armorAPI=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")});(0,request_watcher.Je)({instance:armorAPI,urlMatch:"/orders/batch_entry/refresh"});var unauthApi=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),djangoApi=axios_default().create({baseURL:"https://dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),storeConnectApi=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com/store_connect",headers:setupBaseHeaders("dynamic")}),analyticsApi=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),apiV1=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},setupBaseHeaders("dynamic")),(_a={},_a[api.XP]=api.V1,_a))}),webOrdersApi=new WebOrders({baseURL:"https://api-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")});const services_api=api_api},"./app/services/store-connect.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>getStoreConnectUrl,L:()=>postStoreConnectUrl});var _api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/services/api.ts");function getStoreConnectUrl(store,params){return _api__WEBPACK_IMPORTED_MODULE_0__.C4.request({method:"GET",params,url:"/".concat(store,"/setup"),withCredentials:!0})}function postStoreConnectUrl(store,data){return _api__WEBPACK_IMPORTED_MODULE_0__.C4.request({method:"POST",data,url:"/".concat(store,"/setup"),withCredentials:!0})}},"./app/utils/featureflags/FeatureFlagsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U2:()=>optimizelyClient});__webpack_require__("./node_modules/react/index.js");var react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js"),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.wd("[Optimizely] ".concat(null==error?void 0:error.message))}},optimizelyClient=(0,react_sdk.Q_)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3})},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{gH:()=>FeatureFlags,u:()=>useFeatureFlag});var DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},SHOW_DUPLICATE_ORDERS:{name:"show_duplicate_orders",variationType:VariationTypes.A_B_TESTING},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT},ORDERS_REDESIGN_ALLOW_TOGGLE:{name:"orders_redesign_allow_toggle",variationType:VariationTypes.ROLLOUT},ORDER_TAG_MVP:{name:"order_tag_mvp",variationType:VariationTypes.ROLLOUT},FEDEX_NEW_API_ENABLED:{name:"fedex_new_api_enabled_ui",variationType:VariationTypes.ROLLOUT},RATES_BEST_OPTION:{name:"rates_best_option",variationType:VariationTypes.A_B_TESTING},IMPROVED_REFUNDS:{name:"improved_refunds",variationType:VariationTypes.ROLLOUT},TEAMS_ENHANCEMENT:{name:"teams_enhancement",variationType:VariationTypes.ROLLOUT},SHIPMENTS_PACKING_SLIP:{name:"shipments_packing_slip",variationType:VariationTypes.ROLLOUT},OPEN_ORDER_DRAWER_ON_BACK:{name:"open_order_drawer_on_back",variationType:VariationTypes.ROLLOUT},SPLIT_ORDER_NO_ITEMS:{name:"split_order_no_items",variationType:VariationTypes.ROLLOUT},SPLIT_ORDER_MANUAL_CSV:{name:"split_order_manual_csv",variationType:VariationTypes.ROLLOUT},UPS_OAUTH_REGISTRATION_ENABLED:{name:"ups_oauth_registration_enabled",variationType:VariationTypes.ROLLOUT},DISPLAY_INVALID_IMPORTED_ADDRESSES:{name:"display_invalid_imported_addresses",variationType:VariationTypes.ROLLOUT},AUTOMATION_RECOMMENDATIONS:{name:"automation_recommendations",variationType:VariationTypes.ROLLOUT},USPS_AES_ITN_UI:{name:"usps_aes_itn_ui",variationType:VariationTypes.ROLLOUT},PAYMENT_WALLET:{name:"payment_wallet",variationType:VariationTypes.ROLLOUT},SQUARE_STORE_CONNECTION:{name:"square_store_connection_setup",variationType:VariationTypes.ROLLOUT}},tslib_es6=(__webpack_require__("./app/utils/featureflags/FeatureFlagsProvider.tsx"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js");function useFeatureFlag(featureFlag,options){var _a=(0,tslib_es6.zs)((0,react_sdk.A2)(featureFlag.name,{autoUpdate:!0,decideOptions:(null==options?void 0:options.blockEvent)?[react_sdk.kn.DISABLE_DECISION_EVENT]:[]}),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}},"./app/utils/local-storage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function saveInLocalStorage(keyName,value){window.localStorage.setItem(keyName,value)}function readFromLocalStorage(keyName){return window.localStorage.getItem(keyName)}__webpack_require__.d(__webpack_exports__,{X:()=>readFromLocalStorage,r:()=>saveInLocalStorage})},"./app/utils/request-watcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IV:()=>hasPendingRequests,Je:()=>addRequestListener,rS:()=>clearPendingRequests});var requestListeners={},addRequestListener=function(_a){var instance=_a.instance,urlMatch=_a.urlMatch;instance.interceptors.request.use((function(request){var url=request.url;return url&&urlMatch?(urlMatch!==url||(requestListeners[url]||(requestListeners[url]={pending:0}),requestListeners[url].pending+=1),request):request}),(function(error){return Promise.reject(error)})),instance.interceptors.response.use((function(response){var url=response.config.url;return url&&urlMatch?(urlMatch!==url||requestListeners[url]&&(requestListeners[url].pending-=1),response):response}),(function(error){var url=error.config.url;return requestListeners[url]&&(requestListeners[url].pending-=1),Promise.reject(error)}))},clearPendingRequests=function(url){requestListeners[url]={pending:0}},hasPendingRequests=function(url){var _a;return(null===(_a=requestListeners[url])||void 0===_a?void 0:_a.pending)>0}}}]);