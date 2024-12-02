"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2586],{"./app/blackbeard/components/DesktopMenuMobileDrawer/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useDesktopMenuMobileDrawer});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_observability__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/observability/index.ts"),_utils_tableFiltersTracking__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/utils/tableFiltersTracking.ts");function useDesktopMenuMobileDrawer(trackingSourceName,filterName){var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.zs)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchor=_a[0],setAnchor=_a[1];return{anchor,onOpenMenu:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){setAnchor(e.currentTarget),trackingSourceName&&filterName&&_utils_observability__WEBPACK_IMPORTED_MODULE_1__.O.singleEvent(trackingSourceName,{filter:(0,_utils_tableFiltersTracking__WEBPACK_IMPORTED_MODULE_2__.Z)(filterName)})}),[filterName,trackingSourceName]),onCloseMenu:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setAnchor(null)}),[])}}},"./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/Sort.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Tab/Tab.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var dirty=_a.dirty,open=_a.open,_b=_a.endIcon,endIcon=void 0===_b||_b,_c=_a.startIcon,startIcon=void 0!==_c&&_c,label=_a.label,tabProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["dirty","open","endIcon","startIcon","label"]),icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return startIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A,{}):endIcon&&open?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A,{}):endIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,{}):void 0}),[endIcon,open,startIcon]),filteredTabProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var duped=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},tabProps);return delete duped.textColor,duped}),[tabProps]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},filteredTabProps,{disableFocusRipple:!0,disableTouchRipple:!0,icon,iconPosition:startIcon?"start":"end",label:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({color:_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.secondary,variant:"bodyEmphasized",component:"h4",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{children:label})),sx:{minHeight:"40px",opacity:1,backgroundColor:dirty?_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.secondaryHover:"inherit",borderRadius:"0.5rem",textTransform:"none",py:0,px:1}}))}},"./app/pages/BlackbeardOrdersOptInOptOut/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kz:()=>clearOptInOutSnooze,V7:()=>getBlackbeardOrdersStorageValue,Wn:()=>getOptInOutDismissed,l3:()=>setBlackbeardOrdersStorageValue,FE:()=>shouldShowBlackbeardOrders,Xs:()=>snoozedOptInPrompt,Jg:()=>storeSnoozeValue});var moment=__webpack_require__("./node_modules/moment/moment.js");var BLACKBEARD_ORDERS_STORAGE_KEY="ordersRevamp",OPT_IN_SNOOZED_STORAGE_KEY="ordersRevampOptInDismissed",OPT_OUT_SNOOZED_STORAGE_KEY="ordersRevampOptOutDismissed",ls=function getLocalStorage(){return localStorage}();function removeOptInOptOutSnooze(optType){switch(optType){case"optIn":return ls.removeItem(OPT_IN_SNOOZED_STORAGE_KEY),!0;case"optOut":return ls.removeItem(OPT_OUT_SNOOZED_STORAGE_KEY),!0}}function getOptInOutDismissed(type){var storedDateValue=ls.getItem("optIn"===type?OPT_IN_SNOOZED_STORAGE_KEY:OPT_OUT_SNOOZED_STORAGE_KEY);if(storedDateValue)try{return new Date(storedDateValue)}catch(_a){return}}function snoozedOptInPrompt(optInOutType,startingDate){return function snoozedRecently(startingDate,dismissedDate){if(!dismissedDate)return!1;var sevenDaysAgo=moment(startingDate).subtract(7,"days");return 7-moment(dismissedDate).diff(sevenDaysAgo,"days")<7}(startingDate,getOptInOutDismissed(optInOutType))}function clearOptInOutSnooze(){removeOptInOptOutSnooze("optIn"),removeOptInOptOutSnooze("optOut")}function setBlackbeardOrdersStorageValue(newValue){ls.setItem(BLACKBEARD_ORDERS_STORAGE_KEY,newValue)}function getBlackbeardOrdersStorageValue(){return ls.getItem(BLACKBEARD_ORDERS_STORAGE_KEY)}function shouldShowBlackbeardOrders(ordersRedesign,initialOptInOptOut,optInOutValue){if(function optInOutEnabled(value){return!!value&&"disabled"!==value}(initialOptInOptOut))switch(optInOutValue){case"optIn":return!0;case"optOut":return!1;default:return"initialOptIn"===initialOptInOptOut}return!!ordersRedesign}function storeSnoozeValue(optInOutType){switch(optInOutType){case"optIn":ls.setItem(OPT_IN_SNOOZED_STORAGE_KEY,(new Date).toISOString());break;case"optOut":ls.setItem(OPT_OUT_SNOOZED_STORAGE_KEY,(new Date).toISOString())}}},"./app/utils/fullstory/tracking.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>fullStoryTracking});var _fullstory_browser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),fullStoryTracking=function(name,properties){(0,_fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.Dp)()&&(0,_fullstory_browser__WEBPACK_IMPORTED_MODULE_0__.f0)(name,properties)}},"./app/utils/newRelic/newRelic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>newRelic});var newRelic=new(function(){function NewRelicClient(){this.instance=null}return NewRelicClient.prototype.setUserId=function(userId){var _a;null===(_a=this.instance)||void 0===_a||_a.setUserId(userId)},NewRelicClient.prototype.addPageAction=function(name,attributes){var _a;null===(_a=this.instance)||void 0===_a||_a.addPageAction(name,attributes)},NewRelicClient.prototype.log=function(message,options){var _a;null===(_a=this.instance)||void 0===_a||_a.log(message,options)},NewRelicClient.prototype.noticeError=function(error,customAttributes){var _a;null===(_a=this.instance)||void 0===_a||_a.noticeError(error,customAttributes)},NewRelicClient.prototype.setInstance=function(instance){this.instance=instance,this.instance.setApplicationVersion("WEB-1772:610deff604a2d51b5b0bd13d5d3cc4f6c2a49bed")},NewRelicClient.prototype.isInitialized=function(){return!!this.instance},NewRelicClient}())},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.singleEvent=function(name,attributes){this.sendPageAction(name,attributes),this.sendFullStoryLog(name,attributes),this.sendFullStoryEvent(name,attributes)},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={timeoutId,startTime:Date.now()},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.errorEvent=function(name,attributes,severity){void 0===severity&&(severity="ERROR");var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_").concat(severity);this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sV:()=>schema.Ay,P0:()=>getLocalTraits,ls:()=>segment_identify,Ok:()=>isTraitDifferent,u4:()=>track});var esm_exports=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),schema=__webpack_require__("./app/utils/segment/schema.ts");__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/pages/BlackbeardOrdersOptInOptOut/helpers.ts"),__webpack_require__("./app/selectors/user.selectors.ts");var tracking=__webpack_require__("./app/utils/fullstory/tracking.ts"),segment_identify=function(id,traits){window.analytics?window.analytics.identify(id,traits):esm_exports.wd("identify called before window.analytics available",{level:"warning"})},track=function(name,properties){if(schema.oe.includes(name)&&(0,tracking.q)(name,properties),window.analytics)return window.analytics.track(name,properties);esm_exports.wd("track called before window.analytics available",{level:"warning"})},getLocalTraits=function(){var ajsUserTraits=localStorage.getItem("ajs_user_traits");if(ajsUserTraits)try{return JSON.parse(ajsUserTraits)}catch(error){return}},isTraitDifferent=function(property,value){var localTraits=getLocalTraits();return!(localTraits&&localTraits[property]===value)}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Events;__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,ID:()=>EVENT_ORIGIN_ORDER_DETAILS,hX:()=>EVENT_ORIGIN_LEGACY_ORDER,oe:()=>FullStoryEventsToBeTracked}),function(Events){Events.registered="Signed Up",Events.store_initiated="Store Connection Initiated",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.insurance_upsell_experiment="Insurance Upsell Experiment",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated",Events.downgrade_survey_question_answered="Pro Plan Downgrade Survey Question Answered",Events.downgrade_survey_cancelled="Pro Plan Downgrade Survey Cancelled",Events.downgrade_survey_completed="Pro Plan Downgrade Survey Completed",Events.downgrade_survey_submitted="Pro Plan Downgrade Survey Submitted",Events.not_found_page_viewed="Not Found Page Viewed",Events.recommended="Recommended",Events.recommendation_dismissed="Recommendation Dismissed",Events.recommendations_dismissed="Recommendations Dismissed",Events.recommendation_applied="Recommendation Applied"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table",FullStoryEventsToBeTracked=[Events.label_purchase,Events.label_purchase_failed,Events.credit_card_added];const __WEBPACK_DEFAULT_EXPORT__=Events},"./app/utils/tableFiltersTracking.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>getFilterTrackingObject,Z:()=>getFilterTrackingName});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),getFilterTrackingName=function(filter){var filtersTrackingNames={sortField:"Sort",orderStatus:"Order type",orderTagsFilter:"Tags",isInternational:"Destinations",dateFilter:"Date",storeFilter:"Stores",itemFilter:"Items",weightFilter:"Weight",shippingMethodsFilter:"Shipping methods",trackingStatus:"Tracking status",labelStatusFilter:"Label status",createdByFilter:"Created by",carrierFilter:"Carrier",labelTypeFilter:"Label type"};return filtersTrackingNames[filter]?filtersTrackingNames[filter]:filter},getFilterTrackingObject=function(filter,value){var filtersTrackingLogic={sortField:function(){return{value:"-created_at"===value?"newest":"created_at"===value?"oldest":"most relevant"}},orderTagsFilter:function(){return{tagQty:value.tags.length,includeUntagged:value.untagged}},isInternational:function(){return{value:""===value?"all destinations":"true"===value?"international":"domestic"}},dateFilter:function(){var dateFrom=value[0]?value[0]:"",dateTo=value[1]?value[1]:"",filterType=dateFrom&&dateTo?"range":dateFrom?"after date":dateTo?"before date":"clear",todayDate=moment__WEBPACK_IMPORTED_MODULE_0__(),daysRange=dateFrom&&dateTo?{daysRange:dateTo.diff(dateFrom,"days")}:dateFrom?{daysRange:todayDate.diff(dateFrom,"days")}:{};return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({dateFrom:dateFrom?dateFrom.format("L"):"",dateTo:dateTo?dateTo.format("L"):""},daysRange),{filterType})},itemFilter:function(){return{items:value,itemQty:value.length}},weightFilter:function(){var minWeight=value.minWeight||"",maxWeight=value.maxWeight||"";return{filterType:minWeight&&maxWeight?"range":minWeight?"min":maxWeight?"max":"clear",minWeight,maxWeight,weightUnit:value.weightUnit||""}},shippingMethodsFilter:function(){return{shippingMethods:value,shippingMethodQty:value.length}}},filterTrackingObject=filtersTrackingLogic[filter]?filtersTrackingLogic[filter]():void 0;return filterTrackingObject?(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({filter:getFilterTrackingName(filter)},filterTrackingObject):{filter:getFilterTrackingName(filter),value}}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")}}]);