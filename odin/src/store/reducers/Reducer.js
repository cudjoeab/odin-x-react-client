const initialState = {
  isApiDown: true
}

export const reducer = (state = initialState, action) => {
  let actionType = action.type
  switch(actionType) {
    case 'toggleApiStatus':
      return {
        ...state,
        isApiDown: false
      }
    default:
      return state
  }
}