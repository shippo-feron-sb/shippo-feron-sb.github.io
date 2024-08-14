"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1478],{"./app/pages/Orders/Blackbeard/Drawers/AddressDrawer/AddressMultiselectDrawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,default:()=>AddressMultiselectDrawer_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),redux=__webpack_require__("./node_modules/redux/es/redux.js"),translate=__webpack_require__("./app/utils/translate.ts"),reducers=__webpack_require__("./app/reducers/index.ts"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),react=__webpack_require__("./node_modules/react/index.js"),MobileAndDesktopDrawer=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/MobileAndDesktopDrawer/index.js"),DrawerProvider=__webpack_require__("./app/contexts/DrawerProvider.tsx"),hooks=__webpack_require__("./app/pages/Orders/Blackbeard/Drawers/LabelPurchaseDrawer/hooks.ts"),batch_entry_composite_selectors=__webpack_require__("./app/selectors/batch-entry.composite.selectors.ts"),batch_entry_selectors=__webpack_require__("./app/selectors/batch-entry.selectors.ts"),orders_selectors=__webpack_require__("./app/selectors/orders.selectors.ts"),providers_selectors=__webpack_require__("./app/selectors/providers.selectors.ts");__webpack_require__("./app/types/Address.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/OrderBatchEntry.ts");function useSingleOrderAndBatchEntry(selectedOrders){var isBulk=(0,react.useMemo)((function(){return Object.keys(selectedOrders).length>1||!!Object.values(selectedOrders).find((function(batchEntryIds){return batchEntryIds.length>1}))}),[selectedOrders]),getOrderById=(0,orders_selectors.H4)(),orderIdObject=(0,react.useMemo)((function(){if(isBulk)return{orderId:"-1"};var orderIds=Object.keys(selectedOrders);return orderIds&&orderIds[0]?{orderId:orderIds[0]}:{orderId:"-1"}}),[isBulk,selectedOrders]),firstOrder=(0,es.d4)((function(state){return getOrderById(state,orderIdObject)})),getBatchEntryById=(0,batch_entry_selectors.Xv)(),batchEntryIdSelector=(0,react.useMemo)((function(){if(isBulk||!firstOrder)return{batchEntryId:-1};var batchEntryIds=Object.values(selectedOrders);return batchEntryIds[0]?{batchEntryId:batchEntryIds[0][0]||-1}:{batchEntryId:-1}}),[firstOrder,isBulk,selectedOrders]),firstBatchEntry=(0,es.d4)((function(state){return getBatchEntryById(state,batchEntryIdSelector)})),batchEntry=(0,react.useMemo)((function(){if(!isBulk&&firstBatchEntry)return firstBatchEntry.parcel?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},firstBatchEntry),{parcel:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},firstBatchEntry.parcel),{useImportedOrderWeight:firstBatchEntry.useImportedWeight})}):firstBatchEntry}),[isBulk,firstBatchEntry]),order=(0,react.useMemo)((function(){if(!isBulk)return firstOrder&&firstOrder.parcel&&batchEntry?(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},firstOrder),{parcel:(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},firstOrder.parcel),{useImportedOrderWeight:batchEntry.useImportedWeight})}):firstOrder}),[batchEntry,firstOrder,isBulk]),batchEntryIsCompleted=(0,es.d4)((function(state){return(0,batch_entry_selectors.Uv)(state,batchEntryIdSelector)})),batchEntryHasTransactionRequestFailed=(0,es.d4)((function(state){return(0,batch_entry_selectors.lm)(state,batchEntryIdSelector)})),batchEntryIsLoading=function useOrderDetailsLoading(batchEntry,batchEntryIsCompleted,batchEntryHasTransactionRequestFailed,batchEntryIdSelector){var batchEntryIsProcessingShipment=(0,es.d4)((function(state){return(0,batch_entry_selectors.Kl)(state,batchEntryIdSelector)})),shipmentIsLoadingFromBatchEntry=(0,es.d4)((function(state){return(0,batch_entry_composite_selectors.vc)(state,batchEntryIdSelector)})),isLoadingOrder=(0,es.d4)(orders_selectors.JF),isServiceLevelsRequestComplete=(0,es.d4)(providers_selectors.X7);return(0,react.useMemo)((function(){return batchEntry&&!batchEntryIsCompleted&&!batchEntryHasTransactionRequestFailed&&(batchEntryIsProcessingShipment||shipmentIsLoadingFromBatchEntry)||isLoadingOrder||!isServiceLevelsRequestComplete}),[batchEntry,batchEntryIsCompleted,batchEntryHasTransactionRequestFailed,batchEntryIsProcessingShipment,shipmentIsLoadingFromBatchEntry,isLoadingOrder,isServiceLevelsRequestComplete])}(batchEntry,batchEntryIsCompleted,batchEntryHasTransactionRequestFailed,batchEntryIdSelector);return{isBulk,order,batchEntry,batchEntryIsLoading}}var utils=__webpack_require__("./app/pages/Orders/Blackbeard/Drawers/LabelPurchaseDrawer/utils.ts"),TrackingHelper=__webpack_require__("./app/utils/TrackingHelper/index.ts"),types=__webpack_require__("./app/utils/TrackingHelper/types.ts"),TrackingHelper_utils=__webpack_require__("./app/utils/TrackingHelper/utils.ts"),AddressBookList=__webpack_require__("./app/pages/Orders/Blackbeard/Drawers/AddressDrawer/AddressBookList.tsx"),AddressDrawerForm=__webpack_require__("./app/pages/Orders/Blackbeard/Drawers/AddressDrawer/AddressDrawerForm.tsx"),useAddressFromAddressBook=__webpack_require__("./app/pages/Orders/Blackbeard/Drawers/AddressDrawer/useAddressFromAddressBook.ts"),addressBook=__webpack_require__("./app/constants/addressBook.ts"),AddressValidation=__webpack_require__("./app/components/AddressValidation/index.ts");function idFromAddressInfo(addressInfo,editingAddressType){var startingAddress=addressInfo[editingAddressType];return startingAddress&&!(0,lodash.isArray)(startingAddress)&&startingAddress.hasOwnProperty("id")?startingAddress.id:void 0}const AddressDrawer_AddressMultiselectDrawer=function(_a){var addresses=_a.addresses,addressInfo=_a.addressInfo,editingAddressType=_a.editingAddressType,editingAddress=_a.editingAddress,_b=_a.hasReturnBatchEntry,hasReturnBatchEntry=void 0!==_b&&_b,onClearEditingAddress=_a.onClearEditingAddress,onSubmitSelectedAddress=_a.onSubmitSelectedAddress,onCancel=_a.onCancel,onClose=_a.onClose,onSubmitEditedAddress=_a.onSubmitEditedAddress,onEditAddress=_a.onEditAddress,t=_a.t,persistent=_a.persistent,isSelectedSenderInSavedAddresses=_a.isSelectedSenderInSavedAddresses,isSelectedReturnInSavedAddresses=_a.isSelectedReturnInSavedAddresses,combineSenderReturnAddresses=_a.combineSenderReturnAddresses,areAllSenderReturnAddressesEqual=_a.areAllSenderReturnAddressesEqual,hasRecipientPhoneRequireError=_a.hasRecipientPhoneRequireError,onSubmitEditAddressBookAddress=_a.onSubmitEditAddressBookAddress,_c=(0,tslib_es6.zs)((0,react.useState)(!1),2),newAddressForm=_c[0],setNewAddressForm=_c[1],_d=(0,tslib_es6.zs)((0,react.useState)(!1),2),isAddingNewAddress=_d[0],setIsAddingNewAddress=_d[1],selectedOrders=(0,es.d4)(orders_selectors.Li),selectedThingsCount=Object.entries(selectedOrders).reduce((function(count,_a){var _b=(0,tslib_es6.zs)(_a,2);_b[0];return count+(_b[1].length||1)}),0),addressInfoForForm=(0,react.useMemo)((function(){var _a;return(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},addressInfo),((_a={})[editingAddressType]=editingAddress||null,_a))}),[addressInfo,editingAddress,editingAddressType]),addressFromAddressBook=(0,useAddressFromAddressBook.V)({addresses,selectedAddresses:addressInfoForForm[editingAddressType]}).addressFromAddressBook,handleTrackAddressUpdate=(0,react.useCallback)((function(trackingReference){(0,TrackingHelper_utils.Rk)(trackingReference,types.eJ.operations.SAVE_ATTEMPTED,{});var action=addressInfo[editingAddressType]?types.eJ.operations.UPDATED:types.eJ.operations.ADDED;(0,TrackingHelper_utils.Rk)(trackingReference,action,{address_type:editingAddressType,orders_selected:selectedThingsCount})}),[addressInfo,editingAddressType,selectedThingsCount]),onSubmit=(0,react.useCallback)((function(address,senderAndReturnAreSame){var addressId=idFromAddressInfo(addressInfo,editingAddressType),trackingReference=TrackingHelper.U.getTrackingReference(types.eJ.name,"side_panel",{addressId,addressType:editingAddressType});onSubmitSelectedAddress(address,senderAndReturnAreSame,trackingReference),handleTrackAddressUpdate(trackingReference)}),[addressInfo,editingAddressType,handleTrackAddressUpdate,onSubmitSelectedAddress]),onClickAddNewAddress=(0,react.useCallback)((function(){setIsAddingNewAddress(!0),setNewAddressForm(!0)}),[]),onCloseForm=(0,react.useCallback)((function(){setNewAddressForm(!1),setIsAddingNewAddress(!1),onClearEditingAddress()}),[onClearEditingAddress]),onUpdateAddress=(0,react.useCallback)((function(newAddress,meta){var addressId=idFromAddressInfo(addressInfo,editingAddressType),trackingReference=TrackingHelper.U.getTrackingReference(types.eJ.name,"side_panel",{addressId,addressType:editingAddressType});if(onSubmitEditedAddress(newAddress,editingAddressType,meta,trackingReference),handleTrackAddressUpdate(trackingReference),meta.applyToSavedAddress&&addressFromAddressBook){var address=function(address,addressFromAddressBook){return(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},addressFromAddressBook),{name:address.name,company:address.company,email:address.email,phone:address.phone,street1:address.street1,street2:address.street2,city:address.city,state:address.state,zip:address.zip,country:address.country,streetNumber:address.streetNumber})}(newAddress,addressFromAddressBook);onSubmitEditAddressBookAddress({id:address.id,address})}}),[addressInfo,editingAddressType,handleTrackAddressUpdate,onSubmitEditedAddress,addressFromAddressBook,onSubmitEditAddressBookAddress]),onEdit=(0,react.useCallback)((function(address){onEditAddress(editingAddressType,address),setNewAddressForm(!0)}),[onEditAddress,editingAddressType]),onFormFirstLoad=(0,react.useCallback)((function(){var addressId=idFromAddressInfo(addressInfo,editingAddressType);(0,TrackingHelper_utils.Rk)(TrackingHelper.U.getTrackingReference(types.eJ.name,"side_panel",{addressId,addressType:editingAddressType}),types.eJ.operations.VIEWED,{})}),[addressInfo,editingAddressType]),_e=(0,hooks.af)(void 0),selectedOrdersCount=_e.selectedOrdersCount,batchEntryIds=_e.batchEntryIds,order=useSingleOrderAndBatchEntry(selectedOrders).order,validBatchEntriesToBuyCount=(0,es.d4)((function(state){return(0,batch_entry_composite_selectors.Pf)(state,{batchEntryIds})})),_f=(0,DrawerProvider.g)(),_g=_f.footerOptions,footerButtonPrimary=_g.footerButtonPrimary,explicitFooterObject=_g.explicitFooterObject,setFooterOptions=_f.setFooterOptions,showForm=newAddressForm||!!editingAddress,returnsEditAddressTitle=editingAddressType===addressBook.lj?t("orders:manualLabel:returnAddressNames:editReturnTo"):t("orders:manualLabel:returnAddressNames:editSender"),outbountEditAddressSubtitle=1===selectedOrdersCount?(0,utils.ut)(t,(null==order?void 0:order.orderNumber)||""):(0,utils.GZ)(selectedOrdersCount,validBatchEntriesToBuyCount,t);return(0,emotion_react_jsx_runtime_browser_esm.Y)(MobileAndDesktopDrawer.A,(0,tslib_es6.Cl)({drawerProps:{transitionDuration:0},title:hasReturnBatchEntry?returnsEditAddressTitle:t("orders:manualLabel:editAddress",{count:selectedOrdersCount}),subtitle:hasReturnBatchEntry?void 0:outbountEditAddressSubtitle,open:!0,onBack:newAddressForm?onCloseForm:onCancel,onClose,fullWidth:!0,fullHeight:!0,persistent,paperBoxShadow:"none",footerButtonPrimary,explicitFooterObject},{children:showForm?(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressValidation.ku,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressDrawerForm.A,{hasRecipientPhoneRequireError,addressInfoForForm,areAllSenderReturnAddressesEqual,editingAddressType,onCancel:newAddressForm?onCloseForm:onCancel,initialCombineSenderReturn:combineSenderReturnAddresses,hasReturnBatchEntry,onFirstLoad:onFormFirstLoad,onUpdateAddress,isSelectedReturnInSavedAddresses,isSelectedSenderInSavedAddresses,addressFromAddressBook,setFooterOptions,hasFooterOptions:!0,t,isAddingNewAddress})}):(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressBookList._,{t,addressInfo,editingAddressType,addresses,onUpdateAddress:onSubmit,onEditAddress:onEdit,onClickAddNewAddress})}))};var mocks=__webpack_require__("./app/tests/mocks/index.ts");const AddressMultiselectDrawer_stories={title:"Order V2 / Drawers / AddressMultiselectDrawer",component:AddressDrawer_AddressMultiselectDrawer,parameters:{layout:"centered"},argTypes:{setSearchBarQuery:{action:"set-query"}}};var AddressMultiselectDrawerWithTranslate=(0,translate.Tl)("orders")(AddressDrawer_AddressMultiselectDrawer),apiAddresses=[{name:"John Doe",company:"Shippo",email:"joshn.doe@shippo.com",phone:"+12220200301",street1:"2611 Pleasent Ave",street2:"APT 112",streetNumber:"2611",city:"Minneapolis",state:"MN",zip:"55415",country:{name:"United States",iso2:"US"},id:1232},(0,mocks.$8)({seed:12345}),(0,mocks.$8)({seed:12346}),(0,mocks.$8)({seed:12347}),(0,mocks.$8)({seed:12348}),(0,mocks.$8)({seed:12349}),(0,mocks.$8)({seed:12340})],addresses=[{name:"John Doe",company:"Shippo",email:"joshn.doe@shippo.com",phone:"+12220200301",street1:"2611 Pleasent Ave",street2:"APT 112",streetNumber:"2611",city:"Minneapolis",state:"MN",zip:"55415",country:{name:"United States",iso2:"US"},id:1232,objectId:"1232",objectState:"",objectPurpose:"",objectSource:"",objectCreated:new Date,objectUpdated:new Date,objectOwner:"1234",street3:"Pleasent Ave",isResidential:!1,ip:"",messages:[],metadata:"",test:!1}],Regular=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(es.Kq,(0,tslib_es6.Cl)({store:(0,redux.y$)((0,redux.HY)(reducers.A))},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressMultiselectDrawerWithTranslate,(0,tslib_es6.Cl)({},args))}))}.bind({});Regular.args={addresses:apiAddresses,editingAddressType:"sender",addressInfo:{to:addresses[0],sender:addresses[0],return:addresses[0]}},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"(args: AddressMultiselectDrawerProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <AddressMultiselectDrawerWithTranslate {...args} />\n  </Provider>",...Regular.parameters?.docs?.source}}}}}]);