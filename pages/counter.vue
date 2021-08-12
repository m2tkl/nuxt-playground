<template>
  <v-row>
    <v-col>
      <h1>Hello</h1>
      <h2>{{ store.getters['counter/getCounter'] }}</h2>
      <v-btn v-on:click.stop="increment">
        hoge
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()
    const increment = () => {
      store.dispatch('counter/doIncrement')
    }
    return {
      store,
      increment,
    }
  },
})
</script>
