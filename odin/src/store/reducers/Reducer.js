const initialState = {
  isApiDown: true,
  organizations: [],
  organization: null, 
  venueClients: [], 
  venueClientsOffset: 0
}

export const reducer = (state = initialState, action) => {
  let actionType = action.type
  switch(actionType) {
    case 'toggleApiStatus':
      return {
        ...state,
        isApiDown: false
      }
    case 'loadOrganizations': 
      return {
        ...state, 
        organizations: action.value
      }
    case 'loadOrganization':
      return {
        ...state, 
        organization: action.value
      }
    case 'loadVenueClients':
      return {
        ...state, 
        venueClients: state.venueClients.concat(action.value), 
        venueClientsOffset: state.venueClientsOffset + action.value.length
      }
    case 'unloadVenueClients':
      return {
        ...state,
        venueClients: [],
        venueClientsOffset: 0
      }
    default:
      return state
  }
}