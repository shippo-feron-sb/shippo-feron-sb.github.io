"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3001],{"./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/Sort.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/esm/KeyboardArrowDown.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Tab/Tab.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function(_a){var dirty=_a.dirty,open=_a.open,_b=_a.endIcon,endIcon=void 0===_b||_b,_c=_a.startIcon,startIcon=void 0!==_c&&_c,label=_a.label,tabProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(_a,["dirty","open","endIcon","startIcon","label"]),icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return startIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_3__.A,{}):endIcon&&open?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A,{}):endIcon?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,{}):void 0}),[endIcon,open,startIcon]),filteredTabProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var duped=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},tabProps);return delete duped.textColor,duped}),[tabProps]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},filteredTabProps,{disableFocusRipple:!0,disableTouchRipple:!0,icon,iconPosition:startIcon?"start":"end",label:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({color:_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.secondary,variant:"bodyEmphasized",component:"h4",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{children:label})),sx:{minHeight:"40px",opacity:1,backgroundColor:dirty?_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.T.secondaryHover:"inherit",borderRadius:"0.5rem",textTransform:"none",py:0,px:1}}))}},"./app/pages/Orders/Blackbeard/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EK:()=>ordersSearchQueryToSearchState,Q3:()=>ordersSearchStateToSearchQuery,fL:()=>weightUnitFilterTypeList,tg:()=>defaultOrdersSearchParams});var BulkDrawerLoadOptions,tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_constants_weight__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/weight.ts"),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/moment/moment.js"),_types_Store__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/Store.ts")),_utils__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./app/utils/businessRules.ts"),__webpack_require__("./app/pages/Orders/Blackbeard/types/utils.ts")),weightUnitFilterTypeList=["g","kg","oz","lb",""],defaultOrdersSearchParams={searchBarQuery:"",searchError:!1,orderStatus:"all",sortField:"-created_at",isInternational:"",dateFilter:[null,null],storeFilter:"all",itemFilter:[],weightFilter:{minWeight:"",maxWeight:"",weightUnit:""},currentPerPage:25,currentPageNumber:1,rowCount:0,hidden:!1,shippingMethodsFilter:[],saved:"",orderTagsFilter:{tags:[],untagged:!1},createdByFilter:"all"},searchQueryToSearchStateStoreValues=Object.keys(_types_Store__WEBPACK_IMPORTED_MODULE_3__.F8).reduce((function(accum,key){var value=_types_Store__WEBPACK_IMPORTED_MODULE_3__.F8[key];return accum[(0,_types_Store__WEBPACK_IMPORTED_MODULE_3__.N3)(value)]=value,accum}),{undefined:"All"});function ordersSearchQueryToSearchState(searchQuery){var searchParameters={};if(searchQuery.start_date||searchQuery.end_date){var startDate=searchQuery.start_date?moment__WEBPACK_IMPORTED_MODULE_1__(searchQuery.start_date):null,endDate=searchQuery.end_date?moment__WEBPACK_IMPORTED_MODULE_1__(searchQuery.end_date):null;searchParameters.dateFilter=[startDate,endDate]}if(searchQuery.weight_gt||searchQuery.weight_lt||searchQuery.weight_unit){var minWeight=searchQuery.weight_gt?searchQuery.weight_gt:"",maxWeight=searchQuery.weight_lt?searchQuery.weight_lt:"",weightUnit=searchQuery.weight_unit?searchQuery.weight_unit:"lb",fallbackWeightUnit=_constants_weight__WEBPACK_IMPORTED_MODULE_0__.bm[weightUnit]||"lb";searchParameters.weightFilter={minWeight,maxWeight,weightUnit:fallbackWeightUnit}}if(searchQuery.order_status&&(searchParameters.orderStatus=searchQuery.order_status),"created_at"===searchQuery.sort_by){var sortField="desc"===searchQuery.order_by?"-created_at":"created_at";searchParameters.sortField=sortField}return"_score"===searchQuery.sort_by&&(searchParameters.sortField="most_relevant"),searchQuery.is_international&&(searchParameters.isInternational=searchQuery.is_international),searchQuery.shop_app&&(searchParameters.storeFilter=searchQueryToSearchStateStoreValues[searchQuery.shop_app]),searchQuery.page&&(searchParameters.currentPageNumber=parseInt(searchQuery.page,10)),searchQuery.results&&(searchParameters.currentPerPage=parseInt(searchQuery.results,10)),searchQuery.hidden&&(searchParameters.hidden="true"===searchQuery.hidden),searchQuery.saved&&(searchParameters.saved=searchQuery.saved),searchParameters.itemFilter=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.xu)(searchQuery,"item"),searchParameters.shippingMethodsFilter=function shippingMethodsQueryToState(searchQuery){return Object.entries(searchQuery).filter((function(_a){return(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,1)[0].includes("shipping_method")})).reduce((function(accum,_a){var value=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,2)[1];return value&&accum.push(value),accum}),[])}(searchQuery),searchParameters.orderTagsFilter={tags:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.xu)(searchQuery,"tag"),untagged:"true"===searchQuery.untagged},searchParameters.searchBarQuery=searchQuery.q||"",(0,tslib__WEBPACK_IMPORTED_MODULE_6__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.Cl)({},defaultOrdersSearchParams),searchParameters)}function ordersSearchStateToSearchQuery(searchState){var queryParams={},sortParameters=function(sortField){switch(sortField){case"-created_at":queryParams.order_by="desc",queryParams.sort_by="created_at";break;case"created_at":queryParams.order_by="asc",queryParams.sort_by="created_at";break;default:queryParams.order_by="desc",queryParams.sort_by="_score"}};for(var filterKey in searchState)if(JSON.stringify(searchState[filterKey])!==JSON.stringify(defaultOrdersSearchParams[filterKey]))switch(filterKey){case"sortField":sortParameters(searchState.sortField);break;case"shippingMethodsFilter":var shippingMethodParams=searchState.shippingMethodsFilter.reduce((function(accum,item,index){return accum["shipping_method[".concat(index,"]")]=item,accum}),{});Object.entries(shippingMethodParams).forEach((function(_a){var _b=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,2),key=_b[0],value=_b[1];queryParams[key]=value}));break;case"orderStatus":queryParams.order_status=searchState[filterKey];break;case"isInternational":queryParams.is_international=searchState[filterKey];break;case"dateFilter":var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(searchState[filterKey],2),startDate=_a[0],endDate=_a[1];moment__WEBPACK_IMPORTED_MODULE_1__.isMoment(startDate)&&(queryParams.start_date=startDate.format()),moment__WEBPACK_IMPORTED_MODULE_1__.isMoment(endDate)&&(queryParams.end_date=endDate.format());break;case"storeFilter":"all"!==(filterValue=searchState[filterKey])&&(queryParams.shop_app=(0,_types_Store__WEBPACK_IMPORTED_MODULE_3__.N3)(filterValue));break;case"weightFilter":var _b=searchState[filterKey],minWeight=_b.minWeight,maxWeight=_b.maxWeight,weightUnit=_b.weightUnit;queryParams.weight_gt=minWeight,queryParams.weight_lt=maxWeight,queryParams.weight_unit=weightUnit;break;case"searchBarQuery":var filterValue=searchState[filterKey];queryParams.q=filterValue;break;case"currentPerPage":filterValue=searchState[filterKey];queryParams.results=String(filterValue);break;case"currentPageNumber":filterValue=searchState[filterKey];queryParams.page=parseInt(String(filterValue),10).toString();break;case"hidden":filterValue=searchState[filterKey];queryParams.hidden=String(filterValue);break;case"itemFilter":filterValue=searchState[filterKey];(0,_utils__WEBPACK_IMPORTED_MODULE_5__.zM)(filterValue,queryParams,"item");break;case"saved":filterValue=searchState[filterKey];queryParams.saved=String(filterValue);break;case"orderTagsFilter":filterValue=searchState[filterKey];(0,_utils__WEBPACK_IMPORTED_MODULE_5__.zM)(filterValue.tags,queryParams,"tag"),queryParams.untagged=String(filterValue.untagged)}var selectedKeys=Object.keys(queryParams);return 0===selectedKeys.length||1===selectedKeys.length&&queryParams.page||sortParameters(searchState.sortField),queryParams}!function(BulkDrawerLoadOptions){BulkDrawerLoadOptions.ADDRESS="customer",BulkDrawerLoadOptions.RATES="carrierService",BulkDrawerLoadOptions.ITEMS="items",BulkDrawerLoadOptions.PACKAGE="packageInformation",BulkDrawerLoadOptions.ORDER="order",BulkDrawerLoadOptions.DEFAULT="default"}(BulkDrawerLoadOptions||(BulkDrawerLoadOptions={}))},"./app/pages/Orders/Blackbeard/types/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c4:()=>getRegExpForQueryParameter,t7:()=>areEqual,xu:()=>searchQueryToSearchParameter,zM:()=>searchParameterToSearchQuery});var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),getRegExpForQueryParameter=(__webpack_require__("./app/constants/distance.ts"),__webpack_require__("./app/constants/weight.ts"),__webpack_require__("./app/types/LineItem.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/ParcelTemplate.ts"),function(parameter){return new RegExp("^".concat(parameter,"(\\[\\d+\\])?$"))}),searchQueryToSearchParameter=function(searchQuery,parameter){return Object.entries(searchQuery).filter((function(_a){var key=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,1)[0];return getRegExpForQueryParameter(parameter).test(key)})).reduce((function(accum,_a){var value=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.zs)(_a,2)[1];return value&&accum.push(value),accum}),[])},searchParameterToSearchQuery=function(filterValue,queryParams,parameter){filterValue.forEach((function(item,index){queryParams["".concat(parameter,"[").concat(index,"]")]=item}))},areEqual=function(a,b){return JSON.stringify(a)===JSON.stringify(b)}},"./app/styles/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N2:()=>zIndexValues,Tj:()=>colors,V3:()=>reactSelectDropdownStyles,Wy:()=>fontWeight,df:()=>ordersTableCellMinHeight,mw:()=>fontFamily,vi:()=>formSizes,xW:()=>classNames,zC:()=>_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),fontFamily="neue-haas-unica, pragmatica-web, 'Helvetica Neue', Helvetica, Arial, sans-serif",v3OldColors_gray10="#F7FBFC",v3OldColors_gray20="#E9F1F5",v3OldColors_gray30="#CFDEE6",v3OldColors_gray40="#B8CED9",v3OldColors_gray50="#7B99A8",v3OldColors_gray60="#5C7B8A",v3OldColors_gray70="#4C6774",v3OldColors_gray80="#425B66",v3OldColors_gray90="#2E434D",v3OldColors_gray100="#1F2D34",designSystemColors={forest50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,forest100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,forest200:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,forest600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,forest700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,forest800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.primaryButtonHover,gray10:v3OldColors_gray10,gray25:v3OldColors_gray20,gray50:v3OldColors_gray20,gray100:v3OldColors_gray10,gray200:v3OldColors_gray20,gray300:v3OldColors_gray30,gray400:v3OldColors_gray40,gray500:v3OldColors_gray50,gray600:v3OldColors_gray60,gray700:v3OldColors_gray70,gray800:v3OldColors_gray80,gray900:v3OldColors_gray90,gray1000:v3OldColors_gray100,sea25:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,sea50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,sea100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea200:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea300:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea400:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea500:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea900:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,ruby50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,ruby400:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,ruby600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,ruby700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,macaroni50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,macaroni100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,macaroni300:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,macaroni600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,macaroni700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,macaroni800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,macaroni900:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,white:"#FFFFFF",black:"#1B1D1D"},colors=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},designSystemColors),{borders:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,primary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,primaryFocus:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.primaryButtonHover,primaryAlternative:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.primaryButtonHover,secondary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,tertiary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,dangerRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,getStartedFooterGrey:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,getStartedFooterBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,containerBorderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,geyser:"#cfdce2",rollingStone:"#718087",coolGray:"#678096",fontColor:"#333333",placeholderColor:"#AEAEAE",disabledIcon:"#e3e4e5",greyBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,viking:"#50C1DB",emperor:"#555555",nightRider:"#333333",loblolly:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,aqua:"#31A2C4",almostWhite:"#F1F5F7",borderColor:"#ddd",errorRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,errorShadowRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,pagination:{hoverBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,borderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,activeBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success},form:{greyBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,errorBar:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,errorBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,errorBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,warningBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,warningBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,successBar:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,successBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,successBackground:designSystemColors.gray25,greyDisabled:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,greyDisabledBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,greyDisabledButton:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,placeholderFontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,fontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.text.primary.black,labelFontColor:designSystemColors.black,disabledLabelFontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,shadow:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,activeBorderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders},tags:{removeIconColor:"#979797",hoverRemoveIconColor:"#555555",highlighted:{borderColor:"#B9C7CE",backgroundColor:"#F4F9FB"}},dialog:{errorBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,successBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,infoBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover},banner:{info:"#F2FBFF"},notification:{boxShadow:"rgba(0, 0, 0, 0.12)"},branding:{defaultBrandPrimaryColor:"#000000",defaultBrandSecondaryColor:"#F1F1F1"}}),formSizes=(colors.gray600,colors.rollingStone,colors.gray10,colors.primary,colors.gray10,colors.rollingStone,colors.rollingStone,colors.primary,colors.primary,colors.gray600,colors.gray600,colors.loblolly,colors.loblolly,colors.white,colors.white,colors.white,colors.gray10,colors.rollingStone,colors.white,colors.white,colors.gray600,colors.white,colors.loblolly,colors.white,{inputHeight:"2.5rem",inputWidth:"15rem"}),ordersTableCellMinHeight="4.5rem",zIndexValues={base:1,leftColumn:2,orderBatchMenu:10,dropdown:15,anchoredDiv:98,overlay:99,multiSelect:100,modal:101,persistantBanner:999,banner:1e3,tooltip:1070},fontWeight={thin:100,extraLight:200,light:300,normal:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900},classNames={fulfilledOrderText:"fulfilled-order-text"},reactSelectDropdownStyles={control:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{borderRadius:"4px",border:state.isFocused?"1px solid ".concat(colors.form.activeBorderColor):"1px solid ".concat(colors.form.greyBorder),color:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.text.primary.black),borderColor:(state.isFocused?colors.form.activeBorderColor:colors.form.greyBorder)+" !important",minHeight:"2.5rem",height:"2.5rem",boxShadow:"none",borderBottomLeftRadius:state.menuIsOpen&&"top"!==state.selectProps.menuPlacement?0:"4px",borderBottomRightRadius:state.menuIsOpen&&"top"!==state.selectProps.menuPlacement?0:"4px",borderTopLeftRadius:state.menuIsOpen&&"bottom"!==state.selectProps.menuPlacement?0:"4px",borderTopRightRadius:state.menuIsOpen&&"bottom"!==state.selectProps.menuPlacement?0:"4px"})},indicatorSeparator:function(){return{display:"none"}},container:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{padding:0,margin:0})},valueContainer:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{padding:"0 0.75rem",fontWeight:"normal",height:"2.5rem",overflow:"initial"})},option:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{position:"relative",cursor:"pointer",padding:"0.5rem 1rem",color:"".concat(colors.form.fontColor),backgroundColor:(isSelected=state.isSelected,isFocused=state.isFocused,isSelected?colors.white:isFocused?colors.gray25:"inherit"),"&:hover":{backgroundColor:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover)},fontSize:"0.875rem",fontWeight:state.isSelected?fontWeight.medium:fontWeight.normal});var isSelected,isFocused},clearIndicator:function(){return{display:"none"}},dropdownIndicator:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",padding:".5rem",color:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary),transform:state.selectProps.menuIsOpen&&"rotate(180deg)"})},input:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{margin:"0rem",backgroundColor:state.pasteEdited?"".concat(colors.forest50):"",position:"absolute",top:"50%",transform:"translateY(-50%)"})},placeholder:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{color:"".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary)})},indicatorsContainer:function(provided){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{height:"2.5rem"})},menu:function(provided,state){return(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},provided),{marginTop:0,marginBottom:"top"!==state.selectProps.menuPlacement?0:"",borderTopLeftRadius:"top"!==state.selectProps.menuPlacement?0:"",borderTopRightRadius:"top"!==state.selectProps.menuPlacement?0:"",borderBottomLeftRadius:"bottom"!==state.selectProps.menuPlacement?0:"",borderBottomRightRadius:"bottom"!==state.selectProps.menuPlacement?0:"",boxShadow:"top"!==state.selectProps.menuPlacement?"0px 6px 20px rgba(0, 0, 0, 0.15)":"none",border:"1px solid ".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary),boxSizing:"border-box",borderTop:"top"!==state.selectProps.menuPlacement?"none":"",borderBottom:"bottom"!==state.selectProps.menuPlacement?"none":""})}}},"./app/utils/segment/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sV:()=>schema.Ay,P0:()=>getLocalTraits,ls:()=>segment_identify,Ok:()=>isTraitDifferent,u4:()=>track});var esm_exports=__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js"),schema=__webpack_require__("./app/utils/segment/schema.ts");__webpack_require__("./node_modules/moment/moment.js"),__webpack_require__("./app/pages/Onboarding/onboarding.constants.ts"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts");var segment_identify=function(id,traits){window.analytics?window.analytics.identify(id,traits):esm_exports.wd("identify called before window.analytics available",{level:"warning"})},track=function(name,properties){window.analytics?window.analytics.track(name,properties):esm_exports.wd("track called before window.analytics available",{level:"warning"})},getLocalTraits=function(){var ajsUserTraits=localStorage.getItem("ajs_user_traits");if(ajsUserTraits)try{return JSON.parse(ajsUserTraits)}catch(error){return}},isTraitDifferent=function(property,value){var localTraits=getLocalTraits();return!(localTraits&&localTraits[property]===value)}},"./app/utils/segment/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Events;__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,ID:()=>EVENT_ORIGIN_ORDER_DETAILS,hX:()=>EVENT_ORIGIN_LEGACY_ORDER}),function(Events){Events.registered="Signed Up",Events.store_connected="Store Connected",Events.store_disconnected="Store Disconnected",Events.address_created="Address Created",Events.credit_card_added="Credit Card Added",Events.carrier_connected="Carrier Connected",Events.carrier_error_displayed="Carrier Error Displayed",Events.package_template_created="Package Template Created",Events.label_purchase="Label Purchased",Events.label_purchase_failed="Label Purchase Failed",Events.label_downloaded="Label Downloaded",Events.packing_slip_downloaded="Packing Slip Downloaded",Events.tracking_status_viewed="Tracking Status Viewed",Events.onboarding_step_completed="Step Completed",Events.onboarding_completed="Onboarding Completed",Events.get_started_viewed="Get Started Page View",Events.insurance_updated="Insurance Updated",Events.insurance_modal_opened="Insurance Modal Opened",Events.insurance_modal_link_clicked="Insurance Modal Link Clicked",Events.email_notification_changed="Email Notifications Changed",Events.insurance_option_onboarding="Insurance option during onboarding",Events.automatic_insurance_settings_update="Automatic insurance settings update",Events.insurance_removal="Insurance removal in confirmation modal",Events.insurance_removal_order_details="Remove Insurance from Order Details",Events.signaure_modal_opened="Signature Confirmation Modal Opened",Events.signature_modal_updated="Signature Confirmation Modal Updated",Events.signature_removal_order_details="Remove Signature from Order Details",Events.ups_surcharge_warning="UPS surcharge warnings",Events.insurance_details_opened="Insurance Details Opened From Sidebar",Events.signature_details_opened="Signature Details Opened From Sidebar",Events.signature_updated="Signature Details Updated From Sidebar",Events.new_insurance_updated="Insurance Updated From Sidebar",Events.insurance_link_clicked="Insurance Link Clicked From Sidebar",Events.insurance_removed_sidebar="Remove Insurance From Sidebar",Events.signature_removed_sidebar="Remove Signature From Sidebar",Events.promo_code_add_replace="Promo code added or replaced",Events.save_default_package_units="Default package units updated",Events.update_user_information="User profile updated",Events.update_user_language="User language updated",Events.order_search_completed="Order search completed",Events.order_search_result_selected="Order search row selected",Events.customs_options_form_submit="Customs Options Form Submit",Events.customs_items_form_submit="Customs Items Form Submit",Events.package_info_edited="Package Info Updated",Events.embeddable_next_params="Embeddable User Set Next Params",Events.plan_updated="Plan Updated",Events.downgrade_survey_question_answered="Pro Plan Downgrade Survey Question Answered",Events.downgrade_survey_cancelled="Pro Plan Downgrade Survey Cancelled",Events.downgrade_survey_completed="Pro Plan Downgrade Survey Completed",Events.downgrade_survey_submitted="Pro Plan Downgrade Survey Submitted"}(Events||(Events={}));var EVENT_ORIGIN_ORDER_DETAILS="Order details",EVENT_ORIGIN_LEGACY_ORDER="Legacy orders table";const __WEBPACK_DEFAULT_EXPORT__=Events},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/blackbeard/components/Search/Filters/WeightFilterTab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,default:()=>WeightFilterTab_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),weight=__webpack_require__("./app/constants/weight.ts"),translate=__webpack_require__("./app/utils/translate.ts"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Popover=__webpack_require__("./node_modules/@goshippo/components/esm/Popover/Popover.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),TextField=__webpack_require__("./node_modules/@goshippo/components/esm/TextField/TextField.js"),MenuItem=__webpack_require__("./node_modules/@goshippo/components/esm/MenuItem/MenuItem.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),Grid=__webpack_require__("./node_modules/@goshippo/components/esm/Grid/Grid.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),types=__webpack_require__("./app/pages/Orders/Blackbeard/types/types.ts"),react=__webpack_require__("./node_modules/react/index.js"),segment=__webpack_require__("./app/utils/segment/index.ts"),GenericFilterTab=__webpack_require__("./app/blackbeard/components/Search/Filters/GenericFilterTab.tsx"),constants=__webpack_require__("./app/styles/constants.ts");const Filters_WeightFilterTab=function(_a){var defaultMinWeight=_a.minWeight,defaultMaxWeight=_a.maxWeight,defaultWeightUnit=_a.weightUnit,defaultUserWeightUnit=_a.defaultUserWeightUnit,setWeightFilter=_a.setWeightFilter,t=_a.t,_b=(0,tslib_es6.zs)((0,react.useState)(defaultMinWeight),2),minWeight=_b[0],setMinWeight=_b[1],_c=(0,tslib_es6.zs)((0,react.useState)(defaultMaxWeight),2),maxWeight=_c[0],setMaxWeight=_c[1],_d=(0,tslib_es6.zs)((0,react.useState)(defaultWeightUnit),2),weightUnit=_d[0],setWeightUnit=_d[1],_e=(0,tslib_es6.zs)((0,react.useState)(null),2),anchorEl=_e[0],setAnchorEl=_e[1],_f=(0,tslib_es6.zs)((0,react.useState)(""),2),minError=_f[0],setMinError=_f[1],_g=(0,tslib_es6.zs)((0,react.useState)(""),2),maxError=_g[0],setMaxError=_g[1];(0,react.useEffect)((function(){setMinWeight(defaultMinWeight)}),[defaultMinWeight]),(0,react.useEffect)((function(){setMaxWeight(defaultMaxWeight)}),[defaultMaxWeight]),(0,react.useEffect)((function(){setWeightUnit(defaultWeightUnit||defaultUserWeightUnit)}),[defaultUserWeightUnit,defaultWeightUnit]);var handleClick=(0,react.useCallback)((function(event){setAnchorEl(event.currentTarget)}),[]),handleClose=(0,react.useCallback)((function(){setAnchorEl(null)}),[]),open=Boolean(anchorEl),isNumeric=function(value){var parsedValue=parseFloat(value);return!(isNaN(parsedValue)||parsedValue<0||!value.match(/^-{0,1}\d*\.?\d+$/))},onMinWeightChange=(0,react.useCallback)((function(event){var minWeightValue=event.target.value;""===minWeightValue&&setMinError(""),minWeightValue&&(isNumeric(minWeightValue)?maxWeight&&parseFloat(minWeightValue)>parseFloat(maxWeight)?setMinError(t("orders:weight:minValidation")):(setMinError(""),maxError&&isNumeric(maxWeight)&&setMaxError("")):setMinError(t("orders:weight:numeric"))),setMinWeight(minWeightValue)}),[maxWeight,t,maxError]),onMaxWeightChange=(0,react.useCallback)((function(event){var maxWeightValue=event.target.value;""===maxWeightValue&&setMaxError(""),maxWeightValue&&(isNumeric(maxWeightValue)?minWeight&&parseFloat(maxWeightValue)<parseFloat(minWeight)?setMaxError(t("orders:weight:maxValidation")):(setMaxError(""),minError&&isNumeric(minWeight)&&setMinError("")):setMaxError(t("orders:weight:numeric"))),setMaxWeight(maxWeightValue)}),[minWeight,t,minError]),onWeightUnitChange=(0,react.useCallback)((function(event){var weightUnit=event.target.value;setWeightUnit(weightUnit)}),[]),applyWeightFilter=(0,react.useCallback)((function(){setWeightFilter({minWeight,maxWeight,weightUnit}),(0,segment.u4)("Order List Filtered",{weight:[minWeight,maxWeight,weightUnit]}),handleClose()}),[setWeightFilter,minWeight,maxWeight,weightUnit,handleClose]),onClearWeightFilter=(0,react.useCallback)((function(){setMinWeight(types.tg.weightFilter.minWeight),setMaxWeight(types.tg.weightFilter.maxWeight),setWeightFilter(types.tg.weightFilter),setMinError(""),setMaxError(""),handleClose()}),[setMinWeight,setMaxWeight,setWeightFilter,handleClose,setMinError,setMaxError]),applyDisabled=!!minError||!!maxError||!minWeight&&!maxWeight,weightTabLabel=function(minWeight,maxWeight,weightUnit){var weightTabLabelString=t("orders:weight:weight");return minWeight&&maxWeight?"".concat(weightTabLabelString,": ").concat(minWeight,"-").concat(maxWeight," ").concat(weightUnit):!minWeight&&maxWeight?"".concat(weightTabLabelString,": ").concat(t("orders:weight:max")," ").concat(maxWeight," ").concat(weightUnit):minWeight&&!maxWeight?"".concat(weightTabLabelString,": ").concat(t("orders:weight:min")," ").concat(minWeight," ").concat(weightUnit):weightTabLabelString}(defaultMinWeight,defaultMaxWeight,defaultWeightUnit),isSmallScreen=(0,useMediaQuery.A)(shippoTheme.A.breakpoints.down("sm"));return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(GenericFilterTab.A,{"data-testid":"weight-filter-button",dirty:!1,onClick:handleClick,label:weightTabLabel,open}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Popover.A,(0,tslib_es6.Cl)({open,anchorEl,onClose:handleClose,anchorOrigin:{vertical:"bottom",horizontal:"left"},"data-testid":"weight-filter-popover"},{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({sx:{p:2}},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h3",variant:"h3",sx:{mb:"1rem"}},{children:t("orders:filters:weight:selectWeight")})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({alignItems:"flex-start",direction:isSmallScreen?"column":"row",spacing:isSmallScreen?2:1},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,{defaultValue:minWeight,name:"min-weight",label:t("orders:weight:min"),InputLabelProps:{shrink:!0},onChange:onMinWeightChange,helperText:minError,error:!!minError,required:!!minError,sx:isSmallScreen?{}:{width:"5rem"}}),isSmallScreen?"":(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({style:{fontWeight:constants.Wy.medium}},{children:"-"})),(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,{defaultValue:maxWeight,name:"max-weight",label:t("orders:weight:max"),InputLabelProps:{shrink:!0},onChange:onMaxWeightChange,helperText:maxError,error:!!maxError,required:!!maxError,sx:isSmallScreen?{}:{width:"5rem"}}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TextField.A,(0,tslib_es6.Cl)({error:!1,select:!0,label:t("orders:weight:units"),value:weightUnit,onChange:onWeightUnitChange,"data-testid":"weight-units-select"},{children:types.fL.map((function(weightUnit,i){return(0,emotion_react_jsx_runtime_browser_esm.Y)(MenuItem.A,(0,tslib_es6.Cl)({value:weightUnit},{children:weightUnit}),i)}))}))]})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{sx:{my:2}}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Grid.A,(0,tslib_es6.Cl)({container:!0,spacing:3.5},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Grid.A,(0,tslib_es6.Cl)({item:!0,xs:6},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({onClick:onClearWeightFilter,size:"small",color:"secondary",variant:"text",fullWidth:!0},{children:t("orders:filters:weight:clearAll")}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Grid.A,(0,tslib_es6.Cl)({item:!0,xs:6},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({disabled:applyDisabled,"data-testid":"weight-filter-apply",onClick:applyWeightFilter,size:"small",fullWidth:!0},{children:t("orders:filters:weight:apply")}))}))]}))]}))}))]})},WeightFilterTab_stories={title:"Order V2 / Weight Filter Tab",component:Filters_WeightFilterTab,parameters:{layout:"centered"},argTypes:{setWeightFilter:{action:"set-weight"}}};var WeightFilterTabWithTranslate=(0,translate.Tl)("orders")(Filters_WeightFilterTab),Regular=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(WeightFilterTabWithTranslate,(0,tslib_es6.Cl)({},args))}.bind({});Regular.args={minWeight:"5",maxWeight:"10",weightUnit:"lb",defaultUserWeightUnit:weight.VV.LB},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"(args: WeightFilterProps) => <WeightFilterTabWithTranslate {...args} />",...Regular.parameters?.docs?.source}}}}}]);