"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[8161],{"./app/utils/newRelic/newRelic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>newRelic});var newRelic=new(function(){function NewRelicClient(){this.instance=null}return NewRelicClient.prototype.setUserId=function(userId){var _a;null===(_a=this.instance)||void 0===_a||_a.setUserId(userId)},NewRelicClient.prototype.addPageAction=function(name,attributes){var _a;null===(_a=this.instance)||void 0===_a||_a.addPageAction(name,attributes)},NewRelicClient.prototype.setInstance=function(instance){this.instance=instance,this.instance.setApplicationVersion("taylor_fraud_WEB-9876:4f886debba983811bd973e54f774f906450b496e")},NewRelicClient.prototype.isInitialized=function(){return!!this.instance},NewRelicClient}())},"./app/utils/observability/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>observability});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),index_esm=__webpack_require__("./node_modules/@fullstory/browser/dist/index.esm.js"),newRelic=__webpack_require__("./app/utils/newRelic/newRelic.ts"),observability=new(function(){function ObservabilityClient(){this.pendingEvents={}}return ObservabilityClient.prototype.getEventName=function(name,id){return id?"".concat(name,"_").concat(id):name},ObservabilityClient.prototype.timeoutEvent=function(name,id,timeoutMs){void 0===timeoutMs&&(timeoutMs=6e4),this.clearEvent(name,id);var timeoutEventName="".concat(name,"_TIMEOUT");this.sendPageAction(timeoutEventName,{id,timeout:timeoutMs}),this.sendFullStoryLog(timeoutEventName,{id}),this.sendFullStoryEvent(timeoutEventName,{id,timeout:timeoutMs})},ObservabilityClient.prototype.clearEvent=function(name,id){var pendingEventName=this.getEventName(name,id),event=this.pendingEvents[pendingEventName];event&&(clearTimeout(event.timeoutId),delete this.pendingEvents[pendingEventName])},ObservabilityClient.prototype.sendPageAction=function(name,attributes){try{newRelic.S.addPageAction(name,attributes)}catch(e){}},ObservabilityClient.prototype.sendFullStoryLog=function(name,attributes){try{if(!(0,index_esm.Dp)())return;attributes?(0,index_esm.Rm)("info","[Observability event] ".concat(name," with attributes: ").concat(JSON.stringify(attributes))):(0,index_esm.Rm)("info","[Observability event] ".concat(name))}catch(e){}},ObservabilityClient.prototype.sendFullStoryEvent=function(name,attributes){try{if(!(0,index_esm.Dp)())return;(0,index_esm.f0)(name,attributes||{})}catch(e){}},ObservabilityClient.prototype.singleEvent=function(name,attributes){this.sendPageAction(name,attributes),this.sendFullStoryLog(name,attributes),this.sendFullStoryEvent(name,attributes)},ObservabilityClient.prototype.startEvent=function(name,attributes){var _this=this;this.clearEvent(name,null==attributes?void 0:attributes.id);var timeoutId=window.setTimeout((function(){return _this.timeoutEvent(name,null==attributes?void 0:attributes.id,null==attributes?void 0:attributes.timeoutMs)}),(null==attributes?void 0:attributes.timeoutMs)||6e4),pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id);this.pendingEvents[pendingEventName]={timeoutId,startTime:Date.now()},this.sendPageAction(name),this.sendFullStoryLog(name,attributes)},ObservabilityClient.prototype.cancelEvent=function(name,attributes){this.clearEvent(name,null==attributes?void 0:attributes.id),this.sendFullStoryLog(name,(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},attributes),{cancelled:!0}))},ObservabilityClient.prototype.successEvent=function(name,attributes){var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var successEventName="".concat(name,"_SUCCESS");this.sendPageAction(successEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(successEventName,attributes),this.sendFullStoryEvent(successEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient.prototype.errorEvent=function(name,attributes,severity){void 0===severity&&(severity="ERROR");var pendingEventName=this.getEventName(name,null==attributes?void 0:attributes.id),event=this.pendingEvents[pendingEventName];if((null==attributes?void 0:attributes.force)||event){var duration=Date.now()-((null==event?void 0:event.startTime)||0);this.clearEvent(name,null==attributes?void 0:attributes.id);var errorEventName="".concat(name,"_").concat(severity);this.sendPageAction(errorEventName,(0,tslib_es6.Cl)({duration},attributes)),this.sendFullStoryLog(errorEventName,attributes),this.sendFullStoryEvent(errorEventName,(0,tslib_es6.Cl)({duration},attributes))}},ObservabilityClient}())},"./app/pages/Orders/Blackbeard/Drawers/AddressBookDrawerForm/AddressBookDrawerForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddAddress:()=>AddAddress,EditAddress:()=>EditAddress,WithPasteAddress:()=>WithPasteAddress,default:()=>AddressBookDrawerForm_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),MobileAndDesktopDrawer=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/MobileAndDesktopDrawer/index.js"),AddressForm=__webpack_require__("./app/components/shared/AddressForm/index.ts"),Address=__webpack_require__("./app/types/Address.ts"),AddressFormMui=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/views/AddressForm/AddressFormMui.tsx"),DrawerProvider=__webpack_require__("./app/contexts/DrawerProvider.tsx"),RecipientAddressFormProvider=__webpack_require__("./app/pages/Settings/Recipients/contexts/RecipientAddressFormProvider.tsx"),AddressValidation=__webpack_require__("./app/components/AddressValidation/index.ts"),hooks=__webpack_require__("./app/components/shared/AddressSuggestionInput/hooks.tsx");var AddressFormWrapper=function(_a){var t=_a.t,addressInfoForForm=_a.addressInfoForForm,isPasteAddressEnabled=_a.isPasteAddressEnabled,onUpdateAddress=_a.onUpdateAddress,setFooterOptions=(0,DrawerProvider.g)().setFooterOptions,_b=(0,RecipientAddressFormProvider.O)(),closeFormDrawer=_b.closeFormDrawer,deleteAddress=_b.deleteAddress,isAddressFormLoading=_b.isAddressFormLoading,baseJsonAddress=(0,react.useMemo)((function(){return function getAddressFormValues(address){return address?Object.entries(address).reduce((function(result,_a){var _b,_c=(0,tslib_es6.zs)(_a,2),key=_c[0],value=_c[1];return(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},result),((_b={})[key]=value||"",_b))}),{}):address}((0,Address.gJ)(addressInfoForForm))}),[addressInfoForForm]),validateAddress=(0,AddressValidation.iZ)().validateAddress,autocompleteAddressRef=(0,react.useRef)(null),addressFormControls=(0,AddressForm.O)(baseJsonAddress||void 0),formState=addressFormControls.formState,handleSubmit=addressFormControls.handleSubmit,isDirty=formState.isDirty,isValid=formState.isValid,dirtyFields=formState.dirtyFields,addressId=null==baseJsonAddress?void 0:baseJsonAddress.objectId,isAddressUpdate=!!addressId,handleDeleteAddress=(0,react.useCallback)((function(){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return addressId?[4,deleteAddress(addressId)]:[3,2];case 1:_a.sent(),_a.label=2;case 2:return[2]}}))}))}),[addressId,deleteAddress]),onAddressSubmit=(0,react.useCallback)((function(address){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){switch(_a.label){case 0:return AddressValidation.Gv.find((function(key){return dirtyFields[key]}))?[4,validateAddress({address,addressType:"to",isAutocompleteAddress:(0,hooks.bO)(autocompleteAddressRef.current,address),callback:function(validatedAddress){return(0,tslib_es6.sH)(void 0,void 0,void 0,(function(){return(0,tslib_es6.YH)(this,(function(_a){return validatedAddress&&onUpdateAddress((0,tslib_es6.Cl)((0,tslib_es6.Cl)({},address),validatedAddress)),[2]}))}))}})]:(onUpdateAddress(address),[2]);case 1:return _a.sent(),[2]}}))}))}),[dirtyFields,onUpdateAddress]);return(0,react.useEffect)((function(){setFooterOptions({footerButtonPrimary:{text:t("orders:phrases:save"),action:handleSubmit(onAddressSubmit),disabled:!isDirty||!isValid||isAddressFormLoading},footerButtonSecondary:isAddressUpdate?void 0:{text:t("orders:phrases:cancel"),action:closeFormDrawer},explicitFooterObject:isAddressUpdate?(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({onClick:handleDeleteAddress,variant:"text",color:"error",disabled:isAddressFormLoading},{children:t("settings:addressBook.recipient.deleteAddress")}))}):void 0})}),[isDirty,isValid,t,isAddressUpdate,isAddressFormLoading,handleDeleteAddress,handleSubmit,onAddressSubmit,setFooterOptions,closeFormDrawer]),(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressFormMui.A,{t,isPasteAddressEnabled,hasRecipientPhoneRequireError:!1,formControls:addressFormControls,editingAddressType:"to",isAddingNewAddress:!isAddressUpdate,onSelectAutocompleteAddress:function(address){return autocompleteAddressRef.current=address}})};const AddressBookDrawerForm_AddressBookDrawerForm=function(_a){var addressInfoForForm=_a.addressInfoForForm,isPasteAddressEnabled=_a.isPasteAddressEnabled,onUpdateAddress=_a.onUpdateAddress,open=_a.open,t=_a.t,footerOptions=(0,DrawerProvider.g)().footerOptions,closeFormDrawer=(0,RecipientAddressFormProvider.O)().closeFormDrawer;return(0,emotion_react_jsx_runtime_browser_esm.Y)(MobileAndDesktopDrawer.A,(0,tslib_es6.Cl)({fullHeight:!0,fullWidth:!0,title:t(addressInfoForForm?"settings:recipients:editAddress":"settings:recipients:addAddress"),open,onClose:closeFormDrawer,footerButtonPrimary:footerOptions.footerButtonPrimary,footerButtonSecondary:footerOptions.footerButtonSecondary,explicitFooterObject:footerOptions.explicitFooterObject},{children:open&&(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressValidation.ku,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressFormWrapper,{t,isPasteAddressEnabled,addressInfoForForm,onUpdateAddress},(null==addressInfoForForm?void 0:addressInfoForForm.id)||"")})}))};var redux=__webpack_require__("./node_modules/redux/es/redux.js"),translate=__webpack_require__("./app/utils/translate.ts"),reducers=__webpack_require__("./app/reducers/index.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js");const AddressBookDrawerForm_stories={title:"Address Book / Address Drawer Form",component:AddressBookDrawerForm_AddressBookDrawerForm,argTypes:{onCancel:{action:"onCancel"},onUpdateAddress:{action:"onUpdateAddress"}}};var AddressDrawerFormWithTranslate=(0,translate.Tl)(["orders","settings"])(AddressBookDrawerForm_AddressBookDrawerForm),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(es.Kq,(0,tslib_es6.Cl)({store:(0,redux.y$)((0,redux.HY)(reducers.A))},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(DrawerProvider.T,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AddressDrawerFormWithTranslate,(0,tslib_es6.Cl)({},args))})}))},AddAddress=Template.bind({});AddAddress.args={addressInfoForForm:null,open:!0,t:function(key){return key}};var WithPasteAddress=Template.bind({});WithPasteAddress.args={isPasteAddressEnabled:!0,addressInfoForForm:null,open:!0,t:function(key){return key}};var EditAddress=Template.bind({});EditAddress.args={open:!0,t:function(key){return key}},AddAddress.parameters={...AddAddress.parameters,docs:{...AddAddress.parameters?.docs,source:{originalSource:"(args: AddressBookDrawerFormProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <DrawerProvider>\n      <AddressDrawerFormWithTranslate {...args} />\n    </DrawerProvider>\n  </Provider>",...AddAddress.parameters?.docs?.source}}},WithPasteAddress.parameters={...WithPasteAddress.parameters,docs:{...WithPasteAddress.parameters?.docs,source:{originalSource:"(args: AddressBookDrawerFormProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <DrawerProvider>\n      <AddressDrawerFormWithTranslate {...args} />\n    </DrawerProvider>\n  </Provider>",...WithPasteAddress.parameters?.docs?.source}}},EditAddress.parameters={...EditAddress.parameters,docs:{...EditAddress.parameters?.docs,source:{originalSource:"(args: AddressBookDrawerFormProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <DrawerProvider>\n      <AddressDrawerFormWithTranslate {...args} />\n    </DrawerProvider>\n  </Provider>",...EditAddress.parameters?.docs?.source}}}}}]);