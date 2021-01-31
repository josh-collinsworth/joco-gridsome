import Callout from './Callout'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('<Callout>', () => {
  let component

  beforeEach(() => {
    component = mount(Callout, {
      slots: {
        default: '<p>Hello!</p>'
      }
    })
  })

  it('renders with the callout class', () => {
    expect(component.find('div.callout').exists()).to.be.true
  })

  it('renders slot contents', () => {
    expect(component.text()).to.contain('Hello!')
  })
})