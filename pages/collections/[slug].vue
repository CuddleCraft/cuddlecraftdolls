<template>
  <div>
    <!-- Loading State -->
    <div v-if="!collection" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading collection...</p>
      </div>
    </div>

    <!-- Collection Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img 
            :src="getImage(collection.metadata.image.imgix_url)" 
            :alt="collection.title" 
            class="w-full h-full object-cover"
          >
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <!-- Content -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div class="space-y-6">
            <!-- Color Accent -->
            <div class="flex justify-center">
              <div class="w-6 h-6 rounded-full shadow-lg bg-pink-500"></div>
            </div>

            <!-- Title -->
            <h1 class="text-5xl md:text-7xl font-bold leading-tight">
              {{ collection.title }}
            </h1>

            <!-- Description -->
            <p v-if="collection.metadata.description" class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {{ collection.metadata.description }}
            </p>

            <!-- Collection Stats -->
            <div class="flex flex-wrap justify-center gap-8 text-white/80">
              <div class="text-center">
                <div class="text-2xl font-bold text-pink-300">{{ dollsInCollection.length }}</div>
                <div class="text-sm">Dolls Available</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-300">Premium</div>
                <div class="text-sm">Quality</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-pink-300">Handcrafted</div>
                <div class="text-sm">With Love</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Dolls in Collection -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Dolls in {{ collection.title }}
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the beautiful dolls in this collection, each crafted with premium materials and attention to detail.
            </p>
          </div>

          <!-- Loading State for Dolls -->
          <div v-if="mainstore.dolls.length === 0" class="text-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p class="text-gray-600">Loading dolls...</p>
          </div>

          <!-- No Dolls Found -->
          <div v-else-if="dollsInCollection.length === 0" class="text-center py-20">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">No Dolls Found</h3>
            <p class="text-gray-600">We're adding dolls to this collection soon!</p>
          </div>

          <!-- Dolls Grid -->
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="doll in dollsInCollection" :key="doll.slug" 
                 class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
              <!-- Doll Image -->
              <div class="relative h-80 overflow-hidden">
                <img 
                  :src="getImage(doll.metadata.image_1.imgix_url)" 
                  :alt="doll.title" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
                
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
                  <span class="text-sm text-gray-500">{{ collection.title }}</span>
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
        </div>
      </section>

      <!-- Back to Collections -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NuxtLink 
            to="/collections"
            class="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Back to All Collections</span>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const mainstore = useMainstore()

// Get collection slug from route
const slug = route.params.slug

// Find the specific collection
const collection = ref(null)
collection.value = mainstore.collections.filter(c => c.slug === slug)[0]
// console.log(collection.value)
// Get dolls that belong to this collection
const dollsInCollection = computed(() => {
  if (!collection) return []
  return mainstore.dolls.filter(doll => 
    doll.metadata.collection === collection.value.id
  )
})

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

// Set page metadata
useHead(() => ({
  title: collection.value ? `${collection.value.title} Collection - Premium Silicone Baby Dolls | CuddleCraft Dolls` : 'Collection - CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { 
      name: 'description', 
      content: collection.value ? `Explore the ${collection.value.title} collection featuring premium silicone baby dolls. ${collection.value.metadata.description || 'Each doll is handcrafted with love and attention to detail.'} Shop the complete collection at CuddleCraft Dolls.` : 'Premium silicone baby doll collection.' 
    },
    { 
      name: 'keywords', 
      content: collection.value ? `${collection.value.title}, doll collection, silicone baby dolls, premium dolls, ${collection.value.title} dolls, CuddleCraft collection` : 'doll collection, silicone baby dolls, CuddleCraft'
    },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: collection.value ? `${collection.value.title} Collection - Premium Silicone Baby Dolls | CuddleCraft Dolls` : 'Premium Silicone Baby Doll Collection | CuddleCraft Dolls' },
    { property: 'og:description', content: collection.value ? `Explore the ${collection.value.title} collection featuring premium silicone baby dolls. ${collection.value.metadata.description || 'Each doll is handcrafted with love and attention to detail.'}` : 'Premium silicone baby doll collection.' },
    { property: 'og:url', content: collection.value ? `https://cuddlecraftdolls.com/collections/${collection.value.slug}` : 'https://cuddlecraftdolls.com/collections' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: collection.value?.metadata.image?.imgix_url || '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: collection.value ? `${collection.value.title} Collection` : 'CuddleCraft Doll Collection' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: collection.value ? `${collection.value.title} Collection - Premium Silicone Baby Dolls | CuddleCraft Dolls` : 'Premium Silicone Baby Doll Collection | CuddleCraft Dolls' },
    { name: 'twitter:description', content: collection.value ? `Explore the ${collection.value.title} collection featuring premium silicone baby dolls.` : 'Premium silicone baby doll collection.' },
    { name: 'twitter:image', content: collection.value?.metadata.image?.imgix_url || '/logo.jpeg' },
    { name: 'twitter:image:alt', content: collection.value ? `${collection.value.title} Collection` : 'CuddleCraft Doll Collection' },
    
    // Canonical URL
    { rel: 'canonical', href: collection.value ? `https://cuddlecraftdolls.com/collections/${collection.value.slug}` : 'https://cuddlecraftdolls.com/collections' }
  ],
  
  // Structured Data
  script: collection.value ? [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Collection',
        name: `${collection.value.title} Collection`,
        description: collection.value.metadata.description || `Premium silicone baby dolls from the ${collection.value.title} collection`,
        url: `https://cuddlecraftdolls.com/collections/${collection.value.slug}`,
        image: collection.value.metadata.image?.imgix_url,
        brand: {
          '@type': 'Brand',
          name: 'CuddleCraft Dolls'
        },
        hasPart: dollsInCollection.value.map(doll => ({
          '@type': 'Product',
          name: doll.title,
          url: `https://cuddlecraftdolls.com/dolls/${doll.slug}`,
          image: doll.metadata.image_1?.imgix_url,
          offers: {
            '@type': 'Offer',
            price: doll.metadata.price,
            priceCurrency: 'USD',
            availability: doll.metadata.avaibility?.value === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
          }
        }))
      })
    }
  ] : []
}))

// Handle 404 if collection not found
if (!collection.value && mainstore.collections.length > 0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Collection not found'
  })
}
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