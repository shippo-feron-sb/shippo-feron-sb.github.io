(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[9532],{"./app/assets/icons/print-format/slip_pdf_4x6.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"b775267bef9d2d0a22021dc1f58e12eb.svg"},"./app/assets/icons/print-format/slip_pdf_4x8.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"41061eba6355706dfaa9b0d06ba10d09.svg"},"./app/assets/icons/print-format/slip_pdf_8x11.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"cc76d8079b15669d051d2961111cef59.svg"},"./app/assets/icons/print-format/slip_png_4x6.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"459910d49befa856c91609966d56f7fb.svg"},"./app/assets/icons/print-format/slip_png_4x8.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"56ee8bc0e198fe8e010d023d81d329e0.svg"},"./app/assets/icons/print-format/slip_zplii_4x6.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"a00919562de72cb0a586678f31860089.svg"},"./app/assets/icons/print-format/slip_zplii_4x8.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"049f2baf022afcdfbce3a857757a8b78.svg"},"./app/constants/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U8:()=>OVERRIDE_ADDRESS_VERSION,V1:()=>V1,eA:()=>OVERRIDE_ADDRESS_HEADER,gA:()=>VERSION_HEADER,kq:()=>LATEST_VERSION});var V1="2014-02-11",LATEST_VERSION="2018-02-08",VERSION_HEADER="Shippo-API-Version",OVERRIDE_ADDRESS_HEADER="Shippo-Override-Addresses",OVERRIDE_ADDRESS_VERSION="V2"},"./app/contexts/DrawerProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>DrawerProvider,M:()=>useDrawerContext});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),DrawerContext=(0,react.createContext)({isOpen:!1,footerOptions:{},setFooterOptions:function(){},setIsOpen:function(){}}),DrawerProvider=function(_a){var drawerInitialSettings=_a.drawerInitialSettings,children=_a.children,_b=function(_a){var _b=void 0===_a?{}:_a,_c=_b.isOpen,isOpen=void 0!==_c&&_c,_d=_b.footerOptions,footerOptions=void 0===_d?{}:_d,_e=(0,tslib_es6.CR)((0,react.useState)(isOpen),2),drawerIsOpen=_e[0],setDrawerIsOpen=_e[1],_f=(0,tslib_es6.CR)((0,react.useState)(footerOptions),2),drawerFooterOptions=_f[0],setDrawerFooterOptions=_f[1];return{isOpen:drawerIsOpen,setIsOpen:(0,react.useCallback)((function(value,callback){setDrawerIsOpen(value),callback&&callback()}),[setDrawerIsOpen]),footerOptions:drawerFooterOptions,setFooterOptions:setDrawerFooterOptions}}(drawerInitialSettings),isOpen=_b.isOpen,setIsOpen=_b.setIsOpen,footerOptions=_b.footerOptions,setFooterOptions=_b.setFooterOptions;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(DrawerContext.Provider,(0,tslib_es6.pi)({value:{isOpen,setIsOpen,footerOptions,setFooterOptions}},{children}))},useDrawerContext=function(){return(0,react.useContext)(DrawerContext)}},"./app/contexts/GlobalComponentsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>useGlobalComponentsContext});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/NoticeAlert/index.js");var GlobalComponentsContext=(0,react.createContext)({snackbar:{addSnackbarAlert:function(){},addSnackbarActionAlert:function(){}}}),useGlobalComponentsContext=function(){return{snackbar:(0,react.useContext)(GlobalComponentsContext).snackbar}}},"./app/hooks/useRequest.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/axios/index.js"),__webpack_require__("./node_modules/react/index.js")},"./app/pages/Orders/Blackbeard/LabelPurchase/views/AddressForm/AddressFormMui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>AddressForm_AddressFormMui});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Alert=__webpack_require__("./node_modules/@goshippo/components/esm/Alert/Alert.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),FormHelperText=__webpack_require__("./node_modules/@goshippo/components/esm/FormHelperText/FormHelperText.js"),Grid=__webpack_require__("./node_modules/@goshippo/components/esm/Grid/Grid.js"),FormControlLabel=__webpack_require__("./node_modules/@goshippo/components/esm/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@goshippo/components/esm/Checkbox/Checkbox.js"),CountryField=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/CountryField/index.js"),Autocomplete=__webpack_require__("./node_modules/@goshippo/components/esm/Autocomplete/Autocomplete.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./app/components/shared/AddressForm/FormsComponents/StateField/hooks.ts");const StateField_StateFieldMui=(0,react.forwardRef)((function(_a,inputRef){var country=_a.country,onChange=_a.onChange,label=_a.label,formBaseName=_a.formBaseName,value=(0,tslib_es6._T)(_a,["country","onChange","label","formBaseName"]).value,_b=(0,hooks.X)(value,country||void 0,onChange),stateOptions=_b.stateOptions,setStateLabelMandatory=_b.setStateLabelMandatory,currentOptionValue=_b.currentOptionValue,optionChanged=_b.optionChanged,onTextFieldChanged=(0,react.useCallback)((function(e){optionChanged(e.target.value||"")}),[optionChanged]),onChangeAutocompleteSelect=(0,react.useCallback)((function(_e,option){optionChanged((null==option?void 0:option.value)||null)}),[optionChanged]);return stateOptions.length?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Autocomplete.Z,{id:"".concat(formBaseName,"-state"),options:stateOptions,autoHighlight:!0,ref:inputRef,getOptionLabel:function(option){return option.label},onChange:onChangeAutocompleteSelect,defaultValue:currentOptionValue,value:currentOptionValue,renderInput:function(params){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({name:"state"},params,{label,required:setStateLabelMandatory}))}}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,{name:"state",inputRef,label,value:value||"",onChange:onTextFieldChanged})}));var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,templateObject_7,AddressForm_hooks=__webpack_require__("./app/components/shared/AddressForm/hooks.ts"),addressBook=__webpack_require__("./app/constants/addressBook.ts"),countries=__webpack_require__("./app/constants/countries.ts"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.js"),user_address_selectors=__webpack_require__("./app/selectors/user-address.selectors.ts"),Address=__webpack_require__("./app/types/Address.ts"),validations=__webpack_require__("./app/utils/validations.ts"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),Container=__webpack_require__("./node_modules/@goshippo/components/esm/Container/Container.js"),FormGroupHeader=(0,styled.ZP)(Typography.Z)(templateObject_1||(templateObject_1=(0,tslib_es6.cy)(["\n  margin-bottom: 0.5rem;\n"],["\n  margin-bottom: 0.5rem;\n"]))),FormGroup=(0,styled.ZP)(Box.Z)(templateObject_2||(templateObject_2=(0,tslib_es6.cy)(["\n  margin-bottom: 0.25rem;\n"],["\n  margin-bottom: 0.25rem;\n"]))),FormInput=(0,styled.ZP)(Box.Z)(templateObject_3||(templateObject_3=(0,tslib_es6.cy)(["\n  margin-bottom: 1rem;\n"],["\n  margin-bottom: 1rem;\n"]))),StateZipContainer=(0,styled.ZP)(Grid.Z)(templateObject_4||(templateObject_4=(0,tslib_es6.cy)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n"],["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n"]))),AddressSuggestionInput_hooks=((0,styled.ZP)("div")(templateObject_5||(templateObject_5=(0,tslib_es6.cy)(["\n  margin-left: 1rem;\n"],["\n  margin-left: 1rem;\n"]))),(0,styled.ZP)(FormControlLabel.Z)(templateObject_6||(templateObject_6=(0,tslib_es6.cy)(["\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  margin-bottom: 0.75rem;\n"],["\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  margin-bottom: 0.75rem;\n"]))),(0,styled.ZP)(Button.Z)(templateObject_7||(templateObject_7=(0,tslib_es6.cy)(["\n  min-width: 10.625rem;\n  min-height: 3rem;\n"],["\n  min-width: 10.625rem;\n  min-height: 3rem;\n"]))),(0,styled.ZP)(Button.Z)((function(){var _a;return(_a={display:"none"})[shippoTheme.Z.breakpoints.up("lg")]={display:"inherit",minHeight:"3rem"},_a})),(0,styled.ZP)(Container.Z)((function(){return{}})),__webpack_require__("./app/components/shared/AddressSuggestionInput/hooks.tsx")),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),ListItemText=__webpack_require__("./node_modules/@goshippo/components/esm/ListItemText/ListItemText.js"),ListItem=__webpack_require__("./node_modules/@goshippo/components/esm/ListItem/ListItem.js"),InputAdornment=__webpack_require__("./node_modules/@goshippo/components/esm/InputAdornment/InputAdornment.js"),CircularProgress=__webpack_require__("./node_modules/@goshippo/components/esm/CircularProgress/CircularProgress.js"),ItemText=function(_a){var option=_a.option;return!option.template&&option.label?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ListItemText.Z,{primary:option.label}):option.template||option.label?option.template?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ListItemText.Z,{primary:option.template}):null:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ListItemText.Z,{primary:option.value})};const AddressForm_AutocompleteInput=function(_a){var name=_a.name,id=_a.id,inputValue=_a.value,dataE2E=_a.dataE2E,dataTestid=_a.dataTestid,formState=_a.formState,t=_a.t,options=_a.options,loading=_a.loading,onSelect=_a.onSelect,onDebouncedChange=_a.onDebouncedChange,filterOptions=_a.filterOptions,_b=(0,tslib_es6.CR)((0,react.useState)(!1),2),open=_b[0],setOpen=_b[1],handleOnChange=(0,react.useCallback)((function(_event,newValue){var _a;"object"==typeof newValue&&"Address"===(null===(_a=null==newValue?void 0:newValue.data)||void 0===_a?void 0:_a.Type)&&setOpen(!1),onSelect&&onSelect(newValue)}),[onSelect]),onClickFocus=(0,react.useCallback)((function(){onDebouncedChange&&onDebouncedChange(inputValue)}),[inputValue,onDebouncedChange]),onInputChange=(0,react.useCallback)((function(event,newInputValue){"click"!==event.type&&onDebouncedChange&&onDebouncedChange(newInputValue)}),[onDebouncedChange]),handleOpen=(0,react.useCallback)((function(){return setOpen(!0)}),[]),handleBlur=(0,react.useCallback)((function(){return setOpen(!1)}),[]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Autocomplete.Z,{freeSolo:!0,open,onOpen:handleOpen,onBlur:handleBlur,fullWidth:!0,autoHighlight:!0,handleHomeEndKeys:!0,id:id||name,"data-e2e":dataE2E||void 0,"data-testid":dataTestid,value:null,onChange:handleOnChange,inputValue,onInputChange,options,openOnFocus:!0,filterOptions,componentsProps:{clearIndicator:{style:{fontSize:"1.5rem",lineHeight:1.8}}},ListboxProps:{style:{border:"1px solid ".concat(colors.O.borders),boxShadow:"0px 6px 20px rgba(0, 0, 0, 0.15)"}},renderOption:function(props,option){return(0,emotion_react_browser_esm.az)(ListItem.Z,(0,tslib_es6.pi)({},props,{key:option.value}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ItemText,{option}))},renderInput:function(params){var _a;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({},params,{name,required:!0,fullWidth:!0,autoComplete:"address-line1",error:Boolean(formState.errors.street1),label:t("orders:manualLabel:street"),helperText:(null===(_a=formState.errors)||void 0===_a?void 0:_a.street1)?formState.errors.street1.message:"",onClick:onClickFocus,onFocus:onClickFocus,InputProps:(0,tslib_es6.pi)((0,tslib_es6.pi)({},params.InputProps),{endAdornment:loading&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(InputAdornment.Z,(0,tslib_es6.pi)({position:"end",sx:{mr:.5}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(CircularProgress.Z,{size:"medium"})}))})}))})}})};var showAllOptions=function(filterOptions){return filterOptions};const AddressForm_AddressSuggestionInput=function(_a){var name=_a.name,value=_a.value,id=_a.id,dataE2E=_a.dataE2E,dataTestid=_a.dataTestid,onChange=_a.onChange,onAddress=_a.onAddress,formState=_a.formState,t=_a.t,countryIso2=_a.countryIso2,_b=(0,AddressSuggestionInput_hooks.Q)(value,onChange,onAddress,countryIso2),options=_b.options,suggestionsLoading=_b.suggestionsLoading,selectedAddress=_b.selectedAddress,handleValue=_b.handleValue,inputValue=_b.inputValue;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(AddressForm_AutocompleteInput,{name,value:inputValue||"",id,dataE2E:dataE2E||void 0,dataTestid,formState,t,options,loading:suggestionsLoading,onSelect:selectedAddress,onDebouncedChange:handleValue,filterOptions:showAllOptions})};var useShowAddressBook=__webpack_require__("./app/hooks/featureflags/useShowAddressBook.ts"),validate=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/views/AddressForm/validate.ts"),emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,hasMoreCheckboxes=function(addressType){return addressType===addressBook.S6||addressType===addressBook.Ye},AddressFormGroupWithMargin=(0,emotion_styled_browser_esm.Z)(FormGroup)((function(){return{marginBottom:"0.25rem"}})),AddressFormGroupWithOutMargin=(0,emotion_styled_browser_esm.Z)(FormGroup)((function(){return{marginBottom:"0"}}));const AddressForm_AddressFormMui=function(_a){var _b,_c,formControls=_a.formControls,editingAddressType=_a.editingAddressType,hasRecipientPhoneRequireError=_a.hasRecipientPhoneRequireError,_d=_a.showIsResidential,showIsResidential=void 0===_d||_d,t=_a.t,_e=_a.isAddingNewAddress,isAddingNewAddress=void 0!==_e&&_e,showAddressBook=(0,useShowAddressBook.Z)().showAddressBook,fieldsMaxLengths=(0,validate.$i)(showAddressBook),isEmailRequired=editingAddressType===addressBook.S6,isPhoneNumberRequired=isEmailRequired||hasRecipientPhoneRequireError,shouldShowPhoneRecipientAlert=hasRecipientPhoneRequireError&&"to"===editingAddressType,register=formControls.register,setValue=formControls.setValue,control=formControls.control,formState=formControls.formState,getValues=formControls.getValues,trigger=formControls.trigger,setError=formControls.setError,watch=formControls.watch,AddressFormGroup=hasMoreCheckboxes(editingAddressType)?AddressFormGroupWithOutMargin:AddressFormGroupWithMargin;(0,react.useEffect)((function(){!isPhoneNumberRequired||getValues("phone")||isAddingNewAddress||setError("phone",{type:"validate",message:t("orders:manualLabel:error:phoneRequired")})}),[isPhoneNumberRequired,setError,getValues,t,isAddingNewAddress]);var defaultCountry=(0,user_address_selectors.rV)(),_f=(0,AddressForm_hooks.Sb)(formControls,!1,"address-cell",formState),countryDefaultObj=_f.countryDefaultObj,watchCountry=_f.watchCountry,handleAutocomplete=(0,AddressForm_hooks.$g)(setValue).handleAutocomplete,phoneInputValue=watch("phone");return(0,react.useEffect)((function(){phoneInputValue&&trigger("phone")}),[watchCountry,trigger,phoneInputValue]),(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,{children:[shouldShowPhoneRecipientAlert&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(Alert.Z,(0,tslib_es6.pi)({severity:"error",sx:{boxShadow:"none",marginBottom:shippoTheme.Z.spacing(2),backgroundColor:colors.O.accent.background.error,border:"none"}},{children:t("orders:manualLabel:error:phoneRequireAlert")})),(0,emotion_react_jsx_runtime_browser_esm.BX)(FormGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroupHeader,(0,tslib_es6.pi)({component:"h1",variant:"bodyEmphasized"},{children:t("orders:manualLabel:contactInformation")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"name",control,defaultValue:"",rules:{required:!0,maxLength:fieldsMaxLengths.name},render:function(_a){var _b=_a.field,ref=_b.ref,value=_b.value,rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.name),label:t("orders:manualLabel:name"),required:!0,fullWidth:!0,inputRef:ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"name")},rest))}})})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"company",control,defaultValue:"",rules:{maxLength:fieldsMaxLengths.company},render:function(_a){var _b=_a.field,ref=_b.ref,value=_b.value,rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.company),label:t("orders:manualLabel:company"),fullWidth:!0,inputRef:ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"company")},rest))}})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"email",control,defaultValue:"",rules:{maxLength:fieldsMaxLengths.email},render:function(_a){var _b=_a.field,value=(_b.ref,_b.value),rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.email),label:t("orders:manualLabel:email"),fullWidth:!0,required:!!isEmailRequired,inputRef:register("email",{required:{value:!!isEmailRequired,message:t("orders:manualLabel:error:emailRequired")},pattern:{value:emailRegex,message:t("orders:manualLabel:error:emailInvalid")}}).ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"email")},rest))}})})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"phone",control,defaultValue:"",rules:{maxLength:fieldsMaxLengths.phone},render:function(_a){var _b,_c,_d=_a.field,value=(_d.ref,_d.value),rest=(0,tslib_es6._T)(_d,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.phone),label:t("orders:manualLabel:phone"),inputMode:"tel",fullWidth:!0,required:!!isPhoneNumberRequired,inputRef:register("phone",{required:{value:!!isPhoneNumberRequired,message:editingAddressType===addressBook.S6?t("orders:manualLabel:error:phoneRequired"):null===(_c=null===(_b=formState.errors)||void 0===_b?void 0:_b.phone)||void 0===_c?void 0:_c.message},validate:function(value){return(0,validations.h7)(value,watchCountry)}}).ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"phone")},rest))}})})})]}),(0,emotion_react_jsx_runtime_browser_esm.BX)(FormGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,(0,tslib_es6.pi)({sx:(0,AddressForm_hooks.du)(true,formState,"country")&&formState.errors.country?{mb:0}:{}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{rules:{required:!0},name:"country",control,defaultValue:countries.ZP.US,render:function(_a){var _b=_a.field,ref=_b.ref,value=_b.value,rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(CountryField.ZP,(0,tslib_es6.pi)({},rest,{name:"country",formBaseName:"drawer-address-select",label:t("orders:manualLabel:country"),required:!0,value:value||void 0,defaultCountry,inputRef:ref}))}})})),(0,AddressForm_hooks.du)(true,formState,"country")&&formState.errors.country&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormHelperText.Z,(0,tslib_es6.pi)({error:!0,sx:{ml:1.75,mr:1.75}},{children:t("orders:manualLabel:error:countryInvalid")}))]}),hasMoreCheckboxes(editingAddressType),(0,emotion_react_jsx_runtime_browser_esm.BX)(AddressFormGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroupHeader,(0,tslib_es6.pi)({component:"h2",variant:"bodyEmphasized"},{children:t("orders:manualLabel:address")})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{control,render:function(_a){var _b=_a.field,rest=(_b.ref,(0,tslib_es6._T)(_b,["ref"]));return(0,emotion_react_jsx_runtime_browser_esm.tZ)(AddressForm_AddressSuggestionInput,(0,tslib_es6.pi)({},rest,{name:"street1",onAddress:handleAutocomplete,formState,t,countryIso2:watch("country.iso2")}))},name:"street1",defaultValue:"",rules:{required:"Street can't be blank",maxLength:{value:fieldsMaxLengths.street1,message:t("orders:manualLabel:error:maxLengthFieldWithName",{fieldName:"Street1",maxLength:fieldsMaxLengths.street1})}}})})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"street2",control,defaultValue:"",rules:{maxLength:fieldsMaxLengths.street2},render:function(_a){var _b=_a.field,value=(_b.ref,_b.value),rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.street2),label:t("orders:manualLabel:streetLine2"),fullWidth:!0,autoComplete:"address-line2",inputRef:register("street2").ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"street2")},rest))}})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"city",control,defaultValue:"",rules:{required:!0,maxLength:fieldsMaxLengths.city},render:function(_a){var _b=_a.field,value=(_b.ref,_b.value),rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.city),label:t("orders:manualLabel:city"),required:!0,fullWidth:!0,inputRef:register("city",{required:{value:!0,message:t("orders:manualLabel:error:cityRequired")}}).ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"city")},rest))}})})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(StateZipContainer,(0,tslib_es6.pi)({container:!0},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.Z,(0,tslib_es6.pi)({item:!0,xs:5.75},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.BX)(FormInput,(0,tslib_es6.pi)({sx:{mb:0}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{control,defaultValue:"",name:"state",rules:{required:{value:(0,Address.Fh)(countryDefaultObj),message:t("orders:manualLabel:error:stateRequired")}},render:function(_a){var _b=_a.field,ref=_b.ref,rest=(0,tslib_es6._T)(_b,["ref"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(StateField_StateFieldMui,(0,tslib_es6.pi)({country:countryDefaultObj||countries.ZP.US,label:t("orders:manualLabel:state"),inputRef:ref,formBaseName:"state-field"},rest))}}),(0,AddressForm_hooks.du)(true,formState,"state")&&formState.errors.state&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormHelperText.Z,(0,tslib_es6.pi)({error:!0,sx:{ml:1.75,mr:1.75}},{children:null===(_c=null===(_b=formState.errors)||void 0===_b?void 0:_b.state)||void 0===_c?void 0:_c.message}))]}))})})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Grid.Z,(0,tslib_es6.pi)({item:!0,xs:5.75},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormGroup,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormInput,(0,tslib_es6.pi)({sx:{mb:0}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{rules:{required:!0,validate:{checkZipIsValidInCountry:function(zip){return(0,validations.B6)(getValues("country"),zip)}},maxLength:fieldsMaxLengths.zip},name:"zip",control,defaultValue:"",render:function(_a){var _b=_a.field,value=(_b.ref,_b.value),rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TextField.Z,(0,tslib_es6.pi)({error:Boolean(formState.errors.zip),label:t("orders:manualLabel:postalCode"),className:(0,AddressForm_hooks.du)(true,formState,"zip")?"addError":"",required:!(!countryDefaultObj||null===countryDefaultObj)&&(0,Address.wi)(countryDefaultObj),fullWidth:!0,inputRef:register("zip",{required:!(!countryDefaultObj||null===countryDefaultObj)&&(0,Address.wi)(countryDefaultObj),validate:{isValidZipForCountry:function(value){var countryIso2=null==watchCountry?void 0:watchCountry.iso2;return!value||!countryIso2||(0,validations.B6)(countryIso2,value)}}}).ref,value:value||"",helperText:(0,validate.uL)(t,null==formState?void 0:formState.errors,"zip")},rest))}})}))})}))]})),showIsResidential&&editingAddressType===addressBook.w7&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(index_esm.Qr,{name:"isResidential",control,defaultValue:!1,render:function(_a){var _b=_a.field,ref=_b.ref,value=_b.value,rest=(0,tslib_es6._T)(_b,["ref","value"]);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(FormControlLabel.Z,{label:t("orders:manualLabel:isResidential"),id:"is-residential",control:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Checkbox.Z,(0,tslib_es6.pi)({checked:Boolean(value),inputRef:ref},rest))})}})})]})]})}},"./app/pages/Settings/Recipients/contexts/RecipientAddressFormProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>useRecipientAddressFormContext});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./app/contexts/DrawerProvider.tsx"),__webpack_require__("./app/services/api.ts"),__webpack_require__("./app/utils/utils.ts");var _a,constants_api=__webpack_require__("./app/constants/api.ts");(_a={})[constants_api.eA]=constants_api.U8;__webpack_require__("./app/types/Address.ts"),__webpack_require__("./app/hooks/featureflags/useShowAddressBook.ts"),__webpack_require__("./app/contexts/GlobalComponentsProvider.tsx"),__webpack_require__("./app/hooks/useRequest.ts"),__webpack_require__("./app/utils/TrackingHelper/utils.ts");__webpack_require__("./app/utils/TrackingHelper/index.ts"),__webpack_require__("./app/utils/TrackingHelper/types.ts");var RecipientAddressFormContext=(0,react.createContext)({closeFormDrawer:function(){},createOrUpdateAddress:function(){return Promise.resolve()},deleteAddress:function(){return Promise.resolve()},editingAddress:null,openFormDrawer:function(){},setEditingAddress:function(){},setCreateAddressCallback:function(){},isAddressFormLoading:!1}),useRecipientAddressFormContext=function(){return(0,react.useContext)(RecipientAddressFormContext)}},"./app/services/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{xS:()=>armorAPI});var _a,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),axios=__webpack_require__("./node_modules/axios/index.js"),axios_default=__webpack_require__.n(axios),api=__webpack_require__("./app/constants/api.ts");function setupBaseHeaders(envId){var _a,baseHeaders=((_a={})[api.gA]=api.kq,_a);if("production"===envId)return baseHeaders;baseHeaders["X-HTTP-Request-Source"]="React-".concat(envId);var lang=function readFromLocalStorage(keyName){return window.localStorage.getItem(keyName)}("i18nextLng");return lang&&(baseHeaders["Accept-Language"]=lang),baseHeaders}axios_default().create({baseURL:"https://goshippo-dev.sisense.com"}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://api-dev-qa.shippodev.com",headers:(0,tslib_es6.pi)({},setupBaseHeaders("dynamic"))});var armorAPI=axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")});axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com/store_connect",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:setupBaseHeaders("dynamic")}),axios_default().create({baseURL:"https://service-dev-qa.shippodev.com",headers:(0,tslib_es6.pi)((0,tslib_es6.pi)({},setupBaseHeaders("dynamic")),(_a={},_a[api.gA]=api.V1,_a))})},"./app/types/PackingSlipFormat.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sb:()=>PacklingSlipFormatIcons,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,PackingSlipFormat,assets_icons_print_format_slip_pdf_4x6_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/assets/icons/print-format/slip_pdf_4x6.svg"),assets_icons_print_format_slip_pdf_4x8_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/assets/icons/print-format/slip_pdf_4x8.svg"),assets_icons_print_format_slip_pdf_8x11_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/assets/icons/print-format/slip_pdf_8x11.svg"),assets_icons_print_format_slip_png_4x6_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/assets/icons/print-format/slip_png_4x6.svg"),assets_icons_print_format_slip_png_4x8_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/assets/icons/print-format/slip_png_4x8.svg"),assets_icons_print_format_slip_zplii_4x6_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/assets/icons/print-format/slip_zplii_4x6.svg"),assets_icons_print_format_slip_zplii_4x8_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./app/assets/icons/print-format/slip_zplii_4x8.svg");!function(PackingSlipFormat){PackingSlipFormat.PSLIP_8X11_PDF="PDF",PackingSlipFormat.PSLIP_4X6_PDF="PDF_4X6",PackingSlipFormat.PSLIP_4X6_PNG="PNG_4x6",PackingSlipFormat.PSLIP_4X6_ZPLII="ZPLII_4x6",PackingSlipFormat.PSLIP_4X8_PDF="PDF_4X8",PackingSlipFormat.PSLIP_4X8_PNG="PNG_4x8",PackingSlipFormat.PSLIP_4X8_ZPLII="ZPLII_4x8"}(PackingSlipFormat||(PackingSlipFormat={}));PackingSlipFormat.PSLIP_8X11_PDF;var PacklingSlipFormatIcons=((_a={})[PackingSlipFormat.PSLIP_8X11_PDF]=assets_icons_print_format_slip_pdf_8x11_svg__WEBPACK_IMPORTED_MODULE_2__,_a[PackingSlipFormat.PSLIP_4X6_PDF]=assets_icons_print_format_slip_pdf_4x6_svg__WEBPACK_IMPORTED_MODULE_0__,_a[PackingSlipFormat.PSLIP_4X6_PNG]=assets_icons_print_format_slip_png_4x6_svg__WEBPACK_IMPORTED_MODULE_3__,_a[PackingSlipFormat.PSLIP_4X6_ZPLII]=assets_icons_print_format_slip_zplii_4x6_svg__WEBPACK_IMPORTED_MODULE_5__,_a[PackingSlipFormat.PSLIP_4X8_PDF]=assets_icons_print_format_slip_pdf_4x8_svg__WEBPACK_IMPORTED_MODULE_1__,_a[PackingSlipFormat.PSLIP_4X8_ZPLII]=assets_icons_print_format_slip_zplii_4x8_svg__WEBPACK_IMPORTED_MODULE_6__,_a[PackingSlipFormat.PSLIP_4X8_PNG]=assets_icons_print_format_slip_png_4x8_svg__WEBPACK_IMPORTED_MODULE_4__,_a);const __WEBPACK_DEFAULT_EXPORT__=PackingSlipFormat},"./app/pages/Orders/Blackbeard/Drawers/AddressBookDrawerForm/AddressBookDrawerForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddAddress:()=>AddAddress,EditAddress:()=>EditAddress,default:()=>AddressBookDrawerForm_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),MobileAndDesktopDrawer=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/shared/MobileAndDesktopDrawer/index.js"),AddressForm=__webpack_require__("./app/components/shared/AddressForm/index.ts"),Address=__webpack_require__("./app/types/Address.ts"),AddressFormMui=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/views/AddressForm/AddressFormMui.tsx"),DrawerProvider=__webpack_require__("./app/contexts/DrawerProvider.tsx"),RecipientAddressFormProvider=__webpack_require__("./app/pages/Settings/Recipients/contexts/RecipientAddressFormProvider.tsx"),countries=__webpack_require__("./app/constants/countries.ts"),AddressFormWrapper=function(_a){var t=_a.t,addressInfoForForm=_a.addressInfoForForm,onUpdateAddress=_a.onUpdateAddress,setFooterOptions=(0,DrawerProvider.M)().setFooterOptions,_b=(0,RecipientAddressFormProvider.j)(),closeFormDrawer=_b.closeFormDrawer,deleteAddress=_b.deleteAddress,isAddressFormLoading=_b.isAddressFormLoading,baseJsonAddress=(0,react.useMemo)((function(){return(0,Address.EF)(addressInfoForForm)}),[addressInfoForForm]),addressFormControls=(0,AddressForm.qX)(baseJsonAddress||void 0),formState=addressFormControls.formState,handleSubmit=addressFormControls.handleSubmit,isDirty=formState.isDirty,isValid=formState.isValid,isAddressUpdate=!!(null==baseJsonAddress?void 0:baseJsonAddress.objectId),reset=addressFormControls.reset;(0,react.useEffect)((function(){reset(baseJsonAddress||{objectId:"",name:"",company:"",streetNumber:"",street1:"",street2:"",city:"",state:"",zip:"",country:countries.ZP.US,phone:"",email:"",isResidential:!1})}),[baseJsonAddress,reset]);var onSubmitForm=(0,react.useCallback)((function(newAddress){isValid&&onUpdateAddress(newAddress)}),[isValid,onUpdateAddress]),handleDeleteAddress=(0,react.useCallback)((function(){return(0,tslib_es6.mG)(void 0,void 0,void 0,(function(){return(0,tslib_es6.Jh)(this,(function(_a){switch(_a.label){case 0:return(null==baseJsonAddress?void 0:baseJsonAddress.objectId)?[4,deleteAddress(null==baseJsonAddress?void 0:baseJsonAddress.objectId)]:[3,2];case 1:_a.sent(),_a.label=2;case 2:return[2]}}))}))}),[null==baseJsonAddress?void 0:baseJsonAddress.objectId,deleteAddress]);return(0,react.useEffect)((function(){var handleFormSubmit=handleSubmit(onSubmitForm);setFooterOptions({footerButtonPrimary:{text:t("orders:phrases:save"),action:function(){handleFormSubmit()},disabled:!isDirty||!isValid||isAddressFormLoading},footerButtonSecondary:isAddressUpdate?void 0:{text:t("orders:phrases:cancel"),action:closeFormDrawer},explicitFooterObject:isAddressUpdate?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Button.Z,(0,tslib_es6.pi)({onClick:handleDeleteAddress,variant:"text",color:"error",disabled:isAddressFormLoading},{children:t("settings:addressBook.recipient.deleteAddress")}))}):void 0})}),[isDirty,isValid,t,isAddressUpdate,isAddressFormLoading,handleDeleteAddress]),(0,emotion_react_jsx_runtime_browser_esm.tZ)(AddressFormMui.Z,{t,hasRecipientPhoneRequireError:!1,formControls:addressFormControls,editingAddressType:"to"})};const AddressBookDrawerForm_AddressBookDrawerForm=function(_a){var addressInfoForForm=_a.addressInfoForForm,onUpdateAddress=_a.onUpdateAddress,open=_a.open,t=_a.t,footerOptions=(0,DrawerProvider.M)().footerOptions,closeFormDrawer=(0,RecipientAddressFormProvider.j)().closeFormDrawer;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(MobileAndDesktopDrawer.Z,(0,tslib_es6.pi)({fullHeight:!0,fullWidth:!0,title:t(addressInfoForForm?"settings:recipients:editAddress":"settings:recipients:addAddress"),open,onClose:closeFormDrawer,footerButtonPrimary:footerOptions.footerButtonPrimary,footerButtonSecondary:footerOptions.footerButtonSecondary,explicitFooterObject:footerOptions.explicitFooterObject},{children:open&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(AddressFormWrapper,{t,addressInfoForForm,onUpdateAddress})}))};var redux=__webpack_require__("./node_modules/redux/es/redux.js"),translate=__webpack_require__("./app/utils/translate.ts"),reducers=__webpack_require__("./app/reducers/index.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js");const AddressBookDrawerForm_stories={title:"Address Book / Address Drawer Form",component:AddressBookDrawerForm_AddressBookDrawerForm,argTypes:{onCancel:{action:"onCancel"},onUpdateAddress:{action:"onUpdateAddress"}}};var AddressDrawerFormWithTranslate=(0,translate.Iu)(["orders","settings"])(AddressBookDrawerForm_AddressBookDrawerForm),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(es.zt,(0,tslib_es6.pi)({store:(0,redux.MT)((0,redux.UY)(reducers.Z))},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(DrawerProvider.D,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(AddressDrawerFormWithTranslate,(0,tslib_es6.pi)({},args))})}))},AddAddress=Template.bind({});AddAddress.args={addressInfoForForm:null,open:!0,t:function(key){return key}};var EditAddress=Template.bind({});EditAddress.args={open:!0,t:function(key){return key}},AddAddress.parameters={...AddAddress.parameters,docs:{...AddAddress.parameters?.docs,source:{originalSource:"(args: AddressBookDrawerFormProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <DrawerProvider>\n      <AddressDrawerFormWithTranslate {...args} />\n    </DrawerProvider>\n  </Provider>",...AddAddress.parameters?.docs?.source}}},EditAddress.parameters={...EditAddress.parameters,docs:{...EditAddress.parameters?.docs,source:{originalSource:"(args: AddressBookDrawerFormProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <DrawerProvider>\n      <AddressDrawerFormWithTranslate {...args} />\n    </DrawerProvider>\n  </Provider>",...EditAddress.parameters?.docs?.source}}}}}]);