(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[4756],{"./app/assets/icons/print-format/collated_pdf.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"64145cf9df520c486ad8cab460ab997a.svg"},"./app/assets/icons/print-format/combo_ol_ps.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"3f67db3a112eed0e4f84db5306ce6306.svg"},"./app/assets/icons/print-format/label_img_zplii.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"190223a3f86b72c56f336bbf28f8c0e9.svg"},"./app/assets/icons/print-format/label_pdf_2p3x7p5.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"5908e88b298dd47b396f4a4b5552e420.svg"},"./app/assets/icons/print-format/label_pdf_4x8.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"a3c581055f4a957088ce6403c561ac57.svg"},"./app/assets/icons/print-format/label_pdf_8x11.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"549d22024010d63f31d061e5a8fab59b.svg"},"./app/assets/icons/print-format/label_pdf_a4.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"0fa8c32e3e0a74e4368abf750e2c69ec.svg"},"./app/assets/icons/print-format/label_pdf_a6.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"d521a7127c5ef26c9d04653f6bd5dc05.svg"},"./app/assets/icons/print-format/label_pdf_thermal_4x6.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"35e487fc657c0e1cc2ac304868cfeb00.svg"},"./app/assets/icons/print-format/label_png_2p3x7p5.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"99ea5d4bef7daee3f154de709c0971d1.svg"},"./app/assets/icons/print-format/label_png_original.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"e0eb0f9cb9abde3f83ec7b74f32c3be5.svg"},"./app/components/AddressValidation/views/InvalidAddressModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>InvalidAddressModal});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@goshippo/components/esm/Stack/Stack.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/shippoTheme.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@goshippo/components/esm/Alert/Alert.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@goshippo/components/esm/Typography/Typography.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@goshippo/components/esm/styles/colors.js"),_goshippo_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@goshippo/components/esm/Button/Button.js"),_goshippo_libraries_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@goshippo/libraries/dist/esm/Dialog/Dialog.js"),InvalidAddressModal=function(_a){var address=_a.address,onClose=_a.onClose,onSave=_a.onSave,t=_a.t,validationError=_a.validationError;if(!address)return null;var validationErrorMessage=validationError?t("orders:addressBook.validationErrors.".concat(validationError)):null,modalContent=(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({spacing:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A.spacing(3)},{children:[validationErrorMessage?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_5__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({"aria-label":validationErrorMessage,severity:"warning"},{children:validationErrorMessage})):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"primary",component:"h4"},{children:t("orders:addressBook:invalidAddress:notValidatedMsg")})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)(_goshippo_components__WEBPACK_IMPORTED_MODULE_2__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({direction:"column",sx:{borderLeft:"solid 4px ".concat(_goshippo_components__WEBPACK_IMPORTED_MODULE_7__.T.borders),px:_goshippo_components__WEBPACK_IMPORTED_MODULE_4__.A.spacing(2)}},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"primary",component:"p",variant:"body"},{children:address.street1})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"primary",component:"p",variant:"body"},{children:"".concat(address.city,", ").concat(address.state||""," ").concat(address.zip)}))]})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_6__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"secondary",component:"h4"},{children:t("orders:addressBook:invalidAddress:mayBeLostMsg")}))]}));return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_libraries_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_0__.l,{actions:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"secondary",onClick:onClose},{children:t("orders:addressBook:invalidAddress:fixAddressBtn")}),0),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_goshippo_components__WEBPACK_IMPORTED_MODULE_8__.A,(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cl)({color:"primary",onClick:onSave},{children:t("orders:addressBook:invalidAddress:saveAnywayBtn")}),1)],content:modalContent,onClose,open:!0,title:t("orders:addressBook:invalidAddress:title")})}},"./app/types/LabelFormat.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,L4:()=>DefaultLabelFormat});var _a,LabelFormat,_assets_icons_print_format_collated_pdf_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/assets/icons/print-format/collated_pdf.svg"),_assets_icons_print_format_combo_ol_ps_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/assets/icons/print-format/combo_ol_ps.svg"),_assets_icons_print_format_label_img_zplii_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/assets/icons/print-format/label_img_zplii.svg"),_assets_icons_print_format_label_pdf_2p3x7p5_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/assets/icons/print-format/label_pdf_2p3x7p5.svg"),_assets_icons_print_format_label_pdf_4x8_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/assets/icons/print-format/label_pdf_4x8.svg"),_assets_icons_print_format_label_pdf_8x11_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/assets/icons/print-format/label_pdf_8x11.svg"),_assets_icons_print_format_label_pdf_a4_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./app/assets/icons/print-format/label_pdf_a4.svg"),_assets_icons_print_format_label_pdf_a6_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./app/assets/icons/print-format/label_pdf_a6.svg"),_assets_icons_print_format_label_pdf_thermal_4x6_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./app/assets/icons/print-format/label_pdf_thermal_4x6.svg"),_assets_icons_print_format_label_png_2p3x7p5_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./app/assets/icons/print-format/label_png_2p3x7p5.svg"),_assets_icons_print_format_label_png_original_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./app/assets/icons/print-format/label_png_original.svg");!function(LabelFormat){LabelFormat.PDF="PDF",LabelFormat.PDF_2_3x7_5="PDF_2.3x7.5",LabelFormat.PDF_4x6="PDF_4x6",LabelFormat.PDF_4x8="PDF_4x8",LabelFormat.PDF_A4="PDF_A4",LabelFormat.PDF_A6="PDF_A6",LabelFormat.PDF_SINGLE_8X11="PDF_SINGLE_8X11",LabelFormat.PDF_W_PSLIP_8x11="PDF_W_PSLIP_8x11",LabelFormat.PDF_W_PSLIP_COLLATED_4x6="PDF_W_PSLIP_COLLATED_4x6",LabelFormat.PDF_W_PSLIP_COLLATED_4x8="PDF_W_PSLIP_COLLATED_4x8",LabelFormat.PDF_W_PSLIP_COLLATED_8x11="PDF_W_PSLIP_COLLATED_8x11",LabelFormat.PNG="PNG",LabelFormat.PNG_2_3x7_5="PNG_2.3x7.5",LabelFormat.ZPLII="ZPLII"}(LabelFormat||(LabelFormat={}));var DefaultLabelFormat=LabelFormat.PDF;(_a={})[LabelFormat.PDF]=_assets_icons_print_format_label_pdf_8x11_svg__WEBPACK_IMPORTED_MODULE_5__,_a[LabelFormat.PDF_2_3x7_5]=_assets_icons_print_format_label_pdf_2p3x7p5_svg__WEBPACK_IMPORTED_MODULE_3__,_a[LabelFormat.PDF_4x6]=_assets_icons_print_format_label_pdf_thermal_4x6_svg__WEBPACK_IMPORTED_MODULE_8__,_a[LabelFormat.PDF_4x8]=_assets_icons_print_format_label_pdf_4x8_svg__WEBPACK_IMPORTED_MODULE_4__,_a[LabelFormat.PDF_A4]=_assets_icons_print_format_label_pdf_a4_svg__WEBPACK_IMPORTED_MODULE_6__,_a[LabelFormat.PDF_A6]=_assets_icons_print_format_label_pdf_a6_svg__WEBPACK_IMPORTED_MODULE_7__,_a[LabelFormat.PDF_SINGLE_8X11]=_assets_icons_print_format_label_pdf_8x11_svg__WEBPACK_IMPORTED_MODULE_5__,_a[LabelFormat.PDF_W_PSLIP_8x11]=_assets_icons_print_format_combo_ol_ps_svg__WEBPACK_IMPORTED_MODULE_1__,_a[LabelFormat.PDF_W_PSLIP_COLLATED_4x6]=_assets_icons_print_format_collated_pdf_svg__WEBPACK_IMPORTED_MODULE_0__,_a[LabelFormat.PDF_W_PSLIP_COLLATED_4x8]=_assets_icons_print_format_collated_pdf_svg__WEBPACK_IMPORTED_MODULE_0__,_a[LabelFormat.PDF_W_PSLIP_COLLATED_8x11]=_assets_icons_print_format_collated_pdf_svg__WEBPACK_IMPORTED_MODULE_0__,_a[LabelFormat.PNG]=_assets_icons_print_format_label_png_original_svg__WEBPACK_IMPORTED_MODULE_10__,_a[LabelFormat.PNG_2_3x7_5]=_assets_icons_print_format_label_png_2p3x7p5_svg__WEBPACK_IMPORTED_MODULE_9__,_a[LabelFormat.ZPLII]=_assets_icons_print_format_label_img_zplii_svg__WEBPACK_IMPORTED_MODULE_2__;const __WEBPACK_DEFAULT_EXPORT__=LabelFormat},"./app/types/Promo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CT:()=>PromoUnitType,el:()=>PromoStatus,yD:()=>fromJSON});var PromoStatus,PromoUnitType,moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js");!function(PromoStatus){PromoStatus.ENDED="ENDED",PromoStatus.PAID="PAID",PromoStatus.PENDING="PENDING",PromoStatus.PROCESSING="PROCESSING"}(PromoStatus||(PromoStatus={})),function(PromoUnitType){PromoUnitType[PromoUnitType.EXTENDED_TRIAL_MONTHS=1]="EXTENDED_TRIAL_MONTHS"}(PromoUnitType||(PromoUnitType={}));var fromJSON=function(jsonPromo){return jsonPromo?{amount:jsonPromo.amount,code:jsonPromo.code,currency:jsonPromo.currency,endDate:moment__WEBPACK_IMPORTED_MODULE_0__(jsonPromo.end_date),isForNewUser:jsonPromo.is_for_new_user,maxAmount:jsonPromo.max_amount,maxUses:jsonPromo.max_uses,minQualifyAmount:jsonPromo.min_qualify_amount,minQualifyUnits:jsonPromo.min_qualify_units,offerText:jsonPromo.offer_text,percentage:jsonPromo.percentage,startDate:moment__WEBPACK_IMPORTED_MODULE_0__(jsonPromo.start_date),status:jsonPromo.status,unitType:jsonPromo.unit_type,units:jsonPromo.units}:null}},"./app/utils/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{In:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.In,Tl:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.Tl,x6:()=>react_i18next__WEBPACK_IMPORTED_MODULE_0__.x6});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js")},"./app/components/AddressValidation/views/InvalidAddressModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Regular:()=>Regular,WithError:()=>WithError,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_components_AddressValidation_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/AddressValidation/utils.ts"),_tests_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/tests/mocks/index.ts"),_utils_translate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/utils/translate.ts"),_InvalidAddressModal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/components/AddressValidation/views/InvalidAddressModal.tsx"),address=(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_1__.$8)();const __WEBPACK_DEFAULT_EXPORT__={argTypes:{onClose:{action:"close"},onSave:{action:"save"}},component:_InvalidAddressModal__WEBPACK_IMPORTED_MODULE_3__.t,title:"Addresses / Validation / InvalidAddressModal"};var TranslatedInvalidAddressModal=(0,_utils_translate__WEBPACK_IMPORTED_MODULE_2__.Tl)("orders")(_InvalidAddressModal__WEBPACK_IMPORTED_MODULE_3__.t),Template=function(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(TranslatedInvalidAddressModal,(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cl)({},args))},Regular=Template.bind({});Regular.args={address};var WithError=Template.bind({});WithError.args={address,validationError:_components_AddressValidation_utils__WEBPACK_IMPORTED_MODULE_0__.c_.ADDRESS_CONFIRMED_INVALID_SECONDARY},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:"args => <TranslatedInvalidAddressModal {...args} />",...Regular.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"args => <TranslatedInvalidAddressModal {...args} />",...WithError.parameters?.docs?.source}}}}}]);