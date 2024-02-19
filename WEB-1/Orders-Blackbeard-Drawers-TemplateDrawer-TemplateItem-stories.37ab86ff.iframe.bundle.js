(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4573],{"./app/assets/logo/shippo_ico_gray.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"ecd77fa3752e092361e9f7817373f89e.svg"},"./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Badge/Badge.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),constants_carriers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/carriers.ts");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var _b,provider=_a.provider,count=_a.count,size=_a.size;constants_carriers__WEBPACK_IMPORTED_MODULE_0__.ZQ[provider]&&(provider=constants_carriers__WEBPACK_IMPORTED_MODULE_0__.ZQ[provider]);var icon=null===(_b=constants_carriers__WEBPACK_IMPORTED_MODULE_0__.ZP.find((function(x){return x.name.toLowerCase()===provider.toLowerCase()})))||void 0===_b?void 0:_b.icon,sizeOrDefault=size||40;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({color:"default",sx:{".MuiBadge-badge":{backgroundColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.O.secondary,color:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.O.white}},badgeContent:count},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("img",{style:{width:"".concat(sizeOrDefault,"px"),height:"".concat(sizeOrDefault,"px"),borderRadius:"0.125rem"},alt:provider,src:icon})}))}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Iu:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Iu,cC:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.cC,eU:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.eU});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Orders/Blackbeard/Drawers/TemplateDrawer/TemplateItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CarrierParcel:()=>CarrierParcel,CarrierParcelNoDimensions:()=>CarrierParcelNoDimensions,UserParcel:()=>UserParcel,default:()=>TemplateItem_stories});var templateObject_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),AcUnit=__webpack_require__("./node_modules/@mui/icons-material/esm/AcUnit.js"),translate=__webpack_require__("./app/utils/translate.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles_colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography_Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),shippo_ico_gray=__webpack_require__("./app/assets/logo/shippo_ico_gray.svg"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),CarrierIconMui=(__webpack_require__("./node_modules/react/index.js"),(0,emotion_styled_browser_esm.Z)(Stack.Z)(templateObject_1||(templateObject_1=(0,tslib_es6.cy)(["\n  margin-top: 1.2rem;\n  gap: 1rem;\n"],["\n  margin-top: 1.2rem;\n  gap: 1rem;\n"]))),__webpack_require__("./app/pages/Orders/Blackbeard/LabelPurchase/modules/CarrierIconMui.tsx"));"1px solid ".concat(styles_colors.O.borders);function finalSubtext(sizeText,weightText){return sizeText&&weightText?"".concat(weightText,", ").concat(sizeText):sizeText||weightText||""}var findCarrierTokenByTemplateToken=function(templateToken,carrierProvidedTemplates){var e_1,_a;if(carrierProvidedTemplates&&templateToken)try{for(var _b=(0,tslib_es6.XA)(Object.entries(carrierProvidedTemplates)),_c=_b.next();!_c.done;_c=_b.next()){var _d=(0,tslib_es6.CR)(_c.value,2),key=_d[0];if(void 0!==(_d[1].find((function(carrierParcelTemplate){return carrierParcelTemplate.token===templateToken}))||void 0))return key}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}},getCarrierIcon=function(carrierToken){return carrierToken?(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{alignSelf:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(CarrierIconMui.Z,{provider:carrierToken})})):(0,emotion_react_jsx_runtime_browser_esm.tZ)("img",{src:shippo_ico_gray,alt:"Shippo",style:{width:"40px",height:"40px",alignSelf:"center"}})},focusStyle=(0,emotion_react_browser_esm.iv)(TemplateItem_templateObject_1||(TemplateItem_templateObject_1=(0,tslib_es6.cy)(["\n  border: 1px solid ",";\n  background-color: ",";\n\n  /*\n  Safari does not do outline with border-radius so we draw a border on the pseudo-element\n  This lets us create a thicker 2px border without moving content on the page\n  */\n  ::before {\n    content: '';\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -2px;\n    left: -2px;\n    border: 1px solid ",";\n    border-radius: 9px;\n  }\n"],["\n  border: 1px solid ",";\n  background-color: ",";\n\n  /*\n  Safari does not do outline with border-radius so we draw a border on the pseudo-element\n  This lets us create a thicker 2px border without moving content on the page\n  */\n  ::before {\n    content: '';\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -2px;\n    left: -2px;\n    border: 1px solid ",";\n    border-radius: 9px;\n  }\n"])),styles_colors.O.accent.foreground.success,styles_colors.O.accent.background.success,styles_colors.O.accent.foreground.success),hoverStyle=(0,emotion_react_browser_esm.iv)(templateObject_2||(templateObject_2=(0,tslib_es6.cy)(["\n  :hover {\n    ","\n    background-color: ",";\n    box-shadow: 0px 4px 6px 0px #4c677452;\n  }\n"],["\n  :hover {\n    ","\n    background-color: ",";\n    box-shadow: 0px 4px 6px 0px #4c677452;\n  }\n"])),focusStyle,styles_colors.O.web.primary.hover),compactStyle=(0,emotion_react_browser_esm.iv)(templateObject_3||(templateObject_3=(0,tslib_es6.cy)(["\n  border: 0px;\n  background-color: rgba(0, 0, 0, 0);\n"],["\n  border: 0px;\n  background-color: rgba(0, 0, 0, 0);\n"]))),StyledListItem=(0,emotion_styled_browser_esm.Z)("li")(templateObject_5||(templateObject_5=(0,tslib_es6.cy)(["\n  display: flex;\n  position: relative;\n  gap: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  background-color: ",";\n  padding: ",";\n  cursor: ",";\n  transform: translate(0, 0, 0);\n\n  ","\n"],["\n  display: flex;\n  position: relative;\n  gap: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  background-color: ",";\n  padding: ",";\n  cursor: ",";\n  transform: translate(0, 0, 0);\n\n  ","\n"])),shippoTheme.Z.spacing(1),styles_colors.O.borders,(function(_a){return _a.isSelected?styles_colors.O.accent.background.success:void 0}),shippoTheme.Z.spacing(2),(function(_a){return _a.clickable?"pointer":void 0}),(function(_a){var isSelected=_a.isSelected,compact=_a.compact;return isSelected?compact?compactStyle:(0,emotion_react_browser_esm.iv)(templateObject_4||(templateObject_4=(0,tslib_es6.cy)(["\n          ","\n          ","\n        "],["\n          ","\n          ","\n        "])),focusStyle,hoverStyle):hoverStyle})),PackageCount=(0,emotion_styled_browser_esm.Z)(Typography_Typography.Z)(templateObject_6||(templateObject_6=(0,tslib_es6.cy)(["\n  position: absolute;\n  border-radius: 100px;\n  background-color: ",";\n  color: ",";\n  top: -25%;\n  right: -20%;\n  line-height: 20px;\n  padding: 2px 8px;\n"],["\n  position: absolute;\n  border-radius: 100px;\n  background-color: ",";\n  color: ",";\n  top: -25%;\n  right: -20%;\n  line-height: 20px;\n  padding: 2px 8px;\n"])),styles_colors.O.secondary,styles_colors.O.white);const TemplateDrawer_TemplateItem=function(_a){var carrierProvidedTemplates=_a.carrierProvidedTemplates,template=_a.template,isSelected=_a.isSelected,onClick=_a.onClick,compact=_a.compact,weight=_a.weight,weightUnit=_a.weightUnit,count=_a.count,_b=function(template,overrideWeight,overrideWeightUnit,icon,carrierProvidedTemplates){var _a;if("provider"in template){var length_4=template.length,width=template.width,height=template.height,distanceUnit=template.distanceUnit,name_1=template.name,provider=template.provider,token=template.token,carrierToken=provider||findCarrierTokenByTemplateToken(token,carrierProvidedTemplates),noSize=0===length_4&&0===width&&0===height,iconComponent=icon||getCarrierIcon(carrierToken),weightText=overrideWeight&&overrideWeightUnit?"".concat(overrideWeight," ").concat(overrideWeightUnit):"";return{providerName:provider,subText:subText=finalSubtext(sizeText=noSize?"":"".concat(length_4," x ").concat(width," x ").concat(height," ").concat(distanceUnit),weightText),iconComponent,name:name_1,uniqueKey:"".concat(provider,"-").concat(token)}}carrierToken=template.carrierTemplate?findCarrierTokenByTemplateToken(template.carrierTemplate.token,carrierProvidedTemplates):void 0;var subText,packageWeight=template.weight,packageWeightUnit=template.weightUnit,name_2=template.name,objectId=template.objectId,weight=overrideWeight||packageWeight,weightUnit=overrideWeightUnit||packageWeightUnit,sizeText=function(template){var _a;if("Soft Pack"===(null===(_a=null==template?void 0:template.carrierTemplate)||void 0===_a?void 0:_a.name)){var length_1=template.length,width=template.width,distanceUnit=template.distanceUnit;return"".concat(length_1," x ").concat(width," ").concat(distanceUnit)}if(null==template?void 0:template.carrierTemplate){var _b=template.carrierTemplate,length_2=_b.length,height=(width=_b.width,_b.height);return distanceUnit=_b.distanceUnit,0===length_2&&0===width&&0===height?"":"".concat(length_2," x ").concat(width," x ").concat(height," ").concat(distanceUnit)}var length_3=template.length;return width=template.width,height=template.height,distanceUnit=template.distanceUnit,"".concat(length_3," x ").concat(width," x ").concat(height," ").concat(distanceUnit)}(template);return{providerName:carrierToken||"shippo",subText:subText=finalSubtext(sizeText,weightText=weight&&weightUnit?"".concat(weight," ").concat(weightUnit):void 0),iconComponent:getCarrierIcon(carrierToken),name:(null===(_a=null==template?void 0:template.carrierTemplate)||void 0===_a?void 0:_a.name)||name_2,uniqueKey:objectId||"".concat(name_2,"-").concat(subText)}}(template,weight,weightUnit,_a.icon,carrierProvidedTemplates),subText=_b.subText,iconComponent=_b.iconComponent,name=_b.name,uniqueKey=_b.uniqueKey;return(0,emotion_react_jsx_runtime_browser_esm.BX)(StyledListItem,(0,tslib_es6.pi)({isSelected,clickable:!!onClick,onClick,compact,"data-testid":"template-".concat(uniqueKey),"data-template-name":template.name||"","data-template-length":template.length||"","data-template-width":template.width||"","data-template-height":template.height||"","data-template-distance-unit":template.distanceUnit||"","data-template-weight":template.hasOwnProperty("weight")?template.weight:"","data-template-weight-unit":template.hasOwnProperty("weight")?template.weightUnit:""},{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)("div",(0,tslib_es6.pi)({style:{display:"flex",position:"relative"}},{children:[iconComponent,!!count&&count>1&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(PackageCount,(0,tslib_es6.pi)({component:"div",variant:"captionEmphasized"},{children:count}))]})),(0,emotion_react_jsx_runtime_browser_esm.BX)("div",(0,tslib_es6.pi)({style:{display:"flex",flexDirection:"column",justifyContent:"center"}},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography_Typography.Z,(0,tslib_es6.pi)({component:"p",variant:"body"},{children:name})),!!subText&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography_Typography.Z,(0,tslib_es6.pi)({component:"p",variant:"caption"},{children:subText}))]}))]}),uniqueKey)};var TemplateItem_templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6;const TemplateItem_stories={title:"Template Item",component:TemplateDrawer_TemplateItem,argTypes:{isSelected:{control:{type:"boolean"},options:[!0,!1]}}};var TemplatePropsWithTranslate=(0,translate.Iu)("shipments-page")(TemplateDrawer_TemplateItem),Template=function(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{maxWidth:"450px"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(TemplatePropsWithTranslate,(0,tslib_es6.pi)({},args))}))},UserParcel=Template.bind({});UserParcel.args={template:{name:"Example User Template",length:3.3,width:4.4,height:5.5,distanceUnit:"in",isDefault:!1,weightUnit:"lb",weight:2.5,carrierTemplate:void 0},isSelected:!1,count:50,weight:"12.612345",weightUnit:"lb"};var CarrierParcel=Template.bind({});CarrierParcel.args={template:{name:"Example Carrier Template",length:3.3,width:4.4,height:5.5,distanceUnit:"in",token:"foo-bar-baz",provider:"USPS-Space-Exploration",isVariableDimensions:!1},count:12,isSelected:!1,icon:(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{alignSelf:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(AcUnit.Z,{style:{width:"40px",height:"40px",alignSelf:"center"}})}))};var CarrierParcelNoDimensions=Template.bind({});CarrierParcelNoDimensions.args={template:{name:"Carrier Without Dimensions",length:0,width:0,height:0,distanceUnit:"in",token:"foo-bar-baz",provider:"USPS-Space-Exploration",isVariableDimensions:!1},count:0,isSelected:!1,icon:(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",(0,tslib_es6.pi)({style:{alignSelf:"center"}},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(AcUnit.Z,{style:{width:"40px",height:"40px",alignSelf:"center"}})}))},UserParcel.parameters={...UserParcel.parameters,docs:{...UserParcel.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...UserParcel.parameters?.docs?.source}}},CarrierParcel.parameters={...CarrierParcel.parameters,docs:{...CarrierParcel.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...CarrierParcel.parameters?.docs?.source}}},CarrierParcelNoDimensions.parameters={...CarrierParcelNoDimensions.parameters,docs:{...CarrierParcelNoDimensions.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <div style={{\n  maxWidth: '450px'\n}}>\n    <TemplatePropsWithTranslate {...args} />\n  </div>",...CarrierParcelNoDimensions.parameters?.docs?.source}}}}}]);