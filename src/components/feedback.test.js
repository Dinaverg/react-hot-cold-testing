import React from 'react'
import {shallow, mount} from 'enzyme'

import Feedback from './feedback'

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />)
  })

  it('shows feedback', () => {
    let feedback = 'testing!'
    let wrapper = shallow(<Feedback feedback={feedback} />)
    expect(wrapper.contains(feedback)).toEqual(true)
  })
})