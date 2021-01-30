import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import FontTester from './FontTester'

describe('FontTester', () => {

  let component

  beforeEach(() => {
    component = mount(FontTester, {
      propsData: {
        font: 'Courier',
        label: 'Courier'
      }
    })
  })

  it('renders properly', () => {
    expect(component.find(`#Courier-size`).exists()).to.be.true
  })

  //TODO: test other props; test interactive features
})