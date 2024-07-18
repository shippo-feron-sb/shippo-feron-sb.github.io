/*! For license information please see 3032.f759b03b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3032],{"./node_modules/history/esm/history.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zR:()=>createBrowserHistory,TM:()=>createHashHistory,yJ:()=>createLocation,sC:()=>createMemoryHistory,AO:()=>createPath});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");function isAbsolute(pathname){return"/"===pathname.charAt(0)}function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1)list[i]=list[k];list.pop()}const resolve_pathname=function resolvePathname(to,from){void 0===from&&(from="");var hasTrailingSlash,toParts=to&&to.split("/")||[],fromParts=from&&from.split("/")||[],isToAbs=to&&isAbsolute(to),isFromAbs=from&&isAbsolute(from),mustEndAbs=isToAbs||isFromAbs;if(to&&isAbsolute(to)?fromParts=toParts:toParts.length&&(fromParts.pop(),fromParts=fromParts.concat(toParts)),!fromParts.length)return"/";if(fromParts.length){var last=fromParts[fromParts.length-1];hasTrailingSlash="."===last||".."===last||""===last}else hasTrailingSlash=!1;for(var up=0,i=fromParts.length;i>=0;i--){var part=fromParts[i];"."===part?spliceOne(fromParts,i):".."===part?(spliceOne(fromParts,i),up++):up&&(spliceOne(fromParts,i),up--)}if(!mustEndAbs)for(;up--;up)fromParts.unshift("..");!mustEndAbs||""===fromParts[0]||fromParts[0]&&isAbsolute(fromParts[0])||fromParts.unshift("");var result=fromParts.join("/");return hasTrailingSlash&&"/"!==result.substr(-1)&&(result+="/"),result};var tiny_invariant=__webpack_require__("./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");function addLeadingSlash(path){return"/"===path.charAt(0)?path:"/"+path}function stripLeadingSlash(path){return"/"===path.charAt(0)?path.substr(1):path}function stripBasename(path,prefix){return function hasBasename(path,prefix){return 0===path.toLowerCase().indexOf(prefix.toLowerCase())&&-1!=="/?#".indexOf(path.charAt(prefix.length))}(path,prefix)?path.substr(prefix.length):path}function stripTrailingSlash(path){return"/"===path.charAt(path.length-1)?path.slice(0,-1):path}function createPath(location){var pathname=location.pathname,search=location.search,hash=location.hash,path=pathname||"/";return search&&"?"!==search&&(path+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(path+="#"===hash.charAt(0)?hash:"#"+hash),path}function createLocation(path,state,key,currentLocation){var location;"string"==typeof path?(location=function parsePath(path){var pathname=path||"/",search="",hash="",hashIndex=pathname.indexOf("#");-1!==hashIndex&&(hash=pathname.substr(hashIndex),pathname=pathname.substr(0,hashIndex));var searchIndex=pathname.indexOf("?");return-1!==searchIndex&&(search=pathname.substr(searchIndex),pathname=pathname.substr(0,searchIndex)),{pathname,search:"?"===search?"":search,hash:"#"===hash?"":hash}}(path),location.state=state):(void 0===(location=(0,esm_extends.A)({},path)).pathname&&(location.pathname=""),location.search?"?"!==location.search.charAt(0)&&(location.search="?"+location.search):location.search="",location.hash?"#"!==location.hash.charAt(0)&&(location.hash="#"+location.hash):location.hash="",void 0!==state&&void 0===location.state&&(location.state=state));try{location.pathname=decodeURI(location.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+location.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return key&&(location.key=key),currentLocation?location.pathname?"/"!==location.pathname.charAt(0)&&(location.pathname=resolve_pathname(location.pathname,currentLocation.pathname)):location.pathname=currentLocation.pathname:location.pathname||(location.pathname="/"),location}function createTransitionManager(){var prompt=null;var listeners=[];return{setPrompt:function setPrompt(nextPrompt){return prompt=nextPrompt,function(){prompt===nextPrompt&&(prompt=null)}},confirmTransitionTo:function confirmTransitionTo(location,action,getUserConfirmation,callback){if(null!=prompt){var result="function"==typeof prompt?prompt(location,action):prompt;"string"==typeof result?"function"==typeof getUserConfirmation?getUserConfirmation(result,callback):callback(!0):callback(!1!==result)}else callback(!0)},appendListener:function appendListener(fn){var isActive=!0;function listener(){isActive&&fn.apply(void 0,arguments)}return listeners.push(listener),function(){isActive=!1,listeners=listeners.filter((function(item){return item!==listener}))}},notifyListeners:function notifyListeners(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];listeners.forEach((function(listener){return listener.apply(void 0,args)}))}}}var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function getConfirmation(message,callback){callback(window.confirm(message))}var PopStateEvent="popstate",HashChangeEvent="hashchange";function getHistoryState(){try{return window.history.state||{}}catch(e){return{}}}function createBrowserHistory(props){void 0===props&&(props={}),canUseDOM||(0,tiny_invariant.A)(!1);var globalHistory=window.history,canUseHistory=function supportsHistory(){var ua=window.navigator.userAgent;return(-1===ua.indexOf("Android 2.")&&-1===ua.indexOf("Android 4.0")||-1===ua.indexOf("Mobile Safari")||-1!==ua.indexOf("Chrome")||-1!==ua.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),needsHashChangeListener=!function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident")}(),_props=props,_props$forceRefresh=_props.forceRefresh,forceRefresh=void 0!==_props$forceRefresh&&_props$forceRefresh,_props$getUserConfirm=_props.getUserConfirmation,getUserConfirmation=void 0===_props$getUserConfirm?getConfirmation:_props$getUserConfirm,_props$keyLength=_props.keyLength,keyLength=void 0===_props$keyLength?6:_props$keyLength,basename=props.basename?stripTrailingSlash(addLeadingSlash(props.basename)):"";function getDOMLocation(historyState){var _ref=historyState||{},key=_ref.key,state=_ref.state,_window$location=window.location,path=_window$location.pathname+_window$location.search+_window$location.hash;return basename&&(path=stripBasename(path,basename)),createLocation(path,state,key)}function createKey(){return Math.random().toString(36).substr(2,keyLength)}var transitionManager=createTransitionManager();function setState(nextState){(0,esm_extends.A)(history,nextState),history.length=globalHistory.length,transitionManager.notifyListeners(history.location,history.action)}function handlePopState(event){(function isExtraneousPopstateEvent(event){return void 0===event.state&&-1===navigator.userAgent.indexOf("CriOS")})(event)||handlePop(getDOMLocation(event.state))}function handleHashChange(){handlePop(getDOMLocation(getHistoryState()))}var forceNextPop=!1;function handlePop(location){if(forceNextPop)forceNextPop=!1,setState();else{transitionManager.confirmTransitionTo(location,"POP",getUserConfirmation,(function(ok){ok?setState({action:"POP",location}):function revertPop(fromLocation){var toLocation=history.location,toIndex=allKeys.indexOf(toLocation.key);-1===toIndex&&(toIndex=0);var fromIndex=allKeys.indexOf(fromLocation.key);-1===fromIndex&&(fromIndex=0);var delta=toIndex-fromIndex;delta&&(forceNextPop=!0,go(delta))}(location)}))}}var initialLocation=getDOMLocation(getHistoryState()),allKeys=[initialLocation.key];function createHref(location){return basename+createPath(location)}function go(n){globalHistory.go(n)}var listenerCount=0;function checkDOMListeners(delta){1===(listenerCount+=delta)&&1===delta?(window.addEventListener(PopStateEvent,handlePopState),needsHashChangeListener&&window.addEventListener(HashChangeEvent,handleHashChange)):0===listenerCount&&(window.removeEventListener(PopStateEvent,handlePopState),needsHashChangeListener&&window.removeEventListener(HashChangeEvent,handleHashChange))}var isBlocked=!1;var history={length:globalHistory.length,action:"POP",location:initialLocation,createHref,push:function push(path,state){var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,"PUSH",getUserConfirmation,(function(ok){if(ok){var href=createHref(location),key=location.key,state=location.state;if(canUseHistory)if(globalHistory.pushState({key,state},null,href),forceRefresh)window.location.href=href;else{var prevIndex=allKeys.indexOf(history.location.key),nextKeys=allKeys.slice(0,prevIndex+1);nextKeys.push(location.key),allKeys=nextKeys,setState({action:"PUSH",location})}else window.location.href=href}}))},replace:function replace(path,state){var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,"REPLACE",getUserConfirmation,(function(ok){if(ok){var href=createHref(location),key=location.key,state=location.state;if(canUseHistory)if(globalHistory.replaceState({key,state},null,href),forceRefresh)window.location.replace(href);else{var prevIndex=allKeys.indexOf(history.location.key);-1!==prevIndex&&(allKeys[prevIndex]=location.key),setState({action:"REPLACE",location})}else window.location.replace(href)}}))},go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},block:function block(prompt){void 0===prompt&&(prompt=!1);var unblock=transitionManager.setPrompt(prompt);return isBlocked||(checkDOMListeners(1),isBlocked=!0),function(){return isBlocked&&(isBlocked=!1,checkDOMListeners(-1)),unblock()}},listen:function listen(listener){var unlisten=transitionManager.appendListener(listener);return checkDOMListeners(1),function(){checkDOMListeners(-1),unlisten()}}};return history}var HashChangeEvent$1="hashchange",HashPathCoders={hashbang:{encodePath:function encodePath(path){return"!"===path.charAt(0)?path:"!/"+stripLeadingSlash(path)},decodePath:function decodePath(path){return"!"===path.charAt(0)?path.substr(1):path}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(url){var hashIndex=url.indexOf("#");return-1===hashIndex?url:url.slice(0,hashIndex)}function getHashPath(){var href=window.location.href,hashIndex=href.indexOf("#");return-1===hashIndex?"":href.substring(hashIndex+1)}function replaceHashPath(path){window.location.replace(stripHash(window.location.href)+"#"+path)}function createHashHistory(props){void 0===props&&(props={}),canUseDOM||(0,tiny_invariant.A)(!1);var globalHistory=window.history,_props=(function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox")}(),props),_props$getUserConfirm=_props.getUserConfirmation,getUserConfirmation=void 0===_props$getUserConfirm?getConfirmation:_props$getUserConfirm,_props$hashType=_props.hashType,hashType=void 0===_props$hashType?"slash":_props$hashType,basename=props.basename?stripTrailingSlash(addLeadingSlash(props.basename)):"",_HashPathCoders$hashT=HashPathCoders[hashType],encodePath=_HashPathCoders$hashT.encodePath,decodePath=_HashPathCoders$hashT.decodePath;function getDOMLocation(){var path=decodePath(getHashPath());return basename&&(path=stripBasename(path,basename)),createLocation(path)}var transitionManager=createTransitionManager();function setState(nextState){(0,esm_extends.A)(history,nextState),history.length=globalHistory.length,transitionManager.notifyListeners(history.location,history.action)}var forceNextPop=!1,ignorePath=null;function handleHashChange(){var path=getHashPath(),encodedPath=encodePath(path);if(path!==encodedPath)replaceHashPath(encodedPath);else{var location=getDOMLocation(),prevLocation=history.location;if(!forceNextPop&&function locationsAreEqual$$1(a,b){return a.pathname===b.pathname&&a.search===b.search&&a.hash===b.hash}(prevLocation,location))return;if(ignorePath===createPath(location))return;ignorePath=null,function handlePop(location){if(forceNextPop)forceNextPop=!1,setState();else{var action="POP";transitionManager.confirmTransitionTo(location,action,getUserConfirmation,(function(ok){ok?setState({action,location}):function revertPop(fromLocation){var toLocation=history.location,toIndex=allPaths.lastIndexOf(createPath(toLocation));-1===toIndex&&(toIndex=0);var fromIndex=allPaths.lastIndexOf(createPath(fromLocation));-1===fromIndex&&(fromIndex=0);var delta=toIndex-fromIndex;delta&&(forceNextPop=!0,go(delta))}(location)}))}}(location)}}var path=getHashPath(),encodedPath=encodePath(path);path!==encodedPath&&replaceHashPath(encodedPath);var initialLocation=getDOMLocation(),allPaths=[createPath(initialLocation)];function go(n){globalHistory.go(n)}var listenerCount=0;function checkDOMListeners(delta){1===(listenerCount+=delta)&&1===delta?window.addEventListener(HashChangeEvent$1,handleHashChange):0===listenerCount&&window.removeEventListener(HashChangeEvent$1,handleHashChange)}var isBlocked=!1;var history={length:globalHistory.length,action:"POP",location:initialLocation,createHref:function createHref(location){var baseTag=document.querySelector("base"),href="";return baseTag&&baseTag.getAttribute("href")&&(href=stripHash(window.location.href)),href+"#"+encodePath(basename+createPath(location))},push:function push(path,state){var location=createLocation(path,void 0,void 0,history.location);transitionManager.confirmTransitionTo(location,"PUSH",getUserConfirmation,(function(ok){if(ok){var path=createPath(location),encodedPath=encodePath(basename+path);if(getHashPath()!==encodedPath){ignorePath=path,function pushHashPath(path){window.location.hash=path}(encodedPath);var prevIndex=allPaths.lastIndexOf(createPath(history.location)),nextPaths=allPaths.slice(0,prevIndex+1);nextPaths.push(path),allPaths=nextPaths,setState({action:"PUSH",location})}else setState()}}))},replace:function replace(path,state){var location=createLocation(path,void 0,void 0,history.location);transitionManager.confirmTransitionTo(location,"REPLACE",getUserConfirmation,(function(ok){if(ok){var path=createPath(location),encodedPath=encodePath(basename+path);getHashPath()!==encodedPath&&(ignorePath=path,replaceHashPath(encodedPath));var prevIndex=allPaths.indexOf(createPath(history.location));-1!==prevIndex&&(allPaths[prevIndex]=path),setState({action:"REPLACE",location})}}))},go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},block:function block(prompt){void 0===prompt&&(prompt=!1);var unblock=transitionManager.setPrompt(prompt);return isBlocked||(checkDOMListeners(1),isBlocked=!0),function(){return isBlocked&&(isBlocked=!1,checkDOMListeners(-1)),unblock()}},listen:function listen(listener){var unlisten=transitionManager.appendListener(listener);return checkDOMListeners(1),function(){checkDOMListeners(-1),unlisten()}}};return history}function clamp(n,lowerBound,upperBound){return Math.min(Math.max(n,lowerBound),upperBound)}function createMemoryHistory(props){void 0===props&&(props={});var _props=props,getUserConfirmation=_props.getUserConfirmation,_props$initialEntries=_props.initialEntries,initialEntries=void 0===_props$initialEntries?["/"]:_props$initialEntries,_props$initialIndex=_props.initialIndex,initialIndex=void 0===_props$initialIndex?0:_props$initialIndex,_props$keyLength=_props.keyLength,keyLength=void 0===_props$keyLength?6:_props$keyLength,transitionManager=createTransitionManager();function setState(nextState){(0,esm_extends.A)(history,nextState),history.length=history.entries.length,transitionManager.notifyListeners(history.location,history.action)}function createKey(){return Math.random().toString(36).substr(2,keyLength)}var index=clamp(initialIndex,0,initialEntries.length-1),entries=initialEntries.map((function(entry){return createLocation(entry,void 0,"string"==typeof entry?createKey():entry.key||createKey())})),createHref=createPath;function go(n){var nextIndex=clamp(history.index+n,0,history.entries.length-1),location=history.entries[nextIndex];transitionManager.confirmTransitionTo(location,"POP",getUserConfirmation,(function(ok){ok?setState({action:"POP",location,index:nextIndex}):setState()}))}var history={length:entries.length,action:"POP",location:entries[index],index,entries,createHref,push:function push(path,state){var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,"PUSH",getUserConfirmation,(function(ok){if(ok){var nextIndex=history.index+1,nextEntries=history.entries.slice(0);nextEntries.length>nextIndex?nextEntries.splice(nextIndex,nextEntries.length-nextIndex,location):nextEntries.push(location),setState({action:"PUSH",location,index:nextIndex,entries:nextEntries})}}))},replace:function replace(path,state){var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,"REPLACE",getUserConfirmation,(function(ok){ok&&(history.entries[history.index]=location,setState({action:"REPLACE",location}))}))},go,goBack:function goBack(){go(-1)},goForward:function goForward(){go(1)},canGo:function canGo(n){var nextIndex=history.index+n;return nextIndex>=0&&nextIndex<history.entries.length},block:function block(prompt){return void 0===prompt&&(prompt=!1),transitionManager.setPrompt(prompt)},listen:function listen(listener){return transitionManager.appendListener(listener)}};return history}},"./node_modules/react-router/esm/react-router.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{fS:()=>MemoryRouter,qh:()=>Route,Ix:()=>Router,dO:()=>Switch,XZ:()=>context,B6:()=>matchPath,W6:()=>useHistory,zy:()=>useLocation,g:()=>useParams,y:()=>withRouter});var inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),esm_history=__webpack_require__("./node_modules/history/esm/history.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:{};var index=react.createContext||function createReactContext(defaultValue,calculateChangedBits){var _Provider$childContex,_Consumer$contextType,contextProp="__create-react-context-"+function getUniqueId(){var key="__global_unique_id__";return commonjsGlobal[key]=(commonjsGlobal[key]||0)+1}()+"__",Provider=function(_Component){function Provider(){var _this;return(_this=_Component.apply(this,arguments)||this).emitter=function createEventEmitter(value){var handlers=[];return{on:function on(handler){handlers.push(handler)},off:function off(handler){handlers=handlers.filter((function(h){return h!==handler}))},get:function get(){return value},set:function set(newValue,changedBits){value=newValue,handlers.forEach((function(handler){return handler(value,changedBits)}))}}}(_this.props.value),_this}(0,inheritsLoose.A)(Provider,_Component);var _proto=Provider.prototype;return _proto.getChildContext=function getChildContext(){var _ref;return(_ref={})[contextProp]=this.emitter,_ref},_proto.componentWillReceiveProps=function componentWillReceiveProps(nextProps){if(this.props.value!==nextProps.value){var changedBits,oldValue=this.props.value,newValue=nextProps.value;!function objectIs(x,y){return x===y?0!==x||1/x==1/y:x!=x&&y!=y}(oldValue,newValue)?(changedBits="function"==typeof calculateChangedBits?calculateChangedBits(oldValue,newValue):1073741823,0!==(changedBits|=0)&&this.emitter.set(nextProps.value,changedBits)):changedBits=0}},_proto.render=function render(){return this.props.children},Provider}(react.Component);Provider.childContextTypes=((_Provider$childContex={})[contextProp]=prop_types_default().object.isRequired,_Provider$childContex);var Consumer=function(_Component2){function Consumer(){var _this2;return(_this2=_Component2.apply(this,arguments)||this).state={value:_this2.getValue()},_this2.onUpdate=function(newValue,changedBits){(0|_this2.observedBits)&changedBits&&_this2.setState({value:_this2.getValue()})},_this2}(0,inheritsLoose.A)(Consumer,_Component2);var _proto2=Consumer.prototype;return _proto2.componentWillReceiveProps=function componentWillReceiveProps(nextProps){var observedBits=nextProps.observedBits;this.observedBits=null==observedBits?1073741823:observedBits},_proto2.componentDidMount=function componentDidMount(){this.context[contextProp]&&this.context[contextProp].on(this.onUpdate);var observedBits=this.props.observedBits;this.observedBits=null==observedBits?1073741823:observedBits},_proto2.componentWillUnmount=function componentWillUnmount(){this.context[contextProp]&&this.context[contextProp].off(this.onUpdate)},_proto2.getValue=function getValue(){return this.context[contextProp]?this.context[contextProp].get():defaultValue},_proto2.render=function render(){return function onlyChild(children){return Array.isArray(children)?children[0]:children}(this.props.children)(this.state.value)},Consumer}(react.Component);return Consumer.contextTypes=((_Consumer$contextType={})[contextProp]=prop_types_default().object,_Consumer$contextType),{Provider,Consumer}};const esm=index;var tiny_invariant=__webpack_require__("./node_modules/tiny-invariant/dist/esm/tiny-invariant.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),path_to_regexp=__webpack_require__("./node_modules/react-router/node_modules/path-to-regexp/index.js"),path_to_regexp_default=__webpack_require__.n(path_to_regexp),objectWithoutPropertiesLoose=(__webpack_require__("./node_modules/react-router/node_modules/react-is/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js")),hoist_non_react_statics_cjs=__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),hoist_non_react_statics_cjs_default=__webpack_require__.n(hoist_non_react_statics_cjs),createNamedContext=function createNamedContext(name){var context=esm();return context.displayName=name,context},context=createNamedContext("Router"),Router=function(_React$Component){function Router(props){var _this;return(_this=_React$Component.call(this,props)||this).state={location:props.history.location},_this._isMounted=!1,_this._pendingLocation=null,props.staticContext||(_this.unlisten=props.history.listen((function(location){_this._isMounted?_this.setState({location}):_this._pendingLocation=location}))),_this}(0,inheritsLoose.A)(Router,_React$Component),Router.computeRootMatch=function computeRootMatch(pathname){return{path:"/",url:"/",params:{},isExact:"/"===pathname}};var _proto=Router.prototype;return _proto.componentDidMount=function componentDidMount(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},_proto.componentWillUnmount=function componentWillUnmount(){this.unlisten&&this.unlisten()},_proto.render=function render(){return react.createElement(context.Provider,{children:this.props.children||null,value:{history:this.props.history,location:this.state.location,match:Router.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}})},Router}(react.Component);var MemoryRouter=function(_React$Component){function MemoryRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).history=(0,esm_history.sC)(_this.props),_this}return(0,inheritsLoose.A)(MemoryRouter,_React$Component),MemoryRouter.prototype.render=function render(){return react.createElement(Router,{history:this.history,children:this.props.children})},MemoryRouter}(react.Component);react.Component;var cache$1={},cacheLimit$1=1e4,cacheCount$1=0;function matchPath(pathname,options){void 0===options&&(options={}),("string"==typeof options||Array.isArray(options))&&(options={path:options});var _options=options,path=_options.path,_options$exact=_options.exact,exact=void 0!==_options$exact&&_options$exact,_options$strict=_options.strict,strict=void 0!==_options$strict&&_options$strict,_options$sensitive=_options.sensitive,sensitive=void 0!==_options$sensitive&&_options$sensitive;return[].concat(path).reduce((function(matched,path){if(!path&&""!==path)return null;if(matched)return matched;var _compilePath=function compilePath$1(path,options){var cacheKey=""+options.end+options.strict+options.sensitive,pathCache=cache$1[cacheKey]||(cache$1[cacheKey]={});if(pathCache[path])return pathCache[path];var keys=[],result={regexp:path_to_regexp_default()(path,keys,options),keys};return cacheCount$1<cacheLimit$1&&(pathCache[path]=result,cacheCount$1++),result}(path,{end:exact,strict,sensitive}),regexp=_compilePath.regexp,keys=_compilePath.keys,match=regexp.exec(pathname);if(!match)return null;var url=match[0],values=match.slice(1),isExact=pathname===url;return exact&&!isExact?null:{path,url:"/"===path&&""===url?"/":url,isExact,params:keys.reduce((function(memo,key,index){return memo[key.name]=values[index],memo}),{})}}),null)}var Route=function(_React$Component){function Route(){return _React$Component.apply(this,arguments)||this}return(0,inheritsLoose.A)(Route,_React$Component),Route.prototype.render=function render(){var _this=this;return react.createElement(context.Consumer,null,(function(context$1){context$1||(0,tiny_invariant.A)(!1);var location=_this.props.location||context$1.location,match=_this.props.computedMatch?_this.props.computedMatch:_this.props.path?matchPath(location.pathname,_this.props):context$1.match,props=(0,esm_extends.A)({},context$1,{location,match}),_this$props=_this.props,children=_this$props.children,component=_this$props.component,render=_this$props.render;return Array.isArray(children)&&0===children.length&&(children=null),react.createElement(context.Provider,{value:props},props.match?children?"function"==typeof children?children(props):children:component?react.createElement(component,props):render?render(props):null:"function"==typeof children?children(props):null)}))},Route}(react.Component);function addLeadingSlash(path){return"/"===path.charAt(0)?path:"/"+path}function stripBasename(basename,location){if(!basename)return location;var base=addLeadingSlash(basename);return 0!==location.pathname.indexOf(base)?location:(0,esm_extends.A)({},location,{pathname:location.pathname.substr(base.length)})}function createURL(location){return"string"==typeof location?location:(0,esm_history.AO)(location)}function staticHandler(methodName){return function(){(0,tiny_invariant.A)(!1)}}function noop(){}react.Component;var Switch=function(_React$Component){function Switch(){return _React$Component.apply(this,arguments)||this}return(0,inheritsLoose.A)(Switch,_React$Component),Switch.prototype.render=function render(){var _this=this;return react.createElement(context.Consumer,null,(function(context){context||(0,tiny_invariant.A)(!1);var element,match,location=_this.props.location||context.location;return react.Children.forEach(_this.props.children,(function(child){if(null==match&&react.isValidElement(child)){element=child;var path=child.props.path||child.props.from;match=path?matchPath(location.pathname,(0,esm_extends.A)({},child.props,{path})):context.match}})),match?react.cloneElement(element,{location,computedMatch:match}):null}))},Switch}(react.Component);function withRouter(Component){var displayName="withRouter("+(Component.displayName||Component.name)+")",C=function C(props){var wrappedComponentRef=props.wrappedComponentRef,remainingProps=(0,objectWithoutPropertiesLoose.A)(props,["wrappedComponentRef"]);return react.createElement(context.Consumer,null,(function(context){return context||(0,tiny_invariant.A)(!1),react.createElement(Component,(0,esm_extends.A)({},remainingProps,context,{ref:wrappedComponentRef}))}))};return C.displayName=displayName,C.WrappedComponent=Component,hoist_non_react_statics_cjs_default()(C,Component)}var useContext=react.useContext;function useHistory(){return useContext(context).history}function useLocation(){return useContext(context).location}function useParams(){var match=useContext(context).match;return match?match.params:{}}},"./node_modules/react-router/node_modules/isarray/index.js":module=>{module.exports=Array.isArray||function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}},"./node_modules/react-router/node_modules/path-to-regexp/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isarray=__webpack_require__("./node_modules/react-router/node_modules/isarray/index.js");module.exports=pathToRegexp,module.exports.parse=parse,module.exports.compile=function compile(str,options){return tokensToFunction(parse(str,options),options)},module.exports.tokensToFunction=tokensToFunction,module.exports.tokensToRegExp=tokensToRegExp;var PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function parse(str,options){for(var res,tokens=[],key=0,index=0,path="",defaultDelimiter=options&&options.delimiter||"/";null!=(res=PATH_REGEXP.exec(str));){var m=res[0],escaped=res[1],offset=res.index;if(path+=str.slice(index,offset),index=offset+m.length,escaped)path+=escaped[1];else{var next=str[index],prefix=res[2],name=res[3],capture=res[4],group=res[5],modifier=res[6],asterisk=res[7];path&&(tokens.push(path),path="");var partial=null!=prefix&&null!=next&&next!==prefix,repeat="+"===modifier||"*"===modifier,optional="?"===modifier||"*"===modifier,delimiter=res[2]||defaultDelimiter,pattern=capture||group;tokens.push({name:name||key++,prefix:prefix||"",delimiter,optional,repeat,partial,asterisk:!!asterisk,pattern:pattern?escapeGroup(pattern):asterisk?".*":"[^"+escapeString(delimiter)+"]+?"})}}return index<str.length&&(path+=str.substr(index)),path&&tokens.push(path),tokens}function encodeURIComponentPretty(str){return encodeURI(str).replace(/[\/?#]/g,(function(c){return"%"+c.charCodeAt(0).toString(16).toUpperCase()}))}function tokensToFunction(tokens,options){for(var matches=new Array(tokens.length),i=0;i<tokens.length;i++)"object"==typeof tokens[i]&&(matches[i]=new RegExp("^(?:"+tokens[i].pattern+")$",flags(options)));return function(obj,opts){for(var path="",data=obj||{},encode=(opts||{}).pretty?encodeURIComponentPretty:encodeURIComponent,i=0;i<tokens.length;i++){var token=tokens[i];if("string"!=typeof token){var segment,value=data[token.name];if(null==value){if(token.optional){token.partial&&(path+=token.prefix);continue}throw new TypeError('Expected "'+token.name+'" to be defined')}if(isarray(value)){if(!token.repeat)throw new TypeError('Expected "'+token.name+'" to not repeat, but received `'+JSON.stringify(value)+"`");if(0===value.length){if(token.optional)continue;throw new TypeError('Expected "'+token.name+'" to not be empty')}for(var j=0;j<value.length;j++){if(segment=encode(value[j]),!matches[i].test(segment))throw new TypeError('Expected all "'+token.name+'" to match "'+token.pattern+'", but received `'+JSON.stringify(segment)+"`");path+=(0===j?token.prefix:token.delimiter)+segment}}else{if(segment=token.asterisk?encodeURI(value).replace(/[?#]/g,(function(c){return"%"+c.charCodeAt(0).toString(16).toUpperCase()})):encode(value),!matches[i].test(segment))throw new TypeError('Expected "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');path+=token.prefix+segment}}else path+=token}return path}}function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function escapeGroup(group){return group.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(re,keys){return re.keys=keys,re}function flags(options){return options&&options.sensitive?"":"i"}function tokensToRegExp(tokens,keys,options){isarray(keys)||(options=keys||options,keys=[]);for(var strict=(options=options||{}).strict,end=!1!==options.end,route="",i=0;i<tokens.length;i++){var token=tokens[i];if("string"==typeof token)route+=escapeString(token);else{var prefix=escapeString(token.prefix),capture="(?:"+token.pattern+")";keys.push(token),token.repeat&&(capture+="(?:"+prefix+capture+")*"),route+=capture=token.optional?token.partial?prefix+"("+capture+")?":"(?:"+prefix+"("+capture+"))?":prefix+"("+capture+")"}}var delimiter=escapeString(options.delimiter||"/"),endsWithDelimiter=route.slice(-delimiter.length)===delimiter;return strict||(route=(endsWithDelimiter?route.slice(0,-delimiter.length):route)+"(?:"+delimiter+"(?=$))?"),route+=end?"$":strict&&endsWithDelimiter?"":"(?="+delimiter+"|$)",attachKeys(new RegExp("^"+route,flags(options)),keys)}function pathToRegexp(path,keys,options){return isarray(keys)||(options=keys||options,keys=[]),options=options||{},path instanceof RegExp?function regexpToRegexp(path,keys){var groups=path.source.match(/\((?!\?)/g);if(groups)for(var i=0;i<groups.length;i++)keys.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(path,keys)}(path,keys):isarray(path)?function arrayToRegexp(path,keys,options){for(var parts=[],i=0;i<path.length;i++)parts.push(pathToRegexp(path[i],keys,options).source);return attachKeys(new RegExp("(?:"+parts.join("|")+")",flags(options)),keys)}(path,keys,options):function stringToRegexp(path,keys,options){return tokensToRegExp(parse(path,options),keys,options)}(path,keys,options)}},"./node_modules/react-router/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{"use strict";var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}},"./node_modules/react-router/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/react-router/node_modules/react-is/cjs/react-is.production.min.js")}}]);