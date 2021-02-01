import Code from '../components/Code'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('<Code>', () => {
  let component

  beforeEach(() => {
    component = mount(Code, {
      propsData: {
        lang: 'php'
      },
      slots: {
        default: `<p>Hello!</p>`
      }
    })
  })

  it('renders with proper language classes', () => {
    expect(component.find('.language-php').exists()).to.be.true
    expect(component.find('code.language-php').exists()).to.be.true
  })

  it('renders slot contents', () => {
    expect(component.text()).to.contain('Hello!')
  })
})
