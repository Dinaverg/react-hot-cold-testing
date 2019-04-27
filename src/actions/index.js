export let RESTART = 'RESTART'
export let restart = () => ({
  type: RESTART
}) 

export let MAKE_GUESS = 'MAKE_GUESS'
export let makeGuess = (value) => ({
  type: MAKE_GUESS,
  value
})

export let FEEDBACK = 'FEEDBACK'
export let aFeedback = (feedback) => ({
  type: FEEDBACK,
  feedback
})

export let AURAL_STATUS = 'AURAL_STATUS'
export let anAuralStatus = (auralStatus) => ({
  type: AURAL_STATUS,
  auralStatus
})