"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[240],{"./app/types/CustomsDeclaration.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_9:()=>requiresCustomsDeclaration,gG:()=>getCustomsPhoneErrors});var constants_countries__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/countries.ts"),_Address__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./app/constants/customsDeclaration.ts"),__webpack_require__("./app/types/Address.ts"));function requiresCustomsDeclaration(a,b){return!(!a||!b)&&(a.country&&a.country.iso2===constants_countries__WEBPACK_IMPORTED_MODULE_0__.ZP.US.iso2&&b.country&&b.country.iso2===constants_countries__WEBPACK_IMPORTED_MODULE_0__.ZP.US.iso2?(0,_Address__WEBPACK_IMPORTED_MODULE_2__.dJ)(a)||(0,_Address__WEBPACK_IMPORTED_MODULE_2__.dJ)(b)||(0,_Address__WEBPACK_IMPORTED_MODULE_2__.Ao)(a)||(0,_Address__WEBPACK_IMPORTED_MODULE_2__.Ao)(b):!!a.country&&!!b.country&&a.country.iso2!==b.country.iso2)}function getCustomsPhoneErrors(_a){var addressFrom=_a.addressFrom,addressTo=_a.addressTo,isCrossBorderShipment=requiresCustomsDeclaration(addressFrom,addressTo);return{hasPhoneNumberRequiredError:isCrossBorderShipment&&!addressFrom.phone,hasPhoneNumberRequiredWarning:isCrossBorderShipment&&!(null==addressTo?void 0:addressTo.phone)}}},"./app/types/CustomsItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xy:()=>customsItemToPayload});__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/constants/currency.ts"),__webpack_require__("./app/constants/weight.ts");function customsItemToPayload(customsItem){var _a,_b;return{id:customsItem.id,description:customsItem.description,unitWeight:customsItem.convertedUnitWeight.toString(),massUnit:{label:customsItem.convertedMassUnit,value:customsItem.convertedMassUnit},unitValue:customsItem.unitValue.toString(),valueCurrency:{label:(null===(_a=customsItem.valueCurrency)||void 0===_a?void 0:_a.iso)||"",value:(null===(_b=customsItem.valueCurrency)||void 0===_b?void 0:_b.iso)||""},quantity:customsItem.quantity.toString(),originCountry:customsItem.originCountry,tariffNumber:customsItem.tariffNumber||"",skuCode:customsItem.skuCode||"",lineItemId:customsItem.lineItemId,eccnEar99:customsItem.eccnEar99||"",originalNetWeight:customsItem.originalNetWeight,originalUnitWeight:customsItem.originalUnitWeight,originalMassUnit:{label:customsItem.originalMassUnit,value:customsItem.originalMassUnit},isExcluded:customsItem.isExcluded}}},"./app/types/LineItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PU:()=>totalQuantity,WJ:()=>isCustomsReady,XJ:()=>getLineItemsTotalWeight,hM:()=>lineItemHasWeight,m8:()=>isLineItemValid,mx:()=>getLineItemsTotalValue});__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/constants/currency.ts"),__webpack_require__("./node_modules/moment/moment.js");function lineItemHasWeight(lineItem){return null!==lineItem.weightUnit&&0!==lineItem.quantity&&!!lineItem.totalWeight&&0!==parseFloat(lineItem.totalWeight)}function isLineItemValid(lineItem){return[lineItem.quantity,lineItem.title,lineItem.weightUnit,lineItem.unitAmount,lineItem.unitWeight].every(Boolean)}function isCustomsReady(lineItem){return isLineItemValid(lineItem)&&!!lineItem.countryOfOrigin}function getTotalValue(total,lineItem){var parsedValue=parseFloat(lineItem.totalAmount);return isNaN(parsedValue)?total:total+parsedValue}function getTotalWeight(total,lineItem){var parsedWeight=parseFloat(lineItem.totalWeight);return isNaN(parsedWeight)?total:total+parsedWeight}function getLineItemsTotalValue(lineItems){return lineItems.reduce(getTotalValue,0)}function getLineItemsTotalWeight(linteItems){return linteItems.reduce(getTotalWeight,0)}function totalQuantity(lineItems){return lineItems.reduce((function(tot,li){return tot+li.quantity}),0)}},"./app/types/Order.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$I:()=>hasRecipientAddressError,As:()=>getMaxDeliveryTime,DA:()=>isEligibleForSplit,Ef:()=>isFulfilledInShippoOldExperience,KD:()=>isFulfilled,Kq:()=>OrderState,Kt:()=>hasPartialFulfillmentRequests,Lh:()=>isFulfilledSingleLabel,Lq:()=>orderHasWeight,MC:()=>getOrderWeight,O5:()=>isPartiallyFulfilled,Om:()=>isPaid,Qe:()=>OrderValidationStatus,UN:()=>getMaxShipTime,Wn:()=>isManualOrder,_9:()=>requiresCustomsDeclaration,ah:()=>isPartialFulfillmentAllCompleted,bO:()=>getOrderState,dc:()=>hasValidLineItems,fb:()=>hasValidTotalPrice,ge:()=>isFulfilledOutsideShippo,iF:()=>OrderStatus,iY:()=>hasValidShippingInfo,j2:()=>isCancelled,kd:()=>calculateValueByQuantity,qS:()=>isOrderLineItemEditable,si:()=>orderHasAmount});var OrderStatus,OrderValidationStatus,OrderState,moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),types_Store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/types/Store.ts"),utils_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/utils/utils.ts"),_Address__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/Address.ts"),_CustomsDeclaration__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/types/CustomsDeclaration.ts"),_LineItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/types/LineItem.ts"),_OrdersBatch__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/OrdersBatch.ts")),_Transaction__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__("./app/types/Parcel.ts"),__webpack_require__("./app/types/Rate.ts"),__webpack_require__("./app/types/Transaction.ts"));function getOrderWeight(order){return order.weight&&parseFloat(order.weight)||null}function orderHasWeight(order){var orderWeight=order.weight&&parseFloat(order.weight);return orderWeight&&!isNaN(orderWeight)&&orderWeight>0&&!!order.weightUnit||order.lineItems.length>0&&order.lineItems.every(_LineItem__WEBPACK_IMPORTED_MODULE_5__.hM)}function orderHasAmount(order){return null!==order.currency&&((0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.DX)(order.totalPrice)&&0!==parseFloat(order.totalPrice)||(0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.DX)(order.subtotalPrice)&&0!==parseFloat(order.subtotalPrice))}function isPaid(order){return![OrderStatus.AWAITPAY,OrderStatus.GENERIC,OrderStatus.REFUNDED,OrderStatus.CANCELLED].includes(order.orderStatus)}function isCancelled(order){return order.orderStatus===OrderStatus.CANCELLED}function isFulfilled(order){return order.orderStatus===OrderStatus.SHIPPED}function isFulfilledSingleLabel(order){return getOrderState(order)===OrderState.FULFILLED_SINGLE_LABEL}function isPartiallyFulfilled(order){return order.orderStatus===OrderStatus.PARTIALLY_FULFILLED}function isRefundPending(order){var successfulLiveTransactions=order.transactions.filter((function(txn){return!txn.test&&txn.status!==_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.ERROR}));return 0!==successfulLiveTransactions.length&&successfulLiveTransactions.every((function(txn){return txn.status===_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.REFUNDPENDING}))}function isRefundRejected(order){var successfulLiveTransactions=order.transactions.filter((function(txn){return!txn.test&&txn.status!==_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.ERROR}));return 0!==successfulLiveTransactions.length&&successfulLiveTransactions.every((function(txn){return txn.status===_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.REFUNDREJECTED}))}function isRefunded(order){var successfulLiveTransactions=order.transactions.filter((function(txn){return!txn.test&&txn.status!==_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.ERROR}));return 0!==successfulLiveTransactions.length&&successfulLiveTransactions.every((function(txn){return txn.status===_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.REFUNDED}))}function getOrderState(order){return isPartiallyFulfilled(order)?0===order.transactions.length?OrderState.FULFILLED_OUTSIDE_SHIPPO:1===order.transactions.length?isRefunded(order)||isRefundRejected(order)||isRefundPending(order)?OrderState.PARTIALLY_FULFILLED_SINGLE_REFUND:OrderState.PARTIALLY_FULFILLED_SINGLE_LABEL:OrderState.PARTIALLY_FULFILLED_MULTIPLE_LABELS:isFulfilled(order)||isPartiallyFulfilled(order)?0===order.transactions.length?OrderState.FULFILLED_OUTSIDE_SHIPPO:isRefunded(order)?OrderState.REFUNDED:isRefundRejected(order)?OrderState.REFUND_REJECTED:isRefundPending(order)?OrderState.REFUND_PENDING:1===order.transactions.filter((function(transaction){return transaction.status===_Transaction__WEBPACK_IMPORTED_MODULE_10__.LN.SUCCESS})).length?OrderState.FULFILLED_SINGLE_LABEL:OrderState.FULFILLED_MULTIPLE_LABELS:isCancelled(order)?OrderState.CANCELLED:function isRefundedOutsideShippo(order){return order.orderStatus===OrderStatus.REFUNDED}(order)?OrderState.REFUNDED:OrderState.NOT_FULFILLED}function isFulfilledOutsideShippo(order){return getOrderState(order)===OrderState.FULFILLED_OUTSIDE_SHIPPO}function isFulfilledInShippoOldExperience(order){return isFulfilled(order)&&!order.parcel}function getMaxShipTime(order){var shipTimes=order.lineItems.map((function(i){return i.maxShipTime})).filter((function(v){return v}));return shipTimes&&shipTimes.length>0?moment__WEBPACK_IMPORTED_MODULE_0__(Math.min.apply(null,shipTimes)):null}function getMaxDeliveryTime(order){var deliveryTimes=order.lineItems.map((function(i){return i.maxDeliveryTime})).filter((function(v){return v}));return deliveryTimes&&deliveryTimes.length>0?moment__WEBPACK_IMPORTED_MODULE_0__(Math.min.apply(null,deliveryTimes)):null}function hasValidShippingInfo(order){var parsedShippingCost=parseFloat(order.shippingCost);return!!order.shippingCost&&"NONE"!==order.shippingCost.toUpperCase()&&(parsedShippingCost>0||0===parsedShippingCost&&!!order.shippingMethod)}function hasValidTotalPrice(order){return!!order.totalPrice&&"NONE"!==order.totalPrice.toUpperCase()&&parseFloat(order.totalPrice)>0}!function(OrderStatus){OrderStatus.AWAITPAY="AWAITPAY",OrderStatus.VALID="VALID",OrderStatus.INVALID="INVALID",OrderStatus.PAID="PAID",OrderStatus.PARTIALLY_FULFILLED="PARTIALLY_FULFILLED",OrderStatus.SHIPPED="SHIPPED",OrderStatus.REFUNDED="REFUNDED",OrderStatus.CANCELLED="CANCELLED",OrderStatus.UNKNOWN="UNKNOWN",OrderStatus.GENERIC="GENERIC"}(OrderStatus||(OrderStatus={})),function(OrderValidationStatus){OrderValidationStatus.VALID="VALID",OrderValidationStatus.INVALID="INVALID"}(OrderValidationStatus||(OrderValidationStatus={})),function(OrderState){OrderState.CANCELLED="CANCELLED",OrderState.REFUNDED="REFUNDED",OrderState.REFUND_REJECTED="REFUND_REJECTED",OrderState.REFUND_PENDING="REFUND_PENDING",OrderState.FULFILLED_OUTSIDE_SHIPPO="FULFILLED_OUTSIDE_SHIPPO",OrderState.FULFILLED_SINGLE_LABEL="FULFILLED_SINGLE_LABEL",OrderState.FULFILLED_MULTIPLE_LABELS="FULFILLED_MULTIPLE_LABELS",OrderState.PARTIALLY_FULFILLED_SINGLE_LABEL="PARTIALLY_FULFILLED_SINGLE_LABEL",OrderState.PARTIALLY_FULFILLED_SINGLE_REFUND="PARTIALLY_FULFILLED_SINGLE_REFUND",OrderState.PARTIALLY_FULFILLED_MULTIPLE_LABELS="PARTIALLY_FULFILLED_MULTIPLE_LABELS",OrderState.NOT_FULFILLED="NOT_FULFILLED"}(OrderState||(OrderState={}));var manualOrderShopTypes={Shippo:!0,CSV_Import:!0};function isManualOrder(order){return!!manualOrderShopTypes[order.shopApp]}function requiresCustomsDeclaration(order,defaultFromAddress){var addressFrom=order&&order.addressFrom||defaultFromAddress,addressTo=order&&order.toAddress;return!(!addressTo||!addressFrom)&&(0,_CustomsDeclaration__WEBPACK_IMPORTED_MODULE_4__._9)(addressTo,addressFrom)}function hasValidLineItems(order){var lineItems=order.lineItems;return lineItems.length>0&&lineItems.every(_LineItem__WEBPACK_IMPORTED_MODULE_5__.m8)}function hasRecipientAddressError(order){return!!order&&!order.toAddress||!!(null==order?void 0:order.toAddress)&&_Address__WEBPACK_IMPORTED_MODULE_3__.I2(order.toAddress)}var isEligibleForSplit=function(_a){var orderStatus=_a.orderStatus,shopApp=_a.shopApp,lineItems=_a.lineItems;return orderStatus!==OrderStatus.CANCELLED&&(types_Store__WEBPACK_IMPORTED_MODULE_1__.AS.has(shopApp)||"Magento_2"===shopApp)&&lineItems.reduce((function(currentTotal,item){return currentTotal+ +item.quantity}),0)>1},hasPartialFulfillmentRequests=function(_a){var partialFulfillmentRequests=_a.partialFulfillmentRequests;return partialFulfillmentRequests&&!!partialFulfillmentRequests.length},isPartialFulfillmentAllCompleted=function(_a){var partialFulfillmentRequests=_a.partialFulfillmentRequests;return partialFulfillmentRequests&&partialFulfillmentRequests.every((function(batchEntry){return batchEntry.objectStatus===_OrdersBatch__WEBPACK_IMPORTED_MODULE_7__.jV.COMPLETE_TRANSACTION}))},isOrderLineItemEditable=function(order){return(0,types_Store__WEBPACK_IMPORTED_MODULE_1__.BY)(order.shopApp)&&!isFulfilled(order)},calculateValueByQuantity=function(value,quantity){return(Number(value)*quantity).toString()}},"./app/types/OrderBatchEntry.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HL:()=>getBatchEntryLineItemsTotalWeight,Iw:()=>getBatchEntryCustomItemsTotalWeight,M7:()=>getBatchEntryLineItemsTotalValue,Ud:()=>getBatchEntriesIdsSortedByRank,_9:()=>requiresCustomsDeclaration,cp:()=>isPartialFulfillmentRequest,fg:()=>requiresNewRates,j4:()=>isReadyForPurchase});__webpack_require__("./app/constants/currency.ts"),__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./app/types/Parcel.ts"),__webpack_require__("./app/utils/businessRules.ts"),__webpack_require__("./app/types/Address.ts");var _CustomsDeclaration__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/types/CustomsDeclaration.ts"),_OrdersBatch__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./app/types/CustomsItem.ts"),__webpack_require__("./app/types/OrdersBatch.ts"));function getBatchEntryLineItemsTotalWeight(beLineItems,lineItems){return null==beLineItems?void 0:beLineItems.reduce((function(summedWeight,lineItemLite){var lineItem=lineItems.find((function(x){return x.objectId===lineItemLite.objectId}));return lineItem?summedWeight+parseFloat(lineItem.unitWeight)*lineItemLite.quantity:summedWeight}),0).toFixed(2)}function getBatchEntryLineItemsTotalValue(beLineItems,lineItems){return beLineItems.reduce((function(summedTotal,lineItemLite){var lineItem=lineItems.find((function(x){return x.objectId===lineItemLite.objectId}));return lineItem?summedTotal+parseFloat(lineItem.unitAmount)*lineItemLite.quantity:summedTotal}),0).toFixed(2)}function getBatchEntryCustomItemsTotalWeight(batchEntry){if(!batchEntry||!batchEntry.customsItems)return 0;var totalWeight=null==batchEntry?void 0:batchEntry.customsItems.reduce((function(summedWeight,item){return summedWeight+parseFloat(item.convertedNetWeight)}),0).toFixed(2);return parseFloat(totalWeight)}function isReadyForPurchase(batchEntry){return!!batchEntry.shipmentObjectId&&batchEntry.objectStatus===_OrdersBatch__WEBPACK_IMPORTED_MODULE_7__.jV.COMPLETE_SHIPMENT}function isPartialFulfillmentRequest(batchEntry){return batchEntry.partialFulfillmentRank>0}function requiresCustomsDeclaration(batchEntry){var addressTo=batchEntry.addressTo,addressFrom=batchEntry.addressFrom;return!(!addressTo||!addressFrom)&&(0,_CustomsDeclaration__WEBPACK_IMPORTED_MODULE_5__._9)(addressTo,addressFrom)}function getBatchEntriesIdsSortedByRank(batchEntryIds,batchEntries){return batchEntryIds.map((function(beId){return batchEntries[beId]})).filter((function(be){return!!be})).sort((function(a,b){return a.partialFulfillmentRank-b.partialFulfillmentRank})).map((function(be){return be.id}))}function requiresNewRates(batchEntry){return!batchEntry||(batchEntry.objectStatus===_OrdersBatch__WEBPACK_IMPORTED_MODULE_7__.jV.SHIPMENT_REQUEST_FAILED||batchEntry.objectStatus===_OrdersBatch__WEBPACK_IMPORTED_MODULE_7__.jV.PENDING&&null===batchEntry.shipmentObjectId&&!!batchEntry.parcel)}},"./app/types/Parcel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E9:()=>getParcelData,au:()=>toJSON,gA:()=>getTemplateName,oO:()=>toParcelTemplate,sO:()=>getExtrasData});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),constants_distance__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/distance.ts"),constants_weight__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/weight.ts"),types_ParcelTemplate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/types/ParcelTemplate.ts"),types_CarrierParcelTemplate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/CarrierParcelTemplate.ts"),types_SignatureConfirmation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/types/SignatureConfirmation.ts");function toJSON(parcel){return{length:parcel.length,width:parcel.width,height:parcel.height,distance_unit:parcel.distanceUnit,weight:parcel.weight,mass_unit:parcel.weightUnit,user_parcel_template:parcel.userParcelTemplate&&(0,types_ParcelTemplate__WEBPACK_IMPORTED_MODULE_2__.au)(parcel.userParcelTemplate),carrier_parcel_template:parcel.carrierParcelTemplate&&(0,types_CarrierParcelTemplate__WEBPACK_IMPORTED_MODULE_3__.au)(parcel.carrierParcelTemplate),use_imported_order_weight:parcel.useImportedOrderWeight}}function getParcelData(data){if(data.extras.isUsingCustomDimensions&&data.customDimensions&&!data.extras.carrierTemplateWithCustomDimensions)return{length:data.customDimensions.length,width:data.customDimensions.width,height:data.customDimensions.height,distanceUnit:data.customDimensions.distanceUnit.value.toString(),weight:data.weight,weightUnit:data.weightUnit.value.toString(),userParcelTemplate:null,carrierParcelTemplate:null,useImportedOrderWeight:data.useImportedOrderWeight};var parcelTemplate=data.parcelTemplate;if(parcelTemplate&&(0,types_ParcelTemplate__WEBPACK_IMPORTED_MODULE_2__.n4)(parcelTemplate)){if(parcelTemplate.carrierTemplate){var carrierTemplate=parcelTemplate.carrierTemplate;return{length:carrierTemplate.length.toString(),width:carrierTemplate.width.toString(),height:carrierTemplate.height.toString(),distanceUnit:constants_distance__WEBPACK_IMPORTED_MODULE_0__.Y[carrierTemplate.distanceUnit],weight:data.weight,weightUnit:constants_weight__WEBPACK_IMPORTED_MODULE_1__.NM[String(data.weightUnit.value)],userParcelTemplate:data.parcelTemplate&&(0,types_ParcelTemplate__WEBPACK_IMPORTED_MODULE_2__.n4)(data.parcelTemplate)?data.parcelTemplate:null,carrierParcelTemplate:null,useImportedOrderWeight:data.useImportedOrderWeight}}return{length:parcelTemplate.length.toString(),width:parcelTemplate.width.toString(),height:parcelTemplate.height.toString(),distanceUnit:constants_distance__WEBPACK_IMPORTED_MODULE_0__.Y[parcelTemplate.distanceUnit],weight:data.weight,weightUnit:constants_weight__WEBPACK_IMPORTED_MODULE_1__.NM[String(data.weightUnit.value)],userParcelTemplate:data.parcelTemplate&&(0,types_ParcelTemplate__WEBPACK_IMPORTED_MODULE_2__.n4)(data.parcelTemplate)?data.parcelTemplate:null,carrierParcelTemplate:null,useImportedOrderWeight:data.useImportedOrderWeight}}return data.extras.carrierTemplateWithCustomDimensions&&data.customDimensions?{length:data.customDimensions.length.toString(),width:data.customDimensions.width.toString(),height:data.customDimensions.height.toString()||"0",distanceUnit:data.customDimensions.distanceUnit.value.toString(),weight:data.weight,weightUnit:constants_weight__WEBPACK_IMPORTED_MODULE_1__.NM[String(data.weightUnit.value)],userParcelTemplate:null,carrierParcelTemplate:parcelTemplate,useImportedOrderWeight:data.useImportedOrderWeight}:{length:parcelTemplate.length.toString(),width:parcelTemplate.width.toString(),height:parcelTemplate.height.toString(),distanceUnit:constants_distance__WEBPACK_IMPORTED_MODULE_0__.Y[parcelTemplate.distanceUnit],weight:data.weight,weightUnit:constants_weight__WEBPACK_IMPORTED_MODULE_1__.NM[String(data.weightUnit.value)],userParcelTemplate:null,useImportedOrderWeight:data.useImportedOrderWeight,carrierParcelTemplate:parcelTemplate}}function getExtrasData(data){return{alcohol:data.alcohol.containsAlcohol?{containsAlcohol:data.alcohol.containsAlcohol,recipientType:data.alcohol.recipientType.value}:null,signatureConfirmation:data.alcohol.containsAlcohol?{hasSignatureConfirmation:!0,signatureConfirmationType:types_SignatureConfirmation__WEBPACK_IMPORTED_MODULE_4__.Z.ADULT}:void 0,dryIce:data.dryIce.containsDryIce?{containsDryIce:data.dryIce.containsDryIce,weight:data.dryIce.weight,weightUnitId:data.dryIce.weightUnitId}:null,hazmat:data.hazmat?{isHazmat:data.hazmat.containsHazmat,isBiologicalMaterial:data.hazmat.containsBiologicalMaterial,isLithiumBatteries:data.hazmat.containsLithiumBatteries}:void 0,isReturnRequested:data.isReturnRequested}}function toParcelTemplate(parcel){var templateBase={weight:parseFloat(parcel.weight),weightUnit:constants_weight__WEBPACK_IMPORTED_MODULE_1__.NM[parcel.weightUnit]};return parcel.userParcelTemplate?(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({},parcel.userParcelTemplate),{length:parseFloat(parcel.length),width:parseFloat(parcel.width),height:parseFloat(parcel.height),distanceUnit:constants_distance__WEBPACK_IMPORTED_MODULE_0__.Y[parcel.distanceUnit]}),templateBase):(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({length:parseFloat(parcel.length),width:parseFloat(parcel.width),height:parseFloat(parcel.height),name:"",carrierTemplate:parcel.carrierParcelTemplate,isDefault:!1,distanceUnit:constants_distance__WEBPACK_IMPORTED_MODULE_0__.Y[parcel.distanceUnit]},templateBase)}function getTemplateName(parcel){var _a,_b,_c,_d;return(null===(_b=null===(_a=parcel.userParcelTemplate)||void 0===_a?void 0:_a.carrierTemplate)||void 0===_b?void 0:_b.name)||function matchesTemplate(parcel,template){var _a;return parseFloat(parcel.length)===(null==template?void 0:template.length)&&parseFloat(parcel.width)===(null==template?void 0:template.width)&&parseFloat(parcel.height)===(null==template?void 0:template.height)&&parcel.distanceUnit===(null===(_a=null==template?void 0:template.distanceUnit)||void 0===_a?void 0:_a.toString())}(parcel,parcel.userParcelTemplate)&&(null===(_c=parcel.userParcelTemplate)||void 0===_c?void 0:_c.name)||(null===(_d=parcel.carrierParcelTemplate)||void 0===_d?void 0:_d.name)||null}},"./app/utils/businessRules.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l$:()=>approximateServiceLevelNameFromToken,oS:()=>filterRulesToShow,bq:()=>formatDescriptionByFieldType});__webpack_require__("./app/components/Select/options.ts");var _a,_b,RuleTypes,automationRuleForm=__webpack_require__("./app/constants/automationRuleForm.ts"),countries=__webpack_require__("./app/constants/countries.ts"),operators=__webpack_require__("./app/constants/operators.ts"),Address=__webpack_require__("./app/types/Address.ts");__webpack_require__("./app/types/APIAddress.ts"),__webpack_require__("./app/types/ParcelTemplate.ts");!function(RuleTypes){RuleTypes.Insurance="INSURANCE",RuleTypes.ParcelTemplate="PARCEL_TEMPLATE"}(RuleTypes||(RuleTypes={}));var filterRulesToShow=function(rules){return rules?null==rules?void 0:rules.filter((function(rule){return null==rule?void 0:rule.name})):[]};(_a={})[operators.jT.EQ]={word:"is equal to",symbol:"="},_a[operators.jT.NEQ]={word:"is not equal to",symbol:"!="},_a[operators.jT.GT]={word:"is greater than",symbol:">"},_a[operators.jT.GTE]={word:"is greater than or equal to",symbol:">="},_a[operators.jT.LTE]={word:"is less than or equal to",symbol:"<="},_a[operators.jT.LT]={word:"is less than",symbol:"<"},_a[operators.jT.IN]={word:"is in",symbol:"in"},_a[operators.jT.STARTS_WITH]={word:"starts with",symbol:"starts with"},_a[operators.jT.ENDS_WITH]={word:"ends with",symbol:"ends with"},_a[operators.jT.INCLUDES]={word:"includes",symbol:"includes"};var filterTypeProperties=((_b={})[automationRuleForm.wQ.WEIGHT]={name:"Order weight",prefix:"Order weight"},_b[automationRuleForm.wQ.PRODUCT_NAME]={name:"Product name",prefix:"Product name"},_b[automationRuleForm.wQ.ITEM_SKU]={name:"Item SKU",prefix:"Item SKU"},_b[automationRuleForm.wQ.ORDER_ITEM_QUANTITY]={name:"Order item quantity",prefix:"Order item quantity"},_b[automationRuleForm.wQ.SHIPPING_DESTINATION]={name:"Shipping destination",prefix:"Shipping destination is"},_b[automationRuleForm.wQ.IS_INTERNATIONAL]={name:"Shipping destination",prefix:"Shipping destination is"},_b[automationRuleForm.wQ.SHIPPING_STATES]={name:"Shipping states",prefix:"Shipping to states in"},_b[automationRuleForm.wQ.SHIPPING_ZIPCODES]={name:"Shipping zip codes",prefix:"Shipping to zip codes in"},_b[automationRuleForm.wQ.SHIPPING_COUNTRIES]={name:"Shipping countries",prefix:"Shipping to countries including"},_b);function getFilterTypeProperty(filterType,propertyName){if(filterTypeProperties[filterType])return filterTypeProperties[filterType][propertyName]}function parseSerializedFilterValue(filterValue){var parsedFilterValue,country;try{parsedFilterValue=JSON.parse(filterValue),country=countries.ZP[null==parsedFilterValue?void 0:parsedFilterValue.country].name}catch(err){return{parsedFilterValue,country}}return{parsedFilterValue,country}}function formatDescriptionByFieldType(filter){var _a,_b,_c,_d,_e,_f,_g,_h,parsedFV,namePrefix=getFilterTypeProperty(filter.field,"prefix");switch(filter.field){case"SHIPPING_STATES":parsedFV=parseSerializedFilterValue(filter.value);var states=void 0;if(Array.isArray(null===(_a=parsedFV.parsedFilterValue)||void 0===_a?void 0:_a.states))states=parsedFV.parsedFilterValue.states.reduce((function(acc,current){return"".concat(acc).concat(acc?",":""," ").concat(current.label)}),"");else{var countryIso=countries.ZP[null===(_b=parsedFV.parsedFilterValue)||void 0===_b?void 0:_b.country],countryStates=(0,Address.v2)(countryIso)||[],stateOptions_1=countryStates.length>0?(0,Address.s7)(countryStates):[];states=(null===(_c=parsedFV.parsedFilterValue)||void 0===_c?void 0:_c.states)&&parsedFV.parsedFilterValue.states.length>0?null===(_e=null===(_d=parsedFV.parsedFilterValue.states.split(","))||void 0===_d?void 0:_d.map((function(state){var stateOption=stateOptions_1.find((function(stateOption){return(null==stateOption?void 0:stateOption.value)===state}));return(null==stateOption?void 0:stateOption.label)||state})))||void 0===_e?void 0:_e.join(", "):""}return{prefix:"".concat(namePrefix," ").concat(parsedFV.country," including"),value:states.trim()};case"SHIPPING_ZIPCODES":return parsedFV=parseSerializedFilterValue(filter.value),{prefix:"".concat(namePrefix," ").concat(parsedFV.country," equal to"),value:"".concat((null===(_f=parsedFV.parsedFilterValue)||void 0===_f?void 0:_f.zipcodes)||"")};case"SHIPPING_COUNTRIES":var countriesString=(null===(_h=null===(_g=filter.value)||void 0===_g?void 0:_g.split(",").map((function(countryValue){var _a;return(null===(_a=countries.ZP[countryValue])||void 0===_a?void 0:_a.name)||""})))||void 0===_h?void 0:_h.join(", "))||"";return{prefix:"".concat(namePrefix),value:countriesString};default:return{prefix:"".concat(namePrefix," ").concat(filter.comparatorString),value:filter.value}}}var approximateServiceLevelNameFromToken=function(token){return token.split("_").map((function(str){return str.charAt(0).toUpperCase()+str.slice(1)})).join(" ")}}}]);