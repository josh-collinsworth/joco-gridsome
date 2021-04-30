import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ExternalLink from '../components/ExternalLink'

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
    expect(component.attributes('rel')).to.eq('noreferrer noopener')
  })

  it('renders slot contents', () => {
    expect(component.text()).to.eq('Hello!')
  })

  it('opens in a new tab with the external prop', async () => {
    await component.setProps({ openInNewTab: 'true' })
    expect(component.attributes('target')).to.eq('_blank')
  })
})
