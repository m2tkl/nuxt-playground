import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/articles'

export const ArticlesRepository = ($axios: NuxtAxiosInstance) => ({
  get(): Promise<Array<{ id: number, title: string, author: string }>> {
    return $axios.$get(`${resource}`)
  },
  postMessage() {
    return $axios.$get(`${resource}`)
  }
})
