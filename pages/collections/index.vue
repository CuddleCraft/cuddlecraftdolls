<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Our Collections
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our carefully curated collections of premium silicone dolls, each crafted with love and attention to detail.
        </p>
      </div>
    </section>


    <!-- Collections Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    


        <!-- Loading State -->
        <div v-if="mainstore.collections.length === 0" class="text-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p class="text-gray-600">Loading collections...</p>
        </div>

        

        <!-- Collections Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="collection in mainstore.collections" :key="collection.slug" 
               class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
            <!-- Collection Image -->
            <div class="relative h-80 overflow-hidden">
              <img 
                :src="getImage(collection.metadata.image.imgix_url)" 
                :alt="collection.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
              
              <!-- Color Accent Badge -->
              <div class="absolute top-4 right-4">
                <span class="text-xs text-white bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                  Collection
                </span>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <!-- Collection Info -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                {{ collection.title }}
              </h3>
              <p v-if="collection.metadata.description" class="text-gray-200 text-sm mb-4 line-clamp-2">
                {{ collection.metadata.description }}
              </p>
              <p v-else class="text-gray-300 text-sm mb-4 italic">
                Premium silicone dolls crafted with love
              </p>
              
              <!-- CTA Button -->
              <NuxtLink 
                :to="`/collections/${collection.slug}`"
                class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/30 transition-all duration-300 group-hover:bg-pink-500 group-hover:shadow-lg"
              >
                <span>Explore Collection</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>

            <!-- Floating Elements -->
            <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="mainstore.collections.length === 0 && !isLoading" class="text-center py-20">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No Collections Found</h3>
          <p class="text-gray-600">We're working on bringing you amazing collections soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const mainstore = useMainstore()

// Helper function for image optimization
function getImage(URL) {
  return `${URL}?w=500&auto=format,compression`
}

// Set page metadata
useHead({
  title: 'Collections - Premium Silicone Baby Doll Collections | CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { name: 'description', content: 'Explore our carefully curated collections of premium silicone baby dolls. Each collection features unique designs, themes, and handcrafted quality. Find your perfect collection today.' },
    { name: 'keywords', content: 'doll collections, silicone baby doll collections, premium doll collections, themed dolls, CuddleCraft collections' },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Collections - Premium Silicone Baby Doll Collections | CuddleCraft Dolls' },
    { property: 'og:description', content: 'Explore our carefully curated collections of premium silicone baby dolls. Each collection features unique designs, themes, and handcrafted quality.' },
    { property: 'og:url', content: 'https://cuddlecraftdolls.com/collections' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'CuddleCraft Doll Collections' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Collections - Premium Silicone Baby Doll Collections | CuddleCraft Dolls' },
    { name: 'twitter:description', content: 'Explore our carefully curated collections of premium silicone baby dolls with unique designs and themes.' },
    { name: 'twitter:image', content: '/logo.jpeg' },
    { name: 'twitter:image:alt', content: 'CuddleCraft Doll Collections' },
    
    // Canonical URL
    { rel: 'canonical', href: 'https://cuddlecraftdolls.com/collections' }
  ],
  
  // Structured Data
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Doll Collections',
        description: 'Curated collections of premium silicone baby dolls',
        url: 'https://cuddlecraftdolls.com/collections',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: mainstore.collections.map((collection, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Collection',
              name: collection.title,
              description: collection.metadata.description,
              url: `https://cuddlecraftdolls.com/collections/${collection.slug}`,
              image: collection.metadata.image?.imgix_url,
              brand: {
                '@type': 'Brand',
                name: 'CuddleCraft Dolls'
              }
            }
          }))
        }
      })
    }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 