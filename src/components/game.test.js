import React from 'react'
import {shallow, mount} from 'enzyme'

import {Game} from './game'
import {restart, makeGuess, anAuralStatus} from '../actions/actions'

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game guesses={[]} />) 
  })

  it('can dispatch a restart', () => {
    let dispatch = jest.fn()
    let wrapper = shallow(<Game guesses={[]} dispatch={dispatch}/>)
    wrapper.instance().restartGame()
    expect(dispatch).toHaveBeenCalledWith(restart())  
  })

  it('can dispatch a guess', () => {
    let dispatch = jest.fn()
    let wrapper = shallow(<Game guesses={[]} dispatch={dispatch}/>)
    wrapper.instance().makeGuess(45)
    expect(dispatch).toHaveBeenCalledWith(makeGuess(45))  
  })
})