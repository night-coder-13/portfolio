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
    },
  },

  modules: ["@nuxt/ui", "nuxt-particles", "@nuxt/image"],
  image: {
    provider: 'vercel', // یا 'cloudinary', 'imgix' ...  بسته به provider ای که استفاده می کنید
    // ... سایر پیکربندی ها
  },
  colorMode: {
    preference: "light",
  },

  css:['~/assets/css/min.css'],
  compatibilityDate: "2025-01-13"
});