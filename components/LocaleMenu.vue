<template>
  <v-menu bottom offset-y open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        tile
        dark
        :ripple="false"
        v-bind="attrs"
        v-on="on"
        active-class="red--text"
      >
        <v-icon>mdi-translate</v-icon>
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

export default defineComponent({
  setup() {},
})
</script>
