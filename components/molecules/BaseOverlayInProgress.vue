<template>
  <div v-show="$process.inProgress.value">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, useContext } from '@nuxtjs/composition-api'

const enableTabKey = (e: KeyboardEvent) => {
  if (e.code === 'Tab') {
    return true
  }
}

const disableTabKey = (e: KeyboardEvent) => {
  if (e.code === 'Tab') {
    return false
  }
}

export default defineComponent({
  setup() {
    const { app } = useContext()

    watch(app.$process.inProgress, () => {
      if (app.$process.inProgress.value) {
        window.onkeydown = disableTabKey
      } else {
        window.onkeydown = enableTabKey
      }
    })
  },
})
</script>
