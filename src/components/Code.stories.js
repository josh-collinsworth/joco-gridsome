import Code from './Code.vue'

export default {
  title: 'Components/Code',
  components: { Code },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Code },
  template: `<Code :lang="lang">${args.default}</Code>`
})

const exampleCSS = `
#id .class {
  color: orange;
  margin: 2rem auto;
  padding: 14px;
}`

const exampleHTML = `
&lt;p class="highlight"&gt;
  Typographically, poise is made of white space.
&lt;/p&gt;`

const exampleJS = `
const myFunction = (a, b) => {
  return (a + b) > 0 ? a + b : 0;
}
`

const examplePHP = `
&lt;?php 
  $myName = "Josh";

  echo "Hi, my name is $myName.";
?>
`
const exampleMarkdown = `
# Heading

A section with some _italic_ and *bold* text.

- Bullet
- Another bullet
- A third bullet, of course
`

export const JS = Template.bind({})
JS.args = {
  lang: 'javascript',
  default: exampleJS
}

export const HTML = Template.bind({})
HTML.args = {
  lang: 'html',
  default: exampleHTML
}

export const CSS = Template.bind({})
CSS.args = {
  lang: 'css',
  default: exampleCSS
}

export const PHP = Template.bind({})
PHP.args = {
  lang: 'php',
  default: examplePHP
}

export const Markdown = Template.bind({})
Markdown.args = {
  lang: 'markdown',
  default: exampleMarkdown
}
