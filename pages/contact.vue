<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background with animated elements -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        <!-- Animated background elements -->
        <div class="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div class="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div class="space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg animate-fade-in-up">
            <span class="text-pink-600 text-sm font-medium">💌 Get in Touch</span>
          </div>

          <!-- Title -->
          <h1 class="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up delay-200">
            <span class="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Have questions about our dolls or want to place a custom order? 
            <span class="text-pink-600 font-semibold">We'd love to hear from you!</span>
          </p>

          <!-- Features -->
          <div class="flex flex-wrap justify-center gap-6 text-gray-600 animate-fade-in-up delay-600">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Quick Response</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>Expert Support</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-white relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 right-10 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="animate-fade-in-left">
            <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p class="text-gray-600">We'll get back to you within 24 hours</p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name and Email Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="group">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      v-model="form.name"
                      type="text" 
                      id="name" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300"
                      placeholder="Enter your full name"
                    >
                  </div>
                  <div class="group">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      id="email" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300"
                      placeholder="Enter your email"
                    >
                  </div>
                </div>

                <!-- Phone and Subject Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="group">
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      v-model="form.phone"
                      type="tel" 
                      id="phone" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300"
                      placeholder="Enter your phone number"
                    >
                  </div>
                  <div class="group">
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select 
                      v-model="form.subject"
                      id="subject" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="product-info">Product Information</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <!-- Message -->
                <div class="group">
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    v-model="form.message"
                    id="message" 
                    rows="6" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300 resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span v-if="!isSubmitting" class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                    Send Message
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8 animate-fade-in-right">
            <!-- Company Info -->
            <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
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
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
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
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
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
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
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

              <!-- Business Hours -->
              <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p class="text-lg text-gray-600">Visit us or get directions to our studio</p>
        </div>
        
        <div class="bg-white rounded-2xl overflow-hidden shadow-2xl">
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
      </div>
    </section>

    <!-- Back to Home -->
    <section class="py-16 bg-white">
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

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Submit form function
async function submitForm() {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! We\'ll get back to you soon.')
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Set page metadata
useHead({
  title: 'Contact Us - Get in Touch | CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { name: 'description', content: 'Contact CuddleCraft Dolls for questions about our premium silicone baby dolls, custom orders, or general inquiries. We\'re here to help you find your perfect companion.' },
    { name: 'keywords', content: 'contact CuddleCraft, doll inquiries, custom doll orders, silicone doll questions, CuddleCraft customer service' },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Contact Us - Get in Touch | CuddleCraft Dolls' },
    { property: 'og:description', content: 'Contact CuddleCraft Dolls for questions about our premium silicone baby dolls, custom orders, or general inquiries.' },
    { property: 'og:url', content: 'https://cuddlecraftdolls.com/contact' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Contact CuddleCraft Dolls' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Us - Get in Touch | CuddleCraft Dolls' },
    { name: 'twitter:description', content: 'Contact CuddleCraft Dolls for questions about our premium silicone baby dolls, custom orders, or general inquiries.' },
    { name: 'twitter:image', content: '/logo.jpeg' },
    { name: 'twitter:image:alt', content: 'Contact CuddleCraft Dolls' },
    
    // Canonical URL
    { rel: 'canonical', href: 'https://cuddlecraftdolls.com/contact' }
  ],
  
  // Structured Data
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact CuddleCraft Dolls',
        description: 'Get in touch with CuddleCraft Dolls for questions and support',
        url: 'https://cuddlecraftdolls.com/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'CuddleCraft Dolls',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: mainstore.site_infos?.metadata?.phone_number_1,
              contactType: 'customer service',
              availableLanguage: 'English'
            },
            {
              '@type': 'ContactPoint',
              email: mainstore.site_infos?.metadata?.email,
              contactType: 'customer service',
              availableLanguage: 'English'
            }
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: mainstore.site_infos?.metadata?.address?.line_1,
            addressLocality: mainstore.site_infos?.metadata?.address?.line_2,
            postalCode: mainstore.site_infos?.metadata?.address?.line_3
          }
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

.delay-400 {
  animation-delay: 0.4s;
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