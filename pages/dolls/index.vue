<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Our Dolls
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our handcrafted silicone dolls, each with unique features and lifelike details.
        </p>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- Search -->
          <div class="relative w-full md:w-96">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search dolls..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <!-- Collection Filter -->
          <div class="flex gap-2">
            <button 
              @click="selectedCollection = null"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                selectedCollection === null 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              All Collections
            </button>
            <button 
              v-for="collection in mainstore.collections" 
              :key="collection.slug"
              @click="selectedCollection = collection.slug"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                selectedCollection === collection.slug 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ collection.title }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dolls Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="mainstore.dolls.length === 0" class="text-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p class="text-gray-600">Loading dolls...</p>
        </div>

        <!-- Results Count -->
        <div v-else class="mb-8">
          <p class="text-gray-600">
            Showing {{ filteredDolls.length }} of {{ mainstore.dolls.length }} dolls
          </p>
        </div>

        <!-- Dolls Grid -->
        <div v-if="filteredDolls.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="doll in filteredDolls" :key="doll.slug" 
               class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
            <!-- Doll Image -->
            <div class="relative h-80 overflow-hidden">
              <img 
                :src="getImage(doll.metadata.image_1.imgix_url)" 
                :alt="doll.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              
              <!-- Collection Badge -->
              <div v-if="doll.metadata.collection" class="absolute top-4 left-4">
                <span class="text-xs text-white bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                  {{ doll.metadata.collection.title }}
                </span>
              </div>

              <!-- Availability Badge -->
              <div class="absolute top-4 right-4">
                <span class="text-xs text-white px-2 py-1 rounded-full backdrop-blur-sm"
                      :class="{
                        'bg-green-500/80': doll.metadata.avaibility?.value === 'In Stock',
                        'bg-red-500/80': doll.metadata.avaibility?.value !== 'In Stock'
                      }">
                  {{ doll.metadata.avaibility?.value || 'Check Availability' }}
                </span>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <!-- Quick View Button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NuxtLink 
                  :to="`/dolls/${doll.slug}`"
                  class="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>

            <!-- Doll Info -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                  {{ doll.title }}
                </h3>
                <span v-if="doll.metadata.model_code" class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {{ doll.metadata.model_code }}
                </span>
              </div>
              
              <!-- Price -->
              <div class="flex justify-between items-center mb-4">
                <span class="text-2xl font-bold text-gray-900">${{ doll.metadata.price?.toLocaleString() }}</span>
                <span class="text-sm text-gray-500">{{ doll.metadata.collection?.title || 'Premium Doll' }}</span>
              </div>

              <!-- Description Preview -->
              <p class="text-gray-600 text-sm mb-4 line-clamp-2" v-html="stripHtml(doll.metadata.description)"></p>

              <!-- Action Buttons -->
              <div class="flex gap-3">
                <NuxtLink 
                  :to="`/dolls/${doll.slug}`"
                  class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>View Details</span>
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
                
                <button 
                  @click="addToCart(doll)"
                  class="px-4 py-3 bg-white border-2 border-pink-500 text-pink-600 font-medium rounded-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No Dolls Found</h3>
          <p class="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const mainstore = useMainstore()
const searchQuery = ref('')
const selectedCollection = ref(null)

// Helper function for image optimization
function getImage(URL) {
  return `${URL}?w=500&auto=format,compression`
}

// Helper function to strip HTML tags from description
function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
}

// Add to cart function
async function addToCart(doll) {
  mainstore.addToCart(doll)
  
  // Get toast instance
  const { $toast } = useNuxtApp()
  
  // Show success toast
  $toast.addToast({
    type: 'success',
    title: 'Added to Cart!',
    message: `${doll.title} has been added to your cart successfully.`,
    duration: 3000
  })
  
  // Redirect to cart page after a short delay
  setTimeout(() => {
    navigateTo('/cart')
  }, 1500)
}

// Filtered dolls based on search and collection
const filteredDolls = computed(() => {
  let dolls = mainstore.dolls

  // Filter by collection
  if (selectedCollection.value) {
    dolls = dolls.filter(doll => doll.metadata.collection?.slug === selectedCollection.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    dolls = dolls.filter(doll => 
      doll.title.toLowerCase().includes(query) ||
      doll.metadata.model_code?.toLowerCase().includes(query) ||
      doll.metadata.collection?.title.toLowerCase().includes(query)
    )
  }

  return dolls
})

// Set page metadata
useHead({
  title: 'Our Dolls - Premium Silicone Baby Dolls Collection | CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { name: 'description', content: 'Browse our complete collection of premium silicone baby dolls. Each doll features lifelike details, premium materials, and handcrafted quality. Find your perfect companion today.' },
    { name: 'keywords', content: 'silicone baby dolls, doll collection, premium dolls, lifelike dolls, baby dolls for sale, CuddleCraft dolls' },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Our Dolls - Premium Silicone Baby Dolls Collection | CuddleCraft Dolls' },
    { property: 'og:description', content: 'Browse our complete collection of premium silicone baby dolls. Each doll features lifelike details, premium materials, and handcrafted quality.' },
    { property: 'og:url', content: 'https://cuddlecraftdolls.com/dolls' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'CuddleCraft Dolls Collection' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Dolls - Premium Silicone Baby Dolls Collection | CuddleCraft Dolls' },
    { name: 'twitter:description', content: 'Browse our complete collection of premium silicone baby dolls with lifelike details.' },
    { name: 'twitter:image', content: '/logo.jpeg' },
    { name: 'twitter:image:alt', content: 'CuddleCraft Dolls Collection' },
    
    // Canonical URL
    { rel: 'canonical', href: 'https://cuddlecraftdolls.com/dolls' }
  ],
  
  // Structured Data
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Our Dolls Collection',
        description: 'Complete collection of premium silicone baby dolls',
        url: 'https://cuddlecraftdolls.com/dolls',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: mainstore.dolls.map((doll, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Product',
              name: doll.title,
              description: doll.metadata.description,
              url: `https://cuddlecraftdolls.com/dolls/${doll.slug}`,
              image: doll.metadata.image_1?.imgix_url,
              brand: {
                '@type': 'Brand',
                name: 'CuddleCraft Dolls'
              },
              offers: {
                '@type': 'Offer',
                price: doll.metadata.price,
                priceCurrency: 'USD',
                availability: doll.metadata.avaibility?.value === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
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
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 