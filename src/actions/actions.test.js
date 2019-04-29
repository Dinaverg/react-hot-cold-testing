import * as actions from './actions'

describe('restart', () => {
  it('should return the action', () => {
    let action = actions.restart()
    expect(action.type).toEqual('RESTART')
  })
})

describe('makeGuess', () => {
  it('should return the action', () => {
    let action = actions.makeGuess(45)
    expect(action.type).toEqual('MAKE_GUESS')
    expect(action.value).toEqual(45)
  })
})

describe('aFeedback', () => {
  it('should return the action', () => {
    let action = actions.aFeedback('testing')
    expect(action.type).toEqual('FEEDBACK')
    expect(action.feedback).toEqual('testing')
  })
})

describe('anAuralStatus', () => {
  it('should return the action', () => {
    let action = actions.anAuralStatus('testing')
    expect(action.type).toEqual('AURAL_STATUS')
    expect(action.auralStatus).toEqual('testing')
  })
})