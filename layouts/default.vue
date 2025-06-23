<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div class="text-center">
        <!-- Logo with pulse animation -->
        <div class="relative mb-8">
          <img 
            src="/logo.jpeg" 
            alt="CuddleCraft Dolls Logo" 
            class="h-24 w-24 rounded-2xl shadow-2xl mx-auto animate-pulse"
          >
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-200/30 to-purple-200/30 animate-ping"></div>
        </div>
        
        <!-- Loading text with gradient -->
        <h2 class="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          CuddleCraft Dolls
        </h2>
        
        <!-- Loading dots -->
        <div class="flex justify-center space-x-2">
          <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
          <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
        </div>
        
        <!-- Loading text -->
        <p class="text-gray-600 mt-4 text-sm">Loading your magical experience...</p>
      </div>
    </div>

    <!-- Main Content with Pop-in Animation -->
    <div v-show="!isLoading" class="animate-fadeIn">
      <Navbar />
      <main class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <slot />
      </main>
      <footer class="bg-white mt-12 rounded-t-2xl">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-gray-500">
            © 2024 CuddleCraft Dolls. All rights reserved.
          </p>
        </div>
      </footer>
    </div>

    <!-- Global Toast Component -->
    <Toast />
  </div>
</template>

<script setup>
import { createBucketClient } from '@cosmicjs/sdk';
import { ref, onMounted } from 'vue'

const mainstore = useMainstore()
const isLoading = ref(true)

const cosmic =  createBucketClient({
  bucketSlug:  'cuddlecraft-dolls-production',
  readKey: 'XFZOllPkfrepEdeDn3EJzoz8d90SdfVV0AD9Bh0CcfkZXMTvjJ',
});


// Fetch all data with loading state
const fetchData = async () => {
  try {
    // Fetch data sequentially for clarity
   mainstore.dolls = await cosmic.objects.find({ type: 'dolls' })
    mainstore.collections = await cosmic.objects.find({ type: 'collections' })
    mainstore.site_infos = await cosmic.objects.find({ type: 'site-infos' })
    // mainstore.reviews = await cosmic.objects.find({ type: 'reviews' })

    mainstore.dolls = mainstore.dolls.objects
    mainstore.collections = mainstore.collections.objects
    mainstore.site_infos = mainstore.site_infos.objects[0]
    // Store data in Pinia store

    console.log('Dolls:', mainstore.dolls   )
    console.log('Collections:', mainstore.collections)
    console.log('Site Infos:', mainstore.site_infos)

    // Add a small delay for smooth transition
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Hide loading screen
    isLoading.value = false

  } catch (error) {
    console.error('Error fetching data:', error)
    // Set empty arrays as fallback
    mainstore.dolls = []
    mainstore.collections = []
    mainstore.site_infos = []
    mainstore.reviews = []
    
    // Still hide loading screen even if there's an error
    isLoading.value = false
  }
}

// Start fetching data when component mounts
onMounted(async () => {
  await fetchData()
})

function getImage(URL) {
  return `${URL}?w=500&auto=format,compression`
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Custom bounce animation for loading dots */
@keyframes customBounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounce {
  animation: customBounce 1.4s ease-in-out infinite both;
}
</style>