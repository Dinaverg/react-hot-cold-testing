import {reducer} from './reducer'
import * as actions from '../actions/actions'

describe('Reducer', () => {
  it('should return the initial state', () => {
    let state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.auralStatus).toEqual('');
  })

  it('should return the current state', () => {
    let currentState = {};
    let state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  })

  it('Can restart', () => {
    let state = ({
      guesses: [1, 2, 3, 4],
      feedback: 'borf',
      correctAnswer: -1
    })
    state = reducer(state, actions.restart())

    expect(state.guesses).toEqual([])
    expect(state.feedback).toEqual('Make your guess!')
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
    expect(state.correctAnswer).toBeLessThanOrEqual(100)
  })

  it('Can make guesses', () => {
    let state = {
      guesses: [],
      feedback: '',
      correctAnswer: 100
    };

    state = reducer(state, actions.makeGuess(25));
    expect(state.guesses).toEqual([25]);
    
    state = reducer(state, actions.makeGuess(60));
    expect(state.guesses).toEqual([25, 60]);

    state = reducer(state, actions.makeGuess(80));
    expect(state.guesses).toEqual([25, 60, 80]);

    state = reducer(state, actions.makeGuess(95));
    expect(state.guesses).toEqual([25, 60, 80, 95]);

    state = reducer(state, actions.makeGuess(100));
    expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
  });
})