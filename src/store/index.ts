import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
import type { Value } from 'vue3-calendar-heatmap'

interface State {
  contributions: any[]
}

const store = defineStore('store', {
  state: (): State => {
    return {
      contributions: []
    }
  },
  getters: {
    getContributions: async (state): Promise<Value[]> => {
      if (state.contributions.length <= 0) {
        await axios
          .get('https://github-contributions-api.jogruber.de/v4/thenewlebowski')
          .then((res) => (state.contributions = res.data.contributions))
      }
      return state.contributions
    }
  }
})

const pinia = createPinia()

export { store, pinia }
