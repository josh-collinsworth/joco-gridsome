import HighlightComponent from '../components/Highlight'

export default {
  title: 'Components/Highlight',
  component: HighlightComponent,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighlightComponent },
  template: `<HighlightComponent>Typographically, poise is made of white space.</HighlightComponent>`
})

export const Highlight = Template.bind({})

Highlight.args = {}
