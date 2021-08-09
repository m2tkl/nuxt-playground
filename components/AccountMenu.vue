<template>
  <v-menu bottom offset-y open-on-hover :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon tile dark v-bind="attrs" v-on="on" :ripple="false">
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
            <v-switch dense v-model="darkMode"> </v-switch>
          </v-list-item-action>
          <v-list-item-title> Enable Dark Mode </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
    </v-card>
  </v-menu>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const darkMode = ref(false)
    return {
      darkMode,
    }
  },
})
</script>

