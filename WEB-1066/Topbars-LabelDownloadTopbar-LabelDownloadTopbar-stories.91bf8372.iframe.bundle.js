"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[9894],{"./node_modules/@mui/icons-material/esm/ContentCopy.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy")},"./app/blackbeard/components/Topbars/TagsTopbarButton/TagsTopbarButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>TagsTopbarButton});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/Tooltip/Tooltip.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_pages_Orders_Blackbeard_OrdersTable_cells_TagsTooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/TagsTooltip/index.ts"),_pages_Orders_Blackbeard_OrdersTable_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/hooks/useTooltip.ts"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js"),_pages_Orders_Blackbeard_OrdersTable_CreateTagButton_CreateTagButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/CreateTagButton/CreateTagButton.tsx"),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js"),_selectors_orders_selectors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/selectors/orders.selectors.ts"),TagsTopbarButton=function(_a){var t=_a.t,_b=_a.textColor,textColor=void 0===_b?"white":_b,_c=_a.buttonProps,buttonProps=void 0===_c?{}:_c,_d=(0,_pages_Orders_Blackbeard_OrdersTable_hooks_useTooltip__WEBPACK_IMPORTED_MODULE_1__.l)(),isTooltipOpen=_d.isTooltipOpen,handleTooltipClose=_d.handleTooltipClose,handleTooltipOpen=_d.handleTooltipOpen,_e=buttonProps.sx,buttonSx=void 0===_e?{}:_e,buttonPropsWithoutSx=(0,tslib__WEBPACK_IMPORTED_MODULE_5__._T)(buttonProps,["sx"]),selectedOrdersTags=(0,react_redux__WEBPACK_IMPORTED_MODULE_3__.v9)(_selectors_orders_selectors__WEBPACK_IMPORTED_MODULE_4__.TF);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({onClickAway:handleTooltipClose},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("div",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({open:isTooltipOpen,onClose:handleTooltipClose,PopperProps:{disablePortal:!0,sx:{whiteSpace:"normal"},modifiers:[{name:"offset",enabled:!0,options:{offset:[0,-14]}}]},disableFocusListener:!0,variant:"table",title:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_pages_Orders_Blackbeard_OrdersTable_cells_TagsTooltip__WEBPACK_IMPORTED_MODULE_0__.a,{handleTagSelection:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(_a){return[2]}))}))},handleTagDeletion:function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(_a){return[2]}))}))},handleTagCreation:function(){},endContent:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_pages_Orders_Blackbeard_OrdersTable_CreateTagButton_CreateTagButton__WEBPACK_IMPORTED_MODULE_2__.g,{t}),tags:selectedOrdersTags})},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("div",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_9__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({dataTestId:"tag-bulk-edit-button",variant:"text",onClick:function(){isTooltipOpen?handleTooltipClose():handleTooltipOpen()}},buttonPropsWithoutSx,{sx:(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({margin:_goshippo_components__WEBPACK_IMPORTED_MODULE_10__.Z.spacing(2,0)},buttonSx)},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_11__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.pi)({component:"span",variant:"bodyEmphasized",sx:{color:"white"===textColor?_goshippo_components__WEBPACK_IMPORTED_MODULE_12__.O.white:_goshippo_components__WEBPACK_IMPORTED_MODULE_12__.O.gray60}},{children:t("orders:toolbar:editTags")}))}))})}))})}))}},"./app/hooks/useTopbarColumnsWidth.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useTopbarColumnsWidth});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),_pages_Orders_Blackbeard_OrdersTable_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/context.ts"),DEFAULT_TOPBAR_COLUMNS_WIDTH={order:"auto",tags:"auto",customer:"auto",items:"auto",packageInformation:"auto",carrierService:"auto"},useTopbarColumnsWidth=function(){var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.CR)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_TOPBAR_COLUMNS_WIDTH),2),topbarColumnsWidth=_a[0],setTopbarColumnsWidth=_a[1],apiRef=(0,_pages_Orders_Blackbeard_OrdersTable_context__WEBPACK_IMPORTED_MODULE_2__.u)().apiRef,getColumnWidth=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(field){var _a,_b,tableColumnHeaderWidth=null===(_b=null===(_a=null==apiRef?void 0:apiRef.current)||void 0===_a?void 0:_a.getColumnHeaderElement(field))||void 0===_b?void 0:_b.clientWidth;return tableColumnHeaderWidth?"".concat(tableColumnHeaderWidth,"px"):"auto"}),[apiRef]),calculateTopbarColumnsWidth=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return window.innerWidth>=_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.breakpoints.values.xl?{order:getColumnWidth("order"),tags:getColumnWidth("tags"),customer:getColumnWidth("customer"),items:getColumnWidth("items"),packageInformation:getColumnWidth("packageInformation"),carrierService:getColumnWidth("carrierService")}:DEFAULT_TOPBAR_COLUMNS_WIDTH}),[getColumnWidth]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setTopbarColumnsWidth(calculateTopbarColumnsWidth())}),[calculateTopbarColumnsWidth]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleResize=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)((function(){setTopbarColumnsWidth((function(){return calculateTopbarColumnsWidth()}))}),250);return window.addEventListener("resize",handleResize),function(){window.removeEventListener("resize",handleResize)}}),[calculateTopbarColumnsWidth]),{topbarColumnsWidth}}},"./app/pages/Orders/Blackbeard/hooks/hooks/useFilterOrderStatus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useFilterOrderStatus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router/esm/react-router.js");function useFilterOrderStatus(){var paramsString=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.TH)().search;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return new URLSearchParams(paramsString).get("order_status")}),[paramsString])}},"./app/blackbeard/components/Topbars/LabelDownloadTopbar/LabelDownloadTopbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Regular:()=>Regular,RegularOrderStatusHidden:()=>RegularOrderStatusHidden,default:()=>LabelDownloadTopbar_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),ContentCopy=__webpack_require__("./node_modules/@mui/icons-material/esm/ContentCopy.js"),MoreVert=__webpack_require__("./node_modules/@mui/icons-material/esm/MoreVert.js"),Menu=__webpack_require__("./node_modules/@goshippo/components/esm/Menu/Menu.js"),MenuItem=__webpack_require__("./node_modules/@goshippo/components/esm/MenuItem/MenuItem.js"),useFilterOrderStatus=__webpack_require__("./app/pages/Orders/Blackbeard/hooks/hooks/useFilterOrderStatus.ts"),react=__webpack_require__("./node_modules/react/index.js"),TagsTopbarButton=__webpack_require__("./app/blackbeard/components/Topbars/TagsTopbarButton/TagsTopbarButton.tsx"),useTopbarColumnsWidth=__webpack_require__("./app/hooks/useTopbarColumnsWidth.ts"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),featureflagsV2=__webpack_require__("./app/utils/featureflagsV2/index.ts"),LabelDownloadTopbar=function(props){var t=props.t,count=props.count,viewAll=props.viewAll,onClickViewAll=props.onClickViewAll,onClickViewSelectedOnly=props.onClickViewSelectedOnly,onClickCopyTrackingNumbers=props.onClickCopyTrackingNumbers,onClickDownload=props.onClickDownload,onClickDownloadLabels=props.onClickDownloadLabels,onClickClearSelection=props.onClickClearSelection,onClickAddNote=props.onClickAddNote,onClickDownloadPackingSlip=props.onClickDownloadPackingSlip,onClickHideShipment=props.onClickHideShipment,_a=props.hasKebabMenu,hasKebabMenu=void 0===_a||_a,_b=props.breakpointType,breakpointType=void 0===_b?"xl":_b,isLarge=(0,useMediaQuery.Z)(shippoTheme.Z.breakpoints.down(1440)),isMedium=(0,useMediaQuery.Z)(shippoTheme.Z.breakpoints.down("lg")),shouldApplyBreakpoint="xl"===breakpointType?isLarge:isMedium,_c=(0,tslib_es6.CR)((0,react.useState)(null),2),anchorEl=_c[0],setAnchorEl=_c[1],filterOrderStatus=(0,useFilterOrderStatus.z)(),open=Boolean(anchorEl),topbarColumnsWidth=(0,useTopbarColumnsWidth.K)().topbarColumnsWidth,location=(0,react_router.TH)(),orderTagMvpFlag=(0,featureflagsV2.ye)(featureflagsV2.TP.ORDER_TAG_MVP),isTagsColumnEnabled=!!(null==orderTagMvpFlag?void 0:orderTagMvpFlag.enabled),isOrdersPage=location.pathname.includes("/orders"),shouldDisplayEditTagsButton=isTagsColumnEnabled&&!isMedium&&isOrdersPage,handleClick=(0,react.useCallback)((function(event){setAnchorEl(event.currentTarget)}),[]),handleClose=(0,react.useCallback)((function(){setAnchorEl(null)}),[]),handleView=(0,react.useCallback)((function(){viewAll?onClickViewAll&&onClickViewAll():onClickViewSelectedOnly&&onClickViewSelectedOnly()}),[viewAll,onClickViewAll,onClickViewSelectedOnly]),handleKebabMenuOption=(0,react.useCallback)((function(callback){handleClose(),callback&&callback()}),[handleClose]),handleAddNote=(0,react.useCallback)((function(){handleKebabMenuOption(onClickAddNote)}),[handleKebabMenuOption,onClickAddNote]),handleDownloadLabels=(0,react.useCallback)((function(){handleKebabMenuOption(onClickDownloadLabels)}),[handleKebabMenuOption,onClickDownloadLabels]),handleDownloadPackingSlip=(0,react.useCallback)((function(){handleKebabMenuOption(onClickDownloadPackingSlip)}),[handleKebabMenuOption,onClickDownloadPackingSlip]),handleHideShipment=(0,react.useCallback)((function(){handleKebabMenuOption(onClickHideShipment)}),[handleKebabMenuOption,onClickHideShipment]);return(0,emotion_react_jsx_runtime_browser_esm.BX)(emotion_react_jsx_runtime_browser_esm.HY,{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({direction:"row",justifyContent:"space-between",spacing:2,alignItems:"center",sx:{pt:2,pb:2,pr:hasKebabMenu?.7:3,height:48,backgroundColor:colors.O.white,borderTopLeftRadius:shippoTheme.Z.spacing(2),borderTopRightRadius:shippoTheme.Z.spacing(2),justifyContent:"space-between"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{paddingLeft:shippoTheme.Z.spacing(1),width:shouldApplyBreakpoint?50:80}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,(0,tslib_es6.pi)({"aria-label":t("orders:toolbar:clearSelection"),name:"close-button",onClick:onClickClearSelection},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Close.Z,{})}))})),(0,emotion_react_jsx_runtime_browser_esm.BX)("div",(0,tslib_es6.pi)({style:{display:"flex",flex:1,margin:0,alignItems:"center"}},{children:[onClickViewSelectedOnly&&onClickViewAll?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,(0,tslib_es6.pi)({sx:{width:topbarColumnsWidth.order}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({dataTestId:"view-button",variant:"text",onClick:handleView},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.gray60}},{children:t(viewAll?"orders:toolbar:viewAll":"orders:toolbar:viewSelectedOnly")}))}))})):null,shouldDisplayEditTagsButton&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,(0,tslib_es6.pi)({sx:{width:topbarColumnsWidth.tags}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(TagsTopbarButton.r,{textColor:"gray",t})}))]})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Stack.Z,(0,tslib_es6.pi)({flexDirection:"inherit",sx:{width:145,marginLeft:0,justifyContent:"space-around",display:"contents"}},{children:[shouldApplyBreakpoint?null:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({"aria-label":t("orders:toolbar:copyTrackingNumber"),sx:{marginRight:shippoTheme.Z.spacing(3)},onClick:onClickCopyTrackingNumbers,variant:"text",dataTestId:"copy-tracking-button",disabled:!count,endIcon:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ContentCopy.Z,{sx:{color:colors.O.gray60}})},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.gray60}},{children:t("orders:toolbar:copyTrackingNumber")}))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({color:"primary",dataTestId:"label-download-button",onClick:onClickDownload,disabled:!count,role:"button"},{children:"".concat(t("orders:toolbar:downloadButton",{count}))})),hasKebabMenu?(0,emotion_react_jsx_runtime_browser_esm.BX)("div",(0,tslib_es6.pi)({style:{height:40,width:40,marginLeft:shippoTheme.Z.spacing(2.1)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,(0,tslib_es6.pi)({"aria-label":"more",name:"kebab-menu-button","aria-controls":open?"long-menu":void 0,"aria-expanded":open?"true":void 0,"aria-haspopup":"true",sx:{color:colors.O.gray60},onClick:handleClick,disabled:!count},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(MoreVert.Z,{})})),(0,emotion_react_jsx_runtime_browser_esm.BX)(Menu.Z,(0,tslib_es6.pi)({id:"long-menu",MenuListProps:{"aria-labelledby":"kebab-menu-button"},anchorEl,open,onClose:handleClose,sx:{marginTop:shippoTheme.Z.spacing(1)}},{children:[onClickDownloadLabels?(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:handleDownloadLabels},{children:t("orders:toolbar:downloadLabels")})):null,onClickAddNote?(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:handleAddNote},{children:t("orders:toolbar:addNoteToPackingSlipV2")})):null,onClickDownloadPackingSlip?(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:handleDownloadPackingSlip},{children:t("orders:toolbar:downloadPackingSlipV2")})):null,onClickHideShipment?(0,emotion_react_jsx_runtime_browser_esm.tZ)(MenuItem.Z,(0,tslib_es6.pi)({sx:{height:48},onClick:handleHideShipment},{children:t("hidden"===filterOrderStatus?"orders:toolbar:unhideShipment":"orders:toolbar:hideShipmentV2")})):null]}))]})):null]}))]})),shouldApplyBreakpoint?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Stack.Z,(0,tslib_es6.pi)({direction:"row",justifyContent:"space-around",spacing:2,alignItems:"center",sx:{p:2,pl:0,pr:0,height:23,backgroundColor:colors.O.white,borderTop:"1px solid ".concat(colors.O.gray50)}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({onClick:onClickCopyTrackingNumbers,variant:"text",endIcon:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ContentCopy.Z,{sx:{color:colors.O.gray60}}),disabled:!count},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",(0,tslib_es6.pi)({style:{color:colors.O.gray60}},{children:t("orders:toolbar:copyTrackingNumber")}))}))})):null]})};const LabelDownloadTopbar_stories={title:"Order Table Topbar / Label Download Top Bar",component:LabelDownloadTopbar,parameters:{backgrounds:{default:"grey"}},argTypes:{onClickViewAll:{action:"onClickViewAll",description:"This optional callback is responsible for rendering `View all` or `View selected only` button in the top bar"},onClickViewSelectedOnly:{action:"onClickViewSelectedOnly",description:"This optional callback is responsible for rendering `View all` or `View selected only` button in the top bar"},onClickCopyTrackingNumbers:{action:"onClickCopyTrackingNumbers",description:"This callback is required"},onClickClearSelection:{action:"onClickClearSelection",description:"This callback is required"},onClickDownload:{action:"onClickDownload",description:"This callback is required"},onClickAddNote:{action:"onClickAddNote",description:"This optional callback is responsible for rendering `Add not to packing slip` option in the kebab menu"},onClickDownloadPackingSlip:{action:"onClickDownloadPackingSlip",description:"This optional callback is responsible for rendering `Download packing slip` option in the kebab menu"},onClickHideShipment:{action:"onClickHideShipment",description:"This optional callback is responsible for rendering `Hide shipment` option in the kebab menu"},onClickDownloadLabels:{action:"onClickDownloadLabels",description:"This optional callback is responsible for rendering `Download labels` option in the kebab menu"}}};var LabelDownloadTopbarWithTranslate=(0,translate.Iu)("orders")(LabelDownloadTopbar),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(react_router.VA,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(LabelDownloadTopbarWithTranslate,(0,tslib_es6.pi)({},args))})},Regular=Template.bind({});Regular.args={count:10,viewAll:!1};var Disabled=Template.bind({});Disabled.args={count:0,viewAll:!1};var RegularOrderStatusHidden=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(react_router.VA,(0,tslib_es6.pi)({initialEntries:["some-url?order_status=hidden"]},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(LabelDownloadTopbarWithTranslate,(0,tslib_es6.pi)({},args))}))}.bind({});RegularOrderStatusHidden.args={count:10,viewAll:!1},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"(args: LabelDownloadTopbarProps) => <MemoryRouter>\n    <LabelDownloadTopbarWithTranslate {...args} />\n  </MemoryRouter>",...Regular.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"(args: LabelDownloadTopbarProps) => <MemoryRouter>\n    <LabelDownloadTopbarWithTranslate {...args} />\n  </MemoryRouter>",...Disabled.parameters?.docs?.source}}},RegularOrderStatusHidden.parameters={...RegularOrderStatusHidden.parameters,docs:{...RegularOrderStatusHidden.parameters?.docs,source:{originalSource:"(args: LabelDownloadTopbarProps) => <MemoryRouter initialEntries={['some-url?order_status=hidden']}>\n    <LabelDownloadTopbarWithTranslate {...args} />\n  </MemoryRouter>",...RegularOrderStatusHidden.parameters?.docs?.source}}}}}]);