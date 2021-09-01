<template>
  <v-menu v-model="menu.isOn.value" bottom offset-y>
    <template v-slot:activator="{ attrs }">
      <v-btn
        v-bind="attrs"
        icon
        tile
        :ripple="false"
        :input-value="menu.isOn.value"
        @click="menu.toggle"
      >
        <v-icon>mdi-web</v-icon>
      </v-btn>
    </template>

    <v-card light>
      <v-divider></v-divider>

      <v-list dense style="padding: 0">
        <v-list-item-group dense>
          <v-list-item>
            <v-list-item-title> Japanese </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> English </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
    </v-card>
  </v-menu>
</template>


<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useFlagState from '@/composables/flagState'

export default defineComponent({
  setup() {
    const menu = useFlagState(false)
    return {
      menu
    }
  },
})
</script>
