<template>
  <div>
    <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      :class="{
        horizontal: !vertical,
      }"
    >
      <base-radio
        :label="option.label"
        :value="option.value"
        :modelValue="value"
        :name="name"
        @update:value="$emit('update:value', $event)"
      />
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseRadio from './BaseRadio.vue'

export default defineComponent({
  components: { BaseRadio },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup() {
  },
})
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
