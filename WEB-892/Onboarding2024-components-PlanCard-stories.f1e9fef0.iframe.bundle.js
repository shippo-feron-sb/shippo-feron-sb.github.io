(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3295],{"./app/assets/onboarding/developer-plan-icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"9e4c60fc819ae2569b06943ce2cfb1ba.svg"},"./app/assets/onboarding/pro-plan-icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"f0eae720f2fb571d3749ffb14d9b58eb.svg"},"./app/assets/onboarding/starter-plan-icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"d9f0e0dedc5648c22d17fa485791b3ef.svg"},"./app/pages/Onboarding2024/components/PlanCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>PlanCard});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,templateObject_7,templateObject_8,templateObject_9,templateObject_10,templateObject_11,templateObject_12,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Card/Card.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/elevations.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/CardHeader/CardHeader.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@goshippo/components/esm/CardContent/CardContent.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_es_debounce__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/lodash-es/debounce.js"),selectedCardStyles=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_1__.iv)(templateObject_1||(templateObject_1=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  background: ",";\n  border: solid 4px ",";\n  /* This prevents the card content from shifting when selected due to different border sizes. */\n  padding: calc("," - 3px);\n"],["\n  background: ",";\n  border: solid 4px ",";\n  /* This prevents the card content from shifting when selected due to different border sizes. */\n  padding: calc("," - 3px);\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.O.selectedBackground,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.O.primary,_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(4)),StyledCardWrapper=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)("div")(templateObject_2||(templateObject_2=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  padding: ",";\n  flex: 1 1 250px;\n  max-width: 296px;\n  width: 100%;\n\n  "," {\n    padding: ",";\n\n    &:first-of-type {\n      padding-top: 0;\n    }\n  }\n"],["\n  padding: ",";\n  flex: 1 1 250px;\n  max-width: 296px;\n  width: 100%;\n\n  "," {\n    padding: ",";\n\n    &:first-of-type {\n      padding-top: 0;\n    }\n  }\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(0,1),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.breakpoints.down("lg"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(2,0,0)),StyledCard=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.Z,{shouldForwardProp:function(prop){return"isSelected"!==prop}})(templateObject_3||(templateObject_3=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  border-radius: 16px;\n  padding: ",";\n  cursor: pointer;\n  box-sizing: border-box;\n  min-height: 421px;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: ",";\n  }\n\n  ",";\n\n  "," {\n    flex: 0 0 auto;\n    min-height: 0;\n  }\n"],["\n  border-radius: 16px;\n  padding: ",";\n  cursor: pointer;\n  box-sizing: border-box;\n  min-height: 421px;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: ",";\n  }\n\n  ",";\n\n  "," {\n    flex: 0 0 auto;\n    min-height: 0;\n  }\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(4),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.P[2],(function(props){return props.isSelected&&selectedCardStyles}),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.breakpoints.down("md")),StyledCardHeader=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.Z)(templateObject_4||(templateObject_4=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  padding: 0;\n  margin-bottom: ",";\n"],["\n  padding: 0;\n  margin-bottom: ",";\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(4)),StyledCardContent=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_9__.Z)(templateObject_5||(templateObject_5=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  padding: 0;\n  margin: 0;\n\n  &:last-child {\n    padding-bottom: 0;\n  }\n"],["\n  padding: 0;\n  margin: 0;\n\n  &:last-child {\n    padding-bottom: 0;\n  }\n"]))),StyledPlanCardList=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)("ul")(templateObject_6||(templateObject_6=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  margin: "," 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: 0 0 "," ",";\n  list-style: disc;\n"],["\n  margin: "," 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: 0 0 "," ",";\n  list-style: disc;\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(4),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(2),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(2),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(1.75)),StyledPlanCardListItem=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)("li")(templateObject_7||(templateObject_7=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  color: ",";\n  font-size: 1.25rem;\n  line-height: normal;\n"],["\n  color: ",";\n  font-size: 1.25rem;\n  line-height: normal;\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.O.secondaryDisabled),StyledPlanCardListItemTypography=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_10__.Z)(templateObject_8||(templateObject_8=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  color: ",";\n"],["\n  color: ",";\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.O.text.default),StyledIconContainer=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_11__.Z)(templateObject_9||(templateObject_9=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  width: 40px;\n  height: 32px;\n"],["\n  width: 40px;\n  height: 32px;\n"]))),StyledTitleStack=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_12__.Z)(templateObject_10||(templateObject_10=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  flex-direction: row;\n  gap: ",";\n"],["\n  flex-direction: row;\n  gap: ",";\n"])),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(2)),StyledTitleTypography=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_10__.Z)(templateObject_11||(templateObject_11=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  font-size: 2rem;\n  line-height: 2rem;\n"],["\n  font-size: 2rem;\n  line-height: 2rem;\n"]))),StyledPricingTypography=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_goshippo_components__WEBPACK_IMPORTED_MODULE_10__.Z)(templateObject_12||(templateObject_12=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.cy)(["\n  font-weight: 700;\n  font-size: 1.25rem;\n"],["\n  font-weight: 700;\n  font-size: 1.25rem;\n"]))),PlanCard=function(_a){var t=_a.t,_b=_a.plan,id=_b.id,title=_b.title,pricing=_b.pricing,description=_b.description,icon=_b.icon,_c=_b.features,features=void 0===_c?[]:_c,onClick=_a.onClick,_d=_a.isSelected,isSelected=void 0!==_d&&_d,cardRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isMobile=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_13__.Z)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.breakpoints.down("md")),shouldShowFeaturesList=features.length>0&&(!isMobile||isSelected),labelId="".concat(id,"-plan-label"),scrollToSelectedCard=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){var _a;isSelected&&(null==cardRef?void 0:cardRef.current)&&(null===(_a=cardRef.current)||void 0===_a||_a.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}))}),[cardRef,isSelected]),debouncedScrollToSelectedCard=(0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_14__.Z)((function(){scrollToSelectedCard()}),250);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return window.addEventListener("resize",debouncedScrollToSelectedCard),function(){return window.removeEventListener("resize",debouncedScrollToSelectedCard)}}),[debouncedScrollToSelectedCard]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){scrollToSelectedCard()}),[scrollToSelectedCard]),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledCardWrapper,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({ref:cardRef,tabIndex:0},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.BX)(StyledCard,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({"aria-labelledby":labelId,"aria-checked":isSelected,isSelected,role:"radio",onClick},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledCardHeader,{title:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.BX)(StyledTitleStack,{children:[icon&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledIconContainer,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)("img",{src:icon,alt:null==title?void 0:title.toString()})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledTitleTypography,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({id:labelId,component:"span",role:"heading"},{children:t(title)}))]})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.BX)(StyledCardContent,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.BX)(_goshippo_components__WEBPACK_IMPORTED_MODULE_12__.Z,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledPricingTypography,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({component:"span"},{children:t(pricing)})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_10__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({component:"span"},{children:t(description)}))]}),shouldShowFeaturesList&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledPlanCardList,{children:features.map((function(feature){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledPlanCardListItem,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.tZ)(StyledPlanCardListItemTypography,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({component:"span"},{children:t(feature)}))},feature)}))})]})]}))}))}},"./app/pages/Onboarding2024/components/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>DEFAULT_PLAN,X:()=>PLANS});var _assets_onboarding_starter_plan_icon_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/assets/onboarding/starter-plan-icon.svg"),_assets_onboarding_pro_plan_icon_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/assets/onboarding/pro-plan-icon.svg"),_assets_onboarding_developer_plan_icon_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/assets/onboarding/developer-plan-icon.svg"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/pages/Onboarding2024/types.ts"),PLANS=[{id:_types__WEBPACK_IMPORTED_MODULE_3__.u1.starter,title:"join:onboarding2024.plans.starter.title",planCode:"PAYG 30 Label Limit",icon:_assets_onboarding_starter_plan_icon_svg__WEBPACK_IMPORTED_MODULE_0__,pricing:"join:onboarding2024.plans.starter.pricing",description:"join:onboarding2024.plans.starter.description",features:["join:onboarding2024.plans.starter.features.line1","join:onboarding2024.plans.starter.features.line2","join:onboarding2024.plans.starter.features.line3","join:onboarding2024.plans.starter.features.line4","join:onboarding2024.plans.starter.features.line5"]},{id:_types__WEBPACK_IMPORTED_MODULE_3__.u1.pro,title:"join:onboarding2024.plans.pro.title",planCode:"Pro 200",icon:_assets_onboarding_pro_plan_icon_svg__WEBPACK_IMPORTED_MODULE_1__,pricing:"join:onboarding2024.plans.pro.pricing",description:"join:onboarding2024.plans.pro.description",features:["join:onboarding2024.plans.pro.features.line1","join:onboarding2024.plans.pro.features.line2","join:onboarding2024.plans.pro.features.line3","join:onboarding2024.plans.pro.features.line4","join:onboarding2024.plans.pro.features.line5"]},{id:_types__WEBPACK_IMPORTED_MODULE_3__.u1.developer,title:"join:onboarding2024.plans.developer.title",planCode:"PAYG 30 Label Limit",icon:_assets_onboarding_developer_plan_icon_svg__WEBPACK_IMPORTED_MODULE_2__,pricing:"join:onboarding2024.plans.developer.pricing",description:"join:onboarding2024.plans.developer.description",features:["join:onboarding2024.plans.developer.features.line1","join:onboarding2024.plans.developer.features.line2","join:onboarding2024.plans.developer.features.line3","join:onboarding2024.plans.developer.features.line4"]}],DEFAULT_PLAN=PLANS[1]},"./app/pages/Onboarding2024/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G$:()=>ONBOARDING_2024_ROUTES,u1:()=>ONBOARDING_2024_PLANS});var ONBOARDING_2024_ROUTES={plan:"/onboarding/plan",connectStore:"/onboarding/connect_store"},ONBOARDING_2024_PLANS={starter:"PAYG-Standard",developer:"PAYG-Developer",pro:"PRO"}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Iu:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Iu,cC:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.cC,eU:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.eU});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Onboarding2024/components/PlanCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Selected:()=>Selected,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_PlanCard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Onboarding2024/components/PlanCard.tsx"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),_utils_translate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/translate.ts"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/pages/Onboarding2024/components/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Onboarding 2024 / Plan card",component:_PlanCard__WEBPACK_IMPORTED_MODULE_0__._,parameters:{layout:"fullscreen",backgrounds:{default:"grey"}}};var PlanCardWithTranslate=(0,_utils_translate__WEBPACK_IMPORTED_MODULE_1__.Iu)("join")(_PlanCard__WEBPACK_IMPORTED_MODULE_0__._),Template=function(props){var isMobile=(0,_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.Z)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.breakpoints.down("sm"));return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.Z,(0,tslib__WEBPACK_IMPORTED_MODULE_7__.pi)({sx:{maxWidth:isMobile?"100%":300,padding:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.Z.spacing(2)}},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(PlanCardWithTranslate,(0,tslib__WEBPACK_IMPORTED_MODULE_7__.pi)({},props))}))},DefaultProps={plan:_constants__WEBPACK_IMPORTED_MODULE_2__.X[0]},Default=Template.bind({});Default.args=DefaultProps;var Selected=Template.bind({});Selected.args=(0,tslib__WEBPACK_IMPORTED_MODULE_7__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.pi)({},DefaultProps),{isSelected:!0}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(props: PlanCardProps) => {\n  const isMobile = useMediaQuery(shippoTheme.breakpoints.down('sm'));\n  return <Box sx={{\n    maxWidth: isMobile ? '100%' : 300,\n    padding: shippoTheme.spacing(2)\n  }}>\n      <PlanCardWithTranslate {...props} />\n    </Box>;\n}",...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"(props: PlanCardProps) => {\n  const isMobile = useMediaQuery(shippoTheme.breakpoints.down('sm'));\n  return <Box sx={{\n    maxWidth: isMobile ? '100%' : 300,\n    padding: shippoTheme.spacing(2)\n  }}>\n      <PlanCardWithTranslate {...props} />\n    </Box>;\n}",...Selected.parameters?.docs?.source}}}}}]);