import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import HamburgerButton from '../components/HamburgerButton'

describe('<HamburgerButton>', () => {
  let component = mount(HamburgerButton, {
    propsData: {
      menuOpen: false
    }
  })

  it('renders properly and changes display based on state', async () => {
    const btn = component.find('#hamburger')

    expect(btn.attributes('aria-pressed')).to.be.undefined
    expect(btn.text()).to.contain('Open')

    await component.setProps({ menuOpen: true })

    expect(btn.attributes('aria-pressed')).to.equal('true')
    expect(btn.text()).to.contain('Close')
  })

  it('emits the toggleMenu event when clicked', () => {
    component.trigger('click')
    expect(component.emitted()).to.haveOwnProperty('toggleMenu')
  })
})
