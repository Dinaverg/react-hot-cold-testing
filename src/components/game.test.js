import React from 'react'
import {shallow, mount} from 'enzyme'

import Game from './Game'

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />)
  })

  it('can start a new game', () => {
    let wrapper = shallow(<Game />)
    wrapper.setState({
      guesses: [1, 2, 3, 4],
      feedback: 'borf',
      correctAnswer: -1
    })
    wrapper.instance().restartGame()
    expect(wrapper.state('guesses')).toEqual([])
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0)
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100)
  })

  it('Can make guesses', () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    });

    wrapper.instance().makeGuess(25);
    expect(wrapper.state('guesses')).toEqual([25]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(60);
    expect(wrapper.state('guesses')).toEqual([25, 60]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(80);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(95);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(100);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });
})