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

      <template v-slot:extension>
        <v-menu
          v-for="(navItem, i) in navItems"
          :key="i"
          open-on-hover
          offset-y
          :transition="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              style="text-transform: none"
              plain
              :ripple="false"
            >
              {{ navItem.title }}
            </v-btn>
          </template>
          <v-list outlined dense>
            <v-list-item-group>
              <v-list-item
                v-for="(item, index) in navItem.items"
                :key="index"
                :ripple="false"
                router
                :to="item.to"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer inset app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <overlay-in-progress />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import LocaleMenu from '@/components/LocaleMenu.vue'
import AccountMenu from '@/components/AccountMenu.vue'
import OverlayInProgress from '~/components/OverlayInProgress.vue'

export default defineComponent({
  middleware: 'auth',
  components: {
    NavigationDrawer,
    LocaleMenu,
    AccountMenu,
    OverlayInProgress,
  },
  setup() {
    const clipped = ref(true)
    const drawer = ref(true)
    const miniVariant = ref(false)
    const fixed = ref(false)
    const right = ref(true)
    const rightDrawer = ref(false)
    const menu = ref(false)
    const title = 'Playground'
    const items = [
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
        title: 'Form',
        to: '/form',
      },
      {
        icon: 'mdi-newspaper-variant-multiple',
        title: 'Articles',
        to: '/articles',
      },
    ]

    const componentsRoute = [
      {
        title: 'Login',
        to: '/components/login',
      },
      {
        title: 'Modal',
        to: '/components/modal',
      },
      {
        title: 'Inspire',
        to: '/components/inspire',
      },
    ]

    const appsRoute = [
      {
        title: 'Articles',
        to: '/apps/articles',
      },
      {
        title: 'Counter',
        to: '/apps/counter',
      },
      {
        title: 'Form',
        to: '/apps/form',
      },
    ]

    const navItems = [
      {
        title: 'Components',
        items: componentsRoute,
      },
      {
        title: 'Apps',
        items: appsRoute,
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
      componentsRoute,
      navItems,
    }
  },
})
</script>
