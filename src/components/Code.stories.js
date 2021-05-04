import Code from './Code.vue'

export default {
  title: 'Components/Code',
  components: { Code },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Code },
  slot: '',
  template: `<Code :lang="lang">${args.default}</Code>`
})

const exampleCSS = `
#id .class {
  color: orange;
  margin: 2rem auto;
  padding: 14px;
}`

const exampleJS = `
const myFunction = (a, b) => {
  return (a + b) > 0 ? a + b : 0;
}
`

export const JavaScript = Template.bind({})
JavaScript.args = {
  lang: 'javascript',
  default: exampleJS
}

export const CSS = Template.bind({})
CSS.args = {
  lang: 'css',
  default: exampleCSS
}
