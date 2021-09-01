<template>
  <v-app>
    <navigation-drawer
      v-model="drawer"
      :items="items"
      :clipped="clipped"
      :miniVariant="miniVariant"
    ></navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app dense flat>
      <v-toolbar-title v-text="title" />

      <v-spacer></v-spacer>

      <locale-menu></locale-menu>
      <account-menu></account-menu>
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
import LocaleMenu from '@/components/LocaleMenu.vue'
import AccountMenu from '@/components/AccountMenu.vue'

export default defineComponent({
  components: {
    NavigationDrawer,
    LocaleMenu,
    AccountMenu,
  },
  setup() {
    const clipped = ref(false)
    const drawer = ref(true)
    const miniVariant = ref(false)
    const fixed = ref(false)
    const right = ref(true)
    const rightDrawer = ref(false)
    const menu = ref(false)
    const title = 'Playground'
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
      {
        icon: 'mdi-numeric',
        title: 'Counter',
        to: '/counter',
      },
      {
        icon: 'mdi-message-alert-outline',
        title: 'Modal',
        to: '/modal',
      },
      {
        icon: 'mdi-form-select',
        title: 'form',
        to: '/form',
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
      menu,
    }
  },
})
</script>
