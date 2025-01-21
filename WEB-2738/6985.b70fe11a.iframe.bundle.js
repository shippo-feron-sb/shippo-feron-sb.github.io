"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[6985],{"./app/modules/recommendations/hooks/useRecommendations.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nD:()=>APPLIED_RECOMMENDATIONS,ZO:()=>DISMISSED_RECOMMENDATIONS,GI:()=>useRecommendations});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),api=__webpack_require__("./app/services/api.ts"),orders_service=__webpack_require__("./app/services/orders.service.ts"),Parcel=__webpack_require__("./app/types/Parcel.ts"),observability=__webpack_require__("./app/utils/observability/index.ts"),segment=__webpack_require__("./app/utils/segment/index.ts"),DISMISSED_RECOMMENDATIONS="dismissed_recommendations",APPLIED_RECOMMENDATIONS="applied_recommendations",isDismissedOrApplied=function(orderId){var dismissedVal=localStorage.getItem(DISMISSED_RECOMMENDATIONS),appliedVal=localStorage.getItem(APPLIED_RECOMMENDATIONS);return!(!dismissedVal||!dismissedVal.includes(orderId))||!(!appliedVal||!appliedVal.includes(orderId))},persist=function(orderId,key){var storageValue=localStorage.getItem(key),recs=storageValue?new Set(storageValue.split(",")):new Set;return Array.isArray(orderId)?orderId.forEach((function(id){return recs.add(id)})):recs.add(orderId),localStorage.setItem(key,Array.from(recs).join(",")),recs},useRecommendations=function(orderId){var _a,_b,_c,_d,_e,storageValue,_f=(0,tslib_es6.zs)((0,react.useState)(!((storageValue=localStorage.getItem(DISMISSED_RECOMMENDATIONS))&&storageValue.split(",").length>=3)),2),showRecs=_f[0],setShowRecs=_f[1],_g=(0,tslib_es6.zs)((0,react.useState)(!!orderId&&isDismissedOrApplied(orderId)),2),isDismissed=_g[0],setIsDismissed=_g[1],_h=(0,tslib_es6.zs)((0,react.useState)(),2),recommendedEventOrderId=_h[0],setRecommendedEventOrderId=_h[1],_j=(0,useQuery.I)({enabled:!(!orderId||!showRecs),queryFn:function(){return function(orderId){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){return[2,api.YZ.request({method:"GET",url:"/orders/".concat(orderId,"/batch_entry/similar")})]}))}))}(orderId)},queryKey:["recommendations",orderId]}),similarOrdersData=_j.data,isLoading=_j.isLoading,ordersToUpdateCount=(null===(_b=null===(_a=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_a?void 0:_a.batch_entry_ids)||void 0===_b?void 0:_b.length)||0,dismissRecommendation=(0,react.useCallback)((function(){if(!orderId)throw new Error("No order to dismiss");(0,segment.u4)(segment.sV.recommendation_dismissed,{order_id:orderId});var dismissedOrdersSet=function(orderId){return persist(orderId,DISMISSED_RECOMMENDATIONS)}(orderId);setIsDismissed(!0),observability.O.singleEvent("RECOMMENDATION_DISMISSED",{orderId}),dismissedOrdersSet.size>=3&&(setShowRecs(!1),(0,segment.u4)(segment.sV.recommendations_dismissed),observability.O.singleEvent("RECOMMENDATIONS_DISMISSED"))}),[setShowRecs,orderId,setIsDismissed]),hasRecommendations=Boolean(orderId&&showRecs&&!isDismissed&&(null===(_c=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_c?void 0:_c.batch_entry_ids)&&(null===(_d=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_d?void 0:_d.batch_entry_ids.length)>=3);(0,react.useEffect)((function(){!orderId||!hasRecommendations||recommendedEventOrderId&&recommendedEventOrderId===orderId||((0,segment.u4)(segment.sV.recommended,{order_id:orderId,type:"parcel_template"}),observability.O.singleEvent("RECOMMENDED",{orderId}),setRecommendedEventOrderId(orderId))}),[recommendedEventOrderId,setRecommendedEventOrderId,hasRecommendations,orderId,null===(_e=null==similarOrdersData?void 0:similarOrdersData.data)||void 0===_e?void 0:_e.batch_entry_ids]),(0,react.useEffect)((function(){setIsDismissed(!!orderId&&isDismissedOrApplied(orderId))}),[orderId]);var applyRecommendation=(0,react.useCallback)((function(parcel){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){var res,error_1;return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:if(observability.O.startEvent("APPLIED_RECOMMENDATION",{id:orderId}),!hasRecommendations||!similarOrdersData)throw new Error("No recommendations to apply");if(isLoading)throw new Error("Cannot apply recommendations while loading");_a.label=1;case 1:return _a.trys.push([1,3,,4]),[4,(0,orders_service.pC)(similarOrdersData.data.batch_entry_ids,(0,Parcel.U2)(parcel))];case 2:return res=_a.sent(),orderId&&res.data&&Array.isArray(res.data)&&(orderIds=(0,tslib_es6.fX)([orderId],(0,tslib_es6.zs)(res.data.map((function(entry){return entry.order_object_id}))),!1),persist(orderIds,APPLIED_RECOMMENDATIONS),setIsDismissed(!0)),(0,segment.u4)(segment.sV.recommendation_applied,{order_id:orderId,recommended_batch_entry_ids:similarOrdersData.data.batch_entry_ids}),observability.O.successEvent("APPLIED_RECOMMENDATION",{id:orderId,orderId,recommendedBatchEntryIds:similarOrdersData.data.batch_entry_ids.join(", ")}),[2,res];case 3:throw error_1=_a.sent(),observability.O.errorEvent("APPLIED_RECOMMENDATION",{id:orderId,orderId,recommendedBatchEntryIds:similarOrdersData.data.batch_entry_ids.join(", ")}),new Error("Failed to apply recommendation",error_1);case 4:return[2]}var orderIds}))}))}),[hasRecommendations,similarOrdersData,isLoading,orderId]);return{applyRecommendation,dismissRecommendation,hasRecommendations,ordersToUpdateCount}}},"./app/pages/BlackbeardOrdersOptInOptOut/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kz:()=>clearOptInOutSnooze,V7:()=>getBlackbeardOrdersStorageValue,Wn:()=>getOptInOutDismissed,l3:()=>setBlackbeardOrdersStorageValue,FE:()=>shouldShowBlackbeardOrders,Xs:()=>snoozedOptInPrompt,Jg:()=>storeSnoozeValue});var moment=__webpack_require__("./node_modules/moment/moment.js"),ls=localStorage,removeOptInOptOutSnooze=function(optType){switch(optType){case"optIn":return ls.removeItem("ordersRevampOptInDismissed"),!0;case"optOut":return ls.removeItem("ordersRevampOptOutDismissed"),!0}},getOptInOutDismissed=function(type){var storedDateValue=ls.getItem("optIn"===type?"ordersRevampOptInDismissed":"ordersRevampOptOutDismissed");if(storedDateValue)try{return new Date(storedDateValue)}catch(_a){return}},snoozedOptInPrompt=function(optInOutType,startingDate){return function(startingDate,dismissedDate){if(!dismissedDate)return!1;var sevenDaysAgo=moment(startingDate).subtract(7,"days");return 7-moment(dismissedDate).diff(sevenDaysAgo,"days")<7}(startingDate,getOptInOutDismissed(optInOutType))},clearOptInOutSnooze=function(){removeOptInOptOutSnooze("optIn"),removeOptInOptOutSnooze("optOut")},setBlackbeardOrdersStorageValue=function(newValue){ls.setItem("ordersRevamp",newValue)},getBlackbeardOrdersStorageValue=function(){return ls.getItem("ordersRevamp")},shouldShowBlackbeardOrders=function(optInOutValue){return"optOut"!==optInOutValue},storeSnoozeValue=function(optInOutType){switch(optInOutType){case"optIn":ls.setItem("ordersRevampOptInDismissed",(new Date).toISOString());break;case"optOut":ls.setItem("ordersRevampOptOutDismissed",(new Date).toISOString())}}},"./app/services/orders.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nh:()=>countOrders,Xm:()=>createBatch,Z2:()=>createBatchEntriesForOrders,kc:()=>createBatchTransactions,fS:()=>createOrder,uR:()=>createPartialFulfillmentRequests,SJ:()=>fetchBatchEntryRules,UK:()=>getAll,fn:()=>getAllLabels,fH:()=>getBatch,p9:()=>getLabel,NX:()=>getOrCloneBatchEntriesForOrders,Zs:()=>getOrderBatchEntries,dS:()=>getOrderBatchEntry,Em:()=>getOrderPackingSlip,Mf:()=>getOrderTransactions,we:()=>getWithReturns,f0:()=>hideOrder,xC:()=>patchBatchEntries,Nl:()=>patchUpdateBatchEntryExtras,ie:()=>refreshBatchEntry,jy:()=>syncOrders,EZ:()=>updateBatchEntryAddress,Nr:()=>updateBatchEntryExtras,Et:()=>updateBatchEntryServiceLevelToken,su:()=>updateBatchEntryShipmentDate,pC:()=>updateParcel});var controller,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),moment=__webpack_require__("./node_modules/moment/moment.js"),addressBook=__webpack_require__("./app/constants/addressBook.ts"),api=__webpack_require__("./app/services/api.ts"),Address=__webpack_require__("./app/types/Address.ts"),OrderBatchEntry=__webpack_require__("./app/types/OrderBatchEntry.ts"),Parcel=__webpack_require__("./app/types/Parcel.ts"),observability=__webpack_require__("./app/utils/observability/index.ts"),request_watcher=__webpack_require__("./app/utils/request-watcher.ts"),getAll=function(page,filters,fetchCount,showOnlyHidden,sort,sortBy,orderBy){return api.YZ.request({headers:{X_ORDERS_SEARCH_VERSION:"ORDERS_SEARCH_ORDER_NUMBER"},method:"GET",params:(0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},filters),{page,sort:""!==sort?sort:void 0}),(null==sortBy?void 0:sortBy.length)?{sort_by:sortBy}:{}),(null==orderBy?void 0:orderBy.length)?{order_by:orderBy}:{}),(null==fetchCount?void 0:fetchCount.length)?{results:fetchCount}:{}),{hidden:showOnlyHidden}),filters.is_international?{destination:"true"===filters.is_international?"international":"domestic"}:{}),{is_return_included:!0}),url:"/orders"})},getWithReturns=function(orderId){return api.YZ.request({method:"GET",params:{is_return_included:!0},url:"/orders/".concat(orderId)})},getOrderTransactions=function(orderObjectId){return api.kC.request({method:"GET",params:{results:200},url:"/orders/".concat(orderObjectId,"/transactions")})},createOrder=function(order){return api.kC.request({data:order,method:"POST",url:"orders/"})},countOrders=function(){return api.YZ.request({headers:{X_ORDERS_SEARCH_VERSION:"ORDERS_SEARCH_ORDER_NUMBER"},method:"GET",params:{page:1,results:1},url:"/orders"})},getBatch=function(batchId){return api.YZ.request({method:"GET",url:"/batch/".concat(batchId)})},createBatch=function(orderObjectIds,batchEntryIds){return api.YZ.request({data:{batch_entries:batchEntryIds,orders:orderObjectIds},method:"POST",url:"/batch/"})},createBatchTransactions=function(batchId,rates,excludedOrders){return api.YZ.request({data:{excluded_orders:excludedOrders,rates},method:"POST",url:"/batch/".concat(batchId,"/transactions")})},syncOrders=function(){return api.Ay.request({method:"GET",url:"orders/sync"})},getOrderPackingSlip=function(orderObjectIds,batchEntryIds){return api.Ay.request({method:"GET",params:{id:orderObjectIds,only_be_id:batchEntryIds},url:"orders/packingslip"})},getAllLabels=function(orderObjectIds,batchEntryIds){return api.kC.request({data:{action:{list:orderObjectIds,type:"merge_labels"},batch_entries:batchEntryIds},method:"POST",url:"orders/"})},getLabel=function(transactionIds,fileFormat){return api.YZ.request({data:{legacy_file_format:fileFormat,transactions:transactionIds},method:"POST",url:"label_regen/"})},hideOrder=function(orderObjectIds){return api.kC.request({data:{action:{list:orderObjectIds,type:"hide"}},method:"POST",url:"orders/"})},createBatchEntriesForOrders=function(orderObjectIds,isRating){return api.YZ.request({data:{is_rating:!!isRating,orders:orderObjectIds},method:"POST",url:"orders/batch_entry"})},getOrCloneBatchEntriesForOrders=function(orderObjectIDs,batchEntryIDs){return api.YZ.request({data:{batch_entries:batchEntryIDs,is_integrated:!0,orders:orderObjectIDs},method:"POST",url:"orders/batch_entry"})},buildRequestParcel=function(parcel){var parcelData=parcel.use_imported_order_weight?{use_imported_order_weight:parcel.use_imported_order_weight}:{mass_unit:parcel.mass_unit,weight:parcel.weight},carrierTemplateVariableDimensions=parcel.carrier_parcel_template&&parcel.carrier_parcel_template.is_variable_dimensions;return parcel.user_parcel_template?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{user_parcel_template_object_id:parcel.user_parcel_template&&parcel.user_parcel_template.object_id}):parcel.carrier_parcel_template&&!carrierTemplateVariableDimensions?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{carrier_parcel_template_token:parcel.carrier_parcel_template&&parcel.carrier_parcel_template.token}):parcel.carrier_parcel_template&&carrierTemplateVariableDimensions?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{carrier_parcel_template_token:parcel.carrier_parcel_template&&parcel.carrier_parcel_template.token,distance_unit:parcel.distance_unit,height:parcel.height,length:parcel.length,width:parcel.width}):(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},parcelData),{distance_unit:parcel.distance_unit,height:parcel.height,length:parcel.length,width:parcel.width})},patchBatchEntries=function(batchEntryIds,parcel,extras){var requestParcel=parcel?buildRequestParcel((0,Parcel.U2)(parcel)):void 0,requestExtras=extras?(0,OrderBatchEntry.j3)(extras):void 0;return api.YZ.request({data:{batch_entries:batchEntryIds,extras:requestExtras,parcel:requestParcel},method:"PATCH",url:"batch_entry/"})},updateParcel=function(batchEntryIds,parcel){var requestParcel=buildRequestParcel(parcel);return api.YZ.request({data:{batch_entries:batchEntryIds,parcel:requestParcel},method:"PUT",url:"orders/batch_entry/parcel"})},updateBatchEntryExtras=function(batchEntryIds,extras){return api.YZ.request({data:{batch_entries:batchEntryIds,extras:(0,OrderBatchEntry.j3)(extras)},method:"PUT",url:"orders/batch_entry/extras"})},patchUpdateBatchEntryExtras=function(batchEntryIds,extras){return api.YZ.request({data:{batch_entries:batchEntryIds,extras:(0,OrderBatchEntry.j3)(extras)},method:"PATCH",url:"orders/batch_entry/extras"})},updateBatchEntryAddress=function(address,addressType,batchEntryIds){var _a,parsedAddress=address.id?address.id:(0,Address.U2)(address),convertedAddressType=addressType===addressBook.y9?"from":addressType,url="orders/batch_entry/address_".concat(convertedAddressType),data=((_a={})["number"==typeof parsedAddress?"address_".concat(convertedAddressType,"_id"):"address_".concat(convertedAddressType)]=parsedAddress,_a.batch_entries=batchEntryIds,_a);return api.YZ.request({data,method:"PUT",url})},updateBatchEntryServiceLevelToken=function(preferredServiceLevelToken,batchEntryIds,accountObjectId){return api.YZ.request({data:{batch_entries:batchEntryIds,preferred_account_object_id:accountObjectId,preferred_service_level_token:preferredServiceLevelToken},method:"PUT",url:"batch_entry/service_level"})},updateBatchEntryShipmentDate=function(shipmentDate,batchEntryIds){return api.YZ.request({data:{batch_entries:batchEntryIds,shipment_date:moment.isMoment(shipmentDate)?shipmentDate.format():(0,format.default)(shipmentDate,"yyyy-MM-dd'T'HH:mm:ssxxx")},method:"PUT",url:"/batch_entry/shipment_date"})},refreshBatchEntryWithCancel=function(batchEntryIds){return controller&&(0,request_watcher.IV)("/orders/batch_entry/refresh")&&(observability.O.singleEvent("RETRY_SHIPMENT_CANCELLED"),controller.abort(),(0,request_watcher.rS)("/orders/batch_entry/refresh")),controller=new AbortController,api.YZ.request({data:{batch_entries:batchEntryIds},method:"PUT",signal:controller.signal,url:"/orders/batch_entry/refresh"})},refreshBatchEntry=function(batchEntryIds){return refreshBatchEntryWithCancel(batchEntryIds)},getOrderBatchEntry=function(orderObjectId,includeReturns){return void 0===includeReturns&&(includeReturns=!1),api.YZ.request({method:"GET",params:{is_return_included:includeReturns},url:"/orders/".concat(orderObjectId,"/batch_entry")})},getOrderBatchEntries=function(orderObjectIds,includeReturns){return void 0===includeReturns&&(includeReturns=!1),api.YZ.request({method:"GET",params:{is_return_included:includeReturns,orders:orderObjectIds},url:"/batch_entry"})},fetchBatchEntryRules=function(batchEntryId){return api.YZ.request({method:"GET",url:"/batch_entry/".concat(batchEntryId,"/rule")})},createPartialFulfillmentRequests=function(orderObjectId,partialFulfillmentRequests){return api.YZ.request({data:{shipments:partialFulfillmentRequests},method:"POST",url:"orders/".concat(orderObjectId,"/split")})};api.mM.getWebOrders},"./app/utils/fullstory/tracking.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>FullStoryEvent,q:()=>fullStoryTracking});var GetStartedLocalStorageKeys,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),onboarding=__webpack_require__("./app/constants/onboarding.ts"),useRecommendations=__webpack_require__("./app/modules/recommendations/hooks/useRecommendations.tsx");!function(GetStartedLocalStorageKeys){GetStartedLocalStorageKeys.FORCE_GET_STARTED="shippo_get_started_force_show",GetStartedLocalStorageKeys.SKIP_GET_STARTED="shippo_skip_get_started"}(GetStartedLocalStorageKeys||(GetStartedLocalStorageKeys={}));!function(){function ShippoTools(){this.setup()}ShippoTools.prototype.buildTools=function(){return{clearRecommendationDismissal:function(){localStorage.removeItem(useRecommendations.ZO),localStorage.removeItem(useRecommendations.nD)},debugAnalytics:function(){sessionStorage.setItem("shippo_debug_analytics","true")},forceGetStarted:function(){localStorage.setItem(GetStartedLocalStorageKeys.FORCE_GET_STARTED,"true"),location.assign("/orders")},forceOnboarding:function(){localStorage.removeItem(onboarding.k.ONBOARDING_COMPLETED),localStorage.removeItem(onboarding.k.ONBOARDING_LAST_COMPLETED_STEP),localStorage.removeItem(onboarding.k.ONBOARDING_CURRENT_STEP),localStorage.removeItem(onboarding.k.ONBOARDING_BUSINESS_TYPE),localStorage.removeItem(onboarding.k.ONBOARDING_BUSINESS_NEED),localStorage.removeItem(onboarding.k.ONBOARDING_SHOW_WELCOME_MESSAGE),localStorage.removeItem(onboarding.k.ONBOARDING_ORDER_MECHANISM),localStorage.removeItem(onboarding.k.ONBOARDING_ACTIVE_STORE),localStorage.removeItem(onboarding.k.ONBOARDING_USER_COUNTRY),localStorage.setItem(onboarding.k.ONBOARDING_ACTIVE,"true"),location.reload()},removeForceGetStarted:function(){localStorage.removeItem(GetStartedLocalStorageKeys.FORCE_GET_STARTED),location.assign("/orders")}}},ShippoTools.prototype.setup=function(){window.shippo||(window.shippo=this.buildTools())}}();var FullStoryEvent,JWTError=function(_super){function JWTError(message){var _this=_super.call(this,message)||this;return _this.name="JWTError",_this}return(0,tslib_es6.C6)(JWTError,_super),JWTError}(Error),parseJwt=function(token){try{if(!token)return null;var parts=token.split(".");if(3!==parts.length)throw new JWTError("Invalid JWT format");for(var base64=parts[1].replace(/-/g,"+").replace(/_/g,"/"),paddedBase64=base64+"=".repeat((4-base64.length%4)%4),decoded=window.atob(paddedBase64),bytes=new Uint8Array(decoded.length),i=0;i<decoded.length;i++)bytes[i]=decoded.charCodeAt(i);var jsonPayload=(new TextDecoder).decode(bytes),payload=JSON.parse(jsonPayload);if("object"!=typeof payload||null===payload)throw new JWTError("Invalid JWT payload");return payload}catch(e){if(e instanceof JWTError)throw e;return null}};!function(FullStoryEvent){FullStoryEvent.CONFIRMATION_DRAWER_OPENED="Confirmation Drawer Opened",FullStoryEvent.LABEL_PURCHASE_DRAWER_OPENED="Label Purchase Drawer Opened",FullStoryEvent.ONBOARDING_COMPLETED="Onboarding Completed",FullStoryEvent.RETURN_DRAWER_OPENED="Return Drawer Opened",FullStoryEvent.SIGNED_UP="Signed Up",FullStoryEvent.USER_SHOWN_INSURANCE_RISK_SCORE_CALLOUT="User Shown Insurance Risk Score Callout"}(FullStoryEvent||(FullStoryEvent={}));var getStandardProperties=function(){var jwtInfo=function(){var cookie=document.cookie.split(";").find((function(c){return c.trim().toLowerCase().startsWith("jwt=")}));if(!cookie)return null;var token=(0,tslib_es6.zs)(cookie.split("=")).slice(1).join("=").trim();if(!token)throw new JWTError("JWT cookie found but value is empty");return parseJwt(token)}();return{login_user_id:null==jwtInfo?void 0:jwtInfo.login_user_id}},fullStoryTracking=function(name,properties){var eventProperties=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},properties),getStandardProperties());"true"===sessionStorage.getItem("shippo_debug_analytics")&&console.log("%c⭕ ".concat(name),"font-weight:bold;",eventProperties),(0,index_esm.Dp)()&&(0,index_esm.f0)(name,eventProperties)}},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.errorEvent=function(name,attributes,severity){void 0===severity&&(severity="ERROR");var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_").concat(severity);this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.singleEvent=function(name,attributes){this.sendPageAction(name,attributes),this.sendFullStoryLog(name,attributes),this.sendFullStoryEvent(name,attributes)},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={startTime:Date.now(),timeoutId},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sV:()=>schema.Ay,P0:()=>getLocalTraits,ls:()=>segment_identify,Ok:()=>isTraitDifferent,u4:()=>track});var tracking=__webpack_require__("./app/utils/fullstory/tracking.ts"),newRelic_newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts");__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/pages/BlackbeardOrdersOptInOptOut/helpers.ts"),__webpack_require__("./app/selectors/user.selectors.ts");var schema=__webpack_require__("./app/utils/segment/schema.ts"),segment_identify=function(id,traits){window.analytics?window.analytics.identify(id,traits):newRelic_newRelic.S.log("Segment identify called before window.analytics was available",{level:"WARN"})},track=function(name,properties){if(schema.oe.includes(name)&&(0,tracking.q)(name,properties),window.analytics)return window.analytics.track(name,properties);newRelic_newRelic.S.log("Segment track called before window.analytics was available",{level:"WARN"})},getLocalTraits=function(){var ajsUserTraits=localStorage.getItem("ajs_user_traits");if(ajsUserTraits)try{return JSON.parse(ajsUserTraits)}catch(error){return}},isTraitDifferent=function(property,value){var localTraits=getLocalTraits();return!(localTraits&&localTraits[property]===value)}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Events;__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,ID:()=>EVENT_ORIGIN_ORDER_DETAILS,hX:()=>EVENT_ORIGIN_LEGACY_ORDER,oe:()=>FullStoryEventsToBeTracked}),function(Events){Events.address_created="Address Created",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.credit_card_added="Credit Card Added",Events.customs_items_form_submit="Customs Items Form Submit",Events.customs_options_form_submit="Customs Options Form Submit",Events.downgrade_survey_cancelled="Pro Plan Downgrade Survey Cancelled",Events.downgrade_survey_completed="Pro Plan Downgrade Survey Completed",Events.downgrade_survey_question_answered="Pro Plan Downgrade Survey Question Answered",Events.downgrade_survey_submitted="Pro Plan Downgrade Survey Submitted",Events.email_notification_changed="Email Notifications Changed",Events.embeddable_next_params="Embeddable User Set Next Params",Events.get_started_viewed="Get Started Page View",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_option_onboarding="Insurance option during onboarding",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.insurance_updated="Insurance Updated",Events.insurance_upsell_experiment="Insurance Upsell Experiment",Events.label_downloaded="Label Downloaded",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.not_found_page_viewed="Not Found Page Viewed",Events.onboarding_completed="Onboarding Completed",Events.onboarding_step_completed="Step Completed",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.package_info_edited="Package Info Updated",Events.package_template_created="Package Template Created",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.plan_updated="Plan Updated",Events.promo_code_add_replace="Promo code added or replaced",Events.recommendation_applied="Recommendation Applied",Events.recommendation_dismissed="Recommendation Dismissed",Events.recommendations_dismissed="Recommendations Dismissed",Events.recommended="Recommended",Events.registered="Signed Up",Events.save_default_package_units="Default package units updated",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.store_initiated="Store Connection Initiated",Events.tracking_status_viewed="Tracking Status Viewed",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.ups_surcharge_warning="UPS surcharge warnings"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table",FullStoryEventsToBeTracked=[Events.label_purchase,Events.label_purchase_failed,Events.credit_card_added];const __WEBPACK_DEFAULT_EXPORT__=Events}}]);