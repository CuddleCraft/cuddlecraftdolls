// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // Global SEO Configuration
  app: {
    head: {
      // Global meta tags
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Global SEO
        { name: 'author', content: 'CuddleCraft Dolls' },
        { name: 'theme-color', content: '#ec4899' },
        { name: 'msapplication-TileColor', content: '#ec4899' },
        
        // Apple specific
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'CuddleCraft Dolls' },
        
        // Default Open Graph
        { property: 'og:site_name', content: 'CuddleCraft Dolls' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        
        // Default Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@cuddlecraftdolls' },
        
        // Security
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
        { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' }
      ],
      
      // Global link tags
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ec4899' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      
      // Global script tags
      script: [
        // Google Analytics (replace with your GA4 ID)
        // {
        //   src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
        //   async: true
        // },
        // {
        //   children: `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'GA_MEASUREMENT_ID');
        //   `
        // }
      ]
    }
  },
  
  // SEO Module Configuration
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  
  // Runtime Config
  runtimeConfig: {
    public: {
      siteUrl: 'https://cuddlecraftdolls.com',
      siteName: 'CuddleCraft Dolls',
      siteDescription: 'Premium handcrafted silicone baby dolls'
    }
  },
  
  // Build Configuration
  build: {
    transpile: ['@cosmicjs/sdk']
  },
  
  // CSS
  css: ['~/assets/css/main.css'],
  
  // PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Vite Configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
