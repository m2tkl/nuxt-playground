<template>
  <!-- :mini-variant="miniVariant" -->
  <v-navigation-drawer
    v-model="drawer"
    :clipped="clipped"
    fixed
    permanent
    :expand-on-hover="expandOnHover"
    :key="expandOnHover"
    app
  >
    <v-list dense nav>
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider></v-divider>

    <template v-slot:append>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item @click="toggleDrawer()">
          <v-list-item-icon>
            <v-icon>
              mdi-{{ `chevron-${expandOnHover ? 'right' : 'left'}` }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="`${expandOnHover ? 'Expand' : 'Collapse'}`"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  watch,
} from '@nuxtjs/composition-api'

interface DrawerItem {
  icon: string
  title: string
  to: string
}

/**
 * Type check of drawer item
 * @param item Drawer item
 * @return validation result
 */
const isDrawerItem = (item: any): item is DrawerItem => {
  return (
    typeof item.icon === 'string' &&
    typeof item.title === 'string' &&
    typeof item.to === 'string'
  )
}

export default defineComponent({
  props: {
    /**
     * The flag of drawer opening or closing.
     * @model
     */
    value: {
      type: Boolean,
      required: false,
      default: true,
    },
    /**
     * Drawer items
     */
    items: {
      type: Array as PropType<DrawerItem[]>,
      required: false,
      validator: (items: Array<any>) => {
        return items.every((item) => isDrawerItem(item))
      },
    },
    /**
     * Drawer options
     * https://vuetifyjs.com/ja/api/v-navigation-drawer/
     */
    miniVariant: {
      type: Boolean,
      required: false,
      default: false,
    },
    clipped: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props, { emit }) {
    const drawer = computed({
      get: () => props.value,
      set: (val) => emit('input', val),
    })
    const expandOnHover = ref(false)
    const toggleDrawer = () => {
      expandOnHover.value = !expandOnHover.value
    }
    return { drawer, toggleDrawer, expandOnHover }
  },
})
</script>
