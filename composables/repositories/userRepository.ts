import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/user'

export const UserRepository = ($axios: NuxtAxiosInstance) => ({
  getUser() {
    return $axios.$get(`${resource}`)
  },
  postUser() {
    return $axios.$get(`${resource}`)
  }
})
