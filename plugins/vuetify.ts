import { Framework } from 'vuetify/types'

declare module '@nuxt/types' {
  interface Context {
    $vuetify: Framework
  }
}
