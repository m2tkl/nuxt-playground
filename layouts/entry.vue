<template>
  <v-app>
    <v-main>
      <v-app-bar fixed app dense flat>
        <v-toolbar-title v-text="title" />

        <v-spacer></v-spacer>

        <locale-menu></locale-menu>
        <account-menu></account-menu>
      </v-app-bar>

      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const title = 'Nuxt-Playground'
    const { app } = useContext()

    return {
      title,
    }
  },
})
</script>
