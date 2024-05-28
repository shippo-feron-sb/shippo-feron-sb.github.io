"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4360],{"./app/pages/Orders/Blackbeard/OrdersTable/OrdersTableTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>OrdersTableTooltip});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Tooltip/Tooltip.js"),OrdersTableTooltip=function(_a){var PopperProps=_a.PopperProps,props=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Tt)(_a,["PopperProps"]),boundary=document.querySelector(".MuiDataGrid-virtualScrollerContent");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)({placement:"bottom-start",PopperProps:(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cl)({},PopperProps),{disablePortal:!0,sx:{whiteSpace:"normal"},modifiers:(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","bottom-start"],altBoundary:!0,boundary}}],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)((null==PopperProps?void 0:PopperProps.modifiers)||[]),!1)}),variant:"table",arrow:!0},props))}},"./app/tests/mocks/APIMessage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>mockAPIMessage});var mockAPIMessage={kind:"APIMessage",code:"code",source:"source",text:"message text"}},"./app/tests/mocks/addresses.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$8:()=>addressFactory,$U:()=>fromAddress,bB:()=>internationalAddress,ch:()=>toAddress,e1:()=>militaryAddresses,fk:()=>getMockAddressBooks,rU:()=>mockJSONAddress,x:()=>returnAddress});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_constants_countries__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/countries.ts"),_constants_states__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/states.ts"),faker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/faker/index.js"),_types_Address__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/Address.ts"),usStatesByStateName=Object.entries(_constants_states__WEBPACK_IMPORTED_MODULE_1__.Vl).reduce((function(accum,_a){var _b=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.zs)(_a,2),key=_b[0];return accum[_b[1].name]=key,accum}),{}),addressId=1,addressFactory=function(opts){void 0===opts&&(opts={isDefaultReturn:!1,isDefaultSender:!1}),opts.seed&&faker__WEBPACK_IMPORTED_MODULE_2__.seed(opts.seed);var state=opts.state||usStatesByStateName[faker__WEBPACK_IMPORTED_MODULE_2__.address.state()];return{company:void 0===opts.company?faker__WEBPACK_IMPORTED_MODULE_2__.company.companyName():opts.company,street1:opts.street1||faker__WEBPACK_IMPORTED_MODULE_2__.address.streetAddress(!1),street2:opts.street2||faker__WEBPACK_IMPORTED_MODULE_2__.address.secondaryAddress(),streetNumber:opts.streetNumber||"",city:opts.city||faker__WEBPACK_IMPORTED_MODULE_2__.address.city(),state,zip:opts.zip||faker__WEBPACK_IMPORTED_MODULE_2__.address.zipCodeByState(state),name:opts.name||"".concat(faker__WEBPACK_IMPORTED_MODULE_2__.name.firstName()," ").concat(faker__WEBPACK_IMPORTED_MODULE_2__.name.lastName()),phone:"6502080696",email:opts.email||faker__WEBPACK_IMPORTED_MODULE_2__.internet.email(),id:opts.id||(addressId+=1),isDefaultSender:opts.isDefaultSender,isDefaultReturn:opts.isDefaultReturn,objectCreated:opts.objectCreated||new Date,objectUpdated:opts.objectUpdated||new Date,storeAddressId:opts.storeAddressId,storePlatformNames:opts.storePlatformNames,country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US}},internationalAddress=(_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US,{id:12345,objectId:"5a24f0f5951a4fb2ba1232b4f0e684e3",objectState:"VALID",objectPurpose:"QUOTE",objectSource:"FULLY_ENTERED",objectCreated:new Date("2018-06-29T00:06:08.682Z"),objectUpdated:new Date("2018-06-29T00:06:08.682Z"),objectOwner:"malcolm_fdv@shippo.com",name:"Juan Carlos",company:"",streetNumber:null,street1:"Lavalle 1171",street2:"",street3:"",city:"San Nicolas",state:"Buenos Aires",zip:"2900",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.AR,longitude:null,latitude:null,phone:"",email:"",isResidential:!1,ip:null,messages:[],metadata:"",test:!1}),toAddress=(new Date("2018-06-29T00:06:08.682Z"),new Date("2018-06-29T00:06:08.682Z"),{id:23456,objectId:"5a24f0f5951a4fb2ba1232b4f0e684e3",objectState:"VALID",objectPurpose:"QUOTE",objectSource:"FULLY_ENTERED",objectCreated:new Date("2018-06-29T00:06:08.682Z"),objectUpdated:new Date("2018-06-29T00:06:08.682Z"),objectOwner:"malcolm_fdv@shippo.com",name:"HoFu Tsai",company:"",streetNumber:null,street1:"420 Colon Ave.",street2:"",street3:"",city:"San Francisco",state:"CA",zip:"94127",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US,longitude:null,latitude:null,phone:"4243201686",email:"",isResidential:!1,ip:null,messages:[],metadata:"",test:!1}),fromAddress={id:44444,city:"San Francisco",company:"",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US,email:"",ip:null,isResidential:!1,latitude:null,longitude:null,messages:[],metadata:"",name:"HoFu Tsai",objectCreated:new Date("2019-08-17T23:26:06.041Z"),objectId:"ce543b58be2a4368b4b31f466057ffdb",objectOwner:"malcolm_fdv@shippo.com",objectPurpose:"PURCHASE",objectSource:"FULLY_ENTERED",objectState:"VALID",objectUpdated:new Date("2019-08-17T23:54:07.752Z"),phone:"4243201686",state:"CA",street1:"731 Market St.",street2:"",street3:"",streetNumber:null,test:!1,zip:"94103"},returnAddress={id:55555,city:"San Francisco",company:"",email:"",ip:null,isResidential:!1,latitude:null,longitude:null,messages:[],metadata:"",name:"Nick Foo",objectCreated:new Date("2019-08-17T23:14:32.568Z"),objectId:"4ae855d9b0954b42ba597516725ae33f",objectOwner:"malcolm_fdv@shippo.com",objectPurpose:"PURCHASE",objectSource:"INVALID",objectState:"VALID",objectUpdated:new Date("2019-08-17T23:14:32.568Z"),phone:"4243201686",street1:"500 Market St.",street2:"",street3:"",streetNumber:null,state:"CA",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US,zip:"94103",test:!1},militaryAddresses={APOAE:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},toAddress),{city:"APO",state:"AE",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US}),APOAP:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},toAddress),{city:"APO",state:"AP",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US}),APOAA:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},toAddress),{city:"APO",state:"AA",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US}),FPOAE:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},toAddress),{city:"FPO",state:"AE",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US}),FPOAP:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},toAddress),{city:"FPO",state:"AP",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US}),FPOAA:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({},toAddress),{city:"FPO",state:"AA",country:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US})},mockJSONAddress={id:123,object_state:"VALID",object_purpose:"QUOTE",object_source:"FULLY_ENTERED",object_created:"2018-06-29T00:06:08.682Z",object_updated:"2018-06-29T00:06:08.682Z",object_id:"5a24f0f5951a4fb2ba1232b4f0e684e3",object_owner:"fungi@shippo.com",name:"Lechuga",company:"Pechugas Express",street_no:"",street1:"731 Market St",street2:"Ste 200",street3:"",city:"San Francisco",state:"CA",zip:"94103",country:"US",phone:"18006668888",email:"fungi@shippo.com",is_residential:!1,ip:null,messages:[],metadata:"",test:!1},AddressBookFactory=function(seedId){seedId&&faker__WEBPACK_IMPORTED_MODULE_2__.seed(seedId);var addressType=[_types_Address__WEBPACK_IMPORTED_MODULE_3__.VD.RESIDENTIAL,_types_Address__WEBPACK_IMPORTED_MODULE_3__.VD.UNKNOWN];return{id:faker__WEBPACK_IMPORTED_MODULE_2__.datatype.uuid(),address:{name:"".concat(faker__WEBPACK_IMPORTED_MODULE_2__.name.firstName(),", ").concat(faker__WEBPACK_IMPORTED_MODULE_2__.name.lastName()),organization:faker__WEBPACK_IMPORTED_MODULE_2__.company.companyName(),email:faker__WEBPACK_IMPORTED_MODULE_2__.internet.email(),phone:faker__WEBPACK_IMPORTED_MODULE_2__.phone.phoneNumber(),address_line_1:faker__WEBPACK_IMPORTED_MODULE_2__.address.streetAddress(!0),address_line_2:"",street_no:"",city_locality:faker__WEBPACK_IMPORTED_MODULE_2__.address.city(),state_province:faker__WEBPACK_IMPORTED_MODULE_2__.address.stateAbbr(),postal_code:faker__WEBPACK_IMPORTED_MODULE_2__.address.zipCode(),country_code:faker__WEBPACK_IMPORTED_MODULE_2__.address.countryCode(),address_type:addressType[faker__WEBPACK_IMPORTED_MODULE_2__.datatype.number({min:0,max:1})]},updated_at:faker__WEBPACK_IMPORTED_MODULE_2__.datatype.datetime().toString(),created_at:faker__WEBPACK_IMPORTED_MODULE_2__.datatype.datetime().toString()}},getMockAddressBooks=function(length){for(var n=0,addresses=[];n<length;)n++,addresses.push(AddressBookFactory());return addresses}},"./app/tests/mocks/lineItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{oi:()=>mockLineItem,sx:()=>mockJSONLineItem});var _constants_countries__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/countries.ts"),_constants_currency__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/currency.ts"),_constants_weight__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/constants/weight.ts");__webpack_require__("./node_modules/faker/index.js");var mockLineItem={objectId:"faa625a38cde41578c32317f6744f0c1",id:21,product:"cc2202c14d5e45c791fc887ac2bdec2b",variant:"af6b14340c8b46cda326de80b5f37416",appId:"1312327532638",title:"ShipNote T-Shirt",sku:"SH-TS-SN-01",parcel:null,quantity:2,isFulfilled:!1,unitAmount:"6.00",totalAmount:"12.00",currency:_constants_currency__WEBPACK_IMPORTED_MODULE_1__.q.USD,unitWeight:"1.00",totalWeight:"2.00",weightUnit:_constants_weight__WEBPACK_IMPORTED_MODULE_2__.VV.LB,manufactureCountry:null,maxShipTime:null,maxDeliveryTime:null,hsCode:null,variantTitle:"",countryOfOrigin:_constants_countries__WEBPACK_IMPORTED_MODULE_0__.Xr.US},mockJSONLineItem={object_id:"faa625a38cde41578c32317f6744f0c1",id:21,product:"cc2202c14d5e45c791fc887ac2bdec2b",variant:"af6b14340c8b46cda326de80b5f37416",app_id:"1312327532638",title:"ShipNote T-Shirt",sku:"SH-TS-SN-01",parcel:null,quantity:2,is_fulfilled:!1,unit_amount:"6.00",total_amount:"12.00",currency:"USD",unit_weight:"1.00",total_weight:"2.00",weight_unit:"lb",manufacture_country:null,max_ship_time:null,max_delivery_time:null,hs_code:null,variant_title:"",country_of_origin:"US"}},"./app/tests/mocks/order.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cP:()=>mockOrderTags});var _a,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),moment=__webpack_require__("./node_modules/moment/moment.js"),Order=__webpack_require__("./app/types/Order.ts"),fetchable=__webpack_require__("./app/utils/fetchable.ts"),lineItem=__webpack_require__("./app/tests/mocks/lineItem.ts"),addresses=__webpack_require__("./app/tests/mocks/addresses.ts"),weight=__webpack_require__("./app/constants/weight.ts"),distance=__webpack_require__("./app/constants/distance.ts"),Transaction=__webpack_require__("./app/types/Transaction.ts"),webAddress={city:"San Francisco",company:"Shippo",country:"US",email:"test.user@shippo.com",name:"TT",phone:"1234567890",state:"CA",street1:"Market St",street2:"Suite 200",street3:"Table 20",street_no:"731",zip:"94103",ip:"ip-address",is_residential:!1,latitude:"37.78709301390101",longitude:"-122.40413477791641",metadata:"Test",object_created:new Date(Date.UTC(2023,10,2)),object_id:"address1",object_purpose:"QUOTE",object_source:"LL",object_state:"ENTERED",object_updated:new Date(Date.UTC(2023,10,2,0,0,1))},webCustomsDeclaration={aes_itn:"aesItn",authorized_person:"test.user",b13a_filing_option:"NOT_REQUIRED",b13a_number:"b13aNumber",certificate:"certificate",eel_pfc:"AES_ITN",exporter_reference:"exporterReference",eori_number:"eoriNumber",importer_reference:"importerReference",incoterm:"DDP",invoice_number:"invoiceNumber",is_certified:!0,is_vat_collected:!0,items:[{control_classification:"controlClassification",description:"description",is_test:!1,is_excluded:!1,line_item_object_id:"lineItemObjectId",mass_unit:weight.VV.KG,metadata:"metadata",net_value:"netValue",net_weight:"netWeight",object_id:"objectId",origin_country:"AU",object_state:"VALID",quantity:2,sku_code:"skuCode",tariff_number:"tariffNumber",unit_value:"unitValue",unit_weight:"unitWeight",value_currency:"AUD"}],license:"license",metadata:"metadata",non_delivery_handling:"RETURN",notes:"notes",purpose_explanation:"purposeExplanation",purpose_of_shipment:"OTHER",tax_id:"taxId",tax_id_type:"taxIdType"},webLineItem={country_of_origin:"IN",currency:"INR",quantity:10,sku:"sku",title:"title",unit_amount:"unitAmount",unit_weight:"unitWeight",weight_unit:weight.VV.KG,object_id:"lineItemObjectId",is_fulfilled:!1,total_amount:"totalAmount",total_weight:"totalWeight",variant:"variant",variant_title:"variantTitle"},webCarrierParcelTemplate={api_token:"token1",distance_unit:distance.k.IN,is_variable_dimensions:!1,name:"cabs",carrier:"usps",token:"t1",height:"1",length:"2",width:"3"},webUserParcelTemplate={distance_unit:distance.k.IN,height:"1",is_default:!0,length:"2",name:"name",object_id:"objectId",template:webCarrierParcelTemplate,weight:"3",weight_unit:weight.VV.G,width:"4"},webParcel={distance_unit:"cm",height:"0",length:"1",mass_unit:weight.VV.KG,use_item_weight:!0,weight:"2",width:"3",carrier_parcel_template:webCarrierParcelTemplate,user_parcel_template:webUserParcelTemplate},webRate={amount:"amount",amount_local:"amountLocal",arrives_by:"2023-11-02T00:00:00Z",attributes:["attribute1","attribute2"],carrier_account:"carrierAccount",currency:"MYR",currency_local:"USD",duration_terms:"durationTerms",estimated_days:12,included_insurance_price:"includedInsurancePrice",messages:["message1","message2"],object_created:new Date(Date.UTC(2023,10,2)),object_id:"objectId",object_owner:"objectOwner",provider:"provider",provider_image_200:"providerImage200",provider_image_75:"providerImage75",servicelevel:{extended_token:"extendedToken",name:"name",parent_servicelevel:"parentServicelevel",terms:"terms",token:"token"},shipment:"shipment",test:!0,zone:"zone"},webShipment={id:"id",address_from:webAddress,address_to:webAddress,address_return:webAddress,alternate_address_to:"alternateAddressTo",customs_declaration:webCustomsDeclaration,extras:{alcohol:{contains_alcohol:!1,recipient_type:"CONSUMER"},dry_ice:{contains_dry_ice:!1,weight:12,weight_unit_id:"10"},insurance:{amount:"10.00",content:"glass",currency:"USD",use_imported_amount:!0},dangerous_goods:{contains:!0,contains_lithium_batteries:!0,contains_biological_material:!1},is_bypass_address_validation:!1,is_bypass_customs:!0,is_return_requested:!0,packing_slip_text:"packingSlipText",signature_confirmation:"STANDARD"},is_return:!0,line_items:[webLineItem],object_created:new Date(Date.UTC(2023,10,2)),object_owner:"objectOwner",object_updated:new Date(Date.UTC(2023,10,2)),parcels:[webParcel],rates:[webRate],shipment_date:"2023-11-02T00:00:00Z",preferred_account_object_id:"preferredAccountObjectId",preferred_service_level_token:"preferredServiceLevelToken",status:"PENDING",transaction:"transaction"},webTransaction={commercial_invoice_url:"commercialInvoiceUrl",eta:"12 days",entry_point:"entryPoint",label_url:"labelUrl",messages:[{code:"12",text:"14"}],metadata:"metadata",object_created:new Date(Date.UTC(2023,10,2)),object_updated:new Date(Date.UTC(2023,10,2)),object_id:"objectId",object_owner:"objectOwner",object_state:Transaction.dF.VALID,object_status:"QUEUED",packing_slip_url:"packingSlipUrl",rate:webRate,refund_request_date:"2023-11-02T00:00:00Z",tracking_number:"trackingNumber",tracking_url_provider:"trackingUrlProvider",was_test:!0,created_by:{first_name:"first",last_name:"last"}},webOrder={created_at:"2023-11-02T00:00:00Z",currency:"USD",notes:"notes",order_number:"orderNumber",order_status:Order.Re.VALID,shipping_cost:"12",shipping_cost_currency:"USD",shipping_method:"ship",shop_app:"shopApp",subtotal_price:"100.20",total_price:"110.20",total_tax:"10.00",weight:"10",weight_unit:"g",copied_from_order_object_id:"",hidden:!1,object_id:"orderObjectId",object_owner:"objectOwner",validation_status:Order.cY.VALID,line_items:[webLineItem],shipments:[webShipment],transactions:[webTransaction],errors:[],tags:[{id:"4e5e6edc0236465a868503e70a29d226",name:"VIP costumer",color:"ffa500",icon:"star"},{id:"cd8e8e989e2f482caa1d0b25f7d349c4",name:"New customer",color:"1e90ff",icon:"heart"}]},transaction=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},webTransaction),{shipment:webShipment,order:webOrder,tracking_status:{object_created:"2024-03-18T18:21:12.655Z",object_updated:"2024-03-18T18:21:12.655Z",object_id:"8ef28c6e9e6347afa787308c30943650",status:"DELIVERED",status_details:"Your shipment has been delivered at the destination mailbox.",status_date:"2023-11-01T14:45:00Z",location:{city:"Freeport",country:"US",state:"ME",zip:"04032"}}}),__webpack_require__("./app/tests/mocks/transaction.ts")),mockOrder={toAddress:addresses.ch,objectId:"7673a6958e3341929580299a8d842979",orderNumber:"#4092",orderStatus:Order.Re.PAID,objectOwner:"malcolm_fdv@shippo.com",validationStatus:Order.cY.VALID,placedAt:moment("2018-03-27T22:13:55.184Z"),errors:[],addressFrom:addresses.$U,addressReturn:addresses.x,shopApp:"Bigcommerce",weight:"2.00",weightUnit:"lb",transactions:[],rates:[],totalTax:"0.00",totalPrice:"24.00",subtotalPrice:"24.00",currency:"USD",shippingMethod:"None",shippingCost:"0.00",shippingCostCurrency:"USD",lineItems:[(0,tslib_es6.Cl)({},lineItem.oi)],notes:null,items:[],hidden:!1,partialFulfillmentRequests:[],totalPartialFulfillments:0,tags:void 0},mockWebOrder=((0,tslib_es6.Cl)({},lineItem.sx),{created_at:"2018-06-29T00:06:08.682Z",currency:"USD",notes:"",order_number:"#4092",order_status:Order.Re.SHIPPED,shipping_cost:"0.00",shipping_cost_currency:"USD",shipping_method:"",shop_app:"Shopify",subtotal_price:"24.00",total_tax:"0.00",total_price:"24.00",weight:"2.00",weight_unit:"lb",copied_from_order_object_id:"",hidden:!1,object_id:"2a24f0f5951a4fb2ba1232b4f0e684e3",object_owner:"malcolm_fdv@shippo.com",validation_status:Order.cY.VALID,line_items:[(0,tslib_es6.Cl)({},webLineItem)],shipments:[],transactions:[],errors:[],tags:void 0}),mockOrderTags=((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{orderStatus:Order.Re.SHIPPED}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{orderStatus:Order.Re.CANCELLED}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{errors:[{kind:"APIError",message:"oh no I'm an error",code:"surprise_error"}]}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{toAddress:addresses.e1.APOAE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{toAddress:addresses.e1.APOAP}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{toAddress:addresses.e1.APOAA}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{toAddress:addresses.e1.FPOAE}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{toAddress:addresses.e1.FPOAP}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{toAddress:addresses.e1.FPOAA}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{addressFrom:addresses.bB}),(_a={})[mockOrder.objectId]=mockOrder,(0,fetchable.uk)(),[{id:"4e5e6edc0236465a868503e70a29d226",name:"VIP customer",color:"FF0000",icon:"star"},{id:"cd8e8e989e2f482caa1d0b25f7d349c4",name:"New customer",color:"00FF00",icon:"heart"},{id:"50786162ea6042fe906121a37f7bf40d",name:"In stock",color:"0000FF",icon:"circle"},{id:"3f81369f65984dd78ff9142f81e72ffb",name:"Out of stock",color:"FFFF00",icon:"flag"},{id:"2425f87c2b934228820aa9efed9fe5f6",name:"Ready to ship",color:"00FFFF",icon:"square"}]);(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockWebOrder),{tags:mockOrderTags}),mockOrderTags.length,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},mockOrder),{transactions:[(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},transaction.NW),{objectId:"not-return-transaction-id"}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},transaction.NW),{objectId:"return-transaction-id",objectUpdated:"2024-01-26T19:51:25.61Z",isReturn:!0}),(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},transaction.NW),{objectId:"most-recent-return-transaction-id",objectUpdated:"2024-03-26T19:51:25.61Z",isReturn:!0})]})},"./app/tests/mocks/transaction.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NW:()=>mockTransaction});var tslib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_constants_carriers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/carriers.ts"),_constants_countries__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/countries.ts"),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/moment/moment.js"),_types_Rate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/types/Rate.ts"),_types_Track__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/types/Track.ts"),_types_Transaction__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/types/Transaction.ts"),_APIMessage__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./app/tests/mocks/APIMessage.ts"),mockTransaction={billing:{payments:[]},commercialInvoiceUrl:"http://somewhere",eta:"sometime",labelUrl:"http://somewhere",messages:[],metadata:"metadata string",objectCreated:moment__WEBPACK_IMPORTED_MODULE_2__("2019-01-15T19:09:10.362Z").toISOString(),objectId:"c948a05efe7a40a59b9982202343f19d",objectOwner:"Mr Extravaganza",objectState:_types_Transaction__WEBPACK_IMPORTED_MODULE_5__.dF.VALID,objectUpdated:moment__WEBPACK_IMPORTED_MODULE_2__("2019-01-15T20:09:10.362Z").toISOString(),order:"#1234567890",parcel:"big box",rate:"2.66",status:_types_Transaction__WEBPACK_IMPORTED_MODULE_5__.x8.SUCCESS,test:!1,trackingNumber:"92001901755477000000002757",trackingStatus:_types_Track__WEBPACK_IMPORTED_MODULE_4__.S.TRANSIT,trackingUrlProvider:"https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=92001901755477000000002757"},mockAPIErrorMessage=((0,tslib__WEBPACK_IMPORTED_MODULE_7__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.Cl)({},mockTransaction),{objectCreated:moment__WEBPACK_IMPORTED_MODULE_2__().subtract(50,"minute"),objectStatus:_types_Transaction__WEBPACK_IMPORTED_MODULE_5__.x8.SUCCESS,orderNumber:"Order #1308",addressTo:{id:51231,city:"Los Angeles",company:"Oppihs",country:_constants_countries__WEBPACK_IMPORTED_MODULE_1__.Xr.US,email:"james@shippo.com",ip:null,isResidential:!0,messages:[],metadata:"",name:"James Brown",objectCreated:new Date("2019-01-15T19:09:06.032Z"),objectId:"c0f25c06222144a09c9270adad00c840",objectOwner:"daria@shippo.com",objectPurpose:"PURCHASE",objectSource:"FULLY_ENTERED",objectState:"VALID",objectUpdated:new Date("2019-01-15T19:09:06.033Z"),phone:"3106518955",state:"CA",street1:"405 Hilgard Ave",street2:"",street3:"",streetNumber:"",test:!1,zip:"90025"},rate:{amount:"2.66",amountLocal:"2.66",arrivesBy:"",attributes:[_types_Rate__WEBPACK_IMPORTED_MODULE_3__.jf.CHEAPEST],carrierAccount:"ab3195174d9d412db4b5e9f40b846659",currency:"USD",currencyLocal:"USD",estimatedDays:5,durationTerms:"",insurance:!1,messages:[],objectCreated:moment__WEBPACK_IMPORTED_MODULE_2__("2019-01-15T19:09:06.480Z"),objectId:"5189131079934be2a7f250d79dc3846f",objectOwner:"daria@shippo.com",provider:_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.i3.name,providerImage75:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/75/USPS.png",providerImage200:"https://dev-qa-static-shippodev-com.s3.amazonaws.com/providers/200/USPS.png",servicelevel:{name:"Regular Parcel",token:"canada_post_regular_parcel",terms:""},shipment:"f6aac1b046af4309a88fc170e35dc5b8",test:!1,zone:"4"},trackingStatus:[{location:{city:"",state:"",zip:"",country:""},objectCreated:"2019-01-15T19:09:10.362Z",objectId:"b5cc312f21574a8f8f3c0047d0ba354e",objectUpdated:"2019-01-15T19:09:10.362Z",status:_types_Track__WEBPACK_IMPORTED_MODULE_4__.S.UNKNOWN,statusDate:"",statusDetails:"Pre-Transit: Shipment information has been transmitted to the shipping carrier but it has not yet been scanned and picked up."}],wasTest:!1}),(0,tslib__WEBPACK_IMPORTED_MODULE_7__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.Cl)({},_APIMessage__WEBPACK_IMPORTED_MODULE_6__.m),{text:"This is an error."}));(0,tslib__WEBPACK_IMPORTED_MODULE_7__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.Cl)({},mockTransaction),{status:_types_Transaction__WEBPACK_IMPORTED_MODULE_5__.x8.ERROR,messages:[mockAPIErrorMessage]})},"./app/tests/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M6:()=>createTestStore});var redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/redux/es/redux.js");function createTestStore(reducers,state){return void 0===state&&(state={}),(0,redux__WEBPACK_IMPORTED_MODULE_0__.y$)((0,redux__WEBPACK_IMPORTED_MODULE_0__.HY)(reducers),state)}},"./app/pages/Orders/Blackbeard/OrdersTable/cells/TagsCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,With2Tags:()=>With2Tags,With3Tags:()=>With3Tags,With4Tags:()=>With4Tags,With5Tags:()=>With5Tags,default:()=>TagsCell_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),TagsTooltip=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/cells/TagsTooltip/index.ts"),OrdersTableTooltip=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/OrdersTableTooltip.tsx"),CircularProgress=__webpack_require__("./node_modules/@goshippo/components/esm/CircularProgress/CircularProgress.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Add=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");var templateObject_1,templateObject_2,templateObject_3,TagsCell_styles_templateObject_1,emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),elevations=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Cell=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  gap: "," ",";\n  padding-right: ",";\n  width: 100%;\n"],["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  gap: "," ",";\n  padding-right: ",";\n  width: 100%;\n"])),shippoTheme.A.spacing(.5),shippoTheme.A.spacing(1),shippoTheme.A.spacing(6)),MoreTags=(0,emotion_styled_browser_esm.A)(Typography.A)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  align-items: center;\n  display: inline-flex;\n  height: ",";\n  justify-content: center;\n  line-height: 1;\n  width: ",";\n"],["\n  align-items: center;\n  display: inline-flex;\n  height: ",";\n  justify-content: center;\n  line-height: 1;\n  width: ",";\n"])),shippoTheme.A.spacing(3),shippoTheme.A.spacing(3)),AddWrapper=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  align-items: center;\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"],["\n  align-items: center;\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: flex;\n  height: ",";\n  justify-content: center;\n  width: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),shippoTheme.A.spacing(3),shippoTheme.A.spacing(3),colors.T.secondary,colors.T.secondaryHover,elevations.$[2]),OrderTagChip=__webpack_require__("./app/components/OrderTagChip/index.ts"),TagsCellContent=(0,react.forwardRef)((function(_a,ref){var tags=_a.tags,isLoading=_a.isLoading,props=(0,tslib_es6.Tt)(_a,["tags","isLoading"]);if(isLoading||!tags)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Cell,(0,tslib_es6.Cl)({ref},props,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CircularProgress.A,{})}));var tagsLength=tags.length;if(0===tagsLength)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Cell,(0,tslib_es6.Cl)({ref},props,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddWrapper,(0,tslib_es6.Cl)({"data-testid":"tag-plus-sign"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Add,{fontSize:"small"})}))}));if(tagsLength<=4)return(0,emotion_react_jsx_runtime_browser_esm.Y)(Cell,(0,tslib_es6.Cl)({ref},props,{children:tags.map((function(tag){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{tag,mode:"icon"},tag.id)}))}));var remainingTags=tagsLength-3;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Cell,(0,tslib_es6.Cl)({ref},props,{children:[tags.slice(0,3).map((function(tag){return(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagChip.F,{tag,mode:"icon"},tag.id)})),(0,emotion_react_jsx_runtime_browser_esm.FD)(MoreTags,(0,tslib_es6.Cl)({component:"strong",color:"primary",variant:"captionEmphasized",role:"strong"},{children:["+",remainingTags]}))]}))})),OrderTagsProvider=__webpack_require__("./app/contexts/OrderTagsProvider.tsx"),TagCellWrapper=(0,__webpack_require__("./node_modules/@mui/material/styles/styled.js").Ay)(Box.A)(TagsCell_styles_templateObject_1||(TagsCell_styles_templateObject_1=(0,tslib_es6.ue)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: default;\n\n  & .MuiTooltip-popper .MuiTooltip-tooltip {\n    margin-left: -",";\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: default;\n\n  & .MuiTooltip-popper .MuiTooltip-tooltip {\n    margin-left: -",";\n  }\n"])),shippoTheme.A.spacing(3)),useTooltip=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/hooks/useTooltip.ts"),GlobalComponentsProvider=__webpack_require__("./app/contexts/GlobalComponentsProvider.tsx"),context=__webpack_require__("./app/pages/Orders/Blackbeard/OrdersTable/context.ts"),esm_exports=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),observability=__webpack_require__("./app/utils/observability/index.ts"),TagsCell=function(_a){var tags=_a.tags,orderId=_a.orderId,isLoading=_a.isLoading,isSplitOrder=_a.isSplitOrder,_b=(0,OrderTagsProvider.uq)(),updateOrdersTags=_b.updateOrdersTags,removeOrdersTags=_b.removeOrdersTags,areUniqueTagsLoading=_b.areUniqueTagsLoading,_c=(0,useTooltip.f)(),isTooltipOpen=_c.isTooltipOpen,handleTooltipClose=_c.handleTooltipClose,handleTooltipOpen=_c.handleTooltipOpen,t=(0,context.D)().t,addSnackbarAlert=(0,GlobalComponentsProvider.s)().snackbar.addSnackbarAlert,_d=(0,tslib_es6.zs)((0,react.useState)(!1),2),isCellLoading=_d[0],setIsCellLoading=_d[1],shouldShowLoading=isLoading||isCellLoading||areUniqueTagsLoading,shouldShowTooltip=isTooltipOpen&&!shouldShowLoading;(0,react.useEffect)((function(){setIsCellLoading(!1)}),[tags]);var handleTagSelection=(0,react.useCallback)((function(tagId){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){var error_1,errorMessage;return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return _a.trys.push([0,2,,3]),observability.O.startEvent("ORDER_TAGS_ASSIGN_TAG_TO_ORDER"),setIsCellLoading(!0),[4,updateOrdersTags([orderId],[tagId])];case 1:return _a.sent(),observability.O.successEvent("ORDER_TAGS_ASSIGN_TAG_TO_ORDER",{orderId,tagId}),[3,3];case 2:return error_1=_a.sent(),errorMessage=t("orders:table:errors:addTagToOrderError"),addSnackbarAlert(errorMessage,"error"),(0,esm_exports.Cp)("failed to update Order Tags ".concat(error_1),{level:"error"}),setIsCellLoading(!1),observability.O.errorEvent("ORDER_TAGS_ASSIGN_TAG_TO_ORDER",{errorMessage}),[3,3];case 3:return[2]}}))}))}),[orderId,updateOrdersTags,addSnackbarAlert,t]),handleTagDeletion=(0,react.useCallback)((function(tagId){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){var error_2,errorMessage;return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return _a.trys.push([0,2,,3]),observability.O.startEvent("ORDER_TAGS_REMOVE_TAG_FROM_ORDER"),setIsCellLoading(!0),[4,removeOrdersTags([orderId],[tagId])];case 1:return _a.sent(),observability.O.successEvent("ORDER_TAGS_REMOVE_TAG_FROM_ORDER",{orderId,tagId}),[3,3];case 2:return error_2=_a.sent(),errorMessage=t("orders:table:errors:removeTagFromOrderError"),addSnackbarAlert(errorMessage,"error"),(0,esm_exports.Cp)("failed to remove Order Tags ".concat(error_2),{level:"error"}),setIsCellLoading(!1),observability.O.errorEvent("ORDER_TAGS_REMOVE_TAG_FROM_ORDER",{errorMessage}),[3,3];case 3:return[2]}}))}))}),[orderId,removeOrdersTags,addSnackbarAlert,t]);return(0,react.useEffect)((function(){shouldShowLoading&&handleTooltipClose()}),[handleTooltipClose,shouldShowLoading]),isSplitOrder?null:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagCellWrapper,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrdersTableTooltip.f,(0,tslib_es6.Cl)({PopperProps:{modifiers:[{name:"offset",enabled:!0,options:{offset:[0,-14]}}]},arrow:!1,open:shouldShowTooltip,onOpen:handleTooltipOpen,onClose:handleTooltipClose,title:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagsTooltip.F,{handleTagSelection,handleTagDeletion,tags}),"data-testid":"tag-cell-tooltip"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagsCellContent,{"data-testid":"tag-cell-content",isLoading:shouldShowLoading,tags})}))})},order=__webpack_require__("./app/tests/mocks/order.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),utils=__webpack_require__("./app/tests/utils.ts");const TagsCell_stories={title:"Orders V2 / Cells / TagCell",component:TagsCell};var Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"130px",display:"flex",justifyContent:"center",alignItems:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(es.Kq,(0,tslib_es6.Cl)({store:(0,utils.M6)({})},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(OrderTagsProvider.U5,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TagsCell,(0,tslib_es6.Cl)({},args))})}))}))},Empty=Template.bind({});Empty.args={tags:[]};var With2Tags=Template.bind({});With2Tags.args={tags:[order.cP[0],order.cP[1]]};var With3Tags=Template.bind({});With3Tags.args={tags:[order.cP[0],order.cP[1],order.cP[2]]};var With4Tags=Template.bind({});With4Tags.args={tags:[order.cP[0],order.cP[1],order.cP[2],order.cP[3]]};var With5Tags=Template.bind({});With5Tags.args={tags:order.cP},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...Empty.parameters?.docs?.source}}},With2Tags.parameters={...With2Tags.parameters,docs:{...With2Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With2Tags.parameters?.docs?.source}}},With3Tags.parameters={...With3Tags.parameters,docs:{...With3Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With3Tags.parameters?.docs?.source}}},With4Tags.parameters={...With4Tags.parameters,docs:{...With4Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With4Tags.parameters?.docs?.source}}},With5Tags.parameters={...With5Tags.parameters,docs:{...With5Tags.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '130px',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center'\n}}>\n    <Provider store={createTestStore({})}>\n      <OrderTagsContextProvider>\n        <TagsCell {...args} />\n      </OrderTagsContextProvider>\n    </Provider>\n  </div>",...With5Tags.parameters?.docs?.source}}}}}]);