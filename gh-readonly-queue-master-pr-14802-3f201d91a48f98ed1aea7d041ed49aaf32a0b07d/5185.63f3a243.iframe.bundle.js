"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5185],{"./app/actions/orders.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$h:()=>updateOrderParcel,B_:()=>selectAllOrders,GT:()=>createAnotherLabel,Gb:()=>fetchOrders,Gp:()=>patchUpdateBatchEntriesExtrasReset,JO:()=>getPackingSlips,Kk:()=>clearBatchEntryEditNotificationMessage,PE:()=>selectOrder,SJ:()=>fetchBatchEntryRules,YT:()=>updateOrderWithBatchEntry,_W:()=>orderEditBegin,cn:()=>fetchOrderTransactions,d:()=>updateOrderTagsError,dT:()=>startCheckout,dk:()=>updateOrderTags,eY:()=>updateOrderTagsSuccess,fI:()=>pollOrdersStart,fn:()=>getAllLabels,gW:()=>openOrderSplitModal,is:()=>patchUpdateBatchEntriesExtrasPackingSlipNote,kR:()=>updateBatchEntriesAddress,lN:()=>retryShipment,m6:()=>orderEditEnd,p9:()=>getLabel,uF:()=>clearSelectedOrders,xC:()=>patchBatchEntries,xl:()=>updateBatchEntriesExtras});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/actions/constants.ts");function fetchOrders(appLocation,page,filters,fetchCount,showOnlyHidden,orderStatus,sort,sortBy,orderBy){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_FETCH,payload:{appLocation,page,fetchCount,filters,showOnlyHidden,sort,orderStatus,sortBy,orderBy}}}function fetchOrderTransactions(orderObjectId){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.FETCH_ORDER_TRANSACTIONS,payload:{orderObjectId}}}function pollOrdersStart(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_POLL_START}}function getAllLabels(orderSelection){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_GET_ALL_LABELS,payload:{orderSelection}}}function getLabel(orderObjectIds,fileFormat,windowRef){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_GET_LABEL,payload:{fileFormat,windowRef,transactionIds:orderObjectIds}}}function getPackingSlips(orderSelection,windowRef,appLocation){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_GET_PACKING_SLIP,payload:{orderSelection,windowRef,appLocation}}}function orderEditBegin(orderSelection){return{payload:{orderSelection},type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDER_BEGIN_EDIT_ACTION}}function orderEditEnd(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDER_END_EDIT_ACTION}}function patchBatchEntries(orderSelection,parcel,extras,trackingReference){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_PATCH_BATCH_ENTRIES,payload:{orderSelection,parcel,extras,trackingReference}}}function updateOrderParcel(orderSelection,parcel,trackingReference){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_UPDATE_PARCEL,payload:{orderSelection,parcel,trackingReference}}}function updateBatchEntriesExtras(orderSelection,extras,form){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_UPDATE_BATCH_ENTRIES_EXTRAS,payload:{extras,orderSelection,form}}}function patchUpdateBatchEntriesExtrasPackingSlipNote(orderSelection,packingSlipText,batchEntryIds){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_PATCH_UPDATE_BATCH_ENTRIES_EXTRAS_PACKING_SLIP_NOTE,payload:{packingSlipText,orderSelection,batchEntryIds}}}function patchUpdateBatchEntriesExtrasReset(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_PATCH_UPDATE_BATCH_ENTRIES_EXTRAS_RESET}}function updateBatchEntriesAddress(_a){var orderSelection=_a.orderSelection,addressType=_a.addressType,address=_a.address,combineSenderReturnAddresses=_a.combineSenderReturnAddresses,createUserAddress=_a.createUserAddress,source=_a.source,trackingReference=_a.trackingReference;return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_UPDATE_BATCH_ENTRIES_ADDRESS,payload:{address,addressType,orderSelection,combineSenderReturnAddresses,createUserAddress,source,trackingReference}}}function updateOrderWithBatchEntry(serviceLevelToken,objectID,accountObjectId,closePopover){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDER_UPDATE_WITH_BATCH_ENTRY,payload:{serviceLevelToken,objectID,closePopover,accountObjectId}}}function selectOrder(payload,trackEvent){return{payload,trackEvent,type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_SELECT_ORDER}}function selectAllOrders(payload,trackEvent){return{payload,trackEvent,type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_SELECT_ALL_ORDERS}}function clearSelectedOrders(trackEvent){return{trackEvent,type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_CLEAR_SELECTED}}function updateOrderTags(orderIds){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_UPDATE_TAGS,payload:{orderIds}}}function updateOrderTagsSuccess(orderTags){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_UPDATE_TAGS_SUCCESS,payload:{orderTags}}}function updateOrderTagsError(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_UPDATE_TAGS_ERROR}}function startCheckout(orders,isSourceSidePanel){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_START_CHECKOUT,payload:{orders,isSourceSidePanel:!!isSourceSidePanel}}}function createAnotherLabel(orderSelection){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_CREATE_ANOTHER_LABEL,payload:{orderSelection}}}function retryShipment(orderSelection){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_BATCH_ENTRY_RETRY_SHIPMENT,payload:{orderSelection}}}function openOrderSplitModal(orderObjectId){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDER_SPLIT_MODAL_OPEN,payload:{orderObjectId}}}function fetchBatchEntryRules(batchEntryId){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.BATCH_ENTRY_RULES_FETCH,payload:{batchEntryId}}}function clearBatchEntryEditNotificationMessage(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.ORDERS_BATCH_ENTRY_EDIT_CLEAR_NOTIFICATION_MESSAGE}}},"./app/actions/routing.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rr:()=>storeCurrentQueryParams,bJ:()=>updateQueryParam});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/actions/constants.ts");function updateQueryParam(name,value){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.UPDATE_QUERY_PARAM,payload:{name,value}}}function storeCurrentQueryParams(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.STORE_CURRENT_QUERY_PARAMS}}},"./app/actions/stores.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>fetchStores});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/actions/constants.ts");function fetchStores(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.t.STORES_FETCH}}},"./app/components/customIcons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RE:()=>AddIcon,GQ:()=>CircleIcon,e9:()=>DiamondIcon,qN:()=>EditAddressIcon,iF:()=>FlagIcon,vw:()=>FlowerIcon,C3:()=>HeartIcon,ug:()=>HourGlassIcon,nX:()=>PersonIcon,iq:()=>PuzzleIcon,Ns:()=>SproutIcon,dH:()=>SquareIcon,Gg:()=>StarIcon,O8:()=>TreeIcon});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),SvgIcon=__webpack_require__("./node_modules/@goshippo/components/esm/SvgIcon/SvgIcon.js"),createSvgIcon=function(icon,_a){var id=_a.id,defaultProps=(0,tslib_es6.Tt)(_a,["id"]);return function(props){return(0,emotion_react_jsx_runtime_browser_esm.Y)(SvgIcon.A,(0,tslib_es6.Cl)({viewBox:"0 0 24 24","data-testid":id},defaultProps,props,{children:icon}))}},AddIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z",fill:"currentColor"}),{id:"AddIcon"}),CircleIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("circle",{id:"CircleIcon",r:"10",cx:"12",cy:"12",fill:"currentColor"}),{id:"CircleIcon"}),DiamondIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 15L1 8L8 1L15 8L8 15Z",fill:"currentColor"}),{id:"DiamondIcon",viewBox:"0 0 16 16"}),EditAddressIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z",fill:"currentColor"}),{id:"EditAddressIcon"}),FlagIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M2 16V1H10.3571C10.5571 1 10.7429 1.04779 10.9143 1.14338C11.0857 1.23897 11.2286 1.36765 11.3429 1.52941L14 5.41176L11.3429 9.29412C11.2286 9.45588 11.0857 9.58456 10.9143 9.68015C10.7429 9.77574 10.5571 9.82353 10.3571 9.82353H3.71429V16H2Z",fill:"currentColor"}),{id:"FlagIcon",viewBox:"-1 0 16 16"}),FlowerIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 15C7.03167 15 6.12167 14.8162 5.27 14.4487C4.41833 14.0812 3.6775 13.5825 3.0475 12.9525C2.4175 12.3225 1.91875 11.5817 1.55125 10.73C1.18375 9.87833 1 8.96833 1 8V1.35L5.2175 4.5175C5.57917 3.96917 5.99042 3.40333 6.45125 2.82C6.91208 2.23667 7.42833 1.63 8 1C8.525 1.58333 9.02667 2.17542 9.505 2.77625C9.98333 3.37708 10.4033 3.9575 10.765 4.5175L15 1.35V8C15 8.96833 14.8162 9.87833 14.4487 10.73C14.0812 11.5817 13.5825 12.3225 12.9525 12.9525C12.3225 13.5825 11.5817 14.0812 10.73 14.4487C9.87833 14.8162 8.96833 15 8 15Z",fill:"currentColor"}),{id:"FlowerIcon",viewBox:"0 0 16 16"}),HeartIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 15L6.985 14.0649C3.38 10.7564 1 8.57439 1 5.89646C1 3.71444 2.694 2 4.85 2C6.068 2 7.237 2.57384 8 3.48065C8.763 2.57384 9.932 2 11.15 2C13.306 2 15 3.71444 15 5.89646C15 8.57439 12.62 10.7564 9.015 14.0719L8 15Z",fill:"currentColor"}),{id:"HeartIcon",viewBox:"0 0 16 16"}),HourGlassIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M2 15V13.6H3.5V11.5C3.5 10.7883 3.67813 10.1204 4.03438 9.49625C4.39062 8.87208 4.8875 8.37333 5.525 8C4.8875 7.62667 4.39062 7.12792 4.03438 6.50375C3.67813 5.87958 3.5 5.21167 3.5 4.5V2.4H2V1H14V2.4H12.5V4.5C12.5 5.21167 12.3219 5.87958 11.9656 6.50375C11.6094 7.12792 11.1125 7.62667 10.475 8C11.1125 8.37333 11.6094 8.87208 11.9656 9.49625C12.3219 10.1204 12.5 10.7883 12.5 11.5V13.6H14V15H2Z",fill:"currentColor"}),{id:"HourGlassIcon",viewBox:"0 0 16 16"}),PersonIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M8 8C7.0375 8 6.21354 7.65729 5.52812 6.97187C4.84271 6.28646 4.5 5.4625 4.5 4.5C4.5 3.5375 4.84271 2.71354 5.52812 2.02812C6.21354 1.34271 7.0375 1 8 1C8.9625 1 9.78646 1.34271 10.4719 2.02812C11.1573 2.71354 11.5 3.5375 11.5 4.5C11.5 5.4625 11.1573 6.28646 10.4719 6.97187C9.78646 7.65729 8.9625 8 8 8ZM1 15V12.55C1 12.0542 1.1276 11.5984 1.38281 11.1828C1.63802 10.7672 1.97708 10.45 2.4 10.2312C3.30417 9.77917 4.22292 9.4401 5.15625 9.21406C6.08958 8.98802 7.0375 8.875 8 8.875C8.9625 8.875 9.91042 8.98802 10.8438 9.21406C11.7771 9.4401 12.6958 9.77917 13.6 10.2312C14.0229 10.45 14.362 10.7672 14.6172 11.1828C14.8724 11.5984 15 12.0542 15 12.55V15H1Z",fill:"currentColor"}),{id:"PersonIcon",viewBox:"0 1 16 16"}),PuzzleIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M5.46154 16H1V11.5385C1.61538 11.5385 2.15385 11.3429 2.61538 10.9519C3.07692 10.5609 3.30769 10.0641 3.30769 9.46154C3.30769 8.85897 3.07692 8.36218 2.61538 7.97115C2.15385 7.58013 1.61538 7.38462 1 7.38462V2.92308H5.61538C5.61538 2.38462 5.80128 1.92949 6.17308 1.55769C6.54487 1.1859 7 1 7.53846 1C8.07692 1 8.53205 1.1859 8.90385 1.55769C9.27564 1.92949 9.46154 2.38462 9.46154 2.92308H14.0769V7.53846C14.6154 7.53846 15.0705 7.72436 15.4423 8.09615C15.8141 8.46795 16 8.92308 16 9.46154C16 10 15.8141 10.4551 15.4423 10.8269C15.0705 11.1987 14.6154 11.3846 14.0769 11.3846V16H9.61539C9.61539 15.359 9.41346 14.8141 9.00962 14.3654C8.60577 13.9167 8.11539 13.6923 7.53846 13.6923C6.96154 13.6923 6.47115 13.9167 6.06731 14.3654C5.66346 14.8141 5.46154 15.359 5.46154 16Z",fill:"currentColor"}),{id:"PuzzleIcon",viewBox:"0 1 16 16"}),SproutIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M7.22222 15V8.79722C6.39259 8.79722 5.59537 8.63843 4.83056 8.32083C4.06574 8.00324 3.39167 7.55278 2.80833 6.96944C2.225 6.38611 1.77778 5.71204 1.46667 4.94722C1.15556 4.18241 1 3.38519 1 2.55556V1H2.55556C3.37222 1 4.16296 1.1588 4.92778 1.47639C5.69259 1.79398 6.36667 2.24444 6.95 2.82778C7.35185 3.22963 7.68565 3.67037 7.95139 4.15C8.21713 4.62963 8.4213 5.14167 8.56389 5.68611C8.6287 5.59537 8.7 5.50787 8.77778 5.42361C8.85556 5.33935 8.93982 5.25185 9.03056 5.16111C9.61389 4.57778 10.288 4.12732 11.0528 3.80972C11.8176 3.49213 12.6148 3.33333 13.4444 3.33333H15V4.88889C15 5.71852 14.8412 6.51574 14.5236 7.28056C14.206 8.04537 13.7556 8.71944 13.1722 9.30278C12.5889 9.88611 11.9181 10.3333 11.1597 10.6444C10.4014 10.9556 9.60741 11.1111 8.77778 11.1111V15H7.22222Z",fill:"currentColor"}),{id:"SproutIcon",viewBox:"0 -1 16 16"}),SquareIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M14 2H2V14H14V2Z",fill:"currentColor"}),{id:"SquareIcon",viewBox:"0 0 16 16"}),StarIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})]}),{id:"StarIcon",viewBox:"2 2 20 20"}),TreeIcon=createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M10.8715 8H12.4358L6.96089 0L1.52514 8H3.05028L0 12.8H5.41229V16H8.5095V12.8H14L10.8715 8Z",fill:"currentColor"}),{id:"TreeIcon",viewBox:"-1 0 16 16"});createSvgIcon((0,emotion_react_jsx_runtime_browser_esm.Y)("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",fill:"currentColor"}),{id:"CloseIcon"})},"./app/constants/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$J:()=>OVERRIDE_ADDRESS_VERSION,Sh:()=>OVERRIDE_ADDRESS_HEADER,V1:()=>V1,X1:()=>LATEST_VERSION,XP:()=>VERSION_HEADER});var V1="2014-02-11",LATEST_VERSION="2018-02-08",VERSION_HEADER="Shippo-API-Version",OVERRIDE_ADDRESS_HEADER="Shippo-Override-Addresses",OVERRIDE_ADDRESS_VERSION="V2"},"./app/contexts/GlobalComponentsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useGlobalComponentsContext});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/NoticeAlert/index.js");__webpack_require__("./app/utils/translate.ts"),__webpack_require__("./node_modules/react-redux/es/index.js");var GlobalComponentsContext=(0,react.createContext)({snackbar:{addSnackbarAlert:function(){},addSnackbarActionAlert:function(){}}}),useGlobalComponentsContext=function(){return{snackbar:(0,react.useContext)(GlobalComponentsContext).snackbar}}},"./app/pages/Orders/Blackbeard/types/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t7:()=>areEqual,xu:()=>searchQueryToSearchParameter,zM:()=>searchParameterToSearchQuery});var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),searchQueryToSearchParameter=(__webpack_require__("./app/constants/distance.ts"),__webpack_require__("./app/constants/weight.ts"),__webpack_require__("./app/types/LineItem.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/ParcelTemplate.ts"),function(searchQuery,parameter){return Object.entries(searchQuery).filter((function(_a){return(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,1)[0].includes(parameter)})).reduce((function(accum,_a){var value=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,2)[1];return value&&accum.push(value),accum}),[])}),searchParameterToSearchQuery=function(filterValue,queryParams,parameter){filterValue.forEach((function(item,index){queryParams["".concat(parameter,"[").concat(index,"]")]=item}))},areEqual=function(a,b){return JSON.stringify(a)===JSON.stringify(b)}},"./app/services/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>services_api,i5:()=>microServiceAPI});var _a,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),axios=__webpack_require__("./node_modules/axios/index.js"),axios_default=__webpack_require__.n(axios),api=__webpack_require__("./app/constants/api.ts");function setupBaseHeaders(envId){var _a,baseHeaders=((_a={})[api.XP]=api.X1,_a);if("production"===envId)return baseHeaders;baseHeaders["X-HTTP-Request-Source"]="React-".concat(envId);var lang=function readFromLocalStorage(keyName){return window.localStorage.getItem(keyName)}("i18nextLng");return lang&&(baseHeaders["Accept-Language"]=lang),baseHeaders}axios_default().create({baseURL:"https://goshippo-dev.sisense.com"});var api_api=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),microServiceAPI=axios_default().create({baseURL:"https://api-dev-qa.shippodev.com",headers:(0,tslib_es6.Cl)({},setupBaseHeaders("dynamic"))});axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com/store_connect",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},setupBaseHeaders("dynamic")),(_a={},_a[api.XP]=api.V1,_a))});const services_api=api_api},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gH:()=>FeatureFlags,u:()=>useFeatureFlag});var DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={PACKAGE_QUICK_SELECT:{name:"package_quick_select",variationType:VariationTypes.ROLLOUT},SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},SHOW_DUPLICATE_ORDERS:{name:"show_duplicate_orders",variationType:VariationTypes.A_B_TESTING},NEW_RETURNS_WORKFLOW:{name:"new_returns_workflow",variationType:VariationTypes.A_B_TESTING},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT},INSIGHTS:{name:"insights",variationType:VariationTypes.ROLLOUT},JOIN_FLOW:{name:"join_flow_2024",variationType:VariationTypes.A_B_TESTING},ORDER_TAG_MVP:{name:"order_tag_mvp",variationType:VariationTypes.ROLLOUT},SHOW_PARCEL_BOT:{name:"show_ai_parcel_bot",variationType:VariationTypes.ROLLOUT},FEDEX_NEW_API_ENABLED:{name:"fedex_new_api_enabled_ui",variationType:VariationTypes.ROLLOUT},PORTAL_REDIRECT:{name:"portal_redirect",variationType:VariationTypes.ROLLOUT}},react_sdk=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js")),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/uuid/index.js"),__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.wd("[Optimizely] ".concat(null==error?void 0:error.message))}};(0,react_sdk.Q_)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");function useFeatureFlag(featureFlag,options){var _a=(0,tslib_es6.zs)((0,react_sdk.A2)(featureFlag.name,{autoUpdate:!0,decideOptions:(null==options?void 0:options.blockEvent)?[react_sdk.kn.DISABLE_DECISION_EVENT]:[]}),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={timeoutId,startTime:Date.now()},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.errorEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_ERROR");this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())}}]);