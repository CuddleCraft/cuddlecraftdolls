<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <!-- Background with animated elements -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        <!-- Animated background elements -->
        <div class="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div class="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-3000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg animate-fade-in-up">
            <span class="text-pink-600 text-sm font-medium">✨ Our Story</span>
          </div>

          <!-- Logo -->
          <div class="animate-fade-in-up delay-200">
            <img 
              v-if="mainstore.site_infos?.metadata?.logo?.imgix_url"
              :src="mainstore.site_infos.metadata.logo.imgix_url" 
              :alt="mainstore.site_infos?.metadata?.site_name || 'CuddleCraft Dolls'"
              class="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl animate-bounce-slow"
            >
            <div v-else class="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center animate-bounce-slow">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Title -->
          <h1 class="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up delay-400">
            <span class="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              About {{ mainstore.site_infos?.metadata?.site_name || 'CuddleCraft Dolls' }}
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-600">
            {{ mainstore.site_infos?.metadata?.site_description || 'Welcome to CuddleCraft Dolls, where lifelike artistry meets heartfelt connection.' }}
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center gap-8 text-gray-600 animate-fade-in-up delay-800">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Premium Quality</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Handcrafted</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Lifelike Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 bg-white relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 right-10 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Story Content -->
          <div class="animate-fade-in-left">
            <div class="space-y-6">
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Our Journey
              </div>
              
              <h2 class="text-4xl font-bold text-gray-900">
                Crafting Dreams with 
                <span class="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Love & Precision</span>
              </h2>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                At {{ mainstore.site_infos?.metadata?.site_name || 'CuddleCraft Dolls' }}, we believe that every doll tells a story. 
                Our journey began with a simple dream: to create the most lifelike, beautiful silicone dolls that bring joy, 
                comfort, and companionship to collectors and enthusiasts worldwide.
              </p>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                Each doll is meticulously handcrafted using premium silicone materials, ensuring not only stunning visual 
                appeal but also a soft, realistic touch that makes them feel truly special. Our artisans pour their hearts 
                into every detail, from the delicate facial features to the perfect proportions that capture the essence 
                of real infants.
              </p>

              <!-- Features Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Artistic Excellence</h3>
                  <p class="text-gray-600">Every doll is a masterpiece, crafted with artistic vision and technical precision.</p>
                </div>
                
                <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-pulse delay-1000">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Premium Materials</h3>
                  <p class="text-gray-600">We use only the finest silicone and materials for the most realistic feel.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Story Image -->
          <div class="animate-fade-in-right">
            <div class="relative">
              <div class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
                <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
                <p class="text-lg leading-relaxed">
                  To create the most beautiful, lifelike silicone dolls that bring joy, comfort, and companionship 
                  to collectors and enthusiasts worldwide, while maintaining the highest standards of quality and craftsmanship.
                </p>
              </div>
              
              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-pink-200 rounded-full animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-200 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-1/4 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Core 
            <span class="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            The principles that guide our craftsmanship and define our commitment to excellence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-300">
            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-bounce-slow">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Innovation</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              We constantly push the boundaries of what's possible, using cutting-edge techniques and materials 
              to create dolls that are more lifelike than ever before.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-400">
            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-bounce-slow delay-1000">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Quality</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Every doll undergoes rigorous quality control to ensure it meets our exacting standards. 
              We never compromise on quality, no matter the cost.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-500">
            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-bounce-slow delay-2000">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Community</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              We're proud to be part of a global community of collectors and enthusiasts who share our passion 
              for beautiful, lifelike dolls.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-16 bg-white relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 right-10 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Get in 
            <span class="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Ready to start your journey with {{ mainstore.site_infos?.metadata?.site_name || 'CuddleCraft Dolls' }}? 
            We'd love to hear from you!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Email -->
          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Email</h3>
            <a :href="`mailto:${mainstore.site_infos?.metadata?.email}`" 
               class="text-pink-600 hover:text-pink-700 transition-colors">
              {{ mainstore.site_infos?.metadata?.email || 'contact@cuddlecraftdolls.com' }}
            </a>
          </div>

          <!-- Phone -->
          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-400">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse delay-1000">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Phone</h3>
            <a :href="`tel:${mainstore.site_infos?.metadata?.phone_number_1}`" 
               class="text-pink-600 hover:text-pink-700 transition-colors">
              {{ mainstore.site_infos?.metadata?.phone_number_1 || '+1 (714) 582-3097' }}
            </a>
          </div>

          <!-- Address -->
          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-500">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse delay-2000">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Address</h3>
            <div class="text-gray-600 text-sm">
              <p>{{ mainstore.site_infos?.metadata?.address?.line_1 || '1423 Willow Creek Lane' }}</p>
              <p>{{ mainstore.site_infos?.metadata?.address?.line_2 || 'Springfield' }}</p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-600">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse delay-3000">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Follow Us</h3>
            <div class="flex justify-center space-x-3">
              <a v-if="mainstore.site_infos?.metadata?.instagram" 
                 :href="mainstore.site_infos.metadata.instagram" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a v-if="mainstore.site_infos?.metadata?.facebook" 
                 :href="mainstore.site_infos.metadata.facebook" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-4">Ready to Explore Our Collection?</h3>
            <p class="text-pink-100 mb-6 max-w-2xl mx-auto">
              Discover our handcrafted silicone dolls and find the perfect companion for your collection.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/dolls"
                class="bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                View Dolls
              </NuxtLink>
              <NuxtLink 
                to="/contact"
                class="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to Home -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <NuxtLink 
          to="/"
          class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Back to Home</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const mainstore = useMainstore()

// Set page metadata
useHead({
  title: 'About Us - Our Story & Mission | CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { name: 'description', content: 'Learn about CuddleCraft Dolls, our mission to create premium silicone baby dolls, and our commitment to quality craftsmanship. Discover our story and values.' },
    { name: 'keywords', content: 'about CuddleCraft, doll makers, silicone doll company, premium doll manufacturer, CuddleCraft story, doll craftsmanship' },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'About Us - Our Story & Mission | CuddleCraft Dolls' },
    { property: 'og:description', content: 'Learn about CuddleCraft Dolls, our mission to create premium silicone baby dolls, and our commitment to quality craftsmanship.' },
    { property: 'og:url', content: 'https://cuddlecraftdolls.com/about' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'About CuddleCraft Dolls' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About Us - Our Story & Mission | CuddleCraft Dolls' },
    { name: 'twitter:description', content: 'Learn about CuddleCraft Dolls, our mission to create premium silicone baby dolls, and our commitment to quality craftsmanship.' },
    { name: 'twitter:image', content: '/logo.jpeg' },
    { name: 'twitter:image:alt', content: 'About CuddleCraft Dolls' },
    
    // Canonical URL
    { rel: 'canonical', href: 'https://cuddlecraftdolls.com/about' }
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
        description: mainstore.site_infos?.metadata?.site_description || 'Premium handcrafted silicone baby dolls',
        foundingDate: '2024',
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
        },
        sameAs: [
          mainstore.site_infos?.metadata?.instagram,
          mainstore.site_infos?.metadata?.facebook
        ].filter(Boolean)
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

@keyframes bounce-slow {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
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

.delay-800 {
  animation-delay: 0.8s;
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