<template>
  <h1>This is member's page!</h1>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'auth',
  setup() {},
})
</script>
