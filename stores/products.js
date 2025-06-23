import { defineStore } from 'pinia'
import Cosmic from '@cosmicjs/sdk'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const cosmic = Cosmic()
        const bucket = cosmic.bucket({
          slug: process.env.COSMIC_BUCKET,
          read_key: process.env.COSMIC_READ_KEY
        })
        
        const data = await bucket.objects.find({
          type: 'products'
        })
        
        this.products = data.objects
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
}) 