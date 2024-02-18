// process.env.STRAPI_URL = "https://jbr-portfolio-strapi-fljcfjbucq-ew.a.run.app";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@nuxt/image-edge", "@nuxt/image"],
  //@ts-ignore
  runtimeConfig: {
    strapi: {
      url: process.env.STRAPI_URL || "http://127.0.0.1:1337",
    },
    public: {
      strapi: {
        url: process.env.STRAPI_URL || "http://127.0.0.1:1337",
      },
    },
  },
  image: {
    strapi: {
      baseURL: process.env.STRAPI_URL || "http://127.0.0.1:1337",
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://127.0.0.1:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
