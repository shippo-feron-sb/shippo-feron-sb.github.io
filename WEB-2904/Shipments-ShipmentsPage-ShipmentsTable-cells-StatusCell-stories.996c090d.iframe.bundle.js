"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2922],{"./app/pages/Shipments/ShipmentsPage/ShipmentsTable/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>trackingStatusFieldToObject});__webpack_require__("./app/types/Transaction.ts");function trackingStatusFieldToObject(trackingStatus,isReturn,isNewReturnExperience){if(trackingStatus){var splitStatus=trackingStatus.split(": ");if(splitStatus.length<2)return{title:splitStatus[0].trim()};var title=splitStatus[0].trim();if("pre-transit"===title.toLowerCase()&&(title="Pre-transit"),isReturn&&isNewReturnExperience)switch(title.toLowerCase()){case"pre-transit":title="".concat(title," return");break;case"in transit":case"in-transit":title="Return in transit";break;case"delivered":title="Return delivered";break;case"failure":title="Return failure"}return{title,description:splitStatus.slice(1).join(": ").trim()}}}},"./app/types/APIMessage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function fromJSON(jsonAPIMessage){return{kind:"APIMessage",code:jsonAPIMessage.code,source:jsonAPIMessage.source,text:jsonAPIMessage.text}}__webpack_require__.d(__webpack_exports__,{OR:()=>messageIsVisible,rS:()=>fromJSON});var hiddenCarrierMessages={DHLExpress:new Set(["Shippo's DHL Express master account doesn't support shipments to inside of the US"]),ShippoCommon:new Set(["Shipment origin or destination state is out of the service area for LSO."]),UPS:new Set(["RatedShipmentAlert: Ship To Address Classification is changed from Commercial to Residential","Shipment origin is out of service area for UPS Master account from CA","RatedShipmentAlert: Your invoice may vary from the displayed reference rates"])},messageIsVisible=function(message){return!function(message){var _a;return!!(null===(_a=hiddenCarrierMessages[message.source])||void 0===_a?void 0:_a.has(message.text))}(message)}},"./app/types/Track.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TrackStatus;function transactionSearchTrackFromJSON(jsonTrack){return{objectCreated:jsonTrack.object_created,objectUpdated:jsonTrack.object_updated,objectId:jsonTrack.object_id,status:jsonTrack.status,statusDetails:jsonTrack.status_details,statusDate:jsonTrack.status_date,location:jsonTrack.location?{city:jsonTrack.location.city,state:jsonTrack.location.state,zip:jsonTrack.location.zip,country:jsonTrack.location.country}:void 0}}__webpack_require__.d(__webpack_exports__,{O:()=>transactionSearchTrackFromJSON,S:()=>TrackStatus}),function(TrackStatus){TrackStatus.UNKNOWN="UNKNOWN",TrackStatus.TRANSIT="TRANSIT",TrackStatus.DELIVERED="DELIVERED",TrackStatus.FAILURE="FAILURE",TrackStatus.RETURNED="RETURNED",TrackStatus.PRE_TRANSIT="PRE_TRANSIT"}(TrackStatus||(TrackStatus={}))},"./app/types/Transaction.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$c:()=>isTransactionStatusRefundable,PJ:()=>isRefundIneligible,dF:()=>ObjectState,eM:()=>getLabelUrl,p9:()=>transactionUI2FromJSON,rS:()=>fromJSON,x8:()=>TransactionStatus});var _a,TransactionStatus,ObjectState,_sentry_browser__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),_constants_carriers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/carriers.ts"),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/moment/moment.js"),_types_Address__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/types/Address.ts"),_types_APIMessage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/APIMessage.ts"),_types_Rate__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/types/Rate.ts");__webpack_require__("./app/types/Track.ts");!function(TransactionStatus){TransactionStatus.WAITING="WAITING",TransactionStatus.QUEUED="QUEUED",TransactionStatus.SUCCESS="SUCCESS",TransactionStatus.ERROR="ERROR",TransactionStatus.REFUNDPENDING="REFUNDPENDING",TransactionStatus.REFUNDREJECTED="REFUNDREJECTED",TransactionStatus.REFUNDED="REFUNDED"}(TransactionStatus||(TransactionStatus={})),function(ObjectState){ObjectState.INVALID="INVALID",ObjectState.VALID="VALID"}(ObjectState||(ObjectState={}));var RefundInitiatedTransactionStatuses=((_a={})[TransactionStatus.REFUNDED]=!0,_a[TransactionStatus.REFUNDPENDING]=!0,_a[TransactionStatus.REFUNDREJECTED]=!0,_a);function isTransactionStatusRefundable(transactionStatus){return!!transactionStatus&&!RefundInitiatedTransactionStatuses[transactionStatus]}function getLabelUrl(labelUrl){if(!labelUrl)return"";var parts=window.location.host.split("."),subdomain=parts[0];if(labelUrl.includes("local")||labelUrl.includes("stage-perf"))return labelUrl;if(!labelUrl.includes("amazonaws.com"))return labelUrl;try{var newSubdomain=subdomain.replace("apps","deliver"),newHost="".concat(newSubdomain,".").concat(parts[1],".").concat(parts[2].split(":")[0]),parsedUrl=new URL(labelUrl),path_1=parsedUrl.pathname,qs_1=parsedUrl.search,extParam=/Windows/.test(window.navigator.userAgent)&&path_1.includes(".pdf")?"&ext=.pdf":"";return"https://".concat(newHost).concat(path_1).concat(qs_1).concat(extParam)}catch(err){return _sentry_browser__WEBPACK_IMPORTED_MODULE_6__.Cp(err),""}}function fromJSON(jsonTransaction){var _a,_b,_c,test=(jsonTransaction.test?jsonTransaction.test:jsonTransaction.was_test)||!1,amount=(jsonTransaction.insurance||{}).amount,insuranceAmount="0"===amount?void 0:amount;return{test,objectState:jsonTransaction.object_state,status:jsonTransaction.status||jsonTransaction.object_status,objectCreated:jsonTransaction.object_created,objectUpdated:jsonTransaction.object_updated,objectId:jsonTransaction.object_id,objectOwner:jsonTransaction.object_owner,rate:jsonTransaction.rate,trackingNumber:jsonTransaction.tracking_number,trackingStatus:jsonTransaction.tracking_status,eta:jsonTransaction.eta,trackingUrlProvider:jsonTransaction.tracking_url_provider,labelUrl:getLabelUrl(jsonTransaction.label_url),commercialInvoiceUrl:jsonTransaction.commercial_invoice_url,messages:(jsonTransaction.messages||[]).map(_types_APIMessage__WEBPACK_IMPORTED_MODULE_3__.rS),order:jsonTransaction.order,metadata:jsonTransaction.metadata,parcel:jsonTransaction.parcel,billing:jsonTransaction.billing,isReturn:jsonTransaction.is_return,insuranceAmount,insuranceCurrency:null===(_a=null==jsonTransaction?void 0:jsonTransaction.insurance)||void 0===_a?void 0:_a.currency,insuranceClaimId:null===(_b=null==jsonTransaction?void 0:jsonTransaction.insurance)||void 0===_b?void 0:_b.claim_id,insuranceProvider:null===(_c=null==jsonTransaction?void 0:jsonTransaction.insurance)||void 0===_c?void 0:_c.provider}}function transactionUI2FromJSON(jsonTransaction){return{objectId:jsonTransaction.object_id,rate:_types_Rate__WEBPACK_IMPORTED_MODULE_4__.rS(jsonTransaction.rate),addressTo:_types_Address__WEBPACK_IMPORTED_MODULE_2__.rS(jsonTransaction.address_to),orderNumber:jsonTransaction.order_number,wasTest:jsonTransaction.was_test,trackingUrlProvider:jsonTransaction.tracking_url_provider,objectCreated:moment__WEBPACK_IMPORTED_MODULE_1__(jsonTransaction.object_created),trackingNumber:jsonTransaction.tracking_number,trackingStatus:jsonTransaction.tracking_status,objectStatus:jsonTransaction.object_status}}function isRefundIneligible(transaction){return transaction.rate.provider===_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.i3.name&&transaction.objectCreated.isAfter(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(60,"minute"))}},"./app/pages/Shipments/ShipmentsPage/ShipmentsTable/cells/StatusCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Delivered:()=>Delivered,DeliveredReturn:()=>DeliveredReturn,InTransit:()=>InTransit,InTransitReturn:()=>InTransitReturn,PreTransit:()=>PreTransit,PreTransitReturn:()=>PreTransitReturn,default:()=>StatusCell_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),Transaction=__webpack_require__("./app/types/Transaction.ts"),DescriptionContent=function(_a){var descriptionContent=_a.descriptionContent,truncateDescription=_a.truncateDescription,variant=_a.variant;return(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:"primary",variant,sx:truncateDescription?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:void 0,"data-testid":"tracking-status-description"},{children:descriptionContent}))},DescriptionContainer=function(_a){var description=_a.description,truncateDescription=_a.truncateDescription,variant=_a.variant;return"-"!==description?(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContent,{truncateDescription,descriptionContent:description,variant}):truncateDescription?(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContent,{truncateDescription,descriptionContent:(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:" "}),variant}):(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContent,{truncateDescription,variant})},RefundMessage=function(_a){var t=_a.t;switch(_a.transactionStatus){case Transaction.x8.REFUNDED:return t("shipments-page:cells:refunded");case Transaction.x8.REFUNDPENDING:return t("shipments-page:cells:refundPending")}},StatusCell=function(_a){var isMobile=_a.isMobile,messages=_a.messages,statusDetails=_a.statusDetails,transactionStatus=_a.transactionStatus,truncateDescription=_a.truncateDescription,renderedInTable=_a.renderedInTable,t=_a.t;return transactionStatus===Transaction.x8.ERROR?(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({sx:{width:"100%"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",color:"primary",variant:"body","data-testid":"tracking-status-title"},{children:t("shipments-page:cells:error")})),!isMobile&&(truncateDescription?(null==messages?void 0:messages.length)&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContainer,{description:messages[0].text,truncateDescription,variant:renderedInTable?"caption":"body"}):null==messages?void 0:messages.map((function(m,idx){return(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContainer,{description:"".concat(m.text,"\n"),truncateDescription,variant:renderedInTable?"caption":"body"},idx)})))]})):transactionStatus===Transaction.x8.REFUNDED||transactionStatus===Transaction.x8.REFUNDPENDING?(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({sx:{width:"100%"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",color:"primary",variant:"body","data-testid":"tracking-status-title"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(RefundMessage,{t,transactionStatus})})),!isMobile&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContainer,{description:"-",truncateDescription,variant:renderedInTable?"caption":"body"})]})):statusDetails?(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({sx:{width:"100%"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",color:"primary",variant:"body","data-testid":"tracking-status-title"},{children:statusDetails.title})),!isMobile&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DescriptionContainer,{description:statusDetails.description||"-",truncateDescription,variant:renderedInTable?"caption":"body"})]})):null},util=__webpack_require__("./app/pages/Shipments/ShipmentsPage/ShipmentsTable/util.ts");const StatusCell_stories={title:"Orders V2 / Cells / StatusCell",component:StatusCell};var Template=function(args){var _a,_b,statusDetails=(0,util.i)("".concat(null===(_a=args.statusDetails)||void 0===_a?void 0:_a.title,": ").concat(null===(_b=args.statusDetails)||void 0===_b?void 0:_b.description),!1,!1);return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({className:"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft",style:{minWidth:"300px",maxWidth:"300px",minHeight:"64px",maxHeight:"64px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(StatusCell,(0,tslib_es6.Cl)({},args,{statusDetails}))}))},ReturnTemplate=function(args){var _a,_b,statusDetails=(0,util.i)("".concat(null===(_a=args.statusDetails)||void 0===_a?void 0:_a.title,": ").concat(null===(_b=args.statusDetails)||void 0===_b?void 0:_b.description),!0,!0);return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({className:"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft",style:{minWidth:"300px",maxWidth:"300px",minHeight:"64px",maxHeight:"64px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(StatusCell,(0,tslib_es6.Cl)({},args,{statusDetails}))}))},PreTransit=Template.bind({});PreTransit.args={isMobile:!1,messages:void 0,statusDetails:{title:"Pre-Transit",description:"Shipment information has been transmitted to the shipping carrier."},transactionStatus:Transaction.x8.SUCCESS,t:function(key){return key}};var PreTransitReturn=ReturnTemplate.bind({});PreTransitReturn.args={isMobile:!1,messages:void 0,statusDetails:{title:"Pre-Transit",description:"Shipment information has been transmitted to the shipping carrier."},transactionStatus:Transaction.x8.SUCCESS,t:function(key){return key}};var InTransit=Template.bind({});InTransit.args={isMobile:!1,messages:void 0,statusDetails:{title:"In-Transit",description:"The packahge is on its way to a USPS facility."},transactionStatus:Transaction.x8.SUCCESS,t:function(key){return key}};var InTransitReturn=ReturnTemplate.bind({});InTransitReturn.args={isMobile:!1,messages:void 0,statusDetails:{title:"In-Transit",description:"The packahge is on its way to a USPS facility."},transactionStatus:Transaction.x8.SUCCESS,t:function(key){return key}};var Delivered=Template.bind({});Delivered.args={isMobile:!1,messages:void 0,statusDetails:{title:"Delivered",description:"The package has been delivered to the recipient."},transactionStatus:Transaction.x8.SUCCESS,t:function(key){return key}};var DeliveredReturn=ReturnTemplate.bind({});DeliveredReturn.args={isMobile:!1,messages:void 0,statusDetails:{title:"Delivered",description:"The package has been delivered to the merchant."},transactionStatus:Transaction.x8.SUCCESS,t:function(key){return key}},PreTransit.parameters={...PreTransit.parameters,docs:{...PreTransit.parameters?.docs,source:{originalSource:"(args: StatusCellProps) => {\n  const statusDetails = trackingStatusFieldToObject(`${args.statusDetails?.title}: ${args.statusDetails?.description}`, false, false);\n  return <div className=\"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft\" style={{\n    minWidth: '300px',\n    maxWidth: '300px',\n    minHeight: '64px',\n    maxHeight: '64px'\n  }}>\n      <StatusCell {...args} statusDetails={statusDetails} />\n    </div>;\n}",...PreTransit.parameters?.docs?.source}}},PreTransitReturn.parameters={...PreTransitReturn.parameters,docs:{...PreTransitReturn.parameters?.docs,source:{originalSource:"(args: StatusCellProps) => {\n  const statusDetails = trackingStatusFieldToObject(`${args.statusDetails?.title}: ${args.statusDetails?.description}`, true, true);\n  return <div className=\"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft\" style={{\n    minWidth: '300px',\n    maxWidth: '300px',\n    minHeight: '64px',\n    maxHeight: '64px'\n  }}>\n      <StatusCell {...args} statusDetails={statusDetails} />\n    </div>;\n}",...PreTransitReturn.parameters?.docs?.source}}},InTransit.parameters={...InTransit.parameters,docs:{...InTransit.parameters?.docs,source:{originalSource:"(args: StatusCellProps) => {\n  const statusDetails = trackingStatusFieldToObject(`${args.statusDetails?.title}: ${args.statusDetails?.description}`, false, false);\n  return <div className=\"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft\" style={{\n    minWidth: '300px',\n    maxWidth: '300px',\n    minHeight: '64px',\n    maxHeight: '64px'\n  }}>\n      <StatusCell {...args} statusDetails={statusDetails} />\n    </div>;\n}",...InTransit.parameters?.docs?.source}}},InTransitReturn.parameters={...InTransitReturn.parameters,docs:{...InTransitReturn.parameters?.docs,source:{originalSource:"(args: StatusCellProps) => {\n  const statusDetails = trackingStatusFieldToObject(`${args.statusDetails?.title}: ${args.statusDetails?.description}`, true, true);\n  return <div className=\"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft\" style={{\n    minWidth: '300px',\n    maxWidth: '300px',\n    minHeight: '64px',\n    maxHeight: '64px'\n  }}>\n      <StatusCell {...args} statusDetails={statusDetails} />\n    </div>;\n}",...InTransitReturn.parameters?.docs?.source}}},Delivered.parameters={...Delivered.parameters,docs:{...Delivered.parameters?.docs,source:{originalSource:"(args: StatusCellProps) => {\n  const statusDetails = trackingStatusFieldToObject(`${args.statusDetails?.title}: ${args.statusDetails?.description}`, false, false);\n  return <div className=\"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft\" style={{\n    minWidth: '300px',\n    maxWidth: '300px',\n    minHeight: '64px',\n    maxHeight: '64px'\n  }}>\n      <StatusCell {...args} statusDetails={statusDetails} />\n    </div>;\n}",...Delivered.parameters?.docs?.source}}},DeliveredReturn.parameters={...DeliveredReturn.parameters,docs:{...DeliveredReturn.parameters?.docs,source:{originalSource:"(args: StatusCellProps) => {\n  const statusDetails = trackingStatusFieldToObject(`${args.statusDetails?.title}: ${args.statusDetails?.description}`, true, true);\n  return <div className=\"MuiDataGrid-cell--withRenderer MuiDataGrid-cell MuiDataGrid-cell--textLeft\" style={{\n    minWidth: '300px',\n    maxWidth: '300px',\n    minHeight: '64px',\n    maxHeight: '64px'\n  }}>\n      <StatusCell {...args} statusDetails={statusDetails} />\n    </div>;\n}",...DeliveredReturn.parameters?.docs?.source}}}}}]);