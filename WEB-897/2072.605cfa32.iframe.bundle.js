"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[2072],{"./app/pages/Orders/Blackbeard/types/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KR:()=>ordersSearchStateToSearchQuery,UV:()=>weightUnitFilterTypeList,iG:()=>defaultOrdersSearchParams,nE:()=>ordersSearchQueryToSearchState});var BulkDrawerLoadOptions,tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_constants_weight__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/weight.ts"),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/moment/moment.js"),_types_Store__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/Store.ts")),_utils__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./app/utils/businessRules.ts"),__webpack_require__("./app/pages/Orders/Blackbeard/types/utils.ts")),weightUnitFilterTypeList=["g","kg","oz","lb",""],defaultOrdersSearchParams={searchBarQuery:"",searchError:!1,orderStatus:"all",sortField:"-created_at",isInternational:"",dateFilter:[null,null],storeFilter:"all",itemFilter:[],weightFilter:{minWeight:"",maxWeight:"",weightUnit:""},currentPerPage:25,currentPageNumber:1,rowCount:0,hidden:!1,shippingMethodsFilter:[],saved:"",orderTagsFilter:[]},searchQueryToSearchStateStoreValues=Object.keys(_types_Store__WEBPACK_IMPORTED_MODULE_3__.ZX).reduce((function(accum,key){var value=_types_Store__WEBPACK_IMPORTED_MODULE_3__.ZX[key];return accum[(0,_types_Store__WEBPACK_IMPORTED_MODULE_3__.NC)(value)]=value,accum}),{undefined:"All"});function ordersSearchQueryToSearchState(searchQuery){var searchParameters={};if(searchQuery.start_date||searchQuery.end_date){var startDate=searchQuery.start_date?moment__WEBPACK_IMPORTED_MODULE_1__(searchQuery.start_date):null,endDate=searchQuery.end_date?moment__WEBPACK_IMPORTED_MODULE_1__(searchQuery.end_date):null;searchParameters.dateFilter=[startDate,endDate]}if(searchQuery.weight_gt||searchQuery.weight_lt||searchQuery.weight_unit){var minWeight=searchQuery.weight_gt?searchQuery.weight_gt:"",maxWeight=searchQuery.weight_lt?searchQuery.weight_lt:"",weightUnit=searchQuery.weight_unit?searchQuery.weight_unit:"lb",fallbackWeightUnit=_constants_weight__WEBPACK_IMPORTED_MODULE_0__.NM[weightUnit]||"lb";searchParameters.weightFilter={minWeight,maxWeight,weightUnit:fallbackWeightUnit}}if(searchQuery.order_status&&(searchParameters.orderStatus=searchQuery.order_status),"created_at"===searchQuery.sort_by){var sortField="desc"===searchQuery.order_by?"-created_at":"created_at";searchParameters.sortField=sortField}return"_score"===searchQuery.sort_by&&(searchParameters.sortField="most_relevant"),searchQuery.is_international&&(searchParameters.isInternational=searchQuery.is_international),searchQuery.shop_app&&(searchParameters.storeFilter=searchQueryToSearchStateStoreValues[searchQuery.shop_app]),searchQuery.page&&(searchParameters.currentPageNumber=parseInt(searchQuery.page,10)),searchQuery.results&&(searchParameters.currentPerPage=parseInt(searchQuery.results,10)),searchQuery.hidden&&(searchParameters.hidden="true"===searchQuery.hidden),searchQuery.saved&&(searchParameters.saved=searchQuery.saved),searchParameters.itemFilter=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.e9)(searchQuery,"item"),searchParameters.orderTagsFilter=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.e9)(searchQuery,"tag"),searchParameters.shippingMethodsFilter=function shippingMethodsQueryToState(searchQuery){return Object.entries(searchQuery).filter((function(_a){return(0,tslib__WEBPACK_IMPORTED_MODULE_6__.CR)(_a,1)[0].includes("shipping_method")})).reduce((function(accum,_a){var value=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.CR)(_a,2)[1];return value&&accum.push(value),accum}),[])}(searchQuery),searchParameters.searchBarQuery=searchQuery.q||"",(0,tslib__WEBPACK_IMPORTED_MODULE_6__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.pi)({},defaultOrdersSearchParams),searchParameters)}function ordersSearchStateToSearchQuery(searchState){var queryParams={},sortParameters=function(sortField){switch(sortField){case"-created_at":queryParams.order_by="desc",queryParams.sort_by="created_at";break;case"created_at":queryParams.order_by="asc",queryParams.sort_by="created_at";break;default:queryParams.order_by="desc",queryParams.sort_by="_score"}};for(var filterKey in searchState)if(JSON.stringify(searchState[filterKey])!==JSON.stringify(defaultOrdersSearchParams[filterKey]))switch(filterKey){case"sortField":sortParameters(searchState.sortField);break;case"shippingMethodsFilter":var shippingMethodParams=searchState.shippingMethodsFilter.reduce((function(accum,item,index){return accum["shipping_method[".concat(index,"]")]=item,accum}),{});Object.entries(shippingMethodParams).forEach((function(_a){var _b=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.CR)(_a,2),key=_b[0],value=_b[1];queryParams[key]=value}));break;case"orderStatus":queryParams.order_status=searchState[filterKey];break;case"isInternational":queryParams.is_international=searchState[filterKey];break;case"dateFilter":var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.CR)(searchState[filterKey],2),startDate=_a[0],endDate=_a[1];moment__WEBPACK_IMPORTED_MODULE_1__.isMoment(startDate)&&(queryParams.start_date=startDate.format()),moment__WEBPACK_IMPORTED_MODULE_1__.isMoment(endDate)&&(queryParams.end_date=endDate.format());break;case"storeFilter":"all"!==(filterValue=searchState[filterKey])&&(queryParams.shop_app=(0,_types_Store__WEBPACK_IMPORTED_MODULE_3__.NC)(filterValue));break;case"weightFilter":var _b=searchState[filterKey],minWeight=_b.minWeight,maxWeight=_b.maxWeight,weightUnit=_b.weightUnit;queryParams.weight_gt=minWeight,queryParams.weight_lt=maxWeight,queryParams.weight_unit=weightUnit;break;case"searchBarQuery":var filterValue=searchState[filterKey];queryParams.q=filterValue;break;case"currentPerPage":filterValue=searchState[filterKey];queryParams.results=String(filterValue);break;case"currentPageNumber":filterValue=searchState[filterKey];queryParams.page=parseInt(String(filterValue),10).toString();break;case"hidden":filterValue=searchState[filterKey];queryParams.hidden=String(filterValue);break;case"itemFilter":filterValue=searchState[filterKey];(0,_utils__WEBPACK_IMPORTED_MODULE_5__.rB)(filterValue,queryParams,"item");break;case"saved":filterValue=searchState[filterKey];queryParams.saved=String(filterValue);break;case"orderTagsFilter":filterValue=searchState[filterKey];(0,_utils__WEBPACK_IMPORTED_MODULE_5__.rB)(filterValue,queryParams,"tag")}var selectedKeys=Object.keys(queryParams);return 0===selectedKeys.length||1===selectedKeys.length&&queryParams.page||sortParameters(searchState.sortField),queryParams}!function(BulkDrawerLoadOptions){BulkDrawerLoadOptions.ADDRESS="customer",BulkDrawerLoadOptions.RATES="carrierService",BulkDrawerLoadOptions.ITEMS="items",BulkDrawerLoadOptions.PACKAGE="packageInformation",BulkDrawerLoadOptions.ORDER="order",BulkDrawerLoadOptions.DEFAULT="default"}(BulkDrawerLoadOptions||(BulkDrawerLoadOptions={}))},"./app/pages/Orders/Blackbeard/types/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e9:()=>searchQueryToSearchParameter,rB:()=>searchParameterToSearchQuery,wy:()=>areEqual});var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),searchQueryToSearchParameter=(__webpack_require__("./app/constants/distance.ts"),__webpack_require__("./app/constants/weight.ts"),__webpack_require__("./app/types/LineItem.ts"),__webpack_require__("./app/types/Order.ts"),__webpack_require__("./app/types/OrderBatchEntry.ts"),__webpack_require__("./app/types/ParcelTemplate.ts"),function(searchQuery,parameter){return Object.entries(searchQuery).filter((function(_a){return(0,tslib__WEBPACK_IMPORTED_MODULE_6__.CR)(_a,1)[0].includes(parameter)})).reduce((function(accum,_a){var value=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.CR)(_a,2)[1];return value&&accum.push(value),accum}),[])}),searchParameterToSearchQuery=function(filterValue,queryParams,parameter){filterValue.forEach((function(item,index){queryParams["".concat(parameter,"[").concat(index,"]")]=item}))},areEqual=function(a,b){return JSON.stringify(a)===JSON.stringify(b)}}}]);