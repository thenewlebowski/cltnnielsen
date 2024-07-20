import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
import type { Value } from 'vue3-calendar-heatmap'

interface Job {
  description: string
  position: string
  picture: string
  title: string
  tool: string
}

interface State {
  contributions: any[]
  jobs: Job[]
}

const store = defineStore('store', {
  state: (): State => {
    return {
      contributions: [],
      jobs: []
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
    },
    getJobs: async (state: State): Promise<Job[]> => {
      if (state.contributions.length <= 0) {
        await axios
          .get('https://api.cltnnielsen.com/experience')
          .then((res) => (state.jobs = res.data))
      }
      return state.jobs
    }
  }
})

const pinia = createPinia()

export { store, pinia }
