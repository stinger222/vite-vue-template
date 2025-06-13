import { createFetch } from '@vueuse/core'

export const useAppFetch = createFetch({
  baseUrl: import.meta.env.VITE_APP_API_BASE_URL,
  fetchOptions: {
    mode: 'cors',
  },
  options: {
    beforeFetch() {
      if (!import.meta.env.VITE_APP_API_BASE_URL) {
        console.error('⚠️ No such env variable: VITE_APP_API_BASE_URL!')
      }
    },
  },
})
