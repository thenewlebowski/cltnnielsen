import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
import type { Value } from 'vue3-calendar-heatmap'
import { getApp } from 'firebase/app'
import { collection, getDocs, getFirestore, initializeFirestore } from 'firebase/firestore/lite'

interface Job {
  description: string
  position: string
  picture: string
  title: string
  tool: string
}

interface State {
  contributions: Value[]
  expertise: string[]
  jobs: Job[]
}

const store = defineStore('store', {
  state: (): State => {
    return {
      contributions: [],
      expertise: [],
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
    getExpertise: async (state): Promise<string[]> => {
      if (state.contributions.length <= 0) {
        const db = getFirestore(getApp(), 'cltnnielsen-api')
        const expertise = await getDocs(collection(db, 'expertise'))
        state.expertise = expertise.docs.map((doc) => doc.data().lang)
      }
      return state.expertise
    },
    getJobs: async (state: State): Promise<Job[]> => {
      if (state.contributions.length <= 0) {
        const db = getFirestore(getApp(), 'cltnnielsen-api')
        const experience = await getDocs(collection(db, 'experience'))
        state.jobs = experience.docs.map((doc) => {
          const data = doc.data()
          return {
            description: data.description,
            position: data.position,
            picture: data.picture,
            title: data.title,
            tool: data.tool
          }
        })
      }
      return state.jobs
    }
  }
})

const pinia = createPinia()

export { store, pinia }
