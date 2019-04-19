import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessCount from './guess-count'

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />)
  })

  it('shows the count', () => {
    let value = 15
    let wrapper = shallow(<GuessCount guessCount={value} />)
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`)
  })
})