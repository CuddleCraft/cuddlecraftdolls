<template>
  <nav class="bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-lg border-b border-pink-100 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo and Brand -->
        <div class="flex items-center space-x-8">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="relative">
              <img class="h-14 w-14 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105" 
                   src="/logo.jpeg" alt="CuddleCraft Dolls Logo">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                CuddleCraft
              </h1>
              <p class="text-xs text-gray-500 font-medium">Dolls</p>
            </div>
          </NuxtLink>
          
          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-1">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-pink-600 transition-all duration-200 group"
            >
              <span v-if="item.icon" v-html="item.icon" class="inline-block mr-2"></span>
              <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span class="relative z-10">{{ item.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side - Cart and Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Cart Icon -->
          <NuxtLink to="/cart" class="relative group">
            <div class="p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-200 shadow-sm hover:shadow-md">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
              <span class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">{{ mainstore.cartItemCount }}</span>
            </div>
          </NuxtLink>

          <!-- Mobile menu button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6 text-gray-600" 
              :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6 text-gray-600" 
              :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      class="lg:hidden bg-white border-t border-pink-100 shadow-lg" 
      :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
    >
      <div class="px-4 py-6 space-y-4">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.href"
          class="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200"
          @click="isMobileMenuOpen = false"
        >
          <span v-if="item.icon" v-html="item.icon" class="mr-3"></span>
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mainstore = useMainstore()
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Dolls', href: '/dolls' },
  { name: 'Collections', href: '/collections' },
  { name: 'About Us', href: '/about' },
  { name: 'Orders', href: '/orders' },
  { name: 'Contact Us', href: '/contact' },
]
</script> 