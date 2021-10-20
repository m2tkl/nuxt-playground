import {
  Repositories,
} from "~/composables/factories/apiRepositoryFactory";

import {
  Process
} from "~/plugins/process";


declare module '@nuxt/types' {
  interface NuxtAppOptions {
    readonly $repositories: <K extends keyof Repositories>(key: K) => ReturnType<Repositories[K]>
  }
  interface NuxtAppOptions {
    readonly $process: Process
  }
}
