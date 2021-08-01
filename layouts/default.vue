<template>
  <v-app dark>
    <navigation-drawer
      v-model="drawer"
      :items="items"
      :miniVariant="miniVariant"
      :clipped="clipped"
    ></navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
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
    const clipped = ref(false)
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


