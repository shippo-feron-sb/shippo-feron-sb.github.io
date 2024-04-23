"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1403],{"./app/pages/Onboarding2024/components/PlanSelection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>PlanSelection_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),PlanCard=__webpack_require__("./app/pages/Onboarding2024/components/PlanCard.tsx"),constants=__webpack_require__("./app/pages/Onboarding2024/components/constants.ts"),PlanSelection=function(_a){var selectedPlan=_a.selectedPlan,setSelectedPlan=_a.setSelectedPlan,t=_a.t;return(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK,{children:constants.N.map((function(plan){return(0,emotion_react_jsx_runtime_browser_esm.Y)(PlanCard.M,{t,plan,isSelected:selectedPlan.id===plan.id,onClick:function(){return setSelectedPlan(plan)}},plan.id)}))})},Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),translate=__webpack_require__("./app/utils/translate.ts"),react=__webpack_require__("./node_modules/react/index.js");const PlanSelection_stories={title:"Onboarding 2024 / Plan selection",component:PlanSelection,parameters:{layout:"fullscreen",backgrounds:{default:"grey"}}};var PlanSelectionWithTranslate=(0,translate.Tl)("join")(PlanSelection),Default=function(){var _a=(0,tslib_es6.zs)((0,react.useState)(constants.g),2),selectedPlan=_a[0],setSelectedPlan=_a[1];return(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({sx:{padding:shippoTheme.A.spacing(2)}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(PlanSelectionWithTranslate,{selectedPlan,setSelectedPlan})}))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [selectedPlan, setSelectedPlan] = useState(DEFAULT_PLAN);\n  return <Box sx={{\n    padding: shippoTheme.spacing(2)\n  }}>\n      <PlanSelectionWithTranslate selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />\n    </Box>;\n}",...Default.parameters?.docs?.source}}}}}]);