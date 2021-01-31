import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ExternalLink from './ExternalLink'

describe('<ExternalLink>', () => {
  let component

  beforeEach(() => {
    component = mount(ExternalLink, {
      propsData: {
        to: 'http://google.com/'
      },
      slots: {
        default: `<p>Hello!</p>`
      }
    })
  })

  it('renders with all attributes', () => {    
    expect(component.attributes('href')).to.contain('https')
    expect(component.attributes('rel')).to.contain('noreferrer noopener')
    expect(component.attributes('target')).to.contain('_blank')
  })

  it('renders slot contents', () => {
    expect(component.text()).to.contain('Hello!')
  })
})