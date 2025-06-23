<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <!-- Background with animated elements -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        <!-- Animated background elements -->
        <div class="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div class="space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg animate-fade-in-up">
            <span class="text-pink-600 text-sm font-medium">🛒 Shopping Cart</span>
          </div>

          <!-- Title -->
          <h1 class="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up delay-200">
            <span class="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Your Cart
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Review your selected dolls and proceed to checkout
          </p>
        </div>
      </div>
    </section>

    <!-- Cart Section -->
    <section class="py-16 bg-white relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 right-10 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Empty Cart State -->
        <div v-if="mainstore.cart.length === 0" class="text-center py-20 animate-fade-in-up">
          <div class="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Looks like you haven't added any dolls to your cart yet. Start shopping to find your perfect companion!
          </p>
          <NuxtLink 
            to="/dolls"
            class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            <span>Start Shopping</span>
          </NuxtLink>
        </div>

        <!-- Cart Items -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cart Items List -->
          <div class="lg:col-span-2 space-y-6">
            <div v-for="item in mainstore.cart" :key="item.id" 
                 class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
              <div class="flex items-center space-x-6">
                <!-- Product Image -->
                <div class="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    :src="getImage(item.image)" 
                    :alt="item.title" 
                    class="w-full h-full object-cover"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <!-- Product Info -->
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-2xl font-bold text-pink-600 mb-4">
                    ${{ item.price.toLocaleString() }}
                  </p>
                  
                  <!-- Quantity Controls -->
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                      <button 
                        @click="mainstore.updateQuantity(item.id, item.quantity - 1)"
                        class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                      </button>
                      <span class="w-12 text-center font-semibold text-gray-900">{{ item.quantity }}</span>
                      <button 
                        @click="mainstore.updateQuantity(item.id, item.quantity + 1)"
                        class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <button 
                      @click="mainstore.removeFromCart(item.id)"
                      class="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Item Total -->
                <div class="text-right">
                  <p class="text-lg font-bold text-gray-900">
                    ${{ (item.price * item.quantity).toLocaleString() }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="lg:col-span-1">
            <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg sticky top-6 animate-fade-in-up delay-300">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <!-- Summary Items -->
              <div class="space-y-4 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Items ({{ mainstore.cartItemCount }})</span>
                  <span class="font-semibold text-gray-900">${{ mainstore.cartTotal.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Shipping</span>
                  <span class="font-semibold text-gray-900">Free</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Tax</span>
                  <span class="font-semibold text-gray-900">Calculated at checkout</span>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <div class="flex justify-between">
                    <span class="text-lg font-bold text-gray-900">Total</span>
                    <span class="text-2xl font-bold text-pink-600">${{ mainstore.cartTotal.toLocaleString() }}</span>
                  </div>
                </div>
              </div>

              <!-- Checkout Button -->
              <button 
                @click="showCheckoutModal = true"
                class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                  Proceed to Checkout
                </span>
              </button>

              <!-- Continue Shopping -->
              <div class="text-center mt-4">
                <NuxtLink 
                  to="/dolls"
                  class="text-pink-600 hover:text-pink-700 font-medium transition-colors"
                >
                  Continue Shopping
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Checkout Modal -->
    <div v-if="showCheckoutModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-gray-900">Checkout</h2>
            <button 
              @click="showCheckoutModal = false"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="p-6">
          <!-- Order Summary -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div class="space-y-3">
              <div v-for="item in mainstore.cart" :key="item.id" class="flex justify-between items-center">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-lg overflow-hidden">
                    <img :src="getImage(item.image)" :alt="item.title" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">{{ item.title }}</p>
                    <p class="text-sm text-gray-600">Qty: {{ item.quantity }}</p>
                  </div>
                </div>
                <p class="font-semibold text-gray-900">${{ (item.price * item.quantity).toLocaleString() }}</p>
              </div>
            </div>
            <div class="border-t border-gray-200 mt-4 pt-4">
              <div class="flex justify-between">
                <span class="text-lg font-bold text-gray-900">Total</span>
                <span class="text-xl font-bold text-pink-600">${{ mainstore.cartTotal.toLocaleString() }}</span>
              </div>
            </div>
          </div>

          <!-- Checkout Form -->
          <form @submit.prevent="submitOrder" class="space-y-6">
            <!-- Personal Information -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Personal Information</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input 
                    v-model="checkoutForm.firstName"
                    type="text" 
                    id="firstName" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input 
                    v-model="checkoutForm.lastName"
                    type="text" 
                    id="lastName" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  >
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  v-model="checkoutForm.email"
                  type="email" 
                  id="email" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                >
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  v-model="checkoutForm.phone"
                  type="tel" 
                  id="phone" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                >
              </div>
            </div>

            <!-- Shipping Address -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Shipping Address</h3>
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                <input 
                  v-model="checkoutForm.address"
                  type="text" 
                  id="address" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your street address"
                >
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="city" class="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input 
                    v-model="checkoutForm.city"
                    type="text" 
                    id="city" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your city"
                  >
                </div>
                <div>
                  <label for="state" class="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input 
                    v-model="checkoutForm.state"
                    type="text" 
                    id="state" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your state"
                  >
                </div>
                <div>
                  <label for="zipCode" class="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input 
                    v-model="checkoutForm.zipCode"
                    type="text" 
                    id="zipCode" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter ZIP code"
                  >
                </div>
              </div>
            </div>

            <!-- Additional Notes -->
            <div>
              <label for="notes" class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea 
                v-model="checkoutForm.notes"
                id="notes" 
                rows="3"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Any special instructions or notes..."
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
                Place Order
              </span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Order...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const mainstore = useMainstore()

// Modal state
const showCheckoutModal = ref(false)

// Form data
const checkoutForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  notes: ''
})

const isSubmitting = ref(false)

// Helper function for image optimization
function getImage(URL) {
  return `${URL}?w=200&auto=format,compression`
}

// Submit order function
async function submitOrder() {
  isSubmitting.value = true
  
  try {
    // Prepare order data
    const orderData = {
      customer: {
        firstName: checkoutForm.value.firstName,
        lastName: checkoutForm.value.lastName,
        email: checkoutForm.value.email,
        phone: checkoutForm.value.phone,
        address: {
          street: checkoutForm.value.address,
          city: checkoutForm.value.city,
          state: checkoutForm.value.state,
          zipCode: checkoutForm.value.zipCode
        }
      },
      order: {
        items: mainstore.cart,
        total: mainstore.cartTotal,
        itemCount: mainstore.cartItemCount,
        notes: checkoutForm.value.notes
      },
      orderDate: new Date().toISOString()
    }

    // Send email using EmailJS or similar service
    // For now, we'll simulate sending an email
    await sendOrderEmail(orderData)
    
    // Clear cart
    mainstore.clearCart()
    
    // Reset form
    checkoutForm.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      notes: ''
    }
    
    // Close modal
    showCheckoutModal.value = false
    
    // Show success message
    alert('Thank you for your order! We\'ll contact you soon to confirm your purchase.')
    
  } catch (error) {
    console.error('Error submitting order:', error)
    alert('Sorry, there was an error processing your order. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Send order email function
async function sendOrderEmail(orderData) {
  // Simulate email sending
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Here you would integrate with EmailJS, SendGrid, or your preferred email service
  // Example with EmailJS:
  /*
  const templateParams = {
    to_email: 'contact@cuddlecraftdolls.com',
    from_name: `${orderData.customer.firstName} ${orderData.customer.lastName}`,
    from_email: orderData.customer.email,
    message: `
      New Order Received!
      
      Customer: ${orderData.customer.firstName} ${orderData.customer.lastName}
      Email: ${orderData.customer.email}
      Phone: ${orderData.customer.phone}
      
      Items:
      ${orderData.order.items.map(item => `- ${item.title} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}`).join('\n')}
      
      Total: $${orderData.order.total.toLocaleString()}
      
      Shipping Address:
      ${orderData.customer.address.street}
      ${orderData.customer.address.city}, ${orderData.customer.address.state} ${orderData.customer.address.zipCode}
      
      Notes: ${orderData.order.notes || 'None'}
    `
  }
  
  await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
  */
  
  console.log('Order email sent:', orderData)
}

// Set page metadata
useHead({
  title: 'Shopping Cart - Review Your Order | CuddleCraft Dolls',
  meta: [
    // Basic SEO
    { name: 'description', content: 'Review your shopping cart and checkout your selected premium silicone baby dolls from CuddleCraft Dolls. Secure checkout with free shipping available.' },
    { name: 'keywords', content: 'shopping cart, doll checkout, silicone doll order, CuddleCraft cart, doll purchase' },
    { name: 'author', content: 'CuddleCraft Dolls' },
    { name: 'robots', content: 'noindex, nofollow' }, // Cart pages should not be indexed
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Shopping Cart - Review Your Order | CuddleCraft Dolls' },
    { property: 'og:description', content: 'Review your shopping cart and checkout your selected premium silicone baby dolls.' },
    { property: 'og:url', content: 'https://cuddlecraftdolls.com/cart' },
    { property: 'og:site_name', content: 'CuddleCraft Dolls' },
    { property: 'og:image', content: '/logo.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'CuddleCraft Dolls Shopping Cart' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Shopping Cart - Review Your Order | CuddleCraft Dolls' },
    { name: 'twitter:description', content: 'Review your shopping cart and checkout your selected premium silicone baby dolls.' },
    { name: 'twitter:image', content: '/logo.jpeg' },
    { name: 'twitter:image:alt', content: 'CuddleCraft Dolls Shopping Cart' },
    
    // Canonical URL
    { rel: 'canonical', href: 'https://cuddlecraftdolls.com/cart' }
  ],
  
  // Structured Data
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Shopping Cart',
        description: 'Review and checkout your selected dolls',
        url: 'https://cuddlecraftdolls.com/cart',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://cuddlecraftdolls.com'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Shopping Cart',
              item: 'https://cuddlecraftdolls.com/cart'
            }
          ]
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

.delay-1000 {
  animation-delay: 1s;
}

.delay-2000 {
  animation-delay: 2s;
}
</style> 