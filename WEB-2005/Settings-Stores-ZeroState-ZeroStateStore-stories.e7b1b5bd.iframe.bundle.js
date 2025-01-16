(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1378],{"./app/assets/stores/zero.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"f01dfc78c8469af2ba14ce1c143349c1.svg"},"./node_modules/@goshippo/components/esm/ThemeExtension/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>useThemeExtension});__webpack_require__("./node_modules/react/jsx-runtime.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const ThemeExtensionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});function useThemeExtension(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeExtensionContext)}},"./node_modules/@goshippo/components/esm/styles/elevations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>elevations});const elevations=["none","0px 2px 6px rgb(1 71 79 / 0.32)","0px 4px 6px rgb(1 71 79 / 0.32)","0px 8px 16px rgb(1 71 79 / 0.32)","0px 16px 24px rgb(1 71 79 / 0.32)"]},"./node_modules/@mui/material/utils/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js").A},"./node_modules/@mui/utils/esm/setRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}__webpack_require__.d(__webpack_exports__,{A:()=>setRef})},"./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js");const __WEBPACK_DEFAULT_EXPORT__=function useEventCallback(fn){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);return(0,_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.A)((()=>{ref.current=fn})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...args)=>(0,ref.current)(...args)),[])}},"./node_modules/@mui/utils/esm/useForkRef/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_setRef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/setRef.js");function useForkRef(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>refs.every((ref=>null==ref))?null:instance=>{refs.forEach((ref=>{(0,_setRef__WEBPACK_IMPORTED_MODULE_1__.A)(ref,instance)}))}),refs)}},"./node_modules/react-transition-group/esm/TransitionGroupContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext(null)},"./app/pages/Settings/Stores/ZeroState/ZeroStateStore.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ZeroStateStore_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const n=(0,styled.Ay)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ZeroState_styled_o=(0,styled.Ay)("div")`
  height: ${shippoTheme.A.spacing(20)};
  max-width: ${shippoTheme.A.spacing(20)};
  width: 100%;

  > * {
    height: 100%;
    object-fit: contain;
    width: auto;
  }
`,l=({image:r,description:e,action:o})=>(0,jsx_runtime.jsxs)(n,{children:[r&&(0,jsx_runtime.jsx)(ZeroState_styled_o,{children:r}),e&&(0,jsx_runtime.jsx)(Typography.A,{pb:shippoTheme.A.spacing(3),component:"p",variant:"body",textAlign:"center",children:e}),o]});var zero=__webpack_require__("./app/assets/stores/zero.svg"),StoreConnection=__webpack_require__("./app/components/StoreConnection/index.ts"),ZeroStateStore=function(_a){var t=_a.t,handleStoreSelection=_a.handleStoreSelection,storeConnections=_a.storeConnections,onSearch=_a.onSearch;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({"data-testid":"zero-state-component",style:{marginBottom:shippoTheme.A.spacing(4)}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(l,{image:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:zero,alt:t("zero state store")}),description:t("zeroState.description")}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{style:{margin:"".concat(shippoTheme.A.spacing(4,0,5))}}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnection.pb,{t,displayType:"grid",storeConnections,handleStoreSelection,onSearch})]}))},translate=__webpack_require__("./app/utils/translate.ts");const ZeroStateStore_stories={title:"Zero State / ZeroStateStore",component:ZeroStateStore,argTypes:{handleStoreSelection:{action:"handleStoreSelection"}},parameters:{layout:"centered",backgrounds:{default:"grey"}}};var ZeroStateStoreWithTranslate=(0,translate.Tl)("stores")(ZeroStateStore),Default=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(ZeroStateStoreWithTranslate,(0,tslib_es6.Cl)({},args))}.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <ZeroStateStoreWithTranslate {...args} />;\n}",...Default.parameters?.docs?.source}}}},"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})}}]);
//# sourceMappingURL=Settings-Stores-ZeroState-ZeroStateStore-stories.e7b1b5bd.iframe.bundle.js.map