"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3005],{"./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/Sort.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Tab/Tab.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var dirty=_a.dirty,open=_a.open,_b=_a.endIcon,endIcon=void 0===_b||_b,_c=_a.startIcon,startIcon=void 0!==_c&&_c,label=_a.label,tabProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["dirty","open","endIcon","startIcon","label"]),icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return startIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A,{}):endIcon&&open?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A,{}):endIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,{}):void 0}),[endIcon,open,startIcon]),filteredTabProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var duped=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},tabProps);return delete duped.textColor,duped}),[tabProps]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},filteredTabProps,{disableFocusRipple:!0,disableTouchRipple:!0,icon,iconPosition:startIcon?"start":"end",label:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({color:_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.secondary,variant:"bodyEmphasized",component:"h4",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{children:label})),sx:{minHeight:"40px",opacity:1,backgroundColor:dirty?_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.secondaryHover:"inherit",borderRadius:"0.5rem",textTransform:"none",py:0,px:1}}))}},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sV:()=>schema.Ay,P0:()=>getLocalTraits,ls:()=>segment_identify,Ok:()=>isTraitDifferent,u4:()=>track});var esm_exports=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),schema=__webpack_require__("./app/utils/segment/schema.ts");__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/constants/countries.ts"),__webpack_require__("./app/selectors/user.selectors.ts");var segment_identify=function(id,traits){window.analytics?window.analytics.identify(id,traits):esm_exports.wd("identify called before window.analytics available",{level:"warning"})},track=function(name,properties){if(window.analytics)return window.analytics.track(name,properties);esm_exports.wd("track called before window.analytics available",{level:"warning"})},getLocalTraits=function(){var ajsUserTraits=localStorage.getItem("ajs_user_traits");if(ajsUserTraits)try{return JSON.parse(ajsUserTraits)}catch(error){return}},isTraitDifferent=function(property,value){var localTraits=getLocalTraits();return!(localTraits&&localTraits[property]===value)}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Events;__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,ID:()=>EVENT_ORIGIN_ORDER_DETAILS,hX:()=>EVENT_ORIGIN_LEGACY_ORDER}),function(Events){Events.registered="Signed Up",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated",Events.downgrade_survey_question_answered="Pro Plan Downgrade Survey Question Answered",Events.downgrade_survey_cancelled="Pro Plan Downgrade Survey Cancelled",Events.downgrade_survey_completed="Pro Plan Downgrade Survey Completed",Events.downgrade_survey_submitted="Pro Plan Downgrade Survey Submitted"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table";const __WEBPACK_DEFAULT_EXPORT__=Events},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/blackbeard/components/Search/Filters/ShippingMethodsFilterTab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LongOptions:()=>LongOptions,LotOfOptions:()=>LotOfOptions,Regular:()=>Regular,default:()=>ShippingMethodsFilterTab_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),MenuItem=__webpack_require__("./node_modules/@goshippo/components/esm/MenuItem/MenuItem.js"),Checkbox=__webpack_require__("./node_modules/@goshippo/components/esm/Checkbox/Checkbox.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),Tooltip=__webpack_require__("./node_modules/@goshippo/components/esm/Tooltip/Tooltip.js"),Grid=__webpack_require__("./node_modules/@goshippo/components/esm/Grid/Grid.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),react=__webpack_require__("./node_modules/react/index.js"),segment=__webpack_require__("./app/utils/segment/index.ts"),Drawer=__webpack_require__("./node_modules/@goshippo/components/esm/Drawer/Drawer.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Menu=__webpack_require__("./node_modules/@goshippo/components/esm/Menu/Menu.js");const components_DesktopMenuMobileDrawer=function(_a){var anchor=_a.anchor,children=_a.children,drawerTitle=_a.drawerTitle,sx=_a.sx,onClose=_a.onClose;return(0,useMediaQuery.A)(shippoTheme.A.breakpoints.down("sm"))?(0,emotion_react_jsx_runtime_browser_esm.FD)(Drawer.A,(0,tslib_es6.Cl)({open:!!anchor,anchor:"bottom",onClose,PaperProps:{sx:{maxHeight:"65vh"}}},{children:[drawerTitle&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({sx:{pl:2,pr:0,pt:3,pb:3,display:"inline-block"},color:"secondary",variant:"h3",component:"h3"},{children:drawerTitle})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{}),children]})):(0,emotion_react_jsx_runtime_browser_esm.Y)(Menu.A,(0,tslib_es6.Cl)({open:!!anchor,anchorEl:anchor,onClose,PaperProps:{sx:(0,tslib_es6.Cl)({minWidth:"12rem"},sx)}},{children}))};var GenericFilterTab=__webpack_require__("./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx"),SelectAllMenuItem=function(_a){var t=_a.t,interimFilter=_a.interimFilter,shippingMethods=_a.shippingMethods,onClick=_a.onClick;return(0,emotion_react_jsx_runtime_browser_esm.FD)(MenuItem.A,(0,tslib_es6.Cl)({"data-value":"select-all",onClick},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Checkbox.A,{checked:interimFilter.length===shippingMethods.length,indeterminate:!!interimFilter.length&&interimFilter.length<shippingMethods.length,"data-testid":"shipment-methods-option-select-all"}),t("orders:shippingMethod:selectAll")]}),"shipping-method-option-".concat(1))};const Filters_ShippingMethodsFilterTab=function(_a){var shippingMethodsFilter=_a.shippingMethodsFilter,setShippingMethodsFilter=_a.setShippingMethodsFilter,shippingMethods=_a.shippingMethods,t=_a.t,_b=(0,tslib_es6.zs)((0,react.useState)(shippingMethodsFilter),2),interimFilter=_b[0],setInterimFilter=_b[1],_c=function useDesktopMenuMobileDrawer(){var _a=(0,tslib_es6.zs)((0,react.useState)(null),2),anchor=_a[0],setAnchor=_a[1];return{anchor,onOpenMenu:(0,react.useCallback)((function(e){setAnchor(e.currentTarget)}),[]),onCloseMenu:(0,react.useCallback)((function(){setAnchor(null)}),[])}}(),anchor=_c.anchor,onCloseMenu=_c.onCloseMenu,onOpenMenu=_c.onOpenMenu,isSmallScreen=(0,useMediaQuery.A)(shippoTheme.A.breakpoints.down("sm"));(0,react.useEffect)((function(){var concattedArray=(0,tslib_es6.fX)((0,tslib_es6.fX)([],(0,tslib_es6.zs)(shippingMethodsFilter),!1),(0,tslib_es6.zs)(interimFilter),!1),uniqueShippingMethodsSet=new Set(concattedArray);setInterimFilter(Array.from(uniqueShippingMethodsSet))}),[shippingMethodsFilter]);var hasScroll=(0,react.useMemo)((function(){var maxMenuItemsWithoutScrollForDesktop=Math.floor(8);return!!(isSmallScreen&&shippingMethods.length>2)||shippingMethods.length>maxMenuItemsWithoutScrollForDesktop}),[shippingMethods,isSmallScreen]),dividerStyle=hasScroll?{width:"calc(100% + ".concat(shippoTheme.A.spacing(2),")"),marginLeft:"-".concat(shippoTheme.A.spacing(1))}:{},onClick=(0,react.useCallback)((function(event){var value=event.currentTarget.dataset.value;if(value){if("select-all"===value)return interimFilter.length===shippingMethods.length?void setInterimFilter([]):void setInterimFilter(shippingMethods);interimFilter.includes(value)?setInterimFilter(interimFilter.filter((function(item){return item!==value}))):setInterimFilter((0,tslib_es6.fX)((0,tslib_es6.fX)([],(0,tslib_es6.zs)(interimFilter),!1),[value],!1))}}),[setInterimFilter,shippingMethods,interimFilter]),onClearAll=(0,react.useCallback)((function(){setShippingMethodsFilter&&setShippingMethodsFilter([]),setInterimFilter([])}),[setShippingMethodsFilter]),onClickApply=(0,react.useCallback)((function(){setShippingMethodsFilter&&setShippingMethodsFilter(interimFilter),(0,segment.u4)("Order List Filtered",{carrier:interimFilter}),onCloseMenu()}),[setShippingMethodsFilter,interimFilter,onCloseMenu]),tabLabel=(0,react.useMemo)((function(){return 0===shippingMethodsFilter.length?t("orders:shippingMethod:shippingMethod"):shippingMethodsFilter.length>1?"".concat(shippingMethodsFilter[0]," +").concat(shippingMethodsFilter.length-1):shippingMethodsFilter[0]}),[shippingMethodsFilter,t]);return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(GenericFilterTab.A,{"data-testid":"shipment-methods-filter-button",dirty:shippingMethodsFilter&&shippingMethodsFilter.length>0,disabled:0===shippingMethods.length,onClick:onOpenMenu,label:tabLabel,open:!!anchor}),(0,emotion_react_jsx_runtime_browser_esm.Y)(components_DesktopMenuMobileDrawer,(0,tslib_es6.Cl)({drawerTitle:t("orders:shippingMethod:shippingMethod"),anchor,onClose:onCloseMenu,sx:{width:shippoTheme.A.spacing(35)}},{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({sx:{p:1,overflow:"hidden"}},{children:[hasScroll&&(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectAllMenuItem,{t,interimFilter,shippingMethods,onClick}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{sx:(0,tslib_es6.Cl)({my:2},dividerStyle)})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",(0,tslib_es6.Cl)({style:{overflowY:"auto",maxHeight:"calc(65vh - ".concat(shippoTheme.A.spacing(isSmallScreen?29:17),")")}},{children:[!hasScroll&&(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectAllMenuItem,{t,interimFilter,shippingMethods,onClick}),shippingMethods.map((function(shippingMethodOption,index){return(0,emotion_react_jsx_runtime_browser_esm.FD)(MenuItem.A,(0,tslib_es6.Cl)({"data-value":shippingMethodOption,onClick},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Checkbox.A,{checked:interimFilter.includes(shippingMethodOption),"data-testid":"shipment-methods-option-".concat(shippingMethodOption)}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"100%",overflow:"hidden",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",whiteSpace:"normal"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Tooltip.A,(0,tslib_es6.Cl)({title:shippingMethodOption,placement:"right-end"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:shippingMethodOption})}))}))]}),"shipping-method-option-".concat(index+2))}))]})),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{sx:(0,tslib_es6.Cl)({my:2},dividerStyle)}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Grid.A,(0,tslib_es6.Cl)({container:!0,sx:{justifyContent:"space-between"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({onClick:onClearAll,size:"medium",color:"secondary",variant:"text","data-testid":"shipping-methods-filter-clear"},{children:t("orders:shippingMethod:clear")})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({"data-testid":"shipping-methods-filter-apply",onClick:onClickApply,size:"medium"},{children:t("orders:shippingMethod:apply")}))]}))]})]}))}))]})},ShippingMethodsFilterTab_stories={title:"Order Table / Filter / Shipping Methods",component:Filters_ShippingMethodsFilterTab,argTypes:{setShippingMethodsFilter:{action:"setShippingMethodsFilter"}}};var ShippingMethodsFilterTabWithTranslate=(0,translate.Tl)("orders")(Filters_ShippingMethodsFilterTab),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ShippingMethodsFilterTabWithTranslate,(0,tslib_es6.Cl)({},args))})},Regular=Template.bind({});Regular.args={shippingMethodsFilter:[],shippingMethods:["DHL","FedEx","UPS","USPS"],t:function(key){return key}};var LongOptions=Template.bind({});LongOptions.args={shippingMethodsFilter:[],shippingMethods:["This is a one liner","This is a option that fits in two lines","This is a very long option that does not fit in two lines and goes beyond that"],t:function(key){return key}};var LotOfOptions=Template.bind({});LotOfOptions.args={shippingMethodsFilter:[],shippingMethods:["DHL","FedEx","UPS","USPS","Canada Post","Purolator","Royal Mail","DHL Express","DHL eCommerce","DHL Express Worldwide","DHL Express 12:00","DHL Express 9:00","This is a one liner","This is a option that fits in two lines","This is a very long option that does not fit in two lines and goes beyond that"],t:function(key){return key}},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"args => <>\n    <ShippingMethodsFilterTabWithTranslate {...args} />\n  </>",...Regular.parameters?.docs?.source}}},LongOptions.parameters={...LongOptions.parameters,docs:{...LongOptions.parameters?.docs,source:{originalSource:"args => <>\n    <ShippingMethodsFilterTabWithTranslate {...args} />\n  </>",...LongOptions.parameters?.docs?.source}}},LotOfOptions.parameters={...LotOfOptions.parameters,docs:{...LotOfOptions.parameters?.docs,source:{originalSource:"args => <>\n    <ShippingMethodsFilterTabWithTranslate {...args} />\n  </>",...LotOfOptions.parameters?.docs?.source}}}}}]);