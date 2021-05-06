
import FooterComponent from '../components/Footer'

export default {
  title: 'Components/Footer',
  component: FooterComponent,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterComponent },
  template: `<FooterComponent>Typographically, poise is made of white space.</FooterComponent>`
})

export const Footer = Template.bind({})

Footer.args = {}
