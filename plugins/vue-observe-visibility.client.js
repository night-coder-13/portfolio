// plugins/vue-observe-visibility.client.js
import { defineNuxtPlugin } from '#app';
import { ref } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe-visibility', {
      mounted(el, binding) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            binding.value(entry.isIntersecting);
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      },
      unmounted(el){
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            binding.value(entry.isIntersecting);
          });
        }, { threshold: 0.1 });
        observer.unobserve(el);
      }
    });
});
