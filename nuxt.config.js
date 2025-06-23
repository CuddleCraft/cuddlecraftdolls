export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      cosmicBucket: process.env.COSMIC_BUCKET,
      cosmicReadKey: process.env.COSMIC_READ_KEY,
    }
  }
}) 