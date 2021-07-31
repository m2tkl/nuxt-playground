import NavigationDrawer from "../NavigationDrawer"

export default {
  title: 'Navigation Drawer'
}

const sampleDrawerItems = [
  {
    icon: 'mdi-apps',
    title: 'Welcome',
    to: '/',
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'Inspire',
    to: '/inspire',
  },
]

export const normal = () => ({
  components: { NavigationDrawer },
  template: `
  <v-app>
    <NavigationDrawer
      :isOpened="drawer"
      :items="items"
    ></NavigationDrawer>
  </v-app>
  `,
  props: {
    drawer: {
      default: true
    },
    items: {
      default: sampleDrawerItems
    }
  }
})
