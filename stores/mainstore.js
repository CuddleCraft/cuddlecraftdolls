import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainstore = defineStore('main', () => {
  // State
  const collections = ref([])
  const dolls = ref([])
  const site_infos = ref([])
  const reviews = ref([])
  const cart = ref([])

  // Computed
  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  })

  const cartItemCount = computed(() => {
    return cart.value.reduce((count, item) => {
      return count + item.quantity
    }, 0)
  })

  // Actions
  const addToCart = (doll) => {
    const existingItem = cart.value.find(item => item.id === doll.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.value.push({
        id: doll.id,
        slug: doll.slug,
        title: doll.title,
        price: doll.metadata.price || 0,
        image: doll.metadata.image_1?.imgix_url || '',
        quantity: 1
      })
    }
  }

  const removeFromCart = (dollId) => {
    const index = cart.value.findIndex(item => item.id === dollId)
    if (index > -1) {
      cart.value.splice(index, 1)
    }
  }

  const updateQuantity = (dollId, quantity) => {
    const item = cart.value.find(item => item.id === dollId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(dollId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  return {
    // State
    collections,
    dolls,
    site_infos,
    reviews,
    cart,
    
    // Computed
    cartTotal,
    cartItemCount,
    
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
})
