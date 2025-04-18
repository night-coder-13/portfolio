import { defineNuxtPlugin } from '#app'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
// import 'vue3-persian-datetime-picker/dist/style.css'
// import 'vue3-persian-datetime-picker/vue3-persian-datetime-picker.css'
// import 'vue3-persian-datetime-picker/src/picker/assets/scss/style.scss'


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Datepicker', Vue3PersianDatetimePicker)
})
