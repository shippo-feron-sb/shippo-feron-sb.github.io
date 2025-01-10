"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[6985],{"./app/modules/recommendations/hooks/useRecommendations.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nD:()=>APPLIED_RECOMMENDATIONS,ZO:()=>DISMISSED_RECOMMENDATIONS,GI:()=>useRecommendations});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),api=__webpack_require__("./app/services/api.ts"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),Parcel=__webpack_require__("./app/types/Parcel.ts"),orders_service=__webpack_require__("./app/services/orders.service.ts"),segment=__webpack_require__("./app/utils/segment/index.ts"),observability=__webpack_require__("./app/utils/observability/index.ts"),DISMISSED_RECOMMENDATIONS="dismissed_recommendations",APPLIED_RECOMMENDATIONS="applied_recommendations",isDismissedOrApplied=function(orderId){var dismissedVal=localStorage.getItem(DISMISSED_RECOMMENDATIONS),appliedVal=localStorage.getItem(APPLIED_RECOMMENDATIONS);return!(!dismissedVal||!dismissedVal.includes(orderId))||!(!appliedVal||!appliedVal.includes(orderId))},persist=function(orderId,key){var storageValue=localStorage.getItem(key),recs=storageValue?new Set(storageValue.split(",")):new Set;return Array.isArray(orderId)?orderId.forEach((function(id){return recs.add(id)})):recs.add(orderId),localStorage.setItem(key,Array.from(recs).join(",")),recs},useRecommendations=function(orderId){var _a,_b,_c,_d,_e,storageValue,_f=(0,tslib_es6.zs)((0,react.useState)(!((storageValue=localStorage.getItem(DISMISSED_RECOMMENDATIONS))&&storageValue.split(",").length>=3)),2),showRecs=_f[0],setShowRecs=_f[1],_g=(0,tslib_es6.zs)((0,react.useState)(!!orderId&&isDismissedOrApplied(orderId)),2),isDismissed=_g[0],setIsDismissed=_g[1],_h=(0,tslib_es6.zs)((0,react.useState)(),2),recommendedEventOrderId=_h[0],setRecommendedEventOrderId=_h[1],_j=(0,useQuery.I)({queryKey:["recommendations",orderId],queryFn:function(){return function(orderId){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){return[2,api.YZ.request({url:"/orders/".concat(orderId,"/batch_entry/similar"),method:"GET"})]}))}))}(orderId)},enabled:!(!orderId||!showRecs)}),similarOrdersData=_j.data,isLoading=_j.isLoading,ordersToUpdateCount=(null===(_b=null===(_a=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_a?void 0:_a.batch_entry_ids)||void 0===_b?void 0:_b.length)||0,dismissRecommendation=(0,react.useCallback)((function(){if(!orderId)throw new Error("No order to dismiss");(0,segment.u4)(segment.sV.recommendation_dismissed,{order_id:orderId});var dismissedOrdersSet=function(orderId){return persist(orderId,DISMISSED_RECOMMENDATIONS)}(orderId);setIsDismissed(!0),observability.O.singleEvent("RECOMMENDATION_DISMISSED",{orderId}),dismissedOrdersSet.size>=3&&(setShowRecs(!1),(0,segment.u4)(segment.sV.recommendations_dismissed),observability.O.singleEvent("RECOMMENDATIONS_DISMISSED"))}),[setShowRecs,orderId,setIsDismissed]),hasRecommendations=Boolean(orderId&&showRecs&&!isDismissed&&(null===(_c=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_c?void 0:_c.batch_entry_ids)&&(null===(_d=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_d?void 0:_d.batch_entry_ids.length)>=3);(0,react.useEffect)((function(){!orderId||!hasRecommendations||recommendedEventOrderId&&recommendedEventOrderId===orderId||((0,segment.u4)(segment.sV.recommended,{order_id:orderId,type:"parcel_template"}),observability.O.singleEvent("RECOMMENDED",{orderId}),setRecommendedEventOrderId(orderId))}),[recommendedEventOrderId,setRecommendedEventOrderId,hasRecommendations,orderId,null===(_e=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_e?void 0:_e.batch_entry_ids]),(0,react.useEffect)((function(){setIsDismissed(!!orderId&&isDismissedOrApplied(orderId))}),[orderId]);var applyRecommendation=(0,react.useCallback)((function(parcel){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){var res,error_1;return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:if(observability.O.startEvent("APPLIED_RECOMMENDATION",{id:orderId}),!hasRecommendations||!similarOrdersData)throw new Error("No recommendations to apply");if(isLoading)throw new Error("Cannot apply recommendations while loading");_a.label=1;case 1:return _a.trys.push([1,3,,4]),[4,(0,orders_service.pC)(similarOrdersData.data.batch_entry_ids,(0,Parcel.U2)(parcel))];case 2:return res=_a.sent(),orderId&&res.data&&Array.isArray(res.data)&&(orderIds=(0,tslib_es6.fX)([orderId],(0,tslib_es6.zs)(res.data.map((function(entry){return entry.order_object_id}))),!1),persist(orderIds,APPLIED_RECOMMENDATIONS),setIsDismissed(!0)),(0,segment.u4)(segment.sV.recommendation_applied,{order_id:orderId,recommended_batch_entry_ids:similarOrdersData.data.batch_entry_ids}),observability.O.successEvent("APPLIED_RECOMMENDATION",{id:orderId,orderId,recommendedBatchEntryIds:similarOrdersData.data.batch_entry_ids.join(", ")}),[2,res];case 3:throw error_1=_a.sent(),observability.O.errorEvent("APPLIED_RECOMMENDATION",{id:orderId,orderId,recommendedBatchEntryIds:similarOrdersData.data.batch_entry_ids.join(", ")}),new Error("Failed to apply recommendation",error_1);case 4:return[2]}var orderIds}))}))}),[hasRecommendations,similarOrdersData,isLoading,orderId]);return{hasRecommendations,dismissRecommendation,applyRecommendation,ordersToUpdateCount}}},"./app/pages/BlackbeardOrdersOptInOptOut/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kz:()=>clearOptInOutSnooze,V7:()=>getBlackbeardOrdersStorageValue,Wn:()=>getOptInOutDismissed,l3:()=>setBlackbeardOrdersStorageValue,FE:()=>shouldShowBlackbeardOrders,Xs:()=>snoozedOptInPrompt,Jg:()=>storeSnoozeValue});var moment=__webpack_require__("./node_modules/moment/moment.js");var BLACKBEARD_ORDERS_STORAGE_KEY="ordersRevamp",OPT_IN_SNOOZED_STORAGE_KEY="ordersRevampOptInDismissed",OPT_OUT_SNOOZED_STORAGE_KEY="ordersRevampOptOutDismissed",ls=function getLocalStorage(){return localStorage}();function removeOptInOptOutSnooze(optType){switch(optType){case"optIn":return ls.removeItem(OPT_IN_SNOOZED_STORAGE_KEY),!0;case"optOut":return ls.removeItem(OPT_OUT_SNOOZED_STORAGE_KEY),!0}}function getOptInOutDismissed(type){var storedDateValue=ls.getItem("optIn"===type?OPT_IN_SNOOZED_STORAGE_KEY:OPT_OUT_SNOOZED_STORAGE_KEY);if(storedDateValue)try{return new Date(storedDateValue)}catch(_a){return}}function snoozedOptInPrompt(optInOutType,startingDate){return function snoozedRecently(startingDate,dismissedDate){if(!dismissedDate)return!1;var sevenDaysAgo=moment(startingDate).subtract(7,"days");return 7-moment(dismissedDate).diff(sevenDaysAgo,"days")<7}(startingDate,getOptInOutDismissed(optInOutType))}function clearOptInOutSnooze(){removeOptInOptOutSnooze("optIn"),removeOptInOptOutSnooze("optOut")}function setBlackbeardOrdersStorageValue(newValue){ls.setItem(BLACKBEARD_ORDERS_STORAGE_KEY,newValue)}function getBlackbeardOrdersStorageValue(){return ls.getItem(BLACKBEARD_ORDERS_STORAGE_KEY)}function shouldShowBlackbeardOrders(optInOutValue){return"optOut"!==optInOutValue}function storeSnoozeValue(optInOutType){switch(optInOutType){case"optIn":ls.setItem(OPT_IN_SNOOZED_STORAGE_KEY,(new Date).toISOString());break;case"optOut":ls.setItem(OPT_OUT_SNOOZED_STORAGE_KEY,(new Date).toISOString())}}},"./app/services/orders.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nh:()=>countOrders,Xm:()=>createBatch,Z2:()=>createBatchEntriesForOrders,kc:()=>createBatchTransactions,fS:()=>createOrder,uR:()=>createPartialFulfillmentRequests,SJ:()=>fetchBatchEntryRules,UK:()=>getAll,fn:()=>getAllLabels,fH:()=>getBatch,p9:()=>getLabel,NX:()=>getOrCloneBatchEntriesForOrders,Zs:()=>getOrderBatchEntries,dS:()=>getOrderBatchEntry,Em:()=>getOrderPackingSlip,Mf:()=>getOrderTransactions,we:()=>getWithReturns,f0:()=>hideOrder,xC:()=>patchBatchEntries,Nl:()=>patchUpdateBatchEntryExtras,ie:()=>refreshBatchEntry,jy:()=>syncOrders,EZ:()=>updateBatchEntryAddress,Nr:()=>updateBatchEntryExtras,Et:()=>updateBatchEntryServiceLevelToken,su:()=>updateBatchEntryShipmentDate,pC:()=>updateParcel});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),addressBook=__webpack_require__("./app/constants/addressBook.ts"),DATE_FORMAT_WITH_TIMEZONE="yyyy-MM-dd'T'HH:mm:ssxxx",format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),moment=__webpack_require__("./node_modules/moment/moment.js"),api=__webpack_require__("./app/services/api.ts"),Address=__webpack_require__("./app/types/Address.ts"),OrderBatchEntry=__webpack_require__("./app/types/OrderBatchEntry.ts"),Parcel=__webpack_require__("./app/types/Parcel.ts"),request_watcher=__webpack_require__("./app/utils/request-watcher.ts"),observability=__webpack_require__("./app/utils/observability/index.ts"),X_ORDERS_SEARCH_VERSION="ORDERS_SEARCH_ORDER_NUMBER";function getAll(page,filters,fetchCount,showOnlyHidden,sort,sortBy,orderBy){return api.YZ.request({url:"/orders",method:"GET",headers:{X_ORDERS_SEARCH_VERSION},params:(0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},filters),{page,sort:""!==sort?sort:void 0}),(null==sortBy?void 0:sortBy.length)?{sort_by:sortBy}:{}),(null==orderBy?void 0:orderBy.length)?{order_by:orderBy}:{}),(null==fetchCount?void 0:fetchCount.length)?{results:fetchCount}:{}),{hidden:showOnlyHidden}),filters.is_international?{destination:"true"===filters.is_international?"international":"domestic"}:{}),{is_return_included:!0})})}function getWithReturns(orderId){return api.YZ.request({url:"/orders/".concat(orderId),method:"GET",params:{is_return_included:!0}})}function getOrderTransactions(orderObjectId){return api.kC.request({url:"/orders/".concat(orderObjectId,"/transactions"),method:"GET",params:{results:200}})}function createOrder(order){return api.kC.request({url:"orders/",method:"POST",data:order})}function countOrders(){return api.YZ.request({url:"/orders",headers:{X_ORDERS_SEARCH_VERSION},method:"GET",params:{results:1,page:1}})}function getBatch(batchId){return api.YZ.request({url:"/batch/".concat(batchId),method:"GET"})}function createBatch(orderObjectIds,batchEntryIds){return api.YZ.request({url:"/batch/",method:"POST",data:{orders:orderObjectIds,batch_entries:batchEntryIds}})}function createBatchTransactions(batchId,rates,excludedOrders){return api.YZ.request({url:"/batch/".concat(batchId,"/transactions"),method:"POST",data:{rates,excluded_orders:excludedOrders}})}function syncOrders(){return api.Ay.request({url:"orders/sync",method:"GET"})}function getOrderPackingSlip(orderObjectIds,batchEntryIds){return api.Ay.request({url:"orders/packingslip",method:"GET",params:{id:orderObjectIds,only_be_id:batchEntryIds}})}function getAllLabels(orderObjectIds,batchEntryIds){return api.kC.request({url:"orders/",method:"POST",data:{batch_entries:batchEntryIds,action:{list:orderObjectIds,type:"merge_labels"}}})}function getLabel(transactionIds,fileFormat){return api.YZ.request({url:"label_regen/",method:"POST",data:{transactions:transactionIds,legacy_file_format:fileFormat}})}function hideOrder(orderObjectIds){return api.kC.request({url:"orders/",method:"POST",data:{action:{list:orderObjectIds,type:"hide"}}})}function createBatchEntriesForOrders(orderObjectIds,isRating){return api.YZ.request({url:"orders/batch_entry",method:"POST",data:{orders:orderObjectIds,is_rating:!!isRating}})}function getOrCloneBatchEntriesForOrders(orderObjectIDs,batchEntryIDs){return api.YZ.request({url:"orders/batch_entry",method:"POST",data:{orders:orderObjectIDs,batch_entries:batchEntryIDs,is_integrated:!0}})}var buildRequestParcel=function(parcel){var parcelData=parcel.use_imported_order_weight?{use_imported_order_weight:parcel.use_imported_order_weight}:{weight:parcel.weight,mass_unit:parcel.mass_unit},carrierTemplateVariableDimensions=parcel.carrier_parcel_template&&parcel.carrier_parcel_template.is_variable_dimensions;return parcel.user_parcel_template?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{user_parcel_template_object_id:parcel.user_parcel_template&&parcel.user_parcel_template.object_id}):parcel.carrier_parcel_template&&!carrierTemplateVariableDimensions?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{carrier_parcel_template_token:parcel.carrier_parcel_template&&parcel.carrier_parcel_template.token}):parcel.carrier_parcel_template&&carrierTemplateVariableDimensions?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{carrier_parcel_template_token:parcel.carrier_parcel_template&&parcel.carrier_parcel_template.token,width:parcel.width,length:parcel.length,height:parcel.height,distance_unit:parcel.distance_unit}):(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{width:parcel.width,length:parcel.length,height:parcel.height,distance_unit:parcel.distance_unit})};function patchBatchEntries(batchEntryIds,parcel,extras){var requestParcel=parcel?buildRequestParcel((0,Parcel.U2)(parcel)):void 0,requestExtras=extras?(0,OrderBatchEntry.j3)(extras):void 0;return api.YZ.request({url:"batch_entry/",method:"PATCH",data:{batch_entries:batchEntryIds,parcel:requestParcel,extras:requestExtras}})}function updateParcel(batchEntryIds,parcel){var requestParcel=buildRequestParcel(parcel);return api.YZ.request({url:"orders/batch_entry/parcel",method:"PUT",data:{parcel:requestParcel,batch_entries:batchEntryIds}})}function updateBatchEntryExtras(batchEntryIds,extras){return api.YZ.request({url:"orders/batch_entry/extras",method:"PUT",data:{batch_entries:batchEntryIds,extras:(0,OrderBatchEntry.j3)(extras)}})}function patchUpdateBatchEntryExtras(batchEntryIds,extras){return api.YZ.request({url:"orders/batch_entry/extras",method:"PATCH",data:{batch_entries:batchEntryIds,extras:(0,OrderBatchEntry.j3)(extras)}})}function updateBatchEntryAddress(address,addressType,batchEntryIds){var _a,parsedAddress=address.id?address.id:(0,Address.U2)(address),convertedAddressType=addressType===addressBook.y9?"from":addressType,url="orders/batch_entry/address_".concat(convertedAddressType),data=((_a={batch_entries:batchEntryIds})["number"==typeof parsedAddress?"address_".concat(convertedAddressType,"_id"):"address_".concat(convertedAddressType)]=parsedAddress,_a);return api.YZ.request({url,data,method:"PUT"})}function updateBatchEntryServiceLevelToken(preferredServiceLevelToken,batchEntryIds,accountObjectId){return api.YZ.request({data:{batch_entries:batchEntryIds,preferred_service_level_token:preferredServiceLevelToken,preferred_account_object_id:accountObjectId},method:"PUT",url:"batch_entry/service_level"})}function updateBatchEntryShipmentDate(shipmentDate,batchEntryIds){return api.YZ.request({url:"/batch_entry/shipment_date",data:{batch_entries:batchEntryIds,shipment_date:moment.isMoment(shipmentDate)?shipmentDate.format():(0,format.default)(shipmentDate,DATE_FORMAT_WITH_TIMEZONE)},method:"PUT"})}var refreshBatchEntryWithCancel=function refreshBatchEntryRequest(){var controller;return function(batchEntryIds){return controller&&(0,request_watcher.IV)("/orders/batch_entry/refresh")&&(observability.O.singleEvent("RETRY_SHIPMENT_CANCELLED"),controller.abort(),(0,request_watcher.rS)("/orders/batch_entry/refresh")),controller=new AbortController,api.YZ.request({url:"/orders/batch_entry/refresh",method:"PUT",data:{batch_entries:batchEntryIds},signal:controller.signal})}}();function refreshBatchEntry(batchEntryIds){return refreshBatchEntryWithCancel(batchEntryIds)}function getOrderBatchEntry(orderObjectId,includeReturns){return void 0===includeReturns&&(includeReturns=!1),api.YZ.request({url:"/orders/".concat(orderObjectId,"/batch_entry"),method:"GET",params:{is_return_included:includeReturns}})}function getOrderBatchEntries(orderObjectIds,includeReturns){return void 0===includeReturns&&(includeReturns=!1),api.YZ.request({url:"/batch_entry",method:"GET",params:{orders:orderObjectIds,is_return_included:includeReturns}})}function fetchBatchEntryRules(batchEntryId){return api.YZ.request({url:"/batch_entry/".concat(batchEntryId,"/rule"),method:"GET"})}function createPartialFulfillmentRequests(orderObjectId,partialFulfillmentRequests){return api.YZ.request({url:"orders/".concat(orderObjectId,"/split"),method:"POST",data:{shipments:partialFulfillmentRequests}})}api.mM.getWebOrders},"./app/utils/fullstory/tracking.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>FullStoryEvent,q:()=>fullStoryTracking});var GetStartedLocalStorageKeys,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),onboarding=__webpack_require__("./app/constants/onboarding.ts");!function(GetStartedLocalStorageKeys){GetStartedLocalStorageKeys.FORCE_GET_STARTED="shippo_get_started_force_show",GetStartedLocalStorageKeys.SKIP_GET_STARTED="shippo_skip_get_started"}(GetStartedLocalStorageKeys||(GetStartedLocalStorageKeys={}));var FullStoryEvent,useRecommendations=__webpack_require__("./app/modules/recommendations/hooks/useRecommendations.tsx"),JWTError=(function(){function ShippoTools(){this.setup()}ShippoTools.prototype.setup=function(){window.shippo||(window.shippo=this.buildTools())},ShippoTools.prototype.buildTools=function(){return{forceOnboarding:function(){localStorage.removeItem(onboarding.k.ONBOARDING_COMPLETED),localStorage.removeItem(onboarding.k.ONBOARDING_LAST_COMPLETED_STEP),localStorage.removeItem(onboarding.k.ONBOARDING_CURRENT_STEP),localStorage.removeItem(onboarding.k.ONBOARDING_BUSINESS_TYPE),localStorage.removeItem(onboarding.k.ONBOARDING_BUSINESS_NEED),localStorage.removeItem(onboarding.k.ONBOARDING_SHOW_WELCOME_MESSAGE),localStorage.removeItem(onboarding.k.ONBOARDING_ORDER_MECHANISM),localStorage.removeItem(onboarding.k.ONBOARDING_ACTIVE_STORE),localStorage.removeItem(onboarding.k.ONBOARDING_USER_COUNTRY),localStorage.setItem(onboarding.k.ONBOARDING_ACTIVE,"true"),location.reload()},forceGetStarted:function(){localStorage.setItem(GetStartedLocalStorageKeys.FORCE_GET_STARTED,"true"),location.assign("/orders")},removeForceGetStarted:function(){localStorage.removeItem(GetStartedLocalStorageKeys.FORCE_GET_STARTED),location.assign("/orders")},clearRecommendationDismissal:function(){localStorage.removeItem(useRecommendations.ZO),localStorage.removeItem(useRecommendations.nD)},debugAnalytics:function(){sessionStorage.setItem("shippo_debug_analytics","true")}}}}(),function(_super){function JWTError(message){var _this=_super.call(this,message)||this;return _this.name="JWTError",_this}return(0,tslib_es6.C6)(JWTError,_super),JWTError}(Error)),parseJwt=function(token){try{if(!token)return null;var parts=token.split(".");if(3!==parts.length)throw new JWTError("Invalid JWT format");for(var base64=parts[1].replace(/-/g,"+").replace(/_/g,"/"),paddedBase64=base64+"=".repeat((4-base64.length%4)%4),decoded=window.atob(paddedBase64),bytes=new Uint8Array(decoded.length),i=0;i<decoded.length;i++)bytes[i]=decoded.charCodeAt(i);var jsonPayload=(new TextDecoder).decode(bytes),payload=JSON.parse(jsonPayload);if("object"!=typeof payload||null===payload)throw new JWTError("Invalid JWT payload");return payload}catch(e){if(e instanceof JWTError)throw e;return null}};!function(FullStoryEvent){FullStoryEvent.CONFIRMATION_DRAWER_OPENED="Confirmation Drawer Opened",FullStoryEvent.LABEL_PURCHASE_DRAWER_OPENED="Label Purchase Drawer Opened",FullStoryEvent.RETURN_DRAWER_OPENED="Return Drawer Opened",FullStoryEvent.ONBOARDING_COMPLETED="Onboarding Completed",FullStoryEvent.SIGNED_UP="Signed Up"}(FullStoryEvent||(FullStoryEvent={}));var getStandardProperties=function(){var jwtInfo=function(){var cookie=document.cookie.split(";").find((function(c){return c.trim().toLowerCase().startsWith("jwt=")}));if(!cookie)return null;var token=(0,tslib_es6.zs)(cookie.split("=")).slice(1).join("=").trim();if(!token)throw new JWTError("JWT cookie found but value is empty");return parseJwt(token)}();return{login_user_id:null==jwtInfo?void 0:jwtInfo.login_user_id}},fullStoryTracking=function(name,properties){var eventProperties=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},properties),getStandardProperties());"true"===sessionStorage.getItem("shippo_debug_analytics")&&console.log("%c⭕ ".concat(name),"font-weight:bold;",eventProperties),(0,index_esm.Dp)()&&(0,index_esm.f0)(name,eventProperties)}},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.singleEvent=function(name,attributes){this.sendPageAction(name,attributes),this.sendFullStoryLog(name,attributes),this.sendFullStoryEvent(name,attributes)},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={timeoutId,startTime:Date.now()},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.errorEvent=function(name,attributes,severity){void 0===severity&&(severity="ERROR");var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_").concat(severity);this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sV:()=>schema.Ay,P0:()=>getLocalTraits,ls:()=>segment_identify,Ok:()=>isTraitDifferent,u4:()=>track});var schema=__webpack_require__("./app/utils/segment/schema.ts");__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/pages/BlackbeardOrdersOptInOptOut/helpers.ts"),__webpack_require__("./app/selectors/user.selectors.ts");var tracking=__webpack_require__("./app/utils/fullstory/tracking.ts"),newRelic_newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),segment_identify=function(id,traits){window.analytics?window.analytics.identify(id,traits):newRelic_newRelic.S.log("Segment identify called before window.analytics was available",{level:"WARN"})},track=function(name,properties){if(schema.oe.includes(name)&&(0,tracking.q)(name,properties),window.analytics)return window.analytics.track(name,properties);newRelic_newRelic.S.log("Segment track called before window.analytics was available",{level:"WARN"})},getLocalTraits=function(){var ajsUserTraits=localStorage.getItem("ajs_user_traits");if(ajsUserTraits)try{return JSON.parse(ajsUserTraits)}catch(error){return}},isTraitDifferent=function(property,value){var localTraits=getLocalTraits();return!(localTraits&&localTraits[property]===value)}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Events;__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,ID:()=>EVENT_ORIGIN_ORDER_DETAILS,hX:()=>EVENT_ORIGIN_LEGACY_ORDER,oe:()=>FullStoryEventsToBeTracked}),function(Events){Events.registered="Signed Up",Events.store_initiated="Store Connection Initiated",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.insurance_upsell_experiment="Insurance Upsell Experiment",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated",Events.downgrade_survey_question_answered="Pro Plan Downgrade Survey Question Answered",Events.downgrade_survey_cancelled="Pro Plan Downgrade Survey Cancelled",Events.downgrade_survey_completed="Pro Plan Downgrade Survey Completed",Events.downgrade_survey_submitted="Pro Plan Downgrade Survey Submitted",Events.not_found_page_viewed="Not Found Page Viewed",Events.recommended="Recommended",Events.recommendation_dismissed="Recommendation Dismissed",Events.recommendations_dismissed="Recommendations Dismissed",Events.recommendation_applied="Recommendation Applied"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table",FullStoryEventsToBeTracked=[Events.label_purchase,Events.label_purchase_failed,Events.credit_card_added];const __WEBPACK_DEFAULT_EXPORT__=Events}}]);