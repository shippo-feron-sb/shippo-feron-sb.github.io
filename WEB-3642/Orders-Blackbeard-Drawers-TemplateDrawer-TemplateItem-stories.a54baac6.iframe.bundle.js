(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1515],{"./app/assets/logo/shippo_ico_gray.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"ecd77fa3752e092361e9f7817373f89e.svg"},"./app/components/SelectableArea/SelectableArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>SelectableArea});var templateObject_1,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),Button=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.Ay)("button")(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.ue)(["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid ",";\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"],["\n  display: flex;\n  flex: 1;\n\n  gap: ",";\n  padding: ",";\n\n  border-style: solid;\n  border-color: ",";\n  border-radius: ",";\n  border-width: 1px;\n\n  background: ",";\n  color: ",";\n\n  text-align: left;\n  font-size: 1rem;\n\n  cursor: pointer;\n  transition: box-shadow ","ms;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: 4px solid ",";\n  }\n\n  &[aria-pressed='true'] {\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n  }\n\n  &:disabled {\n    color: ",";\n    background: ",";\n    border-color: ",";\n    border-width: 2px;\n    box-shadow: none;\n  }\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.spacing(1.5,2),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.borders,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.spacing(1),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.white,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.text.default,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A.transitions.duration.shortest,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.$[2],_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.borderFocus,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.selectedBackground,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.primary,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.text.disabled,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.backgroundDeemphasized,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.secondaryDisabled),SelectableArea=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_a,ref){var children=_a.children,selected=_a.selected,attributes=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Tt)(_a,["children","selected"]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(Button,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({},attributes,{"aria-pressed":selected?"true":"false",ref},{children}))}))},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Badge/Badge.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_constants_carriers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/carriers.ts");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var _b,count=_a.count,provider=_a.provider,size=_a.size;_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.bK[provider]&&(provider=_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.bK[provider]);var icon=null===(_b=_constants_carriers__WEBPACK_IMPORTED_MODULE_0__.Ay.find((function(x){return x.name.toLowerCase()===provider.toLowerCase()})))||void 0===_b?void 0:_b.icon,sizeOrDefault=size||40;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({badgeContent:count,color:"default",sx:{".MuiBadge-badge":{backgroundColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.secondary,color:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.T.white}}},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)("img",{alt:provider,src:icon,style:{borderRadius:"0.125rem",height:"".concat(sizeOrDefault,"px"),width:"".concat(sizeOrDefault,"px")}})}))}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/Drawers/TemplateDrawer/TemplateItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CarrierParcel:()=>CarrierParcel,CarrierParcelNoDimensions:()=>CarrierParcelNoDimensions,MixedSelectionsParcel:()=>MixedSelectionsParcel,UserParcel:()=>UserParcel,default:()=>TemplateItem_stories});var templateObject_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),AcUnit=__webpack_require__("./node_modules/@mui/icons-material/esm/AcUnit.js"),translate=__webpack_require__("./app/utils/translate.ts"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography_Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),styles_colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),SelectableArea=__webpack_require__("./app/components/SelectableArea/SelectableArea.tsx"),shippo_ico_gray=__webpack_require__("./app/assets/logo/shippo_ico_gray.svg"),Stack=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js")),CarrierIconMui=((0,emotion_styled_browser_esm.A)(Stack.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  margin-top: 1.2rem;\n  gap: 1rem;\n"],["\n  margin-top: 1.2rem;\n  gap: 1rem;\n"]))),__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx")),finalSubtext=("1px solid ".concat(styles_colors.T.borders),function(sizeText,weightText){return sizeText&&weightText?"".concat(weightText,", ").concat(sizeText):sizeText||weightText||""}),findCarrierTokenByTemplateToken=function(templateToken,carrierProvidedTemplates){var e_1,_a;if(carrierProvidedTemplates&&templateToken)try{for(var _b=(0,tslib_es6.Ju)(Object.entries(carrierProvidedTemplates)),_c=_b.next();!_c.done;_c=_b.next()){var _d=(0,tslib_es6.zs)(_c.value,2),key=_d[0];if(void 0!==(_d[1].find((function(carrierParcelTemplate){return carrierParcelTemplate.token===templateToken}))||void 0))return key}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}},getCarrierIcon=function(carrierToken){return carrierToken?(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{alignSelf:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CarrierIconMui.A,{provider:carrierToken})})):(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{alt:"Shippo",src:shippo_ico_gray,style:{alignSelf:"center",height:"40px",width:"40px"}})},StyledListItem=(0,emotion_styled_browser_esm.A)("li")(TemplateItem_templateObject_1||(TemplateItem_templateObject_1=(0,tslib_es6.ue)(["\n  list-style: none;\n"],["\n  list-style: none;\n"]))),StyledSelectableArea=(0,emotion_styled_browser_esm.A)(SelectableArea.a)(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  width: 100%;\n  align-items: center;\n  padding: ",";\n"],["\n  width: 100%;\n  align-items: center;\n  padding: ",";\n"])),shippoTheme.A.spacing(2)),PackageCount=(0,emotion_styled_browser_esm.A)(Typography_Typography.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  position: absolute;\n  border-radius: 100px;\n  background-color: ",";\n  color: ",";\n  top: -25%;\n  right: -20%;\n  line-height: 20px;\n  padding: 2px 8px;\n"],["\n  position: absolute;\n  border-radius: 100px;\n  background-color: ",";\n  color: ",";\n  top: -25%;\n  right: -20%;\n  line-height: 20px;\n  padding: 2px 8px;\n"])),styles_colors.T.secondary,styles_colors.T.white);const TemplateDrawer_TemplateItem=function(_a){var carrierProvidedTemplates=_a.carrierProvidedTemplates,count=_a.count,icon=_a.icon,isMixedSelection=_a.isMixedSelection,isSelected=_a.isSelected,onClick=_a.onClick,template=_a.template,templateDetails=function(template,overrideWeight,overrideWeightUnit,icon,carrierProvidedTemplates,isMixedSelection){var _a;if(isMixedSelection)return{iconComponent:getCarrierIcon(),name:(0,emotion_react_jsx_runtime_browser_esm.Y)(translate.x6,{i18nKey:"orders:calculateRates:tabs:shipmentInfo:mixedSelections"}),providerName:"shippo",subText:"",uniqueKey:"mixed-selections"};if(template){if("provider"in template){var distanceUnit=template.distanceUnit,height=template.height,length_4=template.length,name_1=template.name,provider=template.provider,token=template.token,width=template.width,carrierToken=provider||findCarrierTokenByTemplateToken(token,carrierProvidedTemplates),noSize=0===length_4&&0===width&&0===height,iconComponent=icon||getCarrierIcon(carrierToken),weightText=overrideWeight&&overrideWeightUnit?"".concat(overrideWeight," ").concat(overrideWeightUnit):"",sizeText=noSize?"":"".concat(length_4," x ").concat(width," x ").concat(height," ").concat(distanceUnit);return{iconComponent,name:name_1,providerName:provider,subText:subText=finalSubtext(sizeText,weightText),uniqueKey:"".concat(provider,"-").concat(token)}}carrierToken=template.carrierTemplate?findCarrierTokenByTemplateToken(template.carrierTemplate.token,carrierProvidedTemplates):void 0;var name_2=template.name,objectId=template.objectId,packageWeight=template.weight,packageWeightUnit=template.weightUnit,weight=overrideWeight||packageWeight,weightUnit=overrideWeightUnit||packageWeightUnit,subText=(sizeText=function(template){var _a;if("Soft Pack"===(null===(_a=null==template?void 0:template.carrierTemplate)||void 0===_a?void 0:_a.name)){var distanceUnit=template.distanceUnit,length_1=template.length,width=template.width;return"".concat(length_1," x ").concat(width," ").concat(distanceUnit)}if(null==template?void 0:template.carrierTemplate){var _b=template.carrierTemplate,height=(distanceUnit=_b.distanceUnit,_b.height),length_2=_b.length;return width=_b.width,0===length_2&&0===width&&0===height?"":"".concat(length_2," x ").concat(width," x ").concat(height," ").concat(distanceUnit)}distanceUnit=template.distanceUnit,height=template.height;var length_3=template.length;return width=template.width,"".concat(length_3," x ").concat(width," x ").concat(height," ").concat(distanceUnit)}(template),weightText=weight&&weightUnit?"".concat(weight," ").concat(weightUnit):void 0,finalSubtext(sizeText,weightText));return{iconComponent:getCarrierIcon(carrierToken),name:(null===(_a=null==template?void 0:template.carrierTemplate)||void 0===_a?void 0:_a.name)||name_2,providerName:carrierToken||"shippo",subText,uniqueKey:objectId||"".concat(name_2,"-").concat(subText)}}}(template,_a.weight,_a.weightUnit,icon,carrierProvidedTemplates,isMixedSelection);return(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledListItem,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(StyledSelectableArea,(0,tslib_es6.Cl)({"data-template-distance-unit":(null==template?void 0:template.distanceUnit)||"","data-template-height":(null==template?void 0:template.height)||"","data-template-length":(null==template?void 0:template.length)||"","data-template-name":(null==template?void 0:template.name)||"","data-template-weight":(null==template?void 0:template.hasOwnProperty("weight"))?template.weight:"","data-template-weight-unit":(null==template?void 0:template.hasOwnProperty("weight"))?template.weightUnit:"","data-template-width":(null==template?void 0:template.width)||"","data-testid":"template-".concat(null==templateDetails?void 0:templateDetails.uniqueKey),onClick,selected:isSelected},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",(0,tslib_es6.Cl)({style:{display:"flex",position:"relative"}},{children:[null==templateDetails?void 0:templateDetails.iconComponent,!!count&&count>1&&(0,emotion_react_jsx_runtime_browser_esm.Y)(PackageCount,(0,tslib_es6.Cl)({component:"div","data-testid":"template-package-count",variant:"captionEmphasized"},{children:count}))]})),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",(0,tslib_es6.Cl)({style:{display:"flex",flexDirection:"column",justifyContent:"center"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography_Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body"},{children:null==templateDetails?void 0:templateDetails.name})),!!(null==templateDetails?void 0:templateDetails.subText)&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography_Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"caption"},{children:null==templateDetails?void 0:templateDetails.subText}))]}))]}))})};var TemplateItem_templateObject_1,templateObject_2,templateObject_3;const TemplateItem_stories={argTypes:{isSelected:{control:{type:"boolean"},options:[!0,!1]}},component:TemplateDrawer_TemplateItem,title:"Template Item"};var TemplatePropsWithTranslate=(0,translate.Tl)("shipments-page")(TemplateDrawer_TemplateItem),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{maxWidth:"450px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(TemplatePropsWithTranslate,(0,tslib_es6.Cl)({},args))}))},UserParcel=Template.bind({});UserParcel.args={count:50,isSelected:!1,template:{carrierTemplate:void 0,distanceUnit:"in",height:5.5,isDefault:!1,length:3.3,name:"Example User Template",weight:2.5,weightUnit:"lb",width:4.4},weight:"12.612345",weightUnit:"lb"};var CarrierParcel=Template.bind({});CarrierParcel.args={count:12,icon:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{alignSelf:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AcUnit.A,{style:{alignSelf:"center",height:"40px",width:"40px"}})})),isSelected:!1,template:{distanceUnit:"in",height:5.5,isVariableDimensions:!1,length:3.3,name:"Example Carrier Template",provider:"USPS-Space-Exploration",token:"foo-bar-baz",width:4.4}};var CarrierParcelNoDimensions=Template.bind({});CarrierParcelNoDimensions.args={count:0,icon:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",(0,tslib_es6.Cl)({style:{alignSelf:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AcUnit.A,{style:{alignSelf:"center",height:"40px",width:"40px"}})})),isSelected:!1,template:{distanceUnit:"in",height:0,isVariableDimensions:!1,length:0,name:"Carrier Without Dimensions",provider:"USPS-Space-Exploration",token:"foo-bar-baz",width:0}};var MixedSelectionsParcel=Template.bind({});MixedSelectionsParcel.args={count:5,isMixedSelection:!0,template:void 0},UserParcel.parameters={...UserParcel.parameters,docs:{...UserParcel.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...UserParcel.parameters?.docs?.source}}},CarrierParcel.parameters={...CarrierParcel.parameters,docs:{...CarrierParcel.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...CarrierParcel.parameters?.docs?.source}}},CarrierParcelNoDimensions.parameters={...CarrierParcelNoDimensions.parameters,docs:{...CarrierParcelNoDimensions.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...CarrierParcelNoDimensions.parameters?.docs?.source}}},MixedSelectionsParcel.parameters={...MixedSelectionsParcel.parameters,docs:{...MixedSelectionsParcel.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...MixedSelectionsParcel.parameters?.docs?.source}}}}}]);