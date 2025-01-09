(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1378],{"./app/assets/stores/zero.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"f01dfc78c8469af2ba14ce1c143349c1.svg"},"./app/utils/TrackingHelper/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>trackingHelper});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/index.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),trackingHelper=new(function(){function TrackingHelper(){this.appVersion="classic",this.isBulk=!1}return TrackingHelper.prototype.properties=function(){var _a;return{appVersionName:this.appVersion,isBulk:this.isBulk,orderId:this.orderId,orderIds:this.orderIds,userDetails:this.userDetails,trackedOrderDetailsByShipment:this.trackedOrderDetailsByShipment,selectedOrders:this.selectedOrders,orderQuantity:(null===(_a=this.orderIds)||void 0===_a?void 0:_a.length)||(this.orderId?1:0)}},TrackingHelper.prototype.getReferenceId=function(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()},TrackingHelper.prototype.getBaseTrackingReference=function(initialEventName,appLocation){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({initialEventName,referenceId:this.getReferenceId(),appLocation},(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.properties()))},TrackingHelper.prototype.extendTrackingReference=function(trackingReference,requiredProps){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(trackingReference)),(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(requiredProps))},TrackingHelper.prototype.appendGlobalProps=function(input){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},input),(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.properties()))},TrackingHelper.prototype.getTrackingReference=function(initialEventName,appLocation,requiredProps){var trackingReference=this.getBaseTrackingReference(initialEventName,appLocation);return this.extendTrackingReference(trackingReference,requiredProps)},TrackingHelper.prototype.amendTrackingReferenceOrders=function(trackingReference,orderIds){var duped=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(trackingReference);if(duped.orderId=void 0,duped.orderIds=void 0,duped.orderQuantity=void 0,duped.isBulk=!1,!orderIds)return duped;switch(orderIds.length){case 0:return duped;case 1:return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},duped),{orderId:orderIds[0],orderQuantity:1});default:return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},duped),{orderIds,orderQuantity:orderIds.length,isBulk:!0})}},TrackingHelper.prototype.amendTrackingReferenceTrackedOrderDetailsByShipment=function(trackingReference,trackedOrderDetailsByShipment){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(trackingReference)),{trackedOrderDetailsByShipment})},TrackingHelper.prototype.amendTrackingReferenceOrderSelection=function(trackingReference,selectedOrders){if(!selectedOrders)return trackingReference;var orderIds=Object.keys(selectedOrders),trackingReferenceWithOrderIds=trackingHelper.amendTrackingReferenceOrders(trackingReference,orderIds);return trackingReferenceWithOrderIds.selectedOrders=selectedOrders,trackingReferenceWithOrderIds},TrackingHelper}())},"./app/utils/TrackingHelper/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _a;__webpack_require__.d(__webpack_exports__,{BI:()=>RECIPIENT_ADDRESS_BOOK_UPDATED,Fd:()=>RATES_UPDATED_EVENT,Gf:()=>INSURANCE_UPSELL_EVENT,MX:()=>LABEL_PURCHASED_EVENT,N6:()=>RATE_DISPLAYED_EVENT,RR:()=>RECIPIENT_ADDRESS_BOOK_QUERIED,T1:()=>STORE_CONNECTION_SETTINGS,UQ:()=>CARRIER_ACCOUNT_TRACKING_EVENT,WZ:()=>BULK_BAR_TRACKING_EVENT,Xo:()=>MANIFEST_TRACKING_EVENT,eJ:()=>ADDRESS_TRACKING_EVENT,eT:()=>LABEL_UPDATED_EVENT,es:()=>PAYMENT_METHOD_EVENT,iB:()=>ORDER_TRACKING_EVENT,jV:()=>API_TOKEN_UPDATED,jv:()=>ITEM_UPDATED_EVENT,lH:()=>IBD_MODAL_TRACKING_EVENT,nt:()=>DEFAULT_UPDATED_EVENT,rN:()=>PARCEL_BOT_TRACKING_EVENT,wK:()=>PACKAGE_TRACKING_EVENT,yf:()=>RETURN_BATCH_ENTRY_CREATION_EVENT});var ADDRESS_TRACKING_EVENT={name:"Address Updated",operations:{ADDED:"added",CREATED:"created",UPDATED:"updated",SAVE_ATTEMPTED:"save attempted",VIEWED:"viewed",DELETED:"deleted"}},CARRIER_ACCOUNT_TRACKING_EVENT={name:"Carrier Account Updated",operations:{ADDED:"added",STARTED:"started",SELECTED:"selected",SAVE_ATTEMPTED:"save attempted",CLOSED:"closed",ACTIVATED:"activated",DEACTIVATED:"deactivated",EDITED:"edited"}},DEFAULT_UPDATED_EVENT={name:"Default Updated",operations:{LABEL:"label",INTERNATIONAL:"international"}},ORDER_TRACKING_EVENT={name:"Order Updated",operations:{ADDED:"added",UPDATED:"updated",IMPORT_STARTED:"import started",VIEWED:"viewed",DESELECTED:"deselected",DUPLICATED:"duplicated"}},LABEL_PURCHASED_EVENT={name:"Label Purchased",operations:{SAVE_ATTEMPTED:"save attempted",TRANSACTION_COMPLETED:"transaction completed"}},LABEL_UPDATED_EVENT={name:"Label Updated",operations:{DOWNLOADED:"downloaded"}},PACKAGE_TRACKING_EVENT={name:"Package Updated",operations:{CREATED:"created",SAVE_ATTEMPTED:"save attempted",DELETED:"deleted",BROWSED:"browsed",SEARCHED:"searched",ADDED:"added",UPDATED:"updated"}},PAYMENT_METHOD_EVENT={name:"Payment Method Updated",operations:{VIEWED:"viewed",ADDED:"added",SAVE_ATTEMPTED:"save attempted",UPDATED:"updated"}},RATES_UPDATED_EVENT={name:"Rates Updated",operations:{SELECTED:"selected",GENERATED:"generated"}},RATE_DISPLAYED_EVENT={name:"Rate Displayed",operations:{DISPLAYED:"displayed"}},RETURN_BATCH_ENTRY_CREATION_EVENT={name:"Return Label Creation",operations:{CREATED:"created",UPDATED:"updated"}},ITEM_UPDATED_EVENT={name:"Item Updated",operations:{VIWED:"viewed",ADDED:"added",EDITED:"edited",DELETED:"deleted",SAVED:"saved"}},MANIFEST_TRACKING_EVENT={name:"Manifest Updated",operations:{UPDATED:"updated",GENERATED:"generated",DOWNLOADED:"downloaded"}},PARCEL_BOT_TRACKING_EVENT={name:"Parcel Bot Updated",operations:{LOADED:"loaded",CLOSED:"closed",QUERIED:"queried",BACK:"back",RETURNED:"returned"}},BULK_BAR_TRACKING_EVENT={name:"Bulk Bar Updated",operations:{VIEWED:"viewed",SELECTED:"selected",COMPLETED:"completed"}},IBD_MODAL_TRACKING_EVENT={name:"IBD Modal Loaded",operations:{LOADED:"loaded",ACCEPT:"accept",CLOSED:"closed",CLICKED_OUT:"clicked out",CHECKBOX:"checkbox",TC:"TC",LEARN_MORE:"Learn More"}},RECIPIENT_ADDRESS_BOOK_UPDATED={name:"Recipient Address Book Updated",operations:{CREATED:"created",EDITED:"edited",SAVE_ATTEMPTED:"save attempted",DELETED:"deleted"}},RECIPIENT_ADDRESS_BOOK_QUERIED={name:"Recipient Address Book Queried",operations:{QUERIED:"queried",SELECTED:"selected"}},API_TOKEN_UPDATED={name:"Token Updated",operations:{GENERATED:"generated",DELETED:"deleted",COPIED:"copied"}},STORE_CONNECTION_SETTINGS={name:"Store Connection Settings",operations:{QUERIED:"queried"}},INSURANCE_UPSELL_EVENT={name:"Insurance Experiment",operations:{PROTECT_SHIPMENT_ORDER_DETAIL:"Protect shipment order detail",PROTECT_SHIPMENT_SIDE_PANEL:"Protect shipment side panel"}};(_a={})[ADDRESS_TRACKING_EVENT.name]=ADDRESS_TRACKING_EVENT,_a[DEFAULT_UPDATED_EVENT.name]=DEFAULT_UPDATED_EVENT,_a[ORDER_TRACKING_EVENT.name]=ORDER_TRACKING_EVENT,_a[LABEL_PURCHASED_EVENT.name]=LABEL_PURCHASED_EVENT,_a[LABEL_UPDATED_EVENT.name]=LABEL_UPDATED_EVENT,_a[PACKAGE_TRACKING_EVENT.name]=PACKAGE_TRACKING_EVENT,_a[PAYMENT_METHOD_EVENT.name]=PAYMENT_METHOD_EVENT,_a[CARRIER_ACCOUNT_TRACKING_EVENT.name]=CARRIER_ACCOUNT_TRACKING_EVENT,_a[RATES_UPDATED_EVENT.name]=RATES_UPDATED_EVENT,_a[RATE_DISPLAYED_EVENT.name]=RATE_DISPLAYED_EVENT,_a[ITEM_UPDATED_EVENT.name]=ITEM_UPDATED_EVENT,_a[MANIFEST_TRACKING_EVENT.name]=MANIFEST_TRACKING_EVENT,_a[PARCEL_BOT_TRACKING_EVENT.name]=PARCEL_BOT_TRACKING_EVENT,_a[BULK_BAR_TRACKING_EVENT.name]=BULK_BAR_TRACKING_EVENT,_a[IBD_MODAL_TRACKING_EVENT.name]=IBD_MODAL_TRACKING_EVENT,_a[RECIPIENT_ADDRESS_BOOK_UPDATED.name]=RECIPIENT_ADDRESS_BOOK_UPDATED,_a[RECIPIENT_ADDRESS_BOOK_QUERIED.name]=RECIPIENT_ADDRESS_BOOK_QUERIED,_a[API_TOKEN_UPDATED.name]=API_TOKEN_UPDATED,_a[RETURN_BATCH_ENTRY_CREATION_EVENT.name]=RETURN_BATCH_ENTRY_CREATION_EVENT,_a[STORE_CONNECTION_SETTINGS.name]=STORE_CONNECTION_SETTINGS,_a[INSURANCE_UPSELL_EVENT.name]=INSURANCE_UPSELL_EVENT},"./app/utils/TrackingHelper/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A9:()=>trackRequestedUpdatedResponse,EE:()=>trackCarrierAccountUpdate,Id:()=>trackDefaultUpdated,MH:()=>trackDownload,Mv:()=>trackStoreConnectionSettings,Mz:()=>getRateDisplayedEventData,Rk:()=>trackAddressUpdate,Ro:()=>trackOrderUpdate,Rx:()=>trackRateUpdate,aX:()=>trackItemUpdated,bT:()=>trackPackageUpdate,dj:()=>trackRequestedUpdatedAxiosError,f0:()=>trackWithGlobalProps,me:()=>trackRateDisplay,mq:()=>requestUpdatedTrack,nk:()=>trackUpSellInsurance,w$:()=>getGenericErrorsFromResponseData});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),_utils_segment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/segment/index.ts"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/utils/TrackingHelper/types.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/utils/TrackingHelper/index.ts"),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/axios/index.js"),axios__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);function objectToSnake(input){return Object.entries(input).reduce((function(accum,curr){return accum[(0,lodash__WEBPACK_IMPORTED_MODULE_0__.snakeCase)(curr[0])]=curr[1],accum}),{})}var requestUpdatedTrack=function(trackingReference,_a,additionalProps){var url=_a.url,isError=_a.isError,status=_a.status,message=_a.message,properties=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({url,isError,status,message},additionalProps);applyTransformsForTrackedProps(trackingReference,properties).forEach((function(){}))};function trackRequestedUpdatedAxiosError(trackingReference,error){if(axios__WEBPACK_IMPORTED_MODULE_4___default().isAxiosError(error)&&error.response){var response=error.response;requestUpdatedTrack(trackingReference,{url:response.config.url||"",isError:response.status>=300,status:response.status,message:error.message})}}function trackRequestedUpdatedResponse(trackingReference,response){response&&response.config&&response.status&&requestUpdatedTrack(trackingReference,{url:response.config.url||"",isError:response.status>=300,status:response.status,message:void 0})}var trackWithGlobalProps=function(appLocation,event,input){var propertiesAsSnakeCase=objectToSnake(omitNestedObjects((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},___WEBPACK_IMPORTED_MODULE_3__.U.appendGlobalProps(input)),{appLocation})));(0,_utils_segment__WEBPACK_IMPORTED_MODULE_1__.u4)(event,propertiesAsSnakeCase)},getShipmentIdsByOrderId=function(trackingReference,orderId){return trackingReference.selectedOrders&&trackingReference.selectedOrders[orderId]||[]},getShipmentProps=function(orderId,orderProcessingId,batchCount,trackedOrderDetailsByShipment){if(!trackedOrderDetailsByShipment)return{orderId,orderProcessingId,batchCount};var trackedOrderDetails=trackedOrderDetailsByShipment[orderProcessingId];return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({orderId,orderProcessingId,batchCount},trackedOrderDetails)},getAdditionalPropsSet=function(trackingReference){var ordersPropsSet=function(trackingReference){var _a;if(trackingReference.orderIds&&(null===(_a=trackingReference.orderIds)||void 0===_a?void 0:_a.length)>0){var shipmentIdsAppliedToOrderIds=trackingReference.orderIds.map((function(orderId){var shipmentIds=getShipmentIdsByOrderId(trackingReference,orderId);if(0===shipmentIds.length)return[{orderId}];var batchCount=shipmentIds.length;return shipmentIds.map((function(shipmentId){return getShipmentProps(orderId,shipmentId,batchCount,trackingReference.trackedOrderDetailsByShipment)}))}));return(0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(shipmentIdsAppliedToOrderIds)}if(trackingReference.orderId){var orderId_1=trackingReference.orderId,shipmentIds=getShipmentIdsByOrderId(trackingReference,orderId_1),batchCount_1=shipmentIds.length;return 0===batchCount_1?[{orderId:orderId_1}]:shipmentIds.map((function(shipmentId){return getShipmentProps(orderId_1,shipmentId,batchCount_1,trackingReference.trackedOrderDetailsByShipment)}))}return[]}(trackingReference);return ordersPropsSet.map((function(orderProps){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},orderProps)}))},omitNestedObjects=function(values){return(0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(values,Object.keys(values).filter((function(key){return!function(values){return!!values&&!!Object.values(values).find((function(v){return"object"==typeof v}))}(values[key])})))},applyTransformsForTrackedProps=function(trackingReference,properties){var referencePropertiesAsSnakeCase=objectToSnake((0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(trackingReference,"selectedOrders","trackedOrderDetailsByShipment","trackedUserSettings","userDetails")),propertiesAsSnakeCase=objectToSnake(properties||{}),additionalPropsSet=getAdditionalPropsSet(trackingReference);return additionalPropsSet.length>0?additionalPropsSet.map((function(additionalProps){var additionalPropsAsSnakeCase=objectToSnake(additionalProps);return omitNestedObjects((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},referencePropertiesAsSnakeCase),additionalPropsAsSnakeCase),propertiesAsSnakeCase))})):[omitNestedObjects((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},referencePropertiesAsSnakeCase),propertiesAsSnakeCase))]},addCustomPropsByEventName=function(eventName,operation,propsSet){return eventName===_types__WEBPACK_IMPORTED_MODULE_2__.MX.name?function(eventName,operation,propsSet){return eventName===_types__WEBPACK_IMPORTED_MODULE_2__.MX.name&&operation===_types__WEBPACK_IMPORTED_MODULE_2__.MX.operations.SAVE_ATTEMPTED||operation===_types__WEBPACK_IMPORTED_MODULE_2__.MX.operations.TRANSACTION_COMPLETED?propsSet.map((function(set,idx){return set.rate_ids?(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},set),{rate_id:set.rate_ids[idx]}):(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},set)})).map((function(set,idx){return operation===_types__WEBPACK_IMPORTED_MODULE_2__.MX.operations.TRANSACTION_COMPLETED?!idx&&set.is_first_label_purchase?(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},set),{is_first_label_purchase:!0}):(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},set),{is_first_label_purchase:!1}):set})):propsSet}(eventName,operation,propsSet):propsSet},trackingFunctionFactory=function(trackingEventName){return function(trackingReference,operation,additionalProps){!function(eventName,operation,trackingReference,properties){var propsSet=applyTransformsForTrackedProps(trackingReference,properties);(propsSet=addCustomPropsByEventName(eventName,operation,propsSet)).forEach((function(props){(0,_utils_segment__WEBPACK_IMPORTED_MODULE_1__.u4)(eventName,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},props),{operation}))}));try{___WEBPACK_IMPORTED_MODULE_3__.U.fullStoryEvent&&eventName===_types__WEBPACK_IMPORTED_MODULE_2__.iB.name&&operation===_types__WEBPACK_IMPORTED_MODULE_2__.iB.operations.VIEWED&&___WEBPACK_IMPORTED_MODULE_3__.U.fullStoryEvent("".concat(_types__WEBPACK_IMPORTED_MODULE_2__.iB.name," ").concat(_types__WEBPACK_IMPORTED_MODULE_2__.iB.operations.VIEWED),{order_id:trackingReference.orderId||"",order_ids:trackingReference.orderIds||[],reference_id:trackingReference.referenceId})}catch(_a){}}(trackingEventName,operation,trackingReference,additionalProps)}},trackCarrierAccountUpdate=trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.UQ.name),trackOrderUpdate=function(_1,_2,_3){},trackAddressUpdate=trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.eJ.name),trackPackageUpdate=(trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.MX.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.es.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.wK.name)),trackRateUpdate=function(_1,_2,_3){},trackRateDisplay=trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.N6.name),trackItemUpdated=trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.jv.name),trackLabelUpdated=(trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.Xo.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.eT.name)),trackDefaultUpdated=(trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.rN.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.nt.name)),trackStoreConnectionSettings=(trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.WZ.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.BI.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.RR.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.jV.name),trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.T1.name)),trackUpSellInsurance=trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.Gf.name);trackingFunctionFactory(_types__WEBPACK_IMPORTED_MODULE_2__.lH.name);function getGenericErrorsFromResponseData(data){if(data&&data.hasOwnProperty("non_field_errors")){var nonFieldErrors=data;if((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(nonFieldErrors))return nonFieldErrors[0]}}var trackDownload=function(appLocation,event,orderSelection){var trackingReference=___WEBPACK_IMPORTED_MODULE_3__.U.getTrackingReference(_types__WEBPACK_IMPORTED_MODULE_2__.eT.name,appLocation,{type:event}),trackingReferenceWithOrderIds=___WEBPACK_IMPORTED_MODULE_3__.U.amendTrackingReferenceOrderSelection(trackingReference,orderSelection);trackLabelUpdated(trackingReferenceWithOrderIds,_types__WEBPACK_IMPORTED_MODULE_2__.eT.operations.DOWNLOADED,{})},getRateDisplayedEventData=function(rate,sortedRates,carrierAccounts,ratesBestOptionFlag){var _a,amount=rate.amount,objectId=rate.objectId,provider=rate.provider,estimatedDays=rate.estimatedDays,serviceLevelName=rate.servicelevel.name,carrierAccount=rate.carrierAccount,accountId=(carrierAccounts.find((function(account){return account.objectId===carrierAccount}))||{}).accountId,rateIds=sortedRates.map((function(entry){return entry.rates.map((function(rate){return rate.objectId}))})).flat(),rank=rateIds.indexOf(objectId)+1,tag=(null===(_a=sortedRates.find((function(entry){return entry.rates.map((function(rate){return rate.objectId})).includes(objectId)})))||void 0===_a?void 0:_a.displayAttribute)||"";return{rate_id:objectId,carrier:provider,service_level:serviceLevelName,price:amount,transit_time_in_days:estimatedDays,rank,tag,carrier_account_id:accountId,rates_best_option_variation:(null==ratesBestOptionFlag?void 0:ratesBestOptionFlag.variationKey)||"not-included"}}},"./app/utils/newRelic/newRelic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>newRelic});var newRelic=new(function(){function NewRelicClient(){this.instance=null}return NewRelicClient.prototype.setUserId=function(userId){var _a;null===(_a=this.instance)||void 0===_a||_a.setUserId(userId)},NewRelicClient.prototype.addPageAction=function(name,attributes){var _a;null===(_a=this.instance)||void 0===_a||_a.addPageAction(name,attributes)},NewRelicClient.prototype.log=function(message,options){var _a;null===(_a=this.instance)||void 0===_a||_a.log(message,options)},NewRelicClient.prototype.noticeError=function(error,customAttributes){var _a;null===(_a=this.instance)||void 0===_a||_a.noticeError(error,customAttributes)},NewRelicClient.prototype.setInstance=function(instance){this.instance=instance,this.instance.setApplicationVersion("WEB-3659-blank-observability-events:239f3243cd5d3ba489c2f61642a4f1ef17519851")},NewRelicClient.prototype.isInitialized=function(){return!!this.instance},NewRelicClient}())},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.singleEvent=function(name,attributes){this.sendPageAction(name,attributes),this.sendFullStoryLog(name,attributes),this.sendFullStoryEvent(name,attributes)},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={timeoutId,startTime:Date.now()},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.errorEvent=function(name,attributes,severity){void 0===severity&&(severity="ERROR");var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_").concat(severity);this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())},"./app/pages/Settings/Stores/ZeroState/ZeroStateStore.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ZeroStateStore_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),ZeroState=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/ZeroState/index.js"),zero=__webpack_require__("./app/assets/stores/zero.svg"),StoreConnectionListView=__webpack_require__("./app/components/StoreConnection/views/StoreConnectionListView.tsx"),debounce=(__webpack_require__("./app/components/StoreConnection/stores.ts"),__webpack_require__("./node_modules/lodash-es/debounce.js")),TrackingHelper=__webpack_require__("./app/utils/TrackingHelper/index.ts"),types=__webpack_require__("./app/utils/TrackingHelper/types.ts"),utils=__webpack_require__("./app/utils/TrackingHelper/utils.ts"),ZeroStateStore=(__webpack_require__("./app/utils/segment/index.ts"),(0,debounce.A)((function(searchValue,location){var trackingReference=TrackingHelper.U.getTrackingReference(types.T1.name,location,{});(0,utils.Mv)(trackingReference,types.T1.operations.QUERIED,{searchValue})}),3e3),function(_a){var t=_a.t,handleStoreSelection=_a.handleStoreSelection,storeConnections=_a.storeConnections,onSearch=_a.onSearch;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({"data-testid":"zero-state-component",style:{marginBottom:shippoTheme.A.spacing(4)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(ZeroState.w,{image:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:zero,alt:t("zero state store")}),description:t("zeroState.description")}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{style:{margin:"".concat(shippoTheme.A.spacing(4,0,5))}}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionListView.p,{t,displayType:"grid",storeConnections,handleStoreSelection,onSearch})]}))}),translate=__webpack_require__("./app/utils/translate.ts");const ZeroStateStore_stories={title:"Zero State / ZeroStateStore",component:ZeroStateStore,argTypes:{handleStoreSelection:{action:"handleStoreSelection"}},parameters:{layout:"centered",backgrounds:{default:"grey"}}};var ZeroStateStoreWithTranslate=(0,translate.Tl)("stores")(ZeroStateStore),Default=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(ZeroStateStoreWithTranslate,(0,tslib_es6.Cl)({},args))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <ZeroStateStoreWithTranslate {...args} />;\n}",...Default.parameters?.docs?.source}}}}}]);