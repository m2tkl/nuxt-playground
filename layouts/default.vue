<template>
  <v-app dark>
      <!-- :miniVariant="miniVariant" -->
    <navigation-drawer
      v-model="drawer"
      :items="items"
      :clipped="clipped"
      :miniVariant="miniVariant"
    ></navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer inset app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default defineComponent({
  components: {
    NavigationDrawer,
  },
  setup() {
    const clipped = ref(true)
    const drawer = ref(true)
    const miniVariant = ref(false)
    const fixed = ref(false)
    const right = ref(true)
    const rightDrawer = ref(false)
    const title = 'Vuetify.js'
    const items = [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/',
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire',
      },
    ]
    return {
      clipped,
      drawer,
      miniVariant,
      fixed,
      right,
      rightDrawer,
      title,
      items,
    }
  },
})
</script>
