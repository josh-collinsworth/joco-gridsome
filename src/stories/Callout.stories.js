import CalloutComponent from '../components/Callout'

export default {
  title: 'Components/Callout',
  component: CalloutComponent,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CalloutComponent },
  template: `<CalloutComponent>Typographically, poise is made of white space.</CalloutComponent>`
})

export const Callout = Template.bind({})

Callout.args = {}
