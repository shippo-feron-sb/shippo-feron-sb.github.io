(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[6357],{"./app/assets/icons/icon_close.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"2d36b17d84a63dd1d7c4ec19ee7c0015.svg"},"./app/assets/icons/icon_close_gray.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"90f98ff9672034102f7e4deaf677c9fd.svg"},"./app/actions/prod-analytics.actions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>sendTrackEvent});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/actions/constants.ts");function sendTrackEvent(name,properties){return{name,properties,type:_constants__WEBPACK_IMPORTED_MODULE_0__.u.PROD_ANALYTICS_TRACK}}},"./app/components/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Modal});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");var templateObject_1;const Modal_Body=(0,emotion_styled_browser_esm.Z)("div")(templateObject_1||(templateObject_1=(0,tslib_es6.cy)(["\n  padding: 30px;\n  flex-grow: 1;\n  ","\n"],["\n  padding: 30px;\n  flex-grow: 1;\n  ","\n"])),(function(props){return props.flex?"display: flex;":""}));var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),is_prop_valid_browser_esm=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"),prod_analytics_actions=__webpack_require__("./app/actions/prod-analytics.actions.ts"),icon_close=__webpack_require__("./app/assets/icons/icon_close.svg"),icon_close_gray=__webpack_require__("./app/assets/icons/icon_close_gray.svg"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),constants=__webpack_require__("./app/styles/constants.ts"),Container=(0,emotion_styled_browser_esm.Z)("div")(OuterContainer_templateObject_1||(OuterContainer_templateObject_1=(0,tslib_es6.cy)(["\n  position: fixed;\n  z-index: ",";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",";\n  text-align: center;\n  overflow: auto;\n"],["\n  position: fixed;\n  z-index: ",";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",";\n  text-align: center;\n  overflow: auto;\n"])),(function(_a){return _a.zIndex||constants._p.modal}),(function(_a){return _a.backgroundColor||"rgba(128, 128, 128, 0.8)"})),modalRoot=document.getElementById("modalRoot"),el=Symbol(),ZIndexContext=react.createContext(void 0);var OuterContainer_templateObject_1;const Modal_OuterContainer=function(_super){function OuterContainer(props){var _this=_super.call(this,props)||this;return _this[el]=document.createElement("div"),_this}return(0,tslib_es6.ZT)(OuterContainer,_super),OuterContainer.prototype.componentDidMount=function(){document.documentElement.style.overflow="hidden",modalRoot&&modalRoot.appendChild(this[el])},OuterContainer.prototype.componentWillUnmount=function(){document.documentElement.style.overflow="",modalRoot&&modalRoot.removeChild(this[el])},OuterContainer.prototype.render=function(){return react_dom.createPortal((0,emotion_react_jsx_runtime_browser_esm.tZ)(Container,(0,tslib_es6.pi)({zIndex:this.props.zIndex,backgroundColor:this.props.backgroundColor},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ZIndexContext.Provider,(0,tslib_es6.pi)({value:constants._p.modal},{children:this.props.children}))})),this[el])},OuterContainer}(react.PureComponent);var value,responsive=__webpack_require__("./app/constants/responsive.ts"),useStackablePortal=__webpack_require__("./app/hooks/useStackablePortal.ts"),build=__webpack_require__("./node_modules/react-click-outside/build/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),innerContainerSizesMapping={xl:"1000px",lg:"800px",mdl:"640px",md:"600px",sm:"500px",xs:"440px",auto:"auto"},InnerContainer=(0,emotion_styled_browser_esm.Z)(build.Z,{shouldForwardProp:is_prop_valid_browser_esm.Z})(Container_templateObject_1||(Container_templateObject_1=(0,tslib_es6.cy)(["\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);\n  text-align: left;\n  overflow: auto;\n\n  ",";\n\n  ","\n\n  @media screen and (min-width: ","px) {\n    border-radius: ",";\n    min-height: ",";\n    margin: ",";\n    ","\n  }\n\n  @media screen and (min-width: ","px) {\n    overflow: visible;\n    border-radius: ",";\n    min-height: ",";\n    margin: ",";\n    ","\n  }\n"],["\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);\n  text-align: left;\n  overflow: auto;\n\n  ",";\n\n  ","\n\n  @media screen and (min-width: ","px) {\n    border-radius: ",";\n    min-height: ",";\n    margin: ",";\n    ","\n  }\n\n  @media screen and (min-width: ","px) {\n    overflow: visible;\n    border-radius: ",";\n    min-height: ",";\n    margin: ",";\n    ","\n  }\n"])),(function(props){return props.verticallyCentered?"top: 50%; transform: translateY(-50%)":""}),(function(props){return props.isDialog?"\n    width: 94%;\n    margin: 50% 3% 0 3%;\n    border-radius: 4px;\n    ":"\n    width: 100vw;\n    height: 100vh;\n  "}),responsive.C.ExtraSmallMobile,(function(props){return"full"===props.size?"0px":"4px"}),(function(props){return props.minHeight}),(function(props){return props.verticallyCentered?"0 auto":"1rem"}),(function(props){switch(props.size){case"full":return"\n            height: 100%;\n            width: 100%;\n            overflow-y: scroll;\n            margin: 0;\n          ";case"auto":return"\n              height: auto;\n              width: calc(100% - 2rem);\n            ";default:return"\n            height: calc(100% - 2rem); \n            width: calc(100% - 2rem); \n          "}}),responsive.C.Mobile,(function(props){return"full"===props.size?"0px":"4px"}),(function(props){return props.minHeight}),(function(props){return props.verticallyCentered?"0 auto":"100px auto 30px"}),(function(props){return"full"===props.size?"\n        height: 100%;\n        width: 100%;\n        overflow-y: scroll;\n        margin: 0;\n        ":"\n        height: ".concat(props.scrollContent?"60vh":"auto",";\n        width: ").concat("auto"===props.size?innerContainerSizesMapping.md:innerContainerSizesMapping[props.size],";")})),CloseIcon=(0,emotion_styled_browser_esm.Z)("img")(templateObject_2||(templateObject_2=(0,tslib_es6.cy)(["\n  position: absolute;\n  top: -35px;\n  right: 0;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  z-index: 1;\n"],["\n  position: absolute;\n  top: -35px;\n  right: 0;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  z-index: 1;\n"]))),FullSizeContainerCloseIcon=(0,emotion_styled_browser_esm.Z)(CloseIcon)(templateObject_3||(templateObject_3=(0,tslib_es6.cy)(["\n  top: 27px;\n  right: 30px;\n  @media screen and (min-width: ","px) {\n    top: 30px;\n  }\n  ","\n"],["\n  top: 27px;\n  right: 30px;\n  @media screen and (min-width: ","px) {\n    top: 30px;\n  }\n  ","\n"])),responsive.C.SmallMobile,(function(props){return props.hasNoPaddingHeader?"top: 22px":void 0})),ResponsiveCloseIconContainer=(0,emotion_styled_browser_esm.Z)("div")(templateObject_4||(templateObject_4=(0,tslib_es6.cy)(["\n  display: ",";\n  @media screen and (min-width: ","px) {\n    display: none;\n  }\n"],["\n  display: ",";\n  @media screen and (min-width: ","px) {\n    display: none;\n  }\n"])),(function(props){return props.isDialog?"none":"inherit"}),responsive.C.Mobile);InnerContainer.defaultProps={size:"md",minHeight:(value=12.5,"".concat(value,"rem"))};var Modal=function(props){var dispatch=(0,es.I0)(),closeIcon=props.showCloseIcon?(0,emotion_react_jsx_runtime_browser_esm.tZ)(CloseIcon,{onClick:props.onClose,"data-analytics":props.dataAnalyticsContext?"".concat(props.dataAnalyticsContext,"-click-close"):void 0,"data-e2e":props.closeIconE2ETag,"data-pendo":props.closeIconPendoTag,src:icon_close}):null,portalKey=(0,useStackablePortal.Z)(!!props.isOpen),renderFullSizeContainerCloseIcon=function(){return props.alwaysHideCloseIcon?null:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FullSizeContainerCloseIcon,{hasNoPaddingHeader:props.hasNoPaddingHeader,"data-analytics":props.dataAnalyticsContext?"".concat(props.dataAnalyticsContext,"-click-close"):void 0,onClick:props.onClose,"data-pendo":props.closeIconPendoTag,src:icon_close_gray})},shouldShowCloseIcon="full"===props.size&&props.showCloseIcon;return props.isOpen?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Modal_OuterContainer,(0,tslib_es6.pi)({},props.zIndex&&{zIndex:props.zIndex},props.backgroundColor&&{backgroundColor:props.backgroundColor},{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(InnerContainer,(0,tslib_es6.pi)({onClickOutside:function(evt){(0,useStackablePortal.O)(portalKey)&&(props.dataAnalyticsContext&&dispatch((0,prod_analytics_actions.h)("".concat(props.dataAnalyticsContext,"-click-outside"))),props.closeOnClickOutside&&props.onClose&&props.onClose(evt),props.closeOnClickOutside&&props.onClickedOut&&props.onClickedOut())},size:props.size,verticallyCentered:props.verticallyCentered,scrollContent:props.scrollContent,isDialog:props.isDialog,className:props.className,minHeight:props.minHeight},{children:[shouldShowCloseIcon?renderFullSizeContainerCloseIcon():(0,emotion_react_jsx_runtime_browser_esm.tZ)(ResponsiveCloseIconContainer,(0,tslib_es6.pi)({isDialog:props.isDialog},{children:renderFullSizeContainerCloseIcon()})),closeIcon,props.children]}))})):null};Modal.defaultProps={isOpen:!1,closeOnClickOutside:!0};var MobileModal=(0,emotion_styled_browser_esm.Z)(Modal)(templateObject_5||(templateObject_5=(0,tslib_es6.cy)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n\n  @media screen and (min-width: ","px) {\n    position: relative;\n    top: auto;\n    bottom: auto;\n  }\n"],["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n\n  @media screen and (min-width: ","px) {\n    position: relative;\n    top: auto;\n    bottom: auto;\n  }\n"])),responsive.C.Mobile);var Container_templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5;const Modal_Container=Modal;var Footer=(0,emotion_styled_browser_esm.Z)("footer")(Footer_templateObject_1||(Footer_templateObject_1=(0,tslib_es6.cy)(["\n  padding: ",";\n  border-top: ",";\n  text-align: right;\n\n  & button {\n    :not(:first-of-type) {\n      margin-left: 10px;\n    }\n  }\n  background: ",";\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"],["\n  padding: ",";\n  border-top: ",";\n  text-align: right;\n\n  & button {\n    :not(:first-of-type) {\n      margin-left: 10px;\n    }\n  }\n  background: ",";\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"])),(function(props){return props.noPadding?props.hideBorder?"0":"15px 0 0":"15px 30px"}),(function(props){return props.hideBorder?"none":"1px solid ".concat(constants.O9.gray50)}),constants.O9.white),MobileFooter=(0,emotion_styled_browser_esm.Z)(Footer)(Footer_templateObject_2||(Footer_templateObject_2=(0,tslib_es6.cy)(["\n  font-weight: ",";\n  display: block;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  @media screen and (min-width: ","px) {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 0;\n    flex-shrink: 1;\n    flex-basis: auto;\n    bottom: auto;\n    left: auto;\n    right: auto;\n  }\n"],["\n  font-weight: ",";\n  display: block;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  @media screen and (min-width: ","px) {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 0;\n    flex-shrink: 1;\n    flex-basis: auto;\n    bottom: auto;\n    left: auto;\n    right: auto;\n  }\n"])),constants.Ue.normal,responsive.C.Mobile);var Footer_templateObject_1,Footer_templateObject_2;const Modal_Footer=Footer;var Header_templateObject_1;var Title_templateObject_1;const components_Modal={Container:Modal_Container,Header:(0,emotion_styled_browser_esm.Z)("header")(Header_templateObject_1||(Header_templateObject_1=(0,tslib_es6.cy)(["\n  border-bottom: ",";\n  /* Text styling is here due to some usages not including Modal.Title */\n  font-weight: ",";\n  color: ",";\n  @media screen and (min-width: ","px) {\n    font-size: 20px;\n  }\n  line-height: 1;\n  ","\n  ","\n"],["\n  border-bottom: ",";\n  /* Text styling is here due to some usages not including Modal.Title */\n  font-weight: ",";\n  color: ",";\n  @media screen and (min-width: ","px) {\n    font-size: 20px;\n  }\n  line-height: 1;\n  ","\n  ","\n"])),(function(props){return props.hideBorder?"":"1px solid ".concat(constants.O9.gray50)}),constants.Ue.normal,constants.O9.fontColor,responsive.C.ExtraSmallMobile+1,(function(props){return props.reducedPadding&&!props.hidePadding?"padding: 1rem 1.5rem;":"padding: 1.563rem 1.874rem;"}),(function(props){return props.hidePadding&&"padding: 0 0 0 1rem;"})),Footer:Modal_Footer,Body:Modal_Body,Title:(0,emotion_styled_browser_esm.Z)("h4")(Title_templateObject_1||(Title_templateObject_1=(0,tslib_es6.cy)(["\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  line-height: 1.5rem;\n  @media screen and (min-width: ","px) {\n    font-size: ",";\n  }\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n"],["\n  font-weight: ",";\n  color: ",";\n  font-size: ",";\n  line-height: 1.5rem;\n  @media screen and (min-width: ","px) {\n    font-size: ",";\n  }\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n"])),constants.Ue.medium,constants.O9.fontColor,(function(props){return props.customFontSize?props.customFontSize:"0.875rem"}),responsive.C.ExtraSmallMobile,(function(props){return props.customFontSize?props.customFontSize:"1.25rem"})),MobileContainer:MobileModal,MobileFooter,ZIndexContext}},"./app/hooks/useStackablePortal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>isTopOfStack,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),isTopOfStack=function(key){return window.stackables[window.stackables.length-1]===key};const __WEBPACK_DEFAULT_EXPORT__=function(isOpen){var key=react__WEBPACK_IMPORTED_MODULE_0__.useRef(Symbol());return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){return isOpen&&window.stackables.push(key.current),function(){if(isOpen){var toRemove=window.stackables.indexOf(key.current);window.stackables.splice(toRemove,1)}}}),[isOpen]),key.current}},"./app/pages/BlackbeardOrdersOptInOptOut/useBlackbeardGlobalNavVisibility.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>BlackbeardOrdersOptInOptOut_useBlackbeardGlobalNavVisibility});var react=__webpack_require__("./node_modules/react/index.js"),DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={PACKAGE_QUICK_SELECT:{name:"package_quick_select",variationType:VariationTypes.ROLLOUT},SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},SHOW_DUPLICATE_ORDERS:{name:"show_duplicate_orders",variationType:VariationTypes.A_B_TESTING},NEW_RETURNS_WORKFLOW:{name:"new_returns_workflow",variationType:VariationTypes.A_B_TESTING},SHOW_DHL_TERMS:{name:"show_dhl_terms",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT}},react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js"),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.uT("[Optimizely] ".concat(null==error?void 0:error.message))}};(0,react_sdk.Fs)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");function useFeatureFlag(featureFlag){var _a=(0,tslib_es6.CR)((0,react_sdk.rm)(featureFlag.name),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}var moment=__webpack_require__("./node_modules/moment/moment.js");var BLACKBEARD_ORDERS_STORAGE_KEY="ordersRevamp",OPT_IN_SNOOZED_STORAGE_KEY="ordersRevampOptInDismissed",OPT_OUT_SNOOZED_STORAGE_KEY="ordersRevampOptOutDismissed",ls=function getLocalStorage(){return localStorage}();function removeOptInOptOutSnooze(optType){switch(optType){case"optIn":return ls.removeItem(OPT_IN_SNOOZED_STORAGE_KEY),!0;case"optOut":return ls.removeItem(OPT_OUT_SNOOZED_STORAGE_KEY),!0}}function getOptInOutDismissed(type){var storedDateValue=ls.getItem("optIn"===type?OPT_IN_SNOOZED_STORAGE_KEY:OPT_OUT_SNOOZED_STORAGE_KEY);if(storedDateValue)try{return new Date(storedDateValue)}catch(_a){return}}function helpers_snoozedOptInPrompt(optInOutType,startingDate){return function snoozedRecently(startingDate,dismissedDate){if(!dismissedDate)return!1;var sevenDaysAgo=moment(startingDate).subtract(7,"days");return 7-moment(dismissedDate).diff(sevenDaysAgo,"days")<7}(startingDate,getOptInOutDismissed(optInOutType))}function useBlackbeardOrdersVisibility(now){void 0===now&&(now=new Date);var ordersRedesign=useFeatureFlag(FeatureFlags.ORDERS_REDESIGN),ordersRedesignWithOptInOptOut=useFeatureFlag(FeatureFlags.ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT),optInOutValue=function getBlackbeardOrdersStorageValue(){return ls.getItem(BLACKBEARD_ORDERS_STORAGE_KEY)}(),showOrdersRedesign=function shouldShowBlackbeardOrders(ordersRedesign,initialOptInOptOut,optInOutValue){if(function optInOutEnabled(value){return!!value&&"disabled"!==value}(initialOptInOptOut))switch(optInOutValue){case"optIn":return!0;case"optOut":return!1;default:return"initialOptIn"===initialOptInOptOut}return!!ordersRedesign}(!!(null==ordersRedesign?void 0:ordersRedesign.enabled),(null==ordersRedesignWithOptInOptOut?void 0:ordersRedesignWithOptInOptOut.variation)?ordersRedesignWithOptInOptOut.variation:"initialOptIn",optInOutValue),onChangeOptInOut=(0,react.useCallback)((function(newValue){!function setBlackbeardOrdersStorageValue(newValue){ls.setItem(BLACKBEARD_ORDERS_STORAGE_KEY,newValue)}(newValue),function clearOptInOutSnooze(){removeOptInOptOutSnooze("optIn"),removeOptInOptOutSnooze("optOut")}()}),[]),onSnoozeOptInOut=(0,react.useCallback)((function(optInOutType){!function storeSnoozeValue(optInOutType){switch(optInOutType){case"optIn":ls.setItem(OPT_IN_SNOOZED_STORAGE_KEY,(new Date).toISOString());break;case"optOut":ls.setItem(OPT_OUT_SNOOZED_STORAGE_KEY,(new Date).toISOString())}}(optInOutType)}),[]),dismissedOptOutPrompt=!!getOptInOutDismissed("optOut"),snoozedOptInPrompt=helpers_snoozedOptInPrompt("optIn",now);return{onChangeOptInOut,showOrdersRedesign,initialOptInOptOutValue:"disabled"===(null==ordersRedesignWithOptInOptOut?void 0:ordersRedesignWithOptInOptOut.variation)||null==ordersRedesignWithOptInOptOut?void 0:ordersRedesignWithOptInOptOut.variation,optInOutValue,onSnoozeOptInOut,dismissedOptOutPrompt,snoozedOptInPrompt}}const BlackbeardOrdersOptInOptOut_useBlackbeardGlobalNavVisibility=function useBlackbeardGlobalNavVisibility(){return useBlackbeardOrdersVisibility().showOrdersRedesign}},"./app/styles/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AK:()=>classNames,I8:()=>fontFamily,O9:()=>colors,RL:()=>ordersTableCellMinHeight,Ue:()=>fontWeight,VG:()=>formSizes,X9:()=>reactSelectDropdownStyles,_p:()=>zIndexValues,jt:()=>_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),fontFamily="Roboto, pragmatica-web, 'Helvetica Neue', Helvetica, Arial, sans-serif",v3OldColors_gray10="#F7FBFC",v3OldColors_gray20="#E9F1F5",v3OldColors_gray30="#CFDEE6",v3OldColors_gray40="#B8CED9",v3OldColors_gray50="#7B99A8",v3OldColors_gray60="#5C7B8A",v3OldColors_gray70="#4C6774",v3OldColors_gray80="#425B66",v3OldColors_gray90="#2E434D",v3OldColors_gray100="#1F2D34",designSystemColors={forest50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.success,forest100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.success,forest200:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.success,forest600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,forest700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,forest800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.primaryButtonHover,gray10:v3OldColors_gray10,gray25:v3OldColors_gray20,gray50:v3OldColors_gray20,gray100:v3OldColors_gray10,gray200:v3OldColors_gray20,gray300:v3OldColors_gray30,gray400:v3OldColors_gray40,gray500:v3OldColors_gray50,gray600:v3OldColors_gray60,gray700:v3OldColors_gray70,gray800:v3OldColors_gray80,gray900:v3OldColors_gray90,gray1000:v3OldColors_gray100,sea25:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover,sea50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.backgroundDeemphasized,sea100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea200:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea300:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea400:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea500:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,sea900:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,ruby50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.error,ruby400:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,ruby600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,ruby700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,macaroni50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.warning,macaroni100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.warning,macaroni300:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.warning,macaroni600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.warning,macaroni700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.warning,macaroni800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.warning,macaroni900:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.warning,white:"#FFFFFF",black:"#1B1D1D"},colors=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},designSystemColors),{borders:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,primary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,primaryFocus:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.primaryButtonHover,primaryAlternative:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.primaryButtonHover,secondary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary,tertiary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover,dangerRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,getStartedFooterGrey:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover,getStartedFooterBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.backgroundDeemphasized,containerBorderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,geyser:"#cfdce2",rollingStone:"#718087",coolGray:"#678096",fontColor:"#333333",placeholderColor:"#AEAEAE",disabledIcon:"#e3e4e5",greyBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,viking:"#50C1DB",emperor:"#555555",nightRider:"#333333",loblolly:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,aqua:"#31A2C4",almostWhite:"#F1F5F7",borderColor:"#ddd",errorRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,errorShadowRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.error,pagination:{hoverBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.backgroundDeemphasized,borderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,activeBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success},form:{greyBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,errorBar:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,errorBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error,errorBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.error,warningBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.warning,warningBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.warning,successBar:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.success,successBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.success,successBackground:designSystemColors.gray25,greyDisabled:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover,greyDisabledBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.backgroundDeemphasized,greyDisabledButton:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.backgroundDeemphasized,placeholderFontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,fontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.text.primary.black,labelFontColor:designSystemColors.black,disabledLabelFontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,shadow:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders,activeBorderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.borders},tags:{removeIconColor:"#979797",hoverRemoveIconColor:"#555555",highlighted:{borderColor:"#B9C7CE",backgroundColor:"#F4F9FB"}},dialog:{errorBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.error,successBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.accent.background.success,infoBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover},banner:{info:"#F2FBFF"},notification:{boxShadow:"rgba(0, 0, 0, 0.12)"},branding:{defaultBrandPrimaryColor:"#000000",defaultBrandSecondaryColor:"#F1F1F1"}}),formSizes=(colors.gray600,colors.rollingStone,colors.gray10,colors.primary,colors.gray10,colors.rollingStone,colors.rollingStone,colors.primary,colors.primary,colors.gray600,colors.gray600,colors.loblolly,colors.loblolly,colors.white,colors.white,colors.white,colors.gray10,colors.rollingStone,colors.white,colors.white,colors.gray600,colors.white,colors.loblolly,colors.white,{inputHeight:"2.5rem",inputWidth:"15rem"}),ordersTableCellMinHeight="4.5rem",zIndexValues={base:1,leftColumn:2,orderBatchMenu:10,dropdown:15,anchoredDiv:98,overlay:99,multiSelect:100,modal:101,persistantBanner:999,banner:1e3,tooltip:1070},fontWeight={thin:100,extraLight:200,light:300,normal:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900},classNames={fulfilledOrderText:"fulfilled-order-text"},reactSelectDropdownStyles={control:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{borderRadius:"4px",border:state.isFocused?"1px solid ".concat(colors.form.activeBorderColor):"1px solid ".concat(colors.form.greyBorder),color:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.text.primary.black),borderColor:(state.isFocused?colors.form.activeBorderColor:colors.form.greyBorder)+" !important",minHeight:"2.5rem",height:"2.5rem",boxShadow:"none",borderBottomLeftRadius:state.menuIsOpen&&"top"!==state.selectProps.menuPlacement?0:"4px",borderBottomRightRadius:state.menuIsOpen&&"top"!==state.selectProps.menuPlacement?0:"4px",borderTopLeftRadius:state.menuIsOpen&&"bottom"!==state.selectProps.menuPlacement?0:"4px",borderTopRightRadius:state.menuIsOpen&&"bottom"!==state.selectProps.menuPlacement?0:"4px"})},indicatorSeparator:function(){return{display:"none"}},container:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{padding:0,margin:0})},valueContainer:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{padding:"0 0.75rem",fontWeight:"normal",height:"2.5rem",overflow:"initial"})},option:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{position:"relative",cursor:"pointer",padding:"0.5rem 1rem",color:"".concat(colors.form.fontColor),backgroundColor:(isSelected=state.isSelected,isFocused=state.isFocused,isSelected?colors.white:isFocused?colors.gray25:"inherit"),"&:hover":{backgroundColor:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover)},fontSize:"0.875rem",fontWeight:state.isSelected?"".concat(fontWeight.bold):"".concat(fontWeight.normal)});var isSelected,isFocused},clearIndicator:function(){return{display:"none"}},dropdownIndicator:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",padding:".5rem",color:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary),transform:state.selectProps.menuIsOpen&&"rotate(180deg)"})},input:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{margin:"0rem",backgroundColor:state.pasteEdited?"".concat(colors.forest50):"",position:"absolute",top:"50%",transform:"translateY(-50%)"})},placeholder:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{color:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary)})},indicatorsContainer:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{height:"2.5rem"})},menu:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({},provided),{marginTop:0,marginBottom:"top"!==state.selectProps.menuPlacement?0:"",borderTopLeftRadius:"top"!==state.selectProps.menuPlacement?0:"",borderTopRightRadius:"top"!==state.selectProps.menuPlacement?0:"",borderBottomLeftRadius:"bottom"!==state.selectProps.menuPlacement?0:"",borderBottomRightRadius:"bottom"!==state.selectProps.menuPlacement?0:"",boxShadow:"top"!==state.selectProps.menuPlacement?"0px 6px 20px rgba(0, 0, 0, 0.15)":"none",border:"1px solid ".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.O.secondary),boxSizing:"border-box",borderTop:"top"!==state.selectProps.menuPlacement?"none":"",borderBottom:"bottom"!==state.selectProps.menuPlacement?"none":""})}}},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var FeatureFlagNames,FeatureTestVariants;__webpack_require__.d(__webpack_exports__,{gV:()=>featureflags_useFeatureFlags,iG:()=>useLDFeatureFlagOverrides,eW:()=>esm.KK}),function(FeatureFlagNames){FeatureFlagNames.TEST1="test1",FeatureFlagNames.TEST2="test2",FeatureFlagNames.TESTVARIANTS="testvariants",FeatureFlagNames.SATORI_MULTIVARIANT_TEST="satoriMultivariantTest",FeatureFlagNames.SATORI_FEATURE_FLAG_TEST="satoriFeatureFlagTest",FeatureFlagNames.ORDERS_ZERO_STATE_VIDEO="orderZeroStateVideoExperiment",FeatureFlagNames.NEW_LOGIN_FLOW="newLoginFlow",FeatureFlagNames.SHOW_SAVINGS="showSavings",FeatureFlagNames.ADD_NOTE_GLOBAL_SETTING="addNoteGlobalSetting",FeatureFlagNames.REACT_MANIFESTS="reactManifests",FeatureFlagNames.REACT_MANIFEST_USPS_ONLY="reactManifestUspsOnly",FeatureFlagNames.INSURANCE_BANNER="insuranceBanner",FeatureFlagNames.PACKAGE_INFO_CARD_WINTER_2022="packageInfoCardWinter2022",FeatureFlagNames.PROMPT_FOR_AUTOMATIC_INSURANCE_AFTER_LABEL_PURCHASE="promptForAutomaticInsuranceAfterLabelPurchase",FeatureFlagNames.SHOW_AI_PARCEL_BOT="showAiParcelBot",FeatureFlagNames.SIDE_PANEL_AUTO_SAVE="sidePanelAutoSave",FeatureFlagNames.PRO_PLAN_TESTING="proPlanTesting",FeatureFlagNames.SHOW_ADDRESS_BOOK="showAddressBook"}(FeatureFlagNames||(FeatureFlagNames={})),function(FeatureTestVariants){FeatureTestVariants.ENABLED="Enabled"}(FeatureTestVariants||(FeatureTestVariants={}));var esm=__webpack_require__("./node_modules/launchdarkly-react-client-sdk/lib/esm/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),featureflags_useFeatureFlags=(__webpack_require__("./node_modules/react/index.js"),(0,emotion_react_jsx_runtime_browser_esm.tZ)((function(_a){var children=_a.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(emotion_react_jsx_runtime_browser_esm.HY,{children})}),{children:"test"}).type,(0,emotion_react_jsx_runtime_browser_esm.tZ)((function(_a){var children=_a.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(emotion_react_jsx_runtime_browser_esm.HY,{children})}),{children:"test"}).type,esm.Vb),useLDFeatureFlagOverrides=function(){var _a;return(_a={})[FeatureFlagNames.PACKAGE_INFO_CARD_WINTER_2022]=!0,_a[FeatureFlagNames.SHOW_SAVINGS]="not-included",_a[FeatureFlagNames.SIDE_PANEL_AUTO_SAVE]="variant",_a}}}]);