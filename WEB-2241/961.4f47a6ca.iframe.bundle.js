"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[961],{"./node_modules/@goshippo/components/esm/InputAdornment/InputAdornment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputAdornment_InputAdornment});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),TextField_theme=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.theme.js");const inputAdornmentTheme=(0,createTheme.A)(shippoTheme.A,TextField_theme.A,{}),InputAdornment_InputAdornment=_a=>{var{children}=_a,props=(0,tslib_es6.Tt)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:inputAdornmentTheme},{children:(0,jsx_runtime.jsx)(InputAdornment.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/SearchInput/SearchInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SearchInput});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Fade=__webpack_require__("./node_modules/@mui/material/Fade/Fade.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const Search=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),Clear=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),InputAdornment=__webpack_require__("./node_modules/@goshippo/components/esm/InputAdornment/InputAdornment.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),colors=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const IconAdornment=(0,styled.Ay)(InputAdornment.A)`
  position: relative;
  padding-left: 1rem;
`,TextInput=(0,styled.Ay)(TextField.A)`
  .Mui-disabled {
    color: ${colors.T.text.disabled};
    background: ${colors.T.borders};
    border-color: ${colors.T.secondaryDisabled};
    border-radius: ${shippoTheme.A.spacing(1)};
  }
  .MuiInputBase-root.Mui-disabled {
    background: ${colors.T.borders};
  }
  .MuiInputBase-input {
    min-height: 24px;
    line-height: 150%;
  }
  .MuiOutlinedInput-input {
    padding: ${shippoTheme.A.spacing(1.5)} ${shippoTheme.A.spacing(2)};
    padding-right: 0;
  }
  .MuiOutlinedInput-root {
    padding-right: 0;
  }
  .MuiInputAdornment-root {
    margin-right: 0;
    padding-left: 0;
  }
`,IconBox=(0,styled.Ay)("button")`
  border: none;
  background-color: transparent;
  border-top-right-radius: ${shippoTheme.A.spacing(1)};
  border-bottom-right-radius: ${shippoTheme.A.spacing(1)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${shippoTheme.A.spacing(1.5)};
  cursor: pointer;
  position: relative;

  > svg[data-testid='ClearIcon']:hover,
  > svg[data-testid='ClearIcon']:focus {
    background-color: ${colors.T.backgroundDeemphasized};
    border-radius: 50%;
    outline: none;
  }
`,SearchInput=_a=>{var{disabled,label,onClear,placeholder}=_a,props=(0,tslib_es6.Tt)(_a,["disabled","label","onClear","placeholder"]);const showSearchButton=0===(props.value||"").length;return(0,jsx_runtime.jsx)(TextInput,Object.assign({placeholder,label,variant:"outlined","data-testid":"search-input",size:"medium",disabled,fullWidth:!0},props,{InputProps:Object.assign(Object.assign({},props.InputProps),{endAdornment:(0,jsx_runtime.jsx)(IconAdornment,Object.assign({position:"end"},{children:(0,jsx_runtime.jsxs)(IconBox,Object.assign({tabIndex:-1,name:showSearchButton?"search":"close","aria-label":showSearchButton?"search":"close",disabled,onClick:showSearchButton?()=>{}:onClear},{children:[(0,jsx_runtime.jsx)(Fade.A,Object.assign({in:showSearchButton,timeout:250,style:{position:"absolute"}},{children:(0,jsx_runtime.jsx)(Search,{color:disabled?"disabled":"secondary",fontSize:"medium"})})),(0,jsx_runtime.jsx)(Fade.A,Object.assign({in:!showSearchButton,timeout:250},{children:(0,jsx_runtime.jsx)(Clear,{color:disabled?"disabled":"secondary",fontSize:"medium",tabIndex:0})}))]}))}))})}))}},"./node_modules/@goshippo/components/esm/TextField/TextField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextField});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_TextField_theme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.theme.js"),_ThemeExtension_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/ThemeExtension/index.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js");const TextField=_a=>{var{defaultValue,placeholder,name,error,select,inputProps,dataAnalytics="",dataE2e=""}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["defaultValue","placeholder","name","error","select","inputProps","dataAnalytics","dataE2e"]);const extendedTheme=(0,_ThemeExtension_index_js__WEBPACK_IMPORTED_MODULE_2__.c)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({theme:(null==extendedTheme?void 0:extendedTheme.TextField)||_TextField_theme_js__WEBPACK_IMPORTED_MODULE_4__.A},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__.A,Object.assign({id:name,defaultValue,error,placeholder,inputProps:Object.assign({"data-testid":`Input-${name}`,"data-analytics":dataAnalytics,"data-e2e":dataE2e},inputProps)},props,{select,size:"small",SelectProps:select?Object.assign({IconComponent:_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.A},null==props?void 0:props.SelectProps):void 0}))}))}},"./node_modules/@goshippo/components/esm/TextField/TextField.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>shippoTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/sharedCss.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const textFieldThemeInput={palette:{text:{primary:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.primary.black},primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondary,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondary}},components:{MuiTextField:{styleOverrides:{root:_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.AH`
          & label {
            color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default};

            &.MuiInputLabel-root {
              &:not(.Mui-focused) {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.secondary};
              }

              &.Mui-disabled {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondaryDisabled};
              }

              &:not(.MuiInputLabel-shrink) {
                /* This defaults to 9px Y. We added 8px to the height: 4px top and 4px bottom. We adjst Y by 4 px. */
                transform: translate(14px, 13px) scale(1);
                -webkit-transform: translate(14px, 13px) scale(1)
                -moz-transform: translate(14px, 13px) scale(1);
              }
            }

            &.MuiInputLabel-shrink {
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default};

              &.Mui-error {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error} !important;
              }
            }
          }

          & .MuiInputBase-input {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 31px;

            &::placeholder {
              -webkit-text-fill-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.secondary};
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.secondary};
              opacity: 1;
            }

            &:disabled {
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondaryDisabled};
              -webkit-text-fill-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondaryDisabled};

              &::placeholder {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondaryDisabled};
                -webkit-text-fill-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondaryDisabled};
              }
            }
          }

          & .MuiInputBase-inputMultiline {
            margin-top: 4px;
            margin-bottom: 4px;
            text-wrap: wrap;
          }

          & .MuiOutlinedInput-root {
            border-radius: 8px;

            & .MuiSelect-select {
              min-height: 31px;
              line-height: 30px
            }

            fieldset {
              border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.borders};
            }
            
            &:hover fieldset {
              border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.borders};
            }

            &.Mui-focused fieldset {
              ${_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__.g}
            }

            &.Mui-error {
              &:not(.Mui-disabled) {
                &:hover {
                  fieldset {
                    border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error};
                  }
                }
              }

              &.Mui-focused fieldset {
                ${_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__.s}
              }
            }
          }

          & .MuiInputBase-root.Mui-disabled {
            background: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover};
            border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.borders};

            & .MuiOutlinedInput-notchedOutline {
              border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.borders};
            }
          }

          & .MuiFormHelperText-root {
            color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondary};

            &.Mui-error {
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error};
            }
          }
        `}}}};var shippoTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.A)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_4__.A,textFieldThemeInput)},"./node_modules/@goshippo/components/esm/styles/sharedCss.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>greenBorder,s:()=>redBorder});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_colors_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js");_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.AH`
  ::before {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    border: 4px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.T.borderFocus};
    border-radius: 9px;
  }
`;const greenBorder=_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.AH`
  border: 4px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.T.borderFocus};
`,redBorder=_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.AH`
  border: 2px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.T.accent.foreground.error};
`},"./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown")},"./node_modules/@mui/material/InputAdornment/InputAdornment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputAdornment_InputAdornment});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),FormControlContext=__webpack_require__("./node_modules/@mui/material/FormControl/FormControlContext.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getInputAdornmentUtilityClass(slot){return(0,generateUtilityClass.A)("MuiInputAdornment",slot)}const InputAdornment_inputAdornmentClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var _span,useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","component","disablePointerEvents","disableTypography","position","variant"],InputAdornmentRoot=(0,styled.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`position${(0,capitalize.A)(ownerState.position)}`],!0===ownerState.disablePointerEvents&&styles.disablePointerEvents,styles[ownerState.variant]]}})((({theme,ownerState})=>(0,esm_extends.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(theme.vars||theme).palette.action.active},"filled"===ownerState.variant&&{[`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]:{marginTop:16}},"start"===ownerState.position&&{marginRight:8},"end"===ownerState.position&&{marginLeft:8},!0===ownerState.disablePointerEvents&&{pointerEvents:"none"}))),InputAdornment_InputAdornment=react.forwardRef((function InputAdornment(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiInputAdornment"}),{children,className,component="div",disablePointerEvents=!1,disableTypography=!1,position,variant:variantProp}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),muiFormControl=(0,useFormControl.A)()||{};let variant=variantProp;variantProp&&muiFormControl.variant,muiFormControl&&!variant&&(variant=muiFormControl.variant);const ownerState=(0,esm_extends.A)({},props,{hiddenLabel:muiFormControl.hiddenLabel,size:muiFormControl.size,disablePointerEvents,position,variant}),classes=(ownerState=>{const{classes,disablePointerEvents,hiddenLabel,position,size,variant}=ownerState,slots={root:["root",disablePointerEvents&&"disablePointerEvents",position&&`position${(0,capitalize.A)(position)}`,variant,hiddenLabel&&"hiddenLabel",size&&`size${(0,capitalize.A)(size)}`]};return(0,composeClasses.A)(slots,getInputAdornmentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(FormControlContext.A.Provider,{value:null,children:(0,jsx_runtime.jsx)(InputAdornmentRoot,(0,esm_extends.A)({as:component,ownerState,className:(0,clsx_m.A)(classes.root,className),ref},other,{children:"string"!=typeof children||disableTypography?(0,jsx_runtime.jsxs)(react.Fragment,{children:["start"===position?_span||(_span=(0,jsx_runtime.jsx)("span",{className:"notranslate",children:"​"})):null,children]}):(0,jsx_runtime.jsx)(Typography.A,{color:"text.secondary",children})}))})}))},"./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{A:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>noSsr&&supportMatchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.A)((()=>{let active=!0;if(!supportMatchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}}),[query,matchMedia,supportMatchMedia]),match}const maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia){const getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.A)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr}=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.A)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}}}]);
//# sourceMappingURL=961.4f47a6ca.iframe.bundle.js.map