<template>
  <v-row>
    <v-col>
      <simple-form></simple-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SimpleForm from '@/components/SimpleForm.vue'

export default defineComponent({
  components: {
    SimpleForm
  },
  setup() {
  },
})
</script>
