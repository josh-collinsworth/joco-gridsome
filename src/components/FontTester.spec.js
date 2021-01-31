import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import FontTester from './FontTester'

describe('<FontTester>', () => {

  let component
  const fontName = 'Courier'

  beforeEach(() => {

    component = mount(FontTester, {
      propsData: {
        font: fontName,
        label: fontName
      }
    })
  })

  it('renders properly', () => {
    expect(component.find(`#${fontName}-size`).exists()).to.be.true
  })

  it('changes font size', async () => {
    const rangeInput = component.find(`#${fontName}-size`)

    // Does changing the value set the font size?
    await rangeInput.setValue('72')
    expect(component.find(`#${fontName}`).element.style.fontSize).to.equal('72px')

    await rangeInput.setValue('42')
    expect(component.find(`#${fontName}`).element.style.fontSize).to.equal('42px')
  })

  it('accepts bold prop, renders checkbox, and allows font weight to change with checkbox', async () => {
    await component.setProps({ bold: true })
    const checkbox = component.find(`#${fontName}-bold`)

    // Does it render the checkbox when the prop is passed?
    expect(checkbox.exists()).to.be.true

    // Does checking the box make the font bold?
    await checkbox.setChecked(true)
    expect(component.find(`#${fontName}`).element.style.fontWeight).to.equal('bold')

    // Does un-checking the box make the font normal?
    await checkbox.setChecked(false)
    expect(component.find(`#${fontName}`).element.style.fontWeight).to.equal('normal')
  })

  it('accepts italic prop, renders checkbox, and allows font weight to change with checkbox', async () => {
    await component.setProps({ italic: true })
    const checkbox = component.find(`#${fontName}-italic`)

    // Does it render the checkbox?
    expect(checkbox.exists()).to.be.true

    // Is the font italic when the box is checked?
    await checkbox.setChecked(true)    
    expect(component.find(`#${fontName}`).element.style.fontStyle).to.equal('italic')

    // Is the font normal when the box is unchecked?
    await checkbox.setChecked(false)
    expect(component.find(`#${fontName}`).element.style.fontStyle).to.equal('normal')
  })


  //TODO: test other props; test interactive features
})