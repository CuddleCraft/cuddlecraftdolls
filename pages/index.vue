<template>
  <div>
    <!-- Enhanced Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background with multiple layers -->
      <div class="absolute inset-0">
        <!-- Main background image -->
        <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3" 
             alt="Hero background" 
             class="w-full h-full object-cover">
        <!-- Gradient overlays -->
        <div class="absolute inset-0 bg-gradient-to-br from-pink-900/60 via-purple-900/50 to-indigo-900/70"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        <!-- Floating elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-pink-200/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-40 left-1/4 w-16 h-16 bg-blue-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span class="text-pink-200 text-sm font-medium">✨ Premium Quality</span>
          </div>

          <!-- Main heading -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span class="block bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent">
              Handcrafted
            </span>
            <span class="block text-white mt-2">Silicone Dolls</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of premium, lifelike silicone baby dolls, 
            <span class="text-pink-200 font-semibold">crafted with love</span> and attention to detail.
          </p>

          <!-- Features -->
          <div class="flex flex-wrap justify-center gap-6 text-white/80">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Premium Materials</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Handcrafted</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Lifelike Details</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink to="/dolls" 
                     class="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span class="relative z-10">Shop Collection</span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <button class="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                </svg>
                <span>Watch Video</span>
              </span>
            </button>
          </div>

          <!-- Scroll indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Collections Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Collections
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of premium silicone dolls, each crafted with love and attention to detail.
          </p>
        </div>
        
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
              <div class="absolute top-4 right-4 flex items-center space-x-2">
                <div class="w-4 h-4 rounded-full shadow-lg" 
                     :style="{ backgroundColor: collection.metadata.color }"></div>
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
        
        <!-- View All Collections Button -->
        <div class="text-center mt-12">
          <NuxtLink 
            to="/collections"
            class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Collections</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Dolls Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Dolls
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted silicone dolls, each with unique features and lifelike details.
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="mainstore.dolls.length === 0" class="text-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p class="text-gray-600">Loading dolls...</p>
        </div>

        <!-- Dolls Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="doll in mainstore.dolls.slice(0, 8)" :key="doll.slug" 
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

        <!-- View All Dolls Button -->
        <div class="text-center mt-12">
          <NuxtLink 
            to="/dolls"
            class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Dolls</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div class="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Get in Touch
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Have questions about our dolls or want to place a custom order? We'd love to hear from you.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Company Info -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 animate-bounce-slow">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">{{ mainstore.site_infos?.metadata?.site_name || 'CuddleCraft Dolls' }}</h3>
                  <p class="text-gray-600">Premium Silicone Dolls</p>
                </div>
              </div>
              
              <p class="text-gray-600 leading-relaxed">
                {{ mainstore.site_infos?.metadata?.site_description || 'Welcome to CuddleCraft Dolls, where lifelike artistry meets heartfelt connection.' }}
              </p>
            </div>

            <!-- Contact Details -->
            <div class="space-y-6">
              <!-- Email -->
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left delay-300">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 animate-pulse">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Email</h4>
                    <a :href="`mailto:${mainstore.site_infos?.metadata?.email}`" 
                       class="text-pink-600 hover:text-pink-700 transition-colors">
                      {{ mainstore.site_infos?.metadata?.email || 'contact@cuddlecraftdolls.com' }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Phone Numbers -->
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left delay-400">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 animate-pulse delay-1000">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Phone</h4>
                    <p class="text-gray-600">Call us anytime</p>
                  </div>
                </div>
                <div class="space-y-2 ml-14">
                  <a :href="`tel:${mainstore.site_infos?.metadata?.phone_number_1}`" 
                     class="block text-pink-600 hover:text-pink-700 transition-colors">
                    {{ mainstore.site_infos?.metadata?.phone_number_1 || '+1 (714) 582-3097' }}
                  </a>
                  <a v-if="mainstore.site_infos?.metadata?.phone_number_2" 
                     :href="`tel:${mainstore.site_infos?.metadata?.phone_number_2}`" 
                     class="block text-pink-600 hover:text-pink-700 transition-colors">
                    {{ mainstore.site_infos?.metadata?.phone_number_2 }}
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left delay-500">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1 animate-pulse delay-2000">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Address</h4>
                    <div class="text-gray-600 space-y-1">
                      <p>{{ mainstore.site_infos?.metadata?.address?.line_1 || '1423 Willow Creek Lane' }}</p>
                      <p>{{ mainstore.site_infos?.metadata?.address?.line_2 || 'Springfield' }}</p>
                      <p>{{ mainstore.site_infos?.metadata?.address?.line_3 || 'OH 45503' }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left delay-600">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 animate-pulse delay-3000">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Follow Us</h4>
                    <p class="text-gray-600">Stay connected</p>
                  </div>
                </div>
                <div class="flex space-x-4 ml-14">
                  <a v-if="mainstore.site_infos?.metadata?.instagram" 
                     :href="mainstore.site_infos.metadata.instagram" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a v-if="mainstore.site_infos?.metadata?.facebook" 
                     :href="mainstore.site_infos.metadata.facebook" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Section -->
          <div class="space-y-6">
            <!-- Map -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right">
              <div class="p-6 border-b border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p class="text-gray-600">Visit us or get directions</p>
              </div>
              <div class="relative h-96">
                <div v-if="mainstore.site_infos?.metadata?.google_maps_location" 
                     class="w-full h-full" 
                     v-html="mainstore.site_infos.metadata.google_maps_location">
                </div>
                <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div class="text-center">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <p class="text-gray-500">Map loading...</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right delay-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 animate-pulse delay-1500">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Business Hours</h4>
                  <p class="text-gray-600">When we're available</p>
                </div>
              </div>
              <div class="space-y-2 ml-14">
                <div class="flex justify-between">
                  <span class="text-gray-600">Monday - Friday</span>
                  <span class="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Saturday</span>
                  <span class="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Sunday</span>
                  <span class="font-medium text-gray-900">Closed</span>
                </div>
              </div>
            </div>

            <!-- Quick Contact CTA -->
            <div class="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white text-center animate-fade-in-right delay-400">
              <h4 class="text-xl font-bold mb-2">Need Immediate Assistance?</h4>
              <p class="text-pink-100 mb-4">Our team is here to help you find the perfect doll</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a :href="`mailto:${mainstore.site_infos?.metadata?.email}`" 
                   class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  Send Email
                </a>
                <a :href="`tel:${mainstore.site_infos?.metadata?.phone_number_1}`" 
                   class="bg-white text-pink-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Call Now
                </a>
              </div>
            </div>

            <!-- Contact Form CTA -->
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right delay-600">
              <div class="text-center">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Want to Send Us a Message?</h4>
                <p class="text-gray-600 mb-4">Fill out our contact form for detailed inquiries</p>
                <NuxtLink 
                  to="/contact"
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <span>Contact Form</span>
                </NuxtLink>
              </div>
            </div>
          </div>
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

// SEO Configuration
useHead({
  title: 'CuddleCraft Dolls - Premium Handcrafted Silicone Baby Dolls',
  meta: [
    // Basic SEO
    { name: 'description', content: 'Discover our premium handcrafted silicone baby dolls. Each doll is crafted with love and attention to detail, featuring lifelike features and premium materials. Shop our collections today.' },
    { name: 'keywords', content: 'silicone baby dolls, handcrafted dolls, premium dolls, lifelike dolls, baby dolls, collectible dolls, CuddleCraft' },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'CuddleCraft Dolls - Premium Handcrafted Silicone Baby Dolls' },
    { property: 'og:description', content: 'Discover our premium handcrafted silicone baby dolls. Each doll is crafted with love and attention to detail, featuring lifelike features and premium materials.' },
    { property: 'og:url', content: 'https://cuddlecraftdolls.com' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'CuddleCraft Dolls Logo' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CuddleCraft Dolls - Premium Handcrafted Silicone Baby Dolls' },
    { name: 'twitter:description', content: 'Discover our premium handcrafted silicone baby dolls. Each doll is crafted with love and attention to detail.' },
    { name: 'twitter:image', content: '/logo.jpeg' },
    { name: 'twitter:image:alt', content: 'CuddleCraft Dolls Logo' },
    
    // Additional Meta
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ec4899' },
    { name: 'msapplication-TileColor', content: '#ec4899' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'CuddleCraft Dolls' },
    
    // Canonical URL
    { rel: 'canonical', href: 'https://cuddlecraftdolls.com' }
  ],
  
  // Structured Data
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CuddleCraft Dolls',
        url: 'https://cuddlecraftdolls.com',
        logo: 'https://cuddlecraftdolls.com/logo.jpeg',
        description: 'Premium handcrafted silicone baby dolls crafted with love and attention to detail.',
        sameAs: [
          mainstore.site_infos?.metadata?.instagram,
          mainstore.site_infos?.metadata?.facebook
        ].filter(Boolean),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: mainstore.site_infos?.metadata?.phone_number_1,
          email: mainstore.site_infos?.metadata?.email,
          contactType: 'customer service'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: mainstore.site_infos?.metadata?.address?.line_1,
          addressLocality: mainstore.site_infos?.metadata?.address?.line_2,
          postalCode: mainstore.site_infos?.metadata?.address?.line_3
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'CuddleCraft Dolls',
        url: 'https://cuddlecraftdolls.com',
        description: 'Premium handcrafted silicone baby dolls',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://cuddlecraftdolls.com/dolls?search={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})
</script>

<style scoped>
/* Custom Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

/* Delay utilities */
.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-600 {
  animation-delay: 0.6s;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-1500 {
  animation-delay: 1.5s;
}

.delay-2000 {
  animation-delay: 2s;
}

.delay-3000 {
  animation-delay: 3s;
}
</style> 