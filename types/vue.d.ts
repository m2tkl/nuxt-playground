import {
  Repositories,
} from "~/factories/apiRepositoryFactory";


declare module '@nuxt/types' {
  interface NuxtAppOptions {
    readonly $repositories: <K extends keyof Repositories>(key: K) => ReturnType<Repositories[K]>
  }
}
