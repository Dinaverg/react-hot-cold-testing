import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />)
  })

  it('Processes submissions', () => {
    let callback = jest.fn()
    let wrapper = mount(<GuessForm onMakeGuess={callback} />)
    let value = 10
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });
})