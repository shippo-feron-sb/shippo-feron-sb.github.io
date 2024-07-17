"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[5223],{"./app/utils/featureflags/FeatureFlagsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U2:()=>optimizelyClient});__webpack_require__("./node_modules/react/index.js");var react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js"),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.wd("[Optimizely] ".concat(null==error?void 0:error.message))}},optimizelyClient=(0,react_sdk.Q_)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3})},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gH:()=>FeatureFlags,u:()=>useFeatureFlag});var DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},SHOW_DUPLICATE_ORDERS:{name:"show_duplicate_orders",variationType:VariationTypes.A_B_TESTING},NEW_RETURNS_WORKFLOW:{name:"new_returns_workflow",variationType:VariationTypes.A_B_TESTING},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT},ORDER_TAG_MVP:{name:"order_tag_mvp",variationType:VariationTypes.ROLLOUT},FEDEX_NEW_API_ENABLED:{name:"fedex_new_api_enabled_ui",variationType:VariationTypes.ROLLOUT},PORTAL_REDIRECT:{name:"portal_redirect",variationType:VariationTypes.ROLLOUT},ADDRESS_SERVICE_V2:{name:"address_autocomplete_validation_v2",variationType:VariationTypes.ROLLOUT},RATES_BEST_OPTION:{name:"rates_best_option",variationType:VariationTypes.A_B_TESTING},IMPROVED_REFUNDS:{name:"improved_refunds",variationType:VariationTypes.ROLLOUT},TEAMS_ENHANCEMENT:{name:"teams_enhancement",variationType:VariationTypes.ROLLOUT},PACKAGE_DIMENSIONS_RECALCULATION:{name:"package_dimensions_recalculation",variationType:VariationTypes.ROLLOUT},STORE_CONNECTION_SIDE_PANEL:{name:"store_connection_sidepanel",variationType:VariationTypes.ROLLOUT},NEW_INSURANCE_PAGE:{name:"new_insurance_page",variationType:VariationTypes.ROLLOUT},API_PLAN:{name:"api_plan_ui",variationType:VariationTypes.ROLLOUT},SHIPMENTS_PACKING_SLIP:{name:"shipments_packing_slip",variationType:VariationTypes.ROLLOUT},STORE_CONNECTION_ONBOARDING_POPULAR:{name:"store_connection_onboarding_popular",variationType:VariationTypes.ROLLOUT},NEW_STORE_SETTINGS_PAGE:{name:"new_store_settings_page",variationType:VariationTypes.ROLLOUT},SPLIT_ORDER_NO_ITEMS:{name:"split_order_no_items",variationType:VariationTypes.ROLLOUT}},tslib_es6=(__webpack_require__("./app/utils/featureflags/FeatureFlagsProvider.tsx"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js");function useFeatureFlag(featureFlag,options){var _a=(0,tslib_es6.zs)((0,react_sdk.A2)(featureFlag.name,{autoUpdate:!0,decideOptions:(null==options?void 0:options.blockEvent)?[react_sdk.kn.DISABLE_DECISION_EVENT]:[]}),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}},"./app/pages/Onboarding/components/PlanSelection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>PlanSelection_stories});var templateObject_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),PlanCard=__webpack_require__("./app/pages/Onboarding/components/PlanCard.tsx"),constants=__webpack_require__("./app/pages/Onboarding/components/constants.ts"),featureflags=__webpack_require__("./app/utils/featureflags/index.ts"),StyledStack=(0,styled.Ay)(Stack.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  flex-direction: row;\n  "," {\n    flex-direction: column;\n  }\n"],["\n  flex-direction: row;\n  "," {\n    flex-direction: column;\n  }\n"])),shippoTheme.A.breakpoints.down("lg")),PlanSelection=function(_a){var selectedPlan=_a.selectedPlan,setSelectedPlan=_a.setSelectedPlan,t=_a.t,apiPlanFeature=(0,featureflags.u)(featureflags.gH.API_PLAN),planArray=(null==apiPlanFeature?void 0:apiPlanFeature.enabled)?constants.xJ:constants.NB;return(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledStack,{children:planArray.map((function(plan){return(0,emotion_react_jsx_runtime_browser_esm.Y)(PlanCard.M,{t,plan,isSelected:selectedPlan.id===plan.id,onClick:function(){return setSelectedPlan(plan)}},plan.id)}))})},translate=__webpack_require__("./app/utils/translate.ts"),react=__webpack_require__("./node_modules/react/index.js");const PlanSelection_stories={title:"Onboarding / Plan selection",component:PlanSelection,parameters:{layout:"centered",backgrounds:{default:"grey"}}};var PlanSelectionWithTranslate=(0,translate.Tl)("join")(PlanSelection),Default=function(){var _a=(0,tslib_es6.zs)((0,react.useState)(constants.gv),2),selectedPlan=_a[0],setSelectedPlan=_a[1];return(0,emotion_react_jsx_runtime_browser_esm.Y)(PlanSelectionWithTranslate,{selectedPlan,setSelectedPlan})}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [selectedPlan, setSelectedPlan] = useState(DEFAULT_PLAN);\n  return <PlanSelectionWithTranslate selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />;\n}",...Default.parameters?.docs?.source}}}}}]);