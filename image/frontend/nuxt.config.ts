// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // devServer: { port: 3005, host: '0.0.0.0' },
  // runtimeConfig: { apiURL: 'http://localhost:31244/v1' },
  runtimeConfig: {
    apiSecret: 'my-secret-u-tell-no-one',
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY
    }

  }
},
)
