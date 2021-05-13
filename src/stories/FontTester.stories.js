import FontTesterComponent from '../components/FontTester'

export default {
  title: 'Components/FontTester',
  component: FontTesterComponent,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FontTesterComponent },
  template: /* html */`
    <FontTesterComponent v-bind="$props"/>
  `
})

export const FontTester = Template.bind({})
FontTester.args = {
  font: 'Averta Std',
  placeholder: 'Averta Std',
  label: 'Averta Std',
  bold: true,
  italic: true,
}
