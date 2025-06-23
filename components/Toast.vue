<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-50 space-y-4" data-toast-component>
      <TransitionGroup 
        name="toast" 
        tag="div" 
        class="space-y-4"
      >
        <div 
          v-for="toast in toasts" 
          :key="toast.id"
          class="relative max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300"
          :class="{
            'border-green-200': toast.type === 'success',
            'border-red-200': toast.type === 'error',
            'border-blue-200': toast.type === 'info',
            'border-yellow-200': toast.type === 'warning'
          }"
        >
          <!-- Progress Bar -->
          <div 
            class="absolute top-0 left-0 h-1 bg-gradient-to-r transition-all duration-300 ease-linear"
            :class="{
              'from-green-400 to-green-600': toast.type === 'success',
              'from-red-400 to-red-600': toast.type === 'error',
              'from-blue-400 to-blue-600': toast.type === 'info',
              'from-yellow-400 to-yellow-600': toast.type === 'warning'
            }"
            :style="{ width: `${toast.progress}%` }"
          ></div>

          <!-- Toast Content -->
          <div class="p-4">
            <div class="flex items-start space-x-3">
              <!-- Icon -->
              <div 
                class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                :class="{
                  'bg-green-100 text-green-600': toast.type === 'success',
                  'bg-red-100 text-red-600': toast.type === 'error',
                  'bg-blue-100 text-blue-600': toast.type === 'info',
                  'bg-yellow-100 text-yellow-600': toast.type === 'warning'
                }"
              >
                <svg v-if="toast.type === 'success'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <svg v-else-if="toast.type === 'error'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                <svg v-else-if="toast.type === 'info'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                <svg v-else-if="toast.type === 'warning'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>

              <!-- Text Content -->
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">
                  {{ toast.title }}
                </p>
                <p v-if="toast.message" class="text-sm text-gray-600 mt-1">
                  {{ toast.message }}
                </p>
              </div>

              <!-- Close Button -->
              <button 
                @click="removeToast(toast.id)"
                class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
const toasts = ref([])
let nextId = 1

// Add toast function
function addToast(toast) {
  const id = nextId++
  const newToast = {
    id,
    type: toast.type || 'info',
    title: toast.title,
    message: toast.message,
    duration: toast.duration || 5000,
    progress: 100
  }
  
  toasts.value.push(newToast)
  
  // Start progress bar
  const startTime = Date.now()
  const endTime = startTime + newToast.duration
  
  const progressInterval = setInterval(() => {
    const now = Date.now()
    const remaining = endTime - now
    const progress = Math.max(0, (remaining / newToast.duration) * 100)
    
    const toastIndex = toasts.value.findIndex(t => t.id === id)
    if (toastIndex !== -1) {
      toasts.value[toastIndex].progress = progress
    }
    
    if (remaining <= 0) {
      clearInterval(progressInterval)
      removeToast(id)
    }
  }, 10)
  
  return id
}

// Remove toast function
function removeToast(id) {
  const index = toasts.value.findIndex(toast => toast.id === id)
  if (index !== -1) {
    toasts.value.splice(index, 1)
  }
}

// Expose functions
defineExpose({
  addToast,
  removeToast
})

// Provide toast functions globally
provide('toast', {
  addToast,
  removeToast
})

// Make toast available globally
if (process.client) {
  window.$toast = {
    addToast,
    removeToast
  }
}
</script>

<style scoped>
/* Toast Animations */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style> 