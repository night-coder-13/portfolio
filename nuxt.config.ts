// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BaseUrl: "http://localhost:3000",
      // BaseUrl: "https://laravel-app.liara.run",
    },
  },

  devtools: { enabled: false },

  app: {
    head: {
      title : 'Mehdi - Personal Portfolio | مهدی عباسیان',
      meta: [
        { name: 'description', content: 'سلام مهدی هستم ،برنامه نویس و طراح وبسایت | اصفهان ایران' },
      ],
    },
  },

  modules: ["@nuxt/ui", "nuxt-particles", "@nuxtjs/tailwindcss"],
 
  colorMode: {
    preference: "light",
  },

  css:['~/assets/css/min.css','~/assets/fontawesome/css/all.min.css'],
  compatibilityDate: "2025-01-13"
});