(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4389],{"./node_modules/country-flag-emoji/dist/country-flag-emoji.umd.js":function(module){module.exports=function(){"use strict";function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}var _global=createCommonjsModule((function(module){var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)})),_core=createCommonjsModule((function(module){var core=module.exports={version:"2.6.0"};"number"==typeof __e&&(__e=core)})),_isObject=(_core.version,function(it){return"object"==typeof it?null!==it:"function"==typeof it}),_anObject=function(it){if(!_isObject(it))throw TypeError(it+" is not an object!");return it},_fails=function(exec){try{return!!exec()}catch(e){return!0}},_descriptors=!_fails((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),document=_global.document,is=_isObject(document)&&_isObject(document.createElement),_domCreate=function(it){return is?document.createElement(it):{}},_ie8DomDefine=!_descriptors&&!_fails((function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a})),_toPrimitive=function(it,S){if(!_isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!_isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!_isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!_isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,_objectDp={f:_descriptors?Object.defineProperty:function defineProperty(O,P,Attributes){if(_anObject(O),P=_toPrimitive(P,!0),_anObject(Attributes),_ie8DomDefine)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},_propertyDesc=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value}},_hide=_descriptors?function(object,key,value){return _objectDp.f(object,key,_propertyDesc(1,value))}:function(object,key,value){return object[key]=value,object},hasOwnProperty={}.hasOwnProperty,_has=function(it,key){return hasOwnProperty.call(it,key)},id=0,px=Math.random(),_uid=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))},_redefine=createCommonjsModule((function(module){var SRC=_uid("src"),TO_STRING="toString",$toString=Function[TO_STRING],TPL=(""+$toString).split(TO_STRING);_core.inspectSource=function(it){return $toString.call(it)},(module.exports=function(O,key,val,safe){var isFunction="function"==typeof val;isFunction&&(_has(val,"name")||_hide(val,"name",key)),O[key]!==val&&(isFunction&&(_has(val,SRC)||_hide(val,SRC,O[key]?""+O[key]:TPL.join(String(key)))),O===_global?O[key]=val:safe?O[key]?O[key]=val:_hide(O,key,val):(delete O[key],_hide(O,key,val)))})(Function.prototype,TO_STRING,(function toString(){return"function"==typeof this&&this[SRC]||$toString.call(this)}))})),_aFunction=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it},_ctx=function(fn,that,length){if(_aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}},PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,exp,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,target=IS_GLOBAL?_global:IS_STATIC?_global[name]||(_global[name]={}):(_global[name]||{})[PROTOTYPE],exports=IS_GLOBAL?_core:_core[name]||(_core[name]={}),expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={});for(key in IS_GLOBAL&&(source=name),source)out=((own=!IS_FORCED&&target&&void 0!==target[key])?target:source)[key],exp=IS_BIND&&own?_ctx(out,_global):IS_PROTO&&"function"==typeof out?_ctx(Function.call,out):out,target&&_redefine(target,key,out,type&$export.U),exports[key]!=out&&_hide(exports,key,exp),IS_PROTO&&expProto[key]!=out&&(expProto[key]=out)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var isEntries,_export=$export,toString={}.toString,_cof=function(it){return toString.call(it).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==_cof(it)?it.split(""):Object(it)},_defined=function(it){if(null==it)throw TypeError("Can't call method on  "+it);return it},_toIobject=function(it){return _iobject(_defined(it))},ceil=Math.ceil,floor=Math.floor,_toInteger=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)},min=Math.min,_toLength=function(it){return it>0?min(_toInteger(it),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(index,length){return(index=_toInteger(index))<0?max(index+length,0):min$1(index,length)},_arrayIncludes=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=_toIobject($this),length=_toLength(O.length),index=_toAbsoluteIndex(fromIndex,length);if(IS_INCLUDES&&el!=el){for(;length>index;)if((value=O[index++])!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}},_shared=createCommonjsModule((function(module){var SHARED="__core-js_shared__",store=_global[SHARED]||(_global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=void 0!==value?value:{})})("versions",[]).push({version:_core.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})})),shared=_shared("keys"),_sharedKey=function(key){return shared[key]||(shared[key]=_uid(key))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(object,names){var key,O=_toIobject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&_has(O,key)&&result.push(key);for(;names.length>i;)_has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function keys(O){return _objectKeysInternal(O,_enumBugKeys)},isEnum={}.propertyIsEnumerable,$values=(isEntries=!1,function(it){for(var key,O=_toIobject(it),keys=_objectKeys(O),length=keys.length,i=0,result=[];length>i;)isEnum.call(O,key=keys[i++])&&result.push(isEntries?[key,O[key]]:O[key]);return result});_export(_export.S,"Object",{values:function values(it){return $values(it)}});var _wks=createCommonjsModule((function(module){var store=_shared("wks"),Symbol=_global.Symbol,USE_SYMBOL="function"==typeof Symbol;(module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:_uid)("Symbol."+name))}).store=store})),UNSCOPABLES=_wks("unscopables"),ArrayProto=Array.prototype;null==ArrayProto[UNSCOPABLES]&&_hide(ArrayProto,UNSCOPABLES,{});var _addToUnscopables=function(key){ArrayProto[UNSCOPABLES][key]=!0},_iterStep=function(done,value){return{value,done:!!done}},_iterators={},_objectDps=_descriptors?Object.defineProperties:function defineProperties(O,Properties){_anObject(O);for(var P,keys=_objectKeys(Properties),length=keys.length,i=0;length>i;)_objectDp.f(O,P=keys[i++],Properties[P]);return O},document$1=_global.document,_html=document$1&&document$1.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var iframeDocument,iframe=_domCreate("iframe"),i=_enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",_html.appendChild(iframe),iframe.src="javascript:",(iframeDocument=iframe.contentWindow.document).open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),createDict=iframeDocument.F;i--;)delete createDict[PROTOTYPE$1][_enumBugKeys[i]];return createDict()},_objectCreate=Object.create||function create(O,Properties){var result;return null!==O?(Empty[PROTOTYPE$1]=_anObject(O),result=new Empty,Empty[PROTOTYPE$1]=null,result[IE_PROTO$1]=O):result=createDict(),void 0===Properties?result:_objectDps(result,Properties)},def=_objectDp.f,TAG=_wks("toStringTag"),_setToStringTag=function(it,tag,stat){it&&!_has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),(function(){return this}));var KEY,exec,fn,exp,_iterCreate=function(Constructor,NAME,next){Constructor.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,next)}),_setToStringTag(Constructor,NAME+" Iterator")},_toObject=function(it){return Object(_defined(it))},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(O){return O=_toObject(O),_has(O,IE_PROTO$2)?O[IE_PROTO$2]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null},ITERATOR=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this},es6_array_iterator=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){_iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind)};case VALUES:return function values(){return new Constructor(this,kind)}}return function entries(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME&&proto.entries||$native;if($anyNative&&(IteratorPrototype=_objectGpo($anyNative.call(new Base)))!==Object.prototype&&IteratorPrototype.next&&(_setToStringTag(IteratorPrototype,TAG,!0),"function"!=typeof IteratorPrototype[ITERATOR]&&_hide(IteratorPrototype,ITERATOR,returnThis)),DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function values(){return $native.call(this)}),(BUGGY||VALUES_BUG||!proto[ITERATOR])&&_hide(proto,ITERATOR,$default),_iterators[NAME]=$default,_iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||_redefine(proto,key,methods[key]);else _export(_export.P+_export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}(Array,"Array",(function(iterated,kind){this._t=_toIobject(iterated),this._i=0,this._k=kind}),(function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==kind?index:"values"==kind?O[index]:[index,O[index]])}),"values");_iterators.Arguments=_iterators.Array,_addToUnscopables("keys"),_addToUnscopables("values"),_addToUnscopables("entries");for(var ITERATOR$1=_wks("iterator"),TO_STRING_TAG=_wks("toStringTag"),ArrayValues=_iterators.Array,DOMIterables={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},collections=_objectKeys(DOMIterables),i=0;i<collections.length;i++){var key,NAME=collections[i],explicit=DOMIterables[NAME],Collection=_global[NAME],proto=Collection&&Collection.prototype;if(proto&&(proto[ITERATOR$1]||_hide(proto,ITERATOR$1,ArrayValues),proto[TO_STRING_TAG]||_hide(proto,TO_STRING_TAG,NAME),_iterators[NAME]=ArrayValues,explicit))for(key in es6_array_iterator)proto[key]||_redefine(proto,key,es6_array_iterator[key],!0)}KEY="keys",exec=function(){return function keys(it){return _objectKeys(_toObject(it))}},fn=(_core.Object||{})[KEY]||Object[KEY],(exp={})[KEY]=exec(fn),_export(_export.S+_export.F*_fails((function(){fn(1)})),"Object",exp);var data={AC:{code:"AC",unicode:"U+1F1E6 U+1F1E8",name:"Ascension Island",emoji:"🇦🇨"},AD:{code:"AD",unicode:"U+1F1E6 U+1F1E9",name:"Andorra",emoji:"🇦🇩"},AE:{code:"AE",unicode:"U+1F1E6 U+1F1EA",name:"United Arab Emirates",emoji:"🇦🇪"},AF:{code:"AF",unicode:"U+1F1E6 U+1F1EB",name:"Afghanistan",emoji:"🇦🇫"},AG:{code:"AG",unicode:"U+1F1E6 U+1F1EC",name:"Antigua & Barbuda",emoji:"🇦🇬"},AI:{code:"AI",unicode:"U+1F1E6 U+1F1EE",name:"Anguilla",emoji:"🇦🇮"},AL:{code:"AL",unicode:"U+1F1E6 U+1F1F1",name:"Albania",emoji:"🇦🇱"},AM:{code:"AM",unicode:"U+1F1E6 U+1F1F2",name:"Armenia",emoji:"🇦🇲"},AO:{code:"AO",unicode:"U+1F1E6 U+1F1F4",name:"Angola",emoji:"🇦🇴"},AQ:{code:"AQ",unicode:"U+1F1E6 U+1F1F6",name:"Antarctica",emoji:"🇦🇶"},AR:{code:"AR",unicode:"U+1F1E6 U+1F1F7",name:"Argentina",emoji:"🇦🇷"},AS:{code:"AS",unicode:"U+1F1E6 U+1F1F8",name:"American Samoa",emoji:"🇦🇸"},AT:{code:"AT",unicode:"U+1F1E6 U+1F1F9",name:"Austria",emoji:"🇦🇹"},AU:{code:"AU",unicode:"U+1F1E6 U+1F1FA",name:"Australia",emoji:"🇦🇺"},AW:{code:"AW",unicode:"U+1F1E6 U+1F1FC",name:"Aruba",emoji:"🇦🇼"},AX:{code:"AX",unicode:"U+1F1E6 U+1F1FD",name:"Åland Islands",emoji:"🇦🇽"},AZ:{code:"AZ",unicode:"U+1F1E6 U+1F1FF",name:"Azerbaijan",emoji:"🇦🇿"},BA:{code:"BA",unicode:"U+1F1E7 U+1F1E6",name:"Bosnia & Herzegovina",emoji:"🇧🇦"},BB:{code:"BB",unicode:"U+1F1E7 U+1F1E7",name:"Barbados",emoji:"🇧🇧"},BD:{code:"BD",unicode:"U+1F1E7 U+1F1E9",name:"Bangladesh",emoji:"🇧🇩"},BE:{code:"BE",unicode:"U+1F1E7 U+1F1EA",name:"Belgium",emoji:"🇧🇪"},BF:{code:"BF",unicode:"U+1F1E7 U+1F1EB",name:"Burkina Faso",emoji:"🇧🇫"},BG:{code:"BG",unicode:"U+1F1E7 U+1F1EC",name:"Bulgaria",emoji:"🇧🇬"},BH:{code:"BH",unicode:"U+1F1E7 U+1F1ED",name:"Bahrain",emoji:"🇧🇭"},BI:{code:"BI",unicode:"U+1F1E7 U+1F1EE",name:"Burundi",emoji:"🇧🇮"},BJ:{code:"BJ",unicode:"U+1F1E7 U+1F1EF",name:"Benin",emoji:"🇧🇯"},BL:{code:"BL",unicode:"U+1F1E7 U+1F1F1",name:"St. Barthélemy",emoji:"🇧🇱"},BM:{code:"BM",unicode:"U+1F1E7 U+1F1F2",name:"Bermuda",emoji:"🇧🇲"},BN:{code:"BN",unicode:"U+1F1E7 U+1F1F3",name:"Brunei",emoji:"🇧🇳"},BO:{code:"BO",unicode:"U+1F1E7 U+1F1F4",name:"Bolivia",emoji:"🇧🇴"},BQ:{code:"BQ",unicode:"U+1F1E7 U+1F1F6",name:"Caribbean Netherlands",emoji:"🇧🇶"},BR:{code:"BR",unicode:"U+1F1E7 U+1F1F7",name:"Brazil",emoji:"🇧🇷"},BS:{code:"BS",unicode:"U+1F1E7 U+1F1F8",name:"Bahamas",emoji:"🇧🇸"},BT:{code:"BT",unicode:"U+1F1E7 U+1F1F9",name:"Bhutan",emoji:"🇧🇹"},BV:{code:"BV",unicode:"U+1F1E7 U+1F1FB",name:"Bouvet Island",emoji:"🇧🇻"},BW:{code:"BW",unicode:"U+1F1E7 U+1F1FC",name:"Botswana",emoji:"🇧🇼"},BY:{code:"BY",unicode:"U+1F1E7 U+1F1FE",name:"Belarus",emoji:"🇧🇾"},BZ:{code:"BZ",unicode:"U+1F1E7 U+1F1FF",name:"Belize",emoji:"🇧🇿"},CA:{code:"CA",unicode:"U+1F1E8 U+1F1E6",name:"Canada",emoji:"🇨🇦"},CC:{code:"CC",unicode:"U+1F1E8 U+1F1E8",name:"Cocos (Keeling) Islands",emoji:"🇨🇨"},CD:{code:"CD",unicode:"U+1F1E8 U+1F1E9",name:"Congo - Kinshasa",emoji:"🇨🇩"},CF:{code:"CF",unicode:"U+1F1E8 U+1F1EB",name:"Central African Republic",emoji:"🇨🇫"},CG:{code:"CG",unicode:"U+1F1E8 U+1F1EC",name:"Congo - Brazzaville",emoji:"🇨🇬"},CH:{code:"CH",unicode:"U+1F1E8 U+1F1ED",name:"Switzerland",emoji:"🇨🇭"},CI:{code:"CI",unicode:"U+1F1E8 U+1F1EE",name:"Côte d’Ivoire",emoji:"🇨🇮"},CK:{code:"CK",unicode:"U+1F1E8 U+1F1F0",name:"Cook Islands",emoji:"🇨🇰"},CL:{code:"CL",unicode:"U+1F1E8 U+1F1F1",name:"Chile",emoji:"🇨🇱"},CM:{code:"CM",unicode:"U+1F1E8 U+1F1F2",name:"Cameroon",emoji:"🇨🇲"},CN:{code:"CN",unicode:"U+1F1E8 U+1F1F3",name:"China",emoji:"🇨🇳"},CO:{code:"CO",unicode:"U+1F1E8 U+1F1F4",name:"Colombia",emoji:"🇨🇴"},CP:{code:"CP",unicode:"U+1F1E8 U+1F1F5",name:"Clipperton Island",emoji:"🇨🇵"},CR:{code:"CR",unicode:"U+1F1E8 U+1F1F7",name:"Costa Rica",emoji:"🇨🇷"},CU:{code:"CU",unicode:"U+1F1E8 U+1F1FA",name:"Cuba",emoji:"🇨🇺"},CV:{code:"CV",unicode:"U+1F1E8 U+1F1FB",name:"Cape Verde",emoji:"🇨🇻"},CW:{code:"CW",unicode:"U+1F1E8 U+1F1FC",name:"Curaçao",emoji:"🇨🇼"},CX:{code:"CX",unicode:"U+1F1E8 U+1F1FD",name:"Christmas Island",emoji:"🇨🇽"},CY:{code:"CY",unicode:"U+1F1E8 U+1F1FE",name:"Cyprus",emoji:"🇨🇾"},CZ:{code:"CZ",unicode:"U+1F1E8 U+1F1FF",name:"Czechia",emoji:"🇨🇿"},DE:{code:"DE",unicode:"U+1F1E9 U+1F1EA",name:"Germany",emoji:"🇩🇪"},DG:{code:"DG",unicode:"U+1F1E9 U+1F1EC",name:"Diego Garcia",emoji:"🇩🇬"},DJ:{code:"DJ",unicode:"U+1F1E9 U+1F1EF",name:"Djibouti",emoji:"🇩🇯"},DK:{code:"DK",unicode:"U+1F1E9 U+1F1F0",name:"Denmark",emoji:"🇩🇰"},DM:{code:"DM",unicode:"U+1F1E9 U+1F1F2",name:"Dominica",emoji:"🇩🇲"},DO:{code:"DO",unicode:"U+1F1E9 U+1F1F4",name:"Dominican Republic",emoji:"🇩🇴"},DZ:{code:"DZ",unicode:"U+1F1E9 U+1F1FF",name:"Algeria",emoji:"🇩🇿"},EA:{code:"EA",unicode:"U+1F1EA U+1F1E6",name:"Ceuta & Melilla",emoji:"🇪🇦"},EC:{code:"EC",unicode:"U+1F1EA U+1F1E8",name:"Ecuador",emoji:"🇪🇨"},EE:{code:"EE",unicode:"U+1F1EA U+1F1EA",name:"Estonia",emoji:"🇪🇪"},EG:{code:"EG",unicode:"U+1F1EA U+1F1EC",name:"Egypt",emoji:"🇪🇬"},EH:{code:"EH",unicode:"U+1F1EA U+1F1ED",name:"Western Sahara",emoji:"🇪🇭"},ER:{code:"ER",unicode:"U+1F1EA U+1F1F7",name:"Eritrea",emoji:"🇪🇷"},ES:{code:"ES",unicode:"U+1F1EA U+1F1F8",name:"Spain",emoji:"🇪🇸"},ET:{code:"ET",unicode:"U+1F1EA U+1F1F9",name:"Ethiopia",emoji:"🇪🇹"},EU:{code:"EU",unicode:"U+1F1EA U+1F1FA",name:"European Union",emoji:"🇪🇺"},FI:{code:"FI",unicode:"U+1F1EB U+1F1EE",name:"Finland",emoji:"🇫🇮"},FJ:{code:"FJ",unicode:"U+1F1EB U+1F1EF",name:"Fiji",emoji:"🇫🇯"},FK:{code:"FK",unicode:"U+1F1EB U+1F1F0",name:"Falkland Islands",emoji:"🇫🇰"},FM:{code:"FM",unicode:"U+1F1EB U+1F1F2",name:"Micronesia",emoji:"🇫🇲"},FO:{code:"FO",unicode:"U+1F1EB U+1F1F4",name:"Faroe Islands",emoji:"🇫🇴"},FR:{code:"FR",unicode:"U+1F1EB U+1F1F7",name:"France",emoji:"🇫🇷"},GA:{code:"GA",unicode:"U+1F1EC U+1F1E6",name:"Gabon",emoji:"🇬🇦"},GB:{code:"GB",unicode:"U+1F1EC U+1F1E7",name:"United Kingdom",emoji:"🇬🇧"},GD:{code:"GD",unicode:"U+1F1EC U+1F1E9",name:"Grenada",emoji:"🇬🇩"},GE:{code:"GE",unicode:"U+1F1EC U+1F1EA",name:"Georgia",emoji:"🇬🇪"},GF:{code:"GF",unicode:"U+1F1EC U+1F1EB",name:"French Guiana",emoji:"🇬🇫"},GG:{code:"GG",unicode:"U+1F1EC U+1F1EC",name:"Guernsey",emoji:"🇬🇬"},GH:{code:"GH",unicode:"U+1F1EC U+1F1ED",name:"Ghana",emoji:"🇬🇭"},GI:{code:"GI",unicode:"U+1F1EC U+1F1EE",name:"Gibraltar",emoji:"🇬🇮"},GL:{code:"GL",unicode:"U+1F1EC U+1F1F1",name:"Greenland",emoji:"🇬🇱"},GM:{code:"GM",unicode:"U+1F1EC U+1F1F2",name:"Gambia",emoji:"🇬🇲"},GN:{code:"GN",unicode:"U+1F1EC U+1F1F3",name:"Guinea",emoji:"🇬🇳"},GP:{code:"GP",unicode:"U+1F1EC U+1F1F5",name:"Guadeloupe",emoji:"🇬🇵"},GQ:{code:"GQ",unicode:"U+1F1EC U+1F1F6",name:"Equatorial Guinea",emoji:"🇬🇶"},GR:{code:"GR",unicode:"U+1F1EC U+1F1F7",name:"Greece",emoji:"🇬🇷"},GS:{code:"GS",unicode:"U+1F1EC U+1F1F8",name:"South Georgia & South Sandwich Islands",emoji:"🇬🇸"},GT:{code:"GT",unicode:"U+1F1EC U+1F1F9",name:"Guatemala",emoji:"🇬🇹"},GU:{code:"GU",unicode:"U+1F1EC U+1F1FA",name:"Guam",emoji:"🇬🇺"},GW:{code:"GW",unicode:"U+1F1EC U+1F1FC",name:"Guinea-Bissau",emoji:"🇬🇼"},GY:{code:"GY",unicode:"U+1F1EC U+1F1FE",name:"Guyana",emoji:"🇬🇾"},HK:{code:"HK",unicode:"U+1F1ED U+1F1F0",name:"Hong Kong SAR China",emoji:"🇭🇰"},HM:{code:"HM",unicode:"U+1F1ED U+1F1F2",name:"Heard & McDonald Islands",emoji:"🇭🇲"},HN:{code:"HN",unicode:"U+1F1ED U+1F1F3",name:"Honduras",emoji:"🇭🇳"},HR:{code:"HR",unicode:"U+1F1ED U+1F1F7",name:"Croatia",emoji:"🇭🇷"},HT:{code:"HT",unicode:"U+1F1ED U+1F1F9",name:"Haiti",emoji:"🇭🇹"},HU:{code:"HU",unicode:"U+1F1ED U+1F1FA",name:"Hungary",emoji:"🇭🇺"},IC:{code:"IC",unicode:"U+1F1EE U+1F1E8",name:"Canary Islands",emoji:"🇮🇨"},ID:{code:"ID",unicode:"U+1F1EE U+1F1E9",name:"Indonesia",emoji:"🇮🇩"},IE:{code:"IE",unicode:"U+1F1EE U+1F1EA",name:"Ireland",emoji:"🇮🇪"},IL:{code:"IL",unicode:"U+1F1EE U+1F1F1",name:"Israel",emoji:"🇮🇱"},IM:{code:"IM",unicode:"U+1F1EE U+1F1F2",name:"Isle of Man",emoji:"🇮🇲"},IN:{code:"IN",unicode:"U+1F1EE U+1F1F3",name:"India",emoji:"🇮🇳"},IO:{code:"IO",unicode:"U+1F1EE U+1F1F4",name:"British Indian Ocean Territory",emoji:"🇮🇴"},IQ:{code:"IQ",unicode:"U+1F1EE U+1F1F6",name:"Iraq",emoji:"🇮🇶"},IR:{code:"IR",unicode:"U+1F1EE U+1F1F7",name:"Iran",emoji:"🇮🇷"},IS:{code:"IS",unicode:"U+1F1EE U+1F1F8",name:"Iceland",emoji:"🇮🇸"},IT:{code:"IT",unicode:"U+1F1EE U+1F1F9",name:"Italy",emoji:"🇮🇹"},JE:{code:"JE",unicode:"U+1F1EF U+1F1EA",name:"Jersey",emoji:"🇯🇪"},JM:{code:"JM",unicode:"U+1F1EF U+1F1F2",name:"Jamaica",emoji:"🇯🇲"},JO:{code:"JO",unicode:"U+1F1EF U+1F1F4",name:"Jordan",emoji:"🇯🇴"},JP:{code:"JP",unicode:"U+1F1EF U+1F1F5",name:"Japan",emoji:"🇯🇵"},KE:{code:"KE",unicode:"U+1F1F0 U+1F1EA",name:"Kenya",emoji:"🇰🇪"},KG:{code:"KG",unicode:"U+1F1F0 U+1F1EC",name:"Kyrgyzstan",emoji:"🇰🇬"},KH:{code:"KH",unicode:"U+1F1F0 U+1F1ED",name:"Cambodia",emoji:"🇰🇭"},KI:{code:"KI",unicode:"U+1F1F0 U+1F1EE",name:"Kiribati",emoji:"🇰🇮"},KM:{code:"KM",unicode:"U+1F1F0 U+1F1F2",name:"Comoros",emoji:"🇰🇲"},KN:{code:"KN",unicode:"U+1F1F0 U+1F1F3",name:"St. Kitts & Nevis",emoji:"🇰🇳"},KP:{code:"KP",unicode:"U+1F1F0 U+1F1F5",name:"North Korea",emoji:"🇰🇵"},KR:{code:"KR",unicode:"U+1F1F0 U+1F1F7",name:"South Korea",emoji:"🇰🇷"},KW:{code:"KW",unicode:"U+1F1F0 U+1F1FC",name:"Kuwait",emoji:"🇰🇼"},KY:{code:"KY",unicode:"U+1F1F0 U+1F1FE",name:"Cayman Islands",emoji:"🇰🇾"},KZ:{code:"KZ",unicode:"U+1F1F0 U+1F1FF",name:"Kazakhstan",emoji:"🇰🇿"},LA:{code:"LA",unicode:"U+1F1F1 U+1F1E6",name:"Laos",emoji:"🇱🇦"},LB:{code:"LB",unicode:"U+1F1F1 U+1F1E7",name:"Lebanon",emoji:"🇱🇧"},LC:{code:"LC",unicode:"U+1F1F1 U+1F1E8",name:"St. Lucia",emoji:"🇱🇨"},LI:{code:"LI",unicode:"U+1F1F1 U+1F1EE",name:"Liechtenstein",emoji:"🇱🇮"},LK:{code:"LK",unicode:"U+1F1F1 U+1F1F0",name:"Sri Lanka",emoji:"🇱🇰"},LR:{code:"LR",unicode:"U+1F1F1 U+1F1F7",name:"Liberia",emoji:"🇱🇷"},LS:{code:"LS",unicode:"U+1F1F1 U+1F1F8",name:"Lesotho",emoji:"🇱🇸"},LT:{code:"LT",unicode:"U+1F1F1 U+1F1F9",name:"Lithuania",emoji:"🇱🇹"},LU:{code:"LU",unicode:"U+1F1F1 U+1F1FA",name:"Luxembourg",emoji:"🇱🇺"},LV:{code:"LV",unicode:"U+1F1F1 U+1F1FB",name:"Latvia",emoji:"🇱🇻"},LY:{code:"LY",unicode:"U+1F1F1 U+1F1FE",name:"Libya",emoji:"🇱🇾"},MA:{code:"MA",unicode:"U+1F1F2 U+1F1E6",name:"Morocco",emoji:"🇲🇦"},MC:{code:"MC",unicode:"U+1F1F2 U+1F1E8",name:"Monaco",emoji:"🇲🇨"},MD:{code:"MD",unicode:"U+1F1F2 U+1F1E9",name:"Moldova",emoji:"🇲🇩"},ME:{code:"ME",unicode:"U+1F1F2 U+1F1EA",name:"Montenegro",emoji:"🇲🇪"},MF:{code:"MF",unicode:"U+1F1F2 U+1F1EB",name:"St. Martin",emoji:"🇲🇫"},MG:{code:"MG",unicode:"U+1F1F2 U+1F1EC",name:"Madagascar",emoji:"🇲🇬"},MH:{code:"MH",unicode:"U+1F1F2 U+1F1ED",name:"Marshall Islands",emoji:"🇲🇭"},MK:{code:"MK",unicode:"U+1F1F2 U+1F1F0",name:"Macedonia",emoji:"🇲🇰"},ML:{code:"ML",unicode:"U+1F1F2 U+1F1F1",name:"Mali",emoji:"🇲🇱"},MM:{code:"MM",unicode:"U+1F1F2 U+1F1F2",name:"Myanmar (Burma)",emoji:"🇲🇲"},MN:{code:"MN",unicode:"U+1F1F2 U+1F1F3",name:"Mongolia",emoji:"🇲🇳"},MO:{code:"MO",unicode:"U+1F1F2 U+1F1F4",name:"Macau SAR China",emoji:"🇲🇴"},MP:{code:"MP",unicode:"U+1F1F2 U+1F1F5",name:"Northern Mariana Islands",emoji:"🇲🇵"},MQ:{code:"MQ",unicode:"U+1F1F2 U+1F1F6",name:"Martinique",emoji:"🇲🇶"},MR:{code:"MR",unicode:"U+1F1F2 U+1F1F7",name:"Mauritania",emoji:"🇲🇷"},MS:{code:"MS",unicode:"U+1F1F2 U+1F1F8",name:"Montserrat",emoji:"🇲🇸"},MT:{code:"MT",unicode:"U+1F1F2 U+1F1F9",name:"Malta",emoji:"🇲🇹"},MU:{code:"MU",unicode:"U+1F1F2 U+1F1FA",name:"Mauritius",emoji:"🇲🇺"},MV:{code:"MV",unicode:"U+1F1F2 U+1F1FB",name:"Maldives",emoji:"🇲🇻"},MW:{code:"MW",unicode:"U+1F1F2 U+1F1FC",name:"Malawi",emoji:"🇲🇼"},MX:{code:"MX",unicode:"U+1F1F2 U+1F1FD",name:"Mexico",emoji:"🇲🇽"},MY:{code:"MY",unicode:"U+1F1F2 U+1F1FE",name:"Malaysia",emoji:"🇲🇾"},MZ:{code:"MZ",unicode:"U+1F1F2 U+1F1FF",name:"Mozambique",emoji:"🇲🇿"},NA:{code:"NA",unicode:"U+1F1F3 U+1F1E6",name:"Namibia",emoji:"🇳🇦"},NC:{code:"NC",unicode:"U+1F1F3 U+1F1E8",name:"New Caledonia",emoji:"🇳🇨"},NE:{code:"NE",unicode:"U+1F1F3 U+1F1EA",name:"Niger",emoji:"🇳🇪"},NF:{code:"NF",unicode:"U+1F1F3 U+1F1EB",name:"Norfolk Island",emoji:"🇳🇫"},NG:{code:"NG",unicode:"U+1F1F3 U+1F1EC",name:"Nigeria",emoji:"🇳🇬"},NI:{code:"NI",unicode:"U+1F1F3 U+1F1EE",name:"Nicaragua",emoji:"🇳🇮"},NL:{code:"NL",unicode:"U+1F1F3 U+1F1F1",name:"Netherlands",emoji:"🇳🇱"},NO:{code:"NO",unicode:"U+1F1F3 U+1F1F4",name:"Norway",emoji:"🇳🇴"},NP:{code:"NP",unicode:"U+1F1F3 U+1F1F5",name:"Nepal",emoji:"🇳🇵"},NR:{code:"NR",unicode:"U+1F1F3 U+1F1F7",name:"Nauru",emoji:"🇳🇷"},NU:{code:"NU",unicode:"U+1F1F3 U+1F1FA",name:"Niue",emoji:"🇳🇺"},NZ:{code:"NZ",unicode:"U+1F1F3 U+1F1FF",name:"New Zealand",emoji:"🇳🇿"},OM:{code:"OM",unicode:"U+1F1F4 U+1F1F2",name:"Oman",emoji:"🇴🇲"},PA:{code:"PA",unicode:"U+1F1F5 U+1F1E6",name:"Panama",emoji:"🇵🇦"},PE:{code:"PE",unicode:"U+1F1F5 U+1F1EA",name:"Peru",emoji:"🇵🇪"},PF:{code:"PF",unicode:"U+1F1F5 U+1F1EB",name:"French Polynesia",emoji:"🇵🇫"},PG:{code:"PG",unicode:"U+1F1F5 U+1F1EC",name:"Papua New Guinea",emoji:"🇵🇬"},PH:{code:"PH",unicode:"U+1F1F5 U+1F1ED",name:"Philippines",emoji:"🇵🇭"},PK:{code:"PK",unicode:"U+1F1F5 U+1F1F0",name:"Pakistan",emoji:"🇵🇰"},PL:{code:"PL",unicode:"U+1F1F5 U+1F1F1",name:"Poland",emoji:"🇵🇱"},PM:{code:"PM",unicode:"U+1F1F5 U+1F1F2",name:"St. Pierre & Miquelon",emoji:"🇵🇲"},PN:{code:"PN",unicode:"U+1F1F5 U+1F1F3",name:"Pitcairn Islands",emoji:"🇵🇳"},PR:{code:"PR",unicode:"U+1F1F5 U+1F1F7",name:"Puerto Rico",emoji:"🇵🇷"},PS:{code:"PS",unicode:"U+1F1F5 U+1F1F8",name:"Palestinian Territories",emoji:"🇵🇸"},PT:{code:"PT",unicode:"U+1F1F5 U+1F1F9",name:"Portugal",emoji:"🇵🇹"},PW:{code:"PW",unicode:"U+1F1F5 U+1F1FC",name:"Palau",emoji:"🇵🇼"},PY:{code:"PY",unicode:"U+1F1F5 U+1F1FE",name:"Paraguay",emoji:"🇵🇾"},QA:{code:"QA",unicode:"U+1F1F6 U+1F1E6",name:"Qatar",emoji:"🇶🇦"},RE:{code:"RE",unicode:"U+1F1F7 U+1F1EA",name:"Réunion",emoji:"🇷🇪"},RO:{code:"RO",unicode:"U+1F1F7 U+1F1F4",name:"Romania",emoji:"🇷🇴"},RS:{code:"RS",unicode:"U+1F1F7 U+1F1F8",name:"Serbia",emoji:"🇷🇸"},RU:{code:"RU",unicode:"U+1F1F7 U+1F1FA",name:"Russia",emoji:"🇷🇺"},RW:{code:"RW",unicode:"U+1F1F7 U+1F1FC",name:"Rwanda",emoji:"🇷🇼"},SA:{code:"SA",unicode:"U+1F1F8 U+1F1E6",name:"Saudi Arabia",emoji:"🇸🇦"},SB:{code:"SB",unicode:"U+1F1F8 U+1F1E7",name:"Solomon Islands",emoji:"🇸🇧"},SC:{code:"SC",unicode:"U+1F1F8 U+1F1E8",name:"Seychelles",emoji:"🇸🇨"},SD:{code:"SD",unicode:"U+1F1F8 U+1F1E9",name:"Sudan",emoji:"🇸🇩"},SE:{code:"SE",unicode:"U+1F1F8 U+1F1EA",name:"Sweden",emoji:"🇸🇪"},SG:{code:"SG",unicode:"U+1F1F8 U+1F1EC",name:"Singapore",emoji:"🇸🇬"},SH:{code:"SH",unicode:"U+1F1F8 U+1F1ED",name:"St. Helena",emoji:"🇸🇭"},SI:{code:"SI",unicode:"U+1F1F8 U+1F1EE",name:"Slovenia",emoji:"🇸🇮"},SJ:{code:"SJ",unicode:"U+1F1F8 U+1F1EF",name:"Svalbard & Jan Mayen",emoji:"🇸🇯"},SK:{code:"SK",unicode:"U+1F1F8 U+1F1F0",name:"Slovakia",emoji:"🇸🇰"},SL:{code:"SL",unicode:"U+1F1F8 U+1F1F1",name:"Sierra Leone",emoji:"🇸🇱"},SM:{code:"SM",unicode:"U+1F1F8 U+1F1F2",name:"San Marino",emoji:"🇸🇲"},SN:{code:"SN",unicode:"U+1F1F8 U+1F1F3",name:"Senegal",emoji:"🇸🇳"},SO:{code:"SO",unicode:"U+1F1F8 U+1F1F4",name:"Somalia",emoji:"🇸🇴"},SR:{code:"SR",unicode:"U+1F1F8 U+1F1F7",name:"Suriname",emoji:"🇸🇷"},SS:{code:"SS",unicode:"U+1F1F8 U+1F1F8",name:"South Sudan",emoji:"🇸🇸"},ST:{code:"ST",unicode:"U+1F1F8 U+1F1F9",name:"São Tomé & Príncipe",emoji:"🇸🇹"},SV:{code:"SV",unicode:"U+1F1F8 U+1F1FB",name:"El Salvador",emoji:"🇸🇻"},SX:{code:"SX",unicode:"U+1F1F8 U+1F1FD",name:"Sint Maarten",emoji:"🇸🇽"},SY:{code:"SY",unicode:"U+1F1F8 U+1F1FE",name:"Syria",emoji:"🇸🇾"},SZ:{code:"SZ",unicode:"U+1F1F8 U+1F1FF",name:"Swaziland",emoji:"🇸🇿"},TA:{code:"TA",unicode:"U+1F1F9 U+1F1E6",name:"Tristan da Cunha",emoji:"🇹🇦"},TC:{code:"TC",unicode:"U+1F1F9 U+1F1E8",name:"Turks & Caicos Islands",emoji:"🇹🇨"},TD:{code:"TD",unicode:"U+1F1F9 U+1F1E9",name:"Chad",emoji:"🇹🇩"},TF:{code:"TF",unicode:"U+1F1F9 U+1F1EB",name:"French Southern Territories",emoji:"🇹🇫"},TG:{code:"TG",unicode:"U+1F1F9 U+1F1EC",name:"Togo",emoji:"🇹🇬"},TH:{code:"TH",unicode:"U+1F1F9 U+1F1ED",name:"Thailand",emoji:"🇹🇭"},TJ:{code:"TJ",unicode:"U+1F1F9 U+1F1EF",name:"Tajikistan",emoji:"🇹🇯"},TK:{code:"TK",unicode:"U+1F1F9 U+1F1F0",name:"Tokelau",emoji:"🇹🇰"},TL:{code:"TL",unicode:"U+1F1F9 U+1F1F1",name:"Timor-Leste",emoji:"🇹🇱"},TM:{code:"TM",unicode:"U+1F1F9 U+1F1F2",name:"Turkmenistan",emoji:"🇹🇲"},TN:{code:"TN",unicode:"U+1F1F9 U+1F1F3",name:"Tunisia",emoji:"🇹🇳"},TO:{code:"TO",unicode:"U+1F1F9 U+1F1F4",name:"Tonga",emoji:"🇹🇴"},TR:{code:"TR",unicode:"U+1F1F9 U+1F1F7",name:"Turkey",emoji:"🇹🇷"},TT:{code:"TT",unicode:"U+1F1F9 U+1F1F9",name:"Trinidad & Tobago",emoji:"🇹🇹"},TV:{code:"TV",unicode:"U+1F1F9 U+1F1FB",name:"Tuvalu",emoji:"🇹🇻"},TW:{code:"TW",unicode:"U+1F1F9 U+1F1FC",name:"Taiwan",emoji:"🇹🇼"},TZ:{code:"TZ",unicode:"U+1F1F9 U+1F1FF",name:"Tanzania",emoji:"🇹🇿"},UA:{code:"UA",unicode:"U+1F1FA U+1F1E6",name:"Ukraine",emoji:"🇺🇦"},UG:{code:"UG",unicode:"U+1F1FA U+1F1EC",name:"Uganda",emoji:"🇺🇬"},UM:{code:"UM",unicode:"U+1F1FA U+1F1F2",name:"U.S. Outlying Islands",emoji:"🇺🇲"},UN:{code:"UN",unicode:"U+1F1FA U+1F1F3",name:"United Nations",emoji:"🇺🇳"},US:{code:"US",unicode:"U+1F1FA U+1F1F8",name:"United States",emoji:"🇺🇸"},UY:{code:"UY",unicode:"U+1F1FA U+1F1FE",name:"Uruguay",emoji:"🇺🇾"},UZ:{code:"UZ",unicode:"U+1F1FA U+1F1FF",name:"Uzbekistan",emoji:"🇺🇿"},VA:{code:"VA",unicode:"U+1F1FB U+1F1E6",name:"Vatican City",emoji:"🇻🇦"},VC:{code:"VC",unicode:"U+1F1FB U+1F1E8",name:"St. Vincent & Grenadines",emoji:"🇻🇨"},VE:{code:"VE",unicode:"U+1F1FB U+1F1EA",name:"Venezuela",emoji:"🇻🇪"},VG:{code:"VG",unicode:"U+1F1FB U+1F1EC",name:"British Virgin Islands",emoji:"🇻🇬"},VI:{code:"VI",unicode:"U+1F1FB U+1F1EE",name:"U.S. Virgin Islands",emoji:"🇻🇮"},VN:{code:"VN",unicode:"U+1F1FB U+1F1F3",name:"Vietnam",emoji:"🇻🇳"},VU:{code:"VU",unicode:"U+1F1FB U+1F1FA",name:"Vanuatu",emoji:"🇻🇺"},WF:{code:"WF",unicode:"U+1F1FC U+1F1EB",name:"Wallis & Futuna",emoji:"🇼🇫"},WS:{code:"WS",unicode:"U+1F1FC U+1F1F8",name:"Samoa",emoji:"🇼🇸"},XK:{code:"XK",unicode:"U+1F1FD U+1F1F0",name:"Kosovo",emoji:"🇽🇰"},YE:{code:"YE",unicode:"U+1F1FE U+1F1EA",name:"Yemen",emoji:"🇾🇪"},YT:{code:"YT",unicode:"U+1F1FE U+1F1F9",name:"Mayotte",emoji:"🇾🇹"},ZA:{code:"ZA",unicode:"U+1F1FF U+1F1E6",name:"South Africa",emoji:"🇿🇦"},ZM:{code:"ZM",unicode:"U+1F1FF U+1F1F2",name:"Zambia",emoji:"🇿🇲"},ZW:{code:"ZW",unicode:"U+1F1FF U+1F1FC",name:"Zimbabwe",emoji:"🇿🇼"}},countryCodes=Object.keys(data),list=Object.values(data);return{data,countryCodes,list,get:function get(countryCode){if(void 0===countryCode)return list;if("string"==typeof countryCode){var code=countryCode.toUpperCase();return Object.prototype.hasOwnProperty.call(data,code)?data[code]:void 0}}}}()}}]);