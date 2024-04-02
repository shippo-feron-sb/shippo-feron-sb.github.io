"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[6143],{"./node_modules/@goshippo/components/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const boxTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Box=(0,createBox.Z)({defaultTheme:boxTheme})},"./node_modules/@goshippo/components/esm/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popover_Popover});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Popover=__webpack_require__("./node_modules/@mui/material/Popover/Popover.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const popoverTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Popover_Popover=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:popoverTheme},{children:(0,jsx_runtime.jsx)(Popover.ZP,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Stack_Stack_Stack});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const _excluded=["component","direction","spacing","divider","children"];function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const StackRoot=(0,styled.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({ownerState,theme})=>{let styles=(0,esm_extends.Z)({display:"flex",flexDirection:"column"},(0,breakpoints.k9)({theme},(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.P$)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing.NA)(transformer,propValue)}};var direction};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.dt)(theme.breakpoints,styles),styles})),Stack=react.forwardRef((function Stack(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiStack"}),props=(0,extendSxProp.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState={direction,spacing};return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.Z)({as:component,ownerState,ref},other,{children:divider?joinChildren(children,divider):children}))})),Stack_Stack=Stack;var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const stackTheme=(0,createTheme.Z)(shippoTheme.Z,{}),Stack_Stack_Stack=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:stackTheme},{children:(0,jsx_runtime.jsx)(Stack_Stack,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/TextField/TextField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TextField});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_TextField_theme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.theme.js"),_ThemeExtension_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/ThemeExtension/index.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js");const TextField=_a=>{var{defaultValue,placeholder,name,error,select,inputProps,dataAnalytics="",dataE2e=""}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(_a,["defaultValue","placeholder","name","error","select","inputProps","dataAnalytics","dataE2e"]);const extendedTheme=(0,_ThemeExtension_index_js__WEBPACK_IMPORTED_MODULE_2__.x)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({theme:(null==extendedTheme?void 0:extendedTheme.TextField)||_TextField_theme_js__WEBPACK_IMPORTED_MODULE_4__.Z},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__.Z,Object.assign({id:name,defaultValue,error,placeholder,inputProps:Object.assign({"data-testid":`Input-${name}`,"data-analytics":dataAnalytics,"data-e2e":dataE2e},inputProps)},props,{select,size:"small",SelectProps:select?Object.assign({IconComponent:_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Z},null==props?void 0:props.SelectProps):void 0}))}))}},"./node_modules/@goshippo/components/esm/TextField/TextField.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>shippoTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/sharedCss.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const textFieldThemeInput={palette:{text:{primary:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.primary.black},primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondary,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondary}},components:{MuiTextField:{styleOverrides:{root:_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.iv`
          & label {
            color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default};

            &.MuiInputLabel-root {
              &:not(.Mui-focused) {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.secondary};
              }

              &.Mui-disabled {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondaryDisabled};
              }

              &:not(.MuiInputLabel-shrink) {
                /* This defaults to 9px Y. We added 8px to the height: 4px top and 4px bottom. We adjst Y by 4 px. */
                transform: translate(14px, 13px) scale(1);
                -webkit-transform: translate(14px, 13px) scale(1)
                -moz-transform: translate(14px, 13px) scale(1);
              }
            }

            &.MuiInputLabel-shrink {
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default};

              &.Mui-error {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error} !important;
              }
            }
          }

          & .MuiInputBase-input {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 31px;

            &::placeholder {
              -webkit-text-fill-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.secondary};
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.secondary};
              opacity: 1;
            }

            &:disabled {
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondaryDisabled};
              -webkit-text-fill-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondaryDisabled};

              &::placeholder {
                color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondaryDisabled};
                -webkit-text-fill-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondaryDisabled};
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
              border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.borders};
            }
            
            &:hover fieldset {
              border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.borders};
            }

            &.Mui-focused fieldset {
              ${_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__.S}
            }

            &.Mui-error {
              &:not(.Mui-disabled) {
                &:hover {
                  fieldset {
                    border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error};
                  }
                }
              }

              &.Mui-focused fieldset {
                ${_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__.s}
              }
            }
          }

          & .MuiInputBase-root.Mui-disabled {
            background: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondaryHover};
            border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.borders};

            & .MuiOutlinedInput-notchedOutline {
              border-color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.borders};
            }
          }

          & .MuiFormHelperText-root {
            color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.secondary};

            &.Mui-error {
              color: ${_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.error};
            }
          }
        `}}}};var shippoTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Z)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_4__.Z,textFieldThemeInput)},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__._T)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.Z},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.Z,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>extendedTypographyOptions,Z:()=>typographyTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:500,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},h2:{fontWeight:500,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},h3:{fontStyle:"normal",fontWeight:500,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:500}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:500}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:500}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:500,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,fontWeight:500}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,lineHeight:1.5,fontWeight:500})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.Z)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.Z,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.O.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@goshippo/components/esm/styles/sharedCss.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>greenBorder,s:()=>redBorder});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_colors_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js");_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.iv`
  ::before {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    border: 4px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.hover};
    border-radius: 9px;
  }
`;const greenBorder=_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.iv`
  border: 4px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.web.hover};
`,redBorder=_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.iv`
  border: 2px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.O.accent.foreground.error};
`},"./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>noSsr&&supportMatchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.Z)((()=>{let active=!0;if(!supportMatchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}}),[query,matchMedia,supportMatchMedia]),match}const maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia){const getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.Z)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr}=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.Z)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__.Z}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.Z)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}}}]);
//# sourceMappingURL=6143.ef5bf6c5.iframe.bundle.js.map