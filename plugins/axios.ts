import { NuxtApp } from '@nuxt/types/app'

const BASE_URL = 'http://localhost:3001'

export default ({ app }: { app: NuxtApp }) => {
  app.$axios.setBaseURL(BASE_URL)

  app.$axios.onRequest((config) => {
    console.log(config)
  })

  app.$axios.onResponse((config) => {
    console.log(config)
  })

  app.$axios.onError((e) => {
    if (app.$axios.isCancel(e)) {
      return;
    }
    console.log(e)
  })
}
