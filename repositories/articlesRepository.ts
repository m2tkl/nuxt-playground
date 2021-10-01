import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/articles'

export const ArticlesRepository = ($axios: NuxtAxiosInstance) => ({
  get() {
    return $axios.$get(`${resource}`)
  },
  postMessage() {
    return $axios.$get(`${resource}`)
  }
})
