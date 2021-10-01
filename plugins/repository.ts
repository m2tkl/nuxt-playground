import { Inject, NuxtApp } from '@nuxt/types/app'
import {
  apiRepositoryFactory,
  Repositories,
} from '~/factories/apiRepositoryFactory'


export default ({ app }: { app: NuxtApp }, inject: Inject) => {
  const repositories = (name: keyof Repositories) => {
    return apiRepositoryFactory.get(name)(app.$axios)
  }

  inject('repositories', repositories)
}
