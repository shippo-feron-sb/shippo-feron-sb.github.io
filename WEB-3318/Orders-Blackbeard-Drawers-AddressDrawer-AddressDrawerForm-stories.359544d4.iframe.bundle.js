"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[1215,1476],{"./node_modules/lodash-es/_cloneBuffer.js":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _root_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/_root.js");module=__webpack_require__.hmd(module);var freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&module&&!module.nodeType&&module,Buffer=freeModule&&freeModule.exports===freeExports?_root_js__WEBPACK_IMPORTED_MODULE_0__.A.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;const __WEBPACK_DEFAULT_EXPORT__=function cloneBuffer(buffer,isDeep){if(isDeep)return buffer.slice();var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);return buffer.copy(result),result}},"./node_modules/lodash-es/omit.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>lodash_es_omit});var _arrayMap=__webpack_require__("./node_modules/lodash-es/_arrayMap.js"),_Stack=__webpack_require__("./node_modules/lodash-es/_Stack.js");const _arrayEach=function arrayEach(array,iteratee){for(var index=-1,length=null==array?0:array.length;++index<length&&!1!==iteratee(array[index],index,array););return array};var _assignValue=__webpack_require__("./node_modules/lodash-es/_assignValue.js"),_baseAssignValue=__webpack_require__("./node_modules/lodash-es/_baseAssignValue.js");const _copyObject=function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});for(var index=-1,length=props.length;++index<length;){var key=props[index],newValue=customizer?customizer(object[key],source[key],key,object,source):void 0;void 0===newValue&&(newValue=source[key]),isNew?(0,_baseAssignValue.A)(object,key,newValue):(0,_assignValue.A)(object,key,newValue)}return object};var keys=__webpack_require__("./node_modules/lodash-es/keys.js");const _baseAssign=function baseAssign(object,source){return object&&_copyObject(source,(0,keys.A)(source),object)};var _arrayLikeKeys=__webpack_require__("./node_modules/lodash-es/_arrayLikeKeys.js"),isObject=__webpack_require__("./node_modules/lodash-es/isObject.js"),_isPrototype=__webpack_require__("./node_modules/lodash-es/_isPrototype.js");const _nativeKeysIn=function nativeKeysIn(object){var result=[];if(null!=object)for(var key in Object(object))result.push(key);return result};var _baseKeysIn_hasOwnProperty=Object.prototype.hasOwnProperty;const _baseKeysIn=function baseKeysIn(object){if(!(0,isObject.A)(object))return _nativeKeysIn(object);var isProto=(0,_isPrototype.A)(object),result=[];for(var key in object)("constructor"!=key||!isProto&&_baseKeysIn_hasOwnProperty.call(object,key))&&result.push(key);return result};var isArrayLike=__webpack_require__("./node_modules/lodash-es/isArrayLike.js");const lodash_es_keysIn=function keysIn_keysIn(object){return(0,isArrayLike.A)(object)?(0,_arrayLikeKeys.A)(object,!0):_baseKeysIn(object)};const _baseAssignIn=function baseAssignIn(object,source){return object&&_copyObject(source,lodash_es_keysIn(source),object)};var _cloneBuffer=__webpack_require__("./node_modules/lodash-es/_cloneBuffer.js");const _copyArray=function copyArray(source,array){var index=-1,length=source.length;for(array||(array=Array(length));++index<length;)array[index]=source[index];return array};var _getSymbols=__webpack_require__("./node_modules/lodash-es/_getSymbols.js");const _copySymbols=function copySymbols(source,object){return _copyObject(source,(0,_getSymbols.A)(source),object)};var _arrayPush=__webpack_require__("./node_modules/lodash-es/_arrayPush.js"),_getPrototype=__webpack_require__("./node_modules/lodash-es/_getPrototype.js"),stubArray=__webpack_require__("./node_modules/lodash-es/stubArray.js");const _getSymbolsIn=Object.getOwnPropertySymbols?function(object){for(var result=[];object;)(0,_arrayPush.A)(result,(0,_getSymbols.A)(object)),object=(0,_getPrototype.A)(object);return result}:stubArray.A;const _copySymbolsIn=function copySymbolsIn(source,object){return _copyObject(source,_getSymbolsIn(source),object)};var _getAllKeys=__webpack_require__("./node_modules/lodash-es/_getAllKeys.js"),_baseGetAllKeys=__webpack_require__("./node_modules/lodash-es/_baseGetAllKeys.js");const _getAllKeysIn=function getAllKeysIn(object){return(0,_baseGetAllKeys.A)(object,lodash_es_keysIn,_getSymbolsIn)};var _getTag=__webpack_require__("./node_modules/lodash-es/_getTag.js"),_initCloneArray_hasOwnProperty=Object.prototype.hasOwnProperty;const _initCloneArray=function initCloneArray(array){var length=array.length,result=new array.constructor(length);return length&&"string"==typeof array[0]&&_initCloneArray_hasOwnProperty.call(array,"index")&&(result.index=array.index,result.input=array.input),result};var _Uint8Array=__webpack_require__("./node_modules/lodash-es/_Uint8Array.js");const _cloneArrayBuffer=function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);return new _Uint8Array.A(result).set(new _Uint8Array.A(arrayBuffer)),result};const _cloneDataView=function cloneDataView(dataView,isDeep){var buffer=isDeep?_cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)};var reFlags=/\w*$/;const _cloneRegExp=function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));return result.lastIndex=regexp.lastIndex,result};var _Symbol=__webpack_require__("./node_modules/lodash-es/_Symbol.js"),symbolProto=_Symbol.A?_Symbol.A.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;const _cloneSymbol=function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{}};const _cloneTypedArray=function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?_cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)};const _initCloneByTag=function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case"[object ArrayBuffer]":return _cloneArrayBuffer(object);case"[object Boolean]":case"[object Date]":return new Ctor(+object);case"[object DataView]":return _cloneDataView(object,isDeep);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return _cloneTypedArray(object,isDeep);case"[object Map]":case"[object Set]":return new Ctor;case"[object Number]":case"[object String]":return new Ctor(object);case"[object RegExp]":return _cloneRegExp(object);case"[object Symbol]":return _cloneSymbol(object)}};var objectCreate=Object.create;const _baseCreate=function(){function object(){}return function(proto){if(!(0,isObject.A)(proto))return{};if(objectCreate)return objectCreate(proto);object.prototype=proto;var result=new object;return object.prototype=void 0,result}}();const _initCloneObject=function initCloneObject(object){return"function"!=typeof object.constructor||(0,_isPrototype.A)(object)?{}:_baseCreate((0,_getPrototype.A)(object))};var isArray=__webpack_require__("./node_modules/lodash-es/isArray.js"),isBuffer=__webpack_require__("./node_modules/lodash-es/isBuffer.js"),isObjectLike=__webpack_require__("./node_modules/lodash-es/isObjectLike.js");const _baseIsMap=function baseIsMap(value){return(0,isObjectLike.A)(value)&&"[object Map]"==(0,_getTag.A)(value)};var _baseUnary=__webpack_require__("./node_modules/lodash-es/_baseUnary.js"),_nodeUtil=__webpack_require__("./node_modules/lodash-es/_nodeUtil.js"),nodeIsMap=_nodeUtil.A&&_nodeUtil.A.isMap;const lodash_es_isMap=nodeIsMap?(0,_baseUnary.A)(nodeIsMap):_baseIsMap;const _baseIsSet=function baseIsSet(value){return(0,isObjectLike.A)(value)&&"[object Set]"==(0,_getTag.A)(value)};var nodeIsSet=_nodeUtil.A&&_nodeUtil.A.isSet;const lodash_es_isSet=nodeIsSet?(0,_baseUnary.A)(nodeIsSet):_baseIsSet;var cloneableTags={};cloneableTags["[object Arguments]"]=cloneableTags["[object Array]"]=cloneableTags["[object ArrayBuffer]"]=cloneableTags["[object DataView]"]=cloneableTags["[object Boolean]"]=cloneableTags["[object Date]"]=cloneableTags["[object Float32Array]"]=cloneableTags["[object Float64Array]"]=cloneableTags["[object Int8Array]"]=cloneableTags["[object Int16Array]"]=cloneableTags["[object Int32Array]"]=cloneableTags["[object Map]"]=cloneableTags["[object Number]"]=cloneableTags["[object Object]"]=cloneableTags["[object RegExp]"]=cloneableTags["[object Set]"]=cloneableTags["[object String]"]=cloneableTags["[object Symbol]"]=cloneableTags["[object Uint8Array]"]=cloneableTags["[object Uint8ClampedArray]"]=cloneableTags["[object Uint16Array]"]=cloneableTags["[object Uint32Array]"]=!0,cloneableTags["[object Error]"]=cloneableTags["[object Function]"]=cloneableTags["[object WeakMap]"]=!1;const _baseClone=function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=1&bitmask,isFlat=2&bitmask,isFull=4&bitmask;if(customizer&&(result=object?customizer(value,key,object,stack):customizer(value)),void 0!==result)return result;if(!(0,isObject.A)(value))return value;var isArr=(0,isArray.A)(value);if(isArr){if(result=_initCloneArray(value),!isDeep)return _copyArray(value,result)}else{var tag=(0,_getTag.A)(value),isFunc="[object Function]"==tag||"[object GeneratorFunction]"==tag;if((0,isBuffer.A)(value))return(0,_cloneBuffer.A)(value,isDeep);if("[object Object]"==tag||"[object Arguments]"==tag||isFunc&&!object){if(result=isFlat||isFunc?{}:_initCloneObject(value),!isDeep)return isFlat?_copySymbolsIn(value,_baseAssignIn(result,value)):_copySymbols(value,_baseAssign(result,value))}else{if(!cloneableTags[tag])return object?value:{};result=_initCloneByTag(value,tag,isDeep)}}stack||(stack=new _Stack.A);var stacked=stack.get(value);if(stacked)return stacked;stack.set(value,result),lodash_es_isSet(value)?value.forEach((function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack))})):lodash_es_isMap(value)&&value.forEach((function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack))}));var keysFunc=isFull?isFlat?_getAllKeysIn:_getAllKeys.A:isFlat?keysIn:keys.A,props=isArr?void 0:keysFunc(value);return _arrayEach(props||value,(function(subValue,key){props&&(subValue=value[key=subValue]),(0,_assignValue.A)(result,key,baseClone(subValue,bitmask,customizer,key,value,stack))})),result};var _castPath=__webpack_require__("./node_modules/lodash-es/_castPath.js"),last=__webpack_require__("./node_modules/lodash-es/last.js"),_parent=__webpack_require__("./node_modules/lodash-es/_parent.js"),_toKey=__webpack_require__("./node_modules/lodash-es/_toKey.js");const _baseUnset=function baseUnset(object,path){return path=(0,_castPath.A)(path,object),null==(object=(0,_parent.A)(object,path))||delete object[(0,_toKey.A)((0,last.A)(path))]};var isPlainObject=__webpack_require__("./node_modules/lodash-es/isPlainObject.js");const _customOmitClone=function customOmitClone(value){return(0,isPlainObject.A)(value)?void 0:value};var _flatRest=__webpack_require__("./node_modules/lodash-es/_flatRest.js");const lodash_es_omit=(0,_flatRest.A)((function(object,paths){var result={};if(null==object)return result;var isDeep=!1;paths=(0,_arrayMap.A)(paths,(function(path){return path=(0,_castPath.A)(path,object),isDeep||(isDeep=path.length>1),path})),_copyObject(object,_getAllKeysIn(object),result),isDeep&&(result=_baseClone(result,7,_customOmitClone));for(var length=paths.length;length--;)_baseUnset(result,paths[length]);return result}))},"./node_modules/lodash-es/xorWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>lodash_es_xorWith});var _arrayFilter=__webpack_require__("./node_modules/lodash-es/_arrayFilter.js"),_baseRest=__webpack_require__("./node_modules/lodash-es/_baseRest.js"),_baseDifference=__webpack_require__("./node_modules/lodash-es/_baseDifference.js"),_baseFlatten=__webpack_require__("./node_modules/lodash-es/_baseFlatten.js"),_baseUniq=__webpack_require__("./node_modules/lodash-es/_baseUniq.js");const _baseXor=function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2)return length?(0,_baseUniq.A)(arrays[0]):[];for(var index=-1,result=Array(length);++index<length;)for(var array=arrays[index],othIndex=-1;++othIndex<length;)othIndex!=index&&(result[index]=(0,_baseDifference.A)(result[index]||array,arrays[othIndex],iteratee,comparator));return(0,_baseUniq.A)((0,_baseFlatten.A)(result,1),iteratee,comparator)};var isArrayLikeObject=__webpack_require__("./node_modules/lodash-es/isArrayLikeObject.js"),last=__webpack_require__("./node_modules/lodash-es/last.js");const lodash_es_xorWith=(0,_baseRest.A)((function(arrays){var comparator=(0,last.A)(arrays);return comparator="function"==typeof comparator?comparator:void 0,_baseXor((0,_arrayFilter.A)(arrays,isArrayLikeObject.A),void 0,comparator)}))},"./app/styles/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N2:()=>zIndexValues,Tj:()=>colors,Wy:()=>fontWeight,df:()=>ordersTableCellMinHeight,mw:()=>fontFamily,vi:()=>formSizes,xW:()=>classNames,zC:()=>_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_goshippo_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),fontFamily="neue-haas-unica, pragmatica-web, 'Helvetica Neue', Helvetica, Arial, sans-serif",v3OldColors_gray10="#F7FBFC",v3OldColors_gray20="#E9F1F5",v3OldColors_gray30="#CFDEE6",v3OldColors_gray40="#B8CED9",v3OldColors_gray50="#7B99A8",v3OldColors_gray60="#5C7B8A",v3OldColors_gray70="#4C6774",v3OldColors_gray80="#425B66",v3OldColors_gray90="#2E434D",v3OldColors_gray100="#1F2D34",designSystemColors={forest50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,forest100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,forest200:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,forest600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,forest700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,forest800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.primaryButtonHover,gray10:v3OldColors_gray10,gray25:v3OldColors_gray20,gray50:v3OldColors_gray20,gray100:v3OldColors_gray10,gray200:v3OldColors_gray20,gray300:v3OldColors_gray30,gray400:v3OldColors_gray40,gray500:v3OldColors_gray50,gray600:v3OldColors_gray60,gray700:v3OldColors_gray70,gray800:v3OldColors_gray80,gray900:v3OldColors_gray90,gray1000:v3OldColors_gray100,sea25:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,sea50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,sea100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea200:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea300:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea400:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea500:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,sea900:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,ruby50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,ruby400:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,ruby600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,ruby700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,macaroni50:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,macaroni100:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,macaroni300:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,macaroni600:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,macaroni700:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,macaroni800:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,macaroni900:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.warning,white:"#FFFFFF",black:"#1B1D1D"},colors=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cl)({},designSystemColors),{borders:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,primary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success,primaryFocus:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.primaryButtonHover,primaryAlternative:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.primaryButtonHover,secondary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondary,tertiary:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,dangerRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,getStartedFooterGrey:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,getStartedFooterBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,containerBorderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,geyser:"#cfdce2",rollingStone:"#718087",coolGray:"#678096",fontColor:"#333333",placeholderColor:"#AEAEAE",disabledIcon:"#e3e4e5",greyBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,viking:"#50C1DB",emperor:"#555555",nightRider:"#333333",loblolly:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,aqua:"#31A2C4",almostWhite:"#F1F5F7",borderColor:"#ddd",errorRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,errorShadowRed:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,pagination:{hoverBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,borderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,activeBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.success},form:{greyBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,errorBar:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,errorBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.foreground.error,errorBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,warningBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,warningBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.warning,successBar:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,successBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,successBackground:designSystemColors.gray25,greyDisabled:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover,greyDisabledBorder:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,greyDisabledButton:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.backgroundDeemphasized,placeholderFontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,fontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.text.primary.black,labelFontColor:designSystemColors.black,disabledLabelFontColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,shadow:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders,activeBorderColor:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.borders},tags:{removeIconColor:"#979797",hoverRemoveIconColor:"#555555",highlighted:{borderColor:"#B9C7CE",backgroundColor:"#F4F9FB"}},dialog:{errorBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.error,successBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.accent.background.success,infoBackground:_goshippo_components__WEBPACK_IMPORTED_MODULE_0__.T.secondaryHover},banner:{info:"#F2FBFF"},notification:{boxShadow:"rgba(0, 0, 0, 0.12)"},branding:{defaultBrandPrimaryColor:"#000000",defaultBrandSecondaryColor:"#F1F1F1"}}),formSizes=(colors.gray600,colors.rollingStone,colors.gray10,colors.primary,colors.gray10,colors.rollingStone,colors.rollingStone,colors.primary,colors.primary,colors.gray600,colors.gray600,colors.loblolly,colors.loblolly,colors.white,colors.white,colors.white,colors.gray10,colors.rollingStone,colors.white,colors.white,colors.gray600,colors.white,colors.loblolly,colors.white,{inputHeight:"2.5rem",inputWidth:"15rem"}),ordersTableCellMinHeight="4.5rem",zIndexValues={base:1,leftColumn:2,orderBatchMenu:10,dropdown:15,anchoredDiv:98,overlay:99,multiSelect:100,modal:101,persistantBanner:999,banner:1e3,tooltip:1070},fontWeight={thin:100,extraLight:200,light:300,normal:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900},classNames={fulfilledOrderText:"fulfilled-order-text"}},"./app/types/CarrierAccountRegStatus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var RegStatus;function fromJSON(jsonRegStatus){return{carrierAccount:jsonRegStatus.carrier_account,status:RegStatus[jsonRegStatus.status]||RegStatus.UNDEFINED}}__webpack_require__.d(__webpack_exports__,{n:()=>RegStatus,r:()=>fromJSON}),function(RegStatus){RegStatus.PENDING_INFO="PENDING_INFO",RegStatus.PROCESSING="PROCESSING",RegStatus.COMPLETE="COMPLETE",RegStatus.OPTED_OUT="OPTED_OUT",RegStatus.ERROR="ERROR",RegStatus.PENDING_TERMS="PENDING_TERMS",RegStatus.UNDEFINED="UNDEFINED"}(RegStatus||(RegStatus={}))},"./app/utils/featureflags/FeatureFlagsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U2:()=>optimizelyClient});__webpack_require__("./node_modules/react/index.js");var react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js"),esm_exports=(__webpack_require__("./node_modules/react-redux/es/index.js"),__webpack_require__("./app/selectors/user.selectors.ts"),__webpack_require__("./node_modules/@sentry/browser/node_modules/@sentry/core/esm/exports.js")),errorHandler={handleError:function(error){esm_exports.wd("[Optimizely] ".concat(null==error?void 0:error.message))}},optimizelyClient=(0,react_sdk.Q_)({sdkKey:"5BDuBhgGXbHXWEXMojbEi",datafileOptions:{autoUpdate:!0},errorHandler,logLevel:3,eventBatchSize:10,eventFlushInterval:1e3})},"./app/utils/featureflags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gH:()=>FeatureFlags,u:()=>useFeatureFlag});var DEFAULT_SPLIT_VARIATION="control",VariationTypes={ROLLOUT:["on","off"],A_B_TESTING:["control","variant","not-included"],OPT_IN_OUT:["initialOptIn","initialOptOut","disabled"]},FeatureFlags={SHIPMENTS_BULK_SELECTION:{name:"shipments_bulk_selection",variationType:VariationTypes.A_B_TESTING},ORDERS_REDESIGN:{name:"orders_redesign",variationType:VariationTypes.ROLLOUT},ORDERS_REDESIGN_WITH_OPT_IN_OPT_OUT:{name:"orders_redesign_with_opt_in_opt_out",variationType:VariationTypes.OPT_IN_OUT},ORDERS_REDESIGN_ALLOW_TOGGLE:{name:"orders_redesign_allow_toggle",variationType:VariationTypes.ROLLOUT},ORDER_TAG_MVP:{name:"order_tag_mvp",variationType:VariationTypes.ROLLOUT},FEDEX_NEW_API_ENABLED:{name:"fedex_new_api_enabled_ui",variationType:VariationTypes.ROLLOUT},RATES_BEST_OPTION:{name:"rates_best_option",variationType:VariationTypes.A_B_TESTING},OPEN_ORDER_DRAWER_ON_BACK:{name:"open_order_drawer_on_back",variationType:VariationTypes.ROLLOUT},UPS_OAUTH_REGISTRATION_ENABLED:{name:"ups_oauth_registration_enabled",variationType:VariationTypes.ROLLOUT},DISPLAY_INVALID_IMPORTED_ADDRESSES:{name:"display_invalid_imported_addresses",variationType:VariationTypes.ROLLOUT},AUTOMATION_RECOMMENDATIONS:{name:"automation_recommendations",variationType:VariationTypes.ROLLOUT},USPS_AES_ITN_UI:{name:"usps_aes_itn_ui",variationType:VariationTypes.ROLLOUT},SQUARE_STORE_CONNECTION:{name:"square_store_connection_setup",variationType:VariationTypes.ROLLOUT},MAGENTO2_STORE_CONNECTION:{name:"magento2_store_connection_setup",variationType:VariationTypes.ROLLOUT},INSURANCE_LARGE_PACKAGES_UPSELL:{name:"insurance_large_packages_upsell",variationType:VariationTypes.A_B_TESTING},TURN_ON_IBD_XCOVER:{name:"turn_on_ibd_xcover",variationType:VariationTypes.ROLLOUT},WOO_STORE_CONNECTION:{name:"woocommerce_store_connection_setup",variationType:VariationTypes.ROLLOUT},SQUARESPACE_STORE_CONNECTION:{name:"squarespace_store_connection_setup",variationType:VariationTypes.ROLLOUT},RECENT_TEMPLATES_NEW_API:{name:"recent_templates_new_api",variationType:VariationTypes.ROLLOUT},SHIPPING_METHODS_NEW_API:{name:"shipping_methods_new_api",variationType:VariationTypes.ROLLOUT},NEW_ZERO_STATE_OVERLAY:{name:"zerostateoverlay",variationType:VariationTypes.ROLLOUT},BLOCK_API_KEY_GENERATION:{name:"block_api_key_generation",variationType:VariationTypes.ROLLOUT},SHIPPING_RISK_ASSESSMENT:{name:"insurance_risk_score_jan_2025",variationType:VariationTypes.ROLLOUT}},tslib_es6=(__webpack_require__("./app/utils/featureflags/FeatureFlagsProvider.tsx"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs")),react_sdk=__webpack_require__("./node_modules/@optimizely/react-sdk/dist/react-sdk.js");function useFeatureFlag(featureFlag,options){var _a=(0,tslib_es6.zs)((0,react_sdk.A2)(featureFlag.name,{autoUpdate:!0,decideOptions:(null==options?void 0:options.blockEvent)?[react_sdk.kn.DISABLE_DECISION_EVENT]:[]}),2),decision=_a[0];return _a[1]?featureFlag.variationType===VariationTypes.ROLLOUT?{enabled:"on"===decision.variationKey}:featureFlag.variationType===VariationTypes.OPT_IN_OUT?{variation:"off"===decision.variationKey?"initialOptIn":decision.variationKey}:{variation:"off"===decision.variationKey?DEFAULT_SPLIT_VARIATION:decision.variationKey}:null}},"./app/pages/Orders/Blackbeard/Drawers/AddressDrawer/AddressDrawerForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_AddressDrawerForm__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/pages/Orders/Blackbeard/Drawers/AddressDrawer/AddressDrawerForm.tsx"),redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/redux/es/redux.js"),_utils_translate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/utils/translate.ts"),_reducers_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/reducers/index.ts"),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js"),_components_AddressValidation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/components/AddressValidation/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Address Drawer Form",component:_AddressDrawerForm__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{onCancel:{action:"onCancel"},onFirstLoad:{action:"onFirstLoad"},onUpdateAddress:{action:"onUpdateAddress"}}};var AddressDrawerFormWithTranslate=(0,_utils_translate__WEBPACK_IMPORTED_MODULE_1__.Tl)("orders")(_AddressDrawerForm__WEBPACK_IMPORTED_MODULE_0__.A),Default=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Kq,(0,tslib__WEBPACK_IMPORTED_MODULE_6__.Cl)({store:(0,redux__WEBPACK_IMPORTED_MODULE_7__.y$)((0,redux__WEBPACK_IMPORTED_MODULE_7__.HY)(_reducers_index__WEBPACK_IMPORTED_MODULE_2__.A))},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_components_AddressValidation__WEBPACK_IMPORTED_MODULE_4__.ku,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(AddressDrawerFormWithTranslate,(0,tslib__WEBPACK_IMPORTED_MODULE_6__.Cl)({},args))})}))}.bind({});Default.args={addressInfoForForm:{to:null,sender:null,return:null},areAllSenderReturnAddressesEqual:!1,editingAddressType:"to",initialCombineSenderReturn:!1,isSelectedSenderInSavedAddresses:!1,isSelectedReturnInSavedAddresses:!1,hasRecipientPhoneRequireError:!1,isPasteAddressEnabled:!0,t:function(key){return key}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: AddressDrawerFormProps) => <Provider store={createStore(combineReducers(reducers))}>\n    <AddressValidationContextProvider>\n      <AddressDrawerFormWithTranslate {...args} />\n    </AddressValidationContextProvider>\n  </Provider>",...Default.parameters?.docs?.source}}}}}]);