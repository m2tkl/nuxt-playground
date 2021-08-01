<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

export interface DrawerItem {
  icon: string
  title: string
  to: string
}

const isDrawerItem = (item: any): item is DrawerItem => {
  return (
    typeof item.icon === 'string' &&
    typeof item.title === 'string' &&
    typeof item.to === 'string'
  )
}

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: false,
      default: true,
    },
    items: {
      type: Array as PropType<DrawerItem[]>,
      required: false,
      validator: (items: Array<any>) => {
        return items.every((item) => isDrawerItem(item))
      },
    },
    miniVariant: {
      type: Boolean,
      required: false,
      default: false,
    },
    clipped: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const drawer = computed({
      get: () => props.value,
      set: (val) => emit('input', val),
    })
    return { drawer }
  },
})
</script>
