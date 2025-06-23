export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: {
        addToast(toast) {
          if (process.client && window.$toast) {
            return window.$toast.addToast(toast)
          }
        },
        removeToast(id) {
          if (process.client && window.$toast) {
            window.$toast.removeToast(id)
          }
        }
      }
    }
  }
}) 