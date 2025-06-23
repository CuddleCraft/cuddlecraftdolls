<template>
  <div>
    <!-- Loading State -->
    <div v-if="!doll" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading doll details...</p>
      </div>
    </div>

    <!-- Doll Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img 
            :src="getImage(doll.metadata.image_1.imgix_url)" 
            :alt="doll.title" 
            class="w-full h-full object-cover"
          >
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <!-- Content -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div class="space-y-6">
            <!-- Collection Badge -->
            <div v-if="doll.metadata.collection" class="flex justify-center">
              <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span class="text-sm font-medium text-white">{{ doll.metadata.collection.title }}</span>
              </div>
            </div>

            <!-- Title -->
            <h1 class="text-5xl md:text-7xl font-bold leading-tight">
              {{ doll.title }}
            </h1>

            <!-- Model Code -->
            <div v-if="doll.metadata.model_code" class="text-xl text-gray-200">
              Model: {{ doll.metadata.model_code }}
            </div>

            <!-- Price -->
            <div class="text-3xl font-bold text-pink-300">
              ${{ doll.metadata.price?.toLocaleString() }}
            </div>

            <!-- Availability -->
            <div class="flex justify-center">
              <span class="text-lg px-4 py-2 rounded-full backdrop-blur-sm"
                    :class="{
                      'bg-green-500/80 text-white': doll.metadata.avaibility?.value === 'In Stock',
                      'bg-red-500/80 text-white': doll.metadata.avaibility?.value !== 'In Stock'
                    }">
                {{ doll.metadata.avaibility?.value || 'Check Availability' }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Doll Details -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Image Gallery -->
            <div class="space-y-6">
              <!-- Main Image -->
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  :src="getImage(doll.metadata.image_1.imgix_url)" 
                  :alt="doll.title" 
                  class="w-full h-96 object-cover"
                >
              </div>

              <!-- Carousel Images -->
              <div v-if="doll.metadata.carousel_images && doll.metadata.carousel_images.length > 0" class="grid grid-cols-3 gap-4">
                <div v-for="(carouselImage, index) in doll.metadata.carousel_images" :key="index" 
                     class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                  <img 
                    :src="getImage(carouselImage.image.imgix_url)" 
                    :alt="`${doll.title} - Image ${index + 1}`" 
                    class="w-full h-24 object-cover"
                  >
                </div>
              </div>
            </div>

            <!-- Doll Information -->
            <div class="space-y-8">
              <!-- Basic Info -->
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Product Details</h2>
                <div class="space-y-4">
                  <div class="flex justify-between items-center py-3 border-b border-gray-200">
                    <span class="text-gray-600">Name:</span>
                    <span class="font-semibold">{{ doll.title }}</span>
                  </div>
                  <div v-if="doll.metadata.model_code" class="flex justify-between items-center py-3 border-b border-gray-200">
                    <span class="text-gray-600">Model Code:</span>
                    <span class="font-semibold">{{ doll.metadata.model_code }}</span>
                  </div>
                  <div class="flex justify-between items-center py-3 border-b border-gray-200">
                    <span class="text-gray-600">Price:</span>
                    <span class="text-2xl font-bold text-pink-600">${{ doll.metadata.price?.toLocaleString() }}</span>
                  </div>
                  <div class="flex justify-between items-center py-3 border-b border-gray-200">
                    <span class="text-gray-600">Availability:</span>
                    <span :class="{
                      'text-green-600 font-semibold': doll.metadata.avaibility?.value === 'In Stock',
                      'text-red-600 font-semibold': doll.metadata.avaibility?.value !== 'In Stock'
                    }">
                      {{ doll.metadata.avaibility?.value || 'Check Availability' }}
                    </span>
                  </div>
                  <div v-if="doll.metadata.collection" class="flex justify-between items-center py-3 border-b border-gray-200">
                    <span class="text-gray-600">Collection:</span>
                    <NuxtLink 
                      :to="`/collections/${doll.metadata.collection.slug}`"
                      class="font-semibold text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      {{ doll.metadata.collection.title }}
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                <div class="prose prose-pink max-w-none" v-html="doll.metadata.description"></div>
              </div>

              <!-- CTA Buttons -->
              <div class="space-y-4">
                <button 
                  @click="addToCart(doll)"
                  class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    Add to Cart
                  </span>
                </button>
                <NuxtLink 
                  to="/contact"
                  class="w-full border-2 border-pink-500 text-pink-600 font-semibold py-4 rounded-xl hover:bg-pink-50 transition-all duration-300 flex items-center justify-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Contact for Custom Order
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Dolls -->
      <section v-if="relatedDolls.length > 0" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Related Dolls</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="relatedDoll in relatedDolls" :key="relatedDoll.slug" 
                 class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
              <!-- Doll Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="getImage(relatedDoll.metadata.image_1.imgix_url)" 
                  :alt="relatedDoll.title" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
              </div>

              <!-- Doll Info -->
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {{ relatedDoll.title }}
                </h3>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-xl font-bold text-gray-900">${{ relatedDoll.metadata.price?.toLocaleString() }}</span>
                  <NuxtLink 
                    :to="`/dolls/${relatedDoll.slug}`"
                    class="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    View Details
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Back to Dolls -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NuxtLink 
            to="/dolls"
            class="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Back to All Dolls</span>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const mainstore = useMainstore()

// Get doll slug from route
const slug = route.params.slug

// Find the specific doll
const doll = computed(() => {
  return mainstore.dolls.find(d => d.slug === slug)
})

// Get related dolls (same collection, excluding current doll)
const relatedDolls = computed(() => {
  if (!doll.value || !doll.value.metadata.collection) return []
  return mainstore.dolls
    .filter(d => 
      d.slug !== doll.value.slug && 
      d.metadata.collection?.slug === doll.value.metadata.collection.slug
    )
    .slice(0, 4) // Show max 4 related dolls
})

// Helper function for image optimization
function getImage(URL) {
  return `${URL}?w=800&auto=format,compression`
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
  title: doll.value ? `${doll.value.title} - Premium Silicone Baby Doll | CuddleCraft Dolls` : 'Doll - CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { 
      name: 'description', 
      content: doll.value ? `Discover ${doll.value.title}, a premium silicone baby doll with lifelike details. ${doll.value.metadata.description ? doll.value.metadata.description.replace(/<[^>]*>/g, '').substring(0, 150) : 'Handcrafted with love and attention to detail.'} Shop now at CuddleCraft Dolls.` : 'Premium silicone baby doll with lifelike details.' 
    },
    { 
      name: 'keywords', 
      content: doll.value ? `${doll.value.title}, silicone baby doll, premium doll, lifelike doll, ${doll.value.metadata.collection?.title || 'CuddleCraft'}, baby doll for sale` : 'silicone baby doll, premium doll, CuddleCraft'
    },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'product' },
    { property: 'og:title', content: doll.value ? `${doll.value.title} - Premium Silicone Baby Doll | CuddleCraft Dolls` : 'Premium Silicone Baby Doll | CuddleCraft Dolls' },
    { property: 'og:description', content: doll.value ? `Discover ${doll.value.title}, a premium silicone baby doll with lifelike details. ${doll.value.metadata.description ? doll.value.metadata.description.replace(/<[^>]*>/g, '').substring(0, 200) : 'Handcrafted with love and attention to detail.'}` : 'Premium silicone baby doll with lifelike details.' },
    { property: 'og:url', content: doll.value ? `https://cuddlecraftdolls.com/dolls/${doll.value.slug}` : 'https://cuddlecraftdolls.com/dolls' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: doll.value?.metadata.image_1?.imgix_url || '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: doll.value ? doll.value.title : 'CuddleCraft Doll' },
    
    // Product specific Open Graph
    { property: 'product:price:amount', content: doll.value?.metadata.price?.toString() || '' },
    { property: 'product:price:currency', content: 'USD' },
    { property: 'product:availability', content: doll.value?.metadata.avaibility?.value === 'In Stock' ? 'in stock' : 'out of stock' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: doll.value ? `${doll.value.title} - Premium Silicone Baby Doll | CuddleCraft Dolls` : 'Premium Silicone Baby Doll | CuddleCraft Dolls' },
    { name: 'twitter:description', content: doll.value ? `Discover ${doll.value.title}, a premium silicone baby doll with lifelike details.` : 'Premium silicone baby doll with lifelike details.' },
    { name: 'twitter:image', content: doll.value?.metadata.image_1?.imgix_url || '/logo.jpeg' },
    { name: 'twitter:image:alt', content: doll.value ? doll.value.title : 'CuddleCraft Doll' },
    
    // Canonical URL
    { rel: 'canonical', href: doll.value ? `https://cuddlecraftdolls.com/dolls/${doll.value.slug}` : 'https://cuddlecraftdolls.com/dolls' }
  ],
  
  // Structured Data
  script: doll.value ? [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: doll.value.title,
        description: doll.value.metadata.description ? doll.value.metadata.description.replace(/<[^>]*>/g, '') : 'Premium silicone baby doll with lifelike details',
        url: `https://cuddlecraftdolls.com/dolls/${doll.value.slug}`,
        image: doll.value.metadata.image_1?.imgix_url,
        brand: {
          '@type': 'Brand',
          name: 'CuddleCraft Dolls'
        },
        category: doll.value.metadata.collection?.title || 'Premium Dolls',
        sku: doll.value.metadata.model_code,
        mpn: doll.value.metadata.model_code,
        offers: {
          '@type': 'Offer',
          price: doll.value.metadata.price,
          priceCurrency: 'USD',
          availability: doll.value.metadata.avaibility?.value === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          seller: {
            '@type': 'Organization',
            name: 'CuddleCraft Dolls'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '50'
        }
      })
    }
  ] : []
}))

// Handle 404 if doll not found
if (!doll.value && mainstore.dolls.length > 0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Doll not found'
  })
}
</script>

<style scoped>
.prose {
  color: #374151;
  line-height: 1.6;
}

.prose :deep(p) {
  margin-bottom: 1rem;
}

.prose :deep(ul) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(strong) {
  font-weight: 600;
  color: #1f2937;
}
</style> 