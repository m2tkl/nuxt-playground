<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <slot></slot>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const dialog = computed({
      get: () => props.value,
      set: (val) => emit('input', val),
    })
    return {
      dialog,
    }
  },
})
</script>
