"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[6652],{"./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/TrackingCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CarrierService_TrackingCell});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),carriers=__webpack_require__("./app/constants/carriers.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),ContentCopy=__webpack_require__("./node_modules/@mui/icons-material/esm/ContentCopy.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),CarrierServiceCellContainer=function(_a){var children=_a.children;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Stack.A,(0,tslib_es6.Cl)({direction:"row",spacing:1,sx:{placeItems:"center",width:"100%",height:"100%",flex:1,maxWidth:"264px",boxSizing:"border-box",py:1},"data-testid":"carrier-service-cell-container"},{children}))},TitleTypography=function(_a){var children=_a.children;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({color:"primary",component:"div",variant:"body",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{children}))},BodyTypography=function(_a){var children=_a.children,_b=_a.truncate,truncate=void 0===_b||_b,_c=_a.truncateDirection,truncateDirection=void 0===_c?"ltr":_c;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:"primary",variant:"caption",sx:truncate?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:truncateDirection,textAlign:"left"}:void 0,"data-testid":"body-typography-container"},{children}))},ProviderImage=function(_a){var alt=_a.alt,iconSrc=_a.iconSrc;return(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{style:{width:"1.5rem",borderRadius:"0.125rem"},alt,src:iconSrc})},MobileBasicTrackingCell=function(_a){var Label=_a.Label,LinkComponent=_a.LinkComponent,onClickCopy=_a.onClickCopy,trackingNumber=_a.trackingNumber;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({direction:"row",spacing:0,sx:{placeItems:"center",width:"100%",height:"100%",flex:1,maxWidth:"264px",boxSizing:"border-box",py:1},"data-testid":"carrier-service-cell-container"},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({sx:{overflow:"hidden",flex:1}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TitleTypography,{children:Label}),(0,emotion_react_jsx_runtime_browser_esm.Y)(BodyTypography,(0,tslib_es6.Cl)({truncateDirection:"rtl"},{children:LinkComponent||trackingNumber}))]})),!!trackingNumber&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({style:{justifySelf:"flex-end"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(IconButton.A,(0,tslib_es6.Cl)({sx:{padding:shippoTheme.A.spacing(.5),color:colors.T.secondary},"data-testid":"content-copy-icon",onClick:function(e){e.stopPropagation(),onClickCopy()}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ContentCopy.A,{})}))}))]}))};const cells_BasicTrackingCell=function(_a){var isMobile=_a.isMobile,Label=_a.Label,LinkComponent=_a.LinkComponent,onClickCopy=_a.onClickCopy,trackingNumber=_a.trackingNumber,providerImage=_a.providerImage;return isMobile?(0,emotion_react_jsx_runtime_browser_esm.Y)(MobileBasicTrackingCell,{Label,LinkComponent,onClickCopy,trackingNumber,providerImage}):(0,emotion_react_jsx_runtime_browser_esm.FD)(CarrierServiceCellContainer,{children:[providerImage?(0,emotion_react_jsx_runtime_browser_esm.Y)(ProviderImage,{alt:"Provider icon",iconSrc:providerImage}):(0,emotion_react_jsx_runtime_browser_esm.Y)(ProviderImage,{alt:"",iconSrc:""}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({sx:{overflow:"hidden",flex:1}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TitleTypography,{children:Label}),(0,emotion_react_jsx_runtime_browser_esm.Y)(BodyTypography,(0,tslib_es6.Cl)({truncateDirection:"rtl"},{children:LinkComponent||trackingNumber}))]})),!!trackingNumber&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({style:{justifySelf:"flex-end"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(IconButton.A,(0,tslib_es6.Cl)({"data-testid":"content-copy-icon",sx:{color:colors.T.secondary},onClick:function(e){e.stopPropagation(),onClickCopy()}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ContentCopy.A,{})}))}))]})};var react=__webpack_require__("./node_modules/react/index.js"),Carrier=__webpack_require__("./app/types/Carrier.ts"),observability=__webpack_require__("./app/utils/observability/index.ts"),utils=__webpack_require__("./app/utils/utils.ts");const CarrierService_TrackingCell=(0,react.memo)((function(_a){var _b,trackingRate=_a.trackingRate,transaction=_a.transaction,addSnackbarAlert=_a.addSnackbarAlert,orderId=_a.orderId,t=_a.t;(0,react.useEffect)((function(){orderId&&observability.O.cancelEvent("RATE_REFRESH_ORDERS_TABLE",{id:orderId})}),[orderId]);return(0,emotion_react_jsx_runtime_browser_esm.Y)(cells_BasicTrackingCell,{trackingNumber:transaction.trackingNumber,onClickCopy:function(){(0,utils.lW)(null==transaction?void 0:transaction.trackingNumber),addSnackbarAlert(t("orders:mobileNotifications:copyTrackingNumber",{count:1}),"success")},Label:(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[trackingRate.provider," Tracking"]}),providerImage:trackingRate.provider?null===(_b=carriers.Ps[(0,Carrier.Z)(trackingRate.provider)])||void 0===_b?void 0:_b.icon:void 0})}))},"./app/utils/newRelic/newRelic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>newRelic});var newRelic=new(function(){function NewRelicClient(){this.instance=null}return NewRelicClient.prototype.setUserId=function(userId){var _a;null===(_a=this.instance)||void 0===_a||_a.setUserId(userId)},NewRelicClient.prototype.addPageAction=function(name,attributes){var _a;null===(_a=this.instance)||void 0===_a||_a.addPageAction(name,attributes)},NewRelicClient.prototype.log=function(message,options){var _a;null===(_a=this.instance)||void 0===_a||_a.log(message,options)},NewRelicClient.prototype.noticeError=function(error,customAttributes){var _a;null===(_a=this.instance)||void 0===_a||_a.noticeError(error,customAttributes)},NewRelicClient.prototype.setInstance=function(instance){this.instance=instance,this.instance.setApplicationVersion("elements_WEB-3346:bb66caabdecc1a41ff46558445ea7bd9d82bd0de")},NewRelicClient.prototype.isInitialized=function(){return!!this.instance},NewRelicClient}())},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.singleEvent=function(name,attributes){this.sendPageAction(name,attributes),this.sendFullStoryLog(name,attributes),this.sendFullStoryEvent(name,attributes)},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={timeoutId,startTime:Date.now()},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.errorEvent=function(name,attributes,severity){void 0===severity&&(severity="ERROR");var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_").concat(severity);this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())},"./app/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XJ:()=>unknownToString,a2:()=>formatTestIdName,lW:()=>copyToClipboard,n9:()=>isNotNil});__webpack_require__("./node_modules/convert-units/lib/index.js");var isNotNil=function(val){return null!=val};var unknownToString=function(input){if(isNotNil(input)&&function hasToString(obj){return void 0!==obj.toString}(input)){var value=input.toString();return"[object Object]"===value&&(value=JSON.stringify(input)),value}return""},formatTestIdName=function(name){return name.toLowerCase().trim().replaceAll(" ","-")},copyToClipboard=function(value){value&&("clipboard"in navigator?navigator.clipboard.writeText(value):legacyCopyToClipboard(value))},legacyCopyToClipboard=function(trackingNumber){var textArea=document.createElement("textarea");textArea.textContent=trackingNumber,document.body.appendChild(textArea);var selection=document.getSelection(),range=document.createRange();range.selectNode(textArea),null==selection||selection.removeAllRanges(),null==selection||selection.addRange(range),document.execCommand("copy"),null==selection||selection.removeAllRanges(),document.body.removeChild(textArea)}},"./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/TrackingCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RowOfTrackingCells:()=>RowOfTrackingCells,SimpleTrackingCell:()=>SimpleTrackingCell,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_TrackingCell__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/CarrierService/TrackingCell.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Blackbeard/TrackingCell",component:_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered"},argTypes:{}};var SimpleTrackingCell=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},args))}.bind({});SimpleTrackingCell.args={addSnackbarAlert:function(){},t:function(){},trackingRate:{provider:"USPS"},transaction:{trackingNumber:"92001901755477000029917247",trackingUrlProvider:"USPS"}};var RowOfTrackingCells=function(){var addSnackbarAlert=function(){},t=function(key){return key};return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)("div",(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({style:{display:"flex",flexDirection:"row"}},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)("div",(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem",width:"125px"}},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,{t,addSnackbarAlert,trackingRate:{provider:"USPS"},transaction:{trackingNumber:"92001901755477000029917247",trackingUrlProvider:"https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=92001901755477000029917247"}}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,{t,addSnackbarAlert,trackingRate:{provider:"UPS"},transaction:{trackingNumber:"92001901755",trackingUrlProvider:"UPS"}}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,{t,addSnackbarAlert,trackingRate:{provider:"DHL"},transaction:{trackingNumber:"9200",trackingUrlProvider:"https://webtrack.dhlglobalmail.com/?trackingnumber=420080549274811111111200060282"}})]})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)("div",(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem",width:"400px"}},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,{t,addSnackbarAlert,trackingRate:{provider:"USPS"},transaction:{trackingNumber:"92001901755477000029917247",trackingUrlProvider:"https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=92001901755477000029917247"}}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,{t,addSnackbarAlert,trackingRate:{provider:"UPS"},transaction:{trackingNumber:"92001901755",trackingUrlProvider:"UPS"}}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_TrackingCell__WEBPACK_IMPORTED_MODULE_0__.A,{t,addSnackbarAlert,trackingRate:{provider:"DHL"},transaction:{trackingNumber:"9200",trackingUrlProvider:"https://webtrack.dhlglobalmail.com/?trackingnumber=420080549274811111111200060282"}})]}))]}))};SimpleTrackingCell.parameters={...SimpleTrackingCell.parameters,docs:{...SimpleTrackingCell.parameters?.docs,source:{originalSource:"(args: ComponentProps) => {\n  return <TrackingCell {...args} />;\n}",...SimpleTrackingCell.parameters?.docs?.source}}},RowOfTrackingCells.parameters={...RowOfTrackingCells.parameters,docs:{...RowOfTrackingCells.parameters?.docs,source:{originalSource:"() => {\n  const addSnackbarAlert = () => {};\n  const t = (key: string) => key;\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'row'\n  }}>\n      <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1rem',\n      padding: '1rem',\n      width: '125px'\n    }}>\n        <TrackingCell t={t} addSnackbarAlert={addSnackbarAlert} trackingRate={{\n        provider: 'USPS'\n      }} transaction={{\n        trackingNumber: '92001901755477000029917247',\n        trackingUrlProvider: 'https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=92001901755477000029917247'\n      }} />\n        <TrackingCell t={t} addSnackbarAlert={addSnackbarAlert} trackingRate={{\n        provider: 'UPS'\n      }} transaction={{\n        trackingNumber: '92001901755',\n        trackingUrlProvider: 'UPS'\n      }} />\n        <TrackingCell t={t} addSnackbarAlert={addSnackbarAlert} trackingRate={{\n        provider: 'DHL'\n      }} transaction={{\n        trackingNumber: '9200',\n        trackingUrlProvider: 'https://webtrack.dhlglobalmail.com/?trackingnumber=420080549274811111111200060282'\n      }} />\n      </div>\n      <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1rem',\n      padding: '1rem',\n      width: '400px'\n    }}>\n        <TrackingCell t={t} addSnackbarAlert={addSnackbarAlert} trackingRate={{\n        provider: 'USPS'\n      }} transaction={{\n        trackingNumber: '92001901755477000029917247',\n        trackingUrlProvider: 'https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=92001901755477000029917247'\n      }} />\n        <TrackingCell t={t} addSnackbarAlert={addSnackbarAlert} trackingRate={{\n        provider: 'UPS'\n      }} transaction={{\n        trackingNumber: '92001901755',\n        trackingUrlProvider: 'UPS'\n      }} />\n        <TrackingCell t={t} addSnackbarAlert={addSnackbarAlert} trackingRate={{\n        provider: 'DHL'\n      }} transaction={{\n        trackingNumber: '9200',\n        trackingUrlProvider: 'https://webtrack.dhlglobalmail.com/?trackingnumber=420080549274811111111200060282'\n      }} />\n      </div>\n    </div>;\n}",...RowOfTrackingCells.parameters?.docs?.source}}}}}]);