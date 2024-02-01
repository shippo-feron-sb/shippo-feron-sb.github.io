"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3232],{"./app/actions/orders.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UK:()=>updateBatchEntriesAddress,cU:()=>clearBatchEntryEditNotificationMessage});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/actions/constants.ts");function updateBatchEntriesAddress(_a){var orderSelection=_a.orderSelection,addressType=_a.addressType,address=_a.address,combineSenderReturnAddresses=_a.combineSenderReturnAddresses,createUserAddress=_a.createUserAddress,source=_a.source,trackingReference=_a.trackingReference;return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.u.ORDERS_UPDATE_BATCH_ENTRIES_ADDRESS,payload:{address,addressType,orderSelection,combineSenderReturnAddresses,createUserAddress,source,trackingReference}}}function clearBatchEntryEditNotificationMessage(){return{type:_constants__WEBPACK_IMPORTED_MODULE_0__.u.ORDERS_BATCH_ENTRY_EDIT_CLEAR_NOTIFICATION_MESSAGE}}},"./app/pages/Blackbeard/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});var _goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),colors={text:{default:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.text.default,placeholder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,inverse:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.white},web:{primary:{main:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,hover:"#DFF6CC",disabled:"#97C38E"},secondary:{main:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,hover:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.backgroundDeemphasized,disabled:"#C0C7CA"}},shadows:{1:"0px 2px 6px rgb(76 103 116 / 0.32)",2:"0px 4px 6px rgb(76 103 116 / 0.32)",3:"0px 8px 16px rgb(76 103 116 / 0.32)",4:"0px 16px 24px rgb(76 103 116 / 0.32)",focus:"0px 0px 0px 0px 4px rgb(242 255 235 / 1)"}}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Badge/Badge.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),constants_carriers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/carriers.ts");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var _b,provider=_a.provider,count=_a.count,size=_a.size;constants_carriers__WEBPACK_IMPORTED_MODULE_0__.ZQ[provider]&&(provider=constants_carriers__WEBPACK_IMPORTED_MODULE_0__.ZQ[provider]);var icon=null===(_b=constants_carriers__WEBPACK_IMPORTED_MODULE_0__.ZP.find((function(x){return x.name.toLowerCase()===provider.toLowerCase()})))||void 0===_b?void 0:_b.icon,sizeOrDefault=size||40;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({color:"default",sx:{".MuiBadge-badge":{backgroundColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.O.secondary,color:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.O.white}},badgeContent:count},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("img",{style:{width:"".concat(sizeOrDefault,"px"),height:"".concat(sizeOrDefault,"px"),borderRadius:"0.125rem"},alt:provider,src:icon})}))}},"./app/pages/Orders/Blackbeard/types/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./app/constants/distance.ts"),__webpack_require__("./app/constants/weight.ts"),__webpack_require__("./app/types/LineItem.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/ParcelTemplate.ts")},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zW:()=>schema,j:()=>track});var Events,esm_exports=__webpack_require__("./node_modules/@sentry/core/esm/exports.js");!function(Events){Events.registered="Signed Up",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated"}(Events||(Events={}));const schema=Events;__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./app/pages/Onboarding/onboarding.constants.ts"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts");var track=function(name,properties){window.analytics?window.analytics.track(name,properties):esm_exports.uT("track called before window.analytics available",{level:"warning"})}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierRatesCard/CalculatedRateItemColumnLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MixOrderStatus:()=>CalculatedRateItemColumnLayout_stories_MixOrderStatus,MultipleCarrierRates:()=>CalculatedRateItemColumnLayout_stories_MultipleCarrierRates,NoCarrierRate:()=>CalculatedRateItemColumnLayout_stories_NoCarrierRate,RefreshCarrierRate:()=>CalculatedRateItemColumnLayout_stories_RefreshCarrierRate,SingleCarrierRates:()=>CalculatedRateItemColumnLayout_stories_SingleCarrierRates,SingleCarrierWithMultipleOrders:()=>SingleCarrierWithMultipleOrders,default:()=>CalculatedRateItemColumnLayout_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Refresh=__webpack_require__("./node_modules/@mui/icons-material/esm/Refresh.js"),colors=__webpack_require__("./app/pages/Blackbeard/colors.ts"),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/Rate.ts"),__webpack_require__("./app/types/Address.ts"),__webpack_require__("./app/types/CustomsDeclaration.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/orders.selectors.ts"),__webpack_require__("./app/selectors/rates.selectors.ts"),__webpack_require__("./app/selectors/batch-entry.composite.selectors.ts"),__webpack_require__("./app/selectors/providers.selectors.ts");__webpack_require__("./app/actions/orders.actions.ts"),__webpack_require__("./app/selectors/batch-entry.selectors.ts"),__webpack_require__("./app/utils/segment/index.ts"),__webpack_require__("./app/pages/Orders/Blackbeard/types/utils.ts");var MAPPED_ERRORS={carrierParcelNoRatesErrors:{selector:"#packageInfoSummary-header",key:"carrierParcelNoRatesErrors"},dateErrors:{selector:"#shipment-date-accordion-header",key:"dateErrors"},customsErrors:{selector:"#items-accordion-header",key:"customsErrors"},packageErrors:{selector:"#packageInfoSummary-header",key:"packageErrors"},recipientErrors:{selector:"#address-accordion-header",key:"recipientErrors"}};var gotoElementInAccordion=function(_a){var targetElement=_a.targetElement;!function(sectionElement){sectionElement&&(sectionElement.classList.contains("Mui-expanded")||sectionElement.click())}(_a.sectionElement),setTimeout((function(){!function(targetElement){targetElement&&targetElement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}(targetElement)}),500)};const useGotoElementInAccordion=function(selectors,ref){var element=selectors.element,section=selectors.section;return(0,react.useCallback)((function(){var _a,_b,elementHTMLElement=null===(_a=null==ref?void 0:ref.current)||void 0===_a?void 0:_a.querySelector(element||section),sectionHTMLElement=null===(_b=null==ref?void 0:ref.current)||void 0===_b?void 0:_b.querySelector(section);elementHTMLElement&&sectionHTMLElement&&gotoElementInAccordion({targetElement:elementHTMLElement,sectionElement:sectionHTMLElement})}),[ref,element,section])};var CarrierIconMui=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx"),SubText=function(_a){var text=_a.text;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"p",variant:"caption",color:shippoTheme.Z.palette.grey[900]},{children:text}))},IncompleteErrorList=function(_a){var t=_a.t,errorKeys=_a.errorKeys;return errorKeys.length?errorKeys.length<=2?(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{children:errorKeys.map((function(error){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:t("orders:calculateRates:rates:errors:".concat(MAPPED_ERRORS[error].key))},error)}))}):(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:t("orders:calculateRates:rates:errors:".concat(MAPPED_ERRORS[errorKeys[0]].key))}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:"".concat(errorKeys.length-1," ").concat(t("orders:calculateRates:rates:errors:moreRequired"))})]}):null},NoCarrierRate=function(_a){var t=_a.t,errorKeys=_a.errorKeys,drawerContainerRef=_a.drawerContainerRef,scrollToFirstIncompleteError=(0,react.useCallback)((function(){var _a,sectionSelector=MAPPED_ERRORS[errorKeys[0]].selector,targetElement=null===(_a=null==drawerContainerRef?void 0:drawerContainerRef.current)||void 0===_a?void 0:_a.querySelector(sectionSelector);targetElement&&gotoElementInAccordion({targetElement,sectionElement:targetElement})}),[drawerContainerRef,errorKeys]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({variant:"text",onClick:scrollToFirstIncompleteError,disableRipple:!0,"data-testid":"drawer-footer-secondary-button",sx:{textAlign:"left",p:1,borderRadius:"8px","&.MuiButtonBase-root.MuiButton-root.MuiButton-textPrimary:hover":{backgroundColor:colors.O.web.primary.hover}}},{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h6",variant:"caption"},{children:t("orders:calculateRates:rates:errors:ratesUnavailable")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(IncompleteErrorList,{t,errorKeys})]})}))},MultipleCarrierRates=function(_a){var t=_a.t,totalText=_a.totalText,drawerContainerRef=_a.drawerContainerRef,estimatedDateRangeText=_a.estimatedDateRangeText,scrollToRateCards=useGotoElementInAccordion({section:"#carrier-rates-accordion-header"},drawerContainerRef);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Stack.Z,(0,tslib_es6.pi)({direction:"column",spacing:1,sx:{cursor:"pointer",overflow:"hidden"},onClick:scrollToRateCards},{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,(0,tslib_es6.pi)({sx:{overflow:"hidden"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h6",variant:"caption",color:shippoTheme.Z.palette.grey[900],noWrap:!0},{children:t("orders:calculateRates:multipleRates")})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",spacing:shippoTheme.Z.spacing(1)},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:"".concat(totalText," ").concat(t("orders:calculateRates:total"))}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:estimatedDateRangeText})]}))]}))}))},MixOrderStatus=function(_a){var t=_a.t,totalText=_a.totalText,drawerContainerRef=_a.drawerContainerRef,errorKeys=_a.errorKeys,selectedOrderCount=_a.selectedOrderCount,validBatchEntriesToBuyCount=_a.validBatchEntriesToBuyCount,estimatedDateRangeText=_a.estimatedDateRangeText,scrollToFirstIncompleteError=(0,react.useCallback)((function(){var _a,sectionSelector=MAPPED_ERRORS[errorKeys[0]].selector,targetElement=null===(_a=null==drawerContainerRef?void 0:drawerContainerRef.current)||void 0===_a?void 0:_a.querySelector(sectionSelector);targetElement&&gotoElementInAccordion({targetElement,sectionElement:targetElement})}),[drawerContainerRef,errorKeys]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({variant:"text",onClick:scrollToFirstIncompleteError,disableRipple:!0,"data-testid":"drawer-footer-secondary-button",sx:{textAlign:"left",p:1,borderRadius:"8px",cursor:"pointer","&.MuiButtonBase-root.MuiButton-root.MuiButton-textPrimary:hover":{backgroundColor:colors.O.web.primary.hover}}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Stack.Z,(0,tslib_es6.pi)({direction:"column",spacing:1},{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h6",variant:"caption"},{children:t("orders:calculateRates:readyToBuy",{ready:validBatchEntriesToBuyCount,total:selectedOrderCount})})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",spacing:shippoTheme.Z.spacing(1)},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:"".concat(totalText," ").concat(t("orders:calculateRates:total"))}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:estimatedDateRangeText})]}))]})}))}))},SingleCarrierRates=function(_a){var _b,_c,totalText=_a.totalText,carrierRate=_a.carrierRate,estimatedDateRangeText=_a.estimatedDateRangeText,drawerContainerRef=_a.drawerContainerRef,rate=carrierRate.rate,amount=carrierRate.amount,hasMultipleOrders=amount>1,token=null===(_b=rate.servicelevel)||void 0===_b?void 0:_b.token,handleScrollToRate=useGotoElementInAccordion({element:"#carrier-rates-accordion-header",section:"#".concat(token,"-rate-card")},drawerContainerRef);return(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",alignItems:"center",spacing:hasMultipleOrders?2:1,sx:{cursor:"pointer",overflow:"hidden",py:shippoTheme.Z.spacing(1.5)},onClick:handleScrollToRate},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(CarrierIconMui.Z,{size:32,provider:rate.provider,count:hasMultipleOrders?amount:void 0})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,(0,tslib_es6.pi)({sx:{overflow:"hidden"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h6",variant:"caption",noWrap:!0},{children:"".concat(rate.provider," ").concat(null===(_c=rate.servicelevel)||void 0===_c?void 0:_c.name)})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",spacing:shippoTheme.Z.spacing(1)},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:totalText}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(SubText,{text:estimatedDateRangeText})]}))]}))]}))},FooterRefreshButton=function(_a){var text=_a.text,onClick=_a.onClick,isRefreshing=_a.isRefreshing,handleClick=(0,react.useCallback)((function(evt){evt.detail<2&&onClick(evt)}),[onClick]);return(0,emotion_react_jsx_runtime_browser_esm.BX)(IconButton.Z,(0,tslib_es6.pi)({onClick:handleClick,disabled:isRefreshing,color:"primary","data-testid":"drawer-footer-secondary-button",sx:{gap:1,borderRadius:"8px","&.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary:hover":{backgroundColor:"".concat(colors.O.web.primary.hover," !important")}}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Refresh.Z,{sx:{animation:isRefreshing?"spin 1s linear infinite":""},fontSize:"small"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h6",variant:"caption"},{children:text}))]}))},RefreshCarrierRate=function(_a){var t=_a.t,handleRefresh=_a.handleRefresh,isRefreshing=_a.isRefreshing;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(FooterRefreshButton,{text:t("orders:calculateRates:refreshRates"),onClick:handleRefresh,isRefreshing})};const CarrierRatesCard_CalculatedRateItemColumnLayout=(0,react.memo)((function(_a){var t=_a.t,validBatchEntriesToBuyCount=_a.validBatchEntriesToBuyCount,errorKeys=_a.errorKeys,groupedRates=_a.groupedRates,totalText=_a.totalText,selectedOrderCount=_a.selectedOrderCount,estimatedDateRangeText=_a.estimatedDateRangeText,handleRefresh=_a.handleRefresh,isRefreshing=_a.isRefreshing,requireRefresh=_a.requireRefresh,drawerContainerRef=_a.drawerContainerRef;return requireRefresh?(0,emotion_react_jsx_runtime_browser_esm.tZ)(RefreshCarrierRate,{t,handleRefresh,isRefreshing:!1}):isRefreshing&&!requireRefresh?(0,emotion_react_jsx_runtime_browser_esm.tZ)(RefreshCarrierRate,{t,handleRefresh,isRefreshing}):validBatchEntriesToBuyCount>=1&&selectedOrderCount!==validBatchEntriesToBuyCount?(0,emotion_react_jsx_runtime_browser_esm.tZ)(MixOrderStatus,{t,totalText,drawerContainerRef,selectedOrderCount,validBatchEntriesToBuyCount,estimatedDateRangeText,errorKeys}):1===(null==groupedRates?void 0:groupedRates.length)?(0,emotion_react_jsx_runtime_browser_esm.tZ)(SingleCarrierRates,{totalText,drawerContainerRef,carrierRate:groupedRates[0],estimatedDateRangeText}):(null==groupedRates?void 0:groupedRates.length)>1?(0,emotion_react_jsx_runtime_browser_esm.tZ)(MultipleCarrierRates,{t,totalText,drawerContainerRef,estimatedDateRangeText}):groupedRates&&!errorKeys.length?(0,emotion_react_jsx_runtime_browser_esm.tZ)(RefreshCarrierRate,{t,handleRefresh,isRefreshing:!1}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(NoCarrierRate,{t,errorKeys,drawerContainerRef})})),CalculatedRateItemColumnLayout_stories={title:"CalculatedRateItemColumnLayout",component:CarrierRatesCard_CalculatedRateItemColumnLayout,parameters:{layout:"centered"}};var CalculatedRateItemColumnLayoutWithTranslate=(0,translate.Iu)("orders")(CarrierRatesCard_CalculatedRateItemColumnLayout),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(CalculatedRateItemColumnLayoutWithTranslate,(0,tslib_es6.pi)({},args))},CalculatedRateItemColumnLayout_stories_SingleCarrierRates=Template.bind({});CalculatedRateItemColumnLayout_stories_SingleCarrierRates.args={errorKeys:[],groupedRates:[{rate:{provider:"USPS",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:"",extended_token:"usps_priority",parent_servicelevel:void 0}},amount:1,currency:"USD",total:7.16,shipmentObjectId:"c1dc84dd4350435189ca9cb3e8e2dbfa",totalInsuranceAmount:0,returnAmount:0}],totalText:"$23.79",estimatedDateRangeText:"2 day"};var SingleCarrierWithMultipleOrders=Template.bind({});SingleCarrierWithMultipleOrders.args={errorKeys:[],groupedRates:[{rate:{provider:"UPS",servicelevel:{name:"Ground",token:"ups_ground",terms:"",extended_token:"ups_ground",parent_servicelevel:void 0}},amount:3,currency:"USD",total:17.36,shipmentObjectId:"c1dc84dd4350435189ca9cb3e8e2dbfa",totalInsuranceAmount:0,returnAmount:0}],totalText:"$23.79",estimatedDateRangeText:"2 day"};var CalculatedRateItemColumnLayout_stories_MultipleCarrierRates=Template.bind({});CalculatedRateItemColumnLayout_stories_MultipleCarrierRates.args={errorKeys:[],groupedRates:[{rate:{provider:"USPS",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:"",extended_token:"usps_priority",parent_servicelevel:void 0}},amount:1,currency:"USD",total:7.16,shipmentObjectId:"c1dc84dd4350435189ca9cb3e8e2dbfa",totalInsuranceAmount:0,returnAmount:0},{rate:{provider:"UPS",servicelevel:{name:"Ground",token:"ups_ground",terms:"",extended_token:"ups_ground",parent_servicelevel:void 0}},amount:1,currency:"USD",total:9.53,shipmentObjectId:"ej34dd4350435189ca9cb3e8esasf",totalInsuranceAmount:0,returnAmount:0}],totalText:"$16.69",estimatedDateRangeText:"2-7 days"};var CalculatedRateItemColumnLayout_stories_MixOrderStatus=Template.bind({});CalculatedRateItemColumnLayout_stories_MixOrderStatus.args={groupedRates:[{rate:{provider:"USPS",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:"",extended_token:"usps_priority",parent_servicelevel:void 0}},amount:1,currency:"USD",total:7.16,shipmentObjectId:"c1dc84dd4350435189ca9cb3e8e2dbfa",totalInsuranceAmount:0,returnAmount:0},{rate:{provider:"UPS",servicelevel:{name:"Ground",token:"ups_ground",terms:"",extended_token:"ups_ground",parent_servicelevel:void 0}},amount:1,currency:"USD",total:9.53,shipmentObjectId:"ej34dd4350435189ca9cb3e8esasf",totalInsuranceAmount:0,returnAmount:0}],validBatchEntriesToBuyCount:1,selectedOrderCount:2,totalText:"$16.69",estimatedDateRangeText:"2-7 days",errorKeys:["recipientErrors","packageErrors"]};var CalculatedRateItemColumnLayout_stories_RefreshCarrierRate=Template.bind({});CalculatedRateItemColumnLayout_stories_RefreshCarrierRate.args={requireRefresh:!0,handleRefresh:function(){},isRefreshing:!1};var CalculatedRateItemColumnLayout_stories_NoCarrierRate=Template.bind({});CalculatedRateItemColumnLayout_stories_NoCarrierRate.args={errorKeys:["packageErrors"]},CalculatedRateItemColumnLayout_stories_SingleCarrierRates.parameters={...CalculatedRateItemColumnLayout_stories_SingleCarrierRates.parameters,docs:{...CalculatedRateItemColumnLayout_stories_SingleCarrierRates.parameters?.docs,source:{originalSource:"(args: CalculatedRateItemColumnLayoutProps) => <CalculatedRateItemColumnLayoutWithTranslate {...args} />",...CalculatedRateItemColumnLayout_stories_SingleCarrierRates.parameters?.docs?.source}}},SingleCarrierWithMultipleOrders.parameters={...SingleCarrierWithMultipleOrders.parameters,docs:{...SingleCarrierWithMultipleOrders.parameters?.docs,source:{originalSource:"(args: CalculatedRateItemColumnLayoutProps) => <CalculatedRateItemColumnLayoutWithTranslate {...args} />",...SingleCarrierWithMultipleOrders.parameters?.docs?.source}}},CalculatedRateItemColumnLayout_stories_MultipleCarrierRates.parameters={...CalculatedRateItemColumnLayout_stories_MultipleCarrierRates.parameters,docs:{...CalculatedRateItemColumnLayout_stories_MultipleCarrierRates.parameters?.docs,source:{originalSource:"(args: CalculatedRateItemColumnLayoutProps) => <CalculatedRateItemColumnLayoutWithTranslate {...args} />",...CalculatedRateItemColumnLayout_stories_MultipleCarrierRates.parameters?.docs?.source}}},CalculatedRateItemColumnLayout_stories_MixOrderStatus.parameters={...CalculatedRateItemColumnLayout_stories_MixOrderStatus.parameters,docs:{...CalculatedRateItemColumnLayout_stories_MixOrderStatus.parameters?.docs,source:{originalSource:"(args: CalculatedRateItemColumnLayoutProps) => <CalculatedRateItemColumnLayoutWithTranslate {...args} />",...CalculatedRateItemColumnLayout_stories_MixOrderStatus.parameters?.docs?.source}}},CalculatedRateItemColumnLayout_stories_RefreshCarrierRate.parameters={...CalculatedRateItemColumnLayout_stories_RefreshCarrierRate.parameters,docs:{...CalculatedRateItemColumnLayout_stories_RefreshCarrierRate.parameters?.docs,source:{originalSource:"(args: CalculatedRateItemColumnLayoutProps) => <CalculatedRateItemColumnLayoutWithTranslate {...args} />",...CalculatedRateItemColumnLayout_stories_RefreshCarrierRate.parameters?.docs?.source}}},CalculatedRateItemColumnLayout_stories_NoCarrierRate.parameters={...CalculatedRateItemColumnLayout_stories_NoCarrierRate.parameters,docs:{...CalculatedRateItemColumnLayout_stories_NoCarrierRate.parameters?.docs,source:{originalSource:"(args: CalculatedRateItemColumnLayoutProps) => <CalculatedRateItemColumnLayoutWithTranslate {...args} />",...CalculatedRateItemColumnLayout_stories_NoCarrierRate.parameters?.docs?.source}}}}}]);