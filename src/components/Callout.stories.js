import Callout from './Callout.vue'

export default {
  title: 'Components/Callout',
  component: Callout,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Callout },
  template: `<Callout><p>Hello!</p></Callout>`
})

export const CalloutStory = Template.bind({})

CalloutStory.args = {}
