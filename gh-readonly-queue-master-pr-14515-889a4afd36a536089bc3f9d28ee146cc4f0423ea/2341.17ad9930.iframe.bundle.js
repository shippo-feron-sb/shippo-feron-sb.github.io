"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2341],{"./node_modules/@goshippo/components/esm/Drawer/Drawer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Drawer_Drawer_Drawer});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),utils=__webpack_require__("./node_modules/@mui/material/transitions/utils.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js");const _excluded=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function setTranslateValue(direction,node,containerProp){const transform=function getTranslateValue(direction,node,resolvedContainer){const rect=node.getBoundingClientRect(),containerRect=resolvedContainer&&resolvedContainer.getBoundingClientRect(),containerWindow=(0,ownerWindow.Z)(node);let transform;if(node.fakeTransform)transform=node.fakeTransform;else{const computedStyle=containerWindow.getComputedStyle(node);transform=computedStyle.getPropertyValue("-webkit-transform")||computedStyle.getPropertyValue("transform")}let offsetX=0,offsetY=0;if(transform&&"none"!==transform&&"string"==typeof transform){const transformValues=transform.split("(")[1].split(")")[0].split(",");offsetX=parseInt(transformValues[4],10),offsetY=parseInt(transformValues[5],10)}return"left"===direction?containerRect?`translateX(${containerRect.right+offsetX-rect.left}px)`:`translateX(${containerWindow.innerWidth+offsetX-rect.left}px)`:"right"===direction?containerRect?`translateX(-${rect.right-containerRect.left-offsetX}px)`:`translateX(-${rect.left+rect.width-offsetX}px)`:"up"===direction?containerRect?`translateY(${containerRect.bottom+offsetY-rect.top}px)`:`translateY(${containerWindow.innerHeight+offsetY-rect.top}px)`:containerRect?`translateY(-${rect.top-containerRect.top+rect.height-offsetY}px)`:`translateY(-${rect.top+rect.height-offsetY}px)`}(direction,node,function resolveContainer(containerPropProp){return"function"==typeof containerPropProp?containerPropProp():containerPropProp}(containerProp));transform&&(node.style.webkitTransform=transform,node.style.transform=transform)}const Slide_Slide=react.forwardRef((function Slide(props,ref){const theme=(0,useTheme.Z)(),defaultEasing={enter:theme.transitions.easing.easeOut,exit:theme.transitions.easing.sharp},defaultTimeout={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{addEndListener,appear=!0,children,container:containerProp,direction="down",easing:easingProp=defaultEasing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout=defaultTimeout,TransitionComponent=Transition.ZP}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),childrenRef=react.useRef(null),handleRefIntermediary=(0,useForkRef.Z)(children.ref,childrenRef),handleRef=(0,useForkRef.Z)(handleRefIntermediary,ref),normalizedTransitionCallback=callback=>isAppearing=>{callback&&(void 0===isAppearing?callback(childrenRef.current):callback(childrenRef.current,isAppearing))},handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{setTranslateValue(direction,node,containerProp),(0,utils.n)(node),onEnter&&onEnter(node,isAppearing)})),handleEntering=normalizedTransitionCallback(((node,isAppearing)=>{const transitionProps=(0,utils.C)({timeout,style,easing:easingProp},{mode:"enter"});node.style.webkitTransition=theme.transitions.create("-webkit-transform",(0,esm_extends.Z)({},transitionProps)),node.style.transition=theme.transitions.create("transform",(0,esm_extends.Z)({},transitionProps)),node.style.webkitTransform="none",node.style.transform="none",onEntering&&onEntering(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const transitionProps=(0,utils.C)({timeout,style,easing:easingProp},{mode:"exit"});node.style.webkitTransition=theme.transitions.create("-webkit-transform",transitionProps),node.style.transition=theme.transitions.create("transform",transitionProps),setTranslateValue(direction,node,containerProp),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback((node=>{node.style.webkitTransition="",node.style.transition="",onExited&&onExited(node)})),updatePosition=react.useCallback((()=>{childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)}),[direction,containerProp]);return react.useEffect((()=>{if(inProp||"down"===direction||"right"===direction)return;const handleResize=(0,debounce.Z)((()=>{childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)})),containerWindow=(0,ownerWindow.Z)(childrenRef.current);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[direction,inProp,containerProp]),react.useEffect((()=>{inProp||updatePosition()}),[inProp,updatePosition]),(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({nodeRef:childrenRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{addEndListener&&addEndListener(childrenRef.current,next)},appear,in:inProp,timeout},other,{children:(state,childProps)=>react.cloneElement(children,(0,esm_extends.Z)({ref:handleRef,style:(0,esm_extends.Z)({visibility:"exited"!==state||inProp?void 0:"hidden"},style,children.props.style)},childProps))}))}));var Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDrawerUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiDrawer",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Drawer_excluded=["BackdropProps"],_excluded2=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],overridesResolver=(props,styles)=>{const{ownerState}=props;return[styles.root,("permanent"===ownerState.variant||"persistent"===ownerState.variant)&&styles.docked,styles.modal]},DrawerRoot=(0,styled.ZP)(Modal.Z,{name:"MuiDrawer",slot:"Root",overridesResolver})((({theme})=>({zIndex:(theme.vars||theme).zIndex.drawer}))),DrawerDockedRoot=(0,styled.ZP)("div",{shouldForwardProp:styled.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver})({flex:"0 0 auto"}),DrawerPaper=(0,styled.ZP)(Paper.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.paper,styles[`paperAnchor${(0,capitalize.Z)(ownerState.anchor)}`],"temporary"!==ownerState.variant&&styles[`paperAnchorDocked${(0,capitalize.Z)(ownerState.anchor)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(theme.vars||theme).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===ownerState.anchor&&{left:0},"top"===ownerState.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===ownerState.anchor&&{right:0},"bottom"===ownerState.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===ownerState.anchor&&"temporary"!==ownerState.variant&&{borderRight:`1px solid ${(theme.vars||theme).palette.divider}`},"top"===ownerState.anchor&&"temporary"!==ownerState.variant&&{borderBottom:`1px solid ${(theme.vars||theme).palette.divider}`},"right"===ownerState.anchor&&"temporary"!==ownerState.variant&&{borderLeft:`1px solid ${(theme.vars||theme).palette.divider}`},"bottom"===ownerState.anchor&&"temporary"!==ownerState.variant&&{borderTop:`1px solid ${(theme.vars||theme).palette.divider}`}))),oppositeDirection={left:"right",right:"left",top:"down",bottom:"up"};const Drawer_Drawer=react.forwardRef((function Drawer(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiDrawer"}),theme=(0,useTheme.Z)(),defaultTransitionDuration={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{anchor:anchorProp="left",BackdropProps,children,className,elevation=16,hideBackdrop=!1,ModalProps:{BackdropProps:BackdropPropsProp}={},onClose,open=!1,PaperProps={},SlideProps,TransitionComponent=Slide_Slide,transitionDuration=defaultTransitionDuration,variant="temporary"}=props,ModalProps=(0,objectWithoutPropertiesLoose.Z)(props.ModalProps,Drawer_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),mounted=react.useRef(!1);react.useEffect((()=>{mounted.current=!0}),[]);const anchorInvariant=function getAnchor(theme,anchor){return"rtl"===theme.direction&&function isHorizontal(anchor){return-1!==["left","right"].indexOf(anchor)}(anchor)?oppositeDirection[anchor]:anchor}(theme,anchorProp),anchor=anchorProp,ownerState=(0,esm_extends.Z)({},props,{anchor,elevation,open,variant},other),classes=(ownerState=>{const{classes,anchor,variant}=ownerState,slots={root:["root"],docked:[("permanent"===variant||"persistent"===variant)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,capitalize.Z)(anchor)}`,"temporary"!==variant&&`paperAnchorDocked${(0,capitalize.Z)(anchor)}`]};return(0,composeClasses.Z)(slots,getDrawerUtilityClass,classes)})(ownerState),drawer=(0,jsx_runtime.jsx)(DrawerPaper,(0,esm_extends.Z)({elevation:"temporary"===variant?elevation:0,square:!0},PaperProps,{className:(0,clsx_m.Z)(classes.paper,PaperProps.className),ownerState,children}));if("permanent"===variant)return(0,jsx_runtime.jsx)(DrawerDockedRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,classes.docked,className),ownerState,ref},other,{children:drawer}));const slidingDrawer=(0,jsx_runtime.jsx)(TransitionComponent,(0,esm_extends.Z)({in:open,direction:oppositeDirection[anchorInvariant],timeout:transitionDuration,appear:mounted.current},SlideProps,{children:drawer}));return"persistent"===variant?(0,jsx_runtime.jsx)(DrawerDockedRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,classes.docked,className),ownerState,ref},other,{children:slidingDrawer})):(0,jsx_runtime.jsx)(DrawerRoot,(0,esm_extends.Z)({BackdropProps:(0,esm_extends.Z)({},BackdropProps,BackdropPropsProp,{transitionDuration}),className:(0,clsx_m.Z)(classes.root,classes.modal,className),open,ownerState,onClose,hideBackdrop,ref},other,ModalProps,{children:slidingDrawer}))}));var createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),drawerTheme=(0,createTheme.Z)(shippoTheme.Z,{components:{MuiPaper:{styleOverrides:{root:{boxShadow:"0px 8px 16px rgba(0, 0, 0, 0.5)"}}}}});const Drawer_Drawer_Drawer=_a=>{var{children}=_a,props=(0,tslib_es6._T)(_a,["children"]);return(0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.a,Object.assign({theme:drawerTheme},{children:(0,jsx_runtime.jsx)(Drawer_Drawer,Object.assign({},props,{children}))}))}},"./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>noSsr&&supportMatchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.Z)((()=>{let active=!0;if(!supportMatchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}}),[query,matchMedia,supportMatchMedia]),match}const maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia){const getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.Z)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr}=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.Z)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}}}]);