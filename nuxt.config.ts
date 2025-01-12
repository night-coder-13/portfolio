// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
    },
  },
  modules: ["@nuxt/ui" , "nuxt-particles"],
  colorMode: {
    preference: "light",
  },
  css:['~/assets/css/min.css']
 
});
