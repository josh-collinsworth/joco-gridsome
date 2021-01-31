import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Highlight from './Highlight'

describe('<Highlight>', () => {

  it('renders properly', () => {
    const text = '<span>Hello!</span>'
    
    const component = mount(Highlight, {
      slots: {
        default: text
      }
    })
    
    expect(component.element.classList.contains('highlight')).to.be.true
    expect(component.text()).to.equal('Hello!')
  })
})