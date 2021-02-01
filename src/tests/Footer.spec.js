import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Footer from '../components/Footer'

describe('<Footer>', () => {

  let component

  beforeEach(() => {
    component = shallowMount(Footer)
  })

  it('renders properly', () => {
    expect(component.exists()).to.be.true
  })

  it('displays the current year', () => {
    expect(component.find('.fine-print').text()).to.contain( new Date().getFullYear() )
  })
})
