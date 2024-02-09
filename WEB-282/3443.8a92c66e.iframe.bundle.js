"use strict";(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3443],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTypography",slot)}(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx_m.Z)(classes.root,className)},other))}))},"./node_modules/@sentry/core/esm/exports.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tb:()=>captureException,uT:()=>captureMessage});var worldwide=__webpack_require__("./node_modules/@sentry/core/node_modules/@sentry/utils/esm/worldwide.js");function misc_uuid4(){const gbl=worldwide.n2,crypto=gbl.crypto||gbl.msCrypto;if(crypto&&crypto.randomUUID)return crypto.randomUUID().replace(/-/g,"");const getRandomByte=crypto&&crypto.getRandomValues?()=>crypto.getRandomValues(new Uint8Array(1))[0]:()=>16*Math.random();return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(c=>(c^(15&getRandomByte())>>c/4).toString(16)))}var time=__webpack_require__("./node_modules/@sentry/core/node_modules/@sentry/utils/esm/time.js");const CONSOLE_LEVELS=["debug","info","warn","error","log","assert","trace"];function consoleSandbox(callback){if(!("console"in worldwide.n2))return callback();const originalConsole=worldwide.n2.console,wrappedLevels={};CONSOLE_LEVELS.forEach((level=>{const originalWrappedFunc=originalConsole[level]&&originalConsole[level].__sentry_original__;level in originalConsole&&originalWrappedFunc&&(wrappedLevels[level]=originalConsole[level],originalConsole[level]=originalWrappedFunc)}));try{return callback()}finally{Object.keys(wrappedLevels).forEach((level=>{originalConsole[level]=wrappedLevels[level]}))}}function makeLogger(){let enabled=!1;const logger={enable:()=>{enabled=!0},disable:()=>{enabled=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?CONSOLE_LEVELS.forEach((name=>{logger[name]=(...args)=>{enabled&&consoleSandbox((()=>{worldwide.n2.console[name](`Sentry Logger [${name}]:`,...args)}))}})):CONSOLE_LEVELS.forEach((name=>{logger[name]=()=>{}})),logger}let logger_logger;logger_logger="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,worldwide.YO)("logger",makeLogger):makeLogger();const DEFAULT_ENVIRONMENT="production",objectToString=Object.prototype.toString;function isBuiltin(wat,className){return objectToString.call(wat)===`[object ${className}]`}function isPlainObject(wat){return isBuiltin(wat,"Object")}function isThenable(wat){return Boolean(wat&&wat.then&&"function"==typeof wat.then)}var States;!function(States){States[States.PENDING=0]="PENDING";States[States.RESOLVED=1]="RESOLVED";States[States.REJECTED=2]="REJECTED"}(States||(States={}));class SyncPromise{__init(){this._state=States.PENDING}__init2(){this._handlers=[]}constructor(executor){SyncPromise.prototype.__init.call(this),SyncPromise.prototype.__init2.call(this),SyncPromise.prototype.__init3.call(this),SyncPromise.prototype.__init4.call(this),SyncPromise.prototype.__init5.call(this),SyncPromise.prototype.__init6.call(this);try{executor(this._resolve,this._reject)}catch(e){this._reject(e)}}then(onfulfilled,onrejected){return new SyncPromise(((resolve,reject)=>{this._handlers.push([!1,result=>{if(onfulfilled)try{resolve(onfulfilled(result))}catch(e){reject(e)}else resolve(result)},reason=>{if(onrejected)try{resolve(onrejected(reason))}catch(e){reject(e)}else reject(reason)}]),this._executeHandlers()}))}catch(onrejected){return this.then((val=>val),onrejected)}finally(onfinally){return new SyncPromise(((resolve,reject)=>{let val,isRejected;return this.then((value=>{isRejected=!1,val=value,onfinally&&onfinally()}),(reason=>{isRejected=!0,val=reason,onfinally&&onfinally()})).then((()=>{isRejected?reject(val):resolve(val)}))}))}__init3(){this._resolve=value=>{this._setResult(States.RESOLVED,value)}}__init4(){this._reject=reason=>{this._setResult(States.REJECTED,reason)}}__init5(){this._setResult=(state,value)=>{this._state===States.PENDING&&(isThenable(value)?value.then(this._resolve,this._reject):(this._state=state,this._value=value,this._executeHandlers()))}}__init6(){this._executeHandlers=()=>{if(this._state===States.PENDING)return;const cachedHandlers=this._handlers.slice();this._handlers=[],cachedHandlers.forEach((handler=>{handler[0]||(this._state===States.RESOLVED&&handler[1](this._value),this._state===States.REJECTED&&handler[2](this._value),handler[0]=!0)}))}}}function dropUndefinedKeys(inputValue){return _dropUndefinedKeys(inputValue,new Map)}function _dropUndefinedKeys(inputValue,memoizationMap){if(isPlainObject(inputValue)){const memoVal=memoizationMap.get(inputValue);if(void 0!==memoVal)return memoVal;const returnValue={};memoizationMap.set(inputValue,returnValue);for(const key of Object.keys(inputValue))void 0!==inputValue[key]&&(returnValue[key]=_dropUndefinedKeys(inputValue[key],memoizationMap));return returnValue}if(Array.isArray(inputValue)){const memoVal=memoizationMap.get(inputValue);if(void 0!==memoVal)return memoVal;const returnValue=[];return memoizationMap.set(inputValue,returnValue),inputValue.forEach((item=>{returnValue.push(_dropUndefinedKeys(item,memoizationMap))})),returnValue}return inputValue}function makeSession(context){const startingTime=(0,time.ph)(),session={sid:misc_uuid4(),init:!0,timestamp:startingTime,started:startingTime,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function sessionToJSON(session){return dropUndefinedKeys({sid:`${session.sid}`,init:session.init,started:new Date(1e3*session.started).toISOString(),timestamp:new Date(1e3*session.timestamp).toISOString(),status:session.status,errors:session.errors,did:"number"==typeof session.did||"string"==typeof session.did?`${session.did}`:void 0,duration:session.duration,attrs:{release:session.release,environment:session.environment,ip_address:session.ipAddress,user_agent:session.userAgent}})}(session)};return context&&updateSession(session,context),session}function updateSession(session,context={}){if(context.user&&(!session.ipAddress&&context.user.ip_address&&(session.ipAddress=context.user.ip_address),session.did||context.did||(session.did=context.user.id||context.user.email||context.user.username)),session.timestamp=context.timestamp||(0,time.ph)(),context.ignoreDuration&&(session.ignoreDuration=context.ignoreDuration),context.sid&&(session.sid=32===context.sid.length?context.sid:misc_uuid4()),void 0!==context.init&&(session.init=context.init),!session.did&&context.did&&(session.did=`${context.did}`),"number"==typeof context.started&&(session.started=context.started),session.ignoreDuration)session.duration=void 0;else if("number"==typeof context.duration)session.duration=context.duration;else{const duration=session.timestamp-session.started;session.duration=duration>=0?duration:0}context.release&&(session.release=context.release),context.environment&&(session.environment=context.environment),!session.ipAddress&&context.ipAddress&&(session.ipAddress=context.ipAddress),!session.userAgent&&context.userAgent&&(session.userAgent=context.userAgent),"number"==typeof context.errors&&(session.errors=context.errors),context.status&&(session.status=context.status)}class scope_Scope{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(scope){const newScope=new scope_Scope;return scope&&(newScope._breadcrumbs=[...scope._breadcrumbs],newScope._tags={...scope._tags},newScope._extra={...scope._extra},newScope._contexts={...scope._contexts},newScope._user=scope._user,newScope._level=scope._level,newScope._span=scope._span,newScope._session=scope._session,newScope._transactionName=scope._transactionName,newScope._fingerprint=scope._fingerprint,newScope._eventProcessors=[...scope._eventProcessors],newScope._requestSession=scope._requestSession,newScope._attachments=[...scope._attachments],newScope._sdkProcessingMetadata={...scope._sdkProcessingMetadata}),newScope}addScopeListener(callback){this._scopeListeners.push(callback)}addEventProcessor(callback){return this._eventProcessors.push(callback),this}setUser(user){return this._user=user||{},this._session&&updateSession(this._session,{user}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(requestSession){return this._requestSession=requestSession,this}setTags(tags){return this._tags={...this._tags,...tags},this._notifyScopeListeners(),this}setTag(key,value){return this._tags={...this._tags,[key]:value},this._notifyScopeListeners(),this}setExtras(extras){return this._extra={...this._extra,...extras},this._notifyScopeListeners(),this}setExtra(key,extra){return this._extra={...this._extra,[key]:extra},this._notifyScopeListeners(),this}setFingerprint(fingerprint){return this._fingerprint=fingerprint,this._notifyScopeListeners(),this}setLevel(level){return this._level=level,this._notifyScopeListeners(),this}setTransactionName(name){return this._transactionName=name,this._notifyScopeListeners(),this}setContext(key,context){return null===context?delete this._contexts[key]:this._contexts[key]=context,this._notifyScopeListeners(),this}setSpan(span){return this._span=span,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const span=this.getSpan();return span&&span.transaction}setSession(session){return session?this._session=session:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(captureContext){if(!captureContext)return this;if("function"==typeof captureContext){const updatedScope=captureContext(this);return updatedScope instanceof scope_Scope?updatedScope:this}return captureContext instanceof scope_Scope?(this._tags={...this._tags,...captureContext._tags},this._extra={...this._extra,...captureContext._extra},this._contexts={...this._contexts,...captureContext._contexts},captureContext._user&&Object.keys(captureContext._user).length&&(this._user=captureContext._user),captureContext._level&&(this._level=captureContext._level),captureContext._fingerprint&&(this._fingerprint=captureContext._fingerprint),captureContext._requestSession&&(this._requestSession=captureContext._requestSession)):isPlainObject(captureContext)&&(this._tags={...this._tags,...captureContext.tags},this._extra={...this._extra,...captureContext.extra},this._contexts={...this._contexts,...captureContext.contexts},captureContext.user&&(this._user=captureContext.user),captureContext.level&&(this._level=captureContext.level),captureContext.fingerprint&&(this._fingerprint=captureContext.fingerprint),captureContext.requestSession&&(this._requestSession=captureContext.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(breadcrumb,maxBreadcrumbs){const maxCrumbs="number"==typeof maxBreadcrumbs?maxBreadcrumbs:100;if(maxCrumbs<=0)return this;const mergedBreadcrumb={timestamp:(0,time.yW)(),...breadcrumb};return this._breadcrumbs=[...this._breadcrumbs,mergedBreadcrumb].slice(-maxCrumbs),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(attachment){return this._attachments.push(attachment),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(event,hint={}){if(this._extra&&Object.keys(this._extra).length&&(event.extra={...this._extra,...event.extra}),this._tags&&Object.keys(this._tags).length&&(event.tags={...this._tags,...event.tags}),this._user&&Object.keys(this._user).length&&(event.user={...this._user,...event.user}),this._contexts&&Object.keys(this._contexts).length&&(event.contexts={...this._contexts,...event.contexts}),this._level&&(event.level=this._level),this._transactionName&&(event.transaction=this._transactionName),this._span){event.contexts={trace:this._span.getTraceContext(),...event.contexts};const transaction=this._span.transaction;if(transaction){event.sdkProcessingMetadata={dynamicSamplingContext:transaction.getDynamicSamplingContext(),...event.sdkProcessingMetadata};const transactionName=transaction.name;transactionName&&(event.tags={transaction:transactionName,...event.tags})}}return this._applyFingerprint(event),event.breadcrumbs=[...event.breadcrumbs||[],...this._breadcrumbs],event.breadcrumbs=event.breadcrumbs.length>0?event.breadcrumbs:void 0,event.sdkProcessingMetadata={...event.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...getGlobalEventProcessors(),...this._eventProcessors],event,hint)}setSDKProcessingMetadata(newData){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...newData},this}_notifyEventProcessors(processors,event,hint,index=0){return new SyncPromise(((resolve,reject)=>{const processor=processors[index];if(null===event||"function"!=typeof processor)resolve(event);else{const result=processor({...event},hint);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&processor.id&&null===result&&logger_logger.log(`Event processor "${processor.id}" dropped event`),isThenable(result)?result.then((final=>this._notifyEventProcessors(processors,final,hint,index+1).then(resolve))).then(null,reject):this._notifyEventProcessors(processors,result,hint,index+1).then(resolve).then(null,reject)}}))}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((callback=>{callback(this)})),this._notifyingListeners=!1)}_applyFingerprint(event){event.fingerprint=event.fingerprint?function arrayify(maybeArray){return Array.isArray(maybeArray)?maybeArray:[maybeArray]}(event.fingerprint):[],this._fingerprint&&(event.fingerprint=event.fingerprint.concat(this._fingerprint)),event.fingerprint&&!event.fingerprint.length&&delete event.fingerprint}}function getGlobalEventProcessors(){return(0,worldwide.YO)("globalEventProcessors",(()=>[]))}const API_VERSION=4,DEFAULT_BREADCRUMBS=100;class Hub{constructor(client,scope=new scope_Scope,_version=API_VERSION){this._version=_version,this._stack=[{scope}],client&&this.bindClient(client)}isOlderThan(version){return this._version<version}bindClient(client){this.getStackTop().client=client,client&&client.setupIntegrations&&client.setupIntegrations()}pushScope(){const scope=scope_Scope.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope}),scope}popScope(){return!(this.getStack().length<=1)&&!!this.getStack().pop()}withScope(callback){const scope=this.pushScope();try{callback(scope)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(exception,hint){const eventId=this._lastEventId=hint&&hint.event_id?hint.event_id:misc_uuid4(),syntheticException=new Error("Sentry syntheticException");return this._withClient(((client,scope)=>{client.captureException(exception,{originalException:exception,syntheticException,...hint,event_id:eventId},scope)})),eventId}captureMessage(message,level,hint){const eventId=this._lastEventId=hint&&hint.event_id?hint.event_id:misc_uuid4(),syntheticException=new Error(message);return this._withClient(((client,scope)=>{client.captureMessage(message,level,{originalException:message,syntheticException,...hint,event_id:eventId},scope)})),eventId}captureEvent(event,hint){const eventId=hint&&hint.event_id?hint.event_id:misc_uuid4();return event.type||(this._lastEventId=eventId),this._withClient(((client,scope)=>{client.captureEvent(event,{...hint,event_id:eventId},scope)})),eventId}lastEventId(){return this._lastEventId}addBreadcrumb(breadcrumb,hint){const{scope,client}=this.getStackTop();if(!client)return;const{beforeBreadcrumb=null,maxBreadcrumbs=DEFAULT_BREADCRUMBS}=client.getOptions&&client.getOptions()||{};if(maxBreadcrumbs<=0)return;const mergedBreadcrumb={timestamp:(0,time.yW)(),...breadcrumb},finalBreadcrumb=beforeBreadcrumb?consoleSandbox((()=>beforeBreadcrumb(mergedBreadcrumb,hint))):mergedBreadcrumb;null!==finalBreadcrumb&&(client.emit&&client.emit("beforeAddBreadcrumb",finalBreadcrumb,hint),scope.addBreadcrumb(finalBreadcrumb,maxBreadcrumbs))}setUser(user){this.getScope().setUser(user)}setTags(tags){this.getScope().setTags(tags)}setExtras(extras){this.getScope().setExtras(extras)}setTag(key,value){this.getScope().setTag(key,value)}setExtra(key,extra){this.getScope().setExtra(key,extra)}setContext(name,context){this.getScope().setContext(name,context)}configureScope(callback){const{scope,client}=this.getStackTop();client&&callback(scope)}run(callback){const oldHub=makeMain(this);try{callback(this)}finally{makeMain(oldHub)}}getIntegration(integration){const client=this.getClient();if(!client)return null;try{return client.getIntegration(integration)}catch(_oO){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&logger_logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`),null}}startTransaction(context,customSamplingContext){const result=this._callExtensionMethod("startTransaction",context,customSamplingContext);return"undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__||result||console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"),result}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(endSession=!1){if(endSession)return this.endSession();this._sendSessionUpdate()}endSession(){const scope=this.getStackTop().scope,session=scope.getSession();session&&function closeSession(session,status){let context={};status?context={status}:"ok"===session.status&&(context={status:"exited"}),updateSession(session,context)}(session),this._sendSessionUpdate(),scope.setSession()}startSession(context){const{scope,client}=this.getStackTop(),{release,environment=DEFAULT_ENVIRONMENT}=client&&client.getOptions()||{},{userAgent}=worldwide.n2.navigator||{},session=makeSession({release,environment,user:scope.getUser(),...userAgent&&{userAgent},...context}),currentSession=scope.getSession&&scope.getSession();return currentSession&&"ok"===currentSession.status&&updateSession(currentSession,{status:"exited"}),this.endSession(),scope.setSession(session),session}shouldSendDefaultPii(){const client=this.getClient(),options=client&&client.getOptions();return Boolean(options&&options.sendDefaultPii)}_sendSessionUpdate(){const{scope,client}=this.getStackTop(),session=scope.getSession();session&&client&&client.captureSession&&client.captureSession(session)}_withClient(callback){const{scope,client}=this.getStackTop();client&&callback(client,scope)}_callExtensionMethod(method,...args){const sentry=getMainCarrier().__SENTRY__;if(sentry&&sentry.extensions&&"function"==typeof sentry.extensions[method])return sentry.extensions[method].apply(this,args);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&logger_logger.warn(`Extension method ${method} couldn't be found, doing nothing.`)}}function getMainCarrier(){return worldwide.n2.__SENTRY__=worldwide.n2.__SENTRY__||{extensions:{},hub:void 0},worldwide.n2}function makeMain(hub){const registry=getMainCarrier(),oldHub=getHubFromCarrier(registry);return setHubOnCarrier(registry,hub),oldHub}function hub_getCurrentHub(){const registry=getMainCarrier();if(registry.__SENTRY__&&registry.__SENTRY__.acs){const hub=registry.__SENTRY__.acs.getCurrentHub();if(hub)return hub}return getGlobalHub(registry)}function getGlobalHub(registry=getMainCarrier()){return hasHubOnCarrier(registry)&&!getHubFromCarrier(registry).isOlderThan(API_VERSION)||setHubOnCarrier(registry,new Hub),getHubFromCarrier(registry)}function hasHubOnCarrier(carrier){return!!(carrier&&carrier.__SENTRY__&&carrier.__SENTRY__.hub)}function getHubFromCarrier(carrier){return(0,worldwide.YO)("hub",(()=>new Hub),carrier)}function setHubOnCarrier(carrier,hub){if(!carrier)return!1;return(carrier.__SENTRY__=carrier.__SENTRY__||{}).hub=hub,!0}function captureException(exception,captureContext){return hub_getCurrentHub().captureException(exception,{captureContext})}function captureMessage(message,captureContext){const level="string"==typeof captureContext?captureContext:void 0,context="string"!=typeof captureContext?{captureContext}:void 0;return hub_getCurrentHub().captureMessage(message,level,context)}},"./node_modules/@sentry/core/node_modules/@sentry/utils/esm/node.js":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l$:()=>dynamicRequire,KV:()=>isNodeEnv}),module=__webpack_require__.hmd(module);var process=__webpack_require__("./node_modules/process/browser.js");function isNodeEnv(){return!function isBrowserBundle(){return"undefined"!=typeof __SENTRY_BROWSER_BUNDLE__&&!!__SENTRY_BROWSER_BUNDLE__}()&&"[object process]"===Object.prototype.toString.call(void 0!==process?process:0)}function dynamicRequire(mod,request){return mod.require(request)}},"./node_modules/@sentry/core/node_modules/@sentry/utils/esm/time.js":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ph:()=>timestampInSeconds,yW:()=>dateTimestampInSeconds});var _node_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sentry/core/node_modules/@sentry/utils/esm/node.js"),_worldwide_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@sentry/core/node_modules/@sentry/utils/esm/worldwide.js");module=__webpack_require__.hmd(module);const WINDOW=(0,_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.Rf)(),dateTimestampSource={nowSeconds:()=>Date.now()/1e3};const platformPerformance=(0,_node_js__WEBPACK_IMPORTED_MODULE_1__.KV)()?function getNodePerformance(){try{return(0,_node_js__WEBPACK_IMPORTED_MODULE_1__.l$)(module,"perf_hooks").performance}catch(_){return}}():function getBrowserPerformance(){const{performance}=WINDOW;if(!performance||!performance.now)return;return{now:()=>performance.now(),timeOrigin:Date.now()-performance.now()}}(),timestampSource=void 0===platformPerformance?dateTimestampSource:{nowSeconds:()=>(platformPerformance.timeOrigin+platformPerformance.now())/1e3},dateTimestampInSeconds=dateTimestampSource.nowSeconds.bind(dateTimestampSource),timestampInSeconds=timestampSource.nowSeconds.bind(timestampSource);let _browserPerformanceTimeOriginMode;(()=>{const{performance}=WINDOW;if(!performance||!performance.now)return void(_browserPerformanceTimeOriginMode="none");const performanceNow=performance.now(),dateNow=Date.now(),timeOriginDelta=performance.timeOrigin?Math.abs(performance.timeOrigin+performanceNow-dateNow):36e5,timeOriginIsReliable=timeOriginDelta<36e5,navigationStart=performance.timing&&performance.timing.navigationStart,navigationStartDelta="number"==typeof navigationStart?Math.abs(navigationStart+performanceNow-dateNow):36e5;timeOriginIsReliable||navigationStartDelta<36e5?timeOriginDelta<=navigationStartDelta?(_browserPerformanceTimeOriginMode="timeOrigin",performance.timeOrigin):_browserPerformanceTimeOriginMode="navigationStart":_browserPerformanceTimeOriginMode="dateNow"})()},"./node_modules/@sentry/core/node_modules/@sentry/utils/esm/worldwide.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isGlobalObj(obj){return obj&&obj.Math==Math?obj:void 0}__webpack_require__.d(__webpack_exports__,{Rf:()=>getGlobalObject,YO:()=>getGlobalSingleton,n2:()=>GLOBAL_OBJ});const GLOBAL_OBJ="object"==typeof globalThis&&isGlobalObj(globalThis)||"object"==typeof window&&isGlobalObj(window)||"object"==typeof self&&isGlobalObj(self)||"object"==typeof __webpack_require__.g&&isGlobalObj(__webpack_require__.g)||function(){return this}()||{};function getGlobalObject(){return GLOBAL_OBJ}function getGlobalSingleton(name,creator,obj){const gbl=obj||GLOBAL_OBJ,__SENTRY__=gbl.__SENTRY__=gbl.__SENTRY__||{};return __SENTRY__[name]||(__SENTRY__[name]=creator())}}}]);