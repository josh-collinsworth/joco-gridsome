import HeaderComponent from '../components/Header'

export default {
  title: 'Components/Header',
  component: HeaderComponent,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderComponent },
  template: `<HeaderComponent>Typographically, poise is made of white space.</HeaderComponent>`
})

export const Header = Template.bind({})

Header.args = {}
