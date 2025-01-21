(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[3306],{"./app/assets/icons/icon_edit.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"cb5d193bcc93e73ae8d1b453e573f5b6.svg"},"./app/assets/icons/icon_upload_file.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"dc7c496e4006bb4fd9c9ec8705a0f039.svg"},"./app/pages/Onboarding/components/ConnectStores.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ConnectStores_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),translate=__webpack_require__("./app/utils/translate.ts"),react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@goshippo/components/esm/Box/Box.js"),shippoTheme=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),Typography=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),Stack=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),Button=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),Divider=__webpack_require__("./node_modules/@goshippo/components/esm/Divider/Divider.js"),icon_edit=__webpack_require__("./app/assets/icons/icon_edit.svg"),icon_upload_file=__webpack_require__("./app/assets/icons/icon_upload_file.svg"),StoreConnection=__webpack_require__("./app/components/StoreConnection/index.ts"),StoreConnectionList=__webpack_require__("./app/components/StoreConnection/components/StoreConnectionList.tsx");const ConnectStores_stories={argTypes:{onSelectItem:{action:"onSelectItem"},t:{action:"translate"}},title:"Onboarding / Connect Stores"};var ConnectStoresWithTranslate=(0,translate.Tl)("join")((function(_a){var onSelectItem=_a.onSelectItem,selectedItem=_a.selectedItem,t=_a.t,_b=(0,tslib_es6.zs)((0,react.useState)(!1),2),shouldShowMoreStores=_b[0],setShouldShowMoreStores=_b[1];return(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({display:"grid",gap:shippoTheme.A.spacing(4),gridTemplateAreas:{md:'"header-store header-store . header-manual" "popular more divider manual"',sm:'"header-store . header-manual" "popular divider manual" "more divider manual"',xs:'"header-store" "popular" '.concat(shouldShowMoreStores?'"more"':"",' "divider" "header-manual" "manual"')},gridTemplateColumns:{md:"1fr 1fr 1px 1fr",sm:"1fr 1px 1fr",xs:"1fr"},height:"min-content"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({gridArea:"header-store"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h2",variant:"h2"},{children:t("join:onboarding.pages.connect_store.headlineStores")}))})),(0,emotion_react_jsx_runtime_browser_esm.Y)(Box.A,(0,tslib_es6.Cl)({gridArea:"header-manual"},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"h2",variant:"h2"},{children:t("join:onboarding.pages.connect_store.headlineManual")}))})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({gap:shippoTheme.A.spacing(2),gridArea:"popular"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"bodyEmphasized"},{children:t("join:onboarding.pages.connect_store.popularStores")})),StoreConnection.as.map((function(store){return(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionList.$p,{onSelect:onSelectItem,selected:selectedItem===store,store},store)})),!shouldShowMoreStores&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,(0,tslib_es6.Cl)({color:"secondary",onClick:function(){return setShouldShowMoreStores(!0)},sx:{display:{sm:"none"}}},{children:t("join:onboarding.pages.connect_store.showMoreStores")}),"showMoreStores")]})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({display:shouldShowMoreStores?{}:{sm:"flex",xs:"none"},gap:shippoTheme.A.spacing(2),gridArea:"more"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Typography.A,(0,tslib_es6.Cl)({component:"p",variant:"bodyEmphasized"},{children:t("join:onboarding.pages.connect_store.moreStores")})),StoreConnection.lN.map((function(store){return(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionList.$p,{onSelect:onSelectItem,selected:selectedItem===store,store},store)}))]})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Box.A,(0,tslib_es6.Cl)({gridArea:"divider"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{orientation:"vertical",sx:{display:{sm:"block",xs:"none"}}}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Divider.A,{orientation:"horizontal",sx:{display:{sm:"none",xs:"block"}}})]})),(0,emotion_react_jsx_runtime_browser_esm.FD)(Stack.A,(0,tslib_es6.Cl)({gap:shippoTheme.A.spacing(2),gridArea:"manual"},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionList.ar,{alt:"edit",icon:icon_edit,name:t("join:onboarding.pages.connect_store.createManualOrder"),onClick:function(){return onSelectItem("manual")},selected:"manual"===selectedItem}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StoreConnectionList.ar,{alt:"upload-file",icon:icon_upload_file,name:t("join:onboarding.pages.connect_store.uploadCSV"),onClick:function(){return onSelectItem("upload-file")},selected:"upload-file"===selectedItem})]}))]}))})),Default=function(args){return(0,emotion_react_jsx_runtime_browser_esm.Y)(ConnectStoresWithTranslate,(0,tslib_es6.Cl)({},args))}.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ComponentProps<typeof ConnectStores>) => <ConnectStoresWithTranslate {...args} />",...Default.parameters?.docs?.source}}}}}]);