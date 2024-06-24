"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5419],{"./app/components/Tag/TestTag/TestTag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,d:()=>TestTagType});var TestTagType,tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/redux/es/redux.js"),_styles_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/styles/constants.ts"),_utils_translate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/utils/translate.ts"),Container=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)("span")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.ue)(["\n  text-transform: capitalize;\n  height: 16px;\n  line-height: 10px;\n  width: auto;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: ",";\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 70px;\n"],["\n  text-transform: capitalize;\n  height: 16px;\n  line-height: 10px;\n  width: auto;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: ",";\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 70px;\n"])),_styles_constants__WEBPACK_IMPORTED_MODULE_2__.Wy.medium,_styles_constants__WEBPACK_IMPORTED_MODULE_2__.Tj.secondary,_styles_constants__WEBPACK_IMPORTED_MODULE_2__.Tj.gray25);!function(TestTagType){TestTagType.Rate="Rate",TestTagType.Account="Mode"}(TestTagType||(TestTagType={}));const __WEBPACK_DEFAULT_EXPORT__=(0,redux__WEBPACK_IMPORTED_MODULE_6__.Zz)(react__WEBPACK_IMPORTED_MODULE_1__.memo,(0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__.Tl)("translations"))((function(props){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(Container,{children:props.t("test",{type:props.type})})}));var templateObject_1},"./app/tests/mocks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$8:()=>addresses.$8,uY:()=>mockRate,ch:()=>addresses.ch});var addresses=__webpack_require__("./app/tests/mocks/addresses.ts"),tslib_es6=(__webpack_require__("./app/tests/mocks/APIMessage.ts"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),moment=__webpack_require__("./node_modules/moment/moment.js"),Parcel=(__webpack_require__("./node_modules/faker/index.js"),__webpack_require__("./app/types/Parcel.ts")),distance=__webpack_require__("./app/constants/distance.ts"),weight=__webpack_require__("./app/constants/weight.ts"),mockParcelTemplate={objectId:"1",carrierTemplate:null,isDefault:!1,name:"test user template",distanceUnit:distance.k.CM,height:4,length:5,width:6,weightUnit:weight.VV.G,weight:1.5},mockCarrierParcelTemplate={name:"Carrier template",distanceUnit:distance.k.IN,height:1,length:2,width:3,token:"test_token",provider:"test_provider",isVariableDimensions:!1},mockUspsCarrierTemplate={height:0,width:0,length:0,distanceUnit:distance.k.IN,token:"USPS_SoftPack",name:"Soft Pack",provider:"usps",isVariableDimensions:!0},mockParcel=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockParcelTemplate),{length:1,width:2,height:0,name:"Soft Pack",carrierTemplate:mockUspsCarrierTemplate}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockCarrierParcelTemplate),{isVariableDimensions:!0}),{height:"4",length:"5",width:"6",distanceUnit:"cm",weight:"1.50",weightUnit:"g",userParcelTemplate:null,carrierParcelTemplate:null}),mockJSONParcel=(0,Parcel.U2)(mockParcel),OrdersBatch=__webpack_require__("./app/types/OrdersBatch.ts"),SignatureConfirmation=__webpack_require__("./app/types/SignatureConfirmation.ts"),mockJSONBatchEntry={id:14544,object_created:"2019-09-13T21:22:52.885Z",object_updated:"2019-09-13T21:24:30.551Z",object_status:"COMPLETE_SHIPMENT",is_return:!1,order_object_id:"a5f51afe62c9472487b80e4cab7d12b2",use_imported_weight:!1,parcel:mockJSONParcel,shipment_object_id:"87e02a31d5c349deb9a3821e81175951",transaction_object_id:null,shipment_date:null,customs_declaration:void 0,line_items:[],partial_fulfillment_rank:0,rules:[],errors:[],extras:{signature_confirmation:SignatureConfirmation.A.INDIRECT,is_return_requested:!1,insurance:{amount:"1000.00",currency:"4",content:"Garments",use_imported_amount:!1},is_bypass_address_validation:!1,alcohol:null,is_bypass_customs:!1,dry_ice:{contains_dry_ice:!1,weight:"",weight_unit_id:7},packing_slip_text:"cant believe its not"}},mockBatchEntry={id:14544,objectCreated:moment("2019-09-13T21:22:52.885Z"),objectUpdated:moment("2019-09-13T21:24:30.551Z"),objectStatus:OrdersBatch.DO.COMPLETE_SHIPMENT,isReturn:!1,orderObjectId:"a5f51afe62c9472487b80e4cab7d12b2",useImportedWeight:!1,parcel:mockParcel,shipmentObjectId:"87e02a31d5c349deb9a3821e81175951",transactionObjectId:null,shipmentDate:null,customsDeclaration:void 0,lineItems:[],customsItems:[],addressFrom:addresses.$U,addressTo:addresses.ch,addressReturn:addresses.x,partialFulfillmentRank:0,errors:[],rules:[],extras:{signatureConfirmation:null,isReturnRequested:!1,insurance:{amount:"1000.00",currency:{iso:"USD",symbol:"$"},useImportedAmount:!1},isBypassAddressValidation:!1,alcohol:null,isBypassCustoms:!1,dryIce:{containsDryIce:!1,weight:"",weightUnitId:7},packingSlipText:"",hazmat:null}},carriers=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockJSONBatchEntry),{id:1337,order_object_id:"ggf51afe62c9472487b80e4cab7d12b2",shipment_object_id:"gge02a31d5c349deb9a3821e81175951",partial_fulfillment_rank:1}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockJSONBatchEntry),{id:1338,order_object_id:"ggf51afe62c9472487b80e4cab7d12b2",shipment_object_id:"gge02a31d5c349deb9a3821e81175952",partial_fulfillment_rank:2}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockBatchEntry),{id:1337,orderObjectId:"ggf51afe62c9472487b80e4cab7d12b2",shipmentObjectId:"gge02a31d5c349deb9a3821e81175951",partialFulfillmentRank:1}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockBatchEntry),{id:1338,orderObjectId:"ggf51afe62c9472487b80e4cab7d12b2",shipmentObjectId:"gge02a31d5c349deb9a3821e81175952",partialFulfillmentRank:2}),__webpack_require__("./app/constants/carriers.ts")),mockUPSCarrierAccount={carrier:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},carriers.$5),{isManifestable:!0}),accountId:"test_account_id"},mockUSPSCarrierAccount={carrier:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},carriers.We),{isManifestable:!0,isManifestableDateRange:!0}),accountId:"test_account_id2"},CarrierAccountRegStatus=(carriers.y6,carriers.jr,carriers.pV,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockUPSCarrierAccount),{objectId:"95011f825f314edea9ce247ea6e8ecf7"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockUSPSCarrierAccount),{objectId:"74d15383268c4476a85e4677b2b679df"}),__webpack_require__("./app/types/CarrierAccountRegStatus.ts")),options=(CarrierAccountRegStatus.n.PENDING_INFO,CarrierAccountRegStatus.n.COMPLETE,CarrierAccountRegStatus.n.ERROR,__webpack_require__("./app/components/Select/options.ts")),customsDeclaration=__webpack_require__("./app/constants/customsDeclaration.ts"),countries=(customsDeclaration.i2.NOT_REQUIRED,options.Ay.customsDeclaration.contentsTypeOptionsMap[customsDeclaration.fI.MERCHANDISE],options.Ay.customsDeclaration.eelPfcOptionsMap[customsDeclaration.aU.NOEEI3037A],options.Ay.customsDeclaration.nonDeliveryOptionsMap[customsDeclaration.kV.RETURN],options.Ay.customsDeclaration.nonDeliveryOptionsMap[customsDeclaration.uF.DDU],options.Ay.customsDeclaration.b13aFilingOptionsMap[customsDeclaration.i2.NOT_REQUIRED],options.Ay.customsDeclaration.taxIdTypeOptionsMap[""],__webpack_require__("./app/constants/countries.ts")),currency=__webpack_require__("./app/constants/currency.ts"),Invoice=(weight.VV.LB,countries.Xr.US,currency.q.USD,weight.VV.LB,weight.VV.LB,countries.Xr.CA,currency.q.CAD,weight.VV.LB,options.Ay.commonWeightOptions.lb,options.Ay.commonCurrencyOptions.USD,countries.Xr.US,options.Ay.commonWeightOptions.lb,options.Ay.commonWeightOptions.lb,options.Ay.commonCurrencyOptions.CAD,countries.Xr.CA,options.Ay.commonWeightOptions.lb,__webpack_require__("./app/types/Invoice.ts")),node_modules_uuid=__webpack_require__("./node_modules/uuid/index.js"),mockInvoiceBase=(moment("2020-01-02T03:04:05"),moment("2020-06-07T08:09:10"),Invoice.Sx.PAID,moment("2020-01-02T03:04:05"),currency.q.GBP,moment("2020-06-07T08:09:10"),Invoice.Sx.PAID,currency.q.GBP.iso,Invoice.Sx.PAID,moment("2020-01-02T03:04:05"),currency.q.GBP,Invoice.Sx.OPEN,{objectId:(0,node_modules_uuid.v4)(),objectCreated:moment(),invoiceNumber:(0,node_modules_uuid.v4)(),totalCurrency:currency.q.GBP,totalAmount:"123.45",paid:null,status:Invoice.Sx.OPEN,errorType:null}),Promo=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.WRITTEN_OFF}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.PAYMENT_PENDING}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE_CONVERSION}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.PAYMENT_INITIATED}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE,errorType:"payment_declined"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.PAYMENT_FAILED,errorType:"payment_declined"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE,errorType:"unsupported_currency"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE,errorType:"temporary_error"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE,errorType:"definitely_not_a_proper_enum"}),__webpack_require__("./app/tests/mocks/lineItem.ts"),__webpack_require__("./app/tests/mocks/order.ts"),__webpack_require__("./app/types/Promo.ts")),TestTag=(moment("20200101"),moment("20400101"),Promo.el.PROCESSING,Promo.CT.EXTENDED_TRIAL_MONTHS,__webpack_require__("./app/assets/providers/200/usps.png"),__webpack_require__("./app/assets/providers/75/usps.png"),__webpack_require__("./app/components/Tag/TestTag/TestTag.tsx")),Rate=__webpack_require__("./app/types/Rate.ts"),mockRate={objectCreated:moment("2018-07-02T22:43:07.010Z"),objectId:"e262077b447f4307ae4f220e57fd1aac",objectOwner:"malcolm_fdv@shippo.com",shipment:"9680673b91014b39a07c52956c7c6003",attributes:[],amount:"62.46",currency:"USD",amountLocal:"62.46",currencyLocal:"USD",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air Early A.M.®",token:"ups_next_day_air_early_am",terms:"terms"},estimatedDays:1,arrivesBy:"08:30:00",insurance:!0,durationTerms:"Next business day delivery by 8:30 a.m., 9:00 a.m., or 9:30 a.m. ",messages:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",test:!1,zone:null},uspsPriorityMailRate=(moment(),Rate.jf.CHEAPEST,moment("2023-01-13T21:27:51.499Z"),{rate:{provider:"USPS",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:""}},amount:2,total:46,currency:"USD",totalInsuranceAmount:0,shipmentObjectId:"53480673b91014b39a07c52956c7c63"});(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},uspsPriorityMailRate),{totalInsuranceAmount:10}),TestTag.d.Account,TestTag.d.Account,TestTag.d.Account;var Address=__webpack_require__("./app/types/Address.ts"),Shipment=(Address.VD.RESIDENTIAL,Address.VD.COMMERCIAL,Address.VD.UNKNOWN,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.RESIDENTIAL,__webpack_require__("./app/types/Shipment.ts")),mockShipment={objectId:"123",messages:[],rates:[],parcels:[],status:Shipment.PH.SUCCESS,shipmentDate:moment()},LabelFormat=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockShipment),{objectId:"b6a2224eb96642c6ae2728f714b8c26a",parcels:[],messages:[],status:Shipment.PH.PROCESSING,shipmentDate:moment(),rates:[{objectCreated:moment(),objectId:"99b2256a3d514c1fa1fbb079282b7d8b",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[],amount:"24.70",currency:"USD",amountLocal:"24.70",currencyLocal:"USD",provider:"USPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Priority Mail Express",token:"usps_priority_express",terms:""},estimatedDays:2,arrivesBy:"",durationTerms:"Overnight delivery to most U.S. locations.",messages:[],carrierAccount:"74d15383268c4476a85e4677b2b679df",test:!1,zone:"1",insurance:!1},{objectCreated:moment(),objectId:"264735dd6fc54839ac01241c37d7b874",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[],amount:"7.25",currency:"USD",amountLocal:"7.25",currencyLocal:"USD",provider:"USPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Priority Mail",token:"usps_priority",terms:""},estimatedDays:2,arrivesBy:"",durationTerms:"Delivery within 1, 2, or 3 days based on where your package started and where it’s being sent.",messages:[],carrierAccount:"74d15383268c4476a85e4677b2b679df",test:!1,zone:"1",insurance:!1},{objectCreated:moment(),objectId:"6064dd2dc4134ada92673665cfb9a839",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[Rate.jf.BESTVALUE,Rate.jf.CHEAPEST],amount:"7.10",currency:"USD",amountLocal:"7.10",currencyLocal:"USD",provider:"USPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Parcel Select",token:"usps_parcel_select",terms:""},estimatedDays:7,arrivesBy:"",durationTerms:"Delivery in 2 to 8 days.",messages:[],carrierAccount:"74d15383268c4476a85e4677b2b679df",test:!1,zone:"1",insurance:!1},{objectCreated:moment(),objectId:"59aa1dfda49044b6bab6ad82087d0377",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[],amount:"8.97",currency:"USD",amountLocal:"8.97",currencyLocal:"USD",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Ground",token:"ups_ground",terms:""},estimatedDays:1,arrivesBy:"",durationTerms:"Delivery times vary. Delivered usually in 1-5 business days.",messages:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",test:!1,zone:null,insurance:!1},{objectCreated:moment(),objectId:"b7630e83c3e64c84931faefcf12c2dd7",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[],amount:"29.70",currency:"USD",amountLocal:"29.70",currencyLocal:"USD",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air Saver®",token:"ups_next_day_air_saver",terms:""},estimatedDays:1,arrivesBy:"15:00:00",durationTerms:"Next business day delivery by 3:00 or 4:30 p.m. for commercial destinations and by end of day for residentail destinations.",messages:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",test:!1,zone:null,insurance:!1},{objectCreated:moment(),objectId:"7bb73d135047499a9884cb30cc561316",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[],amount:"30.74",currency:"USD",amountLocal:"30.74",currencyLocal:"USD",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air®",token:"ups_next_day_air",terms:""},estimatedDays:1,arrivesBy:"10:30:00",durationTerms:"Next business day delivery by 10:30 a.m., 12:00 noon, or end of day, depending on destination.",messages:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",test:!1,zone:null,insurance:!1},{objectCreated:moment(),objectId:"bcb3eedaf52f44b492b79e5abdce1952",objectOwner:"malcolm_fdv@shippo.com",shipment:"b6a2224eb96642c6ae2728f714b8c26a",attributes:[Rate.jf.FASTEST],amount:"63.29",currency:"USD",amountLocal:"63.29",currencyLocal:"USD",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air Early A.M.®",token:"ups_next_day_air_early_am",terms:""},estimatedDays:1,arrivesBy:"08:30:00",durationTerms:"Next business day delivery by 8:30 a.m., 9:00 a.m., or 9:30 a.m. ",messages:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",test:!1,zone:null,insurance:!1}]}),__webpack_require__("./app/tests/mocks/transaction.ts"),__webpack_require__("./app/types/LabelFormat.ts")),Order=(countries.Xr.US,countries.Xr.US,weight.VV.LB,distance.k.IN,currency.q.USD,LabelFormat.L4,moment("2018-06-12T18:14:36.031Z"),moment("2028-06-12T18:14:36.031Z"),Promo.el.PENDING,moment(),new Date("2020-12-16T22:01:45.945Z"),new Date("2024-01-31T15:56:08.831Z"),new Date("2020-12-16T22:01:45.945Z"),new Date("2024-01-31T15:56:08.831Z"),distance.k.IN,weight.VV.LB,distance.k.IN,weight.VV.LB,LabelFormat.Ay.PDF,moment("2021-09-20T18:58:42.746Z"),moment("2021-10-01T07:59:59.000Z"),Promo.el.PENDING,moment("2020-12-10T06:00:00.000Z"),__webpack_require__("./app/types/Order.ts")),Track=(Order.Re.UNKNOWN,moment(),new Date,new Date,new Date,new Date,new Date,new Date,distance.k.IN,distance.k.IN,weight.VV.LB,distance.k.IN,moment(),moment(),OrdersBatch.DO.COMPLETE_SHIPMENT,distance.k.IN,distance.k.IN,weight.VV.LB,distance.k.IN,new Date,new Date,new Date,new Date,new Date,new Date,Order.Re.UNKNOWN,moment(),new Date,new Date,new Date,new Date,new Date,new Date,distance.k.IN,weight.VV.LB,weight.VV.LB,moment(),moment(),OrdersBatch.DO.COMPLETE_SHIPMENT,distance.k.IN,weight.VV.LB,new Date,new Date,new Date,new Date,new Date,new Date,Order.Re.UNKNOWN,moment(),new Date,new Date,new Date,new Date,new Date,new Date,distance.k.IN,distance.k.IN,weight.VV.LB,distance.k.IN,weight.VV.LB,moment(),moment(),OrdersBatch.DO.COMPLETE_SHIPMENT,distance.k.IN,distance.k.IN,weight.VV.LB,distance.k.IN,new Date,new Date,new Date,new Date,new Date,new Date,__webpack_require__("./app/types/Track.ts")),Transaction=__webpack_require__("./app/types/Transaction.ts"),Store=(moment("2022-05-16T07:44:18.295Z"),Order.Re.SHIPPED,new Date,new Date,Track.S.UNKNOWN,Transaction.x8.SUCCESS,Track.S.UNKNOWN,Transaction.x8.SUCCESS,moment().utc().toISOString(),moment().utc().toISOString(),Track.S.UNKNOWN,Transaction.x8.SUCCESS,addresses.ch,addresses.x,__webpack_require__("./app/types/Store.ts"));Store.F8.Shopify,Store.Hu.Connected,moment("2024-03-04T01:06:08.650Z"),moment("2023-11-17T20:24:11.194Z")},"./app/types/CarrierAccountRegStatus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var RegStatus;function fromJSON(jsonRegStatus){return{carrierAccount:jsonRegStatus.carrier_account,status:RegStatus[jsonRegStatus.status]||RegStatus.UNDEFINED}}__webpack_require__.d(__webpack_exports__,{n:()=>RegStatus,r:()=>fromJSON}),function(RegStatus){RegStatus.PENDING_INFO="PENDING_INFO",RegStatus.PROCESSING="PROCESSING",RegStatus.COMPLETE="COMPLETE",RegStatus.OPTED_OUT="OPTED_OUT",RegStatus.ERROR="ERROR",RegStatus.PENDING_TERMS="PENDING_TERMS",RegStatus.UNDEFINED="UNDEFINED"}(RegStatus||(RegStatus={}))},"./app/types/Invoice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sx:()=>InvoiceStatus,rS:()=>fromJSON});var InvoiceStatus,_constants_currency__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/currency.ts"),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/moment/moment.js");function fromJSON(jsonInvoice){return{objectId:jsonInvoice.object_id,objectCreated:moment__WEBPACK_IMPORTED_MODULE_1__(jsonInvoice.object_created),invoiceNumber:jsonInvoice.number||null,totalCurrency:jsonInvoice.total_currency?_constants_currency__WEBPACK_IMPORTED_MODULE_0__.q[jsonInvoice.total_currency]:null,totalAmount:jsonInvoice.total_amount||null,paid:jsonInvoice.paid?moment__WEBPACK_IMPORTED_MODULE_1__(jsonInvoice.paid):null,status:jsonInvoice.status,errorType:jsonInvoice.error_type||null}}!function(InvoiceStatus){InvoiceStatus.OPEN="OPEN",InvoiceStatus.READY_FOR_CHARGE="READY_FOR_CHARGE",InvoiceStatus.PAYMENT_INITIATED="PAYMENT_INITIATED",InvoiceStatus.PAID="PAID",InvoiceStatus.PAYMENT_FAILED="PAYMENT_FAILED",InvoiceStatus.WRITTEN_OFF="WRITE_OFF",InvoiceStatus.READY_FOR_CHARGE_CONVERSION="READY_FOR_CHARGE_CONVERSION",InvoiceStatus.PAYMENT_PENDING="PAYMENT_PENDING"}(InvoiceStatus||(InvoiceStatus={}))},"./app/types/Shipment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PH:()=>ShipmentStatus,or:()=>isShipmentCompleted,rS:()=>fromJSON});var ShipmentStatus,_constants_currency__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/currency.ts"),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/moment/moment.js"),_types_APIMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/types/APIMessage.ts"),_types_OrdersBatch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/OrdersBatch.ts"),_types_Rate__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/types/Rate.ts");function fromJSON(jsonShipment){return{objectId:jsonShipment.object_id,rates:jsonShipment.rates.map(_types_Rate__WEBPACK_IMPORTED_MODULE_4__.rS),parcels:jsonShipment.parcels.map(_types_OrdersBatch__WEBPACK_IMPORTED_MODULE_3__.Sx),messages:jsonShipment.messages.map(_types_APIMessage__WEBPACK_IMPORTED_MODULE_2__.rS),status:ShipmentStatus[jsonShipment.status],shipmentDate:moment__WEBPACK_IMPORTED_MODULE_1__(jsonShipment.shipment_date),extra:extraFromJSON(jsonShipment.extra)}}function extraFromJSON(jsonExtra){if(jsonExtra){var extra={signatureConfirmation:jsonExtra.signature_confirmation};return jsonExtra.insurance&&(extra.insurance={amount:jsonExtra.insurance.amount,currency:_constants_currency__WEBPACK_IMPORTED_MODULE_0__.q[jsonExtra.insurance.currency]}),extra}}function isShipmentCompleted(status){return new Set([ShipmentStatus.COMPLETE,ShipmentStatus.ERROR,ShipmentStatus.SUCCESS]).has(status)}!function(ShipmentStatus){ShipmentStatus.PENDING="PENDING",ShipmentStatus.PROCESSING="PROCESSING",ShipmentStatus.COMPLETE="COMPLETE",ShipmentStatus.ERROR="ERROR",ShipmentStatus.SUCCESS="SUCCESS"}(ShipmentStatus||(ShipmentStatus={}))}}]);