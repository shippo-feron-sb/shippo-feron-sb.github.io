"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4192],{"./node_modules/@goshippo/components/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const boxTheme=(0,createTheme.A)(shippoTheme.A,{}),Box=(0,createBox.A)({defaultTheme:boxTheme})},"./node_modules/@goshippo/components/esm/TextField/TextField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextField});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_TextField_theme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.theme.js"),_ThemeExtension_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/ThemeExtension/index.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js");const TextField=_a=>{var{defaultValue,placeholder,name,error,select,inputProps,dataAnalytics="",dataE2e=""}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["defaultValue","placeholder","name","error","select","inputProps","dataAnalytics","dataE2e"]);const extendedTheme=(0,_ThemeExtension_index_js__WEBPACK_IMPORTED_MODULE_2__.c)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({theme:(null==extendedTheme?void 0:extendedTheme.TextField)||_TextField_theme_js__WEBPACK_IMPORTED_MODULE_4__.A},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__.A,Object.assign({id:name,defaultValue,error,placeholder,inputProps:Object.assign({"data-testid":`Input-${name}`,"data-analytics":dataAnalytics,"data-e2e":dataE2e},inputProps)},props,{select,size:"small",SelectProps:select?Object.assign({IconComponent:_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.A},null==props?void 0:props.SelectProps):void 0}))}))}},"./node_modules/@goshippo/components/esm/TextField/TextField.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>shippoTheme});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_sharedCss_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/sharedCss.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const textFieldThemeInput={palette:{text:{primary:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.primary.black},primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondary,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.secondary}},components:{MuiTextField:{styleOverrides:{root:_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.AH`
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
        `}}}};var shippoTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.A)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_4__.A,textFieldThemeInput)},"./node_modules/@goshippo/components/esm/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.theme.js");const Typography=_a=>{var{children}=_a,props=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({theme:_Typography_theme_js__WEBPACK_IMPORTED_MODULE_3__.A},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__.A,Object.assign({},props,{children}))}))}},"./node_modules/@goshippo/components/esm/Typography/Typography.theme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>typographyTheme,h:()=>extendedTypographyOptions});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js");const baseBody={fontStyle:"normal",fontWeight:400,fontSize:"1rem",lineHeight:1.5,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseCaption={fontStyle:"normal",fontWeight:400,fontSize:"0.75rem",lineHeight:1.37,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},baseLink={fontWeight:400,fontSize:"1rem",lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success},extendedTypographyOptions={h1:{fontWeight:500,fontStyle:"normal",fontSize:"1.75rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h2:{fontWeight:500,fontStyle:"normal",fontSize:"1.25rem",lineHeight:1.2,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},h3:{fontStyle:"normal",fontWeight:500,fontSize:"0.75rem",lineHeight:1.2,textTransform:"uppercase",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},body:baseBody,bodyEmphasized:Object.assign(Object.assign({},baseBody),{fontWeight:500}),bodyItalic:Object.assign(Object.assign({},baseBody),{fontStyle:"italic"}),caption:Object.assign({},baseCaption),captionEmphasized:Object.assign(Object.assign({},baseCaption),{fontWeight:500}),captionItalic:Object.assign(Object.assign({},baseCaption),{fontStyle:"italic"}),linkWhiteBg:baseLink,linkWhiteBgEmphasized:Object.assign(Object.assign({},baseLink),{fontWeight:500}),captionLinkWhiteBg:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,textDecoration:"underline",color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),captionLinkWhiteBgEmphasized:Object.assign(Object.assign({},baseCaption),{lineHeight:1.5,fontWeight:500,color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}),linkColorBg:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default}),linkColorBgEmphaszed:Object.assign(Object.assign({},baseLink),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,fontWeight:500}),captionLinkColorBg:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,textDecoration:"underline"}),captionLinkColorBgEmphasized:Object.assign(Object.assign({},baseCaption),{color:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,lineHeight:1.5,fontWeight:500})};var typographyTheme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.A)(_styles_shippoTheme_js__WEBPACK_IMPORTED_MODULE_2__.A,{palette:{primary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},secondary:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.text.default},green:{main:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,dark:_styles_colors_js__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success}},typography:extendedTypographyOptions})},"./node_modules/@goshippo/components/esm/styles/sharedCss.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>greenBorder,s:()=>redBorder});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_colors_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js");_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.AH`
  ::before {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    border: 4px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.T.web.hover};
    border-radius: 9px;
  }
`;const greenBorder=_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.AH`
  border: 4px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.T.web.hover};
`,redBorder=_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.AH`
  border: 2px solid ${_colors_js__WEBPACK_IMPORTED_MODULE_1__.T.accent.foreground.error};
`},"./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown")},"./node_modules/@mui/material/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton_IconButton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getIconButtonUtilityClass(slot){return(0,generateUtilityClass.A)("MuiIconButton",slot)}const IconButton_iconButtonClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["edge","children","className","color","disabled","disableFocusRipple","size"],IconButtonRoot=(0,styled.Ay)(ButtonBase.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],ownerState.edge&&styles[`edge${(0,capitalize.A)(ownerState.edge)}`],styles[`size${(0,capitalize.A)(ownerState.size)}`]]}})((({theme,ownerState})=>(0,esm_extends.A)({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest})},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.active} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12})),(({theme,ownerState})=>(0,esm_extends.A)({},"inherit"===ownerState.color&&{color:"inherit"},"inherit"!==ownerState.color&&"default"!==ownerState.color&&(0,esm_extends.A)({color:(theme.vars||theme).palette[ownerState.color].main},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===ownerState.size&&{padding:5,fontSize:theme.typography.pxToRem(18)},"large"===ownerState.size&&{padding:12,fontSize:theme.typography.pxToRem(28)},{[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}}))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiIconButton"}),{edge=!1,children,className,color="default",disabled=!1,disableFocusRipple=!1,size="medium"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{edge,color,disabled,disableFocusRipple,size}),classes=(ownerState=>{const{classes,disabled,color,edge,size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${(0,capitalize.A)(color)}`,edge&&`edge${(0,capitalize.A)(edge)}`,`size${(0,capitalize.A)(size)}`]};return(0,composeClasses.A)(slots,getIconButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(IconButtonRoot,(0,esm_extends.A)({className:(0,clsx_m.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,ref,ownerState},other,{children}))}))},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.A)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx_m.A)(classes.root,className)},other))}))},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{defaultTheme,defaultClassName="MuiBox-root",generateClassName,styleFunctionSx=_styleFunctionSx__WEBPACK_IMPORTED_MODULE_2__.A}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__.Ay)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.A)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.A)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme},other))}))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.en[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.A)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Q)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({},otherProps,{sx:finalSx})}},"./app/constants/responsive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ResponsiveBreakPoints;__webpack_require__.d(__webpack_exports__,{P:()=>ResponsiveBreakPoints}),function(ResponsiveBreakPoints){ResponsiveBreakPoints[ResponsiveBreakPoints.BigDesktop=1920]="BigDesktop",ResponsiveBreakPoints[ResponsiveBreakPoints.Desktop=1600]="Desktop",ResponsiveBreakPoints[ResponsiveBreakPoints.DesktopMedium=1440]="DesktopMedium",ResponsiveBreakPoints[ResponsiveBreakPoints.DesktopMin=1320]="DesktopMin",ResponsiveBreakPoints[ResponsiveBreakPoints.Notebook=1268]="Notebook",ResponsiveBreakPoints[ResponsiveBreakPoints.Tablet=1024]="Tablet",ResponsiveBreakPoints[ResponsiveBreakPoints.Mobile=768]="Mobile",ResponsiveBreakPoints[ResponsiveBreakPoints.SmallMobile=375]="SmallMobile",ResponsiveBreakPoints[ResponsiveBreakPoints.ExtraSmallMobile=320]="ExtraSmallMobile"}(ResponsiveBreakPoints||(ResponsiveBreakPoints={}))},"./app/pages/Settings/Carriers/VerifyCarrier/SignPad/SignPad.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>SignPad});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Dialog=__webpack_require__("./node_modules/@goshippo/components/esm/Dialog/Dialog.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),DialogActions=__webpack_require__("./node_modules/@goshippo/components/esm/DialogActions/DialogActions.js"),DialogTitle=__webpack_require__("./node_modules/@goshippo/components/esm/DialogTitle/DialogTitle.js"),IconButton=__webpack_require__("./node_modules/@goshippo/components/esm/IconButton/IconButton.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/esm/Close.js"),DialogContent=__webpack_require__("./node_modules/@goshippo/components/esm/DialogContent/DialogContent.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),react=__webpack_require__("./node_modules/react/index.js"),options={font:function(length){return length>28?"9px 'Rock Salt'":length>20?"12px 'Rock Salt'":length>12?"15px 'Rock Salt'":"20px 'Rock Salt'"},fillStyle:shippoTheme.A.palette.text.primary,width:240,height:25,paddingX:120,paddingY:21,customFont:{name:"'Rock Salt'",url:"https://fonts.googleapis.com/css2?family=Rock+Salt"}},displayOptions={font:function(length){return length>28?"22px 'Rock Salt'":length>20?"28px 'Rock Salt'":length>12?"40px 'Rock Salt'":"65px 'Rock Salt'"},fillStyle:shippoTheme.A.palette.text.primary,width:560,height:160,paddingX:275,paddingY:130,customFont:{name:"'Rock Salt'",url:"https://fonts.googleapis.com/css2?family=Rock+Salt"}},drawImage=function(options,textString){var font=options.font,fillStyle=options.fillStyle,width=options.width,height=options.height,paddingX=options.paddingX,paddingY=options.paddingY,canvasSelectorDom=document.createElement("canvas");canvasSelectorDom.setAttribute("width","".concat(width,"px")),canvasSelectorDom.setAttribute("height","".concat(height,"px"));var context=canvasSelectorDom.getContext("2d");return context&&(context.font=font(textString.length),context.textAlign="center",context.fillStyle=fillStyle,context.fillText(textString,paddingX,paddingY)),canvasSelectorDom.toDataURL()},responsive=__webpack_require__("./app/constants/responsive.ts"),StyledDialog=(0,emotion_styled_browser_esm.A)(Dialog.A)(templateObject_1||(templateObject_1=(0,tslib_es6.ue)(["\n  & .MuiPaper-root {\n    border-radius: 16px;\n  }\n"],["\n  & .MuiPaper-root {\n    border-radius: 16px;\n  }\n"]))),StyledSignCanvas=(0,emotion_styled_browser_esm.A)("img")(templateObject_2||(templateObject_2=(0,tslib_es6.ue)(["\n  height: ",";\n  width: ",";\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"],["\n  height: ",";\n  width: ",";\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"])),shippoTheme.A.spacing(10),shippoTheme.A.spacing(35),responsive.P.SmallMobile,shippoTheme.A.spacing(24)),StyledCanvasContainer=(0,emotion_styled_browser_esm.A)(Box.A)(templateObject_3||(templateObject_3=(0,tslib_es6.ue)(["\n  margin: auto;\n  display: 'flex';\n  justify-content: 'center';\n  height: ",";\n  width: ",";\n  border-bottom: 2px solid;\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"],["\n  margin: auto;\n  display: 'flex';\n  justify-content: 'center';\n  height: ",";\n  width: ",";\n  border-bottom: 2px solid;\n\n  @media screen and (max-width: ","px) {\n    width: ",";\n  }\n"])),shippoTheme.A.spacing(10),shippoTheme.A.spacing(35),responsive.P.SmallMobile,shippoTheme.A.spacing(24)),StyledDialogActions=(0,emotion_styled_browser_esm.A)(DialogActions.A)(templateObject_4||(templateObject_4=(0,tslib_es6.ue)(["\n  display: flex;\n  justify-content: space-between;\n  padding: ",";\n  padding-top: ",";\n"],["\n  display: flex;\n  justify-content: space-between;\n  padding: ",";\n  padding-top: ",";\n"])),shippoTheme.A.spacing(4),shippoTheme.A.spacing(0)),SignPad=function(_a){var t=_a.t,open=_a.open,onClose=_a.onClose,onSubmit=_a.onSubmit,_b=(0,tslib_es6.zs)((0,react.useState)(""),2),inputValue=_b[0],setInputValue=_b[1],inputRef=(0,react.useRef)(null),_c=function(textString){var _a=(0,tslib_es6.zs)((0,react.useState)(!1),2),isReady=_a[0],setIsReady=_a[1],_b=(0,tslib_es6.zs)((0,react.useState)(null),2),imageData=_b[0],setImageData=_b[1],_c=(0,tslib_es6.zs)((0,react.useState)(null),2),displayImageData=_c[0],setDisplayImageData=_c[1];return(0,react.useEffect)((function(){var linkElement=document.createElement("link");linkElement.rel="stylesheet",linkElement.href=options.customFont.url;var head=document.head;return head.appendChild(linkElement),linkElement.onload=function(){setIsReady(!0)},function(){head.removeChild(linkElement)}}),[]),(0,react.useEffect)((function(){if(isReady){var imageDataUrl=drawImage(options,textString);setImageData(imageDataUrl);var displayImageDataUrl=drawImage(displayOptions,textString);setDisplayImageData(displayImageDataUrl)}}),[isReady,textString]),{imageData,displayImageData}}(inputValue),imageData=_c.imageData,displayImageData=_c.displayImageData;return(0,emotion_react_jsx_runtime_browser_esm.FD)(StyledDialog,(0,tslib_es6.Cl)({open,onClose},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(DialogTitle.A,(0,tslib_es6.Cl)({style:{padding:"".concat(shippoTheme.A.spacing(4)),paddingBottom:"".concat(shippoTheme.A.spacing(1))}},{children:t("settings:carriers:accountValidation:signature:title")})),(0,emotion_react_jsx_runtime_browser_esm.Y)(IconButton.A,(0,tslib_es6.Cl)({"aria-label":"close",onClick:onClose,sx:{position:"absolute",right:8,top:8,color:function(theme){return theme.palette.grey[500]}}},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Close.A,{})})),(0,emotion_react_jsx_runtime_browser_esm.FD)(DialogContent.A,(0,tslib_es6.Cl)({style:{padding:"".concat(shippoTheme.A.spacing(4)),paddingTop:"".concat(shippoTheme.A.spacing(1))}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body"},{children:t("settings:carriers:accountValidation:signature:instruction")})),(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,{inputRef,fullWidth:!0,style:{marginTop:shippoTheme.A.spacing(2)},label:t("settings:carriers:accountValidation:signature:label"),onChange:function(e){return setInputValue(e.target.value)}}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"body",sx:{marginTop:shippoTheme.A.spacing(4)}},{children:t("settings:carriers:accountValidation:signature:previewLabel")})),(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledCanvasContainer,{children:displayImageData&&(0,emotion_react_jsx_runtime_browser_esm.Y)(StyledSignCanvas,{src:displayImageData})})]})),(0,emotion_react_jsx_runtime_browser_esm.FD)(StyledDialogActions,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({size:"medium",onClick:function(){setInputValue(""),inputRef.current&&(inputRef.current.value="")},color:"secondary"},{children:t("settings:carriers:accountValidation:signature:clear")})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({size:"medium",onClick:function(){onSubmit(imageData||"")},color:"primary",disabled:!inputValue},{children:t("settings:carriers:accountValidation:signature:submit")}))]})]}))}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/pages/Settings/Carriers/VerifyCarrier/SignPad/SignPad.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_SignPad__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Settings/Carriers/VerifyCarrier/SignPad/SignPad.tsx"),_utils_translate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/translate.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Verify Carrier / SignPad",component:_SignPad__WEBPACK_IMPORTED_MODULE_0__.X,argTypes:{onSubmit:{action:"submit"},onClose:{action:"close"}},tags:["autodocs"],parameters:{layout:"centered"}};var SignPadWithTranslation=(0,_utils_translate__WEBPACK_IMPORTED_MODULE_1__.Tl)("settings")(_SignPad__WEBPACK_IMPORTED_MODULE_0__.X),Default=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(SignPadWithTranslation,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({},args))}.bind({});Default.args={open:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: SignPadProps) => <SignPadWithTranslation {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Settings-Carriers-VerifyCarrier-SignPad-SignPad-stories.02dc14cb.iframe.bundle.js.map