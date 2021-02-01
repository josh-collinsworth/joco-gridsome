import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import DarkModeToggle from '../components/settings/DarkModeToggle'

describe('<DarkModeToggle>', () => {
  let component

  beforeEach(() => {
    component = mount(DarkModeToggle, {
      propsData: {
        settingsOpen: false
      }
    })
  })

  it('emits toggle from light to dark', () => {
    component.trigger('click')
    expect(component.emitted()).to.haveOwnProperty('prefersDarkMode')
  })

  it('emits toggle from dark to light', async () => {
    await component.setData({ darkMode: true })

    component.trigger('click')
    expect(component.emitted()).to.haveOwnProperty('prefersLightMode')
  })
})
