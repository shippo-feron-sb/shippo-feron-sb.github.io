"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3960],{"./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/Sort.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Tab/Tab.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var dirty=_a.dirty,open=_a.open,_b=_a.endIcon,endIcon=void 0===_b||_b,_c=_a.startIcon,startIcon=void 0!==_c&&_c,label=_a.label,tabProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(_a,["dirty","open","endIcon","startIcon","label"]),icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return startIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.Z,{}):endIcon&&open?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z,{}):endIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.Z,{}):void 0}),[endIcon,open,startIcon]),filteredTabProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var duped=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},tabProps);return delete duped.textColor,duped}),[tabProps]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},filteredTabProps,{disableFocusRipple:!0,disableTouchRipple:!0,icon,iconPosition:startIcon?"start":"end",label:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({color:"primary",variant:"bodyEmphasized",component:"h4",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{children:label})),sx:{minHeight:"40px",opacity:1,backgroundColor:dirty?_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.O.secondaryHover:"inherit",borderRadius:"0.5rem",textTransform:"none",py:0,px:1}}))}},"./app/pages/Orders/Blackbeard/types/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wy:()=>areEqual});__webpack_require__("./app/constants/distance.ts"),__webpack_require__("./app/constants/weight.ts"),__webpack_require__("./app/types/LineItem.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/ParcelTemplate.ts");var areEqual=function(a,b){return JSON.stringify(a)===JSON.stringify(b)}},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zW:()=>schema.ZP,j:()=>track});var esm_exports=__webpack_require__("./node_modules/@sentry/core/esm/exports.js"),schema=__webpack_require__("./app/utils/segment/schema.ts");__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./app/pages/Onboarding/onboarding.constants.ts"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts");var track=function(name,properties){window.analytics?window.analytics.track(name,properties):esm_exports.uT("track called before window.analytics available",{level:"warning"})}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Events;__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,fK:()=>EVENT_ORIGIN_ORDER_DETAILS,wQ:()=>EVENT_ORIGIN_LEGACY_ORDER}),function(Events){Events.registered="Signed Up",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated",Events.feature_flags_evaluated="Feature Flags Evaluated"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table";const __WEBPACK_DEFAULT_EXPORT__=Events},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iu:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Iu,cC:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.cC,eU:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.eU});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/blackbeard/components/Search/Filters/WeightFilterTab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,default:()=>WeightFilterTab_stories});var BulkDrawerLoadOptions,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),weight=__webpack_require__("./app/constants/weight.ts"),translate=__webpack_require__("./app/utils/translate.ts"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Popover=__webpack_require__("./node_modules/@goshippo/components/esm/Popover/Popover.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),MenuItem=__webpack_require__("./node_modules/@goshippo/components/esm/MenuItem/MenuItem.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),Grid=__webpack_require__("./node_modules/@goshippo/components/esm/Grid/Grid.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),Store=(__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/Store.ts")),weightUnitFilterTypeList=(__webpack_require__("./app/utils/businessRules.ts"),__webpack_require__("./app/pages/Orders/Blackbeard/types/utils.ts"),["g","kg","oz","lb",""]),defaultOrdersSearchParams={searchBarQuery:"",searchError:!1,orderStatus:"all",sortField:"-created_at",isInternational:"",dateFilter:[null,null],storeFilter:"all",itemFilter:[],weightFilter:{minWeight:"",maxWeight:"",weightUnit:""},currentPerPage:25,currentPageNumber:1,rowCount:0,hidden:!1,shippingMethodsFilter:[],saved:"",orderTagsFilter:[]};Object.keys(Store.ZX).reduce((function(accum,key){var value=Store.ZX[key];return accum[(0,Store.NC)(value)]=value,accum}),{undefined:"All"});!function(BulkDrawerLoadOptions){BulkDrawerLoadOptions.ADDRESS="customer",BulkDrawerLoadOptions.RATES="carrierService",BulkDrawerLoadOptions.ITEMS="items",BulkDrawerLoadOptions.PACKAGE="packageInformation",BulkDrawerLoadOptions.ORDER="order",BulkDrawerLoadOptions.DEFAULT="default"}(BulkDrawerLoadOptions||(BulkDrawerLoadOptions={}));var react=__webpack_require__("./node_modules/react/index.js"),segment=__webpack_require__("./app/utils/segment/index.ts"),GenericFilterTab=__webpack_require__("./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx");const Filters_WeightFilterTab=function(_a){var defaultMinWeight=_a.minWeight,defaultMaxWeight=_a.maxWeight,defaultWeightUnit=_a.weightUnit,defaultUserWeightUnit=_a.defaultUserWeightUnit,setWeightFilter=_a.setWeightFilter,t=_a.t,_b=(0,tslib_es6.CR)((0,react.useState)(defaultMinWeight),2),minWeight=_b[0],setMinWeight=_b[1],_c=(0,tslib_es6.CR)((0,react.useState)(defaultMaxWeight),2),maxWeight=_c[0],setMaxWeight=_c[1],_d=(0,tslib_es6.CR)((0,react.useState)(defaultWeightUnit),2),weightUnit=_d[0],setWeightUnit=_d[1],_e=(0,tslib_es6.CR)((0,react.useState)(null),2),anchorEl=_e[0],setAnchorEl=_e[1],_f=(0,tslib_es6.CR)((0,react.useState)(""),2),minError=_f[0],setMinError=_f[1],_g=(0,tslib_es6.CR)((0,react.useState)(""),2),maxError=_g[0],setMaxError=_g[1];(0,react.useEffect)((function(){setMinWeight(defaultMinWeight)}),[defaultMinWeight]),(0,react.useEffect)((function(){setMaxWeight(defaultMaxWeight)}),[defaultMaxWeight]),(0,react.useEffect)((function(){setWeightUnit(defaultWeightUnit||defaultUserWeightUnit)}),[defaultUserWeightUnit,defaultWeightUnit]);var handleClick=(0,react.useCallback)((function(event){setAnchorEl(event.currentTarget)}),[]),handleClose=(0,react.useCallback)((function(){setAnchorEl(null)}),[]),open=Boolean(anchorEl),isNumeric=function(value){var parsedValue=parseFloat(value);return!(isNaN(parsedValue)||parsedValue<0||!value.match(/^-{0,1}\d*\.?\d+$/))},onMinWeightChange=(0,react.useCallback)((function(event){var minWeightValue=event.target.value;""===minWeightValue&&setMinError(""),minWeightValue&&(isNumeric(minWeightValue)?maxWeight&&parseFloat(minWeightValue)>parseFloat(maxWeight)?setMinError(t("orders:weight:minValidation")):(setMinError(""),maxError&&isNumeric(maxWeight)&&setMaxError("")):setMinError(t("orders:weight:numeric"))),setMinWeight(minWeightValue)}),[maxWeight,t,maxError]),onMaxWeightChange=(0,react.useCallback)((function(event){var maxWeightValue=event.target.value;""===maxWeightValue&&setMaxError(""),maxWeightValue&&(isNumeric(maxWeightValue)?minWeight&&parseFloat(maxWeightValue)<parseFloat(minWeight)?setMaxError(t("orders:weight:maxValidation")):(setMaxError(""),minError&&isNumeric(minWeight)&&setMinError("")):setMaxError(t("orders:weight:numeric"))),setMaxWeight(maxWeightValue)}),[minWeight,t,minError]),onWeightUnitChange=(0,react.useCallback)((function(event){var weightUnit=event.target.value;setWeightUnit(weightUnit)}),[]),applyWeightFilter=(0,react.useCallback)((function(){setWeightFilter({minWeight,maxWeight,weightUnit}),(0,segment.j)("Order List Filtered",{weight:[minWeight,maxWeight,weightUnit]}),handleClose()}),[setWeightFilter,minWeight,maxWeight,weightUnit,handleClose]),onClearWeightFilter=(0,react.useCallback)((function(){setMinWeight(defaultOrdersSearchParams.weightFilter.minWeight),setMaxWeight(defaultOrdersSearchParams.weightFilter.maxWeight),setWeightFilter(defaultOrdersSearchParams.weightFilter),setMinError(""),setMaxError(""),handleClose()}),[setMinWeight,setMaxWeight,setWeightFilter,handleClose,setMinError,setMaxError]),applyDisabled=!!minError||!!maxError||!minWeight&&!maxWeight,weightTabLabel=function(minWeight,maxWeight,weightUnit){var weightTabLabelString=t("orders:weight:weight");return minWeight&&maxWeight?"".concat(weightTabLabelString,": ").concat(minWeight,"-").concat(maxWeight," ").concat(weightUnit):!minWeight&&maxWeight?"".concat(weightTabLabelString,": ").concat(t("orders:weight:max")," ").concat(maxWeight," ").concat(weightUnit):minWeight&&!maxWeight?"".concat(weightTabLabelString,": ").concat(t("orders:weight:min")," ").concat(minWeight," ").concat(weightUnit):weightTabLabelString}(defaultMinWeight,defaultMaxWeight,defaultWeightUnit),isSmallScreen=(0,useMediaQuery.Z)(shippoTheme.Z.breakpoints.down("sm"));return(0,emotion_react_jsx_runtime_browser_esm.BX)(emotion_react_jsx_runtime_browser_esm.HY,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(GenericFilterTab.Z,{"data-testid":"weight-filter-button",dirty:!1,onClick:handleClick,label:weightTabLabel,open}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Popover.Z,(0,tslib_es6.pi)({open,anchorEl,onClose:handleClose,anchorOrigin:{vertical:"bottom",horizontal:"left"},"data-testid":"weight-filter-popover"},{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,(0,tslib_es6.pi)({sx:{p:2}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,(0,tslib_es6.pi)({component:"h3",variant:"h3",sx:{mb:"1rem"}},{children:t("orders:filters:weight:selectWeight")})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({alignItems:"flex-start",direction:isSmallScreen?"column":"row",spacing:isSmallScreen?2:1},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,{defaultValue:minWeight,name:"min-weight",label:t("orders:weight:min"),InputLabelProps:{shrink:!0},onChange:onMinWeightChange,helperText:minError,error:!!minError,required:!!minError,sx:isSmallScreen?{}:{width:"5rem"}}),isSmallScreen?"":(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,(0,tslib_es6.pi)({style:{fontWeight:"bold"}},{children:"-"})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,{defaultValue:maxWeight,name:"max-weight",label:t("orders:weight:max"),InputLabelProps:{shrink:!0},onChange:onMaxWeightChange,helperText:maxError,error:!!maxError,required:!!maxError,sx:isSmallScreen?{}:{width:"5rem"}}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:!1,select:!0,label:t("orders:weight:units"),value:weightUnit,onChange:onWeightUnitChange,"data-testid":"weight-units-select"},{children:weightUnitFilterTypeList.map((function(weightUnit,i){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({value:weightUnit},{children:weightUnit}),i)}))}))]})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Divider.Z,{sx:{my:2}}),(0,emotion_react_jsx_runtime_browser_esm.BX)(Grid.Z,(0,tslib_es6.pi)({container:!0,spacing:3.5},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.Z,(0,tslib_es6.pi)({item:!0,xs:6},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({onClick:onClearWeightFilter,size:"small",color:"secondary",variant:"text",fullWidth:!0},{children:t("orders:filters:weight:clearAll")}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.Z,(0,tslib_es6.pi)({item:!0,xs:6},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({disabled:applyDisabled,"data-testid":"weight-filter-apply",onClick:applyWeightFilter,size:"small",fullWidth:!0},{children:t("orders:filters:weight:apply")}))}))]}))]}))}))]})},WeightFilterTab_stories={title:"Order V2 / Weight Filter Tab",component:Filters_WeightFilterTab,parameters:{layout:"centered"},argTypes:{setWeightFilter:{action:"set-weight"}}};var WeightFilterTabWithTranslate=(0,translate.Iu)("orders")(Filters_WeightFilterTab),Regular=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(WeightFilterTabWithTranslate,(0,tslib_es6.pi)({},args))}.bind({});Regular.args={minWeight:"5",maxWeight:"10",weightUnit:"lb",defaultUserWeightUnit:weight.Cp.LB},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"(args: WeightFilterProps) => <WeightFilterTabWithTranslate {...args} />",...Regular.parameters?.docs?.source}}}}}]);