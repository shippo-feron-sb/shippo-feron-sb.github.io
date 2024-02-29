"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3780],{"./app/pages/Orders/Blackbeard/OrdersTable/BuyButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js");const __WEBPACK_DEFAULT_EXPORT__=function(props){var label=props.label,sx=props.sx,readyOrderCount=props.readyOrderCount,selectedOrderCount=props.selectedOrderCount,dataTestId=props.dataTestId,onClick=props.onClick,badgeContent=function(readyOrderCount,selectedOrderCount){return readyOrderCount?readyOrderCount===selectedOrderCount?"".concat(readyOrderCount):"".concat(readyOrderCount," / ").concat(selectedOrderCount):""}(readyOrderCount,selectedOrderCount);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({color:"primary",dataTestId,onClick,sx:(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({},sx),{backgroundColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.O.primaryButtonHover,"&:hover":{backgroundColor:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.O.primary," !important")}}),disabled:!badgeContent,role:"button"},{children:"".concat(label," ").concat(badgeContent)}))}},"./app/pages/Orders/Blackbeard/hooks/hooks/useFilterOrderStatus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useFilterOrderStatus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router/esm/react-router.js");function useFilterOrderStatus(){var paramsString=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.TH)().search;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return new URLSearchParams(paramsString).get("order_status")}),[paramsString])}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iu:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Iu,cC:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.cC,eU:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.eU});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/blackbeard/components/Topbars/OrderBuyTopbar/OrderBuyTopbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledActions:()=>DisabledActions,Regular:()=>Regular,RegularOrderStatusHidden:()=>RegularOrderStatusHidden,default:()=>OrderBuyTopbar_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),react=__webpack_require__("./node_modules/react/index.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),MoreVert=__webpack_require__("./node_modules/@mui/icons-material/esm/MoreVert.js"),Menu=__webpack_require__("./node_modules/@goshippo/components/esm/Menu/Menu.js"),MenuItem=__webpack_require__("./node_modules/@goshippo/components/esm/MenuItem/MenuItem.js"),BuyButton=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/BuyButton.tsx"),useFilterOrderStatus=__webpack_require__("./app/pages/Orders/Blackbeard/hooks/hooks/useFilterOrderStatus.ts"),ButtonStyleOverride={"&:hover":{backgroundColor:"".concat(colors.O.primaryButtonHover," !important")}},OrderBuyTopbar=function(props){var t=props.t,viewAll=props.viewAll,readyCheckedOrderCount=props.readyCheckedOrderCount,unfulfilledCheckedOrderCount=props.unfulfilledCheckedOrderCount,onClickViewAll=props.onClickViewAll,onClickViewSelectedOnly=props.onClickViewSelectedOnly,onClickEditAddress=props.onClickEditAddress,onClickViewItems=props.onClickViewItems,onClickChoosePackage=props.onClickChoosePackage,onClickChooseRate=props.onClickChooseRate,onClickBuy=props.onClickBuy,onClickAddNote=props.onClickAddNote,onClickDownloadPackingSlip=props.onClickDownloadPackingSlip,onClickHideOrder=props.onClickHideOrder,onClickClearSelection=props.onClickClearSelection,isTablet=(0,useMediaQuery.Z)(shippoTheme.Z.breakpoints.down(1440)),isSmallerTablet=(0,useMediaQuery.Z)(shippoTheme.Z.breakpoints.down(846)),_a=(0,tslib_es6.CR)((0,react.useState)(null),2),anchorEl=_a[0],setAnchorEl=_a[1],open=Boolean(anchorEl),filterOrderStatus=(0,useFilterOrderStatus.z)(),handleClick=(0,react.useCallback)((function(event){setAnchorEl(event.currentTarget)}),[]),handleClose=(0,react.useCallback)((function(){setAnchorEl(null)}),[]),handleView=(0,react.useCallback)((function(){viewAll?onClickViewAll&&onClickViewAll():onClickViewSelectedOnly&&onClickViewSelectedOnly()}),[viewAll,onClickViewAll,onClickViewSelectedOnly]),handleAddNote=(0,react.useCallback)((function(){handleClose(),onClickAddNote&&onClickAddNote()}),[onClickAddNote,handleClose]),actionButtons=(0,react.useMemo)((function(){return(0,emotion_react_jsx_runtime_browser_esm.BX)(emotion_react_jsx_runtime_browser_esm.HY,{children:[!isSmallerTablet&&(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:"21%",margin:0}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({dataTestId:"edit-address-button",onClick:onClickEditAddress,variant:"text",disabled:!unfulfilledCheckedOrderCount,sx:ButtonStyleOverride},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.white}},{children:t("orders:toolbar:editAddresses")}))}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:isSmallerTablet?"28%":"21%",margin:0}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({dataTestId:"view-items-button",onClick:onClickViewItems,variant:"text",disabled:!unfulfilledCheckedOrderCount,sx:ButtonStyleOverride},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.white}},{children:t("orders:toolbar:viewItems")}))}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:isSmallerTablet?"36%":"21%",margin:0}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({dataTestId:"choose-package-button",onClick:onClickChoosePackage,variant:"text",disabled:!unfulfilledCheckedOrderCount,sx:ButtonStyleOverride},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.white}},{children:t("orders:toolbar:choosePackage")}))}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:isSmallerTablet?"36%":"21%",margin:0}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({dataTestId:"choose-rate-button",onClick:onClickChooseRate,variant:"text",disabled:!unfulfilledCheckedOrderCount,sx:ButtonStyleOverride},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.white}},{children:t("orders:toolbar:chooseRate")}))}))}))]})}),[t,isSmallerTablet,unfulfilledCheckedOrderCount,onClickChoosePackage,onClickChooseRate,onClickEditAddress,onClickViewItems]);return(0,emotion_react_jsx_runtime_browser_esm.BX)(emotion_react_jsx_runtime_browser_esm.HY,{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",justifyContent:"space-between",spacing:2,alignItems:"center",sx:{p:2,pl:0,height:48,backgroundColor:colors.O.primary,borderTopLeftRadius:shippoTheme.Z.spacing(2),borderTopRightRadius:shippoTheme.Z.spacing(2)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{paddingLeft:shippoTheme.Z.spacing(1),width:isTablet?50:80}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,(0,tslib_es6.pi)({name:"close-button",onClick:onClickClearSelection},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Close.Z,{style:{color:colors.O.white}})}))})),(0,emotion_react_jsx_runtime_browser_esm.BX)("div",(0,tslib_es6.pi)({style:{display:"flex",flex:1,margin:0}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{width:"16%"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({dataTestId:"view-button",variant:"text",onClick:handleView,sx:ButtonStyleOverride},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.white}},{children:t(viewAll?"orders:toolbar:viewAll":"orders:toolbar:viewSelectedOnly")}))}))})),!isTablet&&actionButtons]})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({flexDirection:"inherit",sx:{width:145,marginLeft:0,justifyContent:"space-around",display:"contents"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(BuyButton.Z,{dataTestId:"buy-order-button",onClick:onClickBuy,readyOrderCount:readyCheckedOrderCount,selectedOrderCount:unfulfilledCheckedOrderCount,label:t("orders:toolbar:buyButton"),sx:{width:100}}),(0,emotion_react_jsx_runtime_browser_esm.BX)("div",(0,tslib_es6.pi)({style:{height:40,width:40,marginLeft:shippoTheme.Z.spacing(1.25)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,(0,tslib_es6.pi)({"aria-label":"more",name:"kebab-menu-button","aria-controls":open?"long-menu":void 0,"aria-expanded":open?"true":void 0,"aria-haspopup":"true",sx:{color:colors.O.white},onClick:handleClick,disabled:!unfulfilledCheckedOrderCount},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(MoreVert.Z,{})})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Menu.Z,(0,tslib_es6.pi)({id:"long-menu",MenuListProps:{"aria-labelledby":"kebab-menu-button"},anchorEl,open,onClose:handleClose,sx:{marginTop:shippoTheme.Z.spacing(1)}},{children:[isSmallerTablet&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:onClickEditAddress},{children:t("orders:toolbar:editAddresses")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:handleAddNote},{children:t("orders:toolbar:addNoteToPackingSlipV2")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:onClickDownloadPackingSlip},{children:t("orders:toolbar:downloadPackingSlipV2")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:onClickHideOrder},{children:t("hidden"===filterOrderStatus?"orders:toolbar:unhideOrder":"orders:toolbar:hideOrderV2")}))]}))]}))]}))]})),isTablet&&(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",justifyContent:"space-around",spacing:2,alignItems:"center",sx:{p:2,pl:0,height:23,backgroundColor:colors.O.primary,borderTop:"1px solid ".concat(colors.O.white)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{style:{width:isSmallerTablet?50:100}}),!isSmallerTablet&&(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{style:{width:"16%"}}),actionButtons,(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{style:{width:isSmallerTablet?126:168}})]}))]})},react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js");const OrderBuyTopbar_stories={title:"Order Table Topbar / Top Bar",component:OrderBuyTopbar,argTypes:{onClickViewAll:{action:"onClickViewAll"},onClickViewSelectedOnly:{action:"onClickViewSelectedOnly"},onClickEditAddress:{action:"onClickEditAddress"},onClickViewItems:{action:"onClickViewItems"},onClickChoosePackage:{action:"onClickChoosePackage"},onClickChooseRate:{action:"onClickChooseRate"},onClickBuy:{action:"onClickBuy"},onClickAddNote:{action:"onClickAddNote"},onClickDownloadPackingSlip:{action:"onClickDownloadPackingSlip"},onClickHideOrder:{action:"onClickHideOrder"},onClickClearSelection:{action:"onClickClearSelection"}}};var OrderBuyTopbarWithTranslate=(0,translate.Iu)("orders")(OrderBuyTopbar),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(react_router.VA,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(OrderBuyTopbarWithTranslate,(0,tslib_es6.pi)({},args))})},Regular=Template.bind({});Regular.args={readyCheckedOrderCount:2,unfulfilledCheckedOrderCount:10,viewAll:!1};var DisabledActions=Template.bind({});DisabledActions.args={readyCheckedOrderCount:0,unfulfilledCheckedOrderCount:0,viewAll:!1};var RegularOrderStatusHidden=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(react_router.VA,(0,tslib_es6.pi)({initialEntries:["some-url?order_status=hidden"]},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(OrderBuyTopbarWithTranslate,(0,tslib_es6.pi)({},args))}))}.bind({});RegularOrderStatusHidden.args={readyCheckedOrderCount:2,unfulfilledCheckedOrderCount:10,viewAll:!1},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"(args: OrderBuyTopbarProps) => <MemoryRouter>\n    <OrderBuyTopbarWithTranslate {...args} />\n  </MemoryRouter>",...Regular.parameters?.docs?.source}}},DisabledActions.parameters={...DisabledActions.parameters,docs:{...DisabledActions.parameters?.docs,source:{originalSource:"(args: OrderBuyTopbarProps) => <MemoryRouter>\n    <OrderBuyTopbarWithTranslate {...args} />\n  </MemoryRouter>",...DisabledActions.parameters?.docs?.source}}},RegularOrderStatusHidden.parameters={...RegularOrderStatusHidden.parameters,docs:{...RegularOrderStatusHidden.parameters?.docs,source:{originalSource:"(args: OrderBuyTopbarProps) => <MemoryRouter initialEntries={['some-url?order_status=hidden']}>\n    <OrderBuyTopbarWithTranslate {...args} />\n  </MemoryRouter>",...RegularOrderStatusHidden.parameters?.docs?.source}}}}}]);