import React from 'react'
import {shallow, mount} from 'enzyme'

import TopNav from './top-nav'

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />)
  })

  it('Calls onNewGame', () => {
    let callback = jest.fn()
    let wrapper = shallow(<TopNav onRestartGame={callback} />)
    let link = wrapper.find('.new')
    link.simulate('click', {
      preventDefault() {}
    })
    expect(callback).toHaveBeenCalled()
  })
})