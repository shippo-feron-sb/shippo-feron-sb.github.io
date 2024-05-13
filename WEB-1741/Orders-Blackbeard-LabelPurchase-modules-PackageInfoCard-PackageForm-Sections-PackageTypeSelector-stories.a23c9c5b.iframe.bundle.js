"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5805],{"./app/components/SelectableArea/SelectableArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectableArea});var templateObject_1,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Button=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.Ay)("button")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.ue)(["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid #26d990;\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: #425b66;\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"],["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid #26d990;\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: #425b66;\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1.5,2),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.borders,_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.white,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.text.default,_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A.transitions.duration.shortest,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.$[2],_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.selectedBackground,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.primary,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.backgroundDeemphasized,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.T.secondaryDisabled),SelectableArea=function(_a){var selected=_a.selected,children=_a.children,attributes=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["selected","children"]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(Button,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},attributes,{"aria-pressed":selected?"true":"false"},{children}))}},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _a,_b,_c,_d;__webpack_require__.d(__webpack_exports__,{Mx:()=>TransitCarrier,Uf:()=>carrierTransitTimeRange,nB:()=>SelectedParcelType,tf:()=>blackbeardDistanceUnit,zT:()=>blackbeardSignatureConfirmation});var blackbeardDistanceUnit={CM:"cm",IN:"in",MM:"mm"};var TransitCarrier,SelectedParcelType=function(){function SelectedParcelType(oneOffBoxOrTubeSelected,oneOffPolymailerSelected,selectedUserParcelTemplate,selectedCarrierParcelTemplate){this.oneOffBoxOrTubeSelected=oneOffBoxOrTubeSelected,this.oneOffPolymailerSelected=oneOffPolymailerSelected,this.selectedUserParcelTemplate=selectedUserParcelTemplate,this.selectedCarrierParcelTemplate=selectedCarrierParcelTemplate}return SelectedParcelType.unselected=function(){return new SelectedParcelType(!1,!1)},SelectedParcelType.selectCustomBoxOrTube=function(){return new SelectedParcelType(!0,!1)},SelectedParcelType.selectCustomPolymailer=function(){return new SelectedParcelType(!1,!0)},SelectedParcelType.selectUserParcelTemplate=function(template){return new SelectedParcelType(!1,!1,template)},SelectedParcelType.selectCarrierParcelTemplate=function(template){return new SelectedParcelType(!1,!1,void 0,template)},SelectedParcelType.prototype.selectFromTemplate=function(userTemplate,carrierTemplate){return userTemplate||carrierTemplate?new SelectedParcelType(!1,!1,userTemplate,carrierTemplate):this},SelectedParcelType.prototype.isUnselected=function(){return!this.isCustomSelected()&&!this.isTemplateSelected()},SelectedParcelType.prototype.isCustomSelected=function(){return this.isCustomBoxOrTubeSelected()||this.isCustomPolymailerSelected()},SelectedParcelType.prototype.isTemplateSelected=function(){return this.isUserParcelTemplateSelected()||this.isCarrierParcelTemplateSelected()},SelectedParcelType.prototype.isCustomBoxOrTubeSelected=function(){return this.oneOffBoxOrTubeSelected},SelectedParcelType.prototype.isCustomPolymailerSelected=function(){return this.oneOffPolymailerSelected},SelectedParcelType.prototype.isUserParcelTemplateSelected=function(){return void 0!==this.selectedUserParcelTemplate},SelectedParcelType.prototype.isCarrierParcelTemplateSelected=function(){return void 0!==this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedUserParcelTemplate=function(){return this.selectedUserParcelTemplate},SelectedParcelType.prototype.getSelectedCarrierParcelTemplate=function(){return this.selectedCarrierParcelTemplate},SelectedParcelType.prototype.getSelectedParcelTemplate=function(){return this.isUserParcelTemplateSelected()?this.getSelectedUserParcelTemplate():this.getSelectedCarrierParcelTemplate()},SelectedParcelType.prototype.isEqual=function(other){return this.isUnselected()?other.isUnselected():this.isCustomBoxOrTubeSelected()?other.isCustomBoxOrTubeSelected():this.isCustomPolymailerSelected()?other.isCustomPolymailerSelected():JSON.stringify(this.getSelectedParcelTemplate())===JSON.stringify(other.getSelectedParcelTemplate())},SelectedParcelType}(),blackbeardSignatureConfirmation={STANDARD:"STANDARD",ADULT:"ADULT",CERTIFIED:"CERTIFIED",INDIRECT:"INDIRECT",CARRIER_CONFIRMATION:"CARRIER_CONFIRMATION"};!function(TransitCarrier){TransitCarrier.USPS="USPS",TransitCarrier.UPS="UPS",TransitCarrier.FedEx="FedEx"}(TransitCarrier||(TransitCarrier={}));var USPS_GroundAdvantage="usps_ground_advantage",USPS_PriorityMail="usps_priority_mail",USPS_PriorityMailExpress="usps_priority_mail_express",UPS_Ground="ups_ground",UPS_GroundSaver="ups_ground_saver",FedEx_HomeDelivery="fedex_home_delivery",FedEx_TwoDay="fedex_2_day",FedEx_GroundEconomy="fedex_ground_economy",carrierTransitTimeRange=((_a={})[TransitCarrier.USPS]=((_b={})[USPS_GroundAdvantage]={min:2,max:5,type:"business"},_b[USPS_PriorityMail]={min:1,max:3,type:"business"},_b[USPS_PriorityMailExpress]={min:2,max:2,type:"calendar"},_b),_a[TransitCarrier.UPS]=((_c={})[UPS_Ground]={min:1,max:5,type:"business"},_c[UPS_GroundSaver]={min:2,max:7,type:"business"},_c),_a[TransitCarrier.FedEx]=((_d={})[FedEx_HomeDelivery]={min:1,max:5,type:"business"},_d[FedEx_TwoDay]={min:2,max:2,type:"business"},_d[FedEx_GroundEconomy]={min:2,max:7,type:"business"},_d),_a)},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/PackageInfoCard/PackageForm/Sections/PackageTypeSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxSelected:()=>BoxSelected,PolymailerSelected:()=>PolymailerSelected,default:()=>PackageTypeSelector_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),types=__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/types.ts"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),isSoftPack=function(template){return"Soft Pack"===(null==template?void 0:template.name)},isParcel2D=function(parcel){return!!parcel&&(function(parcel){return!parcel.userParcelTemplate&&!!parcel.carrierParcelTemplate}(parcel)?isSoftPack(parcel.carrierParcelTemplate):!(null==parcel?void 0:parcel.userParcelTemplate)&&!(null==parcel?void 0:parcel.height))},SelectableArea=(types.tf.IN,__webpack_require__("./app/components/SelectableArea/SelectableArea.tsx")),PackageTypeButton=(0,styled.Ay)(SelectableArea.a)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  justify-content: center;\n  align-items: center;\n  height: 3.75rem;\n"],["\n  justify-content: center;\n  align-items: center;\n  height: 3.75rem;\n"])));const Sections_PackageTypeSelector=function(_a){var parcels=_a.parcels,selectedParcelType=_a.selectedParcelType,onSelectBox=_a.onSelectBox,onSelectPolyMailer=_a.onSelectPolyMailer,t=_a.t,boxSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?!isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomBoxOrTubeSelected()}(selectedParcelType,parcels),polymailerSelected=function(selectedParcelType,parcels){return selectedParcelType.isUnselected()&&1===(null==parcels?void 0:parcels.length)?isParcel2D((0,lodash.first)(parcels)):selectedParcelType.isCustomPolymailerSelected()}(selectedParcelType,parcels);return(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({spacing:1,direction:"row",sx:{width:"100%",gap:shippoTheme.A.spacing(1)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeButton,(0,tslib_es6.Cl)({onClick:onSelectBox,selected:boxSelected,"data-testid":"packageTypeSelector-box",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:colors.T.text.default},{children:t("orders:packageDimensionTypes:boxRadioShortLabel")}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeButton,(0,tslib_es6.Cl)({onClick:onSelectPolyMailer,selected:polymailerSelected,"data-testid":"packageTypeSelector-poly",tabIndex:0},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"div",color:colors.T.text.default},{children:t("orders:packageDimensionTypes:boxPolymailerLabel")}))}))]}))};var templateObject_1;const PackageTypeSelector_stories={title:"Package Type Selector",component:Sections_PackageTypeSelector,parameters:{},argTypes:{}};var PackageTypeSelectorWithTranslate=(0,translate.Tl)("orders")(Sections_PackageTypeSelector),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{width:"400px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageTypeSelectorWithTranslate,(0,tslib_es6.Cl)({},args))}))},BoxSelected=Template.bind({});BoxSelected.args={parcels:[],selectedParcelType:types.nB.selectCustomBoxOrTube(),onSelectBox:function(){},onSelectPolyMailer:function(){}};var PolymailerSelected=Template.bind({});PolymailerSelected.args={parcels:[],selectedParcelType:types.nB.selectCustomPolymailer(),onSelectBox:function(){},onSelectPolyMailer:function(){}},BoxSelected.parameters={...BoxSelected.parameters,docs:{...BoxSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...BoxSelected.parameters?.docs?.source}}},PolymailerSelected.parameters={...PolymailerSelected.parameters,docs:{...PolymailerSelected.parameters?.docs,source:{originalSource:"(args: PackageTypeSelectorProps) => {\n  return <div style={{\n    width: '400px'\n  }}>\n      <PackageTypeSelectorWithTranslate {...args} />\n    </div>;\n}",...PolymailerSelected.parameters?.docs?.source}}}}}]);