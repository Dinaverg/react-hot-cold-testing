import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessList from './guess-list'

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />)
  })

  it('shows a list of guesses', () => {
    let values = [45, 70, 25, 30, 28]
    let wrapper = shallow(<GuessList guesses={values} />)
    let list = wrapper.find('li')
    expect(list.length).toEqual(values.length)
    values.forEach((value, index) => {
      expect(list.at(index).text()).toEqual(value.toString())
    })
  })
})