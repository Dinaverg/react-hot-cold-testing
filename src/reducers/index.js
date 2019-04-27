import * as actions from '../actions'

let initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

export let reducer = (state=initialState, action) => {
  if (action.type === actions.RESTART) {
    let newState = Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
    return newState
  } else if (action.type === actions.FEEDBACK) {
    let newState = Object.assign({}, state, {feedback: action.feedback})
    return newState
  } else if (action.type === actions.MAKE_GUESS) {
    let newState = Object.assign({}, state, {
      guesses: [...state.guesses, action.value]
    })
    return newState
  } else if (action.type === actions.AURAL_STATUS) {
    let newState = Object.assign({}, state, {auralStatus: action.auralStatus})
    return newState
  }
  return state
}