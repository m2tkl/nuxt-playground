<template>
  <v-menu
    v-model="menu.isOn.value"
    bottom
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ attrs }">
      <v-btn
        v-bind="attrs"
        icon
        tile
        :ripple="false"
        :input-value="menu.isOn.value"
        @click="menu.toggle"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-card light>
      <v-card-title>
        <v-icon left> mdi-account </v-icon>
        <span class="text-h6 font-weight-light">Playground</span>
      </v-card-title>

      <v-divider></v-divider>

      <v-list dense style="padding: 0">
        <v-list-item dense>
          <v-list-item-action>
            <v-switch dense v-model="darkMode.isOn.value"> </v-switch>
          </v-list-item-action>
          <v-list-item-title> Enable Dark Mode </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, useContext, watch } from '@nuxtjs/composition-api'
import useFlagState from '@/composables/flagState'

export default defineComponent({
  setup() {
    const app = useContext()
    const menu = useFlagState(false)
    const darkMode = useFlagState(false)


    watch(
      darkMode.isOn,
      (newVal, oldVal) => {
        app.$vuetify.theme.dark = newVal
      },
      { immediate: true }
    )

    return {
      menu,
      darkMode,
    }
  },
})
</script>
