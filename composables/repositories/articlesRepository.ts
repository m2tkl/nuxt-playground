import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/articles'

const defaultOptions = {}

export const ArticlesRepository = ($axios: NuxtAxiosInstance) => ({
  get(options: any = defaultOptions): Promise<Array<{ id: number, title: string, author: string }>> {
    return $axios.$get(`${resource}`, options)
  },
  postMessage(options: any = defaultOptions) {
    return $axios.$post(`${resource}`, options)
  }
})
