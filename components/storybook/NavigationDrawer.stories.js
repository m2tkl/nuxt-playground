import NavigationDrawer from "../NavigationDrawer"

export default {
  title: 'Navigation Drawer',
  argTypes: {
    items: {
      control: {
        type: 'object'
      }
    }
  }
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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationDrawer },
  template: `
    <v-app>
      <navigation-drawer v-bind="$props"/>
    </v-app>
  `
})

export const Normal = Template.bind({})
Normal.args = {
  value: true,
  items: sampleDrawerItems
}

export const Mini = Template.bind({})
Mini.args = {
  value: true,
  items: sampleDrawerItems,
  miniVariant: true,
}
