(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4736],{"./app/assets/orders/insurance.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"369726724d8882695053905ed7115fda.svg"},"./app/assets/orders/signature.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"b44511cd477e0360254ae297441ef457.svg"},"./app/constants/signatureConfirmation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Md:()=>STANDARD_COST,mS:()=>getSignatureConfirmationOrDefault,zr:()=>ADULT_COST});var _a,_pages_Orders_Blackbeard_LabelPurchase_modules_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts"),standardSignatureConfirmationOption={value:_pages_Orders_Blackbeard_LabelPurchase_modules_types__WEBPACK_IMPORTED_MODULE_0__.zT.STANDARD,label:"Anyone can sign"},adultSignatureConfirmationOption={value:_pages_Orders_Blackbeard_LabelPurchase_modules_types__WEBPACK_IMPORTED_MODULE_0__.zT.ADULT,label:"An adult must sign",addToolTip:!0},signatureConfirmationMap=((_a={})[_pages_Orders_Blackbeard_LabelPurchase_modules_types__WEBPACK_IMPORTED_MODULE_0__.zT.ADULT]=adultSignatureConfirmationOption,_a[_pages_Orders_Blackbeard_LabelPurchase_modules_types__WEBPACK_IMPORTED_MODULE_0__.zT.STANDARD]=standardSignatureConfirmationOption,_a),getSignatureConfirmationOrDefault=function(value){return value&&signatureConfirmationMap[value]||standardSignatureConfirmationOption},STANDARD_COST=2,ADULT_COST=5},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Badge/Badge.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_constants_carriers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/carriers.ts");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var _b,provider=_a.provider,count=_a.count,size=_a.size;_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.bK[provider]&&(provider=_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.bK[provider]);var icon=null===(_b=_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.Ay.find((function(x){return x.name.toLowerCase()===provider.toLowerCase()})))||void 0===_b?void 0:_b.icon,sizeOrDefault=size||40;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"default",sx:{".MuiBadge-badge":{backgroundColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.secondary,color:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.white}},badgeContent:count},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)("img",{style:{width:"".concat(sizeOrDefault,"px"),height:"".concat(sizeOrDefault,"px"),borderRadius:"0.125rem"},alt:provider,src:icon})}))}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/ShipmentExtrasCard/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kB:()=>getInsuranceCost,dc:()=>utils_insuranceModalContent,jX:()=>utils_insuredAmountFromLineItems,Eo:()=>utils_lineItemsFromPartialOrder,EA:()=>paramsForOnSaveInsurance});var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),tslib_es6=(__webpack_require__("./app/utils/segment/index.ts"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),constants_currency=__webpack_require__("./app/constants/currency.ts"),index_umd=__webpack_require__("./node_modules/country-to-currency/index.umd.js"),index_umd_default=__webpack_require__.n(index_umd);function orderCurrency(currencyIso){return currencyIso?constants_currency.q[currencyIso]:void 0}var DEFAULT_INSURANCE_MODAL_AMOUNT=125,DEFAULT_INSURANCE_MODAL_AMOUNTS={USD:125,CAD:150,GBP:100,MXN:2e3,EUR:100};function insuranceFormCurrencyAndAmount(extrasInsurance,order,partialOrderLineItems,batchEntry){var _a,_b,_c,_d,itemCurrencies,currency;if((null==extrasInsurance?void 0:extrasInsurance.currency)&&constants_currency.q[extrasInsurance.currency.iso])return{currency:extrasInsurance.currency,amount:+(null==extrasInsurance?void 0:extrasInsurance.amount)||DEFAULT_INSURANCE_MODAL_AMOUNTS[extrasInsurance.currency.iso]||DEFAULT_INSURANCE_MODAL_AMOUNT};if(partialOrderLineItems){var partialOrderCurrencies=(0,tslib_es6.fX)([],(0,tslib_es6.zs)(new Set(partialOrderLineItems.map((function(lineItem){return lineItem.currency})).filter((function(lineItem){return!!(null==lineItem?void 0:lineItem.iso)})))),!1);if(1===partialOrderCurrencies.length)return{currency:partialOrderCurrencies[0],amount:partialOrderLineItems.reduce((function(acc,curr){return acc+ +curr.totalAmount}),0)||DEFAULT_INSURANCE_MODAL_AMOUNT}}if((null==order?void 0:order.lineItems)&&order.lineItems.length>0&&1===(itemCurrencies=(0,tslib_es6.fX)([],(0,tslib_es6.zs)(new Set(order.lineItems.map((function(lineItem){return lineItem.currency})).filter((function(lineItem){return!!(null==lineItem?void 0:lineItem.iso)})))),!1)).length)return{currency:itemCurrencies[0],amount:order.lineItems.reduce((function(acc,curr){return acc+ +curr.totalAmount}),0)||DEFAULT_INSURANCE_MODAL_AMOUNT};if((null==batchEntry?void 0:batchEntry.customsItems)&&batchEntry.customsItems.length>0&&1===(itemCurrencies=(0,tslib_es6.fX)([],(0,tslib_es6.zs)(new Set(batchEntry.customsItems.map((function(customsItem){return customsItem.valueCurrency})).filter((function(customsItem){return!!(null==customsItem?void 0:customsItem.iso)})))),!1)).length)return{currency:itemCurrencies[0],amount:batchEntry.customsItems.reduce((function(acc,curr){return acc+ +curr.valueAmount}),0)||DEFAULT_INSURANCE_MODAL_AMOUNT};return(null==order?void 0:order.currency)&&orderCurrency(order.currency)?{currency:currency=orderCurrency(order.currency)||constants_currency.q.USD,amount:+((null==order?void 0:order.totalPrice)||(null==order?void 0:order.subtotalPrice)||"")||DEFAULT_INSURANCE_MODAL_AMOUNTS[currency.iso]||DEFAULT_INSURANCE_MODAL_AMOUNT}:(null===(_b=null===(_a=null==batchEntry?void 0:batchEntry.addressFrom)||void 0===_a?void 0:_a.country)||void 0===_b?void 0:_b.iso2)&&index_umd_default()[batchEntry.addressFrom.country.iso2]?{currency:currency=constants_currency.q[index_umd_default()[batchEntry.addressFrom.country.iso2]]||constants_currency.q.USD,amount:DEFAULT_INSURANCE_MODAL_AMOUNTS[currency.iso]||DEFAULT_INSURANCE_MODAL_AMOUNT}:(null===(_d=null===(_c=null==order?void 0:order.addressFrom)||void 0===_c?void 0:_c.country)||void 0===_d?void 0:_d.iso2)&&index_umd_default()[order.addressFrom.country.iso2]?{currency:currency=constants_currency.q[index_umd_default()[order.addressFrom.country.iso2]]||constants_currency.q.USD,amount:DEFAULT_INSURANCE_MODAL_AMOUNTS[currency.iso]||DEFAULT_INSURANCE_MODAL_AMOUNT}:{currency:constants_currency.q.USD,amount:DEFAULT_INSURANCE_MODAL_AMOUNTS.USD}}var paramsForOnSaveInsurance=function(newInsuranceValues){return{insurance:newInsuranceValues.hasInsurance?{amount:"".concat(newInsuranceValues.amount.replace(/,/g,"")),currency:newInsuranceValues.currency,useImportedAmount:!1}:null}},utils_insuredAmountFromLineItems=function(lineItems){var output=null==lineItems?void 0:lineItems.map((function(i){return+i.totalAmount})).reduce((function(curr,accum){return curr+accum}),0);return(0,lodash.isFinite)(output)?output:0},utils_insuranceModalContent=function(extrasInsurance,order,partialOrderLineItems,batchEntry){var currencyAndAmount=insuranceFormCurrencyAndAmount(extrasInsurance,order,partialOrderLineItems,batchEntry);return{hasInsurance:!!extrasInsurance,amount:"".concat(currencyAndAmount.amount),useImportedAmount:!1,currency:currencyAndAmount.currency}},utils_lineItemsFromPartialOrder=function(orderLineItems,batchEntryLineItems){if(orderLineItems&&batchEntryLineItems){var targetLineItems=batchEntryLineItems.reduce((function(accum,curr){return accum[curr.objectId]=!0,accum}),{}),output=orderLineItems.filter((function(lineItem){return!!targetLineItems[lineItem.objectId]}));return output.length?output:void 0}},getInsuranceCost=function(userInsuranceRate,declaredValue,rateCost,numOrdersSelected){return void 0===rateCost&&(rateCost=0),void 0===numOrdersSelected&&(numOrdersSelected=1),(numOrdersSelected*declaredValue+rateCost)*userInsuranceRate}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{nB:()=>SelectedParcelType,tf:()=>blackbeardDistanceUnit,zT:()=>blackbeardSignatureConfirmation});var blackbeardDistanceUnit={CM:"cm",IN:"in",MM:"mm"};var SelectedParcelType=function(){function SelectedParcelType(oneOffBoxOrTubeSelected,oneOffPolymailerSelected,selectedUserParcelTemplate,selectedCarrierParcelTemplate){this.oneOffBoxOrTubeSelected=oneOffBoxOrTubeSelected,this.oneOffPolymailerSelected=oneOffPolymailerSelected,this.selectedUserParcelTemplate=selectedUserParcelTemplate,this.selectedCarrierParcelTemplate=selectedCarrierParcelTemplate}return SelectedParcelType.unselected=function(){return new SelectedParcelType(!1,!1)},SelectedParcelType.selectCustomBoxOrTube=function(){return new SelectedParcelType(!0,!1)},SelectedParcelType.selectCustomPolymailer=function(){return new SelectedParcelType(!1,!0)},SelectedParcelType.selectUserParcelTemplate=function(template){return new SelectedParcelType(!1,!1,template)},SelectedParcelType.selectCarrierParcelTemplate=function(template){return new SelectedParcelType(!1,!1,void 0,template)},SelectedParcelType.prototype.selectFromTemplate=function(userTemplate,carrierTemplate){return userTemplate||carrierTemplate?new SelectedParcelType(!1,!1,userTemplate,carrierTemplate):this},SelectedParcelType.prototype.isUnselected=function(){return!this.isCustomSelected()&&!this.isTemplateSelected()},SelectedParcelType.prototype.isCustomSelected=function(){return this.isCustomBoxOrTubeSelected()||this.isCustomPolymailerSelected()},SelectedParcelType.prototype.isTemplateSelected=function(){return this.isUserParcelTemplateSelected()||this.isCarrierParcelTemplateSelected()},SelectedParcelType.prototype.isCustomBoxOrTubeSelected=function(){return this.oneOffBoxOrTubeSelected},SelectedParcelType.prototype.isCustomPolymailerSelected=function(){return this.oneOffPolymailerSelected},SelectedParcelType.prototype.isUserParcelTemplateSelected=function(){return void 0!==this.selectedUserParcelTemplate},SelectedParcelType.prototype.isCarrierParcelTemplateSelected=function(){return void 0!==this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedUserParcelTemplate=function(){return this.selectedUserParcelTemplate},SelectedParcelType.prototype.getSelectedCarrierParcelTemplate=function(){return this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedParcelTemplate=function(){return this.isUserParcelTemplateSelected()?this.getSelectedUserParcelTemplate():this.getSelectedCarrierParcelTemplate()},SelectedParcelType.prototype.isEqual=function(other){return this.isUnselected()?other.isUnselected():this.isCustomBoxOrTubeSelected()?other.isCustomBoxOrTubeSelected():this.isCustomPolymailerSelected()?other.isCustomPolymailerSelected():JSON.stringify(this.getSelectedParcelTemplate())===JSON.stringify(other.getSelectedParcelTemplate())},SelectedParcelType}(),blackbeardSignatureConfirmation={STANDARD:"STANDARD",ADULT:"ADULT",CERTIFIED:"CERTIFIED",INDIRECT:"INDIRECT",CARRIER_CONFIRMATION:"CARRIER_CONFIRMATION"}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{WM:()=>getRateValueTranslated,WW:()=>shouldUseKeep,gG:()=>getEstimatedDaysTranslated});var _constants_currency__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/currency.ts"),getEstimatedDaysTranslated=(__webpack_require__("./app/constants/signatureConfirmation.ts"),__webpack_require__("./app/types/SignatureConfirmation.ts"),__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/ShipmentExtrasCard/utils.ts"),function(estimatedDays,t){return estimatedDays?t("translations:day",{count:estimatedDays}):t("orders:calculateRates:rates:info:etaUnavailable")}),getRateValueTranslated=function(amount,currency,t){var noValue="".concat(_constants_currency__WEBPACK_IMPORTED_MODULE_0__.q[currency].symbol,"—");return Number(amount)?t("translations:currency",{value:{value:Number(amount),currency_iso:currency}}):noValue};function shouldUseKeep(mixedSelection){return mixedSelection&&mixedSelection.numberWithInsurance>0&&mixedSelection.numberSelected>1}},"./app/types/SignatureConfirmation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var SignatureConfirmation;__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__}),function(SignatureConfirmation){SignatureConfirmation.STANDARD="STANDARD",SignatureConfirmation.ADULT="ADULT",SignatureConfirmation.CERTIFIED="CERTIFIED",SignatureConfirmation.INDIRECT="INDIRECT",SignatureConfirmation.CARRIER_CONFIRMATION="CARRIER_CONFIRMATION"}(SignatureConfirmation||(SignatureConfirmation={}));const __WEBPACK_DEFAULT_EXPORT__=SignatureConfirmation},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sV:()=>schema.Ay,P0:()=>getLocalTraits,ls:()=>segment_identify,Ok:()=>isTraitDifferent,u4:()=>track});var esm_exports=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),schema=__webpack_require__("./app/utils/segment/schema.ts");__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/selectors/user.selectors.ts");var segment_identify=function(id,traits){window.analytics?window.analytics.identify(id,traits):esm_exports.wd("identify called before window.analytics available",{level:"warning"})},track=function(name,properties){window.analytics?window.analytics.track(name,properties):esm_exports.wd("track called before window.analytics available",{level:"warning"})},getLocalTraits=function(){var ajsUserTraits=localStorage.getItem("ajs_user_traits");if(ajsUserTraits)try{return JSON.parse(ajsUserTraits)}catch(error){return}},isTraitDifferent=function(property,value){var localTraits=getLocalTraits();return!(localTraits&&localTraits[property]===value)}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Events;__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,ID:()=>EVENT_ORIGIN_ORDER_DETAILS,hX:()=>EVENT_ORIGIN_LEGACY_ORDER}),function(Events){Events.registered="Signed Up",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated",Events.downgrade_survey_question_answered="Pro Plan Downgrade Survey Question Answered",Events.downgrade_survey_cancelled="Pro Plan Downgrade Survey Cancelled",Events.downgrade_survey_completed="Pro Plan Downgrade Survey Completed",Events.downgrade_survey_submitted="Pro Plan Downgrade Survey Submitted"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table";const __WEBPACK_DEFAULT_EXPORT__=Events},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/ItemizedPurchaseSummary/ItemizedPurchaseSummary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MultipleRates:()=>MultipleRates,MultipleRatesWithReturnsSignatureAndInsurance:()=>MultipleRatesWithReturnsSignatureAndInsurance,ReturnLabel:()=>ReturnLabel,SingleRateOnly:()=>SingleRateOnly,WithReturnLabel:()=>WithReturnLabel,WithReturnSignatureAndInsurance:()=>WithReturnSignatureAndInsurance,WithReturnSignatureAndInsuranceWithoutExtras:()=>WithReturnSignatureAndInsuranceWithoutExtras,WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView:()=>WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView,default:()=>ItemizedPurchaseSummary_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),Badge=__webpack_require__("./node_modules/@goshippo/components/esm/Badge/Badge.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Link=__webpack_require__("./node_modules/@goshippo/components/esm/Link/Link.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),blackbeardCurrencies_USD={iso:"USD",symbol:"$"},react=__webpack_require__("./node_modules/react/index.js"),Rate=__webpack_require__("./app/types/Rate.ts"),CarrierIconMui=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx"),utils=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/utils.ts");const ItemizedPurchaseSummary_ItemizedPurchaseSummaryItem=(0,react.memo)((function(_a){var t=_a.t,rateTotal=_a.rateTotal,returnDefaultRate=_a.returnDefaultRate,amount=rateTotal.amount,rate=rateTotal.rate,_b=rateTotal.includedInsurancePrice,includedInsurancePrice=void 0===_b?0:_b,currency=rateTotal.currency,total=rateTotal.total,returnAmount=rateTotal.returnAmount,provider=rate.provider,name=rate.servicelevel.name,rateValueTranslated=(0,utils.WM)((total-includedInsurancePrice).toString(),currency,t);return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({"data-testid":"purchase-summary-item",direction:"row",justifyContent:"space-between",alignItems:"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({direction:"row",spacing:2,alignItems:"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CarrierIconMui.A,{size:32,provider,count:amount>1?amount:void 0}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Stack.A,(0,tslib_es6.Cl)({direction:"column",spacing:0,alignItems:"left"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body"},{children:"".concat(provider," ").concat(name)}))}))]})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({align:"right",component:"p",variant:"body","data-testid":"purchase-summary-label-cost"},{children:rateValueTranslated}))]})),!!returnAmount&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({"data-testid":"purchase-summary-return",direction:"row",spacing:2,alignItems:"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CarrierIconMui.A,{size:32,provider:(null==returnDefaultRate?void 0:returnDefaultRate.provider_name)?returnDefaultRate.provider_name:provider,count:returnAmount}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body"},{children:[(null==returnDefaultRate?void 0:returnDefaultRate.name)?returnDefaultRate.name:"".concat(provider," ").concat(rate.servicelevel.name)," ","".concat(t("orders:checkout:return")," (").concat(t("orders:checkout:returnCharge"),")")]}))]}))]})}));var insurance=__webpack_require__("./app/assets/orders/insurance.svg"),signature=__webpack_require__("./app/assets/orders/signature.svg"),ItemizedPurchaseSummary=function(_a){var rateList,t=_a.t,rates=_a.rates,returnDefaultRate=_a.returnDefaultRate,labelPurchaseView=_a.labelPurchaseView,isReturn=_a.isReturn,removeInsurance=_a.removeInsurance,removeSignature=_a.removeSignature,totalText=(0,react.useMemo)((function(){return labelPurchaseView?(0,Rate.J5)(rates):(0,Rate.sI)(rates)}),[rates]),_b=(rateList=rates).reduce((function(total,rate){var includedInsurancePrice=rate.includedInsurancePrice,numberWithInsurance=rate.numberWithInsurance,numberWithSignature=rate.numberWithSignature,amount=rate.amount;return(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},total),{rateCount:total.rateCount+(amount||0),totalIncludedInsurance:total.totalIncludedInsurance+(includedInsurancePrice||0),numberWithInsurance:total.numberWithInsurance+(numberWithInsurance||0),numberWithSignature:total.numberWithSignature+(numberWithSignature||0)})}),{rateCount:0,totalIncludedInsurance:0,numberWithInsurance:0,numberWithSignature:0,currency:rateList[0]?rateList[0].currency:blackbeardCurrencies_USD.iso}),rateCount=_b.rateCount,totalIncludedInsurance=_b.totalIncludedInsurance,numberWithInsurance=_b.numberWithInsurance,numberWithSignature=_b.numberWithSignature,currency=_b.currency,insuranceCostValue=(0,utils.WM)(String(totalIncludedInsurance),currency,t);return(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({sx:{backgroundColor:colors.T.backgroundDeemphasized,borderRadius:1,p:2,color:colors.T.text.default}},{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({spacing:2},{children:[rates.map((function(rate){return(0,emotion_react_jsx_runtime_browser_esm.Y)(ItemizedPurchaseSummary_ItemizedPurchaseSummaryItem,{t,rateTotal:rate,returnDefaultRate,labelPurchaseView},rate.rate.servicelevel.name)})),!!totalIncludedInsurance&&!labelPurchaseView&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({"data-testid":"purchase-summary-insurance",direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({direction:"row",spacing:2,alignItems:"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Badge.A,(0,tslib_es6.Cl)({"data-testid":"insurance-count-badge",color:"default",sx:{".MuiBadge-badge":{backgroundColor:colors.T.secondary,color:colors.T.white}},badgeContent:rateCount>1?numberWithInsurance:void 0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:insurance,alt:"Covergenius",style:{width:"1.875rem"}})})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body"},{children:t("orders:shipmentExtras:insuredWithShippoTotalProtection")})),removeInsurance&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Link.A,(0,tslib_es6.Cl)({color:"secondary",onClick:removeInsurance,"data-testid":"remove-insurance-link"},{children:t("orders:phrases:remove")}))]})]})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({align:"right",component:"p",variant:"body","data-testid":"purchase-summary-insurance-cost"},{children:insuranceCostValue}))]})),!!numberWithSignature&&!labelPurchaseView&&(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({"data-testid":"purchase-summary-signature",direction:"row",spacing:2,alignItems:"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Badge.A,(0,tslib_es6.Cl)({"data-testid":"signature-count-badge",color:"default",sx:{".MuiBadge-badge":{backgroundColor:colors.T.secondary,color:colors.T.white}},badgeContent:rateCount>1?numberWithSignature:void 0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{style:{width:"2rem"},src:signature,alt:"signature required"})})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body"},{children:t("orders:shipmentExtras:signatureRequired")})),removeSignature&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Link.A,(0,tslib_es6.Cl)({color:"secondary",onClick:removeSignature,"data-testid":"remove-signature-link"},{children:t("orders:phrases:remove")}))]})]})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({direction:"row",justifyContent:"space-between","align-items":"center"},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({direction:"row"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h3",variant:"bodyEmphasized"},{children:t(isReturn?"orders:checkout:returnTotal":"orders:checkout:total")})),isReturn?(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h4",variant:"body",style:{marginLeft:shippoTheme.A.spacing(1)}},{children:t("orders:checkout:payOnUse")})):null]})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h3",variant:"bodyEmphasized","data-testid":"purchase-summary-total"},{children:totalText}))]})),isReturn?(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"caption"},{children:t("orders:checkout:returnWarning")})):null]}))}))};const ItemizedPurchaseSummary_stories={title:"Blackbeard /ItemizedPurchaseSummary",component:ItemizedPurchaseSummary,parameters:{layout:"centered"},argTypes:{}};var ItemizedPurchaseSummaryWithTranslate=(0,translate.Tl)("orders")(ItemizedPurchaseSummary),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"400px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ItemizedPurchaseSummaryWithTranslate,(0,tslib_es6.Cl)({},args))}))},Default=Template.bind({});Default.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:0,totalInsuranceAmount:0,returnAmount:0}]};var WithReturnSignatureAndInsurance=Template.bind({});WithReturnSignatureAndInsurance.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:14,totalInsuranceAmount:5e3,returnAmount:1,signatureConfirmation:{hasSignatureConfirmation:!0,signatureConfirmationType:"STANDARD"}}]};var WithReturnLabel=Template.bind({});WithReturnLabel.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:0,totalInsuranceAmount:0,returnAmount:1}]};var SingleRateOnly=Template.bind({});SingleRateOnly.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:0,totalInsuranceAmount:0,returnAmount:0,signatureConfirmation:void 0}]};var MultipleRates=Template.bind({});MultipleRates.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:"",extended_token:"usps_priority",parent_servicelevel:void 0}},amount:1,currency:"USD",total:27.24,totalInsuranceAmount:125,returnAmount:0},{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:40.1,totalInsuranceAmount:0,returnAmount:1}]};var MultipleRatesWithReturnsSignatureAndInsurance=Template.bind({});MultipleRatesWithReturnsSignatureAndInsurance.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:"",extended_token:"usps_priority",parent_servicelevel:void 0}},amount:1,currency:"USD",total:27.24,returnAmount:0,includedInsurancePrice:4.23,totalInsuranceAmount:27.24,signatureConfirmation:{hasSignatureConfirmation:!0,signatureConfirmationType:"STANDARD"}},{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:40.1,totalInsuranceAmount:0,returnAmount:1,signatureConfirmation:{hasSignatureConfirmation:!0,signatureConfirmationType:"STANDARD"}}]};var WithReturnSignatureAndInsuranceWithoutExtras=Template.bind({});WithReturnSignatureAndInsuranceWithoutExtras.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:14,totalInsuranceAmount:5e3,returnAmount:1,signatureConfirmation:{hasSignatureConfirmation:!0,signatureConfirmationType:"STANDARD"}}]};var WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView=Template.bind({});WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:14,totalInsuranceAmount:5e3,returnAmount:1,signatureConfirmation:{hasSignatureConfirmation:!0,signatureConfirmationType:"STANDARD"}}],labelPurchaseView:!0};var ReturnLabel=Template.bind({});ReturnLabel.args={t:function(key){return key},rates:[{rate:{provider:"USPS",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:"",extended_token:"usps_parcel_select",parent_servicelevel:void 0}},amount:1,currency:"USD",total:99.2,includedInsurancePrice:0,totalInsuranceAmount:0,returnAmount:0}],isReturn:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...Default.parameters?.docs?.source}}},WithReturnSignatureAndInsurance.parameters={...WithReturnSignatureAndInsurance.parameters,docs:{...WithReturnSignatureAndInsurance.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...WithReturnSignatureAndInsurance.parameters?.docs?.source}}},WithReturnLabel.parameters={...WithReturnLabel.parameters,docs:{...WithReturnLabel.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...WithReturnLabel.parameters?.docs?.source}}},SingleRateOnly.parameters={...SingleRateOnly.parameters,docs:{...SingleRateOnly.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...SingleRateOnly.parameters?.docs?.source}}},MultipleRates.parameters={...MultipleRates.parameters,docs:{...MultipleRates.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...MultipleRates.parameters?.docs?.source}}},MultipleRatesWithReturnsSignatureAndInsurance.parameters={...MultipleRatesWithReturnsSignatureAndInsurance.parameters,docs:{...MultipleRatesWithReturnsSignatureAndInsurance.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...MultipleRatesWithReturnsSignatureAndInsurance.parameters?.docs?.source}}},WithReturnSignatureAndInsuranceWithoutExtras.parameters={...WithReturnSignatureAndInsuranceWithoutExtras.parameters,docs:{...WithReturnSignatureAndInsuranceWithoutExtras.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...WithReturnSignatureAndInsuranceWithoutExtras.parameters?.docs?.source}}},WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView.parameters={...WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView.parameters,docs:{...WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...WithReturnSignatureAndInsuranceWithoutExtrasAndOnLabelPurchaseView.parameters?.docs?.source}}},ReturnLabel.parameters={...ReturnLabel.parameters,docs:{...ReturnLabel.parameters?.docs,source:{originalSource:"(args: ItemizedPurchaseSummaryProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <ItemizedPurchaseSummaryWithTranslate {...args} />\n    </div>;\n}",...ReturnLabel.parameters?.docs?.source}}}}}]);