"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2357],{"./app/components/Tag/TestTag/TestTag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,d:()=>TestTagType});var TestTagType,tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/redux/es/redux.js"),_styles_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/styles/constants.ts"),_utils_translate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/utils/translate.ts"),Container=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)("span")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.ue)(["\n  text-transform: capitalize;\n  height: 16px;\n  line-height: 10px;\n  width: auto;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: ",";\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 70px;\n"],["\n  text-transform: capitalize;\n  height: 16px;\n  line-height: 10px;\n  width: auto;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: ",";\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  padding: 0px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 70px;\n"])),_styles_constants__WEBPACK_IMPORTED_MODULE_2__.Wy.medium,_styles_constants__WEBPACK_IMPORTED_MODULE_2__.Tj.secondary,_styles_constants__WEBPACK_IMPORTED_MODULE_2__.Tj.gray25);!function(TestTagType){TestTagType.Account="Mode",TestTagType.Rate="Rate"}(TestTagType||(TestTagType={}));const __WEBPACK_DEFAULT_EXPORT__=(0,redux__WEBPACK_IMPORTED_MODULE_6__.Zz)(react__WEBPACK_IMPORTED_MODULE_0__.memo,(0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__.Tl)("translations"))((function(props){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(Container,{children:props.t("test",{type:props.type})})}));var templateObject_1},"./app/tests/mocks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$8:()=>addresses.$8,uY:()=>mockRate,ch:()=>addresses.ch});__webpack_require__("./app/tests/mocks/APIMessage.ts");var addresses=__webpack_require__("./app/tests/mocks/addresses.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),moment=__webpack_require__("./node_modules/moment/moment.js"),OrdersBatch=__webpack_require__("./app/types/OrdersBatch.ts"),SignatureConfirmation=__webpack_require__("./app/types/SignatureConfirmation.ts"),Parcel=(__webpack_require__("./node_modules/faker/index.js"),__webpack_require__("./app/types/Parcel.ts")),distance=__webpack_require__("./app/constants/distance.ts"),weight=__webpack_require__("./app/constants/weight.ts"),mockParcelTemplate={carrierTemplate:null,distanceUnit:distance.k.CM,height:4,isDefault:!1,length:5,name:"test user template",objectId:"1",weight:1.5,weightUnit:weight.VV.G,width:6},mockCarrierParcelTemplate={distanceUnit:distance.k.IN,height:1,isVariableDimensions:!1,length:2,name:"Carrier template",provider:"test_provider",token:"test_token",width:3},mockUspsCarrierTemplate={distanceUnit:distance.k.IN,height:0,isVariableDimensions:!0,length:0,name:"Soft Pack",provider:"usps",token:"USPS_SoftPack",width:0},mockParcel=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockParcelTemplate),{carrierTemplate:mockUspsCarrierTemplate,height:0,length:1,name:"Soft Pack",width:2}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockCarrierParcelTemplate),{isVariableDimensions:!0}),{carrierParcelTemplate:null,distanceUnit:"cm",height:"4",length:"5",userParcelTemplate:null,weight:"1.50",weightUnit:"g",width:"6"}),mockJSONParcel=(0,Parcel.U2)(mockParcel),mockJSONBatchEntry={customs_declaration:void 0,errors:[],extras:{alcohol:null,dry_ice:{contains_dry_ice:!1,weight:"",weight_unit_id:7},insurance:{amount:"1000.00",content:"Garments",currency:"4",use_imported_amount:!1},is_bypass_address_validation:!1,is_bypass_customs:!1,is_return_requested:!1,packing_slip_text:"cant believe its not",signature_confirmation:SignatureConfirmation.A.INDIRECT},id:14544,is_return:!1,line_items:[],object_created:"2019-09-13T21:22:52.885Z",object_status:"COMPLETE_SHIPMENT",object_updated:"2019-09-13T21:24:30.551Z",order_object_id:"a5f51afe62c9472487b80e4cab7d12b2",parcel:mockJSONParcel,partial_fulfillment_rank:0,rules:[],shipment_date:null,shipment_object_id:"87e02a31d5c349deb9a3821e81175951",transaction_object_id:null,use_imported_weight:!1},mockBatchEntry={addressFrom:addresses.$U,addressReturn:addresses.x,addressTo:addresses.ch,customsDeclaration:void 0,customsItems:[],errors:[],extras:{alcohol:null,dryIce:{containsDryIce:!1,weight:"",weightUnitId:7},hazmat:null,insurance:{amount:"1000.00",currency:{iso:"USD",symbol:"$"},useImportedAmount:!1},isBypassAddressValidation:!1,isBypassCustoms:!1,isReturnRequested:!1,packingSlipText:"",signatureConfirmation:null},id:14544,isReturn:!1,lineItems:[],objectCreated:moment("2019-09-13T21:22:52.885Z"),objectStatus:OrdersBatch.DO.COMPLETE_SHIPMENT,objectUpdated:moment("2019-09-13T21:24:30.551Z"),orderObjectId:"a5f51afe62c9472487b80e4cab7d12b2",parcel:mockParcel,partialFulfillmentRank:0,rules:[],shipmentDate:null,shipmentObjectId:"87e02a31d5c349deb9a3821e81175951",transactionObjectId:null,useImportedWeight:!1},carriers=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockJSONBatchEntry),{id:1337,order_object_id:"ggf51afe62c9472487b80e4cab7d12b2",partial_fulfillment_rank:1,shipment_object_id:"gge02a31d5c349deb9a3821e81175951"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockJSONBatchEntry),{id:1338,order_object_id:"ggf51afe62c9472487b80e4cab7d12b2",partial_fulfillment_rank:2,shipment_object_id:"gge02a31d5c349deb9a3821e81175952"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockBatchEntry),{id:1337,orderObjectId:"ggf51afe62c9472487b80e4cab7d12b2",partialFulfillmentRank:1,shipmentObjectId:"gge02a31d5c349deb9a3821e81175951"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockBatchEntry),{id:1338,orderObjectId:"ggf51afe62c9472487b80e4cab7d12b2",partialFulfillmentRank:2,shipmentObjectId:"gge02a31d5c349deb9a3821e81175952"}),__webpack_require__("./app/constants/carriers.ts")),mockUPSCarrierAccount={accountId:"test_account_id",carrier:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},carriers.$5),{isManifestable:!0})},mockUSPSCarrierAccount={accountId:"test_account_id2",carrier:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},carriers.We),{isManifestable:!0,isManifestableDateRange:!0})},CarrierAccountRegStatus=(carriers.y6,carriers.jr,carriers.pV,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockUPSCarrierAccount),{objectId:"95011f825f314edea9ce247ea6e8ecf7"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockUSPSCarrierAccount),{objectId:"74d15383268c4476a85e4677b2b679df"}),__webpack_require__("./app/types/CarrierAccountRegStatus.ts")),options=(CarrierAccountRegStatus.n.PENDING_INFO,CarrierAccountRegStatus.n.COMPLETE,CarrierAccountRegStatus.n.ERROR,__webpack_require__("./app/components/Select/options.ts")),customsDeclaration=__webpack_require__("./app/constants/customsDeclaration.ts"),countries=(customsDeclaration.i2.NOT_REQUIRED,options.Ay.customsDeclaration.b13aFilingOptionsMap[customsDeclaration.i2.NOT_REQUIRED],options.Ay.customsDeclaration.contentsTypeOptionsMap[customsDeclaration.fI.MERCHANDISE],options.Ay.customsDeclaration.eelPfcOptionsMap[customsDeclaration.aU.NOEEI3037A],options.Ay.customsDeclaration.nonDeliveryOptionsMap[customsDeclaration.uF.DDU],options.Ay.customsDeclaration.nonDeliveryOptionsMap[customsDeclaration.kV.RETURN],options.Ay.customsDeclaration.taxIdTypeOptionsMap[""],__webpack_require__("./app/constants/countries.ts")),currency=__webpack_require__("./app/constants/currency.ts"),node_modules_uuid=(weight.VV.LB,countries.Xr.US,weight.VV.LB,currency.q.USD,weight.VV.LB,countries.Xr.CA,weight.VV.LB,currency.q.CAD,options.Ay.commonWeightOptions.lb,countries.Xr.US,options.Ay.commonWeightOptions.lb,options.Ay.commonCurrencyOptions.USD,options.Ay.commonWeightOptions.lb,countries.Xr.CA,options.Ay.commonWeightOptions.lb,options.Ay.commonCurrencyOptions.CAD,__webpack_require__("./node_modules/uuid/index.js")),Invoice=__webpack_require__("./app/types/Invoice.ts"),mockInvoiceBase=(moment("2020-01-02T03:04:05"),moment("2020-06-07T08:09:10"),Invoice.Sx.PAID,moment("2020-01-02T03:04:05"),moment("2020-06-07T08:09:10"),Invoice.Sx.OPEN,currency.q.USD,moment("2020-01-02T03:04:05"),moment("2020-06-07T08:09:10"),Invoice.Sx.PAID,currency.q.GBP,Invoice.Sx.PAID,currency.q.GBP.iso,moment("2020-01-02T03:04:05"),Invoice.Sx.OPEN,currency.q.GBP,{errorType:null,invoiceNumber:(0,node_modules_uuid.v4)(),netTotalChargeAmount:"123.45",objectCreated:moment(),objectId:(0,node_modules_uuid.v4)(),paid:null,status:Invoice.Sx.OPEN,totalAdjustmentAmount:null,totalAmount:"123.45",totalCurrency:currency.q.GBP}),Promo=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.WRITTEN_OFF}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.PAYMENT_PENDING}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE_CONVERSION}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.READY_FOR_CHARGE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{status:Invoice.Sx.PAYMENT_INITIATED}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{errorType:"payment_declined",status:Invoice.Sx.READY_FOR_CHARGE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{errorType:"payment_declined",status:Invoice.Sx.PAYMENT_FAILED}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{errorType:"unsupported_currency",status:Invoice.Sx.READY_FOR_CHARGE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{errorType:"temporary_error",status:Invoice.Sx.READY_FOR_CHARGE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockInvoiceBase),{errorType:"definitely_not_a_proper_enum",status:Invoice.Sx.READY_FOR_CHARGE}),__webpack_require__("./app/tests/mocks/lineItem.ts"),__webpack_require__("./app/tests/mocks/order.ts"),__webpack_require__("./app/types/Promo.ts")),TestTag=(moment("20400101"),moment("20200101"),Promo.el.PROCESSING,Promo.CT.EXTENDED_TRIAL_MONTHS,__webpack_require__("./app/assets/providers/75/usps.png"),__webpack_require__("./app/assets/providers/200/usps.png"),__webpack_require__("./app/components/Tag/TestTag/TestTag.tsx")),Rate=__webpack_require__("./app/types/Rate.ts"),mockRate={amount:"62.46",amountLocal:"62.46",arrivesBy:"08:30:00",attributes:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",currency:"USD",currencyLocal:"USD",durationTerms:"Next business day delivery by 8:30 a.m., 9:00 a.m., or 9:30 a.m. ",estimatedDays:1,insurance:!0,messages:[],objectCreated:moment("2018-07-02T22:43:07.010Z"),objectId:"e262077b447f4307ae4f220e57fd1aac",objectOwner:"malcolm_fdv@shippo.com",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air Early A.M.®",terms:"terms",token:"ups_next_day_air_early_am"},shipment:"9680673b91014b39a07c52956c7c6003",test:!1,zone:null},Address=(Rate.jf.CHEAPEST,moment(),moment("2023-01-13T21:27:51.499Z"),TestTag.d.Account,TestTag.d.Account,TestTag.d.Account,__webpack_require__("./app/types/Address.ts")),Shipment=(Address.VD.RESIDENTIAL,Address.VD.COMMERCIAL,Address.VD.UNKNOWN,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.COMMERCIAL,Address.VD.RESIDENTIAL,__webpack_require__("./app/types/Shipment.ts")),mockShipment={messages:[],objectId:"123",parcels:[],rates:[],shipmentDate:moment(),status:Shipment.P.SUCCESS},LabelFormat=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockShipment),{messages:[],objectId:"b6a2224eb96642c6ae2728f714b8c26a",parcels:[],rates:[{amount:"24.70",amountLocal:"24.70",arrivesBy:"",attributes:[],carrierAccount:"74d15383268c4476a85e4677b2b679df",currency:"USD",currencyLocal:"USD",durationTerms:"Overnight delivery to most U.S. locations.",estimatedDays:2,insurance:!1,messages:[],objectCreated:moment(),objectId:"99b2256a3d514c1fa1fbb079282b7d8b",objectOwner:"malcolm_fdv@shippo.com",provider:"USPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Priority Mail Express",terms:"",token:"usps_priority_express"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:"1"},{amount:"7.25",amountLocal:"7.25",arrivesBy:"",attributes:[],carrierAccount:"74d15383268c4476a85e4677b2b679df",currency:"USD",currencyLocal:"USD",durationTerms:"Delivery within 1, 2, or 3 days based on where your package started and where it’s being sent.",estimatedDays:2,insurance:!1,messages:[],objectCreated:moment(),objectId:"264735dd6fc54839ac01241c37d7b874",objectOwner:"malcolm_fdv@shippo.com",provider:"USPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Priority Mail",terms:"",token:"usps_priority"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:"1"},{amount:"7.10",amountLocal:"7.10",arrivesBy:"",attributes:[Rate.jf.BESTVALUE,Rate.jf.CHEAPEST],carrierAccount:"74d15383268c4476a85e4677b2b679df",currency:"USD",currencyLocal:"USD",durationTerms:"Delivery in 2 to 8 days.",estimatedDays:7,insurance:!1,messages:[],objectCreated:moment(),objectId:"6064dd2dc4134ada92673665cfb9a839",objectOwner:"malcolm_fdv@shippo.com",provider:"USPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Parcel Select",terms:"",token:"usps_parcel_select"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:"1"},{amount:"8.97",amountLocal:"8.97",arrivesBy:"",attributes:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",currency:"USD",currencyLocal:"USD",durationTerms:"Delivery times vary. Delivered usually in 1-5 business days.",estimatedDays:1,insurance:!1,messages:[],objectCreated:moment(),objectId:"59aa1dfda49044b6bab6ad82087d0377",objectOwner:"malcolm_fdv@shippo.com",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Ground",terms:"",token:"ups_ground"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:null},{amount:"29.70",amountLocal:"29.70",arrivesBy:"15:00:00",attributes:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",currency:"USD",currencyLocal:"USD",durationTerms:"Next business day delivery by 3:00 or 4:30 p.m. for commercial destinations and by end of day for residentail destinations.",estimatedDays:1,insurance:!1,messages:[],objectCreated:moment(),objectId:"b7630e83c3e64c84931faefcf12c2dd7",objectOwner:"malcolm_fdv@shippo.com",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air Saver®",terms:"",token:"ups_next_day_air_saver"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:null},{amount:"30.74",amountLocal:"30.74",arrivesBy:"10:30:00",attributes:[],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",currency:"USD",currencyLocal:"USD",durationTerms:"Next business day delivery by 10:30 a.m., 12:00 noon, or end of day, depending on destination.",estimatedDays:1,insurance:!1,messages:[],objectCreated:moment(),objectId:"7bb73d135047499a9884cb30cc561316",objectOwner:"malcolm_fdv@shippo.com",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air®",terms:"",token:"ups_next_day_air"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:null},{amount:"63.29",amountLocal:"63.29",arrivesBy:"08:30:00",attributes:[Rate.jf.FASTEST],carrierAccount:"95011f825f314edea9ce247ea6e8ecf7",currency:"USD",currencyLocal:"USD",durationTerms:"Next business day delivery by 8:30 a.m., 9:00 a.m., or 9:30 a.m. ",estimatedDays:1,insurance:!1,messages:[],objectCreated:moment(),objectId:"bcb3eedaf52f44b492b79e5abdce1952",objectOwner:"malcolm_fdv@shippo.com",provider:"UPS",providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/UPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/UPS.png",servicelevel:{name:"Next Day Air Early A.M.®",terms:"",token:"ups_next_day_air_early_am"},shipment:"b6a2224eb96642c6ae2728f714b8c26a",test:!1,zone:null}],shipmentDate:moment(),status:Shipment.P.PROCESSING}),__webpack_require__("./app/tests/mocks/transaction.ts"),__webpack_require__("./app/types/LabelFormat.ts")),Order=(countries.Xr.US,countries.Xr.US,currency.q.USD,moment("2028-06-12T18:14:36.031Z"),moment("2018-06-12T18:14:36.031Z"),Promo.el.PENDING,moment(),distance.k.IN,LabelFormat.L4,weight.VV.LB,new Date("2020-12-16T22:01:45.945Z"),new Date("2024-01-31T15:56:08.831Z"),new Date("2020-12-16T22:01:45.945Z"),new Date("2024-01-31T15:56:08.831Z"),moment("2021-10-01T07:59:59.000Z"),moment("2021-09-20T18:58:42.746Z"),Promo.el.PENDING,moment("2020-12-10T06:00:00.000Z"),distance.k.IN,LabelFormat.Ay.PDF,weight.VV.LB,distance.k.IN,weight.VV.LB,__webpack_require__("./app/constants/operators.ts").Mh.EQ,__webpack_require__("./app/types/Order.ts")),Track=(new Date,new Date,new Date,new Date,new Date,new Date,moment(),OrdersBatch.DO.COMPLETE_SHIPMENT,moment(),distance.k.IN,distance.k.IN,distance.k.IN,weight.VV.LB,new Date,new Date,new Date,new Date,Order.Re.UNKNOWN,distance.k.IN,distance.k.IN,distance.k.IN,weight.VV.LB,moment(),new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,moment(),OrdersBatch.DO.COMPLETE_SHIPMENT,moment(),distance.k.IN,weight.VV.LB,new Date,new Date,new Date,new Date,weight.VV.LB,Order.Re.UNKNOWN,distance.k.IN,weight.VV.LB,moment(),new Date,new Date,new Date,new Date,new Date,new Date,new Date,new Date,moment(),OrdersBatch.DO.COMPLETE_SHIPMENT,moment(),distance.k.IN,distance.k.IN,distance.k.IN,weight.VV.LB,new Date,new Date,new Date,new Date,weight.VV.LB,Order.Re.UNKNOWN,distance.k.IN,distance.k.IN,distance.k.IN,weight.VV.LB,moment(),new Date,new Date,__webpack_require__("./app/types/Track.ts")),Transaction=__webpack_require__("./app/types/Transaction.ts"),Store=(Track.S.UNKNOWN,Transaction.x8.SUCCESS,new Date,new Date,addresses.x,addresses.ch,Track.S.UNKNOWN,Transaction.x8.SUCCESS,moment("2022-05-16T07:44:18.295Z"),Order.Re.SHIPPED,moment().utc().toISOString(),moment().utc().toISOString(),Track.S.UNKNOWN,Transaction.x8.SUCCESS,__webpack_require__("./app/types/Store.ts"));moment("2024-03-04T01:06:08.650Z"),moment("2023-11-17T20:24:11.194Z"),Store.Hu.Connected,Store.F8.Shopify,moment("2024-07-16T07:48:11.190Z"),moment("2024-07-16T18:31:40.090Z"),Store.Hu.Connected,Store.F8.WooCommerce},"./app/types/CarrierAccountRegStatus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var RegStatus;__webpack_require__.d(__webpack_exports__,{n:()=>RegStatus,r:()=>fromJSON}),function(RegStatus){RegStatus.COMPLETE="COMPLETE",RegStatus.ERROR="ERROR",RegStatus.OPTED_OUT="OPTED_OUT",RegStatus.PENDING_INFO="PENDING_INFO",RegStatus.PENDING_TERMS="PENDING_TERMS",RegStatus.PROCESSING="PROCESSING",RegStatus.UNDEFINED="UNDEFINED"}(RegStatus||(RegStatus={}));var fromJSON=function(jsonRegStatus){return{carrierAccount:jsonRegStatus.carrier_account,status:RegStatus[jsonRegStatus.status]||RegStatus.UNDEFINED}}},"./app/types/Invoice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sx:()=>InvoiceStatus,rS:()=>fromJSON});var InvoiceStatus,moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),_constants_currency__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/currency.ts");!function(InvoiceStatus){InvoiceStatus.OPEN="OPEN",InvoiceStatus.PAID="PAID",InvoiceStatus.PAYMENT_FAILED="PAYMENT_FAILED",InvoiceStatus.PAYMENT_INITIATED="PAYMENT_INITIATED",InvoiceStatus.PAYMENT_PENDING="PAYMENT_PENDING",InvoiceStatus.READY_FOR_CHARGE="READY_FOR_CHARGE",InvoiceStatus.READY_FOR_CHARGE_CONVERSION="READY_FOR_CHARGE_CONVERSION",InvoiceStatus.WRITTEN_OFF="WRITE_OFF"}(InvoiceStatus||(InvoiceStatus={}));var fromJSON=function(jsonInvoice){var _a,_b,_c;return{errorType:jsonInvoice.error_type||null,invoiceNumber:jsonInvoice.number||null,netTotalChargeAmount:(null===(_a=jsonInvoice.net_total_charge_amount)||void 0===_a?void 0:_a.toFixed(2))||null,objectCreated:moment__WEBPACK_IMPORTED_MODULE_0__(jsonInvoice.object_created),objectId:jsonInvoice.object_id,paid:jsonInvoice.paid?moment__WEBPACK_IMPORTED_MODULE_0__(jsonInvoice.paid):null,status:jsonInvoice.status,totalAdjustmentAmount:(null===(_b=jsonInvoice.total_adjustment_amount)||void 0===_b?void 0:_b.toFixed(2))||null,totalAmount:(null===(_c=jsonInvoice.total_amount)||void 0===_c?void 0:_c.toFixed(2))||null,totalCurrency:jsonInvoice.total_currency?_constants_currency__WEBPACK_IMPORTED_MODULE_1__.q[jsonInvoice.total_currency]:null}}},"./app/types/Shipment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>ShipmentStatus,r:()=>fromJSON});var ShipmentStatus,moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),_constants_currency__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/currency.ts"),_types_APIMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/types/APIMessage.ts"),_types_OrdersBatch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/OrdersBatch.ts"),_types_Rate__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/types/Rate.ts");!function(ShipmentStatus){ShipmentStatus.COMPLETE="COMPLETE",ShipmentStatus.ERROR="ERROR",ShipmentStatus.PENDING="PENDING",ShipmentStatus.PROCESSING="PROCESSING",ShipmentStatus.SUCCESS="SUCCESS"}(ShipmentStatus||(ShipmentStatus={}));var fromJSON=function(jsonShipment){return{extra:extraFromJSON(jsonShipment.extra),messages:jsonShipment.messages.map(_types_APIMessage__WEBPACK_IMPORTED_MODULE_2__.rS),objectId:jsonShipment.object_id,parcels:jsonShipment.parcels.map(_types_OrdersBatch__WEBPACK_IMPORTED_MODULE_3__.Sx),rates:jsonShipment.rates.map(_types_Rate__WEBPACK_IMPORTED_MODULE_4__.rS),shipmentDate:moment__WEBPACK_IMPORTED_MODULE_0__(jsonShipment.shipment_date),status:ShipmentStatus[jsonShipment.status]}},extraFromJSON=function(jsonExtra){if(jsonExtra){var extra={signatureConfirmation:jsonExtra.signature_confirmation};return jsonExtra.insurance&&(extra.insurance={amount:jsonExtra.insurance.amount,currency:_constants_currency__WEBPACK_IMPORTED_MODULE_1__.q[jsonExtra.insurance.currency]}),extra}}}}]);