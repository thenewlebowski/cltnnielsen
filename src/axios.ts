import axios from 'axios'
import { type App } from 'vue'

export default {
  install: (app:  App<Element>) => {app.config.globalProperties.$axios = axios}
}